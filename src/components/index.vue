<template>
  <div class="base">
    <img :src="bgurl" alt="" class="bgimg">
    <!--验证开始-->
    <!--<div id="captcha" :class="[modelName]" v-show="verification">-->
      <!--<div id="nc-container"></div>-->
    <!--</div>-->
    <!--验证结束-->
    <main class="type1" v-if="pagetype==1" ref="mainbody">
      <section><input class="mobile" type="number" v-model="ruleForm.account" placeholder="请输入您的手机号码"> </section>
      <section><input class="code" type="number" v-model="ruleForm.code" placeholder="请输入验证码"><p @click="getcode">{{timeData}}</p></section>
      <button @click="getcoupons">免费领取</button>
      <div class="explain" v-html="remark">
      </div>
    </main>
    <main v-else-if="pagetype==2" class="type2" ref="mainbody">
      <div class="box">
        <img src="../assets/img/close.png" alt="" @click="backto1">
        <h1>恭喜您成功领取</h1>
        <h1 v-for="item in couponname">{{item.ticketName}}</h1>
        <p>已放入您的账户</p>
        <!--<span @click="onCopy">分享给小伙伴一起领</span>-->
      </div>
    </main>
    <main v-else-if="pagetype==3" class="type2" ref="mainbody">
      <div class="box">
        <img src="../assets/img/close.png" alt="" @click="backto1">
        <h1>您已经领过券了</h1>
        <p>不能重复领取哦</p>
      </div>
    </main>
    <div class="commitscreen" v-show="loading"></div>
    <img src="../assets/img/loading3.gif" class="loading" alt="" v-show="loading">
  </div>
</template>
<script>
  import Vue from 'vue'
  import api from '../api/api'
  import axios from 'axios'
  import Clipboard from 'clipboard'
  import md5 from '../assets/js/md5.js'
export default {
  name: 'index',
  data(){
    return {
       sysWidth:'',timeData:'获取验证码',transid:'',id:'',isCode: true,//验证码按钮是否可点击
       timeInt: 60,bgurl:'',pagetype:1,message:'',copyurl:'', verification:false,loading:true,
      appKey:'FFFF00000000017A69F4',remark:'',couponname:[],iscopyTwice:false,
      modelName:'no-captcha',
      nc_token:null,
      lang:'cn',
      NC_Opt:null,
      ruleForm:{
        account:'',
        code:'',
        mobile:''
      }
    }
  },
  components:{
  },
  created(){
    this.sysWidth=document.body.clientWidth
    this.iscopyTwice=false
    this.UrlSearch()
  },

  mounted(){
    // 链接阿里云
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//g.alicdn.com/sd/nch5/index.js?t=2015052012';
    document.body.appendChild(s);
    if(this.storeId==6409){
      this.$refs.mainbody.style.top="1.9rem"
    }
  },
  methods: {
    backto1(){
      this.pagetype=1
      this.ruleForm.account=''
      this.ruleForm.code=''
      this.$parent.$el.scrollTop=0
    },
    generarte(){
      var nc = new noCaptcha(this.NC_Opt)
      nc.upLang('cn', {
        _startTEXT: "请按住滑块，拖动到最右边",
        _yesTEXT: "验证通过",
        _error300: "哎呀，出错了，点击<a href=\"javascript:__nc.reset()\">刷新</a>再来一次",
        _errorNetwork: "网络不给力，请<a href=\"javascript:__nc.reset()\">点击刷新</a>",
      });
    },
    countDowm: function (that) {
      var time = that.timeInt;

      if (time == 0) {
        that.timeInt=60;that. timeData='获取验证码';that.isCode=true
      } else {
        if (time == 60){
            that.timeInt=time ,
            that.timeData=time + 's'
        }

        setTimeout(function () {
            that.timeInt=time - 1,
            that.timeData=(time - 1) + 's'

          that.countDowm(that);
        }, 1000)
      }
    },
    dataProcessing (val) {
      this.message = this.message + ' ' + val
    },
    onCopy: function () {
      var val=this.copyurl
      var self=this
      if(!self.iscopyTwice){
        self.dataProcessing(val)
        self.$copyText(this.message).then(function (e) {
          self.iscopyTwice=true
          self.$message.success('链接已复制到剪贴板，快去分享给小伙伴吧。')
        }, function (e) {
          self.$message.error('Can not copy')
          console.log(e)
        })
      }else{
        self.$message.success('链接已复制到剪贴板，快去分享给小伙伴吧。')
      }

    },
    UrlSearch() {
      var name,value;
      var str=location.href; //取得整个地址栏
      this.copyurl=str
      var num=str.indexOf("?")
      str=str.substr(num+1); //取得所有参数   stringvar.substr(start [, length ]
      var arr=str.split("&"); //各个参数放到数组里
      console.log(arr)
      for(var i=0;i < arr.length;i++){
        num=arr[i].indexOf("=");
        if(num>0){
          name=arr[i].substring(0,num);
          value=arr[i].substr(num+1);
          this[name]=value;
        }
        if(this[name].indexOf('#')!=-1){
          var ss=this[name].indexOf('#')
          this[name]=this[name].substring(0,ss)
        }
      }
      this.getdata()
    } ,
    //验证
    verificationb(){
      var self = this;
      if(!self.ruleForm.account){
        self.$message.error('请填写手机号');
        return
      }
      if(!self.isCode){
        return
      }
      self.verification=true
      // var nc_token = [this.appKey, (new Date()).getTime(), Math.random()].join(':');
      var nc_token = ['FFFF00000000017A69F4', (new Date()).getTime(), Math.random()].join(':');
      var nc = NoCaptcha.init({
        renderTo: "#nc-container",
        appkey: "FFFF00000000017A69F4",
        scene: "nc_login",
        token: nc_token,
        customWidth: 300,
        trans:{"key1":"code0"},
        elementID: ["usernameID"],
        is_Opt: 0,
        language: 'cn',
        isEnabled: true,
        timeout: 3000,
        times:5,
        apimap: {},
        bannerHidden:false,
        initHidden:false,
        callback: function (data) {
          window.console && console.log(nc_token)
          window.console && console.log(data.csessionid)
          window.console && console.log(data.sig)
          self.getcode(data,nc_token,"nc_login")
          //将这三个参数在这里回调服务器的接口，进行服务器的验证
        },
        error: function (s) {
          console.log(s)
        }
      })
      NoCaptcha.setEnabled(true);
      nc.reset();//请务必确保这里调用一次reset()方法
      NoCaptcha.upLang('cn', {
        'LOADING': "加载中...",//加载
        'SLIDER_LABEL': "请向右滑动验证",//等待滑动
        'CHECK_Y': "验证通过",//通过
        'ERROR_TITLE': "非常抱歉，这出错了...",//拦截
        'CHECK_N': "验证未通过", //准备唤醒二次验证
        'OVERLAY_INFORM': "经检测你当前操作环境存在风险，请输入验证码",//二次验证
        'TIPS_TITLE': "验证码错误，请重新输入"//验证码输错时的提示
      })
    },
    // getcode(data,token,scene){
     getcode(){
      var that=this
       // verificationb函数打开的话此部分去掉
       if(!that.ruleForm.account){
         that.$message.error('请填写手机号');
         return
       }
       if(!that.isCode){
         return
       }
       var str='acedloxdnbcysyirgtui'
       var nowtime=new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ').replace('/-/g', '.')
       var content=that.storeId+that.ruleForm.account+nowtime+str
       console.log(content)
       var params={'mobile':that.ruleForm.account,'sign':md5.hexMD5(content),'created':nowtime,'storeId':that.storeId}
       that.loading=true
      // 结束
      fetch(api.baseUrl+'/webapi/v1/wxActivity/sendCode',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
          // sig:data.sig,
          // scene:scene,
          // csessionid:data.csessionid,
          // token:token,
        },
        body:JSON.stringify(params)
      }).then(r=>r.json()).then(d=>{
        console.log(d)
        that.loading=false
        if(d.code==200){
          that.isCode=false
          that.verification=false
          that.countDowm(that);
        }else{
          that.$message.error(d.message);
        }
      })
    },
    getdata(){
      fetch(api.baseUrl+'/webapi/v1/wxactivity/findByWxActivity/'+this.id+'/'+this.storeId,{
        method:'GET',
        headers:{

        },
      }).then(r=>r.json()).then(d=>{
        this.loading=false
        if(d.code==200){
// d.data.imageUrl='https://merchants.oss-cn-hangzhou.aliyuncs.com/409/store/41984b5bbe483df1e252fceb2530978e.png'
          this.bgurl=d.data.imageUrl
          this.remark=d.data.remark	;
           this.couponname=d.data.list;
          document.title = d.data.title
        }else if(d.code==1089){
          this.loading=false
          this.kongbai=true
          this.$alert(d.message, '提示', {
            confirmButtonText: '确定',
            center: true,
            customClass:'class',
            callback: action => {

            }
          });
        }else{
          this.$message.error(d.message);

        }

      })

    },
    getcoupons(){
      if(!this.ruleForm.account){
        this.$message.error('请填写手机号');
        return
      }
      if(!this.ruleForm.code){
        this.$message.error('请填写验证码');
        return
      }
      this.loading=true
      var params={'mobile':this.ruleForm.account,'code':this.ruleForm.code,'storeId':this.storeId,'activityId':this.id}
      fetch(api.baseUrl+'/webapi/v1/wxActivity/exchange',{
        method:'POST',
        headers:{
          'Content-Type':'application/json',
        },
        body:JSON.stringify(params)
      }).then(r=>r.json()).then(d=>{
        this.loading=false
        this.$parent.$el.scrollTop=0
        if(d.code==200){
          this.pagetype=2
        }else if(d.code==1341){
          this.pagetype=3

        }else{
          this.$message.error(d.message);

        }

      })
    },
    q(c,o){
      console.log(c)
    }
  },
}
</script>
<style lang="scss">
  .base{
    width: 100%;position: relative;height: auto;
    .bgimg{
      width: 100%;height: auto;
    }
    .commitscreen{
      position: fixed;width: 100%;height: 100%;background: rgba(0,0,0,0.5);z-index: 101;left:0;top:0;
    }
    .loading{
      position: fixed;top:0;left:0;bottom:0;right:0;margin:auto;z-index: 103;width: .25rem;
    }
    #captcha{
      position: fixed;width: 100%;height:100%;background: rgba(0,0,0,0.5);left:0;top:0;z-index: 100;padding-top: 4.7rem;
      #nc {
        width: 80%;height:1rem;margin:30% auto 0;
      }
    }
    main{
      padding:30px;position: absolute;top:30%;width: 100%;
    }
    main.type1{
      section{
        width:100%;margin-top: 20px;
        display: flex;justify-content: space-between;
        margin-bottom: .2rem;
        p{
          color:#fff;font-size: .14rem;line-height: .4rem;width: 40%;text-align: center;background: rgb(207,164,81);border-radius: .05rem;
        }
        .mobile{
          width: 100%;
        }
        .code{
          width:55%;
        }
        input{
          font-size: .14rem;outline: none;border:1px solid rgb(180,180,180);padding:.1rem;
          height:.4rem;line-height: .4rem;background: #fff;color:rgb(180,180,180);border-radius: .05rem;
        }
        input::placeholder{
          color:rgb(180,180,180);outline: none;
        }
      }
      button{
        font-size: .14rem;width: 100%;text-align: center;margin:.2rem auto 0;display: block;
        height:.4rem;line-height: .4rem;background: rgb(207,164,81);color:#fff;outline: none;border:none;cursor: pointer;border-radius: .05rem;
      }
      .explain{
        margin-top: .4rem;
        h1{
          font-size: .18rem;
        }
        p{
          font-size: .14rem;
        }
      }


    }
    main.type2{
      .box{
        width: 60%;margin:0 auto;height:auto;background: rgb(209,114,95);position: relative;border-radius: .1rem;padding: .3rem 0 .15rem;
        img{
          position: absolute;top:.1rem;right:.1rem;width: .2rem;height:.2rem
        }
        h1{
          font-size: .16rem;color:#fff;text-align: center;margin-bottom: .1rem;
        }
        p{
          text-align: center;color:#fff
        }
        span{
          background: rgb(239,175,167);border-radius: .05rem;display: block;margin:.1rem auto ;width: 70%;
          height: .4rem;line-height: .4rem;font-size: .14rem;text-align: center;color: rgb(170,116,107);
        }
      }
    }
  }

</style>


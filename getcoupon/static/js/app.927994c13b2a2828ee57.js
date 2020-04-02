webpackJsonp([1],{

/***/ "+cgv":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "+skl":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/***/ (function(module, exports) {

/* (ignored) */

/***/ }),

/***/ "3f40":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "4qOc":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "EDgR":
/***/ (function(module, exports) {

(function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
        var clientWidth = docEl.clientWidth;
        if (!clientWidth) return;
        if (clientWidth >= 320) {
            // 这里的640 取决于设计稿的宽度
            docEl.style.fontSize = '100px';
        } else {
            docEl.style.fontSize = 100 * (clientWidth / 320) + 'px';
        }
    };

    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);

/***/ }),

/***/ "M93x":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__ = __webpack_require__("xJD8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e789928c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__ = __webpack_require__("O575");
function injectStyle (ssrContext) {
  __webpack_require__("a3iV")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_App_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_e789928c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_App_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "MiD0":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__api_api__ = __webpack_require__("P9l9");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_axios__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard__ = __webpack_require__("TQvf");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_clipboard___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_clipboard__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_md5_js__ = __webpack_require__("r+z8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__assets_js_md5_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__assets_js_md5_js__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//






/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'index',
  data() {
    return {
      sysWidth: '', timeData: '获取验证码', transid: '', id: '', isCode: true, //验证码按钮是否可点击
      timeInt: 60, bgurl: '', pagetype: 1, message: '', copyurl: '', verification: false, loading: true,
      appKey: 'FFFF00000000017A69F4', remark: '', couponname: [], iscopyTwice: false,
      modelName: 'no-captcha',
      nc_token: null,
      lang: 'cn',
      NC_Opt: null,
      ruleForm: {
        account: '',
        code: '',
        mobile: ''
      }
    };
  },
  components: {},
  created() {
    this.sysWidth = document.body.clientWidth;
    this.iscopyTwice = false;
    this.UrlSearch();
  },

  mounted() {
    // 链接阿里云
    const s = document.createElement('script');
    s.type = 'text/javascript';
    s.src = '//g.alicdn.com/sd/nch5/index.js?t=2015052012';
    document.body.appendChild(s);
    if (this.storeId == 6409) {
      this.$refs.mainbody.style.top = "1.9rem";
    }
  },
  methods: {
    backto1() {
      this.pagetype = 1;
      this.ruleForm.account = '';
      this.ruleForm.code = '';
      this.$parent.$el.scrollTop = 0;
    },
    generarte() {
      var nc = new noCaptcha(this.NC_Opt);
      nc.upLang('cn', {
        _startTEXT: "请按住滑块，拖动到最右边",
        _yesTEXT: "验证通过",
        _error300: "哎呀，出错了，点击<a href=\"javascript:__nc.reset()\">刷新</a>再来一次",
        _errorNetwork: "网络不给力，请<a href=\"javascript:__nc.reset()\">点击刷新</a>"
      });
    },
    countDowm: function (that) {
      var time = that.timeInt;

      if (time == 0) {
        that.timeInt = 60;that.timeData = '获取验证码';that.isCode = true;
      } else {
        if (time == 60) {
          that.timeInt = time, that.timeData = time + 's';
        }

        setTimeout(function () {
          that.timeInt = time - 1, that.timeData = time - 1 + 's';

          that.countDowm(that);
        }, 1000);
      }
    },
    dataProcessing(val) {
      this.message = this.message + ' ' + val;
    },
    onCopy: function () {
      var val = this.copyurl;
      var self = this;
      if (!self.iscopyTwice) {
        self.dataProcessing(val);
        self.$copyText(this.message).then(function (e) {
          self.iscopyTwice = true;
          self.$message.success('链接已复制到剪贴板，快去分享给小伙伴吧。');
        }, function (e) {
          self.$message.error('Can not copy');
          console.log(e);
        });
      } else {
        self.$message.success('链接已复制到剪贴板，快去分享给小伙伴吧。');
      }
    },
    UrlSearch() {
      var name, value;
      var str = location.href; //取得整个地址栏
      this.copyurl = str;
      var num = str.indexOf("?");
      str = str.substr(num + 1); //取得所有参数   stringvar.substr(start [, length ]
      var arr = str.split("&"); //各个参数放到数组里
      console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        num = arr[i].indexOf("=");
        if (num > 0) {
          name = arr[i].substring(0, num);
          value = arr[i].substr(num + 1);
          this[name] = value;
        }
        if (this[name].indexOf('#') != -1) {
          var ss = this[name].indexOf('#');
          this[name] = this[name].substring(0, ss);
        }
      }
      this.getdata();
    },
    //验证
    verificationb() {
      var self = this;
      if (!self.ruleForm.account) {
        self.$message.error('请填写手机号');
        return;
      }
      if (!self.isCode) {
        return;
      }
      self.verification = true;
      // var nc_token = [this.appKey, (new Date()).getTime(), Math.random()].join(':');
      var nc_token = ['FFFF00000000017A69F4', new Date().getTime(), Math.random()].join(':');
      var nc = NoCaptcha.init({
        renderTo: "#nc-container",
        appkey: "FFFF00000000017A69F4",
        scene: "nc_login",
        token: nc_token,
        customWidth: 300,
        trans: { "key1": "code0" },
        elementID: ["usernameID"],
        is_Opt: 0,
        language: 'cn',
        isEnabled: true,
        timeout: 3000,
        times: 5,
        apimap: {},
        bannerHidden: false,
        initHidden: false,
        callback: function (data) {
          window.console && console.log(nc_token);
          window.console && console.log(data.csessionid);
          window.console && console.log(data.sig);
          self.getcode(data, nc_token, "nc_login");
          //将这三个参数在这里回调服务器的接口，进行服务器的验证
        },
        error: function (s) {
          console.log(s);
        }
      });
      NoCaptcha.setEnabled(true);
      nc.reset(); //请务必确保这里调用一次reset()方法
      NoCaptcha.upLang('cn', {
        'LOADING': "加载中...", //加载
        'SLIDER_LABEL': "请向右滑动验证", //等待滑动
        'CHECK_Y': "验证通过", //通过
        'ERROR_TITLE': "非常抱歉，这出错了...", //拦截
        'CHECK_N': "验证未通过", //准备唤醒二次验证
        'OVERLAY_INFORM': "经检测你当前操作环境存在风险，请输入验证码", //二次验证
        'TIPS_TITLE': "验证码错误，请重新输入" //验证码输错时的提示
      });
    },
    // getcode(data,token,scene){
    getcode() {
      var that = this;
      // verificationb函数打开的话此部分去掉
      if (!that.ruleForm.account) {
        that.$message.error('请填写手机号');
        return;
      }
      if (!that.isCode) {
        return;
      }
      var str = 'acedloxdnbcysyirgtui';
      var nowtime = new Date(+new Date() + 8 * 3600 * 1000).toJSON().substr(0, 19).replace('T', ' ').replace('/-/g', '.');
      var content = that.storeId + that.ruleForm.account + nowtime + str;
      console.log(content);
      var params = { 'mobile': that.ruleForm.account, 'sign': __WEBPACK_IMPORTED_MODULE_4__assets_js_md5_js___default.a.hexMD5(content), 'created': nowtime, 'storeId': that.storeId };
      that.loading = true;
      // 结束
      fetch(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* default */].baseUrl + '/webapi/v1/wxActivity/sendCode', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
          // sig:data.sig,
          // scene:scene,
          // csessionid:data.csessionid,
          // token:token,
        },
        body: JSON.stringify(params)
      }).then(r => r.json()).then(d => {
        console.log(d);
        that.loading = false;
        if (d.code == 200) {
          that.isCode = false;
          that.verification = false;
          that.countDowm(that);
        } else {
          that.$message.error(d.message);
        }
      });
    },
    getdata() {
      fetch(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* default */].baseUrl + '/webapi/v1/wxactivity/findByWxActivity/' + this.id + '/' + this.storeId, {
        method: 'GET',
        headers: {}
      }).then(r => r.json()).then(d => {
        this.loading = false;
        if (d.code == 200) {
          // d.data.imageUrl='https://merchants.oss-cn-hangzhou.aliyuncs.com/409/store/41984b5bbe483df1e252fceb2530978e.png'
          this.bgurl = d.data.imageUrl;
          this.remark = d.data.remark;
          this.couponname = d.data.list;
          document.title = d.data.title;
        } else if (d.code == 1089) {
          this.loading = false;
          this.kongbai = true;
          this.$alert(d.message, '提示', {
            confirmButtonText: '确定',
            center: true,
            customClass: 'class',
            callback: action => {}
          });
        } else {
          this.$message.error(d.message);
        }
      });
    },
    getcoupons() {
      if (!this.ruleForm.account) {
        this.$message.error('请填写手机号');
        return;
      }
      if (!this.ruleForm.code) {
        this.$message.error('请填写验证码');
        return;
      }
      this.loading = true;
      var params = { 'mobile': this.ruleForm.account, 'code': this.ruleForm.code, 'storeId': this.storeId, 'activityId': this.id };
      fetch(__WEBPACK_IMPORTED_MODULE_1__api_api__["a" /* default */].baseUrl + '/webapi/v1/wxActivity/exchange', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(params)
      }).then(r => r.json()).then(d => {
        this.loading = false;
        this.$parent.$el.scrollTop = 0;
        if (d.code == 200) {
          this.pagetype = 2;
        } else if (d.code == 1341) {
          this.pagetype = 3;
        } else {
          this.$message.error(d.message);
        }
      });
    },
    q(c, o) {
      console.log(c);
    }
  }
});

/***/ }),

/***/ "NHnr":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__("M93x");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__("YaEn");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui__ = __webpack_require__("zL8q");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_element_ui___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_element_ui__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__ = __webpack_require__("tvR6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_element_ui_lib_theme_chalk_index_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_iview__ = __webpack_require__("BTaQ");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_iview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_iview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__ = __webpack_require__("+skl");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_iview_dist_styles_iview_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_quill_editor__ = __webpack_require__("G0J2");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_vue_quill_editor___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_vue_quill_editor__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_core_css__ = __webpack_require__("3f40");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_core_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_quill_dist_quill_core_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_quill_dist_quill_snow_css__ = __webpack_require__("4qOc");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_quill_dist_quill_snow_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_quill_dist_quill_snow_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_quill_dist_quill_bubble_css__ = __webpack_require__("+cgv");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10_quill_dist_quill_bubble_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10_quill_dist_quill_bubble_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_v_distpicker__ = __webpack_require__("95YI");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11_v_distpicker___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_11_v_distpicker__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_js_rem_js__ = __webpack_require__("EDgR");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__assets_js_rem_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12__assets_js_rem_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_js_md5_js__ = __webpack_require__("r+z8");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__assets_js_md5_js___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_13__assets_js_md5_js__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_wechat_title__ = __webpack_require__("YqKu");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14_vue_wechat_title___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_14_vue_wechat_title__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_axios__ = __webpack_require__("mtWM");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_15_axios__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
















__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('v-distpicker', __WEBPACK_IMPORTED_MODULE_11_v_distpicker___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_element_ui___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_14_vue_wechat_title___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].http.options.emulateJSON = true;
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_5_iview___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_7_vue_quill_editor___default.a);
__WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */].beforeEach((to, from, next) => {
  /* 路由发生变化修改页面title */
  if (to.meta.title) {
    document.title = to.meta.title;
  }
  next();
});
/* eslint-disable no-new */
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
  el: '#app',
  render: h => h(__WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */]),
  router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
  template: '<App/>',
  components: { App: __WEBPACK_IMPORTED_MODULE_1__App__["a" /* default */] }
});

/***/ }),

/***/ "O575":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{attrs:{"id":"app"}},[_c('router-view',{directives:[{name:"wechat-title",rawName:"v-wechat-title",value:(_vm.$route.meta.title),expression:"$route.meta.title"}]})],1)}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "P9l9":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/**
 * 配置编译环境和线上环境之间的切换
 *
 * baseUrl: 域名地址
 * routerMode: 路由模式
 * baseImgPath: 图片存放地址
 *
 */
let baseUrl = 'https://api.v-ka.com';
// let baseUrl = 'https://api.vi-ni.com'; //打包测试地址
let accessToken = '';
let routerMode = 'history';
let baseImgPath = '';
let warm = '您长时间未操作，需要重新登录';
let obj = {};
let isweixn = 1;
/* harmony default export */ __webpack_exports__["a"] = ({
  baseUrl,
  routerMode,
  baseImgPath,
  accessToken,
  warm,
  obj,
  isweixn
});

/***/ }),

/***/ "T7Mm":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "YaEn":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__("7+uW");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__("/ocq");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_iscroll_view__ = __webpack_require__("j1M6");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_vue_iscroll_view___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_vue_iscroll_view__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iscroll__ = __webpack_require__("bHfy");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_iscroll___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_iscroll__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_clipboard2__ = __webpack_require__("wvfG");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vue_clipboard2___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_vue_clipboard2__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__components_index__ = __webpack_require__("dAjm");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_vue_resource__ = __webpack_require__("ORbq");









__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_2_vue_iscroll_view___default.a, __WEBPACK_IMPORTED_MODULE_3_iscroll___default.a);
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_4_vue_clipboard2___default.a);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{ path: '/', name: 'index', component: __WEBPACK_IMPORTED_MODULE_5__components_index__["a" /* default */]
  }]
}));

/***/ }),

/***/ "a3iV":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "dAjm":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__ = __webpack_require__("MiD0");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6074827c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__ = __webpack_require__("oUhb");
function injectStyle (ssrContext) {
  __webpack_require__("T7Mm")
}
var normalizeComponent = __webpack_require__("VU/8")
/* script */

/* template */

/* template functional */
  var __vue_template_functional__ = false
/* styles */
var __vue_styles__ = injectStyle
/* scopeId */
var __vue_scopeId__ = null
/* moduleIdentifier (server only) */
var __vue_module_identifier__ = null
var Component = normalizeComponent(
  __WEBPACK_IMPORTED_MODULE_0__babel_loader_node_modules_vue_loader_lib_selector_type_script_index_0_index_vue__["a" /* default */],
  __WEBPACK_IMPORTED_MODULE_1__node_modules_vue_loader_lib_template_compiler_index_id_data_v_6074827c_hasScoped_false_transformToRequire_video_src_source_src_img_src_image_xlink_href_buble_transforms_node_modules_vue_loader_lib_selector_type_template_index_0_index_vue__["a" /* default */],
  __vue_template_functional__,
  __vue_styles__,
  __vue_scopeId__,
  __vue_module_identifier__
)

/* harmony default export */ __webpack_exports__["a"] = (Component.exports);


/***/ }),

/***/ "du88":
/***/ (function(module, exports) {

module.exports = "data:image/gif;base64,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"

/***/ }),

/***/ "oUhb":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
var render = function () {var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;return _c('div',{staticClass:"base"},[_c('img',{staticClass:"bgimg",attrs:{"src":_vm.bgurl,"alt":""}}),_vm._v(" "),(_vm.pagetype==1)?_c('main',{ref:"mainbody",staticClass:"type1"},[_c('section',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ruleForm.account),expression:"ruleForm.account"}],staticClass:"mobile",attrs:{"type":"number","placeholder":"请输入您的手机号码"},domProps:{"value":(_vm.ruleForm.account)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.ruleForm, "account", $event.target.value)}}})]),_vm._v(" "),_c('section',[_c('input',{directives:[{name:"model",rawName:"v-model",value:(_vm.ruleForm.code),expression:"ruleForm.code"}],staticClass:"code",attrs:{"type":"number","placeholder":"请输入验证码"},domProps:{"value":(_vm.ruleForm.code)},on:{"input":function($event){if($event.target.composing){ return; }_vm.$set(_vm.ruleForm, "code", $event.target.value)}}}),_c('p',{on:{"click":_vm.getcode}},[_vm._v(_vm._s(_vm.timeData))])]),_vm._v(" "),_c('button',{on:{"click":_vm.getcoupons}},[_vm._v("免费领取")]),_vm._v(" "),_c('div',{staticClass:"explain",domProps:{"innerHTML":_vm._s(_vm.remark)}})]):(_vm.pagetype==2)?_c('main',{ref:"mainbody",staticClass:"type2"},[_c('div',{staticClass:"box"},[_c('img',{attrs:{"src":__webpack_require__("q6r7"),"alt":""},on:{"click":_vm.backto1}}),_vm._v(" "),_c('h1',[_vm._v("恭喜您成功领取")]),_vm._v(" "),_vm._l((_vm.couponname),function(item){return _c('h1',[_vm._v(_vm._s(item.ticketName))])}),_vm._v(" "),_c('p',[_vm._v("已放入您的账户")])],2)]):(_vm.pagetype==3)?_c('main',{ref:"mainbody",staticClass:"type2"},[_c('div',{staticClass:"box"},[_c('img',{attrs:{"src":__webpack_require__("q6r7"),"alt":""},on:{"click":_vm.backto1}}),_vm._v(" "),_c('h1',[_vm._v("您已经领过券了")]),_vm._v(" "),_c('p',[_vm._v("不能重复领取哦")])])]):_vm._e(),_vm._v(" "),_c('div',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"commitscreen"}),_vm._v(" "),_c('img',{directives:[{name:"show",rawName:"v-show",value:(_vm.loading),expression:"loading"}],staticClass:"loading",attrs:{"src":__webpack_require__("du88"),"alt":""}})])}
var staticRenderFns = []
var esExports = { render: render, staticRenderFns: staticRenderFns }
/* harmony default export */ __webpack_exports__["a"] = (esExports);

/***/ }),

/***/ "q6r7":
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFwAAABbCAIAAABxiHW3AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyNpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTQwIDc5LjE2MDQ1MSwgMjAxNy8wNS8wNi0wMTowODoyMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIChNYWNpbnRvc2gpIiB4bXBNTTpJbnN0YW5jZUlEPSJ4bXAuaWlkOjY1QTlDOUE0N0EwOTExRTk4MTk0ODBBNzM1N0FBMjNEIiB4bXBNTTpEb2N1bWVudElEPSJ4bXAuZGlkOjY1QTlDOUE1N0EwOTExRTk4MTk0ODBBNzM1N0FBMjNEIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5paWQ6NjVBMzM1N0Y3QTA5MTFFOTgxOTQ4MEE3MzU3QUEyM0QiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NjVBMzM1ODA3QTA5MTFFOTgxOTQ4MEE3MzU3QUEyM0QiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz57zGhUAAALlUlEQVR42uycCVfi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"

/***/ }),

/***/ "r+z8":
/***/ (function(module, exports) {

/*  
 * A JavaScript implementation of the RSA Data Security, Inc. MD5 Message  
 * Digest Algorithm, as defined in RFC 1321.  
 * Version 1.1 Copyright (C) Paul Johnston 1999 - 2002.  
 * Code also contributed by Greg Holt  
 * See http://pajhome.org.uk/site/legal.html for details.  
 */

/*  
 * Add integers, wrapping at 2^32. This uses 16-bit operations internally  
 * to work around bugs in some JS interpreters.  
 */
function safe_add(x, y) {
  var lsw = (x & 0xFFFF) + (y & 0xFFFF);
  var msw = (x >> 16) + (y >> 16) + (lsw >> 16);
  return msw << 16 | lsw & 0xFFFF;
}

/*  
 * Bitwise rotate a 32-bit number to the left.  
 */
function rol(num, cnt) {
  return num << cnt | num >>> 32 - cnt;
}

/*  
 * These functions implement the four basic operations the algorithm uses.  
 */
function cmn(q, a, b, x, s, t) {
  return safe_add(rol(safe_add(safe_add(a, q), safe_add(x, t)), s), b);
}
function ff(a, b, c, d, x, s, t) {
  return cmn(b & c | ~b & d, a, b, x, s, t);
}
function gg(a, b, c, d, x, s, t) {
  return cmn(b & d | c & ~d, a, b, x, s, t);
}
function hh(a, b, c, d, x, s, t) {
  return cmn(b ^ c ^ d, a, b, x, s, t);
}
function ii(a, b, c, d, x, s, t) {
  return cmn(c ^ (b | ~d), a, b, x, s, t);
}

/*  
 * Calculate the MD5 of an array of little-endian words, producing an array  
 * of little-endian words.  
 */
function coreMD5(x) {
  var a = 1732584193;
  var b = -271733879;
  var c = -1732584194;
  var d = 271733878;

  for (var i = 0; i < x.length; i += 16) {
    var olda = a;
    var oldb = b;
    var oldc = c;
    var oldd = d;

    a = ff(a, b, c, d, x[i + 0], 7, -680876936);
    d = ff(d, a, b, c, x[i + 1], 12, -389564586);
    c = ff(c, d, a, b, x[i + 2], 17, 606105819);
    b = ff(b, c, d, a, x[i + 3], 22, -1044525330);
    a = ff(a, b, c, d, x[i + 4], 7, -176418897);
    d = ff(d, a, b, c, x[i + 5], 12, 1200080426);
    c = ff(c, d, a, b, x[i + 6], 17, -1473231341);
    b = ff(b, c, d, a, x[i + 7], 22, -45705983);
    a = ff(a, b, c, d, x[i + 8], 7, 1770035416);
    d = ff(d, a, b, c, x[i + 9], 12, -1958414417);
    c = ff(c, d, a, b, x[i + 10], 17, -42063);
    b = ff(b, c, d, a, x[i + 11], 22, -1990404162);
    a = ff(a, b, c, d, x[i + 12], 7, 1804603682);
    d = ff(d, a, b, c, x[i + 13], 12, -40341101);
    c = ff(c, d, a, b, x[i + 14], 17, -1502002290);
    b = ff(b, c, d, a, x[i + 15], 22, 1236535329);

    a = gg(a, b, c, d, x[i + 1], 5, -165796510);
    d = gg(d, a, b, c, x[i + 6], 9, -1069501632);
    c = gg(c, d, a, b, x[i + 11], 14, 643717713);
    b = gg(b, c, d, a, x[i + 0], 20, -373897302);
    a = gg(a, b, c, d, x[i + 5], 5, -701558691);
    d = gg(d, a, b, c, x[i + 10], 9, 38016083);
    c = gg(c, d, a, b, x[i + 15], 14, -660478335);
    b = gg(b, c, d, a, x[i + 4], 20, -405537848);
    a = gg(a, b, c, d, x[i + 9], 5, 568446438);
    d = gg(d, a, b, c, x[i + 14], 9, -1019803690);
    c = gg(c, d, a, b, x[i + 3], 14, -187363961);
    b = gg(b, c, d, a, x[i + 8], 20, 1163531501);
    a = gg(a, b, c, d, x[i + 13], 5, -1444681467);
    d = gg(d, a, b, c, x[i + 2], 9, -51403784);
    c = gg(c, d, a, b, x[i + 7], 14, 1735328473);
    b = gg(b, c, d, a, x[i + 12], 20, -1926607734);

    a = hh(a, b, c, d, x[i + 5], 4, -378558);
    d = hh(d, a, b, c, x[i + 8], 11, -2022574463);
    c = hh(c, d, a, b, x[i + 11], 16, 1839030562);
    b = hh(b, c, d, a, x[i + 14], 23, -35309556);
    a = hh(a, b, c, d, x[i + 1], 4, -1530992060);
    d = hh(d, a, b, c, x[i + 4], 11, 1272893353);
    c = hh(c, d, a, b, x[i + 7], 16, -155497632);
    b = hh(b, c, d, a, x[i + 10], 23, -1094730640);
    a = hh(a, b, c, d, x[i + 13], 4, 681279174);
    d = hh(d, a, b, c, x[i + 0], 11, -358537222);
    c = hh(c, d, a, b, x[i + 3], 16, -722521979);
    b = hh(b, c, d, a, x[i + 6], 23, 76029189);
    a = hh(a, b, c, d, x[i + 9], 4, -640364487);
    d = hh(d, a, b, c, x[i + 12], 11, -421815835);
    c = hh(c, d, a, b, x[i + 15], 16, 530742520);
    b = hh(b, c, d, a, x[i + 2], 23, -995338651);

    a = ii(a, b, c, d, x[i + 0], 6, -198630844);
    d = ii(d, a, b, c, x[i + 7], 10, 1126891415);
    c = ii(c, d, a, b, x[i + 14], 15, -1416354905);
    b = ii(b, c, d, a, x[i + 5], 21, -57434055);
    a = ii(a, b, c, d, x[i + 12], 6, 1700485571);
    d = ii(d, a, b, c, x[i + 3], 10, -1894986606);
    c = ii(c, d, a, b, x[i + 10], 15, -1051523);
    b = ii(b, c, d, a, x[i + 1], 21, -2054922799);
    a = ii(a, b, c, d, x[i + 8], 6, 1873313359);
    d = ii(d, a, b, c, x[i + 15], 10, -30611744);
    c = ii(c, d, a, b, x[i + 6], 15, -1560198380);
    b = ii(b, c, d, a, x[i + 13], 21, 1309151649);
    a = ii(a, b, c, d, x[i + 4], 6, -145523070);
    d = ii(d, a, b, c, x[i + 11], 10, -1120210379);
    c = ii(c, d, a, b, x[i + 2], 15, 718787259);
    b = ii(b, c, d, a, x[i + 9], 21, -343485551);

    a = safe_add(a, olda);
    b = safe_add(b, oldb);
    c = safe_add(c, oldc);
    d = safe_add(d, oldd);
  }
  return [a, b, c, d];
}

/*  
 * Convert an array of little-endian words to a hex string.  
 */
function binl2hex(binarray) {
  var hex_tab = "0123456789abcdef";
  var str = "";
  for (var i = 0; i < binarray.length * 4; i++) {
    str += hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 + 4 & 0xF) + hex_tab.charAt(binarray[i >> 2] >> i % 4 * 8 & 0xF);
  }
  return str;
}

/*  
 * Convert an array of little-endian words to a base64 encoded string.  
 */
function binl2b64(binarray) {
  var tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var str = "";
  for (var i = 0; i < binarray.length * 32; i += 6) {
    str += tab.charAt(binarray[i >> 5] << i % 32 & 0x3F | binarray[i >> 5 + 1] >> 32 - i % 32 & 0x3F);
  }
  return str;
}

/*  
 * Convert an 8-bit character string to a sequence of 16-word blocks, stored  
 * as an array, and append appropriate padding for MD4/5 calculation.  
 * If any of the characters are >255, the high byte is silently ignored.  
 */
function str2binl(str) {
  var nblk = (str.length + 8 >> 6) + 1; // number of 16-word blocks    
  var blks = new Array(nblk * 16);
  for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
  for (var i = 0; i < str.length; i++) blks[i >> 2] |= (str.charCodeAt(i) & 0xFF) << i % 4 * 8;
  blks[i >> 2] |= 0x80 << i % 4 * 8;
  blks[nblk * 16 - 2] = str.length * 8;
  return blks;
}

/*  
 * Convert a wide-character string to a sequence of 16-word blocks, stored as  
 * an array, and append appropriate padding for MD4/5 calculation.  
 */
function strw2binl(str) {
  var nblk = (str.length + 4 >> 5) + 1; // number of 16-word blocks    
  var blks = new Array(nblk * 16);
  for (var i = 0; i < nblk * 16; i++) blks[i] = 0;
  for (var i = 0; i < str.length; i++) blks[i >> 1] |= str.charCodeAt(i) << i % 2 * 16;
  blks[i >> 1] |= 0x80 << i % 2 * 16;
  blks[nblk * 16 - 2] = str.length * 16;
  return blks;
}

/*  
 * External interface  
 */
function hexMD5(str) {
  return binl2hex(coreMD5(str2binl(str)));
}
function hexMD5w(str) {
  return binl2hex(coreMD5(strw2binl(str)));
}
function b64MD5(str) {
  return binl2b64(coreMD5(str2binl(str)));
}
function b64MD5w(str) {
  return binl2b64(coreMD5(strw2binl(str)));
}
/* Backward compatibility */
function calcMD5(str) {
  return binl2hex(coreMD5(str2binl(str)));
}

module.exports = {
  hexMD5: hexMD5
};

/***/ }),

/***/ "tvR6":
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ "xJD8":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["a"] = ({
  name: 'app'
});

/***/ })

},["NHnr"]);
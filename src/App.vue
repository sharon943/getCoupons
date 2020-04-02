<template>
  <div id="app">
    <router-view v-wechat-title="$route.meta.title"/>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@font-face {
  font-family: 'xh';
  src: url('./assets/font/sy.ttf');
}

*{
  margin: 0;
  padding: 0;
  text-decoration: none;
  box-sizing: border-box;
  font-size: .16rem;
  font-family: 'xh';
}
html,body{
  width: 100%;
}
.loading img{
  width: 100%;position: fixed;left:0;right:0;top:0;bottom: 0;margin:auto
}
._nc .stage1 .bg-green {
  background-color: rgb(209,114,95)!important;
}
 #nc-container ._nc{
   width: 80%;margin-left: 10%;
 }
#nc-container ._nc .stage1 .slider{
  border-radius: .1rem;
  overflow: hidden;
}
#nc-container ._nc .stage3 .title{
  color:#fff
}
#nc-container ._nc .stage3 .menu{
  display: none;
}
</style>

(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[6],{"44cd":function(e,a,s){"use strict";s.r(a);var t=function(){var e=this,a=e.$createElement,s=e._self._c||a;return s("q-page",{staticClass:"fit column no-wrap justify-center items-center content-center"},[s("h2",[e._v("Test1")]),s("h3",[e._v("globalMessage: '"+e._s(e.globalMessage)+"'")]),s("input",{directives:[{name:"model",rawName:"v-model",value:e.globalMessageX,expression:"globalMessageX"}],attrs:{type:"text",name:"",value:""},domProps:{value:e.globalMessageX},on:{input:function(a){a.target.composing||(e.globalMessageX=a.target.value)}}})])},n=[],o=s("ded3"),l=s.n(o),g=s("2f62"),c={name:"PageTest",computed:l()(l()({},Object(g["b"])("appconfig",["globalMessage"])),{},{globalMessageX:{get(){return this.$store.state.appconfig.globalMessage},set(e){this.$store.commit("appconfig/setGlobalMessage",e)}}})},i=c,r=s("2877"),p=s("9989"),u=s("eebe"),b=s.n(u),m=Object(r["a"])(i,t,n,!1,null,null,null);a["default"]=m.exports;b()(m,"components",{QPage:p["a"]})}}]);
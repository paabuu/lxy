(function(t){function e(e){for(var r,c,i=e[0],s=e[1],u=e[2],d=0,p=[];d<i.length;d++)c=i[d],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&p.push(o[c][0]),o[c]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);l&&l(e);while(p.length)p.shift()();return a.push.apply(a,u||[]),n()}function n(){for(var t,e=0;e<a.length;e++){for(var n=a[e],r=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(r=!1)}r&&(a.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},o={app:0},a=[];function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/lxy/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=e,i=i.slice();for(var u=0;u<i.length;u++)e(i[u]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var r=n("85ec"),o=n.n(r);o.a},"0cef":function(t,e,n){"use strict";var r=n("b178"),o=n.n(r);o.a},1449:function(t,e,n){},"3f5f":function(t,e,n){"use strict";var r=n("b805"),o=n.n(r);o.a},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),o=n("8c4f"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("router-view")},c=[],i={name:"App"},s=i,u=(n("034f"),n("2877")),l=Object(u["a"])(s,a,c,!1,null,null,null),d=l.exports,p=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-1",on:{click:function(e){return t.onClick()}}},[n("div",{staticClass:"title"}),n("div",{staticClass:"copy-right"})])},f=[],v={name:"StartPage",methods:{onClick:function(){this.$router.push("/s")}}},h=v,m=(n("9614"),Object(u["a"])(h,p,f,!1,null,"628b1d82",null)),g=m.exports,b=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},y=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page page-2"},[n("div",{staticClass:"select-zh"}),n("div",{staticClass:"select-en"})])}],w={name:"StartHole",created:function(){var t=this;setTimeout((function(){t.$router.push("/c")}),4e3)}},_=w,O=(n("3f5f"),Object(u["a"])(_,b,y,!1,null,"35c55f44",null)),x=O.exports,P=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page-3"},[t.showProgress?n("div",{staticClass:"progress"},[n("p",{attrs:{id:"progress"}},[t._v("0%")]),n("p",[t._v("正在加载中，请稍后...")])]):t._e(),n("canvas",{attrs:{id:"canvas"}})])},j=[],C={name:"SilkWorm",data:function(){return{showProgress:!0}},methods:{onClick:function(){}},mounted:function(){var t=this,e=document.getElementById("progress"),n=document.getElementById("canvas"),r=n.getContext("2d"),o=window.innerWidth,a=.5625,c=o,i=o/a;n.width=c,n.height=i,console.log(c,i);for(var s,u=[],l=0,d=0,p=2,f=0;f<180;f+=p){var v=f;f<100&&(v="0".concat(f)),f<10&&(v="00".concat(f));var h="https://paabuu.github.io/lxy/360/v001_0".concat(v,".png"),m=new Image;m.src=h,m.crossOrigin="Anonymous",m.onload=function(){l++,r.clearRect(0,0,c,i),e.innerHTML="".concat(Math.floor(l/180*p*100),"%"),l>=180/p&&(t.showProgress=!1,s=setInterval((function(){d++,d>=180/p&&(d=0),r.clearRect(0,0,c,i),r.drawImage(u[d],70,70,310,660,0,0,c,i)}),100))},u.push(m)}var g=0;n.addEventListener("touchstart",(function(e){if(!t.showProgress){clearInterval(s);var n=e.touches[0],o=n.clientX,a=n.clientY,c=r.getImageData(o,a,1,1).data;(c[0]>200||c[1]>200||c[2]>200)&&t.$router.push("/v"),g=n.clientX}})),n.addEventListener("touchmove",(function(e){if(!t.showProgress){var n=e.touches[0],o=n.clientX,a=g-o,s=180/p-1;a>10&&(d+=1,g=o),a<-10&&(d-=1,g=o),d>=s?d=0:d<=0&&(d=s),r.clearRect(0,0,c,i),r.drawImage(u[d],70,70,310,660,0,0,c,i)}}))}},E=C,I=(n("d076"),Object(u["a"])(E,P,j,!1,null,"5bbc602b",null)),$=I.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("video",{attrs:{id:"loading",src:"https://paabuu.github.io/lxy/video.mp4",width:"100%",height:"100%",autoplay:"true",muted:"muted"},domProps:{muted:!0}},[n("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),n("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})]),n("video",{attrs:{id:"video1",src:"https://paabuu.github.io/lxy/v1.mp4",width:"100%",height:"100%",muted:"muted",preload:"false"},domProps:{muted:!0}},[n("source",{attrs:{src:"movie.mp4",type:"video/mp4"}}),n("source",{attrs:{src:"movie.ogg",type:"video/ogg"}})])])},S=[],M={name:"LoadingVideo",methods:{onClick:function(){}},mounted:function(){var t=document.getElementById("loading"),e=document.getElementById("video1");t.play(),t.addEventListener("ended",(function(){t.style.display="none",e.play()}))}},L=M,T=(n("0cef"),Object(u["a"])(L,k,S,!1,null,"c9077a86",null)),B=T.exports;r["a"].config.productionTip=!1,r["a"].use(o["a"]);var R=[{path:"/",component:g},{path:"/s",component:x},{path:"/c",component:$},{path:"/v",component:B}],X=new o["a"]({routes:R});new r["a"]({render:function(t){return t(d)},router:X}).$mount("#app")},"85ec":function(t,e,n){},"94fd":function(t,e,n){},9614:function(t,e,n){"use strict";var r=n("94fd"),o=n.n(r);o.a},b178:function(t,e,n){},b805:function(t,e,n){},d076:function(t,e,n){"use strict";var r=n("1449"),o=n.n(r);o.a}});
//# sourceMappingURL=app.1857fb5d.js.map
parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"aiJW":[function(require,module,exports) {

},{"./../assets/felt.png":[["felt.c2c298f3.png","rVTm"],"rVTm"],"./../assets/roulette_1.jpg":[["roulette_1.02a1f156.jpg","pKZo"],"pKZo"],"./../assets/roulette_2.png":[["roulette_2.c3dd78f0.png","BSZP"],"BSZP"],"./../assets/roulette_3.png":[["roulette_3.9a2f64d2.png","qlT5"],"qlT5"],"./../assets/roulette_4.png":[["roulette_4.863ac694.png","FZy8"],"FZy8"],"./../assets/roulette_5.png":[["roulette_5.36753656.png","byRm"],"byRm"]}],"u3NQ":[function(require,module,exports) {

},{}],"tMTn":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var n={update:null,begin:null,loopBegin:null,changeBegin:null,change:null,changeComplete:null,loopComplete:null,complete:null,loop:1,direction:"normal",autoplay:!0,timelineOffset:0},e={duration:1e3,delay:0,endDelay:0,easing:"easeOutElastic(1, .5)",round:0},r=["translateX","translateY","translateZ","rotate","rotateX","rotateY","rotateZ","scale","scaleX","scaleY","scaleZ","skew","skewX","skewY","perspective"],t={CSS:{},springs:{}};function a(n,e,r){return Math.min(Math.max(n,e),r)}function u(n,e){return n.indexOf(e)>-1}function o(n,e){return n.apply(null,e)}var i={arr:function(n){return Array.isArray(n)},obj:function(n){return u(Object.prototype.toString.call(n),"Object")},pth:function(n){return i.obj(n)&&n.hasOwnProperty("totalLength")},svg:function(n){return n instanceof SVGElement},inp:function(n){return n instanceof HTMLInputElement},dom:function(n){return n.nodeType||i.svg(n)},str:function(n){return"string"==typeof n},fnc:function(n){return"function"==typeof n},und:function(n){return void 0===n},hex:function(n){return/(^#[0-9A-F]{6}$)|(^#[0-9A-F]{3}$)/i.test(n)},rgb:function(n){return/^rgb/.test(n)},hsl:function(n){return/^hsl/.test(n)},col:function(n){return i.hex(n)||i.rgb(n)||i.hsl(n)},key:function(r){return!n.hasOwnProperty(r)&&!e.hasOwnProperty(r)&&"targets"!==r&&"keyframes"!==r}};function c(n){var e=/\(([^)]+)\)/.exec(n);return e?e[1].split(",").map(function(n){return parseFloat(n)}):[]}function s(n,e){var r=c(n),u=a(i.und(r[0])?1:r[0],.1,100),o=a(i.und(r[1])?100:r[1],.1,100),s=a(i.und(r[2])?10:r[2],.1,100),f=a(i.und(r[3])?0:r[3],.1,100),l=Math.sqrt(o/u),d=s/(2*Math.sqrt(o*u)),p=d<1?l*Math.sqrt(1-d*d):0,v=1,h=d<1?(d*l-f)/p:-f+l;function g(n){var r=e?e*n/1e3:n;return r=d<1?Math.exp(-r*d*l)*(v*Math.cos(p*r)+h*Math.sin(p*r)):(v+h*r)*Math.exp(-r*l),0===n||1===n?n:1-r}return e?g:function(){var e=t.springs[n];if(e)return e;for(var r=0,a=0;;)if(1===g(r+=1/6)){if(++a>=16)break}else a=0;var u=r*(1/6)*1e3;return t.springs[n]=u,u}}function f(n,e){void 0===n&&(n=1),void 0===e&&(e=.5);var r=a(n,1,10),t=a(e,.1,2);return function(n){return 0===n||1===n?n:-r*Math.pow(2,10*(n-1))*Math.sin((n-1-t/(2*Math.PI)*Math.asin(1/r))*(2*Math.PI)/t)}}function l(n){return void 0===n&&(n=10),function(e){return Math.round(e*n)*(1/n)}}var d=function(){var n=11,e=1/(n-1);function r(n,e){return 1-3*e+3*n}function t(n,e){return 3*e-6*n}function a(n){return 3*n}function u(n,e,u){return((r(e,u)*n+t(e,u))*n+a(e))*n}function o(n,e,u){return 3*r(e,u)*n*n+2*t(e,u)*n+a(e)}return function(r,t,a,i){if(0<=r&&r<=1&&0<=a&&a<=1){var c=new Float32Array(n);if(r!==t||a!==i)for(var s=0;s<n;++s)c[s]=u(s*e,r,a);return function(n){return r===t&&a===i?n:0===n||1===n?n:u(f(n),t,i)}}function f(t){for(var i=0,s=1,f=n-1;s!==f&&c[s]<=t;++s)i+=e;var l=i+(t-c[--s])/(c[s+1]-c[s])*e,d=o(l,r,a);return d>=.001?function(n,e,r,t){for(var a=0;a<4;++a){var i=o(e,r,t);if(0===i)return e;e-=(u(e,r,t)-n)/i}return e}(t,l,r,a):0===d?l:function(n,e,r,t,a){var o,i,c=0;do{(o=u(i=e+(r-e)/2,t,a)-n)>0?r=i:e=i}while(Math.abs(o)>1e-7&&++c<10);return i}(t,i,i+e,r,a)}}}(),p=function(){var n=["Quad","Cubic","Quart","Quint","Sine","Expo","Circ","Back","Elastic"],e={In:[[.55,.085,.68,.53],[.55,.055,.675,.19],[.895,.03,.685,.22],[.755,.05,.855,.06],[.47,0,.745,.715],[.95,.05,.795,.035],[.6,.04,.98,.335],[.6,-.28,.735,.045],f],Out:[[.25,.46,.45,.94],[.215,.61,.355,1],[.165,.84,.44,1],[.23,1,.32,1],[.39,.575,.565,1],[.19,1,.22,1],[.075,.82,.165,1],[.175,.885,.32,1.275],function(n,e){return function(r){return 1-f(n,e)(1-r)}}],InOut:[[.455,.03,.515,.955],[.645,.045,.355,1],[.77,0,.175,1],[.86,0,.07,1],[.445,.05,.55,.95],[1,0,0,1],[.785,.135,.15,.86],[.68,-.55,.265,1.55],function(n,e){return function(r){return r<.5?f(n,e)(2*r)/2:1-f(n,e)(-2*r+2)/2}}]},r={linear:[.25,.25,.75,.75]},t=function(t){e[t].forEach(function(e,a){r["ease"+t+n[a]]=e})};for(var a in e)t(a);return r}();function v(n,e){if(i.fnc(n))return n;var r=n.split("(")[0],t=p[r],a=c(n);switch(r){case"spring":return s(n,e);case"cubicBezier":return o(d,a);case"steps":return o(l,a);default:return i.fnc(t)?o(t,a):o(d,t)}}function h(n){try{return document.querySelectorAll(n)}catch(e){return}}function g(n,e){for(var r=n.length,t=arguments.length>=2?arguments[1]:void 0,a=[],u=0;u<r;u++)if(u in n){var o=n[u];e.call(t,o,u,n)&&a.push(o)}return a}function m(n){return n.reduce(function(n,e){return n.concat(i.arr(e)?m(e):e)},[])}function y(n){return i.arr(n)?n:(i.str(n)&&(n=h(n)||n),n instanceof NodeList||n instanceof HTMLCollection?[].slice.call(n):[n])}function b(n,e){return n.some(function(n){return n===e})}function x(n){var e={};for(var r in n)e[r]=n[r];return e}function M(n,e){var r=x(n);for(var t in n)r[t]=e.hasOwnProperty(t)?e[t]:n[t];return r}function w(n,e){var r=x(n);for(var t in e)r[t]=i.und(n[t])?e[t]:n[t];return r}function O(n){var e=/rgb\((\d+,\s*[\d]+,\s*[\d]+)\)/g.exec(n);return e?"rgba("+e[1]+",1)":n}function k(n){var e=n.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,function(n,e,r,t){return e+e+r+r+t+t}),r=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return"rgba("+parseInt(r[1],16)+","+parseInt(r[2],16)+","+parseInt(r[3],16)+",1)"}function C(n){var e,r,t,a=/hsl\((\d+),\s*([\d.]+)%,\s*([\d.]+)%\)/g.exec(n)||/hsla\((\d+),\s*([\d.]+)%,\s*([\d.]+)%,\s*([\d.]+)\)/g.exec(n),u=parseInt(a[1],10)/360,o=parseInt(a[2],10)/100,i=parseInt(a[3],10)/100,c=a[4]||1;function s(n,e,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?n+6*(e-n)*r:r<.5?e:r<2/3?n+(e-n)*(2/3-r)*6:n}if(0==o)e=r=t=i;else{var f=i<.5?i*(1+o):i+o-i*o,l=2*i-f;e=s(l,f,u+1/3),r=s(l,f,u),t=s(l,f,u-1/3)}return"rgba("+255*e+","+255*r+","+255*t+","+c+")"}function P(n){return i.rgb(n)?O(n):i.hex(n)?k(n):i.hsl(n)?C(n):void 0}function I(n){var e=/([\+\-]?[0-9#\.]+)(%|px|pt|em|rem|in|cm|mm|ex|ch|pc|vw|vh|vmin|vmax|deg|rad|turn)?$/.exec(n);if(e)return e[2]}function B(n){return u(n,"translate")||"perspective"===n?"px":u(n,"rotate")||u(n,"skew")?"deg":void 0}function D(n,e){return i.fnc(n)?n(e.target,e.id,e.total):n}function T(n,e){return n.getAttribute(e)}function F(n,e,r){if(b([r,"deg","rad","turn"],I(e)))return e;var a=t.CSS[e+r];if(!i.und(a))return a;var u=document.createElement(n.tagName),o=n.parentNode&&n.parentNode!==document?n.parentNode:document.body;o.appendChild(u),u.style.position="absolute",u.style.width=100+r;var c=100/u.offsetWidth;o.removeChild(u);var s=c*parseFloat(e);return t.CSS[e+r]=s,s}function N(n,e,r){if(e in n.style){var t=e.replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase(),a=n.style[e]||getComputedStyle(n).getPropertyValue(t)||"0";return r?F(n,a,r):a}}function A(n,e){return i.dom(n)&&!i.inp(n)&&(T(n,e)||i.svg(n)&&n[e])?"attribute":i.dom(n)&&b(r,e)?"transform":i.dom(n)&&"transform"!==e&&N(n,e)?"css":null!=n[e]?"object":void 0}function E(n){if(i.dom(n)){for(var e,r=n.style.transform||"",t=/(\w+)\(([^)]*)\)/g,a=new Map;e=t.exec(r);)a.set(e[1],e[2]);return a}}function L(n,e,r,t){var a=u(e,"scale")?1:0+B(e),o=E(n).get(e)||a;return r&&(r.transforms.list.set(e,o),r.transforms.last=e),t?F(n,o,t):o}function S(n,e,r,t){switch(A(n,e)){case"transform":return L(n,e,t,r);case"css":return N(n,e,r);case"attribute":return T(n,e);default:return n[e]||0}}function j(n,e){var r=/^(\*=|\+=|-=)/.exec(n);if(!r)return n;var t=I(n)||0,a=parseFloat(e),u=parseFloat(n.replace(r[0],""));switch(r[0][0]){case"+":return a+u+t;case"-":return a-u+t;case"*":return a*u+t}}function q(n,e){if(i.col(n))return P(n);var r=I(n),t=r?n.substr(0,n.length-r.length):n;return e&&!/\s/g.test(n)?t+e:t}function $(n,e){return Math.sqrt(Math.pow(e.x-n.x,2)+Math.pow(e.y-n.y,2))}function X(n){return 2*Math.PI*T(n,"r")}function Y(n){return 2*T(n,"width")+2*T(n,"height")}function Z(n){return $({x:T(n,"x1"),y:T(n,"y1")},{x:T(n,"x2"),y:T(n,"y2")})}function Q(n){for(var e,r=n.points,t=0,a=0;a<r.numberOfItems;a++){var u=r.getItem(a);a>0&&(t+=$(e,u)),e=u}return t}function V(n){var e=n.points;return Q(n)+$(e.getItem(e.numberOfItems-1),e.getItem(0))}function z(n){if(n.getTotalLength)return n.getTotalLength();switch(n.tagName.toLowerCase()){case"circle":return X(n);case"rect":return Y(n);case"line":return Z(n);case"polyline":return Q(n);case"polygon":return V(n)}}function H(n){var e=z(n);return n.setAttribute("stroke-dasharray",e),e}function _(n){for(var e=n.parentNode;i.svg(e)&&(e=e.parentNode,i.svg(e.parentNode)););return e}function G(n,e){var r=e||{},t=r.el||_(n),a=t.getBoundingClientRect(),u=T(t,"viewBox"),o=a.width,i=a.height,c=r.viewBox||(u?u.split(" "):[0,0,o,i]);return{el:t,viewBox:c,x:c[0]/1,y:c[1]/1,w:o/c[2],h:i/c[3]}}function R(n,e){var r=i.str(n)?h(n)[0]:n,t=e||100;return function(n){return{property:n,el:r,svg:G(r),totalLength:z(r)*(t/100)}}}function W(n,e){function r(r){void 0===r&&(r=0);var t=e+r>=1?e+r:0;return n.el.getPointAtLength(t)}var t=G(n.el,n.svg),a=r(),u=r(-1),o=r(1);switch(n.property){case"x":return(a.x-t.x)*t.w;case"y":return(a.y-t.y)*t.h;case"angle":return 180*Math.atan2(o.y-u.y,o.x-u.x)/Math.PI}}function J(n,e){var r=/-?\d*\.?\d+/g,t=q(i.pth(n)?n.totalLength:n,e)+"";return{original:t,numbers:t.match(r)?t.match(r).map(Number):[0],strings:i.str(n)||e?t.split(r):[]}}function K(n){return g(n?m(i.arr(n)?n.map(y):y(n)):[],function(n,e,r){return r.indexOf(n)===e})}function U(n){var e=K(n);return e.map(function(n,r){return{target:n,id:r,total:e.length,transforms:{list:E(n)}}})}function nn(n,e){var r=x(e);if(/^spring/.test(r.easing)&&(r.duration=s(r.easing)),i.arr(n)){var t=n.length;2===t&&!i.obj(n[0])?n={value:n}:i.fnc(e.duration)||(r.duration=e.duration/t)}var a=i.arr(n)?n:[n];return a.map(function(n,r){var t=i.obj(n)&&!i.pth(n)?n:{value:n};return i.und(t.delay)&&(t.delay=r?0:e.delay),i.und(t.endDelay)&&(t.endDelay=r===a.length-1?e.endDelay:0),t}).map(function(n){return w(n,r)})}function en(n){for(var e=g(m(n.map(function(n){return Object.keys(n)})),function(n){return i.key(n)}).reduce(function(n,e){return n.indexOf(e)<0&&n.push(e),n},[]),r={},t=function(t){var a=e[t];r[a]=n.map(function(n){var e={};for(var r in n)i.key(r)?r==a&&(e.value=n[r]):e[r]=n[r];return e})},a=0;a<e.length;a++)t(a);return r}function rn(n,e){var r=[],t=e.keyframes;for(var a in t&&(e=w(en(t),e)),e)i.key(a)&&r.push({name:a,tweens:nn(e[a],n)});return r}function tn(n,e){var r={};for(var t in n){var a=D(n[t],e);i.arr(a)&&1===(a=a.map(function(n){return D(n,e)})).length&&(a=a[0]),r[t]=a}return r.duration=parseFloat(r.duration),r.delay=parseFloat(r.delay),r}function an(n,e){var r;return n.tweens.map(function(t){var a=tn(t,e),u=a.value,o=i.arr(u)?u[1]:u,c=I(o),s=S(e.target,n.name,c,e),f=r?r.to.original:s,l=i.arr(u)?u[0]:f,d=I(l)||I(s),p=c||d;return i.und(o)&&(o=f),a.from=J(l,p),a.to=J(j(o,l),p),a.start=r?r.end:0,a.end=a.start+a.delay+a.duration+a.endDelay,a.easing=v(a.easing,a.duration),a.isPath=i.pth(u),a.isColor=i.col(a.from.original),a.isColor&&(a.round=1),r=a,a})}var un={css:function(n,e,r){return n.style[e]=r},attribute:function(n,e,r){return n.setAttribute(e,r)},object:function(n,e,r){return n[e]=r},transform:function(n,e,r,t,a){if(t.list.set(e,r),e===t.last||a){var u="";t.list.forEach(function(n,e){u+=e+"("+n+") "}),n.style.transform=u}}};function on(n,e){U(n).forEach(function(n){for(var r in e){var t=D(e[r],n),a=n.target,u=I(t),o=S(a,r,u,n),i=j(q(t,u||I(o)),o),c=A(a,r);un[c](a,r,i,n.transforms,!0)}})}function cn(n,e){var r=A(n.target,e.name);if(r){var t=an(e,n),a=t[t.length-1];return{type:r,property:e.name,animatable:n,tweens:t,duration:a.end,delay:t[0].delay,endDelay:a.endDelay}}}function sn(n,e){return g(m(n.map(function(n){return e.map(function(e){return cn(n,e)})})),function(n){return!i.und(n)})}function fn(n,e){var r=n.length,t=function(n){return n.timelineOffset?n.timelineOffset:0},a={};return a.duration=r?Math.max.apply(Math,n.map(function(n){return t(n)+n.duration})):e.duration,a.delay=r?Math.min.apply(Math,n.map(function(n){return t(n)+n.delay})):e.delay,a.endDelay=r?a.duration-Math.max.apply(Math,n.map(function(n){return t(n)+n.duration-n.endDelay})):e.endDelay,a}var ln=0;function dn(r){var t=M(n,r),a=M(e,r),u=rn(a,r),o=U(r.targets),i=sn(o,u),c=fn(i,a),s=ln;return ln++,w(t,{id:s,children:[],animatables:o,animations:i,duration:c.duration,delay:c.delay,endDelay:c.endDelay})}var pn,vn=[],hn=[],gn=function(){function n(){pn=requestAnimationFrame(e)}function e(e){var r=vn.length;if(r){for(var t=0;t<r;){var a=vn[t];if(a.paused){var u=vn.indexOf(a);u>-1&&(vn.splice(u,1),r=vn.length)}else a.tick(e);t++}n()}else pn=cancelAnimationFrame(pn)}return n}();function mn(){document.hidden?(vn.forEach(function(n){return n.pause()}),hn=vn.slice(0),vn=[]):hn.forEach(function(n){return n.play()})}function yn(n){void 0===n&&(n={});var e,r=0,t=0,u=0,o=0,i=null;function c(n){var e=window.Promise&&new Promise(function(n){return i=n});return n.finished=e,e}var s=dn(n);c(s);function f(){var n=s.direction;"alternate"!==n&&(s.direction="normal"!==n?"normal":"reverse"),s.reversed=!s.reversed,e.forEach(function(n){return n.reversed=s.reversed})}function l(n){return s.reversed?s.duration-n:n}function d(){r=0,t=l(s.currentTime)*(1/yn.speed)}function p(n,e){e&&e.seek(n-e.timelineOffset)}function v(n){for(var e=0,r=s.animations,t=r.length;e<t;){var u=r[e],o=u.animatable,i=u.tweens,c=i.length-1,f=i[c];c&&(f=g(i,function(e){return n<e.end})[0]||f);for(var l=a(n-f.start-f.delay,0,f.duration)/f.duration,d=isNaN(l)?1:f.easing(l),p=f.to.strings,v=f.round,h=[],m=f.to.numbers.length,y=void 0,b=0;b<m;b++){var x=void 0,M=f.to.numbers[b],w=f.from.numbers[b]||0;x=f.isPath?W(f.value,d*M):w+d*(M-w),v&&(f.isColor&&b>2||(x=Math.round(x*v)/v)),h.push(x)}var O=p.length;if(O){y=p[0];for(var k=0;k<O;k++){p[k];var C=p[k+1],P=h[k];isNaN(P)||(y+=C?P+C:P+" ")}}else y=h[0];un[u.type](o.target,u.property,y,o.transforms),u.currentValue=y,e++}}function h(n){s[n]&&!s.passThrough&&s[n](s)}function m(n){var d=s.duration,g=s.delay,m=d-s.endDelay,y=l(n);s.progress=a(y/d*100,0,100),s.reversePlayback=y<s.currentTime,e&&function(n){if(s.reversePlayback)for(var r=o;r--;)p(n,e[r]);else for(var t=0;t<o;t++)p(n,e[t])}(y),!s.began&&s.currentTime>0&&(s.began=!0,h("begin"),h("loopBegin")),y<=g&&0!==s.currentTime&&v(0),(y>=m&&s.currentTime!==d||!d)&&v(d),y>g&&y<m?(s.changeBegan||(s.changeBegan=!0,s.changeCompleted=!1,h("changeBegin")),h("change"),v(y)):s.changeBegan&&(s.changeCompleted=!0,s.changeBegan=!1,h("changeComplete")),s.currentTime=a(y,0,d),s.began&&h("update"),n>=d&&(t=0,s.remaining&&!0!==s.remaining&&s.remaining--,s.remaining?(r=u,h("loopComplete"),h("loopBegin"),"alternate"===s.direction&&f()):(s.paused=!0,s.completed||(s.completed=!0,h("loopComplete"),h("complete"),!s.passThrough&&"Promise"in window&&(i(),c(s)))))}return s.reset=function(){var n=s.direction;s.passThrough=!1,s.currentTime=0,s.progress=0,s.paused=!0,s.began=!1,s.changeBegan=!1,s.completed=!1,s.changeCompleted=!1,s.reversePlayback=!1,s.reversed="reverse"===n,s.remaining=s.loop,e=s.children;for(var r=o=e.length;r--;)s.children[r].reset();(s.reversed&&!0!==s.loop||"alternate"===n&&1===s.loop)&&s.remaining++,v(0)},s.set=function(n,e){return on(n,e),s},s.tick=function(n){u=n,r||(r=u),m((u+(t-r))*yn.speed)},s.seek=function(n){m(l(n))},s.pause=function(){s.paused=!0,d()},s.play=function(){s.paused&&(s.completed&&s.reset(),s.paused=!1,vn.push(s),d(),pn||gn())},s.reverse=function(){f(),d()},s.restart=function(){s.reset(),s.play()},s.reset(),s.autoplay&&s.play(),s}function bn(n,e){for(var r=e.length;r--;)b(n,e[r].animatable.target)&&e.splice(r,1)}function xn(n){for(var e=K(n),r=vn.length;r--;){var t=vn[r],a=t.animations,u=t.children;bn(e,a);for(var o=u.length;o--;){var i=u[o],c=i.animations;bn(e,c),c.length||i.children.length||u.splice(o,1)}a.length||u.length||t.pause()}}function Mn(n,e){void 0===e&&(e={});var r=e.direction||"normal",t=e.easing?v(e.easing):null,a=e.grid,u=e.axis,o=e.from||0,c="first"===o,s="center"===o,f="last"===o,l=i.arr(n),d=l?parseFloat(n[0]):parseFloat(n),p=l?parseFloat(n[1]):0,h=I(l?n[1]:n)||0,g=e.start||0+(l?d:0),m=[],y=0;return function(n,e,i){if(c&&(o=0),s&&(o=(i-1)/2),f&&(o=i-1),!m.length){for(var v=0;v<i;v++){if(a){var b=s?(a[0]-1)/2:o%a[0],x=s?(a[1]-1)/2:Math.floor(o/a[0]),M=b-v%a[0],w=x-Math.floor(v/a[0]),O=Math.sqrt(M*M+w*w);"x"===u&&(O=-M),"y"===u&&(O=-w),m.push(O)}else m.push(Math.abs(o-v));y=Math.max.apply(Math,m)}t&&(m=m.map(function(n){return t(n/y)*y})),"reverse"===r&&(m=m.map(function(n){return u?n<0?-1*n:-n:Math.abs(y-n)}))}return g+(l?(p-d)/y:d)*(Math.round(100*m[e])/100)+h}}function wn(n){void 0===n&&(n={});var r=yn(n);return r.duration=0,r.add=function(t,a){var u=vn.indexOf(r),o=r.children;function c(n){n.passThrough=!0}u>-1&&vn.splice(u,1);for(var s=0;s<o.length;s++)c(o[s]);var f=w(t,M(e,n));f.targets=f.targets||n.targets;var l=r.duration;f.autoplay=!1,f.direction=r.direction,f.timelineOffset=i.und(a)?l:j(a,l),c(r),r.seek(f.timelineOffset);var d=yn(f);c(d),o.push(d);var p=fn(o,n);return r.delay=p.delay,r.endDelay=p.endDelay,r.duration=p.duration,r.seek(0),r.reset(),r.autoplay&&r.play(),r},r}"undefined"!=typeof document&&document.addEventListener("visibilitychange",mn),yn.version="3.0.1",yn.speed=1,yn.running=vn,yn.remove=xn,yn.get=S,yn.set=on,yn.convertPx=F,yn.path=R,yn.setDashoffset=H,yn.stagger=Mn,yn.timeline=wn,yn.easing=v,yn.penner=p,yn.random=function(n,e){return Math.floor(Math.random()*(e-n+1))+n};var On=exports.default=yn;
},{}],"PaoA":[function(require,module,exports) {
"use strict";function t(n){return(t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(n)}function n(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}function r(t,n){for(var r=0;r<n.length;r++){var e=n[r];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(t,o(e.key),e)}}function e(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),Object.defineProperty(t,"prototype",{writable:!1}),t}function o(n){var r=u(n,"string");return"symbol"==t(r)?r:String(r)}function u(n,r){if("object"!=t(n)||!n)return n;var e=n[Symbol.toPrimitive];if(void 0!==e){var o=e.call(n,r||"default");if("object"!=t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return("string"===r?String:Number)(n)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.map=exports.fromEvent=exports.filter=exports.act=exports.Observable=void 0,exports.pipe=h,exports.zip=exports.withLatestFrom=exports.timer=exports.takeUntil=exports.take=exports.startWith=exports.scan=void 0;var i=function(){function t(r){n(this,t),this.destination=r}return e(t,[{key:"next",value:function(t){if(!this.isUnsubscribed&&this.destination.next)try{this.destination.next(t)}catch(n){throw this.unsubscribe(),n}}},{key:"error",value:function(t){if(!this.isUnsubscribed&&this.destination.error){try{this.destination.error(t)}catch(n){throw this.unsubscribe(),n}this.unsubscribe()}}},{key:"complete",value:function(){if(!this.isUnsubscribed&&this.destination.complete){try{this.destination.complete()}catch(t){throw this.unsubscribe(),t}this.unsubscribe()}}},{key:"unsubscribe",value:function(){this.isUnsubscribed=!0,this.unsub&&this.unsub()}}]),t}(),c=exports.Observable=function(){function t(r){n(this,t),this._subscribe=r}return e(t,[{key:"subscribe",value:function(t){var n=new i(t);return n.unsub=this._subscribe(n),n.unsubscribe.bind(n)}}]),t}(),s=exports.map=function(t){return function(n){return new c(function(r){return n.subscribe({next:function(n){return r.next(t(n))},error:function(t){return r.error(t)},complete:function(){return r.complete()}})})}},f=exports.filter=function(t){return function(n){return new c(function(r){return n.subscribe({next:function(n){return t(n)?r.next(n):void 0},error:function(t){return r.error(t)},complete:function(){return r.complete()}})})}},a=exports.take=function(t){return function(n){return new c(function(r){var e=0;return n.subscribe({next:function(n){e++,r.next(n),e==t&&r.complete()},error:function(t){return r.error(t)},complete:function(){return r.complete()}})})}},b=exports.act=function(t){return s(function(n){return t(n),n})},p=exports.startWith=function(t){return function(n){return new c(function(r){return r.next(t),n.subscribe(r)})}},l=exports.scan=function(t){return function(n){return new c(function(r){var e=null,o=!1,u={next:function(n){return e=o?t(e,n):n,o=!0,r.next(e)},error:function(t){return r.error(t)},complete:function(){return r.complete()}};return n.subscribe(u)})}},m=exports.withLatestFrom=function(t){return function(n){return new c(function(r){var e=null,o={next:function(t){return r.next([t,e])},error:function(t){return r.error(t)},complete:function(){return r.complete()}},u={next:function(t){e=t},error:function(t){return r.error(t)},complete:function(){return r.complete()}},i=n.subscribe(o),c=t.subscribe(u);return function(){i(),c()}})}},x=exports.timer=function(t){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1/0;return new c(function(r){var e=0,o=setInterval(function(){r.next(e++),e==n&&(r.complete(),clearInterval(o))},t);return function(){return clearInterval(o)}})},v=exports.fromEvent=function(t,n){return new c(function(r){var e=function(t){return r.next(t)};return t.addEventListener(n,e),function(){return t.removeEventListener(n,e)}})};function h(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),e=1;e<n;e++)r[e-1]=arguments[e];return r.reduce(function(t,n){return n(t)},t)}var y=exports.takeUntil=function(t){return function(n){return new c(function(r){var e=n.subscribe({next:function(t){return r.next(t)},error:function(t){return r.error(t)},complete:function(){return r.complete()}}),o=t.subscribe({next:function(t){r.complete()},error:function(t){return r.error(t)},complete:function(){return r.complete()}});return function(){e(),o()}})}},d=exports.zip=function(t){return function(n){return new c(function(r){var e=[],o=[],u={next:function(t){e.push(t);var n=o.shift();if(void 0!==n){var u=e.shift();r.next([u,n])}},error:function(t){return r.error(t)},complete:function(){return r.complete()}},i={next:function(t){o.push(t);var n=e.shift();if(void 0!==n){var u=o.shift();r.next([n,u])}},error:function(t){return r.error(t)},complete:function(){return r.complete()}},c=t.subscribe(u),s=n.subscribe(i);return function(){c(),s()}})}};
},{}],"H99C":[function(require,module,exports) {
"use strict";require("./styles.scss"),require("./flipper.scss");var t=n(require("animejs")),e=require("./Observable");function n(t){return t&&t.__esModule?t:{default:t}}function r(t){return u(t)||a(t)||i(t)||o()}function o(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function i(t,e){if(t){if("string"==typeof t)return l(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(t):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?l(t,e):void 0}}function a(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}function u(t){if(Array.isArray(t))return l(t)}function l(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}window.anime=t.default;var c=0,d=0,f=0,s=!1,p=[0,32,15,19,4,21,2,25,17,34,6,27,13,36,11,30,8,23,10,5,24,16,33,1,20,14,31,9,22,18,29,7,28,12,35,3,26],h=[32,19,21,25,34,27,36,30,23,5,16,1,14,9,18,7,12,3],m=[15,4,2,17,6,13,11,8,10,24,33,20,31,22,29,28,35,26],w=function(t){return p[t>=0?t%37:37-Math.abs(t%37)]},g=function(t){var e=t>=0?t%37:37-Math.abs(t%37);return 0==e?"green":e%2==0?"black":"red"};function v(){var t=function(t){var e,n=document.createElement("div");return(e=n.classList).add.apply(e,r(t.split(" "))),n},e=t("flipper"),n=t("front-face"),o=t("back-face");e.appendChild(n),e.appendChild(o);var i=document.querySelector(".result");return i.insertBefore(e,i.firstChild),function(t,n){e.classList.add("flip",n),o.innerText=t}}function y(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;if(n&&(e=f+111-p.indexOf(n)),!s){s=!0;var r=v(),o=[.165,.84,.44,1.005],i=f-e,a=w(i),u=g(i);!function(){var n=d+360/37*e;console.log(w(f),"---\x3e ",a);(0,t.default)({targets:[".layer-2",".layer-4"],rotate:function(){return n},duration:function(){return 5e3},loop:1,easing:"cubicBezier(".concat(o.join(","),")"),complete:function(){d=n,f=i%37}})}(),function(){var e=-1440+c;console.log("newRotaion",e);(0,t.default)({targets:".ball-container",translateY:[{value:0,duration:2e3},{value:20,duration:1e3},{value:25,duration:900},{value:50,duration:1e3}],rotate:[{value:e,duration:4e3}],duration:function(){return 4e3},loop:1,easing:"cubicBezier(".concat(o.join(","),")"),complete:function(){c=e,r(a,u),s=!1}})}()}}function b(t){var e=t.getBoundingClientRect(),n=window.pageXOffset||document.documentElement.scrollLeft,r=window.pageYOffset||document.documentElement.scrollTop;return{top:e.top+r,left:e.left+n,width:e.width,height:e.height}}function M(t,e,n){var r=b(t);return e>=r.left&&e<=r.left+r.width&&n>=r.top&&n<=r.top+r.height}function B(t,e,n){var r=b(t),o=e-(r.left+r.width/2),i=n-(r.top+r.height/2),a=r.width/2;return Math.pow(o,2)+Math.pow(i,2)<=Math.pow(a,2)}window.rouletteWheelNumbers=p,document.getElementById("spin").onclick=function(){window.startRotation(100)},document.getElementById("spinRed").onclick=function(){window.startRotation(100,h.sort(function(t,e){return.5-Math.random()})[Math.floor(Math.random()*h.length)])},document.getElementById("spinBlack").onclick=function(){window.startRotation(100,m.sort(function(t,e){return.5-Math.random()})[Math.floor(Math.random()*m.length)])},window.startRotation=y;
},{"./styles.scss":"aiJW","./flipper.scss":"u3NQ","animejs":"tMTn","./Observable":"PaoA"}]},{},["H99C"], null)
//# sourceMappingURL=/src.c3a8fc34.js.map
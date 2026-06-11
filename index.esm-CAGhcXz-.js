import{F as e,g as t,L as n,a as r,d as s,i,p as o,u as a,c as u,b as c,_ as h,e as l,f as d,h as f,j as m,k as g,l as p,m as y,S as w,n as v,C as b,r as I,o as T}from"./index.esm2017-DYQOIUAv.js";var _,E,S="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e;
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */function t(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.B=Array(this.blockSize),this.o=this.h=0,this.s()}function n(e,t,n){n||(n=0);var r=Array(16);if("string"==typeof t)for(var s=0;16>s;++s)r[s]=t.charCodeAt(n++)|t.charCodeAt(n++)<<8|t.charCodeAt(n++)<<16|t.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=t[n++]|t[n++]<<8|t[n++]<<16|t[n++]<<24;t=e.g[0],n=e.g[1],s=e.g[2];var i=e.g[3],o=t+(i^n&(s^i))+r[0]+3614090360&4294967295;o=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=(n=(s=(i=(t=n+(o<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[1]+3905402710&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[2]+606105819&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[3]+3250441966&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[4]+4118548399&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[5]+1200080426&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[6]+2821735955&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[7]+4249261313&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[8]+1770035416&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[9]+2336552879&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[10]+4294925233&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[11]+2304563134&4294967295)<<22&4294967295|o>>>10))+((o=t+(i^n&(s^i))+r[12]+1804603682&4294967295)<<7&4294967295|o>>>25))+((o=i+(s^t&(n^s))+r[13]+4254626195&4294967295)<<12&4294967295|o>>>20))+((o=s+(n^i&(t^n))+r[14]+2792965006&4294967295)<<17&4294967295|o>>>15))+((o=n+(t^s&(i^t))+r[15]+1236535329&4294967295)<<22&4294967295|o>>>10))+((o=t+(s^i&(n^s))+r[1]+4129170786&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[6]+3225465664&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[11]+643717713&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[0]+3921069994&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[5]+3593408605&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[10]+38016083&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[15]+3634488961&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[4]+3889429448&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[9]+568446438&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[14]+3275163606&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[3]+4107603335&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[8]+1163531501&4294967295)<<20&4294967295|o>>>12))+((o=t+(s^i&(n^s))+r[13]+2850285829&4294967295)<<5&4294967295|o>>>27))+((o=i+(n^s&(t^n))+r[2]+4243563512&4294967295)<<9&4294967295|o>>>23))+((o=s+(t^n&(i^t))+r[7]+1735328473&4294967295)<<14&4294967295|o>>>18))+((o=n+(i^t&(s^i))+r[12]+2368359562&4294967295)<<20&4294967295|o>>>12))+((o=t+(n^s^i)+r[5]+4294588738&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[8]+2272392833&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[11]+1839030562&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[14]+4259657740&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[1]+2763975236&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[4]+1272893353&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[7]+4139469664&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[10]+3200236656&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[13]+681279174&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[0]+3936430074&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[3]+3572445317&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[6]+76029189&4294967295)<<23&4294967295|o>>>9))+((o=t+(n^s^i)+r[9]+3654602809&4294967295)<<4&4294967295|o>>>28))+((o=i+(t^n^s)+r[12]+3873151461&4294967295)<<11&4294967295|o>>>21))+((o=s+(i^t^n)+r[15]+530742520&4294967295)<<16&4294967295|o>>>16))+((o=n+(s^i^t)+r[2]+3299628645&4294967295)<<23&4294967295|o>>>9))+((o=t+(s^(n|~i))+r[0]+4096336452&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[7]+1126891415&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[14]+2878612391&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[5]+4237533241&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~i))+r[12]+1700485571&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[3]+2399980690&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[10]+4293915773&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[1]+2240044497&4294967295)<<21&4294967295|o>>>11))+((o=t+(s^(n|~i))+r[8]+1873313359&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[15]+4264355552&4294967295)<<10&4294967295|o>>>22))+((o=s+(t^(i|~n))+r[6]+2734768916&4294967295)<<15&4294967295|o>>>17))+((o=n+(i^(s|~t))+r[13]+1309151649&4294967295)<<21&4294967295|o>>>11))+((i=(t=n+((o=t+(s^(n|~i))+r[4]+4149444226&4294967295)<<6&4294967295|o>>>26))+((o=i+(n^(t|~s))+r[11]+3174756917&4294967295)<<10&4294967295|o>>>22))^((s=i+((o=s+(t^(i|~n))+r[2]+718787259&4294967295)<<15&4294967295|o>>>17))|~t))+r[9]+3951481745&4294967295,e.g[0]=e.g[0]+t&4294967295,e.g[1]=e.g[1]+(s+(o<<21&4294967295|o>>>11))&4294967295,e.g[2]=e.g[2]+s&4294967295,e.g[3]=e.g[3]+i&4294967295}function r(e,t){this.h=t;for(var n=[],r=!0,s=e.length-1;0<=s;s--){var i=0|e[s];r&&i==t||(n[s]=i,r=!1)}this.g=n}!function(e,t){function n(){}n.prototype=t.prototype,e.D=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.C=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}(t,function(){this.blockSize=-1}),t.prototype.s=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.o=this.h=0},t.prototype.u=function(e,t){void 0===t&&(t=e.length);for(var r=t-this.blockSize,s=this.B,i=this.h,o=0;o<t;){if(0==i)for(;o<=r;)n(this,e,o),o+=this.blockSize;if("string"==typeof e){for(;o<t;)if(s[i++]=e.charCodeAt(o++),i==this.blockSize){n(this,s),i=0;break}}else for(;o<t;)if(s[i++]=e[o++],i==this.blockSize){n(this,s),i=0;break}}this.h=i,this.o+=t},t.prototype.v=function(){var e=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);e[0]=128;for(var t=1;t<e.length-8;++t)e[t]=0;var n=8*this.o;for(t=e.length-8;t<e.length;++t)e[t]=255&n,n/=256;for(this.u(e),e=Array(16),t=n=0;4>t;++t)for(var r=0;32>r;r+=8)e[n++]=this.g[t]>>>r&255;return e};var s={};function i(e){return-128<=e&&128>e?function(e,t){var n=s;return Object.prototype.hasOwnProperty.call(n,e)?n[e]:n[e]=t(e)}(e,function(e){return new r([0|e],0>e?-1:0)}):new r([0|e],0>e?-1:0)}function o(e){if(isNaN(e)||!isFinite(e))return a;if(0>e)return d(o(-e));for(var t=[],n=1,s=0;e>=n;s++)t[s]=e/n|0,n*=4294967296;return new r(t,0)}var a=i(0),u=i(1),c=i(16777216);function h(e){if(0!=e.h)return!1;for(var t=0;t<e.g.length;t++)if(0!=e.g[t])return!1;return!0}function l(e){return-1==e.h}function d(e){for(var t=e.g.length,n=[],s=0;s<t;s++)n[s]=~e.g[s];return new r(n,~e.h).add(u)}function f(e,t){return e.add(d(t))}function m(e,t){for(;(65535&e[t])!=e[t];)e[t+1]+=e[t]>>>16,e[t]&=65535,t++}function g(e,t){this.g=e,this.h=t}function p(e,t){if(h(t))throw Error("division by zero");if(h(e))return new g(a,a);if(l(e))return t=p(d(e),t),new g(d(t.g),d(t.h));if(l(t))return t=p(e,d(t)),new g(d(t.g),t.h);if(30<e.g.length){if(l(e)||l(t))throw Error("slowDivide_ only works with positive integers.");for(var n=u,r=t;0>=r.l(e);)n=y(n),r=y(r);var s=w(n,1),i=w(r,1);for(r=w(r,2),n=w(n,2);!h(r);){var c=i.add(r);0>=c.l(e)&&(s=s.add(n),i=c),r=w(r,1),n=w(n,1)}return t=f(e,s.j(t)),new g(s,t)}for(s=a;0<=e.l(t);){for(n=Math.max(1,Math.floor(e.m()/t.m())),r=48>=(r=Math.ceil(Math.log(n)/Math.LN2))?1:Math.pow(2,r-48),c=(i=o(n)).j(t);l(c)||0<c.l(e);)c=(i=o(n-=r)).j(t);h(i)&&(i=u),s=s.add(i),e=f(e,c)}return new g(s,e)}function y(e){for(var t=e.g.length+1,n=[],s=0;s<t;s++)n[s]=e.i(s)<<1|e.i(s-1)>>>31;return new r(n,e.h)}function w(e,t){var n=t>>5;t%=32;for(var s=e.g.length-n,i=[],o=0;o<s;o++)i[o]=0<t?e.i(o+n)>>>t|e.i(o+n+1)<<32-t:e.i(o+n);return new r(i,e.h)}(e=r.prototype).m=function(){if(l(this))return-d(this).m();for(var e=0,t=1,n=0;n<this.g.length;n++){var r=this.i(n);e+=(0<=r?r:4294967296+r)*t,t*=4294967296}return e},e.toString=function(e){if(2>(e=e||10)||36<e)throw Error("radix out of range: "+e);if(h(this))return"0";if(l(this))return"-"+d(this).toString(e);for(var t=o(Math.pow(e,6)),n=this,r="";;){var s=p(n,t).g,i=((0<(n=f(n,s.j(t))).g.length?n.g[0]:n.h)>>>0).toString(e);if(h(n=s))return i+r;for(;6>i.length;)i="0"+i;r=i+r}},e.i=function(e){return 0>e?0:e<this.g.length?this.g[e]:this.h},e.l=function(e){return l(e=f(this,e))?-1:h(e)?0:1},e.abs=function(){return l(this)?d(this):this},e.add=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0,i=0;i<=t;i++){var o=s+(65535&this.i(i))+(65535&e.i(i)),a=(o>>>16)+(this.i(i)>>>16)+(e.i(i)>>>16);s=a>>>16,o&=65535,a&=65535,n[i]=a<<16|o}return new r(n,-2147483648&n[n.length-1]?-1:0)},e.j=function(e){if(h(this)||h(e))return a;if(l(this))return l(e)?d(this).j(d(e)):d(d(this).j(e));if(l(e))return d(this.j(d(e)));if(0>this.l(c)&&0>e.l(c))return o(this.m()*e.m());for(var t=this.g.length+e.g.length,n=[],s=0;s<2*t;s++)n[s]=0;for(s=0;s<this.g.length;s++)for(var i=0;i<e.g.length;i++){var u=this.i(s)>>>16,f=65535&this.i(s),g=e.i(i)>>>16,p=65535&e.i(i);n[2*s+2*i]+=f*p,m(n,2*s+2*i),n[2*s+2*i+1]+=u*p,m(n,2*s+2*i+1),n[2*s+2*i+1]+=f*g,m(n,2*s+2*i+1),n[2*s+2*i+2]+=u*g,m(n,2*s+2*i+2)}for(s=0;s<t;s++)n[s]=n[2*s+1]<<16|n[2*s];for(s=t;s<2*t;s++)n[s]=0;return new r(n,0)},e.A=function(e){return p(this,e).h},e.and=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)&e.i(s);return new r(n,this.h&e.h)},e.or=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)|e.i(s);return new r(n,this.h|e.h)},e.xor=function(e){for(var t=Math.max(this.g.length,e.g.length),n=[],s=0;s<t;s++)n[s]=this.i(s)^e.i(s);return new r(n,this.h^e.h)},t.prototype.digest=t.prototype.v,t.prototype.reset=t.prototype.s,t.prototype.update=t.prototype.u,E=t,r.prototype.add=r.prototype.add,r.prototype.multiply=r.prototype.j,r.prototype.modulo=r.prototype.A,r.prototype.compare=r.prototype.l,r.prototype.toNumber=r.prototype.m,r.prototype.toString=r.prototype.toString,r.prototype.getBits=r.prototype.i,r.fromNumber=o,r.fromString=function e(t,n){if(0==t.length)throw Error("number format error: empty string");if(2>(n=n||10)||36<n)throw Error("radix out of range: "+n);if("-"==t.charAt(0))return d(e(t.substring(1),n));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var r=o(Math.pow(n,8)),s=a,i=0;i<t.length;i+=8){var u=Math.min(8,t.length-i),c=parseInt(t.substring(i,i+u),n);8>u?(u=o(Math.pow(n,u)),s=s.j(u).add(o(c))):s=(s=s.j(r)).add(o(c))}return s},_=r}).apply(void 0!==S?S:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});var x,C,A,D,N,k,R,O,F="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};
/** @license
Copyright The Closure Library Authors.
SPDX-License-Identifier: Apache-2.0
*/(function(){var e,t="function"==typeof Object.defineProperties?Object.defineProperty:function(e,t,n){return e==Array.prototype||e==Object.prototype||(e[t]=n.value),e};var n=function(e){e=["object"==typeof globalThis&&globalThis,e,"object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof F&&F];for(var t=0;t<e.length;++t){var n=e[t];if(n&&n.Math==Math)return n}throw Error("Cannot find global object")}(this);!function(e,r){if(r)e:{var s=n;e=e.split(".");for(var i=0;i<e.length-1;i++){var o=e[i];if(!(o in s))break e;s=s[o]}(r=r(i=s[e=e[e.length-1]]))!=i&&null!=r&&t(s,e,{configurable:!0,writable:!0,value:r})}}("Array.prototype.values",function(e){return e||function(){return function(e,t){e instanceof String&&(e+="");var n=0,r=!1,s={next:function(){if(!r&&n<e.length){var s=n++;return{value:t(s,e[s]),done:!1}}return r=!0,{done:!0,value:void 0}}};return s[Symbol.iterator]=function(){return s},s}(this,function(e,t){return t})}});
/** @license
  
   Copyright The Closure Library Authors.
   SPDX-License-Identifier: Apache-2.0
  */
var r=r||{},s=this||self;function i(e){var t=typeof e;return"array"==(t="object"!=t?t:e?Array.isArray(e)?"array":t:"null")||"object"==t&&"number"==typeof e.length}function o(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function a(e,t,n){return e.call.apply(e.bind,arguments)}function u(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function c(e,t,n){return(c=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?a:u).apply(null,arguments)}function h(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function l(e,t){function n(){}n.prototype=t.prototype,e.aa=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Qb=function(e,n,r){for(var s=Array(arguments.length-2),i=2;i<arguments.length;i++)s[i-2]=arguments[i];return t.prototype[n].apply(e,s)}}function d(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function f(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(i(t)){const n=e.length||0,r=t.length||0;e.length=n+r;for(let s=0;s<r;s++)e[n+s]=t[s]}else e.push(t)}}function m(e){return/^[\s\xa0]*$/.test(e)}function g(){var e=s.navigator;return e&&(e=e.userAgent)?e:""}function p(e){return p[" "](e),e}p[" "]=function(){};var y=!(-1==g().indexOf("Gecko")||-1!=g().toLowerCase().indexOf("webkit")&&-1==g().indexOf("Edge")||-1!=g().indexOf("Trident")||-1!=g().indexOf("MSIE")||-1!=g().indexOf("Edge"));function w(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function v(e){const t={};for(const n in e)t[n]=e[n];return t}const b="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function I(e,t){let n,r;for(let s=1;s<arguments.length;s++){for(n in r=arguments[s],r)e[n]=r[n];for(let t=0;t<b.length;t++)n=b[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function T(e){var t=1;e=e.split(":");const n=[];for(;0<t&&e.length;)n.push(e.shift()),t--;return e.length&&n.push(e.join(":")),n}function _(e){s.setTimeout(()=>{throw e},0)}function E(){var e=L;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}var S=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}(()=>new P,e=>e.reset());class P{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}let M,V=!1,L=new class{constructor(){this.h=this.g=null}add(e,t){const n=S.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}},q=()=>{const e=s.Promise.resolve(void 0);M=()=>{e.then(U)}};var U=()=>{for(var e;e=E();){try{e.h.call(e.g)}catch(n){_(n)}var t=S;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}V=!1};function B(){this.s=this.s,this.C=this.C}function j(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}B.prototype.s=!1,B.prototype.ma=function(){this.s||(this.s=!0,this.N())},B.prototype.N=function(){if(this.C)for(;this.C.length;)this.C.shift()()},j.prototype.h=function(){this.defaultPrevented=!0};var z=function(){if(!s.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{const e=()=>{};s.addEventListener("test",e,t),s.removeEventListener("test",e,t)}catch(n){}return e}();function $(e,t){if(j.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(y){e:{try{p(t.nodeName);var s=!0;break e}catch(i){}s=!1}s||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"==typeof e.pointerType?e.pointerType:G[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&$.aa.h.call(this)}}l($,j);var G={2:"touch",3:"pen",4:"mouse"};$.prototype.h=function(){$.aa.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var K="closure_listenable_"+(1e6*Math.random()|0),Q=0;function H(e,t,n,r,s){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ha=s,this.key=++Q,this.da=this.fa=!1}function W(e){e.da=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function X(e){this.src=e,this.g={},this.h=0}function Y(e,t){var n=t.type;if(n in e.g){var r,s=e.g[n],i=Array.prototype.indexOf.call(s,t,void 0);(r=0<=i)&&Array.prototype.splice.call(s,i,1),r&&(W(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function J(e,t,n,r){for(var s=0;s<e.length;++s){var i=e[s];if(!i.da&&i.listener==t&&i.capture==!!n&&i.ha==r)return s}return-1}X.prototype.add=function(e,t,n,r,s){var i=e.toString();(e=this.g[i])||(e=this.g[i]=[],this.h++);var o=J(e,t,r,s);return-1<o?(t=e[o],n||(t.fa=!1)):((t=new H(t,this.src,i,!!r,s)).fa=n,e.push(t)),t};var Z="closure_lm_"+(1e6*Math.random()|0),ee={};function te(e,t,n,r,s){if(Array.isArray(t)){for(var i=0;i<t.length;i++)te(e,t[i],n,r,s);return null}return n=ue(n),e&&e[K]?e.K(t,n,!!o(r)&&!!r.capture,s):function(e,t,n,r,s,i){if(!t)throw Error("Invalid event type");var a=o(s)?!!s.capture:!!s,u=oe(e);if(u||(e[Z]=u=new X(e)),n=u.add(t,n,r,a,i),n.proxy)return n;if(r=function(){function e(n){return t.call(e.src,e.listener,n)}const t=ie;return e}(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)z||(s=a),void 0===s&&(s=!1),e.addEventListener(t.toString(),r,s);else if(e.attachEvent)e.attachEvent(se(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}(e,t,n,!1,r,s)}function ne(e,t,n,r,s){if(Array.isArray(t))for(var i=0;i<t.length;i++)ne(e,t[i],n,r,s);else r=o(r)?!!r.capture:!!r,n=ue(n),e&&e[K]?(e=e.i,(t=String(t).toString())in e.g&&(-1<(n=J(i=e.g[t],n,r,s))&&(W(i[n]),Array.prototype.splice.call(i,n,1),0==i.length&&(delete e.g[t],e.h--)))):e&&(e=oe(e))&&(t=e.g[t.toString()],e=-1,t&&(e=J(t,n,r,s)),(n=-1<e?t[e]:null)&&re(n))}function re(e){if("number"!=typeof e&&e&&!e.da){var t=e.src;if(t&&t[K])Y(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(se(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=oe(t))?(Y(n,e),0==n.h&&(n.src=null,t[Z]=null)):W(e)}}}function se(e){return e in ee?ee[e]:ee[e]="on"+e}function ie(e,t){if(e.da)e=!0;else{t=new $(t,this);var n=e.listener,r=e.ha||e.src;e.fa&&re(e),e=n.call(r,t)}return e}function oe(e){return(e=e[Z])instanceof X?e:null}var ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function ue(e){return"function"==typeof e?e:(e[ae]||(e[ae]=function(t){return e.handleEvent(t)}),e[ae])}function ce(){B.call(this),this.i=new X(this),this.M=this,this.F=null}function he(e,t){var n,r=e.F;if(r)for(n=[];r;r=r.F)n.push(r);if(e=e.M,r=t.type||t,"string"==typeof t)t=new j(t,e);else if(t instanceof j)t.target=t.target||e;else{var s=t;I(t=new j(r,e),s)}if(s=!0,n)for(var i=n.length-1;0<=i;i--){var o=t.g=n[i];s=le(o,r,!0,t)&&s}if(s=le(o=t.g=e,r,!0,t)&&s,s=le(o,r,!1,t)&&s,n)for(i=0;i<n.length;i++)s=le(o=t.g=n[i],r,!1,t)&&s}function le(e,t,n,r){if(!(t=e.i.g[String(t)]))return!0;t=t.concat();for(var s=!0,i=0;i<t.length;++i){var o=t[i];if(o&&!o.da&&o.capture==n){var a=o.listener,u=o.ha||o.src;o.fa&&Y(e.i,o),s=!1!==a.call(u,r)&&s}}return s&&!r.defaultPrevented}function de(e,t,n){if("function"==typeof e)n&&(e=c(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=c(e.handleEvent,e)}return 2147483647<Number(t)?-1:s.setTimeout(e,t||0)}function fe(e){e.g=de(()=>{e.g=null,e.i&&(e.i=!1,fe(e))},e.l);const t=e.h;e.h=null,e.m.apply(null,t)}l(ce,B),ce.prototype[K]=!0,ce.prototype.removeEventListener=function(e,t,n,r){ne(this,e,t,n,r)},ce.prototype.N=function(){if(ce.aa.N.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)W(n[r]);delete t.g[e],t.h--}}this.F=null},ce.prototype.K=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},ce.prototype.L=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};class me extends B{constructor(e,t){super(),this.m=e,this.l=t,this.h=null,this.i=!1,this.g=null}j(e){this.h=arguments,this.g?this.i=!0:fe(this)}N(){super.N(),this.g&&(s.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function ge(e){B.call(this),this.h=e,this.g={}}l(ge,B);var pe=[];function ye(e){w(e.g,function(e,t){this.g.hasOwnProperty(t)&&re(e)},e),e.g={}}ge.prototype.N=function(){ge.aa.N.call(this),ye(this)},ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};var we=s.JSON.stringify,ve=s.JSON.parse,be=class{stringify(e){return s.JSON.stringify(e,void 0)}parse(e){return s.JSON.parse(e,void 0)}};function Ie(){}function Te(e){return e.h||(e.h=e.i())}function _e(){}Ie.prototype.h=null;var Ee={OPEN:"a",kb:"b",Ja:"c",wb:"d"};function Se(){j.call(this,"d")}function xe(){j.call(this,"c")}l(Se,j),l(xe,j);var Ce={},Ae=null;function De(){return Ae=Ae||new ce}function Ne(e){j.call(this,Ce.La,e)}function ke(e){const t=De();he(t,new Ne(t))}function Re(e,t){j.call(this,Ce.STAT_EVENT,e),this.stat=t}function Oe(e){const t=De();he(t,new Re(t,e))}function Fe(e,t){j.call(this,Ce.Ma,e),this.size=t}function Pe(e,t){if("function"!=typeof e)throw Error("Fn must not be null and must be a function");return s.setTimeout(function(){e()},t)}function Me(){this.g=!0}function Ve(e,t,n,r){e.info(function(){return"XMLHTTP TEXT ("+t+"): "+function(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var i=s[0];if("noop"!=i&&"stop"!=i&&"close"!=i)for(var o=1;o<s.length;o++)s[o]=""}}}return we(n)}catch(a){return t}}(e,n)+(r?" "+r:"")})}Ce.La="serverreachability",l(Ne,j),Ce.STAT_EVENT="statevent",l(Re,j),Ce.Ma="timingevent",l(Fe,j),Me.prototype.xa=function(){this.g=!1},Me.prototype.info=function(){};var Le,qe={NO_ERROR:0,gb:1,tb:2,sb:3,nb:4,rb:5,ub:6,Ia:7,TIMEOUT:8,xb:9},Ue={lb:"complete",Hb:"success",Ja:"error",Ia:"abort",zb:"ready",Ab:"readystatechange",TIMEOUT:"timeout",vb:"incrementaldata",yb:"progress",ob:"downloadprogress",Pb:"uploadprogress"};function Be(){}function je(e,t,n,r){this.j=e,this.i=t,this.l=n,this.R=r||1,this.U=new ge(this),this.I=45e3,this.H=null,this.o=!1,this.m=this.A=this.v=this.L=this.F=this.S=this.B=null,this.D=[],this.g=null,this.C=0,this.s=this.u=null,this.X=-1,this.J=!1,this.O=0,this.M=null,this.W=this.K=this.T=this.P=!1,this.h=new ze}function ze(){this.i=null,this.g="",this.h=!1}l(Be,Ie),Be.prototype.g=function(){return new XMLHttpRequest},Be.prototype.i=function(){return{}},Le=new Be;var $e={},Ge={};function Ke(e,t,n){e.L=1,e.v=wt(ft(t)),e.m=n,e.P=!0,Qe(e,null)}function Qe(e,t){e.F=Date.now(),Xe(e),e.A=ft(e.v);var n=e.A,r=e.R;Array.isArray(r)||(r=[String(r)]),kt(n.i,"t",r),e.C=0,n=e.j.J,e.h=new ze,e.g=vn(e.j,n?t:null,!e.m),0<e.O&&(e.M=new me(c(e.Y,e,e.g),e.O)),t=e.U,n=e.g,r=e.ca;var s="readystatechange";Array.isArray(s)||(s&&(pe[0]=s.toString()),s=pe);for(var i=0;i<s.length;i++){var o=te(n,s[i],r||t.handleEvent,!1,t.h||t);if(!o)break;t.g[o.key]=o}t=e.H?v(e.H):{},e.m?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.m,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ke(),function(e,t,n,r,s,i){e.info(function(){if(e.g)if(i)for(var o="",a=i.split("&"),u=0;u<a.length;u++){var c=a[u].split("=");if(1<c.length){var h=c[0];c=c[1];var l=h.split("_");o=2<=l.length&&"type"==l[1]?o+(h+"=")+c+"&":o+(h+"=redacted&")}}else o=null;else o=i;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+t+"\n"+n+"\n"+o})}(e.i,e.u,e.A,e.l,e.R,e.m)}function He(e){return!!e.g&&("GET"==e.u&&2!=e.L&&e.j.Ca)}function We(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?Ge:(n=Number(t.substring(n,r)),isNaN(n)?$e:(r+=1)+n>t.length?Ge:(t=t.slice(r,r+n),e.C=r+n,t))}function Xe(e){e.S=Date.now()+e.I,Ye(e,e.I)}function Ye(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=Pe(c(e.ba,e),t)}function Je(e){e.B&&(s.clearTimeout(e.B),e.B=null)}function Ze(e){0==e.j.G||e.J||mn(e.j,e)}function et(e){Je(e);var t=e.M;t&&"function"==typeof t.ma&&t.ma(),e.M=null,ye(e.U),e.g&&(t=e.g,e.g=null,t.abort(),t.ma())}function tt(e,t){try{var n=e.j;if(0!=n.G&&(n.g==e||ot(n.h,e)))if(!e.K&&ot(n.h,e)&&3==n.G){try{var r=n.Da.g.parse(t)}catch(h){r=null}if(Array.isArray(r)&&3==r.length){var s=r;if(0==s[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;fn(n),nn(n)}hn(n),Oe(18)}}else n.za=s[1],0<n.za-n.T&&37500>s[2]&&n.F&&0==n.v&&!n.C&&(n.C=Pe(c(n.Za,n),6e3));if(1>=it(n.h)&&n.ca){try{n.ca()}catch(h){}n.ca=void 0}}else pn(n,11)}else if((e.K||n.g==e)&&fn(n),!m(t))for(s=n.Da.g.parse(t),t=0;t<s.length;t++){let c=s[t];if(n.T=c[0],c=c[1],2==n.G)if("c"==c[0]){n.K=c[1],n.ia=c[2];const t=c[3];null!=t&&(n.la=t,n.j.info("VER="+n.la));const s=c[4];null!=s&&(n.Aa=s,n.j.info("SVER="+n.Aa));const h=c[5];null!=h&&"number"==typeof h&&0<h&&(r=1.5*h,n.L=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const l=e.g;if(l){const e=l.g?l.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var i=r.h;i.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(i.j=i.l,i.g=new Set,i.h&&(at(i,i.h),i.h=null))}if(r.D){const e=l.g?l.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.ya=e,yt(r.I,r.D,e))}}n.G=3,n.l&&n.l.ua(),n.ba&&(n.R=Date.now()-e.F,n.j.info("Handshake RTT: "+n.R+"ms"));var o=e;if((r=n).qa=wn(r,r.J?r.ia:null,r.W),o.K){ut(r.h,o);var a=o,u=r.L;u&&(a.I=u),a.B&&(Je(a),Xe(a)),r.g=o}else cn(r);0<n.i.length&&sn(n)}else"stop"!=c[0]&&"close"!=c[0]||pn(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?pn(n,7):tn(n):"noop"!=c[0]&&n.l&&n.l.ta(c),n.v=0)}ke()}catch(h){}}je.prototype.ca=function(e){e=e.target;const t=this.M;t&&3==Yt(e)?t.j():this.Y(e)},je.prototype.Y=function(e){try{if(e==this.g)e:{const d=Yt(this.g);var t=this.g.Ba();this.g.Z();if(!(3>d)&&(3!=d||this.g&&(this.h.h||this.g.oa()||Jt(this.g)))){this.J||4!=d||7==t||ke(),Je(this);var n=this.g.Z();this.X=n;t:if(He(this)){var r=Jt(this.g);e="";var i=r.length,o=4==Yt(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){et(this),Ze(this);var a="";break t}this.h.i=new s.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:!(o&&t==i-1)});r.length=0,this.h.g+=e,this.C=0,a=this.h.g}else a=this.g.oa();if(this.o=200==n,function(e,t,n,r,s,i,o){e.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+t+"\n"+n+"\n"+i+" "+o})}(this.i,this.u,this.A,this.l,this.R,d,n),this.o){if(this.T&&!this.K){t:{if(this.g){var u,c=this.g;if((u=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!m(u)){var h=u;break t}}h=null}if(!(n=h)){this.o=!1,this.s=3,Oe(12),et(this),Ze(this);break e}Ve(this.i,this.l,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,tt(this,n)}if(this.P){let e;for(n=!0;!this.J&&this.C<a.length;){if(e=We(this,a),e==Ge){4==d&&(this.s=4,Oe(14),n=!1),Ve(this.i,this.l,null,"[Incomplete Response]");break}if(e==$e){this.s=4,Oe(15),Ve(this.i,this.l,a,"[Invalid Chunk]"),n=!1;break}Ve(this.i,this.l,e,null),tt(this,e)}if(He(this)&&0!=this.C&&(this.h.g=this.h.g.slice(this.C),this.C=0),4!=d||0!=a.length||this.h.h||(this.s=1,Oe(16),n=!1),this.o=this.o&&n,n){if(0<a.length&&!this.W){this.W=!0;var l=this.j;l.g==this&&l.ba&&!l.M&&(l.j.info("Great, no buffering proxy detected. Bytes received: "+a.length),ln(l),l.M=!0,Oe(11))}}else Ve(this.i,this.l,a,"[Invalid Chunked Response]"),et(this),Ze(this)}else Ve(this.i,this.l,a,null),tt(this,a);4==d&&et(this),this.o&&!this.J&&(4==d?mn(this.j,this):(this.o=!1,Xe(this)))}else(function(e){const t={};e=(e.g&&2<=Yt(e)&&e.g.getAllResponseHeaders()||"").split("\r\n");for(let r=0;r<e.length;r++){if(m(e[r]))continue;var n=T(e[r]);const s=n[0];if("string"!=typeof(n=n[1]))continue;n=n.trim();const i=t[s]||[];t[s]=i,i.push(n)}!function(e,t){for(const n in e)t.call(void 0,e[n],n,e)}(t,function(e){return e.join(", ")})})(this.g),400==n&&0<a.indexOf("Unknown SID")?(this.s=3,Oe(12)):(this.s=0,Oe(13)),et(this),Ze(this)}}}catch(d){}},je.prototype.cancel=function(){this.J=!0,et(this)},je.prototype.ba=function(){this.B=null;const e=Date.now();0<=e-this.S?(function(e,t){e.info(function(){return"TIMEOUT: "+t})}(this.i,this.A),2!=this.L&&(ke(),Oe(17)),et(this),this.s=2,Ze(this)):Ye(this,this.S-e)};var nt=class{constructor(e,t){this.g=e,this.map=t}};function rt(e){this.l=e||10,s.PerformanceNavigationTiming?e=0<(e=s.performance.getEntriesByType("navigation")).length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol):e=!!(s.chrome&&s.chrome.loadTimes&&s.chrome.loadTimes()&&s.chrome.loadTimes().wasFetchedViaSpdy),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}function st(e){return!!e.h||!!e.g&&e.g.size>=e.j}function it(e){return e.h?1:e.g?e.g.size:0}function ot(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function at(e,t){e.g?e.g.add(t):e.h=t}function ut(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function ct(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return d(e.i)}function ht(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(i(e)||"string"==typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=function(e){if(e.na&&"function"==typeof e.na)return e.na();if(!e.V||"function"!=typeof e.V){if("undefined"!=typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!=typeof Set&&e instanceof Set)){if(i(e)||"string"==typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const r in e)t[n++]=r;return t}}}(e),r=function(e){if(e.V&&"function"==typeof e.V)return e.V();if("undefined"!=typeof Map&&e instanceof Map||"undefined"!=typeof Set&&e instanceof Set)return Array.from(e.values());if("string"==typeof e)return e.split("");if(i(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}(e),s=r.length,o=0;o<s;o++)t.call(void 0,r[o],n&&n[o],e)}rt.prototype.cancel=function(){if(this.i=ct(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}};var lt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function dt(e){if(this.g=this.o=this.j="",this.s=null,this.m=this.l="",this.h=!1,e instanceof dt){this.h=e.h,mt(this,e.j),this.o=e.o,this.g=e.g,gt(this,e.s),this.l=e.l;var t=e.i,n=new Ct;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),pt(this,n),this.m=e.m}else e&&(t=String(e).match(lt))?(this.h=!1,mt(this,t[1]||"",!0),this.o=vt(t[2]||""),this.g=vt(t[3]||"",!0),gt(this,t[4]),this.l=vt(t[5]||"",!0),pt(this,t[6]||"",!0),this.m=vt(t[7]||"")):(this.h=!1,this.i=new Ct(null,this.h))}function ft(e){return new dt(e)}function mt(e,t,n){e.j=n?vt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function gt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.s=t}else e.s=null}function pt(e,t,n){t instanceof Ct?(e.i=t,function(e,t){t&&!e.j&&(At(e),e.i=null,e.g.forEach(function(e,t){var n=t.toLowerCase();t!=n&&(Dt(this,t),kt(this,n,e))},e)),e.j=t}(e.i,e.h)):(n||(t=bt(t,St)),e.i=new Ct(t,e.h))}function yt(e,t,n){e.i.set(t,n)}function wt(e){return yt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function vt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function bt(e,t,n){return"string"==typeof e?(e=encodeURI(e).replace(t,It),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function It(e){return"%"+((e=e.charCodeAt(0))>>4&15).toString(16)+(15&e).toString(16)}dt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(bt(t,Tt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.o)&&e.push(bt(t,Tt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.s)&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(bt(n,"/"==n.charAt(0)?Et:_t,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.m)&&e.push("#",bt(n,xt)),e.join("")};var Tt=/[#\/\?@]/g,_t=/[#\?:]/g,Et=/[#\?]/g,St=/[#\?@]/g,xt=/#/g;function Ct(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function At(e){e.g||(e.g=new Map,e.h=0,e.i&&function(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),s=null;if(0<=r){var i=e[n].substring(0,r);s=e[n].substring(r+1)}else i=e[n];t(i,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}(e.i,function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)}))}function Dt(e,t){At(e),t=Rt(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function Nt(e,t){return At(e),t=Rt(e,t),e.g.has(t)}function kt(e,t,n){Dt(e,t),0<n.length&&(e.i=null,e.g.set(Rt(e,t),d(n)),e.h+=n.length)}function Rt(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function Ot(e,t,n,r,s){try{s&&(s.onload=null,s.onerror=null,s.onabort=null,s.ontimeout=null),r(n)}catch(i){}}function Ft(){this.g=new be}function Pt(e,t,n){const r=n||"";try{ht(e,function(e,n){let s=e;o(e)&&(s=we(e)),t.push(r+n+"="+encodeURIComponent(s))})}catch(s){throw t.push(r+"type="+encodeURIComponent("_badmap")),s}}function Mt(e){this.l=e.Ub||null,this.j=e.eb||!1}function Vt(e,t){ce.call(this),this.D=e,this.o=t,this.m=void 0,this.status=this.readyState=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.u=new Headers,this.h=null,this.B="GET",this.A="",this.g=!1,this.v=this.j=this.l=null}function Lt(e){e.j.read().then(e.Pa.bind(e)).catch(e.ga.bind(e))}function qt(e){e.readyState=4,e.l=null,e.j=null,e.v=null,Ut(e)}function Ut(e){e.onreadystatechange&&e.onreadystatechange.call(e)}function Bt(e){let t="";return w(e,function(e,n){t+=n,t+=":",t+=e,t+="\r\n"}),t}function jt(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=Bt(n),"string"==typeof e?null!=n&&encodeURIComponent(String(n)):yt(e,t,n))}function zt(e){ce.call(this),this.headers=new Map,this.o=e||null,this.h=!1,this.v=this.g=null,this.D="",this.m=0,this.l="",this.j=this.B=this.u=this.A=!1,this.I=null,this.H="",this.J=!1}(e=Ct.prototype).add=function(e,t){At(this),this.i=null,e=Rt(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},e.forEach=function(e,t){At(this),this.g.forEach(function(n,r){n.forEach(function(n){e.call(t,n,r,this)},this)},this)},e.na=function(){At(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let r=0;r<t.length;r++){const s=e[r];for(let e=0;e<s.length;e++)n.push(t[r])}return n},e.V=function(e){At(this);let t=[];if("string"==typeof e)Nt(this,e)&&(t=t.concat(this.g.get(Rt(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},e.set=function(e,t){return At(this),this.i=null,Nt(this,e=Rt(this,e))&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},e.get=function(e,t){return e&&0<(e=this.V(e)).length?String(e[0]):t},e.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var r=t[n];const i=encodeURIComponent(String(r)),o=this.V(r);for(r=0;r<o.length;r++){var s=i;""!==o[r]&&(s+="="+encodeURIComponent(String(o[r]))),e.push(s)}}return this.i=e.join("&")},l(Mt,Ie),Mt.prototype.g=function(){return new Vt(this.l,this.j)},Mt.prototype.i=function(e){return function(){return e}}({}),l(Vt,ce),(e=Vt.prototype).open=function(e,t){if(0!=this.readyState)throw this.abort(),Error("Error reopening a connection");this.B=e,this.A=t,this.readyState=1,Ut(this)},e.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.u,method:this.B,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||s).fetch(new Request(this.A,t)).then(this.Sa.bind(this),this.ga.bind(this))},e.abort=function(){this.response=this.responseText="",this.u=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,qt(this)),this.readyState=0},e.Sa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Ut(this)),this.g&&(this.readyState=3,Ut(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Qa.bind(this),this.ga.bind(this));else if(void 0!==s.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.o){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.v=new TextDecoder;Lt(this)}else e.text().then(this.Ra.bind(this),this.ga.bind(this))},e.Pa=function(e){if(this.g){if(this.o&&e.value)this.response.push(e.value);else if(!this.o){var t=e.value?e.value:new Uint8Array(0);(t=this.v.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?qt(this):Ut(this),3==this.readyState&&Lt(this)}},e.Ra=function(e){this.g&&(this.response=this.responseText=e,qt(this))},e.Qa=function(e){this.g&&(this.response=e,qt(this))},e.ga=function(){this.g&&qt(this)},e.setRequestHeader=function(e,t){this.u.append(e,t)},e.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},e.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Vt.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}}),l(zt,ce);var $t=/^https?$/i,Gt=["POST","PUT"];function Kt(e,t){e.h=!1,e.g&&(e.j=!0,e.g.abort(),e.j=!1),e.l=t,e.m=5,Qt(e),Wt(e)}function Qt(e){e.A||(e.A=!0,he(e,"complete"),he(e,"error"))}function Ht(e){if(e.h&&void 0!==r&&(!e.v[1]||4!=Yt(e)||2!=e.Z()))if(e.u&&4==Yt(e))de(e.Ea,0,e);else if(he(e,"readystatechange"),4==Yt(e)){e.h=!1;try{const r=e.Z();e:switch(r){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===r){var o=String(e.D).match(lt)[1]||null;!o&&s.self&&s.self.location&&(o=s.self.location.protocol.slice(0,-1)),i=!$t.test(o?o.toLowerCase():"")}n=i}if(n)he(e,"complete"),he(e,"success");else{e.m=6;try{var a=2<Yt(e)?e.g.statusText:""}catch(u){a=""}e.l=a+" ["+e.Z()+"]",Qt(e)}}finally{Wt(e)}}}function Wt(e,t){if(e.g){Xt(e);const r=e.g,s=e.v[0]?()=>{}:null;e.g=null,e.v=null,t||he(e,"ready");try{r.onreadystatechange=s}catch(n){}}}function Xt(e){e.I&&(s.clearTimeout(e.I),e.I=null)}function Yt(e){return e.g?e.g.readyState:0}function Jt(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.H){case"":case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function Zt(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function en(e){this.Aa=0,this.i=[],this.j=new Me,this.ia=this.qa=this.I=this.W=this.g=this.ya=this.D=this.H=this.m=this.S=this.o=null,this.Ya=this.U=0,this.Va=Zt("failFast",!1,e),this.F=this.C=this.u=this.s=this.l=null,this.X=!0,this.za=this.T=-1,this.Y=this.v=this.B=0,this.Ta=Zt("baseRetryDelayMs",5e3,e),this.cb=Zt("retryDelaySeedMs",1e4,e),this.Wa=Zt("forwardChannelMaxRetries",2,e),this.wa=Zt("forwardChannelRequestTimeoutMs",2e4,e),this.pa=e&&e.xmlHttpFactory||void 0,this.Xa=e&&e.Tb||void 0,this.Ca=e&&e.useFetchStreams||!1,this.L=void 0,this.J=e&&e.supportsCrossDomainXhr||!1,this.K="",this.h=new rt(e&&e.concurrentRequestLimit),this.Da=new Ft,this.P=e&&e.fastHandshake||!1,this.O=e&&e.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.Ua=e&&e.Rb||!1,e&&e.xa&&this.j.xa(),e&&e.forceLongPolling&&(this.X=!1),this.ba=!this.P&&this.X&&e&&e.detectBufferingProxy||!1,this.ja=void 0,e&&e.longPollingTimeout&&0<e.longPollingTimeout&&(this.ja=e.longPollingTimeout),this.ca=void 0,this.R=0,this.M=!1,this.ka=this.A=null}function tn(e){if(rn(e),3==e.G){var t=e.U++,n=ft(e.I);if(yt(n,"SID",e.K),yt(n,"RID",t),yt(n,"TYPE","terminate"),an(e,n),(t=new je(e,e.j,t)).L=2,t.v=wt(ft(n)),n=!1,s.navigator&&s.navigator.sendBeacon)try{n=s.navigator.sendBeacon(t.v.toString(),"")}catch(r){}!n&&s.Image&&((new Image).src=t.v,n=!0),n||(t.g=vn(t.j,null),t.g.ea(t.v)),t.F=Date.now(),Xe(t)}yn(e)}function nn(e){e.g&&(ln(e),e.g.cancel(),e.g=null)}function rn(e){nn(e),e.u&&(s.clearTimeout(e.u),e.u=null),fn(e),e.h.cancel(),e.s&&("number"==typeof e.s&&s.clearTimeout(e.s),e.s=null)}function sn(e){if(!st(e.h)&&!e.s){e.s=!0;var t=e.Ga;M||q(),V||(M(),V=!0),L.add(t,e),e.B=0}}function on(e,t){var n;n=t?t.l:e.U++;const r=ft(e.I);yt(r,"SID",e.K),yt(r,"RID",n),yt(r,"AID",e.T),an(e,r),e.m&&e.o&&jt(r,e.m,e.o),n=new je(e,e.j,n,e.B+1),null===e.m&&(n.H=e.o),t&&(e.i=t.D.concat(e.i)),t=un(e,n,1e3),n.I=Math.round(.5*e.wa)+Math.round(.5*e.wa*Math.random()),at(e.h,n),Ke(n,r,t)}function an(e,t){e.H&&w(e.H,function(e,n){yt(t,n,e)}),e.l&&ht({},function(e,n){yt(t,n,e)})}function un(e,t,n){n=Math.min(e.i.length,n);var r=e.l?c(e.l.Na,e.l,e):null;e:{var s=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=s[0].g,e.push("ofs="+t)):t=0:e.push("ofs="+t);let o=!0;for(let a=0;a<n;a++){let n=s[a].g;const u=s[a].map;if(n-=t,0>n)t=Math.max(0,s[a].g-100),o=!1;else try{Pt(u,e,"req"+n+"_")}catch(i){r&&r(u)}}if(o){r=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,r}function cn(e){if(!e.g&&!e.u){e.Y=1;var t=e.Fa;M||q(),V||(M(),V=!0),L.add(t,e),e.v=0}}function hn(e){return!(e.g||e.u||3<=e.v)&&(e.Y++,e.u=Pe(c(e.Fa,e),gn(e,e.v)),e.v++,!0)}function ln(e){null!=e.A&&(s.clearTimeout(e.A),e.A=null)}function dn(e){e.g=new je(e,e.j,"rpc",e.Y),null===e.m&&(e.g.H=e.o),e.g.O=0;var t=ft(e.qa);yt(t,"RID","rpc"),yt(t,"SID",e.K),yt(t,"AID",e.T),yt(t,"CI",e.F?"0":"1"),!e.F&&e.ja&&yt(t,"TO",e.ja),yt(t,"TYPE","xmlhttp"),an(e,t),e.m&&e.o&&jt(t,e.m,e.o),e.L&&(e.g.I=e.L);var n=e.g;e=e.ia,n.L=1,n.v=wt(ft(t)),n.m=null,n.P=!0,Qe(n,e)}function fn(e){null!=e.C&&(s.clearTimeout(e.C),e.C=null)}function mn(e,t){var n=null;if(e.g==t){fn(e),ln(e),e.g=null;var r=2}else{if(!ot(e.h,t))return;n=t.D,ut(e.h,t),r=1}if(0!=e.G)if(t.o)if(1==r){n=t.m?t.m.length:0,t=Date.now()-t.F;var s=e.B;he(r=De(),new Fe(r,n)),sn(e)}else cn(e);else if(3==(s=t.s)||0==s&&0<t.X||!(1==r&&function(e,t){return!(it(e.h)>=e.h.j-(e.s?1:0)||(e.s?(e.i=t.D.concat(e.i),0):1==e.G||2==e.G||e.B>=(e.Va?0:e.Wa)||(e.s=Pe(c(e.Ga,e,t),gn(e,e.B)),e.B++,0)))}(e,t)||2==r&&hn(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),s){case 1:pn(e,5);break;case 4:pn(e,10);break;case 3:pn(e,6);break;default:pn(e,2)}}function gn(e,t){let n=e.Ta+Math.floor(Math.random()*e.cb);return e.isActive()||(n*=2),n*t}function pn(e,t){if(e.j.info("Error code "+t),2==t){var n=c(e.fb,e),r=e.Xa;const t=!r;r=new dt(r||"//www.google.com/images/cleardot.gif"),s.location&&"http"==s.location.protocol||mt(r,"https"),wt(r),t?function(e,t){const n=new Me;if(s.Image){const r=new Image;r.onload=h(Ot,n,"TestLoadImage: loaded",!0,t,r),r.onerror=h(Ot,n,"TestLoadImage: error",!1,t,r),r.onabort=h(Ot,n,"TestLoadImage: abort",!1,t,r),r.ontimeout=h(Ot,n,"TestLoadImage: timeout",!1,t,r),s.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=e}else t(!1)}(r.toString(),n):function(e,t){new Me;const n=new AbortController,r=setTimeout(()=>{n.abort(),Ot(0,0,!1,t)},1e4);fetch(e,{signal:n.signal}).then(e=>{clearTimeout(r),e.ok?Ot(0,0,!0,t):Ot(0,0,!1,t)}).catch(()=>{clearTimeout(r),Ot(0,0,!1,t)})}(r.toString(),n)}else Oe(2);e.G=0,e.l&&e.l.sa(t),yn(e),rn(e)}function yn(e){if(e.G=0,e.ka=[],e.l){const t=ct(e.h);0==t.length&&0==e.i.length||(f(e.ka,t),f(e.ka,e.i),e.h.i.length=0,d(e.i),e.i.length=0),e.l.ra()}}function wn(e,t,n){var r=n instanceof dt?ft(n):new dt(n);if(""!=r.g)t&&(r.g=t+"."+r.g),gt(r,r.s);else{var i=s.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var o=new dt(null);r&&mt(o,r),t&&(o.g=t),i&&gt(o,i),n&&(o.l=n),r=o}return n=e.D,t=e.ya,n&&t&&yt(r,n,t),yt(r,"VER",e.la),an(e,r),r}function vn(e,t,n){if(t&&!e.J)throw Error("Can't create secondary domain capable XhrIo object.");return(t=e.Ca&&!e.pa?new zt(new Mt({eb:n})):new zt(e.pa)).Ha(e.J),t}function bn(){}function In(){}function Tn(e,t){ce.call(this),this.g=new en(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.o=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.va&&(e?e["X-WebChannel-Client-Profile"]=t.va:e={"X-WebChannel-Client-Profile":t.va}),this.g.S=e,(e=t&&t.Sb)&&!m(e)&&(this.g.m=e),this.v=t&&t.supportsCrossDomainXhr||!1,this.u=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!m(t)&&(this.g.D=t,null!==(e=this.h)&&t in e&&(t in(e=this.h)&&delete e[t])),this.j=new Sn(this)}function _n(e){Se.call(this),e.__headers__&&(this.headers=e.__headers__,this.statusCode=e.__status__,delete e.__headers__,delete e.__status__);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function En(){xe.call(this),this.status=1}function Sn(e){this.g=e}(e=zt.prototype).Ha=function(e){this.J=e},e.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.D+"; newUri="+e);t=t?t.toUpperCase():"GET",this.D=e,this.l="",this.m=0,this.A=!1,this.h=!0,this.g=this.o?this.o.g():Le.g(),this.v=this.o?Te(this.o):Te(Le),this.g.onreadystatechange=c(this.Ea,this);try{this.B=!0,this.g.open(t,String(e),!0),this.B=!1}catch(o){return void Kt(this,o)}if(e=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)n.set(i,r[i]);else{if("function"!=typeof r.keys||"function"!=typeof r.get)throw Error("Unknown input type for opt_headers: "+String(r));for(const e of r.keys())n.set(e,r.get(e))}r=Array.from(n.keys()).find(e=>"content-type"==e.toLowerCase()),i=s.FormData&&e instanceof s.FormData,!(0<=Array.prototype.indexOf.call(Gt,t,void 0))||r||i||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,a]of n)this.g.setRequestHeader(s,a);this.H&&(this.g.responseType=this.H),"withCredentials"in this.g&&this.g.withCredentials!==this.J&&(this.g.withCredentials=this.J);try{Xt(this),this.u=!0,this.g.send(e),this.u=!1}catch(o){Kt(this,o)}},e.abort=function(e){this.g&&this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1,this.m=e||7,he(this,"complete"),he(this,"abort"),Wt(this))},e.N=function(){this.g&&(this.h&&(this.h=!1,this.j=!0,this.g.abort(),this.j=!1),Wt(this,!0)),zt.aa.N.call(this)},e.Ea=function(){this.s||(this.B||this.u||this.j?Ht(this):this.bb())},e.bb=function(){Ht(this)},e.isActive=function(){return!!this.g},e.Z=function(){try{return 2<Yt(this)?this.g.status:-1}catch(e){return-1}},e.oa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},e.Oa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),ve(t)}},e.Ba=function(){return this.m},e.Ka=function(){return"string"==typeof this.l?this.l:String(this.l)},(e=en.prototype).la=8,e.G=1,e.connect=function(e,t,n,r){Oe(0),this.W=e,this.H=t||{},n&&void 0!==r&&(this.H.OSID=n,this.H.OAID=r),this.F=this.X,this.I=wn(this,null,this.W),sn(this)},e.Ga=function(e){if(this.s)if(this.s=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const s=new je(this,this.j,e);let i=this.o;if(this.S&&(i?(i=v(i),I(i,this.S)):i=this.S),null!==this.m||this.O||(s.H=i,i=null),this.P)e:{for(var t=0,n=0;n<this.i.length;n++){var r=this.i[n];if(void 0===(r="__data__"in r.map&&"string"==typeof(r=r.map.__data__)?r.length:void 0))break;if(4096<(t+=r)){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=un(this,s,t),yt(n=ft(this.I),"RID",e),yt(n,"CVER",22),this.D&&yt(n,"X-HTTP-Session-Id",this.D),an(this,n),i&&(this.O?t="headers="+encodeURIComponent(String(Bt(i)))+"&"+t:this.m&&jt(n,this.m,i)),at(this.h,s),this.Ua&&yt(n,"TYPE","init"),this.P?(yt(n,"$req",t),yt(n,"SID","null"),s.T=!0,Ke(s,n,null)):Ke(s,n,t),this.G=2}}else 3==this.G&&(e?on(this,e):0==this.i.length||st(this.h)||on(this))},e.Fa=function(){if(this.u=null,dn(this),this.ba&&!(this.M||null==this.g||0>=this.R)){var e=2*this.R;this.j.info("BP detection timer enabled: "+e),this.A=Pe(c(this.ab,this),e)}},e.ab=function(){this.A&&(this.A=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.F=!1,this.M=!0,Oe(10),nn(this),dn(this))},e.Za=function(){null!=this.C&&(this.C=null,nn(this),hn(this),Oe(19))},e.fb=function(e){e?(this.j.info("Successfully pinged google.com"),Oe(2)):(this.j.info("Failed to ping google.com"),Oe(1))},e.isActive=function(){return!!this.l&&this.l.isActive(this)},(e=bn.prototype).ua=function(){},e.ta=function(){},e.sa=function(){},e.ra=function(){},e.isActive=function(){return!0},e.Na=function(){},In.prototype.g=function(e,t){return new Tn(e,t)},l(Tn,ce),Tn.prototype.m=function(){this.g.l=this.j,this.v&&(this.g.J=!0),this.g.connect(this.l,this.h||void 0)},Tn.prototype.close=function(){tn(this.g)},Tn.prototype.o=function(e){var t=this.g;if("string"==typeof e){var n={};n.__data__=e,e=n}else this.u&&((n={}).__data__=we(e),e=n);t.i.push(new nt(t.Ya++,e)),3==t.G&&sn(t)},Tn.prototype.N=function(){this.g.l=null,delete this.j,tn(this.g),delete this.g,Tn.aa.N.call(this)},l(_n,Se),l(En,xe),l(Sn,bn),Sn.prototype.ua=function(){he(this.g,"a")},Sn.prototype.ta=function(e){he(this.g,new _n(e))},Sn.prototype.sa=function(e){he(this.g,new En)},Sn.prototype.ra=function(){he(this.g,"b")},In.prototype.createWebChannel=In.prototype.g,Tn.prototype.send=Tn.prototype.o,Tn.prototype.open=Tn.prototype.m,Tn.prototype.close=Tn.prototype.close,O=function(){return new In},R=function(){return De()},k=Ce,N={mb:0,pb:1,qb:2,Jb:3,Ob:4,Lb:5,Mb:6,Kb:7,Ib:8,Nb:9,PROXY:10,NOPROXY:11,Gb:12,Cb:13,Db:14,Bb:15,Eb:16,Fb:17,ib:18,hb:19,jb:20},qe.NO_ERROR=0,qe.TIMEOUT=8,qe.HTTP_ERROR=6,D=qe,Ue.COMPLETE="complete",A=Ue,_e.EventType=Ee,Ee.OPEN="a",Ee.CLOSE="b",Ee.ERROR="c",Ee.MESSAGE="d",ce.prototype.listen=ce.prototype.K,C=_e,zt.prototype.listenOnce=zt.prototype.L,zt.prototype.getLastError=zt.prototype.Ka,zt.prototype.getLastErrorCode=zt.prototype.Ba,zt.prototype.getStatus=zt.prototype.Z,zt.prototype.getResponseJson=zt.prototype.Oa,zt.prototype.getResponseText=zt.prototype.oa,zt.prototype.send=zt.prototype.ea,zt.prototype.setWithCredentials=zt.prototype.Ha,x=zt}).apply(void 0!==F?F:"undefined"!=typeof self?self:"undefined"!=typeof window?window:{});const P="@firebase/firestore",M="4.8.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class V{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}V.UNAUTHENTICATED=new V(null),V.GOOGLE_CREDENTIALS=new V("google-credentials-uid"),V.FIRST_PARTY=new V("first-party-uid"),V.MOCK_USER=new V("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let L="11.10.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const q=new n("@firebase/firestore");function U(){return q.logLevel}function B(e){q.setLogLevel(e)}function j(e,...t){if(q.logLevel<=r.DEBUG){const n=t.map(G);q.debug(`Firestore (${L}): ${e}`,...n)}}function z(e,...t){if(q.logLevel<=r.ERROR){const n=t.map(G);q.error(`Firestore (${L}): ${e}`,...n)}}function $(e,...t){if(q.logLevel<=r.WARN){const n=t.map(G);q.warn(`Firestore (${L}): ${e}`,...n)}}function G(e){if("string"==typeof e)return e;try{
/**
    * @license
    * Copyright 2020 Google LLC
    *
    * Licensed under the Apache License, Version 2.0 (the "License");
    * you may not use this file except in compliance with the License.
    * You may obtain a copy of the License at
    *
    *   http://www.apache.org/licenses/LICENSE-2.0
    *
    * Unless required by applicable law or agreed to in writing, software
    * distributed under the License is distributed on an "AS IS" BASIS,
    * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    * See the License for the specific language governing permissions and
    * limitations under the License.
    */
return t=e,JSON.stringify(t)}catch(n){return e}var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(e,t,n){let r="Unexpected state";"string"==typeof t?r=t:n=t,Q(e,r,n)}function Q(e,t,n){let r=`FIRESTORE (${L}) INTERNAL ASSERTION FAILED: ${t} (ID: ${e.toString(16)})`;if(void 0!==n)try{r+=" CONTEXT: "+JSON.stringify(n)}catch(s){r+=" CONTEXT: "+n}throw z(r),new Error(r)}function H(e,t,n,r){let s="Unexpected state";"string"==typeof n?s=n:r=n,e||Q(t,s,r)}function W(e,t){e||K(57014,t)}function X(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Y={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class J extends e{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z{constructor(){this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class te{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable(()=>t(V.UNAUTHENTICATED))}shutdown(){}}class ne{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable(()=>t(this.token.user))}shutdown(){this.changeListener=null}}class re{constructor(e){this.t=e,this.currentUser=V.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){H(void 0===this.o,42304);let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let s=new Z;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new Z,e.enqueueRetryable(()=>r(this.currentUser))};const i=()=>{const t=s;e.enqueueRetryable(async()=>{await t.promise,await r(this.currentUser)})},o=e=>{j("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.o&&(this.auth.addAuthTokenListener(this.o),i())};this.t.onInit(e=>o(e)),setTimeout(()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(j("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new Z)}},0),i()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then(t=>this.i!==e?(j("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(H("string"==typeof t.accessToken,31837,{l:t}),new ee(t.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.o&&this.auth.removeAuthTokenListener(this.o),this.o=void 0}u(){const e=this.auth&&this.auth.getUid();return H(null===e||"string"==typeof e,2055,{h:e}),new V(e)}}class se{constructor(e,t,n){this.P=e,this.T=t,this.I=n,this.type="FirstParty",this.user=V.FIRST_PARTY,this.A=new Map}R(){return this.I?this.I():null}get headers(){this.A.set("X-Goog-AuthUser",this.P);const e=this.R();return e&&this.A.set("Authorization",e),this.T&&this.A.set("X-Goog-Iam-Authorization-Token",this.T),this.A}}class ie{constructor(e,t,n){this.P=e,this.T=t,this.I=n}getToken(){return Promise.resolve(new se(this.P,this.T,this.I))}start(e,t){e.enqueueRetryable(()=>t(V.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class oe{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ae{constructor(e,t){this.V=t,this.forceRefresh=!1,this.appCheck=null,this.m=null,this.p=null,T(e)&&e.settings.appCheckToken&&(this.p=e.settings.appCheckToken)}start(e,t){H(void 0===this.o,3512);const n=e=>{null!=e.error&&j("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.m;return this.m=e.token,j("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable(()=>n(t))};const r=e=>{j("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.o&&this.appCheck.addTokenListener(this.o)};this.V.onInit(e=>r(e)),setTimeout(()=>{if(!this.appCheck){const e=this.V.getImmediate({optional:!0});e?r(e):j("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){if(this.p)return Promise.resolve(new oe(this.p));const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(e=>e?(H("string"==typeof e.token,44558,{tokenResult:e}),this.m=e.token,new oe(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.o&&this.appCheck.removeTokenListener(this.o),this.o=void 0}}class ue{getToken(){return Promise.resolve(new oe(""))}invalidateToken(){}start(e,t){}shutdown(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ce(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he(){return new TextEncoder}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{static newId(){const e=62*Math.floor(256/62);let t="";for(;t.length<20;){const n=ce(40);for(let r=0;r<n.length;++r)t.length<20&&n[r]<e&&(t+="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".charAt(n[r]%62))}return t}}function de(e,t){return e<t?-1:e>t?1:0}function fe(e,t){let n=0;for(;n<e.length&&n<t.length;){const r=e.codePointAt(n),s=t.codePointAt(n);if(r!==s){if(r<128&&s<128)return de(r,s);{const i=he(),o=ge(i.encode(me(e,n)),i.encode(me(t,n)));return 0!==o?o:de(r,s)}}n+=r>65535?2:1}return de(e.length,t.length)}function me(e,t){return e.codePointAt(t)>65535?e.substring(t,t+2):e.substring(t,t+1)}function ge(e,t){for(let n=0;n<e.length&&n<t.length;++n)if(e[n]!==t[n])return de(e[n],t[n]);return de(e.length,t.length)}function pe(e,t,n){return e.length===t.length&&e.every((e,r)=>n(e,t[r]))}function ye(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const we="__name__";class ve{constructor(e,t,n){void 0===t?t=0:t>e.length&&K(637,{offset:t,range:e.length}),void 0===n?n=e.length-t:n>e.length-t&&K(1746,{length:n,range:e.length-t}),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===ve.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof ve?e.forEach(e=>{t.push(e)}):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=ve.compareSegments(e.get(r),t.get(r));if(0!==n)return n}return de(e.length,t.length)}static compareSegments(e,t){const n=ve.isNumericId(e),r=ve.isNumericId(t);return n&&!r?-1:!n&&r?1:n&&r?ve.extractNumericId(e).compare(ve.extractNumericId(t)):fe(e,t)}static isNumericId(e){return e.startsWith("__id")&&e.endsWith("__")}static extractNumericId(e){return _.fromString(e.substring(4,e.length-2))}}class be extends ve{construct(e,t,n){return new be(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}toUriEncodedString(){return this.toArray().map(encodeURIComponent).join("/")}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new J(Y.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter(e=>e.length>0))}return new be(t)}static emptyPath(){return new be([])}}const Ie=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Te extends ve{construct(e,t,n){return new Te(e,t,n)}static isValidIdentifier(e){return Ie.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Te.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&this.get(0)===we}static keyField(){return new Te([we])}static fromServerFormat(e){const t=[];let n="",r=0;const s=()=>{if(0===n.length)throw new J(Y.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let i=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new J(Y.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new J(Y.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(i=!i,r++):"."!==t||i?(n+=t,r++):(s(),r++)}if(s(),i)throw new J(Y.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new Te(t)}static emptyPath(){return new Te([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _e{constructor(e){this.path=e}static fromPath(e){return new _e(be.fromString(e))}static fromName(e){return new _e(be.fromString(e).popFirst(5))}static empty(){return new _e(be.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===be.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return be.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new _e(new be(e.slice()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ee(e,t,n){if(!n)throw new J(Y.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Se(e,t,n,r){if(!0===t&&!0===r)throw new J(Y.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function xe(e){if(!_e.isDocumentKey(e))throw new J(Y.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function Ce(e){if(_e.isDocumentKey(e))throw new J(Y.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function Ae(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}function De(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const n=(t=e).constructor?t.constructor.name:null;return n?`a custom ${n} object`:"an object"}}var t;return"function"==typeof e?"a function":K(12329,{type:typeof e})}function Ne(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new J(Y.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=De(e);throw new J(Y.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function ke(e,t){if(t<=0)throw new J(Y.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Re(e,t){const n={typeString:e};return t&&(n.value=t),n}function Oe(e,t){if(!Ae(e))throw new J(Y.INVALID_ARGUMENT,"JSON must be an object");let n;for(const r in t)if(t[r]){const s=t[r].typeString,i="value"in t[r]?{value:t[r].value}:void 0;if(!(r in e)){n=`JSON missing required field: '${r}'`;break}const o=e[r];if(s&&typeof o!==s){n=`JSON field '${r}' must be a ${s}.`;break}if(void 0!==i&&o!==i.value){n=`Expected '${r}' field to equal '${i.value}'`;break}}if(n)throw new J(Y.INVALID_ARGUMENT,n);return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fe=-62135596800,Pe=1e6;class Me{static now(){return Me.fromMillis(Date.now())}static fromDate(e){return Me.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor((e-1e3*t)*Pe);return new Me(t,n)}constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new J(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new J(Y.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<Fe)throw new J(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new J(Y.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/Pe}_compareTo(e){return this.seconds===e.seconds?de(this.nanoseconds,e.nanoseconds):de(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{type:Me._jsonSchemaVersion,seconds:this.seconds,nanoseconds:this.nanoseconds}}static fromJSON(e){if(Oe(e,Me._jsonSchema))return new Me(e.seconds,e.nanoseconds)}valueOf(){const e=this.seconds-Fe;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}Me._jsonSchemaVersion="firestore/timestamp/1.0",Me._jsonSchema={type:Re("string",Me._jsonSchemaVersion),seconds:Re("number"),nanoseconds:Re("number")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ve{static fromTimestamp(e){return new Ve(e)}static min(){return new Ve(new Me(0,0))}static max(){return new Ve(new Me(253402300799,999999999))}constructor(e){this.timestamp=e}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=-1;class qe{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}function Ue(e){return e.fields.find(e=>2===e.kind)}function Be(e){return e.fields.filter(e=>2!==e.kind)}function je(e,t){let n=de(e.collectionGroup,t.collectionGroup);if(0!==n)return n;for(let r=0;r<Math.min(e.fields.length,t.fields.length);++r)if(n=$e(e.fields[r],t.fields[r]),0!==n)return n;return de(e.fields.length,t.fields.length)}qe.UNKNOWN_ID=-1;class ze{constructor(e,t){this.fieldPath=e,this.kind=t}}function $e(e,t){const n=Te.comparator(e.fieldPath,t.fieldPath);return 0!==n?n:de(e.kind,t.kind)}class Ge{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new Ge(0,He.min())}}function Ke(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,s=Ve.fromTimestamp(1e9===r?new Me(n+1,0):new Me(n,r));return new He(s,_e.empty(),t)}function Qe(e){return new He(e.readTime,e.key,Le)}class He{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new He(Ve.min(),_e.empty(),Le)}static max(){return new He(Ve.max(),_e.empty(),Le)}}function We(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=_e.comparator(e.documentKey,t.documentKey),0!==n?n:de(e.largestBatchId,t.largestBatchId)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}const Xe="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ye{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e){if(e.code!==Y.FAILED_PRECONDITION||e.message!==Xe)throw e;j("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ze{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&K(59440),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ze((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}})}toPromise(){return new Promise((e,t)=>{this.next(e,t)})}wrapUserFunction(e){try{const t=e();return t instanceof Ze?t:Ze.resolve(t)}catch(t){return Ze.reject(t)}}wrapSuccess(e,t){return e?this.wrapUserFunction(()=>e(t)):Ze.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction(()=>e(t)):Ze.reject(t)}static resolve(e){return new Ze((t,n)=>{t(e)})}static reject(e){return new Ze((t,n)=>{n(e)})}static waitFor(e){return new Ze((t,n)=>{let r=0,s=0,i=!1;e.forEach(e=>{++r,e.next(()=>{++s,i&&s===r&&t()},e=>n(e))}),i=!0,s===r&&t()})}static or(e){let t=Ze.resolve(!1);for(const n of e)t=t.next(e=>e?Ze.resolve(e):n());return t}static forEach(e,t){const n=[];return e.forEach((e,r)=>{n.push(t.call(this,e,r))}),this.waitFor(n)}static mapArray(e,t){return new Ze((n,r)=>{const s=e.length,i=new Array(s);let o=0;for(let a=0;a<s;a++){const u=a;t(e[u]).next(e=>{i[u]=e,++o,o===s&&n(i)},e=>r(e))}})}static doWhile(e,t){return new Ze((n,r)=>{const s=()=>{!0===e()?t().next(()=>{s()},r):n()};s()})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="SimpleDb";class tt{static open(e,t,n,r){try{return new tt(t,e.transaction(r,n))}catch(s){throw new it(t,s)}}constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.S=new Z,this.transaction.oncomplete=()=>{this.S.resolve()},this.transaction.onabort=()=>{t.error?this.S.reject(new it(e,t.error)):this.S.resolve()},this.transaction.onerror=t=>{const n=ht(t.target.error);this.S.reject(new it(e,n))}}get D(){return this.S.promise}abort(e){e&&this.S.reject(e),this.aborted||(j(et,"Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}v(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new at(t)}}class nt{static delete(e){return j(et,"Removing database:",e),ut(f().indexedDB.deleteDatabase(e)).toPromise()}static C(){if(!m())return!1;if(nt.F())return!0;const e=g(),t=nt.M(e),n=0<t&&t<10,r=rt(e),s=0<r&&r<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||s)}static F(){var e;return"undefined"!=typeof process&&"YES"===(null===(e=process.__PRIVATE_env)||void 0===e?void 0:e.O)}static N(e,t){return e.store(t)}static M(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}constructor(e,t,n){this.name=e,this.version=t,this.B=n,this.L=null,12.2===nt.M(g())&&z("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}async k(e){return this.db||(j(et,"Opening database:",this.name),this.db=await new Promise((t,n)=>{const r=indexedDB.open(this.name,this.version);r.onsuccess=e=>{const n=e.target.result;t(n)},r.onblocked=()=>{n(new it(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},r.onerror=t=>{const r=t.target.error;"VersionError"===r.name?n(new J(Y.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===r.name?n(new J(Y.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+r)):n(new it(e,r))},r.onupgradeneeded=e=>{j(et,'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;if(null!==this.L&&this.L!==e.oldVersion)throw new Error(`refusing to open IndexedDB database due to potential corruption of the IndexedDB database data; this corruption could be caused by clicking the "clear site data" button in a web browser; try reloading the web page to re-initialize the IndexedDB database: lastClosedDbVersion=${this.L}, event.oldVersion=${e.oldVersion}, event.newVersion=${e.newVersion}, db.version=${t.version}`);this.B.q(t,r.transaction,e.oldVersion,this.version).next(()=>{j(et,"Database upgrade to version "+this.version+" complete")})}}),this.db.addEventListener("close",e=>{const t=e.target;this.L=t.version},{passive:!0})),this.db.addEventListener("versionchange",e=>{var t;null===e.newVersion&&($('Received "versionchange" event with newVersion===null; notifying the registered DatabaseDeletedListener, if any'),null===(t=this.databaseDeletedListener)||void 0===t||t.call(this))},{passive:!0}),this.db}setDatabaseDeletedListener(e){if(this.databaseDeletedListener)throw new Error("setDatabaseDeletedListener() may only be called once, and it has already been called");this.databaseDeletedListener=e}async runTransaction(e,t,n,r){const s="readonly"===t;let i=0;for(;;){++i;try{this.db=await this.k(e);const t=tt.open(this.db,e,s?"readonly":"readwrite",n),i=r(t).next(e=>(t.v(),e)).catch(e=>(t.abort(e),Ze.reject(e))).toPromise();return i.catch(()=>{}),await t.D,i}catch(o){const e=o,t="FirebaseError"!==e.name&&i<3;if(j(et,"Transaction failed with error:",e.message,"Retrying:",t),this.close(),!t)return Promise.reject(e)}}}close(){this.db&&this.db.close(),this.db=void 0}}function rt(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}class st{constructor(e){this.$=e,this.U=!1,this.K=null}get isDone(){return this.U}get W(){return this.K}set cursor(e){this.$=e}done(){this.U=!0}G(e){this.K=e}delete(){return ut(this.$.delete())}}class it extends J{constructor(e,t){super(Y.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function ot(e){return"IndexedDbTransactionError"===e.name}class at{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(j(et,"PUT",this.store.name,e,t),n=this.store.put(t,e)):(j(et,"PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),ut(n)}add(e){return j(et,"ADD",this.store.name,e,e),ut(this.store.add(e))}get(e){return ut(this.store.get(e)).next(t=>(void 0===t&&(t=null),j(et,"GET",this.store.name,e,t),t))}delete(e){return j(et,"DELETE",this.store.name,e),ut(this.store.delete(e))}count(){return j(et,"COUNT",this.store.name),ut(this.store.count())}j(e,t){const n=this.options(e,t),r=n.index?this.store.index(n.index):this.store;if("function"==typeof r.getAll){const e=r.getAll(n.range);return new Ze((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}})}{const e=this.cursor(n),t=[];return this.J(e,(e,n)=>{t.push(n)}).next(()=>t)}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Ze((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}})}Y(e,t){j(et,"DELETE ALL",this.store.name);const n=this.options(e,t);n.Z=!1;const r=this.cursor(n);return this.J(r,(e,t,n)=>n.delete())}X(e,t){let n;t?n=e:(n={},t=e);const r=this.cursor(n);return this.J(r,t)}ee(e){const t=this.cursor({});return new Ze((n,r)=>{t.onerror=e=>{const t=ht(e.target.error);r(t)},t.onsuccess=t=>{const r=t.target.result;r?e(r.primaryKey,r.value).next(e=>{e?r.continue():n()}):n()}})}J(e,t){const n=[];return new Ze((r,s)=>{e.onerror=e=>{s(e.target.error)},e.onsuccess=e=>{const s=e.target.result;if(!s)return void r();const i=new st(s),o=t(s.primaryKey,s.value,i);if(o instanceof Ze){const e=o.catch(e=>(i.done(),Ze.reject(e)));n.push(e)}i.isDone?r():null===i.W?s.continue():s.continue(i.W)}}).next(()=>Ze.waitFor(n))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Z?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function ut(e){return new Ze((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=ht(e.target.error);n(t)}})}let ct=!1;function ht(e){const t=nt.M(g());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new J("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return ct||(ct=!0,setTimeout(()=>{throw e},0)),e}}return e}const lt="IndexBackfiller";class dt{constructor(e,t){this.asyncQueue=e,this.te=t,this.task=null}start(){this.ne(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}ne(e){j(lt,`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,async()=>{this.task=null;try{const e=await this.te.re();j(lt,`Documents written: ${e}`)}catch(e){ot(e)?j(lt,"Ignoring IndexedDB error during index backfill: ",e):await Je(e)}await this.ne(6e4)})}}class ft{constructor(e,t){this.localStore=e,this.persistence=t}async re(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",t=>this.ie(t,e))}ie(e,t){const n=new Set;let r=t,s=!0;return Ze.doWhile(()=>!0===s&&r>0,()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next(t=>{if(null!==t&&!n.has(t))return j(lt,`Processing collection: ${t}`),this.se(e,t,r).next(e=>{r-=e,n.add(t)});s=!1})).next(()=>t-r)}se(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next(r=>this.localStore.localDocuments.getNextDocuments(e,t,r,n).next(n=>{const s=n.changes;return this.localStore.indexManager.updateIndexEntries(e,s).next(()=>this.oe(r,n)).next(n=>(j(lt,`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n))).next(()=>s.size)}))}oe(e,t){let n=e;return t.changes.forEach((e,t)=>{const r=Qe(t);We(r,n)>0&&(n=r)}),new He(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this._e(e),this.ae=e=>t.writeSequenceNumber(e))}_e(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ae&&this.ae(e),e}}mt.ue=-1;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gt=-1;function pt(e){return null==e}function yt(e){return 0===e&&1/e==-1/0}function wt(e){return"number"==typeof e&&Number.isInteger(e)&&!yt(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vt="";function bt(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Tt(t)),t=It(e.get(n),t);return Tt(t)}function It(e,t){let n=t;const r=e.length;for(let s=0;s<r;s++){const t=e.charAt(s);switch(t){case"\0":n+="";break;case vt:n+="";break;default:n+=t}}return n}function Tt(e){return e+vt+""}function _t(e){const t=e.length;if(H(t>=2,64408,{path:e}),2===t)return H(e.charAt(0)===vt&&""===e.charAt(1),56145,{path:e}),be.emptyPath();const n=t-2,r=[];let s="";for(let i=0;i<t;){const t=e.indexOf(vt,i);switch((t<0||t>n)&&K(50515,{path:e}),e.charAt(t+1)){case"":const n=e.substring(i,t);let o;0===s.length?o=n:(s+=n,o=s,s=""),r.push(o);break;case"":s+=e.substring(i,t),s+="\0";break;case"":s+=e.substring(i,t+1);break;default:K(61167,{path:e})}i=t+2}return new be(r)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Et="remoteDocuments",St="owner",xt="owner",Ct="mutationQueues",At="mutations",Dt="batchId",Nt="userMutationsIndex",kt=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e,t){return[e,bt(t)]}function Ot(e,t,n){return[e,bt(t),n]}const Ft={},Pt="documentMutations",Mt="remoteDocumentsV14",Vt=["prefixPath","collectionGroup","readTime","documentId"],Lt="documentKeyIndex",qt=["prefixPath","collectionGroup","documentId"],Ut="collectionGroupIndex",Bt=["collectionGroup","readTime","prefixPath","documentId"],jt="remoteDocumentGlobal",zt="remoteDocumentGlobalKey",$t="targets",Gt="queryTargetsIndex",Kt=["canonicalId","targetId"],Qt="targetDocuments",Ht=["targetId","path"],Wt="documentTargetsIndex",Xt=["path","targetId"],Yt="targetGlobalKey",Jt="targetGlobal",Zt="collectionParents",en=["collectionId","parent"],tn="clientMetadata",nn="bundles",rn="namedQueries",sn="indexConfiguration",on="collectionGroupIndex",an="indexState",un=["indexId","uid"],cn="sequenceNumberIndex",hn=["uid","sequenceNumber"],ln="indexEntries",dn=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],fn="documentKeyIndex",mn=["indexId","uid","orderedDocumentKey"],gn="documentOverlays",pn=["userId","collectionPath","documentId"],yn="collectionPathOverlayIndex",wn=["userId","collectionPath","largestBatchId"],vn="collectionGroupOverlayIndex",bn=["userId","collectionGroup","largestBatchId"],In="globals",Tn=[Ct,At,Pt,Et,$t,St,Jt,Qt,tn,jt,Zt,nn,rn],_n=[...Tn,gn],En=[Ct,At,Pt,Mt,$t,St,Jt,Qt,tn,jt,Zt,nn,rn,gn],Sn=En,xn=[...Sn,sn,an,ln],Cn=xn,An=[...xn,In],Dn=An;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nn extends Ye{constructor(e,t){super(),this.ce=e,this.currentSequenceNumber=t}}function kn(e,t){const n=X(e);return nt.N(n.ce,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rn(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function On(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Fn(e,t){const n=[];for(const r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.push(t(e[r],r,e));return n}function Pn(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(e,t){this.comparator=e,this.root=t||Ln.EMPTY}insert(e,t){return new Mn(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Ln.BLACK,null,null))}remove(e){return new Mn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Ln.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((t,n)=>(e(t,n),!1))}toString(){const e=[];return this.inorderTraversal((t,n)=>(e.push(`${t}:${n}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Vn(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Vn(this.root,e,this.comparator,!1)}getReverseIterator(){return new Vn(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Vn(this.root,e,this.comparator,!0)}}class Vn{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let s=1;for(;!e.isEmpty();)if(s=t?n(e.key,t):1,t&&r&&(s*=-1),s<0)e=this.isReverse?e.left:e.right;else{if(0===s){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Ln{constructor(e,t,n,r,s){this.key=e,this.value=t,this.color=null!=n?n:Ln.RED,this.left=null!=r?r:Ln.EMPTY,this.right=null!=s?s:Ln.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,s){return new Ln(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=s?s:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const s=n(e,r.key);return r=s<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===s?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Ln.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Ln.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Ln.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Ln.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw K(43730,{key:this.key,value:this.value});if(this.right.isRed())throw K(14113,{key:this.key,value:this.value});const e=this.left.check();if(e!==this.right.check())throw K(27949);return e+(this.isRed()?0:1)}}Ln.EMPTY=null,Ln.RED=!0,Ln.BLACK=!1,Ln.EMPTY=new class{constructor(){this.size=0}get key(){throw K(57766)}get value(){throw K(16141)}get color(){throw K(16727)}get left(){throw K(29726)}get right(){throw K(36894)}copy(e,t,n,r,s){return this}insert(e,t,n){return new Ln(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qn{constructor(e){this.comparator=e,this.data=new Mn(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((t,n)=>(e(t),!1))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Un(this.data.getIterator())}getIteratorFrom(e){return new Un(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach(e=>{t=t.add(e)}),t}isEqual(e){if(!(e instanceof qn))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach(t=>{e.push(t)}),e}toString(){const e=[];return this.forEach(t=>e.push(t)),"SortedSet("+e.toString()+")"}copy(e){const t=new qn(this.comparator);return t.data=e,t}}class Un{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Bn(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(e){this.fields=e,e.sort(Te.comparator)}static empty(){return new jn([])}unionWith(e){let t=new qn(Te.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new jn(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return pe(this.fields,e.fields,(e,t)=>e.isEqual(t))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $n(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gn{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(t){throw"undefined"!=typeof DOMException&&t instanceof DOMException?new zn("Invalid base64 string: "+t):t}}(e);return new Gn(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Gn(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return de(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Gn.EMPTY_BYTE_STRING=new Gn("");const Kn=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Qn(e){if(H(!!e,39018),"string"==typeof e){let t=0;const n=Kn.exec(e);if(H(!!n,46558,{timestamp:e}),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Hn(e.seconds),nanos:Hn(e.nanos)}}function Hn(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Wn(e){return"string"==typeof e?Gn.fromBase64String(e):Gn.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xn="server_timestamp",Yn="__type__",Jn="__previous_value__",Zn="__local_write_time__";function er(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[Yn])||void 0===n?void 0:n.stringValue)===Xn}function tr(e){const t=e.mapValue.fields[Jn];return er(t)?tr(t):t}function nr(e){const t=Qn(e.mapValue.fields[Zn].timestampValue);return new Me(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t,n,r,s,i,o,a,u,c){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=s,this.forceLongPolling=i,this.autoDetectLongPolling=o,this.longPollingOptions=a,this.useFetchStreams=u,this.isUsingEmulator=c}}const sr="(default)";class ir{constructor(e,t){this.projectId=e,this.database=t||sr}static empty(){return new ir("","")}get isDefaultDatabase(){return this.database===sr}isEqual(e){return e instanceof ir&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const or="__type__",ar="__max__",ur={mapValue:{fields:{__type__:{stringValue:ar}}}},cr="__vector__",hr="value",lr={nullValue:"NULL_VALUE"};function dr(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?er(e)?4:Dr(e)?9007199254740991:Cr(e)?10:11:K(28295,{value:e})}function fr(e,t){if(e===t)return!0;const n=dr(e);if(n!==dr(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return nr(e).isEqual(nr(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Qn(e.timestampValue),r=Qn(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return r=t,Wn(e.bytesValue).isEqual(Wn(r.bytesValue));case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Hn(e.geoPointValue.latitude)===Hn(t.geoPointValue.latitude)&&Hn(e.geoPointValue.longitude)===Hn(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Hn(e.integerValue)===Hn(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Hn(e.doubleValue),r=Hn(t.doubleValue);return n===r?yt(n)===yt(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return pe(e.arrayValue.values||[],t.arrayValue.values||[],fr);case 10:case 11:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Rn(n)!==Rn(r))return!1;for(const s in n)if(n.hasOwnProperty(s)&&(void 0===r[s]||!fr(n[s],r[s])))return!1;return!0}(e,t);default:return K(52216,{left:e})}var r}function mr(e,t){return void 0!==(e.values||[]).find(e=>fr(e,t))}function gr(e,t){if(e===t)return 0;const n=dr(e),r=dr(t);if(n!==r)return de(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return de(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Hn(e.integerValue||e.doubleValue),r=Hn(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return pr(e.timestampValue,t.timestampValue);case 4:return pr(nr(e),nr(t));case 5:return fe(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Wn(e),r=Wn(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let s=0;s<n.length&&s<r.length;s++){const e=de(n[s],r[s]);if(0!==e)return e}return de(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=de(Hn(e.latitude),Hn(t.latitude));return 0!==n?n:de(Hn(e.longitude),Hn(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return yr(e.arrayValue,t.arrayValue);case 10:return function(e,t){var n,r,s,i;const o=e.fields||{},a=t.fields||{},u=null===(n=o[hr])||void 0===n?void 0:n.arrayValue,c=null===(r=a[hr])||void 0===r?void 0:r.arrayValue,h=de((null===(s=null==u?void 0:u.values)||void 0===s?void 0:s.length)||0,(null===(i=null==c?void 0:c.values)||void 0===i?void 0:i.length)||0);return 0!==h?h:yr(u,c)}(e.mapValue,t.mapValue);case 11:return function(e,t){if(e===ur.mapValue&&t===ur.mapValue)return 0;if(e===ur.mapValue)return 1;if(t===ur.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),s=t.fields||{},i=Object.keys(s);r.sort(),i.sort();for(let o=0;o<r.length&&o<i.length;++o){const e=fe(r[o],i[o]);if(0!==e)return e;const t=gr(n[r[o]],s[i[o]]);if(0!==t)return t}return de(r.length,i.length)}(e.mapValue,t.mapValue);default:throw K(23264,{le:n})}}function pr(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return de(e,t);const n=Qn(e),r=Qn(t),s=de(n.seconds,r.seconds);return 0!==s?s:de(n.nanos,r.nanos)}function yr(e,t){const n=e.values||[],r=t.values||[];for(let s=0;s<n.length&&s<r.length;++s){const e=gr(n[s],r[s]);if(e)return e}return de(n.length,r.length)}function wr(e){return vr(e)}function vr(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Qn(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Wn(e.bytesValue).toBase64():"referenceValue"in e?function(e){return _e.fromName(e).toString()}(e.referenceValue):"geoPointValue"in e?function(e){return`geo(${e.latitude},${e.longitude})`}(e.geoPointValue):"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=vr(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const s of t)r?r=!1:n+=",",n+=`${s}:${vr(e.fields[s])}`;return n+"}"}(e.mapValue):K(61005,{value:e})}function br(e){switch(dr(e)){case 0:case 1:return 4;case 2:return 8;case 3:case 8:return 16;case 4:const t=tr(e);return t?16+br(t):16;case 5:return 2*e.stringValue.length;case 6:return Wn(e.bytesValue).approximateByteSize();case 7:return e.referenceValue.length;case 9:return(e.arrayValue.values||[]).reduce((e,t)=>e+br(t),0);case 10:case 11:return function(e){let t=0;return On(e.fields,(e,n)=>{t+=e.length+br(n)}),t}(e.mapValue);default:throw K(13486,{value:e})}}function Ir(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Tr(e){return!!e&&"integerValue"in e}function _r(e){return!!e&&"arrayValue"in e}function Er(e){return!!e&&"nullValue"in e}function Sr(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function xr(e){return!!e&&"mapValue"in e}function Cr(e){var t,n;return(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{})[or])||void 0===n?void 0:n.stringValue)===cr}function Ar(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return On(e.mapValue.fields,(e,n)=>t.mapValue.fields[e]=Ar(n)),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ar(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Dr(e){return(((e.mapValue||{}).fields||{}).__type__||{}).stringValue===ar}const Nr={mapValue:{fields:{[or]:{stringValue:cr},[hr]:{arrayValue:{}}}}};function kr(e){return"nullValue"in e?lr:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Ir(ir.empty(),_e.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?Cr(e)?Nr:{mapValue:{}}:K(35942,{value:e})}function Rr(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Ir(ir.empty(),_e.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?Nr:"mapValue"in e?Cr(e)?{mapValue:{}}:ur:K(61959,{value:e})}function Or(e,t){const n=gr(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function Fr(e,t){const n=gr(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e){this.value=e}static empty(){return new Pr({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!xr(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ar(t)}setAll(e){let t=Te.emptyPath(),n={},r=[];e.forEach((e,s)=>{if(!t.isImmediateParentOf(s)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=s.popLast()}e?n[s.lastSegment()]=Ar(e):r.push(s.lastSegment())});const s=this.getFieldsMap(t);this.applyChanges(s,n,r)}delete(e){const t=this.field(e.popLast());xr(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return fr(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];xr(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){On(t,(t,n)=>e[t]=n);for(const r of n)delete e[r]}clone(){return new Pr(Ar(this.value))}}function Mr(e){const t=[];return On(e.fields,(e,n)=>{const r=new Te([e]);if(xr(n)){const e=Mr(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)}),new jn(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Vr{constructor(e,t,n,r,s,i,o){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.createTime=s,this.data=i,this.documentState=o}static newInvalidDocument(e){return new Vr(e,0,Ve.min(),Ve.min(),Ve.min(),Pr.empty(),0)}static newFoundDocument(e,t,n,r){return new Vr(e,1,t,Ve.min(),n,r,0)}static newNoDocument(e,t){return new Vr(e,2,t,Ve.min(),Ve.min(),Pr.empty(),0)}static newUnknownDocument(e,t){return new Vr(e,3,t,Ve.min(),Ve.min(),Pr.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(Ve.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Pr.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Pr.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ve.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Vr&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new Vr(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(e,t){this.position=e,this.inclusive=t}}function qr(e,t,n){let r=0;for(let s=0;s<e.position.length;s++){const i=t[s],o=e.position[s];if(r=i.field.isKeyField()?_e.comparator(_e.fromName(o.referenceValue),n.key):gr(o,n.data.field(i.field)),"desc"===i.dir&&(r*=-1),0!==r)break}return r}function Ur(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!fr(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Br{constructor(e,t="asc"){this.field=e,this.dir=t}}function jr(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{}class $r extends zr{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new es(e,t,n):"array-contains"===t?new ss(e,n):"in"===t?new is(e,n):"not-in"===t?new os(e,n):"array-contains-any"===t?new as(e,n):new $r(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new ts(e,n):new ns(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&void 0===t.nullValue&&this.matchesComparison(gr(t,this.value)):null!==t&&dr(this.value)===dr(t)&&this.matchesComparison(gr(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return K(47266,{operator:this.op})}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class Gr extends zr{constructor(e,t){super(),this.filters=e,this.op=t,this.he=null}static create(e,t){return new Gr(e,t)}matches(e){return Kr(this)?void 0===this.filters.find(t=>!t.matches(e)):void 0!==this.filters.find(t=>t.matches(e))}getFlattenedFilters(){return null!==this.he||(this.he=this.filters.reduce((e,t)=>e.concat(t.getFlattenedFilters()),[])),this.he}getFilters(){return Object.assign([],this.filters)}}function Kr(e){return"and"===e.op}function Qr(e){return"or"===e.op}function Hr(e){return Wr(e)&&Kr(e)}function Wr(e){for(const t of e.filters)if(t instanceof Gr)return!1;return!0}function Xr(e){if(e instanceof $r)return e.field.canonicalString()+e.op.toString()+wr(e.value);if(Hr(e))return e.filters.map(e=>Xr(e)).join(",");{const t=e.filters.map(e=>Xr(e)).join(",");return`${e.op}(${t})`}}function Yr(e,t){return e instanceof $r?(n=e,(r=t)instanceof $r&&n.op===r.op&&n.field.isEqual(r.field)&&fr(n.value,r.value)):e instanceof Gr?function(e,t){return t instanceof Gr&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce((e,n,r)=>e&&Yr(n,t.filters[r]),!0)}(e,t):void K(19439);var n,r}function Jr(e,t){const n=e.filters.concat(t);return Gr.create(n,e.op)}function Zr(e){return e instanceof $r?`${(t=e).field.canonicalString()} ${t.op} ${wr(t.value)}`:e instanceof Gr?function(e){return e.op.toString()+" {"+e.getFilters().map(Zr).join(" ,")+"}"}(e):"Filter";var t}class es extends $r{constructor(e,t,n){super(e,t,n),this.key=_e.fromName(n.referenceValue)}matches(e){const t=_e.comparator(e.key,this.key);return this.matchesComparison(t)}}class ts extends $r{constructor(e,t){super(e,"in",t),this.keys=rs("in",t)}matches(e){return this.keys.some(t=>t.isEqual(e.key))}}class ns extends $r{constructor(e,t){super(e,"not-in",t),this.keys=rs("not-in",t)}matches(e){return!this.keys.some(t=>t.isEqual(e.key))}}function rs(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map(e=>_e.fromName(e.referenceValue))}class ss extends $r{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return _r(t)&&mr(t.arrayValue,this.value)}}class is extends $r{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&mr(this.value.arrayValue,t)}}class os extends $r{constructor(e,t){super(e,"not-in",t)}matches(e){if(mr(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&void 0===t.nullValue&&!mr(this.value.arrayValue,t)}}class as extends $r{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!_r(t)||!t.arrayValue.values)&&t.arrayValue.values.some(e=>mr(this.value.arrayValue,e))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class us{constructor(e,t=null,n=[],r=[],s=null,i=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=s,this.startAt=i,this.endAt=o,this.Pe=null}}function cs(e,t=null,n=[],r=[],s=null,i=null,o=null){return new us(e,t,n,r,s,i,o)}function hs(e){const t=X(e);if(null===t.Pe){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(e=>Xr(e)).join(","),e+="|ob:",e+=t.orderBy.map(e=>{return(t=e).field.canonicalString()+t.dir;var t}).join(","),pt(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(e=>wr(e)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(e=>wr(e)).join(",")),t.Pe=e}return t.Pe}function ls(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!jr(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!Yr(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ur(e.startAt,t.startAt)&&Ur(e.endAt,t.endAt)}function ds(e){return _e.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function fs(e,t){return e.filters.filter(e=>e instanceof $r&&e.field.isEqual(t))}function ms(e,t,n){let r=lr,s=!0;for(const i of fs(e,t)){let e=lr,t=!0;switch(i.op){case"<":case"<=":e=kr(i.value);break;case"==":case"in":case">=":e=i.value;break;case">":e=i.value,t=!1;break;case"!=":case"not-in":e=lr}Or({value:r,inclusive:s},{value:e,inclusive:t})<0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];Or({value:r,inclusive:s},{value:e,inclusive:n.inclusive})<0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}function gs(e,t,n){let r=ur,s=!0;for(const i of fs(e,t)){let e=ur,t=!0;switch(i.op){case">=":case">":e=Rr(i.value),t=!1;break;case"==":case"in":case"<=":e=i.value;break;case"<":e=i.value,t=!1;break;case"!=":case"not-in":e=ur}Fr({value:r,inclusive:s},{value:e,inclusive:t})>0&&(r=e,s=t)}if(null!==n)for(let i=0;i<e.orderBy.length;++i)if(e.orderBy[i].field.isEqual(t)){const e=n.position[i];Fr({value:r,inclusive:s},{value:e,inclusive:n.inclusive})>0&&(r=e,s=n.inclusive);break}return{value:r,inclusive:s}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(e,t=null,n=[],r=[],s=null,i="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=s,this.limitType=i,this.startAt=o,this.endAt=a,this.Te=null,this.Ie=null,this.de=null,this.startAt,this.endAt}}function ys(e,t,n,r,s,i,o,a){return new ps(e,t,n,r,s,i,o,a)}function ws(e){return new ps(e)}function vs(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function bs(e){return null!==e.collectionGroup}function Is(e){const t=X(e);if(null===t.Te){t.Te=[];const e=new Set;for(const r of t.explicitOrderBy)t.Te.push(r),e.add(r.field.canonicalString());const n=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(e){let t=new qn(Te.comparator);return e.filters.forEach(e=>{e.getFlattenedFilters().forEach(e=>{e.isInequality()&&(t=t.add(e.field))})}),t})(t).forEach(r=>{e.has(r.canonicalString())||r.isKeyField()||t.Te.push(new Br(r,n))}),e.has(Te.keyField().canonicalString())||t.Te.push(new Br(Te.keyField(),n))}return t.Te}function Ts(e){const t=X(e);return t.Ie||(t.Ie=Es(t,Is(e))),t.Ie}function _s(e){const t=X(e);return t.de||(t.de=Es(t,e.explicitOrderBy)),t.de}function Es(e,t){if("F"===e.limitType)return cs(e.path,e.collectionGroup,t,e.filters,e.limit,e.startAt,e.endAt);{t=t.map(e=>{const t="desc"===e.dir?"asc":"desc";return new Br(e.field,t)});const n=e.endAt?new Lr(e.endAt.position,e.endAt.inclusive):null,r=e.startAt?new Lr(e.startAt.position,e.startAt.inclusive):null;return cs(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}}function Ss(e,t){const n=e.filters.concat([t]);return new ps(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function xs(e,t,n){return new ps(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Cs(e,t){return ls(Ts(e),Ts(t))&&e.limitType===t.limitType}function As(e){return`${hs(Ts(e))}|lt:${e.limitType}`}function Ds(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map(e=>Zr(e)).join(", ")}]`),pt(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map(e=>{return`${(t=e).field.canonicalString()} (${t.dir})`;var t}).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map(e=>wr(e)).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map(e=>wr(e)).join(",")),`Target(${t})`}(Ts(e))}; limitType=${e.limitType})`}function Ns(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):_e.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Is(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&(r=t,!((n=e).startAt&&!function(e,t,n){const r=qr(e,t,n);return e.inclusive?r<=0:r<0}(n.startAt,Is(n),r)||n.endAt&&!function(e,t,n){const r=qr(e,t,n);return e.inclusive?r>=0:r>0}(n.endAt,Is(n),r)));var n,r}function ks(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Rs(e){return(t,n)=>{let r=!1;for(const s of Is(e)){const e=Os(s,t,n);if(0!==e)return e;r=r||s.field.isKeyField()}return 0}}function Os(e,t,n){const r=e.field.isKeyField()?_e.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),s=n.data.field(e);return null!==r&&null!==s?gr(r,s):K(42886)}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return K(19790,{direction:e.dir})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fs{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,s]of n)if(this.equalsFn(r,e))return s}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return void(r[s]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){On(this.inner,(t,n)=>{for(const[r,s]of n)e(r,s)})}isEmpty(){return Pn(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ps=new Mn(_e.comparator);function Ms(){return Ps}const Vs=new Mn(_e.comparator);function Ls(...e){let t=Vs;for(const n of e)t=t.insert(n.key,n);return t}function qs(e){let t=Vs;return e.forEach((e,n)=>t=t.insert(e,n.overlayedDocument)),t}function Us(){return js()}function Bs(){return js()}function js(){return new Fs(e=>e.toString(),(e,t)=>e.isEqual(t))}const zs=new Mn(_e.comparator),$s=new qn(_e.comparator);function Gs(...e){let t=$s;for(const n of e)t=t.add(n);return t}const Ks=new qn(de);function Qs(){return Ks}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hs(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:yt(t)?"-0":t}}function Ws(e){return{integerValue:""+e}}function Xs(e,t){return wt(t)?Ws(t):Hs(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ys{constructor(){this._=void 0}}function Js(e,t,n){return e instanceof ti?function(e,t){const n={fields:{[Yn]:{stringValue:Xn},[Zn]:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&er(t)&&(t=tr(t)),t&&(n.fields[Jn]=t),{mapValue:n}}(n,t):e instanceof ni?ri(e,t):e instanceof si?ii(e,t):function(e,t){const n=ei(e,t),r=ai(n)+ai(e.Ee);return Tr(n)&&Tr(e.Ee)?Ws(r):Hs(e.serializer,r)}(e,t)}function Zs(e,t,n){return e instanceof ni?ri(e,t):e instanceof si?ii(e,t):n}function ei(e,t){return e instanceof oi?Tr(n=t)||(r=n)&&"doubleValue"in r?t:{integerValue:0}:null;var n,r}class ti extends Ys{}class ni extends Ys{constructor(e){super(),this.elements=e}}function ri(e,t){const n=ui(t);for(const r of e.elements)n.some(e=>fr(e,r))||n.push(r);return{arrayValue:{values:n}}}class si extends Ys{constructor(e){super(),this.elements=e}}function ii(e,t){let n=ui(t);for(const r of e.elements)n=n.filter(e=>!fr(e,r));return{arrayValue:{values:n}}}class oi extends Ys{constructor(e,t){super(),this.serializer=e,this.Ee=t}}function ai(e){return Hn(e.integerValue||e.doubleValue)}function ui(e){return _r(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ci{constructor(e,t){this.field=e,this.transform=t}}class hi{constructor(e,t){this.version=e,this.transformResults=t}}class li{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new li}static exists(e){return new li(void 0,e)}static updateTime(e){return new li(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function di(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class fi{}function mi(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ei(e.key,li.none()):new vi(e.key,e.data,li.none());{const n=e.data,r=Pr.empty();let s=new qn(Te.comparator);for(let e of t.fields)if(!s.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),s=s.add(e)}return new bi(e.key,r,new jn(s.toArray()),li.none())}}function gi(e,t,n){var r;e instanceof vi?function(e,t,n){const r=e.value.clone(),s=Ti(e.fieldTransforms,t,n.transformResults);r.setAll(s),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof bi?function(e,t,n){if(!di(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Ti(e.fieldTransforms,t,n.transformResults),s=t.data;s.setAll(Ii(e)),s.setAll(r),t.convertToFoundDocument(n.version,s).setHasCommittedMutations()}(e,t,n):(r=n,t.convertToNoDocument(r.version).setHasCommittedMutations())}function pi(e,t,n,r){return e instanceof vi?function(e,t,n,r){if(!di(e.precondition,t))return n;const s=e.value.clone(),i=_i(e.fieldTransforms,r,t);return s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null}(e,t,n,r):e instanceof bi?function(e,t,n,r){if(!di(e.precondition,t))return n;const s=_i(e.fieldTransforms,r,t),i=t.data;return i.setAll(Ii(e)),i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map(e=>e.field))}(e,t,n,r):(s=t,i=n,di(e.precondition,s)?(s.convertToNoDocument(s.version).setHasLocalMutations(),null):i);var s,i}function yi(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),s=ei(r.transform,e||null);null!=s&&(null===n&&(n=Pr.empty()),n.set(r.field,s))}return n||null}function wi(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&(n=e.fieldTransforms,r=t.fieldTransforms,!!(void 0===n&&void 0===r||n&&r&&pe(n,r,(e,t)=>function(e,t){return e.field.isEqual(t.field)&&(n=e.transform,r=t.transform,n instanceof ni&&r instanceof ni||n instanceof si&&r instanceof si?pe(n.elements,r.elements,fr):n instanceof oi&&r instanceof oi?fr(n.Ee,r.Ee):n instanceof ti&&r instanceof ti);var n,r}(e,t)))&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask)));var n,r}class vi extends fi{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class bi extends fi{constructor(e,t,n,r,s=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ii(e){const t=new Map;return e.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}}),t}function Ti(e,t,n){const r=new Map;H(e.length===n.length,32656,{Ae:n.length,Re:e.length});for(let s=0;s<n.length;s++){const i=e[s],o=i.transform,a=t.data.field(i.field);r.set(i.field,Zs(o,a,n[s]))}return r}function _i(e,t,n){const r=new Map;for(const s of e){const e=s.transform,i=n.data.field(s.field);r.set(s.field,Js(e,i,t))}return r}class Ei extends fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Si extends fi{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xi{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&gi(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=pi(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=pi(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=Bs();return this.mutations.forEach(r=>{const s=e.get(r.key),i=s.overlayedDocument;let o=this.applyToLocalView(i,s.mutatedFields);o=t.has(r.key)?null:o;const a=mi(i,o);null!==a&&n.set(r.key,a),i.isValidDocument()||i.convertToNoDocument(Ve.min())}),n}keys(){return this.mutations.reduce((e,t)=>e.add(t.key),Gs())}isEqual(e){return this.batchId===e.batchId&&pe(this.mutations,e.mutations,(e,t)=>wi(e,t))&&pe(this.baseMutations,e.baseMutations,(e,t)=>wi(e,t))}}class Ci{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){H(e.mutations.length===n.length,58842,{Ve:e.mutations.length,me:n.length});let r=function(){return zs}();const s=e.mutations;for(let i=0;i<s.length;i++)r=r.insert(s[i].key,n[i].version);return new Ci(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t,n){this.alias=e,this.aggregateType=t,this.fieldPath=n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ni{constructor(e,t){this.count=e,this.unchangedNames=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ki,Ri;function Oi(e){switch(e){case Y.OK:return K(64938);case Y.CANCELLED:case Y.UNKNOWN:case Y.DEADLINE_EXCEEDED:case Y.RESOURCE_EXHAUSTED:case Y.INTERNAL:case Y.UNAVAILABLE:case Y.UNAUTHENTICATED:return!1;case Y.INVALID_ARGUMENT:case Y.NOT_FOUND:case Y.ALREADY_EXISTS:case Y.PERMISSION_DENIED:case Y.FAILED_PRECONDITION:case Y.ABORTED:case Y.OUT_OF_RANGE:case Y.UNIMPLEMENTED:case Y.DATA_LOSS:return!0;default:return K(15467,{code:e})}}function Fi(e){if(void 0===e)return z("GRPC error has no .code"),Y.UNKNOWN;switch(e){case ki.OK:return Y.OK;case ki.CANCELLED:return Y.CANCELLED;case ki.UNKNOWN:return Y.UNKNOWN;case ki.DEADLINE_EXCEEDED:return Y.DEADLINE_EXCEEDED;case ki.RESOURCE_EXHAUSTED:return Y.RESOURCE_EXHAUSTED;case ki.INTERNAL:return Y.INTERNAL;case ki.UNAVAILABLE:return Y.UNAVAILABLE;case ki.UNAUTHENTICATED:return Y.UNAUTHENTICATED;case ki.INVALID_ARGUMENT:return Y.INVALID_ARGUMENT;case ki.NOT_FOUND:return Y.NOT_FOUND;case ki.ALREADY_EXISTS:return Y.ALREADY_EXISTS;case ki.PERMISSION_DENIED:return Y.PERMISSION_DENIED;case ki.FAILED_PRECONDITION:return Y.FAILED_PRECONDITION;case ki.ABORTED:return Y.ABORTED;case ki.OUT_OF_RANGE:return Y.OUT_OF_RANGE;case ki.UNIMPLEMENTED:return Y.UNIMPLEMENTED;case ki.DATA_LOSS:return Y.DATA_LOSS;default:return K(39323,{code:e})}}(Ri=ki||(ki={}))[Ri.OK=0]="OK",Ri[Ri.CANCELLED=1]="CANCELLED",Ri[Ri.UNKNOWN=2]="UNKNOWN",Ri[Ri.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ri[Ri.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ri[Ri.NOT_FOUND=5]="NOT_FOUND",Ri[Ri.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ri[Ri.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ri[Ri.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ri[Ri.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ri[Ri.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ri[Ri.ABORTED=10]="ABORTED",Ri[Ri.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ri[Ri.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ri[Ri.INTERNAL=13]="INTERNAL",Ri[Ri.UNAVAILABLE=14]="UNAVAILABLE",Ri[Ri.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Pi=null;
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mi=new _([4294967295,4294967295],0);function Vi(e){const t=he().encode(e),n=new E;return n.update(t),new Uint8Array(n.digest())}function Li(e){const t=new DataView(e.buffer),n=t.getUint32(0,!0),r=t.getUint32(4,!0),s=t.getUint32(8,!0),i=t.getUint32(12,!0);return[new _([n,r],0),new _([s,i],0)]}class qi{constructor(e,t,n){if(this.bitmap=e,this.padding=t,this.hashCount=n,t<0||t>=8)throw new Ui(`Invalid padding: ${t}`);if(n<0)throw new Ui(`Invalid hash count: ${n}`);if(e.length>0&&0===this.hashCount)throw new Ui(`Invalid hash count: ${n}`);if(0===e.length&&0!==t)throw new Ui(`Invalid padding when bitmap length is 0: ${t}`);this.fe=8*e.length-t,this.ge=_.fromNumber(this.fe)}pe(e,t,n){let r=e.add(t.multiply(_.fromNumber(n)));return 1===r.compare(Mi)&&(r=new _([r.getBits(0),r.getBits(1)],0)),r.modulo(this.ge).toNumber()}ye(e){return!!(this.bitmap[Math.floor(e/8)]&1<<e%8)}mightContain(e){if(0===this.fe)return!1;const t=Vi(e),[n,r]=Li(t);for(let s=0;s<this.hashCount;s++){const e=this.pe(n,r,s);if(!this.ye(e))return!1}return!0}static create(e,t,n){const r=e%8==0?0:8-e%8,s=new Uint8Array(Math.ceil(e/8)),i=new qi(s,r,t);return n.forEach(e=>i.insert(e)),i}insert(e){if(0===this.fe)return;const t=Vi(e),[n,r]=Li(t);for(let s=0;s<this.hashCount;s++){const e=this.pe(n,r,s);this.we(e)}}we(e){const t=Math.floor(e/8),n=e%8;this.bitmap[t]|=1<<n}}class Ui extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(e,t,n,r,s){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const r=new Map;return r.set(e,ji.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new Bi(Ve.min(),r,new Mn(de),Ms(),Gs())}}class ji{constructor(e,t,n,r,s){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ji(n,t,Gs(),Gs(),Gs())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zi{constructor(e,t,n,r){this.Se=e,this.removedTargetIds=t,this.key=n,this.be=r}}class $i{constructor(e,t){this.targetId=e,this.De=t}}class Gi{constructor(e,t,n=Gn.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Ki{constructor(){this.ve=0,this.Ce=Wi(),this.Fe=Gn.EMPTY_BYTE_STRING,this.Me=!1,this.xe=!0}get current(){return this.Me}get resumeToken(){return this.Fe}get Oe(){return 0!==this.ve}get Ne(){return this.xe}Be(e){e.approximateByteSize()>0&&(this.xe=!0,this.Fe=e)}Le(){let e=Gs(),t=Gs(),n=Gs();return this.Ce.forEach((r,s)=>{switch(s){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:K(38017,{changeType:s})}}),new ji(this.Fe,this.Me,e,t,n)}ke(){this.xe=!1,this.Ce=Wi()}qe(e,t){this.xe=!0,this.Ce=this.Ce.insert(e,t)}Qe(e){this.xe=!0,this.Ce=this.Ce.remove(e)}$e(){this.ve+=1}Ue(){this.ve-=1,H(this.ve>=0,3241,{ve:this.ve})}Ke(){this.xe=!0,this.Me=!0}}class Qi{constructor(e){this.We=e,this.Ge=new Map,this.ze=Ms(),this.je=Hi(),this.Je=Hi(),this.He=new Mn(de)}Ye(e){for(const t of e.Se)e.be&&e.be.isFoundDocument()?this.Ze(t,e.be):this.Xe(t,e.key,e.be);for(const t of e.removedTargetIds)this.Xe(t,e.key,e.be)}et(e){this.forEachTarget(e,t=>{const n=this.tt(t);switch(e.state){case 0:this.nt(t)&&n.Be(e.resumeToken);break;case 1:n.Ue(),n.Oe||n.ke(),n.Be(e.resumeToken);break;case 2:n.Ue(),n.Oe||this.removeTarget(t);break;case 3:this.nt(t)&&(n.Ke(),n.Be(e.resumeToken));break;case 4:this.nt(t)&&(this.rt(t),n.Be(e.resumeToken));break;default:K(56790,{state:e.state})}})}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ge.forEach((e,n)=>{this.nt(n)&&t(n)})}it(e){const t=e.targetId,n=e.De.count,r=this.st(t);if(r){const s=r.target;if(ds(s))if(0===n){const e=new _e(s.path);this.Xe(t,e,Vr.newNoDocument(e,Ve.min()))}else H(1===n,20013,{expectedCount:n});else{const r=this.ot(t);if(r!==n){const n=this._t(e),s=n?this.ut(n,e,r):1;if(0!==s){this.rt(t);const e=2===s?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.He=this.He.insert(t,e)}null==Pi||Pi.ct(function(e,t,n,r,s){var i,o,a,u,c,h;const l={localCacheCount:e,existenceFilterCount:t.count,databaseId:n.database,projectId:n.projectId},d=t.unchangedNames;return d&&(l.bloomFilter={applied:0===s,hashCount:null!==(i=null==d?void 0:d.hashCount)&&void 0!==i?i:0,bitmapLength:null!==(u=null===(a=null===(o=null==d?void 0:d.bits)||void 0===o?void 0:o.bitmap)||void 0===a?void 0:a.length)&&void 0!==u?u:0,padding:null!==(h=null===(c=null==d?void 0:d.bits)||void 0===c?void 0:c.padding)&&void 0!==h?h:0,mightContain:e=>{var t;return null!==(t=null==r?void 0:r.mightContain(e))&&void 0!==t&&t}}),l}(r,e.De,this.We.lt(),n,s))}}}}_t(e){const t=e.De.unchangedNames;if(!t||!t.bits)return null;const{bits:{bitmap:n="",padding:r=0},hashCount:s=0}=t;let i,o;try{i=Wn(n).toUint8Array()}catch(a){if(a instanceof zn)return $("Decoding the base64 bloom filter in existence filter failed ("+a.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw a}try{o=new qi(i,r,s)}catch(a){return $(a instanceof Ui?"BloomFilter error: ":"Applying bloom filter failed: ",a),null}return 0===o.fe?null:o}ut(e,t,n){return t.De.count===n-this.ht(e,t.targetId)?0:2}ht(e,t){const n=this.We.getRemoteKeysForTarget(t);let r=0;return n.forEach(n=>{const s=this.We.lt(),i=`projects/${s.projectId}/databases/${s.database}/documents/${n.path.canonicalString()}`;e.mightContain(i)||(this.Xe(t,n,null),r++)}),r}Pt(e){const t=new Map;this.Ge.forEach((n,r)=>{const s=this.st(r);if(s){if(n.current&&ds(s.target)){const t=new _e(s.target.path);this.Tt(t).has(r)||this.It(r,t)||this.Xe(r,t,Vr.newNoDocument(t,e))}n.Ne&&(t.set(r,n.Le()),n.ke())}});let n=Gs();this.Je.forEach((e,t)=>{let r=!0;t.forEachWhile(e=>{const t=this.st(e);return!t||"TargetPurposeLimboResolution"===t.purpose||(r=!1,!1)}),r&&(n=n.add(e))}),this.ze.forEach((t,n)=>n.setReadTime(e));const r=new Bi(e,t,this.He,this.ze,n);return this.ze=Ms(),this.je=Hi(),this.Je=Hi(),this.He=new Mn(de),r}Ze(e,t){if(!this.nt(e))return;const n=this.It(e,t.key)?2:0;this.tt(e).qe(t.key,n),this.ze=this.ze.insert(t.key,t),this.je=this.je.insert(t.key,this.Tt(t.key).add(e)),this.Je=this.Je.insert(t.key,this.dt(t.key).add(e))}Xe(e,t,n){if(!this.nt(e))return;const r=this.tt(e);this.It(e,t)?r.qe(t,1):r.Qe(t),this.Je=this.Je.insert(t,this.dt(t).delete(e)),this.Je=this.Je.insert(t,this.dt(t).add(e)),n&&(this.ze=this.ze.insert(t,n))}removeTarget(e){this.Ge.delete(e)}ot(e){const t=this.tt(e).Le();return this.We.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}$e(e){this.tt(e).$e()}tt(e){let t=this.Ge.get(e);return t||(t=new Ki,this.Ge.set(e,t)),t}dt(e){let t=this.Je.get(e);return t||(t=new qn(de),this.Je=this.Je.insert(e,t)),t}Tt(e){let t=this.je.get(e);return t||(t=new qn(de),this.je=this.je.insert(e,t)),t}nt(e){const t=null!==this.st(e);return t||j("WatchChangeAggregator","Detected inactive target",e),t}st(e){const t=this.Ge.get(e);return t&&t.Oe?null:this.We.Et(e)}rt(e){this.Ge.set(e,new Ki),this.We.getRemoteKeysForTarget(e).forEach(t=>{this.Xe(e,t,null)})}It(e,t){return this.We.getRemoteKeysForTarget(e).has(t)}}function Hi(){return new Mn(_e.comparator)}function Wi(){return new Mn(_e.comparator)}const Xi=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),Yi=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),Ji=(()=>({and:"AND",or:"OR"}))();class Zi{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function eo(e,t){return e.useProto3Json||pt(t)?t:{value:t}}function to(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function no(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function ro(e,t){return to(e,t.toTimestamp())}function so(e){return H(!!e,49232),Ve.fromTimestamp(function(e){const t=Qn(e);return new Me(t.seconds,t.nanos)}(e))}function io(e,t){return oo(e,t).canonicalString()}function oo(e,t){const n=(r=e,new be(["projects",r.projectId,"databases",r.database])).child("documents");var r;return void 0===t?n:n.child(t)}function ao(e){const t=be.fromString(e);return H(ko(t),10190,{key:t.toString()}),t}function uo(e,t){return io(e.databaseId,t.path)}function co(e,t){const n=ao(t);if(n.get(1)!==e.databaseId.projectId)throw new J(Y.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new J(Y.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new _e(mo(n))}function ho(e,t){return io(e.databaseId,t)}function lo(e){const t=ao(e);return 4===t.length?be.emptyPath():mo(t)}function fo(e){return new be(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function mo(e){return H(e.length>4&&"documents"===e.get(4),29091,{key:e.toString()}),e.popFirst(5)}function go(e,t,n){return{name:uo(e,t),fields:n.value.mapValue.fields}}function po(e,t,n){const r=co(e,t.name),s=so(t.updateTime),i=t.createTime?so(t.createTime):Ve.min(),o=new Pr({mapValue:{fields:t.fields}}),a=Vr.newFoundDocument(r,s,i,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function yo(e,t){let n;if(t instanceof vi)n={update:go(e,t.key,t.value)};else if(t instanceof Ei)n={delete:uo(e,t.key)};else if(t instanceof bi)n={update:go(e,t.key,t.data),updateMask:No(t.fieldMask)};else{if(!(t instanceof Si))return K(16599,{Rt:t.type});n={verify:uo(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map(e=>function(e,t){const n=t.transform;if(n instanceof ti)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof ni)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof si)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof oi)return{fieldPath:t.field.canonicalString(),increment:n.Ee};throw K(20930,{transform:t.transform})}(0,e))),t.precondition.isNone||(n.currentDocument=(r=e,void 0!==(s=t.precondition).updateTime?{updateTime:ro(r,s.updateTime)}:void 0!==s.exists?{exists:s.exists}:K(27497))),n;var r,s}function wo(e,t){const n=t.currentDocument?void 0!==(s=t.currentDocument).updateTime?li.updateTime(so(s.updateTime)):void 0!==s.exists?li.exists(s.exists):li.none():li.none(),r=t.updateTransforms?t.updateTransforms.map(t=>function(e,t){let n=null;if("setToServerValue"in t)H("REQUEST_TIME"===t.setToServerValue,16630,{proto:t}),n=new ti;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new ni(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new si(e)}else"increment"in t?n=new oi(e,t.increment):K(16584,{proto:t});const r=Te.fromServerFormat(t.fieldPath);return new ci(r,n)}(e,t)):[];var s;if(t.update){t.update.name;const s=co(e,t.update.name),i=new Pr({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new jn(t.map(e=>Te.fromServerFormat(e)))}(t.updateMask);return new bi(s,i,e,n,r)}return new vi(s,i,n,r)}if(t.delete){const r=co(e,t.delete);return new Ei(r,n)}if(t.verify){const r=co(e,t.verify);return new Si(r,n)}return K(1463,{proto:t})}function vo(e,t){return{documents:[ho(e,t.path)]}}function bo(e,t){const n={structuredQuery:{}},r=t.path;let s;null!==t.collectionGroup?(s=r,n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(s=r.popLast(),n.structuredQuery.from=[{collectionId:r.lastSegment()}]),n.parent=ho(e,s);const i=function(e){if(0!==e.length)return Do(Gr.create(e,"and"))}(t.filters);i&&(n.structuredQuery.where=i);const o=function(e){if(0!==e.length)return e.map(e=>{return{field:Co((t=e).field),direction:Eo(t.dir)};var t})}(t.orderBy);o&&(n.structuredQuery.orderBy=o);const a=eo(e,t.limit);return null!==a&&(n.structuredQuery.limit=a),t.startAt&&(n.structuredQuery.startAt={before:(u=t.startAt).inclusive,values:u.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),{Vt:n,parent:s};var u}function Io(e,t,n,r){const{Vt:s,parent:i}=bo(e,t),o={},a=[];let u=0;return n.forEach(e=>{const t=r?e.alias:"aggregate_"+u++;o[t]=e.alias,"count"===e.aggregateType?a.push({alias:t,count:{}}):"avg"===e.aggregateType?a.push({alias:t,avg:{field:Co(e.fieldPath)}}):"sum"===e.aggregateType&&a.push({alias:t,sum:{field:Co(e.fieldPath)}})}),{request:{structuredAggregationQuery:{aggregations:a,structuredQuery:s.structuredQuery},parent:s.parent},ft:o,parent:i}}function To(e){let t=lo(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){H(1===r,65062);const e=n.from[0];e.allDescendants?s=e.collectionId:t=t.child(e.collectionId)}let i=[];n.where&&(i=function(e){const t=_o(e);return t instanceof Gr&&Hr(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(e=>{return new Br(Ao((t=e).field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction));var t}));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,pt(t)?null:t}(n.limit));let u=null;n.startAt&&(u=function(e){const t=!!e.before,n=e.values||[];return new Lr(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Lr(n,t)}(n.endAt)),ys(t,s,o,i,a,"F",u,c)}function _o(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Ao(e.unaryFilter.field);return $r.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Ao(e.unaryFilter.field);return $r.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Ao(e.unaryFilter.field);return $r.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const s=Ao(e.unaryFilter.field);return $r.create(s,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":return K(61313);default:return K(60726)}}(e):void 0!==e.fieldFilter?(t=e,$r.create(Ao(t.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":return K(58110);default:return K(50506)}}(t.fieldFilter.op),t.fieldFilter.value)):void 0!==e.compositeFilter?function(e){return Gr.create(e.compositeFilter.filters.map(e=>_o(e)),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return K(1026)}}(e.compositeFilter.op))}(e):K(30097,{filter:e});var t}function Eo(e){return Xi[e]}function So(e){return Yi[e]}function xo(e){return Ji[e]}function Co(e){return{fieldPath:e.canonicalString()}}function Ao(e){return Te.fromServerFormat(e.fieldPath)}function Do(e){return e instanceof $r?function(e){if("=="===e.op){if(Sr(e.value))return{unaryFilter:{field:Co(e.field),op:"IS_NAN"}};if(Er(e.value))return{unaryFilter:{field:Co(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Sr(e.value))return{unaryFilter:{field:Co(e.field),op:"IS_NOT_NAN"}};if(Er(e.value))return{unaryFilter:{field:Co(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Co(e.field),op:So(e.op),value:e.value}}}(e):e instanceof Gr?function(e){const t=e.getFilters().map(e=>Do(e));return 1===t.length?t[0]:{compositeFilter:{op:xo(e.op),filters:t}}}(e):K(54877,{filter:e})}function No(e){const t=[];return e.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function ko(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(e,t,n,r,s=Ve.min(),i=Ve.min(),o=Gn.EMPTY_BYTE_STRING,a=null){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=i,this.resumeToken=o,this.expectedCount=a}withSequenceNumber(e){return new Ro(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(e,t){return new Ro(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e,null)}withExpectedCount(e){return new Ro(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,e)}withLastLimboFreeSnapshotVersion(e){return new Ro(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken,this.expectedCount)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.gt=e}}function Fo(e,t){const n=t.key,r={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:Po(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())r.document={name:uo(s=e.gt,(i=t).key),fields:i.data.value.mapValue.fields,updateTime:to(s,i.version.toTimestamp()),createTime:to(s,i.createTime.toTimestamp())};else if(t.isNoDocument())r.noDocument={path:n.path.toArray(),readTime:Mo(t.version)};else{if(!t.isUnknownDocument())return K(57904,{document:t});r.unknownDocument={path:n.path.toArray(),version:Mo(t.version)}}var s,i;return r}function Po(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function Mo(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function Vo(e){const t=new Me(e.seconds,e.nanoseconds);return Ve.fromTimestamp(t)}function Lo(e,t){const n=(t.baseMutations||[]).map(t=>wo(e.gt,t));for(let i=0;i<t.mutations.length-1;++i){const e=t.mutations[i];if(i+1<t.mutations.length&&void 0!==t.mutations[i+1].transform){const n=t.mutations[i+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(i+1,1),++i}}const r=t.mutations.map(t=>wo(e.gt,t)),s=Me.fromMillis(t.localWriteTimeMs);return new xi(t.batchId,s,n,r)}function qo(e){const t=Vo(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?Vo(e.lastLimboFreeSnapshotVersion):Ve.min();let r;return r=void 0!==e.query.documents?function(e){const t=e.documents.length;return H(1===t,1966,{count:t}),Ts(ws(lo(e.documents[0])))}(e.query):function(e){return Ts(To(e))}(e.query),new Ro(r,e.targetId,"TargetPurposeListen",e.lastListenSequenceNumber,t,n,Gn.fromBase64String(e.resumeToken))}function Uo(e,t){const n=Mo(t.snapshotVersion),r=Mo(t.lastLimboFreeSnapshotVersion);let s;s=ds(t.target)?vo(e.gt,t.target):bo(e.gt,t.target).Vt;const i=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:hs(t.target),readTime:n,resumeToken:i,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:r,query:s}}function Bo(e){const t=To({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?xs(t,t.limit,"L"):t}function jo(e,t){return new Ai(t.largestBatchId,wo(e.gt,t.overlayMutation))}function zo(e,t){const n=t.path.lastSegment();return[e,bt(t.path.popLast()),n]}function $o(e,t,n,r){return{indexId:e,uid:t,sequenceNumber:n,readTime:Mo(r.readTime),documentKey:bt(r.documentKey.path),largestBatchId:r.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Go{getBundleMetadata(e,t){return Ko(e).get(t).next(e=>{if(e)return{id:(t=e).bundleId,createTime:Vo(t.createTime),version:t.version};var t})}saveBundleMetadata(e,t){return Ko(e).put({bundleId:(n=t).id,createTime:Mo(so(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return Qo(e).get(t).next(e=>{if(e)return{name:(t=e).name,query:Bo(t.bundledQuery),readTime:Vo(t.readTime)};var t})}saveNamedQuery(e,t){return Qo(e).put({name:(n=t).name,readTime:Mo(so(n.readTime)),bundledQuery:n.bundledQuery});var n}}function Ko(e){return kn(e,nn)}function Qo(e){return kn(e,rn)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ho{constructor(e,t){this.serializer=e,this.userId=t}static yt(e,t){const n=t.uid||"";return new Ho(e,n)}getOverlay(e,t){return Wo(e).get(zo(this.userId,t)).next(e=>e?jo(this.serializer,e):null)}getOverlays(e,t){const n=Us();return Ze.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){const r=[];return n.forEach((n,s)=>{const i=new Ai(t,s);r.push(this.wt(e,i))}),Ze.waitFor(r)}removeOverlaysForBatchId(e,t,n){const r=new Set;t.forEach(e=>r.add(bt(e.getCollectionPath())));const s=[];return r.forEach(t=>{const r=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);s.push(Wo(e).Y(yn,r))}),Ze.waitFor(s)}getOverlaysForCollection(e,t,n){const r=Us(),s=bt(t),i=IDBKeyRange.bound([this.userId,s,n],[this.userId,s,Number.POSITIVE_INFINITY],!0);return Wo(e).j(yn,i).next(e=>{for(const t of e){const e=jo(this.serializer,t);r.set(e.getKey(),e)}return r})}getOverlaysForCollectionGroup(e,t,n,r){const s=Us();let i;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return Wo(e).X({index:vn,range:o},(e,t,n)=>{const o=jo(this.serializer,t);s.size()<r||o.largestBatchId===i?(s.set(o.getKey(),o),i=o.largestBatchId):n.done()}).next(()=>s)}wt(e,t){return Wo(e).put(function(e,t,n){const[r,s,i]=zo(t,n.mutation.key);return{userId:t,collectionPath:s,documentId:i,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:yo(e.gt,n.mutation)}}(this.serializer,this.userId,t))}}function Wo(e){return kn(e,gn)}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{St(e){return kn(e,In)}getSessionToken(e){return this.St(e).get("sessionToken").next(e=>{const t=null==e?void 0:e.value;return t?Gn.fromUint8Array(t):Gn.EMPTY_BYTE_STRING})}setSessionToken(e,t){return this.St(e).put({name:"sessionToken",value:t.toUint8Array()})}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(){}bt(e,t){this.Dt(e,t),t.vt()}Dt(e,t){if("nullValue"in e)this.Ct(t,5);else if("booleanValue"in e)this.Ct(t,10),t.Ft(e.booleanValue?1:0);else if("integerValue"in e)this.Ct(t,15),t.Ft(Hn(e.integerValue));else if("doubleValue"in e){const n=Hn(e.doubleValue);isNaN(n)?this.Ct(t,13):(this.Ct(t,15),yt(n)?t.Ft(0):t.Ft(n))}else if("timestampValue"in e){let n=e.timestampValue;this.Ct(t,20),"string"==typeof n&&(n=Qn(n)),t.Mt(`${n.seconds||""}`),t.Ft(n.nanos||0)}else if("stringValue"in e)this.xt(e.stringValue,t),this.Ot(t);else if("bytesValue"in e)this.Ct(t,30),t.Nt(Wn(e.bytesValue)),this.Ot(t);else if("referenceValue"in e)this.Bt(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.Ct(t,45),t.Ft(n.latitude||0),t.Ft(n.longitude||0)}else"mapValue"in e?Dr(e)?this.Ct(t,Number.MAX_SAFE_INTEGER):Cr(e)?this.Lt(e.mapValue,t):(this.kt(e.mapValue,t),this.Ot(t)):"arrayValue"in e?(this.qt(e.arrayValue,t),this.Ot(t)):K(19022,{Qt:e})}xt(e,t){this.Ct(t,25),this.$t(e,t)}$t(e,t){t.Mt(e)}kt(e,t){const n=e.fields||{};this.Ct(t,55);for(const r of Object.keys(n))this.xt(r,t),this.Dt(n[r],t)}Lt(e,t){var n,r;const s=e.fields||{};this.Ct(t,53);const i=hr,o=(null===(r=null===(n=s[i].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.length)||0;this.Ct(t,15),t.Ft(Hn(o)),this.xt(i,t),this.Dt(s[i],t)}qt(e,t){const n=e.values||[];this.Ct(t,50);for(const r of n)this.Dt(r,t)}Bt(e,t){this.Ct(t,37),_e.fromName(e).path.forEach(e=>{this.Ct(t,60),this.$t(e,t)})}Ct(e,t){e.Ft(t)}Ot(e){e.Ft(2)}}Yo.Ut=new Yo;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law | agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES | CONDITIONS OF ANY KIND, either express | implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Jo=255;function Zo(e){if(0===e)return 8;let t=0;return e>>4||(t+=4,e<<=4),e>>6||(t+=2,e<<=2),e>>7||(t+=1),t}function ea(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const r=Zo(255&e[n]);if(t+=r,8!==r)break}return t}(e);return Math.ceil(t/8)}class ta{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Kt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Wt(n.value),n=t.next();this.Gt()}zt(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.jt(n.value),n=t.next();this.Jt()}Ht(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Wt(e);else if(e<2048)this.Wt(960|e>>>6),this.Wt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Wt(480|e>>>12),this.Wt(128|63&e>>>6),this.Wt(128|63&e);else{const e=t.codePointAt(0);this.Wt(240|e>>>18),this.Wt(128|63&e>>>12),this.Wt(128|63&e>>>6),this.Wt(128|63&e)}}this.Gt()}Yt(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.jt(e);else if(e<2048)this.jt(960|e>>>6),this.jt(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.jt(480|e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e);else{const e=t.codePointAt(0);this.jt(240|e>>>18),this.jt(128|63&e>>>12),this.jt(128|63&e>>>6),this.jt(128|63&e)}}this.Jt()}Zt(e){const t=this.Xt(e),n=ea(t);this.en(1+n),this.buffer[this.position++]=255&n;for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=255&t[r]}tn(e){const t=this.Xt(e),n=ea(t);this.en(1+n),this.buffer[this.position++]=~(255&n);for(let r=t.length-n;r<t.length;++r)this.buffer[this.position++]=~(255&t[r])}nn(){this.rn(Jo),this.rn(255)}sn(){this._n(Jo),this._n(255)}reset(){this.position=0}seed(e){this.en(e.length),this.buffer.set(e,this.position),this.position+=e.length}an(){return this.buffer.slice(0,this.position)}Xt(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=!!(128&t[0]);t[0]^=n?255:128;for(let r=1;r<t.length;++r)t[r]^=n?255:0;return t}Wt(e){const t=255&e;0===t?(this.rn(0),this.rn(255)):t===Jo?(this.rn(Jo),this.rn(0)):this.rn(t)}jt(e){const t=255&e;0===t?(this._n(0),this._n(255)):t===Jo?(this._n(Jo),this._n(0)):this._n(e)}Gt(){this.rn(0),this.rn(1)}Jt(){this._n(0),this._n(1)}rn(e){this.en(1),this.buffer[this.position++]=e}_n(e){this.en(1),this.buffer[this.position++]=~e}en(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const r=new Uint8Array(n);r.set(this.buffer),this.buffer=r}}class na{constructor(e){this.un=e}Nt(e){this.un.Kt(e)}Mt(e){this.un.Ht(e)}Ft(e){this.un.Zt(e)}vt(){this.un.nn()}}class ra{constructor(e){this.un=e}Nt(e){this.un.zt(e)}Mt(e){this.un.Yt(e)}Ft(e){this.un.tn(e)}vt(){this.un.sn()}}class sa{constructor(){this.un=new ta,this.cn=new na(this.un),this.ln=new ra(this.un)}seed(e){this.un.seed(e)}hn(e){return 0===e?this.cn:this.ln}an(){return this.un.an()}reset(){this.un.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t,n,r){this.Pn=e,this.Tn=t,this.In=n,this.dn=r}En(){const e=this.dn.length,t=0===e||255===this.dn[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.dn,0),t!==e?n.set([0],this.dn.length):++n[n.length-1],new ia(this.Pn,this.Tn,this.In,n)}An(e,t,n){return{indexId:this.Pn,uid:e,arrayValue:ua(this.In),directionalValue:ua(this.dn),orderedDocumentKey:ua(t),documentKey:n.path.toArray()}}Rn(e,t,n){const r=this.An(e,t,n);return[r.indexId,r.uid,r.arrayValue,r.directionalValue,r.orderedDocumentKey,r.documentKey]}}function oa(e,t){let n=e.Pn-t.Pn;return 0!==n?n:(n=aa(e.In,t.In),0!==n?n:(n=aa(e.dn,t.dn),0!==n?n:_e.comparator(e.Tn,t.Tn)))}function aa(e,t){for(let n=0;n<e.length&&n<t.length;++n){const r=e[n]-t[n];if(0!==r)return r}return e.length-t.length}function ua(e){return y()?function(e){let t="";for(let n=0;n<e.length;n++)t+=String.fromCharCode(e[n]);return t}(e):e}function ca(e){return"string"!=typeof e?e:function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}(e)}class ha{constructor(e){this.Vn=new qn((e,t)=>Te.comparator(e.field,t.field)),this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.mn=e.orderBy,this.fn=[];for(const t of e.filters){const e=t;e.isInequality()?this.Vn=this.Vn.add(e):this.fn.push(e)}}get gn(){return this.Vn.size>1}pn(e){if(H(e.collectionGroup===this.collectionId,49279),this.gn)return!1;const t=Ue(e);if(void 0!==t&&!this.yn(t))return!1;const n=Be(e);let r=new Set,s=0,i=0;for(;s<n.length&&this.yn(n[s]);++s)r=r.add(n[s].fieldPath.canonicalString());if(s===n.length)return!0;if(this.Vn.size>0){const e=this.Vn.getIterator().getNext();if(!r.has(e.field.canonicalString())){const t=n[s];if(!this.wn(e,t)||!this.Sn(this.mn[i++],t))return!1}++s}for(;s<n.length;++s){const e=n[s];if(i>=this.mn.length||!this.Sn(this.mn[i++],e))return!1}return!0}bn(){if(this.gn)return null;let e=new qn(Te.comparator);const t=[];for(const n of this.fn)if(!n.field.isKeyField())if("array-contains"===n.op||"array-contains-any"===n.op)t.push(new ze(n.field,2));else{if(e.has(n.field))continue;e=e.add(n.field),t.push(new ze(n.field,0))}for(const n of this.mn)n.field.isKeyField()||e.has(n.field)||(e=e.add(n.field),t.push(new ze(n.field,"asc"===n.dir?0:1)));return new qe(qe.UNKNOWN_ID,this.collectionId,t,Ge.empty())}yn(e){for(const t of this.fn)if(this.wn(t,e))return!0;return!1}wn(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}Sn(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function la(e){var t,n;if(H(e instanceof $r||e instanceof Gr,20012),e instanceof $r){if(e instanceof is){const r=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map(t=>$r.create(e.field,"==",t)))||[];return Gr.create(r,"or")}return e}const r=e.filters.map(e=>la(e));return Gr.create(r,e.op)}function da(e){if(0===e.getFilters().length)return[];const t=pa(la(e));return H(ga(t),7391),fa(t)||ma(t)?[t]:t.getFilters()}function fa(e){return e instanceof $r}function ma(e){return e instanceof Gr&&Hr(e)}function ga(e){return fa(e)||ma(e)||function(e){if(e instanceof Gr&&Qr(e)){for(const t of e.getFilters())if(!fa(t)&&!ma(t))return!1;return!0}return!1}(e)}function pa(e){if(H(e instanceof $r||e instanceof Gr,34018),e instanceof $r)return e;if(1===e.filters.length)return pa(e.filters[0]);const t=e.filters.map(e=>pa(e));let n=Gr.create(t,e.op);return n=va(n),ga(n)?n:(H(n instanceof Gr,64498),H(Kr(n),40251),H(n.filters.length>1,57927),n.filters.reduce((e,t)=>ya(e,t)))}function ya(e,t){let n;return H(e instanceof $r||e instanceof Gr,38388),H(t instanceof $r||t instanceof Gr,25473),n=e instanceof $r?t instanceof $r?(r=e,s=t,Gr.create([r,s],"and")):wa(e,t):t instanceof $r?wa(t,e):function(e,t){if(H(e.filters.length>0&&t.filters.length>0,48005),Kr(e)&&Kr(t))return Jr(e,t.getFilters());const n=Qr(e)?e:t,r=Qr(e)?t:e,s=n.filters.map(e=>ya(e,r));return Gr.create(s,"or")}(e,t),va(n);var r,s}function wa(e,t){if(Kr(t))return Jr(t,e.getFilters());{const n=t.filters.map(t=>ya(e,t));return Gr.create(n,"or")}}function va(e){if(H(e instanceof $r||e instanceof Gr,11850),e instanceof $r)return e;const t=e.getFilters();if(1===t.length)return va(t[0]);if(Wr(e))return e;const n=t.map(e=>va(e)),r=[];return n.forEach(t=>{t instanceof $r?r.push(t):t instanceof Gr&&(t.op===e.op?r.push(...t.filters):r.push(t))}),1===r.length?r[0]:Gr.create(r,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ba{constructor(){this.Dn=new Ia}addToCollectionParentIndex(e,t){return this.Dn.add(t),Ze.resolve()}getCollectionParents(e,t){return Ze.resolve(this.Dn.getEntries(t))}addFieldIndex(e,t){return Ze.resolve()}deleteFieldIndex(e,t){return Ze.resolve()}deleteAllFieldIndexes(e){return Ze.resolve()}createTargetIndexes(e,t){return Ze.resolve()}getDocumentsMatchingTarget(e,t){return Ze.resolve(null)}getIndexType(e,t){return Ze.resolve(0)}getFieldIndexes(e,t){return Ze.resolve([])}getNextCollectionGroupToUpdate(e){return Ze.resolve(null)}getMinOffset(e,t){return Ze.resolve(He.min())}getMinOffsetFromCollectionGroup(e,t){return Ze.resolve(He.min())}updateCollectionGroup(e,t,n){return Ze.resolve()}updateIndexEntries(e,t){return Ze.resolve()}}class Ia{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new qn(be.comparator),s=!r.has(n);return this.index[t]=r.add(n),s}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new qn(be.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ta="IndexedDbIndexManager",_a=new Uint8Array(0);class Ea{constructor(e,t){this.databaseId=t,this.vn=new Ia,this.Cn=new Fs(e=>hs(e),(e,t)=>ls(e,t)),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.vn.has(t)){const n=t.lastSegment(),r=t.popLast();e.addOnCommittedListener(()=>{this.vn.add(t)});const s={collectionId:n,parent:bt(r)};return Sa(e).put(s)}return Ze.resolve()}getCollectionParents(e,t){const n=[],r=IDBKeyRange.bound([t,""],[ye(t),""],!1,!0);return Sa(e).j(r).next(e=>{for(const r of e){if(r.collectionId!==t)break;n.push(_t(r.parent))}return n})}addFieldIndex(e,t){const n=Ca(e),r={indexId:(s=t).indexId,collectionGroup:s.collectionGroup,fields:s.fields.map(e=>[e.fieldPath.canonicalString(),e.kind])};var s;delete r.indexId;const i=n.add(r);if(t.indexState){const n=Aa(e);return i.next(e=>{n.put($o(e,this.uid,t.indexState.sequenceNumber,t.indexState.offset))})}return i.next()}deleteFieldIndex(e,t){const n=Ca(e),r=Aa(e),s=xa(e);return n.delete(t.indexId).next(()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))).next(()=>s.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))}deleteAllFieldIndexes(e){const t=Ca(e),n=xa(e),r=Aa(e);return t.Y().next(()=>n.Y()).next(()=>r.Y())}createTargetIndexes(e,t){return Ze.forEach(this.Fn(t),t=>this.getIndexType(e,t).next(n=>{if(0===n||1===n){const n=new ha(t).bn();if(null!=n)return this.addFieldIndex(e,n)}}))}getDocumentsMatchingTarget(e,t){const n=xa(e);let r=!0;const s=new Map;return Ze.forEach(this.Fn(t),t=>this.Mn(e,t).next(e=>{r&&(r=!!e),s.set(t,e)})).next(()=>{if(r){let e=Gs();const r=[];return Ze.forEach(s,(s,i)=>{var o;j(Ta,`Using index ${o=s,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map(e=>`${e.fieldPath}:${e.kind}`).join(",")}`} to execute ${hs(t)}`);const a=function(e,t){const n=Ue(t);if(void 0===n)return null;for(const r of fs(e,n.fieldPath))switch(r.op){case"array-contains-any":return r.value.arrayValue.values||[];case"array-contains":return[r.value]}return null}(i,s),u=function(e,t){const n=new Map;for(const r of Be(t))for(const t of fs(e,r.fieldPath))switch(t.op){case"==":case"in":n.set(r.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(r.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(i,s),c=function(e,t){const n=[];let r=!0;for(const s of Be(t)){const t=0===s.kind?ms(e,s.fieldPath,e.startAt):gs(e,s.fieldPath,e.startAt);n.push(t.value),r&&(r=t.inclusive)}return new Lr(n,r)}(i,s),h=function(e,t){const n=[];let r=!0;for(const s of Be(t)){const t=0===s.kind?gs(e,s.fieldPath,e.endAt):ms(e,s.fieldPath,e.endAt);n.push(t.value),r&&(r=t.inclusive)}return new Lr(n,r)}(i,s),l=this.xn(s,i,c),d=this.xn(s,i,h),f=this.On(s,i,u),m=this.Nn(s.indexId,a,l,c.inclusive,d,h.inclusive,f);return Ze.forEach(m,s=>n.H(s,t.limit).next(t=>{t.forEach(t=>{const n=_e.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),r.push(n))})}))}).next(()=>r)}return Ze.resolve(null)})}Fn(e){let t=this.Cn.get(e);return t||(t=0===e.filters.length?[e]:da(Gr.create(e.filters,"and")).map(t=>cs(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt)),this.Cn.set(e,t),t)}Nn(e,t,n,r,s,i,o){const a=(null!=t?t.length:1)*Math.max(n.length,s.length),u=a/(null!=t?t.length:1),c=[];for(let h=0;h<a;++h){const a=t?this.Bn(t[h/u]):_a,l=this.Ln(e,a,n[h%u],r),d=this.kn(e,a,s[h%u],i),f=o.map(t=>this.Ln(e,a,t,!0));c.push(...this.createRange(l,d,f))}return c}Ln(e,t,n,r){const s=new ia(e,_e.empty(),t,n);return r?s:s.En()}kn(e,t,n,r){const s=new ia(e,_e.empty(),t,n);return r?s.En():s}Mn(e,t){const n=new ha(t),r=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,r).next(e=>{let t=null;for(const r of e)n.pn(r)&&(!t||r.fields.length>t.fields.length)&&(t=r);return t})}getIndexType(e,t){let n=2;const r=this.Fn(t);return Ze.forEach(r,t=>this.Mn(e,t).next(e=>{e?0!==n&&e.fields.length<function(e){let t=new qn(Te.comparator),n=!1;for(const r of e.filters)for(const e of r.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const r of e.orderBy)r.field.isKeyField()||(t=t.add(r.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})).next(()=>null!==t.limit&&r.length>1&&2===n?1:n)}qn(e,t){const n=new sa;for(const r of Be(e)){const e=t.data.field(r.fieldPath);if(null==e)return null;const s=n.hn(r.kind);Yo.Ut.bt(e,s)}return n.an()}Bn(e){const t=new sa;return Yo.Ut.bt(e,t.hn(0)),t.an()}Qn(e,t){const n=new sa;return Yo.Ut.bt(Ir(this.databaseId,t),n.hn(function(e){const t=Be(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.an()}On(e,t,n){if(null===n)return[];let r=[];r.push(new sa);let s=0;for(const i of Be(e)){const e=n[s++];for(const n of r)if(this.$n(t,i.fieldPath)&&_r(e))r=this.Un(r,i,e);else{const t=n.hn(i.kind);Yo.Ut.bt(e,t)}}return this.Kn(r)}xn(e,t,n){return this.On(e,t,n.position)}Kn(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].an();return t}Un(e,t,n){const r=[...e],s=[];for(const i of n.arrayValue.values||[])for(const e of r){const n=new sa;n.seed(e.an()),Yo.Ut.bt(i,n.hn(t.kind)),s.push(n)}return s}$n(e,t){return!!e.filters.find(e=>e instanceof $r&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op))}getFieldIndexes(e,t){const n=Ca(e),r=Aa(e);return(t?n.j(on,IDBKeyRange.bound(t,t)):n.j()).next(e=>{const t=[];return Ze.forEach(e,e=>r.get([e.indexId,this.uid]).next(n=>{t.push(function(e,t){const n=t?new Ge(t.sequenceNumber,new He(Vo(t.readTime),new _e(_t(t.documentKey)),t.largestBatchId)):Ge.empty(),r=e.fields.map(([e,t])=>new ze(Te.fromServerFormat(e),t));return new qe(e.indexId,e.collectionGroup,r,n)}(e,n))})).next(()=>t)})}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next(e=>0===e.length?null:(e.sort((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:de(e.collectionGroup,t.collectionGroup)}),e[0].collectionGroup))}updateCollectionGroup(e,t,n){const r=Ca(e),s=Aa(e);return this.Wn(e).next(e=>r.j(on,IDBKeyRange.bound(t,t)).next(t=>Ze.forEach(t,t=>s.put($o(t.indexId,this.uid,e,n)))))}updateIndexEntries(e,t){const n=new Map;return Ze.forEach(t,(t,r)=>{const s=n.get(t.collectionGroup);return(s?Ze.resolve(s):this.getFieldIndexes(e,t.collectionGroup)).next(s=>(n.set(t.collectionGroup,s),Ze.forEach(s,n=>this.Gn(e,t,n).next(t=>{const s=this.zn(r,n);return t.isEqual(s)?Ze.resolve():this.jn(e,r,n,t,s)}))))})}Jn(e,t,n,r){return xa(e).put(r.An(this.uid,this.Qn(n,t.key),t.key))}Hn(e,t,n,r){return xa(e).delete(r.Rn(this.uid,this.Qn(n,t.key),t.key))}Gn(e,t,n){const r=xa(e);let s=new qn(oa);return r.X({index:fn,range:IDBKeyRange.only([n.indexId,this.uid,ua(this.Qn(n,t))])},(e,r)=>{s=s.add(new ia(n.indexId,t,ca(r.arrayValue),ca(r.directionalValue)))}).next(()=>s)}zn(e,t){let n=new qn(oa);const r=this.qn(t,e);if(null==r)return n;const s=Ue(t);if(null!=s){const i=e.data.field(s.fieldPath);if(_r(i))for(const s of i.arrayValue.values||[])n=n.add(new ia(t.indexId,e.key,this.Bn(s),r))}else n=n.add(new ia(t.indexId,e.key,_a,r));return n}jn(e,t,n,r,s){j(Ta,"Updating index entries for document '%s'",t.key);const i=[];return function(e,t,n,r,s){const i=e.getIterator(),o=t.getIterator();let a=Bn(i),u=Bn(o);for(;a||u;){let e=!1,t=!1;if(a&&u){const r=n(a,u);r<0?t=!0:r>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(r(u),u=Bn(o)):t?(s(a),a=Bn(i)):(a=Bn(i),u=Bn(o))}}(r,s,oa,r=>{i.push(this.Jn(e,t,n,r))},r=>{i.push(this.Hn(e,t,n,r))}),Ze.waitFor(i)}Wn(e){let t=1;return Aa(e).X({index:cn,reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},(e,n,r)=>{r.done(),t=n.sequenceNumber+1}).next(()=>t)}createRange(e,t,n){n=n.sort((e,t)=>oa(e,t)).filter((e,t,n)=>!t||0!==oa(e,n[t-1]));const r=[];r.push(e);for(const i of n){const n=oa(i,e),s=oa(i,t);if(0===n)r[0]=e.En();else if(n>0&&s<0)r.push(i),r.push(i.En());else if(s>0)break}r.push(t);const s=[];for(let i=0;i<r.length;i+=2){if(this.Yn(r[i],r[i+1]))return[];const e=r[i].Rn(this.uid,_a,_e.empty()),t=r[i+1].Rn(this.uid,_a,_e.empty());s.push(IDBKeyRange.bound(e,t))}return s}Yn(e,t){return oa(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(Da)}getMinOffset(e,t){return Ze.mapArray(this.Fn(t),t=>this.Mn(e,t).next(e=>e||K(44426))).next(Da)}}function Sa(e){return kn(e,Zt)}function xa(e){return kn(e,ln)}function Ca(e){return kn(e,sn)}function Aa(e){return kn(e,an)}function Da(e){H(0!==e.length,28825);let t=e[0].indexState.offset,n=t.largestBatchId;for(let r=1;r<e.length;r++){const s=e[r].indexState.offset;We(s,t)<0&&(t=s),n<s.largestBatchId&&(n=s.largestBatchId)}return new He(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Na={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0},ka=41943040;class Ra{static withCacheSize(e){return new Ra(e,Ra.DEFAULT_COLLECTION_PERCENTILE,Ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oa(e,t,n){const r=e.store(At),s=e.store(Pt),i=[],o=IDBKeyRange.only(n.batchId);let a=0;const u=r.X({range:o},(e,t,n)=>(a++,n.delete()));i.push(u.next(()=>{H(1===a,47070,{batchId:n.batchId})}));const c=[];for(const h of n.mutations){const e=Ot(t,h.key.path,n.batchId);i.push(s.delete(e)),c.push(h.key)}return Ze.waitFor(i).next(()=>c)}function Fa(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw K(14731);t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ra.DEFAULT_COLLECTION_PERCENTILE=10,Ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ra.DEFAULT=new Ra(ka,Ra.DEFAULT_COLLECTION_PERCENTILE,Ra.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ra.DISABLED=new Ra(-1,0,0);class Pa{constructor(e,t,n,r){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=r,this.Zn={}}static yt(e,t,n,r){H(""!==e.uid,64387);const s=e.isAuthenticated()?e.uid:"";return new Pa(s,t,n,r)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Va(e).X({index:Nt,range:n},(e,n,r)=>{t=!1,r.done()}).next(()=>t)}addMutationBatch(e,t,n,r){const s=La(e),i=Va(e);return i.add({}).next(o=>{H("number"==typeof o,49019);const a=new xi(o,t,n,r),u=function(e,t,n){const r=n.baseMutations.map(t=>yo(e.gt,t)),s=n.mutations.map(t=>yo(e.gt,t));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:r,mutations:s}}(this.serializer,this.userId,a),c=[];let h=new qn((e,t)=>de(e.canonicalString(),t.canonicalString()));for(const e of r){const t=Ot(this.userId,e.key.path,o);h=h.add(e.key.path.popLast()),c.push(i.put(u)),c.push(s.put(t,Ft))}return h.forEach(t=>{c.push(this.indexManager.addToCollectionParentIndex(e,t))}),e.addOnCommittedListener(()=>{this.Zn[o]=a.keys()}),Ze.waitFor(c).next(()=>a)})}lookupMutationBatch(e,t){return Va(e).get(t).next(e=>e?(H(e.userId===this.userId,48,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),Lo(this.serializer,e)):null)}Xn(e,t){return this.Zn[t]?Ze.resolve(this.Zn[t]):this.lookupMutationBatch(e,t).next(e=>{if(e){const n=e.keys();return this.Zn[t]=n,n}return null})}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=IDBKeyRange.lowerBound([this.userId,n]);let s=null;return Va(e).X({index:Nt,range:r},(e,t,r)=>{t.userId===this.userId&&(H(t.batchId>=n,47524,{er:n}),s=Lo(this.serializer,t)),r.done()}).next(()=>s)}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=gt;return Va(e).X({index:Nt,range:t,reverse:!0},(e,t,r)=>{n=t.batchId,r.done()}).next(()=>n)}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,gt],[this.userId,Number.POSITIVE_INFINITY]);return Va(e).j(Nt,t).next(e=>e.map(e=>Lo(this.serializer,e)))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=Rt(this.userId,t.path),r=IDBKeyRange.lowerBound(n),s=[];return La(e).X({range:r},(n,r,i)=>{const[o,a,u]=n,c=_t(a);if(o===this.userId&&t.path.isEqual(c))return Va(e).get(u).next(e=>{if(!e)throw K(61480,{tr:n,batchId:u});H(e.userId===this.userId,10503,"Unexpected user for mutation batch",{userId:e.userId,batchId:u}),s.push(Lo(this.serializer,e))});i.done()}).next(()=>s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qn(de);const r=[];return t.forEach(t=>{const s=Rt(this.userId,t.path),i=IDBKeyRange.lowerBound(s),o=La(e).X({range:i},(e,r,s)=>{const[i,o,a]=e,u=_t(o);i===this.userId&&t.path.isEqual(u)?n=n.add(a):s.done()});r.push(o)}),Ze.waitFor(r).next(()=>this.nr(e,n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1,s=Rt(this.userId,n),i=IDBKeyRange.lowerBound(s);let o=new qn(de);return La(e).X({range:i},(e,t,s)=>{const[i,a,u]=e,c=_t(a);i===this.userId&&n.isPrefixOf(c)?c.length===r&&(o=o.add(u)):s.done()}).next(()=>this.nr(e,o))}nr(e,t){const n=[],r=[];return t.forEach(t=>{r.push(Va(e).get(t).next(e=>{if(null===e)throw K(35274,{batchId:t});H(e.userId===this.userId,9748,"Unexpected user for mutation batch",{userId:e.userId,batchId:t}),n.push(Lo(this.serializer,e))}))}),Ze.waitFor(r).next(()=>n)}removeMutationBatch(e,t){return Oa(e.ce,this.userId,t).next(n=>(e.addOnCommittedListener(()=>{this.rr(t.batchId)}),Ze.forEach(n,t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))}rr(e){delete this.Zn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next(t=>{if(!t)return Ze.resolve();const n=IDBKeyRange.lowerBound(function(e){return[e]}(this.userId)),r=[];return La(e).X({range:n},(e,t,n)=>{if(e[0]===this.userId){const t=_t(e[1]);r.push(t)}else n.done()}).next(()=>{H(0===r.length,56720,{ir:r.map(e=>e.canonicalString())})})})}containsKey(e,t){return Ma(e,this.userId,t)}sr(e){return qa(e).get(this.userId).next(e=>e||{userId:this.userId,lastAcknowledgedBatchId:gt,lastStreamToken:""})}}function Ma(e,t,n){const r=Rt(t,n.path),s=r[1],i=IDBKeyRange.lowerBound(r);let o=!1;return La(e).X({range:i,Z:!0},(e,n,r)=>{const[i,a,u]=e;i===t&&a===s&&(o=!0),r.done()}).next(()=>o)}function Va(e){return kn(e,At)}function La(e){return kn(e,Pt)}function qa(e){return kn(e,Ct)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ua{constructor(e){this._r=e}next(){return this._r+=2,this._r}static ar(){return new Ua(0)}static ur(){return new Ua(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ba{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.cr(e).next(t=>{const n=new Ua(t.highestTargetId);return t.highestTargetId=n.next(),this.lr(e,t).next(()=>t.highestTargetId)})}getLastRemoteSnapshotVersion(e){return this.cr(e).next(e=>Ve.fromTimestamp(new Me(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds)))}getHighestSequenceNumber(e){return this.cr(e).next(e=>e.highestListenSequenceNumber)}setTargetsMetadata(e,t,n){return this.cr(e).next(r=>(r.highestListenSequenceNumber=t,n&&(r.lastRemoteSnapshotVersion=n.toTimestamp()),t>r.highestListenSequenceNumber&&(r.highestListenSequenceNumber=t),this.lr(e,r)))}addTargetData(e,t){return this.hr(e,t).next(()=>this.cr(e).next(n=>(n.targetCount+=1,this.Pr(t,n),this.lr(e,n))))}updateTargetData(e,t){return this.hr(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next(()=>ja(e).delete(t.targetId)).next(()=>this.cr(e)).next(t=>(H(t.targetCount>0,8065),t.targetCount-=1,this.lr(e,t)))}removeTargets(e,t,n){let r=0;const s=[];return ja(e).X((i,o)=>{const a=qo(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(r++,s.push(this.removeTargetData(e,a)))}).next(()=>Ze.waitFor(s)).next(()=>r)}forEachTarget(e,t){return ja(e).X((e,n)=>{const r=qo(n);t(r)})}cr(e){return za(e).get(Yt).next(e=>(H(null!==e,2888),e))}lr(e,t){return za(e).put(Yt,t)}hr(e,t){return ja(e).put(Uo(this.serializer,t))}Pr(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.cr(e).next(e=>e.targetCount)}getTargetData(e,t){const n=hs(t),r=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let s=null;return ja(e).X({range:r,index:Gt},(e,n,r)=>{const i=qo(n);ls(t,i.target)&&(s=i,r.done())}).next(()=>s)}addMatchingKeys(e,t,n){const r=[],s=$a(e);return t.forEach(t=>{const i=bt(t.path);r.push(s.put({targetId:n,path:i})),r.push(this.referenceDelegate.addReference(e,n,t))}),Ze.waitFor(r)}removeMatchingKeys(e,t,n){const r=$a(e);return Ze.forEach(t,t=>{const s=bt(t.path);return Ze.waitFor([r.delete([n,s]),this.referenceDelegate.removeReference(e,n,t)])})}removeMatchingKeysForTargetId(e,t){const n=$a(e),r=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(r)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),r=$a(e);let s=Gs();return r.X({range:n,Z:!0},(e,t,n)=>{const r=_t(e[1]),i=new _e(r);s=s.add(i)}).next(()=>s)}containsKey(e,t){const n=bt(t.path),r=IDBKeyRange.bound([n],[ye(n)],!1,!0);let s=0;return $a(e).X({index:Wt,Z:!0,range:r},([e,t],n,r)=>{0!==e&&(s++,r.done())}).next(()=>s>0)}Et(e,t){return ja(e).get(t).next(e=>e?qo(e):null)}}function ja(e){return kn(e,$t)}function za(e){return kn(e,Jt)}function $a(e){return kn(e,Qt)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ga="LruGarbageCollector",Ka=1048576;function Qa([e,t],[n,r]){const s=de(e,n);return 0===s?de(t,r):s}class Ha{constructor(e){this.Tr=e,this.buffer=new qn(Qa),this.Ir=0}dr(){return++this.Ir}Er(e){const t=[e,this.dr()];if(this.buffer.size<this.Tr)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();Qa(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class Wa{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.Ar=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.Rr(6e4)}stop(){this.Ar&&(this.Ar.cancel(),this.Ar=null)}get started(){return null!==this.Ar}Rr(e){j(Ga,`Garbage collection scheduled in ${e}ms`),this.Ar=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,async()=>{this.Ar=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){ot(e)?j(Ga,"Ignoring IndexedDB error during garbage collection: ",e):await Je(e)}await this.Rr(3e5)})}}class Xa{constructor(e,t){this.Vr=e,this.params=t}calculateTargetCount(e,t){return this.Vr.mr(e).next(e=>Math.floor(t/100*e))}nthSequenceNumber(e,t){if(0===t)return Ze.resolve(mt.ue);const n=new Ha(t);return this.Vr.forEachTarget(e,e=>n.Er(e.sequenceNumber)).next(()=>this.Vr.gr(e,e=>n.Er(e))).next(()=>n.maxValue)}removeTargets(e,t,n){return this.Vr.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Vr.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector","Garbage collection skipped; disabled"),Ze.resolve(Na)):this.getCacheSize(e).next(n=>n<this.params.cacheSizeCollectionThreshold?(j("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Na):this.pr(e,t))}getCacheSize(e){return this.Vr.getCacheSize(e)}pr(e,t){let n,s,i,o,a,u,c;const h=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next(t=>(t>this.params.maximumSequenceNumbersToCollect?(j("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),s=this.params.maximumSequenceNumbersToCollect):s=t,o=Date.now(),this.nthSequenceNumber(e,s))).next(r=>(n=r,a=Date.now(),this.removeTargets(e,n,t))).next(t=>(i=t,u=Date.now(),this.removeOrphanedDocuments(e,n))).next(e=>(c=Date.now(),U()<=r.DEBUG&&j("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${o-h}ms\n\tDetermined least recently used ${s} in `+(a-o)+`ms\n\tRemoved ${i} targets in `+(u-a)+`ms\n\tRemoved ${e} documents in `+(c-u)+`ms\nTotal Duration: ${c-h}ms`),Ze.resolve({didRun:!0,sequenceNumbersCollected:s,targetsRemoved:i,documentsRemoved:e})))}}function Ya(e,t){return new Xa(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t){this.db=e,this.garbageCollector=Ya(this,t)}mr(e){const t=this.yr(e);return this.db.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}gr(e,t){return this.wr(e,(e,n)=>t(n))}addReference(e,t,n){return Za(e,n)}removeReference(e,t,n){return Za(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return Za(e,t)}Sr(e,t){return function(e,t){let n=!1;return qa(e).ee(r=>Ma(e,r,t).next(e=>(e&&(n=!0),Ze.resolve(!e)))).next(()=>n)}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),r=[];let s=0;return this.wr(e,(i,o)=>{if(o<=t){const t=this.Sr(e,i).next(t=>{if(!t)return s++,n.getEntry(e,i).next(()=>(n.removeEntry(i,Ve.min()),$a(e).delete([0,bt(i.path)])))});r.push(t)}}).next(()=>Ze.waitFor(r)).next(()=>n.apply(e)).next(()=>s)}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return Za(e,t)}wr(e,t){const n=$a(e);let r,s=mt.ue;return n.X({index:Wt},([e,n],{path:i,sequenceNumber:o})=>{0===e?(s!==mt.ue&&t(new _e(_t(r)),s),s=o,r=i):s=mt.ue}).next(()=>{s!==mt.ue&&t(new _e(_t(r)),s)})}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function Za(e,t){return $a(e).put((n=t,r=e.currentSequenceNumber,{targetId:0,path:bt(n.path),sequenceNumber:r}));var n,r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class eu{constructor(){this.changes=new Fs(e=>e.toString(),(e,t)=>e.isEqual(t)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,Vr.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ze.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tu{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return iu(e).put(n)}removeEntry(e,t,n){return iu(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],Po(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next(n=>(n.byteSize+=t,this.br(e,n)))}getEntry(e,t){let n=Vr.newInvalidDocument(t);return iu(e).X({index:Lt,range:IDBKeyRange.only(ou(t))},(e,r)=>{n=this.Dr(t,r)}).next(()=>n)}vr(e,t){let n={size:0,document:Vr.newInvalidDocument(t)};return iu(e).X({index:Lt,range:IDBKeyRange.only(ou(t))},(e,r)=>{n={document:this.Dr(t,r),size:Fa(r)}}).next(()=>n)}getEntries(e,t){let n=Ms();return this.Cr(e,t,(e,t)=>{const r=this.Dr(e,t);n=n.insert(e,r)}).next(()=>n)}Fr(e,t){let n=Ms(),r=new Mn(_e.comparator);return this.Cr(e,t,(e,t)=>{const s=this.Dr(e,t);n=n.insert(e,s),r=r.insert(e,Fa(t))}).next(()=>({documents:n,Mr:r}))}Cr(e,t,n){if(t.isEmpty())return Ze.resolve();let r=new qn(uu);t.forEach(e=>r=r.add(e));const s=IDBKeyRange.bound(ou(r.first()),ou(r.last())),i=r.getIterator();let o=i.getNext();return iu(e).X({index:Lt,range:s},(e,t,r)=>{const s=_e.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&uu(o,s)<0;)n(o,null),o=i.getNext();o&&o.isEqual(s)&&(n(o,t),o=i.hasNext()?i.getNext():null),o?r.G(ou(o)):r.done()}).next(()=>{for(;o;)n(o,null),o=i.hasNext()?i.getNext():null})}getDocumentsMatchingQuery(e,t,n,r,s){const i=t.path,o=[i.popLast().toArray(),i.lastSegment(),Po(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],a=[i.popLast().toArray(),i.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return iu(e).j(IDBKeyRange.bound(o,a,!0)).next(e=>{null==s||s.incrementDocumentReadCount(e.length);let n=Ms();for(const s of e){const e=this.Dr(_e.fromSegments(s.prefixPath.concat(s.collectionGroup,s.documentId)),s);e.isFoundDocument()&&(Ns(t,e)||r.has(e.key))&&(n=n.insert(e.key,e))}return n})}getAllFromCollectionGroup(e,t,n,r){let s=Ms();const i=au(t,n),o=au(t,He.max());return iu(e).X({index:Ut,range:IDBKeyRange.bound(i,o,!0)},(e,t,n)=>{const i=this.Dr(_e.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);s=s.insert(i.key,i),s.size===r&&n.done()}).next(()=>s)}newChangeBuffer(e){return new ru(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next(e=>e.byteSize)}getMetadata(e){return su(e).get(zt).next(e=>(H(!!e,20021),e))}br(e,t){return su(e).put(zt,t)}Dr(e,t){if(t){const e=function(e,t){let n;if(t.document)n=po(e.gt,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=_e.fromSegments(t.noDocument.path),r=Vo(t.noDocument.readTime);n=Vr.newNoDocument(e,r),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return K(56709);{const e=_e.fromSegments(t.unknownDocument.path),r=Vo(t.unknownDocument.version);n=Vr.newUnknownDocument(e,r)}}return t.readTime&&n.setReadTime(function(e){const t=new Me(e[0],e[1]);return Ve.fromTimestamp(t)}(t.readTime)),n}(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(Ve.min()))return e}return Vr.newInvalidDocument(e)}}function nu(e){return new tu(e)}class ru extends eu{constructor(e,t){super(),this.Or=e,this.trackRemovals=t,this.Nr=new Fs(e=>e.toString(),(e,t)=>e.isEqual(t))}applyChanges(e){const t=[];let n=0,r=new qn((e,t)=>de(e.canonicalString(),t.canonicalString()));return this.changes.forEach((s,i)=>{const o=this.Nr.get(s);if(t.push(this.Or.removeEntry(e,s,o.readTime)),i.isValidDocument()){const a=Fo(this.Or.serializer,i);r=r.add(s.path.popLast());const u=Fa(a);n+=u-o.size,t.push(this.Or.addEntry(e,s,a))}else if(n-=o.size,this.trackRemovals){const n=Fo(this.Or.serializer,i.convertToNoDocument(Ve.min()));t.push(this.Or.addEntry(e,s,n))}}),r.forEach(n=>{t.push(this.Or.indexManager.addToCollectionParentIndex(e,n))}),t.push(this.Or.updateMetadata(e,n)),Ze.waitFor(t)}getFromCache(e,t){return this.Or.vr(e,t).next(e=>(this.Nr.set(t,{size:e.size,readTime:e.document.readTime}),e.document))}getAllFromCache(e,t){return this.Or.Fr(e,t).next(({documents:e,Mr:t})=>(t.forEach((t,n)=>{this.Nr.set(t,{size:n,readTime:e.get(t).readTime})}),e))}}function su(e){return kn(e,jt)}function iu(e){return kn(e,Mt)}function ou(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function au(e,t){const n=t.documentKey.path.toArray();return[e,Po(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function uu(e,t){const n=e.path.toArray(),r=t.path.toArray();let s=0;for(let i=0;i<n.length-2&&i<r.length-2;++i)if(s=de(n[i],r[i]),s)return s;return s=de(n.length,r.length),s||(s=de(n[n.length-2],r[r.length-2]),s||de(n[n.length-1],r[r.length-1])
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)}class cu{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next(r=>(n=r,this.remoteDocumentCache.getEntry(e,t))).next(e=>(null!==n&&pi(n.mutation,e,jn.empty(),Me.now()),e))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.getLocalViewOfDocuments(e,t,Gs()).next(()=>t))}getLocalViewOfDocuments(e,t,n=Gs()){const r=Us();return this.populateOverlays(e,r,t).next(()=>this.computeViews(e,t,r,n).next(e=>{let t=Ls();return e.forEach((e,n)=>{t=t.insert(e,n.overlayedDocument)}),t}))}getOverlayedDocuments(e,t){const n=Us();return this.populateOverlays(e,n,t).next(()=>this.computeViews(e,t,n,Gs()))}populateOverlays(e,t,n){const r=[];return n.forEach(e=>{t.has(e)||r.push(e)}),this.documentOverlayCache.getOverlays(e,r).next(e=>{e.forEach((e,n)=>{t.set(e,n)})})}computeViews(e,t,n,r){let s=Ms();const i=js(),o=js();return t.forEach((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof bi)?s=s.insert(t.key,t):void 0!==o?(i.set(t.key,o.mutation.getFieldMask()),pi(o.mutation,t,o.mutation.getFieldMask(),Me.now())):i.set(t.key,jn.empty())}),this.recalculateAndSaveOverlays(e,s).next(e=>(e.forEach((e,t)=>i.set(e,t)),t.forEach((e,t)=>{var n;return o.set(e,new cu(t,null!==(n=i.get(e))&&void 0!==n?n:null))}),o))}recalculateAndSaveOverlays(e,t){const n=js();let r=new Mn((e,t)=>e-t),s=Gs();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next(e=>{for(const s of e)s.keys().forEach(e=>{const i=t.get(e);if(null===i)return;let o=n.get(e)||jn.empty();o=s.applyToLocalView(i,o),n.set(e,o);const a=(r.get(s.batchId)||Gs()).add(e);r=r.insert(s.batchId,a)})}).next(()=>{const i=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,u=r.value,c=Bs();u.forEach(e=>{if(!s.has(e)){const r=mi(t.get(e),n.get(e));null!==r&&c.set(e,r),s=s.add(e)}}),i.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Ze.waitFor(i)}).next(()=>n)}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next(t=>this.recalculateAndSaveOverlays(e,t))}getDocumentsMatchingQuery(e,t,n,r){return s=t,_e.isDocumentKey(s.path)&&null===s.collectionGroup&&0===s.filters.length?this.getDocumentsMatchingDocumentQuery(e,t.path):bs(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n,r):this.getDocumentsMatchingCollectionQuery(e,t,n,r);var s}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next(s=>{const i=r-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-s.size):Ze.resolve(Us());let o=Le,a=s;return i.next(t=>Ze.forEach(t,(t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),s.get(t)?Ze.resolve():this.remoteDocumentCache.getEntry(e,t).next(e=>{a=a.insert(t,e)}))).next(()=>this.populateOverlays(e,t,s)).next(()=>this.computeViews(e,a,t,Gs())).next(e=>({batchId:o,changes:qs(e)})))})}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new _e(t)).next(e=>{let t=Ls();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t})}getDocumentsMatchingCollectionGroupQuery(e,t,n,r){const s=t.collectionGroup;let i=Ls();return this.indexManager.getCollectionParents(e,s).next(o=>Ze.forEach(o,o=>{const a=(u=t,c=o.child(s),new ps(c,null,u.explicitOrderBy.slice(),u.filters.slice(),u.limit,u.limitType,u.startAt,u.endAt));var u,c;return this.getDocumentsMatchingCollectionQuery(e,a,n,r).next(e=>{e.forEach((e,t)=>{i=i.insert(e,t)})})}).next(()=>i))}getDocumentsMatchingCollectionQuery(e,t,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next(i=>(s=i,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,s,r))).next(e=>{s.forEach((t,n)=>{const r=n.getKey();null===e.get(r)&&(e=e.insert(r,Vr.newInvalidDocument(r)))});let n=Ls();return e.forEach((e,r)=>{const i=s.get(e);void 0!==i&&pi(i.mutation,r,jn.empty(),Me.now()),Ns(t,r)&&(n=n.insert(e,r))}),n})}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lu{constructor(e){this.serializer=e,this.Br=new Map,this.Lr=new Map}getBundleMetadata(e,t){return Ze.resolve(this.Br.get(t))}saveBundleMetadata(e,t){return this.Br.set(t.id,{id:(n=t).id,version:n.version,createTime:so(n.createTime)}),Ze.resolve();var n}getNamedQuery(e,t){return Ze.resolve(this.Lr.get(t))}saveNamedQuery(e,t){return this.Lr.set(t.name,{name:(n=t).name,query:Bo(n.bundledQuery),readTime:so(n.readTime)}),Ze.resolve();var n}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class du{constructor(){this.overlays=new Mn(_e.comparator),this.kr=new Map}getOverlay(e,t){return Ze.resolve(this.overlays.get(t))}getOverlays(e,t){const n=Us();return Ze.forEach(t,t=>this.getOverlay(e,t).next(e=>{null!==e&&n.set(t,e)})).next(()=>n)}saveOverlays(e,t,n){return n.forEach((n,r)=>{this.wt(e,t,r)}),Ze.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.kr.get(n);return void 0!==r&&(r.forEach(e=>this.overlays=this.overlays.remove(e)),this.kr.delete(n)),Ze.resolve()}getOverlaysForCollection(e,t,n){const r=Us(),s=t.length+1,i=new _e(t.child("")),o=this.overlays.getIteratorFrom(i);for(;o.hasNext();){const e=o.getNext().value,i=e.getKey();if(!t.isPrefixOf(i.path))break;i.path.length===s&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ze.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let s=new Mn((e,t)=>e-t);const i=this.overlays.getIterator();for(;i.hasNext();){const e=i.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=s.get(e.largestBatchId);null===t&&(t=Us(),s=s.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=Us(),a=s.getIterator();for(;a.hasNext()&&(a.getNext().value.forEach((e,t)=>o.set(e,t)),!(o.size()>=r)););return Ze.resolve(o)}wt(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.kr.get(r.largestBatchId).delete(n.key);this.kr.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Ai(t,n));let s=this.kr.get(t);void 0===s&&(s=Gs(),this.kr.set(t,s)),this.kr.set(t,s.add(n.key))}}
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fu{constructor(){this.sessionToken=Gn.EMPTY_BYTE_STRING}getSessionToken(e){return Ze.resolve(this.sessionToken)}setSessionToken(e,t){return this.sessionToken=t,Ze.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.qr=new qn(gu.Qr),this.$r=new qn(gu.Ur)}isEmpty(){return this.qr.isEmpty()}addReference(e,t){const n=new gu(e,t);this.qr=this.qr.add(n),this.$r=this.$r.add(n)}Kr(e,t){e.forEach(e=>this.addReference(e,t))}removeReference(e,t){this.Wr(new gu(e,t))}Gr(e,t){e.forEach(e=>this.removeReference(e,t))}zr(e){const t=new _e(new be([])),n=new gu(t,e),r=new gu(t,e+1),s=[];return this.$r.forEachInRange([n,r],e=>{this.Wr(e),s.push(e.key)}),s}jr(){this.qr.forEach(e=>this.Wr(e))}Wr(e){this.qr=this.qr.delete(e),this.$r=this.$r.delete(e)}Jr(e){const t=new _e(new be([])),n=new gu(t,e),r=new gu(t,e+1);let s=Gs();return this.$r.forEachInRange([n,r],e=>{s=s.add(e.key)}),s}containsKey(e){const t=new gu(e,0),n=this.qr.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class gu{constructor(e,t){this.key=e,this.Hr=t}static Qr(e,t){return _e.comparator(e.key,t.key)||de(e.Hr,t.Hr)}static Ur(e,t){return de(e.Hr,t.Hr)||_e.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.er=1,this.Yr=new qn(gu.Qr)}checkEmpty(e){return Ze.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const s=this.er;this.er++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const i=new xi(s,t,n,r);this.mutationQueue.push(i);for(const o of r)this.Yr=this.Yr.add(new gu(o.key,s)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ze.resolve(i)}lookupMutationBatch(e,t){return Ze.resolve(this.Zr(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.Xr(n),s=r<0?0:r;return Ze.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return Ze.resolve(0===this.mutationQueue.length?gt:this.er-1)}getAllMutationBatches(e){return Ze.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new gu(t,0),r=new gu(t,Number.POSITIVE_INFINITY),s=[];return this.Yr.forEachInRange([n,r],e=>{const t=this.Zr(e.Hr);s.push(t)}),Ze.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new qn(de);return t.forEach(e=>{const t=new gu(e,0),r=new gu(e,Number.POSITIVE_INFINITY);this.Yr.forEachInRange([t,r],e=>{n=n.add(e.Hr)})}),Ze.resolve(this.ei(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let s=n;_e.isDocumentKey(s)||(s=s.child(""));const i=new gu(new _e(s),0);let o=new qn(de);return this.Yr.forEachWhile(e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.Hr)),!0)},i),Ze.resolve(this.ei(o))}ei(e){const t=[];return e.forEach(e=>{const n=this.Zr(e);null!==n&&t.push(n)}),t}removeMutationBatch(e,t){H(0===this.ti(t.batchId,"removed"),55003),this.mutationQueue.shift();let n=this.Yr;return Ze.forEach(t.mutations,r=>{const s=new gu(r.key,t.batchId);return n=n.delete(s),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)}).next(()=>{this.Yr=n})}rr(e){}containsKey(e,t){const n=new gu(t,0),r=this.Yr.firstAfterOrEqual(n);return Ze.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ze.resolve()}ti(e,t){return this.Xr(e)}Xr(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}Zr(e){const t=this.Xr(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yu{constructor(e){this.ni=e,this.docs=new Mn(_e.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),s=r?r.size:0,i=this.ni(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:i}),this.size+=i-s,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ze.resolve(n?n.document.mutableCopy():Vr.newInvalidDocument(t))}getEntries(e,t){let n=Ms();return t.forEach(e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():Vr.newInvalidDocument(e))}),Ze.resolve(n)}getDocumentsMatchingQuery(e,t,n,r){let s=Ms();const i=t.path,o=new _e(i.child("__id-9223372036854775808__")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!i.isPrefixOf(e.path))break;e.path.length>i.length+1||We(Qe(o),n)<=0||(r.has(o.key)||Ns(t,o))&&(s=s.insert(o.key,o.mutableCopy()))}return Ze.resolve(s)}getAllFromCollectionGroup(e,t,n,r){K(9500)}ri(e,t){return Ze.forEach(this.docs,e=>t(e))}newChangeBuffer(e){return new wu(this)}getSize(e){return Ze.resolve(this.size)}}class wu extends eu{constructor(e){super(),this.Or=e}applyChanges(e){const t=[];return this.changes.forEach((n,r)=>{r.isValidDocument()?t.push(this.Or.addEntry(e,r)):this.Or.removeEntry(n)}),Ze.waitFor(t)}getFromCache(e,t){return this.Or.getEntry(e,t)}getAllFromCache(e,t){return this.Or.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vu{constructor(e){this.persistence=e,this.ii=new Fs(e=>hs(e),ls),this.lastRemoteSnapshotVersion=Ve.min(),this.highestTargetId=0,this.si=0,this.oi=new mu,this.targetCount=0,this._i=Ua.ar()}forEachTarget(e,t){return this.ii.forEach((e,n)=>t(n)),Ze.resolve()}getLastRemoteSnapshotVersion(e){return Ze.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ze.resolve(this.si)}allocateTargetId(e){return this.highestTargetId=this._i.next(),Ze.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.si&&(this.si=t),Ze.resolve()}hr(e){this.ii.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this._i=new Ua(t),this.highestTargetId=t),e.sequenceNumber>this.si&&(this.si=e.sequenceNumber)}addTargetData(e,t){return this.hr(t),this.targetCount+=1,Ze.resolve()}updateTargetData(e,t){return this.hr(t),Ze.resolve()}removeTargetData(e,t){return this.ii.delete(t.target),this.oi.zr(t.targetId),this.targetCount-=1,Ze.resolve()}removeTargets(e,t,n){let r=0;const s=[];return this.ii.forEach((i,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.ii.delete(i),s.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)}),Ze.waitFor(s).next(()=>r)}getTargetCount(e){return Ze.resolve(this.targetCount)}getTargetData(e,t){const n=this.ii.get(t)||null;return Ze.resolve(n)}addMatchingKeys(e,t,n){return this.oi.Kr(t,n),Ze.resolve()}removeMatchingKeys(e,t,n){this.oi.Gr(t,n);const r=this.persistence.referenceDelegate,s=[];return r&&t.forEach(t=>{s.push(r.markPotentiallyOrphaned(e,t))}),Ze.waitFor(s)}removeMatchingKeysForTargetId(e,t){return this.oi.zr(t),Ze.resolve()}getMatchingKeysForTargetId(e,t){const n=this.oi.Jr(t);return Ze.resolve(n)}containsKey(e,t){return Ze.resolve(this.oi.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bu{constructor(e,t){this.ai={},this.overlays={},this.ui=new mt(0),this.ci=!1,this.ci=!0,this.li=new fu,this.referenceDelegate=e(this),this.hi=new vu(this),this.indexManager=new ba,this.remoteDocumentCache=new yu(e=>this.referenceDelegate.Pi(e)),this.serializer=new Oo(t),this.Ti=new lu(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.ci=!1,Promise.resolve()}get started(){return this.ci}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new du,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.ai[e.toKey()];return n||(n=new pu(t,this.referenceDelegate),this.ai[e.toKey()]=n),n}getGlobalsCache(){return this.li}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ti}runTransaction(e,t,n){j("MemoryPersistence","Starting transaction:",e);const r=new Iu(this.ui.next());return this.referenceDelegate.Ii(),n(r).next(e=>this.referenceDelegate.di(r).next(()=>e)).toPromise().then(e=>(r.raiseOnCommittedEvent(),e))}Ei(e,t){return Ze.or(Object.values(this.ai).map(n=>()=>n.containsKey(e,t)))}}class Iu extends Ye{constructor(e){super(),this.currentSequenceNumber=e}}class Tu{constructor(e){this.persistence=e,this.Ai=new mu,this.Ri=null}static Vi(e){return new Tu(e)}get mi(){if(this.Ri)return this.Ri;throw K(60996)}addReference(e,t,n){return this.Ai.addReference(n,t),this.mi.delete(n.toString()),Ze.resolve()}removeReference(e,t,n){return this.Ai.removeReference(n,t),this.mi.add(n.toString()),Ze.resolve()}markPotentiallyOrphaned(e,t){return this.mi.add(t.toString()),Ze.resolve()}removeTarget(e,t){this.Ai.zr(t.targetId).forEach(e=>this.mi.add(e.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next(e=>{e.forEach(e=>this.mi.add(e.toString()))}).next(()=>n.removeTargetData(e,t))}Ii(){this.Ri=new Set}di(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ze.forEach(this.mi,n=>{const r=_e.fromPath(n);return this.fi(e,r).next(e=>{e||t.removeEntry(r,Ve.min())})}).next(()=>(this.Ri=null,t.apply(e)))}updateLimboDocument(e,t){return this.fi(e,t).next(e=>{e?this.mi.delete(t.toString()):this.mi.add(t.toString())})}Pi(e){return 0}fi(e,t){return Ze.or([()=>Ze.resolve(this.Ai.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ei(e,t)])}}class _u{constructor(e,t){this.persistence=e,this.gi=new Fs(e=>bt(e.path),(e,t)=>e.isEqual(t)),this.garbageCollector=Ya(this,t)}static Vi(e,t){return new _u(e,t)}Ii(){}di(e){return Ze.resolve()}forEachTarget(e,t){return this.persistence.getTargetCache().forEachTarget(e,t)}mr(e){const t=this.yr(e);return this.persistence.getTargetCache().getTargetCount(e).next(e=>t.next(t=>e+t))}yr(e){let t=0;return this.gr(e,e=>{t++}).next(()=>t)}gr(e,t){return Ze.forEach(this.gi,(n,r)=>this.Sr(e,n,r).next(e=>e?Ze.resolve():t(r)))}removeTargets(e,t,n){return this.persistence.getTargetCache().removeTargets(e,t,n)}removeOrphanedDocuments(e,t){let n=0;const r=this.persistence.getRemoteDocumentCache(),s=r.newChangeBuffer();return r.ri(e,r=>this.Sr(e,r,t).next(e=>{e||(n++,s.removeEntry(r,Ve.min()))})).next(()=>s.apply(e)).next(()=>n)}markPotentiallyOrphaned(e,t){return this.gi.set(t,e.currentSequenceNumber),Ze.resolve()}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.persistence.getTargetCache().updateTargetData(e,n)}addReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),Ze.resolve()}removeReference(e,t,n){return this.gi.set(n,e.currentSequenceNumber),Ze.resolve()}updateLimboDocument(e,t){return this.gi.set(t,e.currentSequenceNumber),Ze.resolve()}Pi(e){let t=e.key.toString().length;return e.isFoundDocument()&&(t+=br(e.data.value)),t}Sr(e,t,n){return Ze.or([()=>this.persistence.Ei(e,t),()=>this.persistence.getTargetCache().containsKey(e,t),()=>{const e=this.gi.get(t);return Ze.resolve(void 0!==e&&e>n)}])}getCacheSize(e){return this.persistence.getRemoteDocumentCache().getSize(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eu{constructor(e){this.serializer=e}q(e,t,n,r){const s=new tt("createOrUpgrade",t);n<1&&r>=1&&(e.createObjectStore(St),function(e){e.createObjectStore(Ct,{keyPath:"userId"});e.createObjectStore(At,{keyPath:Dt,autoIncrement:!0}).createIndex(Nt,kt,{unique:!0}),e.createObjectStore(Pt)}(e),Su(e),function(e){e.createObjectStore(Et)}(e));let i=Ze.resolve();return n<3&&r>=3&&(0!==n&&(function(e){e.deleteObjectStore(Qt),e.deleteObjectStore($t),e.deleteObjectStore(Jt)}(e),Su(e)),i=i.next(()=>function(e){const t=e.store(Jt),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:Ve.min().toTimestamp(),targetCount:0};return t.put(Yt,n)}(s))),n<4&&r>=4&&(0!==n&&(i=i.next(()=>function(e,t){return t.store(At).j().next(n=>{e.deleteObjectStore(At),e.createObjectStore(At,{keyPath:Dt,autoIncrement:!0}).createIndex(Nt,kt,{unique:!0});const r=t.store(At),s=n.map(e=>r.put(e));return Ze.waitFor(s)})}(e,s))),i=i.next(()=>{!function(e){e.createObjectStore(tn,{keyPath:"clientId"})}(e)})),n<5&&r>=5&&(i=i.next(()=>this.pi(s))),n<6&&r>=6&&(i=i.next(()=>(function(e){e.createObjectStore(jt)}(e),this.yi(s)))),n<7&&r>=7&&(i=i.next(()=>this.wi(s))),n<8&&r>=8&&(i=i.next(()=>this.Si(e,s))),n<9&&r>=9&&(i=i.next(()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)})),n<10&&r>=10&&(i=i.next(()=>this.bi(s))),n<11&&r>=11&&(i=i.next(()=>{!function(e){e.createObjectStore(nn,{keyPath:"bundleId"})}(e),function(e){e.createObjectStore(rn,{keyPath:"name"})}(e)})),n<12&&r>=12&&(i=i.next(()=>{!function(e){const t=e.createObjectStore(gn,{keyPath:pn});t.createIndex(yn,wn,{unique:!1}),t.createIndex(vn,bn,{unique:!1})}(e)})),n<13&&r>=13&&(i=i.next(()=>function(e){const t=e.createObjectStore(Mt,{keyPath:Vt});t.createIndex(Lt,qt),t.createIndex(Ut,Bt)}(e)).next(()=>this.Di(e,s)).next(()=>e.deleteObjectStore(Et))),n<14&&r>=14&&(i=i.next(()=>this.Ci(e,s))),n<15&&r>=15&&(i=i.next(()=>function(e){e.createObjectStore(sn,{keyPath:"indexId",autoIncrement:!0}).createIndex(on,"collectionGroup",{unique:!1});e.createObjectStore(an,{keyPath:un}).createIndex(cn,hn,{unique:!1});e.createObjectStore(ln,{keyPath:dn}).createIndex(fn,mn,{unique:!1})}(e))),n<16&&r>=16&&(i=i.next(()=>{t.objectStore(an).clear()}).next(()=>{t.objectStore(ln).clear()})),n<17&&r>=17&&(i=i.next(()=>{!function(e){e.createObjectStore(In,{keyPath:"name"})}(e)})),n<18&&r>=18&&y()&&(i=i.next(()=>{t.objectStore(an).clear()}).next(()=>{t.objectStore(ln).clear()})),i}yi(e){let t=0;return e.store(Et).X((e,n)=>{t+=Fa(n)}).next(()=>{const n={byteSize:t};return e.store(jt).put(zt,n)})}pi(e){const t=e.store(Ct),n=e.store(At);return t.j().next(t=>Ze.forEach(t,t=>{const r=IDBKeyRange.bound([t.userId,gt],[t.userId,t.lastAcknowledgedBatchId]);return n.j(Nt,r).next(n=>Ze.forEach(n,n=>{H(n.userId===t.userId,18650,"Cannot process batch from unexpected user",{batchId:n.batchId});const r=Lo(this.serializer,n);return Oa(e,t.userId,r).next(()=>{})}))}))}wi(e){const t=e.store(Qt),n=e.store(Et);return e.store(Jt).get(Yt).next(e=>{const r=[];return n.X((n,s)=>{const i=new be(n),o=[0,bt(i)];r.push(t.get(o).next(n=>{return n?Ze.resolve():(r=i,t.put({targetId:0,path:bt(r),sequenceNumber:e.highestListenSequenceNumber}));var r}))}).next(()=>Ze.waitFor(r))})}Si(e,t){e.createObjectStore(Zt,{keyPath:en});const n=t.store(Zt),r=new Ia,s=e=>{if(r.add(e)){const t=e.lastSegment(),r=e.popLast();return n.put({collectionId:t,parent:bt(r)})}};return t.store(Et).X({Z:!0},(e,t)=>{const n=new be(e);return s(n.popLast())}).next(()=>t.store(Pt).X({Z:!0},([e,t,n],r)=>{const i=_t(t);return s(i.popLast())}))}bi(e){const t=e.store($t);return t.X((e,n)=>{const r=qo(n),s=Uo(this.serializer,r);return t.put(s)})}Di(e,t){const n=t.store(Et),r=[];return n.X((e,n)=>{const s=t.store(Mt),i=(a=n,a.document?new _e(be.fromString(a.document.name).popFirst(5)):a.noDocument?_e.fromSegments(a.noDocument.path):a.unknownDocument?_e.fromSegments(a.unknownDocument.path):K(36783)).path.toArray(),o={prefixPath:i.slice(0,i.length-2),collectionGroup:i[i.length-2],documentId:i[i.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};var a;r.push(s.put(o))}).next(()=>Ze.waitFor(r))}Ci(e,t){const n=t.store(At),r=nu(this.serializer),s=new bu(Tu.Vi,this.serializer.gt);return n.j().next(e=>{const n=new Map;return e.forEach(e=>{var t;let r=null!==(t=n.get(e.userId))&&void 0!==t?t:Gs();Lo(this.serializer,e).keys().forEach(e=>r=r.add(e)),n.set(e.userId,r)}),Ze.forEach(n,(e,n)=>{const i=new V(n),o=Ho.yt(this.serializer,i),a=s.getIndexManager(i),u=Pa.yt(i,this.serializer,a,s.referenceDelegate);return new hu(r,u,o,a).recalculateAndSaveOverlaysForDocumentKeys(new Nn(t,mt.ue),e).next()})})}}function Su(e){e.createObjectStore(Qt,{keyPath:Ht}).createIndex(Wt,Xt,{unique:!0}),e.createObjectStore($t,{keyPath:"targetId"}).createIndex(Gt,Kt,{unique:!0}),e.createObjectStore(Jt)}const xu="IndexedDbPersistence",Cu=18e5,Au=5e3,Du="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.",Nu="main";class ku{constructor(e,t,n,r,s,i,o,a,u,c,h=18){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Fi=s,this.window=i,this.document=o,this.Mi=u,this.xi=c,this.Oi=h,this.ui=null,this.ci=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Ni=null,this.inForeground=!1,this.Bi=null,this.Li=null,this.ki=Number.NEGATIVE_INFINITY,this.qi=e=>Promise.resolve(),!ku.C())throw new J(Y.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new Ja(this,r),this.Qi=t+Nu,this.serializer=new Oo(a),this.$i=new nt(this.Qi,this.Oi,new Eu(this.serializer)),this.li=new Xo,this.hi=new Ba(this.referenceDelegate,this.serializer),this.remoteDocumentCache=nu(this.serializer),this.Ti=new Go,this.window&&this.window.localStorage?this.Ui=this.window.localStorage:(this.Ui=null,!1===c&&z(xu,"LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.Ki().then(()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new J(Y.FAILED_PRECONDITION,Du);return this.Wi(),this.Gi(),this.zi(),this.runTransaction("getHighestListenSequenceNumber","readonly",e=>this.hi.getHighestSequenceNumber(e))}).then(e=>{this.ui=new mt(e,this.Mi)}).then(()=>{this.ci=!0}).catch(e=>(this.$i&&this.$i.close(),Promise.reject(e)))}ji(e){return this.qi=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.$i.setDatabaseDeletedListener(e)}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Fi.enqueueAndForget(async()=>{this.started&&await this.Ki()}))}Ki(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",e=>Ou(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next(()=>{if(this.isPrimary)return this.Ji(e).next(e=>{e||(this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)))})}).next(()=>this.Hi(e)).next(t=>this.isPrimary&&!t?this.Yi(e).next(()=>!1):!!t&&this.Zi(e).next(()=>!0))).catch(e=>{if(ot(e))return j(xu,"Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return j(xu,"Releasing owner lease after error during lease refresh",e),!1}).then(e=>{this.isPrimary!==e&&this.Fi.enqueueRetryable(()=>this.qi(e)),this.isPrimary=e})}Ji(e){return Ru(e).get(xt).next(e=>Ze.resolve(this.Xi(e)))}es(e){return Ou(e).delete(this.clientId)}async ts(){if(this.isPrimary&&!this.ns(this.ki,Cu)){this.ki=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",e=>{const t=kn(e,tn);return t.j().next(e=>{const n=this.rs(e,Cu),r=e.filter(e=>-1===n.indexOf(e));return Ze.forEach(r,e=>t.delete(e.clientId)).next(()=>r)})}).catch(()=>[]);if(this.Ui)for(const t of e)this.Ui.removeItem(this.ss(t.clientId))}}zi(){this.Li=this.Fi.enqueueAfterDelay("client_metadata_refresh",4e3,()=>this.Ki().then(()=>this.ts()).then(()=>this.zi()))}Xi(e){return!!e&&e.ownerId===this.clientId}Hi(e){return this.xi?Ze.resolve(!0):Ru(e).get(xt).next(t=>{if(null!==t&&this.ns(t.leaseTimestampMs,Au)&&!this._s(t.ownerId)){if(this.Xi(t)&&this.networkEnabled)return!0;if(!this.Xi(t)){if(!t.allowTabSynchronization)throw new J(Y.FAILED_PRECONDITION,Du);return!1}}return!(!this.networkEnabled||!this.inForeground)||Ou(e).j().next(e=>void 0===this.rs(e,Au).find(e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,r=this.networkEnabled===e.networkEnabled;if(t||n&&r)return!0}return!1}))}).next(e=>(this.isPrimary!==e&&j(xu,`Client ${e?"is":"is not"} eligible for a primary lease.`),e))}async shutdown(){this.ci=!1,this.us(),this.Li&&(this.Li.cancel(),this.Li=null),this.cs(),this.ls(),await this.$i.runTransaction("shutdown","readwrite",[St,tn],e=>{const t=new Nn(e,mt.ue);return this.Yi(t).next(()=>this.es(t))}),this.$i.close(),this.hs()}rs(e,t){return e.filter(e=>this.ns(e.updateTimeMs,t)&&!this._s(e.clientId))}Ps(){return this.runTransaction("getActiveClients","readonly",e=>Ou(e).j().next(e=>this.rs(e,Cu).map(e=>e.clientId)))}get started(){return this.ci}getGlobalsCache(){return this.li}getMutationQueue(e,t){return Pa.yt(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.hi}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Ea(e,this.serializer.gt.databaseId)}getDocumentOverlayCache(e){return Ho.yt(this.serializer,e)}getBundleCache(){return this.Ti}runTransaction(e,t,n){j(xu,"Starting transaction:",e);const r="readonly"===t?"readonly":"readwrite",s=18===(i=this.Oi)?Dn:17===i?An:16===i?Cn:15===i?xn:14===i?Sn:13===i?En:12===i?_n:11===i?Tn:void K(60245);var i;let o;return this.$i.runTransaction(e,r,s,r=>(o=new Nn(r,this.ui?this.ui.next():mt.ue),"readwrite-primary"===t?this.Ji(o).next(e=>!!e||this.Hi(o)).next(t=>{if(!t)throw z(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Fi.enqueueRetryable(()=>this.qi(!1)),new J(Y.FAILED_PRECONDITION,Xe);return n(o)}).next(e=>this.Zi(o).next(()=>e)):this.Ts(o).next(()=>n(o)))).then(e=>(o.raiseOnCommittedEvent(),e))}Ts(e){return Ru(e).get(xt).next(e=>{if(null!==e&&this.ns(e.leaseTimestampMs,Au)&&!this._s(e.ownerId)&&!this.Xi(e)&&!(this.xi||this.allowTabSynchronization&&e.allowTabSynchronization))throw new J(Y.FAILED_PRECONDITION,Du)})}Zi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ru(e).put(xt,t)}static C(){return nt.C()}Yi(e){const t=Ru(e);return t.get(xt).next(e=>this.Xi(e)?(j(xu,"Releasing primary lease."),t.delete(xt)):Ze.resolve())}ns(e,t){const n=Date.now();return!(e<n-t||e>n&&(z(`Detected an update time that is in the future: ${e} > ${n}`),1))}Wi(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Bi=()=>{this.Fi.enqueueAndForget(()=>(this.inForeground="visible"===this.document.visibilityState,this.Ki()))},this.document.addEventListener("visibilitychange",this.Bi),this.inForeground="visible"===this.document.visibilityState)}cs(){this.Bi&&(this.document.removeEventListener("visibilitychange",this.Bi),this.Bi=null)}Gi(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Ni=()=>{this.us();const e=/(?:Version|Mobile)\/1[456]/;p()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Fi.enterRestrictedMode(!0),this.Fi.enqueueAndForget(()=>this.shutdown())},this.window.addEventListener("pagehide",this.Ni))}ls(){this.Ni&&(this.window.removeEventListener("pagehide",this.Ni),this.Ni=null)}_s(e){var t;try{const n=null!==(null===(t=this.Ui)||void 0===t?void 0:t.getItem(this.ss(e)));return j(xu,`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(n){return z(xu,"Failed to get zombied client id.",n),!1}}us(){if(this.Ui)try{this.Ui.setItem(this.ss(this.clientId),String(Date.now()))}catch(e){z("Failed to set zombie client id.",e)}}hs(){if(this.Ui)try{this.Ui.removeItem(this.ss(this.clientId))}catch(e){}}ss(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ru(e){return kn(e,St)}function Ou(e){return kn(e,tn)}function Fu(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Pu{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Is=n,this.ds=r}static Es(e,t){let n=Gs(),r=Gs();for(const s of t.docChanges)switch(s.type){case 0:n=n.add(s.doc.key);break;case 1:r=r.add(s.doc.key)}return new Pu(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mu{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(e){this._documentReadCount+=e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(){this.As=!1,this.Rs=!1,this.Vs=100,this.fs=p()?8:rt(g())>0?6:4}initialize(e,t){this.gs=e,this.indexManager=t,this.As=!0}getDocumentsMatchingQuery(e,t,n,r){const s={result:null};return this.ps(e,t).next(e=>{s.result=e}).next(()=>{if(!s.result)return this.ys(e,t,r,n).next(e=>{s.result=e})}).next(()=>{if(s.result)return;const n=new Mu;return this.ws(e,t,n).next(r=>{if(s.result=r,this.Rs)return this.Ss(e,t,n,r.size)})}).next(()=>s.result)}Ss(e,t,n,s){return n.documentReadCount<this.Vs?(U()<=r.DEBUG&&j("QueryEngine","SDK will not create cache indexes for query:",Ds(t),"since it only creates cache indexes for collection contains","more than or equal to",this.Vs,"documents"),Ze.resolve()):(U()<=r.DEBUG&&j("QueryEngine","Query:",Ds(t),"scans",n.documentReadCount,"local documents and returns",s,"documents as results."),n.documentReadCount>this.fs*s?(U()<=r.DEBUG&&j("QueryEngine","The SDK decides to create cache indexes for query:",Ds(t),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(e,Ts(t))):Ze.resolve())}ps(e,t){if(vs(t))return Ze.resolve(null);let n=Ts(t);return this.indexManager.getIndexType(e,n).next(r=>0===r?null:(null!==t.limit&&1===r&&(t=xs(t,null,"F"),n=Ts(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next(r=>{const s=Gs(...r);return this.gs.getDocuments(e,s).next(r=>this.indexManager.getMinOffset(e,n).next(n=>{const i=this.bs(t,r);return this.Ds(t,i,s,n.readTime)?this.ps(e,xs(t,null,"F")):this.vs(e,i,t,n)}))})))}ys(e,t,n,s){return vs(t)||s.isEqual(Ve.min())?Ze.resolve(null):this.gs.getDocuments(e,n).next(i=>{const o=this.bs(t,i);return this.Ds(t,o,n,s)?Ze.resolve(null):(U()<=r.DEBUG&&j("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),Ds(t)),this.vs(e,o,t,Ke(s,Le)).next(e=>e))})}bs(e,t){let n=new qn(Rs(e));return t.forEach((t,r)=>{Ns(e,r)&&(n=n.add(r))}),n}Ds(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const s="F"===e.limitType?t.last():t.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(r)>0)}ws(e,t,n){return U()<=r.DEBUG&&j("QueryEngine","Using full collection scan to execute query:",Ds(t)),this.gs.getDocumentsMatchingQuery(e,t,He.min(),n)}vs(e,t,n,r){return this.gs.getDocumentsMatchingQuery(e,n,r).next(e=>(t.forEach(t=>{e=e.insert(t.key,t)}),e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lu="LocalStore";class qu{constructor(e,t,n,r){this.persistence=e,this.Cs=t,this.serializer=r,this.Fs=new Mn(de),this.Ms=new Fs(e=>hs(e),ls),this.xs=new Map,this.Os=e.getRemoteDocumentCache(),this.hi=e.getTargetCache(),this.Ti=e.getBundleCache(),this.Ns(n)}Ns(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new hu(this.Os,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Os.setIndexManager(this.indexManager),this.Cs.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",t=>e.collect(t,this.Fs))}}function Uu(e,t,n,r){return new qu(e,t,n,r)}async function Bu(e,t){const n=X(e);return await n.persistence.runTransaction("Handle user change","readonly",e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next(s=>(r=s,n.Ns(t),n.mutationQueue.getAllMutationBatches(e))).next(t=>{const s=[],i=[];let o=Gs();for(const e of r){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next(e=>({Bs:e,removedBatchIds:s,addedBatchIds:i}))})})}function ju(e){const t=X(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.hi.getLastRemoteSnapshotVersion(e))}function zu(e,t,n){let r=Gs(),s=Gs();return n.forEach(e=>r=r.add(e)),t.getEntries(e,r).next(e=>{let r=Ms();return n.forEach((n,i)=>{const o=e.get(n);i.isFoundDocument()!==o.isFoundDocument()&&(s=s.add(n)),i.isNoDocument()&&i.version.isEqual(Ve.min())?(t.removeEntry(n,i.readTime),r=r.insert(n,i)):!o.isValidDocument()||i.version.compareTo(o.version)>0||0===i.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(i),r=r.insert(n,i)):j(Lu,"Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",i.version)}),{Ls:r,ks:s}})}function $u(e,t){const n=X(e);return n.persistence.runTransaction("Get next mutation batch","readonly",e=>(void 0===t&&(t=gt),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t)))}function Gu(e,t){const n=X(e);return n.persistence.runTransaction("Allocate target","readwrite",e=>{let r;return n.hi.getTargetData(e,t).next(s=>s?(r=s,Ze.resolve(r)):n.hi.allocateTargetId(e).next(s=>(r=new Ro(t,s,"TargetPurposeListen",e.currentSequenceNumber),n.hi.addTargetData(e,r).next(()=>r))))}).then(e=>{const r=n.Fs.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Fs=n.Fs.insert(e.targetId,e),n.Ms.set(t,e.targetId)),e})}async function Ku(e,t,n){const r=X(e),s=r.Fs.get(t),i=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",i,e=>r.persistence.referenceDelegate.removeTarget(e,s))}catch(o){if(!ot(o))throw o;j(Lu,`Failed to update sequence numbers for target ${t}: ${o}`)}r.Fs=r.Fs.remove(t),r.Ms.delete(s.target)}function Qu(e,t,n){const r=X(e);let s=Ve.min(),i=Gs();return r.persistence.runTransaction("Execute query","readwrite",e=>function(e,t,n){const r=X(e),s=r.Ms.get(n);return void 0!==s?Ze.resolve(r.Fs.get(s)):r.hi.getTargetData(t,n)}(r,e,Ts(t)).next(t=>{if(t)return s=t.lastLimboFreeSnapshotVersion,r.hi.getMatchingKeysForTargetId(e,t.targetId).next(e=>{i=e})}).next(()=>r.Cs.getDocumentsMatchingQuery(e,t,n?s:Ve.min(),n?i:Gs())).next(e=>(Xu(r,ks(t),e),{documents:e,qs:i})))}function Hu(e,t){const n=X(e),r=X(n.hi),s=n.Fs.get(t);return s?Promise.resolve(s.target):n.persistence.runTransaction("Get target data","readonly",e=>r.Et(e,t).next(e=>e?e.target:null))}function Wu(e,t){const n=X(e),r=n.xs.get(t)||Ve.min();return n.persistence.runTransaction("Get new document changes","readonly",e=>n.Os.getAllFromCollectionGroup(e,t,Ke(r,Le),Number.MAX_SAFE_INTEGER)).then(e=>(Xu(n,t,e),e))}function Xu(e,t,n){let r=e.xs.get(t)||Ve.min();n.forEach((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)}),e.xs.set(t,r)}async function Yu(e,t,n=Gs()){const r=await Gu(e,Ts(Bo(t.bundledQuery))),s=X(e);return s.persistence.runTransaction("Save named query","readwrite",e=>{const i=so(t.readTime);if(r.snapshotVersion.compareTo(i)>=0)return s.Ti.saveNamedQuery(e,t);const o=r.withResumeToken(Gn.EMPTY_BYTE_STRING,i);return s.Fs=s.Fs.insert(o.targetId,o),s.hi.updateTargetData(e,o).next(()=>s.hi.removeMatchingKeysForTargetId(e,r.targetId)).next(()=>s.hi.addMatchingKeys(e,n,r.targetId)).next(()=>s.Ti.saveNamedQuery(e,t))})}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ju="firestore_clients";function Zu(e,t){return`${Ju}_${e}_${t}`}const ec="firestore_mutations";function tc(e,t,n){let r=`${ec}_${e}_${n}`;return t.isAuthenticated()&&(r+=`_${t.uid}`),r}const nc="firestore_targets";function rc(e,t){return`${nc}_${e}_${t}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sc="SharedClientState";class ic{constructor(e,t,n,r){this.user=e,this.batchId=t,this.state=n,this.error=r}static Ks(e,t,n){const r=JSON.parse(n);let s,i="object"==typeof r&&-1!==["pending","acknowledged","rejected"].indexOf(r.state)&&(void 0===r.error||"object"==typeof r.error);return i&&r.error&&(i="string"==typeof r.error.message&&"string"==typeof r.error.code,i&&(s=new J(r.error.code,r.error.message))),i?new ic(e,t,r.state,s):(z(sc,`Failed to parse mutation state for ID '${t}': ${n}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class oc{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Ks(e,t){const n=JSON.parse(t);let r,s="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return s&&n.error&&(s="string"==typeof n.error.message&&"string"==typeof n.error.code,s&&(r=new J(n.error.code,n.error.message))),s?new oc(e,n.state,r):(z(sc,`Failed to parse target state for ID '${e}': ${t}`),null)}Ws(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ac{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Ks(e,t){const n=JSON.parse(t);let r="object"==typeof n&&n.activeTargetIds instanceof Array,s=Qs();for(let i=0;r&&i<n.activeTargetIds.length;++i)r=wt(n.activeTargetIds[i]),s=s.add(n.activeTargetIds[i]);return r?new ac(e,s):(z(sc,`Failed to parse client data for instance '${e}': ${t}`),null)}}class uc{constructor(e,t){this.clientId=e,this.onlineState=t}static Ks(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new uc(t.clientId,t.onlineState):(z(sc,`Failed to parse online state: ${e}`),null)}}class cc{constructor(){this.activeTargetIds=Qs()}Gs(e){this.activeTargetIds=this.activeTargetIds.add(e)}zs(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Ws(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class hc{constructor(e,t,n,r,s){this.window=e,this.Fi=t,this.persistenceKey=n,this.js=r,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.Js=this.Hs.bind(this),this.Ys=new Mn(de),this.started=!1,this.Zs=[];const i=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=s,this.Xs=Zu(this.persistenceKey,this.js),this.eo=`firestore_sequence_number_${this.persistenceKey}`,this.Ys=this.Ys.insert(this.js,new cc),this.no=new RegExp(`^${Ju}_${i}_([^_]*)$`),this.ro=new RegExp(`^${ec}_${i}_(\\d+)(?:_(.*))?$`),this.io=new RegExp(`^${nc}_${i}_(\\d+)$`),this.so=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this.oo=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.Js)}static C(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.Ps();for(const n of e){if(n===this.js)continue;const e=this.getItem(Zu(this.persistenceKey,n));if(e){const t=ac.Ks(n,e);t&&(this.Ys=this.Ys.insert(t.clientId,t))}}this._o();const t=this.storage.getItem(this.so);if(t){const e=this.ao(t);e&&this.uo(e)}for(const n of this.Zs)this.Hs(n);this.Zs=[],this.window.addEventListener("pagehide",()=>this.shutdown()),this.started=!0}writeSequenceNumber(e){this.setItem(this.eo,JSON.stringify(e))}getAllActiveQueryTargets(){return this.co(this.Ys)}isActiveQueryTarget(e){let t=!1;return this.Ys.forEach((n,r)=>{r.activeTargetIds.has(e)&&(t=!0)}),t}addPendingMutation(e){this.lo(e,"pending")}updateMutationState(e,t,n){this.lo(e,t,n),this.ho(e)}addLocalQueryTarget(e,t=!0){let n="not-current";if(this.isActiveQueryTarget(e)){const t=this.storage.getItem(rc(this.persistenceKey,e));if(t){const r=oc.Ks(e,t);r&&(n=r.state)}}return t&&this.Po.Gs(e),this._o(),n}removeLocalQueryTarget(e){this.Po.zs(e),this._o()}isLocalQueryTarget(e){return this.Po.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(rc(this.persistenceKey,e))}updateQueryState(e,t,n){this.To(e,t,n)}handleUserChange(e,t,n){t.forEach(e=>{this.ho(e)}),this.currentUser=e,n.forEach(e=>{this.addPendingMutation(e)})}setOnlineState(e){this.Io(e)}notifyBundleLoaded(e){this.Eo(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.Js),this.removeItem(this.Xs),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return j(sc,"READ",e,t),t}setItem(e,t){j(sc,"SET",e,t),this.storage.setItem(e,t)}removeItem(e){j(sc,"REMOVE",e),this.storage.removeItem(e)}Hs(e){const t=e;if(t.storageArea===this.storage){if(j(sc,"EVENT",t.key,t.newValue),t.key===this.Xs)return void z("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Fi.enqueueRetryable(async()=>{if(this.started){if(null!==t.key)if(this.no.test(t.key)){if(null==t.newValue){const e=this.Ao(t.key);return this.Ro(e,null)}{const e=this.Vo(t.key,t.newValue);if(e)return this.Ro(e.clientId,e)}}else if(this.ro.test(t.key)){if(null!==t.newValue){const e=this.mo(t.key,t.newValue);if(e)return this.fo(e)}}else if(this.io.test(t.key)){if(null!==t.newValue){const e=this.po(t.key,t.newValue);if(e)return this.yo(e)}}else if(t.key===this.so){if(null!==t.newValue){const e=this.ao(t.newValue);if(e)return this.uo(e)}}else if(t.key===this.eo){const e=function(e){let t=mt.ue;if(null!=e)try{const n=JSON.parse(e);H("number"==typeof n,30636,{wo:e}),t=n}catch(n){z(sc,"Failed to read sequence number from WebStorage",n)}return t}(t.newValue);e!==mt.ue&&this.sequenceNumberHandler(e)}else if(t.key===this.oo){const e=this.So(t.newValue);await Promise.all(e.map(e=>this.syncEngine.bo(e)))}}else this.Zs.push(t)})}}get Po(){return this.Ys.get(this.js)}_o(){this.setItem(this.Xs,this.Po.Ws())}lo(e,t,n){const r=new ic(this.currentUser,e,t,n),s=tc(this.persistenceKey,this.currentUser,e);this.setItem(s,r.Ws())}ho(e){const t=tc(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Io(e){const t={clientId:this.js,onlineState:e};this.storage.setItem(this.so,JSON.stringify(t))}To(e,t,n){const r=rc(this.persistenceKey,e),s=new oc(e,t,n);this.setItem(r,s.Ws())}Eo(e){const t=JSON.stringify(Array.from(e));this.setItem(this.oo,t)}Ao(e){const t=this.no.exec(e);return t?t[1]:null}Vo(e,t){const n=this.Ao(e);return ac.Ks(n,t)}mo(e,t){const n=this.ro.exec(e),r=Number(n[1]),s=void 0!==n[2]?n[2]:null;return ic.Ks(new V(s),r,t)}po(e,t){const n=this.io.exec(e),r=Number(n[1]);return oc.Ks(r,t)}ao(e){return uc.Ks(e)}So(e){return JSON.parse(e)}async fo(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.Do(e.batchId,e.state,e.error);j(sc,`Ignoring mutation for non-active user ${e.user.uid}`)}yo(e){return this.syncEngine.vo(e.targetId,e.state,e.error)}Ro(e,t){const n=t?this.Ys.insert(e,t):this.Ys.remove(e),r=this.co(this.Ys),s=this.co(n),i=[],o=[];return s.forEach(e=>{r.has(e)||i.push(e)}),r.forEach(e=>{s.has(e)||o.push(e)}),this.syncEngine.Co(i,o).then(()=>{this.Ys=n})}uo(e){this.Ys.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}co(e){let t=Qs();return e.forEach((e,n)=>{t=t.unionWith(n.activeTargetIds)}),t}}class lc{constructor(){this.Fo=new cc,this.Mo={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e,t=!0){return t&&this.Fo.Gs(e),this.Mo[e]||"not-current"}updateQueryState(e,t,n){this.Mo[e]=t}removeLocalQueryTarget(e){this.Fo.zs(e)}isLocalQueryTarget(e){return this.Fo.activeTargetIds.has(e)}clearQueryState(e){delete this.Mo[e]}getAllActiveQueryTargets(){return this.Fo.activeTargetIds}isActiveQueryTarget(e){return this.Fo.activeTargetIds.has(e)}start(){return this.Fo=new cc,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dc{xo(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const fc="ConnectivityMonitor";class mc{constructor(){this.Oo=()=>this.No(),this.Bo=()=>this.Lo(),this.ko=[],this.qo()}xo(e){this.ko.push(e)}shutdown(){window.removeEventListener("online",this.Oo),window.removeEventListener("offline",this.Bo)}qo(){window.addEventListener("online",this.Oo),window.addEventListener("offline",this.Bo)}No(){j(fc,"Network connectivity changed: AVAILABLE");for(const e of this.ko)e(0)}Lo(){j(fc,"Network connectivity changed: UNAVAILABLE");for(const e of this.ko)e(1)}static C(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gc=null;function pc(){return null===gc?gc=268435456+Math.round(2147483648*Math.random()):gc++,"0x"+gc.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const yc="RestConnection",wc={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};class vc{get Qo(){return!1}constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http",n=encodeURIComponent(this.databaseId.projectId),r=encodeURIComponent(this.databaseId.database);this.$o=t+"://"+e.host,this.Uo=`projects/${n}/databases/${r}`,this.Ko=this.databaseId.database===sr?`project_id=${n}`:`project_id=${n}&database_id=${r}`}Wo(e,t,n,r,s){const o=pc(),a=this.Go(e,t.toUriEncodedString());j(yc,`Sending RPC '${e}' ${o}:`,a,n);const u={"google-cloud-resource-prefix":this.Uo,"x-goog-request-params":this.Ko};this.zo(u,r,s);const{host:c}=new URL(a),h=i(c);return this.jo(e,a,u,n,h).then(t=>(j(yc,`Received RPC '${e}' ${o}: `,t),t),t=>{throw $(yc,`RPC '${e}' ${o} failed with error: `,t,"url: ",a,"request:",n),t})}Jo(e,t,n,r,s,i){return this.Wo(e,t,n,r,s)}zo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+L,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach((t,n)=>e[n]=t),n&&n.headers.forEach((t,n)=>e[n]=t)}Go(e,t){const n=wc[e];return`${this.$o}/v1/${t}:${n}`}terminate(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(e){this.Ho=e.Ho,this.Yo=e.Yo}Zo(e){this.Xo=e}e_(e){this.t_=e}n_(e){this.r_=e}onMessage(e){this.i_=e}close(){this.Yo()}send(e){this.Ho(e)}s_(){this.Xo()}o_(){this.t_()}__(e){this.r_(e)}a_(e){this.i_(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ic="WebChannelConnection";class Tc extends vc{constructor(e){super(e),this.u_=[],this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams,this.longPollingOptions=e.longPollingOptions}jo(e,t,n,r,s){const i=pc();return new Promise((s,o)=>{const a=new x;a.setWithCredentials(!0),a.listenOnce(A.COMPLETE,()=>{try{switch(a.getLastErrorCode()){case D.NO_ERROR:const t=a.getResponseJson();j(Ic,`XHR for RPC '${e}' ${i} received:`,JSON.stringify(t)),s(t);break;case D.TIMEOUT:j(Ic,`RPC '${e}' ${i} timed out`),o(new J(Y.DEADLINE_EXCEEDED,"Request time out"));break;case D.HTTP_ERROR:const n=a.getStatus();if(j(Ic,`RPC '${e}' ${i} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Y).indexOf(t)>=0?t:Y.UNKNOWN}(t.status);o(new J(e,t.message))}else o(new J(Y.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new J(Y.UNAVAILABLE,"Connection failed."));break;default:K(9055,{c_:e,streamId:i,l_:a.getLastErrorCode(),h_:a.getLastError()})}}finally{j(Ic,`RPC '${e}' ${i} completed.`)}});const u=JSON.stringify(r);j(Ic,`RPC '${e}' ${i} sending request:`,r),a.send(t,"POST",u,n,15)})}P_(e,t,n){const r=pc(),s=[this.$o,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=O(),o=R(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},u=this.longPollingOptions.timeoutSeconds;void 0!==u&&(a.longPollingTimeout=Math.round(1e3*u)),this.useFetchStreams&&(a.useFetchStreams=!0),this.zo(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=s.join("");j(Ic,`Creating RPC '${e}' stream ${r}: ${c}`,a);const h=i.createWebChannel(c,a);this.T_(h);let l=!1,d=!1;const f=new bc({Ho:t=>{d?j(Ic,`Not sending because RPC '${e}' stream ${r} is closed:`,t):(l||(j(Ic,`Opening RPC '${e}' stream ${r} transport.`),h.open(),l=!0),j(Ic,`RPC '${e}' stream ${r} sending:`,t),h.send(t))},Yo:()=>h.close()}),m=(e,t,n)=>{e.listen(t,e=>{try{n(e)}catch(t){setTimeout(()=>{throw t},0)}})};return m(h,C.EventType.OPEN,()=>{d||(j(Ic,`RPC '${e}' stream ${r} transport opened.`),f.s_())}),m(h,C.EventType.CLOSE,()=>{d||(d=!0,j(Ic,`RPC '${e}' stream ${r} transport closed`),f.__(),this.I_(h))}),m(h,C.EventType.ERROR,t=>{d||(d=!0,$(Ic,`RPC '${e}' stream ${r} transport errored. Name:`,t.name,"Message:",t.message),f.__(new J(Y.UNAVAILABLE,"The operation could not be completed")))}),m(h,C.EventType.MESSAGE,t=>{var n;if(!d){const s=t.data[0];H(!!s,16349);const i=s,o=(null==i?void 0:i.error)||(null===(n=i[0])||void 0===n?void 0:n.error);if(o){j(Ic,`RPC '${e}' stream ${r} received error:`,o);const t=o.status;let n=function(e){const t=ki[e];if(void 0!==t)return Fi(t)}(t),s=o.message;void 0===n&&(n=Y.INTERNAL,s="Unknown error status: "+t+" with message "+o.message),d=!0,f.__(new J(n,s)),h.close()}else j(Ic,`RPC '${e}' stream ${r} received:`,s),f.a_(s)}}),m(o,k.STAT_EVENT,t=>{t.stat===N.PROXY?j(Ic,`RPC '${e}' stream ${r} detected buffering proxy`):t.stat===N.NOPROXY&&j(Ic,`RPC '${e}' stream ${r} detected no buffering proxy`)}),setTimeout(()=>{f.o_()},0),f}terminate(){this.u_.forEach(e=>e.close()),this.u_=[]}T_(e){this.u_.push(e)}I_(e){this.u_=this.u_.filter(t=>t===e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _c(){return"undefined"!=typeof window?window:null}function Ec(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(e){return new Zi(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xc{constructor(e,t,n=1e3,r=1.5,s=6e4){this.Fi=e,this.timerId=t,this.d_=n,this.E_=r,this.A_=s,this.R_=0,this.V_=null,this.m_=Date.now(),this.reset()}reset(){this.R_=0}f_(){this.R_=this.A_}g_(e){this.cancel();const t=Math.floor(this.R_+this.p_()),n=Math.max(0,Date.now()-this.m_),r=Math.max(0,t-n);r>0&&j("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.R_} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.V_=this.Fi.enqueueAfterDelay(this.timerId,r,()=>(this.m_=Date.now(),e())),this.R_*=this.E_,this.R_<this.d_&&(this.R_=this.d_),this.R_>this.A_&&(this.R_=this.A_)}y_(){null!==this.V_&&(this.V_.skipDelay(),this.V_=null)}cancel(){null!==this.V_&&(this.V_.cancel(),this.V_=null)}p_(){return(Math.random()-.5)*this.R_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cc="PersistentStream";class Ac{constructor(e,t,n,r,s,i,o,a){this.Fi=e,this.w_=n,this.S_=r,this.connection=s,this.authCredentialsProvider=i,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.b_=0,this.D_=null,this.v_=null,this.stream=null,this.C_=0,this.F_=new xc(e,t)}M_(){return 1===this.state||5===this.state||this.x_()}x_(){return 2===this.state||3===this.state}start(){this.C_=0,4!==this.state?this.auth():this.O_()}async stop(){this.M_()&&await this.close(0)}N_(){this.state=0,this.F_.reset()}B_(){this.x_()&&null===this.D_&&(this.D_=this.Fi.enqueueAfterDelay(this.w_,6e4,()=>this.L_()))}k_(e){this.q_(),this.stream.send(e)}async L_(){if(this.x_())return this.close(0)}q_(){this.D_&&(this.D_.cancel(),this.D_=null)}Q_(){this.v_&&(this.v_.cancel(),this.v_=null)}async close(e,t){this.q_(),this.Q_(),this.F_.cancel(),this.b_++,4!==e?this.F_.reset():t&&t.code===Y.RESOURCE_EXHAUSTED?(z(t.toString()),z("Using maximum backoff delay to prevent overloading the backend."),this.F_.f_()):t&&t.code===Y.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.U_(),this.stream.close(),this.stream=null),this.state=e,await this.listener.n_(t)}U_(){}auth(){this.state=1;const e=this.K_(this.b_),t=this.b_;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([e,n])=>{this.b_===t&&this.W_(e,n)},t=>{e(()=>{const e=new J(Y.UNKNOWN,"Fetching auth token failed: "+t.message);return this.G_(e)})})}W_(e,t){const n=this.K_(this.b_);this.stream=this.z_(e,t),this.stream.Zo(()=>{n(()=>this.listener.Zo())}),this.stream.e_(()=>{n(()=>(this.state=2,this.v_=this.Fi.enqueueAfterDelay(this.S_,1e4,()=>(this.x_()&&(this.state=3),Promise.resolve())),this.listener.e_()))}),this.stream.n_(e=>{n(()=>this.G_(e))}),this.stream.onMessage(e=>{n(()=>1==++this.C_?this.j_(e):this.onNext(e))})}O_(){this.state=5,this.F_.g_(async()=>{this.state=0,this.start()})}G_(e){return j(Cc,`close with error: ${e}`),this.stream=null,this.close(4,e)}K_(e){return t=>{this.Fi.enqueueAndForget(()=>this.b_===e?t():(j(Cc,"stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class Dc extends Ac{constructor(e,t,n,r,s,i){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}z_(e,t){return this.connection.P_("Listen",e,t)}j_(e){return this.onNext(e)}onNext(e){this.F_.reset();const t=function(e,t){let n;if("targetChange"in t){t.targetChange;const s="NO_CHANGE"===(r=t.targetChange.targetChangeType||"NO_CHANGE")?0:"ADD"===r?1:"REMOVE"===r?2:"CURRENT"===r?3:"RESET"===r?4:K(39313,{state:r}),i=t.targetChange.targetIds||[],o=function(e,t){return e.useProto3Json?(H(void 0===t||"string"==typeof t,58123),Gn.fromBase64String(t||"")):(H(void 0===t||t instanceof Buffer||t instanceof Uint8Array,16193),Gn.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),a=t.targetChange.cause,u=a&&function(e){const t=void 0===e.code?Y.UNKNOWN:Fi(e.code);return new J(t,e.message||"")}(a);n=new Gi(s,i,o,u||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const s=co(e,r.document.name),i=so(r.document.updateTime),o=r.document.createTime?so(r.document.createTime):Ve.min(),a=new Pr({mapValue:{fields:r.document.fields}}),u=Vr.newFoundDocument(s,i,o,a),c=r.targetIds||[],h=r.removedTargetIds||[];n=new zi(c,h,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const s=co(e,r.document),i=r.readTime?so(r.readTime):Ve.min(),o=Vr.newNoDocument(s,i),a=r.removedTargetIds||[];n=new zi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const s=co(e,r.document),i=r.removedTargetIds||[];n=new zi([],i,s,null)}else{if(!("filter"in t))return K(11601,{At:t});{t.filter;const e=t.filter;e.targetId;const{count:r=0,unchangedNames:s}=e,i=new Ni(r,s),o=e.targetId;n=new $i(o,i)}}var r;return n}(this.serializer,e),n=function(e){if(!("targetChange"in e))return Ve.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?Ve.min():t.readTime?so(t.readTime):Ve.min()}(e);return this.listener.J_(t,n)}H_(e){const t={};t.database=fo(this.serializer),t.addTarget=function(e,t){let n;const r=t.target;if(n=ds(r)?{documents:vo(e,r)}:{query:bo(e,r).Vt},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0){n.resumeToken=no(e,t.resumeToken);const r=eo(e,t.expectedCount);null!==r&&(n.expectedCount=r)}else if(t.snapshotVersion.compareTo(Ve.min())>0){n.readTime=to(e,t.snapshotVersion.toTimestamp());const r=eo(e,t.expectedCount);null!==r&&(n.expectedCount=r)}return n}(this.serializer,e);const n=function(e,t){const n=function(e){switch(e){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return K(28987,{purpose:e})}}(t.purpose);return null==n?null:{"goog-listen-tags":n}}(this.serializer,e);n&&(t.labels=n),this.k_(t)}Y_(e){const t={};t.database=fo(this.serializer),t.removeTarget=e,this.k_(t)}}class Nc extends Ac{constructor(e,t,n,r,s,i){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,i),this.serializer=s}get Z_(){return this.C_>0}start(){this.lastStreamToken=void 0,super.start()}U_(){this.Z_&&this.X_([])}z_(e,t){return this.connection.P_("Write",e,t)}j_(e){return H(!!e.streamToken,31322),this.lastStreamToken=e.streamToken,H(!e.writeResults||0===e.writeResults.length,55816),this.listener.ea()}onNext(e){H(!!e.streamToken,12678),this.lastStreamToken=e.streamToken,this.F_.reset();const t=function(e,t){return e&&e.length>0?(H(void 0!==t,14353),e.map(e=>function(e,t){let n=e.updateTime?so(e.updateTime):so(t);return n.isEqual(Ve.min())&&(n=so(t)),new hi(n,e.transformResults||[])}(e,t))):[]}(e.writeResults,e.commitTime),n=so(e.commitTime);return this.listener.ta(n,t)}na(){const e={};e.database=fo(this.serializer),this.k_(e)}X_(e){const t={streamToken:this.lastStreamToken,writes:e.map(e=>yo(this.serializer,e))};this.k_(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kc{}class Rc extends kc{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=r,this.ra=!1}ia(){if(this.ra)throw new J(Y.FAILED_PRECONDITION,"The client has already been terminated.")}Wo(e,t,n,r){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,i])=>this.connection.Wo(e,oo(t,n),r,s,i)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new J(Y.UNKNOWN,e.toString())})}Jo(e,t,n,r,s){return this.ia(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,o])=>this.connection.Jo(e,oo(t,n),r,i,o,s)).catch(e=>{throw"FirebaseError"===e.name?(e.code===Y.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new J(Y.UNKNOWN,e.toString())})}terminate(){this.ra=!0,this.connection.terminate()}}class Oc{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.sa=0,this.oa=null,this._a=!0}aa(){0===this.sa&&(this.ua("Unknown"),this.oa=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.oa=null,this.ca("Backend didn't respond within 10 seconds."),this.ua("Offline"),Promise.resolve())))}la(e){"Online"===this.state?this.ua("Unknown"):(this.sa++,this.sa>=1&&(this.ha(),this.ca(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ua("Offline")))}set(e){this.ha(),this.sa=0,"Online"===e&&(this._a=!1),this.ua(e)}ua(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ca(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this._a?(z(t),this._a=!1):j("OnlineStateTracker",t)}ha(){null!==this.oa&&(this.oa.cancel(),this.oa=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fc="RemoteStore";class Pc{constructor(e,t,n,r,s){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Pa=[],this.Ta=new Map,this.Ia=new Set,this.da=[],this.Ea=s,this.Ea.xo(e=>{n.enqueueAndForget(async()=>{$c(this)&&(j(Fc,"Restarting streams for network reachability change."),await async function(e){const t=X(e);t.Ia.add(4),await Vc(t),t.Aa.set("Unknown"),t.Ia.delete(4),await Mc(t)}(this))})}),this.Aa=new Oc(n,r)}}async function Mc(e){if($c(e))for(const t of e.da)await t(!0)}async function Vc(e){for(const t of e.da)await t(!1)}function Lc(e,t){const n=X(e);n.Ta.has(t.targetId)||(n.Ta.set(t.targetId,t),zc(n)?jc(n):ch(n).x_()&&Uc(n,t))}function qc(e,t){const n=X(e),r=ch(n);n.Ta.delete(t),r.x_()&&Bc(n,t),0===n.Ta.size&&(r.x_()?r.B_():$c(n)&&n.Aa.set("Unknown"))}function Uc(e,t){if(e.Ra.$e(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(Ve.min())>0){const n=e.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(n)}ch(e).H_(t)}function Bc(e,t){e.Ra.$e(t),ch(e).Y_(t)}function jc(e){e.Ra=new Qi({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Ta.get(t)||null,lt:()=>e.datastore.serializer.databaseId}),ch(e).start(),e.Aa.aa()}function zc(e){return $c(e)&&!ch(e).M_()&&e.Ta.size>0}function $c(e){return 0===X(e).Ia.size}function Gc(e){e.Ra=void 0}async function Kc(e){e.Aa.set("Online")}async function Qc(e){e.Ta.forEach((t,n)=>{Uc(e,t)})}async function Hc(e,t){Gc(e),zc(e)?(e.Aa.la(t),jc(e)):e.Aa.set("Unknown")}async function Wc(e,t,n){if(e.Aa.set("Online"),t instanceof Gi&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Ta.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Ta.delete(r),e.Ra.removeTarget(r))}(e,t)}catch(r){j(Fc,"Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Xc(e,r)}else if(t instanceof zi?e.Ra.Ye(t):t instanceof $i?e.Ra.it(t):e.Ra.et(t),!n.isEqual(Ve.min()))try{const t=await ju(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Ra.Pt(t);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const s=e.Ta.get(r);s&&e.Ta.set(r,s.withResumeToken(n.resumeToken,t))}}),n.targetMismatches.forEach((t,n)=>{const r=e.Ta.get(t);if(!r)return;e.Ta.set(t,r.withResumeToken(Gn.EMPTY_BYTE_STRING,r.snapshotVersion)),Bc(e,t);const s=new Ro(r.target,t,n,r.sequenceNumber);Uc(e,s)}),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(s){j(Fc,"Failed to raise snapshot:",s),await Xc(e,s)}}async function Xc(e,t,n){if(!ot(t))throw t;e.Ia.add(1),await Vc(e),e.Aa.set("Offline"),n||(n=()=>ju(e.localStore)),e.asyncQueue.enqueueRetryable(async()=>{j(Fc,"Retrying IndexedDB access"),await n(),e.Ia.delete(1),await Mc(e)})}function Yc(e,t){return t().catch(n=>Xc(e,n,t))}async function Jc(e){const t=X(e),n=hh(t);let r=t.Pa.length>0?t.Pa[t.Pa.length-1].batchId:gt;for(;Zc(t);)try{const e=await $u(t.localStore,r);if(null===e){0===t.Pa.length&&n.B_();break}r=e.batchId,eh(t,e)}catch(s){await Xc(t,s)}th(t)&&nh(t)}function Zc(e){return $c(e)&&e.Pa.length<10}function eh(e,t){e.Pa.push(t);const n=hh(e);n.x_()&&n.Z_&&n.X_(t.mutations)}function th(e){return $c(e)&&!hh(e).M_()&&e.Pa.length>0}function nh(e){hh(e).start()}async function rh(e){hh(e).na()}async function sh(e){const t=hh(e);for(const n of e.Pa)t.X_(n.mutations)}async function ih(e,t,n){const r=e.Pa.shift(),s=Ci.from(r,t,n);await Yc(e,()=>e.remoteSyncer.applySuccessfulWrite(s)),await Jc(e)}async function oh(e,t){t&&hh(e).Z_&&await async function(e,t){if(Oi(n=t.code)&&n!==Y.ABORTED){const n=e.Pa.shift();hh(e).N_(),await Yc(e,()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t)),await Jc(e)}var n}(e,t),th(e)&&nh(e)}async function ah(e,t){const n=X(e);n.asyncQueue.verifyOperationInProgress(),j(Fc,"RemoteStore received new credentials");const r=$c(n);n.Ia.add(3),await Vc(n),r&&n.Aa.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Ia.delete(3),await Mc(n)}async function uh(e,t){const n=X(e);t?(n.Ia.delete(2),await Mc(n)):t||(n.Ia.add(2),await Vc(n),n.Aa.set("Unknown"))}function ch(e){return e.Va||(e.Va=function(e,t,n){const r=X(e);return r.ia(),new Dc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:Kc.bind(null,e),e_:Qc.bind(null,e),n_:Hc.bind(null,e),J_:Wc.bind(null,e)}),e.da.push(async t=>{t?(e.Va.N_(),zc(e)?jc(e):e.Aa.set("Unknown")):(await e.Va.stop(),Gc(e))})),e.Va}function hh(e){return e.ma||(e.ma=function(e,t,n){const r=X(e);return r.ia(),new Nc(t,r.connection,r.authCredentials,r.appCheckCredentials,r.serializer,n)}(e.datastore,e.asyncQueue,{Zo:()=>Promise.resolve(),e_:rh.bind(null,e),n_:oh.bind(null,e),ea:sh.bind(null,e),ta:ih.bind(null,e)}),e.da.push(async t=>{t?(e.ma.N_(),await Jc(e)):(await e.ma.stop(),e.Pa.length>0&&(j(Fc,`Stopping write stream with ${e.Pa.length} pending writes`),e.Pa=[]))})),e.ma
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class lh{constructor(e,t,n,r,s){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=s,this.deferred=new Z,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(e=>{})}get promise(){return this.deferred.promise}static createAndSchedule(e,t,n,r,s){const i=Date.now()+n,o=new lh(e,t,i,r,s);return o.start(n),o}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new J(Y.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function dh(e,t){if(z("AsyncQueue",`${t}: ${e}`),ot(e))return new J(Y.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fh{static emptySet(e){return new fh(e.comparator)}constructor(e){this.comparator=e?(t,n)=>e(t,n)||_e.comparator(t.key,n.key):(e,t)=>_e.comparator(e.key,t.key),this.keyedMap=Ls(),this.sortedSet=new Mn(this.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal((t,n)=>(e(t),!1))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof fh))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach(t=>{e.push(t.toString())}),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new fh;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.fa=new Mn(_e.comparator)}track(e){const t=e.doc.key,n=this.fa.get(t);n?0!==e.type&&3===n.type?this.fa=this.fa.insert(t,e):3===e.type&&1!==n.type?this.fa=this.fa.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.fa=this.fa.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.fa=this.fa.remove(t):1===e.type&&2===n.type?this.fa=this.fa.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.fa=this.fa.insert(t,{type:2,doc:e.doc}):K(63341,{At:e,ga:n}):this.fa=this.fa.insert(t,e)}pa(){const e=[];return this.fa.inorderTraversal((t,n)=>{e.push(n)}),e}}class gh{constructor(e,t,n,r,s,i,o,a,u){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=s,this.fromCache=i,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=u}static fromInitialDocuments(e,t,n,r,s){const i=[];return t.forEach(e=>{i.push({type:0,doc:e})}),new gh(e,t,fh.emptySet(t),i,n,r,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Cs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{constructor(){this.ya=void 0,this.wa=[]}Sa(){return this.wa.some(e=>e.ba())}}class yh{constructor(){this.queries=wh(),this.onlineState="Unknown",this.Da=new Set}terminate(){!function(e,t){const n=X(e),r=n.queries;n.queries=wh(),r.forEach((e,n)=>{for(const r of n.wa)r.onError(t)})}(this,new J(Y.ABORTED,"Firestore shutting down"))}}function wh(){return new Fs(e=>As(e),Cs)}async function vh(e,t){const n=X(e);let r=3;const s=t.query;let i=n.queries.get(s);i?!i.Sa()&&t.ba()&&(r=2):(i=new ph,r=t.ba()?0:1);try{switch(r){case 0:i.ya=await n.onListen(s,!0);break;case 1:i.ya=await n.onListen(s,!1);break;case 2:await n.onFirstRemoteStoreListen(s)}}catch(o){const e=dh(o,`Initialization of query '${Ds(t.query)}' failed`);return void t.onError(e)}n.queries.set(s,i),i.wa.push(t),t.va(n.onlineState),i.ya&&t.Ca(i.ya)&&_h(n)}async function bh(e,t){const n=X(e),r=t.query;let s=3;const i=n.queries.get(r);if(i){const e=i.wa.indexOf(t);e>=0&&(i.wa.splice(e,1),0===i.wa.length?s=t.ba()?0:1:!i.Sa()&&t.ba()&&(s=2))}switch(s){case 0:return n.queries.delete(r),n.onUnlisten(r,!0);case 1:return n.queries.delete(r),n.onUnlisten(r,!1);case 2:return n.onLastRemoteStoreUnlisten(r);default:return}}function Ih(e,t){const n=X(e);let r=!1;for(const s of t){const e=s.query,t=n.queries.get(e);if(t){for(const e of t.wa)e.Ca(s)&&(r=!0);t.ya=s}}r&&_h(n)}function Th(e,t,n){const r=X(e),s=r.queries.get(t);if(s)for(const i of s.wa)i.onError(n);r.queries.delete(t)}function _h(e){e.Da.forEach(e=>{e.next()})}var Eh,Sh;(Sh=Eh||(Eh={})).Fa="default",Sh.Cache="cache";class xh{constructor(e,t,n){this.query=e,this.Ma=t,this.xa=!1,this.Oa=null,this.onlineState="Unknown",this.options=n||{}}Ca(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new gh(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.xa?this.Na(e)&&(this.Ma.next(e),t=!0):this.Ba(e,this.onlineState)&&(this.La(e),t=!0),this.Oa=e,t}onError(e){this.Ma.error(e)}va(e){this.onlineState=e;let t=!1;return this.Oa&&!this.xa&&this.Ba(this.Oa,e)&&(this.La(this.Oa),t=!0),t}Ba(e,t){if(!e.fromCache)return!0;if(!this.ba())return!0;const n="Offline"!==t;return(!this.options.ka||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Na(e){if(e.docChanges.length>0)return!0;const t=this.Oa&&this.Oa.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}La(e){e=gh.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.xa=!0,this.Ma.next(e)}ba(){return this.options.source!==Eh.Cache}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ch{constructor(e,t){this.qa=e,this.byteLength=t}Qa(){return"metadata"in this.qa}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah{constructor(e){this.serializer=e}Qs(e){return co(this.serializer,e)}$s(e){return e.metadata.exists?po(this.serializer,e.document,!1):Vr.newNoDocument(this.Qs(e.metadata.name),this.Us(e.metadata.readTime))}Us(e){return so(e)}}class Dh{constructor(e,t){this.$a=e,this.serializer=t,this.Ua=[],this.Ka=[],this.collectionGroups=new Set,this.progress=Nh(e)}get queries(){return this.Ua}get documents(){return this.Ka}Wa(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.qa.namedQuery)this.Ua.push(e.qa.namedQuery);else if(e.qa.documentMetadata){this.Ka.push({metadata:e.qa.documentMetadata}),e.qa.documentMetadata.exists||++t;const n=be.fromString(e.qa.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.qa.document&&(this.Ka[this.Ka.length-1].document=e.qa.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Ga(e){const t=new Map,n=new Ah(this.serializer);for(const r of e)if(r.metadata.queries){const e=n.Qs(r.metadata.name);for(const n of r.metadata.queries){const r=(t.get(n)||Gs()).add(e);t.set(n,r)}}return t}async za(e){const t=await async function(e,t,n,r){const s=X(e);let i=Gs(),o=Ms();for(const h of n){const e=t.Qs(h.metadata.name);h.document&&(i=i.add(e));const n=t.$s(h);n.setReadTime(t.Us(h.metadata.readTime)),o=o.insert(e,n)}const a=s.Os.newChangeBuffer({trackRemovals:!0}),u=await Gu(s,(c=r,Ts(ws(be.fromString(`__bundle__/docs/${c}`)))));var c;return s.persistence.runTransaction("Apply bundle documents","readwrite",e=>zu(e,a,o).next(t=>(a.apply(e),t)).next(t=>s.hi.removeMatchingKeysForTargetId(e,u.targetId).next(()=>s.hi.addMatchingKeys(e,i,u.targetId)).next(()=>s.localDocuments.getLocalViewOfDocuments(e,t.Ls,t.ks)).next(()=>t.Ls)))}(e,new Ah(this.serializer),this.Ka,this.$a.id),n=this.Ga(this.documents);for(const r of this.Ua)await Yu(e,r,n.get(r.name));return this.progress.taskState="Success",{progress:this.progress,ja:this.collectionGroups,Ja:t}}}function Nh(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e){this.key=e}}class Rh{constructor(e){this.key=e}}class Oh{constructor(e,t){this.query=e,this.Ha=t,this.Ya=null,this.hasCachedResults=!1,this.current=!1,this.Za=Gs(),this.mutatedKeys=Gs(),this.Xa=Rs(e),this.eu=new fh(this.Xa)}get tu(){return this.Ha}nu(e,t){const n=t?t.ru:new mh,r=t?t.eu:this.eu;let s=t?t.mutatedKeys:this.mutatedKeys,i=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,u="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal((e,t)=>{const c=r.get(e),h=Ns(this.query,t)?t:null,l=!!c&&this.mutatedKeys.has(c.key),d=!!h&&(h.hasLocalMutations||this.mutatedKeys.has(h.key)&&h.hasCommittedMutations);let f=!1;c&&h?c.data.isEqual(h.data)?l!==d&&(n.track({type:3,doc:h}),f=!0):this.iu(c,h)||(n.track({type:2,doc:h}),f=!0,(a&&this.Xa(h,a)>0||u&&this.Xa(h,u)<0)&&(o=!0)):!c&&h?(n.track({type:0,doc:h}),f=!0):c&&!h&&(n.track({type:1,doc:c}),f=!0,(a||u)&&(o=!0)),f&&(h?(i=i.add(h),s=d?s.add(e):s.delete(e)):(i=i.delete(e),s=s.delete(e)))}),null!==this.query.limit)for(;i.size>this.query.limit;){const e="F"===this.query.limitType?i.last():i.first();i=i.delete(e.key),s=s.delete(e.key),n.track({type:1,doc:e})}return{eu:i,ru:n,Ds:o,mutatedKeys:s}}iu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n,r){const s=this.eu;this.eu=e.eu,this.mutatedKeys=e.mutatedKeys;const i=e.ru.pa();i.sort((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return K(20277,{At:e})}};return n(e)-n(t)}(e.type,t.type)||this.Xa(e.doc,t.doc)),this.su(n),r=null!=r&&r;const o=t&&!r?this.ou():[],a=0===this.Za.size&&this.current&&!r?1:0,u=a!==this.Ya;return this.Ya=a,0!==i.length||u?{snapshot:new gh(this.query,e.eu,s,i,e.mutatedKeys,0===a,u,!1,!!n&&n.resumeToken.approximateByteSize()>0),_u:o}:{_u:o}}va(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({eu:this.eu,ru:new mh,mutatedKeys:this.mutatedKeys,Ds:!1},!1)):{_u:[]}}au(e){return!this.Ha.has(e)&&!!this.eu.has(e)&&!this.eu.get(e).hasLocalMutations}su(e){e&&(e.addedDocuments.forEach(e=>this.Ha=this.Ha.add(e)),e.modifiedDocuments.forEach(e=>{}),e.removedDocuments.forEach(e=>this.Ha=this.Ha.delete(e)),this.current=e.current)}ou(){if(!this.current)return[];const e=this.Za;this.Za=Gs(),this.eu.forEach(e=>{this.au(e.key)&&(this.Za=this.Za.add(e.key))});const t=[];return e.forEach(e=>{this.Za.has(e)||t.push(new Rh(e))}),this.Za.forEach(n=>{e.has(n)||t.push(new kh(n))}),t}uu(e){this.Ha=e.qs,this.Za=Gs();const t=this.nu(e.documents);return this.applyChanges(t,!0)}cu(){return gh.fromInitialDocuments(this.query,this.eu,this.mutatedKeys,0===this.Ya,this.hasCachedResults)}}const Fh="SyncEngine";class Ph{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Mh{constructor(e){this.key=e,this.lu=!1}}class Vh{constructor(e,t,n,r,s,i){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=s,this.maxConcurrentLimboResolutions=i,this.hu={},this.Pu=new Fs(e=>As(e),Cs),this.Tu=new Map,this.Iu=new Set,this.du=new Mn(_e.comparator),this.Eu=new Map,this.Au=new mu,this.Ru={},this.Vu=new Map,this.mu=Ua.ur(),this.onlineState="Unknown",this.fu=void 0}get isPrimaryClient(){return!0===this.fu}}async function Lh(e,t,n=!0){const r=fl(e);let s;const i=r.Pu.get(t);return i?(r.sharedClientState.addLocalQueryTarget(i.targetId),s=i.view.cu()):s=await Uh(r,t,n,!0),s}async function qh(e,t){const n=fl(e);await Uh(n,t,!0,!1)}async function Uh(e,t,n,r){const s=await Gu(e.localStore,Ts(t)),i=s.targetId,o=e.sharedClientState.addLocalQueryTarget(i,n);let a;return r&&(a=await Bh(e,t,i,"current"===o,s.resumeToken)),e.isPrimaryClient&&n&&Lc(e.remoteStore,s),a}async function Bh(e,t,n,r,s){e.gu=(t,n,r)=>async function(e,t,n,r){let s=t.view.nu(n);s.Ds&&(s=await Qu(e.localStore,t.query,!1).then(({documents:e})=>t.view.nu(e,s)));const i=r&&r.targetChanges.get(t.targetId),o=r&&null!=r.targetMismatches.get(t.targetId),a=t.view.applyChanges(s,e.isPrimaryClient,i,o);return Zh(e,t.targetId,a._u),a.snapshot}(e,t,n,r);const i=await Qu(e.localStore,t,!0),o=new Oh(t,i.qs),a=o.nu(i.documents),u=ji.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState,s),c=o.applyChanges(a,e.isPrimaryClient,u);Zh(e,n,c._u);const h=new Ph(t,n,o);return e.Pu.set(t,h),e.Tu.has(n)?e.Tu.get(n).push(t):e.Tu.set(n,[t]),c.snapshot}async function jh(e,t,n){const r=X(e),s=r.Pu.get(t),i=r.Tu.get(s.targetId);if(i.length>1)return r.Tu.set(s.targetId,i.filter(e=>!Cs(e,t))),void r.Pu.delete(t);r.isPrimaryClient?(r.sharedClientState.removeLocalQueryTarget(s.targetId),r.sharedClientState.isActiveQueryTarget(s.targetId)||await Ku(r.localStore,s.targetId,!1).then(()=>{r.sharedClientState.clearQueryState(s.targetId),n&&qc(r.remoteStore,s.targetId),Yh(r,s.targetId)}).catch(Je)):(Yh(r,s.targetId),await Ku(r.localStore,s.targetId,!0))}async function zh(e,t){const n=X(e),r=n.Pu.get(t),s=n.Tu.get(r.targetId);n.isPrimaryClient&&1===s.length&&(n.sharedClientState.removeLocalQueryTarget(r.targetId),qc(n.remoteStore,r.targetId))}async function $h(e,t){const n=X(e);try{const e=await function(e,t){const n=X(e),r=t.snapshotVersion;let s=n.Fs;return n.persistence.runTransaction("Apply remote event","readwrite-primary",e=>{const i=n.Os.newChangeBuffer({trackRemovals:!0});s=n.Fs;const o=[];t.targetChanges.forEach((i,a)=>{const u=s.get(a);if(!u)return;o.push(n.hi.removeMatchingKeys(e,i.removedDocuments,a).next(()=>n.hi.addMatchingKeys(e,i.addedDocuments,a)));let c=u.withSequenceNumber(e.currentSequenceNumber);var h,l,d;null!==t.targetMismatches.get(a)?c=c.withResumeToken(Gn.EMPTY_BYTE_STRING,Ve.min()).withLastLimboFreeSnapshotVersion(Ve.min()):i.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(i.resumeToken,r)),s=s.insert(a,c),l=c,d=i,(0===(h=u).resumeToken.approximateByteSize()||l.snapshotVersion.toMicroseconds()-h.snapshotVersion.toMicroseconds()>=3e8||d.addedDocuments.size+d.modifiedDocuments.size+d.removedDocuments.size>0)&&o.push(n.hi.updateTargetData(e,c))});let a=Ms(),u=Gs();if(t.documentUpdates.forEach(r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))}),o.push(zu(e,i,t.documentUpdates).next(e=>{a=e.Ls,u=e.ks})),!r.isEqual(Ve.min())){const t=n.hi.getLastRemoteSnapshotVersion(e).next(t=>n.hi.setTargetsMetadata(e,e.currentSequenceNumber,r));o.push(t)}return Ze.waitFor(o).next(()=>i.apply(e)).next(()=>n.localDocuments.getLocalViewOfDocuments(e,a,u)).next(()=>a)}).then(e=>(n.Fs=s,e))}(n.localStore,t);t.targetChanges.forEach((e,t)=>{const r=n.Eu.get(t);r&&(H(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1,22616),e.addedDocuments.size>0?r.lu=!0:e.modifiedDocuments.size>0?H(r.lu,14607):e.removedDocuments.size>0&&(H(r.lu,42227),r.lu=!1))}),await nl(n,e,t)}catch(r){await Je(r)}}function Gh(e,t,n){const r=X(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Pu.forEach((n,r)=>{const s=r.view.va(t);s.snapshot&&e.push(s.snapshot)}),function(e,t){const n=X(e);n.onlineState=t;let r=!1;n.queries.forEach((e,n)=>{for(const s of n.wa)s.va(t)&&(r=!0)}),r&&_h(n)}(r.eventManager,t),e.length&&r.hu.J_(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Kh(e,t,n){const r=X(e);r.sharedClientState.updateQueryState(t,"rejected",n);const s=r.Eu.get(t),i=s&&s.key;if(i){let e=new Mn(_e.comparator);e=e.insert(i,Vr.newNoDocument(i,Ve.min()));const n=Gs().add(i),s=new Bi(Ve.min(),new Map,new Mn(de),e,n);await $h(r,s),r.du=r.du.remove(i),r.Eu.delete(t),tl(r)}else await Ku(r.localStore,t,!1).then(()=>Yh(r,t,n)).catch(Je)}async function Qh(e,t){const n=X(e),r=t.batch.batchId;try{const e=await function(e,t){const n=X(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",e=>{const r=t.batch.keys(),s=n.Os.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const s=n.batch,i=s.keys();let o=Ze.resolve();return i.forEach(e=>{o=o.next(()=>r.getEntry(t,e)).next(t=>{const i=n.docVersions.get(e);H(null!==i,48541),t.version.compareTo(i)<0&&(s.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))})}),o.next(()=>e.mutationQueue.removeMutationBatch(t,s))}(n,e,t,s).next(()=>s.apply(e)).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Gs();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t))).next(()=>n.localDocuments.getDocuments(e,r))})}(n.localStore,t);Xh(n,r,null),Wh(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await nl(n,e)}catch(s){await Je(s)}}async function Hh(e,t,n){const r=X(e);try{const e=await function(e,t){const n=X(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next(t=>(H(null!==t,37113),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t))).next(()=>n.mutationQueue.performConsistencyCheck(e)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r)).next(()=>n.localDocuments.getDocuments(e,r))})}(r.localStore,t);Xh(r,t,n),Wh(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await nl(r,e)}catch(s){await Je(s)}}function Wh(e,t){(e.Vu.get(t)||[]).forEach(e=>{e.resolve()}),e.Vu.delete(t)}function Xh(e,t,n){const r=X(e);let s=r.Ru[r.currentUser.toKey()];if(s){const e=s.get(t);e&&(n?e.reject(n):e.resolve(),s=s.remove(t)),r.Ru[r.currentUser.toKey()]=s}}function Yh(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Tu.get(t))e.Pu.delete(r),n&&e.hu.pu(r,n);e.Tu.delete(t),e.isPrimaryClient&&e.Au.zr(t).forEach(t=>{e.Au.containsKey(t)||Jh(e,t)})}function Jh(e,t){e.Iu.delete(t.path.canonicalString());const n=e.du.get(t);null!==n&&(qc(e.remoteStore,n),e.du=e.du.remove(t),e.Eu.delete(n),tl(e))}function Zh(e,t,n){for(const r of n)r instanceof kh?(e.Au.addReference(r.key,t),el(e,r)):r instanceof Rh?(j(Fh,"Document no longer in limbo: "+r.key),e.Au.removeReference(r.key,t),e.Au.containsKey(r.key)||Jh(e,r.key)):K(19791,{yu:r})}function el(e,t){const n=t.key,r=n.path.canonicalString();e.du.get(n)||e.Iu.has(r)||(j(Fh,"New document in limbo: "+n),e.Iu.add(r),tl(e))}function tl(e){for(;e.Iu.size>0&&e.du.size<e.maxConcurrentLimboResolutions;){const t=e.Iu.values().next().value;e.Iu.delete(t);const n=new _e(be.fromString(t)),r=e.mu.next();e.Eu.set(r,new Mh(n)),e.du=e.du.insert(n,r),Lc(e.remoteStore,new Ro(Ts(ws(n.path)),r,"TargetPurposeLimboResolution",mt.ue))}}async function nl(e,t,n){const r=X(e),s=[],i=[],o=[];r.Pu.isEmpty()||(r.Pu.forEach((e,a)=>{o.push(r.gu(a,t,n).then(e=>{var t;if((e||n)&&r.isPrimaryClient){const s=e?!e.fromCache:null===(t=null==n?void 0:n.targetChanges.get(a.targetId))||void 0===t?void 0:t.current;r.sharedClientState.updateQueryState(a.targetId,s?"current":"not-current")}if(e){s.push(e);const t=Pu.Es(a.targetId,e);i.push(t)}}))}),await Promise.all(o),r.hu.J_(s),await async function(e,t){const n=X(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",e=>Ze.forEach(t,t=>Ze.forEach(t.Is,r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r)).next(()=>Ze.forEach(t.ds,r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))}catch(r){if(!ot(r))throw r;j(Lu,"Failed to update sequence numbers: "+r)}for(const s of t){const e=s.targetId;if(!s.fromCache){const t=n.Fs.get(e),r=t.snapshotVersion,s=t.withLastLimboFreeSnapshotVersion(r);n.Fs=n.Fs.insert(e,s)}}}(r.localStore,i))}async function rl(e,t){const n=X(e);if(!n.currentUser.isEqual(t)){j(Fh,"User change. New user:",t.toKey());const e=await Bu(n.localStore,t);n.currentUser=t,s="'waitForPendingWrites' promise is rejected due to a user change.",(r=n).Vu.forEach(e=>{e.forEach(e=>{e.reject(new J(Y.CANCELLED,s))})}),r.Vu.clear(),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await nl(n,e.Bs)}var r,s}function sl(e,t){const n=X(e),r=n.Eu.get(t);if(r&&r.lu)return Gs().add(r.key);{let e=Gs();const r=n.Tu.get(t);if(!r)return e;for(const t of r){const r=n.Pu.get(t);e=e.unionWith(r.view.tu)}return e}}async function il(e,t){const n=X(e),r=await Qu(n.localStore,t.query,!0),s=t.view.uu(r);return n.isPrimaryClient&&Zh(n,t.targetId,s._u),s}async function ol(e,t){const n=X(e);return Wu(n.localStore,t).then(e=>nl(n,e))}async function al(e,t,n,r){const s=X(e),i=await function(e,t){const n=X(e),r=X(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",e=>r.Xn(e,t).next(t=>t?n.localDocuments.getDocuments(e,t):Ze.resolve(null)))}(s.localStore,t);var o,a;null!==i?("pending"===n?await Jc(s.remoteStore):"acknowledged"===n||"rejected"===n?(Xh(s,t,r||null),Wh(s,t),o=s.localStore,a=t,X(X(o).mutationQueue).rr(a)):K(6720,"Unknown batchState",{wu:n}),await nl(s,i)):j(Fh,"Cannot apply mutation batch with id: "+t)}async function ul(e,t,n){const r=X(e),s=[],i=[];for(const o of t){let e;const t=r.Tu.get(o);if(t&&0!==t.length){e=await Gu(r.localStore,Ts(t[0]));for(const e of t){const t=r.Pu.get(e),n=await il(r,t);n.snapshot&&i.push(n.snapshot)}}else{const t=await Hu(r.localStore,o);e=await Gu(r.localStore,t),await Bh(r,cl(t),o,!1,e.resumeToken)}s.push(e)}return r.hu.J_(i),s}function cl(e){return ys(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function hl(e){return t=X(e).localStore,X(X(t).persistence).Ps();var t}async function ll(e,t,n,r){const s=X(e);if(s.fu)return void j(Fh,"Ignoring unexpected query state notification.");const i=s.Tu.get(t);if(i&&i.length>0)switch(n){case"current":case"not-current":{const e=await Wu(s.localStore,ks(i[0])),r=Bi.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,Gn.EMPTY_BYTE_STRING);await nl(s,e,r);break}case"rejected":await Ku(s.localStore,t,!0),Yh(s,t,r);break;default:K(64155,n)}}async function dl(e,t,n){const r=fl(e);if(r.fu){for(const e of t){if(r.Tu.has(e)&&r.sharedClientState.isActiveQueryTarget(e)){j(Fh,"Adding an already active target "+e);continue}const t=await Hu(r.localStore,e),n=await Gu(r.localStore,t);await Bh(r,cl(t),n.targetId,!1,n.resumeToken),Lc(r.remoteStore,n)}for(const e of n)r.Tu.has(e)&&await Ku(r.localStore,e,!1).then(()=>{qc(r.remoteStore,e),Yh(r,e)}).catch(Je)}}function fl(e){const t=X(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=$h.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=sl.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Kh.bind(null,t),t.hu.J_=Ih.bind(null,t.eventManager),t.hu.pu=Th.bind(null,t.eventManager),t}function ml(e){const t=X(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Qh.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Hh.bind(null,t),t}class gl{constructor(){this.kind="memory",this.synchronizeTabs=!1}async initialize(e){this.serializer=Sc(e.databaseInfo.databaseId),this.sharedClientState=this.bu(e),this.persistence=this.Du(e),await this.persistence.start(),this.localStore=this.vu(e),this.gcScheduler=this.Cu(e,this.localStore),this.indexBackfillerScheduler=this.Fu(e,this.localStore)}Cu(e,t){return null}Fu(e,t){return null}vu(e){return Uu(this.persistence,new Vu,e.initialUser,this.serializer)}Du(e){return new bu(Tu.Vi,this.serializer)}bu(e){return new lc}async terminate(){var e,t;null===(e=this.gcScheduler)||void 0===e||e.stop(),null===(t=this.indexBackfillerScheduler)||void 0===t||t.stop(),this.sharedClientState.shutdown(),await this.persistence.shutdown()}}gl.provider={build:()=>new gl};class pl extends gl{constructor(e){super(),this.cacheSizeBytes=e}Cu(e,t){H(this.persistence.referenceDelegate instanceof _u,46915);const n=this.persistence.referenceDelegate.garbageCollector;return new Wa(n,e.asyncQueue,t)}Du(e){const t=void 0!==this.cacheSizeBytes?Ra.withCacheSize(this.cacheSizeBytes):Ra.DEFAULT;return new bu(e=>_u.Vi(e,t),this.serializer)}}class yl extends gl{constructor(e,t,n){super(),this.Mu=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.kind="persistent",this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.Mu.initialize(this,e),await ml(this.Mu.syncEngine),await Jc(this.Mu.remoteStore),await this.persistence.ji(()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve()))}vu(e){return Uu(this.persistence,new Vu,e.initialUser,this.serializer)}Cu(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new Wa(n,e.asyncQueue,t)}Fu(e,t){const n=new ft(t,this.persistence);return new dt(e.asyncQueue,n)}Du(e){const t=Fu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Ra.withCacheSize(this.cacheSizeBytes):Ra.DEFAULT;return new ku(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,_c(),Ec(),this.serializer,this.sharedClientState,!!this.forceOwnership)}bu(e){return new lc}}class wl extends yl{constructor(e,t){super(e,t,!1),this.Mu=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.Mu.syncEngine;this.sharedClientState instanceof hc&&(this.sharedClientState.syncEngine={Do:al.bind(null,t),vo:ll.bind(null,t),Co:dl.bind(null,t),Ps:hl.bind(null,t),bo:ol.bind(null,t)},await this.sharedClientState.start()),await this.persistence.ji(async e=>{await async function(e,t){const n=X(e);if(fl(n),ml(n),!0===t&&!0!==n.fu){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await ul(n,e.toArray());n.fu=!0,await uh(n.remoteStore,!0);for(const r of t)Lc(n.remoteStore,r)}else if(!1===t&&!1!==n.fu){const e=[];let t=Promise.resolve();n.Tu.forEach((r,s)=>{n.sharedClientState.isLocalQueryTarget(s)?e.push(s):t=t.then(()=>(Yh(n,s),Ku(n.localStore,s,!0))),qc(n.remoteStore,s)}),await t,await ul(n,e),function(e){const t=X(e);t.Eu.forEach((e,n)=>{qc(t.remoteStore,n)}),t.Au.jr(),t.Eu=new Map,t.du=new Mn(_e.comparator)}(n),n.fu=!1,await uh(n.remoteStore,!1)}}(this.Mu.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())})}bu(e){const t=_c();if(!hc.C(t))throw new J(Y.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Fu(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new hc(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class vl{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Gh(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=rl.bind(null,this.syncEngine),await uh(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new yh}createDatastore(e){const t=Sc(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Tc(r));var r;return function(e,t,n,r){return new Rc(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,s=e=>Gh(this.syncEngine,e,0),i=mc.C()?new mc:new dc,new Pc(t,n,r,s,i);var t,n,r,s,i}createSyncEngine(e,t){return function(e,t,n,r,s,i,o){const a=new Vh(e,t,n,r,s,i);return o&&(a.fu=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}async terminate(){var e,t;await async function(e){const t=X(e);j(Fc,"RemoteStore shutting down."),t.Ia.add(5),await Vc(t),t.Ea.shutdown(),t.Aa.set("Unknown")}(this.remoteStore),null===(e=this.datastore)||void 0===e||e.terminate(),null===(t=this.eventManager)||void 0===t||t.terminate()}}function bl(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const r={value:e.slice(n,n+t),done:!1};return n+=t,r}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */vl.provider={build:()=>new vl};class Il{constructor(e){this.observer=e,this.muted=!1}next(e){this.muted||this.observer.next&&this.xu(this.observer.next,e)}error(e){this.muted||(this.observer.error?this.xu(this.observer.error,e):z("Uncaught Error in snapshot listener:",e.toString()))}Ou(){this.muted=!0}xu(e,t){setTimeout(()=>{this.muted||e(t)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(e,t){this.Nu=e,this.serializer=t,this.metadata=new Z,this.buffer=new Uint8Array,this.Bu=new TextDecoder("utf-8"),this.Lu().then(e=>{e&&e.Qa()?this.metadata.resolve(e.qa.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.qa)}`))},e=>this.metadata.reject(e))}close(){return this.Nu.cancel()}async getMetadata(){return this.metadata.promise}async Su(){return await this.getMetadata(),this.Lu()}async Lu(){const e=await this.ku();if(null===e)return null;const t=this.Bu.decode(e),n=Number(t);isNaN(n)&&this.qu(`length string (${t}) is not valid number`);const r=await this.Qu(n);return new Ch(JSON.parse(r),e.length+n)}$u(){return this.buffer.findIndex(e=>e==="{".charCodeAt(0))}async ku(){for(;this.$u()<0&&!(await this.Uu()););if(0===this.buffer.length)return null;const e=this.$u();e<0&&this.qu("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async Qu(e){for(;this.buffer.length<e;)await this.Uu()&&this.qu("Reached the end of bundle when more is expected.");const t=this.Bu.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}qu(e){throw this.Nu.cancel(),new Error(`Invalid bundle format: ${e}`)}async Uu(){const e=await this.Nu.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t){this.bundleData=e,this.serializer=t,this.cursor=0,this.elements=[];let n=this.Su();if(!n||!n.Qa())throw new Error(`The first element of the bundle is not a metadata object, it is\n         ${JSON.stringify(null==n?void 0:n.qa)}`);this.metadata=n;do{n=this.Su(),null!==n&&this.elements.push(n)}while(null!==n)}getMetadata(){return this.metadata}Ku(){return this.elements}Su(){if(this.cursor===this.bundleData.length)return null;const e=this.ku(),t=this.Qu(e);return new Ch(JSON.parse(t),e)}Qu(e){if(this.cursor+e>this.bundleData.length)throw new J(Y.INTERNAL,"Reached the end of bundle when more is expected.");return this.bundleData.slice(this.cursor,this.cursor+=e)}ku(){const e=this.cursor;let t=this.cursor;for(;t<this.bundleData.length;){if("{"===this.bundleData[t]){if(t===e)throw new Error("First character is a bracket and not a number");return this.cursor=t,Number(this.bundleData.slice(e,t))}t++}throw new Error("Reached the end of bundle when more is expected.")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class El{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastTransactionError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw this.lastTransactionError=new J(Y.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes."),this.lastTransactionError;const t=await async function(e,t){const n=X(e),r={documents:t.map(e=>uo(n.serializer,e))},s=await n.Jo("BatchGetDocuments",n.serializer.databaseId,be.emptyPath(),r,t.length),i=new Map;s.forEach(e=>{const t=function(e,t){return"found"in t?function(e,t){H(!!t.found,43571),t.found.name,t.found.updateTime;const n=co(e,t.found.name),r=so(t.found.updateTime),s=t.found.createTime?so(t.found.createTime):Ve.min(),i=new Pr({mapValue:{fields:t.found.fields}});return Vr.newFoundDocument(n,r,s,i)}(e,t):"missing"in t?function(e,t){H(!!t.missing,3894),H(!!t.readTime,22933);const n=co(e,t.missing),r=so(t.readTime);return Vr.newNoDocument(n,r)}(e,t):K(7234,{result:t})}(n.serializer,e);i.set(t.key.toString(),t)});const o=[];return t.forEach(e=>{const t=i.get(e.toString());H(!!t,55234,{key:e}),o.push(t)}),o}(this.datastore,e);return t.forEach(e=>this.recordVersion(e)),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(n){this.lastTransactionError=n}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ei(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastTransactionError)throw this.lastTransactionError;const e=this.readVersions;this.mutations.forEach(t=>{e.delete(t.key.toString())}),e.forEach((e,t)=>{const n=_e.fromPath(t);this.mutations.push(new Si(n,this.precondition(n)))}),await async function(e,t){const n=X(e),r={writes:t.map(e=>yo(n.serializer,e))};await n.Wo("Commit",n.serializer.databaseId,be.emptyPath(),r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw K(50498,{Wu:e.constructor.name});t=Ve.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new J(Y.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(Ve.min())?li.exists(!1):li.updateTime(t):li.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(Ve.min()))throw new J(Y.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return li.updateTime(t)}return li.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(e,t,n,r,s){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=r,this.deferred=s,this.Gu=n.maxAttempts,this.F_=new xc(this.asyncQueue,"transaction_retry")}zu(){this.Gu-=1,this.ju()}ju(){this.F_.g_(async()=>{const e=new El(this.datastore),t=this.Ju(e);t&&t.then(t=>{this.asyncQueue.enqueueAndForget(()=>e.commit().then(()=>{this.deferred.resolve(t)}).catch(e=>{this.Hu(e)}))}).catch(e=>{this.Hu(e)})})}Ju(e){try{const t=this.updateFunction(e);return!pt(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(t){return this.deferred.reject(t),null}}Hu(e){this.Gu>0&&this.Yu(e)?(this.Gu-=1,this.asyncQueue.enqueueAndForget(()=>(this.ju(),Promise.resolve()))):this.deferred.reject(e)}Yu(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!Oi(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xl="FirestoreClient";class Cl{constructor(e,t,n,r,s){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=V.UNAUTHENTICATED,this.clientId=le.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this._uninitializedComponentsProvider=s,this.authCredentials.start(n,async e=>{j(xl,"Received user=",e.uid),await this.authCredentialListener(e),this.user=e}),this.appCheckCredentials.start(n,e=>(j(xl,"Received new app check token=",e),this.appCheckCredentialListener(e,this.user)))}get configuration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Z;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=dh(t,"Failed to shutdown persistence");e.reject(n)}}),e.promise}}async function Al(e,t){e.asyncQueue.verifyOperationInProgress(),j(xl,"Initializing OfflineComponentProvider");const n=e.configuration;await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener(async e=>{r.isEqual(e)||(await Bu(t.localStore,e),r=e)}),t.persistence.setDatabaseDeletedListener(()=>{$("Terminating Firestore due to IndexedDb database deletion"),e.terminate().then(()=>{j("Terminating Firestore due to IndexedDb database deletion completed successfully")}).catch(e=>{$("Terminating Firestore due to IndexedDb database deletion failed",e)})}),e._offlineComponents=t}async function Dl(e,t){e.asyncQueue.verifyOperationInProgress();const n=await Nl(e);j(xl,"Initializing OnlineComponentProvider"),await t.initialize(n,e.configuration),e.setCredentialChangeListener(e=>ah(t.remoteStore,e)),e.setAppCheckTokenChangeListener((e,n)=>ah(t.remoteStore,n)),e._onlineComponents=t}async function Nl(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){j(xl,"Using user provided OfflineComponentProvider");try{await Al(e,e._uninitializedComponentsProvider._offline)}catch(n){const r=n;if(!("FirebaseError"===(t=r).name?t.code===Y.FAILED_PRECONDITION||t.code===Y.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&t instanceof DOMException)||22===t.code||20===t.code||11===t.code))throw r;$("Error using user provided cache. Falling back to memory cache: "+r),await Al(e,new gl)}}else j(xl,"Using default OfflineComponentProvider"),await Al(e,new pl(void 0));var t;return e._offlineComponents}async function kl(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(j(xl,"Using user provided OnlineComponentProvider"),await Dl(e,e._uninitializedComponentsProvider._online)):(j(xl,"Using default OnlineComponentProvider"),await Dl(e,new vl))),e._onlineComponents}function Rl(e){return Nl(e).then(e=>e.persistence)}function Ol(e){return Nl(e).then(e=>e.localStore)}function Fl(e){return kl(e).then(e=>e.remoteStore)}function Pl(e){return kl(e).then(e=>e.syncEngine)}function Ml(e){return kl(e).then(e=>e.datastore)}async function Vl(e){const t=await kl(e),n=t.eventManager;return n.onListen=Lh.bind(null,t.syncEngine),n.onUnlisten=jh.bind(null,t.syncEngine),n.onFirstRemoteStoreListen=qh.bind(null,t.syncEngine),n.onLastRemoteStoreUnlisten=zh.bind(null,t.syncEngine),n}function Ll(e,t,n={}){const r=new Z;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new Il({next:a=>{i.Ou(),t.enqueueAndForget(()=>bh(e,o));const u=a.docs.has(n);!u&&a.fromCache?s.reject(new J(Y.UNAVAILABLE,"Failed to get document because the client is offline.")):u&&a.fromCache&&r&&"server"===r.source?s.reject(new J(Y.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):s.resolve(a)},error:e=>s.reject(e)}),o=new xh(ws(n.path),i,{includeMetadataChanges:!0,ka:!0});return vh(e,o)}(await Vl(e),e.asyncQueue,t,n,r)),r.promise}function ql(e,t,n={}){const r=new Z;return e.asyncQueue.enqueueAndForget(async()=>function(e,t,n,r,s){const i=new Il({next:n=>{i.Ou(),t.enqueueAndForget(()=>bh(e,o)),n.fromCache&&"server"===r.source?s.reject(new J(Y.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):s.resolve(n)},error:e=>s.reject(e)}),o=new xh(n,i,{includeMetadataChanges:!0,ka:!0});return vh(e,o)}(await Vl(e),e.asyncQueue,t,n,r)),r.promise}function Ul(e,t,n,r){const s=function(e,t){let n;return n="string"==typeof e?he().encode(e):e,r=function(e,t){if(e instanceof Uint8Array)return bl(e,t);if(e instanceof ArrayBuffer)return bl(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}(n),new Tl(r,t);var r}(n,Sc(t));e.asyncQueue.enqueueAndForget(async()=>{!function(e,t,n){const r=X(e);(async function(e,t,n){try{const s=await t.getMetadata();if(await function(e,t){const n=X(e),r=so(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",e=>n.Ti.getBundleMetadata(e,t.id)).then(e=>!!e&&e.createTime.compareTo(r)>=0)}(e.localStore,s))return await t.close(),n._completeWith({taskState:"Success",documentsLoaded:(r=s).totalDocuments,bytesLoaded:r.totalBytes,totalDocuments:r.totalDocuments,totalBytes:r.totalBytes}),Promise.resolve(new Set);n._updateProgress(Nh(s));const i=new Dh(s,t.serializer);let o=await t.Su();for(;o;){const e=await i.Wa(o);e&&n._updateProgress(e),o=await t.Su()}const a=await i.za(e.localStore);return await nl(e,a.Ja,void 0),await function(e,t){const n=X(e);return n.persistence.runTransaction("Save bundle","readwrite",e=>n.Ti.saveBundleMetadata(e,t))}(e.localStore,s),n._completeWith(a.progress),Promise.resolve(a.ja)}catch(r){return $(Fh,`Loading bundle failed with ${r}`),n._failWith(r),Promise.resolve(new Set)}var r})(r,t,n).then(e=>{r.sharedClientState.notifyBundleLoaded(e)})}(await Pl(e),s,r)})}function Bl(e,t){return new _l(e,t)}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function jl(e){const t={};return void 0!==e.timeoutSeconds&&(t.timeoutSeconds=e.timeoutSeconds),t
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const zl=new Map,$l="firestore.googleapis.com",Gl=!0;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kl{constructor(e){var t,n;if(void 0===e.host){if(void 0!==e.ssl)throw new J(Y.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host=$l,this.ssl=Gl}else this.host=e.host,this.ssl=null!==(t=e.ssl)&&void 0!==t?t:Gl;if(this.isUsingEmulator=void 0!==e.emulatorOptions,this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.localCache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=ka;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<Ka)throw new J(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}Se("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:void 0===e.experimentalAutoDetectLongPolling?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=jl(null!==(n=e.experimentalLongPollingOptions)&&void 0!==n?n:{}),function(e){if(void 0!==e.timeoutSeconds){if(isNaN(e.timeoutSeconds))throw new J(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (must not be NaN)`);if(e.timeoutSeconds<5)throw new J(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (minimum allowed value is 5)`);if(e.timeoutSeconds>30)throw new J(Y.INVALID_ARGUMENT,`invalid long polling timeout: ${e.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&(t=this.experimentalLongPollingOptions,n=e.experimentalLongPollingOptions,t.timeoutSeconds===n.timeoutSeconds)&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams;var t,n}}class Ql{constructor(e,t,n,r){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=r,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Kl({}),this._settingsFrozen=!1,this._emulatorOptions={},this._terminateTask="notTerminated"}get app(){if(!this._app)throw new J(Y.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return"notTerminated"!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new J(Y.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Kl(e),this._emulatorOptions=e.emulatorOptions||{},void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new te;switch(e.type){case"firstParty":return new ie(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new J(Y.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_getEmulatorOptions(){return this._emulatorOptions}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return"notTerminated"===this._terminateTask&&(this._terminateTask=this._terminate()),this._terminateTask}async _restart(){"notTerminated"===this._terminateTask?await this._terminate():this._terminateTask="notTerminated"}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=zl.get(e);t&&(j("ComponentProvider","Removing Datastore"),zl.delete(e),t.terminate())}(this),Promise.resolve()}}function Hl(e,t,n,r={}){var c;e=Ne(e,Ql);const h=i(t),l=e._getSettings(),d=Object.assign(Object.assign({},l),{emulatorOptions:e._getEmulatorOptions()}),f=`${t}:${n}`;h&&(o(`https://${f}`),a("Firestore",!0)),l.host!==$l&&l.host!==f&&$("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used.");const m=Object.assign(Object.assign({},l),{host:f,ssl:h,emulatorOptions:r});if(!s(m,d)&&(e._setSettings(m),r.mockUserToken)){let t,n;if("string"==typeof r.mockUserToken)t=r.mockUserToken,n=V.MOCK_USER;else{t=u(r.mockUserToken,null===(c=e._app)||void 0===c?void 0:c.options.projectId);const s=r.mockUserToken.sub||r.mockUserToken.user_id;if(!s)throw new J(Y.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new V(s)}e._authCredentials=new ne(new ee(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Wl(this.firestore,e,this._query)}}class Xl{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yl(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Xl(this.firestore,e,this._key)}toJSON(){return{type:Xl._jsonSchemaVersion,referencePath:this._key.toString()}}static fromJSON(e,t,n){if(Oe(t,Xl._jsonSchema))return new Xl(e,n||null,new _e(be.fromString(t.referencePath)))}}Xl._jsonSchemaVersion="firestore/documentReference/1.0",Xl._jsonSchema={type:Re("string",Xl._jsonSchemaVersion),referencePath:Re("string")};class Yl extends Wl{constructor(e,t,n){super(e,t,ws(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Xl(this.firestore,null,new _e(e))}withConverter(e){return new Yl(this.firestore,e,this._path)}}function Jl(e,n,...r){if(e=t(e),Ee("collection","path",n),e instanceof Ql){const t=be.fromString(n,...r);return Ce(t),new Yl(e,null,t)}{if(!(e instanceof Xl||e instanceof Yl))throw new J(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(be.fromString(n,...r));return Ce(t),new Yl(e.firestore,null,t)}}function Zl(e,t){if(e=Ne(e,Ql),Ee("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new J(Y.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Wl(e,null,(n=t,new ps(be.emptyPath(),n)));var n}function ed(e,n,...r){if(e=t(e),1===arguments.length&&(n=le.newId()),Ee("doc","path",n),e instanceof Ql){const t=be.fromString(n,...r);return xe(t),new Xl(e,null,new _e(t))}{if(!(e instanceof Xl||e instanceof Yl))throw new J(Y.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const t=e._path.child(be.fromString(n,...r));return xe(t),new Xl(e.firestore,e instanceof Yl?e.converter:null,new _e(t))}}function td(e,n){return e=t(e),n=t(n),(e instanceof Xl||e instanceof Yl)&&(n instanceof Xl||n instanceof Yl)&&e.firestore===n.firestore&&e.path===n.path&&e.converter===n.converter}function nd(e,n){return e=t(e),n=t(n),e instanceof Wl&&n instanceof Wl&&e.firestore===n.firestore&&Cs(e._query,n._query)&&e.converter===n.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const rd="AsyncQueue";class sd{constructor(e=Promise.resolve()){this.Zu=[],this.Xu=!1,this.ec=[],this.tc=null,this.nc=!1,this.rc=!1,this.sc=[],this.F_=new xc(this,"async_queue_retry"),this.oc=()=>{const e=Ec();e&&j(rd,"Visibility state changed to "+e.visibilityState),this.F_.y_()},this._c=e;const t=Ec();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.oc)}get isShuttingDown(){return this.Xu}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.ac(),this.uc(e)}enterRestrictedMode(e){if(!this.Xu){this.Xu=!0,this.rc=e||!1;const t=Ec();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.oc)}}enqueue(e){if(this.ac(),this.Xu)return new Promise(()=>{});const t=new Z;return this.uc(()=>this.Xu&&this.rc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise)).then(()=>t.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Zu.push(e),this.cc()))}async cc(){if(0!==this.Zu.length){try{await this.Zu[0](),this.Zu.shift(),this.F_.reset()}catch(e){if(!ot(e))throw e;j(rd,"Operation failed with retryable error: "+e)}this.Zu.length>0&&this.F_.g_(()=>this.cc())}}uc(e){const t=this._c.then(()=>(this.nc=!0,e().catch(e=>{throw this.tc=e,this.nc=!1,z("INTERNAL UNHANDLED ERROR: ",id(e)),e}).then(e=>(this.nc=!1,e))));return this._c=t,t}enqueueAfterDelay(e,t,n){this.ac(),this.sc.indexOf(e)>-1&&(t=0);const r=lh.createAndSchedule(this,e,t,n,e=>this.lc(e));return this.ec.push(r),r}ac(){this.tc&&K(47125,{hc:id(this.tc)})}verifyOperationInProgress(){}async Pc(){let e;do{e=this._c,await e}while(e!==this._c)}Tc(e){for(const t of this.ec)if(t.timerId===e)return!0;return!1}Ic(e){return this.Pc().then(()=>{this.ec.sort((e,t)=>e.targetTimeMs-t.targetTimeMs);for(const t of this.ec)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Pc()})}dc(e){this.sc.push(e)}lc(e){const t=this.ec.indexOf(e);this.ec.splice(t,1)}}function id(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function od(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const r of t)if(r in n&&"function"==typeof n[r])return!0;return!1}(e,["next","error","complete"])}class ad{constructor(){this._progressObserver={},this._taskCompletionResolver=new Z,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ud=-1;class cd extends Ql{constructor(e,t,n,r){super(e,t,n,r),this.type="firestore",this._queue=new sd,this._persistenceKey=(null==r?void 0:r.name)||"[DEFAULT]"}async _terminate(){if(this._firestoreClient){const e=this._firestoreClient.terminate();this._queue=new sd(e),this._firestoreClient=void 0,await e}}}function hd(e,t,n){n||(n=sr);const r=h(e,"firestore");if(r.isInitialized(n)){const e=r.getImmediate({identifier:n}),i=r.getOptions(n);if(s(i,t))return e;throw new J(Y.FAILED_PRECONDITION,"initializeFirestore() has already been called with different options. To avoid this error, call initializeFirestore() with the same options as when it was originally called, or call getFirestore() to return the already initialized instance.")}if(void 0!==t.cacheSizeBytes&&void 0!==t.localCache)throw new J(Y.INVALID_ARGUMENT,"cache and cacheSizeBytes cannot be specified at the same time as cacheSizeBytes willbe deprecated. Instead, specify the cache size in the cache object");if(void 0!==t.cacheSizeBytes&&-1!==t.cacheSizeBytes&&t.cacheSizeBytes<Ka)throw new J(Y.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");return t.host&&i(t.host)&&o(t.host),r.initialize({options:t,instanceIdentifier:n})}function ld(e,t){const n="object"==typeof e?e:c(),r="string"==typeof e?e:t||sr,s=h(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const e=l("firestore");e&&Hl(s,...e)}return s}function dd(e){if(e._terminated)throw new J(Y.FAILED_PRECONDITION,"The client has already been terminated.");return e._firestoreClient||fd(e),e._firestoreClient}function fd(e){var t,n,r;const s=e._freezeSettings(),i=(o=e._databaseId,a=(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",u=e._persistenceKey,new rr(o,a,u,(c=s).host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,jl(c.experimentalLongPollingOptions),c.useFetchStreams,c.isUsingEmulator));var o,a,u,c;e._componentsProvider||(null===(n=s.localCache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(r=s.localCache)||void 0===r?void 0:r._onlineComponentProvider)&&(e._componentsProvider={_offline:s.localCache._offlineComponentProvider,_online:s.localCache._onlineComponentProvider}),e._firestoreClient=new Cl(e._authCredentials,e._appCheckCredentials,e._queue,i,e._componentsProvider&&function(e){const t=null==e?void 0:e._online.build();return{_offline:null==e?void 0:e._offline.build(t),_online:t}}(e._componentsProvider))}function md(e,t){$("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings();return pd(e,vl.provider,{build:e=>new yl(e,n.cacheSizeBytes,null==t?void 0:t.forceOwnership)}),Promise.resolve()}async function gd(e){$("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const t=e._freezeSettings();pd(e,vl.provider,{build:e=>new wl(e,t.cacheSizeBytes)})}function pd(e,t,n){if((e=Ne(e,cd))._firestoreClient||e._terminated)throw new J(Y.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.");if(e._componentsProvider||e._getSettings().localCache)throw new J(Y.FAILED_PRECONDITION,"SDK cache is already specified.");e._componentsProvider={_online:t,_offline:n},fd(e)}function yd(e){if(e._initialized&&!e._terminated)throw new J(Y.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new Z;return e._queue.enqueueAndForgetEvenWhileRestricted(async()=>{try{await async function(e){if(!nt.C())return Promise.resolve();const t=e+Nu;await nt.delete(t)}(Fu(e._databaseId,e._persistenceKey)),t.resolve()}catch(n){t.reject(n)}}),t.promise}function wd(e){return function(e){const t=new Z;return e.asyncQueue.enqueueAndForget(async()=>async function(t,n){const r=X(t);$c(r.remoteStore)||j(Fh,"The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=X(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e))}(r.localStore);if(e===gt)return void n.resolve();const t=r.Vu.get(e)||[];t.push(n),r.Vu.set(e,t)}catch(e){const r=dh(e,"Initialization of waitForPendingWrites() operation failed");n.reject(r)}}(await Pl(e),t)),t.promise}(dd(e=Ne(e,cd)))}function vd(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Rl(e),n=await Fl(e);return t.setNetworkEnabled(!0),function(e){const t=X(e);return t.Ia.delete(0),Mc(t)}(n)})}(dd(e=Ne(e,cd)))}function bd(e){return function(e){return e.asyncQueue.enqueue(async()=>{const t=await Rl(e),n=await Fl(e);return t.setNetworkEnabled(!1),async function(e){const t=X(e);t.Ia.add(0),await Vc(t),t.Aa.set("Offline")}(n)})}(dd(e=Ne(e,cd)))}function Id(e){return d(e.app,"firestore",e._databaseId.database),e._delete()}function Td(e,t){const n=dd(e=Ne(e,cd)),r=new ad;return Ul(n,e._databaseId,t,r),r}function _d(e,t){return function(e,t){return e.asyncQueue.enqueue(async()=>function(e,t){const n=X(e);return n.persistence.runTransaction("Get named query","readonly",e=>n.Ti.getNamedQuery(e,t))}(await Ol(e),t))}(dd(e=Ne(e,cd)),t).then(t=>t?new Wl(e,null,t.query):null)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ed{constructor(e="count",t){this._internalFieldPath=t,this.type="AggregateField",this.aggregateType=e}}class Sd{constructor(e,t,n){this._userDataWriter=t,this._data=n,this.type="AggregateQuerySnapshot",this.query=e}data(){return this._userDataWriter.convertObjectMap(this._data)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xd{constructor(e){this._byteString=e}static fromBase64String(e){try{return new xd(Gn.fromBase64String(e))}catch(t){throw new J(Y.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(e){return new xd(Gn.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}toJSON(){return{type:xd._jsonSchemaVersion,bytes:this.toBase64()}}static fromJSON(e){if(Oe(e,xd._jsonSchema))return xd.fromBase64String(e.bytes)}}xd._jsonSchemaVersion="firestore/bytes/1.0",xd._jsonSchema={type:Re("string",xd._jsonSchemaVersion),bytes:Re("string")};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cd{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new J(Y.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Te(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}function Ad(){return new Cd(we)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dd{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nd{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new J(Y.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new J(Y.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}_compareTo(e){return de(this._lat,e._lat)||de(this._long,e._long)}toJSON(){return{latitude:this._lat,longitude:this._long,type:Nd._jsonSchemaVersion}}static fromJSON(e){if(Oe(e,Nd._jsonSchema))return new Nd(e.latitude,e.longitude)}}Nd._jsonSchemaVersion="firestore/geoPoint/1.0",Nd._jsonSchema={type:Re("string",Nd._jsonSchemaVersion),latitude:Re("number"),longitude:Re("number")};
/**
 * @license
 * Copyright 2024 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class kd{constructor(e){this._values=(e||[]).map(e=>e)}toArray(){return this._values.map(e=>e)}isEqual(e){return function(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;++n)if(e[n]!==t[n])return!1;return!0}(this._values,e._values)}toJSON(){return{type:kd._jsonSchemaVersion,vectorValues:this._values}}static fromJSON(e){if(Oe(e,kd._jsonSchema)){if(Array.isArray(e.vectorValues)&&e.vectorValues.every(e=>"number"==typeof e))return new kd(e.vectorValues);throw new J(Y.INVALID_ARGUMENT,"Expected 'vectorValues' field to be a number array")}}}kd._jsonSchemaVersion="firestore/vectorValue/1.0",kd._jsonSchema={type:Re("string",kd._jsonSchemaVersion),vectorValues:Re("object")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Rd=/^__.*__$/;class Od{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new bi(e,this.data,this.fieldMask,t,this.fieldTransforms):new vi(e,this.data,t,this.fieldTransforms)}}class Fd{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new bi(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Pd(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw K(40011,{Ec:e})}}class Md{constructor(e,t,n,r,s,i){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=r,void 0===s&&this.Ac(),this.fieldTransforms=s||[],this.fieldMask=i||[]}get path(){return this.settings.path}get Ec(){return this.settings.Ec}Rc(e){return new Md(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Vc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.fc(e),r}gc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.Rc({path:n,mc:!1});return r.Ac(),r}yc(e){return this.Rc({path:void 0,mc:!0})}wc(e){return nf(e,this.settings.methodName,this.settings.Sc||!1,this.path,this.settings.bc)}contains(e){return void 0!==this.fieldMask.find(t=>e.isPrefixOf(t))||void 0!==this.fieldTransforms.find(t=>e.isPrefixOf(t.field))}Ac(){if(this.path)for(let e=0;e<this.path.length;e++)this.fc(this.path.get(e))}fc(e){if(0===e.length)throw this.wc("Document fields must not be empty");if(Pd(this.Ec)&&Rd.test(e))throw this.wc('Document fields cannot begin and end with "__"')}}class Vd{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Sc(e)}Dc(e,t,n,r=!1){return new Md({Ec:e,methodName:t,bc:n,path:Te.emptyPath(),mc:!1,Sc:r},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ld(e){const t=e._freezeSettings(),n=Sc(e._databaseId);return new Vd(e._databaseId,!!t.ignoreUndefinedProperties,n)}function qd(e,t,n,r,s,i={}){const o=e.Dc(i.merge||i.mergeFields?2:0,t,n,s);Jd("Data must be an object, but it was:",o,r);const a=Xd(r,o);let u,c;if(i.merge)u=new jn(o.fieldMask),c=o.fieldTransforms;else if(i.mergeFields){const e=[];for(const r of i.mergeFields){const s=Zd(t,r,n);if(!o.contains(s))throw new J(Y.INVALID_ARGUMENT,`Field '${s}' is specified in your field mask but missing from your input data.`);rf(e,s)||e.push(s)}u=new jn(e),c=o.fieldTransforms.filter(e=>u.covers(e.field))}else u=null,c=o.fieldTransforms;return new Od(new Pr(a),u,c)}class Ud extends Dd{_toFieldTransform(e){if(2!==e.Ec)throw 1===e.Ec?e.wc(`${this._methodName}() can only appear at the top level of your update data`):e.wc(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Ud}}function Bd(e,t,n){return new Md({Ec:3,bc:t.settings.bc,methodName:e._methodName,mc:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class jd extends Dd{_toFieldTransform(e){return new ci(e.path,new ti)}isEqual(e){return e instanceof jd}}class zd extends Dd{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Bd(this,e,!0),n=this.vc.map(e=>Wd(e,t)),r=new ni(n);return new ci(e.path,r)}isEqual(e){return e instanceof zd&&s(this.vc,e.vc)}}class $d extends Dd{constructor(e,t){super(e),this.vc=t}_toFieldTransform(e){const t=Bd(this,e,!0),n=this.vc.map(e=>Wd(e,t)),r=new si(n);return new ci(e.path,r)}isEqual(e){return e instanceof $d&&s(this.vc,e.vc)}}class Gd extends Dd{constructor(e,t){super(e),this.Cc=t}_toFieldTransform(e){const t=new oi(e.serializer,Xs(e.serializer,this.Cc));return new ci(e.path,t)}isEqual(e){return e instanceof Gd&&this.Cc===e.Cc}}function Kd(e,n,r,s){const i=e.Dc(1,n,r);Jd("Data must be an object, but it was:",i,s);const o=[],a=Pr.empty();On(s,(e,s)=>{const u=tf(n,e,r);s=t(s);const c=i.gc(u);if(s instanceof Ud)o.push(u);else{const e=Wd(s,c);null!=e&&(o.push(u),a.set(u,e))}});const u=new jn(o);return new Fd(a,u,i.fieldTransforms)}function Qd(e,n,r,s,i,o){const a=e.Dc(1,n,r),u=[Zd(n,s,r)],c=[i];if(o.length%2!=0)throw new J(Y.INVALID_ARGUMENT,`Function ${n}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let t=0;t<o.length;t+=2)u.push(Zd(n,o[t])),c.push(o[t+1]);const h=[],l=Pr.empty();for(let f=u.length-1;f>=0;--f)if(!rf(h,u[f])){const e=u[f];let n=c[f];n=t(n);const r=a.gc(e);if(n instanceof Ud)h.push(e);else{const t=Wd(n,r);null!=t&&(h.push(e),l.set(e,t))}}const d=new jn(h);return new Fd(l,d,a.fieldTransforms)}function Hd(e,t,n,r=!1){return Wd(n,e.Dc(r?4:3,t))}function Wd(e,n){if(Yd(e=t(e)))return Jd("Unsupported field value:",n,e),Xd(e,n);if(e instanceof Dd)return function(e,t){if(!Pd(t.Ec))throw t.wc(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.wc(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,n),null;if(void 0===e&&n.ignoreUndefinedProperties)return null;if(n.path&&n.fieldMask.push(n.path),e instanceof Array){if(n.settings.mc&&4!==n.Ec)throw n.wc("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const s of e){let e=Wd(s,t.yc(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,n)}return function(e,n){if(null===(e=t(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Xs(n.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const t=Me.fromDate(e);return{timestampValue:to(n.serializer,t)}}if(e instanceof Me){const t=new Me(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:to(n.serializer,t)}}if(e instanceof Nd)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof xd)return{bytesValue:no(n.serializer,e._byteString)};if(e instanceof Xl){const t=n.databaseId,r=e.firestore._databaseId;if(!r.isEqual(t))throw n.wc(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${t.projectId}/${t.database}`);return{referenceValue:io(e.firestore._databaseId||n.databaseId,e._key.path)}}if(e instanceof kd)return r=e,s=n,{mapValue:{fields:{[or]:{stringValue:cr},[hr]:{arrayValue:{values:r.toArray().map(e=>{if("number"!=typeof e)throw s.wc("VectorValues must only contain numeric values.");return Hs(s.serializer,e)})}}}}};var r,s;throw n.wc(`Unsupported field value: ${De(e)}`)}(e,n)}function Xd(e,t){const n={};return Pn(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):On(e,(e,r)=>{const s=Wd(r,t.Vc(e));null!=s&&(n[e]=s)}),{mapValue:{fields:n}}}function Yd(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof Me||e instanceof Nd||e instanceof xd||e instanceof Xl||e instanceof Dd||e instanceof kd)}function Jd(e,t,n){if(!Yd(n)||!Ae(n)){const r=De(n);throw"an object"===r?t.wc(e+" a custom object"):t.wc(e+" "+r)}}function Zd(e,n,r){if((n=t(n))instanceof Cd)return n._internalPath;if("string"==typeof n)return tf(e,n);throw nf("Field path arguments must be of type string or ",e,!1,void 0,r)}const ef=new RegExp("[~\\*/\\[\\]]");function tf(e,t,n){if(t.search(ef)>=0)throw nf(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Cd(...t.split("."))._internalPath}catch(r){throw nf(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function nf(e,t,n,r,s){const i=r&&!r.isEmpty(),o=void 0!==s;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(i||o)&&(u+=" (found",i&&(u+=` in field ${r}`),o&&(u+=` in document ${s}`),u+=")"),new J(Y.INVALID_ARGUMENT,a+e+u)}function rf(e,t){return e.some(e=>e.isEqual(t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sf{constructor(e,t,n,r,s){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xl(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new of(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(af("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class of extends sf{data(){return super.data()}}function af(e,t){return"string"==typeof t?tf(e,t):t instanceof Cd?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uf(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new J(Y.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class cf{}class hf extends cf{}function lf(e,t,...n){let r=[];t instanceof cf&&r.push(t),r=r.concat(n),function(e){const t=e.filter(e=>e instanceof mf).length,n=e.filter(e=>e instanceof df).length;if(t>1||t>0&&n>0)throw new J(Y.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const s of r)e=s._apply(e);return e}class df extends hf{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new df(e,t,n)}_apply(e){const t=this._parse(e);return kf(e._query,t),new Wl(e.firestore,e.converter,Ss(e._query,t))}_parse(e){const t=Ld(e.firestore);return function(e,t,n,r,s,i,o){let a;if(s.isKeyField()){if("array-contains"===i||"array-contains-any"===i)throw new J(Y.INVALID_ARGUMENT,`Invalid Query. You can't perform '${i}' queries on documentId().`);if("in"===i||"not-in"===i){Nf(o,i);const t=[];for(const n of o)t.push(Df(r,e,n));a={arrayValue:{values:t}}}else a=Df(r,e,o)}else"in"!==i&&"not-in"!==i&&"array-contains-any"!==i||Nf(o,i),a=Hd(n,t,o,"in"===i||"not-in"===i);return $r.create(s,i,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value)}}function ff(e,t,n){const r=t,s=af("where",e);return df._create(s,r,n)}class mf extends cf{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new mf(e,t)}_parse(e){const t=this._queryConstraints.map(t=>t._parse(e)).filter(e=>e.getFilters().length>0);return 1===t.length?t[0]:Gr.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const r=t.getFlattenedFilters();for(const s of r)kf(n,s),n=Ss(n,s)}(e._query,t),new Wl(e.firestore,e.converter,Ss(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}function gf(...e){return e.forEach(e=>Rf("or",e)),mf._create("or",e)}function pf(...e){return e.forEach(e=>Rf("and",e)),mf._create("and",e)}class yf extends hf{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new yf(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new J(Y.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new J(Y.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");return new Br(t,n)}(e._query,this._field,this._direction);return new Wl(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new ps(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function wf(e,t="asc"){const n=t,r=af("orderBy",e);return yf._create(r,n)}class vf extends hf{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new vf(e,t,n)}_apply(e){return new Wl(e.firestore,e.converter,xs(e._query,this._limit,this._limitType))}}function bf(e){return ke("limit",e),vf._create("limit",e,"F")}function If(e){return ke("limitToLast",e),vf._create("limitToLast",e,"L")}class Tf extends hf{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Tf(e,t,n)}_apply(e){const t=Af(e,this.type,this._docOrFields,this._inclusive);return new Wl(e.firestore,e.converter,(n=e._query,r=t,new ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,r,n.endAt)));var n,r}}function _f(...e){return Tf._create("startAt",e,!0)}function Ef(...e){return Tf._create("startAfter",e,!1)}class Sf extends hf{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new Sf(e,t,n)}_apply(e){const t=Af(e,this.type,this._docOrFields,this._inclusive);return new Wl(e.firestore,e.converter,(n=e._query,r=t,new ps(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),n.limit,n.limitType,n.startAt,r)));var n,r}}function xf(...e){return Sf._create("endBefore",e,!1)}function Cf(...e){return Sf._create("endAt",e,!0)}function Af(e,n,r,s){if(r[0]=t(r[0]),r[0]instanceof sf)return function(e,t,n,r,s){if(!r)throw new J(Y.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const i=[];for(const o of Is(e))if(o.field.isKeyField())i.push(Ir(t,r.key));else{const e=r.data.field(o.field);if(er(e))throw new J(Y.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new J(Y.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}i.push(e)}return new Lr(i,s)}(e._query,e.firestore._databaseId,n,r[0]._document,s);{const t=Ld(e.firestore);return function(e,t,n,r,s,i){const o=e.explicitOrderBy;if(s.length>o.length)throw new J(Y.INVALID_ARGUMENT,`Too many arguments provided to ${r}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let u=0;u<s.length;u++){const i=s[u];if(o[u].field.isKeyField()){if("string"!=typeof i)throw new J(Y.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${r}(), but got a ${typeof i}`);if(!bs(e)&&-1!==i.indexOf("/"))throw new J(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${r}() must be a plain document ID, but '${i}' contains a slash.`);const n=e.path.child(be.fromString(i));if(!_e.isDocumentKey(n))throw new J(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${r}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const s=new _e(n);a.push(Ir(t,s))}else{const e=Hd(n,r,i);a.push(e)}}return new Lr(a,i)}(e._query,e.firestore._databaseId,t,n,r,s)}}function Df(e,n,r){if("string"==typeof(r=t(r))){if(""===r)throw new J(Y.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!bs(n)&&-1!==r.indexOf("/"))throw new J(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${r}' contains a '/' character.`);const t=n.path.child(be.fromString(r));if(!_e.isDocumentKey(t))throw new J(Y.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${t}' is not because it has an odd number of segments (${t.length}).`);return Ir(e,new _e(t))}if(r instanceof Xl)return Ir(e,r._key);throw new J(Y.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${De(r)}.`)}function Nf(e,t){if(!Array.isArray(e)||0===e.length)throw new J(Y.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function kf(e,t){const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new J(Y.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new J(Y.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function Rf(e,t){if(!(t instanceof df||t instanceof mf))throw new J(Y.INVALID_ARGUMENT,`Function ${e}() requires AppliableConstraints created with a call to 'where(...)', 'or(...)', or 'and(...)'.`)}class Of{convertValue(e,t="none"){switch(dr(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Hn(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Wn(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 11:return this.convertObject(e.mapValue,t);case 10:return this.convertVectorValue(e.mapValue);default:throw K(62114,{value:e})}}convertObject(e,t){return this.convertObjectMap(e.fields,t)}convertObjectMap(e,t="none"){const n={};return On(e,(e,r)=>{n[e]=this.convertValue(r,t)}),n}convertVectorValue(e){var t,n,r;const s=null===(r=null===(n=null===(t=e.fields)||void 0===t?void 0:t[hr].arrayValue)||void 0===n?void 0:n.values)||void 0===r?void 0:r.map(e=>Hn(e.doubleValue));return new kd(s)}convertGeoPoint(e){return new Nd(Hn(e.latitude),Hn(e.longitude))}convertArray(e,t){return(e.values||[]).map(e=>this.convertValue(e,t))}convertServerTimestamp(e,t){switch(t){case"previous":const n=tr(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(nr(e));default:return null}}convertTimestamp(e){const t=Qn(e);return new Me(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=be.fromString(e);H(ko(n),9688,{name:e});const r=new ir(n.get(1),n.get(3)),s=new _e(n.popFirst(5));return r.isEqual(t)||z(`Document ${s} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}class Pf extends Of{constructor(e){super(),this.firestore=e}convertBytes(e){return new xd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xl(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(e){return new Ed("sum",Zd("sum",e))}function Vf(e){return new Ed("avg",Zd("average",e))}function Lf(){return new Ed("count")}function qf(e,t){var n,r;return e instanceof Ed&&t instanceof Ed&&e.aggregateType===t.aggregateType&&(null===(n=e._internalFieldPath)||void 0===n?void 0:n.canonicalString())===(null===(r=t._internalFieldPath)||void 0===r?void 0:r.canonicalString())}function Uf(e,t){return nd(e.query,t.query)&&s(e.data(),t.data())}
/**
 * @license
 * Copyright 2025 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bf="NOT SUPPORTED";class jf{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class zf extends sf{constructor(e,t,n,r,s,i){super(e,t,n,r,i),this._firestore=e,this._firestoreImpl=e,this.metadata=s}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Gf(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(af("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}toJSON(){if(this.metadata.hasPendingWrites)throw new J(Y.FAILED_PRECONDITION,"DocumentSnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e=this._document,t={};return t.type=zf._jsonSchemaVersion,t.bundle="",t.bundleSource="DocumentSnapshot",t.bundleName=this._key.toString(),e&&e.isValidDocument()&&e.isFoundDocument()?(this._userDataWriter.convertObjectMap(e.data.value.mapValue.fields,"previous"),t.bundle=(this._firestore,this.ref.path,"NOT SUPPORTED"),t):t}}function $f(e,t,n){if(Oe(t,zf._jsonSchema)){if(t.bundle===Bf)throw new J(Y.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Sc(e._databaseId),s=Bl(t.bundle,r),i=s.Ku(),o=new Dh(s.getMetadata(),r);for(const e of i)o.Wa(e);const a=o.documents;if(1!==a.length)throw new J(Y.INVALID_ARGUMENT,`Expected bundle data to contain 1 document, but it contains ${a.length} documents.`);const u=po(r,a[0].document),c=new _e(be.fromString(t.bundleName));return new zf(e,new Pf(e),c,u,new jf(!1,!1),n||null)}}zf._jsonSchemaVersion="firestore/documentSnapshot/1.0",zf._jsonSchema={type:Re("string",zf._jsonSchemaVersion),bundleSource:Re("string","DocumentSnapshot"),bundleName:Re("string"),bundle:Re("string")};class Gf extends zf{data(e={}){return super.data(e)}}class Kf{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new jf(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach(t=>e.push(t)),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach(n=>{e.call(t,new Gf(this._firestore,this._userDataWriter,n.key,n,new jf(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new J(Y.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map(n=>{const r=new Gf(e._firestore,e._userDataWriter,n.doc.key,n.doc,new jf(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:r,oldIndex:-1,newIndex:t++}})}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter(e=>t||3!==e.type).map(t=>{const r=new Gf(e._firestore,e._userDataWriter,t.doc.key,t.doc,new jf(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let s=-1,i=-1;return 0!==t.type&&(s=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),i=n.indexOf(t.doc.key)),{type:Hf(t.type),doc:r,oldIndex:s,newIndex:i}})}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}toJSON(){if(this.metadata.hasPendingWrites)throw new J(Y.FAILED_PRECONDITION,"QuerySnapshot.toJSON() attempted to serialize a document with pending writes. Await waitForPendingWrites() before invoking toJSON().");const e={};e.type=Kf._jsonSchemaVersion,e.bundleSource="QuerySnapshot",e.bundleName=le.newId(),this._firestore._databaseId.database,this._firestore._databaseId.projectId;const t=[],n=[],r=[];return this.docs.forEach(e=>{null!==e._document&&(t.push(e._document),n.push(this._userDataWriter.convertObjectMap(e._document.data.value.mapValue.fields,"previous")),r.push(e.ref.path))}),e.bundle=(this._firestore,this.query._query,e.bundleName,"NOT SUPPORTED"),e}}function Qf(e,t,n){if(Oe(t,Kf._jsonSchema)){if(t.bundle===Bf)throw new J(Y.INVALID_ARGUMENT,"The provided JSON object was created in a client environment, which is not supported.");const r=Sc(e._databaseId),s=Bl(t.bundle,r),i=s.Ku(),o=new Dh(s.getMetadata(),r);for(const e of i)o.Wa(e);if(1!==o.queries.length)throw new J(Y.INVALID_ARGUMENT,`Snapshot data expected 1 query but found ${o.queries.length} queries.`);const a=Bo(o.queries[0].bundledQuery),u=o.documents;let c=new fh;u.map(e=>{const t=po(r,e.document);c=c.add(t)});const h=gh.fromInitialDocuments(a,c,Gs(),!1,!1),l=new Wl(e,n||null,a);return new Kf(e,new Pf(e),l,h)}}function Hf(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return K(61501,{type:e})}}function Wf(e,t){return e instanceof zf&&t instanceof zf?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof Kf&&t instanceof Kf&&e._firestore===t._firestore&&nd(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(e){e=Ne(e,Xl);const t=Ne(e.firestore,cd);return Ll(dd(t),e._key).then(n=>lm(t,e,n))}Kf._jsonSchemaVersion="firestore/querySnapshot/1.0",Kf._jsonSchema={type:Re("string",Kf._jsonSchemaVersion),bundleSource:Re("string","QuerySnapshot"),bundleName:Re("string"),bundle:Re("string")};class Yf extends Of{constructor(e){super(),this.firestore=e}convertBytes(e){return new xd(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Xl(this.firestore,null,t)}}function Jf(e){e=Ne(e,Xl);const t=Ne(e.firestore,cd),n=dd(t),r=new Yf(t);return function(e,t){const n=new Z;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await function(e,t){const n=X(e);return n.persistence.runTransaction("read document","readonly",e=>n.localDocuments.getDocument(e,t))}(e,t);r.isFoundDocument()?n.resolve(r):r.isNoDocument()?n.resolve(null):n.reject(new J(Y.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(r){const e=dh(r,`Failed to get document '${t} from cache`);n.reject(e)}}(await Ol(e),t,n)),n.promise}(n,e._key).then(n=>new zf(t,r,e._key,n,new jf(null!==n&&n.hasLocalMutations,!0),e.converter))}function Zf(e){e=Ne(e,Xl);const t=Ne(e.firestore,cd);return Ll(dd(t),e._key,{source:"server"}).then(n=>lm(t,e,n))}function em(e){e=Ne(e,Wl);const t=Ne(e.firestore,cd),n=dd(t),r=new Yf(t);return uf(e._query),ql(n,e._query).then(n=>new Kf(t,r,e,n))}function tm(e){e=Ne(e,Wl);const t=Ne(e.firestore,cd),n=dd(t),r=new Yf(t);return function(e,t){const n=new Z;return e.asyncQueue.enqueueAndForget(async()=>async function(e,t,n){try{const r=await Qu(e,t,!0),s=new Oh(t,r.qs),i=s.nu(r.documents),o=s.applyChanges(i,!1);n.resolve(o.snapshot)}catch(r){const e=dh(r,`Failed to execute query '${t} against cache`);n.reject(e)}}(await Ol(e),t,n)),n.promise}(n,e._query).then(n=>new Kf(t,r,e,n))}function nm(e){e=Ne(e,Wl);const t=Ne(e.firestore,cd),n=dd(t),r=new Yf(t);return ql(n,e._query,{source:"server"}).then(n=>new Kf(t,r,e,n))}function rm(e,t,n){e=Ne(e,Xl);const r=Ne(e.firestore,cd),s=Ff(e.converter,t,n);return hm(r,[qd(Ld(r),"setDoc",e._key,s,null!==e.converter,n).toMutation(e._key,li.none())])}function sm(e,n,r,...s){e=Ne(e,Xl);const i=Ne(e.firestore,cd),o=Ld(i);let a;return a="string"==typeof(n=t(n))||n instanceof Cd?Qd(o,"updateDoc",e._key,n,r,s):Kd(o,"updateDoc",e._key,n),hm(i,[a.toMutation(e._key,li.exists(!0))])}function im(e){return hm(Ne(e.firestore,cd),[new Ei(e._key,li.none())])}function om(e,t){const n=Ne(e.firestore,cd),r=ed(e),s=Ff(e.converter,t);return hm(n,[qd(Ld(e.firestore),"addDoc",r._key,s,null!==e.converter,{}).toMutation(r._key,li.exists(!1))]).then(()=>r)}function am(e,...n){var r,s,i;e=t(e);let o={includeMetadataChanges:!1,source:"default"},a=0;"object"!=typeof n[a]||od(n[a])||(o=n[a++]);const u={includeMetadataChanges:o.includeMetadataChanges,source:o.source};if(od(n[a])){const e=n[a];n[a]=null===(r=e.next)||void 0===r?void 0:r.bind(e),n[a+1]=null===(s=e.error)||void 0===s?void 0:s.bind(e),n[a+2]=null===(i=e.complete)||void 0===i?void 0:i.bind(e)}let c,h,l;if(e instanceof Xl)h=Ne(e.firestore,cd),l=ws(e._key.path),c={next:t=>{n[a]&&n[a](lm(h,e,t))},error:n[a+1],complete:n[a+2]};else{const t=Ne(e,Wl);h=Ne(t.firestore,cd),l=t._query;const r=new Yf(h);c={next:e=>{n[a]&&n[a](new Kf(h,r,t,e))},error:n[a+1],complete:n[a+2]},uf(e._query)}return function(e,t,n,r){const s=new Il(r),i=new xh(t,s,n);return e.asyncQueue.enqueueAndForget(async()=>vh(await Vl(e),i)),()=>{s.Ou(),e.asyncQueue.enqueueAndForget(async()=>bh(await Vl(e),i))}}(dd(h),l,u,c)}function um(e,n,...r){const s=t(e),i=function(e){const t={bundle:"",bundleName:"",bundleSource:""},n=["bundle","bundleName","bundleSource"];for(const r of n){if(!(r in e)){t.error=`snapshotJson missing required field: ${r}`;break}const n=e[r];if("string"!=typeof n){t.error=`snapshotJson field '${r}' must be a string.`;break}if(0===n.length){t.error=`snapshotJson field '${r}' cannot be an empty string.`;break}"bundle"===r?t.bundle=n:"bundleName"===r?t.bundleName=n:"bundleSource"===r&&(t.bundleSource=n)}return t}(n);if(i.error)throw new J(Y.INVALID_ARGUMENT,i.error);let o,a=0;if("object"!=typeof r[a]||od(r[a])||(o=r[a++]),"QuerySnapshot"===i.bundleSource){let e=null;if("object"==typeof r[a]&&od(r[a])){const t=r[a++];e={next:t.next,error:t.error,complete:t.complete}}else e={next:r[a++],error:r[a++],complete:r[a++]};return function(e,t,n,r,s){let i,o=!1;return Td(e,t.bundle).then(()=>_d(e,t.bundleName)).then(e=>{e&&!o&&(s&&e.withConverter(s),i=am(e,n||{},r))}).catch(e=>(r.error&&r.error(e),()=>{})),()=>{o||(o=!0,i&&i())}}(s,i,o,e,r[a])}if("DocumentSnapshot"===i.bundleSource){let e=null;if("object"==typeof r[a]&&od(r[a])){const t=r[a++];e={next:t.next,error:t.error,complete:t.complete}}else e={next:r[a++],error:r[a++],complete:r[a++]};return function(e,t,n,r,s){let i,o=!1;return Td(e,t.bundle).then(()=>{if(!o){const o=new Xl(e,s||null,_e.fromPath(t.bundleName));i=am(o,n||{},r)}}).catch(e=>(r.error&&r.error(e),()=>{})),()=>{o||(o=!0,i&&i())}}(s,i,o,e,r[a])}throw new J(Y.INVALID_ARGUMENT,`unsupported bundle source: ${i.bundleSource}`)}function cm(e,t){return function(e,t){const n=new Il(t);return e.asyncQueue.enqueueAndForget(async()=>{return t=await Vl(e),r=n,X(t).Da.add(r),void r.next();var t,r}),()=>{n.Ou(),e.asyncQueue.enqueueAndForget(async()=>{return t=await Vl(e),r=n,void X(t).Da.delete(r);var t,r})}}(dd(e=Ne(e,cd)),od(t)?t:{next:t})}function hm(e,t){return function(e,t){const n=new Z;return e.asyncQueue.enqueueAndForget(async()=>async function(t,n,r){const s=ml(t);try{const e=await function(e,t){const n=X(e),r=Me.now(),s=t.reduce((e,t)=>e.add(t.key),Gs());let i,o;return n.persistence.runTransaction("Locally write mutations","readwrite",e=>{let a=Ms(),u=Gs();return n.Os.getEntries(e,s).next(e=>{a=e,a.forEach((e,t)=>{t.isValidDocument()||(u=u.add(e))})}).next(()=>n.localDocuments.getOverlayedDocuments(e,a)).next(s=>{i=s;const o=[];for(const e of t){const t=yi(e,i.get(e.key).overlayedDocument);null!=t&&o.push(new bi(e.key,t,Mr(t.value.mapValue),li.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)}).next(t=>{o=t;const r=t.applyToLocalDocumentSet(i,u);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)})}).then(()=>({batchId:o.batchId,changes:qs(i)}))}(s.localStore,n);s.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ru[e.currentUser.toKey()];r||(r=new Mn(de)),r=r.insert(t,n),e.Ru[e.currentUser.toKey()]=r}(s,e.batchId,r),await nl(s,e.changes),await Jc(s.remoteStore)}catch(e){const n=dh(e,"Failed to persist write");r.reject(n)}}(await Pl(e),t,n)),n.promise}(dd(e),t)}function lm(e,t,n){const r=n.docs.get(t._key),s=new Yf(e);return new zf(e,s,t._key,r,new jf(n.hasPendingWrites,n.fromCache),t.converter)}function dm(e){return fm(e,{count:Lf()})}function fm(e,t){const n=Ne(e.firestore,cd),r=dd(n),s=Fn(t,(e,t)=>new Di(t,e.aggregateType,e._internalFieldPath));return function(e,t,n){const r=new Z;return e.asyncQueue.enqueueAndForget(async()=>{try{const s=await Ml(e);r.resolve(async function(e,t,n){var r;const s=X(e),{request:i,ft:o,parent:a}=Io(s.serializer,_s(t),n);s.connection.Qo||delete i.parent;const u=(await s.Jo("RunAggregationQuery",s.serializer.databaseId,a,i,1)).filter(e=>!!e.result);H(1===u.length,64727);const c=null===(r=u[0].result)||void 0===r?void 0:r.aggregateFields;return Object.keys(c).reduce((e,t)=>(e[o[t]]=c[t],e),{})}(s,t,n))}catch(s){r.reject(s)}}),r.promise}(r,e._query,s).then(t=>function(e,t,n){const r=new Yf(e);return new Sd(t,r,n)}(n,e,t))}class mm{constructor(e){this.kind="memory",this._onlineComponentProvider=vl.provider,(null==e?void 0:e.garbageCollector)?this._offlineComponentProvider=e.garbageCollector._offlineComponentProvider:this._offlineComponentProvider={build:()=>new pl(void 0)}}toJSON(){return{kind:this.kind}}}class gm{constructor(e){let t;this.kind="persistent",(null==e?void 0:e.tabManager)?(e.tabManager._initialize(e),t=e.tabManager):(t=Em(void 0),t._initialize(e)),this._onlineComponentProvider=t._onlineComponentProvider,this._offlineComponentProvider=t._offlineComponentProvider}toJSON(){return{kind:this.kind}}}class pm{constructor(){this.kind="memoryEager",this._offlineComponentProvider=gl.provider}toJSON(){return{kind:this.kind}}}class ym{constructor(e){this.kind="memoryLru",this._offlineComponentProvider={build:()=>new pl(e)}}toJSON(){return{kind:this.kind}}}function wm(){return new pm}function vm(e){return new ym(null==e?void 0:e.cacheSizeBytes)}function bm(e){return new mm(e)}function Im(e){return new gm(e)}class Tm{constructor(e){this.forceOwnership=e,this.kind="persistentSingleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=vl.provider,this._offlineComponentProvider={build:t=>new yl(t,null==e?void 0:e.cacheSizeBytes,this.forceOwnership)}}}class _m{constructor(){this.kind="PersistentMultipleTab"}toJSON(){return{kind:this.kind}}_initialize(e){this._onlineComponentProvider=vl.provider,this._offlineComponentProvider={build:t=>new wl(t,null==e?void 0:e.cacheSizeBytes)}}}function Em(e){return new Tm(null==e?void 0:e.forceOwnership)}function Sm(){return new _m}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xm={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Ld(e)}set(e,t,n){this._verifyNotCommitted();const r=Am(e,this._firestore),s=Ff(r.converter,t,n),i=qd(this._dataReader,"WriteBatch.set",r._key,s,null!==r.converter,n);return this._mutations.push(i.toMutation(r._key,li.none())),this}update(e,n,r,...s){this._verifyNotCommitted();const i=Am(e,this._firestore);let o;return o="string"==typeof(n=t(n))||n instanceof Cd?Qd(this._dataReader,"WriteBatch.update",i._key,n,r,s):Kd(this._dataReader,"WriteBatch.update",i._key,n),this._mutations.push(o.toMutation(i._key,li.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Am(e,this._firestore);return this._mutations=this._mutations.concat(new Ei(t._key,li.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new J(Y.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Am(e,n){if((e=t(e)).firestore!==n)throw new J(Y.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dm{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Ld(e)}get(e){const t=Am(e,this._firestore),n=new Pf(this._firestore);return this._transaction.lookup([t._key]).then(e=>{if(!e||1!==e.length)return K(24041);const r=e[0];if(r.isFoundDocument())return new sf(this._firestore,n,r.key,r,t.converter);if(r.isNoDocument())return new sf(this._firestore,n,t._key,null,t.converter);throw K(18433,{doc:r})})}set(e,t,n){const r=Am(e,this._firestore),s=Ff(r.converter,t,n),i=qd(this._dataReader,"Transaction.set",r._key,s,null!==r.converter,n);return this._transaction.set(r._key,i),this}update(e,n,r,...s){const i=Am(e,this._firestore);let o;return o="string"==typeof(n=t(n))||n instanceof Cd?Qd(this._dataReader,"Transaction.update",i._key,n,r,s):Kd(this._dataReader,"Transaction.update",i._key,n),this._transaction.update(i._key,o),this}delete(e){const t=Am(e,this._firestore);return this._transaction.delete(t._key),this}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nm extends Dm{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Am(e,this._firestore),n=new Yf(this._firestore);return super.get(e).then(e=>new zf(this._firestore,n,t._key,e._document,new jf(!1,!1),t.converter))}}function km(e,t,n){e=Ne(e,cd);const r=Object.assign(Object.assign({},xm),n);return function(e){if(e.maxAttempts<1)throw new J(Y.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(e,t,n){const r=new Z;return e.asyncQueue.enqueueAndForget(async()=>{const s=await Ml(e);new Sl(e.asyncQueue,s,n,t,r).zu()}),r.promise}(dd(e),n=>t(new Nm(e,n)),r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rm(){return new Ud("deleteField")}function Om(){return new jd("serverTimestamp")}function Fm(...e){return new zd("arrayUnion",e)}function Pm(...e){return new $d("arrayRemove",e)}function Mm(e){return new Gd("increment",e)}function Vm(e){return new kd(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lm(e){return dd(e=Ne(e,cd)),new Cm(e,t=>hm(e,t))
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}function qm(e,t){const n=dd(e=Ne(e,cd));if(!n._uninitializedComponentsProvider||"memory"===n._uninitializedComponentsProvider._offline.kind)return $("Cannot enable indexes when persistence is disabled"),Promise.resolve();return function(e,t){return e.asyncQueue.enqueue(async()=>async function(e,t){const n=X(e),r=n.indexManager,s=[];return n.persistence.runTransaction("Configure indexes","readwrite",e=>r.getFieldIndexes(e).next(n=>
/**
      * @license
      * Copyright 2017 Google LLC
      *
      * Licensed under the Apache License, Version 2.0 (the "License");
      * you may not use this file except in compliance with the License.
      * You may obtain a copy of the License at
      *
      *   http://www.apache.org/licenses/LICENSE-2.0
      *
      * Unless required by applicable law or agreed to in writing, software
      * distributed under the License is distributed on an "AS IS" BASIS,
      * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
      * See the License for the specific language governing permissions and
      * limitations under the License.
      */function(e,t,n,r,s){e=[...e],t=[...t],e.sort(n),t.sort(n);const i=e.length,o=t.length;let a=0,u=0;for(;a<o&&u<i;){const i=n(e[u],t[a]);i<0?s(e[u++]):i>0?r(t[a++]):(a++,u++)}for(;a<o;)r(t[a++]);for(;u<i;)s(e[u++])}(n,t,je,t=>{s.push(r.addFieldIndex(e,t))},t=>{s.push(r.deleteFieldIndex(e,t))})).next(()=>Ze.waitFor(s)))}(await Ol(e),t))}(n,function(e){const t="string"==typeof e?function(e){try{return JSON.parse(e)}catch(t){throw new J(Y.INVALID_ARGUMENT,"Failed to parse JSON: "+(null==t?void 0:t.message))}}(e):e,n=[];if(Array.isArray(t.indexes))for(const r of t.indexes){const e=Um(r,"collectionGroup"),t=[];if(Array.isArray(r.fields))for(const n of r.fields){const e=tf("setIndexConfiguration",Um(n,"fieldPath"));"CONTAINS"===n.arrayConfig?t.push(new ze(e,2)):"ASCENDING"===n.order?t.push(new ze(e,0)):"DESCENDING"===n.order&&t.push(new ze(e,1))}n.push(new qe(qe.UNKNOWN_ID,e,t,Ge.empty()))}return n}(t))}function Um(e,t){if("string"!=typeof e[t])throw new J(Y.INVALID_ARGUMENT,"Missing string value for: "+t);return e[t]}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bm{constructor(e){this._firestore=e,this.type="PersistentCacheIndexManager"}}function jm(e){var t;e=Ne(e,cd);const n=Qm.get(e);if(n)return n;if("persistent"!==(null===(t=dd(e)._uninitializedComponentsProvider)||void 0===t?void 0:t._offline.kind))return null;const r=new Bm(e);return Qm.set(e,r),r}function zm(e){Km(e,!0)}function $m(e){Km(e,!1)}function Gm(e){(function(e){return e.asyncQueue.enqueue(async()=>function(e){const t=X(e),n=t.indexManager;return t.persistence.runTransaction("Delete All Indexes","readwrite",e=>n.deleteAllFieldIndexes(e))}(await Ol(e)))})(dd(e._firestore)).then(e=>j("deleting all persistent cache indexes succeeded")).catch(e=>$("deleting all persistent cache indexes failed",e))}function Km(e,t){(function(e,t){return e.asyncQueue.enqueue(async()=>{return n=await Ol(e),r=t,void(X(n).Cs.Rs=r);var n,r})})(dd(e._firestore),t).then(e=>j(`setting persistent cache index auto creation isEnabled=${t} succeeded`)).catch(e=>$(`setting persistent cache index auto creation isEnabled=${t} failed`,e))}const Qm=new WeakMap;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hm(e){var t;const n=null===(t=dd(Ne(e.firestore,cd))._onlineComponents)||void 0===t?void 0:t.datastore.serializer;return void 0===n?null:bo(n,Ts(e._query)).Vt}function Wm(e,t){var n;const r=Fn(t,(e,t)=>new Di(t,e.aggregateType,e._internalFieldPath)),s=null===(n=dd(Ne(e.firestore,cd))._onlineComponents)||void 0===n?void 0:n.datastore.serializer;return void 0===s?null:Io(s,_s(e._query),r,!0).request}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xm{constructor(){throw new Error("instances of this class should not be created")}static onExistenceFilterMismatch(e){return Ym.instance.onExistenceFilterMismatch(e)}}class Ym{constructor(){this.Fc=new Map}static get instance(){return Jm||(Jm=new Ym,function(e){if(Pi)throw new Error("a TestingHooksSpi instance is already set");Pi=e}(Jm)),Jm}ct(e){this.Fc.forEach(t=>t(e))}onExistenceFilterMismatch(e){const t=Symbol(),n=this.Fc;return n.set(t,e),()=>n.delete(t)}}let Jm=null;!function(e,t=!0){L=w,v(new b("firestore",(e,{instanceIdentifier:n,options:r})=>{const s=e.getProvider("app").getImmediate(),i=new cd(new re(e.getProvider("auth-internal")),new ae(s,e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new J(Y.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new ir(e.options.projectId,t)}(s,n),s);return r=Object.assign({useFetchStreams:t},r),i._setSettings(r),i},"PUBLIC").setMultipleInstances(!0)),I(P,M,e),I(P,M,"esm2017")}();export{Of as AbstractUserDataWriter,Ed as AggregateField,Sd as AggregateQuerySnapshot,xd as Bytes,ud as CACHE_SIZE_UNLIMITED,Yl as CollectionReference,Xl as DocumentReference,zf as DocumentSnapshot,Cd as FieldPath,Dd as FieldValue,cd as Firestore,J as FirestoreError,Nd as GeoPoint,ad as LoadBundleTask,Bm as PersistentCacheIndexManager,Wl as Query,mf as QueryCompositeFilterConstraint,hf as QueryConstraint,Gf as QueryDocumentSnapshot,Sf as QueryEndAtConstraint,df as QueryFieldFilterConstraint,vf as QueryLimitConstraint,yf as QueryOrderByConstraint,Kf as QuerySnapshot,Tf as QueryStartAtConstraint,jf as SnapshotMetadata,Me as Timestamp,Nm as Transaction,kd as VectorValue,Cm as WriteBatch,le as _AutoId,Gn as _ByteString,ir as _DatabaseId,_e as _DocumentKey,ue as _EmptyAppCheckTokenProvider,te as _EmptyAuthCredentialsProvider,Te as _FieldPath,Xm as _TestingHooks,Ne as _cast,W as _debugAssert,Wm as _internalAggregationQueryToProtoRunAggregationQueryRequest,Hm as _internalQueryToProtoQueryTarget,$n as _isBase64Available,$ as _logWarn,Se as _validateIsNotUsedTogether,om as addDoc,qf as aggregateFieldEqual,Uf as aggregateQuerySnapshotEqual,pf as and,Pm as arrayRemove,Fm as arrayUnion,Vf as average,yd as clearIndexedDbPersistence,Jl as collection,Zl as collectionGroup,Hl as connectFirestoreEmulator,Lf as count,Gm as deleteAllPersistentCacheIndexes,im as deleteDoc,Rm as deleteField,bd as disableNetwork,$m as disablePersistentCacheIndexAutoCreation,ed as doc,Ad as documentId,$f as documentSnapshotFromJSON,md as enableIndexedDbPersistence,gd as enableMultiTabIndexedDbPersistence,vd as enableNetwork,zm as enablePersistentCacheIndexAutoCreation,Cf as endAt,xf as endBefore,dd as ensureFirestoreConfigured,hm as executeWrite,fm as getAggregateFromServer,dm as getCountFromServer,Xf as getDoc,Jf as getDocFromCache,Zf as getDocFromServer,em as getDocs,tm as getDocsFromCache,nm as getDocsFromServer,ld as getFirestore,jm as getPersistentCacheIndexManager,Mm as increment,hd as initializeFirestore,bf as limit,If as limitToLast,Td as loadBundle,wm as memoryEagerGarbageCollector,bm as memoryLocalCache,vm as memoryLruGarbageCollector,_d as namedQuery,am as onSnapshot,um as onSnapshotResume,cm as onSnapshotsInSync,gf as or,wf as orderBy,Im as persistentLocalCache,Sm as persistentMultipleTabManager,Em as persistentSingleTabManager,lf as query,nd as queryEqual,Qf as querySnapshotFromJSON,td as refEqual,km as runTransaction,Om as serverTimestamp,rm as setDoc,qm as setIndexConfiguration,B as setLogLevel,Wf as snapshotEqual,Ef as startAfter,_f as startAt,Mf as sum,Id as terminate,sm as updateDoc,Vm as vector,wd as waitForPendingWrites,ff as where,Lm as writeBatch};

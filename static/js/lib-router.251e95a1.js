/*! For license information please see lib-router.251e95a1.js.LICENSE.txt */
"use strict";(self.webpackChunkmini_tools=self.webpackChunkmini_tools||[]).push([["118"],{759:function(e,t,n){n.d(t,{p7:()=>ej,r5:()=>X});var r,l,o,a,i,u,s=n(464);let c="undefined"!=typeof document;function f(e){return"object"==typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}let p=Object.assign;function h(e,t){let n={};for(let r in t){let l=t[r];n[r]=m(l)?l.map(e):e(l)}return n}let d=()=>{},m=Array.isArray,g=/#/g,v=/&/g,y=/\//g,b=/=/g,w=/\?/g,E=/\+/g,k=/%5B/g,O=/%5D/g,R=/%5E/g,C=/%60/g,P=/%7B/g,x=/%7C/g,S=/%7D/g,j=/%20/g;function $(e){return encodeURI(""+e).replace(x,"|").replace(k,"[").replace(O,"]")}function q(e){return $(e).replace(E,"%2B").replace(j,"+").replace(g,"%23").replace(v,"%26").replace(C,"`").replace(P,"{").replace(S,"}").replace(R,"^")}function F(e){return null==e?"":$(e).replace(g,"%23").replace(w,"%3F").replace(y,"%2F")}function A(e){try{return decodeURIComponent(""+e)}catch(e){}return""+e}let M=/\/$/,U=e=>e.replace(M,"");function _(e,t,n="/"){let r,l={},o="",a="",i=t.indexOf("#"),u=t.indexOf("?");return i<u&&i>=0&&(u=-1),u>-1&&(r=t.slice(0,u),l=e(o=t.slice(u+1,i>-1?i:t.length))),i>-1&&(r=r||t.slice(0,i),a=t.slice(i,t.length)),{fullPath:(r=function(e,t){let n,r;if(e.startsWith("/"))return e;if(!e)return t;let l=t.split("/"),o=e.split("/"),a=o[o.length-1];(".."===a||"."===a)&&o.push("");let i=l.length-1;for(n=0;n<o.length;n++)if("."!==(r=o[n])){if(".."===r)i>1&&i--;else break}return l.slice(0,i).join("/")+"/"+o.slice(n).join("/")}(null!=r?r:t,n))+(o&&"?")+o+a,path:r,query:l,hash:A(a)}}function L(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function B(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function G(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(let l in e){var n,r;if(n=e[l],r=t[l],m(n)?!I(n,r):m(r)?!I(r,n):n!==r)return!1}return!0}function I(e,t){return m(t)?e.length===t.length&&e.every((e,n)=>e===t[n]):1===e.length&&e[0]===t}let T={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0};(r=a||(a={})).pop="pop",r.push="push",(l=i||(i={})).back="back",l.forward="forward",l.unknown="";let W=/^[^#]+#/;function D(e,t){return e.replace(W,"#")+t}let V=()=>({left:window.scrollX,top:window.scrollY});function J(e,t){return(history.state?history.state.position-t:-1)+e}let z=new Map,H=()=>location.protocol+"//"+location.host;function K(e,t){let{pathname:n,search:r,hash:l}=t,o=e.indexOf("#");if(o>-1){let t=l.includes(e.slice(o))?e.slice(o).length:1,n=l.slice(t);return"/"!==n[0]&&(n="/"+n),L(n,"")}return L(n,e)+r+l}function Y(e,t,n,r=!1,l=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:l?V():null}}function X(e){return(e=location.host?e||location.pathname+location.search:"").includes("#")||(e+="#"),function(e){let t=function(e){let{history:t,location:n}=window,r={value:K(e,n)},l={value:t.state};function o(r,o,a){let i=e.indexOf("#"),u=i>-1?(n.host&&document.querySelector("base")?e:e.slice(i))+r:H()+e+r;try{t[a?"replaceState":"pushState"](o,"",u),l.value=o}catch(e){console.error(e),n[a?"replace":"assign"](u)}}return l.value||o(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:l,push:function(e,n){let a=p({},l.value,t.state,{forward:e,scroll:V()});o(a.current,a,!0);let i=p({},Y(r.value,e,null),{position:a.position+1},n);o(e,i,!1),r.value=e},replace:function(e,n){let a=p({},t.state,Y(l.value.back,e,l.value.forward,!0),n,{position:l.value.position});o(e,a,!0),r.value=e}}}(e=function(e){if(!e){if(c){let t=document.querySelector("base");e=(e=t&&t.getAttribute("href")||"/").replace(/^\w+:\/\/[^\/]+/,"")}else e="/"}return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),U(e)}(e)),n=function(e,t,n,r){let l=[],o=[],u=null,s=({state:o})=>{let s=K(e,location),c=n.value,f=t.value,p=0;if(o){if(n.value=s,t.value=o,u&&u===c){u=null;return}p=f?o.position-f.position:0}else r(s);l.forEach(e=>{e(n.value,c,{delta:p,type:a.pop,direction:p?p>0?i.forward:i.back:i.unknown})})};function c(){let{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:V()}),"")}return window.addEventListener("popstate",s),window.addEventListener("beforeunload",c,{passive:!0}),{pauseListeners:function(){u=n.value},listen:function(e){l.push(e);let t=()=>{let t=l.indexOf(e);t>-1&&l.splice(t,1)};return o.push(t),t},destroy:function(){for(let e of o)e();o=[],window.removeEventListener("popstate",s),window.removeEventListener("beforeunload",c)}}}(e,t.state,t.location,t.replace),r=p({location:"",base:e,go:function(e,t=!0){t||n.pauseListeners(),history.go(e)},createHref:D.bind(null,e)},t,n);return Object.defineProperty(r,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(r,"state",{enumerable:!0,get:()=>t.state.value}),r}(e)}function Z(e){return"string"==typeof e||"symbol"==typeof e}let Q=Symbol("");function N(e,t){return p(Error(),{type:e,[Q]:!0},t)}function ee(e,t){return e instanceof Error&&Q in e&&(null==t||!!(e.type&t))}(o=u||(u={}))[o.aborted=4]="aborted",o[o.cancelled=8]="cancelled",o[o.duplicated=16]="duplicated";let et="[^/]+?",en={sensitive:!1,strict:!1,start:!0,end:!0},er=/[.+*?^${}()[\]/\\]/g;function el(e,t){let n=0,r=e.score,l=t.score;for(;n<r.length&&n<l.length;){let e=function(e,t){let n=0;for(;n<e.length&&n<t.length;){let r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}(r[n],l[n]);if(e)return e;n++}if(1===Math.abs(l.length-r.length)){if(eo(r))return 1;if(eo(l))return -1}return l.length-r.length}function eo(e){let t=e[e.length-1];return e.length>0&&t[t.length-1]<0}let ea={type:0,value:""},ei=/[a-zA-Z0-9_]/;function eu(e,t){let n={};for(let r of t)r in e&&(n[r]=e[r]);return n}function es(e){let t={path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:e.aliasOf,beforeEnter:e.beforeEnter,props:function(e){let t={},n=e.props||!1;if("component"in e)t.default=n;else for(let r in e.components)t[r]="object"==typeof n?n[r]:n;return t}(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}};return Object.defineProperty(t,"mods",{value:{}}),t}function ec(e){for(;e;){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ef(e,t){let n={};for(let r in e)n[r]=r in t?t[r]:e[r];return n}function ep({record:e}){return!!(e.name||e.components&&Object.keys(e.components).length||e.redirect)}function eh(e){let t={};if(""===e||"?"===e)return t;let n=("?"===e[0]?e.slice(1):e).split("&");for(let e=0;e<n.length;++e){let r=n[e].replace(E," "),l=r.indexOf("="),o=A(l<0?r:r.slice(0,l)),a=l<0?null:A(r.slice(l+1));if(o in t){let e=t[o];m(e)||(e=t[o]=[e]),e.push(a)}else t[o]=a}return t}function ed(e){let t="";for(let n in e){let r=e[n];if(n=q(n).replace(b,"%3D"),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}(m(r)?r.map(e=>e&&q(e)):[r&&q(r)]).forEach(e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))})}return t}let em=Symbol(""),eg=Symbol(""),ev=Symbol(""),ey=Symbol(""),eb=Symbol("");function ew(){let e=[];return{add:function(t){return e.push(t),()=>{let n=e.indexOf(t);n>-1&&e.splice(n,1)}},list:()=>e.slice(),reset:function(){e=[]}}}function eE(e,t,n,r,l,o=e=>e()){let a=r&&(r.enterCallbacks[l]=r.enterCallbacks[l]||[]);return()=>new Promise((i,u)=>{let s=e=>{if(!1===e)u(N(4,{from:n,to:t}));else if(e instanceof Error)u(e);else"string"==typeof e||e&&"object"==typeof e?u(N(2,{from:t,to:e})):(a&&r.enterCallbacks[l]===a&&"function"==typeof e&&a.push(e),i())},c=Promise.resolve(o(()=>e.call(r&&r.instances[l],t,n,s)));e.length<3&&(c=c.then(s)),c.catch(e=>u(e))})}function ek(e,t,n,r,l=e=>e()){let o=[];for(let a of e)for(let e in a.components){let i=a.components[e];if("beforeRouteEnter"===t||a.instances[e]){if(f(i)){let u=(i.__vccOpts||i)[t];u&&o.push(eE(u,n,r,a,e,l))}else{let u=i();o.push(()=>u.then(o=>{if(!o)throw Error(`Couldn't resolve component "${e}" at "${a.path}"`);let i=o.__esModule||"Module"===o[Symbol.toStringTag]||o.default&&f(o.default)?o.default:o;a.mods[e]=o,a.components[e]=i;let u=(i.__vccOpts||i)[t];return u&&eE(u,n,r,a,e,l)()}))}}}return o}function eO(e){let t=(0,s.f3)(ev),n=(0,s.f3)(ey),r=(0,s.Fl)(()=>{let n=(0,s.SU)(e.to);return t.resolve(n)}),l=(0,s.Fl)(()=>{let{matched:e}=r.value,{length:t}=e,l=e[t-1],o=n.matched;if(!l||!o.length)return -1;let a=o.findIndex(B.bind(null,l));if(a>-1)return a;let i=eC(e[t-2]);return t>1&&eC(l)===i&&o[o.length-1].path!==i?o.findIndex(B.bind(null,e[t-2])):a}),o=(0,s.Fl)(()=>l.value>-1&&function(e,t){for(let n in t){let r=t[n],l=e[n];if("string"==typeof r){if(r!==l)return!1}else if(!m(l)||l.length!==r.length||r.some((e,t)=>e!==l[t]))return!1}return!0}(n.params,r.value.params)),a=(0,s.Fl)(()=>l.value>-1&&l.value===n.matched.length-1&&G(n.params,r.value.params));return{route:r,href:(0,s.Fl)(()=>r.value.href),isActive:o,isExactActive:a,navigate:function(n={}){if(function(e){if(!e.metaKey&&!e.altKey&&!e.ctrlKey&&!e.shiftKey&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){let t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}(n)){let n=t[(0,s.SU)(e.replace)?"replace":"push"]((0,s.SU)(e.to)).catch(d);return e.viewTransition&&"undefined"!=typeof document&&"startViewTransition"in document&&document.startViewTransition(()=>n),n}return Promise.resolve()}}}let eR=(0,s.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:eO,setup(e,{slots:t}){let n=(0,s.qj)(eO(e)),{options:r}=(0,s.f3)(ev),l=(0,s.Fl)(()=>({[eP(e.activeClass,r.linkActiveClass,"router-link-active")]:n.isActive,[eP(e.exactActiveClass,r.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive}));return()=>{var r;let o=t.default&&(1===(r=t.default(n)).length?r[0]:r);return e.custom?o:(0,s.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:l.value},o)}}});function eC(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}let eP=(e,t,n)=>null!=e?e:null!=t?t:n,ex=(0,s.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){let r=(0,s.f3)(eb),l=(0,s.Fl)(()=>e.route||r.value),o=(0,s.f3)(eg,0),a=(0,s.Fl)(()=>{let e,t=(0,s.SU)(o),{matched:n}=l.value;for(;(e=n[t])&&!e.components;)t++;return t}),i=(0,s.Fl)(()=>l.value.matched[a.value]);(0,s.JJ)(eg,(0,s.Fl)(()=>a.value+1)),(0,s.JJ)(em,i),(0,s.JJ)(eb,l);let u=(0,s.iH)();return(0,s.YP)(()=>[u.value,i.value,e.name],([e,t,n],[r,l,o])=>{t&&(t.instances[n]=e,l&&l!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=l.leaveGuards),t.updateGuards.size||(t.updateGuards=l.updateGuards))),!e||!t||l&&B(t,l)&&r||(t.enterCallbacks[n]||[]).forEach(t=>t(e))},{flush:"post"}),()=>{let r=l.value,o=e.name,a=i.value,c=a&&a.components[o];if(!c)return eS(n.default,{Component:c,route:r});let f=a.props[o],h=f?!0===f?r.params:"function"==typeof f?f(r):f:null,d=(0,s.h)(c,p({},h,t,{onVnodeUnmounted:e=>{e.component.isUnmounted&&(a.instances[o]=null)},ref:u}));return eS(n.default,{Component:d,route:r})||d}}});function eS(e,t){if(!e)return null;let n=e(t);return 1===n.length?n[0]:n}function ej(e){let t,n,r;let l=function(e,t){let n=[],r=new Map;function l(e,a,i){let u,s;let c=!i,f=es(e);f.aliasOf=i&&i.record;let h=ef(t,e),g=[f];if("alias"in e)for(let t of"string"==typeof e.alias?[e.alias]:e.alias)g.push(es(p({},f,{components:i?i.record.components:f.components,path:t,aliasOf:i?i.record:f})));for(let t of g){let{path:d}=t;if(a&&"/"!==d[0]){let e=a.record.path,n="/"===e[e.length-1]?"":"/";t.path=a.record.path+(d&&n+d)}if(u=function(e,t,n){let r=function(e,t){let n=p({},en,t),r=[],l=n.start?"^":"",o=[];for(let t of e){let e=t.length?[]:[90];n.strict&&!t.length&&(l+="/");for(let r=0;r<t.length;r++){let a=t[r],i=40+(n.sensitive?.25:0);if(0===a.type)r||(l+="/"),l+=a.value.replace(er,"\\$&"),i+=40;else if(1===a.type){let{value:e,repeatable:n,optional:u,regexp:s}=a;o.push({name:e,repeatable:n,optional:u});let c=s||et;if(c!==et){i+=10;try{RegExp(`(${c})`)}catch(t){throw Error(`Invalid custom RegExp for param "${e}" (${c}): `+t.message)}}let f=n?`((?:${c})(?:/(?:${c}))*)`:`(${c})`;r||(f=u&&t.length<2?`(?:/${f})`:"/"+f),u&&(f+="?"),l+=f,i+=20,u&&(i+=-8),n&&(i+=-20),".*"===c&&(i+=-50)}e.push(i)}r.push(e)}if(n.strict&&n.end){let e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(l+="/?"),n.end?l+="$":n.strict&&!l.endsWith("/")&&(l+="(?:/|$)");let a=new RegExp(l,n.sensitive?"":"i");return{re:a,score:r,keys:o,parse:function(e){let t=e.match(a),n={};if(!t)return null;for(let e=1;e<t.length;e++){let r=t[e]||"",l=o[e-1];n[l.name]=r&&l.repeatable?r.split("/"):r}return n},stringify:function(t){let n="",r=!1;for(let l of e)for(let e of(r&&n.endsWith("/")||(n+="/"),r=!1,l))if(0===e.type)n+=e.value;else if(1===e.type){let{value:o,repeatable:a,optional:i}=e,u=o in t?t[o]:"";if(m(u)&&!a)throw Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);let s=m(u)?u.join("/"):u;if(!s){if(i)l.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0);else throw Error(`Missing required param "${o}"`)}n+=s}return n||"/"}}}(function(e){let t,n;if(!e)return[[]];if("/"===e)return[[ea]];if(!e.startsWith("/"))throw Error(`Invalid path "${e}"`);function r(e){throw Error(`ERR (${l})/"${s}": ${e}`)}let l=0,o=0,a=[];function i(){t&&a.push(t),t=[]}let u=0,s="",c="";function f(){s&&(0===l?t.push({type:0,value:s}):1===l||2===l||3===l?(t.length>1&&("*"===n||"+"===n)&&r(`A repeatable param (${s}) must be alone in its segment. eg: '/:ids+.`),t.push({type:1,value:s,regexp:c,repeatable:"*"===n||"+"===n,optional:"*"===n||"?"===n})):r("Invalid state to consume buffer"),s="")}for(;u<e.length;){if("\\"===(n=e[u++])&&2!==l){o=l,l=4;continue}switch(l){case 0:"/"===n?(s&&f(),i()):":"===n?(f(),l=1):s+=n;break;case 4:s+=n,l=o;break;case 1:"("===n?l=2:ei.test(n)?s+=n:(f(),l=0,"*"!==n&&"?"!==n&&"+"!==n&&u--);break;case 2:")"===n?"\\"==c[c.length-1]?c=c.slice(0,-1)+n:l=3:c+=n;break;case 3:f(),l=0,"*"!==n&&"?"!==n&&"+"!==n&&u--,c="";break;default:r("Unknown state")}}return 2===l&&r(`Unfinished custom RegExp for param "${s}"`),f(),i(),a}(e.path),n),l=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!l.record.aliasOf==!t.record.aliasOf&&t.children.push(l),l}(t,a,h),i?i.alias.push(u):((s=s||u)!==u&&s.alias.push(u),c&&e.name&&!ec(u)&&o(e.name)),ep(u)&&function(e){let t=function(e,t){let n=0,r=t.length;for(;n!==r;){let l=n+r>>1;0>el(e,t[l])?r=l:n=l+1}let l=function(e){let t=e;for(;t=t.parent;)if(ep(t)&&0===el(e,t))return t}(e);return l&&(r=t.lastIndexOf(l,r-1)),r}(e,n);n.splice(t,0,e),e.record.name&&!ec(e)&&r.set(e.record.name,e)}(u),f.children){let e=f.children;for(let t=0;t<e.length;t++)l(e[t],u,i&&i.children[t])}i=i||u}return s?()=>{o(s)}:d}function o(e){if(Z(e)){let t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{let t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}return t=ef({strict:!1,end:!0,sensitive:!1},t),e.forEach(e=>l(e)),{addRoute:l,resolve:function(e,t){let l,o,a;let i={};if("name"in e&&e.name){if(!(l=r.get(e.name)))throw N(1,{location:e});a=l.record.name,i=p(eu(t.params,l.keys.filter(e=>!e.optional).concat(l.parent?l.parent.keys.filter(e=>e.optional):[]).map(e=>e.name)),e.params&&eu(e.params,l.keys.map(e=>e.name))),o=l.stringify(i)}else if(null!=e.path)o=e.path,(l=n.find(e=>e.re.test(o)))&&(i=l.parse(o),a=l.record.name);else{if(!(l=t.name?r.get(t.name):n.find(e=>e.re.test(t.path))))throw N(1,{location:e,currentLocation:t});a=l.record.name,i=p({},t.params,e.params),o=l.stringify(i)}let u=[],s=l;for(;s;)u.unshift(s.record),s=s.parent;return{name:a,path:o,params:i,matched:u,meta:u.reduce((e,t)=>p(e,t.meta),{})}},removeRoute:o,clearRoutes:function(){n.length=0,r.clear()},getRoutes:function(){return n},getRecordMatcher:function(e){return r.get(e)}}}(e.routes,e),o=e.parseQuery||eh,i=e.stringifyQuery||ed,u=e.history,f=ew(),g=ew(),v=ew(),y=(0,s.XI)(T),b=T;c&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");let w=h.bind(null,e=>""+e),E=h.bind(null,F),k=h.bind(null,A);function O(e,t){let n;if(t=p({},t||y.value),"string"==typeof e){let n=_(o,e,t.path),r=l.resolve({path:n.path},t),a=u.createHref(n.fullPath);return p(n,r,{params:k(r.params),hash:A(n.hash),redirectedFrom:void 0,href:a})}if(null!=e.path)n=p({},e,{path:_(o,e.path,t.path).path});else{let r=p({},e.params);for(let e in r)null==r[e]&&delete r[e];n=p({},e,{params:E(r)}),t.params=E(t.params)}let r=l.resolve(n,t),a=e.hash||"";r.params=w(k(r.params));let s=function(e,t){let n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}(i,p({},e,{hash:$(a).replace(P,"{").replace(S,"}").replace(R,"^"),path:r.path})),c=u.createHref(s);return p({fullPath:s,hash:a,query:i===ed?function(e){let t={};for(let n in e){let r=e[n];void 0!==r&&(t[n]=m(r)?r.map(e=>null==e?null:""+e):null==r?r:""+r)}return t}(e.query):e.query||{}},r,{redirectedFrom:void 0,href:c})}function C(e){return"string"==typeof e?_(o,e,y.value.path):p({},e)}function x(e,t){if(b!==e)return N(8,{from:t,to:e})}function j(e){let t=e.matched[e.matched.length-1];if(t&&t.redirect){let{redirect:n}=t,r="function"==typeof n?n(e):n;return"string"==typeof r&&((r=r.includes("?")||r.includes("#")?r=C(r):{path:r}).params={}),p({query:e.query,hash:e.hash,params:null!=r.path?{}:e.params},r)}}function q(e,t){let n;let r=b=O(e),l=y.value,o=e.state,a=e.force,u=!0===e.replace,s=j(r);return s?q(p(C(s),{state:"object"==typeof s?p({},o,s.state):o,force:a,replace:u}),t||r):(r.redirectedFrom=t,!a&&function(e,t,n){let r=t.matched.length-1,l=n.matched.length-1;return r>-1&&r===l&&B(t.matched[r],n.matched[l])&&G(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}(i,l,r)&&(n=N(16,{to:r,from:l}),X(l,l,!0,!1)),(n?Promise.resolve(n):L(r,l)).catch(e=>ee(e)?ee(e,2)?e:Y(e):K(e,r,l)).then(e=>{if(e){if(ee(e,2))return q(p({replace:u},C(e.to),{state:"object"==typeof e.to?p({},o,e.to.state):o,force:a}),t||r)}else e=W(r,l,!0,u,o);return I(r,l,e),e}))}function M(e,t){let n=x(e,t);return n?Promise.reject(n):Promise.resolve()}function U(e){let t=eo.values().next().value;return t&&"function"==typeof t.runWithContext?t.runWithContext(e):e()}function L(e,t){let n;let[r,l,o]=function(e,t){let n=[],r=[],l=[],o=Math.max(t.matched.length,e.matched.length);for(let a=0;a<o;a++){let o=t.matched[a];o&&(e.matched.find(e=>B(e,o))?r.push(o):n.push(o));let i=e.matched[a];i&&!t.matched.find(e=>B(e,i))&&l.push(i)}return[n,r,l]}(e,t);for(let l of(n=ek(r.reverse(),"beforeRouteLeave",e,t),r))l.leaveGuards.forEach(r=>{n.push(eE(r,e,t))});let a=M.bind(null,e,t);return n.push(a),eg(n).then(()=>{for(let r of(n=[],f.list()))n.push(eE(r,e,t));return n.push(a),eg(n)}).then(()=>{for(let r of(n=ek(l,"beforeRouteUpdate",e,t),l))r.updateGuards.forEach(r=>{n.push(eE(r,e,t))});return n.push(a),eg(n)}).then(()=>{for(let r of(n=[],o))if(r.beforeEnter){if(m(r.beforeEnter))for(let l of r.beforeEnter)n.push(eE(l,e,t));else n.push(eE(r.beforeEnter,e,t))}return n.push(a),eg(n)}).then(()=>(e.matched.forEach(e=>e.enterCallbacks={}),(n=ek(o,"beforeRouteEnter",e,t,U)).push(a),eg(n))).then(()=>{for(let r of(n=[],g.list()))n.push(eE(r,e,t));return n.push(a),eg(n)}).catch(e=>ee(e,8)?e:Promise.reject(e))}function I(e,t,n){v.list().forEach(r=>U(()=>r(e,t,n)))}function W(e,t,n,r,l){let o=x(e,t);if(o)return o;let a=t===T,i=c?history.state:{};n&&(r||a?u.replace(e.fullPath,p({scroll:a&&i&&i.scroll},l)):u.push(e.fullPath,l)),y.value=e,X(e,t,n,a),Y()}let D=ew(),H=ew();function K(e,t,n){Y(e);let r=H.list();return r.length?r.forEach(r=>r(e,t,n)):console.error(e),Promise.reject(e)}function Y(e){return n||(n=!e,t||(t=u.listen((e,t,n)=>{if(!em.listening)return;let r=O(e),l=j(r);if(l){q(p(l,{replace:!0,force:!0}),r).catch(d);return}b=r;let o=y.value;if(c){var i,s;i=J(o.fullPath,n.delta),s=V(),z.set(i,s)}L(r,o).catch(e=>ee(e,12)?e:ee(e,2)?(q(p(C(e.to),{force:!0}),r).then(e=>{ee(e,20)&&!n.delta&&n.type===a.pop&&u.go(-1,!1)}).catch(d),Promise.reject()):(n.delta&&u.go(-n.delta,!1),K(e,r,o))).then(e=>{(e=e||W(r,o,!1))&&(n.delta&&!ee(e,8)?u.go(-n.delta,!1):n.type===a.pop&&ee(e,20)&&u.go(-1,!1)),I(r,o,e)}).catch(d)})),D.list().forEach(([t,n])=>e?n(e):t()),D.reset()),e}function X(t,n,r,l){let{scrollBehavior:o}=e;if(!c||!o)return Promise.resolve();let a=!r&&function(e){let t=z.get(e);return z.delete(e),t}(J(t.fullPath,0))||(l||!r)&&history.state&&history.state.scroll||null;return(0,s.Y3)().then(()=>o(t,n,a)).then(e=>e&&function(e){let t;if("el"in e){let n=e.el,r="string"==typeof n&&n.startsWith("#"),l="string"==typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!l)return;t=function(e,t){let n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}(l,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.scrollX,null!=t.top?t.top:window.scrollY)}(e)).catch(e=>K(e,t,n))}let Q=e=>u.go(e),eo=new Set,em={currentRoute:y,listening:!0,addRoute:function(e,t){let n,r;return Z(e)?(n=l.getRecordMatcher(e),r=t):r=e,l.addRoute(r,n)},removeRoute:function(e){let t=l.getRecordMatcher(e);t&&l.removeRoute(t)},clearRoutes:l.clearRoutes,hasRoute:function(e){return!!l.getRecordMatcher(e)},getRoutes:function(){return l.getRoutes().map(e=>e.record)},resolve:O,options:e,push:function(e){return q(e)},replace:function(e){return q(p(C(e),{replace:!0}))},go:Q,back:()=>Q(-1),forward:()=>Q(1),beforeEach:f.add,beforeResolve:g.add,afterEach:v.add,onError:H.add,isReady:function(){return n&&y.value!==T?Promise.resolve():new Promise((e,t)=>{D.add([e,t])})},install(e){e.component("RouterLink",eR),e.component("RouterView",ex),e.config.globalProperties.$router=this,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,s.SU)(y)}),c&&!r&&y.value===T&&(r=!0,q(u.location).catch(e=>{}));let l={};for(let e in T)Object.defineProperty(l,e,{get:()=>y.value[e],enumerable:!0});e.provide(ev,this),e.provide(ey,(0,s.Um)(l)),e.provide(eb,y);let o=e.unmount;eo.add(e),e.unmount=function(){eo.delete(e),eo.size<1&&(b=T,t&&t(),t=null,y.value=T,r=!1,n=!1),o()}}};function eg(e){return e.reduce((e,t)=>e.then(()=>U(t)),Promise.resolve())}return em}}}]);
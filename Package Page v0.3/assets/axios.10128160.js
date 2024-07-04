import{c as Ze,r as _,a as C,o as Ye,b as et,h as Ne,g as tt,d as nt,n as H,e as rt,f as st,i as ot,j as it}from"./index.c9c6b280.js";function at(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function Bn(e,t,n){if(n<=t)return t;const r=n-t+1;let s=t+(e-t)%r;return s<t&&(s=r+s),s===0?0:s}function Ce(e,t){return function(){return e.apply(t,arguments)}}const{toString:ut}=Object.prototype,{getPrototypeOf:le}=Object,W=(e=>t=>{const n=ut.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),T=e=>(e=e.toLowerCase(),t=>W(t)===e),K=e=>t=>typeof t===e,{isArray:B}=Array,U=K("undefined");function ct(e){return e!==null&&!U(e)&&e.constructor!==null&&!U(e.constructor)&&g(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const Fe=T("ArrayBuffer");function lt(e){let t;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&Fe(e.buffer),t}const ft=K("string"),g=K("function"),je=K("number"),G=e=>e!==null&&typeof e=="object",dt=e=>e===!0||e===!1,q=e=>{if(W(e)!=="object")return!1;const t=le(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},pt=T("Date"),ht=T("File"),mt=T("Blob"),yt=T("FileList"),bt=e=>G(e)&&g(e.pipe),Et=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||g(e.append)&&((t=W(e))==="formdata"||t==="object"&&g(e.toString)&&e.toString()==="[object FormData]"))},wt=T("URLSearchParams"),St=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function k(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e=="undefined")return;let r,s;if(typeof e!="object"&&(e=[e]),B(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const i=n?Object.getOwnPropertyNames(e):Object.keys(e),o=i.length;let u;for(r=0;r<o;r++)u=i[r],t.call(null,e[u],u,e)}}function Be(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const ve=(()=>typeof globalThis!="undefined"?globalThis:typeof self!="undefined"?self:typeof window!="undefined"?window:global)(),_e=e=>!U(e)&&e!==ve;function se(){const{caseless:e}=_e(this)&&this||{},t={},n=(r,s)=>{const i=e&&Be(t,s)||s;q(t[i])&&q(r)?t[i]=se(t[i],r):q(r)?t[i]=se({},r):B(r)?t[i]=r.slice():t[i]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&k(arguments[r],n);return t}const Rt=(e,t,n,{allOwnKeys:r}={})=>(k(t,(s,i)=>{n&&g(s)?e[i]=Ce(s,n):e[i]=s},{allOwnKeys:r}),e),Ot=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),gt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},At=(e,t,n,r)=>{let s,i,o;const u={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),i=s.length;i-- >0;)o=s[i],(!r||r(o,e,t))&&!u[o]&&(t[o]=e[o],u[o]=!0);e=n!==!1&&le(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Tt=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},xt=e=>{if(!e)return null;if(B(e))return e;let t=e.length;if(!je(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Pt=(e=>t=>e&&t instanceof e)(typeof Uint8Array!="undefined"&&le(Uint8Array)),Nt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const i=s.value;t.call(e,i[0],i[1])}},Ct=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},Ft=T("HTMLFormElement"),jt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),be=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Bt=T("RegExp"),De=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};k(n,(s,i)=>{let o;(o=t(s,i,e))!==!1&&(r[i]=o||s)}),Object.defineProperties(e,r)},vt=e=>{De(e,(t,n)=>{if(g(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(!!g(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},_t=(e,t)=>{const n={},r=s=>{s.forEach(i=>{n[i]=!0})};return B(e)?r(e):r(String(e).split(t)),n},Dt=()=>{},Lt=(e,t)=>(e=+e,Number.isFinite(e)?e:t),Y="abcdefghijklmnopqrstuvwxyz",Ee="0123456789",Le={DIGIT:Ee,ALPHA:Y,ALPHA_DIGIT:Y+Y.toUpperCase()+Ee},Ut=(e=16,t=Le.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function kt(e){return!!(e&&g(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Mt=e=>{const t=new Array(10),n=(r,s)=>{if(G(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const i=B(r)?[]:{};return k(r,(o,u)=>{const f=n(o,s+1);!U(f)&&(i[u]=f)}),t[s]=void 0,i}}return r};return n(e,0)},Ht=T("AsyncFunction"),It=e=>e&&(G(e)||g(e))&&g(e.then)&&g(e.catch);var a={isArray:B,isArrayBuffer:Fe,isBuffer:ct,isFormData:Et,isArrayBufferView:lt,isString:ft,isNumber:je,isBoolean:dt,isObject:G,isPlainObject:q,isUndefined:U,isDate:pt,isFile:ht,isBlob:mt,isRegExp:Bt,isFunction:g,isStream:bt,isURLSearchParams:wt,isTypedArray:Pt,isFileList:yt,forEach:k,merge:se,extend:Rt,trim:St,stripBOM:Ot,inherits:gt,toFlatObject:At,kindOf:W,kindOfTest:T,endsWith:Tt,toArray:xt,forEachEntry:Nt,matchAll:Ct,isHTMLForm:Ft,hasOwnProperty:be,hasOwnProp:be,reduceDescriptors:De,freezeMethods:vt,toObjectSet:_t,toCamelCase:jt,noop:Dt,toFiniteNumber:Lt,findKey:Be,global:ve,isContextDefined:_e,ALPHABET:Le,generateString:Ut,isSpecCompliantForm:kt,toJSONObject:Mt,isAsyncFn:Ht,isThenable:It};function m(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s)}a.inherits(m,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.response&&this.response.status?this.response.status:null}}});const Ue=m.prototype,ke={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{ke[e]={value:e}});Object.defineProperties(m,ke);Object.defineProperty(Ue,"isAxiosError",{value:!0});m.from=(e,t,n,r,s,i)=>{const o=Object.create(Ue);return a.toFlatObject(e,o,function(f){return f!==Error.prototype},u=>u!=="isAxiosError"),m.call(o,e.message,t,n,r,s),o.cause=e,o.name=e.name,i&&Object.assign(o,i),o};var qt=null;function oe(e){return a.isPlainObject(e)||a.isArray(e)}function Me(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function we(e,t,n){return e?e.concat(t).map(function(s,i){return s=Me(s),!n&&i?"["+s+"]":s}).join(n?".":""):t}function zt(e){return a.isArray(e)&&!e.some(oe)}const $t=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function X(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(h,w){return!a.isUndefined(w[h])});const r=n.metaTokens,s=n.visitor||c,i=n.dots,o=n.indexes,f=(n.Blob||typeof Blob!="undefined"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function d(l){if(l===null)return"";if(a.isDate(l))return l.toISOString();if(!f&&a.isBlob(l))throw new m("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(l)||a.isTypedArray(l)?f&&typeof Blob=="function"?new Blob([l]):Buffer.from(l):l}function c(l,h,w){let R=l;if(l&&!w&&typeof l=="object"){if(a.endsWith(h,"{}"))h=r?h:h.slice(0,-2),l=JSON.stringify(l);else if(a.isArray(l)&&zt(l)||(a.isFileList(l)||a.endsWith(h,"[]"))&&(R=a.toArray(l)))return h=Me(h),R.forEach(function(E,P){!(a.isUndefined(E)||E===null)&&t.append(o===!0?we([h],P,i):o===null?h:h+"[]",d(E))}),!1}return oe(l)?!0:(t.append(we(w,h,i),d(l)),!1)}const p=[],b=Object.assign($t,{defaultVisitor:c,convertValue:d,isVisitable:oe});function S(l,h){if(!a.isUndefined(l)){if(p.indexOf(l)!==-1)throw Error("Circular reference detected in "+h.join("."));p.push(l),a.forEach(l,function(R,O){(!(a.isUndefined(R)||R===null)&&s.call(t,R,a.isString(O)?O.trim():O,h,b))===!0&&S(R,h?h.concat(O):[O])}),p.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return S(e),t}function Se(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function fe(e,t){this._pairs=[],e&&X(e,this,t)}const He=fe.prototype;He.append=function(t,n){this._pairs.push([t,n])};He.toString=function(t){const n=t?function(r){return t.call(this,r,Se)}:Se;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function Jt(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Ie(e,t,n){if(!t)return e;const r=n&&n.encode||Jt,s=n&&n.serialize;let i;if(s?i=s(t,n):i=a.isURLSearchParams(t)?t.toString():new fe(t,n).toString(r),i){const o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e}class Vt{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}var Re=Vt,qe={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},Wt=typeof URLSearchParams!="undefined"?URLSearchParams:fe,Kt=typeof FormData!="undefined"?FormData:null,Gt=typeof Blob!="undefined"?Blob:null;const Xt=(()=>{let e;return typeof navigator!="undefined"&&((e=navigator.product)==="ReactNative"||e==="NativeScript"||e==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"})(),Qt=(()=>typeof WorkerGlobalScope!="undefined"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function")();var A={isBrowser:!0,classes:{URLSearchParams:Wt,FormData:Kt,Blob:Gt},isStandardBrowserEnv:Xt,isStandardBrowserWebWorkerEnv:Qt,protocols:["http","https","file","blob","url","data"]};function Zt(e,t){return X(e,new A.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,i){return A.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):i.defaultVisitor.apply(this,arguments)}},t))}function Yt(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function en(e){const t={},n=Object.keys(e);let r;const s=n.length;let i;for(r=0;r<s;r++)i=n[r],t[i]=e[i];return t}function ze(e){function t(n,r,s,i){let o=n[i++];const u=Number.isFinite(+o),f=i>=n.length;return o=!o&&a.isArray(s)?s.length:o,f?(a.hasOwnProp(s,o)?s[o]=[s[o],r]:s[o]=r,!u):((!s[o]||!a.isObject(s[o]))&&(s[o]=[]),t(n,r,s[o],i)&&a.isArray(s[o])&&(s[o]=en(s[o])),!u)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(Yt(r),s,n,0)}),n}return null}function tn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(e)}const de={transitional:qe,adapter:["xhr","http"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,i=a.isObject(t);if(i&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s&&s?JSON.stringify(ze(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let u;if(i){if(r.indexOf("application/x-www-form-urlencoded")>-1)return Zt(t,this.formSerializer).toString();if((u=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const f=this.env&&this.env.FormData;return X(u?{"files[]":t}:t,f&&new f,this.formSerializer)}}return i||s?(n.setContentType("application/json",!1),tn(t)):t}],transformResponse:[function(t){const n=this.transitional||de.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(t&&a.isString(t)&&(r&&!this.responseType||s)){const o=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(u){if(o)throw u.name==="SyntaxError"?m.from(u,m.ERR_BAD_RESPONSE,this,null,this.response):u}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:A.classes.FormData,Blob:A.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{de.headers[e]={}});var pe=de;const nn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]);var rn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(o){s=o.indexOf(":"),n=o.substring(0,s).trim().toLowerCase(),r=o.substring(s+1).trim(),!(!n||t[n]&&nn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t};const Oe=Symbol("internals");function v(e){return e&&String(e).trim().toLowerCase()}function z(e){return e===!1||e==null?e:a.isArray(e)?e.map(z):String(e)}function sn(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const on=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ee(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function an(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function un(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,i,o){return this[r].call(this,t,s,i,o)},configurable:!0})})}class Q{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function i(u,f,d){const c=v(f);if(!c)throw new Error("header name must be a non-empty string");const p=a.findKey(s,c);(!p||s[p]===void 0||d===!0||d===void 0&&s[p]!==!1)&&(s[p||f]=z(u))}const o=(u,f)=>a.forEach(u,(d,c)=>i(d,c,f));return a.isPlainObject(t)||t instanceof this.constructor?o(t,n):a.isString(t)&&(t=t.trim())&&!on(t)?o(rn(t),n):t!=null&&i(n,t,r),this}get(t,n){if(t=v(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return sn(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=v(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ee(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function i(o){if(o=v(o),o){const u=a.findKey(r,o);u&&(!n||ee(r,r[u],u,n))&&(delete r[u],s=!0)}}return a.isArray(t)?t.forEach(i):i(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const i=n[r];(!t||ee(this,this[i],i,t,!0))&&(delete this[i],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,i)=>{const o=a.findKey(r,i);if(o){n[o]=z(s),delete n[i];return}const u=t?an(i):String(i).trim();u!==i&&delete n[i],n[u]=z(s),r[u]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[Oe]=this[Oe]={accessors:{}}).accessors,s=this.prototype;function i(o){const u=v(o);r[u]||(un(s,o),r[u]=!0)}return a.isArray(t)?t.forEach(i):i(t),this}}Q.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(Q.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(Q);var x=Q;function te(e,t){const n=this||pe,r=t||n,s=x.from(r.headers);let i=r.data;return a.forEach(e,function(u){i=u.call(n,i,s.normalize(),t?t.status:void 0)}),s.normalize(),i}function $e(e){return!!(e&&e.__CANCEL__)}function M(e,t,n){m.call(this,e==null?"canceled":e,m.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(M,m,{__CANCEL__:!0});function cn(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new m("Request failed with status code "+n.status,[m.ERR_BAD_REQUEST,m.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}var ln=A.isStandardBrowserEnv?function(){return{write:function(n,r,s,i,o,u){const f=[];f.push(n+"="+encodeURIComponent(r)),a.isNumber(s)&&f.push("expires="+new Date(s).toGMTString()),a.isString(i)&&f.push("path="+i),a.isString(o)&&f.push("domain="+o),u===!0&&f.push("secure"),document.cookie=f.join("; ")},read:function(n){const r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}();function fn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function dn(e,t){return t?e.replace(/\/+$/,"")+"/"+t.replace(/^\/+/,""):e}function Je(e,t){return e&&!fn(t)?dn(e,t):t}var pn=A.isStandardBrowserEnv?function(){const t=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a");let r;function s(i){let o=i;return t&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(o){const u=a.isString(o)?s(o):o;return u.protocol===r.protocol&&u.host===r.host}}():function(){return function(){return!0}}();function hn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function mn(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,i=0,o;return t=t!==void 0?t:1e3,function(f){const d=Date.now(),c=r[i];o||(o=d),n[s]=f,r[s]=d;let p=i,b=0;for(;p!==s;)b+=n[p++],p=p%e;if(s=(s+1)%e,s===i&&(i=(i+1)%e),d-o<t)return;const S=c&&d-c;return S?Math.round(b*1e3/S):void 0}}function ge(e,t){let n=0;const r=mn(50,250);return s=>{const i=s.loaded,o=s.lengthComputable?s.total:void 0,u=i-n,f=r(u),d=i<=o;n=i;const c={loaded:i,total:o,progress:o?i/o:void 0,bytes:u,rate:f||void 0,estimated:f&&o&&d?(o-i)/f:void 0,event:s};c[t?"download":"upload"]=!0,e(c)}}const yn=typeof XMLHttpRequest!="undefined";var bn=yn&&function(e){return new Promise(function(n,r){let s=e.data;const i=x.from(e.headers).normalize(),o=e.responseType;let u;function f(){e.cancelToken&&e.cancelToken.unsubscribe(u),e.signal&&e.signal.removeEventListener("abort",u)}let d;a.isFormData(s)&&(A.isStandardBrowserEnv||A.isStandardBrowserWebWorkerEnv?i.setContentType(!1):i.getContentType(/^\s*multipart\/form-data/)?a.isString(d=i.getContentType())&&i.setContentType(d.replace(/^\s*(multipart\/form-data);+/,"$1")):i.setContentType("multipart/form-data"));let c=new XMLHttpRequest;if(e.auth){const l=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";i.set("Authorization","Basic "+btoa(l+":"+h))}const p=Je(e.baseURL,e.url);c.open(e.method.toUpperCase(),Ie(p,e.params,e.paramsSerializer),!0),c.timeout=e.timeout;function b(){if(!c)return;const l=x.from("getAllResponseHeaders"in c&&c.getAllResponseHeaders()),w={data:!o||o==="text"||o==="json"?c.responseText:c.response,status:c.status,statusText:c.statusText,headers:l,config:e,request:c};cn(function(O){n(O),f()},function(O){r(O),f()},w),c=null}if("onloadend"in c?c.onloadend=b:c.onreadystatechange=function(){!c||c.readyState!==4||c.status===0&&!(c.responseURL&&c.responseURL.indexOf("file:")===0)||setTimeout(b)},c.onabort=function(){!c||(r(new m("Request aborted",m.ECONNABORTED,e,c)),c=null)},c.onerror=function(){r(new m("Network Error",m.ERR_NETWORK,e,c)),c=null},c.ontimeout=function(){let h=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded";const w=e.transitional||qe;e.timeoutErrorMessage&&(h=e.timeoutErrorMessage),r(new m(h,w.clarifyTimeoutError?m.ETIMEDOUT:m.ECONNABORTED,e,c)),c=null},A.isStandardBrowserEnv){const l=(e.withCredentials||pn(p))&&e.xsrfCookieName&&ln.read(e.xsrfCookieName);l&&i.set(e.xsrfHeaderName,l)}s===void 0&&i.setContentType(null),"setRequestHeader"in c&&a.forEach(i.toJSON(),function(h,w){c.setRequestHeader(w,h)}),a.isUndefined(e.withCredentials)||(c.withCredentials=!!e.withCredentials),o&&o!=="json"&&(c.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&c.addEventListener("progress",ge(e.onDownloadProgress,!0)),typeof e.onUploadProgress=="function"&&c.upload&&c.upload.addEventListener("progress",ge(e.onUploadProgress)),(e.cancelToken||e.signal)&&(u=l=>{!c||(r(!l||l.type?new M(null,e,c):l),c.abort(),c=null)},e.cancelToken&&e.cancelToken.subscribe(u),e.signal&&(e.signal.aborted?u():e.signal.addEventListener("abort",u)));const S=hn(p);if(S&&A.protocols.indexOf(S)===-1){r(new m("Unsupported protocol "+S+":",m.ERR_BAD_REQUEST,e));return}c.send(s||null)})};const ie={http:qt,xhr:bn};a.forEach(ie,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const Ae=e=>`- ${e}`,En=e=>a.isFunction(e)||e===null||e===!1;var Ve={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let i=0;i<t;i++){n=e[i];let o;if(r=n,!En(n)&&(r=ie[(o=String(n)).toLowerCase()],r===void 0))throw new m(`Unknown adapter '${o}'`);if(r)break;s[o||"#"+i]=r}if(!r){const i=Object.entries(s).map(([u,f])=>`adapter ${u} `+(f===!1?"is not supported by the environment":"is not available in the build"));let o=t?i.length>1?`since :
`+i.map(Ae).join(`
`):" "+Ae(i[0]):"as no adapter specified";throw new m("There is no suitable adapter to dispatch the request "+o,"ERR_NOT_SUPPORT")}return r},adapters:ie};function ne(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new M(null,e)}function Te(e){return ne(e),e.headers=x.from(e.headers),e.data=te.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),Ve.getAdapter(e.adapter||pe.adapter)(e).then(function(r){return ne(e),r.data=te.call(e,e.transformResponse,r),r.headers=x.from(r.headers),r},function(r){return $e(r)||(ne(e),r&&r.response&&(r.response.data=te.call(e,e.transformResponse,r.response),r.response.headers=x.from(r.response.headers))),Promise.reject(r)})}const xe=e=>e instanceof x?e.toJSON():e;function F(e,t){t=t||{};const n={};function r(d,c,p){return a.isPlainObject(d)&&a.isPlainObject(c)?a.merge.call({caseless:p},d,c):a.isPlainObject(c)?a.merge({},c):a.isArray(c)?c.slice():c}function s(d,c,p){if(a.isUndefined(c)){if(!a.isUndefined(d))return r(void 0,d,p)}else return r(d,c,p)}function i(d,c){if(!a.isUndefined(c))return r(void 0,c)}function o(d,c){if(a.isUndefined(c)){if(!a.isUndefined(d))return r(void 0,d)}else return r(void 0,c)}function u(d,c,p){if(p in t)return r(d,c);if(p in e)return r(void 0,d)}const f={url:i,method:i,data:i,baseURL:o,transformRequest:o,transformResponse:o,paramsSerializer:o,timeout:o,timeoutMessage:o,withCredentials:o,adapter:o,responseType:o,xsrfCookieName:o,xsrfHeaderName:o,onUploadProgress:o,onDownloadProgress:o,decompress:o,maxContentLength:o,maxBodyLength:o,beforeRedirect:o,transport:o,httpAgent:o,httpsAgent:o,cancelToken:o,socketPath:o,responseEncoding:o,validateStatus:u,headers:(d,c)=>s(xe(d),xe(c),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(c){const p=f[c]||s,b=p(e[c],t[c],c);a.isUndefined(b)&&p!==u||(n[c]=b)}),n}const We="1.5.1",he={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{he[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Pe={};he.transitional=function(t,n,r){function s(i,o){return"[Axios v"+We+"] Transitional option '"+i+"'"+o+(r?". "+r:"")}return(i,o,u)=>{if(t===!1)throw new m(s(o," has been removed"+(n?" in "+n:"")),m.ERR_DEPRECATED);return n&&!Pe[o]&&(Pe[o]=!0,console.warn(s(o," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(i,o,u):!0}};function wn(e,t,n){if(typeof e!="object")throw new m("options must be an object",m.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const i=r[s],o=t[i];if(o){const u=e[i],f=u===void 0||o(u,i,e);if(f!==!0)throw new m("option "+i+" must be "+f,m.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new m("Unknown option "+i,m.ERR_BAD_OPTION)}}var ae={assertOptions:wn,validators:he};const N=ae.validators;class J{constructor(t){this.defaults=t,this.interceptors={request:new Re,response:new Re}}request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=F(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:i}=n;r!==void 0&&ae.assertOptions(r,{silentJSONParsing:N.transitional(N.boolean),forcedJSONParsing:N.transitional(N.boolean),clarifyTimeoutError:N.transitional(N.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:ae.assertOptions(s,{encode:N.function,serialize:N.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let o=i&&a.merge(i.common,i[n.method]);i&&a.forEach(["delete","get","head","post","put","patch","common"],l=>{delete i[l]}),n.headers=x.concat(o,i);const u=[];let f=!0;this.interceptors.request.forEach(function(h){typeof h.runWhen=="function"&&h.runWhen(n)===!1||(f=f&&h.synchronous,u.unshift(h.fulfilled,h.rejected))});const d=[];this.interceptors.response.forEach(function(h){d.push(h.fulfilled,h.rejected)});let c,p=0,b;if(!f){const l=[Te.bind(this),void 0];for(l.unshift.apply(l,u),l.push.apply(l,d),b=l.length,c=Promise.resolve(n);p<b;)c=c.then(l[p++],l[p++]);return c}b=u.length;let S=n;for(p=0;p<b;){const l=u[p++],h=u[p++];try{S=l(S)}catch(w){h.call(this,w);break}}try{c=Te.call(this,S)}catch(l){return Promise.reject(l)}for(p=0,b=d.length;p<b;)c=c.then(d[p++],d[p++]);return c}getUri(t){t=F(this.defaults,t);const n=Je(t.baseURL,t.url);return Ie(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){J.prototype[t]=function(n,r){return this.request(F(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(i,o,u){return this.request(F(u||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:i,data:o}))}}J.prototype[t]=n(),J.prototype[t+"Form"]=n(!0)});var $=J;class me{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(i){n=i});const r=this;this.promise.then(s=>{if(!r._listeners)return;let i=r._listeners.length;for(;i-- >0;)r._listeners[i](s);r._listeners=null}),this.promise.then=s=>{let i;const o=new Promise(u=>{r.subscribe(u),i=u}).then(s);return o.cancel=function(){r.unsubscribe(i)},o},t(function(i,o,u){r.reason||(r.reason=new M(i,o,u),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}static source(){let t;return{token:new me(function(s){t=s}),cancel:t}}}var Sn=me;function Rn(e){return function(n){return e.apply(null,n)}}function On(e){return a.isObject(e)&&e.isAxiosError===!0}const ue={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ue).forEach(([e,t])=>{ue[t]=e});var gn=ue;function Ke(e){const t=new $(e),n=Ce($.prototype.request,t);return a.extend(n,$.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return Ke(F(e,s))},n}const y=Ke(pe);y.Axios=$;y.CanceledError=M;y.CancelToken=Sn;y.isCancel=$e;y.VERSION=We;y.toFormData=X;y.AxiosError=m;y.Cancel=y.CanceledError;y.all=function(t){return Promise.all(t)};y.spread=Rn;y.isAxiosError=On;y.mergeConfig=F;y.AxiosHeaders=x;y.formToJSON=e=>ze(a.isHTMLForm(e)?new FormData(e):e);y.getAdapter=Ve.getAdapter;y.HttpStatusCode=gn;y.default=y;var Ge=y;const ye=XMLHttpRequest,Xe=ye.prototype.open,An=["top","right","bottom","left"];let V=[],D=0;function Tn({p:e,pos:t,active:n,horiz:r,reverse:s,dir:i}){let o=1,u=1;return r===!0?(s===!0&&(o=-1),t==="bottom"&&(u=-1),{transform:`translate3d(${o*(e-100)}%,${n?0:u*-200}%,0)`}):(s===!0&&(u=-1),t==="right"&&(o=-1),{transform:`translate3d(${n?0:i*o*-200}%,${u*(e-100)}%,0)`})}function xn(e,t){return typeof t!="number"&&(e<25?t=Math.random()*3+3:e<65?t=Math.random()*3:e<85?t=Math.random()*2:e<99?t=.6:t=0),at(e+t,0,100)}function Pn(e){D++,V.push(e),!(D>1)&&(ye.prototype.open=function(t,n){const r=[],s=()=>{V.forEach(o=>{(o.hijackFilter.value===null||o.hijackFilter.value(n)===!0)&&(o.start(),r.push(o.stop))})},i=()=>{r.forEach(o=>{o()})};this.addEventListener("loadstart",s,{once:!0}),this.addEventListener("loadend",i,{once:!0}),Xe.apply(this,arguments)})}function Nn(e){V=V.filter(t=>t.start!==e),D=Math.max(0,D-1),D===0&&(ye.prototype.open=Xe)}var Cn=Ze({name:"QAjaxBar",props:{position:{type:String,default:"top",validator:e=>An.includes(e)},size:{type:String,default:"2px"},color:String,skipHijack:Boolean,reverse:Boolean,hijackFilter:Function},emits:["start","stop"],setup(e,{emit:t}){const{proxy:n}=tt(),r=_(0),s=_(!1),i=_(!0);let o=0,u=null,f;const d=C(()=>`q-loading-bar q-loading-bar--${e.position}`+(e.color!==void 0?` bg-${e.color}`:"")+(i.value===!0?"":" no-transition")),c=C(()=>e.position==="top"||e.position==="bottom"),p=C(()=>c.value===!0?"height":"width"),b=C(()=>{const E=s.value,P=Tn({p:r.value,pos:e.position,active:E,horiz:c.value,reverse:n.$q.lang.rtl===!0&&["top","bottom"].includes(e.position)?e.reverse===!1:e.reverse,dir:n.$q.lang.rtl===!0?-1:1});return P[p.value]=e.size,P.opacity=E?1:0,P}),S=C(()=>s.value===!0?{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":r.value}:{"aria-hidden":"true"});function l(E=300){const P=f;return f=Math.max(0,E)||0,o++,o>1?(P===0&&E>0?R():u!==null&&P>0&&E<=0&&(clearTimeout(u),u=null),o):(u!==null&&clearTimeout(u),t("start"),r.value=0,u=setTimeout(()=>{u=null,i.value=!0,E>0&&R()},s.value===!0?500:1),s.value!==!0&&(s.value=!0,i.value=!1),o)}function h(E){return o>0&&(r.value=xn(r.value,E)),o}function w(){if(o=Math.max(0,o-1),o>0)return o;u!==null&&(clearTimeout(u),u=null),t("stop");const E=()=>{i.value=!0,r.value=100,u=setTimeout(()=>{u=null,s.value=!1},1e3)};return r.value===0?u=setTimeout(E,1):E(),o}function R(){r.value<100&&(u=setTimeout(()=>{u=null,h(),R()},f))}let O;return Ye(()=>{e.skipHijack!==!0&&(O=!0,Pn({start:l,stop:w,hijackFilter:C(()=>e.hijackFilter||null)}))}),et(()=>{u!==null&&clearTimeout(u),O===!0&&Nn(l)}),Object.assign(n,{start:l,stop:w,increment:h}),()=>Ne("div",{class:d.value,style:b.value,...S.value})}});const I=_(null),j=nt({isActive:!1},{start:H,stop:H,increment:H,setDefaults:H,install({$q:e,parentApp:t}){if(e.loadingBar=this,this.__installed===!0){e.config.loadingBar!==void 0&&this.setDefaults(e.config.loadingBar);return}const n=_(e.config.loadingBar!==void 0?{...e.config.loadingBar}:{});function r(){j.isActive=!0}function s(){j.isActive=!1}const i=rt("q-loading-bar");st({name:"LoadingBar",devtools:{hide:!0},setup:()=>()=>Ne(Cn,{...n.value,onStart:r,onStop:s,ref:I})},t).mount(i),Object.assign(this,{start(o){I.value.start(o)},stop(){I.value.stop()},increment(){I.value.increment.apply(null,arguments)},setDefaults(o){ot(o)===!0&&Object.assign(n.value,o)}})}}),Z=Ge.create({baseURL:"https://api.trace.market"});let L=0,re=0,Qe=0;function ce(e){L--,re++;const t=re/(re+L)*100;return j.increment(t-Qe),L==0&&j.stop(),e}Z.interceptors.request.use(e=>(L++,L===1&&(j.start(1),Qe=0),e),e=>Promise.reject(ce(Promise.reject(e))));Z.interceptors.response.use(ce,e=>Promise.reject(ce(e)));j.setDefaults({color:"primary",size:"15px",position:"bottom"});var Fn=it(({app:e})=>{e.config.globalProperties.$axios=Ge,e.config.globalProperties.$api=Z}),vn=Object.freeze(Object.defineProperty({__proto__:null,default:Fn,api:Z},Symbol.toStringTag,{value:"Module"}));export{Z as a,vn as b,Bn as n};

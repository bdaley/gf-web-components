(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))r(s);new MutationObserver(s=>{for(const a of s)if(a.type==="childList")for(const u of a.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function n(s){const a={};return s.integrity&&(a.integrity=s.integrity),s.referrerPolicy&&(a.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?a.credentials="include":s.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function r(s){if(s.ep)return;s.ep=!0;const a=n(s);fetch(s.href,a)}})();function lf(t,e){const n=Object.create(null),r=t.split(",");for(let s=0;s<r.length;s++)n[r[s]]=!0;return e?s=>!!n[s.toLowerCase()]:s=>!!n[s]}function cf(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++){const r=t[n],s=lt(r)?fS(r):cf(r);if(s)for(const a in s)e[a]=s[a]}return e}else{if(lt(t))return t;if(Je(t))return t}}const lS=/;(?![^(]*\))/g,cS=/:([^]+)/,hS=/\/\*.*?\*\//gs;function fS(t){const e={};return t.replace(hS,"").split(lS).forEach(n=>{if(n){const r=n.split(cS);r.length>1&&(e[r[0].trim()]=r[1].trim())}}),e}function po(t){let e="";if(lt(t))e=t;else if(ce(t))for(let n=0;n<t.length;n++){const r=po(t[n]);r&&(e+=r+" ")}else if(Je(t))for(const n in t)t[n]&&(e+=n+" ");return e.trim()}const dS="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",pS=lf(dS);function Wv(t){return!!t||t===""}const Ka=t=>lt(t)?t:t==null?"":ce(t)||Je(t)&&(t.toString===qv||!ve(t.toString))?JSON.stringify(t,zv,2):String(t),zv=(t,e)=>e&&e.__v_isRef?zv(t,e.value):fs(e)?{[`Map(${e.size})`]:[...e.entries()].reduce((n,[r,s])=>(n[`${r} =>`]=s,n),{})}:Kv(e)?{[`Set(${e.size})`]:[...e.values()]}:Je(e)&&!ce(e)&&!Gv(e)?String(e):e,qe={},hs=[],Bn=()=>{},gS=()=>!1,mS=/^on[^a-z]/,Xu=t=>mS.test(t),hf=t=>t.startsWith("onUpdate:"),Ct=Object.assign,ff=(t,e)=>{const n=t.indexOf(e);n>-1&&t.splice(n,1)},vS=Object.prototype.hasOwnProperty,Se=(t,e)=>vS.call(t,e),ce=Array.isArray,fs=t=>Qu(t)==="[object Map]",Kv=t=>Qu(t)==="[object Set]",ve=t=>typeof t=="function",lt=t=>typeof t=="string",df=t=>typeof t=="symbol",Je=t=>t!==null&&typeof t=="object",jv=t=>Je(t)&&ve(t.then)&&ve(t.catch),qv=Object.prototype.toString,Qu=t=>qv.call(t),yS=t=>Qu(t).slice(8,-1),Gv=t=>Qu(t)==="[object Object]",pf=t=>lt(t)&&t!=="NaN"&&t[0]!=="-"&&""+parseInt(t,10)===t,lu=lf(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),Yu=t=>{const e=Object.create(null);return n=>e[n]||(e[n]=t(n))},_S=/-(\w)/g,_r=Yu(t=>t.replace(_S,(e,n)=>n?n.toUpperCase():"")),wS=/\B([A-Z])/g,Pn=Yu(t=>t.replace(wS,"-$1").toLowerCase()),Xv=Yu(t=>t.charAt(0).toUpperCase()+t.slice(1)),jc=Yu(t=>t?`on${Xv(t)}`:""),yu=(t,e)=>!Object.is(t,e),qc=(t,e)=>{for(let n=0;n<t.length;n++)t[n](e)},_u=(t,e,n)=>{Object.defineProperty(t,e,{configurable:!0,enumerable:!1,value:n})},ES=t=>{const e=parseFloat(t);return isNaN(e)?t:e},nm=t=>{const e=lt(t)?Number(t):NaN;return isNaN(e)?t:e};let rm;const IS=()=>rm||(rm=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:typeof global<"u"?global:{});let Dn;class TS{constructor(e=!1){this.detached=e,this._active=!0,this.effects=[],this.cleanups=[],this.parent=Dn,!e&&Dn&&(this.index=(Dn.scopes||(Dn.scopes=[])).push(this)-1)}get active(){return this._active}run(e){if(this._active){const n=Dn;try{return Dn=this,e()}finally{Dn=n}}}on(){Dn=this}off(){Dn=this.parent}stop(e){if(this._active){let n,r;for(n=0,r=this.effects.length;n<r;n++)this.effects[n].stop();for(n=0,r=this.cleanups.length;n<r;n++)this.cleanups[n]();if(this.scopes)for(n=0,r=this.scopes.length;n<r;n++)this.scopes[n].stop(!0);if(!this.detached&&this.parent&&!e){const s=this.parent.scopes.pop();s&&s!==this&&(this.parent.scopes[this.index]=s,s.index=this.index)}this.parent=void 0,this._active=!1}}}function bS(t,e=Dn){e&&e.active&&e.effects.push(t)}function AS(){return Dn}const gf=t=>{const e=new Set(t);return e.w=0,e.n=0,e},Qv=t=>(t.w&ti)>0,Yv=t=>(t.n&ti)>0,CS=({deps:t})=>{if(t.length)for(let e=0;e<t.length;e++)t[e].w|=ti},SS=t=>{const{deps:e}=t;if(e.length){let n=0;for(let r=0;r<e.length;r++){const s=e[r];Qv(s)&&!Yv(s)?s.delete(t):e[n++]=s,s.w&=~ti,s.n&=~ti}e.length=n}},Eh=new WeakMap;let to=0,ti=1;const Ih=30;let Ln;const Ri=Symbol(""),Th=Symbol("");class mf{constructor(e,n=null,r){this.fn=e,this.scheduler=n,this.active=!0,this.deps=[],this.parent=void 0,bS(this,r)}run(){if(!this.active)return this.fn();let e=Ln,n=Xr;for(;e;){if(e===this)return;e=e.parent}try{return this.parent=Ln,Ln=this,Xr=!0,ti=1<<++to,to<=Ih?CS(this):im(this),this.fn()}finally{to<=Ih&&SS(this),ti=1<<--to,Ln=this.parent,Xr=n,this.parent=void 0,this.deferStop&&this.stop()}}stop(){Ln===this?this.deferStop=!0:this.active&&(im(this),this.onStop&&this.onStop(),this.active=!1)}}function im(t){const{deps:e}=t;if(e.length){for(let n=0;n<e.length;n++)e[n].delete(t);e.length=0}}let Xr=!0;const Jv=[];function xs(){Jv.push(Xr),Xr=!1}function Os(){const t=Jv.pop();Xr=t===void 0?!0:t}function tn(t,e,n){if(Xr&&Ln){let r=Eh.get(t);r||Eh.set(t,r=new Map);let s=r.get(n);s||r.set(n,s=gf()),Zv(s)}}function Zv(t,e){let n=!1;to<=Ih?Yv(t)||(t.n|=ti,n=!Qv(t)):n=!t.has(Ln),n&&(t.add(Ln),Ln.deps.push(t))}function Ir(t,e,n,r,s,a){const u=Eh.get(t);if(!u)return;let h=[];if(e==="clear")h=[...u.values()];else if(n==="length"&&ce(t)){const f=Number(r);u.forEach((p,v)=>{(v==="length"||v>=f)&&h.push(p)})}else switch(n!==void 0&&h.push(u.get(n)),e){case"add":ce(t)?pf(n)&&h.push(u.get("length")):(h.push(u.get(Ri)),fs(t)&&h.push(u.get(Th)));break;case"delete":ce(t)||(h.push(u.get(Ri)),fs(t)&&h.push(u.get(Th)));break;case"set":fs(t)&&h.push(u.get(Ri));break}if(h.length===1)h[0]&&bh(h[0]);else{const f=[];for(const p of h)p&&f.push(...p);bh(gf(f))}}function bh(t,e){const n=ce(t)?t:[...t];for(const r of n)r.computed&&sm(r);for(const r of n)r.computed||sm(r)}function sm(t,e){(t!==Ln||t.allowRecurse)&&(t.scheduler?t.scheduler():t.run())}const RS=lf("__proto__,__v_isRef,__isVue"),ey=new Set(Object.getOwnPropertyNames(Symbol).filter(t=>t!=="arguments"&&t!=="caller").map(t=>Symbol[t]).filter(df)),xS=vf(),OS=vf(!1,!0),NS=vf(!0),om=DS();function DS(){const t={};return["includes","indexOf","lastIndexOf"].forEach(e=>{t[e]=function(...n){const r=ke(this);for(let a=0,u=this.length;a<u;a++)tn(r,"get",a+"");const s=r[e](...n);return s===-1||s===!1?r[e](...n.map(ke)):s}}),["push","pop","shift","unshift","splice"].forEach(e=>{t[e]=function(...n){xs();const r=ke(this)[e].apply(this,n);return Os(),r}}),t}function kS(t){const e=ke(this);return tn(e,"has",t),e.hasOwnProperty(t)}function vf(t=!1,e=!1){return function(r,s,a){if(s==="__v_isReactive")return!t;if(s==="__v_isReadonly")return t;if(s==="__v_isShallow")return e;if(s==="__v_raw"&&a===(t?e?XS:sy:e?iy:ry).get(r))return r;const u=ce(r);if(!t){if(u&&Se(om,s))return Reflect.get(om,s,a);if(s==="hasOwnProperty")return kS}const h=Reflect.get(r,s,a);return(df(s)?ey.has(s):RS(s))||(t||tn(r,"get",s),e)?h:Wt(h)?u&&pf(s)?h:h.value:Je(h)?t?oy(h):wf(h):h}}const PS=ty(),LS=ty(!0);function ty(t=!1){return function(n,r,s,a){let u=n[r];if(go(u)&&Wt(u)&&!Wt(s))return!1;if(!t&&(!Ah(s)&&!go(s)&&(u=ke(u),s=ke(s)),!ce(n)&&Wt(u)&&!Wt(s)))return u.value=s,!0;const h=ce(n)&&pf(r)?Number(r)<n.length:Se(n,r),f=Reflect.set(n,r,s,a);return n===ke(a)&&(h?yu(s,u)&&Ir(n,"set",r,s):Ir(n,"add",r,s)),f}}function MS(t,e){const n=Se(t,e);t[e];const r=Reflect.deleteProperty(t,e);return r&&n&&Ir(t,"delete",e,void 0),r}function FS(t,e){const n=Reflect.has(t,e);return(!df(e)||!ey.has(e))&&tn(t,"has",e),n}function US(t){return tn(t,"iterate",ce(t)?"length":Ri),Reflect.ownKeys(t)}const ny={get:xS,set:PS,deleteProperty:MS,has:FS,ownKeys:US},BS={get:NS,set(t,e){return!0},deleteProperty(t,e){return!0}},$S=Ct({},ny,{get:OS,set:LS}),yf=t=>t,Ju=t=>Reflect.getPrototypeOf(t);function ja(t,e,n=!1,r=!1){t=t.__v_raw;const s=ke(t),a=ke(e);n||(e!==a&&tn(s,"get",e),tn(s,"get",a));const{has:u}=Ju(s),h=r?yf:n?Tf:If;if(u.call(s,e))return h(t.get(e));if(u.call(s,a))return h(t.get(a));t!==s&&t.get(e)}function qa(t,e=!1){const n=this.__v_raw,r=ke(n),s=ke(t);return e||(t!==s&&tn(r,"has",t),tn(r,"has",s)),t===s?n.has(t):n.has(t)||n.has(s)}function Ga(t,e=!1){return t=t.__v_raw,!e&&tn(ke(t),"iterate",Ri),Reflect.get(t,"size",t)}function am(t){t=ke(t);const e=ke(this);return Ju(e).has.call(e,t)||(e.add(t),Ir(e,"add",t,t)),this}function um(t,e){e=ke(e);const n=ke(this),{has:r,get:s}=Ju(n);let a=r.call(n,t);a||(t=ke(t),a=r.call(n,t));const u=s.call(n,t);return n.set(t,e),a?yu(e,u)&&Ir(n,"set",t,e):Ir(n,"add",t,e),this}function lm(t){const e=ke(this),{has:n,get:r}=Ju(e);let s=n.call(e,t);s||(t=ke(t),s=n.call(e,t)),r&&r.call(e,t);const a=e.delete(t);return s&&Ir(e,"delete",t,void 0),a}function cm(){const t=ke(this),e=t.size!==0,n=t.clear();return e&&Ir(t,"clear",void 0,void 0),n}function Xa(t,e){return function(r,s){const a=this,u=a.__v_raw,h=ke(u),f=e?yf:t?Tf:If;return!t&&tn(h,"iterate",Ri),u.forEach((p,v)=>r.call(s,f(p),f(v),a))}}function Qa(t,e,n){return function(...r){const s=this.__v_raw,a=ke(s),u=fs(a),h=t==="entries"||t===Symbol.iterator&&u,f=t==="keys"&&u,p=s[t](...r),v=n?yf:e?Tf:If;return!e&&tn(a,"iterate",f?Th:Ri),{next(){const{value:E,done:A}=p.next();return A?{value:E,done:A}:{value:h?[v(E[0]),v(E[1])]:v(E),done:A}},[Symbol.iterator](){return this}}}}function Hr(t){return function(...e){return t==="delete"?!1:this}}function VS(){const t={get(a){return ja(this,a)},get size(){return Ga(this)},has:qa,add:am,set:um,delete:lm,clear:cm,forEach:Xa(!1,!1)},e={get(a){return ja(this,a,!1,!0)},get size(){return Ga(this)},has:qa,add:am,set:um,delete:lm,clear:cm,forEach:Xa(!1,!0)},n={get(a){return ja(this,a,!0)},get size(){return Ga(this,!0)},has(a){return qa.call(this,a,!0)},add:Hr("add"),set:Hr("set"),delete:Hr("delete"),clear:Hr("clear"),forEach:Xa(!0,!1)},r={get(a){return ja(this,a,!0,!0)},get size(){return Ga(this,!0)},has(a){return qa.call(this,a,!0)},add:Hr("add"),set:Hr("set"),delete:Hr("delete"),clear:Hr("clear"),forEach:Xa(!0,!0)};return["keys","values","entries",Symbol.iterator].forEach(a=>{t[a]=Qa(a,!1,!1),n[a]=Qa(a,!0,!1),e[a]=Qa(a,!1,!0),r[a]=Qa(a,!0,!0)}),[t,n,e,r]}const[HS,WS,zS,KS]=VS();function _f(t,e){const n=e?t?KS:zS:t?WS:HS;return(r,s,a)=>s==="__v_isReactive"?!t:s==="__v_isReadonly"?t:s==="__v_raw"?r:Reflect.get(Se(n,s)&&s in r?n:r,s,a)}const jS={get:_f(!1,!1)},qS={get:_f(!1,!0)},GS={get:_f(!0,!1)},ry=new WeakMap,iy=new WeakMap,sy=new WeakMap,XS=new WeakMap;function QS(t){switch(t){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function YS(t){return t.__v_skip||!Object.isExtensible(t)?0:QS(yS(t))}function wf(t){return go(t)?t:Ef(t,!1,ny,jS,ry)}function JS(t){return Ef(t,!1,$S,qS,iy)}function oy(t){return Ef(t,!0,BS,GS,sy)}function Ef(t,e,n,r,s){if(!Je(t)||t.__v_raw&&!(e&&t.__v_isReactive))return t;const a=s.get(t);if(a)return a;const u=YS(t);if(u===0)return t;const h=new Proxy(t,u===2?r:n);return s.set(t,h),h}function ds(t){return go(t)?ds(t.__v_raw):!!(t&&t.__v_isReactive)}function go(t){return!!(t&&t.__v_isReadonly)}function Ah(t){return!!(t&&t.__v_isShallow)}function ay(t){return ds(t)||go(t)}function ke(t){const e=t&&t.__v_raw;return e?ke(e):t}function uy(t){return _u(t,"__v_skip",!0),t}const If=t=>Je(t)?wf(t):t,Tf=t=>Je(t)?oy(t):t;function ZS(t){Xr&&Ln&&(t=ke(t),Zv(t.dep||(t.dep=gf())))}function eR(t,e){t=ke(t);const n=t.dep;n&&bh(n)}function Wt(t){return!!(t&&t.__v_isRef===!0)}function tR(t){return Wt(t)?t.value:t}const nR={get:(t,e,n)=>tR(Reflect.get(t,e,n)),set:(t,e,n,r)=>{const s=t[e];return Wt(s)&&!Wt(n)?(s.value=n,!0):Reflect.set(t,e,n,r)}};function ly(t){return ds(t)?t:new Proxy(t,nR)}var cy;class rR{constructor(e,n,r,s){this._setter=n,this.dep=void 0,this.__v_isRef=!0,this[cy]=!1,this._dirty=!0,this.effect=new mf(e,()=>{this._dirty||(this._dirty=!0,eR(this))}),this.effect.computed=this,this.effect.active=this._cacheable=!s,this.__v_isReadonly=r}get value(){const e=ke(this);return ZS(e),(e._dirty||!e._cacheable)&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}cy="__v_isReadonly";function iR(t,e,n=!1){let r,s;const a=ve(t);return a?(r=t,s=Bn):(r=t.get,s=t.set),new rR(r,s,a||!s,n)}function Qr(t,e,n,r){let s;try{s=r?t(...r):t()}catch(a){Zu(a,e,n)}return s}function An(t,e,n,r){if(ve(t)){const a=Qr(t,e,n,r);return a&&jv(a)&&a.catch(u=>{Zu(u,e,n)}),a}const s=[];for(let a=0;a<t.length;a++)s.push(An(t[a],e,n,r));return s}function Zu(t,e,n,r=!0){const s=e?e.vnode:null;if(e){let a=e.parent;const u=e.proxy,h=n;for(;a;){const p=a.ec;if(p){for(let v=0;v<p.length;v++)if(p[v](t,u,h)===!1)return}a=a.parent}const f=e.appContext.config.errorHandler;if(f){Qr(f,null,10,[t,u,h]);return}}sR(t,n,s,r)}function sR(t,e,n,r=!0){console.error(t)}let mo=!1,Ch=!1;const Dt=[];let Xn=0;const ps=[];let pr=null,Ii=0;const hy=Promise.resolve();let bf=null;function fy(t){const e=bf||hy;return t?e.then(this?t.bind(this):t):e}function oR(t){let e=Xn+1,n=Dt.length;for(;e<n;){const r=e+n>>>1;vo(Dt[r])<t?e=r+1:n=r}return e}function Af(t){(!Dt.length||!Dt.includes(t,mo&&t.allowRecurse?Xn+1:Xn))&&(t.id==null?Dt.push(t):Dt.splice(oR(t.id),0,t),dy())}function dy(){!mo&&!Ch&&(Ch=!0,bf=hy.then(gy))}function aR(t){const e=Dt.indexOf(t);e>Xn&&Dt.splice(e,1)}function uR(t){ce(t)?ps.push(...t):(!pr||!pr.includes(t,t.allowRecurse?Ii+1:Ii))&&ps.push(t),dy()}function hm(t,e=mo?Xn+1:0){for(;e<Dt.length;e++){const n=Dt[e];n&&n.pre&&(Dt.splice(e,1),e--,n())}}function py(t){if(ps.length){const e=[...new Set(ps)];if(ps.length=0,pr){pr.push(...e);return}for(pr=e,pr.sort((n,r)=>vo(n)-vo(r)),Ii=0;Ii<pr.length;Ii++)pr[Ii]();pr=null,Ii=0}}const vo=t=>t.id==null?1/0:t.id,lR=(t,e)=>{const n=vo(t)-vo(e);if(n===0){if(t.pre&&!e.pre)return-1;if(e.pre&&!t.pre)return 1}return n};function gy(t){Ch=!1,mo=!0,Dt.sort(lR);const e=Bn;try{for(Xn=0;Xn<Dt.length;Xn++){const n=Dt[Xn];n&&n.active!==!1&&Qr(n,null,14)}}finally{Xn=0,Dt.length=0,py(),mo=!1,bf=null,(Dt.length||ps.length)&&gy()}}function cR(t,e,...n){if(t.isUnmounted)return;const r=t.vnode.props||qe;let s=n;const a=e.startsWith("update:"),u=a&&e.slice(7);if(u&&u in r){const v=`${u==="modelValue"?"model":u}Modifiers`,{number:E,trim:A}=r[v]||qe;A&&(s=n.map(L=>lt(L)?L.trim():L)),E&&(s=n.map(ES))}let h,f=r[h=jc(e)]||r[h=jc(_r(e))];!f&&a&&(f=r[h=jc(Pn(e))]),f&&An(f,t,6,s);const p=r[h+"Once"];if(p){if(!t.emitted)t.emitted={};else if(t.emitted[h])return;t.emitted[h]=!0,An(p,t,6,s)}}function my(t,e,n=!1){const r=e.emitsCache,s=r.get(t);if(s!==void 0)return s;const a=t.emits;let u={},h=!1;if(!ve(t)){const f=p=>{const v=my(p,e,!0);v&&(h=!0,Ct(u,v))};!n&&e.mixins.length&&e.mixins.forEach(f),t.extends&&f(t.extends),t.mixins&&t.mixins.forEach(f)}return!a&&!h?(Je(t)&&r.set(t,null),null):(ce(a)?a.forEach(f=>u[f]=null):Ct(u,a),Je(t)&&r.set(t,u),u)}function el(t,e){return!t||!Xu(e)?!1:(e=e.slice(2).replace(/Once$/,""),Se(t,e[0].toLowerCase()+e.slice(1))||Se(t,Pn(e))||Se(t,e))}let zt=null,tl=null;function wu(t){const e=zt;return zt=t,tl=t&&t.type.__scopeId||null,e}function hR(t){tl=t}function fR(){tl=null}function dR(t,e=zt,n){if(!e||t._n)return t;const r=(...s)=>{r._d&&Em(-1);const a=wu(e);let u;try{u=t(...s)}finally{wu(a),r._d&&Em(1)}return u};return r._n=!0,r._c=!0,r._d=!0,r}function Gc(t){const{type:e,vnode:n,proxy:r,withProxy:s,props:a,propsOptions:[u],slots:h,attrs:f,emit:p,render:v,renderCache:E,data:A,setupState:L,ctx:z,inheritAttrs:B}=t;let X,te;const Fe=wu(t);try{if(n.shapeFlag&4){const we=s||r;X=Gn(v.call(we,we,E,a,L,A,z)),te=f}else{const we=e;X=Gn(we.length>1?we(a,{attrs:f,slots:h,emit:p}):we(a,null)),te=e.props?f:pR(f)}}catch(we){oo.length=0,Zu(we,t,1),X=$n(Cn)}let G=X;if(te&&B!==!1){const we=Object.keys(te),{shapeFlag:Ae}=G;we.length&&Ae&7&&(u&&we.some(hf)&&(te=gR(te,u)),G=ni(G,te))}return n.dirs&&(G=ni(G),G.dirs=G.dirs?G.dirs.concat(n.dirs):n.dirs),n.transition&&(G.transition=n.transition),X=G,wu(Fe),X}const pR=t=>{let e;for(const n in t)(n==="class"||n==="style"||Xu(n))&&((e||(e={}))[n]=t[n]);return e},gR=(t,e)=>{const n={};for(const r in t)(!hf(r)||!(r.slice(9)in e))&&(n[r]=t[r]);return n};function mR(t,e,n){const{props:r,children:s,component:a}=t,{props:u,children:h,patchFlag:f}=e,p=a.emitsOptions;if(e.dirs||e.transition)return!0;if(n&&f>=0){if(f&1024)return!0;if(f&16)return r?fm(r,u,p):!!u;if(f&8){const v=e.dynamicProps;for(let E=0;E<v.length;E++){const A=v[E];if(u[A]!==r[A]&&!el(p,A))return!0}}}else return(s||h)&&(!h||!h.$stable)?!0:r===u?!1:r?u?fm(r,u,p):!0:!!u;return!1}function fm(t,e,n){const r=Object.keys(e);if(r.length!==Object.keys(t).length)return!0;for(let s=0;s<r.length;s++){const a=r[s];if(e[a]!==t[a]&&!el(n,a))return!0}return!1}function vR({vnode:t,parent:e},n){for(;e&&e.subTree===t;)(t=e.vnode).el=n,e=e.parent}const yR=t=>t.__isSuspense;function _R(t,e){e&&e.pendingBranch?ce(t)?e.effects.push(...t):e.effects.push(t):uR(t)}function wR(t,e){if(ot){let n=ot.provides;const r=ot.parent&&ot.parent.provides;r===n&&(n=ot.provides=Object.create(r)),n[t]=e}}function cu(t,e,n=!1){const r=ot||zt;if(r){const s=r.parent==null?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&t in s)return s[t];if(arguments.length>1)return n&&ve(e)?e.call(r.proxy):e}}const Ya={};function Xc(t,e,n){return vy(t,e,n)}function vy(t,e,{immediate:n,deep:r,flush:s,onTrack:a,onTrigger:u}=qe){const h=AS()===(ot==null?void 0:ot.scope)?ot:null;let f,p=!1,v=!1;if(Wt(t)?(f=()=>t.value,p=Ah(t)):ds(t)?(f=()=>t,r=!0):ce(t)?(v=!0,p=t.some(G=>ds(G)||Ah(G)),f=()=>t.map(G=>{if(Wt(G))return G.value;if(ds(G))return us(G);if(ve(G))return Qr(G,h,2)})):ve(t)?e?f=()=>Qr(t,h,2):f=()=>{if(!(h&&h.isUnmounted))return E&&E(),An(t,h,3,[A])}:f=Bn,e&&r){const G=f;f=()=>us(G())}let E,A=G=>{E=te.onStop=()=>{Qr(G,h,4)}},L;if(_o)if(A=Bn,e?n&&An(e,h,3,[f(),v?[]:void 0,A]):f(),s==="sync"){const G=mx();L=G.__watcherHandles||(G.__watcherHandles=[])}else return Bn;let z=v?new Array(t.length).fill(Ya):Ya;const B=()=>{if(te.active)if(e){const G=te.run();(r||p||(v?G.some((we,Ae)=>yu(we,z[Ae])):yu(G,z)))&&(E&&E(),An(e,h,3,[G,z===Ya?void 0:v&&z[0]===Ya?[]:z,A]),z=G)}else te.run()};B.allowRecurse=!!e;let X;s==="sync"?X=B:s==="post"?X=()=>Zt(B,h&&h.suspense):(B.pre=!0,h&&(B.id=h.uid),X=()=>Af(B));const te=new mf(f,X);e?n?B():z=te.run():s==="post"?Zt(te.run.bind(te),h&&h.suspense):te.run();const Fe=()=>{te.stop(),h&&h.scope&&ff(h.scope.effects,te)};return L&&L.push(Fe),Fe}function ER(t,e,n){const r=this.proxy,s=lt(t)?t.includes(".")?yy(r,t):()=>r[t]:t.bind(r,r);let a;ve(e)?a=e:(a=e.handler,n=e);const u=ot;ws(this);const h=vy(s,a.bind(r),n);return u?ws(u):xi(),h}function yy(t,e){const n=e.split(".");return()=>{let r=t;for(let s=0;s<n.length&&r;s++)r=r[n[s]];return r}}function us(t,e){if(!Je(t)||t.__v_skip||(e=e||new Set,e.has(t)))return t;if(e.add(t),Wt(t))us(t.value,e);else if(ce(t))for(let n=0;n<t.length;n++)us(t[n],e);else if(Kv(t)||fs(t))t.forEach(n=>{us(n,e)});else if(Gv(t))for(const n in t)us(t[n],e);return t}function IR(){const t={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return Iy(()=>{t.isMounted=!0}),Ty(()=>{t.isUnmounting=!0}),t}const In=[Function,Array],TR={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:In,onEnter:In,onAfterEnter:In,onEnterCancelled:In,onBeforeLeave:In,onLeave:In,onAfterLeave:In,onLeaveCancelled:In,onBeforeAppear:In,onAppear:In,onAfterAppear:In,onAppearCancelled:In},setup(t,{slots:e}){const n=ux(),r=IR();let s;return()=>{const a=e.default&&wy(e.default(),!0);if(!a||!a.length)return;let u=a[0];if(a.length>1){for(const B of a)if(B.type!==Cn){u=B;break}}const h=ke(t),{mode:f}=h;if(r.isLeaving)return Qc(u);const p=dm(u);if(!p)return Qc(u);const v=Sh(p,h,r,n);Rh(p,v);const E=n.subTree,A=E&&dm(E);let L=!1;const{getTransitionKey:z}=p.type;if(z){const B=z();s===void 0?s=B:B!==s&&(s=B,L=!0)}if(A&&A.type!==Cn&&(!Ti(p,A)||L)){const B=Sh(A,h,r,n);if(Rh(A,B),f==="out-in")return r.isLeaving=!0,B.afterLeave=()=>{r.isLeaving=!1,n.update.active!==!1&&n.update()},Qc(u);f==="in-out"&&p.type!==Cn&&(B.delayLeave=(X,te,Fe)=>{const G=_y(r,A);G[String(A.key)]=A,X._leaveCb=()=>{te(),X._leaveCb=void 0,delete v.delayedLeave},v.delayedLeave=Fe})}return u}}},bR=TR;function _y(t,e){const{leavingVNodes:n}=t;let r=n.get(e.type);return r||(r=Object.create(null),n.set(e.type,r)),r}function Sh(t,e,n,r){const{appear:s,mode:a,persisted:u=!1,onBeforeEnter:h,onEnter:f,onAfterEnter:p,onEnterCancelled:v,onBeforeLeave:E,onLeave:A,onAfterLeave:L,onLeaveCancelled:z,onBeforeAppear:B,onAppear:X,onAfterAppear:te,onAppearCancelled:Fe}=e,G=String(t.key),we=_y(n,t),Ae=(se,Be)=>{se&&An(se,r,9,Be)},it=(se,Be)=>{const $e=Be[1];Ae(se,Be),ce(se)?se.every(Ft=>Ft.length<=1)&&$e():se.length<=1&&$e()},Xe={mode:a,persisted:u,beforeEnter(se){let Be=h;if(!n.isMounted)if(s)Be=B||h;else return;se._leaveCb&&se._leaveCb(!0);const $e=we[G];$e&&Ti(t,$e)&&$e.el._leaveCb&&$e.el._leaveCb(),Ae(Be,[se])},enter(se){let Be=f,$e=p,Ft=v;if(!n.isMounted)if(s)Be=X||f,$e=te||p,Ft=Fe||v;else return;let hn=!1;const Sn=se._enterCb=xr=>{hn||(hn=!0,xr?Ae(Ft,[se]):Ae($e,[se]),Xe.delayedLeave&&Xe.delayedLeave(),se._enterCb=void 0)};Be?it(Be,[se,Sn]):Sn()},leave(se,Be){const $e=String(t.key);if(se._enterCb&&se._enterCb(!0),n.isUnmounting)return Be();Ae(E,[se]);let Ft=!1;const hn=se._leaveCb=Sn=>{Ft||(Ft=!0,Be(),Sn?Ae(z,[se]):Ae(L,[se]),se._leaveCb=void 0,we[$e]===t&&delete we[$e])};we[$e]=t,A?it(A,[se,hn]):hn()},clone(se){return Sh(se,e,n,r)}};return Xe}function Qc(t){if(nl(t))return t=ni(t),t.children=null,t}function dm(t){return nl(t)?t.children?t.children[0]:void 0:t}function Rh(t,e){t.shapeFlag&6&&t.component?Rh(t.component.subTree,e):t.shapeFlag&128?(t.ssContent.transition=e.clone(t.ssContent),t.ssFallback.transition=e.clone(t.ssFallback)):t.transition=e}function wy(t,e=!1,n){let r=[],s=0;for(let a=0;a<t.length;a++){let u=t[a];const h=n==null?u.key:String(n)+String(u.key!=null?u.key:a);u.type===en?(u.patchFlag&128&&s++,r=r.concat(wy(u.children,e,h))):(e||u.type!==Cn)&&r.push(h!=null?ni(u,{key:h}):u)}if(s>1)for(let a=0;a<r.length;a++)r[a].patchFlag=-2;return r}function AR(t){return ve(t)?{setup:t,name:t.name}:t}const io=t=>!!t.type.__asyncLoader,nl=t=>t.type.__isKeepAlive;function CR(t,e){Ey(t,"a",e)}function SR(t,e){Ey(t,"da",e)}function Ey(t,e,n=ot){const r=t.__wdc||(t.__wdc=()=>{let s=n;for(;s;){if(s.isDeactivated)return;s=s.parent}return t()});if(rl(e,r,n),n){let s=n.parent;for(;s&&s.parent;)nl(s.parent.vnode)&&RR(r,e,n,s),s=s.parent}}function RR(t,e,n,r){const s=rl(e,t,r,!0);by(()=>{ff(r[e],s)},n)}function rl(t,e,n=ot,r=!1){if(n){const s=n[t]||(n[t]=[]),a=e.__weh||(e.__weh=(...u)=>{if(n.isUnmounted)return;xs(),ws(n);const h=An(e,n,t,u);return xi(),Os(),h});return r?s.unshift(a):s.push(a),a}}const Sr=t=>(e,n=ot)=>(!_o||t==="sp")&&rl(t,(...r)=>e(...r),n),xR=Sr("bm"),Iy=Sr("m"),OR=Sr("bu"),NR=Sr("u"),Ty=Sr("bum"),by=Sr("um"),DR=Sr("sp"),kR=Sr("rtg"),PR=Sr("rtc");function LR(t,e=ot){rl("ec",t,e)}function yi(t,e,n,r){const s=t.dirs,a=e&&e.dirs;for(let u=0;u<s.length;u++){const h=s[u];a&&(h.oldValue=a[u].value);let f=h.dir[r];f&&(xs(),An(f,n,8,[t.el,h,t,e]),Os())}}const MR=Symbol();function pm(t,e,n,r){let s;const a=n&&n[r];if(ce(t)||lt(t)){s=new Array(t.length);for(let u=0,h=t.length;u<h;u++)s[u]=e(t[u],u,void 0,a&&a[u])}else if(typeof t=="number"){s=new Array(t);for(let u=0;u<t;u++)s[u]=e(u+1,u,void 0,a&&a[u])}else if(Je(t))if(t[Symbol.iterator])s=Array.from(t,(u,h)=>e(u,h,void 0,a&&a[h]));else{const u=Object.keys(t);s=new Array(u.length);for(let h=0,f=u.length;h<f;h++){const p=u[h];s[h]=e(t[p],p,h,a&&a[h])}}else s=[];return n&&(n[r]=s),s}function FR(t,e,n={},r,s){if(zt.isCE||zt.parent&&io(zt.parent)&&zt.parent.isCE)return e!=="default"&&(n.name=e),$n("slot",n,r&&r());let a=t[e];a&&a._c&&(a._d=!1),Tn();const u=a&&Ay(a(n)),h=Ly(en,{key:n.key||u&&u.key||`_${e}`},u||(r?r():[]),u&&t._===1?64:-2);return!s&&h.scopeId&&(h.slotScopeIds=[h.scopeId+"-s"]),a&&a._c&&(a._d=!0),h}function Ay(t){return t.some(e=>My(e)?!(e.type===Cn||e.type===en&&!Ay(e.children)):!0)?t:null}const xh=t=>t?Uy(t)?Of(t)||t.proxy:xh(t.parent):null,so=Ct(Object.create(null),{$:t=>t,$el:t=>t.vnode.el,$data:t=>t.data,$props:t=>t.props,$attrs:t=>t.attrs,$slots:t=>t.slots,$refs:t=>t.refs,$parent:t=>xh(t.parent),$root:t=>xh(t.root),$emit:t=>t.emit,$options:t=>Cf(t),$forceUpdate:t=>t.f||(t.f=()=>Af(t.update)),$nextTick:t=>t.n||(t.n=fy.bind(t.proxy)),$watch:t=>ER.bind(t)}),Yc=(t,e)=>t!==qe&&!t.__isScriptSetup&&Se(t,e),UR={get({_:t},e){const{ctx:n,setupState:r,data:s,props:a,accessCache:u,type:h,appContext:f}=t;let p;if(e[0]!=="$"){const L=u[e];if(L!==void 0)switch(L){case 1:return r[e];case 2:return s[e];case 4:return n[e];case 3:return a[e]}else{if(Yc(r,e))return u[e]=1,r[e];if(s!==qe&&Se(s,e))return u[e]=2,s[e];if((p=t.propsOptions[0])&&Se(p,e))return u[e]=3,a[e];if(n!==qe&&Se(n,e))return u[e]=4,n[e];Oh&&(u[e]=0)}}const v=so[e];let E,A;if(v)return e==="$attrs"&&tn(t,"get",e),v(t);if((E=h.__cssModules)&&(E=E[e]))return E;if(n!==qe&&Se(n,e))return u[e]=4,n[e];if(A=f.config.globalProperties,Se(A,e))return A[e]},set({_:t},e,n){const{data:r,setupState:s,ctx:a}=t;return Yc(s,e)?(s[e]=n,!0):r!==qe&&Se(r,e)?(r[e]=n,!0):Se(t.props,e)||e[0]==="$"&&e.slice(1)in t?!1:(a[e]=n,!0)},has({_:{data:t,setupState:e,accessCache:n,ctx:r,appContext:s,propsOptions:a}},u){let h;return!!n[u]||t!==qe&&Se(t,u)||Yc(e,u)||(h=a[0])&&Se(h,u)||Se(r,u)||Se(so,u)||Se(s.config.globalProperties,u)},defineProperty(t,e,n){return n.get!=null?t._.accessCache[e]=0:Se(n,"value")&&this.set(t,e,n.value,null),Reflect.defineProperty(t,e,n)}};let Oh=!0;function BR(t){const e=Cf(t),n=t.proxy,r=t.ctx;Oh=!1,e.beforeCreate&&gm(e.beforeCreate,t,"bc");const{data:s,computed:a,methods:u,watch:h,provide:f,inject:p,created:v,beforeMount:E,mounted:A,beforeUpdate:L,updated:z,activated:B,deactivated:X,beforeDestroy:te,beforeUnmount:Fe,destroyed:G,unmounted:we,render:Ae,renderTracked:it,renderTriggered:Xe,errorCaptured:se,serverPrefetch:Be,expose:$e,inheritAttrs:Ft,components:hn,directives:Sn,filters:xr}=e;if(p&&$R(p,r,null,t.appContext.config.unwrapInjectedRef),u)for(const Ne in u){const Ee=u[Ne];ve(Ee)&&(r[Ne]=Ee.bind(n))}if(s){const Ne=s.call(n,n);Je(Ne)&&(t.data=wf(Ne))}if(Oh=!0,a)for(const Ne in a){const Ee=a[Ne],nr=ve(Ee)?Ee.bind(n,n):ve(Ee.get)?Ee.get.bind(n,n):Bn,rr=!ve(Ee)&&ve(Ee.set)?Ee.set.bind(n):Bn,ct=px({get:nr,set:rr});Object.defineProperty(r,Ne,{enumerable:!0,configurable:!0,get:()=>ct.value,set:fn=>ct.value=fn})}if(h)for(const Ne in h)Cy(h[Ne],r,n,Ne);if(f){const Ne=ve(f)?f.call(n):f;Reflect.ownKeys(Ne).forEach(Ee=>{wR(Ee,Ne[Ee])})}v&&gm(v,t,"c");function yt(Ne,Ee){ce(Ee)?Ee.forEach(nr=>Ne(nr.bind(n))):Ee&&Ne(Ee.bind(n))}if(yt(xR,E),yt(Iy,A),yt(OR,L),yt(NR,z),yt(CR,B),yt(SR,X),yt(LR,se),yt(PR,it),yt(kR,Xe),yt(Ty,Fe),yt(by,we),yt(DR,Be),ce($e))if($e.length){const Ne=t.exposed||(t.exposed={});$e.forEach(Ee=>{Object.defineProperty(Ne,Ee,{get:()=>n[Ee],set:nr=>n[Ee]=nr})})}else t.exposed||(t.exposed={});Ae&&t.render===Bn&&(t.render=Ae),Ft!=null&&(t.inheritAttrs=Ft),hn&&(t.components=hn),Sn&&(t.directives=Sn)}function $R(t,e,n=Bn,r=!1){ce(t)&&(t=Nh(t));for(const s in t){const a=t[s];let u;Je(a)?"default"in a?u=cu(a.from||s,a.default,!0):u=cu(a.from||s):u=cu(a),Wt(u)&&r?Object.defineProperty(e,s,{enumerable:!0,configurable:!0,get:()=>u.value,set:h=>u.value=h}):e[s]=u}}function gm(t,e,n){An(ce(t)?t.map(r=>r.bind(e.proxy)):t.bind(e.proxy),e,n)}function Cy(t,e,n,r){const s=r.includes(".")?yy(n,r):()=>n[r];if(lt(t)){const a=e[t];ve(a)&&Xc(s,a)}else if(ve(t))Xc(s,t.bind(n));else if(Je(t))if(ce(t))t.forEach(a=>Cy(a,e,n,r));else{const a=ve(t.handler)?t.handler.bind(n):e[t.handler];ve(a)&&Xc(s,a,t)}}function Cf(t){const e=t.type,{mixins:n,extends:r}=e,{mixins:s,optionsCache:a,config:{optionMergeStrategies:u}}=t.appContext,h=a.get(e);let f;return h?f=h:!s.length&&!n&&!r?f=e:(f={},s.length&&s.forEach(p=>Eu(f,p,u,!0)),Eu(f,e,u)),Je(e)&&a.set(e,f),f}function Eu(t,e,n,r=!1){const{mixins:s,extends:a}=e;a&&Eu(t,a,n,!0),s&&s.forEach(u=>Eu(t,u,n,!0));for(const u in e)if(!(r&&u==="expose")){const h=VR[u]||n&&n[u];t[u]=h?h(t[u],e[u]):e[u]}return t}const VR={data:mm,props:wi,emits:wi,methods:wi,computed:wi,beforeCreate:Ht,created:Ht,beforeMount:Ht,mounted:Ht,beforeUpdate:Ht,updated:Ht,beforeDestroy:Ht,beforeUnmount:Ht,destroyed:Ht,unmounted:Ht,activated:Ht,deactivated:Ht,errorCaptured:Ht,serverPrefetch:Ht,components:wi,directives:wi,watch:WR,provide:mm,inject:HR};function mm(t,e){return e?t?function(){return Ct(ve(t)?t.call(this,this):t,ve(e)?e.call(this,this):e)}:e:t}function HR(t,e){return wi(Nh(t),Nh(e))}function Nh(t){if(ce(t)){const e={};for(let n=0;n<t.length;n++)e[t[n]]=t[n];return e}return t}function Ht(t,e){return t?[...new Set([].concat(t,e))]:e}function wi(t,e){return t?Ct(Ct(Object.create(null),t),e):e}function WR(t,e){if(!t)return e;if(!e)return t;const n=Ct(Object.create(null),t);for(const r in e)n[r]=Ht(t[r],e[r]);return n}function zR(t,e,n,r=!1){const s={},a={};_u(a,sl,1),t.propsDefaults=Object.create(null),Sy(t,e,s,a);for(const u in t.propsOptions[0])u in s||(s[u]=void 0);n?t.props=r?s:JS(s):t.type.props?t.props=s:t.props=a,t.attrs=a}function KR(t,e,n,r){const{props:s,attrs:a,vnode:{patchFlag:u}}=t,h=ke(s),[f]=t.propsOptions;let p=!1;if((r||u>0)&&!(u&16)){if(u&8){const v=t.vnode.dynamicProps;for(let E=0;E<v.length;E++){let A=v[E];if(el(t.emitsOptions,A))continue;const L=e[A];if(f)if(Se(a,A))L!==a[A]&&(a[A]=L,p=!0);else{const z=_r(A);s[z]=Dh(f,h,z,L,t,!1)}else L!==a[A]&&(a[A]=L,p=!0)}}}else{Sy(t,e,s,a)&&(p=!0);let v;for(const E in h)(!e||!Se(e,E)&&((v=Pn(E))===E||!Se(e,v)))&&(f?n&&(n[E]!==void 0||n[v]!==void 0)&&(s[E]=Dh(f,h,E,void 0,t,!0)):delete s[E]);if(a!==h)for(const E in a)(!e||!Se(e,E))&&(delete a[E],p=!0)}p&&Ir(t,"set","$attrs")}function Sy(t,e,n,r){const[s,a]=t.propsOptions;let u=!1,h;if(e)for(let f in e){if(lu(f))continue;const p=e[f];let v;s&&Se(s,v=_r(f))?!a||!a.includes(v)?n[v]=p:(h||(h={}))[v]=p:el(t.emitsOptions,f)||(!(f in r)||p!==r[f])&&(r[f]=p,u=!0)}if(a){const f=ke(n),p=h||qe;for(let v=0;v<a.length;v++){const E=a[v];n[E]=Dh(s,f,E,p[E],t,!Se(p,E))}}return u}function Dh(t,e,n,r,s,a){const u=t[n];if(u!=null){const h=Se(u,"default");if(h&&r===void 0){const f=u.default;if(u.type!==Function&&ve(f)){const{propsDefaults:p}=s;n in p?r=p[n]:(ws(s),r=p[n]=f.call(null,e),xi())}else r=f}u[0]&&(a&&!h?r=!1:u[1]&&(r===""||r===Pn(n))&&(r=!0))}return r}function Ry(t,e,n=!1){const r=e.propsCache,s=r.get(t);if(s)return s;const a=t.props,u={},h=[];let f=!1;if(!ve(t)){const v=E=>{f=!0;const[A,L]=Ry(E,e,!0);Ct(u,A),L&&h.push(...L)};!n&&e.mixins.length&&e.mixins.forEach(v),t.extends&&v(t.extends),t.mixins&&t.mixins.forEach(v)}if(!a&&!f)return Je(t)&&r.set(t,hs),hs;if(ce(a))for(let v=0;v<a.length;v++){const E=_r(a[v]);vm(E)&&(u[E]=qe)}else if(a)for(const v in a){const E=_r(v);if(vm(E)){const A=a[v],L=u[E]=ce(A)||ve(A)?{type:A}:Object.assign({},A);if(L){const z=wm(Boolean,L.type),B=wm(String,L.type);L[0]=z>-1,L[1]=B<0||z<B,(z>-1||Se(L,"default"))&&h.push(E)}}}const p=[u,h];return Je(t)&&r.set(t,p),p}function vm(t){return t[0]!=="$"}function ym(t){const e=t&&t.toString().match(/^\s*(function|class) (\w+)/);return e?e[2]:t===null?"null":""}function _m(t,e){return ym(t)===ym(e)}function wm(t,e){return ce(e)?e.findIndex(n=>_m(n,t)):ve(e)&&_m(e,t)?0:-1}const xy=t=>t[0]==="_"||t==="$stable",Sf=t=>ce(t)?t.map(Gn):[Gn(t)],jR=(t,e,n)=>{if(e._n)return e;const r=dR((...s)=>Sf(e(...s)),n);return r._c=!1,r},Oy=(t,e,n)=>{const r=t._ctx;for(const s in t){if(xy(s))continue;const a=t[s];if(ve(a))e[s]=jR(s,a,r);else if(a!=null){const u=Sf(a);e[s]=()=>u}}},Ny=(t,e)=>{const n=Sf(e);t.slots.default=()=>n},qR=(t,e)=>{if(t.vnode.shapeFlag&32){const n=e._;n?(t.slots=ke(e),_u(e,"_",n)):Oy(e,t.slots={})}else t.slots={},e&&Ny(t,e);_u(t.slots,sl,1)},GR=(t,e,n)=>{const{vnode:r,slots:s}=t;let a=!0,u=qe;if(r.shapeFlag&32){const h=e._;h?n&&h===1?a=!1:(Ct(s,e),!n&&h===1&&delete s._):(a=!e.$stable,Oy(e,s)),u=e}else e&&(Ny(t,e),u={default:1});if(a)for(const h in s)!xy(h)&&!(h in u)&&delete s[h]};function Dy(){return{app:null,config:{isNativeTag:gS,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let XR=0;function QR(t,e){return function(r,s=null){ve(r)||(r=Object.assign({},r)),s!=null&&!Je(s)&&(s=null);const a=Dy(),u=new Set;let h=!1;const f=a.app={_uid:XR++,_component:r,_props:s,_container:null,_context:a,_instance:null,version:vx,get config(){return a.config},set config(p){},use(p,...v){return u.has(p)||(p&&ve(p.install)?(u.add(p),p.install(f,...v)):ve(p)&&(u.add(p),p(f,...v))),f},mixin(p){return a.mixins.includes(p)||a.mixins.push(p),f},component(p,v){return v?(a.components[p]=v,f):a.components[p]},directive(p,v){return v?(a.directives[p]=v,f):a.directives[p]},mount(p,v,E){if(!h){const A=$n(r,s);return A.appContext=a,v&&e?e(A,p):t(A,p,E),h=!0,f._container=p,p.__vue_app__=f,Of(A.component)||A.component.proxy}},unmount(){h&&(t(null,f._container),delete f._container.__vue_app__)},provide(p,v){return a.provides[p]=v,f}};return f}}function kh(t,e,n,r,s=!1){if(ce(t)){t.forEach((A,L)=>kh(A,e&&(ce(e)?e[L]:e),n,r,s));return}if(io(r)&&!s)return;const a=r.shapeFlag&4?Of(r.component)||r.component.proxy:r.el,u=s?null:a,{i:h,r:f}=t,p=e&&e.r,v=h.refs===qe?h.refs={}:h.refs,E=h.setupState;if(p!=null&&p!==f&&(lt(p)?(v[p]=null,Se(E,p)&&(E[p]=null)):Wt(p)&&(p.value=null)),ve(f))Qr(f,h,12,[u,v]);else{const A=lt(f),L=Wt(f);if(A||L){const z=()=>{if(t.f){const B=A?Se(E,f)?E[f]:v[f]:f.value;s?ce(B)&&ff(B,a):ce(B)?B.includes(a)||B.push(a):A?(v[f]=[a],Se(E,f)&&(E[f]=v[f])):(f.value=[a],t.k&&(v[t.k]=f.value))}else A?(v[f]=u,Se(E,f)&&(E[f]=u)):L&&(f.value=u,t.k&&(v[t.k]=u))};u?(z.id=-1,Zt(z,n)):z()}}}const Zt=_R;function YR(t){return JR(t)}function JR(t,e){const n=IS();n.__VUE__=!0;const{insert:r,remove:s,patchProp:a,createElement:u,createText:h,createComment:f,setText:p,setElementText:v,parentNode:E,nextSibling:A,setScopeId:L=Bn,insertStaticContent:z}=t,B=(_,T,S,N=null,k=null,M=null,W=!1,$=null,V=!!T.dynamicChildren)=>{if(_===T)return;_&&!Ti(_,T)&&(N=Vi(_),fn(_,k,M,!0),_=null),T.patchFlag===-2&&(V=!1,T.dynamicChildren=null);const{type:D,ref:Y,shapeFlag:q}=T;switch(D){case il:X(_,T,S,N);break;case Cn:te(_,T,S,N);break;case Jc:_==null&&Fe(T,S,N,W);break;case en:hn(_,T,S,N,k,M,W,$,V);break;default:q&1?Ae(_,T,S,N,k,M,W,$,V):q&6?Sn(_,T,S,N,k,M,W,$,V):(q&64||q&128)&&D.process(_,T,S,N,k,M,W,$,V,dn)}Y!=null&&k&&kh(Y,_&&_.ref,M,T||_,!T)},X=(_,T,S,N)=>{if(_==null)r(T.el=h(T.children),S,N);else{const k=T.el=_.el;T.children!==_.children&&p(k,T.children)}},te=(_,T,S,N)=>{_==null?r(T.el=f(T.children||""),S,N):T.el=_.el},Fe=(_,T,S,N)=>{[_.el,_.anchor]=z(_.children,T,S,N,_.el,_.anchor)},G=({el:_,anchor:T},S,N)=>{let k;for(;_&&_!==T;)k=A(_),r(_,S,N),_=k;r(T,S,N)},we=({el:_,anchor:T})=>{let S;for(;_&&_!==T;)S=A(_),s(_),_=S;s(T)},Ae=(_,T,S,N,k,M,W,$,V)=>{W=W||T.type==="svg",_==null?it(T,S,N,k,M,W,$,V):Be(_,T,k,M,W,$,V)},it=(_,T,S,N,k,M,W,$)=>{let V,D;const{type:Y,props:q,shapeFlag:J,transition:ne,dirs:me}=_;if(V=_.el=u(_.type,M,q&&q.is,q),J&8?v(V,_.children):J&16&&se(_.children,V,null,N,k,M&&Y!=="foreignObject",W,$),me&&yi(_,null,N,"created"),Xe(V,_,_.scopeId,W,N),q){for(const Ie in q)Ie!=="value"&&!lu(Ie)&&a(V,Ie,null,q[Ie],M,_.children,N,k,qt);"value"in q&&a(V,"value",null,q.value),(D=q.onVnodeBeforeMount)&&qn(D,N,_)}me&&yi(_,null,N,"beforeMount");const Re=(!k||k&&!k.pendingBranch)&&ne&&!ne.persisted;Re&&ne.beforeEnter(V),r(V,T,S),((D=q&&q.onVnodeMounted)||Re||me)&&Zt(()=>{D&&qn(D,N,_),Re&&ne.enter(V),me&&yi(_,null,N,"mounted")},k)},Xe=(_,T,S,N,k)=>{if(S&&L(_,S),N)for(let M=0;M<N.length;M++)L(_,N[M]);if(k){let M=k.subTree;if(T===M){const W=k.vnode;Xe(_,W,W.scopeId,W.slotScopeIds,k.parent)}}},se=(_,T,S,N,k,M,W,$,V=0)=>{for(let D=V;D<_.length;D++){const Y=_[D]=$?zr(_[D]):Gn(_[D]);B(null,Y,T,S,N,k,M,W,$)}},Be=(_,T,S,N,k,M,W)=>{const $=T.el=_.el;let{patchFlag:V,dynamicChildren:D,dirs:Y}=T;V|=_.patchFlag&16;const q=_.props||qe,J=T.props||qe;let ne;S&&_i(S,!1),(ne=J.onVnodeBeforeUpdate)&&qn(ne,S,T,_),Y&&yi(T,_,S,"beforeUpdate"),S&&_i(S,!0);const me=k&&T.type!=="foreignObject";if(D?$e(_.dynamicChildren,D,$,S,N,me,M):W||Ee(_,T,$,null,S,N,me,M,!1),V>0){if(V&16)Ft($,T,q,J,S,N,k);else if(V&2&&q.class!==J.class&&a($,"class",null,J.class,k),V&4&&a($,"style",q.style,J.style,k),V&8){const Re=T.dynamicProps;for(let Ie=0;Ie<Re.length;Ie++){const Ke=Re[Ie],Ut=q[Ke],Hn=J[Ke];(Hn!==Ut||Ke==="value")&&a($,Ke,Ut,Hn,k,_.children,S,N,qt)}}V&1&&_.children!==T.children&&v($,T.children)}else!W&&D==null&&Ft($,T,q,J,S,N,k);((ne=J.onVnodeUpdated)||Y)&&Zt(()=>{ne&&qn(ne,S,T,_),Y&&yi(T,_,S,"updated")},N)},$e=(_,T,S,N,k,M,W)=>{for(let $=0;$<T.length;$++){const V=_[$],D=T[$],Y=V.el&&(V.type===en||!Ti(V,D)||V.shapeFlag&70)?E(V.el):S;B(V,D,Y,null,N,k,M,W,!0)}},Ft=(_,T,S,N,k,M,W)=>{if(S!==N){if(S!==qe)for(const $ in S)!lu($)&&!($ in N)&&a(_,$,S[$],null,W,T.children,k,M,qt);for(const $ in N){if(lu($))continue;const V=N[$],D=S[$];V!==D&&$!=="value"&&a(_,$,D,V,W,T.children,k,M,qt)}"value"in N&&a(_,"value",S.value,N.value)}},hn=(_,T,S,N,k,M,W,$,V)=>{const D=T.el=_?_.el:h(""),Y=T.anchor=_?_.anchor:h("");let{patchFlag:q,dynamicChildren:J,slotScopeIds:ne}=T;ne&&($=$?$.concat(ne):ne),_==null?(r(D,S,N),r(Y,S,N),se(T.children,S,Y,k,M,W,$,V)):q>0&&q&64&&J&&_.dynamicChildren?($e(_.dynamicChildren,J,S,k,M,W,$),(T.key!=null||k&&T===k.subTree)&&ky(_,T,!0)):Ee(_,T,S,Y,k,M,W,$,V)},Sn=(_,T,S,N,k,M,W,$,V)=>{T.slotScopeIds=$,_==null?T.shapeFlag&512?k.ctx.activate(T,S,N,W,V):xr(T,S,N,k,M,W,V):ta(_,T,V)},xr=(_,T,S,N,k,M,W)=>{const $=_.component=ax(_,N,k);if(nl(_)&&($.ctx.renderer=dn),lx($),$.asyncDep){if(k&&k.registerDep($,yt),!_.el){const V=$.subTree=$n(Cn);te(null,V,T,S)}return}yt($,_,T,S,k,M,W)},ta=(_,T,S)=>{const N=T.component=_.component;if(mR(_,T,S))if(N.asyncDep&&!N.asyncResolved){Ne(N,T,S);return}else N.next=T,aR(N.update),N.update();else T.el=_.el,N.vnode=T},yt=(_,T,S,N,k,M,W)=>{const $=()=>{if(_.isMounted){let{next:Y,bu:q,u:J,parent:ne,vnode:me}=_,Re=Y,Ie;_i(_,!1),Y?(Y.el=me.el,Ne(_,Y,W)):Y=me,q&&qc(q),(Ie=Y.props&&Y.props.onVnodeBeforeUpdate)&&qn(Ie,ne,Y,me),_i(_,!0);const Ke=Gc(_),Ut=_.subTree;_.subTree=Ke,B(Ut,Ke,E(Ut.el),Vi(Ut),_,k,M),Y.el=Ke.el,Re===null&&vR(_,Ke.el),J&&Zt(J,k),(Ie=Y.props&&Y.props.onVnodeUpdated)&&Zt(()=>qn(Ie,ne,Y,me),k)}else{let Y;const{el:q,props:J}=T,{bm:ne,m:me,parent:Re}=_,Ie=io(T);if(_i(_,!1),ne&&qc(ne),!Ie&&(Y=J&&J.onVnodeBeforeMount)&&qn(Y,Re,T),_i(_,!0),q&&Dr){const Ke=()=>{_.subTree=Gc(_),Dr(q,_.subTree,_,k,null)};Ie?T.type.__asyncLoader().then(()=>!_.isUnmounted&&Ke()):Ke()}else{const Ke=_.subTree=Gc(_);B(null,Ke,S,N,_,k,M),T.el=Ke.el}if(me&&Zt(me,k),!Ie&&(Y=J&&J.onVnodeMounted)){const Ke=T;Zt(()=>qn(Y,Re,Ke),k)}(T.shapeFlag&256||Re&&io(Re.vnode)&&Re.vnode.shapeFlag&256)&&_.a&&Zt(_.a,k),_.isMounted=!0,T=S=N=null}},V=_.effect=new mf($,()=>Af(D),_.scope),D=_.update=()=>V.run();D.id=_.uid,_i(_,!0),D()},Ne=(_,T,S)=>{T.component=_;const N=_.vnode.props;_.vnode=T,_.next=null,KR(_,T.props,N,S),GR(_,T.children,S),xs(),hm(),Os()},Ee=(_,T,S,N,k,M,W,$,V=!1)=>{const D=_&&_.children,Y=_?_.shapeFlag:0,q=T.children,{patchFlag:J,shapeFlag:ne}=T;if(J>0){if(J&128){rr(D,q,S,N,k,M,W,$,V);return}else if(J&256){nr(D,q,S,N,k,M,W,$,V);return}}ne&8?(Y&16&&qt(D,k,M),q!==D&&v(S,q)):Y&16?ne&16?rr(D,q,S,N,k,M,W,$,V):qt(D,k,M,!0):(Y&8&&v(S,""),ne&16&&se(q,S,N,k,M,W,$,V))},nr=(_,T,S,N,k,M,W,$,V)=>{_=_||hs,T=T||hs;const D=_.length,Y=T.length,q=Math.min(D,Y);let J;for(J=0;J<q;J++){const ne=T[J]=V?zr(T[J]):Gn(T[J]);B(_[J],ne,S,null,k,M,W,$,V)}D>Y?qt(_,k,M,!0,!1,q):se(T,S,N,k,M,W,$,V,q)},rr=(_,T,S,N,k,M,W,$,V)=>{let D=0;const Y=T.length;let q=_.length-1,J=Y-1;for(;D<=q&&D<=J;){const ne=_[D],me=T[D]=V?zr(T[D]):Gn(T[D]);if(Ti(ne,me))B(ne,me,S,null,k,M,W,$,V);else break;D++}for(;D<=q&&D<=J;){const ne=_[q],me=T[J]=V?zr(T[J]):Gn(T[J]);if(Ti(ne,me))B(ne,me,S,null,k,M,W,$,V);else break;q--,J--}if(D>q){if(D<=J){const ne=J+1,me=ne<Y?T[ne].el:N;for(;D<=J;)B(null,T[D]=V?zr(T[D]):Gn(T[D]),S,me,k,M,W,$,V),D++}}else if(D>J)for(;D<=q;)fn(_[D],k,M,!0),D++;else{const ne=D,me=D,Re=new Map;for(D=me;D<=J;D++){const _t=T[D]=V?zr(T[D]):Gn(T[D]);_t.key!=null&&Re.set(_t.key,D)}let Ie,Ke=0;const Ut=J-me+1;let Hn=!1,Hi=0;const ir=new Array(Ut);for(D=0;D<Ut;D++)ir[D]=0;for(D=ne;D<=q;D++){const _t=_[D];if(Ke>=Ut){fn(_t,k,M,!0);continue}let Gt;if(_t.key!=null)Gt=Re.get(_t.key);else for(Ie=me;Ie<=J;Ie++)if(ir[Ie-me]===0&&Ti(_t,T[Ie])){Gt=Ie;break}Gt===void 0?fn(_t,k,M,!0):(ir[Gt-me]=D+1,Gt>=Hi?Hi=Gt:Hn=!0,B(_t,T[Gt],S,null,k,M,W,$,V),Ke++)}const Wi=Hn?ZR(ir):hs;for(Ie=Wi.length-1,D=Ut-1;D>=0;D--){const _t=me+D,Gt=T[_t],zi=_t+1<Y?T[_t+1].el:N;ir[D]===0?B(null,Gt,S,zi,k,M,W,$,V):Hn&&(Ie<0||D!==Wi[Ie]?ct(Gt,S,zi,2):Ie--)}}},ct=(_,T,S,N,k=null)=>{const{el:M,type:W,transition:$,children:V,shapeFlag:D}=_;if(D&6){ct(_.component.subTree,T,S,N);return}if(D&128){_.suspense.move(T,S,N);return}if(D&64){W.move(_,T,S,dn);return}if(W===en){r(M,T,S);for(let q=0;q<V.length;q++)ct(V[q],T,S,N);r(_.anchor,T,S);return}if(W===Jc){G(_,T,S);return}if(N!==2&&D&1&&$)if(N===0)$.beforeEnter(M),r(M,T,S),Zt(()=>$.enter(M),k);else{const{leave:q,delayLeave:J,afterLeave:ne}=$,me=()=>r(M,T,S),Re=()=>{q(M,()=>{me(),ne&&ne()})};J?J(M,me,Re):Re()}else r(M,T,S)},fn=(_,T,S,N=!1,k=!1)=>{const{type:M,props:W,ref:$,children:V,dynamicChildren:D,shapeFlag:Y,patchFlag:q,dirs:J}=_;if($!=null&&kh($,null,S,_,!0),Y&256){T.ctx.deactivate(_);return}const ne=Y&1&&J,me=!io(_);let Re;if(me&&(Re=W&&W.onVnodeBeforeUnmount)&&qn(Re,T,_),Y&6)Or(_.component,S,N);else{if(Y&128){_.suspense.unmount(S,N);return}ne&&yi(_,null,T,"beforeUnmount"),Y&64?_.type.remove(_,T,S,k,dn,N):D&&(M!==en||q>0&&q&64)?qt(D,T,S,!1,!0):(M===en&&q&384||!k&&Y&16)&&qt(V,T,S),N&&na(_)}(me&&(Re=W&&W.onVnodeUnmounted)||ne)&&Zt(()=>{Re&&qn(Re,T,_),ne&&yi(_,null,T,"unmounted")},S)},na=_=>{const{type:T,el:S,anchor:N,transition:k}=_;if(T===en){kl(S,N);return}if(T===Jc){we(_);return}const M=()=>{s(S),k&&!k.persisted&&k.afterLeave&&k.afterLeave()};if(_.shapeFlag&1&&k&&!k.persisted){const{leave:W,delayLeave:$}=k,V=()=>W(S,M);$?$(_.el,M,V):V()}else M()},kl=(_,T)=>{let S;for(;_!==T;)S=A(_),s(_),_=S;s(T)},Or=(_,T,S)=>{const{bum:N,scope:k,update:M,subTree:W,um:$}=_;N&&qc(N),k.stop(),M&&(M.active=!1,fn(W,_,T,S)),$&&Zt($,T),Zt(()=>{_.isUnmounted=!0},T),T&&T.pendingBranch&&!T.isUnmounted&&_.asyncDep&&!_.asyncResolved&&_.suspenseId===T.pendingId&&(T.deps--,T.deps===0&&T.resolve())},qt=(_,T,S,N=!1,k=!1,M=0)=>{for(let W=M;W<_.length;W++)fn(_[W],T,S,N,k)},Vi=_=>_.shapeFlag&6?Vi(_.component.subTree):_.shapeFlag&128?_.suspense.next():A(_.anchor||_.el),Nr=(_,T,S)=>{_==null?T._vnode&&fn(T._vnode,null,null,!0):B(T._vnode||null,_,T,null,null,null,S),hm(),py(),T._vnode=_},dn={p:B,um:fn,m:ct,r:na,mt:xr,mc:se,pc:Ee,pbc:$e,n:Vi,o:t};let Fs,Dr;return e&&([Fs,Dr]=e(dn)),{render:Nr,hydrate:Fs,createApp:QR(Nr,Fs)}}function _i({effect:t,update:e},n){t.allowRecurse=e.allowRecurse=n}function ky(t,e,n=!1){const r=t.children,s=e.children;if(ce(r)&&ce(s))for(let a=0;a<r.length;a++){const u=r[a];let h=s[a];h.shapeFlag&1&&!h.dynamicChildren&&((h.patchFlag<=0||h.patchFlag===32)&&(h=s[a]=zr(s[a]),h.el=u.el),n||ky(u,h)),h.type===il&&(h.el=u.el)}}function ZR(t){const e=t.slice(),n=[0];let r,s,a,u,h;const f=t.length;for(r=0;r<f;r++){const p=t[r];if(p!==0){if(s=n[n.length-1],t[s]<p){e[r]=s,n.push(r);continue}for(a=0,u=n.length-1;a<u;)h=a+u>>1,t[n[h]]<p?a=h+1:u=h;p<t[n[a]]&&(a>0&&(e[r]=n[a-1]),n[a]=r)}}for(a=n.length,u=n[a-1];a-- >0;)n[a]=u,u=e[u];return n}const ex=t=>t.__isTeleport,en=Symbol(void 0),il=Symbol(void 0),Cn=Symbol(void 0),Jc=Symbol(void 0),oo=[];let Fn=null;function Tn(t=!1){oo.push(Fn=t?null:[])}function tx(){oo.pop(),Fn=oo[oo.length-1]||null}let yo=1;function Em(t){yo+=t}function Py(t){return t.dynamicChildren=yo>0?Fn||hs:null,tx(),yo>0&&Fn&&Fn.push(t),t}function jn(t,e,n,r,s,a){return Py(Le(t,e,n,r,s,a,!0))}function Ly(t,e,n,r,s){return Py($n(t,e,n,r,s,!0))}function My(t){return t?t.__v_isVNode===!0:!1}function Ti(t,e){return t.type===e.type&&t.key===e.key}const sl="__vInternal",Fy=({key:t})=>t??null,hu=({ref:t,ref_key:e,ref_for:n})=>t!=null?lt(t)||Wt(t)||ve(t)?{i:zt,r:t,k:e,f:!!n}:t:null;function Le(t,e=null,n=null,r=0,s=null,a=t===en?0:1,u=!1,h=!1){const f={__v_isVNode:!0,__v_skip:!0,type:t,props:e,key:e&&Fy(e),ref:e&&hu(e),scopeId:tl,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:a,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null,ctx:zt};return h?(xf(f,n),a&128&&t.normalize(f)):n&&(f.shapeFlag|=lt(n)?8:16),yo>0&&!u&&Fn&&(f.patchFlag>0||a&6)&&f.patchFlag!==32&&Fn.push(f),f}const $n=nx;function nx(t,e=null,n=null,r=0,s=null,a=!1){if((!t||t===MR)&&(t=Cn),My(t)){const h=ni(t,e,!0);return n&&xf(h,n),yo>0&&!a&&Fn&&(h.shapeFlag&6?Fn[Fn.indexOf(t)]=h:Fn.push(h)),h.patchFlag|=-2,h}if(dx(t)&&(t=t.__vccOpts),e){e=rx(e);let{class:h,style:f}=e;h&&!lt(h)&&(e.class=po(h)),Je(f)&&(ay(f)&&!ce(f)&&(f=Ct({},f)),e.style=cf(f))}const u=lt(t)?1:yR(t)?128:ex(t)?64:Je(t)?4:ve(t)?2:0;return Le(t,e,n,r,s,u,a,!0)}function rx(t){return t?ay(t)||sl in t?Ct({},t):t:null}function ni(t,e,n=!1){const{props:r,ref:s,patchFlag:a,children:u}=t,h=e?ix(r||{},e):r;return{__v_isVNode:!0,__v_skip:!0,type:t.type,props:h,key:h&&Fy(h),ref:e&&e.ref?n&&s?ce(s)?s.concat(hu(e)):[s,hu(e)]:hu(e):s,scopeId:t.scopeId,slotScopeIds:t.slotScopeIds,children:u,target:t.target,targetAnchor:t.targetAnchor,staticCount:t.staticCount,shapeFlag:t.shapeFlag,patchFlag:e&&t.type!==en?a===-1?16:a|16:a,dynamicProps:t.dynamicProps,dynamicChildren:t.dynamicChildren,appContext:t.appContext,dirs:t.dirs,transition:t.transition,component:t.component,suspense:t.suspense,ssContent:t.ssContent&&ni(t.ssContent),ssFallback:t.ssFallback&&ni(t.ssFallback),el:t.el,anchor:t.anchor,ctx:t.ctx,ce:t.ce}}function Rf(t=" ",e=0){return $n(il,null,t,e)}function Ja(t="",e=!1){return e?(Tn(),Ly(Cn,null,t)):$n(Cn,null,t)}function Gn(t){return t==null||typeof t=="boolean"?$n(Cn):ce(t)?$n(en,null,t.slice()):typeof t=="object"?zr(t):$n(il,null,String(t))}function zr(t){return t.el===null&&t.patchFlag!==-1||t.memo?t:ni(t)}function xf(t,e){let n=0;const{shapeFlag:r}=t;if(e==null)e=null;else if(ce(e))n=16;else if(typeof e=="object")if(r&65){const s=e.default;s&&(s._c&&(s._d=!1),xf(t,s()),s._c&&(s._d=!0));return}else{n=32;const s=e._;!s&&!(sl in e)?e._ctx=zt:s===3&&zt&&(zt.slots._===1?e._=1:(e._=2,t.patchFlag|=1024))}else ve(e)?(e={default:e,_ctx:zt},n=32):(e=String(e),r&64?(n=16,e=[Rf(e)]):n=8);t.children=e,t.shapeFlag|=n}function ix(...t){const e={};for(let n=0;n<t.length;n++){const r=t[n];for(const s in r)if(s==="class")e.class!==r.class&&(e.class=po([e.class,r.class]));else if(s==="style")e.style=cf([e.style,r.style]);else if(Xu(s)){const a=e[s],u=r[s];u&&a!==u&&!(ce(a)&&a.includes(u))&&(e[s]=a?[].concat(a,u):u)}else s!==""&&(e[s]=r[s])}return e}function qn(t,e,n,r=null){An(t,e,7,[n,r])}const sx=Dy();let ox=0;function ax(t,e,n){const r=t.type,s=(e?e.appContext:t.appContext)||sx,a={uid:ox++,vnode:t,type:r,parent:e,appContext:s,root:null,next:null,subTree:null,effect:null,update:null,scope:new TS(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:e?e.provides:Object.create(s.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:Ry(r,s),emitsOptions:my(r,s),emit:null,emitted:null,propsDefaults:qe,inheritAttrs:r.inheritAttrs,ctx:qe,data:qe,props:qe,attrs:qe,slots:qe,refs:qe,setupState:qe,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=e?e.root:a,a.emit=cR.bind(null,a),t.ce&&t.ce(a),a}let ot=null;const ux=()=>ot||zt,ws=t=>{ot=t,t.scope.on()},xi=()=>{ot&&ot.scope.off(),ot=null};function Uy(t){return t.vnode.shapeFlag&4}let _o=!1;function lx(t,e=!1){_o=e;const{props:n,children:r}=t.vnode,s=Uy(t);zR(t,n,s,e),qR(t,r);const a=s?cx(t,e):void 0;return _o=!1,a}function cx(t,e){const n=t.type;t.accessCache=Object.create(null),t.proxy=uy(new Proxy(t.ctx,UR));const{setup:r}=n;if(r){const s=t.setupContext=r.length>1?fx(t):null;ws(t),xs();const a=Qr(r,t,0,[t.props,s]);if(Os(),xi(),jv(a)){if(a.then(xi,xi),e)return a.then(u=>{Im(t,u,e)}).catch(u=>{Zu(u,t,0)});t.asyncDep=a}else Im(t,a,e)}else By(t,e)}function Im(t,e,n){ve(e)?t.type.__ssrInlineRender?t.ssrRender=e:t.render=e:Je(e)&&(t.setupState=ly(e)),By(t,n)}let Tm;function By(t,e,n){const r=t.type;if(!t.render){if(!e&&Tm&&!r.render){const s=r.template||Cf(t).template;if(s){const{isCustomElement:a,compilerOptions:u}=t.appContext.config,{delimiters:h,compilerOptions:f}=r,p=Ct(Ct({isCustomElement:a,delimiters:h},u),f);r.render=Tm(s,p)}}t.render=r.render||Bn}ws(t),xs(),BR(t),Os(),xi()}function hx(t){return new Proxy(t.attrs,{get(e,n){return tn(t,"get","$attrs"),e[n]}})}function fx(t){const e=r=>{t.exposed=r||{}};let n;return{get attrs(){return n||(n=hx(t))},slots:t.slots,emit:t.emit,expose:e}}function Of(t){if(t.exposed)return t.exposeProxy||(t.exposeProxy=new Proxy(ly(uy(t.exposed)),{get(e,n){if(n in e)return e[n];if(n in so)return so[n](t)},has(e,n){return n in e||n in so}}))}function dx(t){return ve(t)&&"__vccOpts"in t}const px=(t,e)=>iR(t,e,_o),gx=Symbol(""),mx=()=>cu(gx),vx="3.2.47",yx="http://www.w3.org/2000/svg",bi=typeof document<"u"?document:null,bm=bi&&bi.createElement("template"),_x={insert:(t,e,n)=>{e.insertBefore(t,n||null)},remove:t=>{const e=t.parentNode;e&&e.removeChild(t)},createElement:(t,e,n,r)=>{const s=e?bi.createElementNS(yx,t):bi.createElement(t,n?{is:n}:void 0);return t==="select"&&r&&r.multiple!=null&&s.setAttribute("multiple",r.multiple),s},createText:t=>bi.createTextNode(t),createComment:t=>bi.createComment(t),setText:(t,e)=>{t.nodeValue=e},setElementText:(t,e)=>{t.textContent=e},parentNode:t=>t.parentNode,nextSibling:t=>t.nextSibling,querySelector:t=>bi.querySelector(t),setScopeId(t,e){t.setAttribute(e,"")},insertStaticContent(t,e,n,r,s,a){const u=n?n.previousSibling:e.lastChild;if(s&&(s===a||s.nextSibling))for(;e.insertBefore(s.cloneNode(!0),n),!(s===a||!(s=s.nextSibling)););else{bm.innerHTML=r?`<svg>${t}</svg>`:t;const h=bm.content;if(r){const f=h.firstChild;for(;f.firstChild;)h.appendChild(f.firstChild);h.removeChild(f)}e.insertBefore(h,n)}return[u?u.nextSibling:e.firstChild,n?n.previousSibling:e.lastChild]}};function wx(t,e,n){const r=t._vtc;r&&(e=(e?[e,...r]:[...r]).join(" ")),e==null?t.removeAttribute("class"):n?t.setAttribute("class",e):t.className=e}function Ex(t,e,n){const r=t.style,s=lt(n);if(n&&!s){if(e&&!lt(e))for(const a in e)n[a]==null&&Ph(r,a,"");for(const a in n)Ph(r,a,n[a])}else{const a=r.display;s?e!==n&&(r.cssText=n):e&&t.removeAttribute("style"),"_vod"in t&&(r.display=a)}}const Am=/\s*!important$/;function Ph(t,e,n){if(ce(n))n.forEach(r=>Ph(t,e,r));else if(n==null&&(n=""),e.startsWith("--"))t.setProperty(e,n);else{const r=Ix(t,e);Am.test(n)?t.setProperty(Pn(r),n.replace(Am,""),"important"):t[r]=n}}const Cm=["Webkit","Moz","ms"],Zc={};function Ix(t,e){const n=Zc[e];if(n)return n;let r=_r(e);if(r!=="filter"&&r in t)return Zc[e]=r;r=Xv(r);for(let s=0;s<Cm.length;s++){const a=Cm[s]+r;if(a in t)return Zc[e]=a}return e}const Sm="http://www.w3.org/1999/xlink";function Tx(t,e,n,r,s){if(r&&e.startsWith("xlink:"))n==null?t.removeAttributeNS(Sm,e.slice(6,e.length)):t.setAttributeNS(Sm,e,n);else{const a=pS(e);n==null||a&&!Wv(n)?t.removeAttribute(e):t.setAttribute(e,a?"":n)}}function bx(t,e,n,r,s,a,u){if(e==="innerHTML"||e==="textContent"){r&&u(r,s,a),t[e]=n??"";return}if(e==="value"&&t.tagName!=="PROGRESS"&&!t.tagName.includes("-")){t._value=n;const f=n??"";(t.value!==f||t.tagName==="OPTION")&&(t.value=f),n==null&&t.removeAttribute(e);return}let h=!1;if(n===""||n==null){const f=typeof t[e];f==="boolean"?n=Wv(n):n==null&&f==="string"?(n="",h=!0):f==="number"&&(n=0,h=!0)}try{t[e]=n}catch{}h&&t.removeAttribute(e)}function Ax(t,e,n,r){t.addEventListener(e,n,r)}function Cx(t,e,n,r){t.removeEventListener(e,n,r)}function Sx(t,e,n,r,s=null){const a=t._vei||(t._vei={}),u=a[e];if(r&&u)u.value=r;else{const[h,f]=Rx(e);if(r){const p=a[e]=Nx(r,s);Ax(t,h,p,f)}else u&&(Cx(t,h,u,f),a[e]=void 0)}}const Rm=/(?:Once|Passive|Capture)$/;function Rx(t){let e;if(Rm.test(t)){e={};let r;for(;r=t.match(Rm);)t=t.slice(0,t.length-r[0].length),e[r[0].toLowerCase()]=!0}return[t[2]===":"?t.slice(3):Pn(t.slice(2)),e]}let eh=0;const xx=Promise.resolve(),Ox=()=>eh||(xx.then(()=>eh=0),eh=Date.now());function Nx(t,e){const n=r=>{if(!r._vts)r._vts=Date.now();else if(r._vts<=n.attached)return;An(Dx(r,n.value),e,5,[r])};return n.value=t,n.attached=Ox(),n}function Dx(t,e){if(ce(e)){const n=t.stopImmediatePropagation;return t.stopImmediatePropagation=()=>{n.call(t),t._stopped=!0},e.map(r=>s=>!s._stopped&&r&&r(s))}else return e}const xm=/^on[a-z]/,kx=(t,e,n,r,s=!1,a,u,h,f)=>{e==="class"?wx(t,r,s):e==="style"?Ex(t,n,r):Xu(e)?hf(e)||Sx(t,e,n,r,u):(e[0]==="."?(e=e.slice(1),!0):e[0]==="^"?(e=e.slice(1),!1):Px(t,e,r,s))?bx(t,e,r,a,u,h,f):(e==="true-value"?t._trueValue=r:e==="false-value"&&(t._falseValue=r),Tx(t,e,r,s))};function Px(t,e,n,r){return r?!!(e==="innerHTML"||e==="textContent"||e in t&&xm.test(e)&&ve(n)):e==="spellcheck"||e==="draggable"||e==="translate"||e==="form"||e==="list"&&t.tagName==="INPUT"||e==="type"&&t.tagName==="TEXTAREA"||xm.test(e)&&lt(n)?!1:e in t}function Lx(t,e){const n=AR(t);class r extends Nf{constructor(a){super(n,a,e)}}return r.def=n,r}const Mx=typeof HTMLElement<"u"?HTMLElement:class{};class Nf extends Mx{constructor(e,n={},r){super(),this._def=e,this._props=n,this._instance=null,this._connected=!1,this._resolved=!1,this._numberProps=null,this.shadowRoot&&r?r(this._createVNode(),this.shadowRoot):(this.attachShadow({mode:"open"}),this._def.__asyncLoader||this._resolveProps(this._def))}connectedCallback(){this._connected=!0,this._instance||(this._resolved?this._update():this._resolveDef())}disconnectedCallback(){this._connected=!1,fy(()=>{this._connected||(Nm(null,this.shadowRoot),this._instance=null)})}_resolveDef(){this._resolved=!0;for(let r=0;r<this.attributes.length;r++)this._setAttr(this.attributes[r].name);new MutationObserver(r=>{for(const s of r)this._setAttr(s.attributeName)}).observe(this,{attributes:!0});const e=(r,s=!1)=>{const{props:a,styles:u}=r;let h;if(a&&!ce(a))for(const f in a){const p=a[f];(p===Number||p&&p.type===Number)&&(f in this._props&&(this._props[f]=nm(this._props[f])),(h||(h=Object.create(null)))[_r(f)]=!0)}this._numberProps=h,s&&this._resolveProps(r),this._applyStyles(u),this._update()},n=this._def.__asyncLoader;n?n().then(r=>e(r,!0)):e(this._def)}_resolveProps(e){const{props:n}=e,r=ce(n)?n:Object.keys(n||{});for(const s of Object.keys(this))s[0]!=="_"&&r.includes(s)&&this._setProp(s,this[s],!0,!1);for(const s of r.map(_r))Object.defineProperty(this,s,{get(){return this._getProp(s)},set(a){this._setProp(s,a)}})}_setAttr(e){let n=this.getAttribute(e);const r=_r(e);this._numberProps&&this._numberProps[r]&&(n=nm(n)),this._setProp(r,n,!1)}_getProp(e){return this._props[e]}_setProp(e,n,r=!0,s=!0){n!==this._props[e]&&(this._props[e]=n,s&&this._instance&&this._update(),r&&(n===!0?this.setAttribute(Pn(e),""):typeof n=="string"||typeof n=="number"?this.setAttribute(Pn(e),n+""):n||this.removeAttribute(Pn(e))))}_update(){Nm(this._createVNode(),this.shadowRoot)}_createVNode(){const e=$n(this._def,Ct({},this._props));return this._instance||(e.ce=n=>{this._instance=n,n.isCE=!0;const r=(a,u)=>{this.dispatchEvent(new CustomEvent(a,{detail:u}))};n.emit=(a,...u)=>{r(a,u),Pn(a)!==a&&r(Pn(a),u)};let s=this;for(;s=s&&(s.parentNode||s.host);)if(s instanceof Nf){n.parent=s._instance,n.provides=s._instance.provides;break}}),e}_applyStyles(e){e&&e.forEach(n=>{const r=document.createElement("style");r.textContent=n,this.shadowRoot.appendChild(r)})}}const Fx={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String};bR.props;const Ux=Ct({patchProp:kx},_x);let Om;function Bx(){return Om||(Om=YR(Ux))}const Nm=(...t)=>{Bx().render(...t)};var os=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},wo={},$x={get exports(){return wo},set exports(t){wo=t}};/**
 * @license
 * Lodash <https://lodash.com/>
 * Copyright OpenJS Foundation and other contributors <https://openjsf.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */(function(t,e){(function(){var n,r="4.17.21",s=200,a="Unsupported core-js use. Try https://npms.io/search?q=ponyfill.",u="Expected a function",h="Invalid `variable` option passed into `_.template`",f="__lodash_hash_undefined__",p=500,v="__lodash_placeholder__",E=1,A=2,L=4,z=1,B=2,X=1,te=2,Fe=4,G=8,we=16,Ae=32,it=64,Xe=128,se=256,Be=512,$e=30,Ft="...",hn=800,Sn=16,xr=1,ta=2,yt=3,Ne=1/0,Ee=9007199254740991,nr=17976931348623157e292,rr=0/0,ct=4294967295,fn=ct-1,na=ct>>>1,kl=[["ary",Xe],["bind",X],["bindKey",te],["curry",G],["curryRight",we],["flip",Be],["partial",Ae],["partialRight",it],["rearg",se]],Or="[object Arguments]",qt="[object Array]",Vi="[object AsyncFunction]",Nr="[object Boolean]",dn="[object Date]",Fs="[object DOMException]",Dr="[object Error]",_="[object Function]",T="[object GeneratorFunction]",S="[object Map]",N="[object Number]",k="[object Null]",M="[object Object]",W="[object Promise]",$="[object Proxy]",V="[object RegExp]",D="[object Set]",Y="[object String]",q="[object Symbol]",J="[object Undefined]",ne="[object WeakMap]",me="[object WeakSet]",Re="[object ArrayBuffer]",Ie="[object DataView]",Ke="[object Float32Array]",Ut="[object Float64Array]",Hn="[object Int8Array]",Hi="[object Int16Array]",ir="[object Int32Array]",Wi="[object Uint8Array]",_t="[object Uint8ClampedArray]",Gt="[object Uint16Array]",zi="[object Uint32Array]",Ow=/\b__p \+= '';/g,Nw=/\b(__p \+=) '' \+/g,Dw=/(__e\(.*?\)|\b__t\)) \+\n'';/g,Sd=/&(?:amp|lt|gt|quot|#39);/g,Rd=/[&<>"']/g,kw=RegExp(Sd.source),Pw=RegExp(Rd.source),Lw=/<%-([\s\S]+?)%>/g,Mw=/<%([\s\S]+?)%>/g,xd=/<%=([\s\S]+?)%>/g,Fw=/\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,Uw=/^\w*$/,Bw=/[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g,Pl=/[\\^$.*+?()[\]{}|]/g,$w=RegExp(Pl.source),Ll=/^\s+/,Vw=/\s/,Hw=/\{(?:\n\/\* \[wrapped with .+\] \*\/)?\n?/,Ww=/\{\n\/\* \[wrapped with (.+)\] \*/,zw=/,? & /,Kw=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g,jw=/[()=,{}\[\]\/\s]/,qw=/\\(\\)?/g,Gw=/\$\{([^\\}]*(?:\\.[^\\}]*)*)\}/g,Od=/\w*$/,Xw=/^[-+]0x[0-9a-f]+$/i,Qw=/^0b[01]+$/i,Yw=/^\[object .+?Constructor\]$/,Jw=/^0o[0-7]+$/i,Zw=/^(?:0|[1-9]\d*)$/,eE=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,ra=/($^)/,tE=/['\n\r\u2028\u2029\\]/g,ia="\\ud800-\\udfff",nE="\\u0300-\\u036f",rE="\\ufe20-\\ufe2f",iE="\\u20d0-\\u20ff",Nd=nE+rE+iE,Dd="\\u2700-\\u27bf",kd="a-z\\xdf-\\xf6\\xf8-\\xff",sE="\\xac\\xb1\\xd7\\xf7",oE="\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf",aE="\\u2000-\\u206f",uE=" \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Pd="A-Z\\xc0-\\xd6\\xd8-\\xde",Ld="\\ufe0e\\ufe0f",Md=sE+oE+aE+uE,Ml="['’]",lE="["+ia+"]",Fd="["+Md+"]",sa="["+Nd+"]",Ud="\\d+",cE="["+Dd+"]",Bd="["+kd+"]",$d="[^"+ia+Md+Ud+Dd+kd+Pd+"]",Fl="\\ud83c[\\udffb-\\udfff]",hE="(?:"+sa+"|"+Fl+")",Vd="[^"+ia+"]",Ul="(?:\\ud83c[\\udde6-\\uddff]){2}",Bl="[\\ud800-\\udbff][\\udc00-\\udfff]",Ki="["+Pd+"]",Hd="\\u200d",Wd="(?:"+Bd+"|"+$d+")",fE="(?:"+Ki+"|"+$d+")",zd="(?:"+Ml+"(?:d|ll|m|re|s|t|ve))?",Kd="(?:"+Ml+"(?:D|LL|M|RE|S|T|VE))?",jd=hE+"?",qd="["+Ld+"]?",dE="(?:"+Hd+"(?:"+[Vd,Ul,Bl].join("|")+")"+qd+jd+")*",pE="\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",gE="\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])",Gd=qd+jd+dE,mE="(?:"+[cE,Ul,Bl].join("|")+")"+Gd,vE="(?:"+[Vd+sa+"?",sa,Ul,Bl,lE].join("|")+")",yE=RegExp(Ml,"g"),_E=RegExp(sa,"g"),$l=RegExp(Fl+"(?="+Fl+")|"+vE+Gd,"g"),wE=RegExp([Ki+"?"+Bd+"+"+zd+"(?="+[Fd,Ki,"$"].join("|")+")",fE+"+"+Kd+"(?="+[Fd,Ki+Wd,"$"].join("|")+")",Ki+"?"+Wd+"+"+zd,Ki+"+"+Kd,gE,pE,Ud,mE].join("|"),"g"),EE=RegExp("["+Hd+ia+Nd+Ld+"]"),IE=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/,TE=["Array","Buffer","DataView","Date","Error","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Math","Object","Promise","RegExp","Set","String","Symbol","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","WeakMap","_","clearTimeout","isFinite","parseInt","setTimeout"],bE=-1,We={};We[Ke]=We[Ut]=We[Hn]=We[Hi]=We[ir]=We[Wi]=We[_t]=We[Gt]=We[zi]=!0,We[Or]=We[qt]=We[Re]=We[Nr]=We[Ie]=We[dn]=We[Dr]=We[_]=We[S]=We[N]=We[M]=We[V]=We[D]=We[Y]=We[ne]=!1;var Ve={};Ve[Or]=Ve[qt]=Ve[Re]=Ve[Ie]=Ve[Nr]=Ve[dn]=Ve[Ke]=Ve[Ut]=Ve[Hn]=Ve[Hi]=Ve[ir]=Ve[S]=Ve[N]=Ve[M]=Ve[V]=Ve[D]=Ve[Y]=Ve[q]=Ve[Wi]=Ve[_t]=Ve[Gt]=Ve[zi]=!0,Ve[Dr]=Ve[_]=Ve[ne]=!1;var AE={À:"A",Á:"A",Â:"A",Ã:"A",Ä:"A",Å:"A",à:"a",á:"a",â:"a",ã:"a",ä:"a",å:"a",Ç:"C",ç:"c",Ð:"D",ð:"d",È:"E",É:"E",Ê:"E",Ë:"E",è:"e",é:"e",ê:"e",ë:"e",Ì:"I",Í:"I",Î:"I",Ï:"I",ì:"i",í:"i",î:"i",ï:"i",Ñ:"N",ñ:"n",Ò:"O",Ó:"O",Ô:"O",Õ:"O",Ö:"O",Ø:"O",ò:"o",ó:"o",ô:"o",õ:"o",ö:"o",ø:"o",Ù:"U",Ú:"U",Û:"U",Ü:"U",ù:"u",ú:"u",û:"u",ü:"u",Ý:"Y",ý:"y",ÿ:"y",Æ:"Ae",æ:"ae",Þ:"Th",þ:"th",ß:"ss",Ā:"A",Ă:"A",Ą:"A",ā:"a",ă:"a",ą:"a",Ć:"C",Ĉ:"C",Ċ:"C",Č:"C",ć:"c",ĉ:"c",ċ:"c",č:"c",Ď:"D",Đ:"D",ď:"d",đ:"d",Ē:"E",Ĕ:"E",Ė:"E",Ę:"E",Ě:"E",ē:"e",ĕ:"e",ė:"e",ę:"e",ě:"e",Ĝ:"G",Ğ:"G",Ġ:"G",Ģ:"G",ĝ:"g",ğ:"g",ġ:"g",ģ:"g",Ĥ:"H",Ħ:"H",ĥ:"h",ħ:"h",Ĩ:"I",Ī:"I",Ĭ:"I",Į:"I",İ:"I",ĩ:"i",ī:"i",ĭ:"i",į:"i",ı:"i",Ĵ:"J",ĵ:"j",Ķ:"K",ķ:"k",ĸ:"k",Ĺ:"L",Ļ:"L",Ľ:"L",Ŀ:"L",Ł:"L",ĺ:"l",ļ:"l",ľ:"l",ŀ:"l",ł:"l",Ń:"N",Ņ:"N",Ň:"N",Ŋ:"N",ń:"n",ņ:"n",ň:"n",ŋ:"n",Ō:"O",Ŏ:"O",Ő:"O",ō:"o",ŏ:"o",ő:"o",Ŕ:"R",Ŗ:"R",Ř:"R",ŕ:"r",ŗ:"r",ř:"r",Ś:"S",Ŝ:"S",Ş:"S",Š:"S",ś:"s",ŝ:"s",ş:"s",š:"s",Ţ:"T",Ť:"T",Ŧ:"T",ţ:"t",ť:"t",ŧ:"t",Ũ:"U",Ū:"U",Ŭ:"U",Ů:"U",Ű:"U",Ų:"U",ũ:"u",ū:"u",ŭ:"u",ů:"u",ű:"u",ų:"u",Ŵ:"W",ŵ:"w",Ŷ:"Y",ŷ:"y",Ÿ:"Y",Ź:"Z",Ż:"Z",Ž:"Z",ź:"z",ż:"z",ž:"z",Ĳ:"IJ",ĳ:"ij",Œ:"Oe",œ:"oe",ŉ:"'n",ſ:"s"},CE={"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;"},SE={"&amp;":"&","&lt;":"<","&gt;":">","&quot;":'"',"&#39;":"'"},RE={"\\":"\\","'":"'","\n":"n","\r":"r","\u2028":"u2028","\u2029":"u2029"},xE=parseFloat,OE=parseInt,Xd=typeof os=="object"&&os&&os.Object===Object&&os,NE=typeof self=="object"&&self&&self.Object===Object&&self,wt=Xd||NE||Function("return this")(),Vl=e&&!e.nodeType&&e,li=Vl&&!0&&t&&!t.nodeType&&t,Qd=li&&li.exports===Vl,Hl=Qd&&Xd.process,pn=function(){try{var I=li&&li.require&&li.require("util").types;return I||Hl&&Hl.binding&&Hl.binding("util")}catch{}}(),Yd=pn&&pn.isArrayBuffer,Jd=pn&&pn.isDate,Zd=pn&&pn.isMap,ep=pn&&pn.isRegExp,tp=pn&&pn.isSet,np=pn&&pn.isTypedArray;function rn(I,R,C){switch(C.length){case 0:return I.call(R);case 1:return I.call(R,C[0]);case 2:return I.call(R,C[0],C[1]);case 3:return I.call(R,C[0],C[1],C[2])}return I.apply(R,C)}function DE(I,R,C,j){for(var ue=-1,Oe=I==null?0:I.length;++ue<Oe;){var at=I[ue];R(j,at,C(at),I)}return j}function gn(I,R){for(var C=-1,j=I==null?0:I.length;++C<j&&R(I[C],C,I)!==!1;);return I}function kE(I,R){for(var C=I==null?0:I.length;C--&&R(I[C],C,I)!==!1;);return I}function rp(I,R){for(var C=-1,j=I==null?0:I.length;++C<j;)if(!R(I[C],C,I))return!1;return!0}function kr(I,R){for(var C=-1,j=I==null?0:I.length,ue=0,Oe=[];++C<j;){var at=I[C];R(at,C,I)&&(Oe[ue++]=at)}return Oe}function oa(I,R){var C=I==null?0:I.length;return!!C&&ji(I,R,0)>-1}function Wl(I,R,C){for(var j=-1,ue=I==null?0:I.length;++j<ue;)if(C(R,I[j]))return!0;return!1}function je(I,R){for(var C=-1,j=I==null?0:I.length,ue=Array(j);++C<j;)ue[C]=R(I[C],C,I);return ue}function Pr(I,R){for(var C=-1,j=R.length,ue=I.length;++C<j;)I[ue+C]=R[C];return I}function zl(I,R,C,j){var ue=-1,Oe=I==null?0:I.length;for(j&&Oe&&(C=I[++ue]);++ue<Oe;)C=R(C,I[ue],ue,I);return C}function PE(I,R,C,j){var ue=I==null?0:I.length;for(j&&ue&&(C=I[--ue]);ue--;)C=R(C,I[ue],ue,I);return C}function Kl(I,R){for(var C=-1,j=I==null?0:I.length;++C<j;)if(R(I[C],C,I))return!0;return!1}var LE=jl("length");function ME(I){return I.split("")}function FE(I){return I.match(Kw)||[]}function ip(I,R,C){var j;return C(I,function(ue,Oe,at){if(R(ue,Oe,at))return j=Oe,!1}),j}function aa(I,R,C,j){for(var ue=I.length,Oe=C+(j?1:-1);j?Oe--:++Oe<ue;)if(R(I[Oe],Oe,I))return Oe;return-1}function ji(I,R,C){return R===R?XE(I,R,C):aa(I,sp,C)}function UE(I,R,C,j){for(var ue=C-1,Oe=I.length;++ue<Oe;)if(j(I[ue],R))return ue;return-1}function sp(I){return I!==I}function op(I,R){var C=I==null?0:I.length;return C?Gl(I,R)/C:rr}function jl(I){return function(R){return R==null?n:R[I]}}function ql(I){return function(R){return I==null?n:I[R]}}function ap(I,R,C,j,ue){return ue(I,function(Oe,at,Ue){C=j?(j=!1,Oe):R(C,Oe,at,Ue)}),C}function BE(I,R){var C=I.length;for(I.sort(R);C--;)I[C]=I[C].value;return I}function Gl(I,R){for(var C,j=-1,ue=I.length;++j<ue;){var Oe=R(I[j]);Oe!==n&&(C=C===n?Oe:C+Oe)}return C}function Xl(I,R){for(var C=-1,j=Array(I);++C<I;)j[C]=R(C);return j}function $E(I,R){return je(R,function(C){return[C,I[C]]})}function up(I){return I&&I.slice(0,fp(I)+1).replace(Ll,"")}function sn(I){return function(R){return I(R)}}function Ql(I,R){return je(R,function(C){return I[C]})}function Us(I,R){return I.has(R)}function lp(I,R){for(var C=-1,j=I.length;++C<j&&ji(R,I[C],0)>-1;);return C}function cp(I,R){for(var C=I.length;C--&&ji(R,I[C],0)>-1;);return C}function VE(I,R){for(var C=I.length,j=0;C--;)I[C]===R&&++j;return j}var HE=ql(AE),WE=ql(CE);function zE(I){return"\\"+RE[I]}function KE(I,R){return I==null?n:I[R]}function qi(I){return EE.test(I)}function jE(I){return IE.test(I)}function qE(I){for(var R,C=[];!(R=I.next()).done;)C.push(R.value);return C}function Yl(I){var R=-1,C=Array(I.size);return I.forEach(function(j,ue){C[++R]=[ue,j]}),C}function hp(I,R){return function(C){return I(R(C))}}function Lr(I,R){for(var C=-1,j=I.length,ue=0,Oe=[];++C<j;){var at=I[C];(at===R||at===v)&&(I[C]=v,Oe[ue++]=C)}return Oe}function ua(I){var R=-1,C=Array(I.size);return I.forEach(function(j){C[++R]=j}),C}function GE(I){var R=-1,C=Array(I.size);return I.forEach(function(j){C[++R]=[j,j]}),C}function XE(I,R,C){for(var j=C-1,ue=I.length;++j<ue;)if(I[j]===R)return j;return-1}function QE(I,R,C){for(var j=C+1;j--;)if(I[j]===R)return j;return j}function Gi(I){return qi(I)?JE(I):LE(I)}function Rn(I){return qi(I)?ZE(I):ME(I)}function fp(I){for(var R=I.length;R--&&Vw.test(I.charAt(R)););return R}var YE=ql(SE);function JE(I){for(var R=$l.lastIndex=0;$l.test(I);)++R;return R}function ZE(I){return I.match($l)||[]}function e1(I){return I.match(wE)||[]}var t1=function I(R){R=R==null?wt:Xi.defaults(wt.Object(),R,Xi.pick(wt,TE));var C=R.Array,j=R.Date,ue=R.Error,Oe=R.Function,at=R.Math,Ue=R.Object,Jl=R.RegExp,n1=R.String,mn=R.TypeError,la=C.prototype,r1=Oe.prototype,Qi=Ue.prototype,ca=R["__core-js_shared__"],ha=r1.toString,Pe=Qi.hasOwnProperty,i1=0,dp=function(){var i=/[^.]+$/.exec(ca&&ca.keys&&ca.keys.IE_PROTO||"");return i?"Symbol(src)_1."+i:""}(),fa=Qi.toString,s1=ha.call(Ue),o1=wt._,a1=Jl("^"+ha.call(Pe).replace(Pl,"\\$&").replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g,"$1.*?")+"$"),da=Qd?R.Buffer:n,Mr=R.Symbol,pa=R.Uint8Array,pp=da?da.allocUnsafe:n,ga=hp(Ue.getPrototypeOf,Ue),gp=Ue.create,mp=Qi.propertyIsEnumerable,ma=la.splice,vp=Mr?Mr.isConcatSpreadable:n,Bs=Mr?Mr.iterator:n,ci=Mr?Mr.toStringTag:n,va=function(){try{var i=gi(Ue,"defineProperty");return i({},"",{}),i}catch{}}(),u1=R.clearTimeout!==wt.clearTimeout&&R.clearTimeout,l1=j&&j.now!==wt.Date.now&&j.now,c1=R.setTimeout!==wt.setTimeout&&R.setTimeout,ya=at.ceil,_a=at.floor,Zl=Ue.getOwnPropertySymbols,h1=da?da.isBuffer:n,yp=R.isFinite,f1=la.join,d1=hp(Ue.keys,Ue),ut=at.max,St=at.min,p1=j.now,g1=R.parseInt,_p=at.random,m1=la.reverse,ec=gi(R,"DataView"),$s=gi(R,"Map"),tc=gi(R,"Promise"),Yi=gi(R,"Set"),Vs=gi(R,"WeakMap"),Hs=gi(Ue,"create"),wa=Vs&&new Vs,Ji={},v1=mi(ec),y1=mi($s),_1=mi(tc),w1=mi(Yi),E1=mi(Vs),Ea=Mr?Mr.prototype:n,Ws=Ea?Ea.valueOf:n,wp=Ea?Ea.toString:n;function g(i){if(Ze(i)&&!he(i)&&!(i instanceof _e)){if(i instanceof vn)return i;if(Pe.call(i,"__wrapped__"))return Eg(i)}return new vn(i)}var Zi=function(){function i(){}return function(o){if(!Qe(o))return{};if(gp)return gp(o);i.prototype=o;var l=new i;return i.prototype=n,l}}();function Ia(){}function vn(i,o){this.__wrapped__=i,this.__actions__=[],this.__chain__=!!o,this.__index__=0,this.__values__=n}g.templateSettings={escape:Lw,evaluate:Mw,interpolate:xd,variable:"",imports:{_:g}},g.prototype=Ia.prototype,g.prototype.constructor=g,vn.prototype=Zi(Ia.prototype),vn.prototype.constructor=vn;function _e(i){this.__wrapped__=i,this.__actions__=[],this.__dir__=1,this.__filtered__=!1,this.__iteratees__=[],this.__takeCount__=ct,this.__views__=[]}function I1(){var i=new _e(this.__wrapped__);return i.__actions__=Xt(this.__actions__),i.__dir__=this.__dir__,i.__filtered__=this.__filtered__,i.__iteratees__=Xt(this.__iteratees__),i.__takeCount__=this.__takeCount__,i.__views__=Xt(this.__views__),i}function T1(){if(this.__filtered__){var i=new _e(this);i.__dir__=-1,i.__filtered__=!0}else i=this.clone(),i.__dir__*=-1;return i}function b1(){var i=this.__wrapped__.value(),o=this.__dir__,l=he(i),c=o<0,d=l?i.length:0,m=MI(0,d,this.__views__),y=m.start,w=m.end,b=w-y,x=c?w:y-1,O=this.__iteratees__,P=O.length,H=0,Q=St(b,this.__takeCount__);if(!l||!c&&d==b&&Q==b)return zp(i,this.__actions__);var re=[];e:for(;b--&&H<Q;){x+=o;for(var de=-1,ie=i[x];++de<P;){var ye=O[de],Te=ye.iteratee,un=ye.type,Vt=Te(ie);if(un==ta)ie=Vt;else if(!Vt){if(un==xr)continue e;break e}}re[H++]=ie}return re}_e.prototype=Zi(Ia.prototype),_e.prototype.constructor=_e;function hi(i){var o=-1,l=i==null?0:i.length;for(this.clear();++o<l;){var c=i[o];this.set(c[0],c[1])}}function A1(){this.__data__=Hs?Hs(null):{},this.size=0}function C1(i){var o=this.has(i)&&delete this.__data__[i];return this.size-=o?1:0,o}function S1(i){var o=this.__data__;if(Hs){var l=o[i];return l===f?n:l}return Pe.call(o,i)?o[i]:n}function R1(i){var o=this.__data__;return Hs?o[i]!==n:Pe.call(o,i)}function x1(i,o){var l=this.__data__;return this.size+=this.has(i)?0:1,l[i]=Hs&&o===n?f:o,this}hi.prototype.clear=A1,hi.prototype.delete=C1,hi.prototype.get=S1,hi.prototype.has=R1,hi.prototype.set=x1;function sr(i){var o=-1,l=i==null?0:i.length;for(this.clear();++o<l;){var c=i[o];this.set(c[0],c[1])}}function O1(){this.__data__=[],this.size=0}function N1(i){var o=this.__data__,l=Ta(o,i);if(l<0)return!1;var c=o.length-1;return l==c?o.pop():ma.call(o,l,1),--this.size,!0}function D1(i){var o=this.__data__,l=Ta(o,i);return l<0?n:o[l][1]}function k1(i){return Ta(this.__data__,i)>-1}function P1(i,o){var l=this.__data__,c=Ta(l,i);return c<0?(++this.size,l.push([i,o])):l[c][1]=o,this}sr.prototype.clear=O1,sr.prototype.delete=N1,sr.prototype.get=D1,sr.prototype.has=k1,sr.prototype.set=P1;function or(i){var o=-1,l=i==null?0:i.length;for(this.clear();++o<l;){var c=i[o];this.set(c[0],c[1])}}function L1(){this.size=0,this.__data__={hash:new hi,map:new($s||sr),string:new hi}}function M1(i){var o=La(this,i).delete(i);return this.size-=o?1:0,o}function F1(i){return La(this,i).get(i)}function U1(i){return La(this,i).has(i)}function B1(i,o){var l=La(this,i),c=l.size;return l.set(i,o),this.size+=l.size==c?0:1,this}or.prototype.clear=L1,or.prototype.delete=M1,or.prototype.get=F1,or.prototype.has=U1,or.prototype.set=B1;function fi(i){var o=-1,l=i==null?0:i.length;for(this.__data__=new or;++o<l;)this.add(i[o])}function $1(i){return this.__data__.set(i,f),this}function V1(i){return this.__data__.has(i)}fi.prototype.add=fi.prototype.push=$1,fi.prototype.has=V1;function xn(i){var o=this.__data__=new sr(i);this.size=o.size}function H1(){this.__data__=new sr,this.size=0}function W1(i){var o=this.__data__,l=o.delete(i);return this.size=o.size,l}function z1(i){return this.__data__.get(i)}function K1(i){return this.__data__.has(i)}function j1(i,o){var l=this.__data__;if(l instanceof sr){var c=l.__data__;if(!$s||c.length<s-1)return c.push([i,o]),this.size=++l.size,this;l=this.__data__=new or(c)}return l.set(i,o),this.size=l.size,this}xn.prototype.clear=H1,xn.prototype.delete=W1,xn.prototype.get=z1,xn.prototype.has=K1,xn.prototype.set=j1;function Ep(i,o){var l=he(i),c=!l&&vi(i),d=!l&&!c&&Vr(i),m=!l&&!c&&!d&&rs(i),y=l||c||d||m,w=y?Xl(i.length,n1):[],b=w.length;for(var x in i)(o||Pe.call(i,x))&&!(y&&(x=="length"||d&&(x=="offset"||x=="parent")||m&&(x=="buffer"||x=="byteLength"||x=="byteOffset")||cr(x,b)))&&w.push(x);return w}function Ip(i){var o=i.length;return o?i[fc(0,o-1)]:n}function q1(i,o){return Ma(Xt(i),di(o,0,i.length))}function G1(i){return Ma(Xt(i))}function nc(i,o,l){(l!==n&&!On(i[o],l)||l===n&&!(o in i))&&ar(i,o,l)}function zs(i,o,l){var c=i[o];(!(Pe.call(i,o)&&On(c,l))||l===n&&!(o in i))&&ar(i,o,l)}function Ta(i,o){for(var l=i.length;l--;)if(On(i[l][0],o))return l;return-1}function X1(i,o,l,c){return Fr(i,function(d,m,y){o(c,d,l(d),y)}),c}function Tp(i,o){return i&&zn(o,ht(o),i)}function Q1(i,o){return i&&zn(o,Yt(o),i)}function ar(i,o,l){o=="__proto__"&&va?va(i,o,{configurable:!0,enumerable:!0,value:l,writable:!0}):i[o]=l}function rc(i,o){for(var l=-1,c=o.length,d=C(c),m=i==null;++l<c;)d[l]=m?n:Fc(i,o[l]);return d}function di(i,o,l){return i===i&&(l!==n&&(i=i<=l?i:l),o!==n&&(i=i>=o?i:o)),i}function yn(i,o,l,c,d,m){var y,w=o&E,b=o&A,x=o&L;if(l&&(y=d?l(i,c,d,m):l(i)),y!==n)return y;if(!Qe(i))return i;var O=he(i);if(O){if(y=UI(i),!w)return Xt(i,y)}else{var P=Rt(i),H=P==_||P==T;if(Vr(i))return qp(i,w);if(P==M||P==Or||H&&!d){if(y=b||H?{}:fg(i),!w)return b?SI(i,Q1(y,i)):CI(i,Tp(y,i))}else{if(!Ve[P])return d?i:{};y=BI(i,P,w)}}m||(m=new xn);var Q=m.get(i);if(Q)return Q;m.set(i,y),Vg(i)?i.forEach(function(ie){y.add(yn(ie,o,l,ie,i,m))}):Bg(i)&&i.forEach(function(ie,ye){y.set(ye,yn(ie,o,l,ye,i,m))});var re=x?b?Tc:Ic:b?Yt:ht,de=O?n:re(i);return gn(de||i,function(ie,ye){de&&(ye=ie,ie=i[ye]),zs(y,ye,yn(ie,o,l,ye,i,m))}),y}function Y1(i){var o=ht(i);return function(l){return bp(l,i,o)}}function bp(i,o,l){var c=l.length;if(i==null)return!c;for(i=Ue(i);c--;){var d=l[c],m=o[d],y=i[d];if(y===n&&!(d in i)||!m(y))return!1}return!0}function Ap(i,o,l){if(typeof i!="function")throw new mn(u);return Ys(function(){i.apply(n,l)},o)}function Ks(i,o,l,c){var d=-1,m=oa,y=!0,w=i.length,b=[],x=o.length;if(!w)return b;l&&(o=je(o,sn(l))),c?(m=Wl,y=!1):o.length>=s&&(m=Us,y=!1,o=new fi(o));e:for(;++d<w;){var O=i[d],P=l==null?O:l(O);if(O=c||O!==0?O:0,y&&P===P){for(var H=x;H--;)if(o[H]===P)continue e;b.push(O)}else m(o,P,c)||b.push(O)}return b}var Fr=Jp(Wn),Cp=Jp(sc,!0);function J1(i,o){var l=!0;return Fr(i,function(c,d,m){return l=!!o(c,d,m),l}),l}function ba(i,o,l){for(var c=-1,d=i.length;++c<d;){var m=i[c],y=o(m);if(y!=null&&(w===n?y===y&&!an(y):l(y,w)))var w=y,b=m}return b}function Z1(i,o,l,c){var d=i.length;for(l=fe(l),l<0&&(l=-l>d?0:d+l),c=c===n||c>d?d:fe(c),c<0&&(c+=d),c=l>c?0:Wg(c);l<c;)i[l++]=o;return i}function Sp(i,o){var l=[];return Fr(i,function(c,d,m){o(c,d,m)&&l.push(c)}),l}function Et(i,o,l,c,d){var m=-1,y=i.length;for(l||(l=VI),d||(d=[]);++m<y;){var w=i[m];o>0&&l(w)?o>1?Et(w,o-1,l,c,d):Pr(d,w):c||(d[d.length]=w)}return d}var ic=Zp(),Rp=Zp(!0);function Wn(i,o){return i&&ic(i,o,ht)}function sc(i,o){return i&&Rp(i,o,ht)}function Aa(i,o){return kr(o,function(l){return hr(i[l])})}function pi(i,o){o=Br(o,i);for(var l=0,c=o.length;i!=null&&l<c;)i=i[Kn(o[l++])];return l&&l==c?i:n}function xp(i,o,l){var c=o(i);return he(i)?c:Pr(c,l(i))}function Bt(i){return i==null?i===n?J:k:ci&&ci in Ue(i)?LI(i):GI(i)}function oc(i,o){return i>o}function eI(i,o){return i!=null&&Pe.call(i,o)}function tI(i,o){return i!=null&&o in Ue(i)}function nI(i,o,l){return i>=St(o,l)&&i<ut(o,l)}function ac(i,o,l){for(var c=l?Wl:oa,d=i[0].length,m=i.length,y=m,w=C(m),b=1/0,x=[];y--;){var O=i[y];y&&o&&(O=je(O,sn(o))),b=St(O.length,b),w[y]=!l&&(o||d>=120&&O.length>=120)?new fi(y&&O):n}O=i[0];var P=-1,H=w[0];e:for(;++P<d&&x.length<b;){var Q=O[P],re=o?o(Q):Q;if(Q=l||Q!==0?Q:0,!(H?Us(H,re):c(x,re,l))){for(y=m;--y;){var de=w[y];if(!(de?Us(de,re):c(i[y],re,l)))continue e}H&&H.push(re),x.push(Q)}}return x}function rI(i,o,l,c){return Wn(i,function(d,m,y){o(c,l(d),m,y)}),c}function js(i,o,l){o=Br(o,i),i=mg(i,o);var c=i==null?i:i[Kn(wn(o))];return c==null?n:rn(c,i,l)}function Op(i){return Ze(i)&&Bt(i)==Or}function iI(i){return Ze(i)&&Bt(i)==Re}function sI(i){return Ze(i)&&Bt(i)==dn}function qs(i,o,l,c,d){return i===o?!0:i==null||o==null||!Ze(i)&&!Ze(o)?i!==i&&o!==o:oI(i,o,l,c,qs,d)}function oI(i,o,l,c,d,m){var y=he(i),w=he(o),b=y?qt:Rt(i),x=w?qt:Rt(o);b=b==Or?M:b,x=x==Or?M:x;var O=b==M,P=x==M,H=b==x;if(H&&Vr(i)){if(!Vr(o))return!1;y=!0,O=!1}if(H&&!O)return m||(m=new xn),y||rs(i)?lg(i,o,l,c,d,m):kI(i,o,b,l,c,d,m);if(!(l&z)){var Q=O&&Pe.call(i,"__wrapped__"),re=P&&Pe.call(o,"__wrapped__");if(Q||re){var de=Q?i.value():i,ie=re?o.value():o;return m||(m=new xn),d(de,ie,l,c,m)}}return H?(m||(m=new xn),PI(i,o,l,c,d,m)):!1}function aI(i){return Ze(i)&&Rt(i)==S}function uc(i,o,l,c){var d=l.length,m=d,y=!c;if(i==null)return!m;for(i=Ue(i);d--;){var w=l[d];if(y&&w[2]?w[1]!==i[w[0]]:!(w[0]in i))return!1}for(;++d<m;){w=l[d];var b=w[0],x=i[b],O=w[1];if(y&&w[2]){if(x===n&&!(b in i))return!1}else{var P=new xn;if(c)var H=c(x,O,b,i,o,P);if(!(H===n?qs(O,x,z|B,c,P):H))return!1}}return!0}function Np(i){if(!Qe(i)||WI(i))return!1;var o=hr(i)?a1:Yw;return o.test(mi(i))}function uI(i){return Ze(i)&&Bt(i)==V}function lI(i){return Ze(i)&&Rt(i)==D}function cI(i){return Ze(i)&&Ha(i.length)&&!!We[Bt(i)]}function Dp(i){return typeof i=="function"?i:i==null?Jt:typeof i=="object"?he(i)?Lp(i[0],i[1]):Pp(i):em(i)}function lc(i){if(!Qs(i))return d1(i);var o=[];for(var l in Ue(i))Pe.call(i,l)&&l!="constructor"&&o.push(l);return o}function hI(i){if(!Qe(i))return qI(i);var o=Qs(i),l=[];for(var c in i)c=="constructor"&&(o||!Pe.call(i,c))||l.push(c);return l}function cc(i,o){return i<o}function kp(i,o){var l=-1,c=Qt(i)?C(i.length):[];return Fr(i,function(d,m,y){c[++l]=o(d,m,y)}),c}function Pp(i){var o=Ac(i);return o.length==1&&o[0][2]?pg(o[0][0],o[0][1]):function(l){return l===i||uc(l,i,o)}}function Lp(i,o){return Sc(i)&&dg(o)?pg(Kn(i),o):function(l){var c=Fc(l,i);return c===n&&c===o?Uc(l,i):qs(o,c,z|B)}}function Ca(i,o,l,c,d){i!==o&&ic(o,function(m,y){if(d||(d=new xn),Qe(m))fI(i,o,y,l,Ca,c,d);else{var w=c?c(xc(i,y),m,y+"",i,o,d):n;w===n&&(w=m),nc(i,y,w)}},Yt)}function fI(i,o,l,c,d,m,y){var w=xc(i,l),b=xc(o,l),x=y.get(b);if(x){nc(i,l,x);return}var O=m?m(w,b,l+"",i,o,y):n,P=O===n;if(P){var H=he(b),Q=!H&&Vr(b),re=!H&&!Q&&rs(b);O=b,H||Q||re?he(w)?O=w:nt(w)?O=Xt(w):Q?(P=!1,O=qp(b,!0)):re?(P=!1,O=Gp(b,!0)):O=[]:Js(b)||vi(b)?(O=w,vi(w)?O=zg(w):(!Qe(w)||hr(w))&&(O=fg(b))):P=!1}P&&(y.set(b,O),d(O,b,c,m,y),y.delete(b)),nc(i,l,O)}function Mp(i,o){var l=i.length;if(l)return o+=o<0?l:0,cr(o,l)?i[o]:n}function Fp(i,o,l){o.length?o=je(o,function(m){return he(m)?function(y){return pi(y,m.length===1?m[0]:m)}:m}):o=[Jt];var c=-1;o=je(o,sn(ee()));var d=kp(i,function(m,y,w){var b=je(o,function(x){return x(m)});return{criteria:b,index:++c,value:m}});return BE(d,function(m,y){return AI(m,y,l)})}function dI(i,o){return Up(i,o,function(l,c){return Uc(i,c)})}function Up(i,o,l){for(var c=-1,d=o.length,m={};++c<d;){var y=o[c],w=pi(i,y);l(w,y)&&Gs(m,Br(y,i),w)}return m}function pI(i){return function(o){return pi(o,i)}}function hc(i,o,l,c){var d=c?UE:ji,m=-1,y=o.length,w=i;for(i===o&&(o=Xt(o)),l&&(w=je(i,sn(l)));++m<y;)for(var b=0,x=o[m],O=l?l(x):x;(b=d(w,O,b,c))>-1;)w!==i&&ma.call(w,b,1),ma.call(i,b,1);return i}function Bp(i,o){for(var l=i?o.length:0,c=l-1;l--;){var d=o[l];if(l==c||d!==m){var m=d;cr(d)?ma.call(i,d,1):gc(i,d)}}return i}function fc(i,o){return i+_a(_p()*(o-i+1))}function gI(i,o,l,c){for(var d=-1,m=ut(ya((o-i)/(l||1)),0),y=C(m);m--;)y[c?m:++d]=i,i+=l;return y}function dc(i,o){var l="";if(!i||o<1||o>Ee)return l;do o%2&&(l+=i),o=_a(o/2),o&&(i+=i);while(o);return l}function ge(i,o){return Oc(gg(i,o,Jt),i+"")}function mI(i){return Ip(is(i))}function vI(i,o){var l=is(i);return Ma(l,di(o,0,l.length))}function Gs(i,o,l,c){if(!Qe(i))return i;o=Br(o,i);for(var d=-1,m=o.length,y=m-1,w=i;w!=null&&++d<m;){var b=Kn(o[d]),x=l;if(b==="__proto__"||b==="constructor"||b==="prototype")return i;if(d!=y){var O=w[b];x=c?c(O,b,w):n,x===n&&(x=Qe(O)?O:cr(o[d+1])?[]:{})}zs(w,b,x),w=w[b]}return i}var $p=wa?function(i,o){return wa.set(i,o),i}:Jt,yI=va?function(i,o){return va(i,"toString",{configurable:!0,enumerable:!1,value:$c(o),writable:!0})}:Jt;function _I(i){return Ma(is(i))}function _n(i,o,l){var c=-1,d=i.length;o<0&&(o=-o>d?0:d+o),l=l>d?d:l,l<0&&(l+=d),d=o>l?0:l-o>>>0,o>>>=0;for(var m=C(d);++c<d;)m[c]=i[c+o];return m}function wI(i,o){var l;return Fr(i,function(c,d,m){return l=o(c,d,m),!l}),!!l}function Sa(i,o,l){var c=0,d=i==null?c:i.length;if(typeof o=="number"&&o===o&&d<=na){for(;c<d;){var m=c+d>>>1,y=i[m];y!==null&&!an(y)&&(l?y<=o:y<o)?c=m+1:d=m}return d}return pc(i,o,Jt,l)}function pc(i,o,l,c){var d=0,m=i==null?0:i.length;if(m===0)return 0;o=l(o);for(var y=o!==o,w=o===null,b=an(o),x=o===n;d<m;){var O=_a((d+m)/2),P=l(i[O]),H=P!==n,Q=P===null,re=P===P,de=an(P);if(y)var ie=c||re;else x?ie=re&&(c||H):w?ie=re&&H&&(c||!Q):b?ie=re&&H&&!Q&&(c||!de):Q||de?ie=!1:ie=c?P<=o:P<o;ie?d=O+1:m=O}return St(m,fn)}function Vp(i,o){for(var l=-1,c=i.length,d=0,m=[];++l<c;){var y=i[l],w=o?o(y):y;if(!l||!On(w,b)){var b=w;m[d++]=y===0?0:y}}return m}function Hp(i){return typeof i=="number"?i:an(i)?rr:+i}function on(i){if(typeof i=="string")return i;if(he(i))return je(i,on)+"";if(an(i))return wp?wp.call(i):"";var o=i+"";return o=="0"&&1/i==-Ne?"-0":o}function Ur(i,o,l){var c=-1,d=oa,m=i.length,y=!0,w=[],b=w;if(l)y=!1,d=Wl;else if(m>=s){var x=o?null:NI(i);if(x)return ua(x);y=!1,d=Us,b=new fi}else b=o?[]:w;e:for(;++c<m;){var O=i[c],P=o?o(O):O;if(O=l||O!==0?O:0,y&&P===P){for(var H=b.length;H--;)if(b[H]===P)continue e;o&&b.push(P),w.push(O)}else d(b,P,l)||(b!==w&&b.push(P),w.push(O))}return w}function gc(i,o){return o=Br(o,i),i=mg(i,o),i==null||delete i[Kn(wn(o))]}function Wp(i,o,l,c){return Gs(i,o,l(pi(i,o)),c)}function Ra(i,o,l,c){for(var d=i.length,m=c?d:-1;(c?m--:++m<d)&&o(i[m],m,i););return l?_n(i,c?0:m,c?m+1:d):_n(i,c?m+1:0,c?d:m)}function zp(i,o){var l=i;return l instanceof _e&&(l=l.value()),zl(o,function(c,d){return d.func.apply(d.thisArg,Pr([c],d.args))},l)}function mc(i,o,l){var c=i.length;if(c<2)return c?Ur(i[0]):[];for(var d=-1,m=C(c);++d<c;)for(var y=i[d],w=-1;++w<c;)w!=d&&(m[d]=Ks(m[d]||y,i[w],o,l));return Ur(Et(m,1),o,l)}function Kp(i,o,l){for(var c=-1,d=i.length,m=o.length,y={};++c<d;){var w=c<m?o[c]:n;l(y,i[c],w)}return y}function vc(i){return nt(i)?i:[]}function yc(i){return typeof i=="function"?i:Jt}function Br(i,o){return he(i)?i:Sc(i,o)?[i]:wg(De(i))}var EI=ge;function $r(i,o,l){var c=i.length;return l=l===n?c:l,!o&&l>=c?i:_n(i,o,l)}var jp=u1||function(i){return wt.clearTimeout(i)};function qp(i,o){if(o)return i.slice();var l=i.length,c=pp?pp(l):new i.constructor(l);return i.copy(c),c}function _c(i){var o=new i.constructor(i.byteLength);return new pa(o).set(new pa(i)),o}function II(i,o){var l=o?_c(i.buffer):i.buffer;return new i.constructor(l,i.byteOffset,i.byteLength)}function TI(i){var o=new i.constructor(i.source,Od.exec(i));return o.lastIndex=i.lastIndex,o}function bI(i){return Ws?Ue(Ws.call(i)):{}}function Gp(i,o){var l=o?_c(i.buffer):i.buffer;return new i.constructor(l,i.byteOffset,i.length)}function Xp(i,o){if(i!==o){var l=i!==n,c=i===null,d=i===i,m=an(i),y=o!==n,w=o===null,b=o===o,x=an(o);if(!w&&!x&&!m&&i>o||m&&y&&b&&!w&&!x||c&&y&&b||!l&&b||!d)return 1;if(!c&&!m&&!x&&i<o||x&&l&&d&&!c&&!m||w&&l&&d||!y&&d||!b)return-1}return 0}function AI(i,o,l){for(var c=-1,d=i.criteria,m=o.criteria,y=d.length,w=l.length;++c<y;){var b=Xp(d[c],m[c]);if(b){if(c>=w)return b;var x=l[c];return b*(x=="desc"?-1:1)}}return i.index-o.index}function Qp(i,o,l,c){for(var d=-1,m=i.length,y=l.length,w=-1,b=o.length,x=ut(m-y,0),O=C(b+x),P=!c;++w<b;)O[w]=o[w];for(;++d<y;)(P||d<m)&&(O[l[d]]=i[d]);for(;x--;)O[w++]=i[d++];return O}function Yp(i,o,l,c){for(var d=-1,m=i.length,y=-1,w=l.length,b=-1,x=o.length,O=ut(m-w,0),P=C(O+x),H=!c;++d<O;)P[d]=i[d];for(var Q=d;++b<x;)P[Q+b]=o[b];for(;++y<w;)(H||d<m)&&(P[Q+l[y]]=i[d++]);return P}function Xt(i,o){var l=-1,c=i.length;for(o||(o=C(c));++l<c;)o[l]=i[l];return o}function zn(i,o,l,c){var d=!l;l||(l={});for(var m=-1,y=o.length;++m<y;){var w=o[m],b=c?c(l[w],i[w],w,l,i):n;b===n&&(b=i[w]),d?ar(l,w,b):zs(l,w,b)}return l}function CI(i,o){return zn(i,Cc(i),o)}function SI(i,o){return zn(i,cg(i),o)}function xa(i,o){return function(l,c){var d=he(l)?DE:X1,m=o?o():{};return d(l,i,ee(c,2),m)}}function es(i){return ge(function(o,l){var c=-1,d=l.length,m=d>1?l[d-1]:n,y=d>2?l[2]:n;for(m=i.length>3&&typeof m=="function"?(d--,m):n,y&&$t(l[0],l[1],y)&&(m=d<3?n:m,d=1),o=Ue(o);++c<d;){var w=l[c];w&&i(o,w,c,m)}return o})}function Jp(i,o){return function(l,c){if(l==null)return l;if(!Qt(l))return i(l,c);for(var d=l.length,m=o?d:-1,y=Ue(l);(o?m--:++m<d)&&c(y[m],m,y)!==!1;);return l}}function Zp(i){return function(o,l,c){for(var d=-1,m=Ue(o),y=c(o),w=y.length;w--;){var b=y[i?w:++d];if(l(m[b],b,m)===!1)break}return o}}function RI(i,o,l){var c=o&X,d=Xs(i);function m(){var y=this&&this!==wt&&this instanceof m?d:i;return y.apply(c?l:this,arguments)}return m}function eg(i){return function(o){o=De(o);var l=qi(o)?Rn(o):n,c=l?l[0]:o.charAt(0),d=l?$r(l,1).join(""):o.slice(1);return c[i]()+d}}function ts(i){return function(o){return zl(Jg(Yg(o).replace(yE,"")),i,"")}}function Xs(i){return function(){var o=arguments;switch(o.length){case 0:return new i;case 1:return new i(o[0]);case 2:return new i(o[0],o[1]);case 3:return new i(o[0],o[1],o[2]);case 4:return new i(o[0],o[1],o[2],o[3]);case 5:return new i(o[0],o[1],o[2],o[3],o[4]);case 6:return new i(o[0],o[1],o[2],o[3],o[4],o[5]);case 7:return new i(o[0],o[1],o[2],o[3],o[4],o[5],o[6])}var l=Zi(i.prototype),c=i.apply(l,o);return Qe(c)?c:l}}function xI(i,o,l){var c=Xs(i);function d(){for(var m=arguments.length,y=C(m),w=m,b=ns(d);w--;)y[w]=arguments[w];var x=m<3&&y[0]!==b&&y[m-1]!==b?[]:Lr(y,b);if(m-=x.length,m<l)return sg(i,o,Oa,d.placeholder,n,y,x,n,n,l-m);var O=this&&this!==wt&&this instanceof d?c:i;return rn(O,this,y)}return d}function tg(i){return function(o,l,c){var d=Ue(o);if(!Qt(o)){var m=ee(l,3);o=ht(o),l=function(w){return m(d[w],w,d)}}var y=i(o,l,c);return y>-1?d[m?o[y]:y]:n}}function ng(i){return lr(function(o){var l=o.length,c=l,d=vn.prototype.thru;for(i&&o.reverse();c--;){var m=o[c];if(typeof m!="function")throw new mn(u);if(d&&!y&&Pa(m)=="wrapper")var y=new vn([],!0)}for(c=y?c:l;++c<l;){m=o[c];var w=Pa(m),b=w=="wrapper"?bc(m):n;b&&Rc(b[0])&&b[1]==(Xe|G|Ae|se)&&!b[4].length&&b[9]==1?y=y[Pa(b[0])].apply(y,b[3]):y=m.length==1&&Rc(m)?y[w]():y.thru(m)}return function(){var x=arguments,O=x[0];if(y&&x.length==1&&he(O))return y.plant(O).value();for(var P=0,H=l?o[P].apply(this,x):O;++P<l;)H=o[P].call(this,H);return H}})}function Oa(i,o,l,c,d,m,y,w,b,x){var O=o&Xe,P=o&X,H=o&te,Q=o&(G|we),re=o&Be,de=H?n:Xs(i);function ie(){for(var ye=arguments.length,Te=C(ye),un=ye;un--;)Te[un]=arguments[un];if(Q)var Vt=ns(ie),ln=VE(Te,Vt);if(c&&(Te=Qp(Te,c,d,Q)),m&&(Te=Yp(Te,m,y,Q)),ye-=ln,Q&&ye<x){var rt=Lr(Te,Vt);return sg(i,o,Oa,ie.placeholder,l,Te,rt,w,b,x-ye)}var Nn=P?l:this,dr=H?Nn[i]:i;return ye=Te.length,w?Te=XI(Te,w):re&&ye>1&&Te.reverse(),O&&b<ye&&(Te.length=b),this&&this!==wt&&this instanceof ie&&(dr=de||Xs(dr)),dr.apply(Nn,Te)}return ie}function rg(i,o){return function(l,c){return rI(l,i,o(c),{})}}function Na(i,o){return function(l,c){var d;if(l===n&&c===n)return o;if(l!==n&&(d=l),c!==n){if(d===n)return c;typeof l=="string"||typeof c=="string"?(l=on(l),c=on(c)):(l=Hp(l),c=Hp(c)),d=i(l,c)}return d}}function wc(i){return lr(function(o){return o=je(o,sn(ee())),ge(function(l){var c=this;return i(o,function(d){return rn(d,c,l)})})})}function Da(i,o){o=o===n?" ":on(o);var l=o.length;if(l<2)return l?dc(o,i):o;var c=dc(o,ya(i/Gi(o)));return qi(o)?$r(Rn(c),0,i).join(""):c.slice(0,i)}function OI(i,o,l,c){var d=o&X,m=Xs(i);function y(){for(var w=-1,b=arguments.length,x=-1,O=c.length,P=C(O+b),H=this&&this!==wt&&this instanceof y?m:i;++x<O;)P[x]=c[x];for(;b--;)P[x++]=arguments[++w];return rn(H,d?l:this,P)}return y}function ig(i){return function(o,l,c){return c&&typeof c!="number"&&$t(o,l,c)&&(l=c=n),o=fr(o),l===n?(l=o,o=0):l=fr(l),c=c===n?o<l?1:-1:fr(c),gI(o,l,c,i)}}function ka(i){return function(o,l){return typeof o=="string"&&typeof l=="string"||(o=En(o),l=En(l)),i(o,l)}}function sg(i,o,l,c,d,m,y,w,b,x){var O=o&G,P=O?y:n,H=O?n:y,Q=O?m:n,re=O?n:m;o|=O?Ae:it,o&=~(O?it:Ae),o&Fe||(o&=~(X|te));var de=[i,o,d,Q,P,re,H,w,b,x],ie=l.apply(n,de);return Rc(i)&&vg(ie,de),ie.placeholder=c,yg(ie,i,o)}function Ec(i){var o=at[i];return function(l,c){if(l=En(l),c=c==null?0:St(fe(c),292),c&&yp(l)){var d=(De(l)+"e").split("e"),m=o(d[0]+"e"+(+d[1]+c));return d=(De(m)+"e").split("e"),+(d[0]+"e"+(+d[1]-c))}return o(l)}}var NI=Yi&&1/ua(new Yi([,-0]))[1]==Ne?function(i){return new Yi(i)}:Wc;function og(i){return function(o){var l=Rt(o);return l==S?Yl(o):l==D?GE(o):$E(o,i(o))}}function ur(i,o,l,c,d,m,y,w){var b=o&te;if(!b&&typeof i!="function")throw new mn(u);var x=c?c.length:0;if(x||(o&=~(Ae|it),c=d=n),y=y===n?y:ut(fe(y),0),w=w===n?w:fe(w),x-=d?d.length:0,o&it){var O=c,P=d;c=d=n}var H=b?n:bc(i),Q=[i,o,l,c,d,O,P,m,y,w];if(H&&jI(Q,H),i=Q[0],o=Q[1],l=Q[2],c=Q[3],d=Q[4],w=Q[9]=Q[9]===n?b?0:i.length:ut(Q[9]-x,0),!w&&o&(G|we)&&(o&=~(G|we)),!o||o==X)var re=RI(i,o,l);else o==G||o==we?re=xI(i,o,w):(o==Ae||o==(X|Ae))&&!d.length?re=OI(i,o,l,c):re=Oa.apply(n,Q);var de=H?$p:vg;return yg(de(re,Q),i,o)}function ag(i,o,l,c){return i===n||On(i,Qi[l])&&!Pe.call(c,l)?o:i}function ug(i,o,l,c,d,m){return Qe(i)&&Qe(o)&&(m.set(o,i),Ca(i,o,n,ug,m),m.delete(o)),i}function DI(i){return Js(i)?n:i}function lg(i,o,l,c,d,m){var y=l&z,w=i.length,b=o.length;if(w!=b&&!(y&&b>w))return!1;var x=m.get(i),O=m.get(o);if(x&&O)return x==o&&O==i;var P=-1,H=!0,Q=l&B?new fi:n;for(m.set(i,o),m.set(o,i);++P<w;){var re=i[P],de=o[P];if(c)var ie=y?c(de,re,P,o,i,m):c(re,de,P,i,o,m);if(ie!==n){if(ie)continue;H=!1;break}if(Q){if(!Kl(o,function(ye,Te){if(!Us(Q,Te)&&(re===ye||d(re,ye,l,c,m)))return Q.push(Te)})){H=!1;break}}else if(!(re===de||d(re,de,l,c,m))){H=!1;break}}return m.delete(i),m.delete(o),H}function kI(i,o,l,c,d,m,y){switch(l){case Ie:if(i.byteLength!=o.byteLength||i.byteOffset!=o.byteOffset)return!1;i=i.buffer,o=o.buffer;case Re:return!(i.byteLength!=o.byteLength||!m(new pa(i),new pa(o)));case Nr:case dn:case N:return On(+i,+o);case Dr:return i.name==o.name&&i.message==o.message;case V:case Y:return i==o+"";case S:var w=Yl;case D:var b=c&z;if(w||(w=ua),i.size!=o.size&&!b)return!1;var x=y.get(i);if(x)return x==o;c|=B,y.set(i,o);var O=lg(w(i),w(o),c,d,m,y);return y.delete(i),O;case q:if(Ws)return Ws.call(i)==Ws.call(o)}return!1}function PI(i,o,l,c,d,m){var y=l&z,w=Ic(i),b=w.length,x=Ic(o),O=x.length;if(b!=O&&!y)return!1;for(var P=b;P--;){var H=w[P];if(!(y?H in o:Pe.call(o,H)))return!1}var Q=m.get(i),re=m.get(o);if(Q&&re)return Q==o&&re==i;var de=!0;m.set(i,o),m.set(o,i);for(var ie=y;++P<b;){H=w[P];var ye=i[H],Te=o[H];if(c)var un=y?c(Te,ye,H,o,i,m):c(ye,Te,H,i,o,m);if(!(un===n?ye===Te||d(ye,Te,l,c,m):un)){de=!1;break}ie||(ie=H=="constructor")}if(de&&!ie){var Vt=i.constructor,ln=o.constructor;Vt!=ln&&"constructor"in i&&"constructor"in o&&!(typeof Vt=="function"&&Vt instanceof Vt&&typeof ln=="function"&&ln instanceof ln)&&(de=!1)}return m.delete(i),m.delete(o),de}function lr(i){return Oc(gg(i,n,bg),i+"")}function Ic(i){return xp(i,ht,Cc)}function Tc(i){return xp(i,Yt,cg)}var bc=wa?function(i){return wa.get(i)}:Wc;function Pa(i){for(var o=i.name+"",l=Ji[o],c=Pe.call(Ji,o)?l.length:0;c--;){var d=l[c],m=d.func;if(m==null||m==i)return d.name}return o}function ns(i){var o=Pe.call(g,"placeholder")?g:i;return o.placeholder}function ee(){var i=g.iteratee||Vc;return i=i===Vc?Dp:i,arguments.length?i(arguments[0],arguments[1]):i}function La(i,o){var l=i.__data__;return HI(o)?l[typeof o=="string"?"string":"hash"]:l.map}function Ac(i){for(var o=ht(i),l=o.length;l--;){var c=o[l],d=i[c];o[l]=[c,d,dg(d)]}return o}function gi(i,o){var l=KE(i,o);return Np(l)?l:n}function LI(i){var o=Pe.call(i,ci),l=i[ci];try{i[ci]=n;var c=!0}catch{}var d=fa.call(i);return c&&(o?i[ci]=l:delete i[ci]),d}var Cc=Zl?function(i){return i==null?[]:(i=Ue(i),kr(Zl(i),function(o){return mp.call(i,o)}))}:zc,cg=Zl?function(i){for(var o=[];i;)Pr(o,Cc(i)),i=ga(i);return o}:zc,Rt=Bt;(ec&&Rt(new ec(new ArrayBuffer(1)))!=Ie||$s&&Rt(new $s)!=S||tc&&Rt(tc.resolve())!=W||Yi&&Rt(new Yi)!=D||Vs&&Rt(new Vs)!=ne)&&(Rt=function(i){var o=Bt(i),l=o==M?i.constructor:n,c=l?mi(l):"";if(c)switch(c){case v1:return Ie;case y1:return S;case _1:return W;case w1:return D;case E1:return ne}return o});function MI(i,o,l){for(var c=-1,d=l.length;++c<d;){var m=l[c],y=m.size;switch(m.type){case"drop":i+=y;break;case"dropRight":o-=y;break;case"take":o=St(o,i+y);break;case"takeRight":i=ut(i,o-y);break}}return{start:i,end:o}}function FI(i){var o=i.match(Ww);return o?o[1].split(zw):[]}function hg(i,o,l){o=Br(o,i);for(var c=-1,d=o.length,m=!1;++c<d;){var y=Kn(o[c]);if(!(m=i!=null&&l(i,y)))break;i=i[y]}return m||++c!=d?m:(d=i==null?0:i.length,!!d&&Ha(d)&&cr(y,d)&&(he(i)||vi(i)))}function UI(i){var o=i.length,l=new i.constructor(o);return o&&typeof i[0]=="string"&&Pe.call(i,"index")&&(l.index=i.index,l.input=i.input),l}function fg(i){return typeof i.constructor=="function"&&!Qs(i)?Zi(ga(i)):{}}function BI(i,o,l){var c=i.constructor;switch(o){case Re:return _c(i);case Nr:case dn:return new c(+i);case Ie:return II(i,l);case Ke:case Ut:case Hn:case Hi:case ir:case Wi:case _t:case Gt:case zi:return Gp(i,l);case S:return new c;case N:case Y:return new c(i);case V:return TI(i);case D:return new c;case q:return bI(i)}}function $I(i,o){var l=o.length;if(!l)return i;var c=l-1;return o[c]=(l>1?"& ":"")+o[c],o=o.join(l>2?", ":" "),i.replace(Hw,`{
/* [wrapped with `+o+`] */
`)}function VI(i){return he(i)||vi(i)||!!(vp&&i&&i[vp])}function cr(i,o){var l=typeof i;return o=o??Ee,!!o&&(l=="number"||l!="symbol"&&Zw.test(i))&&i>-1&&i%1==0&&i<o}function $t(i,o,l){if(!Qe(l))return!1;var c=typeof o;return(c=="number"?Qt(l)&&cr(o,l.length):c=="string"&&o in l)?On(l[o],i):!1}function Sc(i,o){if(he(i))return!1;var l=typeof i;return l=="number"||l=="symbol"||l=="boolean"||i==null||an(i)?!0:Uw.test(i)||!Fw.test(i)||o!=null&&i in Ue(o)}function HI(i){var o=typeof i;return o=="string"||o=="number"||o=="symbol"||o=="boolean"?i!=="__proto__":i===null}function Rc(i){var o=Pa(i),l=g[o];if(typeof l!="function"||!(o in _e.prototype))return!1;if(i===l)return!0;var c=bc(l);return!!c&&i===c[0]}function WI(i){return!!dp&&dp in i}var zI=ca?hr:Kc;function Qs(i){var o=i&&i.constructor,l=typeof o=="function"&&o.prototype||Qi;return i===l}function dg(i){return i===i&&!Qe(i)}function pg(i,o){return function(l){return l==null?!1:l[i]===o&&(o!==n||i in Ue(l))}}function KI(i){var o=$a(i,function(c){return l.size===p&&l.clear(),c}),l=o.cache;return o}function jI(i,o){var l=i[1],c=o[1],d=l|c,m=d<(X|te|Xe),y=c==Xe&&l==G||c==Xe&&l==se&&i[7].length<=o[8]||c==(Xe|se)&&o[7].length<=o[8]&&l==G;if(!(m||y))return i;c&X&&(i[2]=o[2],d|=l&X?0:Fe);var w=o[3];if(w){var b=i[3];i[3]=b?Qp(b,w,o[4]):w,i[4]=b?Lr(i[3],v):o[4]}return w=o[5],w&&(b=i[5],i[5]=b?Yp(b,w,o[6]):w,i[6]=b?Lr(i[5],v):o[6]),w=o[7],w&&(i[7]=w),c&Xe&&(i[8]=i[8]==null?o[8]:St(i[8],o[8])),i[9]==null&&(i[9]=o[9]),i[0]=o[0],i[1]=d,i}function qI(i){var o=[];if(i!=null)for(var l in Ue(i))o.push(l);return o}function GI(i){return fa.call(i)}function gg(i,o,l){return o=ut(o===n?i.length-1:o,0),function(){for(var c=arguments,d=-1,m=ut(c.length-o,0),y=C(m);++d<m;)y[d]=c[o+d];d=-1;for(var w=C(o+1);++d<o;)w[d]=c[d];return w[o]=l(y),rn(i,this,w)}}function mg(i,o){return o.length<2?i:pi(i,_n(o,0,-1))}function XI(i,o){for(var l=i.length,c=St(o.length,l),d=Xt(i);c--;){var m=o[c];i[c]=cr(m,l)?d[m]:n}return i}function xc(i,o){if(!(o==="constructor"&&typeof i[o]=="function")&&o!="__proto__")return i[o]}var vg=_g($p),Ys=c1||function(i,o){return wt.setTimeout(i,o)},Oc=_g(yI);function yg(i,o,l){var c=o+"";return Oc(i,$I(c,QI(FI(c),l)))}function _g(i){var o=0,l=0;return function(){var c=p1(),d=Sn-(c-l);if(l=c,d>0){if(++o>=hn)return arguments[0]}else o=0;return i.apply(n,arguments)}}function Ma(i,o){var l=-1,c=i.length,d=c-1;for(o=o===n?c:o;++l<o;){var m=fc(l,d),y=i[m];i[m]=i[l],i[l]=y}return i.length=o,i}var wg=KI(function(i){var o=[];return i.charCodeAt(0)===46&&o.push(""),i.replace(Bw,function(l,c,d,m){o.push(d?m.replace(qw,"$1"):c||l)}),o});function Kn(i){if(typeof i=="string"||an(i))return i;var o=i+"";return o=="0"&&1/i==-Ne?"-0":o}function mi(i){if(i!=null){try{return ha.call(i)}catch{}try{return i+""}catch{}}return""}function QI(i,o){return gn(kl,function(l){var c="_."+l[0];o&l[1]&&!oa(i,c)&&i.push(c)}),i.sort()}function Eg(i){if(i instanceof _e)return i.clone();var o=new vn(i.__wrapped__,i.__chain__);return o.__actions__=Xt(i.__actions__),o.__index__=i.__index__,o.__values__=i.__values__,o}function YI(i,o,l){(l?$t(i,o,l):o===n)?o=1:o=ut(fe(o),0);var c=i==null?0:i.length;if(!c||o<1)return[];for(var d=0,m=0,y=C(ya(c/o));d<c;)y[m++]=_n(i,d,d+=o);return y}function JI(i){for(var o=-1,l=i==null?0:i.length,c=0,d=[];++o<l;){var m=i[o];m&&(d[c++]=m)}return d}function ZI(){var i=arguments.length;if(!i)return[];for(var o=C(i-1),l=arguments[0],c=i;c--;)o[c-1]=arguments[c];return Pr(he(l)?Xt(l):[l],Et(o,1))}var eT=ge(function(i,o){return nt(i)?Ks(i,Et(o,1,nt,!0)):[]}),tT=ge(function(i,o){var l=wn(o);return nt(l)&&(l=n),nt(i)?Ks(i,Et(o,1,nt,!0),ee(l,2)):[]}),nT=ge(function(i,o){var l=wn(o);return nt(l)&&(l=n),nt(i)?Ks(i,Et(o,1,nt,!0),n,l):[]});function rT(i,o,l){var c=i==null?0:i.length;return c?(o=l||o===n?1:fe(o),_n(i,o<0?0:o,c)):[]}function iT(i,o,l){var c=i==null?0:i.length;return c?(o=l||o===n?1:fe(o),o=c-o,_n(i,0,o<0?0:o)):[]}function sT(i,o){return i&&i.length?Ra(i,ee(o,3),!0,!0):[]}function oT(i,o){return i&&i.length?Ra(i,ee(o,3),!0):[]}function aT(i,o,l,c){var d=i==null?0:i.length;return d?(l&&typeof l!="number"&&$t(i,o,l)&&(l=0,c=d),Z1(i,o,l,c)):[]}function Ig(i,o,l){var c=i==null?0:i.length;if(!c)return-1;var d=l==null?0:fe(l);return d<0&&(d=ut(c+d,0)),aa(i,ee(o,3),d)}function Tg(i,o,l){var c=i==null?0:i.length;if(!c)return-1;var d=c-1;return l!==n&&(d=fe(l),d=l<0?ut(c+d,0):St(d,c-1)),aa(i,ee(o,3),d,!0)}function bg(i){var o=i==null?0:i.length;return o?Et(i,1):[]}function uT(i){var o=i==null?0:i.length;return o?Et(i,Ne):[]}function lT(i,o){var l=i==null?0:i.length;return l?(o=o===n?1:fe(o),Et(i,o)):[]}function cT(i){for(var o=-1,l=i==null?0:i.length,c={};++o<l;){var d=i[o];c[d[0]]=d[1]}return c}function Ag(i){return i&&i.length?i[0]:n}function hT(i,o,l){var c=i==null?0:i.length;if(!c)return-1;var d=l==null?0:fe(l);return d<0&&(d=ut(c+d,0)),ji(i,o,d)}function fT(i){var o=i==null?0:i.length;return o?_n(i,0,-1):[]}var dT=ge(function(i){var o=je(i,vc);return o.length&&o[0]===i[0]?ac(o):[]}),pT=ge(function(i){var o=wn(i),l=je(i,vc);return o===wn(l)?o=n:l.pop(),l.length&&l[0]===i[0]?ac(l,ee(o,2)):[]}),gT=ge(function(i){var o=wn(i),l=je(i,vc);return o=typeof o=="function"?o:n,o&&l.pop(),l.length&&l[0]===i[0]?ac(l,n,o):[]});function mT(i,o){return i==null?"":f1.call(i,o)}function wn(i){var o=i==null?0:i.length;return o?i[o-1]:n}function vT(i,o,l){var c=i==null?0:i.length;if(!c)return-1;var d=c;return l!==n&&(d=fe(l),d=d<0?ut(c+d,0):St(d,c-1)),o===o?QE(i,o,d):aa(i,sp,d,!0)}function yT(i,o){return i&&i.length?Mp(i,fe(o)):n}var _T=ge(Cg);function Cg(i,o){return i&&i.length&&o&&o.length?hc(i,o):i}function wT(i,o,l){return i&&i.length&&o&&o.length?hc(i,o,ee(l,2)):i}function ET(i,o,l){return i&&i.length&&o&&o.length?hc(i,o,n,l):i}var IT=lr(function(i,o){var l=i==null?0:i.length,c=rc(i,o);return Bp(i,je(o,function(d){return cr(d,l)?+d:d}).sort(Xp)),c});function TT(i,o){var l=[];if(!(i&&i.length))return l;var c=-1,d=[],m=i.length;for(o=ee(o,3);++c<m;){var y=i[c];o(y,c,i)&&(l.push(y),d.push(c))}return Bp(i,d),l}function Nc(i){return i==null?i:m1.call(i)}function bT(i,o,l){var c=i==null?0:i.length;return c?(l&&typeof l!="number"&&$t(i,o,l)?(o=0,l=c):(o=o==null?0:fe(o),l=l===n?c:fe(l)),_n(i,o,l)):[]}function AT(i,o){return Sa(i,o)}function CT(i,o,l){return pc(i,o,ee(l,2))}function ST(i,o){var l=i==null?0:i.length;if(l){var c=Sa(i,o);if(c<l&&On(i[c],o))return c}return-1}function RT(i,o){return Sa(i,o,!0)}function xT(i,o,l){return pc(i,o,ee(l,2),!0)}function OT(i,o){var l=i==null?0:i.length;if(l){var c=Sa(i,o,!0)-1;if(On(i[c],o))return c}return-1}function NT(i){return i&&i.length?Vp(i):[]}function DT(i,o){return i&&i.length?Vp(i,ee(o,2)):[]}function kT(i){var o=i==null?0:i.length;return o?_n(i,1,o):[]}function PT(i,o,l){return i&&i.length?(o=l||o===n?1:fe(o),_n(i,0,o<0?0:o)):[]}function LT(i,o,l){var c=i==null?0:i.length;return c?(o=l||o===n?1:fe(o),o=c-o,_n(i,o<0?0:o,c)):[]}function MT(i,o){return i&&i.length?Ra(i,ee(o,3),!1,!0):[]}function FT(i,o){return i&&i.length?Ra(i,ee(o,3)):[]}var UT=ge(function(i){return Ur(Et(i,1,nt,!0))}),BT=ge(function(i){var o=wn(i);return nt(o)&&(o=n),Ur(Et(i,1,nt,!0),ee(o,2))}),$T=ge(function(i){var o=wn(i);return o=typeof o=="function"?o:n,Ur(Et(i,1,nt,!0),n,o)});function VT(i){return i&&i.length?Ur(i):[]}function HT(i,o){return i&&i.length?Ur(i,ee(o,2)):[]}function WT(i,o){return o=typeof o=="function"?o:n,i&&i.length?Ur(i,n,o):[]}function Dc(i){if(!(i&&i.length))return[];var o=0;return i=kr(i,function(l){if(nt(l))return o=ut(l.length,o),!0}),Xl(o,function(l){return je(i,jl(l))})}function Sg(i,o){if(!(i&&i.length))return[];var l=Dc(i);return o==null?l:je(l,function(c){return rn(o,n,c)})}var zT=ge(function(i,o){return nt(i)?Ks(i,o):[]}),KT=ge(function(i){return mc(kr(i,nt))}),jT=ge(function(i){var o=wn(i);return nt(o)&&(o=n),mc(kr(i,nt),ee(o,2))}),qT=ge(function(i){var o=wn(i);return o=typeof o=="function"?o:n,mc(kr(i,nt),n,o)}),GT=ge(Dc);function XT(i,o){return Kp(i||[],o||[],zs)}function QT(i,o){return Kp(i||[],o||[],Gs)}var YT=ge(function(i){var o=i.length,l=o>1?i[o-1]:n;return l=typeof l=="function"?(i.pop(),l):n,Sg(i,l)});function Rg(i){var o=g(i);return o.__chain__=!0,o}function JT(i,o){return o(i),i}function Fa(i,o){return o(i)}var ZT=lr(function(i){var o=i.length,l=o?i[0]:0,c=this.__wrapped__,d=function(m){return rc(m,i)};return o>1||this.__actions__.length||!(c instanceof _e)||!cr(l)?this.thru(d):(c=c.slice(l,+l+(o?1:0)),c.__actions__.push({func:Fa,args:[d],thisArg:n}),new vn(c,this.__chain__).thru(function(m){return o&&!m.length&&m.push(n),m}))});function eb(){return Rg(this)}function tb(){return new vn(this.value(),this.__chain__)}function nb(){this.__values__===n&&(this.__values__=Hg(this.value()));var i=this.__index__>=this.__values__.length,o=i?n:this.__values__[this.__index__++];return{done:i,value:o}}function rb(){return this}function ib(i){for(var o,l=this;l instanceof Ia;){var c=Eg(l);c.__index__=0,c.__values__=n,o?d.__wrapped__=c:o=c;var d=c;l=l.__wrapped__}return d.__wrapped__=i,o}function sb(){var i=this.__wrapped__;if(i instanceof _e){var o=i;return this.__actions__.length&&(o=new _e(this)),o=o.reverse(),o.__actions__.push({func:Fa,args:[Nc],thisArg:n}),new vn(o,this.__chain__)}return this.thru(Nc)}function ob(){return zp(this.__wrapped__,this.__actions__)}var ab=xa(function(i,o,l){Pe.call(i,l)?++i[l]:ar(i,l,1)});function ub(i,o,l){var c=he(i)?rp:J1;return l&&$t(i,o,l)&&(o=n),c(i,ee(o,3))}function lb(i,o){var l=he(i)?kr:Sp;return l(i,ee(o,3))}var cb=tg(Ig),hb=tg(Tg);function fb(i,o){return Et(Ua(i,o),1)}function db(i,o){return Et(Ua(i,o),Ne)}function pb(i,o,l){return l=l===n?1:fe(l),Et(Ua(i,o),l)}function xg(i,o){var l=he(i)?gn:Fr;return l(i,ee(o,3))}function Og(i,o){var l=he(i)?kE:Cp;return l(i,ee(o,3))}var gb=xa(function(i,o,l){Pe.call(i,l)?i[l].push(o):ar(i,l,[o])});function mb(i,o,l,c){i=Qt(i)?i:is(i),l=l&&!c?fe(l):0;var d=i.length;return l<0&&(l=ut(d+l,0)),Wa(i)?l<=d&&i.indexOf(o,l)>-1:!!d&&ji(i,o,l)>-1}var vb=ge(function(i,o,l){var c=-1,d=typeof o=="function",m=Qt(i)?C(i.length):[];return Fr(i,function(y){m[++c]=d?rn(o,y,l):js(y,o,l)}),m}),yb=xa(function(i,o,l){ar(i,l,o)});function Ua(i,o){var l=he(i)?je:kp;return l(i,ee(o,3))}function _b(i,o,l,c){return i==null?[]:(he(o)||(o=o==null?[]:[o]),l=c?n:l,he(l)||(l=l==null?[]:[l]),Fp(i,o,l))}var wb=xa(function(i,o,l){i[l?0:1].push(o)},function(){return[[],[]]});function Eb(i,o,l){var c=he(i)?zl:ap,d=arguments.length<3;return c(i,ee(o,4),l,d,Fr)}function Ib(i,o,l){var c=he(i)?PE:ap,d=arguments.length<3;return c(i,ee(o,4),l,d,Cp)}function Tb(i,o){var l=he(i)?kr:Sp;return l(i,Va(ee(o,3)))}function bb(i){var o=he(i)?Ip:mI;return o(i)}function Ab(i,o,l){(l?$t(i,o,l):o===n)?o=1:o=fe(o);var c=he(i)?q1:vI;return c(i,o)}function Cb(i){var o=he(i)?G1:_I;return o(i)}function Sb(i){if(i==null)return 0;if(Qt(i))return Wa(i)?Gi(i):i.length;var o=Rt(i);return o==S||o==D?i.size:lc(i).length}function Rb(i,o,l){var c=he(i)?Kl:wI;return l&&$t(i,o,l)&&(o=n),c(i,ee(o,3))}var xb=ge(function(i,o){if(i==null)return[];var l=o.length;return l>1&&$t(i,o[0],o[1])?o=[]:l>2&&$t(o[0],o[1],o[2])&&(o=[o[0]]),Fp(i,Et(o,1),[])}),Ba=l1||function(){return wt.Date.now()};function Ob(i,o){if(typeof o!="function")throw new mn(u);return i=fe(i),function(){if(--i<1)return o.apply(this,arguments)}}function Ng(i,o,l){return o=l?n:o,o=i&&o==null?i.length:o,ur(i,Xe,n,n,n,n,o)}function Dg(i,o){var l;if(typeof o!="function")throw new mn(u);return i=fe(i),function(){return--i>0&&(l=o.apply(this,arguments)),i<=1&&(o=n),l}}var kc=ge(function(i,o,l){var c=X;if(l.length){var d=Lr(l,ns(kc));c|=Ae}return ur(i,c,o,l,d)}),kg=ge(function(i,o,l){var c=X|te;if(l.length){var d=Lr(l,ns(kg));c|=Ae}return ur(o,c,i,l,d)});function Pg(i,o,l){o=l?n:o;var c=ur(i,G,n,n,n,n,n,o);return c.placeholder=Pg.placeholder,c}function Lg(i,o,l){o=l?n:o;var c=ur(i,we,n,n,n,n,n,o);return c.placeholder=Lg.placeholder,c}function Mg(i,o,l){var c,d,m,y,w,b,x=0,O=!1,P=!1,H=!0;if(typeof i!="function")throw new mn(u);o=En(o)||0,Qe(l)&&(O=!!l.leading,P="maxWait"in l,m=P?ut(En(l.maxWait)||0,o):m,H="trailing"in l?!!l.trailing:H);function Q(rt){var Nn=c,dr=d;return c=d=n,x=rt,y=i.apply(dr,Nn),y}function re(rt){return x=rt,w=Ys(ye,o),O?Q(rt):y}function de(rt){var Nn=rt-b,dr=rt-x,tm=o-Nn;return P?St(tm,m-dr):tm}function ie(rt){var Nn=rt-b,dr=rt-x;return b===n||Nn>=o||Nn<0||P&&dr>=m}function ye(){var rt=Ba();if(ie(rt))return Te(rt);w=Ys(ye,de(rt))}function Te(rt){return w=n,H&&c?Q(rt):(c=d=n,y)}function un(){w!==n&&jp(w),x=0,c=b=d=w=n}function Vt(){return w===n?y:Te(Ba())}function ln(){var rt=Ba(),Nn=ie(rt);if(c=arguments,d=this,b=rt,Nn){if(w===n)return re(b);if(P)return jp(w),w=Ys(ye,o),Q(b)}return w===n&&(w=Ys(ye,o)),y}return ln.cancel=un,ln.flush=Vt,ln}var Nb=ge(function(i,o){return Ap(i,1,o)}),Db=ge(function(i,o,l){return Ap(i,En(o)||0,l)});function kb(i){return ur(i,Be)}function $a(i,o){if(typeof i!="function"||o!=null&&typeof o!="function")throw new mn(u);var l=function(){var c=arguments,d=o?o.apply(this,c):c[0],m=l.cache;if(m.has(d))return m.get(d);var y=i.apply(this,c);return l.cache=m.set(d,y)||m,y};return l.cache=new($a.Cache||or),l}$a.Cache=or;function Va(i){if(typeof i!="function")throw new mn(u);return function(){var o=arguments;switch(o.length){case 0:return!i.call(this);case 1:return!i.call(this,o[0]);case 2:return!i.call(this,o[0],o[1]);case 3:return!i.call(this,o[0],o[1],o[2])}return!i.apply(this,o)}}function Pb(i){return Dg(2,i)}var Lb=EI(function(i,o){o=o.length==1&&he(o[0])?je(o[0],sn(ee())):je(Et(o,1),sn(ee()));var l=o.length;return ge(function(c){for(var d=-1,m=St(c.length,l);++d<m;)c[d]=o[d].call(this,c[d]);return rn(i,this,c)})}),Pc=ge(function(i,o){var l=Lr(o,ns(Pc));return ur(i,Ae,n,o,l)}),Fg=ge(function(i,o){var l=Lr(o,ns(Fg));return ur(i,it,n,o,l)}),Mb=lr(function(i,o){return ur(i,se,n,n,n,o)});function Fb(i,o){if(typeof i!="function")throw new mn(u);return o=o===n?o:fe(o),ge(i,o)}function Ub(i,o){if(typeof i!="function")throw new mn(u);return o=o==null?0:ut(fe(o),0),ge(function(l){var c=l[o],d=$r(l,0,o);return c&&Pr(d,c),rn(i,this,d)})}function Bb(i,o,l){var c=!0,d=!0;if(typeof i!="function")throw new mn(u);return Qe(l)&&(c="leading"in l?!!l.leading:c,d="trailing"in l?!!l.trailing:d),Mg(i,o,{leading:c,maxWait:o,trailing:d})}function $b(i){return Ng(i,1)}function Vb(i,o){return Pc(yc(o),i)}function Hb(){if(!arguments.length)return[];var i=arguments[0];return he(i)?i:[i]}function Wb(i){return yn(i,L)}function zb(i,o){return o=typeof o=="function"?o:n,yn(i,L,o)}function Kb(i){return yn(i,E|L)}function jb(i,o){return o=typeof o=="function"?o:n,yn(i,E|L,o)}function qb(i,o){return o==null||bp(i,o,ht(o))}function On(i,o){return i===o||i!==i&&o!==o}var Gb=ka(oc),Xb=ka(function(i,o){return i>=o}),vi=Op(function(){return arguments}())?Op:function(i){return Ze(i)&&Pe.call(i,"callee")&&!mp.call(i,"callee")},he=C.isArray,Qb=Yd?sn(Yd):iI;function Qt(i){return i!=null&&Ha(i.length)&&!hr(i)}function nt(i){return Ze(i)&&Qt(i)}function Yb(i){return i===!0||i===!1||Ze(i)&&Bt(i)==Nr}var Vr=h1||Kc,Jb=Jd?sn(Jd):sI;function Zb(i){return Ze(i)&&i.nodeType===1&&!Js(i)}function eA(i){if(i==null)return!0;if(Qt(i)&&(he(i)||typeof i=="string"||typeof i.splice=="function"||Vr(i)||rs(i)||vi(i)))return!i.length;var o=Rt(i);if(o==S||o==D)return!i.size;if(Qs(i))return!lc(i).length;for(var l in i)if(Pe.call(i,l))return!1;return!0}function tA(i,o){return qs(i,o)}function nA(i,o,l){l=typeof l=="function"?l:n;var c=l?l(i,o):n;return c===n?qs(i,o,n,l):!!c}function Lc(i){if(!Ze(i))return!1;var o=Bt(i);return o==Dr||o==Fs||typeof i.message=="string"&&typeof i.name=="string"&&!Js(i)}function rA(i){return typeof i=="number"&&yp(i)}function hr(i){if(!Qe(i))return!1;var o=Bt(i);return o==_||o==T||o==Vi||o==$}function Ug(i){return typeof i=="number"&&i==fe(i)}function Ha(i){return typeof i=="number"&&i>-1&&i%1==0&&i<=Ee}function Qe(i){var o=typeof i;return i!=null&&(o=="object"||o=="function")}function Ze(i){return i!=null&&typeof i=="object"}var Bg=Zd?sn(Zd):aI;function iA(i,o){return i===o||uc(i,o,Ac(o))}function sA(i,o,l){return l=typeof l=="function"?l:n,uc(i,o,Ac(o),l)}function oA(i){return $g(i)&&i!=+i}function aA(i){if(zI(i))throw new ue(a);return Np(i)}function uA(i){return i===null}function lA(i){return i==null}function $g(i){return typeof i=="number"||Ze(i)&&Bt(i)==N}function Js(i){if(!Ze(i)||Bt(i)!=M)return!1;var o=ga(i);if(o===null)return!0;var l=Pe.call(o,"constructor")&&o.constructor;return typeof l=="function"&&l instanceof l&&ha.call(l)==s1}var Mc=ep?sn(ep):uI;function cA(i){return Ug(i)&&i>=-Ee&&i<=Ee}var Vg=tp?sn(tp):lI;function Wa(i){return typeof i=="string"||!he(i)&&Ze(i)&&Bt(i)==Y}function an(i){return typeof i=="symbol"||Ze(i)&&Bt(i)==q}var rs=np?sn(np):cI;function hA(i){return i===n}function fA(i){return Ze(i)&&Rt(i)==ne}function dA(i){return Ze(i)&&Bt(i)==me}var pA=ka(cc),gA=ka(function(i,o){return i<=o});function Hg(i){if(!i)return[];if(Qt(i))return Wa(i)?Rn(i):Xt(i);if(Bs&&i[Bs])return qE(i[Bs]());var o=Rt(i),l=o==S?Yl:o==D?ua:is;return l(i)}function fr(i){if(!i)return i===0?i:0;if(i=En(i),i===Ne||i===-Ne){var o=i<0?-1:1;return o*nr}return i===i?i:0}function fe(i){var o=fr(i),l=o%1;return o===o?l?o-l:o:0}function Wg(i){return i?di(fe(i),0,ct):0}function En(i){if(typeof i=="number")return i;if(an(i))return rr;if(Qe(i)){var o=typeof i.valueOf=="function"?i.valueOf():i;i=Qe(o)?o+"":o}if(typeof i!="string")return i===0?i:+i;i=up(i);var l=Qw.test(i);return l||Jw.test(i)?OE(i.slice(2),l?2:8):Xw.test(i)?rr:+i}function zg(i){return zn(i,Yt(i))}function mA(i){return i?di(fe(i),-Ee,Ee):i===0?i:0}function De(i){return i==null?"":on(i)}var vA=es(function(i,o){if(Qs(o)||Qt(o)){zn(o,ht(o),i);return}for(var l in o)Pe.call(o,l)&&zs(i,l,o[l])}),Kg=es(function(i,o){zn(o,Yt(o),i)}),za=es(function(i,o,l,c){zn(o,Yt(o),i,c)}),yA=es(function(i,o,l,c){zn(o,ht(o),i,c)}),_A=lr(rc);function wA(i,o){var l=Zi(i);return o==null?l:Tp(l,o)}var EA=ge(function(i,o){i=Ue(i);var l=-1,c=o.length,d=c>2?o[2]:n;for(d&&$t(o[0],o[1],d)&&(c=1);++l<c;)for(var m=o[l],y=Yt(m),w=-1,b=y.length;++w<b;){var x=y[w],O=i[x];(O===n||On(O,Qi[x])&&!Pe.call(i,x))&&(i[x]=m[x])}return i}),IA=ge(function(i){return i.push(n,ug),rn(jg,n,i)});function TA(i,o){return ip(i,ee(o,3),Wn)}function bA(i,o){return ip(i,ee(o,3),sc)}function AA(i,o){return i==null?i:ic(i,ee(o,3),Yt)}function CA(i,o){return i==null?i:Rp(i,ee(o,3),Yt)}function SA(i,o){return i&&Wn(i,ee(o,3))}function RA(i,o){return i&&sc(i,ee(o,3))}function xA(i){return i==null?[]:Aa(i,ht(i))}function OA(i){return i==null?[]:Aa(i,Yt(i))}function Fc(i,o,l){var c=i==null?n:pi(i,o);return c===n?l:c}function NA(i,o){return i!=null&&hg(i,o,eI)}function Uc(i,o){return i!=null&&hg(i,o,tI)}var DA=rg(function(i,o,l){o!=null&&typeof o.toString!="function"&&(o=fa.call(o)),i[o]=l},$c(Jt)),kA=rg(function(i,o,l){o!=null&&typeof o.toString!="function"&&(o=fa.call(o)),Pe.call(i,o)?i[o].push(l):i[o]=[l]},ee),PA=ge(js);function ht(i){return Qt(i)?Ep(i):lc(i)}function Yt(i){return Qt(i)?Ep(i,!0):hI(i)}function LA(i,o){var l={};return o=ee(o,3),Wn(i,function(c,d,m){ar(l,o(c,d,m),c)}),l}function MA(i,o){var l={};return o=ee(o,3),Wn(i,function(c,d,m){ar(l,d,o(c,d,m))}),l}var FA=es(function(i,o,l){Ca(i,o,l)}),jg=es(function(i,o,l,c){Ca(i,o,l,c)}),UA=lr(function(i,o){var l={};if(i==null)return l;var c=!1;o=je(o,function(m){return m=Br(m,i),c||(c=m.length>1),m}),zn(i,Tc(i),l),c&&(l=yn(l,E|A|L,DI));for(var d=o.length;d--;)gc(l,o[d]);return l});function BA(i,o){return qg(i,Va(ee(o)))}var $A=lr(function(i,o){return i==null?{}:dI(i,o)});function qg(i,o){if(i==null)return{};var l=je(Tc(i),function(c){return[c]});return o=ee(o),Up(i,l,function(c,d){return o(c,d[0])})}function VA(i,o,l){o=Br(o,i);var c=-1,d=o.length;for(d||(d=1,i=n);++c<d;){var m=i==null?n:i[Kn(o[c])];m===n&&(c=d,m=l),i=hr(m)?m.call(i):m}return i}function HA(i,o,l){return i==null?i:Gs(i,o,l)}function WA(i,o,l,c){return c=typeof c=="function"?c:n,i==null?i:Gs(i,o,l,c)}var Gg=og(ht),Xg=og(Yt);function zA(i,o,l){var c=he(i),d=c||Vr(i)||rs(i);if(o=ee(o,4),l==null){var m=i&&i.constructor;d?l=c?new m:[]:Qe(i)?l=hr(m)?Zi(ga(i)):{}:l={}}return(d?gn:Wn)(i,function(y,w,b){return o(l,y,w,b)}),l}function KA(i,o){return i==null?!0:gc(i,o)}function jA(i,o,l){return i==null?i:Wp(i,o,yc(l))}function qA(i,o,l,c){return c=typeof c=="function"?c:n,i==null?i:Wp(i,o,yc(l),c)}function is(i){return i==null?[]:Ql(i,ht(i))}function GA(i){return i==null?[]:Ql(i,Yt(i))}function XA(i,o,l){return l===n&&(l=o,o=n),l!==n&&(l=En(l),l=l===l?l:0),o!==n&&(o=En(o),o=o===o?o:0),di(En(i),o,l)}function QA(i,o,l){return o=fr(o),l===n?(l=o,o=0):l=fr(l),i=En(i),nI(i,o,l)}function YA(i,o,l){if(l&&typeof l!="boolean"&&$t(i,o,l)&&(o=l=n),l===n&&(typeof o=="boolean"?(l=o,o=n):typeof i=="boolean"&&(l=i,i=n)),i===n&&o===n?(i=0,o=1):(i=fr(i),o===n?(o=i,i=0):o=fr(o)),i>o){var c=i;i=o,o=c}if(l||i%1||o%1){var d=_p();return St(i+d*(o-i+xE("1e-"+((d+"").length-1))),o)}return fc(i,o)}var JA=ts(function(i,o,l){return o=o.toLowerCase(),i+(l?Qg(o):o)});function Qg(i){return Bc(De(i).toLowerCase())}function Yg(i){return i=De(i),i&&i.replace(eE,HE).replace(_E,"")}function ZA(i,o,l){i=De(i),o=on(o);var c=i.length;l=l===n?c:di(fe(l),0,c);var d=l;return l-=o.length,l>=0&&i.slice(l,d)==o}function eC(i){return i=De(i),i&&Pw.test(i)?i.replace(Rd,WE):i}function tC(i){return i=De(i),i&&$w.test(i)?i.replace(Pl,"\\$&"):i}var nC=ts(function(i,o,l){return i+(l?"-":"")+o.toLowerCase()}),rC=ts(function(i,o,l){return i+(l?" ":"")+o.toLowerCase()}),iC=eg("toLowerCase");function sC(i,o,l){i=De(i),o=fe(o);var c=o?Gi(i):0;if(!o||c>=o)return i;var d=(o-c)/2;return Da(_a(d),l)+i+Da(ya(d),l)}function oC(i,o,l){i=De(i),o=fe(o);var c=o?Gi(i):0;return o&&c<o?i+Da(o-c,l):i}function aC(i,o,l){i=De(i),o=fe(o);var c=o?Gi(i):0;return o&&c<o?Da(o-c,l)+i:i}function uC(i,o,l){return l||o==null?o=0:o&&(o=+o),g1(De(i).replace(Ll,""),o||0)}function lC(i,o,l){return(l?$t(i,o,l):o===n)?o=1:o=fe(o),dc(De(i),o)}function cC(){var i=arguments,o=De(i[0]);return i.length<3?o:o.replace(i[1],i[2])}var hC=ts(function(i,o,l){return i+(l?"_":"")+o.toLowerCase()});function fC(i,o,l){return l&&typeof l!="number"&&$t(i,o,l)&&(o=l=n),l=l===n?ct:l>>>0,l?(i=De(i),i&&(typeof o=="string"||o!=null&&!Mc(o))&&(o=on(o),!o&&qi(i))?$r(Rn(i),0,l):i.split(o,l)):[]}var dC=ts(function(i,o,l){return i+(l?" ":"")+Bc(o)});function pC(i,o,l){return i=De(i),l=l==null?0:di(fe(l),0,i.length),o=on(o),i.slice(l,l+o.length)==o}function gC(i,o,l){var c=g.templateSettings;l&&$t(i,o,l)&&(o=n),i=De(i),o=za({},o,c,ag);var d=za({},o.imports,c.imports,ag),m=ht(d),y=Ql(d,m),w,b,x=0,O=o.interpolate||ra,P="__p += '",H=Jl((o.escape||ra).source+"|"+O.source+"|"+(O===xd?Gw:ra).source+"|"+(o.evaluate||ra).source+"|$","g"),Q="//# sourceURL="+(Pe.call(o,"sourceURL")?(o.sourceURL+"").replace(/\s/g," "):"lodash.templateSources["+ ++bE+"]")+`
`;i.replace(H,function(ie,ye,Te,un,Vt,ln){return Te||(Te=un),P+=i.slice(x,ln).replace(tE,zE),ye&&(w=!0,P+=`' +
__e(`+ye+`) +
'`),Vt&&(b=!0,P+=`';
`+Vt+`;
__p += '`),Te&&(P+=`' +
((__t = (`+Te+`)) == null ? '' : __t) +
'`),x=ln+ie.length,ie}),P+=`';
`;var re=Pe.call(o,"variable")&&o.variable;if(!re)P=`with (obj) {
`+P+`
}
`;else if(jw.test(re))throw new ue(h);P=(b?P.replace(Ow,""):P).replace(Nw,"$1").replace(Dw,"$1;"),P="function("+(re||"obj")+`) {
`+(re?"":`obj || (obj = {});
`)+"var __t, __p = ''"+(w?", __e = _.escape":"")+(b?`, __j = Array.prototype.join;
function print() { __p += __j.call(arguments, '') }
`:`;
`)+P+`return __p
}`;var de=Zg(function(){return Oe(m,Q+"return "+P).apply(n,y)});if(de.source=P,Lc(de))throw de;return de}function mC(i){return De(i).toLowerCase()}function vC(i){return De(i).toUpperCase()}function yC(i,o,l){if(i=De(i),i&&(l||o===n))return up(i);if(!i||!(o=on(o)))return i;var c=Rn(i),d=Rn(o),m=lp(c,d),y=cp(c,d)+1;return $r(c,m,y).join("")}function _C(i,o,l){if(i=De(i),i&&(l||o===n))return i.slice(0,fp(i)+1);if(!i||!(o=on(o)))return i;var c=Rn(i),d=cp(c,Rn(o))+1;return $r(c,0,d).join("")}function wC(i,o,l){if(i=De(i),i&&(l||o===n))return i.replace(Ll,"");if(!i||!(o=on(o)))return i;var c=Rn(i),d=lp(c,Rn(o));return $r(c,d).join("")}function EC(i,o){var l=$e,c=Ft;if(Qe(o)){var d="separator"in o?o.separator:d;l="length"in o?fe(o.length):l,c="omission"in o?on(o.omission):c}i=De(i);var m=i.length;if(qi(i)){var y=Rn(i);m=y.length}if(l>=m)return i;var w=l-Gi(c);if(w<1)return c;var b=y?$r(y,0,w).join(""):i.slice(0,w);if(d===n)return b+c;if(y&&(w+=b.length-w),Mc(d)){if(i.slice(w).search(d)){var x,O=b;for(d.global||(d=Jl(d.source,De(Od.exec(d))+"g")),d.lastIndex=0;x=d.exec(O);)var P=x.index;b=b.slice(0,P===n?w:P)}}else if(i.indexOf(on(d),w)!=w){var H=b.lastIndexOf(d);H>-1&&(b=b.slice(0,H))}return b+c}function IC(i){return i=De(i),i&&kw.test(i)?i.replace(Sd,YE):i}var TC=ts(function(i,o,l){return i+(l?" ":"")+o.toUpperCase()}),Bc=eg("toUpperCase");function Jg(i,o,l){return i=De(i),o=l?n:o,o===n?jE(i)?e1(i):FE(i):i.match(o)||[]}var Zg=ge(function(i,o){try{return rn(i,n,o)}catch(l){return Lc(l)?l:new ue(l)}}),bC=lr(function(i,o){return gn(o,function(l){l=Kn(l),ar(i,l,kc(i[l],i))}),i});function AC(i){var o=i==null?0:i.length,l=ee();return i=o?je(i,function(c){if(typeof c[1]!="function")throw new mn(u);return[l(c[0]),c[1]]}):[],ge(function(c){for(var d=-1;++d<o;){var m=i[d];if(rn(m[0],this,c))return rn(m[1],this,c)}})}function CC(i){return Y1(yn(i,E))}function $c(i){return function(){return i}}function SC(i,o){return i==null||i!==i?o:i}var RC=ng(),xC=ng(!0);function Jt(i){return i}function Vc(i){return Dp(typeof i=="function"?i:yn(i,E))}function OC(i){return Pp(yn(i,E))}function NC(i,o){return Lp(i,yn(o,E))}var DC=ge(function(i,o){return function(l){return js(l,i,o)}}),kC=ge(function(i,o){return function(l){return js(i,l,o)}});function Hc(i,o,l){var c=ht(o),d=Aa(o,c);l==null&&!(Qe(o)&&(d.length||!c.length))&&(l=o,o=i,i=this,d=Aa(o,ht(o)));var m=!(Qe(l)&&"chain"in l)||!!l.chain,y=hr(i);return gn(d,function(w){var b=o[w];i[w]=b,y&&(i.prototype[w]=function(){var x=this.__chain__;if(m||x){var O=i(this.__wrapped__),P=O.__actions__=Xt(this.__actions__);return P.push({func:b,args:arguments,thisArg:i}),O.__chain__=x,O}return b.apply(i,Pr([this.value()],arguments))})}),i}function PC(){return wt._===this&&(wt._=o1),this}function Wc(){}function LC(i){return i=fe(i),ge(function(o){return Mp(o,i)})}var MC=wc(je),FC=wc(rp),UC=wc(Kl);function em(i){return Sc(i)?jl(Kn(i)):pI(i)}function BC(i){return function(o){return i==null?n:pi(i,o)}}var $C=ig(),VC=ig(!0);function zc(){return[]}function Kc(){return!1}function HC(){return{}}function WC(){return""}function zC(){return!0}function KC(i,o){if(i=fe(i),i<1||i>Ee)return[];var l=ct,c=St(i,ct);o=ee(o),i-=ct;for(var d=Xl(c,o);++l<i;)o(l);return d}function jC(i){return he(i)?je(i,Kn):an(i)?[i]:Xt(wg(De(i)))}function qC(i){var o=++i1;return De(i)+o}var GC=Na(function(i,o){return i+o},0),XC=Ec("ceil"),QC=Na(function(i,o){return i/o},1),YC=Ec("floor");function JC(i){return i&&i.length?ba(i,Jt,oc):n}function ZC(i,o){return i&&i.length?ba(i,ee(o,2),oc):n}function eS(i){return op(i,Jt)}function tS(i,o){return op(i,ee(o,2))}function nS(i){return i&&i.length?ba(i,Jt,cc):n}function rS(i,o){return i&&i.length?ba(i,ee(o,2),cc):n}var iS=Na(function(i,o){return i*o},1),sS=Ec("round"),oS=Na(function(i,o){return i-o},0);function aS(i){return i&&i.length?Gl(i,Jt):0}function uS(i,o){return i&&i.length?Gl(i,ee(o,2)):0}return g.after=Ob,g.ary=Ng,g.assign=vA,g.assignIn=Kg,g.assignInWith=za,g.assignWith=yA,g.at=_A,g.before=Dg,g.bind=kc,g.bindAll=bC,g.bindKey=kg,g.castArray=Hb,g.chain=Rg,g.chunk=YI,g.compact=JI,g.concat=ZI,g.cond=AC,g.conforms=CC,g.constant=$c,g.countBy=ab,g.create=wA,g.curry=Pg,g.curryRight=Lg,g.debounce=Mg,g.defaults=EA,g.defaultsDeep=IA,g.defer=Nb,g.delay=Db,g.difference=eT,g.differenceBy=tT,g.differenceWith=nT,g.drop=rT,g.dropRight=iT,g.dropRightWhile=sT,g.dropWhile=oT,g.fill=aT,g.filter=lb,g.flatMap=fb,g.flatMapDeep=db,g.flatMapDepth=pb,g.flatten=bg,g.flattenDeep=uT,g.flattenDepth=lT,g.flip=kb,g.flow=RC,g.flowRight=xC,g.fromPairs=cT,g.functions=xA,g.functionsIn=OA,g.groupBy=gb,g.initial=fT,g.intersection=dT,g.intersectionBy=pT,g.intersectionWith=gT,g.invert=DA,g.invertBy=kA,g.invokeMap=vb,g.iteratee=Vc,g.keyBy=yb,g.keys=ht,g.keysIn=Yt,g.map=Ua,g.mapKeys=LA,g.mapValues=MA,g.matches=OC,g.matchesProperty=NC,g.memoize=$a,g.merge=FA,g.mergeWith=jg,g.method=DC,g.methodOf=kC,g.mixin=Hc,g.negate=Va,g.nthArg=LC,g.omit=UA,g.omitBy=BA,g.once=Pb,g.orderBy=_b,g.over=MC,g.overArgs=Lb,g.overEvery=FC,g.overSome=UC,g.partial=Pc,g.partialRight=Fg,g.partition=wb,g.pick=$A,g.pickBy=qg,g.property=em,g.propertyOf=BC,g.pull=_T,g.pullAll=Cg,g.pullAllBy=wT,g.pullAllWith=ET,g.pullAt=IT,g.range=$C,g.rangeRight=VC,g.rearg=Mb,g.reject=Tb,g.remove=TT,g.rest=Fb,g.reverse=Nc,g.sampleSize=Ab,g.set=HA,g.setWith=WA,g.shuffle=Cb,g.slice=bT,g.sortBy=xb,g.sortedUniq=NT,g.sortedUniqBy=DT,g.split=fC,g.spread=Ub,g.tail=kT,g.take=PT,g.takeRight=LT,g.takeRightWhile=MT,g.takeWhile=FT,g.tap=JT,g.throttle=Bb,g.thru=Fa,g.toArray=Hg,g.toPairs=Gg,g.toPairsIn=Xg,g.toPath=jC,g.toPlainObject=zg,g.transform=zA,g.unary=$b,g.union=UT,g.unionBy=BT,g.unionWith=$T,g.uniq=VT,g.uniqBy=HT,g.uniqWith=WT,g.unset=KA,g.unzip=Dc,g.unzipWith=Sg,g.update=jA,g.updateWith=qA,g.values=is,g.valuesIn=GA,g.without=zT,g.words=Jg,g.wrap=Vb,g.xor=KT,g.xorBy=jT,g.xorWith=qT,g.zip=GT,g.zipObject=XT,g.zipObjectDeep=QT,g.zipWith=YT,g.entries=Gg,g.entriesIn=Xg,g.extend=Kg,g.extendWith=za,Hc(g,g),g.add=GC,g.attempt=Zg,g.camelCase=JA,g.capitalize=Qg,g.ceil=XC,g.clamp=XA,g.clone=Wb,g.cloneDeep=Kb,g.cloneDeepWith=jb,g.cloneWith=zb,g.conformsTo=qb,g.deburr=Yg,g.defaultTo=SC,g.divide=QC,g.endsWith=ZA,g.eq=On,g.escape=eC,g.escapeRegExp=tC,g.every=ub,g.find=cb,g.findIndex=Ig,g.findKey=TA,g.findLast=hb,g.findLastIndex=Tg,g.findLastKey=bA,g.floor=YC,g.forEach=xg,g.forEachRight=Og,g.forIn=AA,g.forInRight=CA,g.forOwn=SA,g.forOwnRight=RA,g.get=Fc,g.gt=Gb,g.gte=Xb,g.has=NA,g.hasIn=Uc,g.head=Ag,g.identity=Jt,g.includes=mb,g.indexOf=hT,g.inRange=QA,g.invoke=PA,g.isArguments=vi,g.isArray=he,g.isArrayBuffer=Qb,g.isArrayLike=Qt,g.isArrayLikeObject=nt,g.isBoolean=Yb,g.isBuffer=Vr,g.isDate=Jb,g.isElement=Zb,g.isEmpty=eA,g.isEqual=tA,g.isEqualWith=nA,g.isError=Lc,g.isFinite=rA,g.isFunction=hr,g.isInteger=Ug,g.isLength=Ha,g.isMap=Bg,g.isMatch=iA,g.isMatchWith=sA,g.isNaN=oA,g.isNative=aA,g.isNil=lA,g.isNull=uA,g.isNumber=$g,g.isObject=Qe,g.isObjectLike=Ze,g.isPlainObject=Js,g.isRegExp=Mc,g.isSafeInteger=cA,g.isSet=Vg,g.isString=Wa,g.isSymbol=an,g.isTypedArray=rs,g.isUndefined=hA,g.isWeakMap=fA,g.isWeakSet=dA,g.join=mT,g.kebabCase=nC,g.last=wn,g.lastIndexOf=vT,g.lowerCase=rC,g.lowerFirst=iC,g.lt=pA,g.lte=gA,g.max=JC,g.maxBy=ZC,g.mean=eS,g.meanBy=tS,g.min=nS,g.minBy=rS,g.stubArray=zc,g.stubFalse=Kc,g.stubObject=HC,g.stubString=WC,g.stubTrue=zC,g.multiply=iS,g.nth=yT,g.noConflict=PC,g.noop=Wc,g.now=Ba,g.pad=sC,g.padEnd=oC,g.padStart=aC,g.parseInt=uC,g.random=YA,g.reduce=Eb,g.reduceRight=Ib,g.repeat=lC,g.replace=cC,g.result=VA,g.round=sS,g.runInContext=I,g.sample=bb,g.size=Sb,g.snakeCase=hC,g.some=Rb,g.sortedIndex=AT,g.sortedIndexBy=CT,g.sortedIndexOf=ST,g.sortedLastIndex=RT,g.sortedLastIndexBy=xT,g.sortedLastIndexOf=OT,g.startCase=dC,g.startsWith=pC,g.subtract=oS,g.sum=aS,g.sumBy=uS,g.template=gC,g.times=KC,g.toFinite=fr,g.toInteger=fe,g.toLength=Wg,g.toLower=mC,g.toNumber=En,g.toSafeInteger=mA,g.toString=De,g.toUpper=vC,g.trim=yC,g.trimEnd=_C,g.trimStart=wC,g.truncate=EC,g.unescape=IC,g.uniqueId=qC,g.upperCase=TC,g.upperFirst=Bc,g.each=xg,g.eachRight=Og,g.first=Ag,Hc(g,function(){var i={};return Wn(g,function(o,l){Pe.call(g.prototype,l)||(i[l]=o)}),i}(),{chain:!1}),g.VERSION=r,gn(["bind","bindKey","curry","curryRight","partial","partialRight"],function(i){g[i].placeholder=g}),gn(["drop","take"],function(i,o){_e.prototype[i]=function(l){l=l===n?1:ut(fe(l),0);var c=this.__filtered__&&!o?new _e(this):this.clone();return c.__filtered__?c.__takeCount__=St(l,c.__takeCount__):c.__views__.push({size:St(l,ct),type:i+(c.__dir__<0?"Right":"")}),c},_e.prototype[i+"Right"]=function(l){return this.reverse()[i](l).reverse()}}),gn(["filter","map","takeWhile"],function(i,o){var l=o+1,c=l==xr||l==yt;_e.prototype[i]=function(d){var m=this.clone();return m.__iteratees__.push({iteratee:ee(d,3),type:l}),m.__filtered__=m.__filtered__||c,m}}),gn(["head","last"],function(i,o){var l="take"+(o?"Right":"");_e.prototype[i]=function(){return this[l](1).value()[0]}}),gn(["initial","tail"],function(i,o){var l="drop"+(o?"":"Right");_e.prototype[i]=function(){return this.__filtered__?new _e(this):this[l](1)}}),_e.prototype.compact=function(){return this.filter(Jt)},_e.prototype.find=function(i){return this.filter(i).head()},_e.prototype.findLast=function(i){return this.reverse().find(i)},_e.prototype.invokeMap=ge(function(i,o){return typeof i=="function"?new _e(this):this.map(function(l){return js(l,i,o)})}),_e.prototype.reject=function(i){return this.filter(Va(ee(i)))},_e.prototype.slice=function(i,o){i=fe(i);var l=this;return l.__filtered__&&(i>0||o<0)?new _e(l):(i<0?l=l.takeRight(-i):i&&(l=l.drop(i)),o!==n&&(o=fe(o),l=o<0?l.dropRight(-o):l.take(o-i)),l)},_e.prototype.takeRightWhile=function(i){return this.reverse().takeWhile(i).reverse()},_e.prototype.toArray=function(){return this.take(ct)},Wn(_e.prototype,function(i,o){var l=/^(?:filter|find|map|reject)|While$/.test(o),c=/^(?:head|last)$/.test(o),d=g[c?"take"+(o=="last"?"Right":""):o],m=c||/^find/.test(o);d&&(g.prototype[o]=function(){var y=this.__wrapped__,w=c?[1]:arguments,b=y instanceof _e,x=w[0],O=b||he(y),P=function(ye){var Te=d.apply(g,Pr([ye],w));return c&&H?Te[0]:Te};O&&l&&typeof x=="function"&&x.length!=1&&(b=O=!1);var H=this.__chain__,Q=!!this.__actions__.length,re=m&&!H,de=b&&!Q;if(!m&&O){y=de?y:new _e(this);var ie=i.apply(y,w);return ie.__actions__.push({func:Fa,args:[P],thisArg:n}),new vn(ie,H)}return re&&de?i.apply(this,w):(ie=this.thru(P),re?c?ie.value()[0]:ie.value():ie)})}),gn(["pop","push","shift","sort","splice","unshift"],function(i){var o=la[i],l=/^(?:push|sort|unshift)$/.test(i)?"tap":"thru",c=/^(?:pop|shift)$/.test(i);g.prototype[i]=function(){var d=arguments;if(c&&!this.__chain__){var m=this.value();return o.apply(he(m)?m:[],d)}return this[l](function(y){return o.apply(he(y)?y:[],d)})}}),Wn(_e.prototype,function(i,o){var l=g[o];if(l){var c=l.name+"";Pe.call(Ji,c)||(Ji[c]=[]),Ji[c].push({name:o,func:l})}}),Ji[Oa(n,te).name]=[{name:"wrapper",func:n}],_e.prototype.clone=I1,_e.prototype.reverse=T1,_e.prototype.value=b1,g.prototype.at=ZT,g.prototype.chain=eb,g.prototype.commit=tb,g.prototype.next=nb,g.prototype.plant=ib,g.prototype.reverse=sb,g.prototype.toJSON=g.prototype.valueOf=g.prototype.value=ob,g.prototype.first=g.prototype.head,Bs&&(g.prototype[Bs]=rb),g},Xi=t1();li?((li.exports=Xi)._=Xi,Vl._=Xi):wt._=Xi}).call(os)})($x,wo);/**
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
 *//**
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
 */const $y=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let s=t.charCodeAt(r);s<128?e[n++]=s:s<2048?(e[n++]=s>>6|192,e[n++]=s&63|128):(s&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(s=65536+((s&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=s>>18|240,e[n++]=s>>12&63|128,e[n++]=s>>6&63|128,e[n++]=s&63|128):(e[n++]=s>>12|224,e[n++]=s>>6&63|128,e[n++]=s&63|128)}return e},Vx=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const s=t[n++];if(s<128)e[r++]=String.fromCharCode(s);else if(s>191&&s<224){const a=t[n++];e[r++]=String.fromCharCode((s&31)<<6|a&63)}else if(s>239&&s<365){const a=t[n++],u=t[n++],h=t[n++],f=((s&7)<<18|(a&63)<<12|(u&63)<<6|h&63)-65536;e[r++]=String.fromCharCode(55296+(f>>10)),e[r++]=String.fromCharCode(56320+(f&1023))}else{const a=t[n++],u=t[n++];e[r++]=String.fromCharCode((s&15)<<12|(a&63)<<6|u&63)}}return e.join("")},Vy={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let s=0;s<t.length;s+=3){const a=t[s],u=s+1<t.length,h=u?t[s+1]:0,f=s+2<t.length,p=f?t[s+2]:0,v=a>>2,E=(a&3)<<4|h>>4;let A=(h&15)<<2|p>>6,L=p&63;f||(L=64,u||(A=64)),r.push(n[v],n[E],n[A],n[L])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray($y(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vx(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let s=0;s<t.length;){const a=n[t.charAt(s++)],h=s<t.length?n[t.charAt(s)]:0;++s;const p=s<t.length?n[t.charAt(s)]:64;++s;const E=s<t.length?n[t.charAt(s)]:64;if(++s,a==null||h==null||p==null||E==null)throw new Hx;const A=a<<2|h>>4;if(r.push(A),p!==64){const L=h<<4&240|p>>2;if(r.push(L),E!==64){const z=p<<6&192|E;r.push(z)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}};class Hx extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const Wx=function(t){const e=$y(t);return Vy.encodeByteArray(e,!0)},Iu=function(t){return Wx(t).replace(/\./g,"")},Hy=function(t){try{return Vy.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
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
 */function zx(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
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
 */const Kx=()=>zx().__FIREBASE_DEFAULTS__,jx=()=>{if(typeof process>"u"||typeof process.env>"u")return;const t={}.__FIREBASE_DEFAULTS__;if(t)return JSON.parse(t)},qx=()=>{if(typeof document>"u")return;let t;try{t=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=t&&Hy(t[1]);return e&&JSON.parse(e)},Df=()=>{try{return Kx()||jx()||qx()}catch(t){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${t}`);return}},Wy=t=>{var e,n;return(n=(e=Df())===null||e===void 0?void 0:e.emulatorHosts)===null||n===void 0?void 0:n[t]},Gx=t=>{const e=Wy(t);if(!e)return;const n=e.lastIndexOf(":");if(n<=0||n+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const r=parseInt(e.substring(n+1),10);return e[0]==="["?[e.substring(1,n-1),r]:[e.substring(0,n),r]},Xx=()=>{var t;return(t=Df())===null||t===void 0?void 0:t.config},zy=t=>{var e;return(e=Df())===null||e===void 0?void 0:e[`_${t}`]};/**
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
 */class Qx{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
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
 */function Yx(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},r=e||"demo-project",s=t.iat||0,a=t.sub||t.user_id;if(!a)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const u=Object.assign({iss:`https://securetoken.google.com/${r}`,aud:r,iat:s,exp:s+3600,auth_time:s,sub:a,user_id:a,firebase:{sign_in_provider:"custom",identities:{}}},t),h="";return[Iu(JSON.stringify(n)),Iu(JSON.stringify(u)),h].join(".")}/**
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
 */function Mt(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function Jx(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(Mt())}function Zx(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function eO(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function tO(){const t=Mt();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function nO(){try{return typeof indexedDB=="object"}catch{return!1}}function rO(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(r);s.onsuccess=()=>{s.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},s.onupgradeneeded=()=>{n=!1},s.onerror=()=>{var a;e(((a=s.error)===null||a===void 0?void 0:a.message)||"")}}catch(n){e(n)}})}/**
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
 */const iO="FirebaseError";class Rr extends Error{constructor(e,n,r){super(n),this.code=e,this.customData=r,this.name=iO,Object.setPrototypeOf(this,Rr.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Lo.prototype.create)}}class Lo{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},s=`${this.service}/${e}`,a=this.errors[e],u=a?sO(a,r):"Error",h=`${this.serviceName}: ${u} (${s}).`;return new Rr(s,h,r)}}function sO(t,e){return t.replace(oO,(n,r)=>{const s=e[r];return s!=null?String(s):`<${r}?>`})}const oO=/\{\$([^}]+)}/g;function aO(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Tu(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const s of n){if(!r.includes(s))return!1;const a=t[s],u=e[s];if(Dm(a)&&Dm(u)){if(!Tu(a,u))return!1}else if(a!==u)return!1}for(const s of r)if(!n.includes(s))return!1;return!0}function Dm(t){return t!==null&&typeof t=="object"}/**
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
 */function Mo(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(s=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function uO(t,e){const n=new lO(t,e);return n.subscribe.bind(n)}class lO{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let s;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");cO(e,["next","error","complete"])?s=e:s={next:e,error:n,complete:r},s.next===void 0&&(s.next=th),s.error===void 0&&(s.error=th),s.complete===void 0&&(s.complete=th);const a=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),a}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console<"u"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function cO(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function th(){}/**
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
 */function Vn(t){return t&&t._delegate?t._delegate:t}class ki{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
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
 */const Ei="[DEFAULT]";/**
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
 */class hO{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new Qx;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:n});s&&r.resolve(s)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(a){if(s)return null;throw a}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(dO(e))try{this.getOrInitializeService({instanceIdentifier:Ei})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(n);try{const a=this.getOrInitializeService({instanceIdentifier:s});r.resolve(a)}catch{}}}}clearInstance(e=Ei){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ei){return this.instances.has(e)}getOptions(e=Ei){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[a,u]of this.instancesDeferred.entries()){const h=this.normalizeInstanceIdentifier(a);r===h&&u.resolve(s)}return s}onInit(e,n){var r;const s=this.normalizeInstanceIdentifier(n),a=(r=this.onInitCallbacks.get(s))!==null&&r!==void 0?r:new Set;a.add(e),this.onInitCallbacks.set(s,a);const u=this.instances.get(s);return u&&e(u,s),()=>{a.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(r)for(const s of r)try{s(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:fO(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=Ei){return this.component?this.component.multipleInstances?e:Ei:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function fO(t){return t===Ei?void 0:t}function dO(t){return t.instantiationMode==="EAGER"}/**
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
 */class pO{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new hO(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
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
 */var xe;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(xe||(xe={}));const gO={debug:xe.DEBUG,verbose:xe.VERBOSE,info:xe.INFO,warn:xe.WARN,error:xe.ERROR,silent:xe.SILENT},mO=xe.INFO,vO={[xe.DEBUG]:"log",[xe.VERBOSE]:"log",[xe.INFO]:"info",[xe.WARN]:"warn",[xe.ERROR]:"error"},yO=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),s=vO[e];if(s)console[s](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class kf{constructor(e){this.name=e,this._logLevel=mO,this._logHandler=yO,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in xe))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?gO[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,xe.DEBUG,...e),this._logHandler(this,xe.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,xe.VERBOSE,...e),this._logHandler(this,xe.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,xe.INFO,...e),this._logHandler(this,xe.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,xe.WARN,...e),this._logHandler(this,xe.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,xe.ERROR,...e),this._logHandler(this,xe.ERROR,...e)}}const _O=(t,e)=>e.some(n=>t instanceof n);let km,Pm;function wO(){return km||(km=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function EO(){return Pm||(Pm=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const Ky=new WeakMap,Lh=new WeakMap,jy=new WeakMap,nh=new WeakMap,Pf=new WeakMap;function IO(t){const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("success",a),t.removeEventListener("error",u)},a=()=>{n(Yr(t.result)),s()},u=()=>{r(t.error),s()};t.addEventListener("success",a),t.addEventListener("error",u)});return e.then(n=>{n instanceof IDBCursor&&Ky.set(n,t)}).catch(()=>{}),Pf.set(e,t),e}function TO(t){if(Lh.has(t))return;const e=new Promise((n,r)=>{const s=()=>{t.removeEventListener("complete",a),t.removeEventListener("error",u),t.removeEventListener("abort",u)},a=()=>{n(),s()},u=()=>{r(t.error||new DOMException("AbortError","AbortError")),s()};t.addEventListener("complete",a),t.addEventListener("error",u),t.addEventListener("abort",u)});Lh.set(t,e)}let Mh={get(t,e,n){if(t instanceof IDBTransaction){if(e==="done")return Lh.get(t);if(e==="objectStoreNames")return t.objectStoreNames||jy.get(t);if(e==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return Yr(t[e])},set(t,e,n){return t[e]=n,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function bO(t){Mh=t(Mh)}function AO(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...n){const r=t.call(rh(this),e,...n);return jy.set(r,e.sort?e.sort():[e]),Yr(r)}:EO().includes(t)?function(...e){return t.apply(rh(this),e),Yr(Ky.get(this))}:function(...e){return Yr(t.apply(rh(this),e))}}function CO(t){return typeof t=="function"?AO(t):(t instanceof IDBTransaction&&TO(t),_O(t,wO())?new Proxy(t,Mh):t)}function Yr(t){if(t instanceof IDBRequest)return IO(t);if(nh.has(t))return nh.get(t);const e=CO(t);return e!==t&&(nh.set(t,e),Pf.set(e,t)),e}const rh=t=>Pf.get(t);function SO(t,e,{blocked:n,upgrade:r,blocking:s,terminated:a}={}){const u=indexedDB.open(t,e),h=Yr(u);return r&&u.addEventListener("upgradeneeded",f=>{r(Yr(u.result),f.oldVersion,f.newVersion,Yr(u.transaction),f)}),n&&u.addEventListener("blocked",f=>n(f.oldVersion,f.newVersion,f)),h.then(f=>{a&&f.addEventListener("close",()=>a()),s&&f.addEventListener("versionchange",p=>s(p.oldVersion,p.newVersion,p))}).catch(()=>{}),h}const RO=["get","getKey","getAll","getAllKeys","count"],xO=["put","add","delete","clear"],ih=new Map;function Lm(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(ih.get(e))return ih.get(e);const n=e.replace(/FromIndex$/,""),r=e!==n,s=xO.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!(s||RO.includes(n)))return;const a=async function(u,...h){const f=this.transaction(u,s?"readwrite":"readonly");let p=f.store;return r&&(p=p.index(h.shift())),(await Promise.all([p[n](...h),s&&f.done]))[0]};return ih.set(e,a),a}bO(t=>({...t,get:(e,n,r)=>Lm(e,n)||t.get(e,n,r),has:(e,n)=>!!Lm(e,n)||t.has(e,n)}));/**
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
 */class OO{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(NO(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function NO(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const Fh="@firebase/app",Mm="0.9.9";/**
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
 */const Pi=new kf("@firebase/app"),DO="@firebase/app-compat",kO="@firebase/analytics-compat",PO="@firebase/analytics",LO="@firebase/app-check-compat",MO="@firebase/app-check",FO="@firebase/auth",UO="@firebase/auth-compat",BO="@firebase/database",$O="@firebase/database-compat",VO="@firebase/functions",HO="@firebase/functions-compat",WO="@firebase/installations",zO="@firebase/installations-compat",KO="@firebase/messaging",jO="@firebase/messaging-compat",qO="@firebase/performance",GO="@firebase/performance-compat",XO="@firebase/remote-config",QO="@firebase/remote-config-compat",YO="@firebase/storage",JO="@firebase/storage-compat",ZO="@firebase/firestore",eN="@firebase/firestore-compat",tN="firebase",nN="9.21.0";/**
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
 */const Uh="[DEFAULT]",rN={[Fh]:"fire-core",[DO]:"fire-core-compat",[PO]:"fire-analytics",[kO]:"fire-analytics-compat",[MO]:"fire-app-check",[LO]:"fire-app-check-compat",[FO]:"fire-auth",[UO]:"fire-auth-compat",[BO]:"fire-rtdb",[$O]:"fire-rtdb-compat",[VO]:"fire-fn",[HO]:"fire-fn-compat",[WO]:"fire-iid",[zO]:"fire-iid-compat",[KO]:"fire-fcm",[jO]:"fire-fcm-compat",[qO]:"fire-perf",[GO]:"fire-perf-compat",[XO]:"fire-rc",[QO]:"fire-rc-compat",[YO]:"fire-gcs",[JO]:"fire-gcs-compat",[ZO]:"fire-fst",[eN]:"fire-fst-compat","fire-js":"fire-js",[tN]:"fire-js-all"};/**
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
 */const bu=new Map,Bh=new Map;function iN(t,e){try{t.container.addComponent(e)}catch(n){Pi.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function Es(t){const e=t.name;if(Bh.has(e))return Pi.debug(`There were multiple attempts to register component ${e}.`),!1;Bh.set(e,t);for(const n of bu.values())iN(n,t);return!0}function Lf(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
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
 */const sN={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Jr=new Lo("app","Firebase",sN);/**
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
 */class oN{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new ki("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Jr.create("app-deleted",{appName:this._name})}}/**
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
 */const Ns=nN;function qy(t,e={}){let n=t;typeof e!="object"&&(e={name:e});const r=Object.assign({name:Uh,automaticDataCollectionEnabled:!1},e),s=r.name;if(typeof s!="string"||!s)throw Jr.create("bad-app-name",{appName:String(s)});if(n||(n=Xx()),!n)throw Jr.create("no-options");const a=bu.get(s);if(a){if(Tu(n,a.options)&&Tu(r,a.config))return a;throw Jr.create("duplicate-app",{appName:s})}const u=new pO(s);for(const f of Bh.values())u.addComponent(f);const h=new oN(n,r,u);return bu.set(s,h),h}function Gy(t=Uh){const e=bu.get(t);if(!e&&t===Uh)return qy();if(!e)throw Jr.create("no-app",{appName:t});return e}function Zr(t,e,n){var r;let s=(r=rN[t])!==null&&r!==void 0?r:t;n&&(s+=`-${n}`);const a=s.match(/\s|\//),u=e.match(/\s|\//);if(a||u){const h=[`Unable to register library "${s}" with version "${e}":`];a&&h.push(`library name "${s}" contains illegal characters (whitespace or "/")`),a&&u&&h.push("and"),u&&h.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pi.warn(h.join(" "));return}Es(new ki(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
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
 */const aN="firebase-heartbeat-database",uN=1,Eo="firebase-heartbeat-store";let sh=null;function Xy(){return sh||(sh=SO(aN,uN,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Eo)}}}).catch(t=>{throw Jr.create("idb-open",{originalErrorMessage:t.message})})),sh}async function lN(t){try{return(await Xy()).transaction(Eo).objectStore(Eo).get(Qy(t))}catch(e){if(e instanceof Rr)Pi.warn(e.message);else{const n=Jr.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});Pi.warn(n.message)}}}async function Fm(t,e){try{const r=(await Xy()).transaction(Eo,"readwrite");return await r.objectStore(Eo).put(e,Qy(t)),r.done}catch(n){if(n instanceof Rr)Pi.warn(n.message);else{const r=Jr.create("idb-set",{originalErrorMessage:n==null?void 0:n.message});Pi.warn(r.message)}}}function Qy(t){return`${t.name}!${t.options.appId}`}/**
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
 */const cN=1024,hN=30*24*60*60*1e3;class fN{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new pN(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=Um();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(s=>s.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const a=new Date(s.date).valueOf();return Date.now()-a<=hN}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=Um(),{heartbeatsToSend:n,unsentEntries:r}=dN(this._heartbeatsCache.heartbeats),s=Iu(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function Um(){return new Date().toISOString().substring(0,10)}function dN(t,e=cN){const n=[];let r=t.slice();for(const s of t){const a=n.find(u=>u.agent===s.agent);if(a){if(a.dates.push(s.date),Bm(n)>e){a.dates.pop();break}}else if(n.push({agent:s.agent,dates:[s.date]}),Bm(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class pN{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return nO()?rO().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await lN(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fm(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Bm(t){return Iu(JSON.stringify({version:2,heartbeats:t})).length}/**
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
 */function gN(t){Es(new ki("platform-logger",e=>new OO(e),"PRIVATE")),Es(new ki("heartbeat",e=>new fN(e),"PRIVATE")),Zr(Fh,Mm,t),Zr(Fh,Mm,"esm2017"),Zr("fire-js","")}gN("");var mN="firebase",vN="9.21.0";/**
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
 */Zr(mN,vN,"app");var yN=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},K,Mf=Mf||{},ae=yN||self;function Au(){}function ol(t){var e=typeof t;return e=e!="object"?e:t?Array.isArray(t)?"array":e:"null",e=="array"||e=="object"&&typeof t.length=="number"}function Fo(t){var e=typeof t;return e=="object"&&t!=null||e=="function"}function _N(t){return Object.prototype.hasOwnProperty.call(t,oh)&&t[oh]||(t[oh]=++wN)}var oh="closure_uid_"+(1e9*Math.random()>>>0),wN=0;function EN(t,e,n){return t.call.apply(t.bind,arguments)}function IN(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var s=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(s,r),t.apply(e,s)}}return function(){return t.apply(e,arguments)}}function Pt(t,e,n){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Pt=EN:Pt=IN,Pt.apply(null,arguments)}function Za(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var r=n.slice();return r.push.apply(r,arguments),t.apply(this,r)}}function vt(t,e){function n(){}n.prototype=e.prototype,t.$=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.ac=function(r,s,a){for(var u=Array(arguments.length-2),h=2;h<arguments.length;h++)u[h-2]=arguments[h];return e.prototype[s].apply(r,u)}}function ai(){this.s=this.s,this.o=this.o}var TN=0;ai.prototype.s=!1;ai.prototype.ra=function(){!this.s&&(this.s=!0,this.N(),TN!=0)&&_N(this)};ai.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yy=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if(typeof t=="string")return typeof e!="string"||e.length!=1?-1:t.indexOf(e,0);for(let n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1};function Ff(t){const e=t.length;if(0<e){const n=Array(e);for(let r=0;r<e;r++)n[r]=t[r];return n}return[]}function $m(t,e){for(let n=1;n<arguments.length;n++){const r=arguments[n];if(ol(r)){const s=t.length||0,a=r.length||0;t.length=s+a;for(let u=0;u<a;u++)t[s+u]=r[u]}else t.push(r)}}function Lt(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}Lt.prototype.h=function(){this.defaultPrevented=!0};var bN=function(){if(!ae.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{ae.addEventListener("test",Au,e),ae.removeEventListener("test",Au,e)}catch{}return t}();function Cu(t){return/^[\s\xa0]*$/.test(t)}var Vm=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function ah(t,e){return t<e?-1:t>e?1:0}function al(){var t=ae.navigator;return t&&(t=t.userAgent)?t:""}function Qn(t){return al().indexOf(t)!=-1}function Uf(t){return Uf[" "](t),t}Uf[" "]=Au;function Jy(t,e,n){return Object.prototype.hasOwnProperty.call(t,e)?t[e]:t[e]=n(e)}var AN=Qn("Opera"),Is=Qn("Trident")||Qn("MSIE"),Zy=Qn("Edge"),$h=Zy||Is,e0=Qn("Gecko")&&!(al().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge"))&&!(Qn("Trident")||Qn("MSIE"))&&!Qn("Edge"),CN=al().toLowerCase().indexOf("webkit")!=-1&&!Qn("Edge");function t0(){var t=ae.document;return t?t.documentMode:void 0}var Su;e:{var uh="",lh=function(){var t=al();if(e0)return/rv:([^\);]+)(\)|;)/.exec(t);if(Zy)return/Edge\/([\d\.]+)/.exec(t);if(Is)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(t);if(CN)return/WebKit\/(\S+)/.exec(t);if(AN)return/(?:Version)[ \/]?(\S+)/.exec(t)}();if(lh&&(uh=lh?lh[1]:""),Is){var ch=t0();if(ch!=null&&ch>parseFloat(uh)){Su=String(ch);break e}}Su=uh}var SN={};function RN(){return Jy(SN,9,function(){let t=0;const e=Vm(String(Su)).split("."),n=Vm("9").split("."),r=Math.max(e.length,n.length);for(let u=0;t==0&&u<r;u++){var s=e[u]||"",a=n[u]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],a=/(\d*)(\D*)(.*)/.exec(a)||["","","",""],s[0].length==0&&a[0].length==0)break;t=ah(s[1].length==0?0:parseInt(s[1],10),a[1].length==0?0:parseInt(a[1],10))||ah(s[2].length==0,a[2].length==0)||ah(s[2],a[2]),s=s[3],a=a[3]}while(t==0)}return 0<=t})}var Vh;if(ae.document&&Is){var Hm=t0();Vh=Hm||parseInt(Su,10)||void 0}else Vh=void 0;var xN=Vh;function Io(t,e){if(Lt.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(e0){e:{try{Uf(e.nodeName);var s=!0;break e}catch{}s=!1}s||(e=null)}}else n=="mouseover"?e=t.fromElement:n=="mouseout"&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=t.clientX!==void 0?t.clientX:t.pageX,this.clientY=t.clientY!==void 0?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType=typeof t.pointerType=="string"?t.pointerType:ON[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&Io.$.h.call(this)}}vt(Io,Lt);var ON={2:"touch",3:"pen",4:"mouse"};Io.prototype.h=function(){Io.$.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var Uo="closure_listenable_"+(1e6*Math.random()|0),NN=0;function DN(t,e,n,r,s){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.la=s,this.key=++NN,this.fa=this.ia=!1}function ul(t){t.fa=!0,t.listener=null,t.proxy=null,t.src=null,t.la=null}function Bf(t,e,n){for(const r in t)e.call(n,t[r],r,t)}function n0(t){const e={};for(const n in t)e[n]=t[n];return e}const Wm="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function r0(t,e){let n,r;for(let s=1;s<arguments.length;s++){r=arguments[s];for(n in r)t[n]=r[n];for(let a=0;a<Wm.length;a++)n=Wm[a],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function ll(t){this.src=t,this.g={},this.h=0}ll.prototype.add=function(t,e,n,r,s){var a=t.toString();t=this.g[a],t||(t=this.g[a]=[],this.h++);var u=Wh(t,e,r,s);return-1<u?(e=t[u],n||(e.ia=!1)):(e=new DN(e,this.src,a,!!r,s),e.ia=n,t.push(e)),e};function Hh(t,e){var n=e.type;if(n in t.g){var r=t.g[n],s=Yy(r,e),a;(a=0<=s)&&Array.prototype.splice.call(r,s,1),a&&(ul(e),t.g[n].length==0&&(delete t.g[n],t.h--))}}function Wh(t,e,n,r){for(var s=0;s<t.length;++s){var a=t[s];if(!a.fa&&a.listener==e&&a.capture==!!n&&a.la==r)return s}return-1}var $f="closure_lm_"+(1e6*Math.random()|0),hh={};function i0(t,e,n,r,s){if(r&&r.once)return o0(t,e,n,r,s);if(Array.isArray(e)){for(var a=0;a<e.length;a++)i0(t,e[a],n,r,s);return null}return n=Wf(n),t&&t[Uo]?t.O(e,n,Fo(r)?!!r.capture:!!r,s):s0(t,e,n,!1,r,s)}function s0(t,e,n,r,s,a){if(!e)throw Error("Invalid event type");var u=Fo(s)?!!s.capture:!!s,h=Hf(t);if(h||(t[$f]=h=new ll(t)),n=h.add(e,n,r,u,a),n.proxy)return n;if(r=kN(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)bN||(s=u),s===void 0&&(s=!1),t.addEventListener(e.toString(),r,s);else if(t.attachEvent)t.attachEvent(u0(e.toString()),r);else if(t.addListener&&t.removeListener)t.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return n}function kN(){function t(n){return e.call(t.src,t.listener,n)}const e=PN;return t}function o0(t,e,n,r,s){if(Array.isArray(e)){for(var a=0;a<e.length;a++)o0(t,e[a],n,r,s);return null}return n=Wf(n),t&&t[Uo]?t.P(e,n,Fo(r)?!!r.capture:!!r,s):s0(t,e,n,!0,r,s)}function a0(t,e,n,r,s){if(Array.isArray(e))for(var a=0;a<e.length;a++)a0(t,e[a],n,r,s);else r=Fo(r)?!!r.capture:!!r,n=Wf(n),t&&t[Uo]?(t=t.i,e=String(e).toString(),e in t.g&&(a=t.g[e],n=Wh(a,n,r,s),-1<n&&(ul(a[n]),Array.prototype.splice.call(a,n,1),a.length==0&&(delete t.g[e],t.h--)))):t&&(t=Hf(t))&&(e=t.g[e.toString()],t=-1,e&&(t=Wh(e,n,r,s)),(n=-1<t?e[t]:null)&&Vf(n))}function Vf(t){if(typeof t!="number"&&t&&!t.fa){var e=t.src;if(e&&e[Uo])Hh(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(u0(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=Hf(e))?(Hh(n,t),n.h==0&&(n.src=null,e[$f]=null)):ul(t)}}}function u0(t){return t in hh?hh[t]:hh[t]="on"+t}function PN(t,e){if(t.fa)t=!0;else{e=new Io(e,this);var n=t.listener,r=t.la||t.src;t.ia&&Vf(t),t=n.call(r,e)}return t}function Hf(t){return t=t[$f],t instanceof ll?t:null}var fh="__closure_events_fn_"+(1e9*Math.random()>>>0);function Wf(t){return typeof t=="function"?t:(t[fh]||(t[fh]=function(e){return t.handleEvent(e)}),t[fh])}function gt(){ai.call(this),this.i=new ll(this),this.S=this,this.J=null}vt(gt,ai);gt.prototype[Uo]=!0;gt.prototype.removeEventListener=function(t,e,n,r){a0(this,t,e,n,r)};function At(t,e){var n,r=t.J;if(r)for(n=[];r;r=r.J)n.push(r);if(t=t.S,r=e.type||e,typeof e=="string")e=new Lt(e,t);else if(e instanceof Lt)e.target=e.target||t;else{var s=e;e=new Lt(r,t),r0(e,s)}if(s=!0,n)for(var a=n.length-1;0<=a;a--){var u=e.g=n[a];s=eu(u,r,!0,e)&&s}if(u=e.g=t,s=eu(u,r,!0,e)&&s,s=eu(u,r,!1,e)&&s,n)for(a=0;a<n.length;a++)u=e.g=n[a],s=eu(u,r,!1,e)&&s}gt.prototype.N=function(){if(gt.$.N.call(this),this.i){var t=this.i,e;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)ul(n[r]);delete t.g[e],t.h--}}this.J=null};gt.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)};gt.prototype.P=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};function eu(t,e,n,r){if(e=t.i.g[String(e)],!e)return!0;e=e.concat();for(var s=!0,a=0;a<e.length;++a){var u=e[a];if(u&&!u.fa&&u.capture==n){var h=u.listener,f=u.la||u.src;u.ia&&Hh(t.i,u),s=h.call(f,r)!==!1&&s}}return s&&!r.defaultPrevented}var zf=ae.JSON.stringify;function LN(){var t=h0;let e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}class MN{constructor(){this.h=this.g=null}add(e,n){const r=l0.get();r.set(e,n),this.h?this.h.next=r:this.g=r,this.h=r}}var l0=new class{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}(()=>new FN,t=>t.reset());class FN{constructor(){this.next=this.g=this.h=null}set(e,n){this.h=e,this.g=n,this.next=null}reset(){this.next=this.g=this.h=null}}function UN(t){ae.setTimeout(()=>{throw t},0)}function c0(t,e){zh||BN(),Kh||(zh(),Kh=!0),h0.add(t,e)}var zh;function BN(){var t=ae.Promise.resolve(void 0);zh=function(){t.then($N)}}var Kh=!1,h0=new MN;function $N(){for(var t;t=LN();){try{t.h.call(t.g)}catch(n){UN(n)}var e=l0;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Kh=!1}function cl(t,e){gt.call(this),this.h=t||1,this.g=e||ae,this.j=Pt(this.qb,this),this.l=Date.now()}vt(cl,gt);K=cl.prototype;K.ga=!1;K.T=null;K.qb=function(){if(this.ga){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-t):(this.T&&(this.g.clearTimeout(this.T),this.T=null),At(this,"tick"),this.ga&&(Kf(this),this.start()))}};K.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Kf(t){t.ga=!1,t.T&&(t.g.clearTimeout(t.T),t.T=null)}K.N=function(){cl.$.N.call(this),Kf(this),delete this.g};function jf(t,e,n){if(typeof t=="function")n&&(t=Pt(t,n));else if(t&&typeof t.handleEvent=="function")t=Pt(t.handleEvent,t);else throw Error("Invalid listener argument");return 2147483647<Number(e)?-1:ae.setTimeout(t,e||0)}function f0(t){t.g=jf(()=>{t.g=null,t.i&&(t.i=!1,f0(t))},t.j);const e=t.h;t.h=null,t.m.apply(null,e)}class VN extends ai{constructor(e,n){super(),this.m=e,this.j=n,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:f0(this)}N(){super.N(),this.g&&(ae.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function To(t){ai.call(this),this.h=t,this.g={}}vt(To,ai);var zm=[];function d0(t,e,n,r){Array.isArray(n)||(n&&(zm[0]=n.toString()),n=zm);for(var s=0;s<n.length;s++){var a=i0(e,n[s],r||t.handleEvent,!1,t.h||t);if(!a)break;t.g[a.key]=a}}function p0(t){Bf(t.g,function(e,n){this.g.hasOwnProperty(n)&&Vf(e)},t),t.g={}}To.prototype.N=function(){To.$.N.call(this),p0(this)};To.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function hl(){this.g=!0}hl.prototype.Ea=function(){this.g=!1};function HN(t,e,n,r,s,a){t.info(function(){if(t.g)if(a)for(var u="",h=a.split("&"),f=0;f<h.length;f++){var p=h[f].split("=");if(1<p.length){var v=p[0];p=p[1];var E=v.split("_");u=2<=E.length&&E[1]=="type"?u+(v+"="+p+"&"):u+(v+"=redacted&")}}else u=null;else u=a;return"XMLHTTP REQ ("+r+") [attempt "+s+"]: "+e+`
`+n+`
`+u})}function WN(t,e,n,r,s,a,u){t.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+s+"]: "+e+`
`+n+`
`+a+" "+u})}function ls(t,e,n,r){t.info(function(){return"XMLHTTP TEXT ("+e+"): "+KN(t,n)+(r?" "+r:"")})}function zN(t,e){t.info(function(){return"TIMEOUT: "+e})}hl.prototype.info=function(){};function KN(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n){for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var s=r[1];if(Array.isArray(s)&&!(1>s.length)){var a=s[0];if(a!="noop"&&a!="stop"&&a!="close")for(var u=1;u<s.length;u++)s[u]=""}}}}return zf(n)}catch{return e}}var Bi={},Km=null;function fl(){return Km=Km||new gt}Bi.Ta="serverreachability";function g0(t){Lt.call(this,Bi.Ta,t)}vt(g0,Lt);function bo(t){const e=fl();At(e,new g0(e))}Bi.STAT_EVENT="statevent";function m0(t,e){Lt.call(this,Bi.STAT_EVENT,t),this.stat=e}vt(m0,Lt);function Kt(t){const e=fl();At(e,new m0(e,t))}Bi.Ua="timingevent";function v0(t,e){Lt.call(this,Bi.Ua,t),this.size=e}vt(v0,Lt);function Bo(t,e){if(typeof t!="function")throw Error("Fn must not be null and must be a function");return ae.setTimeout(function(){t()},e)}var dl={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},y0={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function qf(){}qf.prototype.h=null;function jm(t){return t.h||(t.h=t.i())}function _0(){}var $o={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Gf(){Lt.call(this,"d")}vt(Gf,Lt);function Xf(){Lt.call(this,"c")}vt(Xf,Lt);var jh;function pl(){}vt(pl,qf);pl.prototype.g=function(){return new XMLHttpRequest};pl.prototype.i=function(){return{}};jh=new pl;function Vo(t,e,n,r){this.l=t,this.j=e,this.m=n,this.W=r||1,this.U=new To(this),this.P=jN,t=$h?125:void 0,this.V=new cl(t),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.aa=-1,this.J=!1,this.O=0,this.M=null,this.ca=this.K=this.ba=this.S=!1,this.h=new w0}function w0(){this.i=null,this.g="",this.h=!1}var jN=45e3,qh={},Ru={};K=Vo.prototype;K.setTimeout=function(t){this.P=t};function Gh(t,e,n){t.L=1,t.v=ml(Tr(e)),t.s=n,t.S=!0,E0(t,null)}function E0(t,e){t.G=Date.now(),Ho(t),t.A=Tr(t.v);var n=t.A,r=t.W;Array.isArray(r)||(r=[String(r)]),x0(n.i,"t",r),t.C=0,n=t.l.I,t.h=new w0,t.g=Q0(t.l,n?e:null,!t.s),0<t.O&&(t.M=new VN(Pt(t.Pa,t,t.g),t.O)),d0(t.U,t.g,"readystatechange",t.nb),e=t.I?n0(t.I):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ha(t.A,t.u,t.s,e)):(t.u="GET",t.g.ha(t.A,t.u,null,e)),bo(),HN(t.j,t.u,t.A,t.m,t.W,t.s)}K.nb=function(t){t=t.target;const e=this.M;e&&gr(t)==3?e.l():this.Pa(t)};K.Pa=function(t){try{if(t==this.g)e:{const v=gr(this.g);var e=this.g.Ia();const E=this.g.da();if(!(3>v)&&(v!=3||$h||this.g&&(this.h.h||this.g.ja()||Qm(this.g)))){this.J||v!=4||e==7||(e==8||0>=E?bo(3):bo(2)),gl(this);var n=this.g.da();this.aa=n;t:if(I0(this)){var r=Qm(this.g);t="";var s=r.length,a=gr(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ai(this),ao(this);var u="";break t}this.h.i=new ae.TextDecoder}for(e=0;e<s;e++)this.h.h=!0,t+=this.h.i.decode(r[e],{stream:a&&e==s-1});r.splice(0,s),this.h.g+=t,this.C=0,u=this.h.g}else u=this.g.ja();if(this.i=n==200,WN(this.j,this.u,this.A,this.m,this.W,v,n),this.i){if(this.ba&&!this.K){t:{if(this.g){var h,f=this.g;if((h=f.g?f.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!Cu(h)){var p=h;break t}}p=null}if(n=p)ls(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,Xh(this,n);else{this.i=!1,this.o=3,Kt(12),Ai(this),ao(this);break e}}this.S?(T0(this,v,u),$h&&this.i&&v==3&&(d0(this.U,this.V,"tick",this.mb),this.V.start())):(ls(this.j,this.m,u,null),Xh(this,u)),v==4&&Ai(this),this.i&&!this.J&&(v==4?j0(this.l,this):(this.i=!1,Ho(this)))}else n==400&&0<u.indexOf("Unknown SID")?(this.o=3,Kt(12)):(this.o=0,Kt(13)),Ai(this),ao(this)}}}catch{}finally{}};function I0(t){return t.g?t.u=="GET"&&t.L!=2&&t.l.Ha:!1}function T0(t,e,n){let r=!0,s;for(;!t.J&&t.C<n.length;)if(s=qN(t,n),s==Ru){e==4&&(t.o=4,Kt(14),r=!1),ls(t.j,t.m,null,"[Incomplete Response]");break}else if(s==qh){t.o=4,Kt(15),ls(t.j,t.m,n,"[Invalid Chunk]"),r=!1;break}else ls(t.j,t.m,s,null),Xh(t,s);I0(t)&&s!=Ru&&s!=qh&&(t.h.g="",t.C=0),e!=4||n.length!=0||t.h.h||(t.o=1,Kt(16),r=!1),t.i=t.i&&r,r?0<n.length&&!t.ca&&(t.ca=!0,e=t.l,e.g==t&&e.ca&&!e.L&&(e.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),nd(e),e.L=!0,Kt(11))):(ls(t.j,t.m,n,"[Invalid Chunked Response]"),Ai(t),ao(t))}K.mb=function(){if(this.g){var t=gr(this.g),e=this.g.ja();this.C<e.length&&(gl(this),T0(this,t,e),this.i&&t!=4&&Ho(this))}};function qN(t,e){var n=t.C,r=e.indexOf(`
`,n);return r==-1?Ru:(n=Number(e.substring(n,r)),isNaN(n)?qh:(r+=1,r+n>e.length?Ru:(e=e.substr(r,n),t.C=r+n,e)))}K.cancel=function(){this.J=!0,Ai(this)};function Ho(t){t.Y=Date.now()+t.P,b0(t,t.P)}function b0(t,e){if(t.B!=null)throw Error("WatchDog timer not null");t.B=Bo(Pt(t.lb,t),e)}function gl(t){t.B&&(ae.clearTimeout(t.B),t.B=null)}K.lb=function(){this.B=null;const t=Date.now();0<=t-this.Y?(zN(this.j,this.A),this.L!=2&&(bo(),Kt(17)),Ai(this),this.o=2,ao(this)):b0(this,this.Y-t)};function ao(t){t.l.H==0||t.J||j0(t.l,t)}function Ai(t){gl(t);var e=t.M;e&&typeof e.ra=="function"&&e.ra(),t.M=null,Kf(t.V),p0(t.U),t.g&&(e=t.g,t.g=null,e.abort(),e.ra())}function Xh(t,e){try{var n=t.l;if(n.H!=0&&(n.g==t||Qh(n.h,t))){if(!t.K&&Qh(n.h,t)&&n.H==3){try{var r=n.Ja.g.parse(e)}catch{r=null}if(Array.isArray(r)&&r.length==3){var s=r;if(s[0]==0){e:if(!n.u){if(n.g)if(n.g.G+3e3<t.G)Nu(n),_l(n);else break e;td(n),Kt(18)}}else n.Fa=s[1],0<n.Fa-n.V&&37500>s[2]&&n.M&&n.A==0&&!n.v&&(n.v=Bo(Pt(n.ib,n),6e3));if(1>=D0(n.h)&&n.na){try{n.na()}catch{}n.na=void 0}}else Ci(n,11)}else if((t.K||n.g==t)&&Nu(n),!Cu(e))for(s=n.Ja.g.parse(e),e=0;e<s.length;e++){let p=s[e];if(n.V=p[0],p=p[1],n.H==2)if(p[0]=="c"){n.J=p[1],n.oa=p[2];const v=p[3];v!=null&&(n.qa=v,n.j.info("VER="+n.qa));const E=p[4];E!=null&&(n.Ga=E,n.j.info("SVER="+n.Ga));const A=p[5];A!=null&&typeof A=="number"&&0<A&&(r=1.5*A,n.K=r,n.j.info("backChannelRequestTimeoutMs_="+r)),r=n;const L=t.g;if(L){const z=L.g?L.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(z){var a=r.h;a.g||z.indexOf("spdy")==-1&&z.indexOf("quic")==-1&&z.indexOf("h2")==-1||(a.j=a.l,a.g=new Set,a.h&&(Qf(a,a.h),a.h=null))}if(r.F){const B=L.g?L.g.getResponseHeader("X-HTTP-Session-Id"):null;B&&(r.Da=B,Ge(r.G,r.F,B))}}n.H=3,n.l&&n.l.Ba(),n.ca&&(n.S=Date.now()-t.G,n.j.info("Handshake RTT: "+n.S+"ms")),r=n;var u=t;if(r.wa=X0(r,r.I?r.oa:null,r.Y),u.K){k0(r.h,u);var h=u,f=r.K;f&&h.setTimeout(f),h.B&&(gl(h),Ho(h)),r.g=u}else z0(r);0<n.i.length&&wl(n)}else p[0]!="stop"&&p[0]!="close"||Ci(n,7);else n.H==3&&(p[0]=="stop"||p[0]=="close"?p[0]=="stop"?Ci(n,7):ed(n):p[0]!="noop"&&n.l&&n.l.Aa(p),n.A=0)}}bo(4)}catch{}}function GN(t){if(t.Z&&typeof t.Z=="function")return t.Z();if(typeof Map<"u"&&t instanceof Map||typeof Set<"u"&&t instanceof Set)return Array.from(t.values());if(typeof t=="string")return t.split("");if(ol(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}e=[],n=0;for(r in t)e[n++]=t[r];return e}function XN(t){if(t.sa&&typeof t.sa=="function")return t.sa();if(!t.Z||typeof t.Z!="function"){if(typeof Map<"u"&&t instanceof Map)return Array.from(t.keys());if(!(typeof Set<"u"&&t instanceof Set)){if(ol(t)||typeof t=="string"){var e=[];t=t.length;for(var n=0;n<t;n++)e.push(n);return e}e=[],n=0;for(const r in t)e[n++]=r;return e}}}function A0(t,e){if(t.forEach&&typeof t.forEach=="function")t.forEach(e,void 0);else if(ol(t)||typeof t=="string")Array.prototype.forEach.call(t,e,void 0);else for(var n=XN(t),r=GN(t),s=r.length,a=0;a<s;a++)e.call(void 0,r[a],n&&n[a],t)}var C0=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function QN(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),s=null;if(0<=r){var a=t[n].substring(0,r);s=t[n].substring(r+1)}else a=t[n];e(a,s?decodeURIComponent(s.replace(/\+/g," ")):"")}}}function Oi(t,e){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,t instanceof Oi){this.h=e!==void 0?e:t.h,xu(this,t.j),this.s=t.s,this.g=t.g,Ou(this,t.m),this.l=t.l,e=t.i;var n=new Ao;n.i=e.i,e.g&&(n.g=new Map(e.g),n.h=e.h),qm(this,n),this.o=t.o}else t&&(n=String(t).match(C0))?(this.h=!!e,xu(this,n[1]||"",!0),this.s=no(n[2]||""),this.g=no(n[3]||"",!0),Ou(this,n[4]),this.l=no(n[5]||"",!0),qm(this,n[6]||"",!0),this.o=no(n[7]||"")):(this.h=!!e,this.i=new Ao(null,this.h))}Oi.prototype.toString=function(){var t=[],e=this.j;e&&t.push(ro(e,Gm,!0),":");var n=this.g;return(n||e=="file")&&(t.push("//"),(e=this.s)&&t.push(ro(e,Gm,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,n!=null&&t.push(":",String(n))),(n=this.l)&&(this.g&&n.charAt(0)!="/"&&t.push("/"),t.push(ro(n,n.charAt(0)=="/"?ZN:JN,!0))),(n=this.i.toString())&&t.push("?",n),(n=this.o)&&t.push("#",ro(n,tD)),t.join("")};function Tr(t){return new Oi(t)}function xu(t,e,n){t.j=n?no(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Ou(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function qm(t,e,n){e instanceof Ao?(t.i=e,nD(t.i,t.h)):(n||(e=ro(e,eD)),t.i=new Ao(e,t.h))}function Ge(t,e,n){t.i.set(e,n)}function ml(t){return Ge(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function no(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function ro(t,e,n){return typeof t=="string"?(t=encodeURI(t).replace(e,YN),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function YN(t){return t=t.charCodeAt(0),"%"+(t>>4&15).toString(16)+(t&15).toString(16)}var Gm=/[#\/\?@]/g,JN=/[#\?:]/g,ZN=/[#\?]/g,eD=/[#\?@]/g,tD=/#/g;function Ao(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function ui(t){t.g||(t.g=new Map,t.h=0,t.i&&QN(t.i,function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)}))}K=Ao.prototype;K.add=function(t,e){ui(this),this.i=null,t=Ds(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this};function S0(t,e){ui(t),e=Ds(t,e),t.g.has(e)&&(t.i=null,t.h-=t.g.get(e).length,t.g.delete(e))}function R0(t,e){return ui(t),e=Ds(t,e),t.g.has(e)}K.forEach=function(t,e){ui(this),this.g.forEach(function(n,r){n.forEach(function(s){t.call(e,s,r,this)},this)},this)};K.sa=function(){ui(this);const t=Array.from(this.g.values()),e=Array.from(this.g.keys()),n=[];for(let r=0;r<e.length;r++){const s=t[r];for(let a=0;a<s.length;a++)n.push(e[r])}return n};K.Z=function(t){ui(this);let e=[];if(typeof t=="string")R0(this,t)&&(e=e.concat(this.g.get(Ds(this,t))));else{t=Array.from(this.g.values());for(let n=0;n<t.length;n++)e=e.concat(t[n])}return e};K.set=function(t,e){return ui(this),this.i=null,t=Ds(this,t),R0(this,t)&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this};K.get=function(t,e){return t?(t=this.Z(t),0<t.length?String(t[0]):e):e};function x0(t,e,n){S0(t,e),0<n.length&&(t.i=null,t.g.set(Ds(t,e),Ff(n)),t.h+=n.length)}K.toString=function(){if(this.i)return this.i;if(!this.g)return"";const t=[],e=Array.from(this.g.keys());for(var n=0;n<e.length;n++){var r=e[n];const a=encodeURIComponent(String(r)),u=this.Z(r);for(r=0;r<u.length;r++){var s=a;u[r]!==""&&(s+="="+encodeURIComponent(String(u[r]))),t.push(s)}}return this.i=t.join("&")};function Ds(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}function nD(t,e){e&&!t.j&&(ui(t),t.i=null,t.g.forEach(function(n,r){var s=r.toLowerCase();r!=s&&(S0(this,r),x0(this,s,n))},t)),t.j=e}var rD=class{constructor(t,e){this.h=t,this.g=e}};function O0(t){this.l=t||iD,ae.PerformanceNavigationTiming?(t=ae.performance.getEntriesByType("navigation"),t=0<t.length&&(t[0].nextHopProtocol=="hq"||t[0].nextHopProtocol=="h2")):t=!!(ae.g&&ae.g.Ka&&ae.g.Ka()&&ae.g.Ka().ec),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var iD=10;function N0(t){return t.h?!0:t.g?t.g.size>=t.j:!1}function D0(t){return t.h?1:t.g?t.g.size:0}function Qh(t,e){return t.h?t.h==e:t.g?t.g.has(e):!1}function Qf(t,e){t.g?t.g.add(e):t.h=e}function k0(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}O0.prototype.cancel=function(){if(this.i=P0(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const t of this.g.values())t.cancel();this.g.clear()}};function P0(t){if(t.h!=null)return t.i.concat(t.h.F);if(t.g!=null&&t.g.size!==0){let e=t.i;for(const n of t.g.values())e=e.concat(n.F);return e}return Ff(t.i)}function Yf(){}Yf.prototype.stringify=function(t){return ae.JSON.stringify(t,void 0)};Yf.prototype.parse=function(t){return ae.JSON.parse(t,void 0)};function sD(){this.g=new Yf}function oD(t,e,n){const r=n||"";try{A0(t,function(s,a){let u=s;Fo(s)&&(u=zf(s)),e.push(r+a+"="+encodeURIComponent(u))})}catch(s){throw e.push(r+"type="+encodeURIComponent("_badmap")),s}}function aD(t,e){const n=new hl;if(ae.Image){const r=new Image;r.onload=Za(tu,n,r,"TestLoadImage: loaded",!0,e),r.onerror=Za(tu,n,r,"TestLoadImage: error",!1,e),r.onabort=Za(tu,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=Za(tu,n,r,"TestLoadImage: timeout",!1,e),ae.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=t}else e(!1)}function tu(t,e,n,r,s){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,s(r)}catch{}}function Wo(t){this.l=t.fc||null,this.j=t.ob||!1}vt(Wo,qf);Wo.prototype.g=function(){return new vl(this.l,this.j)};Wo.prototype.i=function(t){return function(){return t}}({});function vl(t,e){gt.call(this),this.F=t,this.u=e,this.m=void 0,this.readyState=Jf,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}vt(vl,gt);var Jf=0;K=vl.prototype;K.open=function(t,e){if(this.readyState!=Jf)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,Co(this)};K.send=function(t){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.F||ae).fetch(new Request(this.B,e)).then(this.$a.bind(this),this.ka.bind(this))};K.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,zo(this)),this.readyState=Jf};K.$a=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,Co(this)),this.g&&(this.readyState=3,Co(this),this.g)))if(this.responseType==="arraybuffer")t.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof ae.ReadableStream<"u"&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;L0(this)}else t.text().then(this.Za.bind(this),this.ka.bind(this))};function L0(t){t.j.read().then(t.Xa.bind(t)).catch(t.ka.bind(t))}K.Xa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?zo(this):Co(this),this.readyState==3&&L0(this)}};K.Za=function(t){this.g&&(this.response=this.responseText=t,zo(this))};K.Ya=function(t){this.g&&(this.response=t,zo(this))};K.ka=function(){this.g&&zo(this)};function zo(t){t.readyState=4,t.l=null,t.j=null,t.A=null,Co(t)}K.setRequestHeader=function(t,e){this.v.append(t,e)};K.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""};K.getAllResponseHeaders=function(){if(!this.h)return"";const t=[],e=this.h.entries();for(var n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join(`\r
`)};function Co(t){t.onreadystatechange&&t.onreadystatechange.call(t)}Object.defineProperty(vl.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(t){this.m=t?"include":"same-origin"}});var uD=ae.JSON.parse;function tt(t){gt.call(this),this.headers=new Map,this.u=t||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=M0,this.L=this.M=!1}vt(tt,gt);var M0="",lD=/^https?$/i,cD=["POST","PUT"];K=tt.prototype;K.Oa=function(t){this.M=t};K.ha=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+t);e=e?e.toUpperCase():"GET",this.I=t,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():jh.g(),this.C=this.u?jm(this.u):jm(jh),this.g.onreadystatechange=Pt(this.La,this);try{this.G=!0,this.g.open(e,String(t),!0),this.G=!1}catch(a){Xm(this,a);return}if(t=n||"",n=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var s in r)n.set(s,r[s]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const a of r.keys())n.set(a,r.get(a));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(n.keys()).find(a=>a.toLowerCase()=="content-type"),s=ae.FormData&&t instanceof ae.FormData,!(0<=Yy(cD,e))||r||s||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[a,u]of n)this.g.setRequestHeader(a,u);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{B0(this),0<this.B&&((this.L=hD(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Pt(this.ua,this)):this.A=jf(this.ua,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(a){Xm(this,a)}};function hD(t){return Is&&RN()&&typeof t.timeout=="number"&&t.ontimeout!==void 0}K.ua=function(){typeof Mf<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,At(this,"timeout"),this.abort(8))};function Xm(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,F0(t),yl(t)}function F0(t){t.F||(t.F=!0,At(t,"complete"),At(t,"error"))}K.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,At(this,"complete"),At(this,"abort"),yl(this))};K.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),yl(this,!0)),tt.$.N.call(this)};K.La=function(){this.s||(this.G||this.v||this.l?U0(this):this.kb())};K.kb=function(){U0(this)};function U0(t){if(t.h&&typeof Mf<"u"&&(!t.C[1]||gr(t)!=4||t.da()!=2)){if(t.v&&gr(t)==4)jf(t.La,0,t);else if(At(t,"readystatechange"),gr(t)==4){t.h=!1;try{const h=t.da();e:switch(h){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var e=!0;break e;default:e=!1}var n;if(!(n=e)){var r;if(r=h===0){var s=String(t.I).match(C0)[1]||null;if(!s&&ae.self&&ae.self.location){var a=ae.self.location.protocol;s=a.substr(0,a.length-1)}r=!lD.test(s?s.toLowerCase():"")}n=r}if(n)At(t,"complete"),At(t,"success");else{t.m=6;try{var u=2<gr(t)?t.g.statusText:""}catch{u=""}t.j=u+" ["+t.da()+"]",F0(t)}}finally{yl(t)}}}}function yl(t,e){if(t.g){B0(t);const n=t.g,r=t.C[0]?Au:null;t.g=null,t.C=null,e||At(t,"ready");try{n.onreadystatechange=r}catch{}}}function B0(t){t.g&&t.L&&(t.g.ontimeout=null),t.A&&(ae.clearTimeout(t.A),t.A=null)}function gr(t){return t.g?t.g.readyState:0}K.da=function(){try{return 2<gr(this)?this.g.status:-1}catch{return-1}};K.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};K.Wa=function(t){if(this.g){var e=this.g.responseText;return t&&e.indexOf(t)==0&&(e=e.substring(t.length)),uD(e)}};function Qm(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.K){case M0:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch{return null}}K.Ia=function(){return this.m};K.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function $0(t){let e="";return Bf(t,function(n,r){e+=r,e+=":",e+=n,e+=`\r
`}),e}function Zf(t,e,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=$0(n),typeof t=="string"?n!=null&&encodeURIComponent(String(n)):Ge(t,e,n))}function Zs(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function V0(t){this.Ga=0,this.i=[],this.j=new hl,this.oa=this.wa=this.G=this.Y=this.g=this.Da=this.F=this.ma=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Zs("failFast",!1,t),this.M=this.v=this.u=this.m=this.l=null,this.aa=!0,this.ta=this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Zs("baseRetryDelayMs",5e3,t),this.hb=Zs("retryDelaySeedMs",1e4,t),this.eb=Zs("forwardChannelMaxRetries",2,t),this.xa=Zs("forwardChannelRequestTimeoutMs",2e4,t),this.va=t&&t.xmlHttpFactory||void 0,this.Ha=t&&t.dc||!1,this.K=void 0,this.I=t&&t.supportsCrossDomainXhr||!1,this.J="",this.h=new O0(t&&t.concurrentRequestLimit),this.Ja=new sD,this.P=t&&t.fastHandshake||!1,this.O=t&&t.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=t&&t.bc||!1,t&&t.Ea&&this.j.Ea(),t&&t.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&t&&t.detectBufferingProxy||!1,this.na=void 0,this.S=0,this.L=!1,this.pa=this.B=null}K=V0.prototype;K.qa=8;K.H=1;function ed(t){if(H0(t),t.H==3){var e=t.W++,n=Tr(t.G);Ge(n,"SID",t.J),Ge(n,"RID",e),Ge(n,"TYPE","terminate"),Ko(t,n),e=new Vo(t,t.j,e,void 0),e.L=2,e.v=ml(Tr(n)),n=!1,ae.navigator&&ae.navigator.sendBeacon&&(n=ae.navigator.sendBeacon(e.v.toString(),"")),!n&&ae.Image&&(new Image().src=e.v,n=!0),n||(e.g=Q0(e.l,null),e.g.ha(e.v)),e.G=Date.now(),Ho(e)}G0(t)}function _l(t){t.g&&(nd(t),t.g.cancel(),t.g=null)}function H0(t){_l(t),t.u&&(ae.clearTimeout(t.u),t.u=null),Nu(t),t.h.cancel(),t.m&&(typeof t.m=="number"&&ae.clearTimeout(t.m),t.m=null)}function wl(t){N0(t.h)||t.m||(t.m=!0,c0(t.Na,t),t.C=0)}function fD(t,e){return D0(t.h)>=t.h.j-(t.m?1:0)?!1:t.m?(t.i=e.F.concat(t.i),!0):t.H==1||t.H==2||t.C>=(t.cb?0:t.eb)?!1:(t.m=Bo(Pt(t.Na,t,e),q0(t,t.C)),t.C++,!0)}K.Na=function(t){if(this.m)if(this.m=null,this.H==1){if(!t){this.W=Math.floor(1e5*Math.random()),t=this.W++;const s=new Vo(this,this.j,t,void 0);let a=this.s;if(this.U&&(a?(a=n0(a),r0(a,this.U)):a=this.U),this.o!==null||this.O||(s.I=a,a=null),this.P)e:{for(var e=0,n=0;n<this.i.length;n++){t:{var r=this.i[n];if("__data__"in r.g&&(r=r.g.__data__,typeof r=="string")){r=r.length;break t}r=void 0}if(r===void 0)break;if(e+=r,4096<e){e=n;break e}if(e===4096||n===this.i.length-1){e=n+1;break e}}e=1e3}else e=1e3;e=W0(this,s,e),n=Tr(this.G),Ge(n,"RID",t),Ge(n,"CVER",22),this.F&&Ge(n,"X-HTTP-Session-Id",this.F),Ko(this,n),a&&(this.O?e="headers="+encodeURIComponent(String($0(a)))+"&"+e:this.o&&Zf(n,this.o,a)),Qf(this.h,s),this.bb&&Ge(n,"TYPE","init"),this.P?(Ge(n,"$req",e),Ge(n,"SID","null"),s.ba=!0,Gh(s,n,null)):Gh(s,n,e),this.H=2}}else this.H==3&&(t?Ym(this,t):this.i.length==0||N0(this.h)||Ym(this))};function Ym(t,e){var n;e?n=e.m:n=t.W++;const r=Tr(t.G);Ge(r,"SID",t.J),Ge(r,"RID",n),Ge(r,"AID",t.V),Ko(t,r),t.o&&t.s&&Zf(r,t.o,t.s),n=new Vo(t,t.j,n,t.C+1),t.o===null&&(n.I=t.s),e&&(t.i=e.F.concat(t.i)),e=W0(t,n,1e3),n.setTimeout(Math.round(.5*t.xa)+Math.round(.5*t.xa*Math.random())),Qf(t.h,n),Gh(n,r,e)}function Ko(t,e){t.ma&&Bf(t.ma,function(n,r){Ge(e,r,n)}),t.l&&A0({},function(n,r){Ge(e,r,n)})}function W0(t,e,n){n=Math.min(t.i.length,n);var r=t.l?Pt(t.l.Va,t.l,t):null;e:{var s=t.i;let a=-1;for(;;){const u=["count="+n];a==-1?0<n?(a=s[0].h,u.push("ofs="+a)):a=0:u.push("ofs="+a);let h=!0;for(let f=0;f<n;f++){let p=s[f].h;const v=s[f].g;if(p-=a,0>p)a=Math.max(0,s[f].h-100),h=!1;else try{oD(v,u,"req"+p+"_")}catch{r&&r(v)}}if(h){r=u.join("&");break e}}}return t=t.i.splice(0,n),e.F=t,r}function z0(t){t.g||t.u||(t.ba=1,c0(t.Ma,t),t.A=0)}function td(t){return t.g||t.u||3<=t.A?!1:(t.ba++,t.u=Bo(Pt(t.Ma,t),q0(t,t.A)),t.A++,!0)}K.Ma=function(){if(this.u=null,K0(this),this.ca&&!(this.L||this.g==null||0>=this.S)){var t=2*this.S;this.j.info("BP detection timer enabled: "+t),this.B=Bo(Pt(this.jb,this),t)}};K.jb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.M=!1,this.L=!0,Kt(10),_l(this),K0(this))};function nd(t){t.B!=null&&(ae.clearTimeout(t.B),t.B=null)}function K0(t){t.g=new Vo(t,t.j,"rpc",t.ba),t.o===null&&(t.g.I=t.s),t.g.O=0;var e=Tr(t.wa);Ge(e,"RID","rpc"),Ge(e,"SID",t.J),Ge(e,"CI",t.M?"0":"1"),Ge(e,"AID",t.V),Ge(e,"TYPE","xmlhttp"),Ko(t,e),t.o&&t.s&&Zf(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.oa,n.L=1,n.v=ml(Tr(e)),n.s=null,n.S=!0,E0(n,t)}K.ib=function(){this.v!=null&&(this.v=null,_l(this),td(this),Kt(19))};function Nu(t){t.v!=null&&(ae.clearTimeout(t.v),t.v=null)}function j0(t,e){var n=null;if(t.g==e){Nu(t),nd(t),t.g=null;var r=2}else if(Qh(t.h,e))n=e.F,k0(t.h,e),r=1;else return;if(t.H!=0){if(t.ta=e.aa,e.i)if(r==1){n=e.s?e.s.length:0,e=Date.now()-e.G;var s=t.C;r=fl(),At(r,new v0(r,n)),wl(t)}else z0(t);else if(s=e.o,s==3||s==0&&0<t.ta||!(r==1&&fD(t,e)||r==2&&td(t)))switch(n&&0<n.length&&(e=t.h,e.i=e.i.concat(n)),s){case 1:Ci(t,5);break;case 4:Ci(t,10);break;case 3:Ci(t,6);break;default:Ci(t,2)}}}function q0(t,e){let n=t.ab+Math.floor(Math.random()*t.hb);return t.l||(n*=2),n*e}function Ci(t,e){if(t.j.info("Error code "+e),e==2){var n=null;t.l&&(n=null);var r=Pt(t.pb,t);n||(n=new Oi("//www.google.com/images/cleardot.gif"),ae.location&&ae.location.protocol=="http"||xu(n,"https"),ml(n)),aD(n.toString(),r)}else Kt(2);t.H=0,t.l&&t.l.za(e),G0(t),H0(t)}K.pb=function(t){t?(this.j.info("Successfully pinged google.com"),Kt(2)):(this.j.info("Failed to ping google.com"),Kt(1))};function G0(t){if(t.H=0,t.pa=[],t.l){const e=P0(t.h);(e.length!=0||t.i.length!=0)&&($m(t.pa,e),$m(t.pa,t.i),t.h.i.length=0,Ff(t.i),t.i.length=0),t.l.ya()}}function X0(t,e,n){var r=n instanceof Oi?Tr(n):new Oi(n,void 0);if(r.g!="")e&&(r.g=e+"."+r.g),Ou(r,r.m);else{var s=ae.location;r=s.protocol,e=e?e+"."+s.hostname:s.hostname,s=+s.port;var a=new Oi(null,void 0);r&&xu(a,r),e&&(a.g=e),s&&Ou(a,s),n&&(a.l=n),r=a}return n=t.F,e=t.Da,n&&e&&Ge(r,n,e),Ge(r,"VER",t.qa),Ko(t,r),r}function Q0(t,e,n){if(e&&!t.I)throw Error("Can't create secondary domain capable XhrIo object.");return e=n&&t.Ha&&!t.va?new tt(new Wo({ob:!0})):new tt(t.va),e.Oa(t.I),e}function Y0(){}K=Y0.prototype;K.Ba=function(){};K.Aa=function(){};K.za=function(){};K.ya=function(){};K.Va=function(){};function Du(){if(Is&&!(10<=Number(xN)))throw Error("Environmental error: no available transport.")}Du.prototype.g=function(t,e){return new cn(t,e)};function cn(t,e){gt.call(this),this.g=new V0(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.Ca&&(t?t["X-WebChannel-Client-Profile"]=e.Ca:t={"X-WebChannel-Client-Profile":e.Ca}),this.g.U=t,(t=e&&e.cc)&&!Cu(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!Cu(e)&&(this.g.F=e,t=this.h,t!==null&&e in t&&(t=this.h,e in t&&delete t[e])),this.j=new ks(this)}vt(cn,gt);cn.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.I=!0);var t=this.g,e=this.l,n=this.h||void 0;Kt(0),t.Y=e,t.ma=n||{},t.M=t.aa,t.G=X0(t,null,t.Y),wl(t)};cn.prototype.close=function(){ed(this.g)};cn.prototype.u=function(t){var e=this.g;if(typeof t=="string"){var n={};n.__data__=t,t=n}else this.v&&(n={},n.__data__=zf(t),t=n);e.i.push(new rD(e.fb++,t)),e.H==3&&wl(e)};cn.prototype.N=function(){this.g.l=null,delete this.j,ed(this.g),delete this.g,cn.$.N.call(this)};function J0(t){Gf.call(this);var e=t.__sm__;if(e){e:{for(const n in e){t=n;break e}t=void 0}(this.i=t)&&(t=this.i,e=e!==null&&t in e?e[t]:void 0),this.data=e}else this.data=t}vt(J0,Gf);function Z0(){Xf.call(this),this.status=1}vt(Z0,Xf);function ks(t){this.g=t}vt(ks,Y0);ks.prototype.Ba=function(){At(this.g,"a")};ks.prototype.Aa=function(t){At(this.g,new J0(t))};ks.prototype.za=function(t){At(this.g,new Z0)};ks.prototype.ya=function(){At(this.g,"b")};function dD(){this.blockSize=-1}function er(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}vt(er,dD);er.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function dh(t,e,n){n||(n=0);var r=Array(16);if(typeof e=="string")for(var s=0;16>s;++s)r[s]=e.charCodeAt(n++)|e.charCodeAt(n++)<<8|e.charCodeAt(n++)<<16|e.charCodeAt(n++)<<24;else for(s=0;16>s;++s)r[s]=e[n++]|e[n++]<<8|e[n++]<<16|e[n++]<<24;e=t.g[0],n=t.g[1],s=t.g[2];var a=t.g[3],u=e+(a^n&(s^a))+r[0]+3614090360&4294967295;e=n+(u<<7&4294967295|u>>>25),u=a+(s^e&(n^s))+r[1]+3905402710&4294967295,a=e+(u<<12&4294967295|u>>>20),u=s+(n^a&(e^n))+r[2]+606105819&4294967295,s=a+(u<<17&4294967295|u>>>15),u=n+(e^s&(a^e))+r[3]+3250441966&4294967295,n=s+(u<<22&4294967295|u>>>10),u=e+(a^n&(s^a))+r[4]+4118548399&4294967295,e=n+(u<<7&4294967295|u>>>25),u=a+(s^e&(n^s))+r[5]+1200080426&4294967295,a=e+(u<<12&4294967295|u>>>20),u=s+(n^a&(e^n))+r[6]+2821735955&4294967295,s=a+(u<<17&4294967295|u>>>15),u=n+(e^s&(a^e))+r[7]+4249261313&4294967295,n=s+(u<<22&4294967295|u>>>10),u=e+(a^n&(s^a))+r[8]+1770035416&4294967295,e=n+(u<<7&4294967295|u>>>25),u=a+(s^e&(n^s))+r[9]+2336552879&4294967295,a=e+(u<<12&4294967295|u>>>20),u=s+(n^a&(e^n))+r[10]+4294925233&4294967295,s=a+(u<<17&4294967295|u>>>15),u=n+(e^s&(a^e))+r[11]+2304563134&4294967295,n=s+(u<<22&4294967295|u>>>10),u=e+(a^n&(s^a))+r[12]+1804603682&4294967295,e=n+(u<<7&4294967295|u>>>25),u=a+(s^e&(n^s))+r[13]+4254626195&4294967295,a=e+(u<<12&4294967295|u>>>20),u=s+(n^a&(e^n))+r[14]+2792965006&4294967295,s=a+(u<<17&4294967295|u>>>15),u=n+(e^s&(a^e))+r[15]+1236535329&4294967295,n=s+(u<<22&4294967295|u>>>10),u=e+(s^a&(n^s))+r[1]+4129170786&4294967295,e=n+(u<<5&4294967295|u>>>27),u=a+(n^s&(e^n))+r[6]+3225465664&4294967295,a=e+(u<<9&4294967295|u>>>23),u=s+(e^n&(a^e))+r[11]+643717713&4294967295,s=a+(u<<14&4294967295|u>>>18),u=n+(a^e&(s^a))+r[0]+3921069994&4294967295,n=s+(u<<20&4294967295|u>>>12),u=e+(s^a&(n^s))+r[5]+3593408605&4294967295,e=n+(u<<5&4294967295|u>>>27),u=a+(n^s&(e^n))+r[10]+38016083&4294967295,a=e+(u<<9&4294967295|u>>>23),u=s+(e^n&(a^e))+r[15]+3634488961&4294967295,s=a+(u<<14&4294967295|u>>>18),u=n+(a^e&(s^a))+r[4]+3889429448&4294967295,n=s+(u<<20&4294967295|u>>>12),u=e+(s^a&(n^s))+r[9]+568446438&4294967295,e=n+(u<<5&4294967295|u>>>27),u=a+(n^s&(e^n))+r[14]+3275163606&4294967295,a=e+(u<<9&4294967295|u>>>23),u=s+(e^n&(a^e))+r[3]+4107603335&4294967295,s=a+(u<<14&4294967295|u>>>18),u=n+(a^e&(s^a))+r[8]+1163531501&4294967295,n=s+(u<<20&4294967295|u>>>12),u=e+(s^a&(n^s))+r[13]+2850285829&4294967295,e=n+(u<<5&4294967295|u>>>27),u=a+(n^s&(e^n))+r[2]+4243563512&4294967295,a=e+(u<<9&4294967295|u>>>23),u=s+(e^n&(a^e))+r[7]+1735328473&4294967295,s=a+(u<<14&4294967295|u>>>18),u=n+(a^e&(s^a))+r[12]+2368359562&4294967295,n=s+(u<<20&4294967295|u>>>12),u=e+(n^s^a)+r[5]+4294588738&4294967295,e=n+(u<<4&4294967295|u>>>28),u=a+(e^n^s)+r[8]+2272392833&4294967295,a=e+(u<<11&4294967295|u>>>21),u=s+(a^e^n)+r[11]+1839030562&4294967295,s=a+(u<<16&4294967295|u>>>16),u=n+(s^a^e)+r[14]+4259657740&4294967295,n=s+(u<<23&4294967295|u>>>9),u=e+(n^s^a)+r[1]+2763975236&4294967295,e=n+(u<<4&4294967295|u>>>28),u=a+(e^n^s)+r[4]+1272893353&4294967295,a=e+(u<<11&4294967295|u>>>21),u=s+(a^e^n)+r[7]+4139469664&4294967295,s=a+(u<<16&4294967295|u>>>16),u=n+(s^a^e)+r[10]+3200236656&4294967295,n=s+(u<<23&4294967295|u>>>9),u=e+(n^s^a)+r[13]+681279174&4294967295,e=n+(u<<4&4294967295|u>>>28),u=a+(e^n^s)+r[0]+3936430074&4294967295,a=e+(u<<11&4294967295|u>>>21),u=s+(a^e^n)+r[3]+3572445317&4294967295,s=a+(u<<16&4294967295|u>>>16),u=n+(s^a^e)+r[6]+76029189&4294967295,n=s+(u<<23&4294967295|u>>>9),u=e+(n^s^a)+r[9]+3654602809&4294967295,e=n+(u<<4&4294967295|u>>>28),u=a+(e^n^s)+r[12]+3873151461&4294967295,a=e+(u<<11&4294967295|u>>>21),u=s+(a^e^n)+r[15]+530742520&4294967295,s=a+(u<<16&4294967295|u>>>16),u=n+(s^a^e)+r[2]+3299628645&4294967295,n=s+(u<<23&4294967295|u>>>9),u=e+(s^(n|~a))+r[0]+4096336452&4294967295,e=n+(u<<6&4294967295|u>>>26),u=a+(n^(e|~s))+r[7]+1126891415&4294967295,a=e+(u<<10&4294967295|u>>>22),u=s+(e^(a|~n))+r[14]+2878612391&4294967295,s=a+(u<<15&4294967295|u>>>17),u=n+(a^(s|~e))+r[5]+4237533241&4294967295,n=s+(u<<21&4294967295|u>>>11),u=e+(s^(n|~a))+r[12]+1700485571&4294967295,e=n+(u<<6&4294967295|u>>>26),u=a+(n^(e|~s))+r[3]+2399980690&4294967295,a=e+(u<<10&4294967295|u>>>22),u=s+(e^(a|~n))+r[10]+4293915773&4294967295,s=a+(u<<15&4294967295|u>>>17),u=n+(a^(s|~e))+r[1]+2240044497&4294967295,n=s+(u<<21&4294967295|u>>>11),u=e+(s^(n|~a))+r[8]+1873313359&4294967295,e=n+(u<<6&4294967295|u>>>26),u=a+(n^(e|~s))+r[15]+4264355552&4294967295,a=e+(u<<10&4294967295|u>>>22),u=s+(e^(a|~n))+r[6]+2734768916&4294967295,s=a+(u<<15&4294967295|u>>>17),u=n+(a^(s|~e))+r[13]+1309151649&4294967295,n=s+(u<<21&4294967295|u>>>11),u=e+(s^(n|~a))+r[4]+4149444226&4294967295,e=n+(u<<6&4294967295|u>>>26),u=a+(n^(e|~s))+r[11]+3174756917&4294967295,a=e+(u<<10&4294967295|u>>>22),u=s+(e^(a|~n))+r[2]+718787259&4294967295,s=a+(u<<15&4294967295|u>>>17),u=n+(a^(s|~e))+r[9]+3951481745&4294967295,t.g[0]=t.g[0]+e&4294967295,t.g[1]=t.g[1]+(s+(u<<21&4294967295|u>>>11))&4294967295,t.g[2]=t.g[2]+s&4294967295,t.g[3]=t.g[3]+a&4294967295}er.prototype.j=function(t,e){e===void 0&&(e=t.length);for(var n=e-this.blockSize,r=this.m,s=this.h,a=0;a<e;){if(s==0)for(;a<=n;)dh(this,t,a),a+=this.blockSize;if(typeof t=="string"){for(;a<e;)if(r[s++]=t.charCodeAt(a++),s==this.blockSize){dh(this,r),s=0;break}}else for(;a<e;)if(r[s++]=t[a++],s==this.blockSize){dh(this,r),s=0;break}}this.h=s,this.i+=e};er.prototype.l=function(){var t=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);t[0]=128;for(var e=1;e<t.length-8;++e)t[e]=0;var n=8*this.i;for(e=t.length-8;e<t.length;++e)t[e]=n&255,n/=256;for(this.j(t),t=Array(16),e=n=0;4>e;++e)for(var r=0;32>r;r+=8)t[n++]=this.g[e]>>>r&255;return t};function Me(t,e){this.h=e;for(var n=[],r=!0,s=t.length-1;0<=s;s--){var a=t[s]|0;r&&a==e||(n[s]=a,r=!1)}this.g=n}var pD={};function rd(t){return-128<=t&&128>t?Jy(pD,t,function(e){return new Me([e|0],0>e?-1:0)}):new Me([t|0],0>t?-1:0)}function Yn(t){if(isNaN(t)||!isFinite(t))return gs;if(0>t)return bt(Yn(-t));for(var e=[],n=1,r=0;t>=n;r++)e[r]=t/n|0,n*=Yh;return new Me(e,0)}function e_(t,e){if(t.length==0)throw Error("number format error: empty string");if(e=e||10,2>e||36<e)throw Error("radix out of range: "+e);if(t.charAt(0)=="-")return bt(e_(t.substring(1),e));if(0<=t.indexOf("-"))throw Error('number format error: interior "-" character');for(var n=Yn(Math.pow(e,8)),r=gs,s=0;s<t.length;s+=8){var a=Math.min(8,t.length-s),u=parseInt(t.substring(s,s+a),e);8>a?(a=Yn(Math.pow(e,a)),r=r.R(a).add(Yn(u))):(r=r.R(n),r=r.add(Yn(u)))}return r}var Yh=4294967296,gs=rd(0),Jh=rd(1),Jm=rd(16777216);K=Me.prototype;K.ea=function(){if(bn(this))return-bt(this).ea();for(var t=0,e=1,n=0;n<this.g.length;n++){var r=this.D(n);t+=(0<=r?r:Yh+r)*e,e*=Yh}return t};K.toString=function(t){if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(mr(this))return"0";if(bn(this))return"-"+bt(this).toString(t);for(var e=Yn(Math.pow(t,6)),n=this,r="";;){var s=Pu(n,e).g;n=ku(n,s.R(e));var a=((0<n.g.length?n.g[0]:n.h)>>>0).toString(t);if(n=s,mr(n))return a+r;for(;6>a.length;)a="0"+a;r=a+r}};K.D=function(t){return 0>t?0:t<this.g.length?this.g[t]:this.h};function mr(t){if(t.h!=0)return!1;for(var e=0;e<t.g.length;e++)if(t.g[e]!=0)return!1;return!0}function bn(t){return t.h==-1}K.X=function(t){return t=ku(this,t),bn(t)?-1:mr(t)?0:1};function bt(t){for(var e=t.g.length,n=[],r=0;r<e;r++)n[r]=~t.g[r];return new Me(n,~t.h).add(Jh)}K.abs=function(){return bn(this)?bt(this):this};K.add=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0,s=0;s<=e;s++){var a=r+(this.D(s)&65535)+(t.D(s)&65535),u=(a>>>16)+(this.D(s)>>>16)+(t.D(s)>>>16);r=u>>>16,a&=65535,u&=65535,n[s]=u<<16|a}return new Me(n,n[n.length-1]&-2147483648?-1:0)};function ku(t,e){return t.add(bt(e))}K.R=function(t){if(mr(this)||mr(t))return gs;if(bn(this))return bn(t)?bt(this).R(bt(t)):bt(bt(this).R(t));if(bn(t))return bt(this.R(bt(t)));if(0>this.X(Jm)&&0>t.X(Jm))return Yn(this.ea()*t.ea());for(var e=this.g.length+t.g.length,n=[],r=0;r<2*e;r++)n[r]=0;for(r=0;r<this.g.length;r++)for(var s=0;s<t.g.length;s++){var a=this.D(r)>>>16,u=this.D(r)&65535,h=t.D(s)>>>16,f=t.D(s)&65535;n[2*r+2*s]+=u*f,nu(n,2*r+2*s),n[2*r+2*s+1]+=a*f,nu(n,2*r+2*s+1),n[2*r+2*s+1]+=u*h,nu(n,2*r+2*s+1),n[2*r+2*s+2]+=a*h,nu(n,2*r+2*s+2)}for(r=0;r<e;r++)n[r]=n[2*r+1]<<16|n[2*r];for(r=e;r<2*e;r++)n[r]=0;return new Me(n,0)};function nu(t,e){for(;(t[e]&65535)!=t[e];)t[e+1]+=t[e]>>>16,t[e]&=65535,e++}function eo(t,e){this.g=t,this.h=e}function Pu(t,e){if(mr(e))throw Error("division by zero");if(mr(t))return new eo(gs,gs);if(bn(t))return e=Pu(bt(t),e),new eo(bt(e.g),bt(e.h));if(bn(e))return e=Pu(t,bt(e)),new eo(bt(e.g),e.h);if(30<t.g.length){if(bn(t)||bn(e))throw Error("slowDivide_ only works with positive integers.");for(var n=Jh,r=e;0>=r.X(t);)n=Zm(n),r=Zm(r);var s=ss(n,1),a=ss(r,1);for(r=ss(r,2),n=ss(n,2);!mr(r);){var u=a.add(r);0>=u.X(t)&&(s=s.add(n),a=u),r=ss(r,1),n=ss(n,1)}return e=ku(t,s.R(e)),new eo(s,e)}for(s=gs;0<=t.X(e);){for(n=Math.max(1,Math.floor(t.ea()/e.ea())),r=Math.ceil(Math.log(n)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),a=Yn(n),u=a.R(e);bn(u)||0<u.X(t);)n-=r,a=Yn(n),u=a.R(e);mr(a)&&(a=Jh),s=s.add(a),t=ku(t,u)}return new eo(s,t)}K.gb=function(t){return Pu(this,t).h};K.and=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)&t.D(r);return new Me(n,this.h&t.h)};K.or=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)|t.D(r);return new Me(n,this.h|t.h)};K.xor=function(t){for(var e=Math.max(this.g.length,t.g.length),n=[],r=0;r<e;r++)n[r]=this.D(r)^t.D(r);return new Me(n,this.h^t.h)};function Zm(t){for(var e=t.g.length+1,n=[],r=0;r<e;r++)n[r]=t.D(r)<<1|t.D(r-1)>>>31;return new Me(n,t.h)}function ss(t,e){var n=e>>5;e%=32;for(var r=t.g.length-n,s=[],a=0;a<r;a++)s[a]=0<e?t.D(a+n)>>>e|t.D(a+n+1)<<32-e:t.D(a+n);return new Me(s,t.h)}Du.prototype.createWebChannel=Du.prototype.g;cn.prototype.send=cn.prototype.u;cn.prototype.open=cn.prototype.m;cn.prototype.close=cn.prototype.close;dl.NO_ERROR=0;dl.TIMEOUT=8;dl.HTTP_ERROR=6;y0.COMPLETE="complete";_0.EventType=$o;$o.OPEN="a";$o.CLOSE="b";$o.ERROR="c";$o.MESSAGE="d";gt.prototype.listen=gt.prototype.O;tt.prototype.listenOnce=tt.prototype.P;tt.prototype.getLastError=tt.prototype.Sa;tt.prototype.getLastErrorCode=tt.prototype.Ia;tt.prototype.getStatus=tt.prototype.da;tt.prototype.getResponseJson=tt.prototype.Wa;tt.prototype.getResponseText=tt.prototype.ja;tt.prototype.send=tt.prototype.ha;tt.prototype.setWithCredentials=tt.prototype.Oa;er.prototype.digest=er.prototype.l;er.prototype.reset=er.prototype.reset;er.prototype.update=er.prototype.j;Me.prototype.add=Me.prototype.add;Me.prototype.multiply=Me.prototype.R;Me.prototype.modulo=Me.prototype.gb;Me.prototype.compare=Me.prototype.X;Me.prototype.toNumber=Me.prototype.ea;Me.prototype.toString=Me.prototype.toString;Me.prototype.getBits=Me.prototype.D;Me.fromNumber=Yn;Me.fromString=e_;var gD=function(){return new Du},mD=function(){return fl()},ph=dl,vD=y0,yD=Bi,ev={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},_D=Wo,ru=_0,wD=tt,ED=Me;const tv="@firebase/firestore";/**
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
 */class Ot{constructor(e){this.uid=e}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ot.UNAUTHENTICATED=new Ot(null),Ot.GOOGLE_CREDENTIALS=new Ot("google-credentials-uid"),Ot.FIRST_PARTY=new Ot("first-party-uid"),Ot.MOCK_USER=new Ot("mock-user");/**
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
 */let Ps="9.21.0";/**
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
 */const Li=new kf("@firebase/firestore");function nv(){return Li.logLevel}function Z(t,...e){if(Li.logLevel<=xe.DEBUG){const n=e.map(id);Li.debug(`Firestore (${Ps}): ${t}`,...n)}}function Mi(t,...e){if(Li.logLevel<=xe.ERROR){const n=e.map(id);Li.error(`Firestore (${Ps}): ${t}`,...n)}}function Lu(t,...e){if(Li.logLevel<=xe.WARN){const n=e.map(id);Li.warn(`Firestore (${Ps}): ${t}`,...n)}}function id(t){if(typeof t=="string")return t;try{return e=t,JSON.stringify(e)}catch{return t}/**
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
*/var e}/**
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
 */function be(t="Unexpected state"){const e=`FIRESTORE (${Ps}) INTERNAL ASSERTION FAILED: `+t;throw Mi(e),new Error(e)}function mt(t,e){t||be()}function ze(t,e){return t}/**
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
 */const U={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class le extends Rr{constructor(e,n){super(e,n),this.code=e,this.message=n,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
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
 */class Ni{constructor(){this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}}/**
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
 */class t_{constructor(e,n){this.user=n,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ID{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,n){e.enqueueRetryable(()=>n(Ot.UNAUTHENTICATED))}shutdown(){}}class TD{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,n){this.changeListener=n,e.enqueueRetryable(()=>n(this.token.user))}shutdown(){this.changeListener=null}}class bD{constructor(e){this.t=e,this.currentUser=Ot.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,n){let r=this.i;const s=f=>this.i!==r?(r=this.i,n(f)):Promise.resolve();let a=new Ni;this.o=()=>{this.i++,this.currentUser=this.u(),a.resolve(),a=new Ni,e.enqueueRetryable(()=>s(this.currentUser))};const u=()=>{const f=a;e.enqueueRetryable(async()=>{await f.promise,await s(this.currentUser)})},h=f=>{Z("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=f,this.auth.addAuthTokenListener(this.o),u()};this.t.onInit(f=>h(f)),setTimeout(()=>{if(!this.auth){const f=this.t.getImmediate({optional:!0});f?h(f):(Z("FirebaseAuthCredentialsProvider","Auth not yet detected"),a.resolve(),a=new Ni)}},0),u()}getToken(){const e=this.i,n=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(n).then(r=>this.i!==e?(Z("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(mt(typeof r.accessToken=="string"),new t_(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return mt(e===null||typeof e=="string"),new Ot(e)}}class AD{constructor(e,n,r){this.h=e,this.l=n,this.m=r,this.type="FirstParty",this.user=Ot.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class CD{constructor(e,n,r){this.h=e,this.l=n,this.m=r}getToken(){return Promise.resolve(new AD(this.h,this.l,this.m))}start(e,n){e.enqueueRetryable(()=>n(Ot.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class SD{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class RD{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,n){const r=a=>{a.error!=null&&Z("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${a.error.message}`);const u=a.token!==this.T;return this.T=a.token,Z("FirebaseAppCheckTokenProvider",`Received ${u?"new":"existing"} token.`),u?n(a.token):Promise.resolve()};this.o=a=>{e.enqueueRetryable(()=>r(a))};const s=a=>{Z("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=a,this.appCheck.addTokenListener(this.o)};this.I.onInit(a=>s(a)),setTimeout(()=>{if(!this.appCheck){const a=this.I.getImmediate({optional:!0});a?s(a):Z("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then(n=>n?(mt(typeof n.token=="string"),this.T=n.token,new SD(n.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
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
 */function xD(t){const e=typeof self<"u"&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&typeof e.getRandomValues=="function")e.getRandomValues(n);else for(let r=0;r<t;r++)n[r]=Math.floor(256*Math.random());return n}/**
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
 */class n_{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",n=Math.floor(256/e.length)*e.length;let r="";for(;r.length<20;){const s=xD(40);for(let a=0;a<s.length;++a)r.length<20&&s[a]<n&&(r+=e.charAt(s[a]%e.length))}return r}}function He(t,e){return t<e?-1:t>e?1:0}function Ts(t,e,n){return t.length===e.length&&t.every((r,s)=>n(r,e[s]))}/**
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
 */class pt{constructor(e,n){if(this.seconds=e,this.nanoseconds=n,n<0)throw new le(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(n>=1e9)throw new le(U.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+n);if(e<-62135596800)throw new le(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new le(U.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return pt.fromMillis(Date.now())}static fromDate(e){return pt.fromMillis(e.getTime())}static fromMillis(e){const n=Math.floor(e/1e3),r=Math.floor(1e6*(e-1e3*n));return new pt(n,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?He(this.nanoseconds,e.nanoseconds):He(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
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
 */class Ye{constructor(e){this.timestamp=e}static fromTimestamp(e){return new Ye(e)}static min(){return new Ye(new pt(0,0))}static max(){return new Ye(new pt(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
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
 */class So{constructor(e,n,r){n===void 0?n=0:n>e.length&&be(),r===void 0?r=e.length-n:r>e.length-n&&be(),this.segments=e,this.offset=n,this.len=r}get length(){return this.len}isEqual(e){return So.comparator(this,e)===0}child(e){const n=this.segments.slice(this.offset,this.limit());return e instanceof So?e.forEach(r=>{n.push(r)}):n.push(e),this.construct(n)}limit(){return this.offset+this.length}popFirst(e){return e=e===void 0?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return this.length===0}isPrefixOf(e){if(e.length<this.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let n=0;n<this.length;n++)if(this.get(n)!==e.get(n))return!1;return!0}forEach(e){for(let n=this.offset,r=this.limit();n<r;n++)e(this.segments[n])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,n){const r=Math.min(e.length,n.length);for(let s=0;s<r;s++){const a=e.get(s),u=n.get(s);if(a<u)return-1;if(a>u)return 1}return e.length<n.length?-1:e.length>n.length?1:0}}class et extends So{construct(e,n,r){return new et(e,n,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const n=[];for(const r of e){if(r.indexOf("//")>=0)throw new le(U.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);n.push(...r.split("/").filter(s=>s.length>0))}return new et(n)}static emptyPath(){return new et([])}}const OD=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class kt extends So{construct(e,n,r){return new kt(e,n,r)}static isValidIdentifier(e){return OD.test(e)}canonicalString(){return this.toArray().map(e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),kt.isValidIdentifier(e)||(e="`"+e+"`"),e)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new kt(["__name__"])}static fromServerFormat(e){const n=[];let r="",s=0;const a=()=>{if(r.length===0)throw new le(U.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);n.push(r),r=""};let u=!1;for(;s<e.length;){const h=e[s];if(h==="\\"){if(s+1===e.length)throw new le(U.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const f=e[s+1];if(f!=="\\"&&f!=="."&&f!=="`")throw new le(U.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);r+=f,s+=2}else h==="`"?(u=!u,s++):h!=="."||u?(r+=h,s++):(a(),s++)}if(a(),u)throw new le(U.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new kt(n)}static emptyPath(){return new kt([])}}/**
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
 */class pe{constructor(e){this.path=e}static fromPath(e){return new pe(et.fromString(e))}static fromName(e){return new pe(et.fromString(e).popFirst(5))}static empty(){return new pe(et.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return e!==null&&et.comparator(this.path,e.path)===0}toString(){return this.path.toString()}static comparator(e,n){return et.comparator(e.path,n.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new pe(new et(e.slice()))}}function ND(t,e){const n=t.toTimestamp().seconds,r=t.toTimestamp().nanoseconds+1,s=Ye.fromTimestamp(r===1e9?new pt(n+1,0):new pt(n,r));return new ri(s,pe.empty(),e)}function DD(t){return new ri(t.readTime,t.key,-1)}class ri{constructor(e,n,r){this.readTime=e,this.documentKey=n,this.largestBatchId=r}static min(){return new ri(Ye.min(),pe.empty(),-1)}static max(){return new ri(Ye.max(),pe.empty(),-1)}}function kD(t,e){let n=t.readTime.compareTo(e.readTime);return n!==0?n:(n=pe.comparator(t.documentKey,e.documentKey),n!==0?n:He(t.largestBatchId,e.largestBatchId))}/**
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
 */const PD="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class LD{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(e=>e())}}/**
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
 */async function r_(t){if(t.code!==U.FAILED_PRECONDITION||t.message!==PD)throw t;Z("LocalStore","Unexpectedly lost primary lease")}/**
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
 */class F{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e(n=>{this.isDone=!0,this.result=n,this.nextCallback&&this.nextCallback(n)},n=>{this.isDone=!0,this.error=n,this.catchCallback&&this.catchCallback(n)})}catch(e){return this.next(void 0,e)}next(e,n){return this.callbackAttached&&be(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(n,this.error):this.wrapSuccess(e,this.result):new F((r,s)=>{this.nextCallback=a=>{this.wrapSuccess(e,a).next(r,s)},this.catchCallback=a=>{this.wrapFailure(n,a).next(r,s)}})}toPromise(){return new Promise((e,n)=>{this.next(e,n)})}wrapUserFunction(e){try{const n=e();return n instanceof F?n:F.resolve(n)}catch(n){return F.reject(n)}}wrapSuccess(e,n){return e?this.wrapUserFunction(()=>e(n)):F.resolve(n)}wrapFailure(e,n){return e?this.wrapUserFunction(()=>e(n)):F.reject(n)}static resolve(e){return new F((n,r)=>{n(e)})}static reject(e){return new F((n,r)=>{r(e)})}static waitFor(e){return new F((n,r)=>{let s=0,a=0,u=!1;e.forEach(h=>{++s,h.next(()=>{++a,u&&a===s&&n()},f=>r(f))}),u=!0,a===s&&n()})}static or(e){let n=F.resolve(!1);for(const r of e)n=n.next(s=>s?F.resolve(s):r());return n}static forEach(e,n){const r=[];return e.forEach((s,a)=>{r.push(n.call(this,s,a))}),this.waitFor(r)}static mapArray(e,n){return new F((r,s)=>{const a=e.length,u=new Array(a);let h=0;for(let f=0;f<a;f++){const p=f;n(e[p]).next(v=>{u[p]=v,++h,h===a&&r(u)},v=>s(v))}})}static doWhile(e,n){return new F((r,s)=>{const a=()=>{e()===!0?n().next(()=>{a()},s):r()};a()})}}function El(t){return t.name==="IndexedDbTransactionError"}/**
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
 */class i_{constructor(e,n){this.previousValue=e,n&&(n.sequenceNumberHandler=r=>this.ot(r),this.ut=r=>n.writeSequenceNumber(r))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}i_.ct=-1;function sd(t){return t==null}function Mu(t){return t===0&&1/t==-1/0}function MD(t){return typeof t=="number"&&Number.isInteger(t)&&!Mu(t)&&t<=Number.MAX_SAFE_INTEGER&&t>=Number.MIN_SAFE_INTEGER}/**
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
 */function rv(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function jo(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function s_(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}/**
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
 */class nn{constructor(e,n){this.comparator=e,this.root=n||It.EMPTY}insert(e,n){return new nn(this.comparator,this.root.insert(e,n,this.comparator).copy(null,null,It.BLACK,null,null))}remove(e){return new nn(this.comparator,this.root.remove(e,this.comparator).copy(null,null,It.BLACK,null,null))}get(e){let n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(r===0)return n.value;r<0?n=n.left:r>0&&(n=n.right)}return null}indexOf(e){let n=0,r=this.root;for(;!r.isEmpty();){const s=this.comparator(e,r.key);if(s===0)return n+r.left.size;s<0?r=r.left:(n+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal((n,r)=>(e(n,r),!1))}toString(){const e=[];return this.inorderTraversal((n,r)=>(e.push(`${n}:${r}`),!1)),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new iu(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new iu(this.root,e,this.comparator,!1)}getReverseIterator(){return new iu(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new iu(this.root,e,this.comparator,!0)}}class iu{constructor(e,n,r,s){this.isReverse=s,this.nodeStack=[];let a=1;for(;!e.isEmpty();)if(a=n?r(e.key,n):1,n&&s&&(a*=-1),a<0)e=this.isReverse?e.left:e.right;else{if(a===0){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const n={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return n}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class It{constructor(e,n,r,s,a){this.key=e,this.value=n,this.color=r??It.RED,this.left=s??It.EMPTY,this.right=a??It.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,n,r,s,a){return new It(e??this.key,n??this.value,r??this.color,s??this.left,a??this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,n,r){let s=this;const a=r(e,s.key);return s=a<0?s.copy(null,null,null,s.left.insert(e,n,r),null):a===0?s.copy(null,n,null,null,null):s.copy(null,null,null,null,s.right.insert(e,n,r)),s.fixUp()}removeMin(){if(this.left.isEmpty())return It.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,n){let r,s=this;if(n(e,s.key)<0)s.left.isEmpty()||s.left.isRed()||s.left.left.isRed()||(s=s.moveRedLeft()),s=s.copy(null,null,null,s.left.remove(e,n),null);else{if(s.left.isRed()&&(s=s.rotateRight()),s.right.isEmpty()||s.right.isRed()||s.right.left.isRed()||(s=s.moveRedRight()),n(e,s.key)===0){if(s.right.isEmpty())return It.EMPTY;r=s.right.min(),s=s.copy(r.key,r.value,null,null,s.right.removeMin())}s=s.copy(null,null,null,null,s.right.remove(e,n))}return s.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,It.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,It.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),n=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,n)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw be();const e=this.left.check();if(e!==this.right.check())throw be();return e+(this.isRed()?0:1)}}It.EMPTY=null,It.RED=!0,It.BLACK=!1;It.EMPTY=new class{constructor(){this.size=0}get key(){throw be()}get value(){throw be()}get color(){throw be()}get left(){throw be()}get right(){throw be()}copy(t,e,n,r,s){return this}insert(t,e,n){return new It(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
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
 */class jt{constructor(e){this.comparator=e,this.data=new nn(this.comparator)}has(e){return this.data.get(e)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal((n,r)=>(e(n),!1))}forEachInRange(e,n){const r=this.data.getIteratorFrom(e[0]);for(;r.hasNext();){const s=r.getNext();if(this.comparator(s.key,e[1])>=0)return;n(s.key)}}forEachWhile(e,n){let r;for(r=n!==void 0?this.data.getIteratorFrom(n):this.data.getIterator();r.hasNext();)if(!e(r.getNext().key))return}firstAfterOrEqual(e){const n=this.data.getIteratorFrom(e);return n.hasNext()?n.getNext().key:null}getIterator(){return new iv(this.data.getIterator())}getIteratorFrom(e){return new iv(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let n=this;return n.size<e.size&&(n=e,e=this),e.forEach(r=>{n=n.add(r)}),n}isEqual(e){if(!(e instanceof jt)||this.size!==e.size)return!1;const n=this.data.getIterator(),r=e.data.getIterator();for(;n.hasNext();){const s=n.getNext().key,a=r.getNext().key;if(this.comparator(s,a)!==0)return!1}return!0}toArray(){const e=[];return this.forEach(n=>{e.push(n)}),e}toString(){const e=[];return this.forEach(n=>e.push(n)),"SortedSet("+e.toString()+")"}copy(e){const n=new jt(this.comparator);return n.data=e,n}}class iv{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
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
 */class Un{constructor(e){this.fields=e,e.sort(kt.comparator)}static empty(){return new Un([])}unionWith(e){let n=new jt(kt.comparator);for(const r of this.fields)n=n.add(r);for(const r of e)n=n.add(r);return new Un(n.toArray())}covers(e){for(const n of this.fields)if(n.isPrefixOf(e))return!0;return!1}isEqual(e){return Ts(this.fields,e.fields,(n,r)=>n.isEqual(r))}}/**
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
 */class FD extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
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
 */class br{constructor(e){this.binaryString=e}static fromBase64String(e){const n=function(r){try{return atob(r)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new FD("Invalid base64 string: "+s):s}}(e);return new br(n)}static fromUint8Array(e){const n=function(r){let s="";for(let a=0;a<r.length;++a)s+=String.fromCharCode(r[a]);return s}(e);return new br(n)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const n=new Uint8Array(e.length);for(let r=0;r<e.length;r++)n[r]=e.charCodeAt(r);return n}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return He(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}br.EMPTY_BYTE_STRING=new br("");const UD=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Fi(t){if(mt(!!t),typeof t=="string"){let e=0;const n=UD.exec(t);if(mt(!!n),n[1]){let s=n[1];s=(s+"000000000").substr(0,9),e=Number(s)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:Tt(t.seconds),nanos:Tt(t.nanos)}}function Tt(t){return typeof t=="number"?t:typeof t=="string"?Number(t):0}function Ro(t){return typeof t=="string"?br.fromBase64String(t):br.fromUint8Array(t)}/**
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
 */function od(t){var e,n;return((n=(((e=t==null?void 0:t.mapValue)===null||e===void 0?void 0:e.fields)||{}).__type__)===null||n===void 0?void 0:n.stringValue)==="server_timestamp"}function o_(t){const e=t.mapValue.fields.__previous_value__;return od(e)?o_(e):e}function Fu(t){const e=Fi(t.mapValue.fields.__local_write_time__.timestampValue);return new pt(e.seconds,e.nanos)}/**
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
 */class BD{constructor(e,n,r,s,a,u,h,f){this.databaseId=e,this.appId=n,this.persistenceKey=r,this.host=s,this.ssl=a,this.forceLongPolling=u,this.autoDetectLongPolling=h,this.useFetchStreams=f}}class Uu{constructor(e,n){this.projectId=e,this.database=n||"(default)"}static empty(){return new Uu("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(e){return e instanceof Uu&&e.projectId===this.projectId&&e.database===this.database}}/**
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
 */const su={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function bs(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?od(t)?4:$D(t)?9007199254740991:10:be()}function tr(t,e){if(t===e)return!0;const n=bs(t);if(n!==bs(e))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return Fu(t).isEqual(Fu(e));case 3:return function(r,s){if(typeof r.timestampValue=="string"&&typeof s.timestampValue=="string"&&r.timestampValue.length===s.timestampValue.length)return r.timestampValue===s.timestampValue;const a=Fi(r.timestampValue),u=Fi(s.timestampValue);return a.seconds===u.seconds&&a.nanos===u.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(r,s){return Ro(r.bytesValue).isEqual(Ro(s.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(r,s){return Tt(r.geoPointValue.latitude)===Tt(s.geoPointValue.latitude)&&Tt(r.geoPointValue.longitude)===Tt(s.geoPointValue.longitude)}(t,e);case 2:return function(r,s){if("integerValue"in r&&"integerValue"in s)return Tt(r.integerValue)===Tt(s.integerValue);if("doubleValue"in r&&"doubleValue"in s){const a=Tt(r.doubleValue),u=Tt(s.doubleValue);return a===u?Mu(a)===Mu(u):isNaN(a)&&isNaN(u)}return!1}(t,e);case 9:return Ts(t.arrayValue.values||[],e.arrayValue.values||[],tr);case 10:return function(r,s){const a=r.mapValue.fields||{},u=s.mapValue.fields||{};if(rv(a)!==rv(u))return!1;for(const h in a)if(a.hasOwnProperty(h)&&(u[h]===void 0||!tr(a[h],u[h])))return!1;return!0}(t,e);default:return be()}}function xo(t,e){return(t.values||[]).find(n=>tr(n,e))!==void 0}function As(t,e){if(t===e)return 0;const n=bs(t),r=bs(e);if(n!==r)return He(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return He(t.booleanValue,e.booleanValue);case 2:return function(s,a){const u=Tt(s.integerValue||s.doubleValue),h=Tt(a.integerValue||a.doubleValue);return u<h?-1:u>h?1:u===h?0:isNaN(u)?isNaN(h)?0:-1:1}(t,e);case 3:return sv(t.timestampValue,e.timestampValue);case 4:return sv(Fu(t),Fu(e));case 5:return He(t.stringValue,e.stringValue);case 6:return function(s,a){const u=Ro(s),h=Ro(a);return u.compareTo(h)}(t.bytesValue,e.bytesValue);case 7:return function(s,a){const u=s.split("/"),h=a.split("/");for(let f=0;f<u.length&&f<h.length;f++){const p=He(u[f],h[f]);if(p!==0)return p}return He(u.length,h.length)}(t.referenceValue,e.referenceValue);case 8:return function(s,a){const u=He(Tt(s.latitude),Tt(a.latitude));return u!==0?u:He(Tt(s.longitude),Tt(a.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(s,a){const u=s.values||[],h=a.values||[];for(let f=0;f<u.length&&f<h.length;++f){const p=As(u[f],h[f]);if(p)return p}return He(u.length,h.length)}(t.arrayValue,e.arrayValue);case 10:return function(s,a){if(s===su.mapValue&&a===su.mapValue)return 0;if(s===su.mapValue)return 1;if(a===su.mapValue)return-1;const u=s.fields||{},h=Object.keys(u),f=a.fields||{},p=Object.keys(f);h.sort(),p.sort();for(let v=0;v<h.length&&v<p.length;++v){const E=He(h[v],p[v]);if(E!==0)return E;const A=As(u[h[v]],f[p[v]]);if(A!==0)return A}return He(h.length,p.length)}(t.mapValue,e.mapValue);default:throw be()}}function sv(t,e){if(typeof t=="string"&&typeof e=="string"&&t.length===e.length)return He(t,e);const n=Fi(t),r=Fi(e),s=He(n.seconds,r.seconds);return s!==0?s:He(n.nanos,r.nanos)}function Cs(t){return Zh(t)}function Zh(t){return"nullValue"in t?"null":"booleanValue"in t?""+t.booleanValue:"integerValue"in t?""+t.integerValue:"doubleValue"in t?""+t.doubleValue:"timestampValue"in t?function(r){const s=Fi(r);return`time(${s.seconds},${s.nanos})`}(t.timestampValue):"stringValue"in t?t.stringValue:"bytesValue"in t?Ro(t.bytesValue).toBase64():"referenceValue"in t?(n=t.referenceValue,pe.fromName(n).toString()):"geoPointValue"in t?`geo(${(e=t.geoPointValue).latitude},${e.longitude})`:"arrayValue"in t?function(r){let s="[",a=!0;for(const u of r.values||[])a?a=!1:s+=",",s+=Zh(u);return s+"]"}(t.arrayValue):"mapValue"in t?function(r){const s=Object.keys(r.fields||{}).sort();let a="{",u=!0;for(const h of s)u?u=!1:a+=",",a+=`${h}:${Zh(r.fields[h])}`;return a+"}"}(t.mapValue):be();var e,n}function ef(t){return!!t&&"integerValue"in t}function ad(t){return!!t&&"arrayValue"in t}function fu(t){return!!t&&"mapValue"in t}function uo(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&typeof t.timestampValue=="object")return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return jo(t.mapValue.fields,(n,r)=>e.mapValue.fields[n]=uo(r)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=uo(t.arrayValue.values[n]);return e}return Object.assign({},t)}function $D(t){return(((t.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
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
 */class Mn{constructor(e){this.value=e}static empty(){return new Mn({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let n=this.value;for(let r=0;r<e.length-1;++r)if(n=(n.mapValue.fields||{})[e.get(r)],!fu(n))return null;return n=(n.mapValue.fields||{})[e.lastSegment()],n||null}}set(e,n){this.getFieldsMap(e.popLast())[e.lastSegment()]=uo(n)}setAll(e){let n=kt.emptyPath(),r={},s=[];e.forEach((u,h)=>{if(!n.isImmediateParentOf(h)){const f=this.getFieldsMap(n);this.applyChanges(f,r,s),r={},s=[],n=h.popLast()}u?r[h.lastSegment()]=uo(u):s.push(h.lastSegment())});const a=this.getFieldsMap(n);this.applyChanges(a,r,s)}delete(e){const n=this.field(e.popLast());fu(n)&&n.mapValue.fields&&delete n.mapValue.fields[e.lastSegment()]}isEqual(e){return tr(this.value,e.value)}getFieldsMap(e){let n=this.value;n.mapValue.fields||(n.mapValue={fields:{}});for(let r=0;r<e.length;++r){let s=n.mapValue.fields[e.get(r)];fu(s)&&s.mapValue.fields||(s={mapValue:{fields:{}}},n.mapValue.fields[e.get(r)]=s),n=s}return n.mapValue.fields}applyChanges(e,n,r){jo(n,(s,a)=>e[s]=a);for(const s of r)delete e[s]}clone(){return new Mn(uo(this.value))}}function a_(t){const e=[];return jo(t.fields,(n,r)=>{const s=new kt([n]);if(fu(r)){const a=a_(r.mapValue).fields;if(a.length===0)e.push(s);else for(const u of a)e.push(s.child(u))}else e.push(s)}),new Un(e)}/**
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
 */class kn{constructor(e,n,r,s,a,u,h){this.key=e,this.documentType=n,this.version=r,this.readTime=s,this.createTime=a,this.data=u,this.documentState=h}static newInvalidDocument(e){return new kn(e,0,Ye.min(),Ye.min(),Ye.min(),Mn.empty(),0)}static newFoundDocument(e,n,r,s){return new kn(e,1,n,Ye.min(),r,s,0)}static newNoDocument(e,n){return new kn(e,2,n,Ye.min(),Ye.min(),Mn.empty(),0)}static newUnknownDocument(e,n){return new kn(e,3,n,Ye.min(),Ye.min(),Mn.empty(),2)}convertToFoundDocument(e,n){return!this.createTime.isEqual(Ye.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=e),this.version=e,this.documentType=1,this.data=n,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Mn.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Mn.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=Ye.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(e){return e instanceof kn&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new kn(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Bu{constructor(e,n){this.position=e,this.inclusive=n}}function ov(t,e,n){let r=0;for(let s=0;s<t.position.length;s++){const a=e[s],u=t.position[s];if(a.field.isKeyField()?r=pe.comparator(pe.fromName(u.referenceValue),n.key):r=As(u,n.data.field(a.field)),a.dir==="desc"&&(r*=-1),r!==0)break}return r}function av(t,e){if(t===null)return e===null;if(e===null||t.inclusive!==e.inclusive||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!tr(t.position[n],e.position[n]))return!1;return!0}/**
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
 */class lo{constructor(e,n="asc"){this.field=e,this.dir=n}}function VD(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}/**
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
 */class u_{}class dt extends u_{constructor(e,n,r){super(),this.field=e,this.op=n,this.value=r}static create(e,n,r){return e.isKeyField()?n==="in"||n==="not-in"?this.createKeyFieldInFilter(e,n,r):new WD(e,n,r):n==="array-contains"?new jD(e,r):n==="in"?new qD(e,r):n==="not-in"?new GD(e,r):n==="array-contains-any"?new XD(e,r):new dt(e,n,r)}static createKeyFieldInFilter(e,n,r){return n==="in"?new zD(e,r):new KD(e,r)}matches(e){const n=e.data.field(this.field);return this.op==="!="?n!==null&&this.matchesComparison(As(n,this.value)):n!==null&&bs(this.value)===bs(n)&&this.matchesComparison(As(n,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return e===0;case"!=":return e!==0;case">":return e>0;case">=":return e>=0;default:return be()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class ii extends u_{constructor(e,n){super(),this.filters=e,this.op=n,this.ht=null}static create(e,n){return new ii(e,n)}matches(e){return l_(this)?this.filters.find(n=>!n.matches(e))===void 0:this.filters.find(n=>n.matches(e))!==void 0}getFlattenedFilters(){return this.ht!==null||(this.ht=this.filters.reduce((e,n)=>e.concat(n.getFlattenedFilters()),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt(n=>n.isInequality());return e!==null?e.field:null}lt(e){for(const n of this.getFlattenedFilters())if(e(n))return n;return null}}function l_(t){return t.op==="and"}function c_(t){return HD(t)&&l_(t)}function HD(t){for(const e of t.filters)if(e instanceof ii)return!1;return!0}function tf(t){if(t instanceof dt)return t.field.canonicalString()+t.op.toString()+Cs(t.value);if(c_(t))return t.filters.map(e=>tf(e)).join(",");{const e=t.filters.map(n=>tf(n)).join(",");return`${t.op}(${e})`}}function h_(t,e){return t instanceof dt?function(n,r){return r instanceof dt&&n.op===r.op&&n.field.isEqual(r.field)&&tr(n.value,r.value)}(t,e):t instanceof ii?function(n,r){return r instanceof ii&&n.op===r.op&&n.filters.length===r.filters.length?n.filters.reduce((s,a,u)=>s&&h_(a,r.filters[u]),!0):!1}(t,e):void be()}function f_(t){return t instanceof dt?function(e){return`${e.field.canonicalString()} ${e.op} ${Cs(e.value)}`}(t):t instanceof ii?function(e){return e.op.toString()+" {"+e.getFilters().map(f_).join(" ,")+"}"}(t):"Filter"}class WD extends dt{constructor(e,n,r){super(e,n,r),this.key=pe.fromName(r.referenceValue)}matches(e){const n=pe.comparator(e.key,this.key);return this.matchesComparison(n)}}class zD extends dt{constructor(e,n){super(e,"in",n),this.keys=d_("in",n)}matches(e){return this.keys.some(n=>n.isEqual(e.key))}}class KD extends dt{constructor(e,n){super(e,"not-in",n),this.keys=d_("not-in",n)}matches(e){return!this.keys.some(n=>n.isEqual(e.key))}}function d_(t,e){var n;return(((n=e.arrayValue)===null||n===void 0?void 0:n.values)||[]).map(r=>pe.fromName(r.referenceValue))}class jD extends dt{constructor(e,n){super(e,"array-contains",n)}matches(e){const n=e.data.field(this.field);return ad(n)&&xo(n.arrayValue,this.value)}}class qD extends dt{constructor(e,n){super(e,"in",n)}matches(e){const n=e.data.field(this.field);return n!==null&&xo(this.value.arrayValue,n)}}class GD extends dt{constructor(e,n){super(e,"not-in",n)}matches(e){if(xo(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const n=e.data.field(this.field);return n!==null&&!xo(this.value.arrayValue,n)}}class XD extends dt{constructor(e,n){super(e,"array-contains-any",n)}matches(e){const n=e.data.field(this.field);return!(!ad(n)||!n.arrayValue.values)&&n.arrayValue.values.some(r=>xo(this.value.arrayValue,r))}}/**
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
 */class QD{constructor(e,n=null,r=[],s=[],a=null,u=null,h=null){this.path=e,this.collectionGroup=n,this.orderBy=r,this.filters=s,this.limit=a,this.startAt=u,this.endAt=h,this.ft=null}}function uv(t,e=null,n=[],r=[],s=null,a=null,u=null){return new QD(t,e,n,r,s,a,u)}function ud(t){const e=ze(t);if(e.ft===null){let n=e.path.canonicalString();e.collectionGroup!==null&&(n+="|cg:"+e.collectionGroup),n+="|f:",n+=e.filters.map(r=>tf(r)).join(","),n+="|ob:",n+=e.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),sd(e.limit)||(n+="|l:",n+=e.limit),e.startAt&&(n+="|lb:",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+="|ub:",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),e.ft=n}return e.ft}function ld(t,e){if(t.limit!==e.limit||t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!VD(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let n=0;n<t.filters.length;n++)if(!h_(t.filters[n],e.filters[n]))return!1;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!av(t.startAt,e.startAt)&&av(t.endAt,e.endAt)}/**
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
 */class Il{constructor(e,n=null,r=[],s=[],a=null,u="F",h=null,f=null){this.path=e,this.collectionGroup=n,this.explicitOrderBy=r,this.filters=s,this.limit=a,this.limitType=u,this.startAt=h,this.endAt=f,this.dt=null,this._t=null,this.startAt,this.endAt}}function YD(t,e,n,r,s,a,u,h){return new Il(t,e,n,r,s,a,u,h)}function JD(t){return new Il(t)}function lv(t){return t.filters.length===0&&t.limit===null&&t.startAt==null&&t.endAt==null&&(t.explicitOrderBy.length===0||t.explicitOrderBy.length===1&&t.explicitOrderBy[0].field.isKeyField())}function ZD(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function ek(t){for(const e of t.filters){const n=e.getFirstInequalityField();if(n!==null)return n}return null}function tk(t){return t.collectionGroup!==null}function ms(t){const e=ze(t);if(e.dt===null){e.dt=[];const n=ek(e),r=ZD(e);if(n!==null&&r===null)n.isKeyField()||e.dt.push(new lo(n)),e.dt.push(new lo(kt.keyField(),"asc"));else{let s=!1;for(const a of e.explicitOrderBy)e.dt.push(a),a.field.isKeyField()&&(s=!0);if(!s){const a=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.dt.push(new lo(kt.keyField(),a))}}}return e.dt}function Ss(t){const e=ze(t);if(!e._t)if(e.limitType==="F")e._t=uv(e.path,e.collectionGroup,ms(e),e.filters,e.limit,e.startAt,e.endAt);else{const n=[];for(const a of ms(e)){const u=a.dir==="desc"?"asc":"desc";n.push(new lo(a.field,u))}const r=e.endAt?new Bu(e.endAt.position,e.endAt.inclusive):null,s=e.startAt?new Bu(e.startAt.position,e.startAt.inclusive):null;e._t=uv(e.path,e.collectionGroup,n,e.filters,e.limit,r,s)}return e._t}function nf(t,e,n){return new Il(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function p_(t,e){return ld(Ss(t),Ss(e))&&t.limitType===e.limitType}function g_(t){return`${ud(Ss(t))}|lt:${t.limitType}`}function cv(t){return`Query(target=${function(e){let n=e.path.canonicalString();return e.collectionGroup!==null&&(n+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(n+=`, filters: [${e.filters.map(r=>f_(r)).join(", ")}]`),sd(e.limit)||(n+=", limit: "+e.limit),e.orderBy.length>0&&(n+=`, orderBy: [${e.orderBy.map(r=>function(s){return`${s.field.canonicalString()} (${s.dir})`}(r)).join(", ")}]`),e.startAt&&(n+=", startAt: ",n+=e.startAt.inclusive?"b:":"a:",n+=e.startAt.position.map(r=>Cs(r)).join(",")),e.endAt&&(n+=", endAt: ",n+=e.endAt.inclusive?"a:":"b:",n+=e.endAt.position.map(r=>Cs(r)).join(",")),`Target(${n})`}(Ss(t))}; limitType=${t.limitType})`}function cd(t,e){return e.isFoundDocument()&&function(n,r){const s=r.key.path;return n.collectionGroup!==null?r.key.hasCollectionId(n.collectionGroup)&&n.path.isPrefixOf(s):pe.isDocumentKey(n.path)?n.path.isEqual(s):n.path.isImmediateParentOf(s)}(t,e)&&function(n,r){for(const s of ms(n))if(!s.field.isKeyField()&&r.data.field(s.field)===null)return!1;return!0}(t,e)&&function(n,r){for(const s of n.filters)if(!s.matches(r))return!1;return!0}(t,e)&&function(n,r){return!(n.startAt&&!function(s,a,u){const h=ov(s,a,u);return s.inclusive?h<=0:h<0}(n.startAt,ms(n),r)||n.endAt&&!function(s,a,u){const h=ov(s,a,u);return s.inclusive?h>=0:h>0}(n.endAt,ms(n),r))}(t,e)}function nk(t){return(e,n)=>{let r=!1;for(const s of ms(t)){const a=rk(s,e,n);if(a!==0)return a;r=r||s.field.isKeyField()}return 0}}function rk(t,e,n){const r=t.field.isKeyField()?pe.comparator(e.key,n.key):function(s,a,u){const h=a.data.field(s),f=u.data.field(s);return h!==null&&f!==null?As(h,f):be()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return be()}}/**
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
 */class Ls{constructor(e,n){this.mapKeyFn=e,this.equalsFn=n,this.inner={},this.innerSize=0}get(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r!==void 0){for(const[s,a]of r)if(this.equalsFn(s,e))return a}}has(e){return this.get(e)!==void 0}set(e,n){const r=this.mapKeyFn(e),s=this.inner[r];if(s===void 0)return this.inner[r]=[[e,n]],void this.innerSize++;for(let a=0;a<s.length;a++)if(this.equalsFn(s[a][0],e))return void(s[a]=[e,n]);s.push([e,n]),this.innerSize++}delete(e){const n=this.mapKeyFn(e),r=this.inner[n];if(r===void 0)return!1;for(let s=0;s<r.length;s++)if(this.equalsFn(r[s][0],e))return r.length===1?delete this.inner[n]:r.splice(s,1),this.innerSize--,!0;return!1}forEach(e){jo(this.inner,(n,r)=>{for(const[s,a]of r)e(s,a)})}isEmpty(){return s_(this.inner)}size(){return this.innerSize}}/**
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
 */const ik=new nn(pe.comparator);function $u(){return ik}const m_=new nn(pe.comparator);function ou(...t){let e=m_;for(const n of t)e=e.insert(n.key,n);return e}function v_(t){let e=m_;return t.forEach((n,r)=>e=e.insert(n,r.overlayedDocument)),e}function Si(){return co()}function y_(){return co()}function co(){return new Ls(t=>t.toString(),(t,e)=>t.isEqual(e))}const sk=new nn(pe.comparator),ok=new jt(pe.comparator);function Nt(...t){let e=ok;for(const n of t)e=e.add(n);return e}const ak=new jt(He);function uk(){return ak}/**
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
 */function __(t,e){if(t.useProto3Json){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mu(e)?"-0":e}}function w_(t){return{integerValue:""+t}}function lk(t,e){return MD(e)?w_(e):__(t,e)}/**
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
 */class Tl{constructor(){this._=void 0}}function ck(t,e,n){return t instanceof Vu?function(r,s){const a={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:r.seconds,nanos:r.nanoseconds}}}};return s&&od(s)&&(s=o_(s)),s&&(a.fields.__previous_value__=s),{mapValue:a}}(n,e):t instanceof Oo?I_(t,e):t instanceof No?T_(t,e):function(r,s){const a=E_(r,s),u=hv(a)+hv(r.wt);return ef(a)&&ef(r.wt)?w_(u):__(r.serializer,u)}(t,e)}function hk(t,e,n){return t instanceof Oo?I_(t,e):t instanceof No?T_(t,e):n}function E_(t,e){return t instanceof Hu?ef(n=e)||function(r){return!!r&&"doubleValue"in r}(n)?e:{integerValue:0}:null;var n}class Vu extends Tl{}class Oo extends Tl{constructor(e){super(),this.elements=e}}function I_(t,e){const n=b_(e);for(const r of t.elements)n.some(s=>tr(s,r))||n.push(r);return{arrayValue:{values:n}}}class No extends Tl{constructor(e){super(),this.elements=e}}function T_(t,e){let n=b_(e);for(const r of t.elements)n=n.filter(s=>!tr(s,r));return{arrayValue:{values:n}}}class Hu extends Tl{constructor(e,n){super(),this.serializer=e,this.wt=n}}function hv(t){return Tt(t.integerValue||t.doubleValue)}function b_(t){return ad(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}function fk(t,e){return t.field.isEqual(e.field)&&function(n,r){return n instanceof Oo&&r instanceof Oo||n instanceof No&&r instanceof No?Ts(n.elements,r.elements,tr):n instanceof Hu&&r instanceof Hu?tr(n.wt,r.wt):n instanceof Vu&&r instanceof Vu}(t.transform,e.transform)}class dk{constructor(e,n){this.version=e,this.transformResults=n}}class wr{constructor(e,n){this.updateTime=e,this.exists=n}static none(){return new wr}static exists(e){return new wr(void 0,e)}static updateTime(e){return new wr(e)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function du(t,e){return t.updateTime!==void 0?e.isFoundDocument()&&e.version.isEqual(t.updateTime):t.exists===void 0||t.exists===e.isFoundDocument()}class bl{}function A_(t,e){if(!t.hasLocalMutations||e&&e.fields.length===0)return null;if(e===null)return t.isNoDocument()?new S_(t.key,wr.none()):new qo(t.key,t.data,wr.none());{const n=t.data,r=Mn.empty();let s=new jt(kt.comparator);for(let a of e.fields)if(!s.has(a)){let u=n.field(a);u===null&&a.length>1&&(a=a.popLast(),u=n.field(a)),u===null?r.delete(a):r.set(a,u),s=s.add(a)}return new $i(t.key,r,new Un(s.toArray()),wr.none())}}function pk(t,e,n){t instanceof qo?function(r,s,a){const u=r.value.clone(),h=dv(r.fieldTransforms,s,a.transformResults);u.setAll(h),s.convertToFoundDocument(a.version,u).setHasCommittedMutations()}(t,e,n):t instanceof $i?function(r,s,a){if(!du(r.precondition,s))return void s.convertToUnknownDocument(a.version);const u=dv(r.fieldTransforms,s,a.transformResults),h=s.data;h.setAll(C_(r)),h.setAll(u),s.convertToFoundDocument(a.version,h).setHasCommittedMutations()}(t,e,n):function(r,s,a){s.convertToNoDocument(a.version).setHasCommittedMutations()}(0,e,n)}function ho(t,e,n,r){return t instanceof qo?function(s,a,u,h){if(!du(s.precondition,a))return u;const f=s.value.clone(),p=pv(s.fieldTransforms,h,a);return f.setAll(p),a.convertToFoundDocument(a.version,f).setHasLocalMutations(),null}(t,e,n,r):t instanceof $i?function(s,a,u,h){if(!du(s.precondition,a))return u;const f=pv(s.fieldTransforms,h,a),p=a.data;return p.setAll(C_(s)),p.setAll(f),a.convertToFoundDocument(a.version,p).setHasLocalMutations(),u===null?null:u.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(v=>v.field))}(t,e,n,r):function(s,a,u){return du(s.precondition,a)?(a.convertToNoDocument(a.version).setHasLocalMutations(),null):u}(t,e,n)}function gk(t,e){let n=null;for(const r of t.fieldTransforms){const s=e.data.field(r.field),a=E_(r.transform,s||null);a!=null&&(n===null&&(n=Mn.empty()),n.set(r.field,a))}return n||null}function fv(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(n,r){return n===void 0&&r===void 0||!(!n||!r)&&Ts(n,r,(s,a)=>fk(s,a))}(t.fieldTransforms,e.fieldTransforms)&&(t.type===0?t.value.isEqual(e.value):t.type!==1||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}class qo extends bl{constructor(e,n,r,s=[]){super(),this.key=e,this.value=n,this.precondition=r,this.fieldTransforms=s,this.type=0}getFieldMask(){return null}}class $i extends bl{constructor(e,n,r,s,a=[]){super(),this.key=e,this.data=n,this.fieldMask=r,this.precondition=s,this.fieldTransforms=a,this.type=1}getFieldMask(){return this.fieldMask}}function C_(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function dv(t,e,n){const r=new Map;mt(t.length===n.length);for(let s=0;s<n.length;s++){const a=t[s],u=a.transform,h=e.data.field(a.field);r.set(a.field,hk(u,h,n[s]))}return r}function pv(t,e,n){const r=new Map;for(const s of t){const a=s.transform,u=n.data.field(s.field);r.set(s.field,ck(a,u,e))}return r}class S_ extends bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class mk extends bl{constructor(e,n){super(),this.key=e,this.precondition=n,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
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
 */class vk{constructor(e,n,r,s){this.batchId=e,this.localWriteTime=n,this.baseMutations=r,this.mutations=s}applyToRemoteDocument(e,n){const r=n.mutationResults;for(let s=0;s<this.mutations.length;s++){const a=this.mutations[s];a.key.isEqual(e.key)&&pk(a,e,r[s])}}applyToLocalView(e,n){for(const r of this.baseMutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(e.key)&&(n=ho(r,e,n,this.localWriteTime));return n}applyToLocalDocumentSet(e,n){const r=y_();return this.mutations.forEach(s=>{const a=e.get(s.key),u=a.overlayedDocument;let h=this.applyToLocalView(u,a.mutatedFields);h=n.has(s.key)?null:h;const f=A_(u,h);f!==null&&r.set(s.key,f),u.isValidDocument()||u.convertToNoDocument(Ye.min())}),r}keys(){return this.mutations.reduce((e,n)=>e.add(n.key),Nt())}isEqual(e){return this.batchId===e.batchId&&Ts(this.mutations,e.mutations,(n,r)=>fv(n,r))&&Ts(this.baseMutations,e.baseMutations,(n,r)=>fv(n,r))}}class hd{constructor(e,n,r,s){this.batch=e,this.commitVersion=n,this.mutationResults=r,this.docVersions=s}static from(e,n,r){mt(e.mutations.length===r.length);let s=sk;const a=e.mutations;for(let u=0;u<a.length;u++)s=s.insert(a[u].key,r[u].version);return new hd(e,n,r,s)}}/**
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
 */class yk{constructor(e,n){this.largestBatchId=e,this.mutation=n}getKey(){return this.mutation.key}isEqual(e){return e!==null&&this.mutation===e.mutation}toString(){return`Overlay{
      largestBatchId: ${this.largestBatchId},
      mutation: ${this.mutation.toString()}
    }`}}/**
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
 */var st,Ce;function _k(t){switch(t){default:return be();case U.CANCELLED:case U.UNKNOWN:case U.DEADLINE_EXCEEDED:case U.RESOURCE_EXHAUSTED:case U.INTERNAL:case U.UNAVAILABLE:case U.UNAUTHENTICATED:return!1;case U.INVALID_ARGUMENT:case U.NOT_FOUND:case U.ALREADY_EXISTS:case U.PERMISSION_DENIED:case U.FAILED_PRECONDITION:case U.ABORTED:case U.OUT_OF_RANGE:case U.UNIMPLEMENTED:case U.DATA_LOSS:return!0}}function wk(t){if(t===void 0)return Mi("GRPC error has no .code"),U.UNKNOWN;switch(t){case st.OK:return U.OK;case st.CANCELLED:return U.CANCELLED;case st.UNKNOWN:return U.UNKNOWN;case st.DEADLINE_EXCEEDED:return U.DEADLINE_EXCEEDED;case st.RESOURCE_EXHAUSTED:return U.RESOURCE_EXHAUSTED;case st.INTERNAL:return U.INTERNAL;case st.UNAVAILABLE:return U.UNAVAILABLE;case st.UNAUTHENTICATED:return U.UNAUTHENTICATED;case st.INVALID_ARGUMENT:return U.INVALID_ARGUMENT;case st.NOT_FOUND:return U.NOT_FOUND;case st.ALREADY_EXISTS:return U.ALREADY_EXISTS;case st.PERMISSION_DENIED:return U.PERMISSION_DENIED;case st.FAILED_PRECONDITION:return U.FAILED_PRECONDITION;case st.ABORTED:return U.ABORTED;case st.OUT_OF_RANGE:return U.OUT_OF_RANGE;case st.UNIMPLEMENTED:return U.UNIMPLEMENTED;case st.DATA_LOSS:return U.DATA_LOSS;default:return be()}}(Ce=st||(st={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";/**
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
 */new ED([4294967295,4294967295],0);class Ek{constructor(e,n){this.databaseId=e,this.useProto3Json=n}}function rf(t,e){return t.useProto3Json?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function Ik(t,e){return t.useProto3Json?e.toBase64():e.toUint8Array()}function Tk(t,e){return rf(t,e.toTimestamp())}function vs(t){return mt(!!t),Ye.fromTimestamp(function(e){const n=Fi(e);return new pt(n.seconds,n.nanos)}(t))}function R_(t,e){return function(n){return new et(["projects",n.projectId,"databases",n.database])}(t).child("documents").child(e).canonicalString()}function bk(t){const e=et.fromString(t);return mt(Dk(e)),e}function sf(t,e){return R_(t.databaseId,e.path)}function Ak(t){const e=bk(t);return e.length===4?et.emptyPath():Sk(e)}function Ck(t){return new et(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function Sk(t){return mt(t.length>4&&t.get(4)==="documents"),t.popFirst(5)}function gv(t,e,n){return{name:sf(t,e),fields:n.value.mapValue.fields}}function Rk(t,e){let n;if(e instanceof qo)n={update:gv(t,e.key,e.value)};else if(e instanceof S_)n={delete:sf(t,e.key)};else if(e instanceof $i)n={update:gv(t,e.key,e.data),updateMask:Nk(e.fieldMask)};else{if(!(e instanceof mk))return be();n={verify:sf(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(r=>function(s,a){const u=a.transform;if(u instanceof Vu)return{fieldPath:a.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(u instanceof Oo)return{fieldPath:a.field.canonicalString(),appendMissingElements:{values:u.elements}};if(u instanceof No)return{fieldPath:a.field.canonicalString(),removeAllFromArray:{values:u.elements}};if(u instanceof Hu)return{fieldPath:a.field.canonicalString(),increment:u.wt};throw be()}(0,r))),e.precondition.isNone||(n.currentDocument=function(r,s){return s.updateTime!==void 0?{updateTime:Tk(r,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:be()}(t,e.precondition)),n}function xk(t,e){return t&&t.length>0?(mt(e!==void 0),t.map(n=>function(r,s){let a=r.updateTime?vs(r.updateTime):vs(s);return a.isEqual(Ye.min())&&(a=vs(s)),new dk(a,r.transformResults||[])}(n,e))):[]}function Ok(t){let e=Ak(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let s=null;if(r>0){mt(r===1);const v=n.from[0];v.allDescendants?s=v.collectionId:e=e.child(v.collectionId)}let a=[];n.where&&(a=function(v){const E=x_(v);return E instanceof ii&&c_(E)?E.getFilters():[E]}(n.where));let u=[];n.orderBy&&(u=n.orderBy.map(v=>function(E){return new lo(as(E.field),function(A){switch(A){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(v)));let h=null;n.limit&&(h=function(v){let E;return E=typeof v=="object"?v.value:v,sd(E)?null:E}(n.limit));let f=null;n.startAt&&(f=function(v){const E=!!v.before,A=v.values||[];return new Bu(A,E)}(n.startAt));let p=null;return n.endAt&&(p=function(v){const E=!v.before,A=v.values||[];return new Bu(A,E)}(n.endAt)),YD(e,s,u,a,h,"F",f,p)}function x_(t){return t.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const n=as(e.unaryFilter.field);return dt.create(n,"==",{doubleValue:NaN});case"IS_NULL":const r=as(e.unaryFilter.field);return dt.create(r,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=as(e.unaryFilter.field);return dt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const a=as(e.unaryFilter.field);return dt.create(a,"!=",{nullValue:"NULL_VALUE"});default:return be()}}(t):t.fieldFilter!==void 0?function(e){return dt.create(as(e.fieldFilter.field),function(n){switch(n){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return be()}}(e.fieldFilter.op),e.fieldFilter.value)}(t):t.compositeFilter!==void 0?function(e){return ii.create(e.compositeFilter.filters.map(n=>x_(n)),function(n){switch(n){case"AND":return"and";case"OR":return"or";default:return be()}}(e.compositeFilter.op))}(t):be()}function as(t){return kt.fromServerFormat(t.fieldPath)}function Nk(t){const e=[];return t.fields.forEach(n=>e.push(n.canonicalString())),{fieldPaths:e}}function Dk(t){return t.length>=4&&t.get(0)==="projects"&&t.get(2)==="databases"}/**
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
 */class kk{constructor(e){this.le=e}}function Pk(t){const e=Ok({parent:t.parent,structuredQuery:t.structuredQuery});return t.limitType==="LAST"?nf(e,e.limit,"L"):e}/**
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
 */class Lk{constructor(){this.sn=new Mk}addToCollectionParentIndex(e,n){return this.sn.add(n),F.resolve()}getCollectionParents(e,n){return F.resolve(this.sn.getEntries(n))}addFieldIndex(e,n){return F.resolve()}deleteFieldIndex(e,n){return F.resolve()}getDocumentsMatchingTarget(e,n){return F.resolve(null)}getIndexType(e,n){return F.resolve(0)}getFieldIndexes(e,n){return F.resolve([])}getNextCollectionGroupToUpdate(e){return F.resolve(null)}getMinOffset(e,n){return F.resolve(ri.min())}getMinOffsetFromCollectionGroup(e,n){return F.resolve(ri.min())}updateCollectionGroup(e,n,r){return F.resolve()}updateIndexEntries(e,n){return F.resolve()}}class Mk{constructor(){this.index={}}add(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n]||new jt(et.comparator),a=!s.has(r);return this.index[n]=s.add(r),a}has(e){const n=e.lastSegment(),r=e.popLast(),s=this.index[n];return s&&s.has(r)}getEntries(e){return(this.index[e]||new jt(et.comparator)).toArray()}}/**
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
 */class Rs{constructor(e){this.xn=e}next(){return this.xn+=2,this.xn}static Nn(){return new Rs(0)}static kn(){return new Rs(-1)}}/**
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
 */class Fk{constructor(){this.changes=new Ls(e=>e.toString(),(e,n)=>e.isEqual(n)),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,n){this.assertNotApplied(),this.changes.set(e,kn.newInvalidDocument(e).setReadTime(n))}getEntry(e,n){this.assertNotApplied();const r=this.changes.get(n);return r!==void 0?F.resolve(r):this.getFromCache(e,n)}getEntries(e,n){return this.getAllFromCache(e,n)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}/**
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
 *//**
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
 */class Uk{constructor(e,n){this.overlayedDocument=e,this.mutatedFields=n}}/**
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
 */class Bk{constructor(e,n,r,s){this.remoteDocumentCache=e,this.mutationQueue=n,this.documentOverlayCache=r,this.indexManager=s}getDocument(e,n){let r=null;return this.documentOverlayCache.getOverlay(e,n).next(s=>(r=s,this.remoteDocumentCache.getEntry(e,n))).next(s=>(r!==null&&ho(r.mutation,s,Un.empty(),pt.now()),s))}getDocuments(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.getLocalViewOfDocuments(e,r,Nt()).next(()=>r))}getLocalViewOfDocuments(e,n,r=Nt()){const s=Si();return this.populateOverlays(e,s,n).next(()=>this.computeViews(e,n,s,r).next(a=>{let u=ou();return a.forEach((h,f)=>{u=u.insert(h,f.overlayedDocument)}),u}))}getOverlayedDocuments(e,n){const r=Si();return this.populateOverlays(e,r,n).next(()=>this.computeViews(e,n,r,Nt()))}populateOverlays(e,n,r){const s=[];return r.forEach(a=>{n.has(a)||s.push(a)}),this.documentOverlayCache.getOverlays(e,s).next(a=>{a.forEach((u,h)=>{n.set(u,h)})})}computeViews(e,n,r,s){let a=$u();const u=co(),h=co();return n.forEach((f,p)=>{const v=r.get(p.key);s.has(p.key)&&(v===void 0||v.mutation instanceof $i)?a=a.insert(p.key,p):v!==void 0?(u.set(p.key,v.mutation.getFieldMask()),ho(v.mutation,p,v.mutation.getFieldMask(),pt.now())):u.set(p.key,Un.empty())}),this.recalculateAndSaveOverlays(e,a).next(f=>(f.forEach((p,v)=>u.set(p,v)),n.forEach((p,v)=>{var E;return h.set(p,new Uk(v,(E=u.get(p))!==null&&E!==void 0?E:null))}),h))}recalculateAndSaveOverlays(e,n){const r=co();let s=new nn((u,h)=>u-h),a=Nt();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,n).next(u=>{for(const h of u)h.keys().forEach(f=>{const p=n.get(f);if(p===null)return;let v=r.get(f)||Un.empty();v=h.applyToLocalView(p,v),r.set(f,v);const E=(s.get(h.batchId)||Nt()).add(f);s=s.insert(h.batchId,E)})}).next(()=>{const u=[],h=s.getReverseIterator();for(;h.hasNext();){const f=h.getNext(),p=f.key,v=f.value,E=y_();v.forEach(A=>{if(!a.has(A)){const L=A_(n.get(A),r.get(A));L!==null&&E.set(A,L),a=a.add(A)}}),u.push(this.documentOverlayCache.saveOverlays(e,p,E))}return F.waitFor(u)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(e,n){return this.remoteDocumentCache.getEntries(e,n).next(r=>this.recalculateAndSaveOverlays(e,r))}getDocumentsMatchingQuery(e,n,r){return function(s){return pe.isDocumentKey(s.path)&&s.collectionGroup===null&&s.filters.length===0}(n)?this.getDocumentsMatchingDocumentQuery(e,n.path):tk(n)?this.getDocumentsMatchingCollectionGroupQuery(e,n,r):this.getDocumentsMatchingCollectionQuery(e,n,r)}getNextDocuments(e,n,r,s){return this.remoteDocumentCache.getAllFromCollectionGroup(e,n,r,s).next(a=>{const u=s-a.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,n,r.largestBatchId,s-a.size):F.resolve(Si());let h=-1,f=a;return u.next(p=>F.forEach(p,(v,E)=>(h<E.largestBatchId&&(h=E.largestBatchId),a.get(v)?F.resolve():this.remoteDocumentCache.getEntry(e,v).next(A=>{f=f.insert(v,A)}))).next(()=>this.populateOverlays(e,p,a)).next(()=>this.computeViews(e,f,p,Nt())).next(v=>({batchId:h,changes:v_(v)})))})}getDocumentsMatchingDocumentQuery(e,n){return this.getDocument(e,new pe(n)).next(r=>{let s=ou();return r.isFoundDocument()&&(s=s.insert(r.key,r)),s})}getDocumentsMatchingCollectionGroupQuery(e,n,r){const s=n.collectionGroup;let a=ou();return this.indexManager.getCollectionParents(e,s).next(u=>F.forEach(u,h=>{const f=function(p,v){return new Il(v,null,p.explicitOrderBy.slice(),p.filters.slice(),p.limit,p.limitType,p.startAt,p.endAt)}(n,h.child(s));return this.getDocumentsMatchingCollectionQuery(e,f,r).next(p=>{p.forEach((v,E)=>{a=a.insert(v,E)})})}).next(()=>a))}getDocumentsMatchingCollectionQuery(e,n,r){let s;return this.documentOverlayCache.getOverlaysForCollection(e,n.path,r.largestBatchId).next(a=>(s=a,this.remoteDocumentCache.getDocumentsMatchingQuery(e,n,r,s))).next(a=>{s.forEach((h,f)=>{const p=f.getKey();a.get(p)===null&&(a=a.insert(p,kn.newInvalidDocument(p)))});let u=ou();return a.forEach((h,f)=>{const p=s.get(h);p!==void 0&&ho(p.mutation,f,Un.empty(),pt.now()),cd(n,f)&&(u=u.insert(h,f))}),u})}}/**
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
 */class $k{constructor(e){this.serializer=e,this.us=new Map,this.cs=new Map}getBundleMetadata(e,n){return F.resolve(this.us.get(n))}saveBundleMetadata(e,n){var r;return this.us.set(n.id,{id:(r=n).id,version:r.version,createTime:vs(r.createTime)}),F.resolve()}getNamedQuery(e,n){return F.resolve(this.cs.get(n))}saveNamedQuery(e,n){return this.cs.set(n.name,function(r){return{name:r.name,query:Pk(r.bundledQuery),readTime:vs(r.readTime)}}(n)),F.resolve()}}/**
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
 */class Vk{constructor(){this.overlays=new nn(pe.comparator),this.hs=new Map}getOverlay(e,n){return F.resolve(this.overlays.get(n))}getOverlays(e,n){const r=Si();return F.forEach(n,s=>this.getOverlay(e,s).next(a=>{a!==null&&r.set(s,a)})).next(()=>r)}saveOverlays(e,n,r){return r.forEach((s,a)=>{this.de(e,n,a)}),F.resolve()}removeOverlaysForBatchId(e,n,r){const s=this.hs.get(r);return s!==void 0&&(s.forEach(a=>this.overlays=this.overlays.remove(a)),this.hs.delete(r)),F.resolve()}getOverlaysForCollection(e,n,r){const s=Si(),a=n.length+1,u=new pe(n.child("")),h=this.overlays.getIteratorFrom(u);for(;h.hasNext();){const f=h.getNext().value,p=f.getKey();if(!n.isPrefixOf(p.path))break;p.path.length===a&&f.largestBatchId>r&&s.set(f.getKey(),f)}return F.resolve(s)}getOverlaysForCollectionGroup(e,n,r,s){let a=new nn((p,v)=>p-v);const u=this.overlays.getIterator();for(;u.hasNext();){const p=u.getNext().value;if(p.getKey().getCollectionGroup()===n&&p.largestBatchId>r){let v=a.get(p.largestBatchId);v===null&&(v=Si(),a=a.insert(p.largestBatchId,v)),v.set(p.getKey(),p)}}const h=Si(),f=a.getIterator();for(;f.hasNext()&&(f.getNext().value.forEach((p,v)=>h.set(p,v)),!(h.size()>=s)););return F.resolve(h)}de(e,n,r){const s=this.overlays.get(r.key);if(s!==null){const u=this.hs.get(s.largestBatchId).delete(r.key);this.hs.set(s.largestBatchId,u)}this.overlays=this.overlays.insert(r.key,new yk(n,r));let a=this.hs.get(n);a===void 0&&(a=Nt(),this.hs.set(n,a)),this.hs.set(n,a.add(r.key))}}/**
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
 */class fd{constructor(){this.ls=new jt(ft.fs),this.ds=new jt(ft._s)}isEmpty(){return this.ls.isEmpty()}addReference(e,n){const r=new ft(e,n);this.ls=this.ls.add(r),this.ds=this.ds.add(r)}ws(e,n){e.forEach(r=>this.addReference(r,n))}removeReference(e,n){this.gs(new ft(e,n))}ys(e,n){e.forEach(r=>this.removeReference(r,n))}ps(e){const n=new pe(new et([])),r=new ft(n,e),s=new ft(n,e+1),a=[];return this.ds.forEachInRange([r,s],u=>{this.gs(u),a.push(u.key)}),a}Is(){this.ls.forEach(e=>this.gs(e))}gs(e){this.ls=this.ls.delete(e),this.ds=this.ds.delete(e)}Ts(e){const n=new pe(new et([])),r=new ft(n,e),s=new ft(n,e+1);let a=Nt();return this.ds.forEachInRange([r,s],u=>{a=a.add(u.key)}),a}containsKey(e){const n=new ft(e,0),r=this.ls.firstAfterOrEqual(n);return r!==null&&e.isEqual(r.key)}}class ft{constructor(e,n){this.key=e,this.Es=n}static fs(e,n){return pe.comparator(e.key,n.key)||He(e.Es,n.Es)}static _s(e,n){return He(e.Es,n.Es)||pe.comparator(e.key,n.key)}}/**
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
 */class Hk{constructor(e,n){this.indexManager=e,this.referenceDelegate=n,this.mutationQueue=[],this.As=1,this.Rs=new jt(ft.fs)}checkEmpty(e){return F.resolve(this.mutationQueue.length===0)}addMutationBatch(e,n,r,s){const a=this.As;this.As++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const u=new vk(a,n,r,s);this.mutationQueue.push(u);for(const h of s)this.Rs=this.Rs.add(new ft(h.key,a)),this.indexManager.addToCollectionParentIndex(e,h.key.path.popLast());return F.resolve(u)}lookupMutationBatch(e,n){return F.resolve(this.vs(n))}getNextMutationBatchAfterBatchId(e,n){const r=n+1,s=this.Ps(r),a=s<0?0:s;return F.resolve(this.mutationQueue.length>a?this.mutationQueue[a]:null)}getHighestUnacknowledgedBatchId(){return F.resolve(this.mutationQueue.length===0?-1:this.As-1)}getAllMutationBatches(e){return F.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,n){const r=new ft(n,0),s=new ft(n,Number.POSITIVE_INFINITY),a=[];return this.Rs.forEachInRange([r,s],u=>{const h=this.vs(u.Es);a.push(h)}),F.resolve(a)}getAllMutationBatchesAffectingDocumentKeys(e,n){let r=new jt(He);return n.forEach(s=>{const a=new ft(s,0),u=new ft(s,Number.POSITIVE_INFINITY);this.Rs.forEachInRange([a,u],h=>{r=r.add(h.Es)})}),F.resolve(this.bs(r))}getAllMutationBatchesAffectingQuery(e,n){const r=n.path,s=r.length+1;let a=r;pe.isDocumentKey(a)||(a=a.child(""));const u=new ft(new pe(a),0);let h=new jt(He);return this.Rs.forEachWhile(f=>{const p=f.key.path;return!!r.isPrefixOf(p)&&(p.length===s&&(h=h.add(f.Es)),!0)},u),F.resolve(this.bs(h))}bs(e){const n=[];return e.forEach(r=>{const s=this.vs(r);s!==null&&n.push(s)}),n}removeMutationBatch(e,n){mt(this.Vs(n.batchId,"removed")===0),this.mutationQueue.shift();let r=this.Rs;return F.forEach(n.mutations,s=>{const a=new ft(s.key,n.batchId);return r=r.delete(a),this.referenceDelegate.markPotentiallyOrphaned(e,s.key)}).next(()=>{this.Rs=r})}Dn(e){}containsKey(e,n){const r=new ft(n,0),s=this.Rs.firstAfterOrEqual(r);return F.resolve(n.isEqual(s&&s.key))}performConsistencyCheck(e){return this.mutationQueue.length,F.resolve()}Vs(e,n){return this.Ps(e)}Ps(e){return this.mutationQueue.length===0?0:e-this.mutationQueue[0].batchId}vs(e){const n=this.Ps(e);return n<0||n>=this.mutationQueue.length?null:this.mutationQueue[n]}}/**
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
 */class Wk{constructor(e){this.Ss=e,this.docs=new nn(pe.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,n){const r=n.key,s=this.docs.get(r),a=s?s.size:0,u=this.Ss(n);return this.docs=this.docs.insert(r,{document:n.mutableCopy(),size:u}),this.size+=u-a,this.indexManager.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const n=this.docs.get(e);n&&(this.docs=this.docs.remove(e),this.size-=n.size)}getEntry(e,n){const r=this.docs.get(n);return F.resolve(r?r.document.mutableCopy():kn.newInvalidDocument(n))}getEntries(e,n){let r=$u();return n.forEach(s=>{const a=this.docs.get(s);r=r.insert(s,a?a.document.mutableCopy():kn.newInvalidDocument(s))}),F.resolve(r)}getDocumentsMatchingQuery(e,n,r,s){let a=$u();const u=n.path,h=new pe(u.child("")),f=this.docs.getIteratorFrom(h);for(;f.hasNext();){const{key:p,value:{document:v}}=f.getNext();if(!u.isPrefixOf(p.path))break;p.path.length>u.length+1||kD(DD(v),r)<=0||(s.has(v.key)||cd(n,v))&&(a=a.insert(v.key,v.mutableCopy()))}return F.resolve(a)}getAllFromCollectionGroup(e,n,r,s){be()}Ds(e,n){return F.forEach(this.docs,r=>n(r))}newChangeBuffer(e){return new zk(this)}getSize(e){return F.resolve(this.size)}}class zk extends Fk{constructor(e){super(),this.rs=e}applyChanges(e){const n=[];return this.changes.forEach((r,s)=>{s.isValidDocument()?n.push(this.rs.addEntry(e,s)):this.rs.removeEntry(r)}),F.waitFor(n)}getFromCache(e,n){return this.rs.getEntry(e,n)}getAllFromCache(e,n){return this.rs.getEntries(e,n)}}/**
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
 */class Kk{constructor(e){this.persistence=e,this.Cs=new Ls(n=>ud(n),ld),this.lastRemoteSnapshotVersion=Ye.min(),this.highestTargetId=0,this.xs=0,this.Ns=new fd,this.targetCount=0,this.ks=Rs.Nn()}forEachTarget(e,n){return this.Cs.forEach((r,s)=>n(s)),F.resolve()}getLastRemoteSnapshotVersion(e){return F.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return F.resolve(this.xs)}allocateTargetId(e){return this.highestTargetId=this.ks.next(),F.resolve(this.highestTargetId)}setTargetsMetadata(e,n,r){return r&&(this.lastRemoteSnapshotVersion=r),n>this.xs&&(this.xs=n),F.resolve()}$n(e){this.Cs.set(e.target,e);const n=e.targetId;n>this.highestTargetId&&(this.ks=new Rs(n),this.highestTargetId=n),e.sequenceNumber>this.xs&&(this.xs=e.sequenceNumber)}addTargetData(e,n){return this.$n(n),this.targetCount+=1,F.resolve()}updateTargetData(e,n){return this.$n(n),F.resolve()}removeTargetData(e,n){return this.Cs.delete(n.target),this.Ns.ps(n.targetId),this.targetCount-=1,F.resolve()}removeTargets(e,n,r){let s=0;const a=[];return this.Cs.forEach((u,h)=>{h.sequenceNumber<=n&&r.get(h.targetId)===null&&(this.Cs.delete(u),a.push(this.removeMatchingKeysForTargetId(e,h.targetId)),s++)}),F.waitFor(a).next(()=>s)}getTargetCount(e){return F.resolve(this.targetCount)}getTargetData(e,n){const r=this.Cs.get(n)||null;return F.resolve(r)}addMatchingKeys(e,n,r){return this.Ns.ws(n,r),F.resolve()}removeMatchingKeys(e,n,r){this.Ns.ys(n,r);const s=this.persistence.referenceDelegate,a=[];return s&&n.forEach(u=>{a.push(s.markPotentiallyOrphaned(e,u))}),F.waitFor(a)}removeMatchingKeysForTargetId(e,n){return this.Ns.ps(n),F.resolve()}getMatchingKeysForTargetId(e,n){const r=this.Ns.Ts(n);return F.resolve(r)}containsKey(e,n){return F.resolve(this.Ns.containsKey(n))}}/**
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
 */class jk{constructor(e,n){this.Ms={},this.overlays={},this.Os=new i_(0),this.$s=!1,this.$s=!0,this.referenceDelegate=e(this),this.Fs=new Kk(this),this.indexManager=new Lk,this.remoteDocumentCache=function(r){return new Wk(r)}(r=>this.referenceDelegate.Bs(r)),this.serializer=new kk(n),this.Ls=new $k(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.$s=!1,Promise.resolve()}get started(){return this.$s}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let n=this.overlays[e.toKey()];return n||(n=new Vk,this.overlays[e.toKey()]=n),n}getMutationQueue(e,n){let r=this.Ms[e.toKey()];return r||(r=new Hk(n,this.referenceDelegate),this.Ms[e.toKey()]=r),r}getTargetCache(){return this.Fs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ls}runTransaction(e,n,r){Z("MemoryPersistence","Starting transaction:",e);const s=new qk(this.Os.next());return this.referenceDelegate.qs(),r(s).next(a=>this.referenceDelegate.Us(s).next(()=>a)).toPromise().then(a=>(s.raiseOnCommittedEvent(),a))}Ks(e,n){return F.or(Object.values(this.Ms).map(r=>()=>r.containsKey(e,n)))}}class qk extends LD{constructor(e){super(),this.currentSequenceNumber=e}}class dd{constructor(e){this.persistence=e,this.Gs=new fd,this.Qs=null}static js(e){return new dd(e)}get zs(){if(this.Qs)return this.Qs;throw be()}addReference(e,n,r){return this.Gs.addReference(r,n),this.zs.delete(r.toString()),F.resolve()}removeReference(e,n,r){return this.Gs.removeReference(r,n),this.zs.add(r.toString()),F.resolve()}markPotentiallyOrphaned(e,n){return this.zs.add(n.toString()),F.resolve()}removeTarget(e,n){this.Gs.ps(n.targetId).forEach(s=>this.zs.add(s.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(e,n.targetId).next(s=>{s.forEach(a=>this.zs.add(a.toString()))}).next(()=>r.removeTargetData(e,n))}qs(){this.Qs=new Set}Us(e){const n=this.persistence.getRemoteDocumentCache().newChangeBuffer();return F.forEach(this.zs,r=>{const s=pe.fromPath(r);return this.Ws(e,s).next(a=>{a||n.removeEntry(s,Ye.min())})}).next(()=>(this.Qs=null,n.apply(e)))}updateLimboDocument(e,n){return this.Ws(e,n).next(r=>{r?this.zs.delete(n.toString()):this.zs.add(n.toString())})}Bs(e){return 0}Ws(e,n){return F.or([()=>F.resolve(this.Gs.containsKey(n)),()=>this.persistence.getTargetCache().containsKey(e,n),()=>this.persistence.Ks(e,n)])}}/**
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
 */class pd{constructor(e,n,r,s){this.targetId=e,this.fromCache=n,this.$i=r,this.Fi=s}static Bi(e,n){let r=Nt(),s=Nt();for(const a of n.docChanges)switch(a.type){case 0:r=r.add(a.doc.key);break;case 1:s=s.add(a.doc.key)}return new pd(e,n.fromCache,r,s)}}/**
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
 */class Gk{constructor(){this.Li=!1}initialize(e,n){this.qi=e,this.indexManager=n,this.Li=!0}getDocumentsMatchingQuery(e,n,r,s){return this.Ui(e,n).next(a=>a||this.Ki(e,n,s,r)).next(a=>a||this.Gi(e,n))}Ui(e,n){if(lv(n))return F.resolve(null);let r=Ss(n);return this.indexManager.getIndexType(e,r).next(s=>s===0?null:(n.limit!==null&&s===1&&(n=nf(n,null,"F"),r=Ss(n)),this.indexManager.getDocumentsMatchingTarget(e,r).next(a=>{const u=Nt(...a);return this.qi.getDocuments(e,u).next(h=>this.indexManager.getMinOffset(e,r).next(f=>{const p=this.Qi(n,h);return this.ji(n,p,u,f.readTime)?this.Ui(e,nf(n,null,"F")):this.zi(e,p,n,f)}))})))}Ki(e,n,r,s){return lv(n)||s.isEqual(Ye.min())?this.Gi(e,n):this.qi.getDocuments(e,r).next(a=>{const u=this.Qi(n,a);return this.ji(n,u,r,s)?this.Gi(e,n):(nv()<=xe.DEBUG&&Z("QueryEngine","Re-using previous result from %s to execute query: %s",s.toString(),cv(n)),this.zi(e,u,n,ND(s,-1)))})}Qi(e,n){let r=new jt(nk(e));return n.forEach((s,a)=>{cd(e,a)&&(r=r.add(a))}),r}ji(e,n,r,s){if(e.limit===null)return!1;if(r.size!==n.size)return!0;const a=e.limitType==="F"?n.last():n.first();return!!a&&(a.hasPendingWrites||a.version.compareTo(s)>0)}Gi(e,n){return nv()<=xe.DEBUG&&Z("QueryEngine","Using full collection scan to execute query:",cv(n)),this.qi.getDocumentsMatchingQuery(e,n,ri.min())}zi(e,n,r,s){return this.qi.getDocumentsMatchingQuery(e,r,s).next(a=>(n.forEach(u=>{a=a.insert(u.key,u)}),a))}}/**
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
 */class Xk{constructor(e,n,r,s){this.persistence=e,this.Wi=n,this.serializer=s,this.Hi=new nn(He),this.Ji=new Ls(a=>ud(a),ld),this.Yi=new Map,this.Xi=e.getRemoteDocumentCache(),this.Fs=e.getTargetCache(),this.Ls=e.getBundleCache(),this.Zi(r)}Zi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Bk(this.Xi,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Xi.setIndexManager(this.indexManager),this.Wi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",n=>e.collect(n,this.Hi))}}function Qk(t,e,n,r){return new Xk(t,e,n,r)}async function O_(t,e){const n=ze(t);return await n.persistence.runTransaction("Handle user change","readonly",r=>{let s;return n.mutationQueue.getAllMutationBatches(r).next(a=>(s=a,n.Zi(e),n.mutationQueue.getAllMutationBatches(r))).next(a=>{const u=[],h=[];let f=Nt();for(const p of s){u.push(p.batchId);for(const v of p.mutations)f=f.add(v.key)}for(const p of a){h.push(p.batchId);for(const v of p.mutations)f=f.add(v.key)}return n.localDocuments.getDocuments(r,f).next(p=>({tr:p,removedBatchIds:u,addedBatchIds:h}))})})}function Yk(t,e){const n=ze(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const s=e.batch.keys(),a=n.Xi.newChangeBuffer({trackRemovals:!0});return function(u,h,f,p){const v=f.batch,E=v.keys();let A=F.resolve();return E.forEach(L=>{A=A.next(()=>p.getEntry(h,L)).next(z=>{const B=f.docVersions.get(L);mt(B!==null),z.version.compareTo(B)<0&&(v.applyToRemoteDocument(z,f),z.isValidDocument()&&(z.setReadTime(f.commitVersion),p.addEntry(z)))})}),A.next(()=>u.mutationQueue.removeMutationBatch(h,v))}(n,r,e,a).next(()=>a.apply(r)).next(()=>n.mutationQueue.performConsistencyCheck(r)).next(()=>n.documentOverlayCache.removeOverlaysForBatchId(r,s,e.batch.batchId)).next(()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(u){let h=Nt();for(let f=0;f<u.mutationResults.length;++f)u.mutationResults[f].transformResults.length>0&&(h=h.add(u.batch.mutations[f].key));return h}(e))).next(()=>n.localDocuments.getDocuments(r,s))})}function Jk(t){const e=ze(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",n=>e.Fs.getLastRemoteSnapshotVersion(n))}function Zk(t,e){const n=ze(t);return n.persistence.runTransaction("Get next mutation batch","readonly",r=>(e===void 0&&(e=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(r,e)))}class mv{constructor(){this.activeTargetIds=uk()}hr(e){this.activeTargetIds=this.activeTargetIds.add(e)}lr(e){this.activeTargetIds=this.activeTargetIds.delete(e)}ar(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class eP{constructor(){this.Wr=new mv,this.Hr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,n,r){}addLocalQueryTarget(e){return this.Wr.hr(e),this.Hr[e]||"not-current"}updateQueryState(e,n,r){this.Hr[e]=n}removeLocalQueryTarget(e){this.Wr.lr(e)}isLocalQueryTarget(e){return this.Wr.activeTargetIds.has(e)}clearQueryState(e){delete this.Hr[e]}getAllActiveQueryTargets(){return this.Wr.activeTargetIds}isActiveQueryTarget(e){return this.Wr.activeTargetIds.has(e)}start(){return this.Wr=new mv,Promise.resolve()}handleUserChange(e,n,r){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}/**
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
 */class tP{Jr(e){}shutdown(){}}/**
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
 */class vv{constructor(){this.Yr=()=>this.Xr(),this.Zr=()=>this.eo(),this.no=[],this.so()}Jr(e){this.no.push(e)}shutdown(){window.removeEventListener("online",this.Yr),window.removeEventListener("offline",this.Zr)}so(){window.addEventListener("online",this.Yr),window.addEventListener("offline",this.Zr)}Xr(){Z("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.no)e(0)}eo(){Z("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.no)e(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let au=null;function gh(){return au===null?au=268435456+Math.round(2147483648*Math.random()):au++,"0x"+au.toString(16)}/**
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
 */const nP={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
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
 */class rP{constructor(e){this.io=e.io,this.ro=e.ro}oo(e){this.uo=e}co(e){this.ao=e}onMessage(e){this.ho=e}close(){this.ro()}send(e){this.io(e)}lo(){this.uo()}fo(e){this.ao(e)}_o(e){this.ho(e)}}/**
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
 */const xt="WebChannelConnection";class iP extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const n=e.ssl?"https":"http";this.wo=n+"://"+e.host,this.mo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get yo(){return!1}po(e,n,r,s,a){const u=gh(),h=this.Io(e,n);Z("RestConnection",`Sending RPC '${e}' ${u}:`,h,r);const f={};return this.To(f,s,a),this.Eo(e,h,f,r).then(p=>(Z("RestConnection",`Received RPC '${e}' ${u}: `,p),p),p=>{throw Lu("RestConnection",`RPC '${e}' ${u} failed with error: `,p,"url: ",h,"request:",r),p})}Ao(e,n,r,s,a,u){return this.po(e,n,r,s,a)}To(e,n,r){e["X-Goog-Api-Client"]="gl-js/ fire/"+Ps,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),n&&n.headers.forEach((s,a)=>e[a]=s),r&&r.headers.forEach((s,a)=>e[a]=s)}Io(e,n){const r=nP[e];return`${this.wo}/v1/${n}:${r}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Eo(e,n,r,s){const a=gh();return new Promise((u,h)=>{const f=new wD;f.setWithCredentials(!0),f.listenOnce(vD.COMPLETE,()=>{try{switch(f.getLastErrorCode()){case ph.NO_ERROR:const v=f.getResponseJson();Z(xt,`XHR for RPC '${e}' ${a} received:`,JSON.stringify(v)),u(v);break;case ph.TIMEOUT:Z(xt,`RPC '${e}' ${a} timed out`),h(new le(U.DEADLINE_EXCEEDED,"Request time out"));break;case ph.HTTP_ERROR:const E=f.getStatus();if(Z(xt,`RPC '${e}' ${a} failed with status:`,E,"response text:",f.getResponseText()),E>0){let A=f.getResponseJson();Array.isArray(A)&&(A=A[0]);const L=A==null?void 0:A.error;if(L&&L.status&&L.message){const z=function(B){const X=B.toLowerCase().replace(/_/g,"-");return Object.values(U).indexOf(X)>=0?X:U.UNKNOWN}(L.status);h(new le(z,L.message))}else h(new le(U.UNKNOWN,"Server responded with status "+f.getStatus()))}else h(new le(U.UNAVAILABLE,"Connection failed."));break;default:be()}}finally{Z(xt,`RPC '${e}' ${a} completed.`)}});const p=JSON.stringify(s);Z(xt,`RPC '${e}' ${a} sending request:`,s),f.send(n,"POST",p,r,15)})}Ro(e,n,r){const s=gh(),a=[this.wo,"/","google.firestore.v1.Firestore","/",e,"/channel"],u=gD(),h=mD(),f={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(f.xmlHttpFactory=new _D({})),this.To(f.initMessageHeaders,n,r),f.encodeInitMessageHeaders=!0;const p=a.join("");Z(xt,`Creating RPC '${e}' stream ${s}: ${p}`,f);const v=u.createWebChannel(p,f);let E=!1,A=!1;const L=new rP({io:B=>{A?Z(xt,`Not sending because RPC '${e}' stream ${s} is closed:`,B):(E||(Z(xt,`Opening RPC '${e}' stream ${s} transport.`),v.open(),E=!0),Z(xt,`RPC '${e}' stream ${s} sending:`,B),v.send(B))},ro:()=>v.close()}),z=(B,X,te)=>{B.listen(X,Fe=>{try{te(Fe)}catch(G){setTimeout(()=>{throw G},0)}})};return z(v,ru.EventType.OPEN,()=>{A||Z(xt,`RPC '${e}' stream ${s} transport opened.`)}),z(v,ru.EventType.CLOSE,()=>{A||(A=!0,Z(xt,`RPC '${e}' stream ${s} transport closed`),L.fo())}),z(v,ru.EventType.ERROR,B=>{A||(A=!0,Lu(xt,`RPC '${e}' stream ${s} transport errored:`,B),L.fo(new le(U.UNAVAILABLE,"The operation could not be completed")))}),z(v,ru.EventType.MESSAGE,B=>{var X;if(!A){const te=B.data[0];mt(!!te);const Fe=te,G=Fe.error||((X=Fe[0])===null||X===void 0?void 0:X.error);if(G){Z(xt,`RPC '${e}' stream ${s} received error:`,G);const we=G.status;let Ae=function(Xe){const se=st[Xe];if(se!==void 0)return wk(se)}(we),it=G.message;Ae===void 0&&(Ae=U.INTERNAL,it="Unknown error status: "+we+" with message "+G.message),A=!0,L.fo(new le(Ae,it)),v.close()}else Z(xt,`RPC '${e}' stream ${s} received:`,te),L._o(te)}}),z(h,yD.STAT_EVENT,B=>{B.stat===ev.PROXY?Z(xt,`RPC '${e}' stream ${s} detected buffering proxy`):B.stat===ev.NOPROXY&&Z(xt,`RPC '${e}' stream ${s} detected no buffering proxy`)}),setTimeout(()=>{L.lo()},0),L}}function mh(){return typeof document<"u"?document:null}/**
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
 */function Al(t){return new Ek(t,!0)}/**
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
 */class N_{constructor(e,n,r=1e3,s=1.5,a=6e4){this.si=e,this.timerId=n,this.vo=r,this.Po=s,this.bo=a,this.Vo=0,this.So=null,this.Do=Date.now(),this.reset()}reset(){this.Vo=0}Co(){this.Vo=this.bo}xo(e){this.cancel();const n=Math.floor(this.Vo+this.No()),r=Math.max(0,Date.now()-this.Do),s=Math.max(0,n-r);s>0&&Z("ExponentialBackoff",`Backing off for ${s} ms (base delay: ${this.Vo} ms, delay with jitter: ${n} ms, last attempt: ${r} ms ago)`),this.So=this.si.enqueueAfterDelay(this.timerId,s,()=>(this.Do=Date.now(),e())),this.Vo*=this.Po,this.Vo<this.vo&&(this.Vo=this.vo),this.Vo>this.bo&&(this.Vo=this.bo)}ko(){this.So!==null&&(this.So.skipDelay(),this.So=null)}cancel(){this.So!==null&&(this.So.cancel(),this.So=null)}No(){return(Math.random()-.5)*this.Vo}}/**
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
 */class sP{constructor(e,n,r,s,a,u,h,f){this.si=e,this.Mo=r,this.Oo=s,this.connection=a,this.authCredentialsProvider=u,this.appCheckCredentialsProvider=h,this.listener=f,this.state=0,this.$o=0,this.Fo=null,this.Bo=null,this.stream=null,this.Lo=new N_(e,n)}qo(){return this.state===1||this.state===5||this.Uo()}Uo(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Ko()}async stop(){this.qo()&&await this.close(0)}Go(){this.state=0,this.Lo.reset()}Qo(){this.Uo()&&this.Fo===null&&(this.Fo=this.si.enqueueAfterDelay(this.Mo,6e4,()=>this.jo()))}zo(e){this.Wo(),this.stream.send(e)}async jo(){if(this.Uo())return this.close(0)}Wo(){this.Fo&&(this.Fo.cancel(),this.Fo=null)}Ho(){this.Bo&&(this.Bo.cancel(),this.Bo=null)}async close(e,n){this.Wo(),this.Ho(),this.Lo.cancel(),this.$o++,e!==4?this.Lo.reset():n&&n.code===U.RESOURCE_EXHAUSTED?(Mi(n.toString()),Mi("Using maximum backoff delay to prevent overloading the backend."),this.Lo.Co()):n&&n.code===U.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.Jo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.co(n)}Jo(){}auth(){this.state=1;const e=this.Yo(this.$o),n=this.$o;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,s])=>{this.$o===n&&this.Xo(r,s)},r=>{e(()=>{const s=new le(U.UNKNOWN,"Fetching auth token failed: "+r.message);return this.Zo(s)})})}Xo(e,n){const r=this.Yo(this.$o);this.stream=this.tu(e,n),this.stream.oo(()=>{r(()=>(this.state=2,this.Bo=this.si.enqueueAfterDelay(this.Oo,1e4,()=>(this.Uo()&&(this.state=3),Promise.resolve())),this.listener.oo()))}),this.stream.co(s=>{r(()=>this.Zo(s))}),this.stream.onMessage(s=>{r(()=>this.onMessage(s))})}Ko(){this.state=5,this.Lo.xo(async()=>{this.state=0,this.start()})}Zo(e){return Z("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Yo(e){return n=>{this.si.enqueueAndForget(()=>this.$o===e?n():(Z("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class oP extends sP{constructor(e,n,r,s,a,u){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",n,r,s,u),this.serializer=a,this.iu=!1}get ru(){return this.iu}start(){this.iu=!1,this.lastStreamToken=void 0,super.start()}Jo(){this.iu&&this.ou([])}tu(e,n){return this.connection.Ro("Write",e,n)}onMessage(e){if(mt(!!e.streamToken),this.lastStreamToken=e.streamToken,this.iu){this.Lo.reset();const n=xk(e.writeResults,e.commitTime),r=vs(e.commitTime);return this.listener.uu(r,n)}return mt(!e.writeResults||e.writeResults.length===0),this.iu=!0,this.listener.cu()}au(){const e={};e.database=Ck(this.serializer),this.zo(e)}ou(e){const n={streamToken:this.lastStreamToken,writes:e.map(r=>Rk(this.serializer,r))};this.zo(n)}}/**
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
 */class aP extends class{}{constructor(e,n,r,s){super(),this.authCredentials=e,this.appCheckCredentials=n,this.connection=r,this.serializer=s,this.hu=!1}lu(){if(this.hu)throw new le(U.FAILED_PRECONDITION,"The client has already been terminated.")}po(e,n,r){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,a])=>this.connection.po(e,n,r,s,a)).catch(s=>{throw s.name==="FirebaseError"?(s.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new le(U.UNKNOWN,s.toString())})}Ao(e,n,r,s){return this.lu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([a,u])=>this.connection.Ao(e,n,r,a,u,s)).catch(a=>{throw a.name==="FirebaseError"?(a.code===U.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),a):new le(U.UNKNOWN,a.toString())})}terminate(){this.hu=!0}}class uP{constructor(e,n){this.asyncQueue=e,this.onlineStateHandler=n,this.state="Unknown",this.du=0,this._u=null,this.wu=!0}mu(){this.du===0&&(this.gu("Unknown"),this._u=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this._u=null,this.yu("Backend didn't respond within 10 seconds."),this.gu("Offline"),Promise.resolve())))}pu(e){this.state==="Online"?this.gu("Unknown"):(this.du++,this.du>=1&&(this.Iu(),this.yu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.gu("Offline")))}set(e){this.Iu(),this.du=0,e==="Online"&&(this.wu=!1),this.gu(e)}gu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}yu(e){const n=`Could not reach Cloud Firestore backend. ${e}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.wu?(Mi(n),this.wu=!1):Z("OnlineStateTracker",n)}Iu(){this._u!==null&&(this._u.cancel(),this._u=null)}}/**
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
 */class lP{constructor(e,n,r,s,a){this.localStore=e,this.datastore=n,this.asyncQueue=r,this.remoteSyncer={},this.Tu=[],this.Eu=new Map,this.Au=new Set,this.Ru=[],this.vu=a,this.vu.Jr(u=>{r.enqueueAndForget(async()=>{Xo(this)&&(Z("RemoteStore","Restarting streams for network reachability change."),await async function(h){const f=ze(h);f.Au.add(4),await Go(f),f.Pu.set("Unknown"),f.Au.delete(4),await Cl(f)}(this))})}),this.Pu=new uP(r,s)}}async function Cl(t){if(Xo(t))for(const e of t.Ru)await e(!0)}async function Go(t){for(const e of t.Ru)await e(!1)}function Xo(t){return ze(t).Au.size===0}async function D_(t,e,n){if(!El(e))throw e;t.Au.add(1),await Go(t),t.Pu.set("Offline"),n||(n=()=>Jk(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{Z("RemoteStore","Retrying IndexedDB access"),await n(),t.Au.delete(1),await Cl(t)})}function k_(t,e){return e().catch(n=>D_(t,n,e))}async function Sl(t){const e=ze(t),n=si(e);let r=e.Tu.length>0?e.Tu[e.Tu.length-1].batchId:-1;for(;cP(e);)try{const s=await Zk(e.localStore,r);if(s===null){e.Tu.length===0&&n.Qo();break}r=s.batchId,hP(e,s)}catch(s){await D_(e,s)}P_(e)&&L_(e)}function cP(t){return Xo(t)&&t.Tu.length<10}function hP(t,e){t.Tu.push(e);const n=si(t);n.Uo()&&n.ru&&n.ou(e.mutations)}function P_(t){return Xo(t)&&!si(t).qo()&&t.Tu.length>0}function L_(t){si(t).start()}async function fP(t){si(t).au()}async function dP(t){const e=si(t);for(const n of t.Tu)e.ou(n.mutations)}async function pP(t,e,n){const r=t.Tu.shift(),s=hd.from(r,e,n);await k_(t,()=>t.remoteSyncer.applySuccessfulWrite(s)),await Sl(t)}async function gP(t,e){e&&si(t).ru&&await async function(n,r){if(s=r.code,_k(s)&&s!==U.ABORTED){const a=n.Tu.shift();si(n).Go(),await k_(n,()=>n.remoteSyncer.rejectFailedWrite(a.batchId,r)),await Sl(n)}var s}(t,e),P_(t)&&L_(t)}async function yv(t,e){const n=ze(t);n.asyncQueue.verifyOperationInProgress(),Z("RemoteStore","RemoteStore received new credentials");const r=Xo(n);n.Au.add(3),await Go(n),r&&n.Pu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Au.delete(3),await Cl(n)}async function mP(t,e){const n=ze(t);e?(n.Au.delete(2),await Cl(n)):e||(n.Au.add(2),await Go(n),n.Pu.set("Unknown"))}function si(t){return t.Su||(t.Su=function(e,n,r){const s=ze(e);return s.lu(),new oP(n,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,r)}(t.datastore,t.asyncQueue,{oo:fP.bind(null,t),co:gP.bind(null,t),cu:dP.bind(null,t),uu:pP.bind(null,t)}),t.Ru.push(async e=>{e?(t.Su.Go(),await Sl(t)):(await t.Su.stop(),t.Tu.length>0&&(Z("RemoteStore",`Stopping write stream with ${t.Tu.length} pending writes`),t.Tu=[]))})),t.Su}/**
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
 */class gd{constructor(e,n,r,s,a){this.asyncQueue=e,this.timerId=n,this.targetTimeMs=r,this.op=s,this.removalCallback=a,this.deferred=new Ni,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(u=>{})}static createAndSchedule(e,n,r,s,a){const u=Date.now()+r,h=new gd(e,n,u,s,a);return h.start(r),h}start(e){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new le(U.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(e=>this.deferred.resolve(e))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function M_(t,e){if(Mi("AsyncQueue",`${e}: ${t}`),El(t))return new le(U.UNAVAILABLE,`${e}: ${t}`);throw t}class vP{constructor(){this.queries=new Ls(e=>g_(e),p_),this.onlineState="Unknown",this.Nu=new Set}}function yP(t){t.Nu.forEach(e=>{e.next()})}class _P{constructor(e,n,r,s,a,u){this.localStore=e,this.remoteStore=n,this.eventManager=r,this.sharedClientState=s,this.currentUser=a,this.maxConcurrentLimboResolutions=u,this.fc={},this.dc=new Ls(h=>g_(h),p_),this._c=new Map,this.wc=new Set,this.mc=new nn(pe.comparator),this.gc=new Map,this.yc=new fd,this.Ic={},this.Tc=new Map,this.Ec=Rs.kn(),this.onlineState="Unknown",this.Ac=void 0}get isPrimaryClient(){return this.Ac===!0}}async function wP(t,e,n){const r=bP(t);try{const s=await function(a,u){const h=ze(a),f=pt.now(),p=u.reduce((A,L)=>A.add(L.key),Nt());let v,E;return h.persistence.runTransaction("Locally write mutations","readwrite",A=>{let L=$u(),z=Nt();return h.Xi.getEntries(A,p).next(B=>{L=B,L.forEach((X,te)=>{te.isValidDocument()||(z=z.add(X))})}).next(()=>h.localDocuments.getOverlayedDocuments(A,L)).next(B=>{v=B;const X=[];for(const te of u){const Fe=gk(te,v.get(te.key).overlayedDocument);Fe!=null&&X.push(new $i(te.key,Fe,a_(Fe.value.mapValue),wr.exists(!0)))}return h.mutationQueue.addMutationBatch(A,f,X,u)}).next(B=>{E=B;const X=B.applyToLocalDocumentSet(v,z);return h.documentOverlayCache.saveOverlays(A,B.batchId,X)})}).then(()=>({batchId:E.batchId,changes:v_(v)}))}(r.localStore,e);r.sharedClientState.addPendingMutation(s.batchId),function(a,u,h){let f=a.Ic[a.currentUser.toKey()];f||(f=new nn(He)),f=f.insert(u,h),a.Ic[a.currentUser.toKey()]=f}(r,s.batchId,n),await Rl(r,s.changes),await Sl(r.remoteStore)}catch(s){const a=M_(s,"Failed to persist write");n.reject(a)}}function _v(t,e,n){const r=ze(t);if(r.isPrimaryClient&&n===0||!r.isPrimaryClient&&n===1){const s=[];r.dc.forEach((a,u)=>{const h=u.view.ku(e);h.snapshot&&s.push(h.snapshot)}),function(a,u){const h=ze(a);h.onlineState=u;let f=!1;h.queries.forEach((p,v)=>{for(const E of v.listeners)E.ku(u)&&(f=!0)}),f&&yP(h)}(r.eventManager,e),s.length&&r.fc.eu(s),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function EP(t,e){const n=ze(t),r=e.batch.batchId;try{const s=await Yk(n.localStore,e);U_(n,r,null),F_(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Rl(n,s)}catch(s){await r_(s)}}async function IP(t,e,n){const r=ze(t);try{const s=await function(a,u){const h=ze(a);return h.persistence.runTransaction("Reject batch","readwrite-primary",f=>{let p;return h.mutationQueue.lookupMutationBatch(f,u).next(v=>(mt(v!==null),p=v.keys(),h.mutationQueue.removeMutationBatch(f,v))).next(()=>h.mutationQueue.performConsistencyCheck(f)).next(()=>h.documentOverlayCache.removeOverlaysForBatchId(f,p,u)).next(()=>h.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(f,p)).next(()=>h.localDocuments.getDocuments(f,p))})}(r.localStore,e);U_(r,e,n),F_(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await Rl(r,s)}catch(s){await r_(s)}}function F_(t,e){(t.Tc.get(e)||[]).forEach(n=>{n.resolve()}),t.Tc.delete(e)}function U_(t,e,n){const r=ze(t);let s=r.Ic[r.currentUser.toKey()];if(s){const a=s.get(e);a&&(n?a.reject(n):a.resolve(),s=s.remove(e)),r.Ic[r.currentUser.toKey()]=s}}async function Rl(t,e,n){const r=ze(t),s=[],a=[],u=[];r.dc.isEmpty()||(r.dc.forEach((h,f)=>{u.push(r.Rc(f,e,n).then(p=>{if((p||n)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(f.targetId,p!=null&&p.fromCache?"not-current":"current"),p){s.push(p);const v=pd.Bi(f.targetId,p);a.push(v)}}))}),await Promise.all(u),r.fc.eu(s),await async function(h,f){const p=ze(h);try{await p.persistence.runTransaction("notifyLocalViewChanges","readwrite",v=>F.forEach(f,E=>F.forEach(E.$i,A=>p.persistence.referenceDelegate.addReference(v,E.targetId,A)).next(()=>F.forEach(E.Fi,A=>p.persistence.referenceDelegate.removeReference(v,E.targetId,A)))))}catch(v){if(!El(v))throw v;Z("LocalStore","Failed to update sequence numbers: "+v)}for(const v of f){const E=v.targetId;if(!v.fromCache){const A=p.Hi.get(E),L=A.snapshotVersion,z=A.withLastLimboFreeSnapshotVersion(L);p.Hi=p.Hi.insert(E,z)}}}(r.localStore,a))}async function TP(t,e){const n=ze(t);if(!n.currentUser.isEqual(e)){Z("SyncEngine","User change. New user:",e.toKey());const r=await O_(n.localStore,e);n.currentUser=e,function(s,a){s.Tc.forEach(u=>{u.forEach(h=>{h.reject(new le(U.CANCELLED,a))})}),s.Tc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(e,r.removedBatchIds,r.addedBatchIds),await Rl(n,r.tr)}}function bP(t){const e=ze(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=EP.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=IP.bind(null,e),e}class wv{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Al(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,n){return null}createIndexBackfillerScheduler(e,n){return null}createLocalStore(e){return Qk(this.persistence,new Gk,e.initialUser,this.serializer)}createPersistence(e){return new jk(dd.js,this.serializer)}createSharedClientState(e){return new eP}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class AP{async initialize(e,n){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(n),this.remoteStore=this.createRemoteStore(n),this.eventManager=this.createEventManager(n),this.syncEngine=this.createSyncEngine(n,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>_v(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=TP.bind(null,this.syncEngine),await mP(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new vP}createDatastore(e){const n=Al(e.databaseInfo.databaseId),r=(s=e.databaseInfo,new iP(s));var s;return function(a,u,h,f){return new aP(a,u,h,f)}(e.authCredentials,e.appCheckCredentials,r,n)}createRemoteStore(e){return n=this.localStore,r=this.datastore,s=e.asyncQueue,a=h=>_v(this.syncEngine,h,0),u=vv.D()?new vv:new tP,new lP(n,r,s,a,u);var n,r,s,a,u}createSyncEngine(e,n){return function(r,s,a,u,h,f,p){const v=new _P(r,s,a,u,h,f);return p&&(v.Ac=!0),v}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,n)}terminate(){return async function(e){const n=ze(e);Z("RemoteStore","RemoteStore shutting down."),n.Au.add(5),await Go(n),n.vu.shutdown(),n.Pu.set("Unknown")}(this.remoteStore)}}/**
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
 */class CP{constructor(e,n,r,s){this.authCredentials=e,this.appCheckCredentials=n,this.asyncQueue=r,this.databaseInfo=s,this.user=Ot.UNAUTHENTICATED,this.clientId=n_.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async a=>{Z("FirestoreClient","Received user=",a.uid),await this.authCredentialListener(a),this.user=a}),this.appCheckCredentials.start(r,a=>(Z("FirestoreClient","Received new app check token=",a),this.appCheckCredentialListener(a,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new le(U.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Ni;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(n){const r=M_(n,"Failed to shutdown persistence");e.reject(r)}}),e.promise}}async function vh(t,e){t.asyncQueue.verifyOperationInProgress(),Z("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async s=>{r.isEqual(s)||(await O_(e.localStore,s),r=s)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t._offlineComponents=e}async function Ev(t,e){t.asyncQueue.verifyOperationInProgress();const n=await RP(t);Z("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(s=>yv(e.remoteStore,s)),t.setAppCheckTokenChangeListener((s,a)=>yv(e.remoteStore,a)),t._onlineComponents=e}function SP(t){return t.name==="FirebaseError"?t.code===U.FAILED_PRECONDITION||t.code===U.UNIMPLEMENTED:!(typeof DOMException<"u"&&t instanceof DOMException)||t.code===22||t.code===20||t.code===11}async function RP(t){if(!t._offlineComponents)if(t._uninitializedComponentsProvider){Z("FirestoreClient","Using user provided OfflineComponentProvider");try{await vh(t,t._uninitializedComponentsProvider._offline)}catch(e){const n=e;if(!SP(n))throw n;Lu("Error using user provided cache. Falling back to memory cache: "+n),await vh(t,new wv)}}else Z("FirestoreClient","Using default OfflineComponentProvider"),await vh(t,new wv);return t._offlineComponents}async function xP(t){return t._onlineComponents||(t._uninitializedComponentsProvider?(Z("FirestoreClient","Using user provided OnlineComponentProvider"),await Ev(t,t._uninitializedComponentsProvider._online)):(Z("FirestoreClient","Using default OnlineComponentProvider"),await Ev(t,new AP))),t._onlineComponents}function OP(t){return xP(t).then(e=>e.syncEngine)}/**
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
 */const Iv=new Map;/**
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
 */function B_(t,e,n){if(!n)throw new le(U.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function NP(t,e,n,r){if(e===!0&&r===!0)throw new le(U.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}function Tv(t){if(!pe.isDocumentKey(t))throw new le(U.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function bv(t){if(pe.isDocumentKey(t))throw new le(U.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function md(t){if(t===void 0)return"undefined";if(t===null)return"null";if(typeof t=="string")return t.length>20&&(t=`${t.substring(0,20)}...`),JSON.stringify(t);if(typeof t=="number"||typeof t=="boolean")return""+t;if(typeof t=="object"){if(t instanceof Array)return"an array";{const e=function(n){return n.constructor?n.constructor.name:null}(t);return e?`a custom ${e} object`:"an object"}}return typeof t=="function"?"a function":be()}function $_(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new le(U.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=md(t);throw new le(U.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}/**
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
 */class Av{constructor(e){var n;if(e.host===void 0){if(e.ssl!==void 0)throw new le(U.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=(n=e.ssl)===null||n===void 0||n;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,e.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(e.cacheSizeBytes!==-1&&e.cacheSizeBytes<1048576)throw new le(U.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}NP("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:e.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!1:this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}/**
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
 */class xl{constructor(e,n,r,s){this._authCredentials=e,this._appCheckCredentials=n,this._databaseId=r,this._app=s,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Av({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new le(U.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(e){if(this._settingsFrozen)throw new le(U.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Av(e),e.credentials!==void 0&&(this._authCredentials=function(n){if(!n)return new ID;switch(n.type){case"firstParty":return new CD(n.sessionIndex||"0",n.iamToken||null,n.authTokenFactory||null);case"provider":return n.client;default:throw new le(U.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const n=Iv.get(e);n&&(Z("ComponentProvider","Removing Datastore"),Iv.delete(e),n.terminate())}(this),Promise.resolve()}}function DP(t,e,n,r={}){var s;const a=(t=$_(t,xl))._getSettings();if(a.host!=="firestore.googleapis.com"&&a.host!==e&&Lu("Host has been set in both settings() and useEmulator(), emulator host will be used"),t._setSettings(Object.assign(Object.assign({},a),{host:`${e}:${n}`,ssl:!1})),r.mockUserToken){let u,h;if(typeof r.mockUserToken=="string")u=r.mockUserToken,h=Ot.MOCK_USER;else{u=Yx(r.mockUserToken,(s=t._app)===null||s===void 0?void 0:s.options.projectId);const f=r.mockUserToken.sub||r.mockUserToken.user_id;if(!f)throw new le(U.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");h=new Ot(f)}t._authCredentials=new TD(new t_(u,h))}}/**
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
 */class Er{constructor(e,n,r){this.converter=n,this._key=r,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ei(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Er(this.firestore,e,this._key)}}class vd{constructor(e,n,r){this.converter=n,this._query=r,this.type="query",this.firestore=e}withConverter(e){return new vd(this.firestore,e,this._query)}}class ei extends vd{constructor(e,n,r){super(e,n,JD(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Er(this.firestore,null,new pe(e))}withConverter(e){return new ei(this.firestore,e,this._path)}}function kP(t,e,...n){if(t=Vn(t),B_("collection","path",e),t instanceof xl){const r=et.fromString(e,...n);return bv(r),new ei(t,null,r)}{if(!(t instanceof Er||t instanceof ei))throw new le(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return bv(r),new ei(t.firestore,null,r)}}function PP(t,e,...n){if(t=Vn(t),arguments.length===1&&(e=n_.A()),B_("doc","path",e),t instanceof xl){const r=et.fromString(e,...n);return Tv(r),new Er(t,null,new pe(r))}{if(!(t instanceof Er||t instanceof ei))throw new le(U.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(et.fromString(e,...n));return Tv(r),new Er(t.firestore,t instanceof ei?t.converter:null,new pe(r))}}/**
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
 */class LP{constructor(){this.Kc=Promise.resolve(),this.Gc=[],this.Qc=!1,this.jc=[],this.zc=null,this.Wc=!1,this.Hc=!1,this.Jc=[],this.Lo=new N_(this,"async_queue_retry"),this.Yc=()=>{const n=mh();n&&Z("AsyncQueue","Visibility state changed to "+n.visibilityState),this.Lo.ko()};const e=mh();e&&typeof e.addEventListener=="function"&&e.addEventListener("visibilitychange",this.Yc)}get isShuttingDown(){return this.Qc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Xc(),this.Zc(e)}enterRestrictedMode(e){if(!this.Qc){this.Qc=!0,this.Hc=e||!1;const n=mh();n&&typeof n.removeEventListener=="function"&&n.removeEventListener("visibilitychange",this.Yc)}}enqueue(e){if(this.Xc(),this.Qc)return new Promise(()=>{});const n=new Ni;return this.Zc(()=>this.Qc&&this.Hc?Promise.resolve():(e().then(n.resolve,n.reject),n.promise)).then(()=>n.promise)}enqueueRetryable(e){this.enqueueAndForget(()=>(this.Gc.push(e),this.ta()))}async ta(){if(this.Gc.length!==0){try{await this.Gc[0](),this.Gc.shift(),this.Lo.reset()}catch(e){if(!El(e))throw e;Z("AsyncQueue","Operation failed with retryable error: "+e)}this.Gc.length>0&&this.Lo.xo(()=>this.ta())}}Zc(e){const n=this.Kc.then(()=>(this.Wc=!0,e().catch(r=>{this.zc=r,this.Wc=!1;const s=function(a){let u=a.message||"";return a.stack&&(u=a.stack.includes(a.message)?a.stack:a.message+`
`+a.stack),u}(r);throw Mi("INTERNAL UNHANDLED ERROR: ",s),r}).then(r=>(this.Wc=!1,r))));return this.Kc=n,n}enqueueAfterDelay(e,n,r){this.Xc(),this.Jc.indexOf(e)>-1&&(n=0);const s=gd.createAndSchedule(this,e,n,r,a=>this.ea(a));return this.jc.push(s),s}Xc(){this.zc&&be()}verifyOperationInProgress(){}async na(){let e;do e=this.Kc,await e;while(e!==this.Kc)}sa(e){for(const n of this.jc)if(n.timerId===e)return!0;return!1}ia(e){return this.na().then(()=>{this.jc.sort((n,r)=>n.targetTimeMs-r.targetTimeMs);for(const n of this.jc)if(n.skipDelay(),e!=="all"&&n.timerId===e)break;return this.na()})}ra(e){this.Jc.push(e)}ea(e){const n=this.jc.indexOf(e);this.jc.splice(n,1)}}class V_ extends xl{constructor(e,n,r,s){super(e,n,r,s),this.type="firestore",this._queue=new LP,this._persistenceKey=(s==null?void 0:s.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||H_(this),this._firestoreClient.terminate()}}function MP(t,e){const n=typeof t=="object"?t:Gy(),r=typeof t=="string"?t:e||"(default)",s=Lf(n,"firestore").getImmediate({identifier:r});if(!s._initialized){const a=Gx("firestore");a&&DP(s,...a)}return s}function FP(t){return t._firestoreClient||H_(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function H_(t){var e,n,r;const s=t._freezeSettings(),a=function(u,h,f,p){return new BD(u,h,f,p.host,p.ssl,p.experimentalForceLongPolling,p.experimentalAutoDetectLongPolling,p.useFetchStreams)}(t._databaseId,((e=t._app)===null||e===void 0?void 0:e.options.appId)||"",t._persistenceKey,s);t._firestoreClient=new CP(t._authCredentials,t._appCheckCredentials,t._queue,a),!((n=s.cache)===null||n===void 0)&&n._offlineComponentProvider&&(!((r=s.cache)===null||r===void 0)&&r._onlineComponentProvider)&&(t._firestoreClient._uninitializedComponentsProvider={_offlineKind:s.cache.kind,_offline:s.cache._offlineComponentProvider,_online:s.cache._onlineComponentProvider})}/**
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
 */class Do{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Do(br.fromBase64String(e))}catch(n){throw new le(U.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+n)}}static fromUint8Array(e){return new Do(br.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}/**
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
 */class W_{constructor(...e){for(let n=0;n<e.length;++n)if(e[n].length===0)throw new le(U.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new kt(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}/**
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
 */class z_{constructor(e){this._methodName=e}}/**
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
 */class K_{constructor(e,n){if(!isFinite(e)||e<-90||e>90)throw new le(U.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(n)||n<-180||n>180)throw new le(U.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+n);this._lat=e,this._long=n}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return He(this._lat,e._lat)||He(this._long,e._long)}}/**
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
 */const UP=/^__.*__$/;class BP{constructor(e,n,r){this.data=e,this.fieldMask=n,this.fieldTransforms=r}toMutation(e,n){return this.fieldMask!==null?new $i(e,this.data,this.fieldMask,n,this.fieldTransforms):new qo(e,this.data,n,this.fieldTransforms)}}function j_(t){switch(t){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw be()}}class yd{constructor(e,n,r,s,a,u){this.settings=e,this.databaseId=n,this.serializer=r,this.ignoreUndefinedProperties=s,a===void 0&&this.oa(),this.fieldTransforms=a||[],this.fieldMask=u||[]}get path(){return this.settings.path}get ua(){return this.settings.ua}ca(e){return new yd(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}aa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.la(e),s}fa(e){var n;const r=(n=this.path)===null||n===void 0?void 0:n.child(e),s=this.ca({path:r,ha:!1});return s.oa(),s}da(e){return this.ca({path:void 0,ha:!0})}_a(e){return Wu(e,this.settings.methodName,this.settings.wa||!1,this.path,this.settings.ma)}contains(e){return this.fieldMask.find(n=>e.isPrefixOf(n))!==void 0||this.fieldTransforms.find(n=>e.isPrefixOf(n.field))!==void 0}oa(){if(this.path)for(let e=0;e<this.path.length;e++)this.la(this.path.get(e))}la(e){if(e.length===0)throw this._a("Document fields must not be empty");if(j_(this.ua)&&UP.test(e))throw this._a('Document fields cannot begin and end with "__"')}}class $P{constructor(e,n,r){this.databaseId=e,this.ignoreUndefinedProperties=n,this.serializer=r||Al(e)}ga(e,n,r,s=!1){return new yd({ua:e,methodName:n,ma:r,path:kt.emptyPath(),ha:!1,wa:s},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function VP(t){const e=t._freezeSettings(),n=Al(t._databaseId);return new $P(t._databaseId,!!e.ignoreUndefinedProperties,n)}function HP(t,e,n,r,s,a={}){const u=t.ga(a.merge||a.mergeFields?2:0,e,n,s);Q_("Data must be an object, but it was:",u,r);const h=G_(r,u);let f,p;if(a.merge)f=new Un(u.fieldMask),p=u.fieldTransforms;else if(a.mergeFields){const v=[];for(const E of a.mergeFields){const A=WP(e,E,n);if(!u.contains(A))throw new le(U.INVALID_ARGUMENT,`Field '${A}' is specified in your field mask but missing from your input data.`);jP(v,A)||v.push(A)}f=new Un(v),p=u.fieldTransforms.filter(E=>f.covers(E.field))}else f=null,p=u.fieldTransforms;return new BP(new Mn(h),f,p)}function q_(t,e){if(X_(t=Vn(t)))return Q_("Unsupported field value:",e,t),G_(t,e);if(t instanceof z_)return function(n,r){if(!j_(r.ua))throw r._a(`${n._methodName}() can only be used with update() and set()`);if(!r.path)throw r._a(`${n._methodName}() is not currently supported inside arrays`);const s=n._toFieldTransform(r);s&&r.fieldTransforms.push(s)}(t,e),null;if(t===void 0&&e.ignoreUndefinedProperties)return null;if(e.path&&e.fieldMask.push(e.path),t instanceof Array){if(e.settings.ha&&e.ua!==4)throw e._a("Nested arrays are not supported");return function(n,r){const s=[];let a=0;for(const u of n){let h=q_(u,r.da(a));h==null&&(h={nullValue:"NULL_VALUE"}),s.push(h),a++}return{arrayValue:{values:s}}}(t,e)}return function(n,r){if((n=Vn(n))===null)return{nullValue:"NULL_VALUE"};if(typeof n=="number")return lk(r.serializer,n);if(typeof n=="boolean")return{booleanValue:n};if(typeof n=="string")return{stringValue:n};if(n instanceof Date){const s=pt.fromDate(n);return{timestampValue:rf(r.serializer,s)}}if(n instanceof pt){const s=new pt(n.seconds,1e3*Math.floor(n.nanoseconds/1e3));return{timestampValue:rf(r.serializer,s)}}if(n instanceof K_)return{geoPointValue:{latitude:n.latitude,longitude:n.longitude}};if(n instanceof Do)return{bytesValue:Ik(r.serializer,n._byteString)};if(n instanceof Er){const s=r.databaseId,a=n.firestore._databaseId;if(!a.isEqual(s))throw r._a(`Document reference is for database ${a.projectId}/${a.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:R_(n.firestore._databaseId||r.databaseId,n._key.path)}}throw r._a(`Unsupported field value: ${md(n)}`)}(t,e)}function G_(t,e){const n={};return s_(t)?e.path&&e.path.length>0&&e.fieldMask.push(e.path):jo(t,(r,s)=>{const a=q_(s,e.aa(r));a!=null&&(n[r]=a)}),{mapValue:{fields:n}}}function X_(t){return!(typeof t!="object"||t===null||t instanceof Array||t instanceof Date||t instanceof pt||t instanceof K_||t instanceof Do||t instanceof Er||t instanceof z_)}function Q_(t,e,n){if(!X_(n)||!function(r){return typeof r=="object"&&r!==null&&(Object.getPrototypeOf(r)===Object.prototype||Object.getPrototypeOf(r)===null)}(n)){const r=md(n);throw r==="an object"?e._a(t+" a custom object"):e._a(t+" "+r)}}function WP(t,e,n){if((e=Vn(e))instanceof W_)return e._internalPath;if(typeof e=="string")return KP(t,e);throw Wu("Field path arguments must be of type string or ",t,!1,void 0,n)}const zP=new RegExp("[~\\*/\\[\\]]");function KP(t,e,n){if(e.search(zP)>=0)throw Wu(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new W_(...e.split("."))._internalPath}catch{throw Wu(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function Wu(t,e,n,r,s){const a=r&&!r.isEmpty(),u=s!==void 0;let h=`Function ${e}() called with invalid data`;n&&(h+=" (via `toFirestore()`)"),h+=". ";let f="";return(a||u)&&(f+=" (found",a&&(f+=` in field ${r}`),u&&(f+=` in document ${s}`),f+=")"),new le(U.INVALID_ARGUMENT,h+t+f)}function jP(t,e){return t.some(n=>n.isEqual(e))}/**
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
 */function qP(t,e,n){let r;return r=t?n&&(n.merge||n.mergeFields)?t.toFirestore(e,n):t.toFirestore(e):e,r}function GP(t,e){const n=$_(t.firestore,V_),r=PP(t),s=qP(t.converter,e);return XP(n,[HP(VP(t.firestore),"addDoc",r._key,s,t.converter!==null,{}).toMutation(r._key,wr.exists(!1))]).then(()=>r)}function XP(t,e){return function(n,r){const s=new Ni;return n.asyncQueue.enqueueAndForget(async()=>wP(await OP(n),r,s)),s.promise}(FP(t),e)}(function(t,e=!0){(function(n){Ps=n})(Ns),Es(new ki("firestore",(n,{instanceIdentifier:r,options:s})=>{const a=n.getProvider("app").getImmediate(),u=new V_(new bD(n.getProvider("auth-internal")),new RD(n.getProvider("app-check-internal")),function(h,f){if(!Object.prototype.hasOwnProperty.apply(h.options,["projectId"]))throw new le(U.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Uu(h.options.projectId,f)}(a,r),a);return s=Object.assign({useFetchStreams:e},s),u._setSettings(s),u},"PUBLIC").setMultipleInstances(!0)),Zr(tv,"3.11.0",t),Zr(tv,"3.11.0","esm2017")})();function _d(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,r=Object.getOwnPropertySymbols(t);s<r.length;s++)e.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(t,r[s])&&(n[r[s]]=t[r[s]]);return n}function Y_(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const QP=Y_,J_=new Lo("auth","Firebase",Y_());/**
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
 */const zu=new kf("@firebase/auth");function YP(t,...e){zu.logLevel<=xe.WARN&&zu.warn(`Auth (${Ns}): ${t}`,...e)}function pu(t,...e){zu.logLevel<=xe.ERROR&&zu.error(`Auth (${Ns}): ${t}`,...e)}/**
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
 */function Ar(t,...e){throw wd(t,...e)}function Jn(t,...e){return wd(t,...e)}function JP(t,e,n){const r=Object.assign(Object.assign({},QP()),{[e]:n});return new Lo("auth","Firebase",r).create(e,{appName:t.name})}function wd(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return J_.create(t,...e)}function oe(t,e,...n){if(!t)throw wd(e,...n)}function vr(t){const e="INTERNAL ASSERTION FAILED: "+t;throw pu(e),new Error(e)}function Cr(t,e){t||vr(e)}/**
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
 */function of(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ZP(){return Cv()==="http:"||Cv()==="https:"}function Cv(){var t;return typeof self<"u"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
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
 */function e2(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ZP()||Zx()||"connection"in navigator)?navigator.onLine:!0}function t2(){if(typeof navigator>"u")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
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
 */class Qo{constructor(e,n){this.shortDelay=e,this.longDelay=n,Cr(n>e,"Short delay should be less than long delay!"),this.isMobile=Jx()||eO()}get(){return e2()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
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
 */function Ed(t,e){Cr(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
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
 */class Z_{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;vr("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;vr("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;vr("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
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
 */const n2={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
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
 */const r2=new Qo(3e4,6e4);function Id(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function Yo(t,e,n,r,s={}){return ew(t,s,async()=>{let a={},u={};r&&(e==="GET"?u=r:a={body:JSON.stringify(r)});const h=Mo(Object.assign({key:t.config.apiKey},u)).slice(1),f=await t._getAdditionalHeaders();return f["Content-Type"]="application/json",t.languageCode&&(f["X-Firebase-Locale"]=t.languageCode),Z_.fetch()(nw(t,t.config.apiHost,n,h),Object.assign({method:e,headers:f,referrerPolicy:"no-referrer"},a))})}async function ew(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},n2),e);try{const s=new i2(t),a=await Promise.race([n(),s.promise]);s.clearNetworkTimeout();const u=await a.json();if("needConfirmation"in u)throw uu(t,"account-exists-with-different-credential",u);if(a.ok&&!("errorMessage"in u))return u;{const h=a.ok?u.errorMessage:u.error.message,[f,p]=h.split(" : ");if(f==="FEDERATED_USER_ID_ALREADY_LINKED")throw uu(t,"credential-already-in-use",u);if(f==="EMAIL_EXISTS")throw uu(t,"email-already-in-use",u);if(f==="USER_DISABLED")throw uu(t,"user-disabled",u);const v=r[f]||f.toLowerCase().replace(/[_\s]+/g,"-");if(p)throw JP(t,v,p);Ar(t,v)}}catch(s){if(s instanceof Rr)throw s;Ar(t,"network-request-failed",{message:String(s)})}}async function tw(t,e,n,r,s={}){const a=await Yo(t,e,n,r,s);return"mfaPendingCredential"in a&&Ar(t,"multi-factor-auth-required",{_serverResponse:a}),a}function nw(t,e,n,r){const s=`${e}${n}?${r}`;return t.config.emulator?Ed(t.config,s):`${t.config.apiScheme}://${s}`}class i2{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(Jn(this.auth,"network-request-failed")),r2.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function uu(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const s=Jn(t,e,r);return s.customData._tokenResponse=n,s}/**
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
 */async function s2(t,e){return Yo(t,"POST","/v1/accounts:delete",e)}async function o2(t,e){return Yo(t,"POST","/v1/accounts:lookup",e)}/**
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
 */function fo(t){if(t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function a2(t,e=!1){const n=Vn(t),r=await n.getIdToken(e),s=Td(r);oe(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const a=typeof s.firebase=="object"?s.firebase:void 0,u=a==null?void 0:a.sign_in_provider;return{claims:s,token:r,authTime:fo(yh(s.auth_time)),issuedAtTime:fo(yh(s.iat)),expirationTime:fo(yh(s.exp)),signInProvider:u||null,signInSecondFactor:(a==null?void 0:a.sign_in_second_factor)||null}}function yh(t){return Number(t)*1e3}function Td(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return pu("JWT malformed, contained fewer than 3 sections"),null;try{const s=Hy(n);return s?JSON.parse(s):(pu("Failed to decode base64 JWT payload"),null)}catch(s){return pu("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function u2(t){const e=Td(t);return oe(e,"internal-error"),oe(typeof e.exp<"u","internal-error"),oe(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
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
 */async function ko(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Rr&&l2(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function l2({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
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
 */class c2{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const s=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
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
 */class rw{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=fo(this.lastLoginAt),this.creationTime=fo(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
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
 */async function Ku(t){var e;const n=t.auth,r=await t.getIdToken(),s=await ko(t,o2(n,{idToken:r}));oe(s==null?void 0:s.users.length,n,"internal-error");const a=s.users[0];t._notifyReloadListener(a);const u=!((e=a.providerUserInfo)===null||e===void 0)&&e.length?d2(a.providerUserInfo):[],h=f2(t.providerData,u),f=t.isAnonymous,p=!(t.email&&a.passwordHash)&&!(h!=null&&h.length),v=f?p:!1,E={uid:a.localId,displayName:a.displayName||null,photoURL:a.photoUrl||null,email:a.email||null,emailVerified:a.emailVerified||!1,phoneNumber:a.phoneNumber||null,tenantId:a.tenantId||null,providerData:h,metadata:new rw(a.createdAt,a.lastLoginAt),isAnonymous:v};Object.assign(t,E)}async function h2(t){const e=Vn(t);await Ku(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function f2(t,e){return[...t.filter(r=>!e.some(s=>s.providerId===r.providerId)),...e]}function d2(t){return t.map(e=>{var{providerId:n}=e,r=_d(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
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
 */async function p2(t,e){const n=await ew(t,{},async()=>{const r=Mo({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:a}=t.config,u=nw(t,s,"/v1/token",`key=${a}`),h=await t._getAdditionalHeaders();return h["Content-Type"]="application/x-www-form-urlencoded",Z_.fetch()(u,{method:"POST",headers:h,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
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
 */class Po{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){oe(e.idToken,"internal-error"),oe(typeof e.idToken<"u","internal-error"),oe(typeof e.refreshToken<"u","internal-error");const n="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):u2(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return oe(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:s,expiresIn:a}=await p2(e,n);this.updateTokensAndExpiration(r,s,Number(a))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:s,expirationTime:a}=n,u=new Po;return r&&(oe(typeof r=="string","internal-error",{appName:e}),u.refreshToken=r),s&&(oe(typeof s=="string","internal-error",{appName:e}),u.accessToken=s),a&&(oe(typeof a=="number","internal-error",{appName:e}),u.expirationTime=a),u}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new Po,this.toJSON())}_performRefresh(){return vr("not implemented")}}/**
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
 */function Wr(t,e){oe(typeof t=="string"||typeof t>"u","internal-error",{appName:e})}class Di{constructor(e){var{uid:n,auth:r,stsTokenManager:s}=e,a=_d(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new c2(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=a.displayName||null,this.email=a.email||null,this.emailVerified=a.emailVerified||!1,this.phoneNumber=a.phoneNumber||null,this.photoURL=a.photoURL||null,this.isAnonymous=a.isAnonymous||!1,this.tenantId=a.tenantId||null,this.providerData=a.providerData?[...a.providerData]:[],this.metadata=new rw(a.createdAt||void 0,a.lastLoginAt||void 0)}async getIdToken(e){const n=await ko(this,this.stsTokenManager.getToken(this.auth,e));return oe(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return a2(this,e)}reload(){return h2(this)}_assign(e){this!==e&&(oe(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const n=new Di(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return n.metadata._copy(this.metadata),n}_onReload(e){oe(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Ku(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ko(this,s2(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,s,a,u,h,f,p,v;const E=(r=n.displayName)!==null&&r!==void 0?r:void 0,A=(s=n.email)!==null&&s!==void 0?s:void 0,L=(a=n.phoneNumber)!==null&&a!==void 0?a:void 0,z=(u=n.photoURL)!==null&&u!==void 0?u:void 0,B=(h=n.tenantId)!==null&&h!==void 0?h:void 0,X=(f=n._redirectEventId)!==null&&f!==void 0?f:void 0,te=(p=n.createdAt)!==null&&p!==void 0?p:void 0,Fe=(v=n.lastLoginAt)!==null&&v!==void 0?v:void 0,{uid:G,emailVerified:we,isAnonymous:Ae,providerData:it,stsTokenManager:Xe}=n;oe(G&&Xe,e,"internal-error");const se=Po.fromJSON(this.name,Xe);oe(typeof G=="string",e,"internal-error"),Wr(E,e.name),Wr(A,e.name),oe(typeof we=="boolean",e,"internal-error"),oe(typeof Ae=="boolean",e,"internal-error"),Wr(L,e.name),Wr(z,e.name),Wr(B,e.name),Wr(X,e.name),Wr(te,e.name),Wr(Fe,e.name);const Be=new Di({uid:G,auth:e,email:A,emailVerified:we,displayName:E,isAnonymous:Ae,photoURL:z,phoneNumber:L,tenantId:B,stsTokenManager:se,createdAt:te,lastLoginAt:Fe});return it&&Array.isArray(it)&&(Be.providerData=it.map($e=>Object.assign({},$e))),X&&(Be._redirectEventId=X),Be}static async _fromIdTokenResponse(e,n,r=!1){const s=new Po;s.updateFromServerResponse(n);const a=new Di({uid:n.localId,auth:e,stsTokenManager:s,isAnonymous:r});return await Ku(a),a}}/**
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
 */const Sv=new Map;function yr(t){Cr(t instanceof Function,"Expected a class definition");let e=Sv.get(t);return e?(Cr(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,Sv.set(t,e),e)}/**
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
 */class iw{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}iw.type="NONE";const Rv=iw;/**
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
 */function gu(t,e,n){return`firebase:${t}:${e}:${n}`}class ys{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:s,name:a}=this.auth;this.fullUserKey=gu(this.userKey,s.apiKey,a),this.fullPersistenceKey=gu("persistence",s.apiKey,a),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?Di._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new ys(yr(Rv),e,r);const s=(await Promise.all(n.map(async p=>{if(await p._isAvailable())return p}))).filter(p=>p);let a=s[0]||yr(Rv);const u=gu(r,e.config.apiKey,e.name);let h=null;for(const p of n)try{const v=await p._get(u);if(v){const E=Di._fromJSON(e,v);p!==a&&(h=E),a=p;break}}catch{}const f=s.filter(p=>p._shouldAllowMigration);return!a._shouldAllowMigration||!f.length?new ys(a,e,r):(a=f[0],h&&await a._set(u,h.toJSON()),await Promise.all(n.map(async p=>{if(p!==a)try{await p._remove(u)}catch{}})),new ys(a,e,r))}}/**
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
 */function xv(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(aw(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(sw(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(lw(e))return"Blackberry";if(cw(e))return"Webos";if(bd(e))return"Safari";if((e.includes("chrome/")||ow(e))&&!e.includes("edge/"))return"Chrome";if(uw(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function sw(t=Mt()){return/firefox\//i.test(t)}function bd(t=Mt()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function ow(t=Mt()){return/crios\//i.test(t)}function aw(t=Mt()){return/iemobile/i.test(t)}function uw(t=Mt()){return/android/i.test(t)}function lw(t=Mt()){return/blackberry/i.test(t)}function cw(t=Mt()){return/webos/i.test(t)}function Ol(t=Mt()){return/iphone|ipad|ipod/i.test(t)||/macintosh/i.test(t)&&/mobile/i.test(t)}function g2(t=Mt()){var e;return Ol(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function m2(){return tO()&&document.documentMode===10}function hw(t=Mt()){return Ol(t)||uw(t)||cw(t)||lw(t)||/windows phone/i.test(t)||aw(t)}function v2(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
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
 */function fw(t,e=[]){let n;switch(t){case"Browser":n=xv(Mt());break;case"Worker":n=`${xv(Mt())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ns}/${r}`}async function dw(t,e){return Yo(t,"GET","/v2/recaptchaConfig",Id(t,e))}function Ov(t){return t!==void 0&&t.enterprise!==void 0}class pw{constructor(e){if(this.siteKey="",this.emailPasswordEnabled=!1,e.recaptchaKey===void 0)throw new Error("recaptchaKey undefined");this.siteKey=e.recaptchaKey.split("/")[3],this.emailPasswordEnabled=e.recaptchaEnforcementState.some(n=>n.provider==="EMAIL_PASSWORD_PROVIDER"&&n.enforcementState!=="OFF")}}/**
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
 */function y2(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function gw(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=s=>{const a=Jn("internal-error");a.customData=s,n(a)},r.type="text/javascript",r.charset="UTF-8",y2().appendChild(r)})}function _2(t){return`__${t}${Math.floor(Math.random()*1e6)}`}const w2="https://www.google.com/recaptcha/enterprise.js?render=",E2="recaptcha-enterprise",I2="NO_RECAPTCHA";class T2{constructor(e){this.type=E2,this.auth=Jo(e)}async verify(e="verify",n=!1){async function r(a){if(!n){if(a.tenantId==null&&a._agentRecaptchaConfig!=null)return a._agentRecaptchaConfig.siteKey;if(a.tenantId!=null&&a._tenantRecaptchaConfigs[a.tenantId]!==void 0)return a._tenantRecaptchaConfigs[a.tenantId].siteKey}return new Promise(async(u,h)=>{dw(a,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}).then(f=>{if(f.recaptchaKey===void 0)h(new Error("recaptcha Enterprise site key undefined"));else{const p=new pw(f);return a.tenantId==null?a._agentRecaptchaConfig=p:a._tenantRecaptchaConfigs[a.tenantId]=p,u(p.siteKey)}}).catch(f=>{h(f)})})}function s(a,u,h){const f=window.grecaptcha;Ov(f)?f.enterprise.ready(()=>{f.enterprise.execute(a,{action:e}).then(p=>{u(p)}).catch(()=>{u(I2)})}):h(Error("No reCAPTCHA enterprise script loaded."))}return new Promise((a,u)=>{r(this.auth).then(h=>{if(!n&&Ov(window.grecaptcha))s(h,a,u);else{if(typeof window>"u"){u(new Error("RecaptchaVerifier is only supported in browser"));return}gw(w2+h).then(()=>{s(h,a,u)}).catch(f=>{u(f)})}}).catch(h=>{u(h)})})}}/**
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
 */class b2{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,n){const r=a=>new Promise((u,h)=>{try{const f=e(a);u(f)}catch(f){h(f)}});r.onAbort=n,this.queue.push(r);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const n=[];try{for(const r of this.queue)await r(e),r.onAbort&&n.push(r.onAbort)}catch(r){n.reverse();for(const s of n)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */class A2{constructor(e,n,r,s){this.app=e,this.heartbeatServiceProvider=n,this.appCheckServiceProvider=r,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Nv(this),this.idTokenSubscription=new Nv(this),this.beforeStateQueue=new b2(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=J_,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=yr(n)),this._initializationPromise=this.queue(async()=>{var r,s;if(!this._deleted&&(this.persistenceManager=await ys.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var n;const r=await this.assertedPersistence.getCurrentUser();let s=r,a=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const u=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,h=s==null?void 0:s._redirectEventId,f=await this.tryRedirectSignIn(e);(!u||u===h)&&(f!=null&&f.user)&&(s=f.user,a=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(a)try{await this.beforeStateQueue.runMiddleware(s)}catch(u){s=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(u))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return oe(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Ku(e)}catch(n){if((n==null?void 0:n.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=t2()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Vn(e):null;return n&&oe(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e,n=!1){if(!this._deleted)return e&&oe(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),n||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(yr(e))})}async initializeRecaptchaConfig(){const e=await dw(this,{clientType:"CLIENT_TYPE_WEB",version:"RECAPTCHA_ENTERPRISE"}),n=new pw(e);this.tenantId==null?this._agentRecaptchaConfig=n:this._tenantRecaptchaConfigs[this.tenantId]=n,n.emailPasswordEnabled&&new T2(this).verify()}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Lo("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}beforeAuthStateChanged(e,n){return this.beforeStateQueue.pushCallback(e,n)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&yr(e)||this._popupRedirectResolver;oe(n,this,"argument-error"),this.redirectPersistenceManager=await ys.create(this,[yr(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,s){if(this._deleted)return()=>{};const a=typeof n=="function"?n:n.next.bind(n),u=this._isInitialized?Promise.resolve():this._initializationPromise;return oe(u,this,"internal-error"),u.then(()=>a(this.currentUser)),typeof n=="function"?e.addObserver(n,r,s):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return oe(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=fw(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());r&&(n["X-Firebase-Client"]=r);const s=await this._getAppCheckToken();return s&&(n["X-Firebase-AppCheck"]=s),n}async _getAppCheckToken(){var e;const n=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return n!=null&&n.error&&YP(`Error while retrieving App Check token: ${n.error}`),n==null?void 0:n.token}}function Jo(t){return Vn(t)}class Nv{constructor(e){this.auth=e,this.observer=null,this.addObserver=uO(n=>this.observer=n)}get next(){return oe(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
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
 */function C2(t,e){const n=Lf(t,"auth");if(n.isInitialized()){const s=n.getImmediate(),a=n.getOptions();if(Tu(a,e??{}))return s;Ar(s,"already-initialized")}return n.initialize({options:e})}function S2(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(yr);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}function R2(t,e,n){const r=Jo(t);oe(r._canInitEmulator,r,"emulator-config-failed"),oe(/^https?:\/\//.test(e),r,"invalid-emulator-scheme");const s=!!(n!=null&&n.disableWarnings),a=mw(e),{host:u,port:h}=x2(e),f=h===null?"":`:${h}`;r.config.emulator={url:`${a}//${u}${f}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:u,port:h,protocol:a.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||O2()}function mw(t){const e=t.indexOf(":");return e<0?"":t.substr(0,e+1)}function x2(t){const e=mw(t),n=/(\/\/)?([^?#/]+)/.exec(t.substr(e.length));if(!n)return{host:"",port:null};const r=n[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(r);if(s){const a=s[1];return{host:a,port:Dv(r.substr(a.length+1))}}else{const[a,u]=r.split(":");return{host:a,port:Dv(u)}}}function Dv(t){if(!t)return null;const e=Number(t);return isNaN(e)?null:e}function O2(){function t(){const e=document.createElement("p"),n=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",n.position="fixed",n.width="100%",n.backgroundColor="#ffffff",n.border=".1em solid #000000",n.color="#b50000",n.bottom="0px",n.left="0px",n.margin="0px",n.zIndex="10000",n.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",t):t())}/**
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
 */class vw{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return vr("not implemented")}_getIdTokenResponse(e){return vr("not implemented")}_linkToIdToken(e,n){return vr("not implemented")}_getReauthenticationResolver(e){return vr("not implemented")}}/**
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
 */async function _s(t,e){return tw(t,"POST","/v1/accounts:signInWithIdp",Id(t,e))}/**
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
 */const N2="http://localhost";class Ui extends vw{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const n=new Ui(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):Ar("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:s}=n,a=_d(n,["providerId","signInMethod"]);if(!r||!s)return null;const u=new Ui(r,s);return u.idToken=a.idToken||void 0,u.accessToken=a.accessToken||void 0,u.secret=a.secret,u.nonce=a.nonce,u.pendingToken=a.pendingToken||null,u}_getIdTokenResponse(e){const n=this.buildRequest();return _s(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,_s(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,_s(e,n)}buildRequest(){const e={requestUri:N2,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Mo(n)}return e}}/**
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
 */class yw{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
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
 */class Zo extends yw{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
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
 */class Kr extends Zo{constructor(){super("facebook.com")}static credential(e){return Ui._fromParams({providerId:Kr.PROVIDER_ID,signInMethod:Kr.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Kr.credentialFromTaggedObject(e)}static credentialFromError(e){return Kr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Kr.credential(e.oauthAccessToken)}catch{return null}}}Kr.FACEBOOK_SIGN_IN_METHOD="facebook.com";Kr.PROVIDER_ID="facebook.com";/**
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
 */class jr extends Zo{constructor(){super("google.com"),this.addScope("profile")}static credential(e,n){return Ui._fromParams({providerId:jr.PROVIDER_ID,signInMethod:jr.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return jr.credentialFromTaggedObject(e)}static credentialFromError(e){return jr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return jr.credential(n,r)}catch{return null}}}jr.GOOGLE_SIGN_IN_METHOD="google.com";jr.PROVIDER_ID="google.com";/**
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
 */class qr extends Zo{constructor(){super("github.com")}static credential(e){return Ui._fromParams({providerId:qr.PROVIDER_ID,signInMethod:qr.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return qr.credentialFromTaggedObject(e)}static credentialFromError(e){return qr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return qr.credential(e.oauthAccessToken)}catch{return null}}}qr.GITHUB_SIGN_IN_METHOD="github.com";qr.PROVIDER_ID="github.com";/**
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
 */class Gr extends Zo{constructor(){super("twitter.com")}static credential(e,n){return Ui._fromParams({providerId:Gr.PROVIDER_ID,signInMethod:Gr.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return Gr.credentialFromTaggedObject(e)}static credentialFromError(e){return Gr.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return Gr.credential(n,r)}catch{return null}}}Gr.TWITTER_SIGN_IN_METHOD="twitter.com";Gr.PROVIDER_ID="twitter.com";/**
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
 */async function D2(t,e){return tw(t,"POST","/v1/accounts:signUp",Id(t,e))}/**
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
 */class oi{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,s=!1){const a=await Di._fromIdTokenResponse(e,r,s),u=kv(r);return new oi({user:a,providerId:u,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const s=kv(r);return new oi({user:e,providerId:s,_tokenResponse:r,operationType:n})}}function kv(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
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
 */async function k2(t){var e;const n=Jo(t);if(await n._initializationPromise,!((e=n.currentUser)===null||e===void 0)&&e.isAnonymous)return new oi({user:n.currentUser,providerId:null,operationType:"signIn"});const r=await D2(n,{returnSecureToken:!0}),s=await oi._fromIdTokenResponse(n,"signIn",r,!0);return await n._updateCurrentUser(s.user),s}/**
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
 */class ju extends Rr{constructor(e,n,r,s){var a;super(n.code,n.message),this.operationType=r,this.user=s,Object.setPrototypeOf(this,ju.prototype),this.customData={appName:e.name,tenantId:(a=e.tenantId)!==null&&a!==void 0?a:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,s){return new ju(e,n,r,s)}}function _w(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(a=>{throw a.code==="auth/multi-factor-auth-required"?ju._fromErrorAndOperation(t,a,e,r):a})}async function P2(t,e,n=!1){const r=await ko(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return oi._forOperation(t,"link",r)}/**
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
 */async function L2(t,e,n=!1){const{auth:r}=t,s="reauthenticate";try{const a=await ko(t,_w(r,s,e,t),n);oe(a.idToken,r,"internal-error");const u=Td(a.idToken);oe(u,r,"internal-error");const{sub:h}=u;return oe(t.uid===h,r,"user-mismatch"),oi._forOperation(t,s,a)}catch(a){throw(a==null?void 0:a.code)==="auth/user-not-found"&&Ar(r,"user-mismatch"),a}}/**
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
 */async function M2(t,e,n=!1){const r="signIn",s=await _w(t,r,e),a=await oi._fromIdTokenResponse(t,r,s);return n||await t._updateCurrentUser(a.user),a}function F2(t,e,n,r){return Vn(t).onIdTokenChanged(e,n,r)}function U2(t,e,n){return Vn(t).beforeAuthStateChanged(e,n)}const qu="__sak";/**
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
 */class ww{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(qu,"1"),this.storage.removeItem(qu),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
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
 */function B2(){const t=Mt();return bd(t)||Ol(t)}const $2=1e3,V2=10;class Ew extends ww{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=B2()&&v2(),this.fallbackToPolling=hw(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),s=this.localCache[n];r!==s&&e(n,s,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((u,h,f)=>{this.notifyListeners(u,f)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const u=this.storage.getItem(r);if(e.newValue!==u)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const s=()=>{const u=this.storage.getItem(r);!n&&this.localCache[r]===u||this.notifyListeners(r,u)},a=this.storage.getItem(r);m2()&&a!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,V2):s()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},$2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ew.type="LOCAL";const H2=Ew;/**
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
 */class Iw extends ww{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Iw.type="SESSION";const Tw=Iw;/**
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
 */function W2(t){return Promise.all(t.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
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
 */class Nl{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(s=>s.isListeningto(e));if(n)return n;const r=new Nl(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:s,data:a}=n.data,u=this.handlersMap[s];if(!(u!=null&&u.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:s});const h=Array.from(u).map(async p=>p(n.origin,a)),f=await W2(h);n.ports[0].postMessage({status:"done",eventId:r,eventType:s,response:f})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Nl.receivers=[];/**
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
 */function Ad(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
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
 */class z2{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let a,u;return new Promise((h,f)=>{const p=Ad("",20);s.port1.start();const v=setTimeout(()=>{f(new Error("unsupported_event"))},r);u={messageChannel:s,onMessage(E){const A=E;if(A.data.eventId===p)switch(A.data.status){case"ack":clearTimeout(v),a=setTimeout(()=>{f(new Error("timeout"))},3e3);break;case"done":clearTimeout(a),h(A.data.response);break;default:clearTimeout(v),clearTimeout(a),f(new Error("invalid_response"));break}}},this.handlers.add(u),s.port1.addEventListener("message",u.onMessage),this.target.postMessage({eventType:e,eventId:p,data:n},[s.port2])}).finally(()=>{u&&this.removeMessageHandler(u)})}}/**
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
 */function Zn(){return window}function K2(t){Zn().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */function bw(){return typeof Zn().WorkerGlobalScope<"u"&&typeof Zn().importScripts=="function"}async function j2(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function q2(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function G2(){return bw()?self:null}/**
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
 */const Aw="firebaseLocalStorageDb",X2=1,Gu="firebaseLocalStorage",Cw="fbase_key";class ea{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Dl(t,e){return t.transaction([Gu],e?"readwrite":"readonly").objectStore(Gu)}function Q2(){const t=indexedDB.deleteDatabase(Aw);return new ea(t).toPromise()}function af(){const t=indexedDB.open(Aw,X2);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(Gu,{keyPath:Cw})}catch(s){n(s)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(Gu)?e(r):(r.close(),await Q2(),e(await af()))})})}async function Pv(t,e,n){const r=Dl(t,!0).put({[Cw]:e,value:n});return new ea(r).toPromise()}async function Y2(t,e){const n=Dl(t,!1).get(e),r=await new ea(n).toPromise();return r===void 0?null:r.value}function Lv(t,e){const n=Dl(t,!0).delete(e);return new ea(n).toPromise()}const J2=800,Z2=3;class Sw{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await af(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Z2)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return bw()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Nl._getInstance(G2()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await j2(),!this.activeServiceWorker)return;this.sender=new z2(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((e=r[0])===null||e===void 0)&&e.fulfilled&&!((n=r[0])===null||n===void 0)&&n.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||q2()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await af();return await Pv(e,qu,"1"),await Lv(e,qu),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Pv(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Y2(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Lv(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const a=Dl(s,!1).getAll();return new ea(a).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:s,value:a}of e)r.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(a)&&(this.notifyListeners(s,a),n.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!r.has(s)&&(this.notifyListeners(s,null),n.push(s));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const s of Array.from(r))s(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),J2)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Sw.type="LOCAL";const eL=Sw;new Qo(3e4,6e4);/**
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
 */function tL(t,e){return e?yr(e):(oe(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
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
 */class Cd extends vw{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return _s(e,this._buildIdpRequest())}_linkToIdToken(e,n){return _s(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return _s(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nL(t){return M2(t.auth,new Cd(t),t.bypassAuthState)}function rL(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),L2(n,new Cd(t),t.bypassAuthState)}async function iL(t){const{auth:e,user:n}=t;return oe(n,e,"internal-error"),P2(n,new Cd(t),t.bypassAuthState)}/**
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
 */class Rw{constructor(e,n,r,s,a=!1){this.auth=e,this.resolver=r,this.user=s,this.bypassAuthState=a,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:s,tenantId:a,error:u,type:h}=e;if(u){this.reject(u);return}const f={auth:this.auth,requestUri:n,sessionId:r,tenantId:a||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(h)(f))}catch(p){this.reject(p)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nL;case"linkViaPopup":case"linkViaRedirect":return iL;case"reauthViaPopup":case"reauthViaRedirect":return rL;default:Ar(this.auth,"internal-error")}}resolve(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Cr(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
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
 */const sL=new Qo(2e3,1e4);class cs extends Rw{constructor(e,n,r,s,a){super(e,n,s,a),this.provider=r,this.authWindow=null,this.pollId=null,cs.currentPopupAction&&cs.currentPopupAction.cancel(),cs.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return oe(e,this.auth,"internal-error"),e}async onExecution(){Cr(this.filter.length===1,"Popup operations only handle one event");const e=Ad();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(Jn(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(Jn(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,cs.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(Jn(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,sL.get())};e()}}cs.currentPopupAction=null;/**
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
 */const oL="pendingRedirect",mu=new Map;class aL extends Rw{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r),this.eventId=null}async execute(){let e=mu.get(this.auth._key());if(!e){try{const r=await uL(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}mu.set(this.auth._key(),e)}return this.bypassAuthState||mu.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function uL(t,e){const n=hL(e),r=cL(t);if(!await r._isAvailable())return!1;const s=await r._get(n)==="true";return await r._remove(n),s}function lL(t,e){mu.set(t._key(),e)}function cL(t){return yr(t._redirectPersistence)}function hL(t){return gu(oL,t.config.apiKey,t.name)}async function fL(t,e,n=!1){const r=Jo(t),s=tL(r,e),u=await new aL(r,s,n).execute();return u&&!n&&(delete u.user._redirectEventId,await r._persistUserIfCurrent(u.user),await r._setRedirectUser(null,e)),u}/**
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
 */const dL=10*60*1e3;class pL{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!gL(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!xw(e)){const s=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(Jn(this.auth,s))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=dL&&this.cachedEventUids.clear(),this.cachedEventUids.has(Mv(e))}saveEventToCache(e){this.cachedEventUids.add(Mv(e)),this.lastProcessedEventTime=Date.now()}}function Mv(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function xw({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function gL(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return xw(t);default:return!1}}/**
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
 */async function mL(t,e={}){return Yo(t,"GET","/v1/projects",e)}/**
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
 */const vL=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,yL=/^https?/;async function _L(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mL(t);for(const n of e)try{if(wL(n))return}catch{}Ar(t,"unauthorized-domain")}function wL(t){const e=of(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const u=new URL(t);return u.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&u.hostname===r}if(!yL.test(n))return!1;if(vL.test(t))return r===t;const s=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const EL=new Qo(3e4,6e4);function Fv(){const t=Zn().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function IL(t){return new Promise((e,n)=>{var r,s,a;function u(){Fv(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Fv(),n(Jn(t,"network-request-failed"))},timeout:EL.get()})}if(!((s=(r=Zn().gapi)===null||r===void 0?void 0:r.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((a=Zn().gapi)===null||a===void 0)&&a.load)u();else{const h=_2("iframefcb");return Zn()[h]=()=>{gapi.load?u():n(Jn(t,"network-request-failed"))},gw(`https://apis.google.com/js/api.js?onload=${h}`).catch(f=>n(f))}}).catch(e=>{throw vu=null,e})}let vu=null;function TL(t){return vu=vu||IL(t),vu}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const bL=new Qo(5e3,15e3),AL="__/auth/iframe",CL="emulator/auth/iframe",SL={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},RL=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xL(t){const e=t.config;oe(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ed(e,CL):`https://${t.config.authDomain}/${AL}`,r={apiKey:e.apiKey,appName:t.name,v:Ns},s=RL.get(t.config.apiHost);s&&(r.eid=s);const a=t._getFrameworks();return a.length&&(r.fw=a.join(",")),`${n}?${Mo(r).slice(1)}`}async function OL(t){const e=await TL(t),n=Zn().gapi;return oe(n,t,"internal-error"),e.open({where:document.body,url:xL(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:SL,dontclear:!0},r=>new Promise(async(s,a)=>{await r.restyle({setHideOnLeave:!1});const u=Jn(t,"network-request-failed"),h=Zn().setTimeout(()=>{a(u)},bL.get());function f(){Zn().clearTimeout(h),s(r)}r.ping(f).then(f,()=>{a(u)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
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
 */const NL={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},DL=500,kL=600,PL="_blank",LL="http://localhost";class Uv{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ML(t,e,n,r=DL,s=kL){const a=Math.max((window.screen.availHeight-s)/2,0).toString(),u=Math.max((window.screen.availWidth-r)/2,0).toString();let h="";const f=Object.assign(Object.assign({},NL),{width:r.toString(),height:s.toString(),top:a,left:u}),p=Mt().toLowerCase();n&&(h=ow(p)?PL:n),sw(p)&&(e=e||LL,f.scrollbars="yes");const v=Object.entries(f).reduce((A,[L,z])=>`${A}${L}=${z},`,"");if(g2(p)&&h!=="_self")return FL(e||"",h),new Uv(null);const E=window.open(e||"",h,v);oe(E,t,"popup-blocked");try{E.focus()}catch{}return new Uv(E)}function FL(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
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
 */const UL="__/auth/handler",BL="emulator/auth/handler",$L=encodeURIComponent("fac");async function Bv(t,e,n,r,s,a){oe(t.config.authDomain,t,"auth-domain-config-required"),oe(t.config.apiKey,t,"invalid-api-key");const u={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ns,eventId:s};if(e instanceof yw){e.setDefaultLanguage(t.languageCode),u.providerId=e.providerId||"",aO(e.getCustomParameters())||(u.customParameters=JSON.stringify(e.getCustomParameters()));for(const[v,E]of Object.entries(a||{}))u[v]=E}if(e instanceof Zo){const v=e.getScopes().filter(E=>E!=="");v.length>0&&(u.scopes=v.join(","))}t.tenantId&&(u.tid=t.tenantId);const h=u;for(const v of Object.keys(h))h[v]===void 0&&delete h[v];const f=await t._getAppCheckToken(),p=f?`#${$L}=${encodeURIComponent(f)}`:"";return`${VL(t)}?${Mo(h).slice(1)}${p}`}function VL({config:t}){return t.emulator?Ed(t,BL):`https://${t.authDomain}/${UL}`}/**
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
 */const _h="webStorageSupport";class HL{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Tw,this._completeRedirectFn=fL,this._overrideRedirectResult=lL}async _openPopup(e,n,r,s){var a;Cr((a=this.eventManagers[e._key()])===null||a===void 0?void 0:a.manager,"_initialize() not called before _openPopup()");const u=await Bv(e,n,r,of(),s);return ML(e,u,Ad())}async _openRedirect(e,n,r,s){await this._originValidation(e);const a=await Bv(e,n,r,of(),s);return K2(a),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:s,promise:a}=this.eventManagers[n];return s?Promise.resolve(s):(Cr(a,"If manager is not set, promise should be"),a)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await OL(e),r=new pL(e);return n.register("authEvent",s=>(oe(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:r.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(_h,{type:_h},s=>{var a;const u=(a=s==null?void 0:s[0])===null||a===void 0?void 0:a[_h];u!==void 0&&n(!!u),Ar(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=_L(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return hw()||bd()||Ol()}}const WL=HL;var $v="@firebase/auth",Vv="0.23.1";/**
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
 */class zL{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{e((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);n&&(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){oe(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
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
 */function KL(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function jL(t){Es(new ki("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),a=e.getProvider("app-check-internal"),{apiKey:u,authDomain:h}=r.options;oe(u&&!u.includes(":"),"invalid-api-key",{appName:r.name}),oe(!(h!=null&&h.includes(":")),"argument-error",{appName:r.name});const f={apiKey:u,authDomain:h,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:fw(t)},p=new A2(r,s,a,f);return S2(p,n),p},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),Es(new ki("auth-internal",e=>{const n=Jo(e.getProvider("auth").getImmediate());return(r=>new zL(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Zr($v,Vv,KL(t)),Zr($v,Vv,"esm2017")}/**
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
 */const qL=5*60,GL=zy("authIdTokenMaxAge")||qL;let Hv=null;const XL=t=>async e=>{const n=e&&await e.getIdTokenResult(),r=n&&(new Date().getTime()-Date.parse(n.issuedAtTime))/1e3;if(r&&r>GL)return;const s=n==null?void 0:n.token;Hv!==s&&(Hv=s,await fetch(t,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function QL(t=Gy()){const e=Lf(t,"auth");if(e.isInitialized())return e.getImmediate();const n=C2(t,{popupRedirectResolver:WL,persistence:[eL,H2,Tw]}),r=zy("authTokenSyncURL");if(r){const a=XL(r);U2(n,a,()=>a(n.currentUser)),F2(n,u=>a(u))}const s=Wy("auth");return s&&R2(n,`http://${s}`),n}jL("Browser");var uf={},YL={get exports(){return uf},set exports(t){uf=t}};/*!
 * Toastify js 1.12.0
 * https://github.com/apvarun/toastify-js
 * @license MIT licensed
 *
 * Copyright (C) 2018 Varun A P
 */(function(t){(function(e,n){t.exports?t.exports=n():e.Toastify=n()})(os,function(e){var n=function(u){return new n.lib.init(u)},r="1.12.0";n.defaults={oldestFirst:!0,text:"Toastify is awesome!",node:void 0,duration:3e3,selector:void 0,callback:function(){},destination:void 0,newWindow:!1,close:!1,gravity:"toastify-top",positionLeft:!1,position:"",backgroundColor:"",avatar:"",className:"",stopOnFocus:!0,onClick:function(){},offset:{x:0,y:0},escapeMarkup:!0,ariaLive:"polite",style:{background:""}},n.lib=n.prototype={toastify:r,constructor:n,init:function(u){return u||(u={}),this.options={},this.toastElement=null,this.options.text=u.text||n.defaults.text,this.options.node=u.node||n.defaults.node,this.options.duration=u.duration===0?0:u.duration||n.defaults.duration,this.options.selector=u.selector||n.defaults.selector,this.options.callback=u.callback||n.defaults.callback,this.options.destination=u.destination||n.defaults.destination,this.options.newWindow=u.newWindow||n.defaults.newWindow,this.options.close=u.close||n.defaults.close,this.options.gravity=u.gravity==="bottom"?"toastify-bottom":n.defaults.gravity,this.options.positionLeft=u.positionLeft||n.defaults.positionLeft,this.options.position=u.position||n.defaults.position,this.options.backgroundColor=u.backgroundColor||n.defaults.backgroundColor,this.options.avatar=u.avatar||n.defaults.avatar,this.options.className=u.className||n.defaults.className,this.options.stopOnFocus=u.stopOnFocus===void 0?n.defaults.stopOnFocus:u.stopOnFocus,this.options.onClick=u.onClick||n.defaults.onClick,this.options.offset=u.offset||n.defaults.offset,this.options.escapeMarkup=u.escapeMarkup!==void 0?u.escapeMarkup:n.defaults.escapeMarkup,this.options.ariaLive=u.ariaLive||n.defaults.ariaLive,this.options.style=u.style||n.defaults.style,u.backgroundColor&&(this.options.style.background=u.backgroundColor),this},buildToast:function(){if(!this.options)throw"Toastify is not initialized";var u=document.createElement("div");u.className="toastify on "+this.options.className,this.options.position?u.className+=" toastify-"+this.options.position:this.options.positionLeft===!0?(u.className+=" toastify-left",console.warn("Property `positionLeft` will be depreciated in further versions. Please use `position` instead.")):u.className+=" toastify-right",u.className+=" "+this.options.gravity,this.options.backgroundColor&&console.warn('DEPRECATION NOTICE: "backgroundColor" is being deprecated. Please use the "style.background" property.');for(var h in this.options.style)u.style[h]=this.options.style[h];if(this.options.ariaLive&&u.setAttribute("aria-live",this.options.ariaLive),this.options.node&&this.options.node.nodeType===Node.ELEMENT_NODE)u.appendChild(this.options.node);else if(this.options.escapeMarkup?u.innerText=this.options.text:u.innerHTML=this.options.text,this.options.avatar!==""){var f=document.createElement("img");f.src=this.options.avatar,f.className="toastify-avatar",this.options.position=="left"||this.options.positionLeft===!0?u.appendChild(f):u.insertAdjacentElement("afterbegin",f)}if(this.options.close===!0){var p=document.createElement("button");p.type="button",p.setAttribute("aria-label","Close"),p.className="toast-close",p.innerHTML="&#10006;",p.addEventListener("click",function(X){X.stopPropagation(),this.removeElement(this.toastElement),window.clearTimeout(this.toastElement.timeOutValue)}.bind(this));var v=window.innerWidth>0?window.innerWidth:screen.width;(this.options.position=="left"||this.options.positionLeft===!0)&&v>360?u.insertAdjacentElement("afterbegin",p):u.appendChild(p)}if(this.options.stopOnFocus&&this.options.duration>0){var E=this;u.addEventListener("mouseover",function(X){window.clearTimeout(u.timeOutValue)}),u.addEventListener("mouseleave",function(){u.timeOutValue=window.setTimeout(function(){E.removeElement(u)},E.options.duration)})}if(typeof this.options.destination<"u"&&u.addEventListener("click",function(X){X.stopPropagation(),this.options.newWindow===!0?window.open(this.options.destination,"_blank"):window.location=this.options.destination}.bind(this)),typeof this.options.onClick=="function"&&typeof this.options.destination>"u"&&u.addEventListener("click",function(X){X.stopPropagation(),this.options.onClick()}.bind(this)),typeof this.options.offset=="object"){var A=s("x",this.options),L=s("y",this.options),z=this.options.position=="left"?A:"-"+A,B=this.options.gravity=="toastify-top"?L:"-"+L;u.style.transform="translate("+z+","+B+")"}return u},showToast:function(){this.toastElement=this.buildToast();var u;if(typeof this.options.selector=="string"?u=document.getElementById(this.options.selector):this.options.selector instanceof HTMLElement||typeof ShadowRoot<"u"&&this.options.selector instanceof ShadowRoot?u=this.options.selector:u=document.body,!u)throw"Root element is not defined";var h=n.defaults.oldestFirst?u.firstChild:u.lastChild;return u.insertBefore(this.toastElement,h),n.reposition(),this.options.duration>0&&(this.toastElement.timeOutValue=window.setTimeout(function(){this.removeElement(this.toastElement)}.bind(this),this.options.duration)),this},hideToast:function(){this.toastElement.timeOutValue&&clearTimeout(this.toastElement.timeOutValue),this.removeElement(this.toastElement)},removeElement:function(u){u.className=u.className.replace(" on",""),window.setTimeout(function(){this.options.node&&this.options.node.parentNode&&this.options.node.parentNode.removeChild(this.options.node),u.parentNode&&u.parentNode.removeChild(u),this.options.callback.call(u),n.reposition()}.bind(this),400)}},n.reposition=function(){for(var u={top:15,bottom:15},h={top:15,bottom:15},f={top:15,bottom:15},p=document.getElementsByClassName("toastify"),v,E=0;E<p.length;E++){a(p[E],"toastify-top")===!0?v="toastify-top":v="toastify-bottom";var A=p[E].offsetHeight;v=v.substr(9,v.length-1);var L=15,z=window.innerWidth>0?window.innerWidth:screen.width;z<=360?(p[E].style[v]=f[v]+"px",f[v]+=A+L):a(p[E],"toastify-left")===!0?(p[E].style[v]=u[v]+"px",u[v]+=A+L):(p[E].style[v]=h[v]+"px",h[v]+=A+L)}return this};function s(u,h){return h.offset[u]?isNaN(h.offset[u])?h.offset[u]:h.offset[u]+"px":"0px"}function a(u,h){return!u||typeof h!="string"?!1:!!(u.className&&u.className.trim().split(/\s+/gi).indexOf(h)>-1)}return n.lib.init.prototype=n.lib,n})})(YL);const JL=uf;const ZL=`*[data-v-885d82be]{box-sizing:border-box}a[data-v-885d82be]:link{color:var(--gf-blue)}div.trivia-container[data-v-885d82be]{--padding: 1em;--base-gray: rgb(65, 65, 65);--button-bg-color: rgb(173, 200, 237);--button-text-color: rgb(41, 60, 112);--gf-blue: rgb(41, 60, 112);--footer-text: rgb(205, 205, 205);--light-gray: rgb(89 89 89);background-color:#deecff;width:500px;max-width:100%;font-family:Arial,Helvetica Neue,Helvetica,sans-serif;position:relative}h1[data-v-885d82be],h2[data-v-885d82be]{margin:0}header[data-v-885d82be]{display:flex;align-items:center;justify-content:space-between;gap:10px;padding:var(--padding)}label[data-v-885d82be]{display:block}.options[data-v-885d82be]{padding:var(--padding)}.overlay[data-v-885d82be]{padding:var(--padding);position:absolute;background-color:#fff;top:0;right:0;left:0;bottom:-80px;display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:100}.overlay>.wrapper[data-v-885d82be]{margin:calc(var(--padding) * 2);padding:calc(var(--padding) * 2);border-width:1px;border-style:solid;border-color:var(--button-bg-color);box-shadow:10px 10px 5px #5d5d5d}button[data-v-885d82be]{text-transform:capitalize;font-size:1.5em;cursor:pointer;width:100%;margin-bottom:calc(var(--padding) / 2);display:block;border:none;padding:1em;background-color:var(--button-bg-color);color:var(--button-text-color);position:relative}button[data-v-885d82be]:hover{background-color:var(--gf-blue);color:#bbe4fa}.revealed[data-v-885d82be],.revealed[data-v-885d82be]:hover{transition:all .5s;opacity:.45;background-color:var(--button-bg-color);color:var(--button-text-color)}.revealed.correct[data-v-885d82be],.revealed.correct[data-v-885d82be]:hover{transition:all .5s;opacity:1;background-color:var(--gf-blue);color:#fff}.revealed[data-v-885d82be]:after{position:absolute;left:20px;font-size:2em;top:15px}.revealed.correct[data-v-885d82be]:after{width:40px;content:url(data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjAgMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEwIDBDNC41IDAgMCA0LjUgMCAxMHM0LjUgMTAgMTAgMTAgMTAtNC41IDEwLTEwUzE1LjUgMCAxMCAwWk04IDE1bC01LTUgMS40LTEuNEw4IDEyLjJsNy42LTcuNkwxNyA2bC05IDlaIiBmaWxsPSIjZmZmZmZmIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsYXNzPSJmaWxsLTAwMDAwMCI+PC9wYXRoPjwvc3ZnPg==)}#menu-container[data-v-885d82be]{display:flex;align-items:center;gap:20px;margin-bottom:1em}#menu-icon[data-v-885d82be],#close-icon[data-v-885d82be]{width:10%;cursor:pointer}footer>small[data-v-885d82be]{width:90%}footer[data-v-885d82be]{position:absolute;height:80px;padding:var(--padding);background-color:var(--base-gray);color:var(--footer-text);transition:all .5s;left:0px;right:0px;bottom:-80px;z-index:10}footer.open[data-v-885d82be]{height:500px}footer a[data-v-885d82be],a[data-v-885d82be]:visited{color:var(--footer-text)}#leaderboard[data-v-885d82be]{color:var(--footer-text);border-top:1px solid var(--light-gray);height:90%;overflow-y:scroll}#leaderboard table[data-v-885d82be]{width:100%;border-collapse:collapse}#leaderboard table th[data-v-885d82be]{padding:.5em;text-align:left}#leaderboard tbody td[data-v-885d82be]{padding:.5em}#leaderboard tbody tr[data-v-885d82be]:nth-child(odd){background-color:#ffffff1a}#leaderboard h2[data-v-885d82be]{margin-top:1em;text-align:center}
`,eM=(t,e)=>{const n=t.__vccOpts||t;for(const[r,s]of e)n[r]=s;return n},tM={apiKey:"AIzaSyD8XNm6JuPn_JvB-mOkZYF1lntXl9JE0Ug",authDomain:"getgameform.web.app",projectId:"getgameform",appId:"1:631880925853:web:443dea65019c7f380b4a74",measurementId:"G-JSJEG57E3C"},nM=qy(tM),rM=MP(nM),wh=QL(),iM={props:{answers:{type:String,required:!0},time:{type:Number,required:!1,default:30},dataId:{type:String,required:!1}},data(){return{answersArray:[],answersArrayShuffled:[],answer:null,seconds:Number(this.time),timer:null,revealed:!1,overlay:!0,points:0,auth:!1,leaderboard:!1,leaders:[]}},methods:{timerStart(){this.overlay=!1,this.timer=setInterval(()=>{this.seconds>0?this.seconds-=1:this.checkAnswer()},1e3)},timerStop(){console.log("Turning off timer"),clearInterval(this.timer)},checkAnswer(t){let e=t===this.answersArray[0];this.dataId&&this.auth&&this.setScore(e?100:0),this.toast((e?"Correct!":"Incorrect!")+" Click to view the leaderboard.",()=>{this.leaderboard=!0}),this.timerStop(),this.revealed=!0},async setScore(t){this.points=t*this.seconds;try{const e=await GP(kP(rM,"scores"),{assessment_id:this.dataId,host:location.host,path:location.pathname,score:this.points,uid:this.auth.currentUser.uid,submitted:new Date});console.log("Document written with ID: ",e.id),this.getLeaders()}catch(e){console.error("Error adding document: ",e)}},async getLeaders(){let e=await(await fetch(`https://getgameform.com/api/leaderboard?id=${this.dataId}&host=${location.host}&path=${location.pathname}`)).json();this.leaders=wo.orderBy(e,["score","desc"])},toast(t,e=null){JL({text:t,duration:5e3,gravity:"top",position:"center",stopOnFocus:!0,style:{background:"rgb(65, 65, 65)","font-family":"Arial, Helvetica, sans-serif"},onClick:e}).showToast()}},mounted(){this.answersArray=this.answers.split(","),this.answersArrayShuffled=wo.shuffle(this.answersArray),k2(wh).then(()=>{console.log(wh),this.auth=wh,this.getLeaders()}).catch(t=>{t.code,t.message})}},Ms=t=>(hR("data-v-885d82be"),t=t(),fR(),t),sM={class:"trivia-container"},oM={class:"options"},aM=["disabled","onClick"],uM={id:"menu-container"},lM=Ms(()=>Le("svg",{viewBox:"0 0 512 512",xmlns:"http://www.w3.org/2000/svg"},[Le("g",{"data-name":"Layer 2"},[Le("path",{d:"M201.55 160h109.27v32.41A54.63 54.63 0 0 1 256.19 247h0a54.63 54.63 0 0 1-54.63-54.63V160h-.01ZM193.68 306.63h125.01V352H193.68z",fill:"none",stroke:"#ffffff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"20px",class:"stroke-083b43"}),Le("path",{d:"M238.13 244.28v17.9a44.45 44.45 0 0 1-44.45 44.45h0V352h125v-45.37h0a44.45 44.45 0 0 1-44.45-44.45v-17.9M310.82 170.77h20.92A25.28 25.28 0 0 1 357 196.05h0a25.28 25.28 0 0 1-25.28 25.28h-29.2M201.18 170.77h-20.92A25.28 25.28 0 0 0 155 196.05h0a25.28 25.28 0 0 0 25.28 25.28h29.2",fill:"none",stroke:"#ffffff","stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"20px",class:"stroke-083b43"})])],-1)),cM=[lM],hM={viewBox:"0 0 48 48","xml:space":"preserve",xmlns:"http://www.w3.org/2000/svg",style:{width:"20px"}},fM=Ms(()=>Le("path",{fill:"#ffffff",d:"M47.998 4.247 43.758.002 24.001 19.758 4.245.002.004 4.247l19.754 19.754L.004 43.755l4.246 4.24 19.751-19.751 19.751 19.751 4.246-4.24-19.754-19.754z",class:"fill-241f20"},null,-1)),dM=[fM],pM=Ms(()=>Le("small",null,[Rf("A formative assessment courtesy of "),Le("a",{href:"https://getgameform.com/",target:"_blank"},"GameForm")],-1)),gM={key:0,id:"leaderboard"},mM=Ms(()=>Le("h2",{class:"align-center"},"Leaderboard",-1)),vM=Ms(()=>Le("thead",null,[Le("tr",null,[Le("th",null,"#"),Le("th",null,"Name"),Le("th",null,"Score")])],-1)),yM=["innerHTML"],_M={key:0,class:"overlay"},wM={class:"wrapper"},EM=Ms(()=>Le("h2",{style:{"margin-bottom":".5em"}},"Ready to Play?",-1));function IM(t,e,n,r,s,a){return Tn(),jn("div",sM,[Le("header",null,[Le("h1",null,[FR(t.$slots,"default",{},()=>[Rf("No question specified")],!0)]),Le("h2",null,Ka(s.seconds),1)]),Le("div",oM,[(Tn(!0),jn(en,null,pm(s.answersArrayShuffled,u=>(Tn(),jn("button",{class:po({correct:u===s.answersArray[0],revealed:s.revealed}),disabled:s.revealed,onClick:h=>a.checkAnswer(u)},Ka(u),11,aM))),256))]),Le("footer",{class:po({open:s.leaderboard})},[Le("section",uM,[s.leaderboard?Ja("",!0):(Tn(),jn("div",{key:0,id:"menu-icon",onClick:e[0]||(e[0]=u=>s.leaderboard=!0)},cM)),s.leaderboard?(Tn(),jn("div",{key:1,id:"close-icon",onClick:e[1]||(e[1]=u=>s.leaderboard=!1)},[(Tn(),jn("svg",hM,dM))])):Ja("",!0),pM]),s.leaderboard?(Tn(),jn("section",gM,[mM,Le("table",null,[vM,Le("tbody",null,[(Tn(!0),jn(en,null,pm(s.leaders,(u,h)=>(Tn(),jn("tr",null,[Le("td",null,Ka(h+1),1),Le("td",{innerHTML:u.uid==this.auth.currentUser.uid?"You!":"Anonymous Player"},null,8,yM),Le("td",null,Ka(u.score),1)]))),256))])])])):Ja("",!0)],2),s.overlay?(Tn(),jn("div",_M,[Le("div",wM,[EM,Le("button",{style:{"margin-bottom":"0"},onClick:e[2]||(e[2]=u=>a.timerStart())},"Start!")])])):Ja("",!0)])}const TM=eM(iM,[["render",IM],["styles",[ZL]],["__scopeId","data-v-885d82be"]]),bM=Lx(TM);customElements.define("gf-trivia",bM);

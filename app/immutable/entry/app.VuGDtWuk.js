import{s as C,h as q,o as U,j as A,t as j}from"../chunks/scheduler.CjuNoUbF.js";import{S as z,i as M,s as W,z as h,a as F,l as b,q as p,x as P,p as g,d as w,e as G,b as H,f as J,k as D,A as d,t as K,g as Q,o as X,y as L,B as E,c as v,j as I,n as y,r as R}from"../chunks/index.06OY3Qxx.js";const Y="modulepreload",Z=function(a,e){return new URL(a,e).href},O={},k=function(e,n,i){let s=Promise.resolve();if(n&&n.length>0){const c=document.getElementsByTagName("link");s=Promise.all(n.map(t=>{if(t=Z(t,i),t in O)return;O[t]=!0;const r=t.endsWith(".css"),l=r?'[rel="stylesheet"]':"";if(!!i)for(let _=c.length-1;_>=0;_--){const m=c[_];if(m.href===t&&(!r||m.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${l}`))return;const o=document.createElement("link");if(o.rel=r?"stylesheet":Y,r||(o.as="script",o.crossOrigin=""),o.href=t,document.head.appendChild(o),r)return new Promise((_,m)=>{o.addEventListener("load",_),o.addEventListener("error",()=>m(new Error(`Unable to preload CSS for ${t}`)))})}))}return s.then(()=>e()).catch(c=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=c,window.dispatchEvent(t),!t.defaultPrevented)throw c})},re={};function $(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],form:t[2]}}}return s&&(e=E(s,c(a)),a[12](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&y(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=E(s,c(t)),t[12](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[12](null),e&&R(e,t)}}}function x(a){let e,n,i;var s=a[1][0];function c(t,r){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return s&&(e=E(s,c(a)),a[11](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&y(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][0])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=E(s,c(t)),t[11](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};r&8&&(l.data=t[3]),r&8215&&(l.$$scope={dirty:r,ctx:t}),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[11](null),e&&R(e,t)}}}function ee(a){let e,n,i;var s=a[1][1];function c(t,r){return{props:{data:t[4],form:t[2]}}}return s&&(e=E(s,c(a)),a[10](e)),{c(){e&&v(e.$$.fragment),n=h()},l(t){e&&I(e.$$.fragment,t),n=h()},m(t,r){e&&y(e,t,r),b(t,n,r),i=!0},p(t,r){if(r&2&&s!==(s=t[1][1])){if(e){L();const l=e;p(l.$$.fragment,1,0,()=>{R(l,1)}),P()}s?(e=E(s,c(t)),t[10](e),v(e.$$.fragment),g(e.$$.fragment,1),y(e,n.parentNode,n)):e=null}else if(s){const l={};r&16&&(l.data=t[4]),r&4&&(l.form=t[2]),e.$set(l)}},i(t){i||(e&&g(e.$$.fragment,t),i=!0)},o(t){e&&p(e.$$.fragment,t),i=!1},d(t){t&&w(n),a[10](null),e&&R(e,t)}}}function T(a){let e,n=a[6]&&V(a);return{c(){e=G("div"),n&&n.c(),this.h()},l(i){e=H(i,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=J(e);n&&n.l(s),s.forEach(w),this.h()},h(){D(e,"id","svelte-announcer"),D(e,"aria-live","assertive"),D(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(i,s){b(i,e,s),n&&n.m(e,null)},p(i,s){i[6]?n?n.p(i,s):(n=V(i),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(i){i&&w(e),n&&n.d()}}}function V(a){let e;return{c(){e=K(a[7])},l(n){e=Q(n,a[7])},m(n,i){b(n,e,i)},p(n,i){i&128&&X(e,n[7])},d(n){n&&w(e)}}}function te(a){let e,n,i,s,c;const t=[x,$],r=[];function l(o,_){return o[1][1]?0:1}e=l(a),n=r[e]=t[e](a);let u=a[5]&&T(a);return{c(){n.c(),i=W(),u&&u.c(),s=h()},l(o){n.l(o),i=F(o),u&&u.l(o),s=h()},m(o,_){r[e].m(o,_),b(o,i,_),u&&u.m(o,_),b(o,s,_),c=!0},p(o,[_]){let m=e;e=l(o),e===m?r[e].p(o,_):(L(),p(r[m],1,1,()=>{r[m]=null}),P(),n=r[e],n?n.p(o,_):(n=r[e]=t[e](o),n.c()),g(n,1),n.m(i.parentNode,i)),o[5]?u?u.p(o,_):(u=T(o),u.c(),u.m(s.parentNode,s)):u&&(u.d(1),u=null)},i(o){c||(g(n),c=!0)},o(o){p(n),c=!1},d(o){o&&(w(i),w(s)),r[e].d(o),u&&u.d(o)}}}function ne(a,e,n){let{stores:i}=e,{page:s}=e,{constructors:c}=e,{components:t=[]}=e,{form:r}=e,{data_0:l=null}=e,{data_1:u=null}=e;q(i.page.notify);let o=!1,_=!1,m=null;U(()=>{const f=i.page.subscribe(()=>{o&&(n(6,_=!0),j().then(()=>{n(7,m=document.title||"untitled page")}))});return n(5,o=!0),f});function N(f){A[f?"unshift":"push"](()=>{t[1]=f,n(0,t)})}function S(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}function B(f){A[f?"unshift":"push"](()=>{t[0]=f,n(0,t)})}return a.$$set=f=>{"stores"in f&&n(8,i=f.stores),"page"in f&&n(9,s=f.page),"constructors"in f&&n(1,c=f.constructors),"components"in f&&n(0,t=f.components),"form"in f&&n(2,r=f.form),"data_0"in f&&n(3,l=f.data_0),"data_1"in f&&n(4,u=f.data_1)},a.$$.update=()=>{a.$$.dirty&768&&i.page.set(s)},[t,c,r,l,u,o,_,m,i,s,N,S,B]}class oe extends z{constructor(e){super(),M(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>k(()=>import("../nodes/0.DeqsbqP6.js"),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),()=>k(()=>import("../nodes/1.y9F0AjDe.js"),__vite__mapDeps([9,1,2,6,10,4,3,5,7]),import.meta.url),()=>k(()=>import("../nodes/2.PAmg2LNX.js"),__vite__mapDeps([11,1,2,6,3,4,5,7]),import.meta.url),()=>k(()=>import("../nodes/3.kiAfba0G.js"),__vite__mapDeps([12,1,2,3,4,5,6,13]),import.meta.url),()=>k(()=>import("../nodes/4.YoUSIMcx.js"),__vite__mapDeps([14,15,1,2,3,4,5,7,13]),import.meta.url),()=>k(()=>import("../nodes/5.oTPCnXJM.js"),__vite__mapDeps([16,15,1,2,3,4,5,7,13]),import.meta.url)],le=[],fe={"/":[2],"/user":[3],"/user/id/[slug]":[4],"/user/profiles/[slug]":[5]},ce={handleError:({error:a})=>{console.error(a)},reroute:()=>{}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../nodes/0.DeqsbqP6.js","../chunks/scheduler.CjuNoUbF.js","../chunks/index.06OY3Qxx.js","../chunks/fa-layers-text.svelte_svelte_type_style_lang.eyHp4rqf.js","../chunks/index.Vf-pRisw.js","../assets/fa-layers-text.s0U7qWGH.css","../chunks/paths.84Wr90NF.js","../chunks/Button.FADNUDtE.js","../assets/0.3R-qvwER.css","../nodes/1.y9F0AjDe.js","../chunks/entry.BVIVfaHk.js","../nodes/2.PAmg2LNX.js","../nodes/3.kiAfba0G.js","../chunks/Notification.WFPsu1oa.js","../nodes/4.YoUSIMcx.js","../chunks/UserStats.ofofNIgv.js","../nodes/5.oTPCnXJM.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}

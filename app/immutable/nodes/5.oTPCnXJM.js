import{S as b,U as k}from"../chunks/UserStats.ofofNIgv.js";import{s as S}from"../chunks/scheduler.CjuNoUbF.js";import{S as y,i as v,e as U,b as x,f as j,d as m,k as C,l as p,q as l,x as E,p as f,y as N,c as d,j as $,n as g,r as h,t as O,g as q,o as w}from"../chunks/index.06OY3Qxx.js";import{c as I}from"../chunks/fa-layers-text.svelte_svelte_type_style_lang.eyHp4rqf.js";import{N as P}from"../chunks/Notification.WFPsu1oa.js";const T=!1,z=async({params:r})=>{const t=r.slug;return b.getSteamUser("profiles",t)},Q=Object.freeze(Object.defineProperty({__proto__:null,load:z,prerender:T},Symbol.toStringTag,{value:"Module"}));function A(r){let t,s;return t=new k({props:{steamUser:r[0]}}),{c(){d(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){g(t,e,a),s=!0},p(e,a){const o={};a&1&&(o.steamUser=e[0]),t.$set(o)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){l(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function M(r){let t,s;return t=new P({props:{class:"bg-error",faIcon:I,$$slots:{default:[B]},$$scope:{ctx:r}}}),{c(){d(t.$$.fragment)},l(e){$(t.$$.fragment,e)},m(e,a){g(t,e,a),s=!0},p(e,a){const o={};a&3&&(o.$$scope={dirty:a,ctx:e}),t.$set(o)},i(e){s||(f(t.$$.fragment,e),s=!0)},o(e){l(t.$$.fragment,e),s=!1},d(e){h(t,e)}}}function B(r){let t=r[0].message+"",s;return{c(){s=O(t)},l(e){s=q(e,t)},m(e,a){p(e,s,a)},p(e,a){a&1&&t!==(t=e[0].message+"")&&w(s,t)},d(e){e&&m(s)}}}function D(r){let t,s,e,a;const o=[M,A],c=[];function _(n,i){return n[0].message?0:1}return s=_(r),e=c[s]=o[s](r),{c(){t=U("section"),e.c(),this.h()},l(n){t=x(n,"SECTION",{class:!0});var i=j(t);e.l(i),i.forEach(m),this.h()},h(){C(t,"class","min-h-screen mt-28")},m(n,i){p(n,t,i),c[s].m(t,null),a=!0},p(n,[i]){let u=s;s=_(n),s===u?c[s].p(n,i):(N(),l(c[u],1,1,()=>{c[u]=null}),E(),e=c[s],e?e.p(n,i):(e=c[s]=o[s](n),e.c()),f(e,1),e.m(t,null))},i(n){a||(f(e),a=!0)},o(n){l(e),a=!1},d(n){n&&m(t),c[s].d()}}}function F(r,t,s){let{data:e}=t;return r.$$set=a=>{"data"in a&&s(0,e=a.data)},[e]}class R extends y{constructor(t){super(),v(this,t,F,D,S,{data:0})}}export{R as component,Q as universal};

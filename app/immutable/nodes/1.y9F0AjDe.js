import{s as I,c as j}from"../chunks/scheduler.CjuNoUbF.js";import{S as x,i as N,s as k,e as B,t as b,c as O,h as T,d as m,a as H,b as q,f as w,g as $,j as y,k as C,l as E,m as f,n as z,o as S,p as A,q as D,r as F}from"../chunks/index.06OY3Qxx.js";import{b as G}from"../chunks/paths.84Wr90NF.js";import{s as J}from"../chunks/entry.BVIVfaHk.js";import{d as K,$ as L}from"../chunks/fa-layers-text.svelte_svelte_type_style_lang.eyHp4rqf.js";import{B as M}from"../chunks/Button.FADNUDtE.js";const P=()=>{const e=J;return{page:{subscribe:e.page.subscribe},navigating:{subscribe:e.navigating.subscribe},updated:e.updated}},Q={subscribe(e){return P().page.subscribe(e)}};function R(e){let n=e[1]("actions.returnHome")+"",r;return{c(){r=b(n)},l(t){r=$(t,n)},m(t,a){E(t,r,a)},p(t,a){a&2&&n!==(n=t[1]("actions.returnHome")+"")&&S(r,n)},d(t){t&&m(r)}}}function U(e){let n,r,t,a,o=e[1]("misc.httpError")+"",_,g,p=e[0].status+"",d,v,i,l;return document.title=n=e[0].status,i=new M({props:{class:"btn-accent",faIcon:K,link:G+"/",$$slots:{default:[R]},$$scope:{ctx:e}}}),{c(){r=k(),t=B("section"),a=B("h2"),_=b(o),g=b(" - "),d=b(p),v=k(),O(i.$$.fragment),this.h()},l(s){T("svelte-1pmtc3j",document.head).forEach(m),r=H(s),t=q(s,"SECTION",{class:!0});var u=w(t);a=q(u,"H2",{class:!0});var h=w(a);_=$(h,o),g=$(h," - "),d=$(h,p),h.forEach(m),v=H(u),y(i.$$.fragment,u),u.forEach(m),this.h()},h(){C(a,"class","mb-6"),C(t,"class","min-h-screen flex flex-col justify-center items-center text-center")},m(s,c){E(s,r,c),E(s,t,c),f(t,a),f(a,_),f(a,g),f(a,d),f(t,v),z(i,t,null),l=!0},p(s,[c]){(!l||c&1)&&n!==(n=s[0].status)&&(document.title=n),(!l||c&2)&&o!==(o=s[1]("misc.httpError")+"")&&S(_,o),(!l||c&1)&&p!==(p=s[0].status+"")&&S(d,p);const u={};c&6&&(u.$$scope={dirty:c,ctx:s}),i.$set(u)},i(s){l||(A(i.$$.fragment,s),l=!0)},o(s){D(i.$$.fragment,s),l=!1},d(s){s&&(m(r),m(t)),F(i)}}}function V(e,n,r){let t,a;return j(e,Q,o=>r(0,t=o)),j(e,L,o=>r(1,a=o)),[t,a]}let st=class extends x{constructor(n){super(),N(this,n,V,U,I,{})}};export{st as component};

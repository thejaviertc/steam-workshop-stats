function m(){}function K(t,e){for(const n in e)t[n]=e[n];return t}function Q(t){return t&&typeof t=="object"&&typeof t.then=="function"}function L(t){return t()}function O(){return Object.create(null)}function g(t){t.forEach(L)}function P(t){return typeof t=="function"}function R(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let w;function bt(t,e){return w||(w=document.createElement("a")),w.href=e,t===w.href}function U(t){return Object.keys(t).length===0}function z(t,...e){if(t==null)return m;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function yt(t,e,n){t.$$.on_destroy.push(z(e,n))}function gt(t,e,n,r){if(t){const c=B(t,e,n,r);return t[0](c)}}function B(t,e,n,r){return t[1]&&r?K(n.ctx.slice(),t[1](r(e))):n.ctx}function xt(t,e,n,r){if(t[2]&&r){const c=t[2](r(n));if(e.dirty===void 0)return c;if(typeof c=="object"){const o=[],l=Math.max(e.dirty.length,c.length);for(let u=0;u<l;u+=1)o[u]=e.dirty[u]|c[u];return o}return e.dirty|c}return e.dirty}function $t(t,e,n,r,c,o){if(c){const l=B(e,n,r,o);t.p(l,c)}}function wt(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function kt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}let A=!1;function V(){A=!0}function X(){A=!1}function Y(t,e,n,r){for(;t<e;){const c=t+(e-t>>1);n(c)<=r?t=c+1:e=c}return t}function Z(t){if(t.hydrate_init)return;t.hydrate_init=!0;let e=t.childNodes;if(t.nodeName==="HEAD"){const i=[];for(let s=0;s<e.length;s++){const f=e[s];f.claim_order!==void 0&&i.push(f)}e=i}const n=new Int32Array(e.length+1),r=new Int32Array(e.length);n[0]=-1;let c=0;for(let i=0;i<e.length;i++){const s=e[i].claim_order,f=(c>0&&e[n[c]].claim_order<=s?c+1:Y(1,c,d=>e[n[d]].claim_order,s))-1;r[i]=n[f]+1;const a=f+1;n[a]=i,c=Math.max(a,c)}const o=[],l=[];let u=e.length-1;for(let i=n[c]+1;i!=0;i=r[i-1]){for(o.push(e[i-1]);u>=i;u--)l.push(e[u]);u--}for(;u>=0;u--)l.push(e[u]);o.reverse(),l.sort((i,s)=>i.claim_order-s.claim_order);for(let i=0,s=0;i<l.length;i++){for(;s<o.length&&l[i].claim_order>=o[s].claim_order;)s++;const f=s<o.length?o[s]:null;t.insertBefore(l[i],f)}}function tt(t,e){if(A){for(Z(t),(t.actual_end_child===void 0||t.actual_end_child!==null&&t.actual_end_child.parentNode!==t)&&(t.actual_end_child=t.firstChild);t.actual_end_child!==null&&t.actual_end_child.claim_order===void 0;)t.actual_end_child=t.actual_end_child.nextSibling;e!==t.actual_end_child?(e.claim_order!==void 0||e.parentNode!==t)&&t.insertBefore(e,t.actual_end_child):t.actual_end_child=e.nextSibling}else(e.parentNode!==t||e.nextSibling!==null)&&t.appendChild(e)}function vt(t,e,n){A&&!n?tt(t,e):(e.parentNode!==t||e.nextSibling!=n)&&t.insertBefore(e,n||null)}function et(t){t.parentNode.removeChild(t)}function Et(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function nt(t){return document.createElement(t)}function rt(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function C(t){return document.createTextNode(t)}function At(){return C(" ")}function jt(){return C("")}function Nt(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function St(t){return function(e){return e.preventDefault(),t.call(this,e)}}function ct(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function qt(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:ct(t,r,e[r])}function it(t){return Array.from(t.childNodes)}function st(t){t.claim_info===void 0&&(t.claim_info={last_index:0,total_claimed:0})}function F(t,e,n,r,c=!1){st(t);const o=(()=>{for(let l=t.claim_info.last_index;l<t.length;l++){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c||(t.claim_info.last_index=l),u}}for(let l=t.claim_info.last_index-1;l>=0;l--){const u=t[l];if(e(u)){const i=n(u);return i===void 0?t.splice(l,1):t[l]=i,c?i===void 0&&t.claim_info.last_index--:t.claim_info.last_index=l,u}}return r()})();return o.claim_order=t.claim_info.total_claimed,t.claim_info.total_claimed+=1,o}function H(t,e,n,r){return F(t,c=>c.nodeName===e,c=>{const o=[];for(let l=0;l<c.attributes.length;l++){const u=c.attributes[l];n[u.name]||o.push(u.name)}o.forEach(l=>c.removeAttribute(l))},()=>r(e))}function Tt(t,e,n){return H(t,e,n,nt)}function Ct(t,e,n){return H(t,e,n,rt)}function lt(t,e){return F(t,n=>n.nodeType===3,n=>{const r=""+e;if(n.data.startsWith(r)){if(n.data.length!==r.length)return n.splitText(r.length)}else n.data=r},()=>C(e),!0)}function Mt(t){return lt(t," ")}function Ot(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function Dt(t,e){t.value=e==null?"":e}function Lt(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Pt(t,e,n){t.classList[n?"add":"remove"](e)}function zt(t,e=document.body){return Array.from(e.querySelectorAll(t))}let $;function h(t){$=t}function j(){if(!$)throw new Error("Function called outside component initialization");return $}function Bt(t){j().$$.on_mount.push(t)}function Ft(t){j().$$.after_update.push(t)}function Ht(t){j().$$.on_destroy.push(t)}function It(t,e){const n=t.$$.callbacks[e.type];n&&n.slice().forEach(r=>r.call(this,e))}const x=[],D=[],v=[],S=[],I=Promise.resolve();let q=!1;function W(){q||(q=!0,I.then(M))}function Wt(){return W(),I}function T(t){v.push(t)}function Gt(t){S.push(t)}const N=new Set;let k=0;function M(){const t=$;do{for(;k<x.length;){const e=x[k];k++,h(e),ut(e.$$)}for(h(null),x.length=0,k=0;D.length;)D.pop()();for(let e=0;e<v.length;e+=1){const n=v[e];N.has(n)||(N.add(n),n())}v.length=0}while(x.length);for(;S.length;)S.pop()();q=!1,N.clear(),h(t)}function ut(t){if(t.fragment!==null){t.update(),g(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(T)}}const E=new Set;let p;function ot(){p={r:0,c:[],p}}function at(){p.r||g(p.c),p=p.p}function G(t,e){t&&t.i&&(E.delete(t),t.i(e))}function ft(t,e,n,r){if(t&&t.o){if(E.has(t))return;E.add(t),p.c.push(()=>{E.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}else r&&r()}function Jt(t,e){const n=e.token={};function r(c,o,l,u){if(e.token!==n)return;e.resolved=u;let i=e.ctx;l!==void 0&&(i=i.slice(),i[l]=u);const s=c&&(e.current=c)(i);let f=!1;e.block&&(e.blocks?e.blocks.forEach((a,d)=>{d!==o&&a&&(ot(),ft(a,1,1,()=>{e.blocks[d]===a&&(e.blocks[d]=null)}),at())}):e.block.d(1),s.c(),G(s,1),s.m(e.mount(),e.anchor),f=!0),e.block=s,e.blocks&&(e.blocks[o]=s),f&&M()}if(Q(t)){const c=j();if(t.then(o=>{h(c),r(e.then,1,e.value,o),h(null)},o=>{if(h(c),r(e.catch,2,e.error,o),h(null),!e.hasCatch)throw o}),e.current!==e.pending)return r(e.pending,0),!0}else{if(e.current!==e.then)return r(e.then,1,e.value,t),!0;e.resolved=t}}function Kt(t,e,n){const r=e.slice(),{resolved:c}=t;t.current===t.then&&(r[t.value]=c),t.current===t.catch&&(r[t.error]=c),t.block.p(r,n)}const Qt=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Rt(t,e){const n={},r={},c={$$scope:1};let o=t.length;for(;o--;){const l=t[o],u=e[o];if(u){for(const i in l)i in u||(r[i]=1);for(const i in u)c[i]||(n[i]=u[i],c[i]=1);t[o]=u}else for(const i in l)c[i]=1}for(const l in r)l in n||(n[l]=void 0);return n}function Ut(t){return typeof t=="object"&&t!==null?t:{}}function Vt(t,e,n){const r=t.$$.props[e];r!==void 0&&(t.$$.bound[r]=n,n(t.$$.ctx[r]))}function Xt(t){t&&t.c()}function Yt(t,e){t&&t.l(e)}function dt(t,e,n,r){const{fragment:c,on_mount:o,on_destroy:l,after_update:u}=t.$$;c&&c.m(e,n),r||T(()=>{const i=o.map(L).filter(P);l?l.push(...i):g(i),t.$$.on_mount=[]}),u.forEach(T)}function _t(t,e){const n=t.$$;n.fragment!==null&&(g(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function ht(t,e){t.$$.dirty[0]===-1&&(x.push(t),W(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Zt(t,e,n,r,c,o,l,u=[-1]){const i=$;h(t);const s=t.$$={fragment:null,ctx:null,props:o,update:m,not_equal:c,bound:O(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(i?i.$$.context:[])),callbacks:O(),dirty:u,skip_bound:!1,root:e.target||i.$$.root};l&&l(s.root);let f=!1;if(s.ctx=n?n(t,e.props||{},(a,d,..._)=>{const b=_.length?_[0]:d;return s.ctx&&c(s.ctx[a],s.ctx[a]=b)&&(!s.skip_bound&&s.bound[a]&&s.bound[a](b),f&&ht(t,a)),d}):[],s.update(),f=!0,g(s.before_update),s.fragment=r?r(s.ctx):!1,e.target){if(e.hydrate){V();const a=it(e.target);s.fragment&&s.fragment.l(a),a.forEach(et)}else s.fragment&&s.fragment.c();e.intro&&G(t.$$.fragment),dt(t,e.target,e.anchor,e.customElement),X(),M()}h(i)}class te{$destroy(){_t(this,1),this.$destroy=m}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const c=r.indexOf(n);c!==-1&&r.splice(c,1)}}$set(e){this.$$set&&!U(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const y=[];function mt(t,e){return{subscribe:pt(t,e).subscribe}}function pt(t,e=m){let n;const r=new Set;function c(u){if(R(t,u)&&(t=u,n)){const i=!y.length;for(const s of r)s[1](),y.push(s,t);if(i){for(let s=0;s<y.length;s+=2)y[s][0](y[s+1]);y.length=0}}}function o(u){c(u(t))}function l(u,i=m){const s=[u,i];return r.add(s),r.size===1&&(n=e(c)||m),u(t),()=>{r.delete(s),r.size===0&&(n(),n=null)}}return{set:c,update:o,subscribe:l}}function ee(t,e,n){const r=!Array.isArray(t),c=r?[t]:t,o=e.length<2;return mt(n,l=>{let u=!1;const i=[];let s=0,f=m;const a=()=>{if(s)return;f();const _=e(r?i[0]:i,l);o?l(_):f=P(_)?_:m},d=c.map((_,b)=>z(_,J=>{i[b]=J,s&=~(1<<b),u&&a()},()=>{s|=1<<b}));return u=!0,a(),function(){g(d),f()}})}export{Dt as $,pt as A,gt as B,$t as C,wt as D,xt as E,ee as F,tt as G,m as H,yt as I,rt as J,Ct as K,Pt as L,bt as M,Nt as N,Ht as O,It as P,$ as Q,K as R,te as S,qt as T,Rt as U,kt as V,D as W,Vt as X,Ut as Y,Gt as Z,zt as _,At as a,St as a0,g as a1,Qt as a2,Jt as a3,Kt as a4,Et as a5,vt as b,Mt as c,at as d,jt as e,G as f,ot as g,et as h,Zt as i,Ft as j,nt as k,Tt as l,it as m,ct as n,Bt as o,Lt as p,C as q,lt as r,R as s,ft as t,Ot as u,Xt as v,Yt as w,dt as x,_t as y,Wt as z};

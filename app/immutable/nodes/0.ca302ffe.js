import{s as Ke,r as at,c as Qe,d as st,u as ot,g as nt,e as rt,o as lt}from"../chunks/scheduler.4bee3635.js";import{S as Ye,i as Ze,g as i,r as ge,m as v,s as $,h as c,j as u,u as pe,n as b,f as r,c as _,k as l,a as ue,x as e,v as ve,y as Ve,o as T,d as ie,t as ce,w as be}from"../chunks/index.5c064847.js";import{m as Ce,z as it,O as ct,F as et,f as ut,X as tt,x as dt,a as ft,B as Pe,b as Xe,c as mt}from"../chunks/index.f32509e5.js";import{b as Be}from"../chunks/paths.998c351f.js";const ht=!0,ia=Object.freeze(Object.defineProperty({__proto__:null,prerender:ht},Symbol.toStringTag,{value:"Module"}));const gt="English",pt="Steam Workshop Stats",vt="See the number of views, subs, likes and more of your addons!",bt="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",$t={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},_t={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"Help Translating",enterProfileUrl:"Enter a Steam Profile URL",returnHome:"Return Home",getStats:"Get Stats",seeInSteam:"See it on Steam"},St={statsOf:"Stats of {username}",noAddons:"This user doesn't have any addons!",views:"Views",subscribers:"Subscribers",favorites:"Favorites",likes:"Likes",dislikes:"Dislikes",addons:"Addons",addonsOf:"Addons of {username}",graphs:"Graphs",graphsOf:"Graphs of {username}"},kt={disclaimer:"Disclaimer! This can take up to 30 seconds because the API is on a free hosting, so it has to wake up!"},Et={language:gt,title:pt,description:vt,disclaimer:bt,misc:$t,actions:_t,stats:St,notifications:kt},It="Español",Tt="Estadísticas de Steam Workshop",Lt="Observe el número de visitas, subs, likes y más de tus addons!",wt="Estadísticas de Steam Workshop es un hobby y no está afiliado con Steam o Valve. Steam y el logo de Steam son marcas registradas de Valve Corporation",Ut={httpError:"Ha ocurrido un error",links:"Enlaces",moreInfo:"Más Información",githubRepository:"Repositorio de Github",example:"Ejemplo:"},Ot={changeLanguage:"Cambia el Idioma",fetchUser:"Buscar un Usuario",trackMyStats:"Trackea mis Stats (Próximamente)",helpTranslating:"Ayuda a Traducir",enterProfileUrl:"Introduce la URL de un Perfil de Steam",returnHome:"Volver al Inicio",getStats:"Obtener Estadísticas",seeInSteam:"Ver en Steam"},yt={statsOf:"Estadísticas de {username}",noAddons:"¡Este usuario no tiene ningún addon!",views:"Visitas",subscribers:"Suscriptores",favorites:"Favoritos",likes:"Likes",dislikes:"Dislikes",addons:"Addons",addonsOf:"Addons de {username}",graphs:"Gráficos",graphsOf:"Gráficos de {username}"},At={disclaimer:"¡Atención! Si tarda un poco, es debido a que la API se está despertando. Si tarda más de 30 segundos, puede ser debido a un error."},Rt={language:It,title:Tt,description:Lt,disclaimer:wt,misc:Ut,actions:Ot,stats:yt,notifications:At},Vt="Brasileiro",Bt="Estatísticas de uma oficina da Steam",Ct="Estatísticas de um usuário em suas Oficinas da Steam",Gt="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",Pt={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},Nt={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"Nós ajude com a tradução",enterProfileUrl:"Insira a URL do perfil da Steam",returnHome:"Return Home",getStats:"Coletar Estatísticas",seeOnSteam:"Ver na Steam"},Dt={statsOf:"Estatística de {username}",noAddons:"Não há extensões disponíveis!",views:"Acessos",subscribers:"Subs",favorites:"Favoritos",likes:"Likes",dislikes:"Dislikes",addons:"Extensões",addonsOf:"Extensões de {username}",graphs:"Graphs",graphsOf:"Graphs of {username}"},Mt={disclaimer:"Atenção! se demorar por um tempo, é porque a API estava hibernando e demora um pouco a responder, se realmente demorar bastante é porque deve ter tido um erro."},jt={language:Vt,title:Bt,description:Ct,disclaimer:Gt,misc:Pt,actions:Nt,stats:Dt,notifications:Mt},Ft="แบบไทยๆ",Ht="สถิติ Steam Workshop",Wt="สถิติผลงานของผู้ใช้ใน Steam Workshop",zt="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",qt={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},xt={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"ช่วยแปลภาษา",enterProfileUrl:"ป้อน URL ของโปรไฟล์ Steam",returnHome:"Return Home",getStats:"ดูสถิติ",seeOnSteam:"ดูม็อดนี้บน Steam"},Xt={statsOf:"สถิติของ {username}",noAddons:"ไม่มีรายการม็อดให้แสดง!",views:"ผู้เยี่ยมชม",subscribers:"ผู้สมัครสมาชิก",favorites:"ผู้ที่ชื่นชอบ",likes:"คะแนนเชิงบวก",dislikes:"คะแนนเชิงลบ",addons:"ม็อดของ",addonsOf:"ม็อดของ {username}",graphs:"Graphs",graphsOf:"Graphs of {username}"},Jt={disclaimer:"คำชี้แจง! อาจใช้เวลาในการโหลดครู่หนึ่งเพื่อปลุก API หากใช้เวลานานเกินไปอาจมีข้อผิดพลาด"},Kt={language:Ft,title:Ht,description:Wt,disclaimer:zt,misc:qt,actions:xt,stats:Xt,notifications:Jt};Ce("en",Et);Ce("es",Rt);Ce("pt-BR",jt);Ce("th",Kt);let Ne=it();{const o=localStorage.getItem("lang");o?Ne=o:localStorage.setItem("lang",Ne)}ct({fallbackLocale:"en",initialLocale:Ne});function Qt(o){let s,n,t,f=o[0]("actions.changeLanguage")+"",g,A,d,U,R,j,x=o[0]("language",{locale:"en"})+"",V,de,G,S,P,X=o[0]("language",{locale:"es"})+"",N,te,z,O,B,k=o[0]("language",{locale:"pt-BR"})+"",J,fe,L,E,K,q=o[0]("language",{locale:"th"})+"",ae,Q,F,D,Y=o[0]("actions.helpTranslating")+"",M,I,se,$e;return t=new et({props:{class:"mr-2",icon:ut}}),{c(){s=i("div"),n=i("button"),ge(t.$$.fragment),g=v(f),A=$(),d=i("ul"),U=i("li"),R=i("button"),j=v("🇬🇧 "),V=v(x),de=$(),G=i("li"),S=i("button"),P=v("🇪🇸 "),N=v(X),te=$(),z=i("li"),O=i("button"),B=v("🇧🇷 "),J=v(k),fe=$(),L=i("li"),E=i("button"),K=v("🇹🇭 "),ae=v(q),Q=$(),F=i("li"),D=i("a"),M=v(Y),this.h()},l(h){s=c(h,"DIV",{class:!0});var p=u(s);n=c(p,"BUTTON",{tabindex:!0,class:!0});var Z=u(n);pe(t.$$.fragment,Z),g=b(Z,f),Z.forEach(r),A=_(p),d=c(p,"UL",{tabindex:!0,class:!0});var w=u(d);U=c(w,"LI",{});var _e=u(U);R=c(_e,"BUTTON",{class:!0});var H=u(R);j=b(H,"🇬🇧 "),V=b(H,x),H.forEach(r),_e.forEach(r),de=_(w),G=c(w,"LI",{});var oe=u(G);S=c(oe,"BUTTON",{class:!0});var ne=u(S);P=b(ne,"🇪🇸 "),N=b(ne,X),ne.forEach(r),oe.forEach(r),te=_(w),z=c(w,"LI",{});var Se=u(z);O=c(Se,"BUTTON",{class:!0});var W=u(O);B=b(W,"🇧🇷 "),J=b(W,k),W.forEach(r),Se.forEach(r),fe=_(w),L=c(w,"LI",{});var re=u(L);E=c(re,"BUTTON",{class:!0});var le=u(E);K=b(le,"🇹🇭 "),ae=b(le,q),le.forEach(r),re.forEach(r),Q=_(w),F=c(w,"LI",{});var ke=u(F);D=c(ke,"A",{class:!0,href:!0});var ee=u(D);M=b(ee,Y),ee.forEach(r),ke.forEach(r),w.forEach(r),p.forEach(r),this.h()},h(){l(n,"tabindex","-1"),l(n,"class","btn btn-ghost normal-case text-sm md:text-base text-gray-100"),R.value="en",l(R,"class","text-lg"),S.value="es",l(S,"class","text-lg"),O.value="pt-BR",l(O,"class","text-lg"),E.value="th",l(E,"class","text-lg"),l(D,"class","text-lg"),l(D,"href","https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"),l(d,"tabindex","-1"),l(d,"class","menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"),l(s,"class","dropdown dropdown-end")},m(h,p){ue(h,s,p),e(s,n),ve(t,n,null),e(n,g),e(s,A),e(s,d),e(d,U),e(U,R),e(R,j),e(R,V),e(d,de),e(d,G),e(G,S),e(S,P),e(S,N),e(d,te),e(d,z),e(z,O),e(O,B),e(O,J),e(d,fe),e(d,L),e(L,E),e(E,K),e(E,ae),e(d,Q),e(d,F),e(F,D),e(D,M),I=!0,se||($e=[Ve(R,"click",o[1]),Ve(S,"click",o[1]),Ve(O,"click",o[1]),Ve(E,"click",o[1])],se=!0)},p(h,[p]){(!I||p&1)&&f!==(f=h[0]("actions.changeLanguage")+"")&&T(g,f),(!I||p&1)&&x!==(x=h[0]("language",{locale:"en"})+"")&&T(V,x),(!I||p&1)&&X!==(X=h[0]("language",{locale:"es"})+"")&&T(N,X),(!I||p&1)&&k!==(k=h[0]("language",{locale:"pt-BR"})+"")&&T(J,k),(!I||p&1)&&q!==(q=h[0]("language",{locale:"th"})+"")&&T(ae,q),(!I||p&1)&&Y!==(Y=h[0]("actions.helpTranslating")+"")&&T(M,Y)},i(h){I||(ie(t.$$.fragment,h),I=!0)},o(h){ce(t.$$.fragment,h),I=!1},d(h){h&&r(s),be(t),se=!1,at($e)}}}function Yt(o,s,n){let t;Qe(o,tt,g=>n(0,t=g));function f(g){g.preventDefault();const A=g.target.value;dt.set(A),localStorage.setItem("lang",A)}return[t,f]}class Je extends Ye{constructor(s){super(),Ze(this,s,Yt,Qt,Ke,{})}}function Zt(o){let s=o[1]("actions.fetchUser")+"",n;return{c(){n=v(s)},l(t){n=b(t,s)},m(t,f){ue(t,n,f)},p(t,f){f&2&&s!==(s=t[1]("actions.fetchUser")+"")&&T(n,s)},d(t){t&&r(n)}}}function ea(o){let s=o[1]("title")+"",n;return{c(){n=v(s)},l(t){n=b(t,s)},m(t,f){ue(t,n,f)},p(t,f){f&2&&s!==(s=t[1]("title")+"")&&T(n,s)},d(t){t&&r(n)}}}function ta(o){let s=o[1]("actions.fetchUser")+"",n;return{c(){n=v(s)},l(t){n=b(t,s)},m(t,f){ue(t,n,f)},p(t,f){f&2&&s!==(s=t[1]("actions.fetchUser")+"")&&T(n,s)},d(t){t&&r(n)}}}function aa(o){let s,n,t,f,g,A,d,U,R,j,x,V,de,G,S,P,X,N,te,z,O,B,k,J,fe,L,E,K=o[1]("misc.links")+"",q,ae,Q,F=o[1]("actions.trackMyStats")+"",D,Y,M,I=o[1]("actions.fetchUser")+"",se,$e,h,p,Z=o[1]("misc.moreInfo")+"",w,_e,H,oe=o[1]("misc.githubRepository")+"",ne,Se,W,re=o[1]("actions.helpTranslating")+"",le,ke,ee,Ee,we=o[1]("disclaimer")+"",Oe,y;g=new et({props:{icon:ft}}),U=new Pe({props:{class:"btn-ghost",faIcon:Xe,link:Be+"/fetch-user",$$slots:{default:[Zt]},$$scope:{ctx:o}}}),j=new Je({}),V=new Pe({props:{class:"btn-ghost",faIcon:mt,link:Be,$$slots:{default:[ea]},$$scope:{ctx:o}}}),P=new Pe({props:{class:"btn-ghost",faIcon:Xe,link:Be+"/fetch-user",$$slots:{default:[ta]},$$scope:{ctx:o}}}),N=new Je({});const Ge=o[2].default,C=st(Ge,o,o[3],null);return{c(){s=i("nav"),n=i("div"),t=i("div"),f=i("button"),ge(g.$$.fragment),A=$(),d=i("ul"),ge(U.$$.fragment),R=$(),ge(j.$$.fragment),x=$(),ge(V.$$.fragment),de=$(),G=i("div"),S=i("ul"),ge(P.$$.fragment),X=$(),ge(N.$$.fragment),z=$(),C&&C.c(),O=$(),B=i("footer"),k=i("div"),J=i("div"),fe=$(),L=i("div"),E=i("span"),q=v(K),ae=$(),Q=i("p"),D=v(F),Y=$(),M=i("a"),se=v(I),$e=$(),h=i("div"),p=i("span"),w=v(Z),_e=$(),H=i("a"),ne=v(oe),Se=$(),W=i("a"),le=v(re),ke=$(),ee=i("div"),Ee=i("p"),Oe=v(we),this.h()},l(a){s=c(a,"NAV",{class:!0});var m=u(s);n=c(m,"DIV",{class:!0});var me=u(n);t=c(me,"DIV",{class:!0});var he=u(t);f=c(he,"BUTTON",{tabindex:!0,class:!0});var Ue=u(f);pe(g.$$.fragment,Ue),Ue.forEach(r),A=_(he),d=c(he,"UL",{tabindex:!0,class:!0});var ye=u(d);pe(U.$$.fragment,ye),R=_(ye),pe(j.$$.fragment,ye),ye.forEach(r),he.forEach(r),x=_(me),pe(V.$$.fragment,me),me.forEach(r),de=_(m),G=c(m,"DIV",{class:!0});var De=u(G);S=c(De,"UL",{class:!0});var Ae=u(S);pe(P.$$.fragment,Ae),X=_(Ae),pe(N.$$.fragment,Ae),Ae.forEach(r),De.forEach(r),m.forEach(r),z=_(a),C&&C.l(a),O=_(a),B=c(a,"FOOTER",{class:!0});var Re=u(B);k=c(Re,"DIV",{class:!0});var Ie=u(k);J=c(Ie,"DIV",{}),u(J).forEach(r),fe=_(Ie),L=c(Ie,"DIV",{});var Te=u(L);E=c(Te,"SPAN",{class:!0});var Me=u(E);q=b(Me,K),Me.forEach(r),ae=_(Te),Q=c(Te,"P",{});var je=u(Q);D=b(je,F),je.forEach(r),Y=_(Te),M=c(Te,"A",{class:!0,href:!0});var Fe=u(M);se=b(Fe,I),Fe.forEach(r),Te.forEach(r),$e=_(Ie),h=c(Ie,"DIV",{});var Le=u(h);p=c(Le,"SPAN",{class:!0});var He=u(p);w=b(He,Z),He.forEach(r),_e=_(Le),H=c(Le,"A",{class:!0,href:!0});var We=u(H);ne=b(We,oe),We.forEach(r),Se=_(Le),W=c(Le,"A",{class:!0,href:!0});var ze=u(W);le=b(ze,re),ze.forEach(r),Le.forEach(r),Ie.forEach(r),ke=_(Re),ee=c(Re,"DIV",{class:!0});var qe=u(ee);Ee=c(qe,"P",{class:!0});var xe=u(Ee);Oe=b(xe,we),xe.forEach(r),qe.forEach(r),Re.forEach(r),this.h()},h(){l(f,"tabindex","-1"),l(f,"class","btn btn-ghost md:hidden"),l(d,"tabindex","-1"),l(d,"class","menu menu-compact dropdown-content mt-6 p-2 shadow bg-secondary rounded-box w-72"),l(t,"class","dropdown"),l(n,"class","navbar-start"),l(S,"class","menu menu-horizontal px-1"),l(G,"class","navbar-end hidden md:flex"),l(s,"class",te="navbar bg-"+o[0]+" top-0 z-50 fixed"),l(E,"class","footer-title"),l(M,"class","link link-hover"),l(M,"href",Be+"/fetch-user"),l(p,"class","footer-title"),l(H,"class","link link-hover"),l(H,"href","https://github.com/thejaviertc/steam-workshop-stats"),l(W,"class","link link-hover"),l(W,"href","https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"),l(k,"class","footer p-10 bg-secondary text-neutral-content"),l(Ee,"class","text-white"),l(ee,"class","footer footer-center px-10 pb-10 bg-secondary text-base-content"),l(B,"class","relative inset-x-0 bottom-0")},m(a,m){ue(a,s,m),e(s,n),e(n,t),e(t,f),ve(g,f,null),e(t,A),e(t,d),ve(U,d,null),e(d,R),ve(j,d,null),e(n,x),ve(V,n,null),e(s,de),e(s,G),e(G,S),ve(P,S,null),e(S,X),ve(N,S,null),ue(a,z,m),C&&C.m(a,m),ue(a,O,m),ue(a,B,m),e(B,k),e(k,J),e(k,fe),e(k,L),e(L,E),e(E,q),e(L,ae),e(L,Q),e(Q,D),e(L,Y),e(L,M),e(M,se),e(k,$e),e(k,h),e(h,p),e(p,w),e(h,_e),e(h,H),e(H,ne),e(h,Se),e(h,W),e(W,le),e(B,ke),e(B,ee),e(ee,Ee),e(Ee,Oe),y=!0},p(a,[m]){const me={};m&10&&(me.$$scope={dirty:m,ctx:a}),U.$set(me);const he={};m&10&&(he.$$scope={dirty:m,ctx:a}),V.$set(he);const Ue={};m&10&&(Ue.$$scope={dirty:m,ctx:a}),P.$set(Ue),(!y||m&1&&te!==(te="navbar bg-"+a[0]+" top-0 z-50 fixed"))&&l(s,"class",te),C&&C.p&&(!y||m&8)&&ot(C,Ge,a,a[3],y?rt(Ge,a[3],m,null):nt(a[3]),null),(!y||m&2)&&K!==(K=a[1]("misc.links")+"")&&T(q,K),(!y||m&2)&&F!==(F=a[1]("actions.trackMyStats")+"")&&T(D,F),(!y||m&2)&&I!==(I=a[1]("actions.fetchUser")+"")&&T(se,I),(!y||m&2)&&Z!==(Z=a[1]("misc.moreInfo")+"")&&T(w,Z),(!y||m&2)&&oe!==(oe=a[1]("misc.githubRepository")+"")&&T(ne,oe),(!y||m&2)&&re!==(re=a[1]("actions.helpTranslating")+"")&&T(le,re),(!y||m&2)&&we!==(we=a[1]("disclaimer")+"")&&T(Oe,we)},i(a){y||(ie(g.$$.fragment,a),ie(U.$$.fragment,a),ie(j.$$.fragment,a),ie(V.$$.fragment,a),ie(P.$$.fragment,a),ie(N.$$.fragment,a),ie(C,a),y=!0)},o(a){ce(g.$$.fragment,a),ce(U.$$.fragment,a),ce(j.$$.fragment,a),ce(V.$$.fragment,a),ce(P.$$.fragment,a),ce(N.$$.fragment,a),ce(C,a),y=!1},d(a){a&&(r(s),r(z),r(O),r(B)),be(g),be(U),be(j),be(V),be(P),be(N),C&&C.d(a)}}}function sa(o,s,n){let t;Qe(o,tt,d=>n(1,t=d));let{$$slots:f={},$$scope:g}=s,A="secondary";return lt(()=>{window.onscroll=()=>{n(0,A=document.body.scrollTop>=100||document.documentElement.scrollTop>=100?"primary":"secondary")}}),o.$$set=d=>{"$$scope"in d&&n(3,g=d.$$scope)},[A,t,f,g]}class ca extends Ye{constructor(s){super(),Ze(this,s,sa,aa,Ke,{})}}export{ca as component,ia as universal};

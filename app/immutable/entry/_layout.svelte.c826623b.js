import{S as Je,i as Xe,s as Ke,k as i,y as pe,q as v,a as $,l as c,m as u,z as ge,r as b,h as n,c as _,n as l,b as ue,C as e,A as ve,D as Ve,u as T,g as ie,d as ce,B as be,E as et,F as Qe,G as tt,H as at,I as st,J as ot,o as nt}from"../chunks/index.38250676.js";import{m as Be,O as rt,F as Ye,f as lt,X as Ze,x as it,a as ct,B as Ge,b as ze,c as ut}from"../chunks/index.20aeb106.js";const dt="English",ft="Steam Workshop Stats",mt="See the number of views, subs, likes and more of your addons!",ht="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",pt={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},gt={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"Help Translating",enterProfileUrl:"Enter a Steam Profile URL",returnHome:"Return Home",getStats:"Get Stats",seeInSteam:"See it on Steam"},vt={statsOf:"Stats of {username}",noAddons:"This user doesn't have any addons!",views:"Views",subscribers:"Subscribers",favorites:"Favorites",likes:"Likes",dislikes:"Dislikes",addons:"Addons",addonsOf:"Addons of {username}",graphs:"Graphs",graphsOf:"Graphs of {username}"},bt={disclaimer:"Disclaimer! This can take up to 30 seconds because the API is on a free hosting, so it has to wake up!"},$t={language:dt,title:ft,description:mt,disclaimer:ht,misc:pt,actions:gt,stats:vt,notifications:bt},_t="Español",St="Estadísticas de Steam Workshop",kt="Observe el número de visitas, subs, likes y más de tus addons!",Et="Estadísticas de Steam Workshop es un hobby y no está afiliado con Steam o Valve. Steam y el logo de Steam son marcas registradas de Valve Corporation",It={httpError:"Ha ocurrido un error",links:"Enlaces",moreInfo:"Más Información",githubRepository:"Repositorio de Github",example:"Ejemplo:"},Tt={changeLanguage:"Cambia el Idioma",fetchUser:"Buscar un Usuario",trackMyStats:"Trackea mis Stats (Próximamente)",helpTranslating:"Ayuda a Traducir",enterProfileUrl:"Introduce la URL de un Perfil de Steam",returnHome:"Volver al Inicio",getStats:"Obtener Estadísticas",seeInSteam:"Ver en Steam"},Lt={statsOf:"Estadísticas de {username}",noAddons:"¡Este usuario no tiene ningún addon!",views:"Visitas",subscribers:"Suscriptores",favorites:"Favoritos",likes:"Likes",dislikes:"Dislikes",addons:"Addons",addonsOf:"Addons de {username}",graphs:"Gráficos",graphsOf:"Gráficos de {username}"},Ut={disclaimer:"¡Atención! Si tarda un poco, es debido a que la API se está despertando. Si tarda más de 30 segundos, puede ser debido a un error."},wt={language:_t,title:St,description:kt,disclaimer:Et,misc:It,actions:Tt,stats:Lt,notifications:Ut},Ot="Brasileiro",At="Estatísticas de uma oficina da Steam",Rt="Estatísticas de um usuário em suas Oficinas da Steam",yt="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",Vt={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},Bt={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"Nós ajude com a tradução",enterProfileUrl:"Insira a URL do perfil da Steam",returnHome:"Return Home",getStats:"Coletar Estatísticas",seeOnSteam:"Ver na Steam"},Ct={statsOf:"Estatística de {username}",noAddons:"Não há extensões disponíveis!",views:"Acessos",subscribers:"Subs",favorites:"Favoritos",likes:"Likes",dislikes:"Dislikes",addons:"Extensões",addonsOf:"Extensões de {username}",graphs:"Graphs",graphsOf:"Graphs of {username}"},Gt={disclaimer:"Atenção! se demorar por um tempo, é porque a API estava hibernando e demora um pouco a responder, se realmente demorar bastante é porque deve ter tido um erro."},Dt={language:Ot,title:At,description:Rt,disclaimer:yt,misc:Vt,actions:Bt,stats:Ct,notifications:Gt},Nt="แบบไทยๆ",Pt="สถิติ Steam Workshop",Mt="สถิติผลงานของผู้ใช้ใน Steam Workshop",Ft="Steam Workshop Stats is a hobby project and is not affiliated with Steam or Valve. Steam and the Steam logo are trademarks of Valve Corporation.",Ht={httpError:"An error has occurred",links:"Links",moreInfo:"More Info",githubRepository:"Github Repository",example:"Example:"},jt={changeLanguage:"Change Language",fetchUser:"Fetch User",trackMyStats:"Track my Stats (Coming Soon)",helpTranslating:"ช่วยแปลภาษา",enterProfileUrl:"ป้อน URL ของโปรไฟล์ Steam",returnHome:"Return Home",getStats:"ดูสถิติ",seeOnSteam:"ดูม็อดนี้บน Steam"},Wt={statsOf:"สถิติของ {username}",noAddons:"ไม่มีรายการม็อดให้แสดง!",views:"ผู้เยี่ยมชม",subscribers:"ผู้สมัครสมาชิก",favorites:"ผู้ที่ชื่นชอบ",likes:"คะแนนเชิงบวก",dislikes:"คะแนนเชิงลบ",addons:"ม็อดของ",addonsOf:"ม็อดของ {username}",graphs:"Graphs",graphsOf:"Graphs of {username}"},qt={disclaimer:"คำชี้แจง! อาจใช้เวลาในการโหลดครู่หนึ่งเพื่อปลุก API หากใช้เวลานานเกินไปอาจมีข้อผิดพลาด"},zt={language:Nt,title:Pt,description:Mt,disclaimer:Ft,misc:Ht,actions:jt,stats:Wt,notifications:qt};Be("en",$t);Be("es",wt);Be("pt-BR",Dt);Be("th",zt);rt({fallbackLocale:"en"});function xt(r){let s,o,a,f=r[0]("actions.changeLanguage")+"",p,W,d,w,R,M,x=r[0]("language",{locale:"en"})+"",y,de,C,S,G,J=r[0]("language",{locale:"es"})+"",D,te,q,O,V,k=r[0]("language",{locale:"pt-BR"})+"",X,fe,L,E,K,z=r[0]("language",{locale:"th"})+"",ae,Q,F,N,Y=r[0]("actions.helpTranslating")+"",P,I,se,$e;return a=new Ye({props:{class:"mr-2",icon:lt}}),{c(){s=i("div"),o=i("button"),pe(a.$$.fragment),p=v(f),W=$(),d=i("ul"),w=i("li"),R=i("button"),M=v("🇬🇧 "),y=v(x),de=$(),C=i("li"),S=i("button"),G=v("🇪🇸 "),D=v(J),te=$(),q=i("li"),O=i("button"),V=v("🇧🇷 "),X=v(k),fe=$(),L=i("li"),E=i("button"),K=v("🇹🇭 "),ae=v(z),Q=$(),F=i("li"),N=i("a"),P=v(Y),this.h()},l(h){s=c(h,"DIV",{class:!0});var g=u(s);o=c(g,"BUTTON",{tabindex:!0,class:!0});var Z=u(o);ge(a.$$.fragment,Z),p=b(Z,f),Z.forEach(n),W=_(g),d=c(g,"UL",{tabindex:!0,class:!0});var U=u(d);w=c(U,"LI",{});var _e=u(w);R=c(_e,"BUTTON",{class:!0});var H=u(R);M=b(H,"🇬🇧 "),y=b(H,x),H.forEach(n),_e.forEach(n),de=_(U),C=c(U,"LI",{});var oe=u(C);S=c(oe,"BUTTON",{class:!0});var ne=u(S);G=b(ne,"🇪🇸 "),D=b(ne,J),ne.forEach(n),oe.forEach(n),te=_(U),q=c(U,"LI",{});var Se=u(q);O=c(Se,"BUTTON",{class:!0});var j=u(O);V=b(j,"🇧🇷 "),X=b(j,k),j.forEach(n),Se.forEach(n),fe=_(U),L=c(U,"LI",{});var re=u(L);E=c(re,"BUTTON",{class:!0});var le=u(E);K=b(le,"🇹🇭 "),ae=b(le,z),le.forEach(n),re.forEach(n),Q=_(U),F=c(U,"LI",{});var ke=u(F);N=c(ke,"A",{class:!0,href:!0});var ee=u(N);P=b(ee,Y),ee.forEach(n),ke.forEach(n),U.forEach(n),g.forEach(n),this.h()},h(){l(o,"tabindex","-1"),l(o,"class","btn btn-ghost normal-case text-sm md:text-base text-gray-100"),R.value="en",l(R,"class","text-lg"),S.value="es",l(S,"class","text-lg"),O.value="pt-BR",l(O,"class","text-lg"),E.value="th",l(E,"class","text-lg"),l(N,"class","text-lg"),l(N,"href","https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"),l(d,"tabindex","-1"),l(d,"class","menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"),l(s,"class","dropdown dropdown-end")},m(h,g){ue(h,s,g),e(s,o),ve(a,o,null),e(o,p),e(s,W),e(s,d),e(d,w),e(w,R),e(R,M),e(R,y),e(d,de),e(d,C),e(C,S),e(S,G),e(S,D),e(d,te),e(d,q),e(q,O),e(O,V),e(O,X),e(d,fe),e(d,L),e(L,E),e(E,K),e(E,ae),e(d,Q),e(d,F),e(F,N),e(N,P),I=!0,se||($e=[Ve(R,"click",r[1]),Ve(S,"click",r[1]),Ve(O,"click",r[1]),Ve(E,"click",r[1])],se=!0)},p(h,[g]){(!I||g&1)&&f!==(f=h[0]("actions.changeLanguage")+"")&&T(p,f),(!I||g&1)&&x!==(x=h[0]("language",{locale:"en"})+"")&&T(y,x),(!I||g&1)&&J!==(J=h[0]("language",{locale:"es"})+"")&&T(D,J),(!I||g&1)&&k!==(k=h[0]("language",{locale:"pt-BR"})+"")&&T(X,k),(!I||g&1)&&z!==(z=h[0]("language",{locale:"th"})+"")&&T(ae,z),(!I||g&1)&&Y!==(Y=h[0]("actions.helpTranslating")+"")&&T(P,Y)},i(h){I||(ie(a.$$.fragment,h),I=!0)},o(h){ce(a.$$.fragment,h),I=!1},d(h){h&&n(s),be(a),se=!1,et($e)}}}function Jt(r,s,o){let a;Qe(r,Ze,p=>o(0,a=p));function f(p){p.preventDefault(),it.set(p.target.value)}return[a,f]}class xe extends Je{constructor(s){super(),Xe(this,s,Jt,xt,Ke,{})}}function Xt(r){let s=r[1]("actions.fetchUser")+"",o;return{c(){o=v(s)},l(a){o=b(a,s)},m(a,f){ue(a,o,f)},p(a,f){f&2&&s!==(s=a[1]("actions.fetchUser")+"")&&T(o,s)},d(a){a&&n(o)}}}function Kt(r){let s=r[1]("title")+"",o;return{c(){o=v(s)},l(a){o=b(a,s)},m(a,f){ue(a,o,f)},p(a,f){f&2&&s!==(s=a[1]("title")+"")&&T(o,s)},d(a){a&&n(o)}}}function Qt(r){let s=r[1]("actions.fetchUser")+"",o;return{c(){o=v(s)},l(a){o=b(a,s)},m(a,f){ue(a,o,f)},p(a,f){f&2&&s!==(s=a[1]("actions.fetchUser")+"")&&T(o,s)},d(a){a&&n(o)}}}function Yt(r){let s,o,a,f,p,W,d,w,R,M,x,y,de,C,S,G,J,D,te,q,O,V,k,X,fe,L,E,K=r[1]("misc.links")+"",z,ae,Q,F=r[1]("actions.trackMyStats")+"",N,Y,P,I=r[1]("actions.fetchUser")+"",se,$e,h,g,Z=r[1]("misc.moreInfo")+"",U,_e,H,oe=r[1]("misc.githubRepository")+"",ne,Se,j,re=r[1]("actions.helpTranslating")+"",le,ke,ee,Ee,Ue=r[1]("disclaimer")+"",Oe,A;p=new Ye({props:{icon:ct}}),w=new Ge({props:{class:"btn-ghost",faIcon:ze,link:"/fetch-user",$$slots:{default:[Xt]},$$scope:{ctx:r}}}),M=new xe({}),y=new Ge({props:{class:"btn-ghost",faIcon:ut,link:"/",$$slots:{default:[Kt]},$$scope:{ctx:r}}}),G=new Ge({props:{class:"btn-ghost",faIcon:ze,link:"/fetch-user",$$slots:{default:[Qt]},$$scope:{ctx:r}}}),D=new xe({});const Ce=r[2].default,B=tt(Ce,r,r[3],null);return{c(){s=i("nav"),o=i("div"),a=i("div"),f=i("button"),pe(p.$$.fragment),W=$(),d=i("ul"),pe(w.$$.fragment),R=$(),pe(M.$$.fragment),x=$(),pe(y.$$.fragment),de=$(),C=i("div"),S=i("ul"),pe(G.$$.fragment),J=$(),pe(D.$$.fragment),q=$(),B&&B.c(),O=$(),V=i("footer"),k=i("div"),X=i("div"),fe=$(),L=i("div"),E=i("span"),z=v(K),ae=$(),Q=i("p"),N=v(F),Y=$(),P=i("a"),se=v(I),$e=$(),h=i("div"),g=i("span"),U=v(Z),_e=$(),H=i("a"),ne=v(oe),Se=$(),j=i("a"),le=v(re),ke=$(),ee=i("div"),Ee=i("p"),Oe=v(Ue),this.h()},l(t){s=c(t,"NAV",{class:!0});var m=u(s);o=c(m,"DIV",{class:!0});var me=u(o);a=c(me,"DIV",{class:!0});var he=u(a);f=c(he,"BUTTON",{tabindex:!0,class:!0});var we=u(f);ge(p.$$.fragment,we),we.forEach(n),W=_(he),d=c(he,"UL",{tabindex:!0,class:!0});var Ae=u(d);ge(w.$$.fragment,Ae),R=_(Ae),ge(M.$$.fragment,Ae),Ae.forEach(n),he.forEach(n),x=_(me),ge(y.$$.fragment,me),me.forEach(n),de=_(m),C=c(m,"DIV",{class:!0});var De=u(C);S=c(De,"UL",{class:!0});var Re=u(S);ge(G.$$.fragment,Re),J=_(Re),ge(D.$$.fragment,Re),Re.forEach(n),De.forEach(n),m.forEach(n),q=_(t),B&&B.l(t),O=_(t),V=c(t,"FOOTER",{class:!0});var ye=u(V);k=c(ye,"DIV",{class:!0});var Ie=u(k);X=c(Ie,"DIV",{}),u(X).forEach(n),fe=_(Ie),L=c(Ie,"DIV",{});var Te=u(L);E=c(Te,"SPAN",{class:!0});var Ne=u(E);z=b(Ne,K),Ne.forEach(n),ae=_(Te),Q=c(Te,"P",{});var Pe=u(Q);N=b(Pe,F),Pe.forEach(n),Y=_(Te),P=c(Te,"A",{class:!0,href:!0});var Me=u(P);se=b(Me,I),Me.forEach(n),Te.forEach(n),$e=_(Ie),h=c(Ie,"DIV",{});var Le=u(h);g=c(Le,"SPAN",{class:!0});var Fe=u(g);U=b(Fe,Z),Fe.forEach(n),_e=_(Le),H=c(Le,"A",{class:!0,href:!0});var He=u(H);ne=b(He,oe),He.forEach(n),Se=_(Le),j=c(Le,"A",{class:!0,href:!0});var je=u(j);le=b(je,re),je.forEach(n),Le.forEach(n),Ie.forEach(n),ke=_(ye),ee=c(ye,"DIV",{class:!0});var We=u(ee);Ee=c(We,"P",{class:!0});var qe=u(Ee);Oe=b(qe,Ue),qe.forEach(n),We.forEach(n),ye.forEach(n),this.h()},h(){l(f,"tabindex","-1"),l(f,"class","btn btn-ghost md:hidden"),l(d,"tabindex","-1"),l(d,"class","menu menu-compact dropdown-content mt-6 p-2 shadow bg-secondary rounded-box w-72"),l(a,"class","dropdown"),l(o,"class","navbar-start"),l(S,"class","menu menu-horizontal px-1"),l(C,"class","navbar-end hidden md:flex"),l(s,"class",te="navbar bg-"+r[0]+" top-0 z-50 fixed"),l(E,"class","footer-title"),l(P,"class","link link-hover"),l(P,"href","/fetch-user"),l(g,"class","footer-title"),l(H,"class","link link-hover"),l(H,"href","https://github.com/thejaviertc/steam-workshop-stats"),l(j,"class","link link-hover"),l(j,"href","https://github.com/thejaviertc/steam-workshop-stats/blob/main/CONTRIBUTING.md"),l(k,"class","footer p-10 bg-secondary text-neutral-content"),l(Ee,"class","text-white"),l(ee,"class","footer footer-center px-10 pb-10 bg-secondary text-base-content"),l(V,"class","relative inset-x-0 bottom-0")},m(t,m){ue(t,s,m),e(s,o),e(o,a),e(a,f),ve(p,f,null),e(a,W),e(a,d),ve(w,d,null),e(d,R),ve(M,d,null),e(o,x),ve(y,o,null),e(s,de),e(s,C),e(C,S),ve(G,S,null),e(S,J),ve(D,S,null),ue(t,q,m),B&&B.m(t,m),ue(t,O,m),ue(t,V,m),e(V,k),e(k,X),e(k,fe),e(k,L),e(L,E),e(E,z),e(L,ae),e(L,Q),e(Q,N),e(L,Y),e(L,P),e(P,se),e(k,$e),e(k,h),e(h,g),e(g,U),e(h,_e),e(h,H),e(H,ne),e(h,Se),e(h,j),e(j,le),e(V,ke),e(V,ee),e(ee,Ee),e(Ee,Oe),A=!0},p(t,[m]){const me={};m&10&&(me.$$scope={dirty:m,ctx:t}),w.$set(me);const he={};m&10&&(he.$$scope={dirty:m,ctx:t}),y.$set(he);const we={};m&10&&(we.$$scope={dirty:m,ctx:t}),G.$set(we),(!A||m&1&&te!==(te="navbar bg-"+t[0]+" top-0 z-50 fixed"))&&l(s,"class",te),B&&B.p&&(!A||m&8)&&at(B,Ce,t,t[3],A?ot(Ce,t[3],m,null):st(t[3]),null),(!A||m&2)&&K!==(K=t[1]("misc.links")+"")&&T(z,K),(!A||m&2)&&F!==(F=t[1]("actions.trackMyStats")+"")&&T(N,F),(!A||m&2)&&I!==(I=t[1]("actions.fetchUser")+"")&&T(se,I),(!A||m&2)&&Z!==(Z=t[1]("misc.moreInfo")+"")&&T(U,Z),(!A||m&2)&&oe!==(oe=t[1]("misc.githubRepository")+"")&&T(ne,oe),(!A||m&2)&&re!==(re=t[1]("actions.helpTranslating")+"")&&T(le,re),(!A||m&2)&&Ue!==(Ue=t[1]("disclaimer")+"")&&T(Oe,Ue)},i(t){A||(ie(p.$$.fragment,t),ie(w.$$.fragment,t),ie(M.$$.fragment,t),ie(y.$$.fragment,t),ie(G.$$.fragment,t),ie(D.$$.fragment,t),ie(B,t),A=!0)},o(t){ce(p.$$.fragment,t),ce(w.$$.fragment,t),ce(M.$$.fragment,t),ce(y.$$.fragment,t),ce(G.$$.fragment,t),ce(D.$$.fragment,t),ce(B,t),A=!1},d(t){t&&n(s),be(p),be(w),be(M),be(y),be(G),be(D),t&&n(q),B&&B.d(t),t&&n(O),t&&n(V)}}}function Zt(r,s,o){let a;Qe(r,Ze,d=>o(1,a=d));let{$$slots:f={},$$scope:p}=s,W="secondary";return nt(()=>{window.onscroll=()=>{o(0,W=document.body.scrollTop>=100||document.documentElement.scrollTop>=100?"primary":"secondary")}}),r.$$set=d=>{"$$scope"in d&&o(3,p=d.$$scope)},[W,a,f,p]}class aa extends Je{constructor(s){super(),Xe(this,s,Zt,Yt,Ke,{})}}export{aa as default};

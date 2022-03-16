(this["webpackJsonpsteam-workshop-stats"]=this["webpackJsonpsteam-workshop-stats"]||[]).push([[0],{202:function(e,t,s){},341:function(e,t,s){"use strict";s.r(t);var a=s(63),n=s.n(a),c=(s(178),s(179),s(201),s(202),s(50)),r=s(51),i=s(52),l=s(57),o=s(0),d=s.n(o),b=s(81),j=s(40),m=s.n(j),h=s(107),u=s(343),x=s(344),f=s(348),p=s(166),O=s(167),v=s(72),g=s(70),y=s(169),N=s(2),S=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).end=void 0,a.state={loading:!1,error:!1,errorMessage:"",username:"",profileImage:"",numberAddons:0,subs:0,lifeSubs:0,favs:0,lifeFavs:0,viewers:0,addonList:[]},a.end=d.a.createRef(),a}return Object(r.a)(s,[{key:"fetchData",value:function(){var e=Object(h.a)(m.a.mark((function e(){var t,s;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return this.setState({loading:!1,error:!1}),e.next=3,fetch("https://javiertcs-api.herokuapp.com/api/steam-workshop-stats?".concat(this.props.username));case 3:return t=e.sent,e.next=6,t.json();case 6:s=e.sent,200===t.status?this.setState({username:s.username,profileImage:s.profileImage,numberAddons:s.numberAddons,subs:s.subs,lifeSubs:s.lifeSubs,favs:s.favs,lifeFavs:s.lifeFavs,viewers:s.viewers,addonList:s.addonList,loading:!0}):this.setState({error:!0,errorMessage:s.message});case 8:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"scrollToBottom",value:function(){this.end.current.scrollIntoView({behavior:"smooth"})}},{key:"componentDidMount",value:function(){var e=Object(h.a)(m.a.mark((function e(){return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,this.fetchData();case 2:this.scrollToBottom();case 3:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"componentDidUpdate",value:function(e){this.props.username!==e.username&&this.fetchData()}},{key:"render",value:function(){var e=this;return Object(N.jsxs)("div",{className:"pt-5",children:[Object(N.jsx)("div",{ref:this.end}),this.state.loading?Object(N.jsxs)("div",{children:[Object(N.jsxs)("h2",{className:"text-center",children:["Statistics of ",this.state.username]}),Object(N.jsx)("img",{src:this.state.profileImage,className:"img-fluid mx-auto d-block py-3",alt:""}),Object(N.jsxs)("p",{className:"text-center",children:[Object(N.jsxs)("span",{className:"badge bg-success mx-2 my-2",children:["Total Views: ",this.state.viewers]}),Object(N.jsxs)("span",{className:"badge bg-warning mx-2 my-2",children:["Total Subs: ",this.state.subs]}),Object(N.jsxs)("span",{className:"badge bg-warning mx-2 my-2",children:["Total Life Subs: ",this.state.lifeSubs]}),Object(N.jsxs)("span",{className:"badge bg-danger mx-2 my-2",children:["Total Favorites: ",this.state.favs]}),Object(N.jsxs)("span",{className:"badge bg-danger mx-2 my-2",children:["Total Life Favorites: ",this.state.lifeFavs]})]}),Object(N.jsx)("div",{className:"container pb-2",children:Object(N.jsx)(u.a,{width:"99%",aspect:2,children:Object(N.jsxs)(x.a,{width:500,height:300,data:this.state.addonList.slice().reverse(),margin:{top:5,right:30,left:20,bottom:5},children:[Object(N.jsx)(f.a,{stroke:""}),Object(N.jsx)(p.a,{dataKey:"name"}),Object(N.jsx)(O.a,{}),Object(N.jsx)(v.a,{}),Object(N.jsx)(g.a,{}),Object(N.jsx)(y.a,{type:"monotone",dataKey:"views",stackId:"1",stroke:"#198754",fill:"#198754"}),Object(N.jsx)(y.a,{type:"monotone",dataKey:"subs",stackId:"1",stroke:"#FFC107",fill:"#FFC107"}),Object(N.jsx)(y.a,{type:"monotone",dataKey:"favs",stackId:"1",stroke:"#DC3545",fill:"#DC3545"})]})})}),Object(N.jsxs)("h2",{className:"text-center pt-4",children:["Addons of ",this.state.username]}),this.state.addonList.length?Object(N.jsx)("div",{className:"container pt-5",children:Object(N.jsx)("div",{className:"row",children:this.state.addonList.map((function(t,s){return e.state.addonList.length>0?Object(N.jsx)("div",{className:"col-12 col-md-4 col-sm-6 pb-5",children:Object(N.jsxs)("div",{className:"card bg-primary rounded",children:[Object(N.jsx)("img",{className:"card-img-top p-3",src:t.image,alt:"Logo"}),Object(N.jsxs)("div",{className:"card-body",children:[Object(N.jsx)("h5",{className:"card-title text-center",children:t.title}),Object(N.jsxs)("p",{className:"text-center",children:[Object(N.jsxs)("span",{className:"badge bg-success mx-2 my-2",children:["Views: ",t.views]}),Object(N.jsxs)("span",{className:"badge bg-warning mx-2 my-2",children:["Subs: ",t.subs]}),Object(N.jsxs)("span",{className:"badge bg-warning mx-2 my-2",children:["Life Subs: ",t.lifeSubs]}),Object(N.jsxs)("span",{className:"badge bg-danger mx-2 my-2",children:["Favorites: ",t.favs]}),Object(N.jsxs)("span",{className:"badge bg-danger mx-2 my-2",children:["Life Favorites: ",t.lifeFavs]})]}),Object(N.jsx)("div",{className:"d-flex justify-content-center",children:Object(N.jsx)("a",{href:t.url,target:"_blank",rel:"noreferrer",className:"btn btn-secondary text-white",children:"See Addon"})})]})]})},"addon_"+s):null}))})}):Object(N.jsx)("h3",{className:"text-center pt-4",children:"There are no addons avaible!"})]}):this.state.error?Object(N.jsx)("div",{className:"d-flex justify-content-center",children:Object(N.jsx)("div",{className:"alert alert-danger text-center",style:{width:"20%"},role:"alert",children:this.state.errorMessage})}):Object(N.jsx)("div",{className:"d-flex justify-content-center",children:Object(N.jsx)("div",{className:"spinner-border",role:"status",children:Object(N.jsx)("span",{className:"sr-only"})})})]})}}]),s}(o.Component),w=S,k=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(e){var a;return Object(c.a)(this,s),(a=t.call(this,e)).input=void 0,a.state={isSubmitted:!1,steamId:""},a.handleSubmit=a.handleSubmit.bind(Object(b.a)(a)),a.input=d.a.createRef(),a}return Object(r.a)(s,[{key:"handleSubmit",value:function(e){this.setState({isSubmitted:!0,steamId:this.input.current.value}),e.preventDefault()}},{key:"render",value:function(){return Object(N.jsx)("section",{id:"statistics",className:"bg-secondary py-5",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("h3",{className:"text-center",children:"Enter a Steam Profile URL"}),Object(N.jsxs)("form",{onSubmit:this.handleSubmit,children:[Object(N.jsx)("div",{className:"form-group d-flex justify-content-center",children:Object(N.jsx)("input",{type:"text",className:"form-control text-center my-4",style:{width:"70%"},ref:this.input,placeholder:"Steam Profile URL"})}),Object(N.jsx)("div",{className:"d-flex justify-content-center",children:Object(N.jsxs)("button",{type:"submit",className:"btn btn-secondary",children:[Object(N.jsx)("i",{className:"fa-solid fa-magnifying-glass"})," Get Stats"]})})]}),this.state.isSubmitted&&Object(N.jsx)(w,{username:this.state.steamId})]})})}}]),s}(o.Component),F=function(e){Object(i.a)(s,e);var t=Object(l.a)(s);function s(){return Object(c.a)(this,s),t.apply(this,arguments)}return Object(r.a)(s,[{key:"render",value:function(){return Object(N.jsxs)("div",{children:[Object(N.jsx)("section",{id:"header",className:"fullpage bg-primary",children:Object(N.jsxs)("div",{className:"container",children:[Object(N.jsx)("h1",{className:"text-center",children:"Steam Workshop Statistics"}),Object(N.jsx)("h2",{className:"text-center",children:"Stats of all Users in Steam Workshop"}),Object(N.jsxs)("div",{className:"d-flex justify-content-center pt-3",children:[Object(N.jsxs)("a",{className:"btn btn-secondary mx-2",href:"https://github.com/thejaviertc/steam-workshop-stats",role:"button",children:[Object(N.jsx)("i",{className:"fa-brands fa-github"})," Github"]}),Object(N.jsxs)("a",{className:"btn btn-secondary mx-2",href:"#statistics",role:"button",children:["Let's Go ",Object(N.jsx)("i",{className:"fa-solid fa-angle-down"})]})]})]})}),Object(N.jsx)(k,{})]})}}]),s}(o.Component);function L(){return Object(N.jsx)(F,{})}var I=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,350)).then((function(t){var s=t.getCLS,a=t.getFID,n=t.getFCP,c=t.getLCP,r=t.getTTFB;s(e),a(e),n(e),c(e),r(e)}))};n.a.render(Object(N.jsx)(L,{}),document.getElementById("root")),I()}},[[341,1,2]]]);
//# sourceMappingURL=main.b594ee41.chunk.js.map
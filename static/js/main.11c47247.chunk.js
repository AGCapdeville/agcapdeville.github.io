(this["webpackJsonpreact-gh-pages"]=this["webpackJsonpreact-gh-pages"]||[]).push([[0],{10:function(e,a,t){e.exports={navbar:"nav_navbar__2mmhG",navbarOp:"nav_navbarOp__2vB1R",navbarAlignRight:"nav_navbarAlignRight__5xAOZ",links:"nav_links__1zgQq",link:"nav_link__2H2KV",activeLink:"nav_activeLink__3vBYR"}},13:function(e,a,t){e.exports={container:"footer_container__3Mbmx",link:"footer_link__rNuqK"}},16:function(e,a,t){e.exports={container:"app_container__3FwrV",header:"app_header__2g4Pw"}},35:function(e,a,t){e.exports={moduleBody:"portfolio_moduleBody___fvgF",moduleTitle:"portfolio_moduleTitle__8PXZi",moduleSkill:"portfolio_moduleSkill__1RIoX"}},36:function(e,a,t){e.exports=t(65)},41:function(e,a,t){},5:function(e,a,t){e.exports={profileImage:"home_profileImage__14Cai",body:"home_body__29f9y",title:"home_title__2U93c",smallLink:"home_smallLink__24Pha",gridHero:"home_gridHero__1zyRk",skills:"home_skills__3BhwT",about:"home_about__3JKpd"}},65:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(30),i=t.n(r),c=(t(41),t(16)),o=t.n(c),m=t(7),s=t(12),u=t(17),d=t.n(u),_=t(31),p=t(14),v=t(32),h=t.n(v),E=t(9);var g=function(){var e=function(e){var a=Object(n.useState)(null),t=Object(p.a)(a,2),l=t[0],r=t[1],i=Object(n.useState)(!0),c=Object(p.a)(i,2),o=c[0],m=c[1],s=Object(n.useState)(!1),u=Object(p.a)(s,2),v=u[0],E=u[1];return Object(n.useEffect)((function(){(function(){var a=Object(_.a)(d.a.mark((function a(){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:E(!1),m(!0),h()({method:"get",url:e}).then((function(e){console.log(" Response: \n",e),r(e.data),m(!1)})).catch((function(e){E(!0)}));case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}})()()}),[e]),[{data:l,isLoading:o,isError:v}]}("https://api.github.com/users/".concat("AGCapdeville","/repos")),a=Object(p.a)(e,1)[0],t=a.data;if(a.isLoading)return"loading...";var r=function(e){var a=Object.keys(e).length,t=0,n=new Date(e[t].updated_at),l=new Date(e[0].updated_at),r=0;for(r=0;r<a;r++)(l=new Date(e[r].updated_at))>n&&(n=l,t=r);return t}(t),i="https://github.com/".concat("AGCapdeville","/").concat(t[r].name),c=new Date(Date.parse(t[r].updated_at)),o=c.getDate(),m=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][c.getMonth()],s=c.getFullYear(),u="".concat(m,", ").concat(o,", ").concat(s);return l.a.createElement("div",{className:E.container},l.a.createElement("div",{className:E.text}," CURRENTLY WORKING ON: "),l.a.createElement("div",{className:E.repoRow},l.a.createElement("div",{className:E.blinkyGreen}),"[",l.a.createElement("a",{href:i}," ",t[r].name," "),"]"),l.a.createElement("div",{className:E.dateRow},"Updated: [",l.a.createElement("div",{className:E.dateText}," ",u," "),"]"))},b=t(10),f=function(){var e=Object(m.e)().pathname,a=function(a){return a===e?b.activeLink:b.link};return l.a.createElement("div",{className:b.navbar},l.a.createElement("div",{className:b.navbarOp},l.a.createElement(s.b,{to:"/",className:a("/")},"Home"),l.a.createElement(s.b,{to:"/portfolio",className:a("/portfolio")},"Portfolio")),l.a.createElement("div",{className:b.navbarAlignRight},l.a.createElement(g,null)))},k=t(13),w=(new Date).getFullYear(),N="Adam Capdeville ".concat(w," "),R=function(){return l.a.createElement("div",{className:k.container},N,"|"," ",l.a.createElement("a",{className:k.link,href:"https://www.https://github.com/AGCapdeville/AGCapdeville.github.io"},"Source"),"|"," ",l.a.createElement("a",{className:k.link,href:"https://www.linkedin.com/in/adamcapdeville/"},"Linkedin"),"|"," ",l.a.createElement("a",{className:k.link,href:"https://github.com/AGCapdeville/"},"GitHub"))},x=t(5),y=function(){return l.a.createElement("div",{className:x.body},l.a.createElement("div",{className:x.profileImage},l.a.createElement("img",{src:"https://i.imgur.com/eDmARH5.jpg",className:"rounded-circle",alt:"profile img"})),l.a.createElement("div",{className:x.title},"Adam G Capdeville"),l.a.createElement("div",{className:x.about},l.a.createElement("p",null,"Currently, I am a computer science student at CSUCI who has a passion\nfor intelligent code, whether it's intelligently written or written to exhibit intelligence.")),l.a.createElement("div",{className:x.skills},l.a.createElement("div",{className:x.title}," ",l.a.createElement("b",null,"Skills")," "),l.a.createElement("div",{className:x.gridHero},l.a.createElement("div",{className:x.subTitle}," Languages "),l.a.createElement("div",{className:x.subTitle}," Frameworks & Libraries "),l.a.createElement("div",{className:x.subTitle}," Database "),l.a.createElement("ul",null,l.a.createElement("li",null,"Java"),l.a.createElement("li",null,"C / C++"),l.a.createElement("li",null,"C#"),l.a.createElement("li",null,"CSS"),l.a.createElement("li",null,"HTML"),l.a.createElement("li",null,"JavaScript")),l.a.createElement("ul",null,l.a.createElement("li",null,"React"),l.a.createElement("li",null,"React-Native"),l.a.createElement("li",null,"Bootstrap")),l.a.createElement("ul",null,l.a.createElement("li",null,"MySQL"),l.a.createElement("li",null,"MongoDB")))))},O=t(35),C=function(){return l.a.createElement("div",{className:O.moduleBody},l.a.createElement("header",null,l.a.createElement("div",{style:{float:"center",paddingTop:"20px"}},l.a.createElement("h1",null,"[Portfolio] TBD ..."))))},L=function(){return l.a.createElement(s.a,null,l.a.createElement("div",{className:o.a.container},l.a.createElement(f,null),l.a.createElement("div",{className:o.a.app},l.a.createElement(m.a,{exact:!0,path:"/",component:y}),l.a.createElement(m.a,{exact:!0,path:"/portfolio",component:C})),l.a.createElement(R,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(L,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},9:function(e,a,t){e.exports={container:"github_container__3R5IX",repoRow:"github_repoRow__pcL-l",dateRow:"github_dateRow__3kmaE",dateText:"github_dateText__2mydL",blinkyGreen:"github_blinkyGreen__RwTP3",blinkGreen:"github_blinkGreen__whmxg",text:"github_text__1WUBf"}}},[[36,1,2]]]);
//# sourceMappingURL=main.11c47247.chunk.js.map
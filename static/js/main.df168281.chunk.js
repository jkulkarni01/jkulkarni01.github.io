(this.webpackJsonpcleanfolio=this.webpackJsonpcleanfolio||[]).push([[0],{28:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},36:function(e,t,n){},37:function(e,t,n){},38:function(e,t,n){},39:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},44:function(e,t,n){"use strict";n.r(t);var c=n(9),i=n(3),s=n(1),a=n(0),l=Object(s.createContext)(),r=function(e){var t=e.children,n=Object(s.useState)("light"),c=Object(i.a)(n,2),r=c[0],o=c[1];Object(s.useEffect)((function(){var e=window.matchMedia("(prefers-color-scheme: dark)");o(e.matches?"dark":"light"),e.addEventListener("change",(function(e){o(e.matches?"dark":"light")}))}),[]);return Object(a.jsx)(l.Provider,{value:[{themeName:r,toggleTheme:function(){var e="dark"===r?"light":"dark";localStorage.setItem("themeName",e),o(e)}}],children:t})},o="",j="JK",b="https://ik.imagekit.io/datap/Gk/profile-pic__5__dyEgMqSKy.png?ik-sdk-version=javascript-1.4.3&updatedAt=1671169366088",d="Jui Kulkarni",h="CSE sophomore at MESCOE",u="Adaptable and driven with strong work ethic and ability to thrive in team based or individually motivated settings, consistently rewarded for success in planning and operation improvements, offering a quality-focused and systematic approach for solving issues and performing daily tasks",m="https://pdfhost.io/v/qRYxoVbjp_Jui_Kulkarni_Resume",O={linkedin:"https://www.linkedin.com/in/jui-kulkarni-94680a217/",github:"https://github.com/jkulkarni01"},x=[{name:"MAG-E",description:"A Website for all the club's in college where they\n      can post the details of upcoming and previous\n      events.",stack:["HTML","Django","CSS","JavaScript","jQuery","Bootstrap"],sourceCode:"https://github.com/gkulk007/Mag-E",livePreview:"https://emagmes.pythonanywhere.com/"},{name:"Sentiment Analysis",description:"Performed Sentiment Analysis on Twitter feeds\n      and classify the tweets in positive, negative,\n      and neutral categories.",stack:["Python"],sourceCode:"",livePreview:""}],f=["C++","Python","MySQL","HTML","CSS","JavaScript","Git","MS Office","VS Code"],p="jui01kulkarni@gmail.com",k=n(16),v=n.n(k),g=n(14),_=n.n(g),N=n(18),w=n.n(N),y=n(17),S=n.n(y),C=(n(28),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0],n=t.themeName,c=t.toggleTheme,r=Object(s.useState)(!1),o=Object(i.a)(r,2),j=o[0],b=o[1],d=function(){return b(!j)};return Object(a.jsxs)("nav",{className:"center nav",children:[Object(a.jsxs)("ul",{style:{display:j?"flex":null},className:"nav__list",children:[x.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#projects",onClick:d,className:"link link--nav",children:"Projects"})}):null,f.length?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#skills",onClick:d,className:"link link--nav",children:"Skills"})}):null,p?Object(a.jsx)("li",{className:"nav__list-item",children:Object(a.jsx)("a",{href:"#contact",onClick:d,className:"link link--nav",children:"Contact"})}):null]}),Object(a.jsx)("button",{type:"button",onClick:c,className:"btn btn--icon nav__theme","aria-label":"toggle theme",children:"dark"===n?Object(a.jsx)(_.a,{}):Object(a.jsx)(v.a,{})}),Object(a.jsx)("button",{type:"button",onClick:d,className:"btn btn--icon nav__hamburger","aria-label":"toggle navigation",children:j?Object(a.jsx)(S.a,{}):Object(a.jsx)(w.a,{})})]})}),E=(n(32),function(){var e=o,t=j;return Object(a.jsxs)("header",{className:"header center",children:[Object(a.jsx)("h3",{children:e?Object(a.jsx)("a",{href:e,className:"link",children:t}):t}),Object(a.jsx)(C,{})]})}),M=n(11),P=n.n(M),J=n(19),A=n.n(J),L=(n(33),function(){var e=b,t=d,n=h,c=u,i=m,s=O;return Object(a.jsxs)("div",{className:"about center",children:[e&&Object(a.jsx)("img",{src:e,alt:"avatar",className:"about__avatar",width:"200px"}),t&&Object(a.jsxs)("h1",{children:["Hi, I am ",Object(a.jsxs)("span",{className:"about__name",children:[t,"."]})]}),n&&Object(a.jsxs)("h2",{className:"about__role",children:["A ",n,"."]}),Object(a.jsx)("p",{className:"about__desc",children:c&&c}),Object(a.jsxs)("div",{className:"about__contact center",children:[i&&Object(a.jsx)("a",{href:i,children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Resume"})}),s&&Object(a.jsxs)(a.Fragment,{children:[s.github&&Object(a.jsx)("a",{href:s.github,"aria-label":"github",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),s.linkedin&&Object(a.jsx)("a",{href:s.linkedin,"aria-label":"linkedin",className:"link link--icon",children:Object(a.jsx)(A.a,{})})]})]})]})}),K=n(7),T=n.n(K),q=n(20),G=n.n(q),H=(n(35),function(e){var t=e.project;return Object(a.jsxs)("div",{className:"project",children:[Object(a.jsx)("h3",{children:t.name}),Object(a.jsx)("p",{className:"project__description",children:t.description}),t.stack&&Object(a.jsx)("ul",{className:"project__stack",children:t.stack.map((function(e){return Object(a.jsx)("li",{className:"project__stack-item",children:e},T()())}))}),t.sourceCode&&Object(a.jsx)("a",{href:t.sourceCode,"aria-label":"source code",className:"link link--icon",children:Object(a.jsx)(P.a,{})}),t.livePreview&&Object(a.jsx)("a",{href:t.livePreview,"aria-label":"live preview",className:"link link--icon",children:Object(a.jsx)(G.a,{})})]})}),I=(n(36),function(){return x.length?Object(a.jsxs)("section",{id:"projects",className:"section projects",children:[Object(a.jsx)("h2",{className:"section__title",children:"Projects"}),Object(a.jsx)("div",{className:"projects__grid",children:x.map((function(e){return Object(a.jsx)(H,{project:e},T()())}))})]}):null}),R=(n(37),function(){return f.length?Object(a.jsxs)("section",{className:"section skills",id:"skills",children:[Object(a.jsx)("h2",{className:"section__title",children:"Skills"}),Object(a.jsx)("ul",{className:"skills__list",children:f.map((function(e){return Object(a.jsx)("li",{className:"skills__list-item btn btn--plain",children:e},T()())}))})]}):null}),B=n(21),Q=n.n(B),V=(n(38),function(){var e=Object(s.useState)(!1),t=Object(i.a)(e,2),n=t[0],c=t[1];return Object(s.useEffect)((function(){var e=function(){return window.pageYOffset>500?c(!0):c(!1)};return window.addEventListener("scroll",e),function(){return window.removeEventListener("scroll",e)}}),[]),n?Object(a.jsx)("div",{className:"scroll-top",children:Object(a.jsx)("a",{href:"#top",children:Object(a.jsx)(Q.a,{fontSize:"large"})})}):null}),Y=(n(39),function(){return p?Object(a.jsxs)("section",{className:"section contact center",id:"contact",children:[Object(a.jsx)("h2",{className:"section__title",children:"Contact"}),Object(a.jsx)("a",{href:"mailto:".concat(p),children:Object(a.jsx)("span",{type:"button",className:"btn btn--outline",children:"Email me"})})]}):null}),z=(n(40),function(){return Object(a.jsx)("footer",{className:"footer",children:Object(a.jsx)("a",{href:"https://github.com/jkulkarni",className:"link footer__link",children:"Made with \u2764\ufe0f by Jui Kulkarni"})})}),D=(n(41),function(){var e=Object(s.useContext)(l),t=Object(i.a)(e,1)[0].themeName;return Object(a.jsxs)("div",{id:"top",className:"".concat(t," app"),children:[Object(a.jsx)(E,{}),Object(a.jsxs)("main",{children:[Object(a.jsx)(L,{}),Object(a.jsx)(I,{}),Object(a.jsx)(R,{}),Object(a.jsx)(Y,{})]}),Object(a.jsx)(V,{}),Object(a.jsx)(z,{})]})});n(42);Object(c.render)(Object(a.jsx)(r,{children:Object(a.jsx)(D,{})}),document.getElementById("root"))}},[[44,1,2]]]);
//# sourceMappingURL=main.df168281.chunk.js.map
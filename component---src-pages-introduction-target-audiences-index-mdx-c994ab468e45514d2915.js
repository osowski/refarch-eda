(window.webpackJsonp=window.webpackJsonp||[]).push([[38,84],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),l=a("Wbzz"),s=a("Xrax"),c=a("k4MR"),b=a("TSYQ"),d=a.n(b),u=a("QH2O"),m=a.n(u),p=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(p.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:m.a.text},a)))))},x=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(l.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,s=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+x.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:x.link,href:s},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),v=a("I8xM"),f=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,s=new RegExp(i+"/?(#.*)?$"),c=n.replace(s,a);return Object(p.b)("li",{key:e,className:d()((t={},t[v.selectedItem]=r,t),v.listItem)},Object(p.b)(l.Link,{className:v.link,to:""+c},e))}));return Object(p.b)("div",{className:v.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:v.list},r))))))},t}(i.a.Component),w=a("MjG9"),y=a("CzIb"),T=a("Asxa"),N=a("OIbQ"),P=a.n(N),k=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:P.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,b=void 0===r?{}:r,d=t.relativePagePath,u=t.titleType,m=b.tabs,x=b.title,j=b.theme,v=b.description,T=b.keywords,N=b.date,P=Object(y.a)().interiorTheme,I=Object(l.useStaticQuery)("2456312558").site.pathPrefix,C=I?n.pathname.replace(I,""):n.pathname,E=m?C.split("/").filter(Boolean).slice(-1)[0]||o()(m[0],{lower:!0}):"",H=j||P;return Object(p.b)(c.a,{tabs:m,homepage:!1,theme:H,pageTitle:x,pageDescription:v,pageKeywords:T,titleType:u},Object(p.b)(h,{title:i?Object(p.b)(i,null):x,label:"label",tabs:m,theme:H}),m&&Object(p.b)(f,{title:x,slug:C,tabs:m,currentTab:E}),Object(p.b)(w.a,{padded:!0},a,Object(p.b)(g,{relativePagePath:d}),Object(p.b)(k,{date:N})),Object(p.b)(O.a,{pageContext:t,location:n,slug:C,tabs:m,currentTab:E}),Object(p.b)(s.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},miWp:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));var n=a("wx14"),i=a("zLVn"),r=(a("q1tI"),a("7ljp")),o=a("013z"),l=(a("qKvR"),{}),s={_frontmatter:l},c=o.a;function b(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(r.b)(c,Object(n.a)({},s,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"While the content of this repository is mostly technical in nature and is intended for a technical audience, it also introduces methodology practices, such as ",Object(r.b)("a",{parentName:"p",href:"/refarch-eda/methodology/event-storming/"},"Event Storming"),", which would be used with business leaders to identify key business domain events and actions. You may find it useful to share this information with your business leaders before engaging them in such activities."),Object(r.b)("p",null,"At a high level, this is what you should expect to learn by working through this repository and the related examples:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"As an architect,")," you will understand how the event-driven architecture provides capabilities which support development of event-driven solutions."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"As a developer,")," you will understand how to develop event-driven applications and develop analytics based on event streams."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"As a project manager,")," you may understand all the artifacts which may be required for an event-driven solution.")),Object(r.b)("p",null,"The related repositories provide sample code and best practices  which you may want to reuse during your future implementations. The reference architecture has been designed to be portable and applicable to Public Cloud, Hybrid Cloud and across multiple clouds. Examples given are directly deployable in IBM Public Cloud and Red Hat OpenShift Container Platform."))}b.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-introduction-target-audiences-index-mdx-c994ab468e45514d2915.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[90,101],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),b=a("NmYn"),l=a.n(b),c=a("Wbzz"),i=a("Xrax"),s=a("k4MR"),o=a("TSYQ"),d=a.n(o),m=a("QH2O"),u=a.n(m),p=a("qKvR"),O=function(e){var t,a=e.title,n=e.theme,r=e.tabs,b=void 0===r?[]:r;return Object(p.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=b.length,t[u.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:u.a.text},a)))))},j=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(c.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,b=r.baseUrl,l=r.subDirectory,i=b+"/edit/"+r.branch+l+"/src/pages"+t;return b?Object(p.b)("div",{className:"bx--row "+j.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:j.link,href:i},"Edit this page on GitHub"))):null},g=a("FCXl"),x=a("dI71"),h=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(x.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],b=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),b=a===r,i=new RegExp(r+"/?(#.*)?$"),s=n.replace(i,a);return Object(p.b)("li",{key:e,className:d()((t={},t[h.selectedItem]=b,t),h.listItem)},Object(p.b)(c.Link,{className:h.link,to:""+s},e))}));return Object(p.b)("div",{className:h.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:h.list},b))))))},t}(r.a.Component),k=a("MjG9"),v=a("CzIb"),T=a("Asxa"),w=a("OIbQ"),P=a.n(w),y=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(T.c,{className:P.a.row},Object(p.b)(T.a,null,Object(p.b)("div",{className:P.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,b=t.frontmatter,o=void 0===b?{}:b,d=t.relativePagePath,m=t.titleType,u=o.tabs,j=o.title,x=o.theme,h=o.description,T=o.keywords,w=o.date,P=Object(v.a)().interiorTheme,I=Object(c.useStaticQuery)("2456312558").site.pathPrefix,L=I?n.pathname.replace(I,""):n.pathname,S=u?L.split("/").filter(Boolean).slice(-1)[0]||l()(u[0],{lower:!0}):"",K=x||P;return Object(p.b)(s.a,{tabs:u,homepage:!1,theme:K,pageTitle:j,pageDescription:h,pageKeywords:T,titleType:m},Object(p.b)(O,{title:r?Object(p.b)(r,null):j,label:"label",tabs:u,theme:K}),u&&Object(p.b)(N,{title:j,slug:L,tabs:u,currentTab:S}),Object(p.b)(k.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(y,{date:w})),Object(p.b)(g.a,{pageContext:t,location:n,slug:L,tabs:u,currentTab:S}),Object(p.b)(i.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},Mziz:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return o}));var n=a("wx14"),r=a("zLVn"),b=(a("q1tI"),a("7ljp")),l=a("013z"),c=(a("qKvR"),{}),i={_frontmatter:c},s=l.a;function o(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)(s,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",null,"Kafka Streams Labs"),Object(b.b)("p",null,"The following hands-on labs walk users through building and testing Kafka Streams-based applications developed with Kafka API and Quarkus."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",{parentName:"tr",align:null},"Scenario"),Object(b.b)("th",{parentName:"tr",align:null},"Description"),Object(b.b)("th",{parentName:"tr",align:"left"},"Link"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Lab 0"),Object(b.b)("td",{parentName:"tr",align:null},"Introduction to Kafka Streams application code and test capabilities"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/refarch-eda/use-cases/kafka-streams/lab-0/"},"Kafka Streams - Lab 0"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Lab 1"),Object(b.b)("td",{parentName:"tr",align:null},"Advanced Kafka Streams test cases and utilizing state stores"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/refarch-eda/use-cases/kafka-streams/lab-1/"},"Kafka Streams - Lab 1"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Lab 2"),Object(b.b)("td",{parentName:"tr",align:null},"Advanced Kafka Streams test cases and connecting Kafka Streams to IBM Event Streams instances"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/refarch-eda/use-cases/kafka-streams/lab-2/"},"Kafka Streams - Lab 2"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",{parentName:"tr",align:null},"Lab 3"),Object(b.b)("td",{parentName:"tr",align:null},"Inventory management with Kafka Streams with IBM Event Streams on OpenShift"),Object(b.b)("td",{parentName:"tr",align:"left"},Object(b.b)("a",{parentName:"td",href:"/refarch-eda/use-cases/kafka-streams/lab-3/"},"Kafka Streams - Lab 3"))))))}o.isMDXComponent=!0},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-use-cases-kafka-streams-index-mdx-6d3316bc78333eb210ca.js.map
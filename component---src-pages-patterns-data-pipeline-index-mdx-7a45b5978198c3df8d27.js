(window.webpackJsonp=window.webpackJsonp||[]).push([[49,99],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),r=a("NmYn"),o=a.n(r),s=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),b=a.n(d),p=a("QH2O"),u=a.n(p),m=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,i=e.tabs,r=void 0===i?[]:i;return Object(m.b)("div",{className:b()(u.a.pageHeader,(t={},t[u.a.withTabs]=r.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},g=a("BAC9"),w=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,i=a||n,r=i.baseUrl,o=i.subDirectory,c=r+"/edit/"+i.branch+o+"/src/pages"+t;return r?Object(m.b)("div",{className:"bx--row "+g.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),O=a("dI71"),f=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(O.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,i=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=o()(e,{lower:!0,strict:!0}),r=a===i,c=new RegExp(i+"/?(#.*)?$"),l=n.replace(c,a);return Object(m.b)("li",{key:e,className:b()((t={},t[f.selectedItem]=r,t),f.listItem)},Object(m.b)(s.Link,{className:f.link,to:""+l},e))}));return Object(m.b)("div",{className:f.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:f.list},r))))))},t}(i.a.Component),v=a("MjG9"),x=a("CzIb"),y=a("Asxa"),A=a("OIbQ"),k=a.n(A),T=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(y.c,{className:k.a.row},Object(m.b)(y.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,i=e.Title,r=t.frontmatter,d=void 0===r?{}:r,b=t.relativePagePath,p=t.titleType,u=d.tabs,g=d.title,O=d.theme,f=d.description,y=d.keywords,A=d.date,k=Object(x.a)().interiorTheme,I=Object(s.useStaticQuery)("2456312558").site.pathPrefix,P=I?n.pathname.replace(I,""):n.pathname,C=u?P.split("/").filter(Boolean).slice(-1)[0]||o()(u[0],{lower:!0}):"",E=O||k;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:E,pageTitle:g,pageDescription:f,pageKeywords:y,titleType:p},Object(m.b)(h,{title:i?Object(m.b)(i,null):g,label:"label",tabs:u,theme:E}),u&&Object(m.b)(N,{title:g,slug:P,tabs:u,currentTab:C}),Object(m.b)(v.a,{padded:!0},a,Object(m.b)(w,{relativePagePath:b}),Object(m.b)(T,{date:A})),Object(m.b)(j.a,{pageContext:t,location:n,slug:P,tabs:u,currentTab:C}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},WxBR:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return p}));var n,i=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),s=a("013z"),c=(a("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",e)}),d={_frontmatter:c},b=s.a;function p(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(b,Object(i.a)({},d,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("strong",null,"Update 02/09/21")," - UNDER CONSTRUCTION"),Object(o.b)("p",null,"In this article we are highlighting some practices to design and develop data intensive application in the context of microservice solution. This is strongly linked to the adoption of event-driven microservices, but addresses the data consistency and eventual data consistency discussions, as well as the establishment of a data services."),Object(o.b)("h2",null,"Context"),Object(o.b)("p",null,"A typical modern business solution will include a set of microservices working together in choreography to exchange data. The adoption of event-driven microservices, with all the related design patterns, is described in separate articles that you can read ",Object(o.b)("a",{parentName:"p",href:"/refarch-eda/patterns/"},"here"),". "),Object(o.b)("p",null,"When zooming to a particular data intensive microservice we will find a set of important data centric features that may look like in the diagram below, which presents one component of a bigger distributed system."),Object(o.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"871px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB60lEQVQoz1WSiXLaMBCG8/7v0ekDNJM0nWkgCWlLOBtDQjC3AYPNZWODfIivskwmqWZWo13t/vq00gVqOKMJT/UGhmEwdAxq1i3rwVrtnDidzpZ5pw//fWQrqWO5f5FN41qby1KF6+Ijv1rP/Oy3KbU2uOHpXKLV+DykPGn7HM8O0oJ2CPUFGC40JtBS679L6LpSC2Z1YSQpdAIuqx6lbkic5ofZXsxNM6A2Epr0IgsOXUGxd+RxcKRoeDyYIXd9wfNMqG1JVpukEntzwDCntHsW9tIhjiImm4ivpTWFF/9dEFw/ousIegq1M/IxpwGm8i2VnJHECjRU04Mi/F7d8tsMEEmqCee7mC/lA1dtQSrPggNFeNs9cN8NKLR97jp7iuaBhnUkkXnDs+T+fEfZGNJ8s7BmNp7nsQ1iGuM9HQWTSplf2domlK2U6lBQVletDJRNEl6dRCfJs+ByE7Px5X+PkJxJM0tTmRPOtoLa+ECzv6dm+jR6PvVRyNsyJ8wFJQsluHADgv2OMAz0K4s4yV9ciZ8J0f26flV9eHL59sfhqrLi5iXkaZwLJjInjBRBdeDzo+5gzn1NGSnCNE2VqPwQFFFCcIxYrjaMpza2s9L+QcSfPnNWLCm9eVyqA4crQV4b47ordp6vSf8BySb1jyoMCpkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Data Intensive App",title:"Data Intensive App",src:"/refarch-eda/static/002943972281880dced3a672b1facbe5/1c25a/data-intensive-app.png",srcSet:["/refarch-eda/static/002943972281880dced3a672b1facbe5/7fc1e/data-intensive-app.png 288w","/refarch-eda/static/002943972281880dced3a672b1facbe5/a5df1/data-intensive-app.png 576w","/refarch-eda/static/002943972281880dced3a672b1facbe5/1c25a/data-intensive-app.png 871w"],sizes:"(max-width: 871px) 100vw, 871px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",null,"The services involved include:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"API to define the service contract: ",Object(o.b)("a",{parentName:"li",href:"https://www.openapis.org/"},"OpenAPI")," or ",Object(o.b)("a",{parentName:"li",href:"https://www.asyncapi.com/"},"AsynchAPI")),Object(o.b)("li",{parentName:"ul"},"Databases to store data for long term - document oriented or SQL based"),Object(o.b)("li",{parentName:"ul"},"Caches to speed up retrieving data for expensive queries"),Object(o.b)("li",{parentName:"ul"},"Search indexes to support search on a corpus"),Object(o.b)("li",{parentName:"ul"},"Stream processing to pub/sub messages, which are now also considered as long duration datastore (Kafka)."),Object(o.b)("li",{parentName:"ul"},"Interactive queries on top of data streams, and aggregates."),Object(o.b)("li",{parentName:"ul"},"Message contract and schemas"),Object(o.b)("li",{parentName:"ul"},"Unified data service which includes big data storage, but also data catalog and queries on data at rest.")),Object(o.b)("p",null,"When designing such application we need to address a set of important subjects:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"What is the type of workload on the database? Read heavy, global access query, write heavy or balanced. "),Object(o.b)("li",{parentName:"ul"},"Expected throughtput? Is there any fluctuation during the day? does it need to scale over time?"),Object(o.b)("li",{parentName:"ul"},"How much data to store? what will be the pattern for this size (Always grow)? How content is access via which expected security and access control?"),Object(o.b)("li",{parentName:"ul"},"What will be the expected durability? Week or forever?"),Object(o.b)("li",{parentName:"ul"},"Expected latency and number of concurrent users?"),Object(o.b)("li",{parentName:"ul"},"How the data model is modeled, does it need to support relationship integrity? Join queries? Structured or semi-structured content?"),Object(o.b)("li",{parentName:"ul"},"Do we need strong schema, or more flexible one?"),Object(o.b)("li",{parentName:"ul"},"Do we need search on unstructured data? NoSql?"),Object(o.b)("li",{parentName:"ul"},"How to ensure data correctness and completeness?"),Object(o.b)("li",{parentName:"ul"},"How to address good performance when exposing data, even when app is running slowly?"),Object(o.b)("li",{parentName:"ul"},"How to scale and address increase in transaction volume and data size?"),Object(o.b)("li",{parentName:"ul"},"What data to expose to other services via messaging ? Which formats?"),Object(o.b)("li",{parentName:"ul"},"What data to expose to other services via APIs ?"),Object(o.b)("li",{parentName:"ul"},"How to support application reliability when some components are not performing within their SLA? How to be fault-tolerant?"),Object(o.b)("li",{parentName:"ul"},"How to test fault-tolerance?"),Object(o.b)("li",{parentName:"ul"},"How does adding horizontal compute power impact the data access?"),Object(o.b)("li",{parentName:"ul"},"How to support disaster recovery?")),Object(o.b)("p",null,"In modern big data applications, hardware redundancy is not suffisant, the design needs to support unexpected faults, to avoid cascading failures and to support new version deployment with rolling-upgrade capability. "),Object(o.b)("p",null,"When addressing scalability and load growth, we need to define the load parameters: number of transactions per second, the number of read and write operations, the number of active sessions, … on average and at peak. Each microservice in a solution will have its own load characteristics. "),Object(o.b)("p",null,"From there, we need to address the following issues:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"How does load growth impact performance while keeping existing compute resources?"),Object(o.b)("li",{parentName:"ul"},"What is the increase of compute resource needed to support same performance while load growth?")),Object(o.b)("p",null,"The solution problem is a combination of different characteristics to address: read volume, write volume, data store volume, data complexity and size, response time, access logic…"),Object(o.b)("p",null,"For batch processing the measurement is the throughput: number of records per second or time to process n records. For real time processing the response time measures the time to get a response from a client’s point of view after sending a request."),Object(o.b)("p",null,"When defining service level agreement, it is important to use the median response time and a percentile of outliers. An example the median could be at 300ms at P99 (99/100) under 1s."),Object(o.b)("p",null,"Tail latencies, or high percentiles of response time, impact directly user experience and cost money."),Object(o.b)("h2",null,"Distributed data"),Object(o.b)("p",null,"Adopting microservice architecture, means distributed systems and distributed data. The main motivations for that are scalability (load data operations could not be supported by one server), high availability (by sharing the same processing between multiple machines), and reducing latency to distribute data close to the end users."),Object(o.b)("p",null,"Vertical scaling is still bounded by hardware resources, so at higher load we need to support horizontal scaling by adding more machines to the cluster or cross multiple clusters.  When adding machines, we may want to adopt different techniques for data sharing: "),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"shared memory"),Object(o.b)("li",{parentName:"ul"},"shared storage"),Object(o.b)("li",{parentName:"ul"},"shared nothing: cpu, memory and disk are per node. Cluster manages node orchestration over network. This architecture brings new challenges. ")),Object(o.b)("h2",null,"Compendium"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321/ref=sr_1_3?crid=F3G6F7KYQZMH&keywords=designing+data+intensive+applications&qid=1572566804&sprefix=designing+data+%2Caps%2C204&sr=8-3"},"Designing data intensive application - Martin Kleppmann"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/culture/assemble-team-for-data-driven-project"},"Assemble the team to support a data-driven project - author: Stacey Ronaghan"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/culture/valuation-of-data/"},"The valuation of data - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/discover/build-a-business-objective"},"Define business objectives - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/discover/recognize-value-of-data"},"Recognize the value of data - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://cloudcontent.mybluemix.net/cloud/garage/practices/discover/business-problem-to-ai-data-science-solution"},"Translate a business problem into an AI and Data Science solution - authors: Tommy Eunice, Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/code/data-preparation-ai-data-science/"},"Prepare your data for AI and data science - authors: Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/think/define-data-strategy/"},"Define your data strategy -authors: Beth Ackerman, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/think/normalize-data/"},"Normalize data to its atomic level - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/think/data-needs-for-ai-data-science/"},"Understand data needs to support AI and Data Science solutions - authors: Tommy Eunice, Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/think/thought-experiments-and-hypothesis-driven-analysis/"},"Run thought experiments by using hypothesis-driven analysis - author: Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/code/deliver-singular-data-function/"},"Deliver a singular data function - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/code/construct-data-topology/"},"Construct your data topology - authors: Neal Fishman, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/code/build-data-lake-design/"},"Build your data lake design - author: Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/reason/put-ai-data-science-to-work"},"Put AI and data science to work in your organization - authors: Edd Biddle, Paul Christensen"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/reason/dispel-magic-of-ai"},"Look behind the curtain of AI - author: Edd Biddle"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/reason/model-selection-development-ai-data-science"},"Select and develop an AI and data science model - author: Edd Biddle"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/reason/optimize-train-ai-model"},"Enhance and optimize your AI and data science models - author: Edd Biddle"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/manage/establish-data-governance"},"Establish data governance - author: Neal Fishman"))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",{parentName:"p",href:"https://www.ibm.com/cloud/garage/practices/run/deploy-ai-model/"},"Deploy an AI model - author: Sujatha Perepa")," "))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-patterns-data-pipeline-index-mdx-7a45b5978198c3df8d27.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[58,84],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),r=a("NmYn"),c=a.n(r),s=a("Wbzz"),i=a("Xrax"),b=a("k4MR"),l=a("TSYQ"),d=a.n(l),p=a("QH2O"),m=a.n(p),u=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,r=void 0===o?[]:o;return Object(u.b)("div",{className:d()(m.a.pageHeader,(t={},t[m.a.withTabs]=r.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,r=o.baseUrl,c=o.subDirectory,i=r+"/edit/"+o.branch+c+"/src/pages"+t;return r?Object(u.b)("div",{className:"bx--row "+h.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},k=a("FCXl"),A=a("dI71"),O=a("I8xM"),j=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=c()(e,{lower:!0,strict:!0}),r=a===o,i=new RegExp(o+"/?(#.*)?$"),b=n.replace(i,a);return Object(u.b)("li",{key:e,className:d()((t={},t[O.selectedItem]=r,t),O.listItem)},Object(u.b)(s.Link,{className:O.link,to:""+b},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},r))))))},t}(o.a.Component),x=a("MjG9"),v=a("CzIb"),w=a("Asxa"),y=a("OIbQ"),N=a.n(y),C=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(w.c,{className:N.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,r=t.frontmatter,l=void 0===r?{}:r,d=t.relativePagePath,p=t.titleType,m=l.tabs,h=l.title,A=l.theme,O=l.description,w=l.keywords,y=l.date,N=Object(v.a)().interiorTheme,S=Object(s.useStaticQuery)("2456312558").site.pathPrefix,T=S?n.pathname.replace(S,""):n.pathname,B=m?T.split("/").filter(Boolean).slice(-1)[0]||c()(m[0],{lower:!0}):"",E=A||N;return Object(u.b)(b.a,{tabs:m,homepage:!1,theme:E,pageTitle:h,pageDescription:O,pageKeywords:w,titleType:p},Object(u.b)(g,{title:o?Object(u.b)(o,null):h,label:"label",tabs:m,theme:E}),m&&Object(u.b)(j,{title:h,slug:T,tabs:m,currentTab:B}),Object(u.b)(x.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:d}),Object(u.b)(C,{date:y})),Object(u.b)(k.a,{pageContext:t,location:n,slug:T,tabs:m,currentTab:B}),Object(u.b)(i.a,null))}},"8o4X":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return l}));var n=a("wx14"),o=a("zLVn"),r=(a("q1tI"),a("7ljp")),c=a("013z"),s=(a("qKvR"),{}),i={_frontmatter:s},b=c.a;function l(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(r.b)(b,Object(n.a)({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,Object(r.b)("a",{parentName:"p",href:"https://kafka.apache.org/documentation/#connect"},"Kafka connect")," is an open source component for easily integrate external systems with Kafka. It works with any Kafka product like IBM Event Streams. It uses the concepts of source and sink connectors to ingest or deliver data to / from  Kafka topics."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACLklEQVQoz01Ty24TQRD0d8MNiQMgTjxkwYELEeSM4BKUSEFAQAGCIkAKSmTs2MSvXe9rvNsz7qJ61o5ZqdQ9O7011dO1nbTwGbEkXJJ7l1XiyqV3hWujq4nGu2rZwtYVYXtt3SaXJWPRSfIgVa1YNorCrTDPBPwQ3MSM+WDSoE+MU4kYzgRXiWC6kLhvdTw8gnkwwrpwyoUqCZVFjD5iNBc9HzURJNP+WPRHT7R3JUrC+K6qG6U6LVsRQkJf59UKWbXS3AUUlQArjyCeQeBlq8AUDadNVJezLskFvQlwOVMtW4W+Q/Y6LQSmJi8Fp0PBzjfBq5+C3e+CN78ErhYsuJcUgaSBRIECxESg+2IPh8dnKgE8pDFCz5Y9iymfp7w7F9zcEzz4KLi1L3jEOOXdpSSbL0pMkxJJVpHUY54rbtx5jNf7H1QBHrAmtP7TNeFRT3D7QPDks+DeoeDZseByIlFVSiIjXOQVZgvPISnudnfw9v1XXeFa4bZlu78vfcFDqnrOtrufBC9PeDc8KC2t7RCRxsj3dMf9p7s4ODrRoGvCpPB1LCqC5lWIH9tQvAg0+JjTh7zH2AUt08TYTpW1fGQFtSHFofCi66xUnhhtEyeZO5usN9X4PWxwNmjwlzntgtOLBhej1pPmR6oybGzjow8dpdfSEv5vbLPHgPf3Z9xgQgIjpRdjtD3D2thabGzDX44KzQZBF4VHVm7db8TWqrVseVW3a4trRZs/5JrwHwzijs+cg/IeAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Kafka component",title:"Kafka component",src:"/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/3cbba/kafka-components.png",srcSet:["/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/7fc1e/kafka-components.png 288w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/a5df1/kafka-components.png 576w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/3cbba/kafka-components.png 1152w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/b1c97/kafka-components.png 1189w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"The general concepts are detailed in the ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/connecting/connectors/"},"IBM Event streams product documentation"),". Here is a quick summary:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Connector")," represents a logical job to move data from / to kafka  to / from external systems. A lot of ",Object(r.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/connectors/"},"existing connectors")," can be reused, or you can ",Object(r.b)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#connect_development"},"implement your own"),"."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Workers")," are JVM running the connector. For production deployment workers run in cluster or “distributed mode”, and leverage the group management protocol to scale task horizontally."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Tasks"),": each worker coordinates a set of tasks to copy data. In distributed mode, task states are saved in kafka topics. They can be started, stopped at any time to support resilience, and scalable data pipeline."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"REST API")," to configure the connectors and monitors the tasks.")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAAByElEQVQoz1WSXWsaURCG/af9E73oRQuFEkhLodBECL1ISUpj2htTCKFi8CurxthaxRDbqllFou6q8bP76e7Tc3aTkg7MDvOeM+/OO3Mivo8wHxl98fHWa+EuvieiJ0FPnDvCJeZhWj6WSeC2BYYpchFtO+SILJeg6z6OqBmPNXaPCmwefCN6mGVw00Ep1Xkb+8HLvTKF8iXNZpuvxSjHF89JKHsM+gtMQa6PfOZzQTibQes6JOz1+jzbSfHotcKT7QTdtspJNsnGpzc8/fCK0zOFWu03G/sHPN59z1bsM8ObSVCrdnzRkCCUiWxXqEFVBxweJdmPp4nFE/z62SGtJPmS2ySeeUGhpFCvt3gXS7H1sSDupBnpGnJqlhVKj8gJOo6PGB3aUKeYz1L9XkLJZWm2upTOa+TSFbKpCuVynUZDJZ/LUKuckz/LiK7GhBYsg8j9UqQZpsVwssB2XGZzi9upi2E4rFY2qz8Wy5XDYilc5I6QZtm2UOaFdP7dUu4TaSvDoj8xOK1q7Jy0KTbCv3t355fdGdHjJpXW7T/8IWHQ4cNEPgv5TK5UjWpLR5saAea660BFbzjl4qrPaGaKGom7YlTr/wj/AuzFSnsMxXeCAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Connectors and tasks",title:"Connectors and tasks",src:"/refarch-eda/static/8394a7b0c390463510ec08a446076f98/3cbba/connector-tasks.png",srcSet:["/refarch-eda/static/8394a7b0c390463510ec08a446076f98/7fc1e/connector-tasks.png 288w","/refarch-eda/static/8394a7b0c390463510ec08a446076f98/a5df1/connector-tasks.png 576w","/refarch-eda/static/8394a7b0c390463510ec08a446076f98/3cbba/connector-tasks.png 1152w","/refarch-eda/static/8394a7b0c390463510ec08a446076f98/aee90/connector-tasks.png 1534w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,"When a connector is submitted to the cluster via a POST operation on its API, the workers rebalance the full set of connectors in the cluster and their tasks so that each worker has approximately the same amount of work."),Object(r.b)("h2",null,"Characteristics"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Copy vast quantity of data from source to kafka: work at the datasource level. So when the source is a database, it uses JDBC API for example."),Object(r.b)("li",{parentName:"ul"},"Support streaming and batch."),Object(r.b)("li",{parentName:"ul"},"Scale from standalone, mono connector approach to start small, to run in parallel on distributed cluster."),Object(r.b)("li",{parentName:"ul"},"Copy data, externalizing transformation in other framework."),Object(r.b)("li",{parentName:"ul"},"Kafka Connect defines three models: data model, worker model and connector model.")),Object(r.b)("h2",null,"Installation"),Object(r.b)("p",null,"The  Kafka connect framework fits well into a kubernetes deployment. We have different options for that deployment."),Object(r.b)("p",null,"We recommend reading the ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/connecting/setting-up-connectors/"},"IBM  event streams documentation")," for installing Kafka connect with IBM Event Streams or you can also leverage the ",Object(r.b)("a",{parentName:"p",href:"https://strimzi.io/docs/0.18.0/#kafka-connect-str"},"Strimzi Kafka connect operator"),"."),Object(r.b)("p",null,"With IBM Event Streams on premise, the connectors setup is part of the user admin console toolbox:"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABTElEQVQoz3VRwU7DMAztn3JF/AIX/oEbExIDIU0rA01sSBx2gAkQJ34B7TJ1bdd2TdM0ifNIMtSOAZYsW/Hzs58TRHGOPC/AOUdVVd5dvuvurWQcdV3/qu3jgk2lYQz+NbI1pQkFkyCi7t3mxja6qC1IW5xUhCCJV1gsFlgul63neY6yLCGl/G43SNPU11zMsgxN00AI4Uk70wiaRviCk7PrQtR2osbVK3D+THZLbbfRvi2KIoRhiNFohHA4QO8xxukM6M8tIRdbycZ0ErZyyBMO3zWuXyQ2XLeS4zjGZDLBdPqA8fgOl7MVek/A4K1BkBZ2O9G0RB2h2ZFDSCyOVRzCbv+3GY8LsnV3myRJfEzTNZSSHdQSV6z0tyuKwp+EMeZ/VSnVDnaLBFrrH1Ldj7pJnzHhqE84vCAc3ygISS35Pvb+g3BwRji5VfgCjPRh0zKEE38AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(r.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"Event Streams connector",title:"Event Streams connector",src:"/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/3cbba/es-connectors.png",srcSet:["/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/7fc1e/es-connectors.png 288w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/a5df1/es-connectors.png 576w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/3cbba/es-connectors.png 1152w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/f9628/es-connectors.png 1343w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(r.b)("p",null,Object(r.b)("em",{parentName:"p"},"Deploying connectors against an IBM Event Streams cluster, you need to have an API key with Manager role, to be able to create topic, produce and consume messages for all topics.")),Object(r.b)("p",null,"As an extendable framework, Kafka Connect, can have new connector plugins. To deploy new connector, you need to use the kafka docker image which needs to be updated with the connector jars and redeployed to kubernetes cluster or to other environment. With IBM Event Streams on Openshift, the toolbox includes a kafka connect environment packaging, that defines a Dockerfile and configuration files to build your own image with the connectors jar files you need. The configuration files defines the properties to connect to Event Streams kafka brokers using API keys and SASL."),Object(r.b)("p",null,"The following ",Object(r.b)("a",{parentName:"p",href:"https://github.com/ibm-messaging"},"public IBM messaging github account")," includes supported, open sourced, connectors (search for ",Object(r.b)("inlineCode",{parentName:"p"},"connector"),")."),Object(r.b)("p",null,"Here is the ",Object(r.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/connectors/"},"list of supported connectors")," for IBM Event Streams."),Object(r.b)("h2",null,"Connecting to IBM Cloud Event Streams remote cluster"),Object(r.b)("p",null,"We have developed different scenarios in ",Object(r.b)("a",{parentName:"p",href:"/refarch-eda/scenarios/realtime-inventory/"},"this lab")," to remotely connect a Kafka Connect distributed cluster to Event Streams on cloud."),Object(r.b)("h2",null,"Further Readings"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://kafka.apache.org/documentation/#connect"},"Apache Kafka connect documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://docs.confluent.io/current/connect/index.html"},"Confluent Connector Documentation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/connecting/connectors/"},"IBM Event Streams Connectors")," or ",Object(r.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/connectors/"},"the list of supported connectors")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",{parentName:"li",href:"https://github.com/mongodb/mongo-kafka"},"MongoDB Connector for Apache Kafka"))))}l.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-technology-kafka-connect-index-mdx-40d5fc4cee3925a82893.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[66,84],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),r=a.n(n),o=a("NmYn"),i=a.n(o),s=a("Wbzz"),c=a("Xrax"),b=a("k4MR"),d=a("TSYQ"),l=a.n(d),p=a("QH2O"),m=a.n(p),u=a("qKvR"),h=function(e){var t,a=e.title,n=e.theme,r=e.tabs,o=void 0===r?[]:r;return Object(u.b)("div",{className:l()(m.a.pageHeader,(t={},t[m.a.withTabs]=o.length,t[m.a.darkMode]="dark"===n,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,r=a||n,o=r.baseUrl,i=r.subDirectory,c=o+"/edit/"+r.branch+i+"/src/pages"+t;return o?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:c},"Edit this page on GitHub"))):null},A=a("FCXl"),j=a("dI71"),O=a("I8xM"),k=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],o=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),o=a===r,c=new RegExp(r+"/?(#.*)?$"),b=n.replace(c,a);return Object(u.b)("li",{key:e,className:l()((t={},t[O.selectedItem]=o,t),O.listItem)},Object(u.b)(s.Link,{className:O.link,to:""+b},e))}));return Object(u.b)("div",{className:O.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:O.list},o))))))},t}(r.a.Component),y=a("MjG9"),N=a("CzIb"),v=a("Asxa"),x=a("OIbQ"),T=a.n(x),w=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(v.c,{className:T.a.row},Object(u.b)(v.a,null,Object(u.b)("div",{className:T.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,r=e.Title,o=t.frontmatter,d=void 0===o?{}:o,l=t.relativePagePath,p=t.titleType,m=d.tabs,g=d.title,j=d.theme,O=d.description,v=d.keywords,x=d.date,T=Object(N.a)().interiorTheme,C=Object(s.useStaticQuery)("2456312558").site.pathPrefix,B=C?n.pathname.replace(C,""):n.pathname,S=m?B.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",L=j||T;return Object(u.b)(b.a,{tabs:m,homepage:!1,theme:L,pageTitle:g,pageDescription:O,pageKeywords:v,titleType:p},Object(u.b)(h,{title:r?Object(u.b)(r,null):g,label:"label",tabs:m,theme:L}),m&&Object(u.b)(k,{title:g,slug:B,tabs:m,currentTab:S}),Object(u.b)(y.a,{padded:!0},a,Object(u.b)(f,{relativePagePath:l}),Object(u.b)(w,{date:x})),Object(u.b)(A.a,{pageContext:t,location:n,slug:B,tabs:m,currentTab:S}),Object(u.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},prNZ:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return u}));var n=a("wx14"),r=a("zLVn"),o=(a("q1tI"),a("7ljp")),i=a("013z"),s=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=c("InlineNotification"),d=c("AnchorLinks"),l=c("AnchorLink"),p={_frontmatter:s},m=i.a;function u(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(n.a)({},p,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("strong",null,"TODO")," - Work in progress"),Object(o.b)(d,{mdxType:"AnchorLinks"},Object(o.b)(l,{mdxType:"AnchorLink"},"Pre-requisites"),Object(o.b)(l,{mdxType:"AnchorLink"},"Run the Kafka Connector in distributed mode"),Object(o.b)(l,{mdxType:"AnchorLink"},"Upload the DB2 sink definition"),Object(o.b)(l,{mdxType:"AnchorLink"},"Generate some records"),Object(o.b)(l,{mdxType:"AnchorLink"},"Verify records are uploaded into the Inventory database")),Object(o.b)("p",null,"This scenario is using the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/ibm-messaging/kafka-connect-jdbc-sink"},"IBM Kafka Connect sink connector for JDBC")," to get data from the ",Object(o.b)("inlineCode",{parentName:"p"},"inventory topic")," and write records to the ",Object(o.b)("inlineCode",{parentName:"p"},"inventory")," table in DB2. This lab explain the definition of the connector and how to run an integration test that sends data to the inventory topic."),Object(o.b)("h2",null,"Pre-requisites"),Object(o.b)(b,{kind:"warning",mdxType:"InlineNotification"},Object(o.b)("strong",null,"TODO")),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Pull in necessary pre-req context from ",Object(o.b)("a",{parentName:"em",href:"/refarch-eda/scenarios/realtime-inventory/#general-pre-requisites"},"Realtime Inventory Pre-reqs"),".")),Object(o.b)("p",null,"As a pre-requisite you need to have a ",Object(o.b)("a",{parentName:"p",href:"https://cloud.ibm.com/docs/Db2onCloud?topic=Db2onCloud-getting-started"},"DB2 instance on cloud")," up and running with defined credentials. From the credentials you need the username, password and the ",Object(o.b)("inlineCode",{parentName:"p"},"ssljdbcurl")," parameter. Something like “jdbc:db2://dashdb-tx…net:50001/BLUDB:sslConnection=true;“."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Build and deploy the ",Object(o.b)("inlineCode",{parentName:"p"},"inventory-app"),". This application is a simple Java microprofile 3.3 app exposing a set of end points for cRUD operations on stores, items and inventory. It is based on ",Object(o.b)("a",{parentName:"p",href:"https:quarkus.io"},"Quarkus"),". The instructions to build, and deploy this app is in the ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jbcodeforce/eda-kconnect-lab/tree/master/inventory-app"},"README")," under the ",Object(o.b)("inlineCode",{parentName:"p"},"inventory-app")," folder of ",Object(o.b)("a",{parentName:"p",href:"https://github.com/jbcodeforce/eda-kconnect-lab"},"this repository"),". At the application starts stores and items records are uploaded to the database.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Verify the stores and items records are loaded"))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"If you deploy the ",Object(o.b)("inlineCode",{parentName:"p"},"inventory-app")," from previous step, then you will have the database created and populated with some stores and items automatically. If you want to drop the data use ",Object(o.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/jbcodeforce/eda-kconnect-lab/master/inventory-app/src/main/resources/drop.sql"},"the drop sql script")," and then reload them the ",Object(o.b)("a",{parentName:"p",href:"https://raw.githubusercontent.com/jbcodeforce/eda-kconnect-lab/master/inventory-app/src/main/resources/import.sql"},"insert sql script")," from ",Object(o.b)("inlineCode",{parentName:"p"},"inventory-app/src/main/resources")," folder. For that you can use the ",Object(o.b)("inlineCode",{parentName:"p"},"Run sql")," menu in the DB2 console:"),Object(o.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"574px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"82.9861111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAACZ0lEQVQ4y6WT20sUURzHh3wpCU3JvHRBtl1Nk9JdXY02QTarhxJNEMI0gx4k6KHSTEjT8tJaEBFEL0H/Sm+99WbirXR3YV3Zy8xaO7fdT2cmAwmK3A585vfjnN/5zu/M+Y5U3nCeisaLVLgvcMR7hZITTRRXeShyuSk4Xv8TRz2FzgYKRb6/8pS9XlLj5aCoteKh2jN2fkDskVwDN3G/CuDs7eNofTuldS20dfXS2nGNnlt36LwxiL+7X9BHZ/8gXQO3cfs7hFAzpTUeHL4evAPvqWu7Snv3daT8xnMUdXST7/axz9FCXnk1pSdbKK5uxOn142z2c6yhlcOnz+JoaqPWd0l072FPWRV5ZS72VnooqLtMoatJ1PmQxube8GjqNeNzb5l4+Y7RqecMTzxjeDLAvfEZm/uPZxmamBVxhrtj0zwQa1bd6NQLHj4NMDI5zciTAEOiTiKDPbZSKbYUmf8dkpr6LoRSJJJJkgLDMMhkMmiajqbvHilrZlDTaeLxOIqiEIvFSCQS9tuy2eyukdRNBSUhEwqHiUajhEXc2NjIXdAUD10zMDUTw4q6iWlsHzkHJMPMomwkCX6YJ/LpC+GPS0Tng2hCVFV1gbErJENcgK4b292JPK1jiAVrLrcOlTRKUiYYChIKhYhuRu2oaVpO31EytlTUb2lkWbZvOiX8aNnHNM3cLiVrfyvVFrFsYwkqsmJ3aPnRErbivyKpUWGbeNI+puXBcCjM2tc10sKbOR3Z2pQRiaUupmyRX539zp/mdyKlIzJyLMHq6ioLnxdYXFwkEomwvLTM+vo6KysrNjv/nr+NH5qBipnSBmeHAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"DB1",title:"DB1",src:"/refarch-eda/static/2d4d80e816e3a178ffb05e7fb2149271/9f151/db2-1.png",srcSet:["/refarch-eda/static/2d4d80e816e3a178ffb05e7fb2149271/7fc1e/db2-1.png 288w","/refarch-eda/static/2d4d80e816e3a178ffb05e7fb2149271/9f151/db2-1.png 574w"],sizes:"(max-width: 574px) 100vw, 574px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",{parentName:"li"},"Select the database schema matching the username used as credential, and then open the SQL editor:"),Object(o.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"960px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABbElEQVQoz4WSW0/DMAyF+/9/GU8IHhCPMDGJrsvWtUmcOLeD3V002DQiHTl1mq/HdruXt3c8Pb+CQsC91Vr7N6/7s7rIDPIBmTNaqai5oGqsFfLKckH3KaWLSimX/N8PdnqHzQy3GuDXO9iPDfyXAZkJ0R9d55zR9z367+8lzvO85EOIiJF/ueymzR40HEDbCU5iELjdjAjyrPvESYBFXIlLASucWZ3mBSgU1OuSx8kiSwmtHS9ooblkFHmuIj0L4kIBJACFEUXJRVjrb/rZsRykXEFJQLXJviBKi1JpCFmBFY/WGXZxGIhghWCogbjABcY+NNgE7KSikO9P86wbh0QeToA7Baa6AA8Cmq3DaAZshwHGmMtkb6G4ijg61NJmbmApj+W3cOIuSs8s6RSD9E8neXbRHragI+8wTIzV2GBswXBgrKeGwTV8Ss6GipgBzyptCx6qK0Wnl8TRKSkxnA4lDS/lu9hOwlW8rx8sxl6YoEML8AAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"DB2",title:"DB2",src:"/refarch-eda/static/5ed9fa483ad840a441751caa25ddac91/4552c/db2-2.png",srcSet:["/refarch-eda/static/5ed9fa483ad840a441751caa25ddac91/7fc1e/db2-2.png 288w","/refarch-eda/static/5ed9fa483ad840a441751caa25ddac91/a5df1/db2-2.png 576w","/refarch-eda/static/5ed9fa483ad840a441751caa25ddac91/4552c/db2-2.png 960w"],sizes:"(max-width: 960px) 100vw, 960px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",{parentName:"li"},"Verify the items with ",Object(o.b)("inlineCode",{parentName:"p"},"select * from items;")),Object(o.b)("p",{parentName:"li"}," ",Object(o.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.166666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAABVklEQVQoz3VSCZKDMAzr/1+53TJluSk5gDRBjdw1ZY9mxjhxZNlWOCFtmKLD6A2csZjnGc45Me89uLZt273uY4xyT/w4jkgpSfyEuGGMFo3p5cJnwO12k70x5g+Rrvv9DpsbsNai6zopIIQZ+kTkAsksQIh4t5ZlQd/14kkQU0RYA4LL59zhmvcnrWbqAeOlwlDUWP2MkGMhBLlTzxH7vpcx2Rk9yZfsiaEJIYFd06L+qnD5+MTsvMSONn9LcT6fxV+vV/Hrugop74nbO2TQMTF7CiwjHYwxYqgbz6ozO37JkJ6EBLDS8WX/W8ToQ03TJIS0YRhej8IPu6ImBDGBWjBZddE9izGZ3ZCoaRo5M++Hhs49gW3byi+gmhyNMSaWZSnF6YuiQF3XUoiNML6PLBr++pmPxsUOiOGZ5DqVjk1d90dhF6zirHtLqKPyTAKOXFWVTKaYBzfpWLpz0925AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"DB2",title:"DB2",src:"/refarch-eda/static/a769df08d731b8e9040cafb444d06da7/3cbba/db2-3.png",srcSet:["/refarch-eda/static/a769df08d731b8e9040cafb444d06da7/7fc1e/db2-3.png 288w","/refarch-eda/static/a769df08d731b8e9040cafb444d06da7/a5df1/db2-3.png 576w","/refarch-eda/static/a769df08d731b8e9040cafb444d06da7/3cbba/db2-3.png 1152w","/refarch-eda/static/a769df08d731b8e9040cafb444d06da7/e3892/db2-3.png 1186w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(o.b)("p",{parentName:"li"},"Verify the stores with ",Object(o.b)("inlineCode",{parentName:"p"},"select * from stores;")),Object(o.b)("span",{parentName:"li",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(o.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABNUlEQVQoz4VSCVLEMAzr/5+5s2zpJr1z9RSWS0phWPCMGjd2bFlJ4baIPo0IPmCaJnjvEUJQ7PsOGtcM2rZtiDEipYRhGLCu65lX9JtHNVh0bYcQA9qmRdd1aJpGD+bEqy3LooXGcdQ8/p8FD0+6uoQ9znhlZF/XtTJnATZbZV18EoYb5ll8YVqsEnC2w/Bm0AuSOw7M86xrRpaDY9InOxb3zst+0Hw2KRg01RP2afAs3zHFdGr4E9SNoH+73WCthTEG9/td91dlKB9WZxL1aNtWA/+h73tlmyXgnjJULeRnkiCTxmE8Rf7LmMs8Fr1eXjF9sqMmta1hZHTeYNbxFThNPpdk3FPDGA9mHPXxeKCqqm/jZN2u4H5ZltqYhZ1zXxqyaqbOZ8FOv729qzFGZln76zv8AD0IDHt7v2aRAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(o.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"DB2",title:"DB2",src:"/refarch-eda/static/d56157f8db1b9bf3d5003babec4b9453/3cbba/db2-4.png",srcSet:["/refarch-eda/static/d56157f8db1b9bf3d5003babec4b9453/7fc1e/db2-4.png 288w","/refarch-eda/static/d56157f8db1b9bf3d5003babec4b9453/a5df1/db2-4.png 576w","/refarch-eda/static/d56157f8db1b9bf3d5003babec4b9453/3cbba/db2-4.png 1152w","/refarch-eda/static/d56157f8db1b9bf3d5003babec4b9453/bed59/db2-4.png 1232w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(o.b)("p",{parentName:"li"},"The inventory has one record to illustrate the relationship between store, item and inventory."))),Object(o.b)("h2",null,"Run the Kafka Connector in distributed mode"),Object(o.b)("p",null,"The docker image built in the ",Object(o.b)("a",{parentName:"p",href:"#scenario-setup"},"setup")," has the configuration for kafka connect distributed cluster, we need in this scenario to start the connector and upload the DB2 Sink connector definition. To start it, run the script ",Object(o.b)("inlineCode",{parentName:"p"},"./createOrStartKconnect.sh start")," under ",Object(o.b)("inlineCode",{parentName:"p"},"kconnect")," folder."),Object(o.b)("h2",null,"Upload the DB2 sink definition"),Object(o.b)("p",null,"Rename the file ",Object(o.b)("inlineCode",{parentName:"p"},"db2-sink-config-TMPL.json")," as ",Object(o.b)("inlineCode",{parentName:"p"},"db2-sink-config.json")," and modify the DB2 server URL, DB2 username and password. The DB schema matches the user name, so update this setting for the ",Object(o.b)("inlineCode",{parentName:"p"},"table.name.format"),"."),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-json"},'  "name": "jdbc-sink-connector",\n  "config": {\n    "connector.class": "com.ibm.eventstreams.connect.jdbcsink.JDBCSinkConnector",\n    "tasks.max": "1",\n    "topics": "inventory",\n    "connection.url": "jdbc:db2://....services.dal.bluemix.net:50001/BLUDB:sslConnection=true;",\n    "connection.user": "<username>",\n    "connection.password": "<password>",\n    "connection.ds.pool.size": "1",\n    "insert.mode.databaselevel": "true",\n    "table.name.format": "<username>.INVENTORY"\n  }\n')),Object(o.b)("p",null,"Once done, you can run the ",Object(o.b)("inlineCode",{parentName:"p"},"./sendJdbcSinkConfig.sh url-kafka-connect")," to upload the above definition to the Kafka connect controller. When running locally the command is ",Object(o.b)("inlineCode",{parentName:"p"},"./sendJdbcSinkConfig.sh localhodt:8083"),". This script delete previously define connector with the same name, and then perform a POST operation on the ",Object(o.b)("inlineCode",{parentName:"p"},"/connectors")," end point."),Object(o.b)("p",null,"The connector trace should have something like:"),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre",className:"language-logs"},"connector.class = com.ibm.eventstreams.connect.jdbcsink.JDBCSinkConnector\n    errors.log.enable = false\n    errors.log.include.messages = false\n    errors.retry.delay.max.ms = 60000\n    errors.retry.timeout = 0\n    errors.tolerance = none\n    header.converter = null\n    key.converter = null\n    name = jdbc-sink-connector\n    tasks.max = 1\n    transforms = []\n    value.converter = null\n\n")),Object(o.b)("h2",null,"Generate some records"),Object(o.b)("p",null,"The ",Object(o.b)("inlineCode",{parentName:"p"},"integration-tests")," folder includes a set of python code to load some records to the expected topic."),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Start a python environment with ",Object(o.b)("inlineCode",{parentName:"li"},"./startPython.sh")),Object(o.b)("li",{parentName:"ol"},"Within the bash, start python to execute the  ",Object(o.b)("inlineCode",{parentName:"li"},"ProduceInventoryEvent.py")," script, and specify the number of records to send via the —size argument.")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"python ProduceInventoryEvent.py --size 2\n")),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"The trace should have something like")),Object(o.b)("pre",null,Object(o.b)("code",{parentName:"pre"},"Produce to the topic inventory\n[KafkaProducer] - This is the configuration for the producer:\n[KafkaProducer] - {'bootstrap.servers': 'broker-0-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-1-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-2-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-3-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-4-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-5-qnprtqnp7hnkssdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093', 'group.id': 'ProducerInventory', 'acks': 0, 'request.timeout.ms': 10000, 'security.protocol': 'SASL_SSL', 'sasl.mechanisms': 'PLAIN', 'sasl.username': 'token', 'sasl.password': 'am_rbb9e794mMwhE-KGPYo0hhW3h91e28OhT8IlruFe5'}\nsending -> {'storeName': 'LA02', 'itemCode': 'IT09', 'id': 0, 'timestamp': 1591211295.617515}\n[KafkaProducer] - Message delivered to inventory [0]\nsending -> {'storeName': 'PT02', 'itemCode': 'IT00', 'id': 1, 'timestamp': 1591211296.7727954}\n[KafkaProducer] - Message delivered to inventory [0]\n\n")),Object(o.b)("h2",null,"Verify records are uploaded into the Inventory database"),Object(o.b)("p",null,"Using the DB2 console, use the ",Object(o.b)("inlineCode",{parentName:"p"},"select * from inventory;")," SQL query to get the last records."))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-connect-jdbc-index-mdx-85b360d1ff4c796d1b35.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[51,84],{"013z":function(e,t,n){"use strict";var a=n("q1tI"),o=n.n(a),c=n("NmYn"),i=n.n(c),r=n("Wbzz"),s=n("Xrax"),l=n("k4MR"),b=n("TSYQ"),p=n.n(b),d=n("QH2O"),m=n.n(d),u=n("qKvR"),h=function(e){var t,n=e.title,a=e.theme,o=e.tabs,c=void 0===o?[]:o;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===a,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},n)))))},f=n("BAC9"),O=function(e){var t=e.relativePagePath,n=e.repository,a=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=n||a,c=o.baseUrl,i=o.subDirectory,s=c+"/edit/"+o.branch+i+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+f.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:f.link,href:s},"Edit this page on GitHub"))):null},g=n("FCXl"),j=n("dI71"),k=n("I8xM"),v=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,n=e.tabs,a=e.slug,o=a.split("/").filter(Boolean).slice(-1)[0],c=n.map((function(e){var t,n=i()(e,{lower:!0,strict:!0}),c=n===o,s=new RegExp(o+"/?(#.*)?$"),l=a.replace(s,n);return Object(u.b)("li",{key:e,className:p()((t={},t[k.selectedItem]=c,t),k.listItem)},Object(u.b)(r.Link,{className:k.link,to:""+l},e))}));return Object(u.b)("div",{className:k.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:k.list},c))))))},t}(o.a.Component),N=n("MjG9"),y=n("CzIb"),w=n("Asxa"),A=n("OIbQ"),x=n.n(A),C=function(e){var t=e.date,n=new Date(t);return t?Object(u.b)(w.c,{className:x.a.row},Object(u.b)(w.a,null,Object(u.b)("div",{className:x.a.text},"Page last updated: ",n.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,o=e.Title,c=t.frontmatter,b=void 0===c?{}:c,p=t.relativePagePath,d=t.titleType,m=b.tabs,f=b.title,j=b.theme,k=b.description,w=b.keywords,A=b.date,x=Object(y.a)().interiorTheme,T=Object(r.useStaticQuery)("2456312558").site.pathPrefix,S=T?a.pathname.replace(T,""):a.pathname,I=m?S.split("/").filter(Boolean).slice(-1)[0]||i()(m[0],{lower:!0}):"",M=j||x;return Object(u.b)(l.a,{tabs:m,homepage:!1,theme:M,pageTitle:f,pageDescription:k,pageKeywords:w,titleType:d},Object(u.b)(h,{title:o?Object(u.b)(o,null):f,label:"label",tabs:m,theme:M}),m&&Object(u.b)(v,{title:f,slug:S,tabs:m,currentTab:I}),Object(u.b)(N.a,{padded:!0},n,Object(u.b)(O,{relativePagePath:p}),Object(u.b)(C,{date:A})),Object(u.b)(g.a,{pageContext:t,location:a,slug:S,tabs:m,currentTab:I}),Object(u.b)(s.a,null))}},BAC9:function(e,t,n){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,n){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,n){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,n){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ycnG:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return u}));var a=n("wx14"),o=n("zLVn"),c=(n("q1tI"),n("7ljp")),i=n("013z"),r=(n("qKvR"),{}),s=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},l=s("InlineNotification"),b=s("AnchorLinks"),p=s("AnchorLink"),d={_frontmatter:r},m=i.a;function u(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(c.b)(m,Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(l,{kind:"warning",mdxType:"InlineNotification"},Object(c.b)("strong",null,"TODO")," - Work in progress"),Object(c.b)(b,{mdxType:"AnchorLinks"},Object(c.b)(p,{mdxType:"AnchorLink"},"Overview"),Object(c.b)(p,{mdxType:"AnchorLink"},"Solution anatomy"),Object(c.b)(p,{mdxType:"AnchorLink"},"General pre-requisites"),Object(c.b)(p,{mdxType:"AnchorLink"},"Scenario setup"),Object(c.b)(p,{mdxType:"AnchorLink"},"Step 1: Deploy the MQ Sink Connector locally"),Object(c.b)(p,{mdxType:"AnchorLink"},"Step 2: Deploy the MQ Sink Connector on OpenShift"),Object(c.b)(p,{mdxType:"AnchorLink"},"Step 3: Deploy the RabbitMQ Source Connector locally"),Object(c.b)(p,{mdxType:"AnchorLink"},"Step 4: Deploy the JDBC Sink Connector locally"),Object(c.b)(p,{mdxType:"AnchorLink"},"Step 5: Run the solution components end-to-end on Kubernetes"),Object(c.b)(p,{mdxType:"AnchorLink"},"TODOs")),Object(c.b)("h2",null,"Overview"),Object(c.b)("p",null,"This lab addresses multiple scenarios that aim to build an end to end data pipeline, as depicted by the following figure, using Event Streams on Premise. At the high level Kafka connect is used to integrate external systems into the Kafka ecosystem. For example external system can inject messages to queue manager, from which a first Kafka source connector will publish the messages to a Kafka topic, which then will be processed by a series of event driven microservices down to a final topic, that will be use by Sink connectors."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABkElEQVQoz1WSXUsCQRSG/YP9l266jS76AxVEBAUVQZclBZEVFNGHRFqkmZmkplarO+267dd8vJ2ZcUHfix125pznnPPO5MJQYRQAUazAuYJUCpmUkhBCQEq7gv7pow/MGkYKcaKQprC5dJwLCMZ+FYKAgmgjpqDym4f7V4Y4FQYspS1y+TTA3EYJR3ddw83k+wqMAUlCwHRM9mgzf9ND8WWI5f06JZbx5UYmgUthAOclB7PrDwbIPIHVwwZeWiNEIfAzkIhpypyO1MAolljYqeK42DcQwTEtYj6+M2yeNKj7IQE41g6bqBFwUjlrme1fjm3SngUU13cdXHW3UGgtoenUpsbU42UKohSVjyHa377uUHusxrHULZmf8BQuE+j+eGiwazw7BXQGPetTysEpRo/3F0pTpFgdYGb+DIu7Zd2hMkCtvyhGygUObj+xkq/jvs7MfkgebZ+2sXfRottWZgKbZzvkQpLfIbwgmQa2v37hjhI0Og7euh5cny5FCVPoodZB5b1vutNPKMtRE89M6x9gkl8oTrfJSQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/3cbba/kconnect-overview.png",srcSet:["/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/7fc1e/kconnect-overview.png 288w","/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/a5df1/kconnect-overview.png 576w","/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/3cbba/kconnect-overview.png 1152w","/refarch-eda/static/80e56b9ba5956ed5e6259f03cca0d611/f5f59/kconnect-overview.png 1522w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"To support this lab we are reusing a classical business use case where stores are sending their transactions to a central messaging platform, based on queues, and with the adoption of loosely coupled microservice, real time analytics and complex event processing, Kafka is added to this legacy environment. Adopting Kafka connect lets integrate with existing applications without any changes."),Object(c.b)("h2",null,"Solution anatomy"),Object(c.b)("p",null,"The lab is divided into scenarios that can be combined to support the real time inventory data pipeline as illustrated in the figure below:"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB00lEQVQoz12SbWsTQRSF9w8LflT0F0g/CCKoCApFP4gWrLQU8SUYqklttYkhbUwxad6zybrJbja7Ozszj9PZJBQH7g4z995zz5w9TpJoogik1MD/Yb5a25BKbe7W91GkWcaa2ESS5jnHnynGYyxoJiBNFWEo7b4I5wghbOF85rP/pcqrYofymcv1laQgbK/GOf7toc3wqacYThOa3QUPdy+487zGi70SqNQ2hcGCpzs/ubtdY/drzwxVHDU8Rl6C52k6fUmSGIZxKi3g+K/k1rM6B0dD+pOYWmtGEKsNC5EIXn9ssLVzzqfTEQM35ebjKseNANdPOWn6VhHHiGEb3NGEwmGD6Sy1WgkzLVgGtOYlvncOKVR7yMxIE6dkUuH7CT8qTUZjz9QrAyPt7iiVAy6CgHCWJ+0yzd3JiPeX99lv3aM9aSFjNvkoutI6RgpF/U/IjQcnPHp3gbP+i5unCUnpbMJeuU+zF+bDlsowdCmcuohMGkdI6wq5ml3p/eL2my2eFLdzwNwGivbAYx5lHJTbvP3W5WIQ2JwXxLz8cM7nytCAaJSxkLpmo2L9kjDrI5muGOaQRrPMWMBoYfXI767YKGXOKrPnNVj+srxGmJResf0Hm1mn6D1IksoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/3cbba/kconnect-scenario-components.png",srcSet:["/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/7fc1e/kconnect-scenario-components.png 288w","/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/a5df1/kconnect-scenario-components.png 576w","/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/3cbba/kconnect-scenario-components.png 1152w","/refarch-eda/static/64851f0b9449995c6d7bfd4dfffe17b6/36102/kconnect-scenario-components.png 1518w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The store application, is a Quarkus based app, generating item sales to RabbitMQ ",Object(c.b)("inlineCode",{parentName:"p"},"items")," queue. The code of this application is under the ",Object(c.b)("inlineCode",{parentName:"p"},"store-sale-producer")," folder, in the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/jbcodeforce/eda-kconnect-lab/"},"lab repository"),". We will address how to get this code in the pre-requisite section."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"RabbitMQ runs in docker image started locally via docker compose. The messages are in the ",Object(c.b)("inlineCode",{parentName:"li"},"items")," queue."),Object(c.b)("li",{parentName:"ul"},"The lab, focusing on the injection to Kafka, is documented in the ",Object(c.b)("a",{parentName:"li",href:"#scenario-2:-rabbitmq-on-premise-to-event-streams-on-cloud-via-rabbitmq-connector-source"},"scenario 2"),"."),Object(c.b)("li",{parentName:"ul"},"[A]"," The Sink connector description is in the ",Object(c.b)("a",{parentName:"li",href:"https://github.com/jbcodeforce/eda-kconnect-lab/tree/master/kconnect"},"kconnect")," folder."),Object(c.b)("li",{parentName:"ul"},"Kafka backbone is Event Streams on Cloud."))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The inventory MS is a Kafka Stream application, done with Reactive Messaging and Kafka Stream API. The folder is\nFor example the scenario illustrate JDBC Sink connector to save to existing data base.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The mock up Inventory mainframe application is not implemented and we will use the MQ tools to view the message in the ",Object(c.b)("inlineCode",{parentName:"p"},"inventory")," queue"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"The MQ Sink connector ","[B]"," configuration is defined in the ",Object(c.b)("a",{parentName:"li",href:"https://github.com/jbcodeforce/eda-kconnect-lab/tree/master/kconnect"},"kconnect")," folder."),Object(c.b)("li",{parentName:"ul"},"MQ broker runs in docker container started with docker-compose"),Object(c.b)("li",{parentName:"ul"},"The lab scenario is ",Object(c.b)("a",{parentName:"li",href:"#scenario-1:-event-streams-on-cloud-to-mq-on-premise-via-mq-connector-sink"},"the number 1")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The Inventory Application, using DB2 as datasource is a quarkus app using hibernate with panache, defined in the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/jbcodeforce/eda-kconnect-lab/tree/master/inventory-app"},"nventory-app")," folder"),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"The JDBC Sink connector ","[C]"," configuration is defined in the ",Object(c.b)("a",{parentName:"li",href:"https://github.com/jbcodeforce/eda-kconnect-lab/tree/master/kconnect"},"kconnect")," folder."),Object(c.b)("li",{parentName:"ul"},"The ",Object(c.b)("a",{parentName:"li",href:"#scenario-3:-event-streams-on-cloud-to-db2-on-premise-via-jdbc-sink-connector"},"scenario 3")," lab goes over how the Kafka Connect JDBC sink works."))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The ",Object(c.b)("a",{parentName:"p",href:"#scenario-4:-run-the-solution-components-end-to-end-on-kubernetes"},"scenario 4")," addresses the end to end solution, which is basically an end to end demonstration of a simple data pipeline for a real time view of an inventory solution."))),Object(c.b)("h2",null,"General pre-requisites"),Object(c.b)(l,{kind:"info",mdxType:"InlineNotification"},"You need to decide what your 'on-premise' environment is for this lab. You can run with docker compose, or deploy to an OpenShift cluster. We propose to run the components with docker compose for the scenario 1,2,3 and scenario 4 is for a deployment of the components on a Kubernetes cluster that could run on-premises or on any Cloud provider using Openshift. If you do not want to build all the components, we have each of them available in Docker Hub and the Docker Compose file should run them automatically."),Object(c.b)("p",null,"We need the following IBM Cloud services created and tools to run the lab. We try to use docker images as much as possible to do not impact your local laptop."),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://docs.docker.com/"},"Docker")," and docker compose to run the solution locally."),Object(c.b)("li",{parentName:"ul"},"Event Streams instance, may be reuse the one created in ",Object(c.b)("a",{parentName:"li",href:"/refarch-eda/technology/event-streams/es-cloud/"},"this lab"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/cli?topic=cli-getting-started"},"IBM Cloud CLI"),"."),Object(c.b)("li",{parentName:"ul"},"If you want to run locally you need to get ",Object(c.b)("a",{parentName:"li",href:"https://docs.docker.com/compose/"},"docker compose"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://git-scm.com/downloads"},"git CLI"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://maven.apache.org/install.html"},"Maven"),".")),Object(c.b)("p",null,"For the on-premise environment, we will not use VMs, but simply run some of the components on IBM premise Service platform or Openshift. The point is that the workload is packaged as container images and can run anywhere."),Object(c.b)("h2",null,"Scenario setup"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Login to the cloud via CLI: ",Object(c.b)("inlineCode",{parentName:"p"},"ibmcloud login"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Initialize the Event Streams CLI and select the target Event Streams cluster: ",Object(c.b)("inlineCode",{parentName:"p"},"ibmcloud es init"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Define connect topics: When running in distributed mode, the connectors need three topics as presented in the ",Object(c.b)("inlineCode",{parentName:"p"},"create topics")," table ",Object(c.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/connecting/setting-up-connectors/"},"here"),"."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"connect-configs"),": This topic will store the connector and task configurations."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"connect-offsets"),": This topic is used to store offsets for Kafka Connect."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("strong",{parentName:"li"},"connect-status"),": This topic will store status updates of connectors and tasks.")),Object(c.b)("p",{parentName:"li"},"Using IBM Event Streams CLI, the topics are created via the commands like:"),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-shell"},"# log to the kubernetes cluster:\nibmcloud login -a https://icp-console.apps.green.ocp.csplab.local\n# initialize the event streams CLI plugin\nibmcloud es init\n# Create the Kafka topics for Kafka connect\nibmcloud es topic-create -n connect-configs -p 1 -r 3 -c cleanup.policy=compact\nibmcloud es topic-create -n connect-offsets -p 25 -r 3 -c cleanup.policy=compact\nibmcloud es topic-create -n connect-status -p 5 -r 3 -c cleanup.policy=compact\n# Create the topic for the scenarios\nibmcloud es topic-create inventory\nibmcloud es topic-create items\nibmcloud es topics\n"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Create API KEY with a manager-level access.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Clone the lab repository: ",Object(c.b)("inlineCode",{parentName:"p"},"git clone https://github.com/jbcodeforce/eda-kconnect-lab && cd eda-kconnect-lab"),".")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Prepare the script to set the environment variables used by all the components of the solution, like the Kafka broker URLs and APIKEy."),Object(c.b)("ul",{parentName:"li"},Object(c.b)("li",{parentName:"ul"},"First rename the ",Object(c.b)("inlineCode",{parentName:"li"},"scripts/setenv-TMP.sh")," to ",Object(c.b)("inlineCode",{parentName:"li"},"scripts/setenv.sh")),Object(c.b)("li",{parentName:"ul"},"Then modify the KAFKA_BROKERS and KAFKA_APIKEY with the respecting values as defined in the Event Streams credentials.")),Object(c.b)("pre",{parentName:"li"},Object(c.b)("code",{parentName:"pre",className:"language-json"},'{\n  "api_key": "bA ... Qp",\n  "apikey": "bA ... Qp",\n  "iam_apikey_description": "Auto-generated for key 4d ... c6",\n  "iam_apikey_name": "es-mgr-creds",\n  "iam_role_crn": "crn:v1:bluemix:public:iam::::serviceRole:Manager",\n  "iam_serviceid_crn": "crn:v1:bluemix:public:iam-identity::a/db ... f2::serviceid:ServiceId-7a ... 6d",\n  "instance_id": "29 ... 15",\n  "kafka_admin_url": "https://70 ... 1g.svc01.us-east.eventstreams.cloud.ibm.com",\n  "kafka_brokers_sasl": [\n    "broker-1- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093",\n    "broker-0- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093",\n    "broker-4- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093",\n    "broker-2- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093",\n    "broker-5- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093",\n    "broker-3- ... kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093"\n  ],\n  "kafka_http_url": "https://70 ... 1g.svc01.us-east.eventstreams.cloud.ibm.com",\n  "password": "bA ... Qp",\n  "user": "token"\n}\n'))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Prepare the Kafka Connect environment, as we need to use three connectors. Therefore we need to clone the source, build and get the jars file in the connectors. In fact we have developed scripts to automate those tedious steps:"))),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Under the ",Object(c.b)("inlineCode",{parentName:"li"},"kconnect")," folder run ",Object(c.b)("inlineCode",{parentName:"li"},"./setupConnectors.sh")," script and get the three connectors downloaded and built."),Object(c.b)("li",{parentName:"ul"},"Build a docker image for the connector: this is also done by running a second script: ",Object(c.b)("inlineCode",{parentName:"li"},"./createOrStartKconnect.sh build"),".")),Object(c.b)("h2",null,"Step 1: Deploy the MQ Sink Connector locally"),Object(c.b)("p",null,"Follow the ",Object(c.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/connect-mq/"},"MQ Sink Connector")," use case to deploy the connector runtime, connecting your source Kafka environment and topic to the target MQ queue manager."),Object(c.b)("h2",null,"Step 2: Deploy the MQ Sink Connector on OpenShift"),Object(c.b)("p",null,"Optionally, follow the ",Object(c.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/connect-mq/"},"MQ Sink Connector")," use case to deploy the connector runtime to OpenShift, connecting your source Kafka environment and topic to the target MQ queue manager."),Object(c.b)("h2",null,"Step 3: Deploy the RabbitMQ Source Connector locally"),Object(c.b)("p",null,"Follow the ",Object(c.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/connect-rabbitmq/"},"RabbitMQ Source Connector")," use case to deploy the connector runtime, connecting your source RabbitMQ environment to the target Kafka environment and topic."),Object(c.b)("h2",null,"Step 4: Deploy the JDBC Sink Connector locally"),Object(c.b)("p",null,"Follow the ",Object(c.b)("a",{parentName:"p",href:"/refarch-eda/use-cases/connect-jdbc/"},"JDBC Sink Connector")," use case to deploy the connector runtime, connecting your source Kafka environment and topic to the target DB2 database."),Object(c.b)("h2",null,"Step 5: Run the solution components end to end on Kubernetes"),Object(c.b)("p",null,"This solution covers all the components of the data pipeline. It still uses DB2 and Event Streams on Cloud but deploy all the other component in OpenShift as part of IBM Kubernetes Service."),Object(c.b)("h3",null,"Pre-requisites"),Object(c.b)("p",null,"Create the following services in IBM Cloud:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/Db2onCloud?topic=Db2onCloud-getting-started"},"DB2 instance"),"."),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://cloud.ibm.com/docs/containers?topic=containers-cs_cluster_tutorial#cs_cluster_tutorial"},"IBM Kubernetes Service"),".")),Object(c.b)("h3",null,"Deployment"),Object(c.b)("p",null,"To be finished !"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"Verify the Store Sale Simulator runs"),Object(c.b)("li",{parentName:"ol"},"Verify the connectors ",Object(c.b)("inlineCode",{parentName:"li"},"http://localhost:8083/connectors"))),Object(c.b)("h2",null,"TODOs"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Update deployment instructions to prioritize OCP, utilzing Tekton and/or Build/DeploymentConfigs as necessary",Object(c.b)("ul",{parentName:"li",className:"contains-task-list"},Object(c.b)("li",{parentName:"ul",className:"task-list-item"},Object(c.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Provide PRIMARY deployment instructions to OCP, including necessary backend services"),Object(c.b)("li",{parentName:"ul",className:"task-list-item"},Object(c.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Provide SECONDARY deployment instructions via Docker Compose, including necessary backend services"))),Object(c.b)("li",{parentName:"ul"},"Provide support for IBM Event Streams on Cloud and IBM Event Streams V10 via CP4I.",Object(c.b)("ul",{parentName:"li",className:"contains-task-list"},Object(c.b)("li",{parentName:"ul",className:"task-list-item"},Object(c.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","IBM Event Streams on Cloud"),Object(c.b)("li",{parentName:"ul",className:"task-list-item"},Object(c.b)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","IBM Event Streams V10")))))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-scenarios-realtime-inventory-index-mdx-b39499d102af2ff1ab09.js.map
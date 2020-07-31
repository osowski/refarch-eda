(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{"0s2h":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return p}));var i=n("wx14"),r=n("zLVn"),o=(n("q1tI"),n("7ljp")),s=n("013z"),a=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},l=c("AnchorLinks"),b=c("AnchorLink"),g={_frontmatter:a},m=s.a;function p(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(m,Object(i.a)({},g,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(l,{mdxType:"AnchorLinks"},Object(o.b)(b,{mdxType:"AnchorLink"},"General monitoring practices"),Object(o.b)(b,{mdxType:"AnchorLink"},"Monitoring with SYSDIG"),Object(o.b)(b,{mdxType:"AnchorLink"},"Event Streams Monitoring")),Object(o.b)("h2",null,"General monitoring practices"),Object(o.b)("p",null,"We have documented in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"/refarch-eda/technology/kafka-monitoring/"}),"this note")," the major tools for monitoring a Kafka cluster. like prometheus and Grafana."),Object(o.b)("h2",null,"Monitoring with SYSDIG"),Object(o.b)("p",null,"With Event Streams on cloud, the monitoring capability is supported by Sysdig. To enable monitoring approach includes the following steps:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Create a IBM Cloud monitoring with Sysdig service.")),Object(o.b)("img",{src:"./images/sysdig-0.png",alt:null}),Object(o.b)("p",null,"Enter name,\n",Object(o.b)("img",Object(i.a)({parentName:"p"},{src:"./images/sysdig-1.png",alt:null}))),Object(o.b)("p",null,"resource group and enable platform monitoring, if you want to combine Event Streams and Cluster monitoring:"),Object(o.b)("img",{src:"./images/sysdig-2.png",alt:null}),Object(o.b)("p",null,"You may want to do the ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/Monitoring-with-Sysdig?topic=Monitoring-with-Sysdig-getting-started#getting-started"}),"Sysdig getting started tutorial")," to understand the different features of this product."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Enable Event Streams to be monitored and select the monitoring service.")),Object(o.b)("img",{src:"./images/sysdig-3.png",alt:null}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Link to an existing sysdig instance:")),Object(o.b)("img",{src:"./images/sysdig-4.png",alt:null}),Object(o.b)("h2",null,"Event Streams Monitoring"),Object(o.b)("p",null,"Now open the Event Streams dashboard in Sysdig. This can be done from the Event Streams Dashboard ->"),Object(o.b)("img",{src:"./images/es-sysdig-0.png",alt:null}),Object(o.b)("p",null,"The available metrics are discribed in ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/EventStreams?topic=EventStreams-metrics#metrics-available-by-service-plan"}),"this product documentation page"),"."),Object(o.b)("img",{src:"./images/es-sysdig.png",alt:null}),Object(o.b)("p",null,"The following present the network throughput derived by aggregating cross brokers bytes per second."),Object(o.b)("img",{src:"./images/es-sysdig-2.png",alt:null}),Object(o.b)("p",null,"For example the enterprise plan is described ",Object(o.b)("a",Object(i.a)({parentName:"p"},{href:"https://cloud.ibm.com/docs/EventStreams?topic=EventStreams-kafka_quotas#limits_enterprise"}),"here"),", so it is possible to define an alert when the\ninstance byte in and out per second are going over a given threshold (35MB?)."),Object(o.b)("p",null,"Here is an example of such alert:"),Object(o.b)("img",{src:"./images/es-sysdig-3.png",alt:null}),Object(o.b)("p",null,"Other interesting gauges are related to consumer groups, where it can be interesting to alert on inactive consumer groups, and the number of rebalancing consumer groups (something may be linked to the state of the consumers within the group or the brokers themselves)."),Object(o.b)("img",{src:"./images/es-sysdig-4.png",alt:null}),Object(o.b)("p",null,"Here are other reported interesting gauges:"),Object(o.b)("img",{src:"./images/other-gauges.png",alt:null}),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Authentication failures")," will help to assess if API keys expired or some security attack."),Object(o.b)("li",{parentName:"ul"},Object(o.b)("strong",{parentName:"li"},"Producer or consumer conversion time")," are metrics to assess if some codes are using older API version and some time is consumed by doing conversion. This need to be at zero.")))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-use-cases-monitoring-on-cloud-index-mdx-f269e8e2a5b447da3e05.js.map
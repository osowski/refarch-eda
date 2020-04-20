(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{jDPT:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function s(){return(s=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},i={_frontmatter:r},c=o.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)a=s[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(c,s({},i,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"The event backbone is the communication layer in the event driven architecture.  It provides the connection between event driven capabilities and in the ",Object(n.b)("em",{parentName:"p"},"Cloud Native"),", it becomes the Pub/Sub communication layer for event driven microservices."),Object(n.b)("p",null,"At this high level we would consider two types of relevant technologies for the event backbone, ",Object(n.b)("em",{parentName:"p"},"Message Brokers")," and ",Object(n.b)("em",{parentName:"p"},"Event Logs"),".  Both technology types could be used to achieve the event communication style, with the “Publish and subscribe” model however, it is also important to consider other capabilities which are frequently used within event driven solutions:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Keeping an ",Object(n.b)("strong",{parentName:"li"},"Event Log")," as a time sequenced as it happened recording of events (Source of the truth)."),Object(n.b)("li",{parentName:"ul"},"Enabling direct ",Object(n.b)("strong",{parentName:"li"},"replay")," of events."),Object(n.b)("li",{parentName:"ul"},"Enabling ",Object(n.b)("strong",{parentName:"li"},"Event Sourcing")," as a way of recording state changes in distributed systems."),Object(n.b)("li",{parentName:"ul"},"Enabling ",Object(n.b)("strong",{parentName:"li"},"programmatic access")," to the ",Object(n.b)("em",{parentName:"li"},"continuous event stream"),".")),Object(n.b)("p",null,"When viewed across these wider event driven capabilities, an event log style technology can provide a central component which can support all of these capabilities, whereas a message broker would have to be extended with other components."),Object(n.b)("h2",null,"Defining the Event Backbone for the event driven reference architecture"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"654px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAADj0lEQVQ4y61Ua2iTVxg+trYpdrboFERkPwRhbJ3KboyBl4HMCYIVHNsPGf2xdpNu/eFqRaaMFknqpZfUfKnk0iRt0tb2y/3SNCaZJmma9MutX5p+SattTE016i6WQTN34OycD2E41B/iCw/n4byH55z3nPc8APwvtn7wOUhnl0sJ94YTlunbeeSLptANhn0y5pv6keeRJJrJ3kfuyZjkejDqjM8vIX8shSbZDALPE5xdvFtCOF583BOKi+03Qh14bDV7Jj7BIiIsfNE9Ge/B42HXRPQbp5+hxgORCzjXDl4UCKE14FVCrzc8A1qvB8nZNJ+by90ru1P4rQKLl7d2K6pOtnWtw7xMSGnWLz9aEQSiqfLvzgir2bk7FY9X/xHMLxUEL9wok82/2gnxiTaPjtLVlLS30ma3V5ktljetY+NlJOe4GT4yEZ89x96625zILJ1iUgsttl+nLnhDbKvjZkTkDSd/iadzP7G38i1Mav4UvvMWYDQaa2ia3m+1Wr/SarUHdDrdzmk2WUkEY9xt6yqusatXhdrFUiRR9KMemQpDzUOi0CCJUoPOCTtQIp1FuUcrCFAUtZthmAwOxLLsQ5Va/b7e5nqDCIbYtOnB4yKS948Uu3tVsE9LQ3n/MJQqtXi8BvuvGaF60AQ7KAWMJOcgbjcIpFLpx3a7XRkIBGwul0sll8trhoy2KiLoj87YHqwUkUSm/fvkaSE829YJO68o4aVuGbwslsM2UQ9sPiPi5xksyGXzEDgcjncaGhr21NbWHq2vr//UbDa/HQpP8Secnls0kZLVQyYk7KTQpSsyJNMMI0oxgBQDI6i3T4cu9lxFHRIl4hbyKFv4A5E73NHY2Hiorq7u66ampoMWi3X7uNu7jgjiBxGnFpby2cLvM7OLy5zDx3AmTzBtcAU42unLWLyTXHhmnss9/JPL5O5x+GE4MDxCl/j8wZJILFEiV/SVagZ0pWdFXU97YNNaAKpIbxGUA7ABX0V1JajYhiuowJturH6aw1iDsUnw0pbC1fIgceLn9rJ9x74tJ/zL708LyHzzeXHpF8d/EDyzluZ/x38wGE28QDiZAa8liDn4Ikmea82ut8b8U7varw7sH7J53pNqDRstnmDNZfng3kGr+yONwbkFG8a2TsXQZxqj80OTO/AueJl9XQ/GBokl4R8AvaFEAbtKA3advzAvTiQ4Yl/YdWKjgTiH8HwRY/VfxFU9Hx9AbGIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"evt backbone",title:"evt backbone",src:"/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/3c42d/evt-backbone.png",srcSet:["/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/7fc1e/evt-backbone.png 288w","/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/a5df1/evt-backbone.png 576w","/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/3c42d/evt-backbone.png 654w"],sizes:"(max-width: 654px) 100vw, 654px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"For the event driven architecture we defined the following characteristics to be essential for the ",Object(n.b)("em",{parentName:"p"},"event backbone")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Publish-subscribe event communication between event producers and consumers"),Object(n.b)("li",{parentName:"ul"},"Facilitate many consumers with shared central “source of truth”."),Object(n.b)("li",{parentName:"ul"},"Capability to store events for a given period of time (event log). This is the shared source of the truth for events."),Object(n.b)("li",{parentName:"ul"},"Ability for consumers to subscribe to events."),Object(n.b)("li",{parentName:"ul"},"Provide replay of events from history for evolving application instances."),Object(n.b)("li",{parentName:"ul"},"Provide programmatic access to continuous stream of events, with minimum time lag."),Object(n.b)("li",{parentName:"ul"},"Must be highly scalable and resilient to cloud deployment levels.")),Object(n.b)("p",null,"Looking across these capabilities, the potential technologies, the amount of adoption and community activity around the technologies lead us to selecting ",Object(n.b)("em",{parentName:"p"},"Kafka")," as the Open Source technology base for the event backbone."),Object(n.b)("p",null,"You can read more about Apache Kafka project here ",Object(n.b)("a",s({parentName:"p"},{href:"https://kafka.apache.org"}),"https://kafka.apache.org")),Object(n.b)("h2",null,"Event backbone considerations"),Object(n.b)("p",null,"While choosing an event backbone for your event-driven app development, you need to consider below points,"),Object(n.b)("h3",null,"Persistence"),Object(n.b)("p",null,"When source systems generate events, the consumers of those are interested in those events may not be online or available at the same time. So you need a way to store these messages for a configurable period of time until they are consumed and acted upon. Event backbone should be able to provide such event persistence."),Object(n.b)("h3",null,"Observability"),Object(n.b)("p",null,"At times, you need an overall view of how events are ingested by source systems and getting processed by consumers. It could be a management console where events can be observed. Event backbone should provide such observability."),Object(n.b)("h3",null,"Fault tolerance"),Object(n.b)("p",null,"Event backbone could be made of several components. If one of them becomes unavailable, there should not be any impact on the event processors dependent on the backbone. Event backbone needs to provide this resiliency."),Object(n.b)("h3",null,"High availability"),Object(n.b)("p",null,"Event backbone provides persistence of messages/events. If one of the components of the backbone becomes unavailable, there should not be any impact on the availability of these messages/events. Event backbone should be highly available."),Object(n.b)("h3",null,"Performance"),Object(n.b)("p",null,"Event backbone should provide means of accelerating the event processing operations (e.g. parallelising event processing) thereby providing enhanced performance."),Object(n.b)("h3",null,"Delivery guarantees"),Object(n.b)("p",null,"Event backbone should support guaranteed delivery both for producer and consumer. It should support below delivery guarantees:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"at least once"),Object(n.b)("li",{parentName:"ul"},"at most once"),Object(n.b)("li",{parentName:"ul"},"exactly once")),Object(n.b)("h3",null,"Security"),Object(n.b)("p",null,"The data residing in the event backbone should be secured, at rest as well as in transit. Only authenticated and authorized users should be able to publish and consume messages from the backbone. Topic specific authorizations will also help blocking access by unauthorized consumers. Event backbone should provide these security measures."),Object(n.b)("h3",null,"Stateful operations for events streams"),Object(n.b)("p",null,"Sometimes, source systems generate a continuous flow of ‘inter-related’ events (e.g. IoT sensors sending data every second). In order to process such messages correctly, the event backbone needs to support for stateful operations like windowing, joins, aggregations. and any type of real time analytics."),Object(n.b)("h3",null,"Ease of development"),Object(n.b)("p",null,"Developing a consumer or a stream application should be straight-forward with the programmatic features that the event backbone provides."),Object(n.b)("h3",null,"Ease of deployment"),Object(n.b)("p",null,"The installation of event backbone should be an easy to follow process."),Object(n.b)("h3",null,"Event routing options"),Object(n.b)("p",null,"In EDA, event consumers may not be online at all times. So, it should be easier for consumers to subscribe to a topic when it comes online."),Object(n.b)("h3",null,"On-failure hooks"),Object(n.b)("p",null,"Event backbone can support pre-configured actions/behaviors for certain messages. E.g. if a consumer fails to process a message more than a certain number of times, that message can be sent to another topic for re-trying the processing action."),Object(n.b)("p",null,"Predetermined for unprocessed events (retries, dead-letter queues etc)"),Object(n.b)("h3",null,"Management plane"),Object(n.b)("p",null,"Event backbone can provide a management plane from which infrastrucutre level configurations can be managed."),Object(n.b)("h2",null,"Supporting products"),Object(n.b)("p",null,"The IBM Event Streams offering provides a ",Object(n.b)("em",{parentName:"p"},"Kafka")," service for the Event Backbone. The service is available as a fully managed service within Public cloud and as a supported build for IBM Cloud Private."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://console.bluemix.net/catalog/services/event-streams"}),"IBM Event Streams Public Cloud")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://www.ibm.com/cloud/event-streams"}),"IBM Event Streams Private Cloud")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"../kafka/readme.md"}),"See also our own Kafka study article")," on how to support high availability and how to deploy to your local environment or to a kubernetes cluster like IBM Cloud Private."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"https://activemq.apache.org/components/artemis/"}),"Active MQ Artemis")," and our study ",Object(n.b)("a",s({parentName:"li"},{href:""}),"notes"))),Object(n.b)("h2",null,"Messaging versus event streaming"),Object(n.b)("p",null,"We recommend reading ",Object(n.b)("a",s({parentName:"p"},{href:"https://developer.ibm.com/messaging/2018/05/18/comparing-messaging-event-streaming-use-cases/"}),"this article")," and ",Object(n.b)("a",s({parentName:"p"},{href:"https://developer.ibm.com/messaging/2019/02/05/comparing-messaging-pub-sub-and-event-streams/"}),"this one"),", to get insight between messaging (focusing on operations / actions to be performed by a system or service) versus event (focusing on the state / facts of a system with no knowledge of the downstream processing. To summarize messaging (like MQ) are to support:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Transient Data – data is only stored until a consumer has processed the message, or it expires"),Object(n.b)("li",{parentName:"ul"},"Request / reply most of the time"),Object(n.b)("li",{parentName:"ul"},"Targeted reliable delivery: targeted to the entity that will process the request or receive the response. Reliable with transaction support.")),Object(n.b)("p",null,"For events:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Stream history: consumers are interested by history and not just the most recent event"),Object(n.b)("li",{parentName:"ul"},"Scalable Consumption: A single event is consumed by many consumers with limited impact as the number of consumers grow."),Object(n.b)("li",{parentName:"ul"},"Immutable Data."),Object(n.b)("li",{parentName:"ul"},"Decoupling of Producers and consumers ")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1102px"}},"\n      ",Object(n.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACRUlEQVQoz1WSaXPSUBSG6w/0oz/JGfUH2HGsfqijU6tDV5aWViqlSFdKSUqAsCUhEAJB2rIVwuMlto1m5j3n3JvJk7Mt8PTMmM2EFWYwGDIc9D31BwNGoxF3/T7j8VjEY+88GA6ZTsYMhb+/n/wliG8X2rfg3EF/NPMuXddFrzc5U1qcFzrUdBOr1cJotDhO55Cvc+LcpmY0OJUqFMo6v3s9H3ipQaoE1fbsIdEpJ7LJx12D95sSiYxOwzT4EOvx7nOEUDhM17HZTtZ49iLHyxWVcd/xgfNSH+VZAbyQy3yNVdhN5jjPFqlUqwQONRY/bbEVDFE360SPSzx/Y/ExrIoftHygKyiu1zu/m0epUwLbu2yE9ognj1GKZdY2QywuLROKxpAVleDOPqFIhPXtCBXN8IFTQZtMpp7u5346RdMNCkWVvNA8brZsJGV+LlMoVWg0LeRcXkgRPb3G7jhehVPR//9K9iRKblhtzAfNY8dx6Pcsul2H29tbMRRbvHNQtB5S2eHm5sbPMF2DYhMKQnJ9PnEXuagjlWwyapurvE7VsHi93iGYLLP0PUrd0AifmLwNtwj+qmG3Oz5QtWbehHPmXNDqCWBeJSHZxLNtUWoJtWryKtBgI14QwB00rczqT10ALRIXBW+l/pmyv9iPPnaYYml5VegbB4kU1/ki+3sRoj8OiB+lyEg5byhfVgOsrIWp1PSnHV54nLArjPvga3qdK0nmKiujGaa3yGdpSdwpZGWFpmWTzmQ5u7jkPJ2h43SfMvwD/8Mh4q1wgoUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"evt msg",title:"evt msg",src:"/refarch-eda/static/7b255c1cb3c91f650b08d048b44cf580/a1298/evt-msg.png",srcSet:["/refarch-eda/static/7b255c1cb3c91f650b08d048b44cf580/7fc1e/evt-msg.png 288w","/refarch-eda/static/7b255c1cb3c91f650b08d048b44cf580/a5df1/evt-msg.png 576w","/refarch-eda/static/7b255c1cb3c91f650b08d048b44cf580/a1298/evt-msg.png 1102w"],sizes:"(max-width: 1102px) 100vw, 1102px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("h2",null,"Deployments"),Object(n.b)("p",null,"In term of event backbone deployment environment we propose different approaches:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},Object(n.b)("a",s({parentName:"strong"},{href:"https://cloud.ibm.com/"}),"IBM Cloud"))," with the ",Object(n.b)("a",s({parentName:"li"},{href:"https://cloud.ibm.com/catalog/services/event-streams"}),"Event Streams service"),".",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"Deployment discussions for the KC solution are in ",Object(n.b)("a",s({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/iks/"}),"this note")))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"IBM Cloud Private"),Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"../deployments/eventstreams/README.md"}),"Event Streams deployment"),"."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",s({parentName:"li"},{href:"../deployments/zookeeper/README.md"}),"Zookeeper deployment")," and ",Object(n.b)("a",s({parentName:"li"},{href:"../deployments/kafka/README.md"}),"Kafka deployment")," for ICP."))),Object(n.b)("li",{parentName:"ul"},"Running locally with docker compose. See ",Object(n.b)("a",s({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/local/"}),"this note")," for details.")))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-evt-backbone-readme-mdx-97c69af7ac1f13b9ca75.js.map
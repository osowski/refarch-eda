(window.webpackJsonp=window.webpackJsonp||[]).push([[35,101],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),i=a("NmYn"),s=a.n(i),r=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),b=a("TSYQ"),d=a.n(b),h=a("QH2O"),u=a.n(h),m=a("qKvR"),p=function(e){var t,a=e.title,n=e.theme,o=e.tabs,i=void 0===o?[]:o;return Object(m.b)("div",{className:d()(u.a.pageHeader,(t={},t[u.a.withTabs]=i.length,t[u.a.darkMode]="dark"===n,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:u.a.text},a)))))},v=a("BAC9"),g=function(e){var t=e.relativePagePath,a=e.repository,n=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,i=o.baseUrl,s=o.subDirectory,c=i+"/edit/"+o.branch+s+"/src/pages"+t;return i?Object(m.b)("div",{className:"bx--row "+v.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:v.link,href:c},"Edit this page on GitHub"))):null},f=a("FCXl"),A=a("dI71"),y=a("I8xM"),O=function(e){function t(){return e.apply(this,arguments)||this}return Object(A.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],i=a.map((function(e){var t,a=s()(e,{lower:!0,strict:!0}),i=a===o,c=new RegExp(o+"/?(#.*)?$"),l=n.replace(c,a);return Object(m.b)("li",{key:e,className:d()((t={},t[y.selectedItem]=i,t),y.listItem)},Object(m.b)(r.Link,{className:y.link,to:""+l},e))}));return Object(m.b)("div",{className:y.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:y.list},i))))))},t}(o.a.Component),w=a("MjG9"),j=a("CzIb"),k=a("Asxa"),x=a("OIbQ"),N=a.n(x),E=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(k.c,{className:N.a.row},Object(m.b)(k.a,null,Object(m.b)("div",{className:N.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,i=t.frontmatter,b=void 0===i?{}:i,d=t.relativePagePath,h=t.titleType,u=b.tabs,v=b.title,A=b.theme,y=b.description,k=b.keywords,x=b.date,N=Object(j.a)().interiorTheme,T=Object(r.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,z=u?I.split("/").filter(Boolean).slice(-1)[0]||s()(u[0],{lower:!0}):"",P=A||N;return Object(m.b)(l.a,{tabs:u,homepage:!1,theme:P,pageTitle:v,pageDescription:y,pageKeywords:k,titleType:h},Object(m.b)(p,{title:o?Object(m.b)(o,null):v,label:"label",tabs:u,theme:P}),u&&Object(m.b)(O,{title:v,slug:I,tabs:u,currentTab:z}),Object(m.b)(w.a,{padded:!0},a,Object(m.b)(g,{relativePagePath:d}),Object(m.b)(E,{date:x})),Object(m.b)(f.a,{pageContext:t,location:n,slug:I,tabs:u,currentTab:z}),Object(m.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},jq2Y:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return p}));var n=a("wx14"),o=a("zLVn"),i=(a("q1tI"),a("7ljp")),s=a("013z"),r=(a("qKvR"),{}),c=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("AnchorLinks"),b=c("AnchorLink"),d=c("Accordion"),h=c("AccordionItem"),u={_frontmatter:r},m=s.a;function p(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(i.b)(m,Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"AnchorLinks"},Object(i.b)(b,{mdxType:"AnchorLink"},"Events"),Object(i.b)(b,{mdxType:"AnchorLink"},"Event streams"),Object(i.b)(b,{mdxType:"AnchorLink"},"Event backbone"),Object(i.b)(b,{mdxType:"AnchorLink"},"Event sources"),Object(i.b)(b,{mdxType:"AnchorLink"},"Microservices"),Object(i.b)(b,{mdxType:"AnchorLink"},"Commands"),Object(i.b)(b,{mdxType:"AnchorLink"},"Loose coupling"),Object(i.b)(b,{mdxType:"AnchorLink"},"Cohesion")),Object(i.b)("h2",null,"Events"),Object(i.b)("p",null,"Events are notifications of change of state.  Notifications are issued, or published and interested parties can subscribe and take action on the events. Typically, the issuer of the notification has no knowledge of what action is taken and receives no corresponding feedback that the notification has been processed."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Events are notifications of change of state."),Object(i.b)("li",{parentName:"ul"},"Typically, events represent the change of state of something of interest to the business."),Object(i.b)("li",{parentName:"ul"},"Events are records of something that has happened."),Object(i.b)("li",{parentName:"ul"},"Events can’t be changed, that is, they are immutable. (We can’t change something that has happened in the past).")),Object(i.b)("h2",null,"Event streams"),Object(i.b)("p",null,"An event stream is a continuous unbounded series of events."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The start of the stream may have occurred before we started to process the stream."),Object(i.b)("li",{parentName:"ul"},"The end of the stream is at some unknown point in the future."),Object(i.b)("li",{parentName:"ul"},"Events are ordered by the point in time at which each event occurred.")),Object(i.b)("p",null,"When developing event driven solutions, you will typically see two types of event streams:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Event streams whose events are defined and published into a stream as part of a solution."),Object(i.b)("li",{parentName:"ul"},"Event streams that connect to a real-time event stream, for example from an IOT device, a voice stream from a telephone system, a video stream, or ship or plane locations from global positioning systems.")),Object(i.b)("h2",null,"Event backbone"),Object(i.b)("p",null,"The event backbone is the communication layer in the event driven architecture.  It provides the connection between event driven capabilities and in the ",Object(i.b)("em",{parentName:"p"},"Cloud Native"),", it becomes the Pub/Sub communication layer for event driven microservices."),Object(i.b)("p",null,"At this high level we would consider two types of relevant technologies for the event backbone, ",Object(i.b)("em",{parentName:"p"},"Message Brokers")," and ",Object(i.b)("em",{parentName:"p"},"Event Logs"),".  Both technology types could be used to achieve the event communication style, with the “Publish and subscribe” model however, it is also important to consider other capabilities which are frequently used within event driven solutions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Keeping an ",Object(i.b)("strong",{parentName:"li"},"Event Log")," as a time sequenced as it happened recording of events (Source of the truth)."),Object(i.b)("li",{parentName:"ul"},"Enabling direct ",Object(i.b)("strong",{parentName:"li"},"replay")," of events."),Object(i.b)("li",{parentName:"ul"},"Enabling ",Object(i.b)("strong",{parentName:"li"},"Event Sourcing")," as a way of recording state changes in distributed systems."),Object(i.b)("li",{parentName:"ul"},"Enabling ",Object(i.b)("strong",{parentName:"li"},"programmatic access")," to the ",Object(i.b)("em",{parentName:"li"},"continuous event stream"),".")),Object(i.b)("p",null,"When viewed across these wider event driven capabilities, an event log style technology can provide a central component which can support all of these capabilities, whereas a message broker would have to be extended with other components."),Object(i.b)("h3",null,"Selecting the Event Backbone for the reference architecture"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"654px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAAD30lEQVQ4y21Ua0yaVxg+1KpdW9P9Wnb5sSX7sazrkqXLkmZZsyzbuj9uy9y/ZX90yRZZU5tMs81Wu0RagRalahGkGC1QinKRaxFEUJHv4yJFQAEBQQIFr3Vd0134lrP3Y6vR1ZM8Oe/tPN97vvd9D0L/Wy++fQal8msVyfwqcnjn7RNEANvcATzlCz0ed/ma7OQ9bJ2dw+DDIHeBf4qOoe20De1HGM8WGEvZIrLM+L4Aslb9pPtnIGGqx6fegr3Z6CRbYL8A9tMWl6/O5CTbIbZ53OX/4SnCl05+gjDGZRS2HqJMcXNHhwzQ+sPHZfkvADkf2/Hl1rdRfvNXhNRqzR6o1GoUjSfKQdFMvjJd2KgGubKdJ6o528Y9AvLBjuuDNRTGVQr9RPW3P14+lilsVq9uP6qKrdyvRlrtGOpgscrZDQ0PI5PJhGyTDrT24DcGARkAKVopbiNfeHknm91YTBVQPLNG/3fkjSyVM3xeLr/9bDeff3RMpzum0+mfM4/bqnJrW8g6628gQ/Gee7EM2xdZ5hDB+FWjw3Nzkgz1mZzeATsx3+MNJ9lz0TTXv5DkQmG4SKPRnNDpdJ+azebvlErl51Kp9M1EMvlMFgiDS2k7FAf/wu7GF1lszOb34StdvWV0Ajj8G7izuxef/+kS9gSjeDGdx0ggELzj9/vzBEHgcDi8KhSJ3hjR3T1KX4cMxayp/DoeUmj/6JfcKUmV+tKQQkOJb41Q9K5QmyiZ0ljqH7xdmo+lSwvLuRISCkWnIMNep9Mp1+v1vIEB8esqg6WGJnQHozaakN0l+rPx3EWqpfUKxekSUixOH9V5TUC1XuJS359vp5pbL1NzkQS1mM5RdBGONzQ0vF9bW1vX2Nh4CvTXPF7vkZXiBgolMrbl++tYrjJg3o2buLt/EItvKbFAIsMS2SgWDSkwXzgIuhwvJLP/XlmlUr3KZDLP1NfX1zU1NX1oMBpfttodhx48+h25Agu8cDIbyhS3XJFUzm1wkITaOkOOWqaJOyaHR2ObJTyRhDu7tu0GMjf8Ijca0egZT5qavqZQLGHs1x40YFUBDgAOAuhz1U/FjGoNeyZFMiTdHXAAUAFgNLOuH/rq7AWagPFNS8dh2t7GE1V+fa7t8K64CpgMzR5AL6JYdhXBVZHW5kIwrzvjdm1AjszT3rLsX0yiq6A/+bjGOo0MDgLt+zgEoikUiKWQ0uw4cXfG+0HP8GgdHHhXrDS8AIdO98u1n8FD8bFMZ30F9OMCmfbLEbPjo7EJ13v7EkJlK+hRgs43OX0hTD9Pk57gBrwmzEkySMt/0zv4OQDLf/4y/gFMN/vdh/8niQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"evt backbone",title:"evt backbone",src:"/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/3c42d/evt-backbone.png",srcSet:["/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/7fc1e/evt-backbone.png 288w","/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/a5df1/evt-backbone.png 576w","/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/3c42d/evt-backbone.png 654w"],sizes:"(max-width: 654px) 100vw, 654px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"For the event-driven architecture, we defined the following characteristics to be essential for the ",Object(i.b)("em",{parentName:"p"},"event backbone:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Publish-subscribe event communication between event producers and consumers"),Object(i.b)("li",{parentName:"ul"},"Facilitate many consumers with shared central “source of truth”."),Object(i.b)("li",{parentName:"ul"},"Capability to store events for a given period of time (event log). This is the shared source of the truth for events."),Object(i.b)("li",{parentName:"ul"},"Ability for consumers to subscribe to events."),Object(i.b)("li",{parentName:"ul"},"Provide replay of events from history for evolving application instances."),Object(i.b)("li",{parentName:"ul"},"Provide programmatic access to continuous stream of events, with minimum time lag."),Object(i.b)("li",{parentName:"ul"},"Must be highly scalable and resilient to cloud deployment levels.")),Object(i.b)(d,{mdxType:"Accordion"},Object(i.b)(h,{title:"Event backbone considerations",mdxType:"AccordionItem"},Object(i.b)("p",null,"While choosing an event backbone for your event-driven application development, the following functional and non-functional requirements should be taken into consideration:"),Object(i.b)("h4",null,"Persistence"),Object(i.b)("p",null,"When source systems generate events, the consumers of those are interested in those events may not be online or available at the same time. So you need a way to store these messages for a configurable period of time until they are consumed and acted upon. Event backbone should be able to provide such event persistence."),Object(i.b)("h4",null,"Observability"),Object(i.b)("p",null,"At times, you need an overall view of how events are ingested by source systems and getting processed by consumers. It could be a management console where events can be observed. Event backbone should provide such observability."),Object(i.b)("h4",null,"Fault tolerance"),Object(i.b)("p",null,"Event backbone could be made of several components. If one of them becomes unavailable, there should not be any impact on the event processors dependent on the backbone. Event backbone needs to provide this resiliency."),Object(i.b)("h4",null,"High availability"),Object(i.b)("p",null,"Event backbone provides persistence of messages/events. If one of the components of the backbone becomes unavailable, there should not be any impact on the availability of these messages/events. Event backbone should be highly available."),Object(i.b)("h4",null,"Performance"),Object(i.b)("p",null,"Event backbone should provide means of accelerating the event processing operations (e.g. parallelising event processing) thereby providing enhanced performance."),Object(i.b)("h4",null,"Delivery guarantees"),Object(i.b)("p",null,"Event backbone should support guaranteed delivery both for producer and consumer. It should support the delivery guarantee options of ",Object(i.b)("inlineCode",{parentName:"p"},"at least once"),", ",Object(i.b)("inlineCode",{parentName:"p"},"at most once"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"exactly once"),"."),Object(i.b)("h4",null,"Security"),Object(i.b)("p",null,"The data residing in the event backbone should be secured, at rest as well as in transit. Only authenticated and authorized users should be able to publish and consume messages from the backbone. Topic specific authorizations will also help blocking access by unauthorized consumers. Event backbone should provide these security measures."),Object(i.b)("h4",null,"Stateful operations for events streams"),Object(i.b)("p",null,"Sometimes, source systems generate a continuous flow of ‘inter-related’ events (e.g. IoT sensors sending data every second). In order to process such messages correctly, the event backbone needs to support for stateful operations like windowing, joins, aggregations. and any type of real time analytics."),Object(i.b)("h4",null,"Event routing options"),Object(i.b)("p",null,"In EDA, event consumers may not be online at all times. So, it should be easier for consumers to subscribe to a topic when it comes online."),Object(i.b)("h4",null,"On-failure hooks"),Object(i.b)("p",null,"Event backbone can support pre-configured actions/behaviors for certain messages. E.g. if a consumer fails to process a message more than a certain number of times, that message can be sent to another topic for re-trying the processing action."))),Object(i.b)("p",null,"Looking across these capabilities, the potential technologies, the amount of adoption and community activity around the technologies, and the considerations listed above, we selected ",Object(i.b)("a",{parentName:"p",href:"https://kafka.apache.org"},"Apache Kafka")," as our event backbone for the event-driven reference architecture."),Object(i.b)("h2",null,"Event sources"),Object(i.b)("p",null,"When you consider an event-driven architecture, think about event producers and event consumers as the interaction points with events. As you develop event-driven applications following a microservices architecture, the microservices you develop play the role of both event producers and event consumers, with the events being passed as the communication payload between them.\nHowever, as you look at the wider opportunities that being event driven offers, you need to widen your view and consider event sources that come from beyond the application code you are writing.  These are events that may be produced from outside our immediate system but have business relevance or enable us to gain valuable insights into things that are affecting your business."),Object(i.b)("h3",null,"Here is a list of common event sources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IoT devices or sensors showing device status changes"),Object(i.b)("li",{parentName:"ul"},"Click Stream data from web or mobile applications"),Object(i.b)("li",{parentName:"ul"},"Mobile applications (HTTP to Back-end for Front-end service and then to topic)"),Object(i.b)("li",{parentName:"ul"},"Geospatial data"),Object(i.b)("li",{parentName:"ul"},"Weather alerts"),Object(i.b)("li",{parentName:"ul"},"Social media feeds"),Object(i.b)("li",{parentName:"ul"},"Real-time voice feeds"),Object(i.b)("li",{parentName:"ul"},"Other messaging backbone"),Object(i.b)("li",{parentName:"ul"},"Data change event streams from databases (change data capture)")),Object(i.b)("h3",null,"IoT devices and sensors"),Object(i.b)("p",null,"With IoT devices and sensors you typically have a gateway providing the connectivity for the device, and a level of event enrichment and filtering. In terms of domain driven design you would see the device and gateway as being the technical domain and the event-driven reference architecture as providing the infrastructure for the applications in a business domain.\nIn practice, the IoT gateway or platform provides the connectivity and is the point of filtering and consolidation of events so that only business-relevant events are passed up to the business domain. The gateway can also be the point where the technical event is enhanced to relate to something recognizable at the business level.  One example of this is to relate a device number or identifier in the event to something that the business recognizes."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1077px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAACk0lEQVQozwGIAnf9AD5vmgA/cJwGRHOdB1Z/owZQeqEGQXKcCD9wmwE8bpsANmWXAEJynAaAk6cRdoSSFXB9iBZyfYcXcH6KFoWUohFdgqIJPW6bB1RxiwIAUJ8AAD9vmgVEcJgFe5y5ALjAyACdrLkAI16ZAT9xnwg8c7ABQHKdCCJYtQObqKwvjZGRT5CRlUWUmqA9kZOVS6Cip0CisMUK////ABWJ8QMAU58CAEx7pQmIk50A////Bc/Pz73MzMx5prPFAIKSkQVKc5ELhXIfABZk0QD//0IGkaO6HP//BwX//4QIiaDEHP//IQgARv8AyL6zBXRzcxlyiZ0SAD9gfQ0AAAALdZSwFczMzf/X1tWlAAD/AR9w5xwXadsdAG7/CQFa4zQAXfaYA2f/lBx1/44Wcv+RC2v/lQBi/5QAYf9tfJS3IHV0cVWYmp0jAFF6nwoAAAAJbn6MEc7Ozv/W1tWo//q+AEF+zg0tbrwQAIP/AQZX1Q4AYvk+B2n/OBdx/DAWcPsvDmv8PQZm+z4AYP8gmZ6mE5KRkS2goaMYAFGFswgAAAAAlpGMB87OzqTNzs5pqrjKAH2RlQVOdpMLssfHAL26pB+tppI8wquPLOTdoxevpow5tKWQMsGvky+xo405tbOxFouNjgBLeKEJAD5tmAVPgq8FAAAADgAAAAIAAAAHMUZaBkF4qwdTd5wBGlmXBpmmriCIjZA1kZKWK6WosBSNkZcvhYaIMIiKjS6ZnaIsoqqwEQ5QigZPeJwEADtqlAA9bZgGOGCECWF6kQxTc48MOmqVB0h6pgFEdZ8AmLmpACZelwQSab4EHHzTAxcrPB4AAAATECAwHCtWfQo2eLIEOmuXBk14nwE5bZsAPQgIhOQdUFoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"hl-arch-iot",title:"hl-arch-iot",src:"/refarch-eda/static/a7a76a7650206c65cf6e41f3b2d586d3/b0b3a/hl-arch-iot.png",srcSet:["/refarch-eda/static/a7a76a7650206c65cf6e41f3b2d586d3/7fc1e/hl-arch-iot.png 288w","/refarch-eda/static/a7a76a7650206c65cf6e41f3b2d586d3/a5df1/hl-arch-iot.png 576w","/refarch-eda/static/a7a76a7650206c65cf6e41f3b2d586d3/b0b3a/hl-arch-iot.png 1077w"],sizes:"(max-width: 1077px) 100vw, 1077px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h3",null,"Clickstream data"),Object(i.b)("p",null,"Clickstream data is often used to understand the behavior of users as they navigate their way through web or mobile apps. It provides a recording of the actions they take, such as the clicks, the mouse-movements, and the gestures.  Analysis of the clickstream data can lead to a deep understanding of how users actually interact with the application. It enables you to detect where users struggle and to look for ways to improve the experience."),Object(i.b)("p",null,"Processing the clickstream in real time in an event-driven architecture can also give rise to the opportunity to take direct action in response to what a user is currently doing, or more accurately has just done."),Object(i.b)("p",null,"There are various “collectors” that enable collection of standard clickstream events and allow custom actions to be collected as events typically through tags in Javascript."),Object(i.b)("p",null,"Within the Apache Open Source communities the ",Object(i.b)("a",{parentName:"p",href:"https://divolte.io/"},"Divolte")," collector is an example of one of these collectors that directly publishes events to Kafka topics."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1029px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAACa0lEQVQoz12RXUhTcRjGnzk/EjIxY1JEYoSUV9qERNTEIhMloYwK2sVyqeRNmmgqKy1t032feTa3M/X4sc2xc87O1oKyDEurm8Ib+0RwJEKBWtdB/vvjZS888L7wvj94nhf4r0RRxBMhgjA/nSRF5XzG5S4bHh6upKowGAylj4ZMVTabvTwcDhdJETkjGo3t3jQ1Nyu8Xi/w7POWkltMKDwDXTAM3INpYgG4RNCgWUkaDceK7Nxovc3O1o9PBasmgvFCz5RYN8K6aycDUjUz/XI/2eyGIIjQarVwu927QPiWEvAMdMIweB967zsoWwnQsAHkE1To11RooLOW6jKB+vanvaFJNhVqOl8h2NP8B4IoZd7p6Mid4PlsvFr9Jc59/FlmbLmY7mRsOf2+pSy0kn3QbNZC8/shdMSsaiP9uV2k71AH0dPenNZCBnGD6NG405/cRI7Kgv+YTndTw/l8hZj/tv0hurxRwxvvZnGcJ8/Kzx+kwAxc+3EB17d9FMio2nZMRzqJJaedWFTtxJjaQlgKdKKRDFHl8dzI8e6ennMsy6rx/MsWvItr4Aw9MA724YFvEaiidk7+BSFE2eROpOMWwYEuspstBeFs73Imea9LQTGhO0iiGWa7XK7D9FE5ePF1S+l5vabgDL1gnTYFWY1BjrxNGQ2ETrPcWM04P1XtD8gF1vibE5Yx/1W7w31ekmOl04FwhYXx1M0EQuXf1zcUDgeD2dkg0DeXgLyyCdPCOn2/hKeP44hLclpACKtNVmul2Ww5IwhCvhyLqWb8fjXDMCUOxnnKbneU+DiuOCLLBcHgbDJ1g1AohH9z2y2/8NpoFQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"hl-arch-clickstream",title:"hl-arch-clickstream",src:"/refarch-eda/static/2f1a4cf2db08a819e0b2d59027395246/d51b4/hl-arch-clickstream.png",srcSet:["/refarch-eda/static/2f1a4cf2db08a819e0b2d59027395246/7fc1e/hl-arch-clickstream.png 288w","/refarch-eda/static/2f1a4cf2db08a819e0b2d59027395246/a5df1/hl-arch-clickstream.png 576w","/refarch-eda/static/2f1a4cf2db08a819e0b2d59027395246/d51b4/hl-arch-clickstream.png 1029w"],sizes:"(max-width: 1029px) 100vw, 1029px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("h3",null,"Event standards and schemas"),Object(i.b)("p",null,"Where you have control as the producer of an event we should consider having an event schema and following a standard to provide the best opportunity for portability of the solutions across cloud environments.\nWith a lack of formal standards, a working group under the Cloud Native Computing Foundation (CNCF) has recently been formed to define and propose ",Object(i.b)("a",{parentName:"p",href:"https://cloudevents.io/"},"Cloud Events")," as the standard."),Object(i.b)("h2",null,"Microservices"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"772px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.15277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABcSAAAXEgFnn9JSAAAE6ElEQVQ4yy1UC0yTVxQ+hTIfgDCmzuI2lhKNEoUsS8HXhpsLC0SyxfkIAirVOifK1A22oCIyHsXqCkWBggi0QFE7IiLQlrYKRV4tpQgVRqsVDKvgYwijVV5n96/c5Ms9/7nnfufck/P9gIgw29iwDbu1h9HQsZ/gABq0bGy5F4E1lYsqz58B+CwI3N3dgYoViUSs3t5eaV1dnZHArNFougwGw8Xo6OhFiYmJACMAzna1XP+0rgZH5HU4oqjHZwS2e0ocLCveCkFbPE4ei/UJCwvz9/X1DSgsLDylUCiQ7CgWi1EikaBarbZyudwVQqEQIJ8Q2opye4dyLqIl6wI+IRgU8HD86hVUpJzdB59vfD8h9ugyUuEGAAisKC6HiOi9KzMvZO4U5Aj2J51LCnP1cvNIT0mDglwhDbh7I2Am/fQXLzKTT1gzko5Z088ef5WZfPR1yu97bkXu8Nx5iOO1LypyJalwDXnW6qjdkZsJ8bIJfAO1LXKoarwNIs11UHeqaavwFwAXFxcfEuAHbl4MrK0A0jfyCS5Uv3IPRMK3P+yE78PDKR9ws7iQUXIpMrWUl5DfJNpuwEdbWqd6ghVjbSwbTkJ8O98Rx1ixdOnalDNn1hMSZ+wxuuDDfjr/fAqpLGqZq6vrKhITsNzF041K0mbv7mp92Yn3n2tRM9KOzaMd2DKhx/pXzSeG0Aqwdds34AqwMHhj0C5y0Un/eg6GyMWGgX+AHbGLHsNmM6JiopcwYjcRWnCWjskspabreK1fMlNiuj5XMlA5XTUmR9mEpo1KCMXXrkJ5x99fXq5WxeertHt007it3Y4hqudzwWXhvlDwZA7YHI5HXHzc0vtohNTBvF8Fo2K8PCKezrGKZ/L+lUzmvqxA4WjlLQchZPXQlc/ePmiwvEDV0BjKHz9HBYHKasObplep6v8QfEkY66tN9EN7Y5ZT/eV0n/Xd0Xn80695O1g+RwICgxO3h+6vPumTUJ8CECYbXVBksfdlt5kxq808Jeh4PJPd/uht8aMJFD0cGfBzdVqi0LQscvSXVLB7zy7PE+FHGF0NWv/K4orDJZeLvtv8CYvZjRbH4EP5JEKCduS3tP5JTJ8HZacax/GSyd5MKqIxPvp4LZPJ9Fu/bt3qmINsRmNTo6VJo0HpX1JU31Vjr9FoE5WLN8jkMgB2jdHBHKPo92NJ9cyAslbmevF9ZtAN3SrgKTyps4Wuiz8kxB8QuMXHx7sTRVzg8/lagUDQl52d/YDIUUR83kQ1ALUNA7RWoRIwvWrxeJf1j1nzOHfWPJExaxpPezPwOnu4ffiU5LYEhtHqFPvT0eWhoaGOJBRCQkI8SZL3hoeHgZIdkSLA4F2z08s2K/RW9wWaW0zYIetAg6oLu5R6NDYZcbDdgiqR8kpMZIwXnU5fQ4mAyHA1h8NxZrFYjkG22WxOBQUFwOPxAAxleqcHZd3QnNPk31f9EPXSzindDa2986buTXeVwW6qH5jql/Xh06ZB/+r8W+8aTxbpKS0vL49G2d7e3g6f40wUVwo4/e4J8gzZOV2RFvWlnagv0aHumhY7S3VolPagoVLPelxjBuHpfGd4t7YQBFETNY9AggVQm3QHCg8K4eeAOAdpbdqdH9V81UXVn8o0NV+ZTmzuvSz1uTvJNV4EcD46mTZP6EFA/YE2ze+OMv8HvELAEOuKmdgAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"evt micro",title:"evt micro",src:"/refarch-eda/static/4b8133d36d94d09dfbbb1734b345f444/0b6df/evt-micro.png",srcSet:["/refarch-eda/static/4b8133d36d94d09dfbbb1734b345f444/7fc1e/evt-micro.png 288w","/refarch-eda/static/4b8133d36d94d09dfbbb1734b345f444/a5df1/evt-micro.png 576w","/refarch-eda/static/4b8133d36d94d09dfbbb1734b345f444/0b6df/evt-micro.png 772w"],sizes:"(max-width: 772px) 100vw, 772px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"The event-driven reference architecture provides support for event-driven microservices - microservices which are connected through and communicate via the pub/sub communication protocol within an event backbone."),Object(i.b)("p",null,"With Kafka as the event backbone and pub/sub messaging provider, microservices can use the Kafka API’s to publish and listen for events."),Object(i.b)("p",null,"On cloud-native platforms, microservices are the application architecture of choice. As businesses become event-driven, event driven pattern needs to extend into our microservices application space. This means that your microservices are still doing REST calls to well-known microservice but they must respond to and send out events, or in event-driven terms they need to be both event producers and consumers to enforce strong decoupling."),Object(i.b)("p",null,"With the adoption of microservices, the focus on synchronous communication between services has increased. Service mesh packages such as ",Object(i.b)("a",{parentName:"p",href:"https://istio.io/"},"Istio")," help with the management of communication, service discovery, load balancing, and visibility in this synchronous communication environment."),Object(i.b)("p",null,"With event-driven microservices, the communication point becomes the Pub/Sub layer of the event backbone. By adopting an event-based approach for intercommunication between microservices, the microservices applications are naturally responsive (event-driven). This approach enhances the loose coupling nature of microservices because it decouples producers and consumers.  Further, it enables the sharing of data across microservices through the event log.\nThese ",Object(i.b)("em",{parentName:"p"},"event")," style characteristics are increasingly important considerations when you develop microservices style applications. In practical terms microservices applications are a combination of synchronous API-driven, and asynchronous event-driven communication styles. For the implementation point of view a set of established patterns are used, such as Database per Service, Event Sourcing, Command Query Responsibility Segregation, Saga, …"),Object(i.b)("h3",null,"Event-driven apps with containers"),Object(i.b)("p",null,"While the serverless approach with Cloud Functions provides a simplified event-based programming model, the majority of microservices applications today are developed for and deployed to a container-based cloud-native stack.  Within the cloud-native landscape, Kubernetes is the standard platform for container orchestration, and therefore becomes the base for the container platform in the event-driven architecture."),Object(i.b)("p",null,"As before, the event backbone is the Pub/Sub communication provider and event log for shared data for the microservices. In this context microservices are developed as direct consumers and producers of events on the backbone via topics.  The extra work in this environment is in managing consumer instances to respond to the demand of the event stream. You must determine how many consumer instances need to be running to keep pace with, or always be immediately available to execute, the microservice in response to an arriving event."),Object(i.b)("h2",null,"Commands"),Object(i.b)("p",null,"A command, is an instruction to do something. Typically, commands are directed to a particular consumer. The consumer runs the required command or process, and passes back a confirmation to the issuer stating that the command has been processed."),Object(i.b)("p",null,"The Command concept plays a key role in the ",Object(i.b)("a",{parentName:"p",href:"/refarch-eda/patterns/cqrs/"},"Command-Query Responsibility Segregation")," pattern that is more commonly known as ",Object(i.b)("strong",{parentName:"p"},"CQRS"),"."),Object(i.b)("h2",null,"Loose coupling"),Object(i.b)("p",null,"Loose coupling is one of the main benefits of event-driven processing. It allows event producers to emit events without any knowledge about who is going to consume those events. Likewise, event consumers don’t need to be aware of the event emitters. Because of this, event consuming modules and event producer modules can be implemented in different languages or use technologies that are different and appropriate for specific jobs. Loosely coupled modules are better suited to evolve independently and, when implemented correctly, result in a significant decrease in system complexity."),Object(i.b)("p",null,"Loose coupling, however, does not mean “no coupling”. An event consumer consumes events that are useful in achieving its goals and in doing so establishes what data it needs and the type and format of that data. The event producer emits events that it hopes are understood and useful to consumers thus establishing an implicit contract with potential consumers. For example, an event notification in XML format must conform to a certain schema that must be known by both the consumer and the producer.  One of the most important things that you can do to reduce coupling in an event-driven system is to reduce the number of distinct event types that flow between modules. To do this you must pay attention to the cohesiveness of those modules."),Object(i.b)("h2",null,"Cohesion"),Object(i.b)("p",null,"Cohesion is the degree to which related things are encapsulated together in the same software module. For the purposes of this EDA discussion, a module is defined as an independently deployable software unit that has high cohesion. Cohesion is strongly related to coupling in the sense that a highly cohesive module communicates less with other modules, thus reducing the number of events most importantly, the number of event types in the system. The less frequently modules interact with each other, the less coupled they are. Achieving cohesion in software while optimizing module size for flexibility and adaptability is difficult, but something to strive for. Designing for cohesion starts with a holistic understanding of the problem domain and good analysis work. Sometimes it must also take into account the constraints of the supporting software environment. Monolithic implementations and implementations that are excessively fine-grained must be avoided."))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-concepts-terms-and-definitions-index-mdx-ce941981a916e80e59f9.js.map
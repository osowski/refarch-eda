(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{jq2Y:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return r})),n.d(t,"default",(function(){return m}));var a=n("wx14"),o=n("zLVn"),i=(n("q1tI"),n("7ljp")),s=n("013z"),r=(n("qKvR"),{}),c=function(e){return function(t){return console.warn("Component '"+e+"' was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",t)}},l=c("AnchorLinks"),b=c("AnchorLink"),d=c("Accordion"),h=c("AccordionItem"),p={_frontmatter:r},u=s.a;function m(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)(u,Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)(l,{mdxType:"AnchorLinks"},Object(i.b)(b,{mdxType:"AnchorLink"},"Events"),Object(i.b)(b,{mdxType:"AnchorLink"},"Event streams"),Object(i.b)(b,{mdxType:"AnchorLink"},"Event backbone"),Object(i.b)(b,{mdxType:"AnchorLink"},"Event sources"),Object(i.b)(b,{mdxType:"AnchorLink"},"Microservices"),Object(i.b)(b,{mdxType:"AnchorLink"},"Commands"),Object(i.b)(b,{mdxType:"AnchorLink"},"Loose coupling"),Object(i.b)(b,{mdxType:"AnchorLink"},"Cohesion")),Object(i.b)("h2",null,"Events"),Object(i.b)("p",null,"Events are notifications of change of state.  Notifications are issued, or published and interested parties can subscribe and take action on the events. Typically, the issuer of the notification has no knowledge of what action is taken and receives no corresponding feedback that the notification has been processed."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Events are notifications of change of state."),Object(i.b)("li",{parentName:"ul"},"Typically, events represent the change of state of something of interest to the business."),Object(i.b)("li",{parentName:"ul"},"Events are records of something that has happened."),Object(i.b)("li",{parentName:"ul"},"Events can’t be changed, that is, they are immutable. (We can’t change something that has happened in the past).")),Object(i.b)("h2",null,"Event streams"),Object(i.b)("p",null,"An event stream is a continuous unbounded series of events."),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"The start of the stream may have occurred before we started to process the stream."),Object(i.b)("li",{parentName:"ul"},"The end of the stream is at some unknown point in the future."),Object(i.b)("li",{parentName:"ul"},"Events are ordered by the point in time at which each event occurred.")),Object(i.b)("p",null,"When developing event driven solutions, you will typically see two types of event streams:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Event streams whose events are defined and published into a stream as part of a solution."),Object(i.b)("li",{parentName:"ul"},"Event streams that connect to a real-time event stream, for example from an IOT device, a voice stream from a telephone system, a video stream, or ship or plane locations from global positioning systems.")),Object(i.b)("h2",null,"Event backbone"),Object(i.b)("p",null,"The event backbone is the communication layer in the event driven architecture.  It provides the connection between event driven capabilities and in the ",Object(i.b)("em",{parentName:"p"},"Cloud Native"),", it becomes the Pub/Sub communication layer for event driven microservices."),Object(i.b)("p",null,"At this high level we would consider two types of relevant technologies for the event backbone, ",Object(i.b)("em",{parentName:"p"},"Message Brokers")," and ",Object(i.b)("em",{parentName:"p"},"Event Logs"),".  Both technology types could be used to achieve the event communication style, with the “Publish and subscribe” model however, it is also important to consider other capabilities which are frequently used within event driven solutions:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Keeping an ",Object(i.b)("strong",{parentName:"li"},"Event Log")," as a time sequenced as it happened recording of events (Source of the truth)."),Object(i.b)("li",{parentName:"ul"},"Enabling direct ",Object(i.b)("strong",{parentName:"li"},"replay")," of events."),Object(i.b)("li",{parentName:"ul"},"Enabling ",Object(i.b)("strong",{parentName:"li"},"Event Sourcing")," as a way of recording state changes in distributed systems."),Object(i.b)("li",{parentName:"ul"},"Enabling ",Object(i.b)("strong",{parentName:"li"},"programmatic access")," to the ",Object(i.b)("em",{parentName:"li"},"continuous event stream"),".")),Object(i.b)("p",null,"When viewed across these wider event driven capabilities, an event log style technology can provide a central component which can support all of these capabilities, whereas a message broker would have to be extended with other components."),Object(i.b)("h3",null,"Selecting the Event Backbone for the reference architecture"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"654px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"81.94444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAABcSAAAXEgFnn9JSAAADj0lEQVQ4y61Ua2iTVxg+trYpdrboFERkPwRhbJ3KboyBl4HMCYIVHNsPGf2xdpNu/eFqRaaMFknqpZfUfKnk0iRt0tb2y/3SNCaZJmma9MutX5p+SattTE016i6WQTN34OycD2E41B/iCw/n4byH55z3nPc8APwvtn7wOUhnl0sJ94YTlunbeeSLptANhn0y5pv6keeRJJrJ3kfuyZjkejDqjM8vIX8shSbZDALPE5xdvFtCOF583BOKi+03Qh14bDV7Jj7BIiIsfNE9Ge/B42HXRPQbp5+hxgORCzjXDl4UCKE14FVCrzc8A1qvB8nZNJ+by90ru1P4rQKLl7d2K6pOtnWtw7xMSGnWLz9aEQSiqfLvzgir2bk7FY9X/xHMLxUEL9wok82/2gnxiTaPjtLVlLS30ma3V5ktljetY+NlJOe4GT4yEZ89x96625zILJ1iUgsttl+nLnhDbKvjZkTkDSd/iadzP7G38i1Mav4UvvMWYDQaa2ia3m+1Wr/SarUHdDrdzmk2WUkEY9xt6yqusatXhdrFUiRR9KMemQpDzUOi0CCJUoPOCTtQIp1FuUcrCFAUtZthmAwOxLLsQ5Va/b7e5nqDCIbYtOnB4yKS948Uu3tVsE9LQ3n/MJQqtXi8BvuvGaF60AQ7KAWMJOcgbjcIpFLpx3a7XRkIBGwul0sll8trhoy2KiLoj87YHqwUkUSm/fvkaSE829YJO68o4aVuGbwslsM2UQ9sPiPi5xksyGXzEDgcjncaGhr21NbWHq2vr//UbDa/HQpP8Secnls0kZLVQyYk7KTQpSsyJNMMI0oxgBQDI6i3T4cu9lxFHRIl4hbyKFv4A5E73NHY2Hiorq7u66ampoMWi3X7uNu7jgjiBxGnFpby2cLvM7OLy5zDx3AmTzBtcAU42unLWLyTXHhmnss9/JPL5O5x+GE4MDxCl/j8wZJILFEiV/SVagZ0pWdFXU97YNNaAKpIbxGUA7ABX0V1JajYhiuowJturH6aw1iDsUnw0pbC1fIgceLn9rJ9x74tJ/zL708LyHzzeXHpF8d/EDyzluZ/x38wGE28QDiZAa8liDn4Ikmea82ut8b8U7varw7sH7J53pNqDRstnmDNZfng3kGr+yONwbkFG8a2TsXQZxqj80OTO/AueJl9XQ/GBokl4R8AvaFEAbtKA3advzAvTiQ4Yl/YdWKjgTiH8HwRY/VfxFU9Hx9AbGIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"evt backbone",title:"evt backbone",src:"/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/3c42d/evt-backbone.png",srcSet:["/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/7fc1e/evt-backbone.png 288w","/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/a5df1/evt-backbone.png 576w","/refarch-eda/static/6360441df8caf2de763fc395e4c7ed70/3c42d/evt-backbone.png 654w"],sizes:"(max-width: 654px) 100vw, 654px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"For the event-driven architecture, we defined the following characteristics to be essential for the ",Object(i.b)("em",{parentName:"p"},"event backbone:")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Publish-subscribe event communication between event producers and consumers"),Object(i.b)("li",{parentName:"ul"},"Facilitate many consumers with shared central “source of truth”."),Object(i.b)("li",{parentName:"ul"},"Capability to store events for a given period of time (event log). This is the shared source of the truth for events."),Object(i.b)("li",{parentName:"ul"},"Ability for consumers to subscribe to events."),Object(i.b)("li",{parentName:"ul"},"Provide replay of events from history for evolving application instances."),Object(i.b)("li",{parentName:"ul"},"Provide programmatic access to continuous stream of events, with minimum time lag."),Object(i.b)("li",{parentName:"ul"},"Must be highly scalable and resilient to cloud deployment levels.")),Object(i.b)(d,{mdxType:"Accordion"},Object(i.b)(h,{title:"Event backbone considerations",mdxType:"AccordionItem"},Object(i.b)("p",null,"While choosing an event backbone for your event-driven application development, the following functional and non-functional requirements should be taken into consideration:"),Object(i.b)("h4",null,"Persistence"),Object(i.b)("p",null,"When source systems generate events, the consumers of those are interested in those events may not be online or available at the same time. So you need a way to store these messages for a configurable period of time until they are consumed and acted upon. Event backbone should be able to provide such event persistence."),Object(i.b)("h4",null,"Observability"),Object(i.b)("p",null,"At times, you need an overall view of how events are ingested by source systems and getting processed by consumers. It could be a management console where events can be observed. Event backbone should provide such observability."),Object(i.b)("h4",null,"Fault tolerance"),Object(i.b)("p",null,"Event backbone could be made of several components. If one of them becomes unavailable, there should not be any impact on the event processors dependent on the backbone. Event backbone needs to provide this resiliency."),Object(i.b)("h4",null,"High availability"),Object(i.b)("p",null,"Event backbone provides persistence of messages/events. If one of the components of the backbone becomes unavailable, there should not be any impact on the availability of these messages/events. Event backbone should be highly available."),Object(i.b)("h4",null,"Performance"),Object(i.b)("p",null,"Event backbone should provide means of accelerating the event processing operations (e.g. parallelising event processing) thereby providing enhanced performance."),Object(i.b)("h4",null,"Delivery guarantees"),Object(i.b)("p",null,"Event backbone should support guaranteed delivery both for producer and consumer. It should support the delivery guarantee options of ",Object(i.b)("inlineCode",{parentName:"p"},"at least once"),", ",Object(i.b)("inlineCode",{parentName:"p"},"at most once"),", and ",Object(i.b)("inlineCode",{parentName:"p"},"exactly once"),"."),Object(i.b)("h4",null,"Security"),Object(i.b)("p",null,"The data residing in the event backbone should be secured, at rest as well as in transit. Only authenticated and authorized users should be able to publish and consume messages from the backbone. Topic specific authorizations will also help blocking access by unauthorized consumers. Event backbone should provide these security measures."),Object(i.b)("h4",null,"Stateful operations for events streams"),Object(i.b)("p",null,"Sometimes, source systems generate a continuous flow of ‘inter-related’ events (e.g. IoT sensors sending data every second). In order to process such messages correctly, the event backbone needs to support for stateful operations like windowing, joins, aggregations. and any type of real time analytics."),Object(i.b)("h4",null,"Event routing options"),Object(i.b)("p",null,"In EDA, event consumers may not be online at all times. So, it should be easier for consumers to subscribe to a topic when it comes online."),Object(i.b)("h4",null,"On-failure hooks"),Object(i.b)("p",null,"Event backbone can support pre-configured actions/behaviors for certain messages. E.g. if a consumer fails to process a message more than a certain number of times, that message can be sent to another topic for re-trying the processing action."))),Object(i.b)("p",null,"Looking across these capabilities, the potential technologies, the amount of adoption and community activity around the technologies, and the considerations listed above, we selected ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://kafka.apache.org"}),"Apache Kafka")," as our event backbone for the event-driven reference architecture."),Object(i.b)("h2",null,"Event sources"),Object(i.b)("p",null,"When you consider an event-driven architecture, think about event producers and event consumers as the interaction points with events. As you develop event-driven applications following a microservices architecture, the microservices you develop play the role of both event producers and event consumers, with the events being passed as the communication payload between them.\nHowever, as you look at the wider opportunities that being event driven offers, you need to widen your view and consider event sources that come from beyond the application code you are writing.  These are events that may be produced from outside our immediate system but have business relevance or enable us to gain valuable insights into things that are affecting your business."),Object(i.b)("h3",null,"Here is a list of common event sources:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"IoT devices or sensors showing device status changes"),Object(i.b)("li",{parentName:"ul"},"Click Stream data from web or mobile applications"),Object(i.b)("li",{parentName:"ul"},"Mobile applications (HTTP to Back-end for Front-end service and then to topic)"),Object(i.b)("li",{parentName:"ul"},"Geospatial data"),Object(i.b)("li",{parentName:"ul"},"Weather alerts"),Object(i.b)("li",{parentName:"ul"},"Social media feeds"),Object(i.b)("li",{parentName:"ul"},"Real-time voice feeds"),Object(i.b)("li",{parentName:"ul"},"Other messaging backbone"),Object(i.b)("li",{parentName:"ul"},"Data change event streams from databases (change data capture)")),Object(i.b)("h3",null,"IoT devices and sensors"),Object(i.b)("p",null,"With IoT devices and sensors you typically have a gateway providing the connectivity for the device, and a level of event enrichment and filtering. In terms of domain driven design you would see the device and gateway as being the technical domain and the event-driven reference architecture as providing the infrastructure for the applications in a business domain.\nIn practice, the IoT gateway or platform provides the connectivity and is the point of filtering and consolidation of events so that only business-relevant events are passed up to the business domain. The gateway can also be the point where the technical event is enhanced to relate to something recognizable at the business level.  One example of this is to relate a device number or identifier in the event to something that the business recognizes."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1077px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAACaUlEQVQoz2NgAAK7/Nls7qXzONI6V3KF1S/mtC+YzR7bupgBBjzK5rKW9izjy2qYKZBW3SuUUdUtlFozSbCoezGfX8U8DoeC2aypZa2MYMW2uTNYPYpnsjEgAbeyZSzW+QvZdUvvMFjnz+PwKN3FNnXJapPO3j7fnv6pLv3T5tr3TZjsNXfRauvWRec4GMSbGdUrD7EwmPYzMoQ0r+EAGfL1w2uec+fOrT595kwEiN8+uZU1qLSFY3oWxJL//805d2yYLfv/PwPr//9F3FvWLwOxwXrP71nGXFpeKZTetpCfwSm2lBcoxjpvwwGlhw8f/r969cpEkCL14ofSYhm3pBkK/rMzRT82Z4j72cWa+b9Ntux/nVjh/2aOrP9tDIn/mxmS/kd1T12iWFRYELxg8XJZhoD8bm6gfvbJ81cp3Ll79//169f6QQZa11wUUsg6LcjQ9J+JIeiBFEP8nzCWjP9eogX/3ATy/jtzZP4PYkgG4pj/mnPmzBHv7e01Xbp0mQRD4pRD7CADTh0/InjhwoWTly5dygDx26ZNYfMv7eUCsU8fmC27c02/0aOdzfL/X3cI71lWpb9vVa/WjR1tavtWtBls27pVEKQutHYRN4ND4Rw2r5JZLEA+HxCDwoTb0DeT1aF0BbtT0QIm9cQ5bHOWr1Xv7O23nzJttsGabYclJs2Yb97XP9G0q3eS2ez5S4yWr93Iz+DYxupeMocFHOA2WZPZtdwTueyDkrnMAzO4rLMmc7hXLQcnA5fS2YzO+fPYLCt2sprlL2IRUdCRBUqIiinry9gnNnAE1C5lcy2aze5eMpcJpB4AQBDoS32L6I0AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"hl-arch-iot",title:"hl-arch-iot",src:"/refarch-eda/static/a7a76a7650206c65cf6e41f3b2d586d3/b0b3a/hl-arch-iot.png",srcSet:["/refarch-eda/static/a7a76a7650206c65cf6e41f3b2d586d3/7fc1e/hl-arch-iot.png 288w","/refarch-eda/static/a7a76a7650206c65cf6e41f3b2d586d3/a5df1/hl-arch-iot.png 576w","/refarch-eda/static/a7a76a7650206c65cf6e41f3b2d586d3/b0b3a/hl-arch-iot.png 1077w"],sizes:"(max-width: 1077px) 100vw, 1077px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Clickstream data"),Object(i.b)("p",null,"Clickstream data is often used to understand the behavior of users as they navigate their way through web or mobile apps. It provides a recording of the actions they take, such as the clicks, the mouse-movements, and the gestures.  Analysis of the clickstream data can lead to a deep understanding of how users actually interact with the application. It enables you to detect where users struggle and to look for ways to improve the experience."),Object(i.b)("p",null,"Processing the clickstream in real time in an event-driven architecture can also give rise to the opportunity to take direct action in response to what a user is currently doing, or more accurately has just done."),Object(i.b)("p",null,"There are various “collectors” that enable collection of standard clickstream events and allow custom actions to be collected as events typically through tags in Javascript."),Object(i.b)("p",null,"Within the Apache Open Source communities the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://divolte.io/"}),"Divolte")," collector is an example of one of these collectors that directly publishes events to Kafka topics."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1029px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"42.01388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAACCUlEQVQoz2NgQANr164F0yuWLmdev2GD6tTpM817e3uturu7rTq7Oi07urptJk6abL5mzRrddevW84DUrlmzlqG8ooJh8ZIlDAwHbr9j2X3tJWNrRijDlMl9DP0L9wKV/GfIyr3MNGPNJpOJM6cG9/ZNDpk1b7HbjAVrTafNWx40ecpU/0XL13tMWrxPkIFUkNpzVOr/fwS/dPJxoRNrm3iQ1axcvZa7oaFBGOhCXoZDd943Hbj5Wqsi3IF16pQJ/DWzjvEwZP3nZIh9Z8kQ+yWBIfl/oVDB/1ipkv+xooX/o/jz/ucxp/9PZUj8HwWUi+PI/C++dtVSleTklJgFCxbqMuy9+e7NxvNP/ee0lovMmjlNrXPeAVmG7P/CDFHPkxli325nSP2/SrLo7wrFin+rpEr+rZIs/reUI/PfOoZkMF7KkPZfY/6syZqlZWWe06ZPN8LrXZaO/+ys2f+50MXZkj4Kp/WfY4Xxly9fLtnf368CpGXhitpqyhmqSrLA7IUrj7DNXr7SYsbc+Q7zFy2zX7tyrfLkHUfU++YsCpw0YZLTmnUbzRcuWWHdN3Gq+5JlKy3+IwfyjutvGQ7eeMmwoiWHYd26dWCxnZu2cCxctcKyZ0K/66RJk9zWrlmrvmLjZqlFy5ZZzpw503LOnLlms2bNNp+/YIE5UI/uypWrmEH6Fi9ezAAA2aDnNxBCKgcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"hl-arch-clickstream",title:"hl-arch-clickstream",src:"/refarch-eda/static/2f1a4cf2db08a819e0b2d59027395246/d51b4/hl-arch-clickstream.png",srcSet:["/refarch-eda/static/2f1a4cf2db08a819e0b2d59027395246/7fc1e/hl-arch-clickstream.png 288w","/refarch-eda/static/2f1a4cf2db08a819e0b2d59027395246/a5df1/hl-arch-clickstream.png 576w","/refarch-eda/static/2f1a4cf2db08a819e0b2d59027395246/d51b4/hl-arch-clickstream.png 1029w"],sizes:"(max-width: 1029px) 100vw, 1029px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Event standards and schemas"),Object(i.b)("p",null,"Where you have control as the producer of an event we should consider having an event schema and following a standard to provide the best opportunity for portability of the solutions across cloud environments.\nWith a lack of formal standards, a working group under the Cloud Native Computing Foundation (CNCF) has recently been formed to define and propose ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://cloudevents.io/"}),"Cloud Events")," as the standard."),Object(i.b)("h2",null,"Microservices"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"772px"}},"\n      ",Object(i.b)("span",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"87.15277777777777%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABcSAAAXEgFnn9JSAAAEWUlEQVQ4y3VTDUxTVxR+oHQUN0RhOlwAGYpAhLmNLARBmLBNIrJsmcxggCgWEDsomSUaJWxiuwmDViyMSh2haJAC3UCDpfTRUvqHUqCA0CIwMkpncfI7KL+evVcKMpKd5Mu9557vfO+8e85FEMyWGh8egHZVBLQpwqFN/imolZ+BrOko8O/aIZuMxWLt0Wg02UKhUCYQCLokmLW3t1/Kysp6zV0QC2vnFC0wIRYtTTajKxMSdGVJIYXJ2qrjCGJHpKalukZHR+/39/f3YjKZZEwA6urqoL6+HkQiEahUKuBwOL7rgqay2y1L98vAUFwAYyWFYMQA/Apoy/uRirzr4UDPoDo6OTl9jFGP4Pz079K9aXRaKquwMPM6jXYhNj7OCz9HBaJVQcjPPmZi0HNf/pydM557LeeffBp97kbWFTn5nHtQTKzj2bhYt7CwMJ/IyEjvpLOJH1ghyM7NV9Ex0W1Fbv0JQd4kEndhvgeG3RviNpsTAMDKXN21jIjzWWkXUpjUABn07Hs0pfSsfo7uXSdaWVs7byMQDlHJ5INY0hsYtoBCuTXv6lWnFBLJ0ZZIdMNovh5ue3fgfOW8ht9h6oXWyU6TaqJ9uXW8Y/HJfA8IxuXpGwuw/uJ4xElsJW48JJFIhJPR0S7BIcGOvQVcc4W/TTWq+X89gtKeiiWulgdlvZUrApMUGmcVuh2ZQQRzIhtte+9KQUkihXknXDILPlIT+NQbX3mtCX9LoWy/mEk139uNkZKLnLkauD3FA/Z4JZRMV0Hp4u9w52V1B5LsstWcIDIuPlCNL4P0+dyCxDADktFpUExijf5j5vqaaHjUMUJS3Dn8vm0oXfRAylNaSHxN2olITuyJmNLk+NTm7wPWf43754K8RKOHAnnfIkvVv3xLqV28NzwL97R/G0+dinGWikUEvCkYkOTkJAcshTBfPPJWKYPzOZ3yQyDm77E0blXwsvpFBsMAwNBbMAJwawxb++f0UV+dsXPevcvd1+99z4CAgH1+h/y2o02oqFPTCYIGAcjkMtDqtEZ+Lf+T/4xFimTo6NfioSORDbrDOL4UDYQENgx64zFbO6KrpYq3gw4HEblc7i9sNnu0qKjoBYYxHo+nLi8v/9AsVMLXvH6Cj/Ux0D99HnRTiRhIr3STqaOt+jNrcWY+055MJttbXNuEhAT30NDQd9bizc3NVsjTmg7zOMjK1O6GTgMMq4dB36mHkY4RMHQbYFI7AWiZKP/0N6d3Ojg4+GDUg0Qi8YCrq6vNxqGnUCjWZkdRLDMLNtKELrqHffCYp1pRVihMqvvKhbaqJ/MDDf0Lw+IhGGoaDMV5uZdybOzt7a2R/7OqyzwEZla7I85DabpKLQzxB2Gw5hkMVD8DLa8PxpqM0F3TFWUeMbZwiyXVH8NHeMUY/Cz7beZIafKv6x94kF2XIWai1ShDxG1ioOViZtPdFpa0HM1t3I/Hb6Yw1qrDBx0fmRAMwRg88Zf8L1QUP6Mxdz2uAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(a.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"evt micro",title:"evt micro",src:"/refarch-eda/static/4b8133d36d94d09dfbbb1734b345f444/0b6df/evt-micro.png",srcSet:["/refarch-eda/static/4b8133d36d94d09dfbbb1734b345f444/7fc1e/evt-micro.png 288w","/refarch-eda/static/4b8133d36d94d09dfbbb1734b345f444/a5df1/evt-micro.png 576w","/refarch-eda/static/4b8133d36d94d09dfbbb1734b345f444/0b6df/evt-micro.png 772w"],sizes:"(max-width: 772px) 100vw, 772px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"The event-driven reference architecture provides support for event-driven microservices - microservices which are connected through and communicate via the pub/sub communication protocol within an event backbone."),Object(i.b)("p",null,"With Kafka as the event backbone and pub/sub messaging provider, microservices can use the Kafka API’s to publish and listen for events."),Object(i.b)("p",null,"On cloud-native platforms, microservices are the application architecture of choice. As businesses become event-driven, event driven pattern needs to extend into our microservices application space. This means that your microservices are still doing REST calls to well-known microservice but they must respond to and send out events, or in event-driven terms they need to be both event producers and consumers to enforce strong decoupling."),Object(i.b)("p",null,"With the adoption of microservices, the focus on synchronous communication between services has increased. Service mesh packages such as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://istio.io/"}),"Istio")," help with the management of communication, service discovery, load balancing, and visibility in this synchronous communication environment."),Object(i.b)("p",null,"With event-driven microservices, the communication point becomes the Pub/Sub layer of the event backbone. By adopting an event-based approach for intercommunication between microservices, the microservices applications are naturally responsive (event-driven). This approach enhances the loose coupling nature of microservices because it decouples producers and consumers.  Further, it enables the sharing of data across microservices through the event log.\nThese ",Object(i.b)("em",{parentName:"p"},"event")," style characteristics are increasingly important considerations when you develop microservices style applications. In practical terms microservices applications are a combination of synchronous API-driven, and asynchronous event-driven communication styles. For the implementation point of view a set of established patterns are used, such as Database per Service, Event Sourcing, Command Query Responsibility Segregation, Saga, …"),Object(i.b)("h3",null,"Event-driven apps with containers"),Object(i.b)("p",null,"While the serverless approach with Cloud Functions provides a simplified event-based programming model, the majority of microservices applications today are developed for and deployed to a container-based cloud-native stack.  Within the cloud-native landscape, Kubernetes is the standard platform for container orchestration, and therefore becomes the base for the container platform in the event-driven architecture."),Object(i.b)("p",null,"As before, the event backbone is the Pub/Sub communication provider and event log for shared data for the microservices. In this context microservices are developed as direct consumers and producers of events on the backbone via topics.  The extra work in this environment is in managing consumer instances to respond to the demand of the event stream. You must determine how many consumer instances need to be running to keep pace with, or always be immediately available to execute, the microservice in response to an arriving event."),Object(i.b)("h2",null,"Commands"),Object(i.b)("p",null,"A command, is an instruction to do something. Typically, commands are directed to a particular consumer. The consumer runs the required command or process, and passes back a confirmation to the issuer stating that the command has been processed."),Object(i.b)("p",null,"The Command concept plays a key role in the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/refarch-eda/patterns/cqrs/"}),"Command-Query Responsibility Segregation")," pattern that is more commonly known as ",Object(i.b)("strong",{parentName:"p"},"CQRS"),"."),Object(i.b)("h2",null,"Loose coupling"),Object(i.b)("p",null,"Loose coupling is one of the main benefits of event-driven processing. It allows event producers to emit events without any knowledge about who is going to consume those events. Likewise, event consumers don’t need to be aware of the event emitters. Because of this, event consuming modules and event producer modules can be implemented in different languages or use technologies that are different and appropriate for specific jobs. Loosely coupled modules are better suited to evolve independently and, when implemented correctly, result in a significant decrease in system complexity."),Object(i.b)("p",null,"Loose coupling, however, does not mean “no coupling”. An event consumer consumes events that are useful in achieving its goals and in doing so establishes what data it needs and the type and format of that data. The event producer emits events that it hopes are understood and useful to consumers thus establishing an implicit contract with potential consumers. For example, an event notification in XML format must conform to a certain schema that must be known by both the consumer and the producer.  One of the most important things that you can do to reduce coupling in an event-driven system is to reduce the number of distinct event types that flow between modules. To do this you must pay attention to the cohesiveness of those modules."),Object(i.b)("h2",null,"Cohesion"),Object(i.b)("p",null,"Cohesion is the degree to which related things are encapsulated together in the same software module. For the purposes of this EDA discussion, a module is defined as an independently deployable software unit that has high cohesion. Cohesion is strongly related to coupling in the sense that a highly cohesive module communicates less with other modules, thus reducing the number of events most importantly, the number of event types in the system. The less frequently modules interact with each other, the less coupled they are. Achieving cohesion in software while optimizing module size for flexibility and adaptability is difficult, but something to strive for. Designing for cohesion starts with a holistic understanding of the problem domain and good analysis work. Sometimes it must also take into account the constraints of the supporting software environment. Monolithic implementations and implementations that are excessively fine-grained must be avoided."))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-concepts-terms-and-definitions-index-mdx-af55443d277f02fcd559.js.map
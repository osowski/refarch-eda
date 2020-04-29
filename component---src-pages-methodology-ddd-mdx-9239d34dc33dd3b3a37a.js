(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{vwvr:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return c}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var i=a("7ljp"),n=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e}).apply(this,arguments)}var o={},s={_frontmatter:o},l=n.a;function c(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,i,n={},r=Object.keys(e);for(i=0;i<r.length;i++)a=r[i],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,["components"]);return Object(i.b)(l,r({},s,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"This section describes how to apply domain driven design with event based application and describe the high level steps which uses output from the event storming session and derives a set of micro services design specifications."),Object(i.b)("p",null,Object(i.b)("a",r({parentName:"p"},{href:"./eventstorming/"}),"Event storming")," is part of the domain driven design methodology. And domain-driven design was deeply describe in ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.amazon.com/Domain-Driven-Design-Tackling-Complexity-Software/dp/0321125215/ref=asc_df_0321125215/?tag=hyprod-20&linkCode=df0&hvadid=312118197030&hvpos=1o1&hvnetw=g&hvrand=3363692763187919455&hvpone=&hvptwo=&hvqmt=&hvdev=c&hvdv/l=&hvlocint=&hvlocphy=9032152&hvtargid=pla-449269547899&psc=1"}),"Eric Evans’s “Domain Driven Design: Tackling Complexity in the Heart of Software” book")," from 2004. At IBM we also summarized the concepts needed for implementing microservice in ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/practices/code/domain-driven-design/overview"}),"Kyle Brown’s article"),". "),Object(i.b)("p",null,"The goals for the design step are: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"To support highly modular cloud native microservices. "),Object(i.b)("li",{parentName:"ul"},"To adopt event coupled microservices - facilitating independent modification and evolution of each microservice separately."),Object(i.b)("li",{parentName:"ul"},"To allow applying event-driven patterns such as event sourcing, CQRS and SAGA to address some of the challenges of microservice implementation: data consitency, transaction cross domain, and complex queries between aggregates managed by different services.")),Object(i.b)("h2",null,"Starting materials generated during the Event Storming workshop"),Object(i.b)("p",null,"We make use of the following materials generated during Event Storming and analysis workshop: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Event Sequence flow."),Object(i.b)("li",{parentName:"ul"},"Events – business description."),Object(i.b)("li",{parentName:"ul"},"Critical events. "),Object(i.b)("li",{parentName:"ul"},"Aggregates and services:   ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Users – role based user stories.   "),Object(i.b)("li",{parentName:"ul"},"Commands."),Object(i.b)("li",{parentName:"ul"},"Event linkages."),Object(i.b)("li",{parentName:"ul"},"Policies. "),Object(i.b)("li",{parentName:"ul"},"Event prediction and probability flows. ")))),Object(i.b)("p",null,"The derivation of these material was described in: ",Object(i.b)("a",r({parentName:"p"},{href:"eventstorming/"}),"the event storming introduction"),"."),Object(i.b)("p",null,"Here is an example of starting material illustrating the beginning of the process for the Reefer shipping business process:"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"38.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrElEQVQoz22STWsUQRCGG7zlT4gHbwEPkp/gUc9eI7kr3kTwErwErx4UwYOCHtx8oItgPskSdw2Ma2IIYSMaNOtM4uxuZnZ2Z2ane57UzJqJwRS8VHW/Vd1Vb7dquvcJoyUYBBjdI7M0TXP8G6epOd1P4xyJNsSJybKKXDVy7wuvy1N4JUXQeDgkdCikFiS5P2O6g7M4Rm/pMndeznHl0RbtIGtEY0yCelD+SX1rHs+6RdSqcZ4Z4wlcTNZh0sWpTdBdv8nk9AI3nn7Fi4d5WZ+qKBKEv9+RHL7HHLzBuB8w9ivwLfrhBPafi9ydneH29H5RfFI5OCjT2X1GIl4NtM4PI9jAnlF4K5dozl6gtTJK662s6+NCRvSjH1x7vM71Jxtw5kiDXxlj+7mit3YVdSK+6XsE1Rd4tRJHa+I/zeFXS8TNzb/aQePjHjvLu/ibNm1rXzg/p0LXwm/Oi2SWjJzpkt0mOkSfA5xVB6dyiL1q0622ocOQl0nCus1RZY9fCw3c5e9E39r/6V10mBoZvB8J4lP0YnmEpPgSBBL7A4FwXYlDnQ+e/wijc38M8dxKW0PXSIwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"event storming order",title:"event storming order",src:"/refarch-eda/static/a301882ce7e9a4d4ac61006945b164d4/3cbba/event-storming-order.png",srcSet:["/refarch-eda/static/a301882ce7e9a4d4ac61006945b164d4/7fc1e/event-storming-order.png 288w","/refarch-eda/static/a301882ce7e9a4d4ac61006945b164d4/a5df1/event-storming-order.png 576w","/refarch-eda/static/a301882ce7e9a4d4ac61006945b164d4/3cbba/event-storming-order.png 1152w","/refarch-eda/static/a301882ce7e9a4d4ac61006945b164d4/0417f/event-storming-order.png 1436w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"From there we complement the analysis and start the domain design."),Object(i.b)("h2",null,"Steps in the design process"),Object(i.b)("h3",null,"Step 1: Assess domain and subdomains"),Object(i.b)("p",null,"Domain is what an organization does, and it includes the how to perform its operations.  It is composed of sub domains. A Core Domain is a part of the business Domain that is of primary importance to the success of the organization, the organization needs to excel at it."),Object(i.b)("p",null,"During the event storming analysis, you define the domain and groups a set of subdomains like orders, invoice, customer, … and external systems. Here is an example of such domain and subdomains:"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"52.77777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB30lEQVQoz41S23KbMBDl/z+vnV5iu45DwDZ3CQQSSOj0rJxkPH2qPJrFoNW5bRYj0tr3x0Pki3UL3D7Vze/4d8mZfd+xs0r/bFdMs4MPO7LzpcC3H7/QKgOzrOki+fC5tB7xlhcoyhuKokRZXjFOczqz+YBpcXjnt8PxDG0ssrZT+P6zwDDahPq8pKHtNZp2QDdo6NFg4QXCSjClTgY4vY641wNBArI9SQQGFZOEsH/UENEOBi+H3zidDni95Lg3Fr0KqOoaTdOgrhsyr8h4wad12eI2jGYmgwmDnqDIYqDMW+XYvCEvF+TFjPJuE6h1gUwtDOVZZ9m3YPvwPFBhtm47ituQUKuESD9ON164Uh7IBHDuKRD++sFRquMlK5RmoAFYvU/BZtsWMY6A55/Vi9EMYnz2MSZmKVnK8rSiJspbnvO9TmBKB7ILSXa2WHrSbNwtimuFS37H8XxLYVjn0WvDZ9qgTLJEtoQlIyVem8VTdvwiQMkR+dWi6h5Jin9NP9A/wzFw6Pjcde3DkqomYEnPbWpWDOP92uL4J8e16mBXj0zCuFc9FA/NdkuyJGnBlIFVk8U4r+lyqRNn1bFRWFoGqjmTNwJJFdZZryTRJk26HBJjA4dMZjLG+LX/d/0FW11SQR7cQ2AAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"domain subdomains",title:"domain subdomains",src:"/refarch-eda/static/543b63dffc305b63389e9bab474ff292/3cbba/domain-subdomains.png",srcSet:["/refarch-eda/static/543b63dffc305b63389e9bab474ff292/7fc1e/domain-subdomains.png 288w","/refarch-eda/static/543b63dffc305b63389e9bab474ff292/a5df1/domain-subdomains.png 576w","/refarch-eda/static/543b63dffc305b63389e9bab474ff292/3cbba/domain-subdomains.png 1152w","/refarch-eda/static/543b63dffc305b63389e9bab474ff292/f7eac/domain-subdomains.png 1458w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("p",null,"We have three core subdomains and the rest are supports."),Object(i.b)("hr",null),Object(i.b)("h3",null,"Step 2: Defined the potential application"),Object(i.b)("p",null,"At the high level, when doing the analysis, you should have some insight decision of the top level application to develop, but it is also important to also list other systems to interact with. A classic system context diagram is a nice tool to represent that. The EDA reference implementation solution includes such ",Object(i.b)("a",r({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/design/architecture/#system-context"}),"system context diagram"),"."),Object(i.b)("p",null,"Each interface needs to be documented using an efficient tools of ",Object(i.b)("a",r({parentName:"p"},{href:"https://www.ibm.com/developerworks/websphere/techjournal/1201_clark/1201_clark.html"}),"interface characteristics"),". "),Object(i.b)("p",null,"full set of interface characteristics is shown below:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"FUNCTIONAL DEFINITION"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Principal data objects"),Object(i.b)("li",{parentName:"ul"},"Operation/function"),Object(i.b)("li",{parentName:"ul"},"Read or change"),Object(i.b)("li",{parentName:"ul"},"Request/response objects"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"TECHNICAL INTERFACE"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Transport"),Object(i.b)("li",{parentName:"ul"},"Protocol"),Object(i.b)("li",{parentName:"ul"},"Data format"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"INTERACTION TYPE"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Request-response or fire-forget"),Object(i.b)("li",{parentName:"ul"},"Thread-blocking or asynchronous"),Object(i.b)("li",{parentName:"ul"},"Batch or individual"),Object(i.b)("li",{parentName:"ul"},"Message size"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"PERFORMANCE"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Response times"),Object(i.b)("li",{parentName:"ul"},"Throughput"),Object(i.b)("li",{parentName:"ul"},"Volumes"),Object(i.b)("li",{parentName:"ul"},"Concurrency"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"INTEGRITY"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Validation"),Object(i.b)("li",{parentName:"ul"},"Transactionality"),Object(i.b)("li",{parentName:"ul"},"Statefulness"),Object(i.b)("li",{parentName:"ul"},"Event sequence"),Object(i.b)("li",{parentName:"ul"},"Idempotence"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"SECURITY"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Identity/authentication"),Object(i.b)("li",{parentName:"ul"},"Authorization"),Object(i.b)("li",{parentName:"ul"},"Data ownership"),Object(i.b)("li",{parentName:"ul"},"Privacy"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"RELIABILITY"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Availability"),Object(i.b)("li",{parentName:"ul"},"Delivery assurance"))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"ERROR HANDLING"),Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Error management capabilities"),Object(i.b)("li",{parentName:"ul"},"Known exception conditions"),Object(i.b)("li",{parentName:"ul"},"Unexpected error presentation")))),Object(i.b)("hr",null),Object(i.b)("h3",null,"Step 3: Define the ubiquitous language"),Object(i.b)("p",null,"This is where the work from the event storming and the relation with the business experts should help. Domain experts use their jargon while technical team members have their own language tuned for discussing the domain in terms of design. The terminology of day-to-day discussions is disconnected from the terminology embedded in the code, so the ubiquitous language helps to allign knowledge with design elements, code and tests. (Think about EJB, JPA entity, all the JEE design jargon versus ShippingOrder, order provisioning, fullfillment… )"),Object(i.b)("p",null,"The vocabulary of that ubiquitous language includes the class names and prominent operation names. The language includes terms to discuss rules that have been made explicit in the model. Be sure to commit the team to exercising that language relentlessly in all communication within the business and in the code. Use the same language in diagrams, writing, and especially speech."),Object(i.b)("p",null,"Play with the model as you talk about the system. Describe scenarios out loud using the elements and interactions of the model, combining concepts in ways allowed by the model. Find easier ways to say what you need to say, and then take those new ideas back down to the diagrams and code."),Object(i.b)("h4",null,"Entities and Value Objects"),Object(i.b)("p",null,"Entities are part of the ubiquitous language, and represent business concepts that can be uniquely identified by some atributes. They have a life cycle that is important to model."),Object(i.b)("p",null,"Value Object also represent things in the domain but without identity, and they are frequently transient, created for an operation and then discarded."),Object(i.b)("p",null,"Some time in a certain context a value object could become an entity. As an example, an Address will be most of the time a value object, excepts in a mapping app or in an agenda app."),Object(i.b)("p",null,"Below is an example of entities (Customer and Shipping Order) and value objects (delivery history and delivery specification):"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"932px"}},"\n      ",Object(i.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.48611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB20lEQVQoz32S7UtTcRTH75/Sq970NuiJojdRZJARIr0KKiuKpCTpYa+iIMLERs1ZgkkPoLMwWBE5k8gwU9vMbLPyYaQzc143153b7r2/++neX/MyaHTgcA6c7zl8z/ccxbIsypmaWWB06h3fE5/4NjfK17kIY9MDaLkVF6MbOmltiZWsSkpLUjDyKEKYmLbn9VVW8xrZfIZsLktoJMAJ7w4ut1VR37qfursVHG7YKIc6JHS9QDQ+wjl/hY2ppta3R9aUcuyEEPSPBTnr38tJ706O3NzM0cYtMn6JD0uMYTrsVN6P9zAU7WPg8ytSmSRKZPItveEAQxMhQuFOZhZisiH9WyU2E2ZydpxYPMx0YoKp2SgFPc//TPEHPdQ0beOMbxeVV9bxfLBdFkq1LRg5Xnx4QM/HDl4OP+R1pIvg4H2psWOmaUjZnB7lcW8jF1oPUn+v0l5pE32RJ8WVDAl0bDGdoK5lH7XNu6Wux5q2UnV1PR1vvEWJTJeAksosMZ/8weLyT36pCfsgmsvQsoR78RuBUzR0ncbTXs3xW9s5dH0DT/ub/x1YToe14tpA5zV8zzzc7r7Ine5LXHtUw/mWA/YndLpHdAc6ibCEbP4brRKGJbkouoV0Iayy2D9aJXd6yF7pSQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ent vo",title:"ent vo",src:"/refarch-eda/static/5223bde2f029169095547759b1012dbb/07264/ent-vo.png",srcSet:["/refarch-eda/static/5223bde2f029169095547759b1012dbb/7fc1e/ent-vo.png 288w","/refarch-eda/static/5223bde2f029169095547759b1012dbb/a5df1/ent-vo.png 576w","/refarch-eda/static/5223bde2f029169095547759b1012dbb/07264/ent-vo.png 932w"],sizes:"(max-width: 932px) 100vw, 932px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h4",null,"Aggregate boundaries"),Object(i.b)("p",null,"An aggregate is a cluster of associated objects that we treat as a unit for the purpose of data changes. An entity is most likely and aggregate and every things related to it define its boundaries. "),Object(i.b)("h4",null,"Bounded Contexts"),Object(i.b)("p",null,"Bounded Context explicitly defines the boundaries of your model. This concept is critical in large software projects. A Bounded Context sets the limits around what a specific team works on and helps them to define their own vocabulary within that particular context. When you define a bounded context, you define who uses it, how they use it, where it applies within a larger application context, and what it consists of in terms of things like Swagger documentation and code repositories."),Object(i.b)("p",null,"Within a business context every use of a given domain term, phrase, or sentence, ",Object(i.b)("strong",{parentName:"p"},"the Ubiquitous Language")," inside the boundary has a specific contextual meaning. So order context is a boundary context and groups order, ordered product type, pickup and shipping addresses, delivery specifications, delivery history. "),Object(i.b)("h4",null,"Repositories"),Object(i.b)("p",null,"Repository represents the infrastructure service to persist the root aggregate during its full life cycle.\nClient applications request objects from the repository using query methods that select objects based on criteria specified by the client, typically the value of certain attributes."),Object(i.b)("h4",null,"Event linked microservices design - structure"),Object(i.b)("p",null,"A complete event driven microservices specification (the target of this design step) includes specifications of the following: "),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Event Topics ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Used to configure the Event Backbone "),Object(i.b)("li",{parentName:"ul"},"Mapped to the life cycle of the root entity"),Object(i.b)("li",{parentName:"ul"},"Topics can be chained to address different consumer semantic"),Object(i.b)("li",{parentName:"ul"},"Single partition for keeping order and support exactly once delivery"))),Object(i.b)("li",{parentName:"ul"},"Event types within each event topic "),Object(i.b)("li",{parentName:"ul"},"Microservices: ",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"They may be finer grained than aggregates or mapped to aggregate boundaries."),Object(i.b)("li",{parentName:"ul"},"They may separate query and command; possibly multiple queries. "),Object(i.b)("li",{parentName:"ul"},"They could define demonstration control and serve main User Interface."),Object(i.b)("li",{parentName:"ul"},"Reference the related Entities and value objects within each microservice."),Object(i.b)("li",{parentName:"ul"},"Define APIs  ( Synchronous or asynchronous) using standards like openAPI. Could be done bottom up from the code, as most of TDD implementation will lead to. "),Object(i.b)("li",{parentName:"ul"},"Topics and events Subscribed to."),Object(i.b)("li",{parentName:"ul"},"Events published / emitted.  "))),Object(i.b)("li",{parentName:"ul"},"List of end to end interactions:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"List of logic segments per microservice "))),Object(i.b)("li",{parentName:"ul"},"Recovery processing, scaling:",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"We expect this to be highly patterned and template driven not requiring example-specific design. ")))),Object(i.b)("hr",null),Object(i.b)("h3",null,"Step 4: Define modules"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each aggregate will be implemented as some composition of:",Object(i.b)("br",{parentName:"li"}),"(1) a command microservice managing state changes to the entities in this aggregate",Object(i.b)("br",{parentName:"li"}),"(2) possibly one or more separate (CQRS) query services providing internal or external API query capabilities",Object(i.b)("br",{parentName:"li"}),"(3) additional simulation, predictive analytics or User Interface microservices   "),Object(i.b)("li",{parentName:"ul"},"The command microservice will be built around a collection of active entites for the aggregate, keyed by some primary key."),Object(i.b)("li",{parentName:"ul"},"The separation of each aggregate into specific component microservices as outlined above, will be a complete list of microservices for the build / sprint. "),Object(i.b)("li",{parentName:"ul"},"Identify the data collections, and collection organization (keying structure) in each command and query microservice for this build.")),Object(i.b)("hr",null),Object(i.b)("h3",null,"Step 5: Limit the context and scope for this particular build / sprint"),Object(i.b)("p",null,"We assume that we are developing a particular build for a sprint within some agile development approach, deferring additional functions and complexity to later sprints:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Working from the initial list of aggregates, select which aggregates will be included in this build"),Object(i.b)("li",{parentName:"ul"},"For each aggregate the possible choices are:",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"to completely skip and workaround the aggregate in this build."),Object(i.b)("li",{parentName:"ol"},"to include a full lifecycle implementation of the aggregate   "),Object(i.b)("li",{parentName:"ol"},"to provide a simplified lifecycle implementation - typically a table of entities is initialized at start up, and state changes to existing entities are tracked   "))),Object(i.b)("li",{parentName:"ul"},"Determine whether there are simulation services or predictive analytics service to be included in the build "),Object(i.b)("li",{parentName:"ul"},"Identify the external query APIs and command APIs which this build should support "),Object(i.b)("li",{parentName:"ul"},"Create entity lifecycle diagrams for entites having a full lifecycle implementation in this build / sprint.")),Object(i.b)("hr",null),Object(i.b)("h3",null,"Step 6: Generate microservice interaction diagrams for the build"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The diagram will show API calls initiating state change. They should map the commands discovered during the event storming.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"It shows for each interaction whether this is a synchronous API calls or an asynchronous event interaction via the event backbone.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"The diagram labels each specific event interaction between microservices trigerring a state change.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"Typically queries are synchronous API calls since the caller cannot usefully proceeed until a result is returned.")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"From these, we can extract:   "),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"a complete list of event types on each event backbone topic, with information passed on each event type.  "),Object(i.b)("li",{parentName:"ol"},"the complete list of “logic segments” for each microservice processing action in response to an API call or initiating event. "))),Object(i.b)("li",{parentName:"ul"},Object(i.b)("p",{parentName:"li"},"When, at the next level of detail, the individual fields in each event are specified and typed, the ",Object(i.b)("a",r({parentName:"p"},{href:"https://github.com/cloudevents/spec"}),"CloudEvents standard")," may be used as a starting point."))),Object(i.b)("hr",null),Object(i.b)("h3",null,"Step 7: Specify recovery approach in case a microservice fails"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"If a microservice fails it will need to recover its internal state by reloading data from one or more topics, from the latest committed read.  "),Object(i.b)("li",{parentName:"ul"},"In general, command and query microservices will have a standard pattern for doing this."),Object(i.b)("li",{parentName:"ul"},"Any custom event filtering and service specific logic should be specified.")),Object(i.b)("h3",null,"Concepts and rationale underlying the design approach"),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"What is the difference between event information stored in the event backbone and state data stored in the microservices?")," "),Object(i.b)("p",null,"The event information stored persistently in the event backbone is organized by topic and, within each topic, entirely by event time-of-occurrence. While the state information in a microservice is a list (collection) of all ",Object(i.b)("strong",{parentName:"p"},"currently active")," entities of the owning aggregate (e.g. all orders, all voyages etc) and the ",Object(i.b)("strong",{parentName:"p"},"current")," state of each such entity. The entity records are keyed by primary key, like an OrderID.\nWhile implementing microservice using event sourcing, CQRS, the persisted entity records are complementary to the historically organized information in the event backbone. "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"When is it acceptable to be using synchronous interactions between services instead of asynchronous event interacts through the event backbone?"),"   "),Object(i.b)("p",null,"For non-state-changing queries, for which the response is always instantaneously available a synchronous query call may be acceptable and will provide a simpler more understandable interface. Any processing which can be though of as being triggered by some state change in another aggregate should be modelled with an asynchronous event, because as the solution evolves other new microservices may also need to be aware of such event. We do not want to have to go back and change logic existing service where this event originated to have that microservice actively report the event to all potential consumers. "),Object(i.b)("p",null,Object(i.b)("em",{parentName:"p"},"How do we save microservices from having to maintain data collections with complex secondary indexing for which eventual consistency will be hard to implement?")),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Each command  microservice should do all its state changing updates using the primary key lookup only for its entities."),Object(i.b)("li",{parentName:"ul"},"Each asynchronous event interaction between microservices should carry primary entityIds ( orderID, VoyageID, shipID) for any entities associated with the interaction."),Object(i.b)("li",{parentName:"ul"},"Each query which might require speciaoized secondary indexing to respond to queries can be implemented in a separate CQRS query service which subscribes to events  to do all internal updating and receives events from the event backbone in a ( Consistent) eventually correct order. "),Object(i.b)("li",{parentName:"ul"},"This allows for recovery of any failed service by rebuilding it in “eventually correct” order.")),Object(i.b)("h3",null,"Applied DDD for the reference implementation"),Object(i.b)("p",null,"See ",Object(i.b)("a",r({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc-order-ms/ddd-applied/"}),"this note for details.")))}c.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-methodology-ddd-mdx-9239d34dc33dd3b3a37a.js.map
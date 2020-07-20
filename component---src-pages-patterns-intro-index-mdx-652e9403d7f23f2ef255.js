(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{IG97:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return p}));var s=t("wx14"),n=t("zLVn"),i=(t("q1tI"),t("7ljp")),r=t("013z"),o=(t("qKvR"),{}),c={_frontmatter:o},l=r.a;function p(e){var a=e.components,t=Object(n.a)(e,["components"]);return Object(i.b)(l,Object(s.a)({},c,t,{components:a,mdxType:"MDXLayout"}),Object(i.b)("h1",null,"Introduction"),Object(i.b)("p",null,"In this set of articles, we will detail some of the most import event-driven patterns that can be utilised during your event-driven microservice implementation."),Object(i.b)("p",null,"Adopting messaging (Pub/Sub) as a microservice communication approach involves using, at least, the following patterns:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"https://microservices.io/patterns/decomposition/decompose-by-subdomain.html"}),"Decompose by subdomain"),": The domain-driven design approach is useful to identify and classify business\nfunctions and the corresponding microservices that would be associated with them. With the event storming method, aggregates help to find those subdomains of responsibility. (Source Chris Richardson - Microservices Patterns)"),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"https://microservices.io/patterns/data/database-per-service.html"}),"Database per service"),": Each service persists data privately and is accessible only via its API.\nServices are loosely coupled limiting impact to other services when schema changes occur in the database. The chosen database technology is driven by business requirements. (Source Chris Richardson - Microservices Patterns)\nThe implementation of transactions that span multiple services is complex and enforces using the Saga pattern. Queries that span multiple entities are a challenge and CQRS represents an interesting solution."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"#strangler-pattern"}),"Strangler pattern"),": Used to incrementally migrate an existing, monolithic, application by replacing a set of features to a microservice but keep both running in parallel.\nApplying a domain driven design approach, you may strangle the application using bounded context. But then as soon as this pattern is applied, you need to assess the co-existence between\nexisting bounded contexts and the new microservices. One of the challenges will be to define where the write and read operations occurs, and how data should be replicated between the contexts.\nThis is where event driven architecture helps."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"/refarch-eda/patterns/event-sourcing/"}),"Event sourcing"),": persists, to an append log, the states of a business entity, such as an Order, as a sequence of immutable state-changing events."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"/refarch-eda/patterns/cqrs/"}),"Command Query Responsibility Segregation"),": helps to separate queries from commands and help to address queries with cross-microservice boundary."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"/refarch-eda/patterns/saga/"}),"Saga pattern:")," Microservices publish events when something happens in the scope of their control like an update in the business entities they are responsible for. A microservice, interested in other business entities, subscribes to those events and it can update its own state and business entities on receipt of these events. Business entity keys need to be unique and immutable."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"/refarch-eda/patterns/dlq/"}),"Event reprocessing with dead letter"),": event driven microservices may have to call external services via a synchronous call. We need to process failure in order to get response from those services using event backbone."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(s.a)({parentName:"li"},{href:"#transactional-outbox"}),"Transactional outbox"),": A service command typically needs to update the database and send messages/events.\nThe approach is to use an outbox table to keep the message to sent and a message relay process to publish events inserted into database to the event backbone. (Source Chris Richardson - Microservices Patterns)")),Object(i.b)("h2",null,"Strangler pattern"),Object(i.b)("h3",null,"Problem"),Object(i.b)("p",null,"How to migrate a monolithic application to a microservice based architecture without doing the huge effort of redeveloping the application from a blank slate. Replacing and rewriting an existing application can be a huge investment. Rewriting a subset of business functions while running current application in parallel may be relevant and reduce risk and velocity of changes."),Object(i.b)("p",null,"The figure below illustrates a typical mainframe application, with external Java based user interface connected to the mainframe via iop/corba and with three different applications to manage product, order and customer."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"422px"}},"\n      ",Object(i.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"121.18055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAYCAYAAAD6S912AAAACXBIWXMAABYlAAAWJQFJUiTwAAAEyklEQVQ4y32VCVNTVxiG/UGd6e/ob+h0utsiDNa16lCnatVaaG2naq2lKhoh7GiAYEIgCUsIgQRCAiGQhCxws94sZIGwPD25oghSz8ybc/PlO+/5ljffPYZYu7u7vF6bWztslLffYHNv39nzedv3qHWs4vDa6Xa3hwuPZqnvXOBm27yCay0ubrS6Ofn3NOFEQfHbeQ/pAcJP6i18UNVP1R0bpx7YxT5J7f1pPrps4sNqLc5AWvHb3nl15jDeEL5eervE3V4vnaMhOscjNA6G0E2v8lDno2nQT7ZQfm+6Fa5jlYdCqUwsXSJf2qK4ua3s8WyZyWAZKVNGzm8rdjm3SSK7cQDxzAby+sZ+hJWPmJzHtZJRUpr1p5XdJTC5lMbqTdMxVdll4SMzV/ltJc1cBZXnYJbl1Qw7Ozv7hHKuxMCEj5cTyximAugn/ehtKwzZg5jsAZ5bguhsQYyOEIbpEC+tfgw2P8PTAfrGvHiCyUq++4SZXBGVMcj9kXUejBXonSsyNhNErXNTr41z9UWUG71ROoxLmO0reNfydDnyqKdL/KGLMrmYqFRQ4VQIc+sF7g1K1HRkqe3KUT+YxbEoobWtcrZL5pvmJCfUCaVRk+6IUoZLmixnetb5UpVgyJV6l/CROc7nTWt89TTKhfYIAxYvbWY/1c0SX6uiVDVHUQ0HRFmWaB1eorZljS+aJI6rYox7sxV1HiT8xxgVkST4piXJVU2c0dkQ/bYI57pSIsoUpztT9FjXFPuAsJ/tTHBdm+ZUexzTfPpdwvsGibr+Ag3GEndHCkTlEhaPzEl1lHvmHD9qkmjtcSS5yHykwDVdgdbZLa4PyOicyYMpr+eL3NGtUafJ8GyqKG5OMbsUY9AhiZSj1OtSXNEkaB0JK3azK87F57JoYJ7znXEMc6mjCc91xng8LoqtFumOLaIeXuaEqOFjS5af+pM81Ptf2Ye8fKtapUGXpO55AtNC5mDK+UKRWy9WuG3I8MSa52pfUshDaMwa5ru2OHdNOWFL0WIKMu4MYXRG+b4nRfNUgSu9SYbc8rsR/q4N85uo38PJMn+NlTDZfHSZfZxui/FoPMeF7iTNQ35GxUULq6IseqHd6TI3RA0H544kDCmSqWlNUNe1hlEIuHs8KCKM8fOA6HJHnBZzUPl3dI8FONMeo16f5mK36PLCoS7nBWGDJsDHjRE+eyxxrjVEj3GeFqG3qmdriu24SuKJwY9mxINK76FaFeFKn6zU2LxwhGz+HAhzqa/AD9oijdZN3L44zeLgKVHDGrVAS0wQLeP0RlmKbXLLUOTyQFFklBQ6PJRyvlDi196gEHWa6vYsN1+msXskeidCIrUE1eJQbWucDjEnra4II+4453tkatozfNoUOxjh1tYWsUQKiyvIC+sKPRNheq1isohJY3ZG0Dpi9DmS9AtRG2cimGbCYgqFaJuI8XQ0jnoiiSecFWR74ysqSUxabUxZXUxNuHE7ZvDMu3Avy5j1QSymEDOOKDZLhDFTmGl7jGWpQCC6TlAgIK3je3serkYiDA+ZaPx3ll8a3Gg0E1itFtweHy73MnMCrgWf+O5XMC+w4A0wvwfXop+V0Or+xE7LYvI653C7nArmnE58yz529278n7fHIey/U/4DqtWRIAt+jQMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"1",title:"1",src:"/refarch-eda/static/e5babc48dd0b2046fba50ac04c4ed54f/011fd/strangler.png",srcSet:["/refarch-eda/static/e5babc48dd0b2046fba50ac04c4ed54f/7fc1e/strangler.png 288w","/refarch-eda/static/e5babc48dd0b2046fba50ac04c4ed54f/011fd/strangler.png 422w"],sizes:"(max-width: 422px) 100vw, 422px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h3",null,"Solution"),Object(i.b)("p",null,"The approach is to use a “strangler” interface to dispatch a request to new or old features. Existing features to migrate are selected by trying to isolate sub components."),Object(i.b)("p",null,"One of main challenges is to isolate the data store and disover how the new microservices and the legacy application are accessing the shared data. Continuous data replication can be a solution to propagate write model to read model. Write model will most likely stays on the monolitic application, change data capture can be used, with event backbone to propagate change to read model."),Object(i.b)("p",null,"The facade needs to be scalable and not a single point of failure. It needs to support new APIs (RESTful) and old API (most likely SOAP)."),Object(i.b)("p",null,"The following figure illustrates an implementation using an event driven solution with data replication to synchronize the write model to the read model on the mainframe."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.861111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABYlAAAWJQFJUiTwAAACWUlEQVQoz2WS3U4TcRDF+xS+gu/iK3jtSxjvjNErkUiMMXKh0UiMHzEoIJQWBKRIQQSE2u/Sdvux3Xa7u93d7nb357TFCjrJ5J+ZTM5/zjkTCcOQIJCUNwSGte/7+J6HJzmMUsPkxtQW1+9tMLeWH/UcX+YC8AIuReRiMQQehu24tNpdtI6B0/do6DaLSYWlZJVMtTuaaZsujXaPouqgtB3UTg+z5xLxBwGpssHSTprXsQP2sxr5ujX5xDRNwsGAf+NrWmdmucpqssjqboHZuEL8RCcyEMDZpQw3ZxPcebHDww8pot/rEwkst09e75DXNGzX5ZwE0ROT259arO0VWd8r8GBFZf7QEsAg4GW8yMx8htheibdbZ6wcNEf6tIRyuVbnuFCiorVxvAHeYIwYTxk8iqlsHJTZ/FHm6bpK9FQAPX/AwnaJd9Esc5+zvFnNyYByTiycUBziCJ6AjnuLRwa33teJfssJ5Rz3l1U+Hgng0FXDtNFUg6bWoy5Ca10Hux/QNmxaslm90Zw4HoZjW5M5nefrCtFEgTXR8NVmTXTtiim+x+lJnp1EFkWp/d1IjFCbDYyOSldrEPjeJVNc0dYye9SaFk3VkqWsUS8SiIamFN2ugW3bssEYzO377Bc6HFdM5EGzfOxeWz4oYRuKaByi6222E4fs7f8U8O7/d/hHtb5tUWo5XHvmcnXK5spdm4WULweaoZJepNdM4Ir2v7IVpqdXePwkNmE30vBiDqNeq5EVZ3dLLl/yHrFsn5bpY+pNlGoetX6GIUesy3Gn8y1KZ5rQdUbMfgP0pC8+CsHZRwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"2",title:"2",src:"/refarch-eda/static/7086a1f93000f13ac1fa369f3888eaf8/3cbba/strangler-2.png",srcSet:["/refarch-eda/static/7086a1f93000f13ac1fa369f3888eaf8/7fc1e/strangler-2.png 288w","/refarch-eda/static/7086a1f93000f13ac1fa369f3888eaf8/a5df1/strangler-2.png 576w","/refarch-eda/static/7086a1f93000f13ac1fa369f3888eaf8/3cbba/strangler-2.png 1152w","/refarch-eda/static/7086a1f93000f13ac1fa369f3888eaf8/b5ea2/strangler-2.png 1318w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(i.b)("h2",null,"Transactional outbox"),Object(i.b)("p",null,"See the documentation of the pattern in Chris Richardson’s site: ",Object(i.b)("a",Object(s.a)({parentName:"p"},{href:"https://microservices.io/patterns/data/transactional-outbox.html"}),"Transactional outbox"),"."),Object(i.b)("p",null,"A service command typically needs to update the database and send messages/events. The approach is to use an outbox table to keep the message to sent and a message relay process to publish events inserted into database to the event backbone."),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"848px"}},"\n      ",Object(i.b)("span",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"60.76388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACAUlEQVQoz42T60/TUBjG9+/7BRNDcAsoyDTKBxfRYBY3IBuXXWA3JsjGNiwbu0jcjbbr2p7z87QD4zQY3uTJc05z3l+enrcNjC3B0cVkpprlK1sxyWk2+Y7kuCW4GgqElJgOqONMlDtC4pVUzz3dV0DrOyzt3BKMjwhujwkpfx4fEzyweJlzWTgUbFcm5NsukfMpkZM+H6oupzfCw+Gx5oBXA4e97y6ZS51kTSfVuCWpCRINh2LTInhos1O+JV03eVfWCadabJQNyl17DngP9ROmNJfuWKL1BZ2RYP/SJd0UNFTT008Dtbc56xlE1bUkm1K5SUXtH3zlaFVQaEO2he+fq5JYTZJT68WMIH6ik1Cw5cwP1rNdXhz11d06SNv9N+H1YMpaesirzGhO60rh7IiV1IhUXV2FZrKaG/C2pM4WhuSvLYTl+MO6T+oDXdfFME3Mv2TcSTcMXMem2tHZ/TYkcT5k97SP9tNEOmr6Qv5O6CnAI2uroPMk3GYx0mNha8D2qYGtW35CIYWCzaYe+JP+kLyqNIfsHbc4yHXIXIzQuhOvf04e8xEJZ5/GrMszh4uzr5QKeYrFEsVCkVKpxMF+il7n5v/AWcIZTNz9GebE4s3Ge0IrqyyvvWZlLez7s6UQ9cblY4DzU5xObRLJJNFolFg8zpdYzPfNzY+0221+AaI5fdIrRMelAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(i.b)("img",Object(s.a)({parentName:"span"},{className:"gatsby-resp-image-image",alt:"3",title:"3",src:"/refarch-eda/static/e3f24af5a8d43ad3e4427d0a0e12e8fb/c6377/outbox.png",srcSet:["/refarch-eda/static/e3f24af5a8d43ad3e4427d0a0e12e8fb/7fc1e/outbox.png 288w","/refarch-eda/static/e3f24af5a8d43ad3e4427d0a0e12e8fb/a5df1/outbox.png 576w","/refarch-eda/static/e3f24af5a8d43ad3e4427d0a0e12e8fb/c6377/outbox.png 848w"],sizes:"(max-width: 848px) 100vw, 848px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-patterns-intro-index-mdx-652e9403d7f23f2ef255.js.map
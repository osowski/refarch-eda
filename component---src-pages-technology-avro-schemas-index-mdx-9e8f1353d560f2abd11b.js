(window.webpackJsonp=window.webpackJsonp||[]).push([[52,84],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),s=a.n(n),r=a("NmYn"),i=a.n(r),o=a("Wbzz"),c=a("Xrax"),l=a("k4MR"),m=a("TSYQ"),d=a.n(m),b=a("QH2O"),h=a.n(b),p=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,s=e.tabs,r=void 0===s?[]:s;return Object(p.b)("div",{className:d()(h.a.pageHeader,(t={},t[h.a.withTabs]=r.length,t[h.a.darkMode]="dark"===n,t))},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12"},Object(p.b)("h1",{id:"page-title",className:h.a.text},a)))))},u=a("BAC9"),f=function(e){var t=e.relativePagePath,a=e.repository,n=Object(o.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||n,r=s.baseUrl,i=s.subDirectory,c=r+"/edit/"+s.branch+i+"/src/pages"+t;return r?Object(p.b)("div",{className:"bx--row "+u.row},Object(p.b)("div",{className:"bx--col"},Object(p.b)("a",{className:u.link,href:c},"Edit this page on GitHub"))):null},O=a("FCXl"),j=a("dI71"),w=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(j.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,s=n.split("/").filter(Boolean).slice(-1)[0],r=a.map((function(e){var t,a=i()(e,{lower:!0,strict:!0}),r=a===s,c=new RegExp(s+"/?(#.*)?$"),l=n.replace(c,a);return Object(p.b)("li",{key:e,className:d()((t={},t[w.selectedItem]=r,t),w.listItem)},Object(p.b)(o.Link,{className:w.link,to:""+l},e))}));return Object(p.b)("div",{className:w.tabsContainer},Object(p.b)("div",{className:"bx--grid"},Object(p.b)("div",{className:"bx--row"},Object(p.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(p.b)("nav",{"aria-label":t},Object(p.b)("ul",{className:w.list},r))))))},t}(s.a.Component),v=a("MjG9"),A=a("CzIb"),x=a("Asxa"),N=a("OIbQ"),k=a.n(N),I=function(e){var t=e.date,a=new Date(t);return t?Object(p.b)(x.c,{className:k.a.row},Object(p.b)(x.a,null,Object(p.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,s=e.Title,r=t.frontmatter,m=void 0===r?{}:r,d=t.relativePagePath,b=t.titleType,h=m.tabs,u=m.title,j=m.theme,w=m.description,x=m.keywords,N=m.date,k=Object(A.a)().interiorTheme,S=Object(o.useStaticQuery)("2456312558").site.pathPrefix,T=S?n.pathname.replace(S,""):n.pathname,C=h?T.split("/").filter(Boolean).slice(-1)[0]||i()(h[0],{lower:!0}):"",B=j||k;return Object(p.b)(l.a,{tabs:h,homepage:!1,theme:B,pageTitle:u,pageDescription:w,pageKeywords:x,titleType:b},Object(p.b)(g,{title:s?Object(p.b)(s,null):u,label:"label",tabs:h,theme:B}),h&&Object(p.b)(y,{title:u,slug:T,tabs:h,currentTab:C}),Object(p.b)(v.a,{padded:!0},a,Object(p.b)(f,{relativePagePath:d}),Object(p.b)(I,{date:N})),Object(p.b)(O.a,{pageContext:t,location:n,slug:T,tabs:h,currentTab:C}),Object(p.b)(c.a,null))}},"6mU6":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return c})),a.d(t,"default",(function(){return b}));var n,s=a("wx14"),r=a("zLVn"),i=(a("q1tI"),a("7ljp")),o=a("013z"),c=(a("qKvR"),{}),l=(n="InlineNotification",function(e){return console.warn("Component "+n+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.b)("div",e)}),m={_frontmatter:c},d=o.a;function b(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(i.b)(d,Object(s.a)({},m,a,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",null,"Apache Avro"),Object(i.b)("p",null,"Avro is an open source data serialization system that helps with data exchange between systems, programming languages, and processing frameworks. Avro helps define a binary format for your data, as well as map it to the programming language of your choice."),Object(i.b)("h3",null,"Why Apache Avro"),Object(i.b)("p",null,"There are several websites that discuss the Apache Avro data serialization system benefits over other messaging data protocols. A simple google search will list dozens of them. Here, we will highlight just a few from a ",Object(i.b)("a",{parentName:"p",href:"https://www.confluent.io/blog/avro-kafka-data/"},"Confluent blog post"),":"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"It has a direct mapping to and from JSON"),Object(i.b)("li",{parentName:"ul"},"It has a very compact format. The bulk of JSON, repeating every field name with every single record, is what makes JSON inefficient for high-volume usage."),Object(i.b)("li",{parentName:"ul"},"It is very fast."),Object(i.b)("li",{parentName:"ul"},"It has great bindings for a wide variety of programming languages so you can generate Java objects that make working with event data easier, but it does not require code generation so tools can be written generically for any data stream."),Object(i.b)("li",{parentName:"ul"},"It has a rich, extensible schema language defined in pure JSON"),Object(i.b)("li",{parentName:"ul"},"It has the best notion of compatibility for evolving your data over time.")),Object(i.b)("h2",null,"Data Schemas"),Object(i.b)("p",null,"Avro relies on schemas. When Avro data is produced or read, the Avro schema for such piece of data is always present. This permits each datum to be written with no per-value overheads, making serialization both fast and small. An Avro schema defines the structure of the Avro data format."),Object(i.b)("h3",null,"How does a data schema look like?"),Object(i.b)("p",null,"Let’s see how a data schema to define a person’s profile in a bank could look like:"),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "namespace": "banking.schemas.demo",\n  "name": "profile",\n  "type": "record",\n  "doc": "Data schema to represent a profile for a banking entity",\n  "fields ": [\n    {\n      "name": "name",\n      "type": "string"\n    },\n    {\n      "name": "surname",\n      "type": "string"\n    },\n    {\n      "name": "age",\n      "type": "int"\n    },\n    {\n      "name": "account",\n      "type": "banking.schemas.demo.account"\n    },\n    {\n      "name": "gender",\n      "type": {\n        "type": "enum",\n        "name": "genderEnum",\n        "symbols": [\n          "male",\n          "female"\n        ]\n      }\n    }\n  ]\n}\n')),Object(i.b)("p",null,"Notice:"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"There are primitive data types like ",Object(i.b)("inlineCode",{parentName:"li"},"string")," and ",Object(i.b)("inlineCode",{parentName:"li"},"int")," but also complex types like ",Object(i.b)("inlineCode",{parentName:"li"},"record")," or ",Object(i.b)("inlineCode",{parentName:"li"},"enum"),"."),Object(i.b)("li",{parentName:"ol"},"Complex type ",Object(i.b)("inlineCode",{parentName:"li"},"record")," requires a ",Object(i.b)("inlineCode",{parentName:"li"},"name")," attribute but it also can go along with a ",Object(i.b)("inlineCode",{parentName:"li"},"namespace")," attribute which is a JSON string that qualifies the name."),Object(i.b)("li",{parentName:"ol"},"Data schemas can be ",Object(i.b)("strong",{parentName:"li"},"nested")," as you can see for the ",Object(i.b)("inlineCode",{parentName:"li"},"account")," data attribute. See below.")),Object(i.b)("pre",null,Object(i.b)("code",{parentName:"pre",className:"language-json"},'{\n  "namespace": "banking.schemas.demo",\n  "name": "account",\n  "type": "record",\n  "doc": "Data schema to represent a customer account with the credit cards associated to it",\n  "fields": [\n    {\n      "name": "id",\n      "type": "string"\n    },\n    {\n      "name": "savings",\n      "type": "long"\n    },\n    {\n      "name": "cards",\n      "type": {\n        "type": "array",\n        "items": "int"\n      }\n    }\n  ]\n}\n')),Object(i.b)("p",null,"In the picture below we see two messages, one complies with the above Apache Avro data schema and the other does not:"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABNUlEQVQoz32S246DMAxE+f8P7NOqfaC0iNItkPt1dpxSaau9RBo5EHNiD+7WYKCjoyxUsLA5NDlKJYtQEl6rKIUs0rrFYgxgLSoF2fN9F/mBWjfc73ec+zM0E18rlYy4A2utgPfwIeA2z7hcr7iOI+qeK7E6hy6hYJom9H0PRZiV2/YMgb0BCXM8P51OeCwLNPe5FDlElSjAWDPWZcXI22KMLMIj59wgP4A8C4SOw4DC9gSAtFsiUAH6HNuzAI/HIw6HA4bLBSUXhPwOrHv1nnFk7vTxgYESG4oU0YDlCVzYgmimP2KBVB142W9Axw9v9PyT+eKj+B9YvXTQJbasN4XlscBoQy/qvz8lssWZAEO4E8i31Vpeg4bmuGxeU88RMsm30dn+GJu0bYhU4r5yXKTyKp5SX8tjboWEPUJiAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"data examples",title:"data examples",src:"/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/3cbba/data_examples.png",srcSet:["/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/7fc1e/data_examples.png 288w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/a5df1/data_examples.png 576w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/3cbba/data_examples.png 1152w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/0b124/data_examples.png 1728w","/refarch-eda/static/e42d075cd20d1581040fb35850b8c8fd/983e6/data_examples.png 2190w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"You might start realising by now the benefits of having the data flowing into your Apache Kafka event backbone validated against a schema. See next section for more."),Object(i.b)("p",null,"For more information on the Apache Avro Data Schema specification see ",Object(i.b)("a",{parentName:"p",href:"https://avro.apache.org/docs/current/spec.html"},"https://avro.apache.org/docs/current/spec.html")),Object(i.b)("h3",null,"Benefits of using Data Schemas"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Clarity and Semantics"),": They document the usage of the event and the meaning of each field in the “doc” fields."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Robustness"),": They protect downstream data consumers from malformed  data, as only valid data will be permitted in the topic. They let the producers or consumers of data streams know the right fields are need in an event and what type each field is (contract for microservices)."),Object(i.b)("li",{parentName:"ul"},Object(i.b)("strong",{parentName:"li"},"Compatibility"),": model and handle change in data format.")),Object(i.b)("h2",null,"Avro, Kafka and Schema Registry"),Object(i.b)("p",null,"In this section we try to put all the pieces together for the common flow of sending and receiving messages through an event backbone such as kafka having those messages serialized using the Apache Avro data serialization system and complying with their respective messages that are stored and managed by a schema registry."),Object(i.b)("p",null,"Avro relies on schemas. When Avro data is produced or read, the Avro schema for such piece of data is always present. An Avro schema defines the structure of the Avro data format. Schema Registry defines a scope in which schemas can evolve, and that scope is the subject. The name of the subject depends on the configured subject name strategy, which by default is set to derive subject name from topic name."),Object(i.b)("p",null,"In this case, the messages are serialized using Avro and sent to a kafka topic. Each message is a key-value pair. Either the message key or the message value, or both, can be serialized as Avro. Integration with Schema Registry means that Kafka messages do not need to be written with the entire Avro schema. Instead, Kafka messages are written with the ",Object(i.b)("strong",{parentName:"p"},"schema id"),". The producers writing the messages and the consumers reading the messages must be using the same Schema Registry to get the same mapping between a schema and schema id."),Object(i.b)("h3",null,"How does it all work"),Object(i.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"960px"}},"\n      ",Object(i.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"56.25%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAABibAAAYmwFJdYOUAAAB4UlEQVQoz5VSS2/TQBD2rwdxzAFx4lZV4oAQr6qAICcQIJqqRUqqSG3TJjhNY683fu7THzNrm5eEELMarTzeb2a+byZyvoW2LYzrbj6WbiFK1LWBp//OeRhlgze1xfqmQpLUUI2F1Q5t24Itp3/RWlq8nEg8+ywwnhaUSEHQ4/ncYrMx0JSkFBplpmAIXBQaV0uHb7GlghqakmpKNFi0FBaPPqTYe7fCi0kOkWmAuirKGssbCSElLi9X2G6yAHDO9dC2//ZoStNFqNNIVg6Tix0+zW7x9SoP1NmUNriVDQ7HYzzc38fpdBrixlgww4Emm1c/i0TOGqRJQnoYNFXBLwPAe4+WPElTZNRlo1SIWdvRs1R4ttaYnEt8mQtMYw1lPCKuVJQKObXt+8qe3DGY6Ax9cMwSXabIxgM8OCmwN46DPz/OUShOSJBtQkJfa0hpfmjzL7NU/eN5jcNjiYOjDO/nFWpNCTu9HPJch+5Yw7O4wSxWOCNKfzpTkzV1aj1N2UMTdpc3gRFLFQ0Vy8rQA9qxVOHO0xVGrwXuvxW49+Qadx8vMHq1xYOxxOhNhqOLknRXWCxIf9GQzhkl3XVr04Yh9DR7/dLSkzuIvzjr1w3Ih8XnE25em2F/fkv8n/Yr7DtTL0u81Mf1SgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(i.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"schema registry management",title:"schema registry management",src:"/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/4552c/schema-registry.png",srcSet:["/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/7fc1e/schema-registry.png 288w","/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/a5df1/schema-registry.png 576w","/refarch-eda/static/ae2d9f3c033bcb85948c027dd1c21c86/4552c/schema-registry.png 960w"],sizes:"(max-width: 960px) 100vw, 960px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(i.b)("p",null,"When the producer sends a message/event to a Kafka topic for the first time, it sends the schema for that message/event to the Schema Registry. The Schema Registry registers this schema to the subject for the Kafka topic we want to send the message/event to, and returns the ",Object(i.b)("strong",{parentName:"p"},"schema id")," to the producer. The producer ",Object(i.b)("strong",{parentName:"p"},"caches this mapping between the schema and schema id")," for subsequent message writes, so ",Object(i.b)("strong",{parentName:"p"},"it only contacts Schema Registry on the first message/event write")," (unless the schema has changed, that is evolved, when the schema registry will be contacted again for validation and storage of this new version of the schema). Kafka messages are written along with the ",Object(i.b)("strong",{parentName:"p"},"schema id")," rather than with the entire data schema."),Object(i.b)("p",null,"When a consumer reads this data, it sees the ",Object(i.b)("strong",{parentName:"p"},"Avro schema id and sends a schema request to the Schema Registry"),". The Schema Registry retrieves the schema associated to that schema id, and ",Object(i.b)("strong",{parentName:"p"},"returns the schema to the consumer"),". The consumer ",Object(i.b)("strong",{parentName:"p"},"caches")," this mapping between the schema and schema id for subsequent message reads, so it only contacts Schema Registry on the first schema id read."),Object(i.b)("h2",null,"Schema Registry"),Object(i.b)(l,{kind:"info",mdxType:"InlineNotification"},Object(i.b)("p",null,"The information below corresponds to the Schema Registry implementation in the IBM Event Streams product that is part of the IBM CloudPak for Integration. For the IBM Event Streams on IBM Cloud offering, this implementation might differ.")),Object(i.b)("p",null,"Kafka is used as Schema Registry storage backend. The special Kafka topic ",Object(i.b)("inlineCode",{parentName:"p"},"<kafkastore.topic>")," (default ",Object(i.b)("inlineCode",{parentName:"p"},"_schemas"),"), with a single partition, is used as a highly available write ahead log. All schemas, subject/version and ID metadata, and compatibility settings are appended as messages to this log. A Schema Registry instance therefore both produces and consumes messages under the ",Object(i.b)("inlineCode",{parentName:"p"},"_schemas")," topic. It produces messages to the log when, for example, new schemas are registered under a subject, or when updates to compatibility settings are registered. Schema Registry consumes from the ",Object(i.b)("inlineCode",{parentName:"p"},"_schemas")," log in a background thread, and updates its local caches on consumption of each new ",Object(i.b)("inlineCode",{parentName:"p"},"_schemas")," message to reflect the newly added schema or compatibility setting. Updating local state from the Kafka log in this manner ensures durability, ordering, and easy recoverability."),Object(i.b)("h2",null,"Labs"),Object(i.b)("p",null,"We have developed two labs, one for the IBM Event Streams product that comes with the IBM CloudPak for Integration installed on a RedHat OpenShift cluster and the other for the IBM Event Streams on IBM Cloud offering, to get hands-on experience working with Apache Avro, data schemas and the IBM Event Streams Schema Registry:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/schema-registry-on-cloud/"},"IBM Event Streams on IBM Cloud lab")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",{parentName:"li",href:"/refarch-eda/use-cases/schema-registry-on-ocp/"},"IBM Event Streams from IBM CloudPak for Integration lab"))))}b.isMDXComponent=!0},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-technology-avro-schemas-index-mdx-9e8f1353d560f2abd11b.js.map
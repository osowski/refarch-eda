(window.webpackJsonp=window.webpackJsonp||[]).push([[18,101],{"013z":function(e,t,a){"use strict";var i=a("q1tI"),s=a.n(i),c=a("NmYn"),n=a.n(c),r=a("Wbzz"),o=a("Xrax"),l=a("k4MR"),d=a("TSYQ"),b=a.n(d),p=a("QH2O"),g=a.n(p),m=a("qKvR"),A=function(e){var t,a=e.title,i=e.theme,s=e.tabs,c=void 0===s?[]:s;return Object(m.b)("div",{className:b()(g.a.pageHeader,(t={},t[g.a.withTabs]=c.length,t[g.a.darkMode]="dark"===i,t))},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12"},Object(m.b)("h1",{id:"page-title",className:g.a.text},a)))))},f=a("BAC9"),u=function(e){var t=e.relativePagePath,a=e.repository,i=Object(r.useStaticQuery)("1364590287").site.siteMetadata.repository,s=a||i,c=s.baseUrl,n=s.subDirectory,o=c+"/edit/"+s.branch+n+"/src/pages"+t;return c?Object(m.b)("div",{className:"bx--row "+f.row},Object(m.b)("div",{className:"bx--col"},Object(m.b)("a",{className:f.link,href:o},"Edit this page on GitHub"))):null},h=a("FCXl"),w=a("dI71"),O=a("I8xM"),x=function(e){function t(){return e.apply(this,arguments)||this}return Object(w.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,i=e.slug,s=i.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=n()(e,{lower:!0,strict:!0}),c=a===s,o=new RegExp(s+"/?(#.*)?$"),l=i.replace(o,a);return Object(m.b)("li",{key:e,className:b()((t={},t[O.selectedItem]=c,t),O.listItem)},Object(m.b)(r.Link,{className:O.link,to:""+l},e))}));return Object(m.b)("div",{className:O.tabsContainer},Object(m.b)("div",{className:"bx--grid"},Object(m.b)("div",{className:"bx--row"},Object(m.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(m.b)("nav",{"aria-label":t},Object(m.b)("ul",{className:O.list},c))))))},t}(s.a.Component),y=a("MjG9"),v=a("CzIb"),j=a("Asxa"),N=a("OIbQ"),k=a.n(N),B=function(e){var t=e.date,a=new Date(t);return t?Object(m.b)(j.c,{className:k.a.row},Object(m.b)(j.a,null,Object(m.b)("div",{className:k.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,i=e.location,s=e.Title,c=t.frontmatter,d=void 0===c?{}:c,b=t.relativePagePath,p=t.titleType,g=d.tabs,f=d.title,w=d.theme,O=d.description,j=d.keywords,N=d.date,k=Object(v.a)().interiorTheme,C=Object(r.useStaticQuery)("2456312558").site.pathPrefix,I=C?i.pathname.replace(C,""):i.pathname,E=g?I.split("/").filter(Boolean).slice(-1)[0]||n()(g[0],{lower:!0}):"",z=w||k;return Object(m.b)(l.a,{tabs:g,homepage:!1,theme:z,pageTitle:f,pageDescription:O,pageKeywords:j,titleType:p},Object(m.b)(A,{title:s?Object(m.b)(s,null):f,label:"label",tabs:g,theme:z}),g&&Object(m.b)(x,{title:f,slug:I,tabs:g,currentTab:E}),Object(m.b)(y.a,{padded:!0},a,Object(m.b)(u,{relativePagePath:b}),Object(m.b)(B,{date:N})),Object(m.b)(h.a,{pageContext:t,location:i,slug:I,tabs:g,currentTab:E}),Object(m.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},ZB9C:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return d}));var i=a("wx14"),s=a("zLVn"),c=(a("q1tI"),a("7ljp")),n=a("013z"),r=(a("qKvR"),{}),o={_frontmatter:r},l=n.a;function d(e){var t=e.components,a=Object(s.a)(e,["components"]);return Object(c.b)(l,Object(i.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The installation instructions are here: ",Object(c.b)("a",{parentName:"p",href:"https://ibm.github.io/event-streams/installing/installing/"},"ibm.github.io/event-streams"),"."),Object(c.b)("h2",null,"Things to consider before installation"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Software and hardware ",Object(c.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/installing/prerequisites/"},"pre-requisites")," "),Object(c.b)("li",{parentName:"ul"},"Can start small with the 3 brokers cluster. See ",Object(c.b)("a",{parentName:"li",href:"https://ibm.github.io/event-streams/installing/configuring/"},"configuration note")),Object(c.b)("li",{parentName:"ul"},"Be sure the servers running the nodes and then event streams pods have enough resource available, using ",Object(c.b)("inlineCode",{parentName:"li"},"free -m")," linux command for memory and ",Object(c.b)("inlineCode",{parentName:"li"},"df")," for disk"),Object(c.b)("li",{parentName:"ul"},"Define the persistence strategy to support persisting logs from the Kafka topic and zookeepers metadata. "),Object(c.b)("li",{parentName:"ul"},"Do you need to encrypt traffic to the cluster with your own certificates?"),Object(c.b)("li",{parentName:"ul"},"Do you want to use TLS for pod to pod communication?"),Object(c.b)("li",{parentName:"ul"},"For geo-replication defines the number of workers dedicated to do replication.")),Object(c.b)("h2",null,"Provision the service"),Object(c.b)("p",null,"To provision your service, go to the IBM Cloud Catalog and search for ",Object(c.b)("inlineCode",{parentName:"p"},"Event Streams"),". It is in the ",Object(c.b)("em",{parentName:"p"},"Integration")," category. Create the service and specify a name, a region and a resource group, add a tag if you want to, then select the enterprise plan. "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"908px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABYklEQVQoz32Si3KDIBBF/f/P60xfadKaGBNUxBeCoOb2wrTpu8ycWWCXy7JL4qYVteqJQilrFKXEoDXCuFwuX/ht7zsJGKdHS0ZMk4OxFt7P+Dkub/w/knGaETBugfUrLK3h+t324xQJ/sB7/F8k+7zE7VOKzcsRj88Z7rZ73BPZaAYsOIoK2zRDVbe8ZIafV0x+gQtwHvCRJe4naV7g5mGL280L7Q4Pu0OcZ0JGwbYfKd6hkAp123OtoY3DwDJ1g0GvDVraZrAsl0dS1D0P1zicJfJCodPhiTxgfCQ9CqTZGXteLKoG2bmK/qrp6Qv7ItqiGTEvbErRWJxrAzV4yI61YlbazlEsWNUNyEUJxezmZY1PDbUaKBqyFhV/B8thYkOZoZAtDqcyCpSNoai9igV7KhX2ov/SEOPemujWayOvTTmyVhmfO1IglyPR1+eGANVq+mve7uJ3ct5/4D4RfTNeAf6vtXcpoN70AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IES service",title:"IES service",src:"/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/013af/IES-service.png",srcSet:["/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/7fc1e/IES-service.png 288w","/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/a5df1/IES-service.png 576w","/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/013af/IES-service.png 908w"],sizes:"(max-width: 908px) 100vw, 908px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"Once the service is provisioned you should reach the welcome page:"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"676px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"80.55555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAQCAYAAAAWGF8bAAAACXBIWXMAAAsTAAALEwEAmpwYAAABy0lEQVQ4y51US2/UMBDOj0bixv8ALhwRBzhxpqJZQLBbVkJUVHTbspts8/IjiZ00sZ0Px5BteAgMI40mnni++caecSBlj6qSSPMCeUGRE+q+06xAVhAQyjAMA+by83ouAaEcjJeHYMIYhGys5Sgs+Ghvug5lbX28htIaI94IOgHPEwRCStRCoqprBySb1gXJpnHatC363lYhGrBSQGvzR7YB/kNKZvBx3cGYW4YTcDAt/qajxFuFsw89Gmnw+bT/fck+jKaAm3bA1bkCp/qgc5ZegNNGmmtsLxTq0mC/0/hyqVGkGqI2/oDzcsfgzVkPTjSircbVRiNPtEvwTwztVtwe0YC2MZatceXmibIdYH68FB92o1VKH/71nUISmRH/l5jA5/zGPny3XOE4XGC5OsHJ+zVehiHCxQKLV6+dTynlz7Czk5LbcYzi2I5khiRNne52EeJ4j+vrxO3xBhRCOCBCqbNpmrkEWZaDEOJ8jHN/wNaOX1Uy+4iU4IyitrbkFIx981GbqLFj6tU2rqHtTd57tMTdh2+tXeHO/Td48PwTSNVhs68Q5RLf+9uPYa8MnoWXeHK0wdPjCzx+cY6jdYxSdkioRMHbw8R8Be2u2nBH2ZHIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es ic service",title:"es ic service",src:"/refarch-eda/static/2d4abf92df73c434550897e760447262/71afc/es-ic-service.png",srcSet:["/refarch-eda/static/2d4abf92df73c434550897e760447262/7fc1e/es-ic-service.png 288w","/refarch-eda/static/2d4abf92df73c434550897e760447262/a5df1/es-ic-service.png 576w","/refarch-eda/static/2d4abf92df73c434550897e760447262/71afc/es-ic-service.png 676w"],sizes:"(max-width: 676px) 100vw, 676px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("h2",null,"Add service credentials"),Object(c.b)("p",null,"In the service credentials create new credentials to get the Kafka brokers list, the admim URL and the api_key needed to authenticate the consumers or producers."),Object(c.b)("p",null," ",Object(c.b)("span",{parentName:"p",className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsTAAALEwEAmpwYAAACPElEQVQ4y21Ty24TQRD0nyMufEIQzgUOXOMEcQgXjICjIy5IECUhJE78jHdn5/3YddHda7CIMlJv72Omuqq7dhBjhvMBjTYw1sI6B22M5K7rsN1u/wU/t237dNC3XAoGnsCqWsFaJyB8X6sGPgQpYOg9Zy7CB2UR+FOr0PeBdUEOOe8FhDMzDiFSAf9fhJgQOVKivRFV47Ch4MzPnr4NeBPLXW9qebmXuCfTdS06qt51W5HG6/7B4vmbCZ69nuDF229YVBY5lx6Q5RjrkXImZkF6xVFKRokebfIoOaAtSYqxdGZZa2pTyNAu0btOFAyUtlisN+CcS0egreRaaUzvZlBKwTtNUh2C13Joua6JhJd9DMSsYypwgQArZbB4UJjTpnWlpaKNBXVjMVuscD/nmGNT11BNLT27mhucTytcLy1qm2B8woZwLOUBXzxZJ5J+KoiQslRSWqNpeOLMpiEX9FaKpCCxknbb59LKecdEmCFfuHer5Rq3t1OMx2OcHJ9gNDrG0dEI79+d4OeP76irDRzZJ1PBxJOmAQZxw84lDOh3gNyX8/MLnJ5+wPDVkOIQBwcvMRwe4uvnL/j0cYyzyZl4VZFHm0ZLZCLCA3LEnHtvfewBM9G+owHMZks5oGlAfECTnZaLJVbUS87G2P4HYEYEQuYSC1lizi0TQEMX8RUBMsvLiyvKl7j+9Rt30xm14R63N1PcUDCjx4ttFILfA7Ju/mUMsenlNDQI1TMkfzJLvWP7V+LjYM/GneQ/+f7ghSROO/sAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"IES IC credentials",title:"IES IC credentials",src:"/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/2faef/IES-IC-credentials.png",srcSet:["/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/7fc1e/IES-IC-credentials.png 288w","/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/a5df1/IES-IC-credentials.png 576w","/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/2faef/IES-IC-credentials.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    ")),Object(c.b)("p",null,"The api key and the broker urls will be used to set kubernetes secrets needed by the producer and consumer services. "),Object(c.b)("h2",null,"Add topic with advanced properties"),Object(c.b)("p",null,"Launch the dashboard:"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"54.513888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsTAAALEwEAmpwYAAACcUlEQVQoz31SXUsUURie39NdEATdBUWgUF1UV0VgQSXRTVhoKRURUYHdRqhddFGSsZCubkZbWqRmmqvoul/N7o47s7PzceZzd7726czxg4jowDPzvJxznvO+z/tyhGgQJRF1WYZUlyiXoBMd/1vtdjv+/nOPywkE2QpBWSTgRR35ioxNngqrNiTNRV13Ie8gjp1WsC26I+yHESzXZ/D8CNzRGxM40jOOjt4kjt+eQmdfkuFEf4rFHb2TOHYziY6+SRy6lkDiKw/f9yGpJhPRDBcKcdDQLfq3wZ26O43TFCcHUoj5mXvT6Lw1hfihw9ff4eDVBPZfGsOB7rfY1zWKNzMlBL5HhUy0/BDEcqGbDjRiQY0Fzz9Mo/vpF4pZXB6cYfzcg484S9H16DMuPv6ECxRXBmfpA+N4lS6wklcLHpxm9Je31MP38wJUNcB60cVqzgXRPcytysjzBm1OCL4Wolzz4LvAnZEfGJrMssv5ikU9225OFEXMzzBqg/uwIIAXPIylLcwsOVBUD98yMjI5DeUtD2u/AixvNqEoIQaGv2MklaMaAXLFAsqCQM9rDKqmw7BoydMLWzSIsEIvZUsutsQ4wzrW8gSVWkAzDFASWnCtCP1Dixie2s5Q0W3oho2mFzAvm14I02mBm83UYFvUUN1AMx4Jmvo6r6NQ1WCaFmRFR71BmMj9l0t7JZtuQEco3BuZGHYzALeYFWEbCgyD0O612GFBcVCq1tGQRcgNGTU6+PF6MprB84kNxont7YnsIo6517RrG2UNK0UVP4sK1ilPzleQXq5iJS9RD1W6p6AqW+h5NocXqU0maFDBP8V28RuI0Au+llkuOgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es ic dashboard",title:"es ic dashboard",src:"/refarch-eda/static/06cecf44877ec007681f8b55a5b05398/3cbba/es-ic-dashboard.png",srcSet:["/refarch-eda/static/06cecf44877ec007681f8b55a5b05398/7fc1e/es-ic-dashboard.png 288w","/refarch-eda/static/06cecf44877ec007681f8b55a5b05398/a5df1/es-ic-dashboard.png 576w","/refarch-eda/static/06cecf44877ec007681f8b55a5b05398/3cbba/es-ic-dashboard.png 1152w","/refarch-eda/static/06cecf44877ec007681f8b55a5b05398/64f98/es-ic-dashboard.png 1170w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"and then select the ‘create a topic’ tile to add the topics needed for the solution. Enter a name and select Advanced switch:"),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"849px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsTAAALEwEAmpwYAAABXElEQVQoz6WSy07DMBBF89V8DH/Blj2CBSwQUgWUtGmTJs3DiWPHedJeZpwWqaXQSiyOZmI5d8Z3xnGXESZTj1hgOg9QNQN03R+wP+N4DqesWuSlgZAERdN+/rh0qZgVXMU5gnWGTFaQVYf3QCLJFdKiIvRBh+ewgrEoESaFFVF0WOgOpemgzBj3l2vqvOk2aHpm+53X3fjNke85iZCIEgFRKLR0oe35x0NMO9iCYZJjfJHY5cI240cp1pm0dpGHDfmn0Q1cdTgSGyw15a/uEvdPL3ib+VaQxXyyigt4qxhRKu0rnEK3EIoG8wfK9PbHqbfC3F9bZn4EL4htzpviLkMkQsFhI805qDJ387EIke2GxezzcYjaeu5cMj2GRdl4jqfQdhOGscPfOF7sU2vCL6hpaJvtFh0N1bl0YU8VYX8T2SBIK9w+Bph4xf8EI1FjFio8uwJX1w+4ufPwBXFjmTVlMkFQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es ic topic 1",title:"es ic topic 1",src:"/refarch-eda/static/4a4d07276099dbc5d951a7e6f6255de6/fa462/es-ic-topic-1.png",srcSet:["/refarch-eda/static/4a4d07276099dbc5d951a7e6f6255de6/7fc1e/es-ic-topic-1.png 288w","/refarch-eda/static/4a4d07276099dbc5d951a7e6f6255de6/a5df1/es-ic-topic-1.png 576w","/refarch-eda/static/4a4d07276099dbc5d951a7e6f6255de6/fa462/es-ic-topic-1.png 849w"],sizes:"(max-width: 849px) 100vw, 849px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"In the advanced configuration, specify the number of partition and event retention time: for topic with not a lot of events, topic can keep data for a long period of time. "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"912px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.09722222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsTAAALEwEAmpwYAAABB0lEQVQoz42SWXOEIBCE/f9/MC9JJa7HKrKeIIemOjMoxmQ3tXn4qoGaaZojKeoWb2mJl9c06KAsRu3Qk8Yx040GLdErh2n2tHYPryeV7JEWApeyCXzkNbKrhLiNqOVwGBdVg0L0GKjRL5+wfr1D2wXJOU0/maC8k7ZrQJkFiua1bDFpA+sWGOth3Il9rg0lDA0PYFOGxx1tdCkFcjGGI8+Wa/xey0bf9Ukc/OZszA3OL3TUNSRkeB7xxGx2w78Sns26ccZ7ViGvJDIxHcm2x3HHgzw13Jp2VRqO7okTrSvd7ezo1S1KqYPGAE8TsvK9XW86ULUaeaN+fJ9Y929DVv4ukc3sce0XBZm33ylX6xkAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es ic topic 2",title:"es ic topic 2",src:"/refarch-eda/static/37366e814c4e269497809a105687f0ee/94cf0/es-ic-topic-2.png",srcSet:["/refarch-eda/static/37366e814c4e269497809a105687f0ee/7fc1e/es-ic-topic-2.png 288w","/refarch-eda/static/37366e814c4e269497809a105687f0ee/a5df1/es-ic-topic-2.png 576w","/refarch-eda/static/37366e814c4e269497809a105687f0ee/94cf0/es-ic-topic-2.png 912w"],sizes:"(max-width: 912px) 100vw, 912px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"As events are persisted in log, we need to specify the cleanup policy, ",Object(c.b)("inlineCode",{parentName:"p"},"delete or comprest"),", and the size limit for retention, which control the maximum size a partition (which consists of log segments) can grow to before brokers discard old log segments to free up space if topic is set to use the “delete” retention policy."),Object(c.b)("p",null,"Log segment size correspond to the topic configuration, ",Object(c.b)("inlineCode",{parentName:"p"},"segment.bytes"),", which controls the segment file size for the log. Retention and cleaning are always done one file at a time, so a larger segment size means fewer files but less granular control over retention."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"890px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.27777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAABDklEQVQoz31R2XKEIBD0/79xk0pcDzwQRBDxqM4wLil3a5OHrhlg7O5ps3YwMC5gDgfcslO94oD1GyP2DJqJ52le3yIrhETZDIjEoteoO0XQDygoM7Pgve5RCEI7YXTrr9ArsrKRuH1X+Mxr3L5KfOTVg1Qhvg3jzM6bTsJYh7DtWAnbflA9Lv1Oc0Ro3GnVXGyn1VIMevIkWKGoW+RC03mhucCw/qzGnXfZO9uvuVi/QqoRdduTS8/OwrrT6gG1nJ8iyN4FeyWNfcywlRpNryjrCdousOwqMFkS5Z/yV7iJlCt9mJcC90qg15bvFnIY36VZOK40/y9hUnXU68lBjRZL2OAD5ewDr9xp/0T4A77waT78B0AIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es ic topic 3",title:"es ic topic 3",src:"/refarch-eda/static/0e38c26e026d22d8e2b91f9bcbf42238/db5f8/es-ic-topic-3.png",srcSet:["/refarch-eda/static/0e38c26e026d22d8e2b91f9bcbf42238/7fc1e/es-ic-topic-3.png 288w","/refarch-eda/static/0e38c26e026d22d8e2b91f9bcbf42238/a5df1/es-ic-topic-3.png 576w","/refarch-eda/static/0e38c26e026d22d8e2b91f9bcbf42238/db5f8/es-ic-topic-3.png 890w"],sizes:"(max-width: 890px) 100vw, 890px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"segment.ms")," cotrols the time period after which Kafka will force the log to roll even if the segment file isn’t full to ensure that retention can delete or compact old data."),Object(c.b)("p",null,Object(c.b)("inlineCode",{parentName:"p"},"segment.index.bytes")," controls the size of the index that maps offsets to file positions. You generally should not need to change this setting."),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"905px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.31944444444445%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsTAAALEwEAmpwYAAAA9UlEQVQoz42R227DIBBE+f9f7ENbxYmNMZiLudmOpixxXSdN1D4csYLV7OzAxOjQ9iNcmDHF5V9Q7zPojXWDxtvHGZ3Q6KUFHwy6DS5NbRxtxPupQ8MlGjHBp9eDGBU+rb+m2UNNAnxQlTQvmJcVsdzpKePUT7gMHsZvDv9aYx/gU8X5XM5cz2d9TJkAZTxCcek3t8RxCNUhX39Irw0w+pDPc19FpZ4wjDcot2/32kW0YizoSqfC/vaYJyP7yt5ckltJwgUS2eMoPU3LceECxlFeGXleYUqGQsd9i7tPeeS4MkWhbRFyATGX9VO5L3mSoLLpTvALIf9puocL1moAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"es ic topic 4",title:"es ic topic 4",src:"/refarch-eda/static/26ea8db3fe3836b4360bfe5f76c51287/61b1a/es-ic-topic-4.png",srcSet:["/refarch-eda/static/26ea8db3fe3836b4360bfe5f76c51287/7fc1e/es-ic-topic-4.png 288w","/refarch-eda/static/26ea8db3fe3836b4360bfe5f76c51287/a5df1/es-ic-topic-4.png 576w","/refarch-eda/static/26ea8db3fe3836b4360bfe5f76c51287/61b1a/es-ic-topic-4.png 905w"],sizes:"(max-width: 905px) 100vw, 905px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("p",null,"The admin REST api offers way to configure more parameters."))}d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-aaa-orphans-deployments-eventstreams-es-ibm-cloud-mdx-25f4f3ff60c23a6530f0.js.map
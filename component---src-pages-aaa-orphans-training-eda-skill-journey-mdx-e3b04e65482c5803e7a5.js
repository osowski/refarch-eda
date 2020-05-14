(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{GRwf:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),r=a("013z");a("qKvR");function i(){return(i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var o={},c={_frontmatter:o},s=r.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,["components"]);return Object(n.b)(s,i({},c,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,"Implementing cloud native, event-driven solution with microservices deployed on kubernetes involves a broad skill set. In this article, we are proposing a deep dive learning journey for developers to adopt event-driven microservice implementation."),Object(n.b)("p",null,"This EDA project includes best practices around the technologies used in any event-driven microservice solution implementation. Our ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc"}),"Reefer solution implementation")," tries to illustrate most of those patterns. It includes a set of technologies that represent the modern landscape of cloud native applications (Kafka, maven, java, microprofile, kafka API, Kafka Stream API, Spring boot, Python, Nodejs, and Postgresql) but also some specific analytics and AI components like IBM Streams analytics and machine learning with Jupyter notebook to develop predictive scoring model."),Object(n.b)("p",null,"A developer who wants to consume this content does not need to know everything at the expert level. You can progress steps by steps and it will take a 2 to 3 weeks to digest everything."),Object(n.b)("p",null,"!!! note\nWe expect you have some good understanding of the following technologies:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"* Nodejs / Javascript / Typescripts\n* Java 1.8 amd microprofile architecture\n* Python 3.6\n* Angular 7, HTML, CSS  - This is for the user interface but this is more optional.\n* Maven, npm, bash\n* WebSphere Liberty or OpenLiberty\n* Docker\n* Docker compose\n* Helm\n* Kubernetes\n* Apache Kafka, Kafka API\n\nWe have build a getting started and tutorial list for you to study [here](core-techno-getstarted.md).\n")),Object(n.b)("h2",null,"Event Driven Concepts"),Object(n.b)("p",null,"Now the development of event driven solution involves specific technologies and practices. The following links should be studied in the proposed order:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture"}),"Why Event Driven Architecture now?"))),Object(n.b)("h3",null,"1- Reading: Understand EDA fundamentals (8 hours)"),Object(n.b)("p",null,"The following content is for architects, and developers who want to understand the technologies and capabilities of an event driven architecture."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Understand the ",Object(n.b)("a",i({parentName:"li"},{href:"../concepts/README.md"}),"Key EDA concepts")," like events, event streams, events and messages differences…"),Object(n.b)("li",{parentName:"ul"},"Be confortable with the ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/reference-architecture"}),"EDA reference architecture with event backbone, microservices and real time analytics"),"."),Object(n.b)("li",{parentName:"ul"},"Which is extended ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenExtendedArchitecture"}),"with machine learning and AI integrated with real time analytics reference architecture"),", integrating machine learning workbench and event sourcing as data source, and real time analytics for deployment."),Object(n.b)("li",{parentName:"ul"},"Review ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/event-driven-event-sources"}),"Event sources - as event producers article"),"."),Object(n.b)("li",{parentName:"ul"},"Read the concept of ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/event-driven-event-backbone"}),"Event backbone where Kafka is the main implementation"),"."),Object(n.b)("li",{parentName:"ul"},"As kafka is the event backbone, review its ",Object(n.b)("a",i({parentName:"li"},{href:"../kafka/readme.md"}),"key concepts and building blocks")," and then review how to support ",Object(n.b)("a",i({parentName:"li"},{href:"../kafka/arch.md"}),"high availability (HA) and disaster recovery (DR) with IBM Event Streams or Kafka Architecture Considerations"),"."),Object(n.b)("li",{parentName:"ul"},"Review one of the common industry use case using Kafka, to perform ",Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-data-ai-analytics/preparation/data-replication/"}),"data replication using kafka and Change Data Capture"),".")),Object(n.b)("h3",null,"2- Hands on Lab: Getting started with Event Streams and Kafka (3 hours)"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Start by creating an Event Stream service in IBM Cloud by performing the ",Object(n.b)("a",i({parentName:"li"},{href:"https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-getting_started&locale=en-US"}),"IBM Event Stream Getting started"),". To provision your service, go to the IBM Cloud Catalog and search for ",Object(n.b)("inlineCode",{parentName:"li"},"Event Streams"),". It is in the ",Object(n.b)("em",{parentName:"li"},"Integration")," category. Create the service and specify a name, a region/location (select the same as your cluster), and a resource group, add a tag if you want to, then select the standard plan.")),Object(n.b)("p",null,"!!! warning\nIf you are using a non default resource group, you need to be sure your userid as editor role to the resource group to be able to create service under the resource group."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"908px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABa0lEQVQoz41Si3KkIBD0/38v71ySfbiuCoKogAKufTPkspdUJVWhqh1hxp4e2iLGDVpPkEpBSIW6FTDDiPe1Ydv+4zer4Mc8BzjvEWPCEgJSSt+SXPccf0Bh5wjrAzi6JcHNKb/7sMLTfrALzOTzuV9WyqX3un+1X0BnxalRuH16w9NbicfXI+7/7HH7vEPTGSq4oBYKL/sSbaeJMCKtG0JcEdKKmC5fwOdE2OHm8RV3RMKRiR9eDjieBRGu6EeHrh/RSA2pDZSZMLk5ox8sDOU5qoGniChkb1E2GqdWoxI9Rhcw+ZhHYzDxrjzjULWk0qAiAWaaoQeHw6nGsWqwp9hqm9UX0syoOupiI6RZ8j0w0QepGS2qtoMilR9jsZKJ7l0oQ036HJ2nb8ncQuiROjQ0QgCTC8L4SWEje+xqk8f3IWWjZjKMscTLFWwY54qz0DicZe5aK4dS2KzuqpAcZuMsKQj5t4o/IhD+AsajtVyjGLqsAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IES service",title:"IES service",src:"/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/013af/IES-service.png",srcSet:["/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/7fc1e/IES-service.png 288w","/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/a5df1/IES-service.png 576w","/refarch-eda/static/eed5f63c0a75227d158e8df6c100b038/013af/IES-service.png 908w"],sizes:"(max-width: 908px) 100vw, 908px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"See ",Object(n.b)("a",i({parentName:"p"},{href:"../deployments/eventstreams//es-ibm-cloud.md"}),"this note")," for creating Event Stream with Enterprise plan."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Review another getting started from ",Object(n.b)("a",i({parentName:"li"},{href:"https://kafka.apache.org/quickstart"}),"Apache Kafka quickstart")),Object(n.b)("li",{parentName:"ul"},"Finally review the Confluent point of view on ",Object(n.b)("a",i({parentName:"li"},{href:"https://www.confluent.io/blog/apache-kafka-getting-started/"}),"getting started")," as it covers some of the persona involved in a kafka based solution.")),Object(n.b)("h3",null,"3 - Readings : Methodology (2 hours read)"),Object(n.b)("p",null,"It is important to understand how to start a project using event. This lab persents how to start an event driven solution implementation using the event storming and domain driven design:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"We are proposing a ",Object(n.b)("a",i({parentName:"li"},{href:"../methodology/readme.md"}),"set of activities")," to develop and release an event-driven solution based on the agile development approach described in the IBM Garage method."),Object(n.b)("li",{parentName:"ul"},"The adopted approach for event identification is the ",Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-eda/methodology/readme/"}),"Event storming methodology")," introduced by Alberto Brandolini in “Introducing event storming book”. We have extended it with the event insight practice used to identify potential real time analytics use cases."),Object(n.b)("li",{parentName:"ul"},"Once the event storming deliver events, commands, aggregates we can start doing some ",Object(n.b)("a",i({parentName:"li"},{href:"../methodology/ddd/"}),"Domain Design Driven")," exercises and apply it to the business application.")),Object(n.b)("p",null,"For those of you, who are interested to know how to apply the event storming and domain driven design methodology to the Reefer shipment process,  you can review the following articles:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/introduction"}),"The solution introduction")," to get a sense of the goals of this application. (10 minutes read)"),Object(n.b)("li",{parentName:"ul"},"followed by the ",Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/analysis/readme/"}),"event storming analysis report")," (30 minutes read)."),Object(n.b)("li",{parentName:"ul"},"and ",Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/design/readme/"}),"the derived design")," from this analysis. (15 minutes reading)")),Object(n.b)("hr",null),Object(n.b)("h2",null,"Hands-on labs"),Object(n.b)("p",null,"As next steps beyond getting started and reading our technical point of view, you can try different hands-on exercises based on our ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc"}),"“Reefer container shipment solution”"),". This application is quite complex and includes different components. You do not need to do all, but you should get a good understanding of all those component implementation as most of the code and approach is reusable for your future implementation."),Object(n.b)("p",null,"!!! note\nAt the end of this training you should have the following solution up and running (See detailed description ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/design/architecture/#components-view"}),"here"),"):"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"![](../images/kc-mvp-components.png)\n")),Object(n.b)("p",null,"You can run the solution locally, on IBM Cloud Private, on IBM Kubernetes Services or Openshift."),Object(n.b)("h3",null,"4 - Hands on lab: Prepare your local environment (30 mn)"),Object(n.b)("p",null,"!!! goals\nInstall Kafka - zookeeper and postgresql docker images and start them in docker-compose or minikube environment"),Object(n.b)("p",null,"First be sure to complete the pre-requisites by following ",Object(n.b)("a",i({parentName:"p"},{href:"ttps://ibm-cloud-architecture.github.io/refarch-kc/pre-requisites.md"}),"those steps"),"."),Object(n.b)("p",null,"Then do one of the following choice:"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"To run a local Kafka / zookeeper backbone using docker compose, in less than 3 minutes follow ",Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/local/#start-kafka-and-zookeeper"}),"the steps described in this note"),"."),Object(n.b)("li",{parentName:"ol"},"Or use ",Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/minikube/#pre-requisites"}),"Minikube/ docker kubernetes")," to get kafka, zookeeper and postgreSQl up and running on a unique node kubernetes cluster.")),Object(n.b)("h3",null,"5 - Hands on lab: Prepare IBM Cloud IKS Openshift environment"),Object(n.b)("p",null,"You can run the solution locally, but you can also deploy it to a kubernetes cluster. So this lab is more optional or you can do it later when you are familar with the solution. If you want to build and run the solution locally go to step 8 below."),Object(n.b)("p",null,"So if you are interested by a public cloud deployment, you can follow this tutorial: ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/containers?topic=containers-openshift_tutorial"}),"“Creating an IBM Cloud Red Hat OpenShift Container Platform cluster”"),"."),Object(n.b)("p",null,"Be sure to have administration privilege, within your account, to be able to create cluster. It will take less than 30 minutes to get the cluster provisioned."),Object(n.b)("p",null,"You can follow the steps to create the cluster with the console or use the IBM Cloud CLI."),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Be sure to be logged to your IBM Cloud account:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"ibmcloud login -a https://cloud.ibm.com  -u <userid> -p <password> -c <accoundID>\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Get the private and public vlan IP address for your zone:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"ibmcloud ks vlans --zone wdc06\n")),Object(n.b)("p",{parentName:"li"},"It will return something like"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"ID        Name                     Number   Type      Router         Supports Virtual Workers\n<private_VLAN_ID to keep secret>          2445     private   bcr01a.wdc06   true\n<public_VLAN_ID to keep secret>           1305    public    fcr01a.wdc06   true\n\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Create a 3 nodes kubernetes cluster using the small hardware footprint, and openshift 3.11 image:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"ibmcloud ks cluster-create --name greencluster --location wdc06 --kube-version 3.11_openshift --machine-type b3c.4x16.encrypted  --workers 3 --public-vlan <public_VLAN_ID> --private-vlan <private_VLAN_ID>\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Verify your cluster once created:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"ibmcloud ks cluster-get --cluster  greencluster\n")),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"Retrieving cluster greencluster...\nOK\n\nName:                           greencluster\nID:                             <keep it secret>\nState:                          normal\nCreated:                        2019-07-16T20:47:34+0000\nLocation:                       wdc06\nMaster URL:                     https://<secret_too>.us-east.containers.cloud.ibm.com:21070\nPublic Service Endpoint URL:    https://<secret_too>.us-east.containers.cloud.ibm.com:21070\nPrivate Service Endpoint URL:   -\nMaster Location:                Washington D.C.\nMaster Status:                  Ready (2 days ago)\nMaster State:                   deployed\nMaster Health:                  normal\nIngress Subdomain:              greencluster.us-east.containers.appdomain.cloud\nIngress Secret:                 greencluster\nWorkers:                        3\nWorker Zones:                   wdc06\nVersion:                        3.11.104_1507_openshift\nOwner:                          <secret_too>\nMonitoring Dashboard:           -\nResource Group ID:              <secret_too>\nResource Group Name:            default\n\n"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Download the configuration files to connect to your cluster"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"ibmcloud ks cluster-config --cluster greencluster\n")),Object(n.b)("p",{parentName:"li"},"Then export the KUBECONFIG variable."),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"export KUBECONFIG=/Users/<you on your computer>/.bluemix/plugins/container-service/clusters/greencluster/kube-config-wdc06-greencluster.yml\n")),Object(n.b)("p",{parentName:"li"},"Now any ",Object(n.b)("inlineCode",{parentName:"p"},"oc")," command will work against your remote cluster.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Access the Openshift container platform console using the master URL"),Object(n.b)("p",{parentName:"li"},"Something like: https://<secret_too>.us-east.containers.cloud.ibm.com:21070"),Object(n.b)("img",i({parentName:"li"},{src:"os-console.png",alt:null})))),Object(n.b)("h3",null,"6 - Hands on lab: Create Kafka topics and get service credentials"),Object(n.b)("p",null,"From the Event Stream services you created in ",Object(n.b)("a",i({parentName:"p"},{href:"#lab-2-getting-started-with-event-streams-and-kafka-3-hours"}),"Lab 2")," go to the service credentials page, create new credentials to get the Kafka brokers list, the admim URL and the api_key needed to authenticate the consumer or producer code."),Object(n.b)("p",null," ",Object(n.b)("span",i({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1024px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"63.541666666666664%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAAAsSAAALEgHS3X78AAACOklEQVQ4y3VTTW/TQBDN70biVxRVQiriUI5UpOIQqeUOhUvFAdSkVghpiJ0Pf+2X7bXzeLOuUyHRlZ9mvPa8eTM7O7K2hjEWeVFCGwOlDUqlYK0DDgc+T2i7Fm37PJqmwahUGmmWw1iLwRdyV1WBWJIMVkjDGuw/6wDvPUaa6kSVoaIeNljrKiiSaL7LP7Lnqjqgqmt+q7AvTEBW2rBvXY2RBGZUtEszSvZPJQ556Xcsp2O5HX3fdmH/5meCF2df8fLtN7z++AM1Y81AWJQlFVSombliqaFfJPFNDV8ZtI2Frx2Jm8dvPijOFdXbBto13Ot6wjQvEW/3LMuh8R1q3zJbi+0uxWq1hmIya0omMqicConjTRqC5f+261W7qukJt2mBZF9gvc1CP7TzAfs0xyreYLVOsI5jpLkcVo4ks5itCtwtUyx3PEhOSaErpIXuCbWtA7uo8sxm6WuqyIsCBZFmKdUrKMW2ONdXIJW0h94yzrgmQOJGQlCxj+s/MaL7CJPJBJfjS4w/jHHx/gLXVxMs5hGKPONs2jBr8r/0Wt4dk8iUDEJI6Jld4/b2O8YkOj09xdnZG5ycvML5+TvcfP6CT1fXmN5NoRmY51ROlKU6DnMgrttHwtqHLIvFEkmyY5kqoCQkOKHyTZxgk2zDjRJSESAxssKJc16PhIZSu65DFM0xm0aYTu8xnUX4NV/g4WGN34sHYokV/f8tUSnkjsKOhHJlQik8BLG9X1KJCrYMvn72DougoYd/Aaml4G/38gZ4AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IES IC credentials",title:"IES IC credentials",src:"/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/2faef/IES-IC-credentials.png",srcSet:["/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/7fc1e/IES-IC-credentials.png 288w","/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/a5df1/IES-IC-credentials.png 576w","/refarch-eda/static/4729d9ec08db1ec6f706bd1fed86cc3c/2faef/IES-IC-credentials.png 1024w"],sizes:"(max-width: 1024px) 100vw, 1024px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")),Object(n.b)("p",null,"The Event streams broker API key is needed to connect any consumers or producers to access the service in IBM Cloud."),Object(n.b)("p",null,"When those producers and consumers are deployed to kubernetes, the way to share security keys, is to define a kubernetes secret and deploy it to the IKS cluster."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Define a Event Stream API key secret: to configure a secret under the ",Object(n.b)("inlineCode",{parentName:"p"},"greencompute")," namespace."),Object(n.b)("p",{parentName:"li"},"  For kubernetes platform:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{className:"language-shell"}),"kubectl create secret generic eventstreams-apikey --from-literal=binding='<replace with api key>' -n greencompute\n")),Object(n.b)("p",{parentName:"li"},"  For Openshift use the name of the project as namespace"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"kubectl create secret generic eventstreams-apikey --from-literal=binding='<replace with api key>' -n reefer-shipment-solution\n"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Verify the secrets:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"kubectl describe secrets -n greencompute\n")),Object(n.b)("p",{parentName:"li"},"  or for openshift using project:"),Object(n.b)("pre",{parentName:"li"},Object(n.b)("code",i({parentName:"pre"},{}),"kubectl describe secrets -n reefer-shipment-solution\n")))),Object(n.b)("p",null,"This secret is used by all the solution microservices which are using Kafka / Event Streams. The detail of how we use it with environment variables, is described in one of the project ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/blob/master/fleet-ms/README.md#run-on-ibm-cloud-with-kubernetes-service"}),"here.")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Finally in the ",Object(n.b)("em",{parentName:"p"},"Manage")," panel add the topics needed for the solution. We need at least the following:"),Object(n.b)("span",i({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}}),"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"62.15277777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAABeklEQVQoz3VSi5KCMAzk/3/wRkTlPEVPD1reLS3sJcE6jGhndtqk6WaTNDLGoaobKF0iLzR0WaFQWsDncZzwuqZp7QsrYrJ7XshjOf/lYueFErugRLxXdS1J27Z7kr5D5L2Hcw68j+O4CuY757xgeMR9WkL46kx2O1JHCpXCMAwfH3MrWEBAaEMUlIQMSZIgjrfYbGKcTmfkVL5/KOfFpZdVJUo5fpxmYmMM+r6fFS4JDTm1VihIpTE9BmvlznuHmsisNRQ30uMOTdMIpJIHcbTsGS9VG/z8amwOGVQzPHG+l/janXDJa+jWY3u8Ik4zAd8V9YDe+jVhTRPlHm62CbLrlVRatF1PSlpS4tCL3ckvYNs+fb0MbUXYUbCigezTA5L9nnqYw1FJ7Oc+WWoBQ2k9nxc+7uuKsG1bUXhIv5FdLvQ/SwlmPxMGcI8tKVv6PhJy8O12k2aH4BUhVbG0Ge5dyTx6VpUej6KwI5szs3/+5E4ScUywA3jK/0NtpitgqBkIAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"IES IC topics",title:"IES IC topics",src:"/refarch-eda/static/06136378d9189e30a9a689054d146864/3cbba/IES-IC-topics.png",srcSet:["/refarch-eda/static/06136378d9189e30a9a689054d146864/7fc1e/IES-IC-topics.png 288w","/refarch-eda/static/06136378d9189e30a9a689054d146864/a5df1/IES-IC-topics.png 576w","/refarch-eda/static/06136378d9189e30a9a689054d146864/3cbba/IES-IC-topics.png 1152w","/refarch-eda/static/06136378d9189e30a9a689054d146864/3fe90/IES-IC-topics.png 1674w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(n.b)("p",null,"!!! Note\nIn your local deployment the kafka topics are created automatically using the launch script."),Object(n.b)("h3",null,"7 - Hands on lab: Get a simple getting started event producer deployed on openshift with Event Stream"),Object(n.b)("p",null,"!!! Note\nFor local deployment, ",Object(n.b)("a",i({parentName:"p"},{href:"#perform-the-smoke-tests-locally"}),"smoke test")," scripts helps to show the event produced and consumed."),Object(n.b)("p",null,"To validate the IBM Event Stream and the openshift app are communicating, we use a simple order producer app we have developed as part of the Reefer container solution. It is done with python and can be found in ",Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/jbcodeforce/order-producer-python"}),"this repository"),". We use Openshift source to image workflow to deploy this app to Openshift. Follow the steps in the readme as part of the lab."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"543px"}},"\n      ",Object(n.b)("span",i({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"36.11111111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAABqklEQVQoz4WRvWsTARjGbyqOHTo4i4uTf0CH6ubi32BtsViKUcFqx9AOVXCt7VAHBymKKETQUrQRConmcsld0pirTa75uOTuiphcEprG+/h5F8wgFHzh5f3geR8enldoHluU6jXKeoOGUcMwqxhWjXqzQqtjE4bv+//NEU6QDw6JPM8xu1Fkbj3LrWdpZtYk5jdSlHTzH0L+Hp4VI1Ihc6BxdVlhMlpg4rbM2A2Jc9MZLt5Lk68YIZSB6+IFnRuk43k4TjAH1XXDPqw+rufjhQqzapmpqMzlpX2uLae4v5nj+mOFCxGRYtUaEuaLKvvqD3LfVXTTClcMBs6ZSoVPmsTMlsidFxVefkigqSLv4hlurmXQGtYQtB3/wuvYe17FYiRSIrbdoX86QCz32FZa7Mi/+Ci3KJl9hLefd4g8vMuTp6vsfk2yl1VIKDLflDQNyyIU0u6cBA/qYff6NM2faFWd7slvrqwUOD+f5tIDmfHZFNE3dQQpmWRxYYHFR0vkVZWqYaDpOoe1Ou1ud6jQCbwKPXID3zx/9ASQjnrECzZ7qs1uoc3R8Sl/AKvg6pBvWMxsAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",i({parentName:"span"},{className:"gatsby-resp-image-image",alt:"order producer python",title:"order producer python",src:"/refarch-eda/static/6be0126181bb70957f28d462b4231777/55a9e/order-producer-python.png",srcSet:["/refarch-eda/static/6be0126181bb70957f28d462b4231777/7fc1e/order-producer-python.png 288w","/refarch-eda/static/6be0126181bb70957f28d462b4231777/55a9e/order-producer-python.png 543w"],sizes:"(max-width: 543px) 100vw, 543px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"There are other tools to use to quickly"),Object(n.b)("h3",null,"8 - Hands on lab: Build and run the solution locally"),Object(n.b)("p",null,"!!! goals\nBuild and run the solution so you can understand the Java-maven, Nodejs build process with docker stage build."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/local/"}),"Build and deploy the solution locally using docker compose"))),Object(n.b)("h3",null,"9 - Hands on: Perform tests"),Object(n.b)("h4",null,"Perform the smoke tests locally"),Object(n.b)("p",null,"Finally, run the smoke tests to assess all the components are running well. For that in the ",Object(n.b)("inlineCode",{parentName:"p"},"refarch-kc")," project run the script:"),Object(n.b)("p",null,"For docker-compose:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"./scripts/smokeTests.sh LOCAL\n")),Object(n.b)("p",null,"for MINIKUBE:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"./scripts/smokeTests.sh MINIKUBE\n")),Object(n.b)("p",null,"You should see an Order created for the “GoodManuf” customer. Then the order is visible in the command and the query microservices."),Object(n.b)("p",null,"!!! warning\nTo stop docker-compose deployment use the following command:"),Object(n.b)("pre",null,Object(n.b)("code",i({parentName:"pre"},{}),"```\n./scripts/stopLocalEnv.sh  LOCAL\n```\nor for the minikube\n```\nstopLocalEnv.sh  MINIKUBE\n```\n")),Object(n.b)("h4",null,"Optional: Execute integration tests on the local environment"),Object(n.b)("p",null," ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/itg-tests/"}),"Execute the integration tests")," to validate the solution end to end."),Object(n.b)("h4",null,"Optional: Execute the demonstration script"),Object(n.b)("p",null,Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/demo/readme/"}),"Execute the demonstration script")),Object(n.b)("h3",null,"10 - Reading: Review the CQRS patterns implementation"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Read ",Object(n.b)("a",i({parentName:"p"},{href:"../design-patterns/ED-patterns.md"}),"Event driven design patterns for microservice")," with the Command Query Responsability Segregation, event sourcing and saga patterns.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Review the ",Object(n.b)("a",i({parentName:"p"},{href:"../design-patterns/event-sourcing.md"}),"Event sourcing design pattern explanations")," and how it is tested with some integration tests:")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Review the ",Object(n.b)("a",i({parentName:"p"},{href:"../design-patterns/cqrs.md"}),"CQRS pattern"),".")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Review the CQRS code in the ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc-order-ms"}),"order management microservice implementation"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/confluentinc/confluent-kafka-python"}),"Kafka Python API")," and some examples in our ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/itg-tests/"}),"integration tests project"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc-ms/voyagems/"}),"Kafka Nodejs API used in the voyage microservice")))),Object(n.b)("h3",null,"Lab 11: Run the solution on IBM Cloud"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/iks"}),"Deploying the solution on IBM Cloud Kubernetes Service"))),Object(n.b)("p",null,"Perform smokeTests locally on the solution running on IKS."),Object(n.b)("h3",null,"Lab 12: Optional - Run the solution on IBM Cloud Private"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",i({parentName:"li"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/deployments/icp"}),"Deploying the solution on IBM Cloud Private"))),Object(n.b)("h3",null,"Lab 13: Data replication with Kafka"),Object(n.b)("p",null,"One of the common usage of using Kafka is to combine it with a Change Data Capture component to get update from a “legacy” data base to the new microservice runtime environment."),Object(n.b)("p",null,"We are detailing an approach in ",Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-data-ai-analytics/preparation/data-replication/"}),"this article"),"."),Object(n.b)("h3",null,"Lab 14: Real time analytics and Machine learning"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/catalog/services/streaming-analytics"}),"IBM Cloud Streaming Analytics introduction")," and ",Object(n.b)("a",i({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/StreamingAnalytics?topic=StreamingAnalytics-gettingstarted#gettingstarted"}),"getting started"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc-container-ms/metrics/"}),"Apply predictive analytics on container metrics for predictive maintenance use case")))),Object(n.b)("h3",null,"Other subjects"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc-container-ms/cicd/"}),"Develop a toolchain for one of the container manager service"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-integration/blob/master/docs/icp/troubleshooting.md"}),"Our Kubernetes troubleshooting notes"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"../kafka/monitoring.md"}),"Kafka monitoring")))),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://developer.ibm.com/streamsdev/docs/detect-events-with-streams/"}),"IBM Event Streams - stream analytics app")," Event detection on continuous feed using Streaming Analytics in IBM Cloud.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Read how to ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/event-driven-event-streams"}),"process continuous streaming events"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/cloud/garage/architectures/eventDrivenArchitecture/event-driven-cloud-native-apps"}),"Event-driven cloud-native applications"))),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"The Cloud Private ",Object(n.b)("a",i({parentName:"p"},{href:"https://www.ibm.com/cloud/event-streams"}),"IBM Event Streams")," product running on  private cloud")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Read introduction to ",Object(n.b)("a",i({parentName:"p"},{href:"../evt-action/README.md"}),"act on events with IBM Cloud Functions")))),Object(n.b)("h2",null,"Slack channel"),Object(n.b)("p",null,"Contact us on ‘#eda-ac` channel under the ",Object(n.b)("a",i({parentName:"p"},{href:"http://ibmcase.slack.com"}),"ibmcase.slack.com")," workspace."))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-aaa-orphans-training-eda-skill-journey-mdx-e3b04e65482c5803e7a5.js.map
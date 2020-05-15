(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{"8o4X":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return r})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),o=a("013z");a("qKvR");function c(){return(c=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var r={},s={_frontmatter:r},i=o.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(n.b)(i,c({},s,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("a",c({parentName:"p"},{href:"https://kafka.apache.org/documentation/#connect"}),"Kafka connect")," is an open source component for easily integrate external systems with Kafka. It works with any Kafka producer like IBM Event Streams and Red Hat AMQ Streams. It uses the concepts of source and sink connectors to ingest or deliver data to / from  Kafka topics."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.45833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABcSAAAXEgFnn9JSAAACRUlEQVQoz12SzWsUQRDF92/Wo3gRT6LkIijiRTzoRbxoREHiRyBGUFQIaCTJms/d7M5XT0/PdPVMP1/1JBpdKGp2pvrXr+rVpKhDnpvQ5HWwzNY0Ym0bbO1Cyq4bo/k/2vBPnW2lYa4muemlC4BnNB2Q1z2c7/nco7A9ZnlIsax6LE2P07JPzxmfi3qss62eGZhDr8DOuIjaxWiaIS4ricaFyJvjcSZx+9CnmOUS9+cSt6YSpzOJi1LSu9b72HQSCVOgEBg62ypwIGSAsYLYBwTREHgv4BhSEIKDU4/TQlDxf24E+wvgKIsEigLDpHbSFTZA1Shsey5Y/S54syN4+UOwvivgDEdAHbCoQsrG8RIKePz8Iz58nUZOiaIkTEjtVG5mKJuH1n4KLq8Kbr0XXHk15qyUNNusdFgWDfLKISO4sMClayt48uJNBH+V9aowdDrY0kp0lP35QLCyLnjwSXB7Q/DoC9uc+2RAUdVYZAalsQk4KyLuPHyKt5vf4kCgabwqlM40ASdsuabCjT3B9TXB3U3BjXeCe5vj/LTNwg68eEju6/xsC1y9eR/PXm8khQnIPey0iGsQq4YrwNkMNEXN6ENIBrXcKcdgFzRE1QoadkN3lQPpQUPPTOFsutqBxepU5I4Jas5UY0439048do49d1Hwi4Zt7Xm+k+S0fq+d1w7O1yakPdSFbn1Ma5NVenv6mA5NZ3+BR0vB7rHgcEFgOUK1luouANmygmrXx9ImcxLsrIW0MtrueEBX6BwSLtb9Af4GliqPLgHHgpoAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Kafka component",title:"Kafka component",src:"/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/3cbba/kafka-components.png",srcSet:["/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/7fc1e/kafka-components.png 288w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/a5df1/kafka-components.png 576w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/3cbba/kafka-components.png 1152w","/refarch-eda/static/2c439d91879f50027d15b2d6812e2de5/b1c97/kafka-components.png 1189w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The general concepts are detailed in the ",Object(n.b)("a",c({parentName:"p"},{href:"https://ibm.github.io/event-streams/connecting/connectors/"}),"IBM Event streams product documentation"),". Here is a quick summary:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"connector")," represents a logical job to move data from / to kafka  to / from external systems. A lot of ",Object(n.b)("a",c({parentName:"li"},{href:"https://ibm.github.io/event-streams/connectors/"}),"existing connectors")," can be reused, or you can implement your owns."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"workers")," are JVM running the connector. For production deployment workers run in cluster or “distributed mode”."),Object(n.b)("li",{parentName:"ul"},Object(n.b)("strong",{parentName:"li"},"tasks"),": each worker coordinates a set of tasks to copy data. Task states are saved in kafka topics. They can be started, stopped at any time to support resilience, and scalable data pipeline.")),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABYlAAAWJQFJUiTwAAABxElEQVQoz12S728SMRjH+Vf9KzTZmyUu0xldMl84N5csMSwxMyECzhlDEHYb4RC4Red0AzaYJwMC45fAHb3rx15hamzSPn2+bT7tt09DUoJUw20UQuCJKb4n8H2l+wJwdZe+pzQfdyp0F8LDcSTjMUwmCqBaaDCARiMAQb1usxU5YjmcY2M3ReNnjeThMas7FivbJnnrlHLlhH3zCXuFBT4YL2k1xxrYakmGQwXsduGy6mtgqXTFwnqKO48zLD5PcHVRJf7xLUuvH7EYXuEol6VgfeP+dpR7W1E2X+3RvO7hKgPVmiRghaZTZcadAc/OamzEnvIwepf1yCrlc5t0Nkb04AGR5DKf8lmK1nee7SRYCx+w+yZBr3ujnyuw7DgKGPh2XYnngW3XMTJxTCtGMh2nUvlBziySMY4x0nms4ok6tIyZSfG5aHJopOn1+8za/A2l/JsMR2NanRGqJmqjoN0R6uQpv0Yuo7HDYDibTxx3VhjlNSiSJswLG7pNZsAJdnvEu3ydF+8rFEo3Wvfn6/lSh839Ml+qPZ17CvYvUN/wDz2I8w2nF02+XnZo9ydaC75H4KJ23aV43qAzULr09Rf7H/gbbT5Jqprmh7EAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Connectors and tasks",title:"Connectors and tasks",src:"/refarch-eda/static/bff8eeeb1e72e1c82b3caa98f7a72499/3cbba/connector-tasks.png",srcSet:["/refarch-eda/static/bff8eeeb1e72e1c82b3caa98f7a72499/7fc1e/connector-tasks.png 288w","/refarch-eda/static/bff8eeeb1e72e1c82b3caa98f7a72499/a5df1/connector-tasks.png 576w","/refarch-eda/static/bff8eeeb1e72e1c82b3caa98f7a72499/3cbba/connector-tasks.png 1152w","/refarch-eda/static/bff8eeeb1e72e1c82b3caa98f7a72499/0710a/connector-tasks.png 1298w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"When a connector is submitted to the cluster, the workers rebalance the full set of connectors in the cluster and their tasks so that each worker has approximately the same amount of work."),Object(n.b)("h2",null,"Characteristics"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Copy vast quantities of data from source to kafka: work at the datasource level. So when it is a database, it uses JDBC API for example."),Object(n.b)("li",{parentName:"ul"},"Support streaming and batch."),Object(n.b)("li",{parentName:"ul"},"Scale at the organization level, even if it can support a standalone, mono connector approach to start small, it is possible to run in parallel on distributed cluster."),Object(n.b)("li",{parentName:"ul"},"Copy data, externalizing transformation in other framework."),Object(n.b)("li",{parentName:"ul"},"Kafka Connect defines three models: data model, worker model and connector model."),Object(n.b)("li",{parentName:"ul"},"Provide a REST interface to manage connectors and monitor jobs.")),Object(n.b)("h2",null,"Installation"),Object(n.b)("p",null,"The  Kafka connect framework fits well into a kubernetes deployment. We have different options for that deployment."),Object(n.b)("p",null,"We recommend reading the ",Object(n.b)("a",c({parentName:"p"},{href:"https://ibm.github.io/event-streams/connecting/setting-up-connectors/"}),"IBM  event streams documentation")," for installing Kafka connect with IBM Event Streams or you can also leverage the ",Object(n.b)("a",c({parentName:"p"},{href:"https://strimzi.io/docs/0.17.0/#kafka-connect-str"}),"Strimzi Kafka connect operator"),"."),Object(n.b)("p",null,"With IBM Event Streams on premise deployment, the connectors setup is part of the user admin console toolbox:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"40.97222222222222%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAAAsSAAALEgHS3X78AAABRklEQVQoz31RTUvEMBDtH/fgQVG8CYIiuEdvCrIsqChIC4IHL4s397hLSzf9SlvbZJJnJrqlrmLgMWEy82beSxAnKZIkQV3XkFJ68H0bUtZ/5rcRlI3Bf4eMhSaDqiHYUd5aO0Su8XXaIMizDMvlEmmaDuAt27aFUmogyFxdHMfI8xxFUaDrOvR9DyJeaDPKEXIjE1RVhbIsfdysr7XG8ztwO7doO+UG9D7HhFEUIQxDROET7l8FZnPg4c0Rdr32/Lz6BsaYIZ4+EnavNfJaDzKFEJhMJrhwOD87wf7lAjtXwOG0R5BVbrKmX95xsyL7LcdAuLr2Q0GPbNjq+JLMHq5WKz+VwV4JB+3kjYubWmK9Xvt3tqlpGg/lLPjhIRtPRN4bvivlpBkNIQkHU4u9G4ujGUG2NGzOVjC0/xCDl4V1ki2O7wifdd1if7sNI5cAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Event Streams connector",title:"Event Streams connector",src:"/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/3cbba/es-connectors.png",srcSet:["/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/7fc1e/es-connectors.png 288w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/a5df1/es-connectors.png 576w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/3cbba/es-connectors.png 1152w","/refarch-eda/static/065602b9bb67479c9e4119b4a6195620/f9628/es-connectors.png 1343w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"Deploying connectors against an IBM Event Streams cluster, you need to have API key with permissions to produce and consume messages for all topics.")),Object(n.b)("p",null,"As an extendable framework, kafka connect, can have new connector plugins. To deploy new connector, the kafka docker image defining the connector needs to be updated with the connector jar and redeployed to kubernetes cluster or to other environment. With IBM Event Streams on Openshift, the toolbox includes a kafka connect environment packaging, that defines a Dockerfile and configuration files to build your own image with the connectors jar files you need. The configuration files defines the properties to connect to Event Streams kafka brokers using API keys and SASL."),Object(n.b)("p",null,"Here is the ",Object(n.b)("a",c({parentName:"p"},{href:"https://ibm.github.io/event-streams/connectors/"}),"list of supported connectors")," for IBM Event Streams."),Object(n.b)("p",null,"We will use this image to run the kafka connect in standalone mode or in ",Object(n.b)("a",c({parentName:"p"},{href:"#distributed-mode"}),"the distributed mode section"),"."),Object(n.b)("h2",null,"Getting started with kafka connect standalone mode"),Object(n.b)("p",null,"For development and test purposes, we can use Kafka connect in standalone mode, but still connected to IBM Event Streams running on-premise or on-cloud."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"From the ",Object(n.b)("a",c({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc/blob/master/docker/kafka-connect/Dockerfile"}),"downloaded dockerfile")," (in the refarch-kc repository) we can build a new kafka connect environment image using the command:")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"docker build -t ibmcase/kafkaconnect:0.0.1 .\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Start a container with kafka connector, to run a standalone connector: you need to use a worker configuration and one of the connector properties file under the ",Object(n.b)("inlineCode",{parentName:"li"},"connectors")," folder. Those files will be mounted under the ",Object(n.b)("inlineCode",{parentName:"li"},"/opt/kafka/config")," inside the container. Also, as we want to test sending the content of a file, we mount a local ",Object(n.b)("inlineCode",{parentName:"li"},"data")," folder to the ",Object(n.b)("inlineCode",{parentName:"li"},"/home/data"),":")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"# in the refarch-kc/docker/kafka-connect folder\ndocker run -ti  --rm -v $(pwd)/config:/opt/kafka/config -v $(pwd)/data:/home/data --entrypoint bash -p 8083:8083 ibmcase/kafkaconnect:0.0.1\n")),Object(n.b)("p",null,Object(n.b)("strong",{parentName:"p"},"Note:")," You need to modify those property files to set the API key for your own event streams cluster, and set any other properties."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Inside the container starts the standalone connector:")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"cd /opt/kafka\n./bin/connect-standalone.sh config/worker-standalone.properties config/file-source.properties config/file-sink.properties\n")),Object(n.b)("p",null,"The  ",Object(n.b)("inlineCode",{parentName:"p"},"file-source.properties")," configures a file reader to source the ",Object(n.b)("inlineCode",{parentName:"p"},"data/access_log.txt")," file to the ",Object(n.b)("inlineCode",{parentName:"p"},"clickstream")," topic:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-properties"}),"name=local-file-source\nconnector.class=FileStreamSource\ntasks.max=1\nfile=/home/kafka-connect/access_log.txt\ntopic=clickstream\n")),Object(n.b)("p",null,"While the ",Object(n.b)("inlineCode",{parentName:"p"},"config/file-sink.properties")," defines a file sink stream to create a json file by getting messages from the ",Object(n.b)("inlineCode",{parentName:"p"},"clickstream")," topic. The file sink connector can read from multiple topics to aggregate the content in the same file."),Object(n.b)("p",null,"The standalone connector worker configuration specifies where to connect, and what converters to use:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-properties"}),"bootstrap.servers=....\nkey.converter=org.apache.kafka.connect.json.JsonConverter\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\n\n# Local storage file for offset data\noffset.storage.file.filename=/tmp/connect.offsets\n")),Object(n.b)("p",null,"The execution trace shows the producer id, and the consumer id, and the task for each connector:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-log"}),"INFO Creating task local-file-source-0 (org.apache.kafka.connect.runtime.Worker:414)\n...\nINFO TaskConfig values:\n    task.class = class org.apache.kafka.connect.file.FileStreamSourceTask\n...\n INFO Creating connector local-file-sink of type FileStreamSink (org.apache.kafka.connect.runtime.Worker:246)\n INFO Creating task local-file-sink-0 (org.apache.kafka.connect.runtime.Worker:414)\n")),Object(n.b)("p",null,"To validate the data are well published see the generated file under the ",Object(n.b)("inlineCode",{parentName:"p"},"data")," folder. As the Json converter was used, the message was wrapped into a json document with schema and payload."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-json"}),'{"schema":{"type":"string","optional":false},"payload":"46.166.139.20 - - [01/Dec/2015:23:22:09 +0000] \\"POST /xmlrpc.php HTTP/1.0\\" 200 370 \\"-\\" \\"Mozilla/4.0 (compatible: MSIE 7.0; Windows NT 6.0)\\""}\n')),Object(n.b)("h2",null,"Connecting to IBM Cloud Event Streams remote cluster"),Object(n.b)("p",null,"To connect to Event Streams on IBM Cloud the properties needs to define the broker adviser URLs and the API key that you get from the service crendentials."),Object(n.b)("p",null,"This API key must provide permission to produce and consume messages for all topics, and also to create topics."),Object(n.b)("p",null,"With Event streams on Cloud the ",Object(n.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-kafka_connect"}),"following document")," explains what properties to add to the worker and connectors configuration."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-properties"}),'bootstrap.servers=broker-3-qnsdz.kafka.svc01.us-east.eventstreams.cloud.ibm.com:9093,broker-1-qnprt...\nsecurity.protocol=SASL_SSL\nssl.protocol=TLSv1.2\nsasl.mechanism=PLAIN\nsasl.jaas.config=org.apache.kafka.common.security.plain.PlainLoginModule required username="token" password="98....";\n\n')),Object(n.b)("p",null,"Using the same ",Object(n.b)("inlineCode",{parentName:"p"},"file source stream connector")," to send records and a simple consumer console to trace the output like:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),'docker run -ti  -v $(pwd)/config:/opt/kafka/config --entrypoint bash  ibmcase/kafkaconnect:0.0.1\n\nesuser@3245874dcdd3: cd /opt/kafka/bin/\nesuser@3245874dcdd3: ./kafka-console-consumer.sh --bootstrap-server eventstream140-ibm-es-proxy-route-broker-0-eventstreams.apps.green.ocp.csplab.local:443 --consumer.config /opt/kafka/config/console-consumer.properties --topic clickstream --from-beginning"\n')),Object(n.b)("p",null,"The console-consumer.properties specifies the SASL properties to connect to the remote broker using API key."),Object(n.b)("h2",null,"Distributed mode"),Object(n.b)("p",null,"When running in distributed mode, the connectors need three topics as presented in the ",Object(n.b)("inlineCode",{parentName:"p"},"create topics")," table ",Object(n.b)("a",c({parentName:"p"},{href:"https://ibm.github.io/event-streams/connecting/setting-up-connectors/"}),"here"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"connect-configs"),": This topic will store the connector and task configurations.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"connect-offsets"),": This topic is used to store offsets for Kafka Connect.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},Object(n.b)("strong",{parentName:"p"},"connect-status"),": This topic will store status updates of connectors and tasks.")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("p",{parentName:"li"},"Using IBM Event Streams CLI, the topics are created via the commands like:"))),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"# log to the kubernetes cluster:\ncloudctl login -a https://icp-console.apps.green.ocp.csplab.local\n# initialize the event streams CLI plugin\ncloudctl es init\n# Create the Kafka topic\ncloudctl es topic-create -n connect-configs -p 1 -r 3 -c cleanup.policy=compact\ncloudctl es topic-create -n connect-offsets -p 25 -r 3 -c cleanup.policy=compact\ncloudctl es topic-create -n connect-status -p 5 -r 3 -c cleanup.policy=compact\ncloudctl es topics\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"When using a kafka cluster managed with Strimzi topic operator you can use the topic definitions in ",Object(n.b)("a",c({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc/blob/master/docker/kafka-connect"}),"the folder"),":")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"oc apply -f strimzi-connect-config-topic.yaml\noc apply -f strimzi-connect-offsets-topic.yaml\noc apply -f strimzi-connect-status-topic.yaml\n")),Object(n.b)("p",null,"The connector configuration needs to specify some other properties as explained in the ",Object(n.b)("a",c({parentName:"p"},{href:"https://kafka.apache.org/documentation/#connectconfigs"}),"kafka documentation"),"):"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"group.id to specify the connect cluster name."),Object(n.b)("li",{parentName:"ul"},"key and value converters."),Object(n.b)("li",{parentName:"ul"},"replication factors and topic name for the three needed topics, if Kafka connect is enabled to create topics on the cluster.")),Object(n.b)("p",null,"When using Event Streams as kafka cluster, add the ",Object(n.b)("inlineCode",{parentName:"p"},"sasl")," properties as described in the ",Object(n.b)("a",c({parentName:"p"},{href:"https://cloud.ibm.com/docs/services/EventStreams?topic=eventstreams-kafka_connect#distributed_worker"}),"product documentation"),"."),Object(n.b)("p",null,"With Event Streams as part of the Cloud Pak for integration, the administration console explains the steps to setup connectors, get distributed configuration and how to add connectors."),Object(n.b)("p",null,"See ",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc/blob/master/docker/kafka-connect/config/connect-distributed.properties"}),"this properties file")," as an example."),Object(n.b)("p",null,"To start a Kafka connect in distributed mode locally, connected to Event Streams deployed on-premise use the following command (the entry point in the dockerfile use the connect-distributed mode script):"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"docker run -v $(pwd)/config:/opt/kafka/config -p 8083:8083 ibmcase/kafkaconnect:0.0.1\n")),Object(n.b)("p",null,"To illustrate the Kafka Connect distributed mode, we will add a source connector from a Mongo DB data source using ",Object(n.b)("a",c({parentName:"p"},{href:"https://www.mongodb.com/kafka-connector"}),"this connector"),"."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1036px"}},"\n      ",Object(n.b)("span",c({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB20lEQVQoz2WSS2/TQBSF/Uf5BazY0RU/gA0SG4TEggWL7soKIRYRBKUPl1aQkKjNo5CEpE1iO4+J7fHY83HHaaBpr3TlGd87555zZjxT5IClKAqstdyNNDOoOGG1jrlXIi9s2Z/LcZfb8Kbxglm4JI41V8OQg1qf/eqAk+YIK51qnZAkCf3hmI/+b94fDamc9ghmIcuVRWZJTyEYSUnKmwUB7c6Q3EDV77H3usaTV8e8OfDJtRWWm8lfaj6PX3zm0fMTnr78QPNnR9hvlaQc1+vEaYrnpiu1Kgvdqx61agX/6Cvfz09lImi90XpzPaJ92aUrw/u/2oRhwNaFzBhG0ylGFHn/xIsnvUaLH/UG9UZTWHeIE0u0EJaplUPIHuYL5CDl3pic++E5Y90k55deKRKdkaRajDZEUUYQafEpZalSVpJurdaZ+KflUooSpMS4TW/7oySJk6jFk5z5OuXPxAFtXsGmRy5BTB2FMddBLEzNQ8DtYutFezDj8OKGZ/u+5Ddaw6ismXzDptoas/fuhLeVi9un9h+wlLzDUBpUYphEirPLAe1RRKxz7vb0xxM+HZ5z1uzIWyx2ag8A3ddJzoWpdXJsTpZlpOKrdilrpRRBMGOxmIvPux66+AsdPPnol0i/gAAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",c({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Mongo source ",title:"Mongo source ",src:"/refarch-eda/static/254a8415cdb514248a00723294bc8030/edd00/kconnect-mongo.png",srcSet:["/refarch-eda/static/254a8415cdb514248a00723294bc8030/7fc1e/kconnect-mongo.png 288w","/refarch-eda/static/254a8415cdb514248a00723294bc8030/a5df1/kconnect-mongo.png 576w","/refarch-eda/static/254a8415cdb514248a00723294bc8030/edd00/kconnect-mongo.png 1036w"],sizes:"(max-width: 1036px) 100vw, 1036px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"When using as a source, the connector publishes data changes from MongoDB into Kafka topics for streaming to consuming apps. Data is captured via Change Streams within the MongoDB cluster and published into Kafka topics. The installation of a connector is done by adding the jars from the connector into the plugin path (",Object(n.b)("inlineCode",{parentName:"p"},"/opt/connectors"),") as defined in the connector properties. In the case of mongodb kafka connector the manual installation instructions are in ",Object(n.b)("a",c({parentName:"p"},{href:"https://docs.mongodb.com/kafka-connector/current/kafka-installation/"}),"here"),". The download page includes an uber jar."),Object(n.b)("p",null,"As we run the kakfa connect as docker container, the approach is to build a new docker image based one of the Kafka image publicly available."),Object(n.b)("p",null,"To define and start a connector, you do a POST to the REST API."),Object(n.b)("h2",null,"Verifying the connectors via the REST api"),Object(n.b)("p",null,"The documentation about the REST APIs for the distributed connector is in ",Object(n.b)("a",c({parentName:"p"},{href:"https://docs.confluent.io/current/connect/references/restapi.html"}),"this site"),"."),Object(n.b)("p",null,"For example the ",Object(n.b)("a",c({parentName:"p"},{href:"http://localhost:8083/connectors"}),"http://localhost:8083/connectors")," is the base URL when running locally."),Object(n.b)("h2",null,"Deploy the Kafka connect as a service within Openshift cluster"),Object(n.b)("p",null,"When you use IBM Event Streams on Openshift, you can deploy the IBM kafka connector environment as Docker containers, and define the needed ",Object(n.b)("inlineCode",{parentName:"p"},"connect-*")," topics as explained in previous section. The product documentation describes how to do that."),Object(n.b)("p",null,"Another approach is to use ",Object(n.b)("a",c({parentName:"p"},{href:"https://strimzi.io/"}),"Strimzi")," operator."),Object(n.b)("p",null,"To Be done!"),Object(n.b)("h2",null,"Running with local kafka cluster"),Object(n.b)("p",null,"We are using a local kafka cluster started with docker-compose as defined in the compose file ",Object(n.b)("a",c({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc/blob/master/docker/backbone-compose.yml"}),"here"),"."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The docker network should be ",Object(n.b)("inlineCode",{parentName:"li"},"kafkanet"),", if not already created do the following")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"docker network create kafkanet\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Start the kafka broker (bitnami distribution) and zookeeper node using the command below under the ",Object(n.b)("inlineCode",{parentName:"li"},"refarch-kc/docker")," folder:")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"docker-compose -f backbone-compose.yml up -d\n")),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Start a container with kafka code, to run a standalone connector: you need to use a worker configuration and a connector properties files. Those files will be mounted under the /home folder:")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"docker run -ti  -rm --name kconnect -v $(pwd):/home --network kafkanet -p 8083:8083 bitnami/kafka:2 bash\n")),Object(n.b)("p",null,"Need to map the port 8083, to access the REST APIs."),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Inside the container starts the standalone connector:")),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),"cd /opt/bitnami/kafka\n./bin/connect-standalone.sh /home/kafka-connect/worker-standalone.properties /home/kafka-connect/file-source.properties\n")),Object(n.b)("p",null,"The above file configures a file reader to source the ",Object(n.b)("inlineCode",{parentName:"p"},"access_log.txt")," file to the ",Object(n.b)("inlineCode",{parentName:"p"},"clickstream")," topic:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-properties"}),"name=local-file-source\nconnector.class=FileStreamSource\ntasks.max=1\nfile=/home/kafka-connect/access_log.txt\ntopic=clickstream\n")),Object(n.b)("p",null,"The standalone connector worker configuration specifies where to connect, and what converters to use:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-properties"}),"bootstrap.servers=kafka1:9092\nkey.converter=org.apache.kafka.connect.json.JsonConverter\nvalue.converter=org.apache.kafka.connect.json.JsonConverter\n\n# Local storage file for offset data\noffset.storage.file.filename=/tmp/connect.offsets\n")),Object(n.b)("p",null,"The execution trace shows the producer id"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-log"}),"INFO [Producer clientId=connector-producer-local-file-source-0] Cluster ID: tj8y0hiZSYWHB9vLHGP1Ew (org.apache.kafka.clients.Metadata:261)\n")),Object(n.b)("p",null,"To validate the data are well published run another container with the consumer console tool:"),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-shell"}),'docker run -ti  --name sinktrace --rm  --network kafkanet bitnami/kafka:2 bash -c "\n/opt/bitnami/kafka/bin/kafka-console-consumer.sh --bootstrap-server kafka1:9092 --topic clickstream --from-beginning"\n')),Object(n.b)("p",null,"As the Json converter was used the trace show the message was wrapped into a json document with schema and payload."),Object(n.b)("pre",null,Object(n.b)("code",c({parentName:"pre"},{className:"language-json"}),'{"schema":{"type":"string","optional":false},"payload":"46.166.139.20 - - [01/Dec/2015:23:22:09 +0000] \\"POST /xmlrpc.php HTTP/1.0\\" 200 370 \\"-\\" \\"Mozilla/4.0 (compatible: MSIE 7.0; Windows NT 6.0)\\""}\n')),Object(n.b)("h2",null,"Further Readings"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"https://kafka.apache.org/documentation/#connect"}),"Apache Kafka connect documentation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"https://docs.confluent.io/current/connect/index.html"}),"Confluent Connector Documentation")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"https://ibm.github.io/event-streams/connecting/connectors/"}),"IBM Event Streams Connectors")," or ",Object(n.b)("a",c({parentName:"li"},{href:"https://ibm.github.io/event-streams/connectors/"}),"the list of supported connectors")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",c({parentName:"li"},{href:"https://github.com/mongodb/mongo-kafka"}),"MongoDB Connector for Apache Kafka"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-technology-kafka-connect-index-mdx-78cdb4e5027ec7b18357.js.map
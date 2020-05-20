(window.webpackJsonp=window.webpackJsonp||[]).push([[44],{AF3R:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return m}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),o=a("013z");a("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var s={},i=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(r.b)("div",t)}},c=i("AnchorLinks"),l=i("AnchorLink"),p={_frontmatter:s},b=o.a;function m(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(r.b)(b,n({},p,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)(c,{mdxType:"AnchorLinks"},Object(r.b)(l,{mdxType:"AnchorLink"},"Kafka Producers"),Object(r.b)(l,{mdxType:"AnchorLink"},"Kafka Consumers")),Object(r.b)("h1",null,"Kafka Producers"),Object(r.b)("p",null,"A producer is a thread safe kafka client API that publishes records to the cluster. It uses buffers, thread pool, and serializers to send data. They are stateless: the consumers is responsible to manage the offsets of the message they read. When the producer connects via the initial bootstrap connection, it gets the metadata about the topic - partition and the leader broker to connect to. The assignment of messages to partition is done following different algorithms: round-robin if there is no key specified, using the hash code of the key, or custom defined."),Object(r.b)("p",null,"We recommend reading ",Object(r.b)("a",n({parentName:"p"},{href:"https://ibm.github.io/event-streams/about/producing-messages/"}),"IBM Event streams producer guidelines")," to understand how producers work with its configuration parameters."),Object(r.b)("h2",null,"Design considerations"),Object(r.b)("p",null,"When developing a record producer you need to assess the followings:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"What is the event payload to send? Is is an root aggregate, as domain driven design concept, with value objects that needs to be kept in sequence to be used as event sourcing? or order does not matter? Remember that when order is important, messages need to go to the same topic. When multiple partitions are used, the messages with the same key will go to the same partition to guaranty the order. See related discussions ",Object(r.b)("a",n({parentName:"p"},{href:"https://www.confluent.io/blog/put-several-event-types-kafka-topic/"}),"from Martin Kleppmann on confluent web site"),". Also to be exhaustive, it is possible to get a producer doing retries that could generate duplicate records as acknowledges may take time to come: within a batch of n records, if the producer did not get all the n acknowledges on time, it may resend the batch. This is where ‘idempotence’ becomes important (see later section).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Is there a strong requirement to manage the schema definition? If using one topic to manage all events about a business entity, then be sure to support a flexible ",Object(r.b)("a",n({parentName:"p"},{href:"https://avro.apache.org/docs/1.8.1/spec.html"}),"avro schema"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"What is the expected throughput to send events? Event size * average throughput combined with the expected latency help to compute buffer size. By default, the buffer size is set at 32Mb, but can be configured with ",Object(r.b)("inlineCode",{parentName:"p"},"buffer.memory")," property. (See ",Object(r.b)("a",n({parentName:"p"},{href:"https://kafka.apache.org/10/javadoc/org/apache/kafka/clients/producer/ProducerConfig.html"}),"producer configuration API"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Can the producer batches events together to send them in batch over one send operation? By design kafka producers batch events.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Is there a risk for loosing communication? Tune the RETRIES_CONFIG and buffer size, and ensure to have at least 3 or even better 5, brokers within the cluster to maintain quorum in case of one failure. The client API is implemented to support reconnection.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"When deploying kafka on Kubernetes, it is important to proxy the broker URLs with a proxy server outside of kubernetes. The HAProxy needs to scale, and as the kafka traffic may be important, it may make sense to have a dedicated HAProxy for clients to brokers traffic.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Assess ",Object(r.b)("em",{parentName:"p"},"exactly once")," delivery requirement. Look at idempotent producer: retries will not introduce duplicate records (see ",Object(r.b)("a",n({parentName:"p"},{href:"#how-to-support-exactly-once-delivery"}),"section")," below).")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Partitions help to scale the consumer processing of messages, but it also helps the producer to be more efficient as it can send message in parallel to different partition.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Where the event timestamp comes from? Should the producer send operation set it or is it loaded from external data? Remember that ",Object(r.b)("inlineCode",{parentName:"p"},"LogAppendTime")," is considered to be processing time, and ",Object(r.b)("inlineCode",{parentName:"p"},"CreateTime")," is considered to be event time."))),Object(r.b)("h2",null,"Typical producer code structure"),Object(r.b)("p",null,"The producer code, using java or python API, does the following steps:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"define producer properties"),Object(r.b)("li",{parentName:"ul"},"create a producer instance"),Object(r.b)("li",{parentName:"ul"},"send event records and get resulting metadata.")),Object(r.b)("p",null,"Producers are thread safe. The send() operation is asynchronous and returns immediately once record has been stored in the buffer of records, and it is possible to add a callback to process the broker acknowledgement."),Object(r.b)("p",null,Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/de10317023c1dee9fbf1e948d1389472db32ce1a/order-command-ms/src/main/java/ibm/gse/orderms/infrastructure/kafka/OrderEventProducer.java#L58-L82"}),"Here is an example of producer code.")),Object(r.b)("h2",null,"Kafka useful Producer APIs"),Object(r.b)("p",null,"Here is a list of common API to use in your producer and consumer code."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://kafka.apache.org/11/javadoc/org/apache/kafka/clients/producer/KafkaProducer.html"}),"KafkaProducer")," A Kafka client that publishes records to the Kafka cluster.  The send method is asynchronous. A producer is thread safe so we can have per topic to interface."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://kafka.apache.org/11/javadoc/org/apache/kafka/clients/producer/ProducerRecord.html"}),"ProducerRecord")," to be published to a topic"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://kafka.apache.org/11/javadoc/org/apache/kafka/clients/producer/RecordMetadata.html"}),"RecordMetadata")," metadata for a record that has been acknowledged by the server.")),Object(r.b)("h2",null,"Properties to consider"),Object(r.b)("p",null,"The following properties are helpful to tune at each topic and producer and will vary depending on the requirements:  "),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",n({parentName:"tr"},{align:null}),"Properties"),Object(r.b)("th",n({parentName:"tr"},{align:null}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",n({parentName:"tr"},{align:null}),"BOOTSTRAP_SERVERS_CONFIG"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"A comma-separated list of host:port values for all the brokers deployed. So producer may use any brokers")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",n({parentName:"tr"},{align:null}),"KEY_SERIALIZER_CLASS_CONFIG and VALUE_SERIALIZER_CLASS_CONFIG"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"convert the keys and values into byte arrays. Using default String serializer should be a good solution for Json payload. For streaming app, use customer serializer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",n({parentName:"tr"},{align:null}),"ACKS_CONFIG"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"specifies the minimum number of acknowledgments from a broker that the producer will wait for before considering a record send completed. Values = all, 0, and 1. 0 is for fire and forget.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",n({parentName:"tr"},{align:null}),"RETRIES_CONFIG"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"specifies the number of times to attempt to resend a batch of events.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",n({parentName:"tr"},{align:null}),"ENABLE_IDEMPOTENCE_CONFIG"),Object(r.b)("td",n({parentName:"tr"},{align:null}),"Set to true, the number of retries will be maximized, and the acks will be set to ",Object(r.b)("inlineCode",{parentName:"td"},"All"),".")))),Object(r.b)("h2",null,"How to support exactly once delivery"),Object(r.b)("p",null,"Knowing that exactly once delivery is one of the hardest problems to solve in distributed systems, how kafka does it?. Broker can fail or a network may respond slowly while a producer is trying to send events."),Object(r.b)("p",null,"Producer can set acknowledge level to control the delivery semantic to ensure not loosing data. The following semantic is supported:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"At least once"),": means the producer set ACKS_CONFIG=1 and get an acknowledgement message when the message sent, has been written to at least one time in the cluster (assume replicas = 3).  If the ack is not received, the producer may retry, which may generate duplicate records in case the broker stops after saving to the topic and before sending back the acknowledgement message."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"At most semantic"),": means the producer will not do retry in case of no acknowledge received. It may create log and compensation, but the message may be lost."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"Exactly once")," means even if the producer sends the message twice the system will send only one message to the consumer. Once the consumer commits the read offset, it will not receive the message again, even if it restarts. Consumer offset needs to be in sync with produced event.")),Object(r.b)("p",null,"At the best case scenario, with a replica factor set to 3, a broker responding on time to the producer, and with a consumer committing its offset and reading from the last committed offset it is possible to get only one message end to end."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABrUlEQVQoz31Si27aQBD0//9O2jQ0xGAoBGSM2kQ0VSORRJFaATb23fl5r+meedStoqy03tV6d25v5jxrLZQ2qGsJzkvkosYuzpAkDGXZQIgKeVGhov9SKjSNixJaKVijYbSmaODMYXnGWBhKGhpIthzZPsc+cVGgKCukiSDQgvIaGeNnr8oSRjbQBO5Az4DuI5VuQdsiDqbpVH082ZmxeNfscd47oViaECLHZrNDvEmx3cbt9aqKNssY0SGIjhya6HHuck6bunpd1383jF85Nr8S8KzAMvyKxfwbAn+C2WQOq4DV3QNm0whfRjMM+gFyVkFQ7/BmjCi8g38dtD3WHAF5XKIgIWSjEM4XuPzQw8eLK4yHE1iiZnX/Hb1P1+h/9uH3ByiLmvpL3FA+8ANcXfbwsPpxvrrX5eHp+QnhIsQiivD487Gtvbw8IxgFGI3HWC6XUKSuVBIR9QyDANPbaZuv12uipzqIcvL/7aRel/S3hHDPyIEZEvEfwK5LZZCkArtkT++wICF0u91b3jWvu90hP8Q9y/E75gTKkGYpGOet82NkzNUzepOsM2vxB6jt+pKYlqwGAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"exactly one 0",title:"exactly one 0",src:"/refarch-eda/static/91a082d73f849129b05ec8a05f6507fe/3cbba/exactly-one-0.png",srcSet:["/refarch-eda/static/91a082d73f849129b05ec8a05f6507fe/7fc1e/exactly-one-0.png 288w","/refarch-eda/static/91a082d73f849129b05ec8a05f6507fe/a5df1/exactly-one-0.png 576w","/refarch-eda/static/91a082d73f849129b05ec8a05f6507fe/3cbba/exactly-one-0.png 1152w","/refarch-eda/static/91a082d73f849129b05ec8a05f6507fe/52c65/exactly-one-0.png 1614w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Sometime the brokers will not send acknowledge in expected time, and the producer may decide to send the records again, generating duplicate…"),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.611111111111114%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAABt0lEQVQoz3VSYVPbMAzN//9FHU3TQhpaoFegty8ZhS/dGLQkdRInsR3bb7JTehm76U4XS4psvfcUGGPQaQMpO/BKoKkl8rxElhUQQvm4aaWvK6VO3kF3HSz1ercGzqy1CDRdpo2FaBUObwzZocTH3n0LVLxB9lGCsQpNI3BkBZ3JixI15zBSQCsJQ5efL3QTqk7DUDA0Fz09bSGk9LH5u/yP2VN/YNEfDHVIgsh5DZZVOLzneP31RrAJct3QhC3VJbSmxx1NBFsIQVRIdDTQecLstcL+d46S1djcf8cyWSOOFohnCUD/bdNnLJI7yq8QjafIDwyq1VjdrHF384AkXlLtFkr2sIPjOwcvWnRSY726x/giwsUoxDSaETcWP9ItwnGE2fQK428hjhnz+eXi1ucm9Mj1fHGGHtgBdy8vz4jnc8zjBJvNxud2ux3CMPSeXCfgNff5x8cHjEYjhJMJLq8ukaYp0cWdKMSi7fF/ulPeOO9Mz1fXr4zjr/8HPucEc/mmaVBVla8H9iSf/aKyU12pXoCh8p+P/s/OkIcTuta8qPFzXyA70pLnOXLGaP8Kf1aDvfvqfwDO3vqT6cfj4QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"exactly one 1",title:"exactly one 1",src:"/refarch-eda/static/143eb3c587d9775e7baf92cfcc8ba755/3cbba/exactly-one-1.png",srcSet:["/refarch-eda/static/143eb3c587d9775e7baf92cfcc8ba755/7fc1e/exactly-one-1.png 288w","/refarch-eda/static/143eb3c587d9775e7baf92cfcc8ba755/a5df1/exactly-one-1.png 576w","/refarch-eda/static/143eb3c587d9775e7baf92cfcc8ba755/3cbba/exactly-one-1.png 1152w","/refarch-eda/static/143eb3c587d9775e7baf92cfcc8ba755/29764/exactly-one-1.png 1646w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"To avoid duplicate message at the broker level, when acknowledge is set to ALL, the producer can also set idempotence flag: ENABLE_IDEMPOTENCE_CONFIG = true. With the idempotence property, the record sent, has a sequence number and a producer id, so that the broker keeps the last sequence number per producer and per partition. If a message is received with a lower sequence number, it means a producer is doing some retries on record already processed, so the broker will drop it, to avoid having duplicate records per partition."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"44.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAABYlAAAWJQFJUiTwAAABj0lEQVQoz2VSaVPCMBDt//89jlABRUE+OCjgUYazMjoMlJbebZIez02gKrAz291Nmpe3L6sVRYEsL5CmHFHIEPgxbNujWiCOGeKEgYsMQgjlWXaaSyvLEpVpOYHlBBqHKVw7hOdG8PYhfP+QS1A/iPC9XmOz3WJjWRQtWLaN7W5He4HyOI7BOYdG+AR4uEF+i2M+mU6JXaJyQUzyPFeszk12WBBDuS9zLY04WMKJYQLTXGE+HGP8/AGXWC4Xn3h/G2M4eMVibpIcxPRrDXO5wmJmwtruLlu2Vh5cJ4Rt7XHbuEe72UX9SkdCek6MGR7aPTT0Fgb9oTrQf3pB+66Lm3oLBl1WAVauZVmuFtM0RadDP+oNPHZ7YPRI5tLE9XUNuq7DMA6HDcNArVZDs9HEaDgirf1fhgrwfyEEtc8ZaSZQkh6cMYRhiIBEZ5RLYyxVdRRFcByHJsJW2v0BFuWF0HLFJ033nqderhJfjomMVXsnZ471CcMqj2j2Nk6AvR/A8z01Forp0V26SMZzcBl/AMtHruidQEg4AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"Exactly once",title:"Exactly once",src:"/refarch-eda/static/395f6977ce4886689727b14dda3057ab/3cbba/exactly-one-2.png",srcSet:["/refarch-eda/static/395f6977ce4886689727b14dda3057ab/7fc1e/exactly-one-2.png 288w","/refarch-eda/static/395f6977ce4886689727b14dda3057ab/a5df1/exactly-one-2.png 576w","/refarch-eda/static/395f6977ce4886689727b14dda3057ab/3cbba/exactly-one-2.png 1152w","/refarch-eda/static/395f6977ce4886689727b14dda3057ab/0b124/exactly-one-2.png 1728w","/refarch-eda/static/395f6977ce4886689727b14dda3057ab/22681/exactly-one-2.png 1840w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"The sequence number is persisted in a log so even in case of broker leader failure, the new leader will have a good view of the states of the system."),Object(r.b)("blockquote",null,Object(r.b)("p",{parentName:"blockquote"},"The replication mechanism guarantees that, when a message is written to the leader replica, it will be replicated to all available replicas.\nAs soon as you want to get acknowledge of all replicates, it is obvious to set idempotence to true. It does not impact performance.")),Object(r.b)("p",null,"To add to this discussion, as topic may have multiple partitions, kafka supports atomic writes to all partitions, so that all records are saved or none of them are visible to consumers. This transaction control is done by using the producer transactional API, and a unique transaction identifier is added to the message sent to keep integrated state. Here is an example of such configuration that can be done in a producer constructor method:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{className:"language-java"}),'producerProps.put("enable.idempotence", "true");\nproducerProps.put("transactional.id", "prod-1");\nkafkaProducer.initTransactions()\n')),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"initTransactions()")," registers the producer with the broker as one that can use transaction, identifying it by its ",Object(r.b)("inlineCode",{parentName:"p"},"transactional.id")," and a sequence number, or epoch."),Object(r.b)("p",null,"In case of multiple partitions, the broker will store a list of all updated partitions for a given transaction."),Object(r.b)("p",null,"See the ",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/53bbb8cdeac413883ca2ccf521eb0797a43f45a3/order-command-ms/src/main/java/ibm/gse/orderms/infrastructure/kafka/OrderCommandProducer.java#L46"}),"code in order command")," microservice."),Object(r.b)("p",null,"The consumer is also interested to configure the reading of the transactional messages by defining the isolation level. Consumer waits to read transactional messages until the associated transaction has been committed. Here is an example of consumer code and configuration"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{className:"language-java"}),'consumerProps.put("enable.auto.commit", "false");\nconsumerProps.put("isolation.level", "read_committed");\n')),Object(r.b)("p",null,"With ",Object(r.b)("inlineCode",{parentName:"p"},"read_committed"),", no message that was written to the input topic in the same transaction will be read by this consumer until message replicas are all written."),Object(r.b)("p",null,"The consumer commits its offset with code, and specifies the last offset to read."),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{className:"language-java"}),'offsetsToCommit.put(partition, new OffsetAndMetadata(offset + 1))\nproducer.sendOffsetsToTransaction(offsetsToCommit, "order-group-id");\n')),Object(r.b)("p",null,"The producer then commits the transaction."),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{className:"language-java"}),"try {\n    kafkaProducer.beginTransaction();\n    ProducerRecord<String, String> record = new ProducerRecord<>(ApplicationConfig.ORDER_COMMAND_TOPIC, key, value);\n    Future<RecordMetadata> send = kafkaProducer.send(record);\n    send.get(ApplicationConfig.PRODUCER_TIMEOUT_SECS, TimeUnit.SECONDS);\n    kafkaProducer.commitTransaction();\n} catch (KafkaException e){\n    kafkaProducer.abortTransaction();\n}\n")),Object(r.b)("p",null,"There is an interesting ",Object(r.b)("a",n({parentName:"p"},{href:"https://www.baeldung.com/kafka-exactly-once"}),"article")," from the Baeldung team about exactly once processing in kafka with code example which we have used to implement the order processing in our ",Object(r.b)("a",n({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/"}),"Reefer Container Shipment reference application")," and explained ",Object(r.b)("a",n({parentName:"p"},{href:"https://ibm-cloud-architecture.github.io/refarch-kc/orders/order/"}),"here")),Object(r.b)("h2",null,"Code Examples"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms"}),"Order management with CQRS in Java")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-container-ms"}),"Springboot with kafka template")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/jbcodeforce/microprofile-event-driven-microservice-template/"}),"Event driven microservice template"))),Object(r.b)("h2",null,"More readings"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"http://cloudurable.com/blog/kafka-tutorial-kafka-producer-advanced-java-examples/index.html"}),"Creating advanced kafka producer in java - Cloudurable")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://www.confluent.io/blog/exactly-once-semantics-are-possible-heres-how-apache-kafka-does-it/"}),"Confluent blog: Exactly-once Semantics are Possible: Here’s How Kafka Does it"))),Object(r.b)("h1",null,"Kafka Consumers"),Object(r.b)("p",null,"This note includes some quick summary of different practices we discovered and studied over time. It may be useful for beginner or seasoned developers who want a refresh after some time far away from Kafka…"),Object(r.b)("h2",null,"Important concepts"),Object(r.b)("p",null,"Consumers belong to ",Object(r.b)("strong",{parentName:"p"},"consumer groups"),". You specify the group name as part of the consumer connection parameters using the ",Object(r.b)("inlineCode",{parentName:"p"},"group.id")," configuration:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{className:"language-java"}),"  properties.put(ConsumerConfig.GROUP_ID_CONFIG,  groupid);\n")),Object(r.b)("p",null,"Consumer groups are grouping consumers to cooperate to consume messages from one or more topic and topic partition. Consumers can run in separate hosts and separate processes. The figure below represents 2 consumer processes belonging to one consumer group. Consumer 1 is getting data from 2 partitions, while consumer 2 is getting from one partition."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1042px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.44444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAABYlAAAWJQFJUiTwAAACjklEQVQ4y2VTTWsUQRDdX+ov8CDiwYsIHtSbKAZBQRSCCIIE0ZPoQdSoGMkmKvkwu8nuzs7O7s539/R098w8q7qTEONA7dbUdL169aq6B3pE1SKYm1ObkM2WBvPEYh6TJQajyOIwtBhOLcaRN35nG80snbcMhR7/RJT0ZUtgvS/xdVvic19gZyAxHFcYjCoMRxKb+xrfdww2dg22Dww297TzOfZrYLC1r9B1nQfUtkMuWpSyRVo0iHNvy6xBcuwvyJ8uG8zTBlnZuvNx3iKMG+cXlOsYMqqQFpKM/xepxZKMWbMfLgzCJbdlMCUp0tyiUhaFsM7ncyXlFaWFNi16bdthFNYYBAY/djW2/mjsjw3GBDAYK8QZF/Dv7AeRpnjttGWdJ5FxBI6mGllu0LMNUaeEey8VrjwQuP2swoVbJd5taESUUJTEMFI4GBF4UrtkBuHk6UyRzgppWjumeUGATdNRJY0PfYO1jxpv1jVW1hR+DpiVRl2TjpmfelVZ0tS6uJCNI8KSyMq3njEgt8xtsIYJMeBqSmoajk98+Frh+hOJG08lrj6S+PabmMfGFQmjGocB5WTaFfwHMCOARUwtJdpb6gFX39YO8PKKwKX7gtbES8EElnQ+mNWQQmNBO+s0PAHkFlgDtlIYx3Aw0WibBoLeVWVgtHWFudCrT77Y8/feWCIhzwCyHtNZ5QYwmys32WFArecak7AiJsp9W/CtCTXuvKhw7bHAzVWJi3dLmkGNmtbpFPD8I1WLg/H/8UI0NGXSvAaSokNc0IWoOrf8py0fBcrdW79zfpK8xHuHtCq5j53E/R76/eRlzkvrijDrlAH5pjDyImZhjy3mofgD5+Mxx2nCc/LPGg9S0Yr9Bc5FHdKidYzsAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"consumer group",title:"consumer group",src:"/refarch-eda/static/9b2e44a69c651fd2bcee2f35ca5e3e7b/e65ee/consumer-group.png",srcSet:["/refarch-eda/static/9b2e44a69c651fd2bcee2f35ca5e3e7b/7fc1e/consumer-group.png 288w","/refarch-eda/static/9b2e44a69c651fd2bcee2f35ca5e3e7b/a5df1/consumer-group.png 576w","/refarch-eda/static/9b2e44a69c651fd2bcee2f35ca5e3e7b/e65ee/consumer-group.png 1042w"],sizes:"(max-width: 1042px) 100vw, 1042px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Organized in cluster the coordinator servers are responsible for assigning partitions to the consumers in the group. There is always at least one consumer per partition. If a topic has multiple partitions and there is only one consumer in the consumer group, it will get all the messages from all the partitions."),Object(r.b)("p",null,"Membership in a consumer group is maintained dynamically. When a consumer fails, the partitions assigned to it will be reassigned to other consumers in the same group. When a new consumer joins the group, partitions will be moved from existing consumers to the new one. Group rebalancing is also used when new partitions are added to one of the subscribed topics. The group will automatically detect the new partitions through periodic metadata refreshes and assign them to members of the group."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",n({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"51.388888888888886%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABYlAAAWJQFJUiTwAAAB2ElEQVQoz1VSaXObMBTk//+ifm0802ka10nqYgdjjAFjDJj7EIek7ROEJtHMjmaennb3HZqUEuqoe8FyPscWCCERxAPOfg/n2uNMcIMBXtAjLTi0r0Qzmfo0jAvxh4A6rJPYHlr8fKnw+FpjvS2x0Qu8HctJQPuczDkwEspGIkoFkeIdkmICRS0QphzffzdYPbdYbRj0QwLjeMWbGcEPB2hpKZCQ1XsuYHoMz2aDrdVAP9V4MSroVg2HSioqgVvCcYnG/4QPRPi6T6EbASHC5UaEI5/LUwjog3kZYV1HuPRouh0JMHjhiGs8Is5ImLDaNPj2Y4Z+yGCdY5inBJ4i7AeJBS5Z3p077J0ONpFWVOItE7BDjnFchgfsTh3WO4b1nsGgfDUgdStRLadS0pIjo9K9kB7IleEyuHeBXmBylbYSHZ/7PFBFQSVhZxJngpVInFKJkGJRLaFxSuBixi2lcn1aCeqZQ2uwtTvcKanqJe40qEShVSQCxwkSadUhK0rUbUvCgKacJfk8FMtn+HNs8ffUTMPY2y0yhkk5bmYHbi7x6An8Ijz5koZUwLv4uIZ3EsPXtWl7IK/ltDYF3Q37cN9Qj5t3p0Ys4FBvHSL3Egb7lsOJahIF/gFf9vlwL3VA+QAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",n({parentName:"span"},{className:"gatsby-resp-image-image",alt:"consumer groups",title:"consumer groups",src:"/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/3cbba/consumer-groups.png",srcSet:["/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/7fc1e/consumer-groups.png 288w","/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/a5df1/consumer-groups.png 576w","/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/3cbba/consumer-groups.png 1152w","/refarch-eda/static/75701f1ef05216ee0b2dab14e2541f68/6e3b3/consumer-groups.png 1252w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"Implementing a Topic consumer is using the kafka ",Object(r.b)("a",n({parentName:"p"},{href:"https://kafka.apache.org/24/javadoc/?org/apache/kafka/clients/consumer/KafkaConsumer.html"}),"KafkaConsumer class")," which the API documentation is a must read."),Object(r.b)("p",null,"In it interesting to note that:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"To support a queue processing like other integration messaging systems are doing, you need to have all the consumers assigned to a single consumer group, so that each record delivery would be balanced over the group like with a queue."),Object(r.b)("li",{parentName:"ul"},"To support pub/sub like other messaging systems, each consumer would have its own consumer group, and subscribes to all the records published to the topic.")),Object(r.b)("p",null,"The implementation is simple for a single thread consumer, and the code structure looks like:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"prepare the consumer properties"),Object(r.b)("li",{parentName:"ul"},"create an instance of KafkaConsumer to connect to a topic"),Object(r.b)("li",{parentName:"ul"},"loop on polling events: the consumer subscribes to a set of topics and ensures its liveness with the broker via the poll API"),Object(r.b)("li",{parentName:"ul"},"process the ConsumerRecords and commit the offset by code or use the autocommit attribute of the consumer")),Object(r.b)("p",null,"As long as the consumer continues to call poll(), it will stay in the group and continue to receive messages from the partitions it was assigned. When the consumer does not send heartbeats for a duration of ",Object(r.b)("inlineCode",{parentName:"p"},"session.timeout.ms"),", then it is considered dead and its partitions will be reassigned."),Object(r.b)("p",null,"Examples of Java consumers can be found in ",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/master/order-command-ms/src/main/java/ibm/gse/orderms/infrastructure/kafka/OrderEventAgent.java"}),"the order management microservice project")," under the order-command-ms folder."),Object(r.b)("p",null,"We are proposing a deep dive study on this manual offset commit in ",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/jbcodeforce/quarkus-event-driven-consumer-microservice-template"}),"this consumer code")," that persists events to cassandra.\nExample of Javascript implementation is in ",Object(r.b)("a",n({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/blob/master/voyages-ms/server/utils/kafka.js"}),"this repository/folder")),Object(r.b)("p",null,"But the complexity comes from the offset management and multithreading needs. So the following important considerations need to be addressed while implementing a consumer."),Object(r.b)("h2",null,"Assess number of consumers needed"),Object(r.b)("p",null,"The KafkaConsumer is not thread safe so it is recommended to run in a unique thread. But if needed you can implement a multi-threads solution, but as each thread will open a TCP connection to the Kafka broker, be sure to close the connection to avoid memory leak. The alternate is to start n processes (JVM process)."),Object(r.b)("p",null,"If you need multiple consumers running in parallel to scale horizontally, you have to define multiple partitions while configuring the topic and use fine-grained control over offset persistence. You’ll use one consumer per partition of a topic.\nThis consumer-per-partition pattern maximizes throughput. When consumers run in parallel and you use multiple threads per consumer you need to be sure the total number of threads across all instances do not exceed the total number of partitions in the topic."),Object(r.b)("p",null,"Also, a consumer can subscribe to multiple topics. The brokers are doing rebalancing of the assignment of topic-partition to a consumer that belong to a group. When creating a new consumer you can specify the group id in the options."),Object(r.b)("h2",null,"Offset management"),Object(r.b)("p",null,"Recall that offset is just a numeric identifier of a consumer position of the last record read within a partition. Consumers periodically need to commit the offsets of messages they have received to show they have processed the messages and in case of failure from where they should reconnect. It is possible to commit by calling API or by setting some properties at the consumer creation level to enable autocommit offset."),Object(r.b)("p",null,"When doing manual offset commit, there are two types of approaches:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"offsets—synchronous"),Object(r.b)("li",{parentName:"ul"},"asynchronous")),Object(r.b)("p",null,"As soon as you are coding manual commit, it is strongly recommended to implement the ConsumerRebalanceListener interface to be able to do the state modifications when the topic is rebalanced."),Object(r.b)("p",null,"When dealing with heavy load storing offset in zookeeper is non advisable. It is even, now recognized as a bad practice. To manage offset use the new consumer API, and for example commits offset synchronously when a specified number of events are read from the topic and the persistence to the back end succeed."),Object(r.b)("p",null,"Assess if it is acceptable to loose messages from topic.  If so, when a consumer restarts it will start consuming the topic from the end of the queue."),Object(r.b)("p",null,"As storing a message to an external system and storing the offsets are two separate operations, and in case of failure between them, it is possible to have stale offsets, which will introduce duplicate messages when consumers restart to process from last known committed offset. In this case, idempotence is needed to support updating the same row in the table, or use the event timestamp as update timestamp in the database record or use other clever solution."),Object(r.b)("p",null,"As presented in the producer coding practice, using transaction to support “exactly-once”, also means the consumers should read committed data only. This can be achieved by setting the ",Object(r.b)("inlineCode",{parentName:"p"},"isolation.level=read_committed")," in the consumer’s configuration. The last offset will be the first message in the partition belonging to an open not yet committed transaction. This offset is known as the ‘Last Stable Offset’(LSO)."),Object(r.b)("h2",null,"Repositories with consumer code"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Within the Reefer ontainer shipment solution we have a order events consumer: ",Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/master/order-command-ms/src/main/java/ibm/gse/orderms/infrastructure/kafka/OrderEventAgent.java"}),"order event agent")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/blob/master/voyages-ms/server/utils/kafka.js"}),"Nodejs kafka consumers and producers")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc/tree/master/itg-tests/kafka"}),"A lot of python consumer in the integration tests, with or without Avro schema"))),Object(r.b)("h2",null,"Kafka useful Consumer APIs"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://kafka.apache.org/11/javadoc/org/apache/kafka/clients/consumer/KafkaConsumer.html"}),"KafkaConsumer")," a topic consumer which support:",Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"transparently handles brokers failure"),Object(r.b)("li",{parentName:"ul"},"transparently adapt to partition migration within the cluster"),Object(r.b)("li",{parentName:"ul"},"support grouping for load balancing among consumers"),Object(r.b)("li",{parentName:"ul"},"maintains TCP connections to the necessary brokers to fetch data"),Object(r.b)("li",{parentName:"ul"},"subscribe to multiple topics and being part of consumer groups"),Object(r.b)("li",{parentName:"ul"},"each partition is assigned to exactly one consumer in the group"),Object(r.b)("li",{parentName:"ul"},"if a process fails, the partitions assigned to it will be reassigned to other consumers in the same group"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://kafka.apache.org/11/javadoc/org/apache/kafka/clients/consumer/ConsumerRecords.html"}),"ConsumerRecords")," holds the list ConsumerRecord per partition for a particular topic."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://kafka.apache.org/11/javadoc/org/apache/kafka/clients/consumer/ConsumerRecord.html"}),"ConsumerRecord")," A key/value pair to be received from Kafka. This also consists of a topic name and a partition number from which the record is being received, an offset that points to the record in a Kafka partition, and a timestamp")),Object(r.b)("h2",null,"References"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://ibm.github.io/event-streams/about/consuming-messages/"}),"IBM Event Streams - Consuming messages")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://kafka.apache.org/10/javadoc/?org/apache/kafka/clients/consumer/KafkaConsumer.html"}),"KafkaConsumer class"))))}m.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-technology-kafka-producers-consumers-index-mdx-2a6f9346370d5a2dd203.js.map
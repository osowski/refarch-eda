(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{mfwP:function(e,a,t){"use strict";t.r(a),t.d(a,"_frontmatter",(function(){return o})),t.d(a,"default",(function(){return p}));t("91GP"),t("rGqo"),t("yt8O"),t("Btvt"),t("RW0V"),t("q1tI");var r=t("7ljp"),n=t("013z");t("qKvR");function s(){return(s=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},c=n.a;function p(e){var a=e.components,t=function(e,a){if(null==e)return{};var t,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],a.indexOf(t)>=0||(n[t]=e[t]);return n}(e,["components"]);return Object(r.b)(c,s({},i,t,{components:a,mdxType:"MDXLayout"}),Object(r.b)("p",null,"A comprehensive Kafka monitoring plan should collect metrics from the following components:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Kafka Broker(s)"),Object(r.b)("li",{parentName:"ul"},"Kafka Cluster (which should include ZooKeeper metrics as Kafka relies on it to maintain its state)"),Object(r.b)("li",{parentName:"ul"},"Producer(s) / Consumer(s)")),Object(r.b)("p",null,"Kafka Broker, Zookeeper and Java clients (producer/consumer) expose metrics via JMX (Java Management Extensions) and can be configured to report stats back to Prometheus using the ",Object(r.b)("a",s({parentName:"p"},{href:"https://github.com/prometheus/jmx_exporter"}),"JMX exporter")," maintained by Prometheus.  There is also a number of exporters maintained by the community to explore. Some of them can be used in addition to the JMX export. To monitor Kafka, for example, the JMX exporter is often used to provide broker level metrics, while community exporters claim to provide more accurate cluster level metrics (e.g. ",Object(r.b)("a",s({parentName:"p"},{href:"https://github.com/danielqsj/kafka_exporter"}),"Kafka exporter"),", ",Object(r.b)("a",s({parentName:"p"},{href:"https://github.com/cloudflare/kafka_zookeeper_exporter"}),"Kafka Zookeeper Exporter by CloudFlare"),", and others). Alternatively, you can consider ",Object(r.b)("a",s({parentName:"p"},{href:"https://prometheus.io/docs/instrumenting/writing_exporters/"}),"writing your own custom exporter"),"."),Object(r.b)("h2",null,"What to monitor"),Object(r.b)("p",null,"A long list of metrics is made available by Kafka (",Object(r.b)("a",s({parentName:"p"},{href:"https://kafka.apache.org/documentation/#monitoring"}),"here"),") and Zookeeper (",Object(r.b)("a",s({parentName:"p"},{href:"https://zookeeper.apache.org/doc/current/zookeeperJMX.html"}),"here"),"). The easiest way to see the available metrics is to fire up ",Object(r.b)("em",{parentName:"p"},"jconsole")," and point it at a running kafka client or Kafka/Prometheus server; this will allow browsing all metrics with JMX. But you are still left to figure out which ones you want to actively monitor and the ones that you want to be actively alerted."),Object(r.b)("p",null,"An simple way to get started would be to start with the ",Object(r.b)("a",s({parentName:"p"},{href:"https://grafana.com/dashboards"}),"Grafana’s sample dashboards")," for the Prometheus exporters you chose to use and then modify them as you learn more about the available metrics and/or your environment on ICP. The ",Object(r.b)("a",s({parentName:"p"},{href:"https://www.datadoghq.com/blog/monitoring-kafka-performance-metrics/"}),"Monitoring Kafka metrics")," article by ",Object(r.b)("em",{parentName:"p"},"DataDog")," and ",Object(r.b)("a",s({parentName:"p"},{href:"https://blog.serverdensity.com/how-to-monitor-kafka/"}),"How to monitor Kafka")," by ",Object(r.b)("em",{parentName:"p"},"Server Density")," provides  guidance on key Kafka and Prometheus metrics, reasoning to why you should care about them and suggestions on thresholds to trigger alerts. In the next section, we will demonstrate exactly that; we will start with sample dashboards and make few modifications to exemplify how to configure key Kafka metrics to display in the dashboard."),Object(r.b)("h3",null,"Configuring server and agents"),Object(r.b)("p",null,"For convenience and easy configuration, we will use Docker images from DockerHub and make few modifications to DockerFiles to include few additional steps to install, configure and start the servers and exporter agents locally."),Object(r.b)("h4",null,"Kafka and Zookeeper servers with JMX Exporter"),Object(r.b)("p",null,"We will start with the DockerFile of the ",Object(r.b)("a",s({parentName:"p"},{href:"https://hub.docker.com/r/spotify/kafka/~/DockerFile/"}),"Spotify kafka image")," from DockerHub as it includes Zookeeper and Kafka in a single image. The DockerFile was modified as shown below to download, install the Prometheus JMX exporter. The exporter can be configured to scrape and expose mBeans of a JMX target. It runs as a Java Agent, exposing a HTTP server and serving metrics of the JVM. In the DockerFile below, Kafka is started with JMX exporter agent on port 7071 and metrics will be expose in the /metrics endpoint."),Object(r.b)("pre",null,Object(r.b)("code",s({parentName:"pre"},{className:"language-dockerfile"}),'FROM java:openjdk-8-jre\n\nENV DEBIAN_FRONTEND noninteractive\nENV SCALA_VERSION 2.11\nENV KAFKA_VERSION 0.10.2.2\nENV KAFKA_HOME /opt/kafka_"$SCALA_VERSION"-"$KAFKA_VERSION"\n\n# Install Kafka, Zookeeper and other needed things\nRUN apt-get update && \\\n    apt-get install -y zookeeper wget supervisor dnsutils vim && \\\n    rm -rf /var/lib/apt/lists/* && \\\n    apt-get clean && \\\n    wget -q http://apache.mirrors.spacedump.net/kafka/"$KAFKA_VERSION"/kafka_"$SCALA_VERSION"-"$KAFKA_VERSION".tgz -O /tmp/kafka_"$SCALA_VERSION"-"$KAFKA_VERSION".tgz && \\\n    tar xfz /tmp/kafka_"$SCALA_VERSION"-"$KAFKA_VERSION".tgz -C /opt && \\\n    rm /tmp/kafka_"$SCALA_VERSION"-"$KAFKA_VERSION".tgz\n\nADD scripts/start-kafka.sh /usr/bin/start-kafka.sh\n# ADD scripts/jmx_prometheus_javaagent-0.9.jar "$KAFKA_HOME"/jmx_prometheus_javaagent-0.9.jar\n# ADD scripts/kafka-0-8-2.yml "$KAFKA_HOME"/kafka-0-8-2.yml\n\n# Supervisor config\nADD supervisor/kafka.conf supervisor/zookeeper.conf /etc/supervisor/conf.d/\n\n# 2181 is zookeeper, 9092 is kafka\nEXPOSE 2181 9092\n\n# **********\n# start - modifications to run Prometheus JMX exporter and community Kafka exporter agents\nENV KAFKA_OPTS "-javaagent:$KAFKA_HOME/jmx_prometheus_javaagent-0.9.jar=7071:$KAFKA_HOME/kafka-0-8-2.yml"\n\nRUN wget -q https://repo1.maven.org/maven2/io/prometheus/jmx/jmx_prometheus_javaagent/0.9/jmx_prometheus_javaagent-0.9.jar -O "$KAFKA_HOME"/jmx_prometheus_javaagent-0.9.jar && \\\n    wget -q https://raw.githubusercontent.com/prometheus/jmx_exporter/master/example_configs/kafka-0-8-2.yml -O "$KAFKA_HOME"/kafka-0-8-2.yml\n\nEXPOSE 7071\n# end - modifications\n# **********\n\nCMD ["supervisord", "-n"]\n')),Object(r.b)("p",null,"For your convenience, the modified DockerFile and scripts are available on this ",Object(r.b)("a",s({parentName:"p"},{href:"https://github.com/anagiordano/ibm-artifacts"}),"GitHub repository"),". You can run the following commands to create and run the container locally."),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Download git repo with DockerFile and scripts"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"mkdir /tmp/monitor\ngit clone https://github.com/anagiordano/ibm-artifacts.git /tmp/monitor/.\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Build image from DockerFile"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"docker build --tag kafka_i /tmp/monitor/kafka/.\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create/Run Docker container"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"docker run -d -p 2181:2181 -p 9092:9092 -p 7071:7071 --env ADVERTISED_PORT=9092 --name kafka_c kafka_i\n"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Create kafka topics"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),'docker exec -it kafka_c /bin/bash\ncd /opt/kafka*/bin\nexport KAFKA_OPTS=""\n./kafka-topics.sh --create --zookeeper localhost:2181 --replication-fact 1 --partitions 1 --topic my-topic1\n./kafka-topics.sh --create --zookeeper localhost:2181 --replication-fact 1 --partitions 1 --topic my-topic2\n./kafka-topics.sh --list --zookeeper localhost:2181\n'))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"(optional) Produce few message into topics from console and exit container"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"./kafka-console-producer.sh --broker-list localhost:9092 --topic my-topic1\n./kafka-console-producer.sh --broker-list localhost:9092 --topic my-topic2\nexit\n")))),Object(r.b)("p",null,"Lastly you can validate that the /metrics endpoint is returning metrics from Kafka. On a browser, open the ",Object(r.b)("a",s({parentName:"p"},{href:"http://localhost:7071/metrics"}),"http://localhost:7071/metrics")," URL."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"974px"}},"\n      ",Object(r.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"32.98611111111111%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAABcSAAAXEgFnn9JSAAABHElEQVQoz22R6XKDMAyE/f5vh4FypG0IMaSDwYA5ckCytdTwI514ZmcHYX1ohfguvtBog9PpB8dcQakCutKw1qLve9jeQh0V6rp2tcHVLExjUBQlSx0LlM61rrlXRB8R4jjGbvfJLwjcti0Duq6DMQaNA/x5w7VpmnC/P/B4vGpdVwjf9+FLJz9AkqQMpeaqqhhAYK01P5OTuq7Hsiwvut1uoCMI5HkeJEN95HnOU3JcF9tu7jQMA9dpSkpB2ianD43jCBE4YBA4PcFZdnC7UO5iy9EItAHICUhTU/PlcsE8zzjPZ3a6LzxPMoymk1LyPkllWXLMTRvger0+d3jHuyOSJEGapoiiCGEQMizb70H1MAx5BRTr3fn/U0i/u5sOICbOUKIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"metrics endpoint",title:"metrics endpoint",src:"/refarch-eda/static/aeeece2f48277770126b3084eeda906b/3df5d/metrics-endpoint.png",srcSet:["/refarch-eda/static/aeeece2f48277770126b3084eeda906b/7fc1e/metrics-endpoint.png 288w","/refarch-eda/static/aeeece2f48277770126b3084eeda906b/a5df1/metrics-endpoint.png 576w","/refarch-eda/static/aeeece2f48277770126b3084eeda906b/3df5d/metrics-endpoint.png 974w"],sizes:"(max-width: 974px) 100vw, 974px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("h4",null,"Prometheus Server and scrape jobs"),Object(r.b)("p",null,"Prometheus uses a configuration file in YAML format to define the ",Object(r.b)("a",s({parentName:"p"},{href:"https://prometheus.io/docs/concepts/jobs_instances/"}),"scraping jobs and their instances"),". You can also use the configuration file to define ",Object(r.b)("a",s({parentName:"p"},{href:"https://prometheus.io/docs/prometheus/latest/configuration/recording_rules/"}),"recording rules")," and ",Object(r.b)("a",s({parentName:"p"},{href:"https://prometheus.io/docs/prometheus/latest/configuration/alerting_rules/"}),"alerting rules"),":"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Recording rules")," allow you to precompute frequently needed or computationally expensive expressions and save their result as a new set of time series. Querying the precomputed result will then often be much faster than executing the original expression every time it is needed. This is especially useful for dashboards, which need to query the same expression repeatedly every time they refresh.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Alerting rules")," allow you to define alert conditions based on Prometheus expression language expressions and to send notifications about firing alerts to an external service. Alerting rules in Prometheus servers send alerts to an Alertmanager. The ",Object(r.b)("a",s({parentName:"p"},{href:"https://prometheus.io/docs/alerting/alertmanager/"}),"Alertmanager")," then manages those alerts, including silencing, inhibition, aggregation and sending out notifications via methods such as email, PagerDuty and others."))),Object(r.b)("p",null,"Below, we will go through the steps to stand-up a local Prometheus server as a Docker container and to modify the configuration file to scrape Kafka metrics:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create/run a docker container using Prometheus official image from DockerHub"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"docker run -d -p 9090:9090 prom/prometheus\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Obtain the IP address of the Kafka container"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"docker inspect kafka_c | grep IPAddress\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Edit the prometheus.yml to add Kafka as a target"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"docker exec -it prometheus_c \\sh\nvi /etc/prometheus/prometheus.yml\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Locate the scrape_configs section in the properties file and add the lines below to define the Kafka job,\nwhere the IP should be the IP of the kafka container"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-yaml"}),"- job_name: 'kafka'\n  static_configs:\n  - targets: ['172.17.0.4:7071']\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Reload the configuration file"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"ps -ef\nkill -HUP <prometheus PID>\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"You can now verify that Kafka is listed as a target job in Prometheus. On a Browser, open the ",Object(r.b)("a",s({parentName:"p"},{href:"http://localhost:9090/targets"}),"http://localhost:9090/targets")," URL."),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"682px"}}),"\n      ",Object(r.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"50.69444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAABcSAAAXEgFnn9JSAAABuElEQVQoz6WSzW7TQBDH980SKR+HlBN9F16DF+DGCSiViE2bEluoqlTaig+JunBIRVqn6dpxgh2nsb1e239mlxRoAydW+mk0szuz/5ldZjx/im3zJfZ6b7CzswvTMGGar2FbNizLgm3bMChmdA1YfQv9fp/O7qFLfvdVlzD0Xm+3h60XW2CdjQfYfLiJzkYHrVZrRRvtdhvNZhONRgO1Wg31el3b+6j4Lcpn54MBjo/ewXFOsUwSJGmKLMuQrqxCiLv2XwghwJ5ZH/DoiYXHxmcUFf57sTN3io8XIU7dCNsnl3DcUG+U5Xr1qqrW/PuwSTBFQEhZ4JxHmM4TxPOZbuFi7OMqmMOPEiwSgUJKcM7heR6iKEJRFJQnf6F85s8ijFVSeIMwTrQdehwZzevTtwD7XzjennEM/ZhkF3R5oIupeeV5fgdVlPFphFEQYzJPscwkDr76MN+PVEMrfq+yLFERt8r+2vL4msMdUwuLFN/jpb7Jm4zotRMcOkPsO1c4HkxwPVugyAUG9CsuXRdhGK4pVLAsE5D0vJnICYmcZinLn/MIl1Sc5qe4SXOtTinTSkmNOvMnKv4D/+XJRaZjhGMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"prometheus targets",title:"prometheus targets",src:"/refarch-eda/static/e38fd61252c7815f6a4f68791e29180b/8bbfc/prometheus-targets.png",srcSet:["/refarch-eda/static/e38fd61252c7815f6a4f68791e29180b/7fc1e/prometheus-targets.png 288w","/refarch-eda/static/e38fd61252c7815f6a4f68791e29180b/a5df1/prometheus-targets.png 576w","/refarch-eda/static/e38fd61252c7815f6a4f68791e29180b/8bbfc/prometheus-targets.png 682w"],sizes:"(max-width: 682px) 100vw, 682px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("h4",null,"Grafana Server and dashboards"),Object(r.b)("p",null,"We will use Grafana for visualization of the metrics scraped by Prometheus for that, we will need to:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Stand-up a local Grafana server as a Docker container"),Object(r.b)("li",{parentName:"ul"},"Configure Prometheus as a data source in Grafana"),Object(r.b)("li",{parentName:"ul"},"Import sample dashboards provided by Grafana and/or community"),Object(r.b)("li",{parentName:"ul"},"Modify the sample dashboards as we see fit")),Object(r.b)("p",null,"Let’s get started:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Create a docker container using Prometheus official image from DockerHub"),Object(r.b)("pre",{parentName:"li"},Object(r.b)("code",s({parentName:"pre"},{className:"language-shell"}),"docker run -d --name=grafana_c -p 3000:3000 grafana/grafana\n"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"On a Browser, open the ",Object(r.b)("a",s({parentName:"p"},{href:"http://localhost:3000"}),"http://localhost:3000")," URL.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Login as ",Object(r.b)("strong",{parentName:"p"},"admin/admin"),". You will be prompted to change the password.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Once logged in, Grafana provides visual guidance on what the next steps are: a) Add data sources b) Create first dashboard and others"),Object(r.b)("p",{parentName:"li"}," ",Object(r.b)("span",s({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"682px"}}),"\n      ",Object(r.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"41.66666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAICAYAAAD5nd/tAAAACXBIWXMAABcSAAAXEgFnn9JSAAABdklEQVQoz12QTVPCQAyGO6MXL0pLaWmBbrvbb74Eb4wj4w/wd3r0glwojEAL/qvX7PIlHJ7JJnmTTaIVX5/4Xsywr36x/lmjWCyJFbbbCmVZYVftsVyuUBQrVPQuyx02my2W5CttcWC7KTGfzaEl1gMC5mHy+oas24MfCPg8vEC+5/Mz7DZPyFiadRFGKbT7+zs8PtXgtDqwmy6aTuuMTci4xwIw2Yxwpe6f5qylWuaH0AzDQE03YNkOGnZT2RMNq4lW20Pe7aPXG6A/GKLdYTCta91Ba6PjcWiM1q2bjaukrax7xKG8Bd0wlbWsW90Fx+1A0/U6TBL6vgDj4mCZgPADCLkq4wiCkCYcKnvyDzqubixErHxPTsiZTT/ZJIoQdjNwEdHNBMbjHC+jHB4Vx3GK6fQdUZSowiTJKZaphkmSYTgcgfOIVg5oZVeH1TCpUYw86yEMqYgmff6YKESWIIlzapYiTXOaJjo2TNWk8i3jMt9uM/wBs4//Yy8kHB4AAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"grafana url",title:"grafana url",src:"/refarch-eda/static/ab109a8cebd0c43e81daaeb7343eb2dc/8bbfc/grafana-url.png",srcSet:["/refarch-eda/static/ab109a8cebd0c43e81daaeb7343eb2dc/7fc1e/grafana-url.png 288w","/refarch-eda/static/ab109a8cebd0c43e81daaeb7343eb2dc/a5df1/grafana-url.png 576w","/refarch-eda/static/ab109a8cebd0c43e81daaeb7343eb2dc/8bbfc/grafana-url.png 682w"],sizes:"(max-width: 682px) 100vw, 682px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Configure Prometheus as a data source:"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enter a ",Object(r.b)("strong",{parentName:"p"},"Name")," for the data source (e.g. Prometheus)")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Select ",Object(r.b)("strong",{parentName:"p"},"Prometheus")," as ",Object(r.b)("strong",{parentName:"p"},"Type"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Enter ",Object(r.b)("strong",{parentName:"p"},Object(r.b)("a",s({parentName:"strong"},{href:"http://localhost:9090"}),"http://localhost:9090"))," for ",Object(r.b)("strong",{parentName:"p"},"HTTP URL"))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"In our simple server configuration, select ",Object(r.b)("strong",{parentName:"p"},"Browser")," for ",Object(r.b)("strong",{parentName:"p"},"HTTP Access"),"  ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Click ",Object(r.b)("strong",{parentName:"p"},"Save and Test")," to validate configuration"),Object(r.b)("span",s({parentName:"li"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"587px"}}),"\n      ",Object(r.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"123.95833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAZCAYAAAAxFw7TAAAACXBIWXMAABcSAAAXEgFnn9JSAAAENElEQVQ4y3VU204bVxQdsI0xvs7Fc7E9tgffx9jGXAMYSNRXHgJ9SFoVyqUQtY3ttOpz+wn9rP5BpUaqlIdKqFRVkpZIpWpZ2fv4gg3B0vKZOfZeZ6+199nSu19e4uK3n/Dzny9xffUf/r26wtU/Vxh8rv+/xsXvFzg/PxfPYu/6Gu/+vsTb129x+dcl/ri4wJvXb/Dq11eQvj14imdHn+DLbhudF9+h0/0GnXYXnU4X7XYHX3/1HCcnpzg6PMbZ2TOcnp4JnJx8QXtHOPz8EAf7B9j/bB+7j3ch5cISQj4JhplGzU4hbSWgm0locQOyoiEmqwIyIRSOIBgKw+P1QZKk+yDBHwzhQb2OH7caON5YxuMnn2Jvdw97ex9jZ2cHi4vLWFtbR6u1ie3th6jXG4jGYghH6ACKDQRmMOX3Y2pqCpKfvoKhEMplFy23jLl8AZVqHa47h0qlCjudgWFYULU4ZawiGpURicYQCkUwMxPE9HRAEHk8XoIHkizLUFWVAh1k82UUiFhV473ASEysDIXkKypZEFMos6iQHpiZgd8/DZ/Ph8nJSUxMTEDK5/NIJlMwrSRyuYLIzDBM4Z9CxJqmCximJTLVdZP81QV5lDKNkOxwRBb+hsJhSIqiiNSZMOvkoBsJJJI2MlkHaZIb1w2Sq99BnIid2YJAxtSQMAwqZgKSZVniFDszi+XVdTi5ElJ2BsViCW7FFXIDgSAdGhoDW1Cda6BcbcDRgjAUGZpuQVIpQ65Uys6i1lgg4hxl5qBaraFeqws/w+Go8HMAfmdCbi2Wr5GqeN8O0TZcISuREpnp9APLGUjjIH7/EPi/ep9I7+/1CT0ollwsLC4JDw3zBoOgXjY30A1zePiAPD6aYSabQ7lSozVPBUrRzVCEHA6M08p9FwxG+muY9oxh1QeH3hB6vUhTUVaoKLlCWfTkHHnIQVwQJmCiAfg9RsXKuk1kKw0iNYSHQ0JuTD6BPeTsWCo/8zr0sC91uNKeSe1lJuxhlkPCyUkPSnRDym5VNLMurlqv1zTRyMaYTzfPRg93JFNRuEFbW4/QaC4hkcoI32xqJbZhfWMLjflF6tEiEtQNWv+wsSqPS54SGwbdFgZXmk9myUmSzvKTqTS1lt0LvDfjPqGX5htftxJNl7KYMI6QzoOAp4w24lv8VlXvbZusk8f2w48ECkW3N1CpoqNtcZtEVJbbyriToZeunIN58q8+v0TkBeEhXzG+evogWJCPQxDqHyBMpbNYWF7FytoGZsn8/GwecZJrsa9mYpxMH1kHGCsKTVxN1hELKIhN08ClZ29MhU+mmUje8SAYzUIfyr55H89QogxXC5g/3kT9uIXCgwK6i028WGmiSHPRrTVEuwwL0s9w4KOuW7cJPbBbRSy0H6H+fBulzSK+X27ih7UmKs4s5heWaKrbIxU2R4ox7uF7dMHFsskgDvUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"grafana data source",title:"grafana data source",src:"/refarch-eda/static/5c6413332218975a9cb454561c0abfa3/756e2/grafana-data-source.png",srcSet:["/refarch-eda/static/5c6413332218975a9cb454561c0abfa3/7fc1e/grafana-data-source.png 288w","/refarch-eda/static/5c6413332218975a9cb454561c0abfa3/a5df1/grafana-data-source.png 576w","/refarch-eda/static/5c6413332218975a9cb454561c0abfa3/756e2/grafana-data-source.png 587w"],sizes:"(max-width: 587px) 100vw, 587px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")))),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Back to Home, click Dashboards -> Manage to import sample dashboards"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},"Click the ",Object(r.b)("strong",{parentName:"li"},"+Import")," button and paste this URL ",Object(r.b)("strong",{parentName:"li"},Object(r.b)("a",s({parentName:"strong"},{href:"https://grafana.com/dashboards/721"}),"https://grafana.com/dashboards/721"))),Object(r.b)("li",{parentName:"ul"},"Make sure to select ",Object(r.b)("strong",{parentName:"li"},"Prometheus")," as the data source.")))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"NOTE:"))," You can also explore other sample dashboard options at ",Object(r.b)("a",s({parentName:"p"},{href:"https://grafana.com/dashboards"}),"https://grafana.com/dashboards"),". For instance, there is a ",Object(r.b)("a",s({parentName:"p"},{href:"https://grafana.com/dashboards/762"}),"Kubernetes Kafka resource metrics")," sample dashboard that you could use instead as the starting point when configuring Kafka monitoring on ICP."),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1130px"}},"\n      ",Object(r.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.68055555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACLklEQVQoz42Ty2/TQBDGV1EpKnn5FW/sjePYcbytkzYpeYqHED3AgSsnJLgh8Q/CFXFGCmlColZpKP/Jx+wGitQGicNPlnZ2Zr6db8y+Tj9juVzicrnCcr7QbNZrXG82+ElcrFY4n07xY32F66srHVstvmN5Psf824zuz7G+uMRiNsOXTx/BpEzx4uUrjMaP0O09hDzMkMojJC2JZrOFRhSjFoQI6iFELYDnC3BeRaXiwrYdmJaFsmGgWCqhPxyD+SLE+3evcXb2HIPRBEmSIo6aiOImPE/AcVxYlFg2TBSLJeTzBRwcPMD+/n3s7d1DLpcDY0yTZR2wKiXFcUQkWlGUSIhYwidVnueDV7e43IPrKmUcjlLnVHQjy7JhmJZmOJyAqeBo8hj9wRhZ+xhJuwc5fIq006MnhvBFfVtsF9W/DXlVYDJ5AmbTk467fbTSDCKI0Ggk6J700O+P0JIZgjC+VYhUundR52MSxizL0co8v3bTzbm55O1M3gXn/ragSTM46fXJxZjUNFEnRZJcjpsJTNNGqWySITSjf6Bitl2BRxugNoUZpio4QNbpIkmPEEYJhAi2Brh8q4CMsCjJtJydqLFV6YVaoeogZQdtMiNJDmld0u3uUUeDVkWpVEqKxTIKhdId8vmibiYaEQZkLKtUHPCwBrcu9Jd7Qs9DzU91djRqVbhWeht9rmZIs1c/BjO4g+jtKU4/PEPjTRc1GSGgdXF+m/I//DFwOBrjF/JCaOWh3rLQAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"grafana dashboard import",title:"grafana dashboard import",src:"/refarch-eda/static/82f1eaecc06f13959e126932af9ca025/41702/grafana-dashboard-import.png",srcSet:["/refarch-eda/static/82f1eaecc06f13959e126932af9ca025/7fc1e/grafana-dashboard-import.png 288w","/refarch-eda/static/82f1eaecc06f13959e126932af9ca025/a5df1/grafana-dashboard-import.png 576w","/refarch-eda/static/82f1eaecc06f13959e126932af9ca025/41702/grafana-dashboard-import.png 1130w"],sizes:"(max-width: 1130px) 100vw, 1130px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.02777777777778%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAABYlAAAWJQFJUiTwAAACaElEQVQozy1TyW4TQRCdAJEQCJmDhZfZ9+7pWe2Jx0kEEYu4ckDiwM9x554osRNI7AQ+61FVYaRSt16/2l7VWJc/f+Di5gJ/7v/i9vctri6vyDa4u9tht9tjv7/HdnuN8/MLPNw/iDF2c/0L2821cLebLXZ3e2zotMYvnyHPC5R1C1PVSDIFxwvgkvFpuz78IEKc5tCFQZrlZApxkiEhLNfkW9ZQ2ghuHTx5CsfxkCQ5fC+CMTWCIIbvR/C8UJJFUUZ4QxwF1w1h2x6yTJMpeee76wTiY43HY8qUoSpb6MrInTNzJWGYoGkXKNuK3qiSroKhe5Sk6PsBw8kaVV9h+HBEtkK7amGNRiOpru5a1KsaDYF1X6NaVshyha7vcfblFB+/neHD13dymq7EcrHCcLrG+tMg+Ofv77F8u4R1eHgoLR4NA3RpoEwhpzYGnh+i7ZboT44kCdvieIEgilHXHdYnxygaI/yqq5Ep0pA+2I4LpYwYaxLHqejhugFSaj9LNdJEi5asq+P4iIiTk3aPGirhBzQ8infwSIhS1IsWTdeJ+GEYy3TFgVpvFp2IzzwOmqZKpNIF6atL0ZvfpELOINWVGnGWIfBjBETg4VRVK63ouhCcnQJKxtugchpeHFP1MfI0pfN/QCZxdnbKNVURpoQl0hY75kbTdEvhJbR/rHlBlbEcMfFS3knislTW+PVz2cO2aWhyNN2yQKGoFTKPFruiZe+XDZqmFLyk4L4fkAyaBtNKu9w6y8QFWKNXLzCZzuDQH2FT4MnUxpvJHBO26Rxz2xV8OnMInwnO74w7ricDZR6/zeYO/gHPDH01r/cZLgAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"grafana dashboard sample",title:"grafana dashboard sample",src:"/refarch-eda/static/59a01ada5f6588fe039ad53e7ceff5fe/3cbba/grafana-dashboard-sample.png",srcSet:["/refarch-eda/static/59a01ada5f6588fe039ad53e7ceff5fe/7fc1e/grafana-dashboard-sample.png 288w","/refarch-eda/static/59a01ada5f6588fe039ad53e7ceff5fe/a5df1/grafana-dashboard-sample.png 576w","/refarch-eda/static/59a01ada5f6588fe039ad53e7ceff5fe/3cbba/grafana-dashboard-sample.png 1152w","/refarch-eda/static/59a01ada5f6588fe039ad53e7ceff5fe/e2cc9/grafana-dashboard-sample.png 1300w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("p",null,"The six graphs displayed in the dashboard are configured as follows:"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},Object(r.b)("em",{parentName:"strong"},"NOTE:"))," You might want to go back to your Kafka Docker container and push messages into the topics you have created above to see changes to the graph. Or, if you have already pushed messages, you can change the Quick Range from last ",Object(r.b)("em",{parentName:"p"},"5 minutes")," to something else (e.g. ",Object(r.b)("em",{parentName:"p"},"last 6 hours"),") on the top right hand corner of the dashboard."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",s({parentName:"tr"},{align:"left"}),"Graph"),Object(r.b)("th",s({parentName:"tr"},{align:"left"}),"Formula"),Object(r.b)("th",s({parentName:"tr"},{align:"left"}),"Format As"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"CPU Usage"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"rate(process","_","cpu","_","seconds","_","total{job=“kafka”}","[1m]",")"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Time Series")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"JVM Memory Used"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"sum without(area)(jvm","_","memory","_","bytes","_","used{job=“kafka”})"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Time Series")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Time spent in GC"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"sum without(gc)(rate(jvm","_","gc","_","collection","_","seconds","_","sum{job=“kafka”}","[5m]","))"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Time Series")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Messages In per Topic"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"sum without(instance)(rate(kafka","_","server","_","brokertopicmetrics","_","messagesin","_",'total{job=“kafka”,topic!=""}',"[5m]","))"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Time Series")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Bytes In per Topic"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"sum without(instance)(rate(kafka","_","server","_","brokertopicmetrics","_","bytesin","_",'total{job=“kafka”,topic!=""}',"[5m]","))"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Time Series")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Bytes Out per Topic"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"sum without(instance)(rate(kafka","_","server","_","brokertopicmetrics","_","bytesout","_",'total{job=“kafka”,topic!=""}',"[5m]","))"),Object(r.b)("td",s({parentName:"tr"},{align:"left"}),"Time Series")))),Object(r.b)("p",null,"Prometheus provides a functional expression language that lets the user select and aggregate time series data in real time. Before proceeding review the information on these pages to gain basic understanding of:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Prometheus Expression language - ",Object(r.b)("a",s({parentName:"li"},{href:"http://docs.grafana.org/features/datasources/prometheus/"}),"http://docs.grafana.org/features/datasources/prometheus/")),Object(r.b)("li",{parentName:"ul"},"Grafana Query Editor - ",Object(r.b)("a",s({parentName:"li"},{href:"http://docs.grafana.org/features/datasources/prometheus/"}),"http://docs.grafana.org/features/datasources/prometheus/"))),Object(r.b)("p",null,"As you make modifications to the dashboard it is also important to understand the data returned by the scrape jobs in the first place. For two of the metrics above, this is what the Kafka JMX exporter returns. You can go to ",Object(r.b)("a",s({parentName:"p"},{href:"https://localhost:7071/metrics"}),"https://localhost:7071/metrics")," to inspect others returned in /metrics endpoint response:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Messages in Per Topic")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"12.5%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAArElEQVQI1z2JuQ6CQAAF+f/GI7Gx8RO8ChsbpdBGELwSZXc5lGNhgUiLPpfFUExmXp6Wc4749UTgMriEwKMEPA5RihRFluJdCPkHiqrM1W4seIyAUYS+p/AZQZZE0EwngfGQ3GOYf1s0g8UEbJZLFzCI6Dg4mWJ3DaHbvur9LVLd/NpgcUZvZqE/P0nbGC4vGK0eGK9dTHSO6bGCTj/YkBrbxrTuWmdf5bbb7wfhntWgMmkZ5gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"metrics messagesin",title:"metrics messagesin",src:"/refarch-eda/static/2b9591c99d39fd835b527e2dd8ae4622/3cbba/metrics_messagesin.png",srcSet:["/refarch-eda/static/2b9591c99d39fd835b527e2dd8ae4622/7fc1e/metrics_messagesin.png 288w","/refarch-eda/static/2b9591c99d39fd835b527e2dd8ae4622/a5df1/metrics_messagesin.png 576w","/refarch-eda/static/2b9591c99d39fd835b527e2dd8ae4622/3cbba/metrics_messagesin.png 1152w","/refarch-eda/static/2b9591c99d39fd835b527e2dd8ae4622/257b3/metrics_messagesin.png 1402w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Time spent in GC")),Object(r.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(r.b)("span",s({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"12.847222222222221%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAADCAYAAACTWi8uAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAuklEQVQI11XLS4/BUADF8X7/jYgPYT0RVkonaBokMpKRaqlHb5m+3HYQj8n4u8rG4pdzzuJoMo6JtgFb4fOjhIEglwmHfMc+S/mVKRt/iYzD104Kj8/GX6nPWn18tQUyCdGMseBzHGB8CcxpiuVKenZK195hujmmkzFYnhiuLwxW58Kjm7M9HTvD8o6FkfijvzihlWsTSh/fVBoOlfpUpUvVimg6V/T5DX32X2TL4017AYbS9p5a82feAZW214iM9XT+AAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(r.b)("img",s({parentName:"span"},{className:"gatsby-resp-image-image",alt:"metrics gc",title:"metrics gc",src:"/refarch-eda/static/4d8787d522a266cbf90066f265c81a28/3cbba/metrics_gc.png",srcSet:["/refarch-eda/static/4d8787d522a266cbf90066f265c81a28/7fc1e/metrics_gc.png 288w","/refarch-eda/static/4d8787d522a266cbf90066f265c81a28/a5df1/metrics_gc.png 576w","/refarch-eda/static/4d8787d522a266cbf90066f265c81a28/3cbba/metrics_gc.png 1152w","/refarch-eda/static/4d8787d522a266cbf90066f265c81a28/2e86f/metrics_gc.png 1516w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-technology-kafka-monitoring-index-mdx-2eb9c67fe3db17bc8a86.js.map
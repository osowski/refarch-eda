(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{bMPx:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return i})),a.d(t,"default",(function(){return l}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var n=a("7ljp"),s=a("013z");a("qKvR");function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e}).apply(this,arguments)}var i={},o={_frontmatter:i},c=s.a;function l(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,n,s={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(s[a]=e[a]);return s}(e,["components"]);return Object(n.b)(c,r({},o,a,{components:t,mdxType:"MDXLayout"}),Object(n.b)("p",null,Object(n.b)("em",{parentName:"p"},"(Tested on September 2019 using ibm-eventstreams-prod helm chart 1.3.0 on ICP 3.2.0)")),Object(n.b)("p",null,"You can use the ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-eventstreams-dev")," or ",Object(n.b)("inlineCode",{parentName:"p"},"ibm-eventstreams-prod")," Helm chart from ICP catalog. The product installation instructions can be found ",Object(n.b)("a",r({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/installing/"}),"in event stream documentation"),".  "),Object(n.b)("p",null,"!!! note\nIf you need to upload the tar file for the event streams production (downloaded from IBM passport advantage or other support sites) use the following command:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"    ```\n    cloudctl catalog load-archive --archive eventstreams.pak.tar.gz\n    ```\n")),Object(n.b)("p",null,"As we do not want to rewrite the very good ",Object(n.b)("a",r({parentName:"p"},{href:"https://ibm.github.io/event-streams/installing/installing/"}),"product documentation"),", we just want to highlight what we did for our own deployment. Our cluster has the following characteristics:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"Three masters also running ETCD cluster on 3 nodes"),Object(n.b)("li",{parentName:"ul"},"Three management nodes"),Object(n.b)("li",{parentName:"ul"},"Three proxy"),Object(n.b)("li",{parentName:"ul"},"Six worker nodes")),Object(n.b)("p",null,"For worker nodes we need good CPUs and hard disk space. We allocated 12 CPUs - 32 Gb RAM per worker nodes and around 300GB for each worker node."),Object(n.b)("p",null,"You need to decide if persistence should be enabled for ZooKeepers and Kafka brokers. Pre allocate one Persistence Volume per Kafka broker and one per ZooKeeper server.  If you use dynamic persistence volume provisioning, ensure the expected volumes are present at installation time."),Object(n.b)("p",null,"The yaml file for PV creation is in the ",Object(n.b)("inlineCode",{parentName:"p"},"refarch-eda/deployments/eventstreams")," folder. The command:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl apply -f ibm-es-pv.yaml -n eventstreams\n")),Object(n.b)("p",null,"creates 7 volumes: 3 for zookeeper, and 3 for kafka and 1 for schema registry. The configuration is for development purpose, and uses local host path, so if the VM has an issue data will be lost. "),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl get pv -n eventstreams\n")),Object(n.b)("p",null,"We also created an empty config map so we can update the kafka server.properites in the future."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl create configmap greencompute-events-km -n eventstreams\n")),Object(n.b)("h3",null,"Configuration Parameters"),Object(n.b)("p",null,"The following parameters were changed from default settings:  "),Object(n.b)("table",null,Object(n.b)("thead",{parentName:"table"},Object(n.b)("tr",{parentName:"thead"},Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Parameter"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Description"),Object(n.b)("th",r({parentName:"tr"},{align:"left"}),"Value"))),Object(n.b)("tbody",{parentName:"table"},Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Kafka.autoCreateTopicsEnable"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"Enable auto-creation of topics"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"persistence.enabled"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"enable persistent storage for the Kafka brokers"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"persistence.useDynamicProvisioning"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"dynamically create persistent volume claims"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"zookeeper.persistence.enabled"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"use persistent storage for the ZooKeeper nodes"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"true")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"zookeeper.persistence.useDynamicProvisioning"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"dynamically create persistent volume claims for the ZooKeeper nodes"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"false")),Object(n.b)("tr",{parentName:"tbody"},Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"proxy.externalAccessEnabled"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"allow external access to Kafka from outside the Kubernetes cluster"),Object(n.b)("td",r({parentName:"tr"},{align:"left"}),"true")))),Object(n.b)("p",null,"The matching ",Object(n.b)("inlineCode",{parentName:"p"},"server.properties")," file is under the ",Object(n.b)("inlineCode",{parentName:"p"},"deployments/eventstreams")," folder. See parameters description in the ",Object(n.b)("a",r({parentName:"p"},{href:"https://kafka.apache.org/documentation/#brokerconfigs"}),"product documentation")," "),Object(n.b)("p",null,"You can get the details of the release with: ",Object(n.b)("inlineCode",{parentName:"p"},"helm list 'green-events-streams' --tls")," or access helm detail via ICP console: Here is the helm release details:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1149px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"59.375%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABa0lEQVQoz41Si27DIAzk/39y2iatTdokBAjvxPPx6Fq1mop0Mmfg5DMW1nmaFknabHQcB+37TilFyjk3nhvfK2cc/0CEmOg6L+R9IKwYM83SMI+FWxcLj3wPyzA/z5bGxZIPueQeBCF0GkZ+UAVyPkjqyJchcHDcaWWeUsJLsj7RwGIX6SjEKni/BJKK7TquKKa9CK3G0eYC81zyUjsWioXjfo99fw8xTrI8diwEe4DjKiCwveCvYKxnhLIXl1mRNJ4UJwBbHr8PFKLYkWlFCfTj87zS11CxKNeqCW9Db+625wo1jbOhq7SMrfQLFvT2DNgC+r5HVNj3YlrU7UPQZHxKsXKHbq0LwoHiqpCDUOm1r9bFedI8VxuPAmNGhf7vA3xDe7AonFvS7GCSuuQRa3U1JyCGHn4PinuoWNQQht2H+ATLM4szOAJ3Hh8RWy6UnPi5avo4ySLaAdE6Co9YjW39da1viLZ8hmq5X/L9pP3pFouYAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies helm rel01",title:"ies helm rel01",src:"/refarch-eda/static/a7314720fe19804306d6bfd4dd39e4a0/d50b4/ies-helm-rel01.png",srcSet:["/refarch-eda/static/a7314720fe19804306d6bfd4dd39e4a0/7fc1e/ies-helm-rel01.png 288w","/refarch-eda/static/a7314720fe19804306d6bfd4dd39e4a0/a5df1/ies-helm-rel01.png 576w","/refarch-eda/static/a7314720fe19804306d6bfd4dd39e4a0/d50b4/ies-helm-rel01.png 1149w"],sizes:"(max-width: 1149px) 100vw, 1149px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The figure above shows the following elements:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"ConfigMaps for UI, Kafka proxy"),Object(n.b)("li",{parentName:"ul"},"The five deployments for each major components: UI, REST, proxy and access controller.")),Object(n.b)("p",null,"Next is the job list which shows what was run during installation. The panel lists also the current network policies: "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1097px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.91666666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABOklEQVQoz4WS6XLDIAyEef/XTOMDY2wwt9NRV/iqk+n0x44AfZK1GJHySrm8oPUUn/2nEHMVr2Mq5EKiiLXotadhDje5WP5QrvJpJTUvNM6OAtazDdSPMy0+kVA41DbSBGkkOBqXPmRZPtdoXNz3V24JW04Y66ms37vt12bhTZvFgoKIiQrlnU/QOysGbTC6pXGypGGDLXgUnUKjAHDChx+trNYUWK7T5pMXj6ajZ9vTs5NVE6CYyyVAqfA9OfoC9wWea9p+IKk0OR9PjqPgJg2Sba9qQzlOF7CLLR8Nm26o/DiZKhfijRdKwwLEyQHNFh/Op3BOiD2fc54lj4gJrfM3XrRSUTeMVbw+LIT9izWiwCx+cwKGYye3mmPCgxcNbLYVAIi1Xfiv3x867/mc75rZ65oG8njQv/kfhRcCLZ6OWqMAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies helm rel02",title:"ies helm rel02",src:"/refarch-eda/static/1ab23792300c68504f5dd396da79c4bd/c40ee/ies-helm-rel02.png",srcSet:["/refarch-eda/static/1ab23792300c68504f5dd396da79c4bd/7fc1e/ies-helm-rel02.png 288w","/refarch-eda/static/1ab23792300c68504f5dd396da79c4bd/a5df1/ies-helm-rel02.png 576w","/refarch-eda/static/1ab23792300c68504f5dd396da79c4bd/c40ee/ies-helm-rel02.png 1097w"],sizes:"(max-width: 1097px) 100vw, 1097px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("blockquote",null,Object(n.b)("p",{parentName:"blockquote"},"A network policy is a specification of how groups of pods are allowed to communicate with each other and other network endpoints. As soon as there are policies defined, pods will reject connections not allowed by any policies.")),Object(n.b)("p",null,"The pods running in the platform. (One pod was a job)"),Object(n.b)("p",null,Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1141px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"48.26388888888889%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAABTklEQVQoz22S6XKDMAyEef+nbJtAsLHBHL6gM+pKDoyT5scO8th8Wh1Nyr90aS+K+aCQduh4UYR8zNAu3yDnnVafJN5CpsZMC1m3ijgexpnmLZTHgNYKSDTOK+4jKTPRAtCCmP9lA8o6au4PRW2vRbeup1vb4/FIAQ5i3uGqEs4LJ8Mdv1k9J84ivhvdQk2nBnooQw9tqOuHC34BTwGY4PAEagFGiX1MFbBn4EA9gCyGM3BePfp5vDhM4tBL/16BlUO2PtipPEB2dlGXWDvk7wkx04whxFLyEzihv41+AtU78L1/F7CUbD8A3bJRI+UOFv3TBchl5lLefx0CjIBoO9IGt/E5lCQOUfJXq+in0/TdanJrpC2i8T5/FvbMuI0cVuWuLI1LwAolnJPc92YuU+5kyhZZHfbQyaKeC16LHZYd3aVFE0rkuAwFO4p9/AOOrAKNnJTBaQAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies helm pods",title:"ies helm pods",src:"/refarch-eda/static/4236e4d6bd045efc8b7023566e0434e6/4e1f8/ies-helm-pods.png",srcSet:["/refarch-eda/static/4236e4d6bd045efc8b7023566e0434e6/7fc1e/ies-helm-pods.png 288w","/refarch-eda/static/4236e4d6bd045efc8b7023566e0434e6/a5df1/ies-helm-pods.png 576w","/refarch-eda/static/4236e4d6bd045efc8b7023566e0434e6/4e1f8/ies-helm-pods.png 1141w"],sizes:"(max-width: 1141px) 100vw, 1141px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(n.b)("p",null,"As we can see there are 3 kafka brokers, 3 zookeepers, 2 proxies, 2 access controllers. "),Object(n.b)("p",null,"You can see the pods running on a node using the command:\n",Object(n.b)("inlineCode",{parentName:"p"},"kubectl get pods --all-namespaces --field-selector=spec.nodeName=172.16.50.219")),Object(n.b)("p",null,"The figure below is for roles, rolebinding and secret as part of the Role Based Access Control settings."),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1113px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"53.81944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAYAAAB/Ca1DAAAACXBIWXMAAAsSAAALEgHS3X78AAAA6UlEQVQoz52T227EIAxE+f/PbLtNAgkBEq5JNbW9WVXty3Z5OJIRYhgPRrkQkeuB0k6UekqdS+tGTbODsR7W77BuQ4iZRE8k2kzleBllFoe324j3zwkfg8ZoFoQ9XYKvo/iwC/svUqnU/tGF4jb9liQ/tpzFekPMfah5DSL4I1LvwvXoy1Avq2R3Gw0GPUuW1gUkEe7IkA+PJDTRY+jZYpgMDF0Sc0FtHRlusSCmKq0KUrd/5Zj+rsuVIW/U4+s+3O0a7iewm4cJ+RCUH0+MCA7Gggec0TTkgVw/Y6NO+DPoxUvt94w1JHwDyjRV0Lt4EwYAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies helm rel03",title:"ies helm rel03",src:"/refarch-eda/static/b68910e976b4386505f80445ae769452/2ee20/ies-helm-rel03.png",srcSet:["/refarch-eda/static/b68910e976b4386505f80445ae769452/7fc1e/ies-helm-rel03.png 288w","/refarch-eda/static/b68910e976b4386505f80445ae769452/a5df1/ies-helm-rel03.png 576w","/refarch-eda/static/b68910e976b4386505f80445ae769452/2ee20/ies-helm-rel03.png 1113w"],sizes:"(max-width: 1113px) 100vw, 1113px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The figure below shows the services for zookeeper, Kafka and Event Stream REST api and user interface:  "),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"45.833333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAYAAAAywQxIAAAACXBIWXMAAAsSAAALEgHS3X78AAABN0lEQVQoz3WSx3bEIAxF/f9fmZlxo9gUU5OFIglspy7eAQTn6kloMC5AKhVK/WDl8o7nWzFXFK6pQkiF96n8r0FsHoSJsPkM2mWwoUBGcMRLbTyo3YLcLK4OKPmqdjA+8ptUfmtQNsHb4uAhPLykB3vk7qqC0DvKgELg7g52OAuNCQzv/3SobIQnwiZ1wCgbVOwBHaBDdkdAg+4akJI8pwXGRUDK9WoTvSexQwKOCCQY7aWJfKk6zB0BHfoGVBu85pWBR8wNVG59B4oG9LFg5gYkl/TwcojAcRYMnFaJsXy7/AqcOpDd9csTSKWdwLU7pLMPsU/Ij5Ifq7v6Rz09gfIqOTIgInCRmmV94FZQvMmz20G7hOV6mPXBGvtPkysaGW0cO6Nfpp5J+nWK4xjRSjGaiDajFT4BXcKxJJ83onUAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies helm serv",title:"ies helm serv",src:"/refarch-eda/static/a8c91837d239eefa7b49cfce4c77d796/3cbba/ies-helm-serv.png",srcSet:["/refarch-eda/static/a8c91837d239eefa7b49cfce4c77d796/7fc1e/ies-helm-serv.png 288w","/refarch-eda/static/a8c91837d239eefa7b49cfce4c77d796/a5df1/ies-helm-serv.png 576w","/refarch-eda/static/a8c91837d239eefa7b49cfce4c77d796/3cbba/ies-helm-serv.png 1152w","/refarch-eda/static/a8c91837d239eefa7b49cfce4c77d796/32b2a/ies-helm-serv.png 1190w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"The services expose capabilities to external world via nodePort type:"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},"The IBM Event Streams admin console is visible at the port 31253 on the k8s proxy IP address: 172.16.50.227"),Object(n.b)("li",{parentName:"ul"},"The REST api port 30121"),Object(n.b)("li",{parentName:"ul"},"stream proxy port bootstrap: 31348, broker 0: 32489…")),Object(n.b)("p",null,"You get access to the Event Streams admin console by using the IP address of the master  / proxy node and the port number of the service, which you can get using the kubectl get service command like:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),'kubectl get svc -n streaming "green-events-streams-ibm-es-ui-svc" -o \'jsonpath={.spec.ports[?(@.name=="admin-ui-https")].nodePort}\'\n\nkubectl cluster-info | grep "catalog" | awk \'match($0, /([0-9]{1,3}\\.){3}[0-9]{1,3}/) { print substr( $0, RSTART, RLENGTH )}\'\n')),Object(n.b)("p",null,"Here is the admin console home page:"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1067px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"69.79166666666667%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAADH0lEQVQ4y32Sy28bVRTG559ANGLBEgFCVIBgQUHiJaDqorQBUkp5qE2i8CqotFDURSVAIB7iKbFAILYUdYEEVEICAg0xUkXqJLab+BU7tseeGXtmPC/POIl/nBmbkBUj/XTPndH95jvnfsp9E8/z2MwbjE+f5t7Hn+PORya56+AUew5MJfX/sefAJIdeOMMDT7zIw0eOc/f4NIrWMWloGnVNFwwaelswUI02mmlto5u2rDa6ZWPsID4//G4le8UwTdIrJcq1BtX6OjW1QaU2XMN+j14UJAShn6xu4NP1/8MJRoz2yoUFnZe+XuOrX1SyaxrpksalKzXSRamLrYRsxaCgdlmti1vLkYMeludhC5rl0ug4qB2XjuOi3PBKhltOZdn9apZbT2W47bW4Xub217OjOsP1Ly9z04kM184scWHBwPPtpM1Ot0tLWo5ptjuYjoOy+2SWfe8WuOfsKg++leeht/Pc/2ZexHLcLD+57niGXZOLXDO9yFVH0/wkgr5ny5ytpE3T7iYYIpoIxgef/rTEM5+VefbzEk99UuLQR0X2ivDEh0UOS33442Ly/kbp5se/NTY2YDa9KXMdsPNxgwDl0Q8K6FpItRaykA2wzYhM0WV+2Za6z1KhT74Ssen3E9HvUi0Y9MVhwOZmLDhga2uLwWAwFDz4foFmM+DnlMcPcx6lao/Lqw6zly1qjR6pXJ90IcQxQ3Fb4vxfOlFgk82tUFqrUixXqDdahGE0FBwXwU4norweSnQi1FbsyuXikmRO71OqxUT4zgZHxOG5eXFIKDcc4HgSFblpT4S8Xi+5dWVCZqQZprhpsrauysA9KjKCuYxBq9WSbGoUynXcrsnRLyqc+7MlrfpJRP6NjuW62yhPyoX4to6pq9KWTs+R2o3b1AksFbujYRmxK5eZL6t8O9eUmQWJoD0S3Imy750Cvy2ZzC5bXLziksq7fH/J4ptfNeZXuvyRc/g967BQ9tn/XpHzqdjhUHCns22Hd5zOcfWxRcamFiVvaXYdSzMma5y7OH/JO2FsKj3KoU6/L/mTw6bbRpdAtyXkvShK+AfobqvVE1kBWwAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"event stream admin",title:"event stream admin",src:"/refarch-eda/static/278a38f7ea4c321ef68ee2a8b4caeda7/f0c5f/event-stream-admin.png",srcSet:["/refarch-eda/static/278a38f7ea4c321ef68ee2a8b4caeda7/7fc1e/event-stream-admin.png 288w","/refarch-eda/static/278a38f7ea4c321ef68ee2a8b4caeda7/a5df1/event-stream-admin.png 576w","/refarch-eda/static/278a38f7ea4c321ef68ee2a8b4caeda7/f0c5f/event-stream-admin.png 1067w"],sizes:"(max-width: 1067px) 100vw, 1067px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"To connect an application or tool to this cluster, you will need the address of a bootstrap server, a certificate and an API key. The page to access this information, is on the top right corner: ",Object(n.b)("inlineCode",{parentName:"p"},"Connect to this cluster"),":"),Object(n.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"876px"}},"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"88.19444444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAYAAABb0P4QAAAACXBIWXMAAAsSAAALEgHS3X78AAACY0lEQVQ4y51Uy27bMBDU//9EjwF66a1AgR4K9HFojF4KBAma2pGtB/WWKJGiSEnTJWUlbuI0QQkMdmWTu9yZXXq8n7GiU3Bo5IhGjIt9LWh/wRU82Zbo6gxG1shShjTNgHnC/60Z3vtNjrdfElx8TnDlN+iEQtcbmHHCPM+YJgLZ+VUAvHeXHBdfa7z5VOEmNhhGKns4k/t4aPVPfz/935O8gGhytFWCKAwQxQmCMIJ/CMjGOBxCJGlON53+OngOdnn7kMEPYtwdImRFhapuUJQVcvLLqnbolYLse4zTv7l1NzwEIbY7392qaYjDrsOgekgpySq30d7udnuHMGKo6xp5XlDCEgXB+hUlXSvwioqDJQUiliMmW3MBITU6OaAVA1mDcaSWKArXATFLKKgVT6BtOwcp+4eS7eGaS+QlByc1pBopiIYgpVuh0XTabRTDBKVHOjg9W+4iCnFjs720yqanpI2jZRj0I+UfhPH8fYBft1s0nDv+OG/B2xbt0e/7hUfeCmz9GLe7EPswQ5RUyEraI4yrwvatK9nWv3JiiCtL7or122ZWdKteabKGOKbmF72zK9YO8JRWSIrUKShI2VNOloBkjUEcxwSGhDEw8rMsA7M+W8Z1WkW52UT48XEHPQ3ET+tUE0K6YDarVdj6LC2pwSskWYW6Ea4DZD9Aa+0S3vfh/jrD9WUIe1MbyMLSMK4BjyUbGkljZmjCoBc7zXgygh5NL4o2g+8Hrpkfl+y4OZndx6/Lk9HbXaX4+c2nbKNT1HLmXhnCOC7CvDS/p4+Fd/09xObD77ODPx05PHfwufUH5Pp2BRJ2jnIAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies cluster connection",title:"ies cluster connection",src:"/refarch-eda/static/cd210afbfee11485fb28815e4893a29f/e8ecb/ies-cluster-connection.png",srcSet:["/refarch-eda/static/cd210afbfee11485fb28815e4893a29f/7fc1e/ies-cluster-connection.png 288w","/refarch-eda/static/cd210afbfee11485fb28815e4893a29f/a5df1/ies-cluster-connection.png 576w","/refarch-eda/static/cd210afbfee11485fb28815e4893a29f/e8ecb/ies-cluster-connection.png 876w"],sizes:"(max-width: 876px) 100vw, 876px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),Object(n.b)("p",null,"Download certificate and Java truststore files, and the generated API key. A key can apply to all groups or being specific to a group. "),Object(n.b)("p",null,"In Java to leverage the api key the code needs to set the some properties:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-java"}),'properties.put(CommonClientConfigs.SECURITY_PROTOCOL_CONFIG, "SASL_SSL");\nproperties.put(SaslConfigs.SASL_MECHANISM, "PLAIN");\nproperties.put(SaslConfigs.SASL_JAAS_CONFIG,\n        "org.apache.kafka.common.security.plain.PlainLoginModule required username=\\"token\\" password=\\""\n                + env.get("KAFKA_APIKEY") + "\\";");\nproperties.put(SslConfigs.SSL_PROTOCOL_CONFIG, "TLSv1.2");\nproperties.put(SslConfigs.SSL_ENABLED_PROTOCOLS_CONFIG, "TLSv1.2");\nproperties.put(SslConfigs.SSL_ENDPOINT_IDENTIFICATION_ALGORITHM_CONFIG, "HTTPS");\n')),Object(n.b)("p",null,"See code example in ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-order-ms/blob/a6b6a2d15085029f5d46b9826806e722a8c27bff/order-command-ms/src/main/java/ibm/labs/kc/order/command/kafka/ApplicationConfig.java#L71-L86"}),"ApplicationConfig.java"),"."),Object(n.b)("h2",null,"Some challenges during the installation"),Object(n.b)("p",null,"As presented in the high availability discussion in ",Object(n.b)("a",r({parentName:"p"},{href:"../kafka#high-availability-in-the-context-of-kubernetes-deployment"}),"this note"),", normally we need 6 worker nodes to avoid allocating zookeeper and kafka servers on the same kubernetes nodes. The community edition installation is permissive on that constraint, so both products could co-exist but in that case, ensure to have enough physical resources.\nWe have seen some Kafka brokers that could not be scheduled because some nodes have taints (can’t meet the specs for the stateful set) and the remaining worker nodes don’t have enough memory."),Object(n.b)("h3",null,"Helm release does not install"),Object(n.b)("p",null,"If you do not see a helm release added to the helm release list, try to see if the installation pod is working. For example the following command, returns a pod name for the release creation job:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubctl get pods -n eventstreams\n\nNAME                                               READY   STATUS             RESTARTS   AGE\neventstreams-ibm-es-release-cm-creater-job-gkgx2   0/1     ImagePullBackOff   0          1m\n")),Object(n.b)("p",null,"You caan then access the pod logs to assess what’s going on:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"kubectl logs eventstreams-ibm-es-release-cm-creater-job-gkgx2 -n eventstreams\n")),Object(n.b)("p",null,"One possible common issue is related to the pod trying and failing to pull image from local repository. To find the solution, you need to know the name of the helm repository: "),Object(n.b)("h2",null,"Getting started application"),Object(n.b)("p",null,"Use the Event Stream Toolbox to download a getting started application we can use to test the deployment and as code base for future Kafka consumer / producer development."),Object(n.b)("p",null,Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"845px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"61.80555555555556%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAABdklEQVQoz41Sy07DMBDMf/MvXPgMDvwDpx5AQFvaPOzEryR27HhYmyZqUStqabRryZ6d2d1CKo3t9xHHqsn42h2wo3tZM8QYsZyUn99vnUKbHlXdoBMCbSfQMJ6j1mZ9FPyMeEb8D+GA/aFG2bSwLoD+YgoRzkeMdDf9BMGHu1UWo/U41l0G6wxU7yCNJbicK4pTqnIvoRAdyqqGNiZbTfZLAuPtav+X7GT3P8LNTuJ9W6JqGHgnEcIM7wPFkPMwz6uyc/xVvOTFnnvUZDVNW+ke955rBbJCRUQVWU72eEt95DyrFUKuj+ZwqfKa7TjH/K7Qg8fHtsLb5wGtHNCpMUehLczoIbVDy4bcgrQRUhn0g4VPrcntSW2JGGgbemVRJHYmaHVK2kM1odMT2gTKuXJg0kITcRI1jBMMkaVopwB3Qlq3hDn18J7tv9lHUpZwMeWLaWXyuOxIxlLQupmGR4qFQ0PQvYdoerSlwfPTKx4fXrDdMPwAtlepP4zmQWwAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies starter app",title:"ies starter app",src:"/refarch-eda/static/e2cc7c0aeff48b7444231048797002c8/4d91f/ies-starter-app.png",srcSet:["/refarch-eda/static/e2cc7c0aeff48b7444231048797002c8/7fc1e/ies-starter-app.png 288w","/refarch-eda/static/e2cc7c0aeff48b7444231048797002c8/a5df1/ies-starter-app.png 576w","/refarch-eda/static/e2cc7c0aeff48b7444231048797002c8/4d91f/ies-starter-app.png 845w"],sizes:"(max-width: 845px) 100vw, 845px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(n.b)("p",null,Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"913px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"67.70833333333333%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAAsSAAALEgHS3X78AAAB2UlEQVQ4y42TT2/TMBjG+3n3EWBcuA0mBOMwJrTdJtiNI5+AUw8wAdNCV6Vt/rRN7Dj/ncbOw2uvDWjq1lr66U1s60ne57EHo/EEfriAqXfuDH+oijSHGV3XYd+x2TuoqhqykSirCrWUqOoaSqn1Jm037sNGdFCtBLIiQ1qklrzKwQRHJUuoboVWNxa1FbMu7b5eUBQcPE3AEm6JWIyyLtFBEXqNgu7aRzGd9IK3v124Yx/hfAk/mFvSNENRlMiLAnl+j1J6Pw9PDr7iy/vhw1Vorbd6tNND55b+0PUx80P7d4xT+1yAJ4La54jpPYoZ0ix/UrQXvHEcjF0XzuiOBEMIkVoxTkIJVfMBI7ZJ/ql2reBowhBEJUImkZcNVitKrlVEa0VMfdj+Bv3fOe09PDq9xJuPn3F89gnvzq9wcnGFl2/P8eL47B+vP+CQeP7qtOeQMPMHz44wvL6xYoo+PJhMPcw8H0FICRPGy8nUh2vm6XnqBbZ65G/MhfU3XiPoNHwbXsOjm2aGtudQCDomKUzlSWK9YxRGmmWQskHT3LPrGvYtf//p4McvB1N/iWBOfi4YpUrpkugiim0oy4jRlZRbU1Zrf/tQ5qxGGNdYitbCMnNDdqf52PgL/C4pUgCzEpcAAAAASUVORK5CYII=')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies starter app2",title:"ies starter app2",src:"/refarch-eda/static/42dd13698502b238be9f7996008fab78/b5dc0/ies-starter-app2.png",srcSet:["/refarch-eda/static/42dd13698502b238be9f7996008fab78/7fc1e/ies-starter-app2.png 288w","/refarch-eda/static/42dd13698502b238be9f7996008fab78/a5df1/ies-starter-app2.png 576w","/refarch-eda/static/42dd13698502b238be9f7996008fab78/b5dc0/ies-starter-app2.png 913w"],sizes:"(max-width: 913px) 100vw, 913px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(n.b)("p",null," One example of the generated app is in this repository under ",Object(n.b)("inlineCode",{parentName:"p"},"gettingStarted/EDAIEWStarterApp")," folder, and a description on how to compile, package and run it: see the ./gettingStarted/EDAIEWStarterApp/README/."),Object(n.b)("p",null,"The application runs in Liberty at the URL: ",Object(n.b)("a",r({parentName:"p"},{href:"http://localhost:9080/EDAIESStarterApp/"}),"http://localhost:9080/EDAIESStarterApp/")," and delivers a simple user interface splitted into two panels: producer and consumer."),Object(n.b)("p",null,Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1121px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"47.56944444444444%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAKCAYAAAC0VX7mAAAACXBIWXMAAAsSAAALEgHS3X78AAAByElEQVQoz4WSy27aYBCFva6aNji0BNtgLjbG92BjjA12CJQQorAIqKoitVWlqtu8Rl4g73s6/0RUCBZdHHlkab6Zc+aX4vIeTnKDlp+hHeTohBM0nBSKNfynajvAecNBpen+V9Jq+xOT1Q7F3Q4l6Xr9Fd2rKUFC1HvxCfDwe/yPgbOHJ2TLHfxsCW/8BV664DrMb9EJJgytdkJUqEnmZtF4CnobYEMazjYICGQnc7I+Z/v7uumOGfipE+BMc/Fe6Z9YFKCPmo2KHkBuhZCSxRY14woXrYAaQ6oHrM+kS4Kp/QSy7sEa3SKY3OFdzcAH1WaIgF2aEXRniO5oA21wD+n7n2dExRoG5Say2+emWDHXAnhOm6TzBzw+/aaDjdCwEwINGCjrLi3j8VDOcEoHSecbzq9PdgVAs0cspReRYmrw0fIyxOUaVlxStjlUGspWDw4kJPWSBfrjJdxsBdXNoHk5FDenDQI4317hbF9QUQ2OpOmmDBLRiEEquZCPr2zGM1jDGzRogzptVxNHMMVlfbSLXzCKH7jQRYOHKm0qLApg28/RJPsnz8YcFLCia7bYDafoRSXnJKzXux4U8+1Yh7aOn8v+GQn9BUlfJzRf9YbiAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies start app run",title:"ies start app run",src:"/refarch-eda/static/d42601e3584df08abf7fdb67ff970854/4cfe9/ies-start-app-run.png",srcSet:["/refarch-eda/static/d42601e3584df08abf7fdb67ff970854/7fc1e/ies-start-app-run.png 288w","/refarch-eda/static/d42601e3584df08abf7fdb67ff970854/a5df1/ies-start-app-run.png 576w","/refarch-eda/static/d42601e3584df08abf7fdb67ff970854/4cfe9/ies-start-app-run.png 1121w"],sizes:"(max-width: 1121px) 100vw, 1121px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    "),"  "),Object(n.b)("p",null,"The figure below illustrates the fact that the connetion to the broker was not working for a short period of time, so the producer has error, but because of the buffering capabilities, it was able to pace and then as soon as the connection was re-established the consumer started to get the messages. No messages were lost!."),Object(n.b)("p",null,Object(n.b)("span",r({parentName:"p"},{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1090px"}}),"\n      ",Object(n.b)("span",r({parentName:"span"},{className:"gatsby-resp-image-background-image",style:{paddingBottom:"58.333333333333336%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAMCAYAAABiDJ37AAAACXBIWXMAAAsSAAALEgHS3X78AAACRElEQVQoz42TS2/aUBCF2VXqIkl5JxgTiAEbHBswxhjCG8oj4ZEKuqmqVsqmi/6//rzTc8e0jaouuhjZ4JnvnjkzN6aZPm6qbaTvGr8jW24hZ7aRLDpoDdYYLJ/xJmPiQqshrtfx7hxX+ZrkpIo2UpUQ8ZKP2HB9RPNhhVpnBrs7lyje9+SQZMmFN1wjnG1Rac/RnR/wNmPgImfhUrMEqPJ0swXNOyBpzRALF8/wxk8IZjt0GeF8D6PxgBRhiVuHwA3/38LtLbD+8BnV1hBVb4S85Z+hEfwyV8aVVkVsdfyK6e6TtNboL0WtP34UsFKqfvcXB2SNpuSU7kNc05IMrUkUbFEZBS2gDTHLn8Fw+1JcdHrRk0XqmVYQttwjPMP3cLYXb/NWR0LlqU7SJeW9i3iBwNXpBRrlywcWpXm6imzFQ6LoCrC/2CNFRZY/laEp3wr1LsrNAQp2F7c2RbgBPbcR+/jlm3jn9N7D4UAaZaqqtGAqYKHGNlcRkCrU4KIN8AV45z5Arwd8D1FwOhHQGz3BGz2i2h7zJH6oMYHtqIK0NeLAdmx5J0CrM2Xrf4AGFQqQdbe/gGawQINQFbrLBHcI3aGn/gbVlx8I9t8RTpZsuUmFfwEb/wD6k620W6J8gythNIdSkLO6uG5u0ZkfX7X8HwpDLqtB2DU909mumrQAaXxCNxFMnjDenGRodjCXaQvQVkMZCjgayhnY5lKrFVFmq9NKXCEBMpKccme6xfjxxKtmyxBUntyOV4drao3q6qra+AllUHKjl48q/wAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}})),"\n  ",Object(n.b)("img",r({parentName:"span"},{className:"gatsby-resp-image-image",alt:"ies start app run2",title:"ies start app run2",src:"/refarch-eda/static/03885bd439f05c4c1a9474847c2d189f/503c8/ies-start-app-run2.png",srcSet:["/refarch-eda/static/03885bd439f05c4c1a9474847c2d189f/7fc1e/ies-start-app-run2.png 288w","/refarch-eda/static/03885bd439f05c4c1a9474847c2d189f/a5df1/ies-start-app-run2.png 576w","/refarch-eda/static/03885bd439f05c4c1a9474847c2d189f/503c8/ies-start-app-run2.png 1090w"],sizes:"(max-width: 1090px) 100vw, 1090px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"})),"\n    ")," "),Object(n.b)("p",null,"We have two solution implementations using Kafka and Event Streams ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-asset-analytics"}),"the manufacturing asset analytics")," and the  most recent ",Object(n.b)("a",r({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc"}),"KC container shipment solution"),". We recommend using the second implementation."),Object(n.b)("h2",null,"Verifying ICP Events Streams installation"),Object(n.b)("p",null,"Once connected to the cluster with kubectl, get the list of pods for the namespace you used to install Kafka or IBM Event Streams:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"$ kubectl get pods -n streaming\n\nNAME                                                              READY     STATUS    RESTARTS\ngreen-even-c353-ibm-es-elas-ad8d-0                                1/1       Running   0          3d\ngreen-even-c353-ibm-es-elas-ad8d-1                                1/1       Running   0          3d\ngreen-even-c353-ibm-es-kafka-sts-0                                4/4       Running   2          3d\ngreen-even-c353-ibm-es-kafka-sts-1                                4/4       Running   2          3d\ngreen-even-c353-ibm-es-kafka-sts-2                                4/4       Running   5          3d\ngreen-even-c353-ibm-es-zook-c4c0-0                                1/1       Running   0          3d\ngreen-even-c353-ibm-es-zook-c4c0-1                                1/1       Running   0          3d\ngreen-even-c353-ibm-es-zook-c4c0-2                                1/1       Running   0          3d\ngreen-events-streams-ibm-es-access-controller-deploy-7cbf8jjs9n   2/2       Running   0          3d\ngreen-events-streams-ibm-es-access-controller-deploy-7cbf8st95z   2/2       Running   0          3d\ngreen-events-streams-ibm-es-indexmgr-deploy-6ff759779-c8ddc       1/1       Running   0          3d\ngreen-events-streams-ibm-es-proxy-deploy-777d6cf76c-bxjtq         1/1       Running   0          3d\ngreen-events-streams-ibm-es-proxy-deploy-777d6cf76c-p8rkc         1/1       Running   0          3d\ngreen-events-streams-ibm-es-rest-deploy-547cc6f9b-774xx           3/3       Running   0          3d\ngreen-events-streams-ibm-es-ui-deploy-7f9b9c6c6f-kvvs2            3/3       Running   0          3d\n\n")),Object(n.b)("p",null,"Select the first pod: green-even-c353-ibm-es-kafka-sts-0 , then execute a bash shell so you can access the Kafka tools:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"$ kubectl exec green-even-c353-ibm-es-kafka-sts-0 -itn streaming -- bash\nbash-3.4# cd /opt/Kafka/bin\n")),Object(n.b)("p",null,"Now you have access to the kafka tools. The most important thing is to get the hostname and port number of the zookeeper server. To do so use the kubectl command:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"$ kubectl describe pods green-even-c353-ibm-es-zook-c4c0-0  --namespace streaming\n")),Object(n.b)("p",null,"In the long result get the client port ( ZK_CLIENT_PORT: 2181) information and IP address (IP: 192.168.76.235). Using this information, in the bash shell within the Kafka broker server we can do the following command to get the topics configured."),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"$ ./Kafka-topics.sh --list -zookeeper  192.168.76.235:2181\n# We can also use the service name of zookeeper and let k8s DNS resolve the IP address\n$ ./Kafka-topics.sh --list -zookeeper  green-even-c353-ibm-es-zook-c4c0-0.streaming.svc.cluster.local:2181\n")),Object(n.b)("h3",null,"Using the Event Stream CLI"),Object(n.b)("p",null,"If not done already, you can install the Event Stream CLI on top of IBM cloud CLI by first downloading it from the Event Stream console and then running this command:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{}),"$ cloudctl plugin install ./es-plugin\n")),Object(n.b)("p",null,"Here is a simple summary of the possible ",Object(n.b)("inlineCode",{parentName:"p"},"cloudctl es")," commands:"),Object(n.b)("pre",null,Object(n.b)("code",r({parentName:"pre"},{className:"language-shell"}),"# Connect to the cluster\ncloudctl es init\n\n# create a topic  - default is 3 replicas\ncloudctl es topic-create streams-plaintext-input\ncloudctl es topic-create streams-wordcount-output --replication-factor 1 --partitions 1\n\n# list topics\ncloudctl es topics\n\n# delete topic\ncloudctl es topic-delete streams-plaintext-input\n")),Object(n.b)("h2",null,"Further Readings"),Object(n.b)("ul",null,Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://www.ibm.com/cloud/event-streams"}),"IBM Event Streams main page")),Object(n.b)("li",{parentName:"ul"},Object(n.b)("a",r({parentName:"li"},{href:"https://ibm.github.io/event-streams"}),"IBM Event Streams Product Documentation"))))}l.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-deployments-eventstreams-readme-mdx-2801a77e4ef149a94fc8.js.map
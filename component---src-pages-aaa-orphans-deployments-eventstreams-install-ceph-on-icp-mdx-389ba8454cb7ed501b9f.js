(window.webpackJsonp=window.webpackJsonp||[]).push([[19,101],{"013z":function(e,t,a){"use strict";var r=a("q1tI"),n=a.n(r),c=a("NmYn"),l=a.n(c),b=a("Wbzz"),o=a("Xrax"),i=a("k4MR"),s=a("TSYQ"),p=a.n(s),d=a("QH2O"),m=a.n(d),u=a("qKvR"),h=function(e){var t,a=e.title,r=e.theme,n=e.tabs,c=void 0===n?[]:n;return Object(u.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=c.length,t[m.a.darkMode]="dark"===r,t))},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12"},Object(u.b)("h1",{id:"page-title",className:m.a.text},a)))))},g=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,r=Object(b.useStaticQuery)("1364590287").site.siteMetadata.repository,n=a||r,c=n.baseUrl,l=n.subDirectory,o=c+"/edit/"+n.branch+l+"/src/pages"+t;return c?Object(u.b)("div",{className:"bx--row "+g.row},Object(u.b)("div",{className:"bx--col"},Object(u.b)("a",{className:g.link,href:o},"Edit this page on GitHub"))):null},j=a("FCXl"),N=a("dI71"),f=a("I8xM"),y=function(e){function t(){return e.apply(this,arguments)||this}return Object(N.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,r=e.slug,n=r.split("/").filter(Boolean).slice(-1)[0],c=a.map((function(e){var t,a=l()(e,{lower:!0,strict:!0}),c=a===n,o=new RegExp(n+"/?(#.*)?$"),i=r.replace(o,a);return Object(u.b)("li",{key:e,className:p()((t={},t[f.selectedItem]=c,t),f.listItem)},Object(u.b)(b.Link,{className:f.link,to:""+i},e))}));return Object(u.b)("div",{className:f.tabsContainer},Object(u.b)("div",{className:"bx--grid"},Object(u.b)("div",{className:"bx--row"},Object(u.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(u.b)("nav",{"aria-label":t},Object(u.b)("ul",{className:f.list},c))))))},t}(n.a.Component),v=a("MjG9"),k=a("CzIb"),A=a("Asxa"),C=a("OIbQ"),w=a.n(C),T=function(e){var t=e.date,a=new Date(t);return t?Object(u.b)(A.c,{className:w.a.row},Object(u.b)(A.a,null,Object(u.b)("div",{className:w.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,r=e.location,n=e.Title,c=t.frontmatter,s=void 0===c?{}:c,p=t.relativePagePath,d=t.titleType,m=s.tabs,g=s.title,N=s.theme,f=s.description,A=s.keywords,C=s.date,w=Object(k.a)().interiorTheme,P=Object(b.useStaticQuery)("2456312558").site.pathPrefix,x=P?r.pathname.replace(P,""):r.pathname,E=m?x.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"",I=N||w;return Object(u.b)(i.a,{tabs:m,homepage:!1,theme:I,pageTitle:g,pageDescription:f,pageKeywords:A,titleType:d},Object(u.b)(h,{title:n?Object(u.b)(n,null):g,label:"label",tabs:m,theme:I}),m&&Object(u.b)(y,{title:g,slug:x,tabs:m,currentTab:E}),Object(u.b)(v.a,{padded:!0},a,Object(u.b)(O,{relativePagePath:p}),Object(u.b)(T,{date:C})),Object(u.b)(j.a,{pageContext:t,location:r,slug:x,tabs:m,currentTab:E}),Object(u.b)(o.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}},"tH9/":function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a("wx14"),n=a("zLVn"),c=(a("q1tI"),a("7ljp")),l=a("013z"),b=(a("qKvR"),{}),o={_frontmatter:b},i=l.a;function s(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(c.b)(i,Object(r.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://ceph.com/"},"Ceph")," is open source software designed to provide highly scalable object, block and file-based storage under a unified system."),Object(c.b)("p",null,"Ceph provides a POSIX-compliant network file system (CephFS) that aims for high performance, large data storage, and maximum compatibility with legacy applications."),Object(c.b)("p",null,Object(c.b)("a",{parentName:"p",href:"https://github.com/rook/rook"},"Rook")," is an open source orchestrator for distributed storage systems running in cloud native environments."),Object(c.b)("p",null,"Rook turns storage software into self-managing, self-scaling, and self-healing storage services. It does this by automating deployment, bootstrapping, configuration, provisioning, scaling, upgrading, migration, disaster recovery, monitoring, and resource management. Rook uses the facilities provided by the underlying cloud-native container management, scheduling and orchestration platform to perform its duties."),Object(c.b)("p",null,"!!! note\nThe Helm chart ",Object(c.b)("em",{parentName:"p"},"ibm-rook-rbd-cluster")," is used for setting up Ceph Cluster in IBM Cloud Private.   "),Object(c.b)("h2",null,"Environment"),Object(c.b)("p",null,"A typical IBM Cloud Private Environment includes Boot node, Master node, Management node, Proxy node and Worker nodes. When the Ceph RBD Cluster is used for providing storage for API Connect, any three worker nodes should be configured to have additional raw disks."),Object(c.b)("p",null,"The following set of systems can be used as reference for building ",Object(c.b)("em",{parentName:"p"},"development (non-HA) environment")," that runs IBM API Connect workload on IBM Cloud Private."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Node type"),Object(c.b)("th",{parentName:"tr",align:"center"},"Number of nodes"),Object(c.b)("th",{parentName:"tr",align:"center"},"CPU"),Object(c.b)("th",{parentName:"tr",align:"center"},"Memory (GB)"),Object(c.b)("th",{parentName:"tr",align:"center"},"Disk (GB)"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Boot (FTP Server)"),Object(c.b)("td",{parentName:"tr",align:"center"},"1"),Object(c.b)("td",{parentName:"tr",align:"center"},"8"),Object(c.b)("td",{parentName:"tr",align:"center"},"32"),Object(c.b)("td",{parentName:"tr",align:"center"},"2048")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Master"),Object(c.b)("td",{parentName:"tr",align:"center"},"1"),Object(c.b)("td",{parentName:"tr",align:"center"},"8"),Object(c.b)("td",{parentName:"tr",align:"center"},"32"),Object(c.b)("td",{parentName:"tr",align:"center"},"300")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Management"),Object(c.b)("td",{parentName:"tr",align:"center"},"1"),Object(c.b)("td",{parentName:"tr",align:"center"},"8"),Object(c.b)("td",{parentName:"tr",align:"center"},"32"),Object(c.b)("td",{parentName:"tr",align:"center"},"300")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Proxy"),Object(c.b)("td",{parentName:"tr",align:"center"},"1"),Object(c.b)("td",{parentName:"tr",align:"center"},"4"),Object(c.b)("td",{parentName:"tr",align:"center"},"16"),Object(c.b)("td",{parentName:"tr",align:"center"},"300")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Worker"),Object(c.b)("td",{parentName:"tr",align:"center"},"3"),Object(c.b)("td",{parentName:"tr",align:"center"},"8"),Object(c.b)("td",{parentName:"tr",align:"center"},"32"),Object(c.b)("td",{parentName:"tr",align:"center"},"300+500(disk2)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Total"),Object(c.b)("td",{parentName:"tr",align:"center"},"7"),Object(c.b)("td",{parentName:"tr",align:"center"},"52"),Object(c.b)("td",{parentName:"tr",align:"center"},"208"),Object(c.b)("td",{parentName:"tr",align:"center"},"3848+1500(disk2)")))),Object(c.b)("p",null,"The following set of systems can be used as reference for building ",Object(c.b)("em",{parentName:"p"},"production (HA) environment")," that runs IBM API Connect workload on IBM Cloud Private."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",{parentName:"tr",align:"center"},"Node type"),Object(c.b)("th",{parentName:"tr",align:"center"},"Number of nodes"),Object(c.b)("th",{parentName:"tr",align:"center"},"CPU"),Object(c.b)("th",{parentName:"tr",align:"center"},"Memory (GB)"),Object(c.b)("th",{parentName:"tr",align:"center"},"Disk (GB)"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Boot (FTP Server)"),Object(c.b)("td",{parentName:"tr",align:"center"},"1"),Object(c.b)("td",{parentName:"tr",align:"center"},"8"),Object(c.b)("td",{parentName:"tr",align:"center"},"32"),Object(c.b)("td",{parentName:"tr",align:"center"},"2048")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Master"),Object(c.b)("td",{parentName:"tr",align:"center"},"3"),Object(c.b)("td",{parentName:"tr",align:"center"},"8"),Object(c.b)("td",{parentName:"tr",align:"center"},"32"),Object(c.b)("td",{parentName:"tr",align:"center"},"300")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Management"),Object(c.b)("td",{parentName:"tr",align:"center"},"2"),Object(c.b)("td",{parentName:"tr",align:"center"},"8"),Object(c.b)("td",{parentName:"tr",align:"center"},"32"),Object(c.b)("td",{parentName:"tr",align:"center"},"300")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Proxy"),Object(c.b)("td",{parentName:"tr",align:"center"},"3"),Object(c.b)("td",{parentName:"tr",align:"center"},"4"),Object(c.b)("td",{parentName:"tr",align:"center"},"16"),Object(c.b)("td",{parentName:"tr",align:"center"},"300")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Worker"),Object(c.b)("td",{parentName:"tr",align:"center"},"3"),Object(c.b)("td",{parentName:"tr",align:"center"},"16"),Object(c.b)("td",{parentName:"tr",align:"center"},"64"),Object(c.b)("td",{parentName:"tr",align:"center"},"300+750(disk2)")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",{parentName:"tr",align:"center"},"Total"),Object(c.b)("td",{parentName:"tr",align:"center"},"12"),Object(c.b)("td",{parentName:"tr",align:"center"},"108"),Object(c.b)("td",{parentName:"tr",align:"center"},"432"),Object(c.b)("td",{parentName:"tr",align:"center"},"5348+2250(disk2)")))),Object(c.b)("p",null,"!!! note\nAdditional worker nodes will be required when there is a a need to run workloads other than IBM API Connect on IBM Cloud Private."),Object(c.b)("h2",null,"Setup"),Object(c.b)("p",null,"This document covers the setup of ",Object(c.b)("em",{parentName:"p"},"Ceph")," storage using ",Object(c.b)("em",{parentName:"p"},"Rook"),"."),Object(c.b)("p",null,"The following tasks are performed for setting up the Ceph Cluster. "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#1-download-the-required-setup-files"},"Download the required setup files")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#2-logon-to-ibm-cloud-private-cluster"},"Logon to IBM Cloud Private Cluster")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#3-setup-ceph-cluster"},"Setup Ceph Cluster")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#4-verify-ceph-cluster"},"Verify Ceph cluster")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("a",{parentName:"li",href:"#5-troubleshooting-ceph-setup"},"Troubleshooting Ceph setup"))),Object(c.b)("h3",null,"1. Download the required setup files"),Object(c.b)("p",null,"!!! note\nThe following files are required for installing ",Object(c.b)("em",{parentName:"p"},"ibm-rook-rbd-cluster")," chart and setting up Ceph cluster"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/scripts/icp/login.sh"},"login.sh")," - Utility for logging onto IBM Cloud Private"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://raw.githubusercontent.com/IBM/charts/master/repo/stable/ibm-rook-rbd-cluster-0.8.3.tgz"},"ibm-rook-rbd-cluster-0.8.3.tgz")," - IBM Chart for Rook RBD Cluster"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/ceph-values.yaml"},"ceph-values.yaml")," - Sample values.yaml for installing Ceph Cluster "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/rook-ceph-cluster-role-binding.yaml"},"rook-ceph-cluster-role-binding.yaml")," - ClusterRoleBinding for the service account rook-ceph-cluster"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/rook-ceph-operator-values.yaml"},"rook-ceph-operator-values.yaml")," - Sample values.yaml for installing rook operator"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/rook-cluster-role.yaml"},"rook-cluster-role.yaml")," - ClusterRole for the resource rook-privileged"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/rook-pod-security-policy.yaml"},"rook-pod-security-policy.yaml")," - Define PodSecurityPolicy rook-privileged"),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/setup.sh"},"setup.sh")," - Utility for setting up Ceph Cluster "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/status.sh"},"status.sh")," - Utility for verifying Ceph Cluster "),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/cleanup.sh"},"cleanup.sh")," - Utility for cleaning up Ceph Cluster ")),Object(c.b)("h3",null,"2. Logon to IBM Cloud Private Cluster"),Object(c.b)("p",null,"The script ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/scripts/icp/login.sh"},"login.sh")," can be run to login to IBM Cloud Private Cluster. "),Object(c.b)("p",null,"!! note\nThe script should be updated to include the correct value for ",Object(c.b)("em",{parentName:"p"},"CLUSTER_NAME"),"."),Object(c.b)("p",null,"Sample run of the login script is as follows: "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"83.33333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAARCAYAAADdRIy+AAAACXBIWXMAABYlAAAWJQFJUiTwAAABxUlEQVQ4y52U65KaQBCFef8HSbJRcdWNliyLMCMgV7muXIToVt7jpGeIqViVH4s/Ts0NvpmentNK7C5xPKwQO0uE+2eIcRas8Z5oUj8bPkpKEW9R0o9tuUNfM3SVJRcu7V5qNNDdT5FHWwm6nO1B/8D6scDYo5DdFRLvBW1hoE5fUWe6VE+bfAj4GKC4N5+p8AkaFybi3ECS73AUKi2k7wzliX0aqgR8joCryKINmpqjbQadSWJck871iBOK09n6E+r8DdfzEN7/9GngwVLBtG+oS1Mmon8gEXfA1FER2zPkwQrFaXgyvwh8bR8EbsMlrHgJLVjg9ajDzExwkkjEQ8BJZEIlPYUm5pEBRjCvsJBQdtt63P1JoJ6+gecMVmaBUXsoGezcRFWxh8JW0lSlDL+gytekHzjlG3S00D2aFJ9PqTgskPgr2TaFPjrMO6BnzuDT4y6PW3qH916WfhZh33xdc1lA+j/9m9dvc4NT9nNpPVHC8nBDhWKDLFz/LWEN+bsSvqaPr52DD9K1s2VfbC4OcZu7kDEUrn0B177CMb5LCddEzkJuIDbyrBlEFK4xwcGcym9E391NZO0UtUDMh/YzRCn8DWCxjAPicX2vAAAAAElFTkSuQmCC')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"loginToDefaultNamespace",title:"loginToDefaultNamespace",src:"/refarch-eda/static/27ac0323426bb5b53733d728d1a9ae90/3cbba/loginToDefaultNamespace.png",srcSet:["/refarch-eda/static/27ac0323426bb5b53733d728d1a9ae90/7fc1e/loginToDefaultNamespace.png 288w","/refarch-eda/static/27ac0323426bb5b53733d728d1a9ae90/a5df1/loginToDefaultNamespace.png 576w","/refarch-eda/static/27ac0323426bb5b53733d728d1a9ae90/3cbba/loginToDefaultNamespace.png 1152w","/refarch-eda/static/27ac0323426bb5b53733d728d1a9ae90/0b124/loginToDefaultNamespace.png 1728w","/refarch-eda/static/27ac0323426bb5b53733d728d1a9ae90/69087/loginToDefaultNamespace.png 1732w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("h3",null,"3. Setup Ceph Cluster"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Step #1")," Update the ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/ceph-values.yaml"},"ceph-values.yaml")," to match your environment."),Object(c.b)("p",null,"The file ",Object(c.b)("em",{parentName:"p"},"ceph-values.yaml")," needs to be updated to list the IP address of the storage node within the IBM Cloud Private cluster. "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'...\n#\n# UPDATE VARIABLES TO MATCH THE ENVIRONMENT\n#   \n    nodes:\n    - name: "X.X.X.X"\n      devices:\n      - name: "DISK_NAME"\n    - name: "Y.Y.Y.Y"\n      devices:\n      - name: "DISK_NAME"\n    - name: "Z.Z.Z.Z"\n      devices:\n      - name: "DISK_NAME"\n...\n...\n')),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Step #2")," Modify and run the setup script to install Rook Operator chart and the IBM Rook RBD Cluster chart"),Object(c.b)("p",null,"The contents of the script ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/setup.sh"},"setup.sh")," is as follows: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"#\n# UPDATE VARIABLES TO MATCH THE ENVIRONMENT\n#\n\n# Define the location of images \nIMAGE_DIR=/DIRECTORY_HAVING_IMAGES\n\n...\n")),Object(c.b)("p",null,"!!! note\nThe script should be updated to include the correct location for ",Object(c.b)("em",{parentName:"p"},"IMAGE_DIR")," that has the location where the chart ibm-rook-rbd-cluster-0.8.3.tgz is downloaded and unzipped. "),Object(c.b)("p",null,"The output of Ceph install is listed below for reference: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"./samples/ceph_install.log"},"ceph_install.log"))),Object(c.b)("h3",null,"4. Verify Ceph cluster"),Object(c.b)("p",null,"The script ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/status.sh"},"status.sh")," can be run to check if Ceph cluster is working as expected. "),Object(c.b)("p",null,"The contents of the script ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/status.sh"},"status.sh")," is as follows: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"./deployments/ceph/status.sh \n")),Object(c.b)("p",null,"Expected output is listed below. "),Object(c.b)("span",{className:"gatsby-resp-image-wrapper",style:{position:"relative",display:"block",marginLeft:"auto",marginRight:"auto",maxWidth:"1152px"}},"\n      ",Object(c.b)("span",{parentName:"span",className:"gatsby-resp-image-background-image",style:{paddingBottom:"64.58333333333334%",position:"relative",bottom:"0",left:"0",backgroundImage:"url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAANCAYAAACpUE5eAAAACXBIWXMAABYlAAAWJQFJUiTwAAACEUlEQVQ4y3WT627aQBCFef93qNSkJddGabhfjA0Y26EJhoRrwARIHmQ636xBUaX+WK3X3j37nZnjQti6lDQpy+tTTV7+VCWNSzJ+LMssbcg4Kcli3JLpqC6P3V8y0e+7t77uL8lmHshm0bXnxaRlY7MIpBB1rm1z3LmRYe9OkuBWdutQDlkkh20k+81APt4Tu2A17ch65otfObdLEZ2nTdmuerquOMHYvxEoe/WiRN61Pb8rBYII84woBzMlWs996TcvTDBbdu0dF+OQdSFWwrB9aZuGShq2LmQyrMj0uS7LV89EEZyNGkYEYa9RdIRcoOt99o/goH1lZIl/a/ah4iNi/xd0FlnjhjqbIGLQsQk6avkU3htBGj+cDnwVDGo/XGNyQr7TUKvhQO0ihii0ida0ef/N1p3ymXavLZ+7xAnmREHVCWa54Mc2lpFevtISFSLvytEZadGsY5sGQQ8xt1PTNYTaFL96LqRj+dI2agSfo9+2NssIMge6kZnDWGZgn2xCiJgJVs4sXiao1HQZ4jeNlbNcd4J9FQb9oDeeGpIN5FNzSGyoGUTd2s9TbI41JPTWlFBrNfAI953ZZCNBRuiYRSiIEgQE3Ct9l1H04JqkY5835dTliUaAF85mRebjptme5jYRmykh77HGM2WA+usPwFygq1ZDz9UQO9SNGkHMoZ3mkDpBxEzXuYQEHAWP4y9HtF9osUgI3gAAAABJRU5ErkJggg==')",backgroundSize:"cover",display:"block"}}),"\n  ",Object(c.b)("img",{parentName:"span",className:"gatsby-resp-image-image",alt:"cephGetStatus",title:"cephGetStatus",src:"/refarch-eda/static/2edf70cf7ff5d6c0adeb4118c9fc3cdd/3cbba/cephGetStatus.png",srcSet:["/refarch-eda/static/2edf70cf7ff5d6c0adeb4118c9fc3cdd/7fc1e/cephGetStatus.png 288w","/refarch-eda/static/2edf70cf7ff5d6c0adeb4118c9fc3cdd/a5df1/cephGetStatus.png 576w","/refarch-eda/static/2edf70cf7ff5d6c0adeb4118c9fc3cdd/3cbba/cephGetStatus.png 1152w","/refarch-eda/static/2edf70cf7ff5d6c0adeb4118c9fc3cdd/cc5f9/cephGetStatus.png 1176w"],sizes:"(max-width: 1152px) 100vw, 1152px",style:{width:"100%",height:"100%",margin:"0",verticalAlign:"middle",position:"absolute",top:"0",left:"0"},loading:"lazy"}),"\n    "),Object(c.b)("h3",null,"5. Troubleshooting Ceph setup"),Object(c.b)("h4",null,"5.1 Steps for reseting an used disk"),Object(c.b)("p",null,"It is possible that sometimes OSD pods does’t start up even though the OSD prepare jobs have completed successfully.\nIt could happen when the device you have specified does not have a raw disk and the device name you have listed was used for other storage like GlusterFS cluster."),Object(c.b)("p",null,"In such case the following commands can be run to collect the Logical Volume group ID and Physical volume and remove it fully so that the raw disk is made available for the Ceph cluster."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"pvs\npvdisplay\nvgremove LOGIOCAL_VOLUME_GROUP_ID -y \npvremove PHYSICAL_VOLUME\n")),Object(c.b)("p",null,"The output of the aforesaid commands is listed below."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},'[root@rsun-rhel-glusterfs03 ~]# pvs\n  PV         VG                                  Fmt  Attr PSize   PFree  \n  /dev/sda2  rhel                                lvm2 a--   39.00g      0 \n  /dev/sdb   vg_687894352b254c630b291bf094a8d43d lvm2 a--  499.87g 499.87g\n  /dev/sdc   rhel                                lvm2 a--  500.00g      0 \n[root@rsun-rhel-glusterfs03 ~]# pvdisplay\n  --- Physical volume ---\n  PV Name               /dev/sdb\n  VG Name               vg_687894352b254c630b291bf094a8d43d\n  PV Size               500.00 GiB / not usable 132.00 MiB\n  Allocatable           yes \n  PE Size               4.00 MiB\n  Total PE              127967\n  Free PE               127967\n  Allocated PE          0\n  PV UUID               v6xOuh-M2ot-oXfl-IWyf-TnYL-nX3a-kzqizN\n   \n  --- Physical volume ---\n  PV Name               /dev/sda2\n  VG Name               rhel\n  PV Size               39.00 GiB / not usable 3.00 MiB\n  Allocatable           yes (but full)\n  PE Size               4.00 MiB\n  Total PE              9983\n  Free PE               0\n  Allocated PE          9983\n  PV UUID               tNjUif-RlBT-kdDn-PWwE-LHlq-3w9O-65Hlph\n   \n  --- Physical volume ---\n  PV Name               /dev/sdc\n  VG Name               rhel\n  PV Size               500.00 GiB / not usable 4.00 MiB\n  Allocatable           yes (but full)\n  PE Size               4.00 MiB\n  Total PE              127999\n  Free PE               0\n  Allocated PE          127999\n  PV UUID               7CXpz5-95hb-0WAC-3Efe-XrY1-s6E6-dqLasC\n   \n[root@rsun-rhel-glusterfs03 ~]# vgremove vg_687894352b254c630b291bf094a8d43d -y \n  Volume group "vg_687894352b254c630b291bf094a8d43d" successfully removed\n[root@rsun-rhel-glusterfs03 ~]# pvremove /dev/sdb \n  Labels on physical volume "/dev/sdb" successfully wiped.\n')),Object(c.b)("h4",null,"5.2 Steps for uninstalling the rook-ceph setup"),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Step #1")," The script ",Object(c.b)("a",{parentName:"p",href:"https://github.com/ibm-cloud-architecture/refarch-eda/blob/master/deployments/ceph/cleanup.sh"},"cleanup.sh")," can be run to remove the Ceph setup completely."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"./deployments/ceph/cleanup.sh\n")),Object(c.b)("p",null,Object(c.b)("strong",{parentName:"p"},"Step #2")," Remove the contents of the temporary directory used by rook: ",Object(c.b)("em",{parentName:"p"},"/var/lib/rook")),Object(c.b)("p",null,"The following command should run on all the worker nodes: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"rm -fr /var/lib/rook\n")),Object(c.b)("h1",null,"Ceph Cluster Management"),Object(c.b)("p",null,"The following links has additional details on how to diagnose, troubleshoot, monitor and report Ceph cluster storage: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/rook/rook/tree/master/Documentation"},"https://github.com/rook/rook/tree/master/Documentation")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/rook/rook/blob/master/Documentation/common-issues.md#troubleshooting-techniques"},"https://github.com/rook/rook/blob/master/Documentation/common-issues.md#troubleshooting-techniques")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://sysdig.com/blog/monitor-ceph-top-5-metrics-watch/"},"https://sysdig.com/blog/monitor-ceph-top-5-metrics-watch/")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://tracker.ceph.com/projects/ceph/wiki/10_Commands_Every_Ceph_Administrator_Should_Know"},"https://tracker.ceph.com/projects/ceph/wiki/10_Commands_Every_Ceph_Administrator_Should_Know")),Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://sabaini.at/pages/ceph-cheatsheet.html"},"https://sabaini.at/pages/ceph-cheatsheet.html"))),Object(c.b)("p",null,"The ",Object(c.b)("em",{parentName:"p"},"Ceph Monitor")," pod can be attached using the following command:"),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"kubectl -n rook-ceph exec -it $(kubectl -n rook-ceph get pod -l \"app=rook-ceph-mon\" -o jsonpath='{.items[0].metadata.name}') bash\n")),Object(c.b)("p",null,"After being attached to the ",Object(c.b)("em",{parentName:"p"},"Ceph Monitor")," pod, the following commands can be run which provides status and statistics of the ",Object(c.b)("em",{parentName:"p"},"Ceph Cluster"),"."),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"ceph health \nceph status \nceph df \nceph osd stat\nceph osd tree\nceph osd df \nceph osd df tree\nceph osd perf \nceph osd pool stats\nceph osd status \nceph osd utilization\nceph auth list \nceph quorum_status\nceph mon_status\nceph mon dump \nceph pg dump \nceph pg stat\n")),Object(c.b)("p",null,"The following link has details on how to add and remove Ceph storage: "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://github.com/rook/rook/blob/master/design/cluster-update.md"},"https://github.com/rook/rook/blob/master/design/cluster-update.md"))),Object(c.b)("p",null,"The following link can be used as reference for backing up and restoring the images stored in the Ceph Pool. "),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},Object(c.b)("a",{parentName:"li",href:"https://nicksabine.com/post/ceph-backup/"},"https://nicksabine.com/post/ceph-backup/"))),Object(c.b)("p",null,"Related commands are: "),Object(c.b)("pre",null,Object(c.b)("code",{parentName:"pre"},"rbd ls -p replicapool\nrbd export \nrbd import \n")),Object(c.b)("p",null,"The aforesaid commands can be run after being attached to the Ceph Monitor pod. "))}s.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-aaa-orphans-deployments-eventstreams-install-ceph-on-icp-mdx-389ba8454cb7ed501b9f.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[21,84],{"013z":function(e,t,a){"use strict";var n=a("q1tI"),o=a.n(n),l=a("NmYn"),r=a.n(l),s=a("Wbzz"),c=a("Xrax"),i=a("k4MR"),b=a("TSYQ"),p=a.n(b),u=a("QH2O"),m=a.n(u),d=a("qKvR"),g=function(e){var t,a=e.title,n=e.theme,o=e.tabs,l=void 0===o?[]:o;return Object(d.b)("div",{className:p()(m.a.pageHeader,(t={},t[m.a.withTabs]=l.length,t[m.a.darkMode]="dark"===n,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:m.a.text},a)))))},h=a("BAC9"),O=function(e){var t=e.relativePagePath,a=e.repository,n=Object(s.useStaticQuery)("1364590287").site.siteMetadata.repository,o=a||n,l=o.baseUrl,r=o.subDirectory,c=l+"/edit/"+o.branch+r+"/src/pages"+t;return l?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},j=a("FCXl"),f=a("dI71"),x=a("I8xM"),N=function(e){function t(){return e.apply(this,arguments)||this}return Object(f.a)(t,e),t.prototype.render=function(){var e=this.props,t=e.title,a=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],l=a.map((function(e){var t,a=r()(e,{lower:!0,strict:!0}),l=a===o,c=new RegExp(o+"/?(#.*)?$"),i=n.replace(c,a);return Object(d.b)("li",{key:e,className:p()((t={},t[x.selectedItem]=l,t),x.listItem)},Object(d.b)(s.Link,{className:x.link,to:""+i},e))}));return Object(d.b)("div",{className:x.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",{"aria-label":t},Object(d.b)("ul",{className:x.list},l))))))},t}(o.a.Component),y=a("MjG9"),v=a("CzIb"),w=a("Asxa"),k=a("OIbQ"),q=a.n(k),P=function(e){var t=e.date,a=new Date(t);return t?Object(d.b)(w.c,{className:q.a.row},Object(d.b)(w.a,null,Object(d.b)("div",{className:q.a.text},"Page last updated: ",a.toLocaleDateString("en-GB",{day:"2-digit",year:"numeric",month:"long"})))):null};t.a=function(e){var t=e.pageContext,a=e.children,n=e.location,o=e.Title,l=t.frontmatter,b=void 0===l?{}:l,p=t.relativePagePath,u=t.titleType,m=b.tabs,h=b.title,f=b.theme,x=b.description,w=b.keywords,k=b.date,q=Object(v.a)().interiorTheme,T=Object(s.useStaticQuery)("2456312558").site.pathPrefix,I=T?n.pathname.replace(T,""):n.pathname,C=m?I.split("/").filter(Boolean).slice(-1)[0]||r()(m[0],{lower:!0}):"",D=f||q;return Object(d.b)(i.a,{tabs:m,homepage:!1,theme:D,pageTitle:h,pageDescription:x,pageKeywords:w,titleType:u},Object(d.b)(g,{title:o?Object(d.b)(o,null):h,label:"label",tabs:m,theme:D}),m&&Object(d.b)(N,{title:h,slug:I,tabs:m,currentTab:C}),Object(d.b)(y.a,{padded:!0},a,Object(d.b)(O,{relativePagePath:p}),Object(d.b)(P,{date:k})),Object(d.b)(j.a,{pageContext:t,location:n,slug:I,tabs:m,currentTab:C}),Object(d.b)(c.a,null))}},BAC9:function(e,t,a){e.exports={bxTextTruncateEnd:"EditLink-module--bx--text-truncate--end--2pqje",bxTextTruncateFront:"EditLink-module--bx--text-truncate--front--3_lIE",link:"EditLink-module--link--1qzW3",row:"EditLink-module--row--1B9Gk"}},DoNq:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return s})),a.d(t,"default",(function(){return b}));var n=a("wx14"),o=a("zLVn"),l=(a("q1tI"),a("7ljp")),r=a("013z"),s=(a("qKvR"),{}),c={_frontmatter:s},i=r.a;function b(e){var t=e.components,a=Object(o.a)(e,["components"]);return Object(l.b)(i,Object(n.a)({},c,a,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"Update 05/10/2019 - ICP 3.2.1"),Object(l.b)("h2",null,"Pre-requisites"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Access to an ICP cluster with an up to date catalog "),Object(l.b)("li",{parentName:"ul"},"Once logged to the admin consoler (something like: ",Object(l.b)("a",{parentName:"li",href:"https://172.16.254.80:8443"},"https://172.16.254.80:8443"),") go to the Command Line Tools menu and download the IBM Cloud Private CLI. Rename the downloaded file to cloudctl and move it to a folder in your $PATH (e.g. /usr/local/bin/cloudctl)"),Object(l.b)("li",{parentName:"ul"},"Download the kubeclt CLI that match ICP version. Rename and move the tool to /usr/local/bin/"),Object(l.b)("li",{parentName:"ul"},"Download the kubeclt CLI that match ICP version. Rename and move the tool to /usr/local/bin/"),Object(l.b)("li",{parentName:"ul"},"Get psql to access the postgresql.  ")),Object(l.b)("h2",null,"Steps"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Login to the cluster: ")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"cloudctl login -a https://172.16.254.80:8443 -u admin -p <passwordyoushouldknow>  --skip-ssl-validation\n")),Object(l.b)("p",null,"When selecting the postgresql tile in the database category of the catalog (",Object(l.b)("a",{parentName:"p",href:"https://172.16.254.80:8443/catalog/"},"https://172.16.254.80:8443/catalog/"),") the Overview gives some steps to follow, but those are from the product documentation and they may need some update. Below are the specifics we did:"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"For the namespace we use ",Object(l.b)("inlineCode",{parentName:"li"},"greencompute"),", so the secret was something like:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ kubectl create secret generic postgresql-pwd-secret --from-literal='postgresql-password=<>' --namespace greencompute\nsecret \"postgresql-pwd-secret\" created\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Create a persistence volume. You can use HostPath for development purpose, or if you have a NFS or ceph cluster available adapt the CRD file")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},'apiVersion: v1,\nkind: PersistentVolume,\nmetadata:\n    name: posgresql-pv,\nspec:\n    capacity:\n      storage: 10Gi\n    hostPath:\n      path: /bitnami/postgresql,\n      type: ""\n    accessModes:\n      ReadWriteOnce\n    persistentVolumeReclaimPolicy: Retain\n')),Object(l.b)("p",null,"For NFS use the following changes:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"}," spec:\n    nfs:\n      server:\n      path: /bitnami/postgresql\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"As we deploy postgres in a namespace scope, we need to specify an image policy to authorize access to docker.io repository:")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre",className:"language-yaml"},"apiVersion: securityenforcement.admission.cloud.ibm.com/v1beta1\nkind: ImagePolicy\nnamespace: greencompute\nmetadata:\n  name: postgresql-image-policy\nspec:\n  repositories:\n    - name: docker.io/*\n      policy:\n        va:\n          enabled: false\n")),Object(l.b)("p",null,"save the file as ",Object(l.b)("inlineCode",{parentName:"p"},"securitypolicies.yml")," and then run:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},"$ kubectl apply -f securitypolicies.yml -n greencompute\n$ kubectl describe ImagePolicy postgresql-image-policy -n greencompute\n\n")),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Use helm to install the release. Here is an example")),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'$ export PSWD=$(k get secret postgresql-pwd-secret -n greencompute -o jsonpath="{.data.postgresql-password}"  | base64 --decode; echo)\n$ helm install stable/postgresql --name postgresql --namespace greencompute --set postgresqlPassword=$PSWD,postgresqlDatabase=postgres --tls\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},"Access to the database with psql running locally on your computer")),Object(l.b)("p",null,"In one terminal start a port forwarding using: ",Object(l.b)("inlineCode",{parentName:"p"},"kubectl port-forward  postgresql-postgresql-0 5432:5432 &>> /dev/null &"),". Now we can connect our local ",Object(l.b)("inlineCode",{parentName:"p"},"psql")," CLI to the remote server via a command like:"),Object(l.b)("pre",null,Object(l.b)("code",{parentName:"pre"},'$ psql "dbname=postgres host=127.0.0.1 user=postgres port=5432 password=$PSWD"\n\npostgres=# \\d containers\n id           | character varying(255)      |           | not null | \n brand        | character varying(255)      |           |          | \n capacity     | integer                     |           | not null | \n created_at   | timestamp without time zone |           | not null | \n current_city | character varying(255)      |           |          | \n latitude     | double precision            |           | not null | \n longitude    | double precision            |           | not null | \n status       | integer                     |           |          | \n type         | character varying(255)      |           |          | \n updated_at   | timestamp without time zone |           | not null | \n')),Object(l.b)("p",null,"For more information about the ",Object(l.b)("inlineCode",{parentName:"p"},"psql")," tool see ",Object(l.b)("a",{parentName:"p",href:"http://postgresguide.com/utilities/psql.html"},"this note.")),Object(l.b)("h2",null,"Troubleshooting"),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"}," admission webhook “trust.hooks.securityenforcement.admission.cloud.ibm.com” denied the request: Deny “docker.io/bitnami/postgresql:10.7.0”, no matching repositories in ClusterImagePolicy and no ImagePolicies in the “greencompute” namespace")),Object(l.b)("p",null," Be sure to use a ImagePolicy and not a cluster policy when using namespace deployment."),Object(l.b)("blockquote",null,Object(l.b)("p",{parentName:"blockquote"},"Error: release postgresql failed: Internal error occurred: admission webhook “trust.hooks.securityenforcement.admission.cloud.ibm.com” denied the request: Deny “docker.io/bitnami/postgresql:10.7.0”, no matching repositories in the ImagePolicies")),Object(l.b)("p",null,"Be sure to authorize docker.io/* in the ImagePolicy."),Object(l.b)("h2",null,"More Readings"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://developer.ibm.com/recipes/tutorials/deploy-postgresql-into-ibm-cloud-private/"},"ICP 2.1 Postgresql install recipe:")," older recipeusing the configuration user interface in the ICP console."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/helm/charts/tree/master/stable/postgresql"},"postgresql helm chart explanation and configuration"),": a must read."),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://medium.com/@nicdoye/installing-postgresql-via-helm-237e026453b1"},"Installing postgresql via Helm")),Object(l.b)("li",{parentName:"ul"},Object(l.b)("a",{parentName:"li",href:"https://github.com/ibm-cloud-architecture/refarch-kc-container-ms/tree/master/SpringContainerMS"},"Reefer container management microservice using Springboot, kafka and postgresql"))))}b.isMDXComponent=!0},I8xM:function(e,t,a){e.exports={bxTextTruncateEnd:"PageTabs-module--bx--text-truncate--end--267NA",bxTextTruncateFront:"PageTabs-module--bx--text-truncate--front--3xEQF",tabsContainer:"PageTabs-module--tabs-container--8N4k0",list:"PageTabs-module--list--3eFQc",listItem:"PageTabs-module--list-item--nUmtD",link:"PageTabs-module--link--1mDJ1",selectedItem:"PageTabs-module--selected-item--YPVr3"}},OIbQ:function(e,t,a){e.exports={bxTextTruncateEnd:"last-modified-date-module--bx--text-truncate--end--123zi",bxTextTruncateFront:"last-modified-date-module--bx--text-truncate--front--3xeKz",text:"last-modified-date-module--text--24m-4",row:"last-modified-date-module--row--2BquN"}},QH2O:function(e,t,a){e.exports={bxTextTruncateEnd:"PageHeader-module--bx--text-truncate--end--mZWeX",bxTextTruncateFront:"PageHeader-module--bx--text-truncate--front--3zvrI",pageHeader:"PageHeader-module--page-header--3hIan",darkMode:"PageHeader-module--dark-mode--hBrwL",withTabs:"PageHeader-module--with-tabs--3nKxA",text:"PageHeader-module--text--o9LFq"}}}]);
//# sourceMappingURL=component---src-pages-aaa-orphans-deployments-postgresql-readme-mdx-796453cd9490abd1363e.js.map
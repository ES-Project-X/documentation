"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=a,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},l),{},{components:r})):n.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var n=r(7462),a=(r(7294),r(3905));const i={sidebar_position:3},o="Architecture",c={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Description",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/documentation/docs/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Sprint 5",permalink:"/documentation/docs/sprints/sprint5"},next:{title:"api_endpoints",permalink:"/documentation/docs/api_endpoints"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,a.kt)(p,(0,n.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"architecture"},"Architecture"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Our architecture revolves around the cloud services provided by Amazon Web Services."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Amazon API Gateway: redirects requests to the correct load balancer in the private subnet."),(0,a.kt)("li",{parentName:"ul"},"Amazon Cognito: handles the authentication of our users."),(0,a.kt)("li",{parentName:"ul"},"Amazon ECS: orquestrates and scales our Docker containerized services.",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Routing Engine: powered by GraphHopper, generates the most adequate route for a cyclist to take."),(0,a.kt)("li",{parentName:"ul"},"Web UI: allows the users to interact with our system in a easy and intuitive way."),(0,a.kt)("li",{parentName:"ul"},"REST API: manages information about points of interest, routes and users."))),(0,a.kt)("li",{parentName:"ul"},"Amazon RDS: stores the data that our API provides."),(0,a.kt)("li",{parentName:"ul"},"Amazon S3: stores the images that our API provides."),(0,a.kt)("li",{parentName:"ul"},"Amazon CloudWatch: allows the monitoring of our cloud infrastructure and logging from our services.")),(0,a.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Architecture Diagram",src:r(8555).Z,width:"2022",height:"1203"})))}d.isMDXComponent=!0},8555:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/architecture_diagram_v2.1-f17fdec5eddbbd3ae097f34ed465d7aa.svg"}}]);
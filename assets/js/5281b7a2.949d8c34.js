"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5927],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>f});var a=r(7294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var s=a.createContext({}),u=function(e){var t=a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},l=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,s=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),p=u(r),m=n,f=p["".concat(s,".").concat(m)]||p[m]||d[m]||i;return r?a.createElement(f,o(o({ref:t},l),{},{components:r})):a.createElement(f,o({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,o=new Array(i);o[0]=m;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[p]="string"==typeof e?e:n,o[1]=c;for(var u=2;u<i;u++)o[u]=r[u];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},1527:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>o,default:()=>d,frontMatter:()=>i,metadata:()=>c,toc:()=>u});var a=r(7462),n=(r(7294),r(3905));const i={sidebar_position:2},o="Architecture",c={unversionedId:"architecture",id:"architecture",title:"Architecture",description:"Description",source:"@site/docs/architecture.md",sourceDirName:".",slug:"/architecture",permalink:"/documentation/docs/architecture",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/architecture.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Tutorial Intro",permalink:"/documentation/docs/intro"},next:{title:"Tutorial - Basics",permalink:"/documentation/docs/category/tutorial---basics"}},s={},u=[{value:"Description",id:"description",level:2},{value:"Architecture Diagram",id:"architecture-diagram",level:2}],l={toc:u},p="wrapper";function d(e){let{components:t,...i}=e;return(0,n.kt)(p,(0,a.Z)({},l,i,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"architecture"},"Architecture"),(0,n.kt)("h2",{id:"description"},"Description"),(0,n.kt)("p",null,"Our architecture revolves around the cloud services provided by Amazon Web Services."),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Amazon API Gateway: redirects requests to the correct service."),(0,n.kt)("li",{parentName:"ul"},"Amazon Cognito: handles the authentication of our users."),(0,n.kt)("li",{parentName:"ul"},"Amazon ECS: orquestrates and scales our Docker containerized services.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Map Tiles: provided by a CyclOSM tile server, that generates the images that are displyed in the map."),(0,n.kt)("li",{parentName:"ul"},"Routing Engine: powered by GraphHopper, generates the most adequate route for a cyclist to take."),(0,n.kt)("li",{parentName:"ul"},"Web UI: allows the users to interact with our system in a easy and intuitive way."),(0,n.kt)("li",{parentName:"ul"},"REST API: manages information about points of interest, routes and users."))),(0,n.kt)("li",{parentName:"ul"},"Amazon RDS: stores the data that our API provides."),(0,n.kt)("li",{parentName:"ul"},"Amazon CloudWatch: allows the monitoring of our cloud infrastructure and logging from our services.")),(0,n.kt)("h2",{id:"architecture-diagram"},"Architecture Diagram"),(0,n.kt)("p",null,(0,n.kt)("img",{alt:"Architecture Diagram",src:r(5177).Z,width:"781",height:"461"})))}d.isMDXComponent=!0},5177:(e,t,r)=>{r.d(t,{Z:()=>a});const a=r.p+"assets/images/architecture_diagram_v1.0-613e45ac7df5aeeb67f835720f1d1f51.svg"}}]);
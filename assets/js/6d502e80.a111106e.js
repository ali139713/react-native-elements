"use strict";(self.webpackChunkrne_website=self.webpackChunkrne_website||[]).push([[92127],{3905:(t,e,n)=>{n.d(e,{Zo:()=>u,kt:()=>m});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,c=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(c,".").concat(m)]||d[m]||s[m]||l;return n?r.createElement(f,i(i({ref:e},u),{},{components:n})):r.createElement(f,i({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=d;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o.mdxType="string"==typeof t?t:a,i[1]=o;for(var p=2;p<l;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85162:(t,e,n)=>{n.d(e,{Z:()=>i});var r=n(67294),a=n(86010);const l="tabItem_Ymn6";function i(t){var e=t.children,n=t.hidden,i=t.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(l,i),hidden:n},e)}},65488:(t,e,n)=>{n.d(e,{Z:()=>m});var r=n(87462),a=n(67294),l=n(86010),i=n(72389),o=n(67392),c=n(7094),p=n(12466);const u="tabList__CuJ",s="tabItem_LNqP";function d(t){var e,n,i=t.lazy,d=t.block,m=t.defaultValue,f=t.values,g=t.groupId,k=t.className,b=a.Children.map(t.children,(function(t){if((0,a.isValidElement)(t)&&"value"in t.props)return t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof t.type?t.type:t.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),y=null!=f?f:b.map((function(t){var e=t.props;return{value:e.value,label:e.label,attributes:e.attributes}})),N=(0,o.l)(y,(function(t,e){return t.value===e.value}));if(N.length>0)throw new Error('Docusaurus error: Duplicate values "'+N.map((function(t){return t.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===m?m:null!=(e=null!=m?m:null==(n=b.find((function(t){return t.props.default})))?void 0:n.props.value)?e:b[0].props.value;if(null!==v&&!y.some((function(t){return t.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+y.map((function(t){return t.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var C=(0,c.U)(),h=C.tabGroupChoices,D=C.setTabGroupChoices,A=(0,a.useState)(v),w=A[0],E=A[1],P=[],T=(0,p.o5)().blockElementScrollPositionUntilNextRender;if(null!=g){var B=h[g];null!=B&&B!==w&&y.some((function(t){return t.value===B}))&&E(B)}var O=function(t){var e=t.currentTarget,n=P.indexOf(e),r=y[n].value;r!==w&&(T(e),E(r),null!=g&&D(g,String(r)))},S=function(t){var e,n=null;switch(t.key){case"ArrowRight":var r,a=P.indexOf(t.currentTarget)+1;n=null!=(r=P[a])?r:P[0];break;case"ArrowLeft":var l,i=P.indexOf(t.currentTarget)-1;n=null!=(l=P[i])?l:P[P.length-1]}null==(e=n)||e.focus()};return a.createElement("div",{className:(0,l.Z)("tabs-container",u)},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":d},k)},y.map((function(t){var e=t.value,n=t.label,i=t.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:w===e?0:-1,"aria-selected":w===e,key:e,ref:function(t){return P.push(t)},onKeyDown:S,onFocus:O,onClick:O},i,{className:(0,l.Z)("tabs__item",s,null==i?void 0:i.className,{"tabs__item--active":w===e})}),null!=n?n:e)}))),i?(0,a.cloneElement)(b.filter((function(t){return t.props.value===w}))[0],{className:"margin-top--md"}):a.createElement("div",{className:"margin-top--md"},b.map((function(t,e){return(0,a.cloneElement)(t,{key:e,hidden:t.props.value!==w})}))))}function m(t){var e=(0,i.Z)();return a.createElement(d,(0,r.Z)({key:String(e)},t))}},37047:(t,e,n)=>{n.d(e,{w:()=>c});var r=n(67294),a=n(35742),l=n(14330),i=n(98576),o=n(61720),c=function(){return r.createElement(a.Z,null,r.createElement("style",{type:"text/css"},"\n          @font-face {\n            font-family: 'MaterialIcons';\n            src: url("+i.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'FontAwesome';\n            src: url("+o.Z+") format('truetype');\n          }\n          @font-face {\n            font-family: 'MaterialCommunityIcons';\n            src: url("+l.Z+") format('truetype');\n          }\n        "))}},78946:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>f,contentTitle:()=>d,default:()=>b,frontMatter:()=>s,metadata:()=>m,toc:()=>g});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(37047),o=(n(65488),n(85162),["components"]),c={toc:[]};function p(t){var e=t.components,n=(0,a.Z)(t,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("div",{className:"snack-player","data-snack-name":"RNE Pricing","data-snack-description":"Example usage","data-snack-code":"import%20React%20from%20'react'%3B%0Aimport%20%7B%20ScrollView%20%7D%20from%20'react-native'%3B%0Aimport%20%7B%20PricingCard%2C%20lightColors%20%7D%20from%20'%40rneui%2Fthemed'%3B%0A%0Atype%20PricingCardComponentProps%20%3D%20%7B%7D%3B%0A%0Aconst%20Pricing%3A%20React.FunctionComponent%3CPricingCardComponentProps%3E%20%3D%20()%20%3D%3E%20%7B%0Areturn%20(%0A%20%20%3C%3E%0A%20%20%20%20%3CScrollView%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7BlightColors.primary%7D%0A%20%20%20%20%20%20%20%20title%3D%22Free%22%0A%20%20%20%20%20%20%20%20price%3D%22%240%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'1%20User'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7BlightColors.secondary%7D%0A%20%20%20%20%20%20%20%20title%3D%22Starter%22%0A%20%20%20%20%20%20%20%20price%3D%22%2419%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'10%20Users'%2C%20'Basic%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%20%20%3CPricingCard%0A%20%20%20%20%20%20%20%20color%3D%7BlightColors.secondary2%7D%0A%20%20%20%20%20%20%20%20title%3D%22Enterprise%22%0A%20%20%20%20%20%20%20%20price%3D%22%2449%22%0A%20%20%20%20%20%20%20%20info%3D%7B%5B'100%20Users'%2C%20'One%20on%20One%20Support'%2C%20'All%20Core%20Features'%5D%7D%0A%20%20%20%20%20%20%20%20button%3D%7B%7B%20title%3A%20'%20GET%20STARTED'%2C%20icon%3A%20'flight-takeoff'%20%7D%7D%0A%20%20%20%20%20%20%2F%3E%0A%20%20%20%20%3C%2FScrollView%3E%0A%20%20%3C%2F%3E%0A)%3B%0A%7D%3B%0A%0Aexport%20default%20Pricing%3B","data-snack-dependencies":"@rneui/themed,@rneui/base","data-snack-platform":"web","data-snack-supported-platforms":"ios,android,web","data-snack-theme":"light","data-snack-preview":"true","data-snack-loading":"lazy"}))}p.isMDXComponent=!0;var u=["components"],s={id:"pricingcard",title:"PricingCard"},d=void 0,m={unversionedId:"components/pricingcard",id:"version-4.0.0-rc.6/components/pricingcard",title:"PricingCard",description:"Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way.",source:"@site/versioned_docs/version-4.0.0-rc.6/components/PricingCard.mdx",sourceDirName:"components",slug:"/components/pricingcard",permalink:"/docs/components/pricingcard",draft:!1,editUrl:"https://github.com/react-native-elements/react-native-elements/edit/next/website/versioned_docs/version-4.0.0-rc.6/components/PricingCard.mdx",tags:[],version:"4.0.0-rc.6",frontMatter:{id:"pricingcard",title:"PricingCard"},sidebar:"docs",previous:{title:"Overlay",permalink:"/docs/components/overlay"},next:{title:"SearchBar",permalink:"/docs/components/searchbar"}},f={},g=[{value:"Import",id:"import",level:2},{value:"Usage",id:"usage",level:2},{value:"Props",id:"props",level:2}],k={toc:g};function b(t){var e=t.components,n=(0,a.Z)(t,u);return(0,l.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)(i.w,{mdxType:"IconsStyle"}),(0,l.kt)("p",null,"Pricing is a convenience component used to display features and pricing tables in a beautiful and engaging way."),(0,l.kt)("h2",{id:"import"},"Import"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import { PricingCard } from "@rneui/themed";\n')),(0,l.kt)("h2",{id:"usage"},"Usage"),(0,l.kt)(p,{mdxType:"Usage"}),(0,l.kt)("h2",{id:"props"},"Props"),(0,l.kt)("div",{class:"table-responsive"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"button")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"ButtonProps")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"ButtonInformation")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Button information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"Color [Primary]")),(0,l.kt)("td",{parentName:"tr",align:null},"Color scheme for button & title.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"containerStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Outer component styling.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"info")),(0,l.kt)("td",{parentName:"tr",align:null},"string[]"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"[]")),(0,l.kt)("td",{parentName:"tr",align:null},"Pricing information.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"infoStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify pricing information style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"onButtonPress")),(0,l.kt)("td",{parentName:"tr",align:null},"Function"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Function to be run when button is pressed.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"price")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"string")," ","|"," ",(0,l.kt)("inlineCode",{parentName:"td"},"number")),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Price mentioned in the pricing card.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"pricingStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify pricing text style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"title")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Add title in the pricing card.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"titleStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"Text Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Specify title text style.")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wrapperStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"View Style"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Inner wrapper component styling."))))))}b.isMDXComponent=!0},61720:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/fonts/FontAwesome-1e59d2330b4c6deb84b340635ed36249.ttf"},14330:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/fonts/MaterialCommunityIcons-5d42b4e60858731e7b6504400f7e3d8e.ttf"},98576:(t,e,n)=>{n.d(e,{Z:()=>r});const r=n.p+"assets/fonts/MaterialIcons-120b4c7bbd155bd0a04dc37d334baced.ttf"}}]);
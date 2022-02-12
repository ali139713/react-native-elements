"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3089],{78665:(e,t,a)=>{a.d(t,{Z:()=>E});var r=a(63366),l=a(67294),n=a(86010),i=a(96087),s=a(39960);const m="sidebar_a9qW",o="sidebarItemTitle_uKok",c="sidebarItemList_Kvuv",d="sidebarItem_CF0Q",g="sidebarItemLink_miNk",u="sidebarItemLinkActive_RRTD";var p=a(95999);function v(e){var t=e.sidebar;return 0===t.items.length?null:l.createElement("nav",{className:(0,n.Z)(m,"thin-scrollbar"),"aria-label":(0,p.I)({id:"theme.blog.sidebar.navAriaLabel",message:"Blog recent posts navigation",description:"The ARIA label for recent posts in the blog sidebar"})},l.createElement("div",{className:(0,n.Z)(o,"margin-bottom--md")},t.title),l.createElement("ul",{className:c},t.items.map((function(e){return l.createElement("li",{key:e.permalink,className:d},l.createElement(s.Z,{isNavLink:!0,to:e.permalink,className:g,activeClassName:u},e.title))}))))}var h=["sidebar","toc","children"];const E=function(e){var t=e.sidebar,a=e.toc,s=e.children,m=(0,r.Z)(e,h),o=t&&t.items.length>0;return l.createElement(i.Z,m,l.createElement("div",{className:"container margin-vert--lg"},l.createElement("div",{className:"row"},o&&l.createElement("aside",{className:"col col--3"},l.createElement(v,{sidebar:t})),l.createElement("main",{className:(0,n.Z)("col",{"col--7":o,"col--9 col--offset-1":!o}),itemScope:!0,itemType:"http://schema.org/Blog"},s),a&&l.createElement("div",{className:"col col--2"},a))))}},2754:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var r=a(67294),l=a(52263),n=a(78665),i=a(38561),s=a(95999),m=a(71750);const o=function(e){var t=e.metadata,a=t.previousPage,l=t.nextPage;return r.createElement("nav",{className:"pagination-nav","aria-label":(0,s.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},r.createElement("div",{className:"pagination-nav__item"},a&&r.createElement(m.Z,{permalink:a,title:r.createElement(s.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")})),r.createElement("div",{className:"pagination-nav__item pagination-nav__item--next"},l&&r.createElement(m.Z,{permalink:l,title:r.createElement(s.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries")})))};var c=a(29548);const d=function(e){var t=e.metadata,a=e.items,s=e.sidebar,m=(0,l.Z)().siteConfig.title,d=t.blogDescription,g=t.blogTitle,u="/"===t.permalink?m:g;return r.createElement(n.Z,{title:u,description:d,wrapperClassName:c.kM.wrapper.blogPages,pageClassName:c.kM.page.blogListPage,searchMetadata:{tag:"blog_posts_list"},sidebar:s},a.map((function(e){var t=e.content;return r.createElement(i.Z,{key:t.metadata.permalink,frontMatter:t.frontMatter,assets:t.assets,metadata:t.metadata,truncated:t.metadata.truncated},r.createElement(t,null))})),r.createElement(o,{metadata:t}))}},38561:(e,t,a)=>{a.d(t,{Z:()=>k});var r=a(67294),l=a(86010),n=a(3905),i=a(95999),s=a(39960),m=a(44996),o=a(29548),c=a(18780),d=a(79161),g=a(86753);const u="blogPostTitle_rzP5",p="blogPostData_Zg1s",v="blogPostDetailsFull_h6_j";var h=a(20062);const E="image_o0gy";const b=function(e){var t=e.author,a=t.name,l=t.title,n=t.url,i=t.imageURL;return r.createElement("div",{className:"avatar margin-bottom--sm"},i&&r.createElement(s.Z,{className:"avatar__photo-link avatar__photo",href:n},r.createElement("img",{className:E,src:i,alt:a})),a&&r.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},r.createElement("div",{className:"avatar__name"},r.createElement(s.Z,{href:n,itemProp:"url"},r.createElement("span",{itemProp:"name"},a))),l&&r.createElement("small",{className:"avatar__subtitle",itemProp:"description"},l)))},_="authorCol_FlmR",Z="imageOnlyAuthorRow_trpF",N="imageOnlyAuthorCol_S2np";function f(e){var t=e.authors,a=e.assets;if(0===t.length)return null;var n=t.every((function(e){return!e.name}));return r.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",n?Z:"row")},t.map((function(e,t){var i;return r.createElement("div",{className:(0,l.Z)(!n&&"col col--6",n?N:_),key:t},r.createElement(b,{author:Object.assign({},e,{imageURL:null!=(i=a.authorsImageUrls[t])?i:e.imageURL})}))})))}const k=function(e){var t,a,E,b=(E=(0,o.c2)().selectMessage,function(e){var t=Math.ceil(e);return E(t,(0,i.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:t}))}),_=(0,m.C)().withBaseUrl,Z=e.children,N=e.frontMatter,k=e.assets,P=e.metadata,T=e.truncated,w=e.isBlogPostPage,y=void 0!==w&&w,I=P.date,C=P.formattedDate,L=P.permalink,R=P.tags,M=P.readingTime,A=P.title,D=P.editUrl,U=P.authors,x=null!=(t=k.image)?t:N.image,B=!y&&T,F=R.length>0,O=y?"h1":"h2";return r.createElement("article",{className:y?void 0:"margin-bottom--xl",itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},r.createElement("header",null,r.createElement(O,{className:u,itemProp:"headline"},y?A:r.createElement(s.Z,{itemProp:"url",to:L},A)),r.createElement("div",{className:(0,l.Z)(p,"margin-vert--md")},r.createElement("time",{dateTime:I,itemProp:"datePublished"},C),void 0!==M&&r.createElement(r.Fragment,null," \xb7 ",b(M))),r.createElement(f,{authors:U,assets:k})),x&&r.createElement("meta",{itemProp:"image",content:_(x,{absolute:!0})}),r.createElement("div",{id:y?c.blogPostContainerID:void 0,className:"markdown",itemProp:"articleBody"},r.createElement(n.Zo,{components:d.Z},Z)),(F||T)&&r.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",(a={},a[v]=y,a))},F&&r.createElement("div",{className:(0,l.Z)("col",{"col--9":B})},r.createElement(h.Z,{tags:R})),y&&D&&r.createElement("div",{className:"col margin-top--sm"},r.createElement(g.Z,{editUrl:D})),B&&r.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":F})},r.createElement(s.Z,{to:P.permalink,"aria-label":"Read more about "+A},r.createElement("b",null,r.createElement(i.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))))))}},86753:(e,t,a)=>{a.d(t,{Z:()=>g});var r=a(67294),l=a(95999),n=a(87462),i=a(63366),s=a(86010);const m="iconEdit_dcUD";var o=["className"];const c=function(e){var t=e.className,a=(0,i.Z)(e,o);return r.createElement("svg",(0,n.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,s.Z)(m,t),"aria-hidden":"true"},a),r.createElement("g",null,r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))};var d=a(29548);function g(e){var t=e.editUrl;return r.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:d.kM.common.editThisPage},r.createElement(c,null),r.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},71750:(e,t,a)=>{a.d(t,{Z:()=>n});var r=a(67294),l=a(39960);const n=function(e){var t=e.permalink,a=e.title,n=e.subLabel;return r.createElement(l.Z,{className:"pagination-nav__link",to:t},n&&r.createElement("div",{className:"pagination-nav__sublabel"},n),r.createElement("div",{className:"pagination-nav__label"},a))}},7774:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),l=a(86010),n=a(39960);const i="tag_hD8n",s="tagRegular_D6E_",m="tagWithCount_i0QQ";const o=function(e){var t,a=e.permalink,o=e.name,c=e.count;return r.createElement(n.Z,{href:a,className:(0,l.Z)(i,(t={},t[s]=!c,t[m]=c,t))},o,c&&r.createElement("span",null,c))}},20062:(e,t,a)=>{a.d(t,{Z:()=>o});var r=a(67294),l=a(86010),n=a(95999),i=a(7774);const s="tags_XVD_",m="tag_JSN8";function o(e){var t=e.tags;return r.createElement(r.Fragment,null,r.createElement("b",null,r.createElement(n.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),r.createElement("ul",{className:(0,l.Z)(s,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return r.createElement("li",{key:a,className:m},r.createElement(i.Z,{name:t,permalink:a}))}))))}},56922:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(67294),l=a(34738),n=a(42395),i=a(74810);const s=Object.assign({React:r,FontAwesomeIcon:n.ZP,MaterialIcons:i.ZP},l,r)}}]);
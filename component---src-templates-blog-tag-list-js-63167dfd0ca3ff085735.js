"use strict";(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[8173,1634],{31634:function(t,e,n){n.r(e),n.d(e,{default:function(){return h}});var a=n(67294),r=n(20749),s=n(37242),l=n(33754),o=n(36966),i=n(89725);const c=n(85313).default.div.withConfig({displayName:"blogListstyle__BlogPageWrapper",componentId:"sc-9xipt1-0"})(["\n\t.blog-list-wrapper {\n\t\tmargin: 5rem auto;\n\t}\n\t.blog-lists{\n\t\tmargin-top: 5rem;\n\t}\n\n\t.tooltip-search{\n\t\tmargin-bottom: 0.8rem;\n\t}\n\t.post-block{\n\t\tbackground-color: ",";\n\t\twidth: 100%;\n\t\tdisplay: flex;\n\t\tjustify-content: center;\n\t\talign-items: center;\n\t\ttransition: 0.8s cubic-bezier(0.2, 0.8, 0.2, 1);\n\t}\n\t.blog-lists{\n\t\tmargin-top: 5rem;\n\t}\n\t.post-thumb-block{\n\t\theight: 8rem;\n\t\twidth: 25%;\n\t\timg{\n\t\t\tpadding: 0px;\n\t\t\tmargin-left: 0.5rem;\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t}\n\t}\n\n\t.post-content-block{\n\t\theight: 8.5rem;\n\t\twidth: 75%;\n\t}\n\n\t.post-title{\n\t\tfont-size: 1.5rem;\n\t}\n\n\t.post-meta-block{\n\t\tflex-direction: row-reverse;\n\t\tp{\n\t\t\tfont-size: 1rem;\n\t\t\ttext-align: end;\n\t\t}\n\t\t.author{\n\t\t\tfont-size: 1rem;\n\t\t\ttext-align: start;\n\t\t\tmargin-bottom:0;\n\t\t}\n\t}\n\n\t@media screen and (max-width:1200px){\n\t\t.post-block{\n\t\t\theight: auto;\n\t\t}\n\t\t.post-thumb-block{\n\t\t\theight: 8rem;\n\t\t}\n\n\t}\n\n\t@media screen and (max-width:992px){\n\t\t.post-block{\n\t\t\theight: 10rem;\n\t\t\twidth: auto;\n\t\t}\n\t\t.post-thumb-block{\n\t\t\theight: 15rem;\n\t\n\t\t\timg{\n\t\t\t\tmax-height:15rem;\n\t\t\t}\n\t\t}\n\t}\n\n\t@media screen and (max-width:576px){\n\t\t.post-block{\n\t\t\theight: 9rem;\n\t\t}\n\t\t.blog-list-wrapper{\n\t\t\tmargin: 1.5rem auto 5rem;\n\t\t}\n\t\t.blog-lists{\n\t\t\tmargin-top: 0rem;\n\t\t}\n\t\t.post-content-block{\n\t\t\theight: fit-content;\n\t\t}\n\t\t.tooltip-search{\n\t\t\tdisplay: block;\n\t\t}\n\t}\n\n\t@media only screen and (min-width: 577px) {\n    .tooltip-search {\n      display: flex;\n      justify-content: space-between;\n      align-items: center;\n      margin-bottom: 0;\n    }\n  }\n  \n"],(t=>t.theme.grey212121ToWhite));var m=n(91744),g=n(34945),u=n(60580);var h=t=>{let{isListView:e,setListView:n,setGridView:h,pageContext:p,currentPage:d,searchQuery:b,searchData:f,setCurrentPage:w,queryResults:y,postsPerPage:x,searchedPosts:E}=t;const k=p.category?p.category:null,P=p.tag?p.tag:null,v=y.length,Z=P?v+" post"+(1===v?"":"s")+' tagged with "'+P+'"':k?v+" post"+(1===v?"":"s")+' categorized as "'+k+'"':"Blog",C=t=>{w(t)};return a.createElement(c,null,a.createElement(l.Z,{title:Z,path:"Blog",img:m.Z,feedlink:"/blog/feed.xml"}),a.createElement("div",{className:"blog-page-wrapper"},a.createElement(s.W2,null,a.createElement(s.X2,null,a.createElement(s.JX,{xs:12,lg:8},p.tag||p.category?a.createElement(u.Z,{searchQuery:b,searchData:f,paginate:C,currentPage:d}):a.createElement("div",{className:"tooltip-search"},a.createElement(r.Z,{isListView:e,setListView:n,setGridView:h}),a.createElement(u.Z,{searchQuery:b,searchData:f,paginate:C,currentPage:d})),a.createElement("div",{className:"blog-list-wrapper"},a.createElement(s.X2,{className:"blog-lists"},E.length>0&&(null==E?void 0:E.map((t=>{let{id:e,frontmatter:n,fields:r}=t;return a.createElement(s.JX,{xs:12,key:e},a.createElement(i.Z,{frontmatter:n,fields:r}))}))),a.createElement(s.JX,null,E.length>0&&a.createElement(g.Z,{postsPerPage:x,totalPosts:y.length,currentPage:d,paginate:C}))))),a.createElement(s.JX,{xs:12,lg:4},a.createElement(o.Z,{pageContext:p}))))))}},14087:function(t,e,n){n.r(e),n.d(e,{Head:function(){return o}});var a=n(67294),r=n(91988),s=n(17875),l=n(31634);e.default=t=>{let{pageContext:e,data:n}=t;const{0:s,1:o}=(0,a.useState)(1),{0:i}=(0,a.useState)(10),c=s*i,m=c-i;let{nodes:g}=n.allMdx;const{0:u,1:h}=(0,a.useState)(""),{queryResults:p,searchData:d}=(0,r.Z)(g,h,u,["frontmatter","title"],"id"),b=p.slice(m,c);return a.createElement(a.Fragment,null,a.createElement(l.default,{data:n,pageContext:e,searchedPosts:b,setCurrentPage:o,postsPerPage:i,searchData:d,searchQuery:u,setSearchQuery:h,currentPage:s,queryResults:p}))};const o=()=>a.createElement(s.Z,{title:"Blog",description:"The latest news and announcements about Layer5, our products, and our ecosystem, as well as voices from across our community.",canonical:"https://layer5.io/blog"})}}]);
//# sourceMappingURL=component---src-templates-blog-tag-list-js-63167dfd0ca3ff085735.js.map
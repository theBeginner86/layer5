(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[3087],{67228:function(M){M.exports=function(M,t){(null==t||t>M.length)&&(t=M.length);for(var e=0,L=new Array(t);e<t;e++)L[e]=M[e];return L},M.exports.default=M.exports,M.exports.__esModule=!0},23646:function(M,t,e){var L=e(67228);M.exports=function(M){if(Array.isArray(M))return L(M)},M.exports.default=M.exports,M.exports.__esModule=!0},69100:function(M,t,e){var L=e(99489),n=e(4043);function i(t,e,u){return n()?(M.exports=i=Reflect.construct,M.exports.default=M.exports,M.exports.__esModule=!0):(M.exports=i=function(M,t,e){var n=[null];n.push.apply(n,t);var i=new(Function.bind.apply(M,n));return e&&L(i,e.prototype),i},M.exports.default=M.exports,M.exports.__esModule=!0),i.apply(null,arguments)}M.exports=i,M.exports.default=M.exports,M.exports.__esModule=!0},59713:function(M){M.exports=function(M,t,e){return t in M?Object.defineProperty(M,t,{value:e,enumerable:!0,configurable:!0,writable:!0}):M[t]=e,M},M.exports.default=M.exports,M.exports.__esModule=!0},4043:function(M){M.exports=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(M){return!1}},M.exports.default=M.exports,M.exports.__esModule=!0},46860:function(M){M.exports=function(M){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(M))return Array.from(M)},M.exports.default=M.exports,M.exports.__esModule=!0},98206:function(M){M.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")},M.exports.default=M.exports,M.exports.__esModule=!0},319:function(M,t,e){var L=e(23646),n=e(46860),i=e(60379),u=e(98206);M.exports=function(M){return L(M)||n(M)||i(M)||u()},M.exports.default=M.exports,M.exports.__esModule=!0},60379:function(M,t,e){var L=e(67228);M.exports=function(M,t){if(M){if("string"==typeof M)return L(M,t);var e=Object.prototype.toString.call(M).slice(8,-1);return"Object"===e&&M.constructor&&(e=M.constructor.name),"Map"===e||"Set"===e?Array.from(M):"Arguments"===e||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(e)?L(M,t):void 0}},M.exports.default=M.exports,M.exports.__esModule=!0},46725:function(M,t,e){var L=e(93395);M.exports={MDXRenderer:L}},93395:function(M,t,e){var L=e(69100),n=e(319),i=e(59713),u=e(37316);function j(M,t){var e=Object.keys(M);if(Object.getOwnPropertySymbols){var L=Object.getOwnPropertySymbols(M);t&&(L=L.filter((function(t){return Object.getOwnPropertyDescriptor(M,t).enumerable}))),e.push.apply(e,L)}return e}function c(M){for(var t=1;t<arguments.length;t++){var e=null!=arguments[t]?arguments[t]:{};t%2?j(Object(e),!0).forEach((function(t){i(M,t,e[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(M,Object.getOwnPropertyDescriptors(e)):j(Object(e)).forEach((function(t){Object.defineProperty(M,t,Object.getOwnPropertyDescriptor(e,t))}))}return M}var N=e(67294),r=e(64983).mdx,I=e(89480).useMDXScope;M.exports=function(M){var t=M.scope,e=M.children,i=u(M,["scope","children"]),j=I(t),s=N.useMemo((function(){if(!e)return null;var M=c({React:N,mdx:r},j),t=Object.keys(M),i=t.map((function(t){return M[t]}));return L(Function,["_fn"].concat(n(t),[""+e])).apply(void 0,[{}].concat(n(i)))}),[e,t]);return N.createElement(s,c({},i))}},96371:function(M,t,e){"use strict";var L=e(19756),n=e(67294),i=(e(25444),e(62347));t.Z=function(M){var t=M.childImageSharp,e=M.extension,u=M.publicURL,j=M.alt,c=(0,L.Z)(M,["childImageSharp","extension","publicURL","alt"]);return t||"svg"!==e?n.createElement(i.G,Object.assign({image:t.gatsbyImageData},c,{alt:j})):n.createElement("div",{className:"old-gatsby-image-wrapper"},n.createElement("img",{src:u,alt:j}))}},35318:function(M,t,e){"use strict";e.d(t,{Z:function(){return I}});var L=e(67294),n=e(25444),i=e(88449),u=e.n(i),j=e(70456).ZP.div.withConfig({displayName:"pageHeaderstyle__PageHeaderWrapper",componentId:"bliqzc-0"})(["\n        position: relative;\n        overflow: hidden;\n        z-index:1;\n        .page-header {\n            text-align: center;\n            position: relative;\n            height: auto;\n            margin: 3rem auto;\n            padding: 0 1rem 0;\n            z-index: 99;\n            h1 {\n                padding-top: 3rem;\n            }\n        }\n        \n        .feature-image{\n            margin: 2rem auto;\n            max-height: 62.5rem;\n            max-width: 31rem;\n            object-fit: contain;    \n        }\n        .breadcrumbs {\n            display: flex;\n            justify-content: center;\n            margin-top: 1.5rem;  \n            h5 {\n                display: inline-block;\n                margin:0 0.4rem;\n                opacity: .7;\n            }\n            p{\n                margin: 0;\n                display: inline-block;\n            }\n        } \n    }\n"]),c=e(96371),N=e(46319),r=function(M,t){return L.createElement(L.Fragment,null,t?L.createElement(n.Link,{to:"/community/members/"+u()(M.name)},L.createElement("span",null,M.name)):L.createElement("span",null,M.name))},I=function(M){var t=M.category,e=M.title,i=M.subtitle,I=M.author,s=M.thumbnail,y=!1;I&&(y=(0,n.useStaticQuery)("1485533831").allMdx.nodes.some((function(M){return M.frontmatter.name==I.name})));return L.createElement(j,null,L.createElement("div",{className:"page-header"},s&&L.createElement("div",{className:"feature-image"},L.createElement(c.Z,Object.assign({},s,{imgStyle:{objectFit:"contain"},alt:e}))),L.createElement("h1",{className:"page-title"},e),i&&L.createElement("h3",null,i),t&&L.createElement("div",{className:"breadcrumbs"},L.createElement("span",null,L.createElement("h5",null,"Category:"),L.createElement("p",{key:t},L.createElement(n.Link,{to:"/blog/category/"+u()(t)},L.createElement("span",null,t)))),I&&L.createElement(L.Fragment,null,L.createElement("span",null,L.createElement("h5",null,"By:"),console.log(I),"Layer5 Team"===I.name?L.createElement("p",null,L.createElement("img",{src:N.Z,alt:"Layer5",width:"85"})," Team"):L.createElement("p",null,r(I,y))))),!t&&I&&L.createElement("div",{className:"breadcrumbs post"},L.createElement("h5",null,"By:"),L.createElement("span",null,r(I,y)))))}},53744:function(M,t,e){"use strict";e.d(t,{Z:function(){return c}});var L=e(67294),n=e(70456),i=e(57067),u=e(22626),j=n.ZP.div.withConfig({displayName:"Learn-Service-Mesh-CTA__LearnServiceMeshCTAWrapper",componentId:"sc-1vdu0sy-0"})(["\n    background-color:",";\n    padding: 5rem 0;\n    margin-top: 2rem;\n    \n    .section-wrapper{\n      @media (max-width: 767px){\n          flex-direction: column-reverse;\n      }\n      .content{\n          @media (max-width: 767px){\n            text-align: center;\n          }\n          h2{\n            margin-bottom: 2rem;\n            font-weight: 700;\n        }\n      }\n      img{\n        max-height: 16rem; \n      }\n    }\n"],(function(M){return M.theme.secondaryLightColor})),c=function(){return L.createElement(j,null,L.createElement(i.W2,null,L.createElement(i.X2,{className:"section-wrapper",Vcenter:!0},L.createElement(i.JX,{className:"content",sm:12,md:6,lg:6},L.createElement("h2",null,"Learn to service mesh with interactive labs"),L.createElement(u.Z,{secondary:!0,title:"Let's Learn",url:"/learn/service-mesh-labs"})),L.createElement(i.JX,{sm:12,md:6,lg:6},L.createElement("img",{src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeD0iMCIgeT0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgNTAwLjkgNDA1IiB4bWw6c3BhY2U9InByZXNlcnZlIiBzdHlsZT0iZW5hYmxlLWJhY2tncm91bmQ6bmV3IDAgMCA1MDAuOSA0MDUiPjxzdHlsZSB0eXBlPSJ0ZXh0L2NzcyI+LnN0MHtmaWxsLW9wYWNpdHk6MH0uc3Qxe2ZpbGw6bm9uZTtzdHJva2U6I2JmOTAwMDtzdHJva2Utd2lkdGg6MztzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTB9LnN0MntmaWxsOiMwMGIzOWZ9LnN0M3tmaWxsOm5vbmU7c3Ryb2tlLXdpZHRoOjM7c3Ryb2tlLWxpbmVqb2luOnJvdW5kO3N0cm9rZS1taXRlcmxpbWl0OjEwfS5zdDMsLnN0NHtzdHJva2U6IzM1OWFjMH0uc3Q0LC5zdDV7ZmlsbDpub25lO3N0cm9rZS1saW5lam9pbjpyb3VuZDtzdHJva2UtbWl0ZXJsaW1pdDoxMH0uc3Q0e3N0cm9rZS13aWR0aDo1fS5zdDV7c3Ryb2tlOiNjZDUwMmY7c3Ryb2tlLXdpZHRoOjN9PC9zdHlsZT48cGF0aCBkPSJNMjc5LjMsMzA5LjJjLTE2LjYsMC0yNC45LTM2LjItMzMuMi03Mi41Yy04LjMtMzYuMi0xNi42LTcyLjUtMzMuMi03Mi41IiBjbGFzcz0ic3QwIi8+PHBhdGggZD0iTTI3OS4zLDMwOS4yYy0xNi42LDAtMjQuOS0zNi4yLTMzLjItNzIuNWMtOC4zLTM2LjItMTYuNi03Mi41LTMzLjItNzIuNSIgY2xhc3M9InN0MSIvPjxwYXRoIGQ9Ik04My45LDg4LjVMODMuOSw4OC41YzAtMTUuMSwxMi4yLTI3LjMsMjcuMy0yNy4zbDAsMGM3LjIsMCwxNC4yLDIuOSwxOS4zLDhjNS4xLDUuMSw4LDEyLjEsOCwxOS4zbDAsMAljMCwxNS4xLTEyLjIsMjcuMy0yNy4zLDI3LjNsMCwwQzk2LjEsMTE1LjksODMuOSwxMDMuNiw4My45LDg4LjV6IiBjbGFzcz0ic3QyIi8+PHBhdGggZD0iTTAsMTY0LjNMMCwxNjQuM0MwLDE0OS4yLDEyLjIsMTM3LDI3LjMsMTM3bDAsMGM3LjIsMCwxNC4yLDIuOSwxOS4zLDhjNS4xLDUuMSw4LDEyLjEsOCwxOS4zbDAsMAljMCwxNS4xLTEyLjIsMjcuMy0yNy4zLDI3LjNsMCwwQzEyLjIsMTkxLjYsMCwxNzkuNCwwLDE2NC4zeiIgY2xhc3M9InN0MiIvPjxwYXRoIGQ9Ik04My45LDg4LjVjLTI4LjMsMC01Ni42LDI0LjItNTYuNiw0OC40IiBjbGFzcz0ic3QwIi8+PHBhdGggZD0iTTgzLjksODguNWMtMjguMywwLTU2LjYsMjQuMi01Ni42LDQ4LjQiIGNsYXNzPSJzdDMiLz48cGF0aCBkPSJNNDYxLjksOTcuM0w0NjEuOSw5Ny4zYy0xMy42LTYuNS0xOS4zLTIyLjgtMTIuOC0zNi40bDAsMGMzLjEtNi41LDguNy0xMS41LDE1LjUtMTRjNi44LTIuNCwxNC4zLTIsMjAuOSwxLjEJbDAsMGMxMy42LDYuNSwxOS4zLDIyLjgsMTIuOCwzNi40bDAsMEM0OTEuNyw5OCw0NzUuNCwxMDMuOCw0NjEuOSw5Ny4zeiIgY2xhc3M9InN0MiIvPjxwYXRoIGQ9Ik0xNTguMiwxNjQuM0wxNTguMiwxNjQuM2MwLTE1LjEsMTIuMi0yNy4zLDI3LjMtMjcuM2wwLDBjNy4yLDAsMTQuMiwyLjksMTkuMyw4YzUuMSw1LjEsOCwxMi4xLDgsMTkuM2wwLDAJYzAsMTUuMS0xMi4yLDI3LjMtMjcuMywyNy4zbDAsMEMxNzAuNSwxOTEuNiwxNTguMiwxNzkuNCwxNTguMiwxNjQuM3oiIGNsYXNzPSJzdDIiLz48cGF0aCBkPSJNODMuNiwyNzVMODMuNiwyNzVjMC0xNS4xLDEyLjItMjcuMywyNy4zLTI3LjNsMCwwYzcuMiwwLDE0LjIsMi45LDE5LjMsOGM1LjEsNS4xLDgsMTIuMSw4LDE5LjNsMCwwCWMwLDE1LjEtMTIuMiwyNy4zLTI3LjMsMjcuM2wwLDBDOTUuOCwzMDIuNCw4My42LDI5MC4xLDgzLjYsMjc1eiIgY2xhc3M9InN0MiIvPjxwYXRoIGQ9Ik0xODUuNiwxOTEuNmMwLDE0LTE4LjYsMjEtMzcuMywyOGMtMTguNiw3LTM3LjMsMTQtMzcuMywyOCIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik0xODUuNiwxOTEuNmMwLDE0LTE4LjYsMjEtMzcuMywyOGMtMTguNiw3LTM3LjMsMTQtMzcuMywyOCIgY2xhc3M9InN0NCIvPjxwYXRoIGQ9Ik00NDcuOSw4MS43Yy05LjksMC0xNSwzLjUtMTkuNyw3LjFjLTQuNywzLjUtOS4xLDcuMS0xOC4yLDcuMSIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik00NDcuOSw4MS43Yy05LjksMC0xNSwzLjUtMTkuNyw3LjFjLTQuNywzLjUtOS4xLDcuMS0xOC4yLDcuMSIgY2xhc3M9InN0MyIvPjxwYXRoIGQ9Ik0xMTAuOSwyNDcuN2MwLTE0LTIwLjktMjEtNDEuOC0yOGMtMjAuOS03LTQxLjgtMTQtNDEuOC0yOCIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik0xMTAuOSwyNDcuN2MwLTE0LTIwLjktMjEtNDEuOC0yOGMtMjAuOS03LTQxLjgtMTQtNDEuOC0yOCIgY2xhc3M9InN0MyIvPjxwYXRoIGQ9Ik0xODUuNiwxMzYuOWMwLTI0LjItMjMuNS00OC40LTQ3LTQ4LjQiIGNsYXNzPSJzdDAiLz48cGF0aCBkPSJNMTg1LjYsMTM2LjljMC0yNC4yLTIzLjUtNDguNC00Ny00OC40IiBjbGFzcz0ic3QzIi8+PHBhdGggZD0iTTM4Mi44LDE5MS42TDM4Mi44LDE5MS42Yy0xNS4xLDAtMjcuMy0xMi4yLTI3LjMtMjcuM2wwLDBjMC03LjIsMi45LTE0LjIsOC0xOS4zYzUuMS01LjEsMTIuMS04LDE5LjMtOGwwLDAJYzE1LjEsMCwyNy4zLDEyLjIsMjcuMywyNy4zbDAsMEM0MTAuMSwxNzkuMywzOTcuOSwxOTEuNiwzODIuOCwxOTEuNnoiIGNsYXNzPSJzdDIiLz48cGF0aCBkPSJNMzA4LjEsMTIzLjFMMzA4LjEsMTIzLjFjLTE1LjEsMC0yNy4zLTEyLjItMjcuMy0yNy4zbDAsMGMwLTcuMiwyLjktMTQuMiw4LTE5LjNjNS4xLTUuMSwxMi4xLTgsMTkuMy04bDAsMAljMTUuMSwwLDI3LjMsMTIuMiwyNy4zLDI3LjNsMCwwQzMzNS41LDExMC45LDMyMy4yLDEyMy4xLDMwOC4xLDEyMy4xeiIgY2xhc3M9InN0MiIvPjxwYXRoIGQ9Ik0zODIuOCwxMjMuMUwzODIuOCwxMjMuMWMtMTUuMSwwLTI3LjMtMTIuMi0yNy4zLTI3LjNsMCwwYzAtNy4yLDIuOS0xNC4yLDgtMTkuM2M1LjEtNS4xLDEyLjEtOCwxOS4zLThsMCwwCWMxNS4xLDAsMjcuMywxMi4yLDI3LjMsMjcuM2wwLDBDNDEwLjEsMTEwLjksMzk3LjksMTIzLjEsMzgyLjgsMTIzLjF6IiBjbGFzcz0ic3QyIi8+PHBhdGggZD0iTTM1NS40LDE2NC4yYy01LDAtNy41LTE3LjEtMTAtMzQuMmMtMi41LTE3LjEtNS0zNC4yLTEwLTM0LjIiIGNsYXNzPSJzdDAiLz48cGF0aCBkPSJNMzU1LjQsMTY0LjJjLTUsMC03LjUtMTcuMS0xMC0zNC4yYy0yLjUtMTcuMS01LTM0LjItMTAtMzQuMiIgY2xhc3M9InN0MyIvPjxwYXRoIGQ9Ik0zMzUuNSw5NS44YzUsMCw3LjUsMC4xLDkuOSwwLjJjMi41LDAuMSw1LDAuMiwxMCwwLjIiIGNsYXNzPSJzdDAiLz48cGF0aCBkPSJNMzM1LjUsOTUuOGM1LDAsNy41LDAuMSw5LjksMC4yYzIuNSwwLjEsNSwwLjIsMTAsMC4yIiBjbGFzcz0ic3QzIi8+PHBhdGggZD0iTTM4Mi44LDEzNi45YzAtMy40LDAuMS01LjIsMC4yLTYuOWMwLjEtMS43LDAuMi0zLjUsMC4yLTYuOSIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik0zODIuOCwxMzYuOWMwLTMuNCwwLjEtNS4yLDAuMi02LjljMC4xLTEuNywwLjItMy41LDAuMi02LjkiIGNsYXNzPSJzdDMiLz48cGF0aCBkPSJNMjgwLjgsOTUuOGMtMTcsMC0yNS41LDE3LjEtMzQsMzQuMmMtOC41LDE3LjEtMTcsMzQuMi0zNCwzNC4yIiBjbGFzcz0ic3QwIi8+PHBhdGggZD0iTTI4MC44LDk1LjhjLTE3LDAtMjUuNSwxNy4xLTM0LDM0LjJjLTguNSwxNy4xLTE3LDM0LjItMzQsMzQuMiIgY2xhc3M9InN0NCIvPjxwYXRoIGQ9Ik0zODIuOCw1NC42TDM4Mi44LDU0LjZjLTE1LjEsMC0yNy4zLTEyLjItMjcuMy0yNy4zbDAsMGMwLTcuMiwyLjktMTQuMiw4LTE5LjNjNS4xLTUuMSwxMi4xLTgsMTkuMy04bDAsMAljMTUuMSwwLDI3LjMsMTIuMiwyNy4zLDI3LjNsMCwwQzQxMC4xLDQyLjQsMzk3LjksNTQuNiwzODIuOCw1NC42eiIgY2xhc3M9InN0MiIvPjxwYXRoIGQ9Ik0zODIuOCw2OC41YzAtMy40LDAuMS01LjIsMC4yLTYuOWMwLjEtMS43LDAuMi0zLjUsMC4yLTYuOSIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik0zODIuOCw2OC41YzAtMy40LDAuMS01LjIsMC4yLTYuOWMwLjEtMS43LDAuMi0zLjUsMC4yLTYuOSIgY2xhc3M9InN0MyIvPjxwYXRoIGQ9Ik0zMzUuNSw5NS44YzUsMCw3LjUtMTcuMSwxMC0zNC4yczUtMzQuMiwxMC0zNC4yIiBjbGFzcz0ic3QwIi8+PHBhdGggZD0iTTMzNS41LDk1LjhjNSwwLDcuNS0xNy4xLDEwLTM0LjJzNS0zNC4yLDEwLTM0LjIiIGNsYXNzPSJzdDQiLz48cGF0aCBkPSJNMzgxLjIsNDA1TDM4MS4yLDQwNWMtMTUuMSwwLTI3LjMtMTIuMi0yNy4zLTI3LjNsMCwwYzAtNy4yLDIuOS0xNC4yLDgtMTkuM2M1LjEtNS4xLDEyLjEtOCwxOS4zLThsMCwwCWMxNS4xLDAsMjcuMywxMi4yLDI3LjMsMjcuM2wwLDBDNDA4LjUsMzkyLjgsMzk2LjMsNDA1LDM4MS4yLDQwNXoiIGNsYXNzPSJzdDIiLz48cGF0aCBkPSJNMzA2LjYsMzM2LjVMMzA2LjYsMzM2LjVjLTE1LjEsMC0yNy4zLTEyLjItMjcuMy0yNy4zbDAsMGMwLTcuMiwyLjktMTQuMiw4LTE5LjNjNS4xLTUuMSwxMi4xLTgsMTkuMy04bDAsMAljMTUuMSwwLDI3LjMsMTIuMiwyNy4zLDI3LjNsMCwwQzMzMy45LDMyNC4zLDMyMS43LDMzNi41LDMwNi42LDMzNi41eiIgY2xhc3M9InN0MiIvPjxwYXRoIGQ9Ik0zODEuMiwzMzYuNUwzODEuMiwzMzYuNWMtMTUuMSwwLTI3LjMtMTIuMi0yNy4zLTI3LjNsMCwwYzAtNy4yLDIuOS0xNC4yLDgtMTkuM2M1LjEtNS4xLDEyLjEtOCwxOS4zLThsMCwwCWMxNS4xLDAsMjcuMywxMi4yLDI3LjMsMjcuM2wwLDBDNDA4LjUsMzI0LjMsMzk2LjMsMzM2LjUsMzgxLjIsMzM2LjV6IiBjbGFzcz0ic3QyIi8+PHBhdGggZD0iTTM1My45LDM3Ny43Yy01LDAtNy41LTE3LjEtOS45LTM0LjJjLTIuNS0xNy4xLTUtMzQuMi0xMC0zNC4yIiBjbGFzcz0ic3QwIi8+PHBhdGggZD0iTTM1My45LDM3Ny43Yy01LDAtNy41LTE3LjEtOS45LTM0LjJjLTIuNS0xNy4xLTUtMzQuMi0xMC0zNC4yIiBjbGFzcz0ic3Q1Ii8+PHBhdGggZD0iTTMzMy45LDMwOS4yYzUsMCw3LjUsMC4xLDkuOSwwLjJjMi41LDAuMSw1LDAuMiwxMCwwLjIiIGNsYXNzPSJzdDAiLz48cGF0aCBkPSJNMzMzLjksMzA5LjJjNSwwLDcuNSwwLjEsOS45LDAuMmMyLjUsMC4xLDUsMC4yLDEwLDAuMiIgY2xhc3M9InN0NSIvPjxwYXRoIGQ9Ik0zODEuMiwzNTAuNGMwLTMuNCwwLjEtNS4yLDAuMi02LjljMC4xLTEuNywwLjItMy41LDAuMi02LjkiIGNsYXNzPSJzdDAiLz48cGF0aCBkPSJNMzgxLjIsMzUwLjRjMC0zLjQsMC4xLTUuMiwwLjItNi45YzAuMS0xLjcsMC4yLTMuNSwwLjItNi45IiBjbGFzcz0ic3Q1Ii8+PHBhdGggZD0iTTM4MS4zLDI2OC4xTDM4MS4zLDI2OC4xYy0xNS4xLDAtMjcuMy0xMi4yLTI3LjMtMjcuM2wwLDBjMC03LjIsMi45LTE0LjIsOC0xOS4zYzUuMS01LjEsMTIuMS04LDE5LjMtOGwwLDAJYzE1LjEsMCwyNy4zLDEyLjIsMjcuMywyNy4zbDAsMEM0MDguNiwyNTUuOSwzOTYuNCwyNjguMSwzODEuMywyNjguMXoiIGNsYXNzPSJzdDIiLz48cGF0aCBkPSJNMzgxLjIsMjgxLjljMC0zLjQsMC4xLTUuMiwwLjItNi45YzAuMS0xLjcsMC4yLTMuNSwwLjItNi45IiBjbGFzcz0ic3QwIi8+PHBhdGggZD0iTTM4MS4yLDI4MS45YzAtMy40LDAuMS01LjIsMC4yLTYuOWMwLjEtMS43LDAuMi0zLjUsMC4yLTYuOSIgY2xhc3M9InN0MSIvPjxwYXRoIGQ9Ik0zMzMuOSwzMDkuMmM1LDAsNy41LTE3LjEsMTAtMzQuMmMyLjUtMTcuMSw1LTM0LjIsMTAtMzQuMiIgY2xhc3M9InN0MCIvPjxwYXRoIGQ9Ik0zMzMuOSwzMDkuMmM1LDAsNy41LTE3LjEsMTAtMzQuMmMyLjUtMTcuMSw1LTM0LjIsMTAtMzQuMiIgY2xhc3M9InN0MSIvPjwvc3ZnPg==",alt:"Learn how to Service Mesh"})))))}},27104:function(M,t,e){"use strict";e.r(t),e.d(t,{default:function(){return o}});var L=e(67294),n=e(70456),i=e(20092),u=e(45027),j=e(46725),c=e(57067),N=e(35318),r=e(61424),I=e(25444),s=n.ZP.div.withConfig({displayName:"BookSinglestyle__BookSinglePageWrapper",componentId:"sc-1ufoib-0"})(["\n  \n\t.backBtn {\n\t\twidth: fit-content;\n\t\tposition: relative;\n\t\tleft: 0px;\n\t\tmargin-top: 3rem;\n\t\tmargin-left: 3rem;\n\t\tfont-weight: 600;\n\t\ta{\n\t\t\tdisplay: flex;\n\t\t    color: ",";\n\t\t    &:hover{\n\t\t        color: ",";\n\t\t\t}\n\t\t\t\n\t\t\th4 {\n\t\t\t\tline-height: 1.75rem;\n\t\t\t}\n\t\t\tsvg {\n\t\t\t\tfont-size: 1.75rem;\n\t\t\t}\n\t\t}\n\t\t\n\t}\n    .single-post-wrapper{\n        margin: 2rem 0;\n    }\n"],(function(M){return M.theme.primaryColor}),(function(M){return M.theme.linkColor})),y=function(M){var t=M.data.mdx,e=t.frontmatter,n=t.body;return L.createElement(s,null,L.createElement("div",{className:"backBtn"},L.createElement(I.Link,{to:"/learn/service-mesh-books"},L.createElement(r.Oul,null),L.createElement("h4",null,"All Books"))),L.createElement(N.Z,{title:e.title}),L.createElement("div",{className:"single-post-wrapper"},L.createElement(c.W2,null,L.createElement("div",{className:"single-post-block"},L.createElement(j.MDXRenderer,null,n)))))},a=e(53744),z=e(34967),w=e(97956),l=e(38155),D=e(36179),o=function(M){var t=M.data;return L.createElement(n.f6,{theme:l.Z},L.createElement(i.Z,null,L.createElement(w.Z,null),L.createElement(D.Z,{title:t.mdx.frontmatter.title,image:t.mdx.frontmatter.thumbnail.publicURL}),L.createElement(u.Z,null),L.createElement(y,{data:t}),L.createElement(a.Z,null),L.createElement(z.Z,null)))}},88449:function(M){M.exports=function(M){return M.toString().toLowerCase().replace(/\s+/g,"-").replace(/[^\w\-]+/g,"").replace(/\-\-+/g,"-").replace(/^-+/,"").replace(/-+$/,"")}},46319:function(M,t){"use strict";t.Z="data:image/svg+xml;base64,PHN2ZyBpZD0iTGF5ZXJfMSIgZGF0YS1uYW1lPSJMYXllciAxIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NzYuOSA5My43OCI+PHRpdGxlPmxheWVyNS1ncmF5LW5vLXRyaW08L3RpdGxlPjxwb2x5Z29uIHBvaW50cz0iMTguNzYgMCAwIDAgMCA5My43OCA4OC45MSA5My43OCA4OC45MSA3NS4wMyAxOC43NiA3NS4wMyAxOC43NiAwIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIxMzUuODQgMCA5OC4zMyA5My43OCAxMTkuNzIgOTMuNzggMTQ1LjIyIDI4LjE0IDE2My4zOSA3NS4wMyAxMzIuMjIgNzUuMDMgMTI1LjIyIDkzLjc4IDE5Mi4xMSA5My43OCAxNTQuNTkgMCAxMzUuODQgMCIgc3R5bGU9ImZpbGw6IzNjNDk0ZiIvPjxwb2x5Z29uIHBvaW50cz0iMjE4LjU4IDMyLjgzIDE5NS4xNCAwIDE3MS42OSAwIDIwOS4yIDU2LjI3IDIwOS4yIDkzLjc4IDIyNy45NiA5My43OCAyMjcuOTYgNTYuMjcgMjY1LjQ3IDAgMjQyLjMyIDAgMjE4LjU4IDMyLjgzIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHBvbHlnb24gcG9pbnRzPSIyNzMuNTYgMTQuNzcgMjczLjU2IDE4Ljc2IDI3My41NiAzNy41MSAyNzMuNTYgNjAuMzkgMjczLjU2IDkzLjc4IDM2Mi40NiA5My43OCAzNjIuNDYgNzUuMDMgMjkyLjMyIDc1LjAzIDI5Mi4zMiA2MC4zOSAyOTIuMzIgNTYuMjcgMzQ2LjIxIDU2LjI3IDM0Ni4yMSAzNy41MSAyOTIuMzIgMzcuNTEgMjkyLjMyIDE4Ljc2IDM2Mi40NiAxOC43NiAzNjIuNDYgMCAyNzMuNTYgMCAyNzMuNTYgMTQuNzciIHN0eWxlPSJmaWxsOiMzYzQ5NGYiLz48cGF0aCBkPSJNMzkyLjkyLDE3Ljg4SDQ0MVYzNy4zOUgzOTguMTJsLjE4LDE3Ljg4aDEyLjg3bDM0LDM4LjUxaDIzLjE2bC0zNC0zOC41MWgxMy4yN2ExNC41NiwxNC41NiwwLDAsMCwxNC41Ny0xNC41NlYxNC41N0ExNC41NywxNC41NywwLDAsMCw0NDcuNTksMGgtNzNWOTMuNzhoMTguNzZaIiBzdHlsZT0iZmlsbDojM2M0OTRmIi8+PHJlY3QgaWQ9Il9QYXRoXyIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIHg9IjUzNi42MSIgd2lkdGg9IjM2LjkzIiBoZWlnaHQ9IjE3Ljc5IiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBhdGggaWQ9Il9QYXRoXzIiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBkPSJNNTc2LjksNTkuOTNWNTIuNTVjMC04LjQ4LTcuMTQtMTUuMzYtMTUuOTQtMTUuMzZoLTU5LjZWMzIuMzRINDc5LjU0djIxaDc1LjU0djYuNTdaIiBzdHlsZT0iZmlsbDojODI4YzhjIi8+PHBvbHlnb24gaWQ9Il9QYXRoXzMiIGRhdGEtbmFtZT0iJmx0O1BhdGgmZ3Q7IiBwb2ludHM9IjUwMS4zNiAyNi41MiA1MDEuMzYgMTcuNzkgNTMwLjU4IDE3Ljc5IDUzMC41OCAwIDQ3OS41NCAwIDQ3OS41NCAyNi41MiA1MDEuMzYgMjYuNTIiIHN0eWxlPSJmaWxsOiNhMGFhYWEiLz48cGF0aCBpZD0iX1BhdGhfNCIgZGF0YS1uYW1lPSImbHQ7UGF0aCZndDsiIGQ9Ik01NTUuMDgsNjUuNjRWNzZINTI1Ljg2VjkzLjc4aDM2YzguMzEsMCwxNS02LjQ4LDE1LTE0LjQ4VjY1LjY0WiIgc3R5bGU9ImZpbGw6I2EwYWFhYSIvPjxwYXRoIGlkPSJfUGF0aF81IiBkYXRhLW5hbWU9IiZsdDtQYXRoJmd0OyIgZD0iTTQ5OS42MSw2Ni42MVY3NmgyMC4yMlY5My43OGgtMjZjLTguMzEsMC0xNS02LjQ4LTE1LTE0LjQ4VjY2LjYxWiIgc3R5bGU9ImZpbGw6IzgyOGM4YyIvPjwvc3ZnPg=="}}]);
//# sourceMappingURL=component---src-templates-book-single-js-33ced01becdee42826b2.js.map
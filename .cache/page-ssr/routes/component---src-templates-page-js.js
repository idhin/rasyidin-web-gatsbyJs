exports.id = 565;
exports.ids = [565];
exports.modules = {

/***/ 4479:
/***/ ((module) => {

const config={siteTitle:'Khulafaur Rasyidin',siteTitleShort:'Khulafaurrr',siteTitleAlt:'Khulafaurrr',siteLogo:'/logos/newlogo-1024.png',siteUrl:'https://codesbandit.netlify.app',repo:'https://github.com/messidiq/test',pathPrefix:'',dateFromFormat:'YYYY-MM-DD',dateFormat:'MMMM Do, YYYY',siteDescription:'Catatan Khulafaur Rasyidin',siteRss:'/rss.xml',googleAnalyticsID:'UA-42068444-1',postDefaultCategoryID:'Tech',newsletter:'https://taniarascia.substack.com',newsletterEmbed:'https://taniarascia.substack.com/embed',userName:'Khulafaurrr',userEmail:'khulafaur@rasyid.in',userTwitter:'codesbandit',menuLinks:[{name:'Me',link:'/me/'},{name:'Blog',link:'/blog/'}// {
//   name: 'Newsletter',
//   link: '/newsletter/',
// },
],themeColor:'#3F80FF',// Used for setting manifest and progress theme colors.
backgroundColor:'#ffffff'};// Make sure pathPrefix is empty if not needed
if(config.pathPrefix==='/'){config.pathPrefix='';}else{// Make sure pathPrefix only contains the first forward slash
config.pathPrefix=`/${config.pathPrefix.replace(/^\/|\/$/g,'')}`;}// Make sure siteUrl doesn't have an ending forward slash
if(config.siteUrl.substr(-1)==='/')config.siteUrl=config.siteUrl.slice(0,-1);// Make sure siteRss has a starting forward slash
if(config.siteRss&&config.siteRss[0]!=='/')config.siteRss=`/${config.siteRss}`;module.exports=config;

/***/ }),

/***/ 8454:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ SEO)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8447);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5482);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(4078);
/* harmony import */ var url_join__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(url_join__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4479);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3__);
class SEO extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){const replacePath=path=>path===`/`?path:path.replace(/\/$/,``);const{postNode,postPath,postSEO}=this.props;let title;let description;let image='';let postURL;if(postSEO){const postMeta=postNode.frontmatter;title=postMeta.title;description=postMeta.description?postMeta.description:postNode.excerpt;if(postMeta.thumbnail){image=postMeta.thumbnail.childImageSharp.fixed.src;}postURL=url_join__WEBPACK_IMPORTED_MODULE_2___default()((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteUrl),replacePath(postPath));}else{title=(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitle);description=(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteDescription);image=(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteLogo);}image=url_join__WEBPACK_IMPORTED_MODULE_2___default()((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteUrl),image);const blogURL=url_join__WEBPACK_IMPORTED_MODULE_2___default()((_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteUrl),(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().pathPrefix));const schemaOrgJSONLD=[{'@context':'http://schema.org','@type':'WebSite',url:blogURL,name:title,alternateName:(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitleAlt)?(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitleAlt):''}];if(postSEO){schemaOrgJSONLD.push({'@context':'http://schema.org','@type':'BreadcrumbList',itemListElement:[{'@type':'ListItem',position:1,item:{'@id':postURL,name:title,image}}]},{'@context':'http://schema.org','@type':'BlogPosting',url:blogURL,name:title,alternateName:(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitleAlt)?(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().siteTitleAlt):'',headline:title,image:{'@type':'ImageObject',url:image},description});}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"description",content:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"image",content:image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("script",{type:"application/ld+json"},JSON.stringify(schemaOrgJSONLD)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:url",content:postSEO?postURL:blogURL}),postSEO&&/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:type",content:"article"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:description",content:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{property:"og:image",content:image}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:card",content:"summary_large_image"}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:creator",content:(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_3___default().userTwitter)}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:title",content:title}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:description",content:description}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("meta",{name:"twitter:image",content:image}));}}

/***/ }),

/***/ 1278:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export ThemeProvider */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8447);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
const defaultState={dark:false,notFound:false,toggleDark:()=>{}};const ThemeContext=/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createContext(defaultState);class ThemeProvider extends (/* unused pure expression or super */ null && (Component)){constructor(...args){super(...args);this.state={dark:false,notFound:false};this.toggleDark=()=>{this.setState(prevState=>({dark:!prevState.dark}));};this.setNotFound=()=>{this.setState({notFound:true});};this.setFound=()=>{this.setState({notFound:false});};}componentDidMount(){const lsDark=JSON.parse(localStorage.getItem('dark'));if(lsDark){this.setState({dark:lsDark});}}componentDidUpdate(prevState){const{dark}=this.state;if(prevState.dark!==dark){localStorage.setItem('dark',JSON.stringify(dark));}}render(){const{children}=this.props;const{dark,notFound}=this.state;return/*#__PURE__*/React.createElement(ThemeContext.Provider,{value:{dark,notFound,setFound:this.setFound,setNotFound:this.setNotFound,toggleDark:this.toggleDark}},children);}}/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (ThemeContext);

/***/ }),

/***/ 5453:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ MainLayout)
});

// EXTERNAL MODULE: external "/Users/khulafaurrasyidin/Documents/Research/RASYID.IN/dev-blog/node_modules/react/index.js"
var index_js_ = __webpack_require__(8447);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./node_modules/react-helmet/lib/Helmet.js
var Helmet = __webpack_require__(5482);
// EXTERNAL MODULE: ./src/context/ThemeContext.js
var ThemeContext = __webpack_require__(1278);
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 4 modules
var gatsby_browser_entry = __webpack_require__(7533);
;// CONCATENATED MODULE: ./src/images/floppy.png
/* harmony default export */ const floppy = (__webpack_require__.p + "static/floppy-a644d2bf058ab990b67c1ee0d3524511.png");
;// CONCATENATED MODULE: ./src/images/sun.svg
/* harmony default export */ const sun = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxnPgogICAgPHBhdGggZD0iTTY0LDMwLjM0Yy0xOC41OSwwLTMzLjY2LDE1LjA3LTMzLjY2LDMzLjY1YzAsMTguNTksMTUuMDcsMzMuNjYsMzMuNjYsMzMuNjYgYzE4LjU5LDAsMzMuNjYtMTUuMDcsMzMuNjYtMzMuNjZDOTcuNjYsNDUuNDEsODIuNTksMzAuMzQsNjQsMzAuMzR6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTU2Ljc2LDI0LjIxTDU2Ljc2LDI0LjIxaDE0LjQ5YzAuNjcsMCwxLjI5LTAuMzMsMS42OC0wLjg4YzAuMzgtMC41NCwwLjQ3LTEuMjUsMC4yNC0xLjg4IEw2NS45MiwxLjgzYy0wLjMtMC44MS0xLjA2LTEuMzQtMS45Mi0xLjM0cy0xLjYyLDAuNTQtMS45MiwxLjM0bC03LjI1LDE5LjYzYy0wLjIzLDAuNjMtMC4xNCwxLjMzLDAuMjQsMS44OCBDNTUuNDYsMjMuODksNTYuMDksMjQuMjEsNTYuNzYsMjQuMjF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTk3LjI2LDQwLjk5YzAuMzgsMC4zOSwwLjkxLDAuNiwxLjQ0LDAuNmMwLjEyLDAsMC4yNC0wLjAxLDAuMzYtMC4wM2MwLjY2LTAuMTIsMS4yMS0wLjU1LDEuNS0xLjE2IGw4Ljc2LTE5LjAxYzAuMzYtMC43OCwwLjE5LTEuNjktMC40MS0yLjNjLTAuNjEtMC42MS0xLjUzLTAuNzctMi4zMS0wLjQyTDg3LjYsMjcuNDRjLTAuNjEsMC4yOC0xLjA0LDAuODQtMS4xNiwxLjUgYy0wLjEyLDAuNjYsMC4xLDEuMzMsMC41NiwxLjgxTDk3LjI2LDQwLjk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0xMjYuMTgsNjIuMDhsLTE5LjY0LTcuMjRjLTAuNjMtMC4yMy0xLjMzLTAuMTQtMS44OCwwLjI0Yy0wLjU1LDAuMzgtMC44NywxLTAuODcsMS42N2wwLjAxLDE0LjQ5IGMwLDAuNjcsMC4zMywxLjMsMC44OCwxLjY4YzAuMzUsMC4yMywwLjc2LDAuMzYsMS4xNywwLjM2YzAuMjQsMCwwLjQ4LTAuMDQsMC43MS0wLjEzbDE5LjY0LTcuMjRjMC44LTAuMjksMS4zNC0xLjA2LDEuMzQtMS45MyBDMTI3LjUyLDYzLjE0LDEyNi45OSw2Mi4zOCwxMjYuMTgsNjIuMDh6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTEwMC41Niw4Ny42Yy0wLjI4LTAuNjEtMC44NC0xLjA0LTEuNS0xLjE2Yy0wLjY2LTAuMTEtMS4zNCwwLjEtMS44LDAuNTdMODcuMDEsOTcuMjYgYy0wLjQ3LDAuNDctMC42OSwxLjE1LTAuNTcsMS44MWMwLjEyLDAuNjUsMC41NSwxLjIyLDEuMTYsMS41bDE5LjAxLDguNzZjMC4yNywwLjEzLDAuNTYsMC4xOCwwLjg2LDAuMTggYzAuNTMsMCwxLjA1LTAuMjEsMS40NC0wLjZjMC42MS0wLjYxLDAuNzctMS41MiwwLjQxLTIuM0wxMDAuNTYsODcuNnoiIHN0eWxlPSJmaWxsOiNGQ0MyMUI7Ii8+CiAgICA8cGF0aCBkPSJNNzEuMjQsMTAzLjc4TDcxLjI0LDEwMy43OGwtMTQuNDksMC4wMWMtMC42NywwLTEuMjksMC4zMy0xLjY3LDAuODggYy0wLjM4LDAuNTUtMC40NywxLjI1LTAuMjUsMS44N2w3LjI1LDE5LjY0YzAuMywwLjgsMS4wNiwxLjM0LDEuOTIsMS4zNHMxLjYyLTAuNTQsMS45Mi0xLjM0bDcuMjUtMTkuNjQgYzAuMjMtMC42MywwLjE0LTEuMzMtMC4yNC0xLjg4QzcyLjU0LDEwNC4xMSw3MS45MiwxMDMuNzgsNzEuMjQsMTAzLjc4eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0zMC43NCw4Ny4wMWMtMC40Ny0wLjQ3LTEuMTQtMC42OC0xLjgtMC41N2MtMC42NiwwLjEyLTEuMjIsMC41NS0xLjUsMS4xNmwtOC43NiwxOS4wMSBjLTAuMzYsMC43OC0wLjE5LDEuNywwLjQyLDIuM2MwLjM5LDAuMzksMC45MSwwLjYsMS40NCwwLjZjMC4yOSwwLDAuNTgtMC4wNiwwLjg2LTAuMTlsMTkuMDEtOC43N2MwLjYxLTAuMjgsMS4wNC0wLjg0LDEuMTYtMS41IGMwLjEyLTAuNjYtMC4xLTEuMzMtMC41Ny0xLjhMMzAuNzQsODcuMDF6IiBzdHlsZT0iZmlsbDojRkNDMjFCOyIvPgogICAgPHBhdGggZD0iTTIyLjE3LDczLjI5YzAuNDEsMCwwLjgyLTAuMTMsMS4xNy0wLjM3YzAuNTUtMC4zOCwwLjg4LTEuMDEsMC44OC0xLjY4bC0wLjAxLTE0LjQ5IGMwLTAuNjctMC4zMy0xLjI5LTAuODgtMS42OGMtMC41NS0wLjM4LTEuMjUtMC40Ny0xLjg3LTAuMjRMMS44Miw2Mi4wOGMtMC44LDAuMjktMS4zNCwxLjA2LTEuMzQsMS45MmMwLDAuODUsMC41MywxLjYyLDEuMzQsMS45MiBsMTkuNjUsNy4yNEMyMS43LDczLjI1LDIxLjkzLDczLjI5LDIyLjE3LDczLjI5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICAgIDxwYXRoIGQ9Ik0yNy40NSw0MC40YzAuMjgsMC42MSwwLjg0LDEuMDQsMS41LDEuMTZjMC4xMiwwLjAyLDAuMjQsMC4wMywwLjM2LDAuMDNjMC41NCwwLDEuMDYtMC4yMSwxLjQ1LTAuNiBMNDEsMzAuNzRjMC40Ny0wLjQ4LDAuNjgtMS4xNSwwLjU2LTEuODFjLTAuMTItMC42NS0wLjU1LTEuMjEtMS4xNi0xLjQ5bC0xOS4wMi04Ljc2Yy0wLjc4LTAuMzYtMS42OS0wLjE5LTIuMywwLjQyIGMtMC42MSwwLjYxLTAuNzcsMS41Mi0wLjQxLDIuM0wyNy40NSw0MC40eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KICA8L2c+Cjwvc3ZnPg==");
;// CONCATENATED MODULE: ./src/images/moon.svg
/* harmony default export */ const moon = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjEyOCIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgMTI4IDEyODsiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogIDxwYXRoIGQ9Ik0xMDUuODcsMTQuOTljLTMuNzQtMy4zOS03LjkxLTYuMzgtMTIuNDItOC44OWMtMC44Ny0wLjQ5LTItMC4zNS0yLjcxLDAuMzMgYy0wLjcxLDAuNjgtMC44MywxLjczLTAuMjksMi41M2MxNS42MywyMi45MywxMi4yOSw1Mi41Mi04LjExLDcxLjk3Yy0xMS45LDExLjM1LTI3Ljg1LDE3LjYtNDQuOTEsMTcuNiBjLTExLjM5LDAtMjIuNTQtMi44Ni0zMi4yNC04LjI3Yy0wLjg3LTAuNDktMi0wLjM2LTIuNzEsMC4zM2MtMC43MSwwLjY4LTAuODMsMS43Mi0wLjI4LDIuNTNjMi44MSw0LjEyLDYuMTIsNy45Myw5Ljg2LDExLjMyIGMxMi42MSwxMS40NSwyOS4yNywxNy43Niw0Ni45LDE3Ljc2YzE4LjI3LDAsMzUuMzQtNi43LDQ4LjA5LTE4Ljg2YzEyLjUzLTExLjk0LDE5LjMxLTI3LjcxLDE5LjA5LTQ0LjQgQzEyNS45Miw0Mi4yNSwxMTguNzIsMjYuNjQsMTA1Ljg3LDE0Ljk5eiIgc3R5bGU9ImZpbGw6I0ZDQzIxQjsiLz4KPC9zdmc+");
;// CONCATENATED MODULE: ./src/components/Navigation.js
class Navigation extends index_js_.Component{constructor(...args){super(...args);this.state={scrolled:false};this.navOnScroll=()=>{if(window.scrollY>20){this.setState({scrolled:true});}else{this.setState({scrolled:false});}};}componentDidMount(){window.addEventListener('scroll',this.navOnScroll);}componentWillUnmount(){window.removeEventListener('scroll',this.navOnScroll);}render(){const{scrolled}=this.state;const{menuLinks}=this.props;const theme=this.context;return/*#__PURE__*/index_js_default().createElement("nav",{className:scrolled?'nav scroll':'nav'},/*#__PURE__*/index_js_default().createElement("div",{className:"nav-container"},/*#__PURE__*/index_js_default().createElement("div",{className:"brand"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement("img",{src:floppy,className:"favicon",alt:"Floppy Diskette"}),/*#__PURE__*/index_js_default().createElement("span",{className:"text"},"Khulafaur Rasyidin"))),/*#__PURE__*/index_js_default().createElement("div",{className:"links"},menuLinks.map(link=>/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{key:link.name,to:link.link,activeClassName:"active"},link.name))),/*#__PURE__*/index_js_default().createElement("div",{className:"cta"},/*#__PURE__*/index_js_default().createElement("button",{className:"dark-switcher",onClick:theme.toggleDark,"aria-label":"Toggle Dark Mode.",title:"Toggle Dark Mode"},theme.dark?/*#__PURE__*/index_js_default().createElement("img",{src:sun,className:"theme-icon",alt:"Light Mode"}):/*#__PURE__*/index_js_default().createElement("img",{src:moon,className:"theme-icon",alt:"Dark Mode"})))));}}Navigation.contextType=ThemeContext/* default */.Z;
;// CONCATENATED MODULE: ./content/thumbnails/facebook.png
/* harmony default export */ const facebook = (__webpack_require__.p + "static/facebook-d902847c7a94b5fb6cbe8a23aa8df9d1.png");
// EXTERNAL MODULE: ./content/thumbnails/gatsby.png
var gatsby = __webpack_require__(828);
;// CONCATENATED MODULE: ./content/thumbnails/instagram.png
/* harmony default export */ const instagram = (__webpack_require__.p + "static/instagram-97d44d149b291bd0d885e8cea9c63f28.png");
;// CONCATENATED MODULE: ./src/components/Footer.js
class Footer extends index_js_.Component{render(){return/*#__PURE__*/index_js_default().createElement("footer",{className:"footer container"},/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Build with Gatsby JS + AWS Amplify")),/*#__PURE__*/index_js_default().createElement("div",null,/*#__PURE__*/index_js_default().createElement("a",{href:"https://instagram.com/khulafaurrr",title:"Instagram"},/*#__PURE__*/index_js_default().createElement("img",{src:instagram,target:"_blank",rel:"noopener noreferrer",className:"footer-img",alt:"Instagram"})),/*#__PURE__*/index_js_default().createElement("a",{href:"https://gatsbyjs.org",title:"By Gatsby JS"},/*#__PURE__*/index_js_default().createElement("img",{src:gatsby/* default */.Z,target:"_blank",rel:"noopener noreferrer",className:"footer-img",alt:"Gatsby JS"}))));}}
// EXTERNAL MODULE: ./data/SiteConfig.js
var SiteConfig = __webpack_require__(4479);
var SiteConfig_default = /*#__PURE__*/__webpack_require__.n(SiteConfig);
;// CONCATENATED MODULE: ./src/images/favicon.png
/* harmony default export */ const favicon = ("data:image/png;base64,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");
;// CONCATENATED MODULE: ./src/layout/index.js
class MainLayout extends index_js_.Component{render(){const{dark,notFound}=this.context;const{children}=this.props;let themeClass='';if(dark&&!notFound){themeClass='dark';}else if(notFound){themeClass='not-found';}return/*#__PURE__*/index_js_default().createElement((index_js_default()).Fragment,null,/*#__PURE__*/index_js_default().createElement(Helmet["default"],{bodyAttributes:{class:`theme ${themeClass}`}},/*#__PURE__*/index_js_default().createElement("meta",{name:"description",content:(SiteConfig_default()).siteDescription}),/*#__PURE__*/index_js_default().createElement("link",{rel:"shortcut icon",type:"image/png",href:favicon})),/*#__PURE__*/index_js_default().createElement(Navigation,{menuLinks:(SiteConfig_default()).menuLinks}),/*#__PURE__*/index_js_default().createElement("main",{id:"main-content"},children),/*#__PURE__*/index_js_default().createElement(Footer,null));}}MainLayout.contextType=ThemeContext/* default */.Z;

/***/ }),

/***/ 6491:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ PageTemplate)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8447);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5482);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5453);
/* harmony import */ var _components_SEO__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(8454);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(4479);
/* harmony import */ var _data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4__);
class PageTemplate extends react__WEBPACK_IMPORTED_MODULE_0__.Component{render(){const{slug}=this.props.pageContext;const postNode=this.props.data.markdownRemark;const page=postNode.frontmatter;if(!page.id){page.id=slug;}return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_layout__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z,null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_1__["default"],null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("title",null,`${page.title} – ${(_data_SiteConfig__WEBPACK_IMPORTED_MODULE_4___default().siteTitle)}`)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(_components_SEO__WEBPACK_IMPORTED_MODULE_3__/* ["default"] */ .Z,{postPath:slug,postNode:postNode,postSEO:true}),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"container"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("article",null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("header",{className:"page-header"},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("h1",null,page.title)),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:"page",dangerouslySetInnerHTML:{__html:postNode.html}}))));}}/* eslint no-undef: "off" */const pageQuery="2299296067";

/***/ }),

/***/ 4078:
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function (name, context, definition) {
  if ( true && module.exports) module.exports = definition();
  else if (true) !(__WEBPACK_AMD_DEFINE_FACTORY__ = (definition),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
		__WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  else {}
})('urljoin', this, function () {

  function normalize (strArray) {
    var resultArray = [];
    if (strArray.length === 0) { return ''; }

    if (typeof strArray[0] !== 'string') {
      throw new TypeError('Url must be a string. Received ' + strArray[0]);
    }

    // If the first part is a plain protocol, we combine it with the next part.
    if (strArray[0].match(/^[^/:]+:\/*$/) && strArray.length > 1) {
      var first = strArray.shift();
      strArray[0] = first + strArray[0];
    }

    // There must be two or three slashes in the file protocol, two slashes in anything else.
    if (strArray[0].match(/^file:\/\/\//)) {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1:///');
    } else {
      strArray[0] = strArray[0].replace(/^([^/:]+):\/*/, '$1://');
    }

    for (var i = 0; i < strArray.length; i++) {
      var component = strArray[i];

      if (typeof component !== 'string') {
        throw new TypeError('Url must be a string. Received ' + component);
      }

      if (component === '') { continue; }

      if (i > 0) {
        // Removing the starting slashes for each component but the first.
        component = component.replace(/^[\/]+/, '');
      }
      if (i < strArray.length - 1) {
        // Removing the ending slashes for each component but the last.
        component = component.replace(/[\/]+$/, '');
      } else {
        // For the last component we will combine multiple slashes to a single one.
        component = component.replace(/[\/]+$/, '/');
      }

      resultArray.push(component);

    }

    var str = resultArray.join('/');
    // Each input component is now separated by a single slash except the possible first plain protocol part.

    // remove trailing slash before parameters or hash
    str = str.replace(/\/(\?|&|#[^!])/g, '$1');

    // replace ? in parameters with &
    var parts = str.split('?');
    str = parts.shift() + (parts.length > 0 ? '?': '') + parts.join('&');

    return str;
  }

  return function () {
    var input;

    if (typeof arguments[0] === 'object') {
      input = arguments[0];
    } else {
      input = [].slice.call(arguments);
    }

    return normalize(input);
  };

});


/***/ }),

/***/ 828:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__webpack_require__.p + "static/gatsby-e0fc01a9a0a5c4198be67d2cf16e935c.png");

/***/ })

};
;
//# sourceMappingURL=component---src-templates-page-js.js.map
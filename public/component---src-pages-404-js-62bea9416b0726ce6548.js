(self.webpackChunkcodesbandit_com=self.webpackChunkcodesbandit_com||[]).push([[883],{8594:function(e,t,n){var r,a,i;i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var a=e[r];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(r>0&&(a=a.replace(/^[\/]+/,"")),a=r<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var i=t.join("/"),l=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=l.shift()+(l.length>0?"?":"")+l.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(a="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=a)},8454:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var r=n(5750),a=n(7294),i=n(7701),l=n(8594),c=n.n(l),o=n(4479),s=n.n(o),m=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n,r,l=this.props,o=l.postNode,m=l.postPath,p=l.postSEO,u="";if(p){var f=o.frontmatter;e=f.title,t=f.description?f.description:o.excerpt,f.thumbnail&&(u=f.thumbnail.childImageSharp.fixed.src),n=c()(s().siteUrl,"/"===(r=m)?r:r.replace(/\/$/,""))}else e=s().siteTitle,t=s().siteDescription,u=s().siteLogo;u=c()(s().siteUrl,u);var h=c()(s().siteUrl,s().pathPrefix),d=[{"@context":"http://schema.org","@type":"WebSite",url:h,name:e,alternateName:s().siteTitleAlt?s().siteTitleAlt:""}];return p&&d.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:h,name:e,alternateName:s().siteTitleAlt?s().siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:u},description:t}),a.createElement(i.ZP,null,a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{name:"image",content:u}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(d)),a.createElement("meta",{property:"og:url",content:p?n:h}),p&&a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:e}),a.createElement("meta",{property:"og:description",content:t}),a.createElement("meta",{property:"og:image",content:u}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:s().userTwitter}),a.createElement("meta",{name:"twitter:title",content:e}),a.createElement("meta",{name:"twitter:description",content:t}),a.createElement("meta",{name:"twitter:image",content:u}))},t}(a.Component)},429:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5750),a=n(7294),i=n(7701),l=n(1278),c=n(5453),o=n(8454),s=n(4479),m=n.n(s),p=function(e){function t(){return e.apply(this,arguments)||this}(0,r.Z)(t,e);var n=t.prototype;return n.componentDidMount=function(){(0,this.context.setNotFound)()},n.componentWillUnmount=function(){(0,this.context.setFound)()},n.render=function(){return a.createElement(c.Z,null,a.createElement(i.ZP,{title:"Page not found – "+m().siteTitle}),a.createElement(o.Z,null),a.createElement("div",{className:"container"},a.createElement("div",{className:"text-center"},a.createElement("h1",null,"404")),a.createElement("p",null,"A fatal exception 0E has occurred at ",a.createElement("span",{className:"tania"},"0x74616e6961")," in 404: page not found."),a.createElement("div",{className:"list"},a.createElement("p",null,a.createElement("span",{className:"bullet"},"*")," Click any link to terminate the current application."),a.createElement("p",null,a.createElement("span",{className:"bullet"},"*")," Press ALT + F4 again to restart your browser. You will lose any unsaved information in all tabs.")),a.createElement("p",{className:"text-right"},"Click any link to continue",a.createElement("span",{className:"blink"},"█"))))},t}(a.Component);p.contextType=l.Z}}]);
//# sourceMappingURL=component---src-pages-404-js-62bea9416b0726ce6548.js.map
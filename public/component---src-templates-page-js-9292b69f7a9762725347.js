(self.webpackChunkcodesbandit_com=self.webpackChunkcodesbandit_com||[]).push([[565],{8594:function(e,t,n){var r,a,i;i=function(){function e(e){var t=[];if(0===e.length)return"";if("string"!=typeof e[0])throw new TypeError("Url must be a string. Received "+e[0]);if(e[0].match(/^[^/:]+:\/*$/)&&e.length>1){var n=e.shift();e[0]=n+e[0]}e[0].match(/^file:\/\/\//)?e[0]=e[0].replace(/^([^/:]+):\/*/,"$1:///"):e[0]=e[0].replace(/^([^/:]+):\/*/,"$1://");for(var r=0;r<e.length;r++){var a=e[r];if("string"!=typeof a)throw new TypeError("Url must be a string. Received "+a);""!==a&&(r>0&&(a=a.replace(/^[\/]+/,"")),a=r<e.length-1?a.replace(/[\/]+$/,""):a.replace(/[\/]+$/,"/"),t.push(a))}var i=t.join("/"),l=(i=i.replace(/\/(\?|&|#[^!])/g,"$1")).split("?");return i=l.shift()+(l.length>0?"?":"")+l.join("&")}return function(){return e("object"==typeof arguments[0]?arguments[0]:[].slice.call(arguments))}},e.exports?e.exports=i():void 0===(a="function"==typeof(r=i)?r.call(t,n,t,e):r)||(e.exports=a)},8454:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var r=n(5750),a=n(7294),i=n(7701),l=n(8594),o=n.n(l),c=n(4479),m=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e,t,n,r,l=this.props,c=l.postNode,p=l.postPath,s=l.postSEO,u="";if(s){var h=c.frontmatter;e=h.title,t=h.description?h.description:c.excerpt,h.thumbnail&&(u=h.thumbnail.childImageSharp.fixed.src),n=o()(m().siteUrl,"/"===(r=p)?r:r.replace(/\/$/,""))}else e=m().siteTitle,t=m().siteDescription,u=m().siteLogo;u=o()(m().siteUrl,u);var d=o()(m().siteUrl,m().pathPrefix),f=[{"@context":"http://schema.org","@type":"WebSite",url:d,name:e,alternateName:m().siteTitleAlt?m().siteTitleAlt:""}];return s&&f.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:e,image:u}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:d,name:e,alternateName:m().siteTitleAlt?m().siteTitleAlt:"",headline:e,image:{"@type":"ImageObject",url:u},description:t}),a.createElement(i.ZP,null,a.createElement("meta",{name:"description",content:t}),a.createElement("meta",{name:"image",content:u}),a.createElement("script",{type:"application/ld+json"},JSON.stringify(f)),a.createElement("meta",{property:"og:url",content:s?n:d}),s&&a.createElement("meta",{property:"og:type",content:"article"}),a.createElement("meta",{property:"og:title",content:e}),a.createElement("meta",{property:"og:description",content:t}),a.createElement("meta",{property:"og:image",content:u}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),a.createElement("meta",{name:"twitter:creator",content:m().userTwitter}),a.createElement("meta",{name:"twitter:title",content:e}),a.createElement("meta",{name:"twitter:description",content:t}),a.createElement("meta",{name:"twitter:image",content:u}))},t}(a.Component)},6491:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return p}});var r=n(5750),a=n(7294),i=n(7701),l=n(5453),o=n(8454),c=n(4479),m=n.n(c),p=function(e){function t(){return e.apply(this,arguments)||this}return(0,r.Z)(t,e),t.prototype.render=function(){var e=this.props.pageContext.slug,t=this.props.data.markdownRemark,n=t.frontmatter;return n.id||(n.id=e),a.createElement(l.Z,null,a.createElement(i.ZP,null,a.createElement("title",null,n.title+" – "+m().siteTitle)),a.createElement(o.Z,{postPath:e,postNode:t,postSEO:!0}),a.createElement("div",{className:"container"},a.createElement("article",null,a.createElement("header",{className:"page-header"},a.createElement("h1",null,n.title)),a.createElement("div",{className:"page",dangerouslySetInnerHTML:{__html:t.html}}))))},t}(a.Component)}}]);
//# sourceMappingURL=component---src-templates-page-js-9292b69f7a9762725347.js.map
(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{151:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(158),i=(t(77),t(153)),l=i.c.div.withConfig({displayName:"Wrapper"})(["h2{margin-top:0;line-height:1.25;}"]),c=i.c.div.withConfig({displayName:"Entry"})(["margin-bottom:2em;"]),s=t(154),u=Object(i.c)(s.Link).withConfig({displayName:"Link"})(["text-decoration:none;text-shadow:0.03em 0 #fff,-0.03em 0 #fff,0 0.03em #fff,0 -0.03em #fff,0.06em 0 #fff,-0.06em 0 #fff,0.09em 0 #fff,-0.09em 0 #fff,0.12em 0 #fff,-0.12em 0 #fff,0.15em 0 #fff,-0.15em 0 #fff;",";background-size:0.05em 2px,0.05em 2px,2px 2px;background-repeat:no-repeat,no-repeat,repeat-x;background-position:0 90%,100% 90%,0 90%;color:#1d1d1d !important;"],function(n){return"background-image: linear-gradient(#fff, #fff), linear-gradient(#fff, #fff),\n    linear-gradient("+n.theme.color_primary+", "+n.theme.color_primary+")"}),d=t(161),m=function(n){var e=n.posts;return r.a.createElement(l,null,e.map(function(n){var e=n.node;return r.a.createElement(c,{key:e.id},r.a.createElement(d.a,{date:e.frontmatter.date}),r.a.createElement("h2",null,r.a.createElement(u,{to:e.fields.slug},e.frontmatter.title)),r.a.createElement("p",null,e.excerpt))}))};t.d(e,"query",function(){return f}),e.default=function(n){var e=n.data;return r.a.createElement(o.a,null,r.a.createElement(m,{posts:e.allMarkdownRemark.edges}))};var f="388403720"},154:function(n,e,t){"use strict";t.r(e),t.d(e,"graphql",function(){return g}),t.d(e,"StaticQueryContext",function(){return f}),t.d(e,"StaticQuery",function(){return p});var a=t(0),r=t.n(a),o=t(8),i=t.n(o),l=t(152),c=t.n(l);t.d(e,"Link",function(){return c.a}),t.d(e,"withPrefix",function(){return l.withPrefix}),t.d(e,"navigate",function(){return l.navigate}),t.d(e,"push",function(){return l.push}),t.d(e,"replace",function(){return l.replace}),t.d(e,"navigateTo",function(){return l.navigateTo});var s=t(35);t.d(e,"waitForRouteChange",function(){return s.c});var u=t(155),d=t.n(u);t.d(e,"PageRenderer",function(){return d.a});var m=t(36);t.d(e,"parsePath",function(){return m.a});var f=r.a.createContext({}),p=function(n){return r.a.createElement(f.Consumer,null,function(e){return n.data||e[n.query]&&e[n.query].data?(n.render||n.children)(n.data?n.data.data:e[n.query].data):r.a.createElement("div",null,"Loading (StaticQuery)")})};function g(){throw new Error("It appears like Gatsby is misconfigured. Gatsby related `graphql` calls are supposed to only be evaluated at compile time, and then compiled away,. Unfortunately, something went wrong and the query was left in the compiled code.\n\n.Unless your site has a complex or custom babel/Gatsby configuration this is likely a bug in Gatsby.")}p.propTypes={data:i.a.object,query:i.a.string.isRequired,render:i.a.func,children:i.a.func}},155:function(n,e,t){var a;n.exports=(a=t(157))&&a.default||a},156:function(n){n.exports={data:{site:{siteMetadata:{title:"Words, by Garet McKinley"}}}}},157:function(n,e,t){"use strict";t.r(e);var a=t(0),r=t.n(a),o=t(8),i=t.n(o),l=t(37),c=t(1),s=function(n){var e=n.location,t=c.default.getResourcesForPathname(e.pathname);return r.a.createElement(l.a,{location:e,pageResources:t})};s.propTypes={location:i.a.shape({pathname:i.a.string.isRequired}).isRequired},e.default=s},158:function(n,e,t){"use strict";var a=t(156),r=t(0),o=t.n(r),i=t(8),l=t.n(i),c=t(159),s=t.n(c),u=t(154),d=t(153),m=t(51),f=t(160),p=t.n(f);function g(){var n=p()(["\n  body {\n    background: ",";\n    margin: ",';\n  }\n\n  code[class*="language-"],\n  pre[class*="language-"] {\n    color: black;\n    background: none;\n    font-family: Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace;\n    text-align: left;\n    white-space: pre;\n    word-spacing: normal;\n    word-break: normal;\n    word-wrap: normal;\n    line-height: 1.5;\n\n    -moz-tab-size: 4;\n    -o-tab-size: 4;\n    tab-size: 4;\n\n    -webkit-hyphens: none;\n    -moz-hyphens: none;\n    -ms-hyphens: none;\n    hyphens: none;\n  }\n\n  /* Code blocks */\n  pre[class*="language-"] {\n    position: relative;\n    margin: 1.5em 0;\n    border-left: 10px solid ',";\n    background-color: ",';\n    background-size: 3em 3em;\n    background-origin: content-box;\n    overflow: visible;\n    padding: 0;\n  }\n\n  code[class*="language"] {\n    max-height: inherit;\n    height: 100%;\n    padding: 0 1em;\n    display: block;\n    overflow: auto;\n  }\n\n  /* Inline code */\n  :not(pre) > code[class*="language-"] {\n    position: relative;\n    padding: 0.2em;\n    border-radius: 0.3em;\n    color: ',';\n    display: inline;\n    white-space: normal;\n  }\n\n  :not(pre) > code[class*="language-"]:after,\n  pre[class*="language-"]:after {\n    right: 0.75em;\n    left: auto;\n    -webkit-transform: rotate(2deg);\n    -moz-transform: rotate(2deg);\n    -ms-transform: rotate(2deg);\n    -o-transform: rotate(2deg);\n    transform: rotate(2deg);\n  }\n\n  .token.comment,\n  .token.block-comment,\n  .token.prolog,\n  .token.doctype,\n  .token.cdata {\n    color: #7d8b99;\n  }\n\n  .token.punctuation {\n    color: #5f6364;\n  }\n\n  .token.property,\n  .token.tag,\n  .token.boolean,\n  .token.number,\n  .token.function-name,\n  .token.constant,\n  .token.symbol,\n  .token.deleted {\n    color: #c92c2c;\n  }\n\n  .token.selector,\n  .token.attr-name,\n  .token.string,\n  .token.char,\n  .token.function,\n  .token.builtin,\n  .token.inserted {\n    color: #2f9c0a;\n  }\n\n  .token.operator,\n  .token.entity,\n  .token.url,\n  .token.variable {\n    color: #a67f59;\n    background: rgba(255, 255, 255, 0.5);\n  }\n\n  .token.atrule,\n  .token.attr-value,\n  .token.keyword,\n  .token.class-name {\n    color: #1990b8;\n  }\n\n  .token.regex,\n  .token.important {\n    color: #e90;\n  }\n\n  .language-css .token.string,\n  .style .token.string {\n    color: #a67f59;\n    background: rgba(255, 255, 255, 0.5);\n  }\n\n  .token.important {\n    font-weight: normal;\n  }\n\n  .token.bold {\n    font-weight: bold;\n  }\n  .token.italic {\n    font-style: italic;\n  }\n\n  .token.entity {\n    cursor: help;\n  }\n\n  .namespace {\n    opacity: 0.7;\n  }\n\n  @media screen and (max-width: 767px) {\n    pre[class*="language-"]:before,\n    pre[class*="language-"]:after {\n      bottom: 14px;\n      box-shadow: none;\n    }\n  }\n\n  /* Plugin styles */\n  .token.tab:not(:empty):before,\n  .token.cr:before,\n  .token.lf:before {\n    color: #e0d7d1;\n  }\n\n  /* Plugin styles: Line Numbers */\n  pre[class*="language-"].line-numbers {\n    padding-left: 0;\n  }\n\n  pre[class*="language-"].line-numbers code {\n    padding-left: 3.8em;\n  }\n\n  pre[class*="language-"].line-numbers .line-numbers-rows {\n    left: 0;\n  }\n\n  /* Plugin styles: Line Highlight */\n  pre[class*="language-"][data-line] {\n    padding-top: 0;\n    padding-bottom: 0;\n    padding-left: 0;\n  }\n  pre[data-line] code {\n    position: relative;\n    padding-left: 4em;\n  }\n  pre .line-highlight {\n    margin-top: 0;\n  }\n']);return g=function(){return n},n}var b=Object(d.b)(g(),function(n){return n.theme.body_background},function(n){return n.theme.body_margin},function(n){return n.theme.color_primary},function(n){return n.theme.prism_background},function(n){return n.theme.color_primary}),h=d.c.div.withConfig({displayName:"Wrapper"})(["padding:0 0 2em 0;margin:2em 0;border-bottom:1px solid rgba(0,0,0,0.15);"]),k=function(n){var e=n.siteTitle;return o.a.createElement(h,null,o.a.createElement("div",null,o.a.createElement("h1",{style:{margin:0}},o.a.createElement(u.Link,{to:"/"},e))))},y=d.c.div.withConfig({displayName:"Wrapper"})(["position:relative;margin:0 auto;max-width:640px;"]),w=function(n){var e=n.children;return o.a.createElement(u.StaticQuery,{query:"755544856",render:function(n){return o.a.createElement(d.a,{theme:m.a},o.a.createElement(y,null,o.a.createElement(s.a,{title:n.site.siteMetadata.title,meta:[{name:"description",content:"Sample"},{name:"keywords",content:"sample, something"}]},o.a.createElement("html",{lang:"en"})),o.a.createElement(k,{siteTitle:n.site.siteMetadata.title}),o.a.createElement(b,null),e))},data:a})};w.propTypes={children:l.a.node.isRequired},e.a=w},161:function(n,e,t){"use strict";var a=t(0),r=t.n(a),o=t(153).c.time.withConfig({displayName:"Wrapper"})(["max-width:100%;margin:0 auto;margin-top:0px;margin-bottom:0px;text-transform:uppercase;font-style:italic;color:rgb(150,150,150);display:block;margin-top:0px;margin-bottom:5px;font-weight:bolder;font-size:14px;"]);e.a=function(n){var e=n.date;return r.a.createElement(o,{dateTime:e},e)}}}]);
//# sourceMappingURL=component---src-pages-index-js-925d85459b462e991b2c.js.map
(self.webpackChunkweb_public=self.webpackChunkweb_public||[]).push([[396],{374:function(e,t,i){"use strict";i.d(t,{A:function(){return g}});var n=i(4942),s=i(15671),r=i(43144),o=i(60136),c=i(18505),l=(i(53986),i(40706),i(51769)),a=i.n(l),d=i(3507),p=i.n(d),h=i(93786),m=i.n(h),u=i(72791),f=i(81694),v=i.n(f),x=i(80184),g=function(e){(0,o.Z)(i,e);var t=(0,c.Z)(i);function i(e){var n;return(0,s.Z)(this,i),(n=t.call(this,e)).codeViewAreaRef=void 0,n.areaMaxHeight=void 0,n.state={isShowCode:!0},n.codeViewAreaRef=(0,u.createRef)(),n.areaMaxHeight="fit-content",n}return(0,r.Z)(i,[{key:"componentDidUpdate",value:function(){window.PR.prettyPrint()}},{key:"componentDidMount",value:function(){var e;window.PR.prettyPrint(),this.areaMaxHeight=(null===(e=this.codeViewAreaRef.current)||void 0===e?void 0:e.clientHeight)+"px"||0,this.setState({isShowCode:!this.props.canHidden||!!this.props.defaultShow})}},{key:"render",value:function(){var e,t=this,i="";try{i=p().format(this.props.children,{parser:"typescript",plugins:[a(),m()]})}catch(r){console.error("\u4ee3\u7801\u683c\u5f0f\u6709\u8bef\uff0c\u65e0\u6cd5\u89e3\u6790"),i=this.props.children}var s=v()("lg-code-view-root",(e={},(0,n.Z)(e,"".concat(this.props.className),!!this.props.className),(0,n.Z)(e,"lg-code-view-can-hidden",this.props.canHidden),e));return(0,x.jsxs)("div",{className:s,style:this.props.style,children:[(0,x.jsx)("div",{ref:this.codeViewAreaRef,className:"lg-code-view-area",style:{height:this.state.isShowCode?this.areaMaxHeight:"0"},children:(0,x.jsx)("pre",{className:"prettyprint lang-js",children:(0,x.jsx)("div",{className:"code_block",children:(0,x.jsx)("code",{className:"code_text",children:i})})})}),this.props.canHidden?(0,x.jsx)("div",{onClick:function(){return t.setState({isShowCode:!t.state.isShowCode})},className:"lg-code-view-show-button",children:(0,x.jsxs)("div",{className:"lg-code-view-show-text ".concat(this.state.isShowCode?"on-show":""),children:[this.state.isShowCode?"\u9690\u85cf":"\u663e\u793a","\u4ee3\u7801"]})}):""]})}}]),i}(u.Component);g.defaultProps={children:"",language:"ts",canHidden:!1}},46543:function(e,t,i){"use strict";i.d(t,{l:function(){return m}});var n=i(4942),s=i(15671),r=i(43144),o=i(60136),c=i(18505),l=i(86696),a=i(81694),d=i.n(a),p=i(374),h=i(80184),m=function(e){(0,o.Z)(i,e);var t=(0,c.Z)(i);function i(e){var n;return(0,s.Z)(this,i),(n=t.call(this,e)).classNamePrefix=void 0,n.classNamePrefix="lg-demo-view",n}return(0,r.Z)(i,[{key:"render",value:function(){var e=d()("".concat(this.classNamePrefix,"-root"),(0,n.Z)({},"".concat(this.props.className),!!this.props.className));return(0,h.jsxs)("div",{className:e,style:this.props.style,children:[(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-title"),children:this.props.title}),this.props.subtitle?(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-subtitle"),children:this.props.subtitle}):"",(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-component-area"),children:this.props.children}),this.props.code?(0,h.jsx)(p.A,{canHidden:!0,children:this.props.code}):""]})}}]),i}(l.H)},99038:function(e,t,i){"use strict";i.d(t,{U:function(){return m}});var n=i(4942),s=i(15671),r=i(43144),o=i(60136),c=i(18505),l=i(86696),a=i(81694),d=i.n(a),p=i(374),h=i(80184),m=function(e){(0,o.Z)(i,e);var t=(0,c.Z)(i);function i(e){var n;return(0,s.Z)(this,i),(n=t.call(this,e)).classNamePrefix=void 0,n.classNamePrefix="lg-demo-page",n}return(0,r.Z)(i,[{key:"render",value:function(){var e=d()("".concat(this.classNamePrefix,"-root"),(0,n.Z)({},"".concat(this.props.className),!!this.props.className));return(0,h.jsxs)("div",{className:e,children:[(0,h.jsxs)("div",{className:"".concat(this.classNamePrefix,"-header"),children:[(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-title"),children:this.props.title}),this.props.subtitle?(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-subtitle"),children:this.props.subtitle}):"",this.props.importCode?(0,h.jsxs)("div",{className:"".concat(this.classNamePrefix,"-import"),children:[(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-import-title"),children:"\u5728\u9875\u9762\u4e2d\u5f15\u5165\u7ec4\u4ef6"}),(0,h.jsx)(p.A,{children:this.props.importCode})]}):""]}),(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-body"),children:this.props.children}),(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-footer"),children:this.props.interfaceCode?(0,h.jsxs)("div",{className:"".concat(this.classNamePrefix,"-interface"),children:[(0,h.jsx)("div",{className:"".concat(this.classNamePrefix,"-interface-title"),children:"\u6807\u7b7e\u5c5e\u6027\u89e3\u6790"}),(0,h.jsx)(p.A,{children:this.props.interfaceCode})]}):""})]})}}]),i}(l.H)},74612:function(e,t,i){"use strict";i.r(t),i.d(t,{default:function(){return m}});var n=i(70885),s=i(1413),r=i(80184);function o(e){return(0,r.jsx)("div",{className:"timeline_content ".concat(e.className),style:e.style||{},children:e.list.map((function(t,i){var n="";return"alternate"===e.mode&&(n=i%2===0?"mode_right":"mode_left"),(0,r.jsxs)("div",{className:"timeline_item ".concat(n),children:[(0,r.jsxs)("div",{className:"timeline-item-dot-wrapper",children:[(0,r.jsx)("div",{className:"timeline-item-dot-line",style:{display:i===e.list.length-1?"none":"",borderColor:t.lineColor}}),(0,r.jsx)("div",{className:"timeline-item-dot-content",children:(0,r.jsx)("div",{className:"timeline-item-dot",style:{backgroundColor:t.dotColor}})})]}),(0,r.jsxs)("div",{className:"timeline-item-content-wrapper",children:[(0,r.jsx)("div",{className:"timeline-item-content",children:t.content}),(0,r.jsx)("div",{className:"timeline-item-label",children:t.time})]})]})}))})}function c(e){return(0,r.jsx)("div",{className:"timeline_contentB ".concat(e.className),style:e.style||{},children:e.list.map((function(t,i){return(0,r.jsxs)("div",{className:"timeline_itemB ",children:[(0,r.jsxs)("div",{className:"timeline-item-dot-wrapper",children:[(0,r.jsx)("div",{className:"timeline-item-dot-line",style:{display:i===e.list.length-1?"none":"",borderColor:t.lineColor}}),(0,r.jsx)("div",{className:"timeline-item-dot-content",children:(0,r.jsx)("div",{className:"timeline-item-dot",style:{backgroundColor:t.dotColor}})})]}),(0,r.jsx)("div",{className:"timeline-item-content-wrapper",children:(0,r.jsxs)("div",{className:"row-justify-start",children:[(0,r.jsx)("img",{className:"imgB",src:t.src,width:"40",alt:""}),(0,r.jsxs)("div",{className:"",style:{marginBottom:"12px"},children:[(0,r.jsx)("div",{children:t.title}),(0,r.jsx)("div",{style:{fontSize:"12px",color:"rgb(78, 89, 105)"},children:t.content})]})]})})]})}))})}var l=function(e){switch(e.type){case"A":return(0,r.jsx)(o,(0,s.Z)({},e));case"B":return(0,r.jsx)(c,(0,s.Z)({},e))}return(0,r.jsx)(o,(0,s.Z)({},e))},a=i(72791),d=i(89051),p=i(46543),h=i(99038),m=function(){var e=(0,a.useState)("left"),t=(0,n.Z)(e,2),i=t[0],s=t[1],o=function(e){s(e)};return(0,r.jsxs)(h.U,{title:"G020\u65f6\u95f4\u7ebf",className:"lg-breadcrumb-demo-page",importCode:'\n            import LgTimeline from "@/components/timeline"\n',interfaceCode:"\n            interface LgLoadingProps{\n                type: 'A' | 'B',\n                list: any,\n                mode?: string//left:\u5de6\u5bf9\u9f50\uff0calternat//\u4ea4\u53c9\u663e\u793a,\n                className?: string,\n                style?: object,\n             }\n",children:[(0,r.jsxs)(p.l,{title:"A\u6b3e\u4ee3\u7801\u6837\u4f8b",code:'\n                var list = [\n                    { time: "2022-01-01", content: "\u53ef\u4ee5\u4f20\u5165iconBg\u6539\u53d8\u8282\u70b9\u5c0f\u5706\u70b9\u7684\u989c\u8272\uff0c\u53ef\u4ee5\u4f20\u5165lineColor\u6539\u53d8\u8282\u70b9\u7ebf\u6761\u7684\u989c\u8272\u3002", dotColor: "#e6e6e6", lineColor: "" },\n                    { time: "2022-01-02", content: "iconBg\uff0clineColor\u53ef\u4f20\u53ef\u4e0d\u4f20\uff0c\u4e0d\u4f20\u5219\u662f\u9ed8\u8ba4\u503c" },\n                    { time: "2022-01-02", content: "iconBg\uff0clineColor\u53ef\u4f20\u53ef\u4e0d\u4f20\uff0c\u4e0d\u4f20\u5219\u662f\u9ed8\u8ba4\u503c", dotColor: "", lineColor: "" }\n                ]\n\n              <LgTimeline mode={"left"} list={list} type=\'A\' />\n              <LgTimeline mode={"alternate"} list={list} type=\'A\' />\n          ',children:[(0,r.jsxs)("div",{children:[(0,r.jsx)(d.Radio,{value:"left",checked:"left"===i,onChange:o,children:"left"}),(0,r.jsx)(d.Radio,{value:"alternate",checked:"alternate"===i,onChange:o,children:"alternate"})]}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{style:{width:"400px"},children:(0,r.jsx)(l,{mode:i,list:[{time:"2022-01-01",content:"\u53ef\u4ee5\u4f20\u5165iconBg\u6539\u53d8\u8282\u70b9\u5c0f\u5706\u70b9\u7684\u989c\u8272\uff0c\u53ef\u4ee5\u4f20\u5165lineColor\u6539\u53d8\u8282\u70b9\u7ebf\u6761\u7684\u989c\u8272\u3002",dotColor:"#e6e6e6",lineColor:""},{time:"2022-01-02",content:"iconBg\uff0clineColor\u53ef\u4f20\u53ef\u4e0d\u4f20\uff0c\u4e0d\u4f20\u5219\u662f\u9ed8\u8ba4\u503c"},{time:"2022-01-02",content:"iconBg\uff0clineColor\u53ef\u4f20\u53ef\u4e0d\u4f20\uff0c\u4e0d\u4f20\u5219\u662f\u9ed8\u8ba4\u503c",dotColor:"",lineColor:""}],type:"A"})})]}),(0,r.jsx)(p.l,{title:"B\u6a2a\u5411\u65f6\u95f4\u8f74",code:'\n                var list2 = [\n                    { title: "Toutiao", content: "Founded in 201222", dotColor: "", lineColor: "", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },\n                    { title: "Xigua Video", content: "Founded in 2022811", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },\n                    { title: "Toutiao", content: "Founded in 2018111", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" }\n                ]\n                    \n                <LgTimeline list={list2} type=\'B\' />\n          ',children:(0,r.jsx)("div",{style:{width:"800px"},children:(0,r.jsx)(l,{list:[{title:"Toutiao",content:"Founded in 201222",dotColor:"",lineColor:"",src:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png"},{title:"Xigua Video",content:"Founded in 2022811",src:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png"},{title:"Toutiao",content:"Founded in 2018111",src:"https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png"}],type:"B"})})})]})}},86696:function(e,t,i){"use strict";i.d(t,{H:function(){return c}});var n=i(15671),s=i(43144),r=i(60136),o=i(18505),c=function(e){(0,r.Z)(i,e);var t=(0,o.Z)(i);function i(e){return(0,n.Z)(this,i),t.call(this,e)}return(0,s.Z)(i,[{key:"componentDidMount",value:function(){this.props.onRef&&this.props.onRef(this)}}]),i}(i(72791).Component)},26291:function(e){function t(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}t.keys=function(){return[]},t.resolve=t,t.id=26291,e.exports=t},30907:function(e,t,i){"use strict";function n(e,t){(null==t||t>e.length)&&(t=e.length);for(var i=0,n=new Array(t);i<t;i++)n[i]=e[i];return n}i.d(t,{Z:function(){return n}})},70885:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(40181);function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var i=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=i){var n,s,r=[],o=!0,c=!1;try{for(i=i.call(e);!(o=(n=i.next()).done)&&(r.push(n.value),!t||r.length!==t);o=!0);}catch(l){c=!0,s=l}finally{try{o||null==i.return||i.return()}finally{if(c)throw s}}return r}}(e,t)||(0,n.Z)(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:function(e,t,i){"use strict";i.d(t,{Z:function(){return s}});var n=i(30907);function s(e,t){if(e){if("string"===typeof e)return(0,n.Z)(e,t);var i=Object.prototype.toString.call(e).slice(8,-1);return"Object"===i&&e.constructor&&(i=e.constructor.name),"Map"===i||"Set"===i?Array.from(e):"Arguments"===i||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(i)?(0,n.Z)(e,t):void 0}}}}]);
//# sourceMappingURL=396.2f769e21.chunk.js.map
(self.webpackChunkweb_public=self.webpackChunkweb_public||[]).push([[721],{374:function(e,n,a){"use strict";a.d(n,{A:function(){return m}});var t=a(15671),r=a(43144),l=a(60136),s=a(18505),i=(a(53986),a(40706),a(51769)),c=a.n(i),o=a(3507),g=a.n(o),p=a(93786),u=a.n(p),d=a(72791),_=a(80184),m=function(e){(0,l.Z)(a,e);var n=(0,s.Z)(a);function a(){return(0,t.Z)(this,a),n.apply(this,arguments)}return(0,r.Z)(a,[{key:"componentDidUpdate",value:function(e,n,a){window.PR.prettyPrint()}},{key:"componentDidMount",value:function(){window.PR.prettyPrint()}},{key:"render",value:function(){var e="";try{e=g().format(this.props.children,{parser:"typescript",plugins:[c(),u()]})}catch(n){console.error("\u4ee3\u7801\u683c\u5f0f\u6709\u8bef\uff0c\u65e0\u6cd5\u89e3\u6790"),e=this.props.children}return(0,_.jsx)("pre",{className:"lg-code-view prettyprint lang-js ".concat(this.props.className||""),style:this.props.style,children:(0,_.jsx)("div",{className:"code_block",children:(0,_.jsx)("code",{className:"code_text",children:e})})})}}]),a}(d.Component);m.defaultProps={children:"",language:"ts"}},75133:function(e,n,a){"use strict";a.d(n,{w:function(){return t}});var t=JSON.parse("[".concat('"lg-skin-s1", "lg-skin-s2", "lg-skin-s3", "lg-skin-s4","lg-skin-s5","lg-skin-k1", "lg-skin-k2"',"]"))},31824:function(e,n,a){"use strict";a.d(n,{C:function(){return g}});var t=a(15671),r=a(43144),l=a(60136),s=a(18505),i=a(72791),c=a(75133),o=a(80184),g=function(e){(0,l.Z)(a,e);var n=(0,s.Z)(a);function a(){return(0,t.Z)(this,a),n.apply(this,arguments)}return(0,r.Z)(a,[{key:"render",value:function(){var e=this;return(0,o.jsx)(o.Fragment,{children:c.w.map((function(n,a){return(0,o.jsx)("div",{className:"".concat(n," ").concat(e.props.className||""),style:e.props.style,children:e.props.children},a)}))})}}]),a}(i.Component)},47932:function(e,n,a){"use strict";a.r(n),a.d(n,{default:function(){return m}});var t=a(70885),r=a(374),l=a(1413),s=a(72791),i=a(80184);function c(e){var n=function(n){var a=parseInt(n.target.dataset.index);a!=e.currentPage&&e.onClick(a)},a=0,t=e.totalPage,r=e.currentPage;if(!e.totalPage||e.totalPage<1)return(0,i.jsx)("div",{});var l=new Array;if(t<8)for(var s={display:"none"},c={display:"none"},g={display:"none"},p={display:"none"},u=1;u<=t;u++){var d=u==r?"lg_page_number lg_page_cur_page":"lg_page_number";l.push((0,i.jsx)("span",{"data-index":u,className:d,onClick:n,children:u},"page"+u))}else{s=r>3?{display:"inline-block"}:{display:"none"},c=r>4?{display:"inline-block"}:{display:"none"},g=r<t-3?{display:"inline-block"}:{display:"none"},p=r<t-2?{display:"inline-block"}:{display:"none"};var _=0;r<4?_=r-1:r>2&&r<t-1?_=2:r==t-1?_=3:r==t&&(_=4);for(var m=r-_;m<r+5-_;m++){var x=m==r?"lg_page_number lg_page_cur_page":"lg_page_number";l.push((0,i.jsx)("span",{"data-index":m,className:x,onClick:n,children:m},"page"+m))}}return(0,i.jsxs)("div",{className:"lg_page_warp lg_page_warp_A ".concat(e.className||""),style:e.style||{},children:[(0,i.jsx)("span",{className:"lg_page_number lg_page_btn"+(r>1?"":" lg_page_ban_btn"),onClick:function(){var n=e.currentPage-1;n>0&&e.onClick(n)},children:"< "}),(0,i.jsx)("span",{"data-index":1,className:"lg_page_number",style:s,onClick:n,children:"1"}),(0,i.jsx)("span",{className:"lg_page_text",style:c,children:"\xa0\xb7\xb7\xb7\xa0"}),l,(0,i.jsx)("span",{className:"lg_page_text",style:g,children:"\xa0\xb7\xb7\xb7\xa0"}),(0,i.jsx)("span",{"data-index":t,className:"lg_page_number",style:p,onClick:n,children:t}),(0,i.jsx)("span",{className:"lg_page_number lg_page_btn"+(t>r?"":" lg_page_ban_btn"),onClick:function(){var n=e.currentPage+1;n<=e.totalPage&&e.onClick(n)},children:" >"}),(0,i.jsxs)("span",{className:"lg_page_text",children:["\xa0\u5171",(0,i.jsx)("span",{style:{color:"#f00"},children:t}),"\u9875\xa0\xa0\u5230\xa0"]}),(0,i.jsx)(o,{onChange:function(n,t){a=n||0,!t||!a||a==e.currentPage||e.totalPage<2||e.onClick(a)},total:t}),(0,i.jsx)("span",{className:"lg_page_text",children:"\xa0\u9875\xa0"}),(0,i.jsx)("span",{className:"lg_page_number"+(t>1?"":" lg_page_ban_btn"),style:{width:38},onClick:function(){!a||a==e.currentPage||e.totalPage<2||e.onClick(a)},children:"GO"})]})}function o(e){var n=(0,s.useState)(""),a=(0,t.Z)(n,2),r=a[0],l=a[1];return(0,i.jsx)("input",{type:"text",onKeyDown:function(n){if(13==n.keyCode){var a=parseInt(n.target.value);e.onChange(a,1)}},onChange:function(n){var a=n.target.value;a?/^([1-9]?)|([1-9][0-9]*)$/.test(a)&&(a=parseInt(a))>0&&a<=e.total&&(l(a),e.onChange(a)):r&&(l(a),e.onChange(a))},value:r,className:"lg_page_input",placeholder:"".concat(e.total)})}function g(e){var n=function(n){var a=parseInt(n.target.dataset.index);a!=e.currentPage&&e.onClick(a)},a=e.totalPage,t=e.currentPage;if(!e.totalPage||e.totalPage<1)return(0,i.jsx)("div",{});var r=new Array;if(a<8)for(var l=1;l<=a;l++){var s=l==t?"lg_page_number lg_page_cur_page":"lg_page_number";r.push((0,i.jsx)("span",{"data-index":l,className:s,onClick:n,children:l},"page"+l))}else{var c=0;t<4?c=t-1:t>2&&t<a-1?c=2:t==a-1?c=3:t==a&&(c=4);for(var o=t-c;o<t+5-c;o++){var g=o==t?"lg_page_number lg_page_cur_page":"lg_page_number";r.push((0,i.jsx)("span",{"data-index":o,className:g,onClick:n,children:o},"page"+o))}}return(0,i.jsx)("div",{className:"lg_page_warp lg_page_warp_B ".concat(e.className||""),style:e.style||{},children:r})}function p(e){var n=function(n){var a=parseInt(n.target.dataset.index);a!=e.currentPage&&e.onClick(a)},a=e.totalPage,t=e.currentPage;if(!e.totalPage||e.totalPage<1)return(0,i.jsx)("div",{});for(var r=new Array,l=1;l<=a;l++){var s=l==t?"lg_page_number_c lg_page_cur_page_c":"lg_page_number_c";r.push((0,i.jsx)("span",{"data-index":l,className:s,onClick:n},"page"+l))}return(0,i.jsx)("div",{className:"lg_page_warp_".concat(e.type||""," ").concat(e.className||""),style:e.style||{},children:r})}function u(e){var n=function(n){var a=parseInt(n.target.dataset.index);a!=e.currentPage&&e.onClick(a)},a=e.totalPage,t=e.currentPage;if(!e.totalPage||e.totalPage<1)return(0,i.jsx)("div",{});var r=new Array;if(a<8)for(var l={display:"none"},s={display:"none"},c={display:"none"},o={display:"none"},g=1;g<=a;g++){var p=g==t?"lg_page_number lg_page_cur_page":"lg_page_number";r.push((0,i.jsx)("span",{"data-index":g,className:p,onClick:n,children:g},"page"+g))}else{l=t>3?{display:"inline-block"}:{display:"none"},s=t>4?{display:"inline-block"}:{display:"none"},c=t<a-3?{display:"inline-block"}:{display:"none"},o=t<a-2?{display:"inline-block"}:{display:"none"};var u=0;t<4?u=t-1:t>2&&t<a-1?u=2:t==a-1?u=3:t==a&&(u=4);for(var d=t-u;d<t+5-u;d++){var _=d==t?"lg_page_number lg_page_cur_page":"lg_page_number";r.push((0,i.jsx)("span",{"data-index":d,className:_,onClick:n,children:d},"page"+d))}}return(0,i.jsxs)("div",{className:"lg_page_warp lg_page_warp_D ".concat(e.className||""),style:e.style||{},children:[(0,i.jsx)("span",{className:"lg_page_number lg_page_btn"+(t>1?"":" lg_page_ban_btn"),onClick:function(){var n=e.currentPage-1;n>0&&e.onClick(n)},children:"< "}),(0,i.jsx)("span",{"data-index":1,className:"lg_page_number",style:l,onClick:n,children:"1"}),(0,i.jsx)("span",{className:"lg_page_text",style:s,children:"\xa0\xb7\xb7\xb7\xa0"}),r,(0,i.jsx)("span",{className:"lg_page_text",style:c,children:"\xa0\xb7\xb7\xb7\xa0"}),(0,i.jsx)("span",{"data-index":a,className:"lg_page_number",style:o,onClick:n,children:a}),(0,i.jsx)("span",{className:"lg_page_number lg_page_btn"+(a>t?"":" lg_page_ban_btn"),onClick:function(){var n=e.currentPage+1;n<=e.totalPage&&e.onClick(n)},children:" >"}),(0,i.jsxs)("span",{className:"lg_page_text",children:["\xa0\u5171",(0,i.jsx)("span",{style:{color:"#f00"},children:a}),"\u9875"]})]})}var d=function(e){return e.onRef&&e.onRef(undefined),"B"==e.type?(0,i.jsx)(g,(0,l.Z)({},e)):"C"==e.type||"C1"==e.type?(0,i.jsx)(p,(0,l.Z)({},e)):"D"==e.type?(0,i.jsx)(u,(0,l.Z)({},e)):(0,i.jsx)(c,(0,l.Z)({},e))},_=a(31824),m=function(){var e=(0,s.useState)(1),n=(0,t.Z)(e,2),a=n[0],l=n[1],c=function(e){l(e)};return(0,i.jsxs)("div",{className:"lg_pages_container",children:[(0,i.jsx)("h2",{children:"G026 \u9875\u7801"}),(0,i.jsxs)("div",{className:"lg_pages_item",children:[(0,i.jsx)("div",{className:"lg_pages_item_title",children:"\u6807\u7b7e\u5c5e\u6027"}),(0,i.jsx)(r.A,{className:"code-size",children:"\n                            interface BoxProps {\n                                type?: 'A' | 'B' | 'C',\n                                status?: 0 | 1 | 2 | number,\n                                children?: any,\n                                disable?: boolean,\n                                onClick?: (status: number, backData?: any) => void,\n                                backData?: any,\n                                className?: string,\n                                style?: object,\n                                onRef?: (ref: any) => void\n                            }\n                        "})]}),(0,i.jsxs)("div",{className:"lg_pages_item",children:[(0,i.jsx)("div",{className:"lg_pages_item_title",children:"A\u6b3e \u5217\u8868\u5e38\u89c4\u9875\u7801"}),(0,i.jsx)(r.A,{className:"code-size",children:"\n                        <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />\n                    "}),(0,i.jsx)(_.C,{children:(0,i.jsx)(d,{totalPage:20,currentPage:a,onClick:c})})]}),(0,i.jsxs)("div",{className:"lg_pages_item",children:[(0,i.jsx)("div",{className:"lg_pages_item_title",children:"B\u6b3e \u5c0f\u9875\u7801"}),(0,i.jsx)(r.A,{className:"code-size",children:'\n                        <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />\n                    '}),(0,i.jsx)(_.C,{children:(0,i.jsx)(d,{type:"B",totalPage:20,currentPage:a,onClick:c})})]}),(0,i.jsxs)("div",{className:"lg_pages_item",children:[(0,i.jsx)("div",{className:"lg_pages_item_title",children:"C\u6b3e \u8f6e\u64ad\u7ffb\u9875"}),(0,i.jsx)(r.A,{className:"code-size",children:'\n                        <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />;\n                        <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />\n                    '}),(0,i.jsx)(_.C,{children:(0,i.jsx)(d,{type:"C",totalPage:5,currentPage:a,onClick:c})}),(0,i.jsx)(_.C,{children:(0,i.jsx)(d,{type:"C1",totalPage:5,currentPage:a,onClick:c})})]}),(0,i.jsxs)("div",{className:"lg_pages_item",children:[(0,i.jsx)("div",{className:"lg_pages_item_title",children:"D\u6b3e \u7eaf\u6570\u5b57"}),(0,i.jsx)(r.A,{className:"code-size",children:'\n                        <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />\n                    '}),(0,i.jsx)(_.C,{children:(0,i.jsx)(d,{type:"D",totalPage:20,currentPage:a,onClick:c})})]})]})}},26291:function(e){function n(e){var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}n.keys=function(){return[]},n.resolve=n,n.id=26291,e.exports=n},30907:function(e,n,a){"use strict";function t(e,n){(null==n||n>e.length)&&(n=e.length);for(var a=0,t=new Array(n);a<n;a++)t[a]=e[a];return t}a.d(n,{Z:function(){return t}})},70885:function(e,n,a){"use strict";a.d(n,{Z:function(){return r}});var t=a(40181);function r(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var a=null==e?null:"undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=a){var t,r,l=[],s=!0,i=!1;try{for(a=a.call(e);!(s=(t=a.next()).done)&&(l.push(t.value),!n||l.length!==n);s=!0);}catch(c){i=!0,r=c}finally{try{s||null==a.return||a.return()}finally{if(i)throw r}}return l}}(e,n)||(0,t.Z)(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},40181:function(e,n,a){"use strict";a.d(n,{Z:function(){return r}});var t=a(30907);function r(e,n){if(e){if("string"===typeof e)return(0,t.Z)(e,n);var a=Object.prototype.toString.call(e).slice(8,-1);return"Object"===a&&e.constructor&&(a=e.constructor.name),"Map"===a||"Set"===a?Array.from(e):"Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a)?(0,t.Z)(e,n):void 0}}}}]);
//# sourceMappingURL=721.a06c72f0.chunk.js.map
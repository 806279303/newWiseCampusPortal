(self.webpackChunkweb_public=self.webpackChunkweb_public||[]).push([[650],{374:function(e,o,n){"use strict";n.d(o,{A:function(){return y}});var s=n(15671),t=n(43144),i=n(60136),a=n(18505),r=(n(53986),n(40706),n(51769)),l=n.n(r),p=n(3507),c=n.n(p),h=n(93786),u=n.n(h),d=n(72791),m=n(80184),y=function(e){(0,i.Z)(n,e);var o=(0,a.Z)(n);function n(){return(0,s.Z)(this,n),o.apply(this,arguments)}return(0,t.Z)(n,[{key:"componentDidUpdate",value:function(e,o,n){window.PR.prettyPrint()}},{key:"componentDidMount",value:function(){window.PR.prettyPrint()}},{key:"render",value:function(){var e="";try{e=c().format(this.props.children,{parser:"typescript",plugins:[l(),u()]})}catch(o){console.error("\u4ee3\u7801\u683c\u5f0f\u6709\u8bef\uff0c\u65e0\u6cd5\u89e3\u6790"),e=this.props.children}return(0,m.jsx)("pre",{className:"lg-code-view prettyprint lang-js ".concat(this.props.className||""),style:this.props.style,children:(0,m.jsx)("div",{className:"code_block",children:(0,m.jsx)("code",{className:"code_text",children:e})})})}}]),n}(d.Component);y.defaultProps={children:"",language:"ts"}},59661:function(e,o,n){"use strict";n.r(o),n.d(o,{default:function(){return L}});var s=n(15671),t=n(43144),i=n(97326),a=n(60136),r=n(18505),l=n(374),p=n(72791),c=n(54164),h=n(80184),u=0,d=1e3,m=[],y=function(e){(0,a.Z)(n,e);var o=(0,r.Z)(n);function n(e){var t;return(0,s.Z)(this,n),(t=o.call(this,e)).popLayerZIndex=0,t.popLayerCreateNumIndex=0,t.isPopLayerMove=!1,t.divLeftWidth=0,t.divTopHeight=0,t.maxMoveWidth=0,t.maxMoveHeight=0,t.parentNode=null,t.popLayerLeft=0,t.popLayerTop=0,t.state={isOpen:!1,popLayerMainClassName:""},t.initCoverLayer=t.initCoverLayer.bind((0,i.Z)(t)),t.popLayerMouseDown=t.popLayerMouseDown.bind((0,i.Z)(t)),t.popLayerMouseMove=t.popLayerMouseMove.bind((0,i.Z)(t)),t.popLayerMouseUp=t.popLayerMouseUp.bind((0,i.Z)(t)),t.closePopLayer=t.closePopLayer.bind((0,i.Z)(t)),t.confirmPopLayer=t.confirmPopLayer.bind((0,i.Z)(t)),t.coverLayerClose=t.coverLayerClose.bind((0,i.Z)(t)),t}return(0,t.Z)(n,[{key:"closePopLayer",value:function(){var e=this,o=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0,n=arguments.length>1?arguments[1]:void 0;this.setState({isOpen:!1},(function(){e.props.onShowLayer&&e.props.onShowLayer(),e.initCoverLayer(0,e.popLayerCreateNumIndex),0!=o?e.props.onClose&&e.props.onClose(e.state.isOpen):n&&n(e.state.isOpen)}))}},{key:"confirmPopLayer",value:function(){this.closePopLayer(0,this.props.onConfirm)}},{key:"iconClose",value:function(){this.closePopLayer(0,this.props.onIconClose)}},{key:"UNSAFE_componentWillReceiveProps",value:function(e){var o=this;if(this.props.isOpen!=e.isOpen){var n=e.isOpen?1:0;this.setState({isOpen:e.isOpen},(function(){var s=e.isOpen?" lg_popLayer_container_show lg_popLayer_main_hasBottom ":" lg_popLayer_main_noHasBottom ";setTimeout((function(){o.setState({popLayerMainClassName:s})}),200),o.initCoverLayer(n,o.popLayerCreateNumIndex,e.isShowCoverLayer)}))}}},{key:"unique",value:function(e){if(!Array.isArray(e))return[];for(var o=[],n=0;n<e.length;n++)-1===o.indexOf(e[n])&&o.push(e[n]);return o}},{key:"initCoverLayer",value:function(e,o){var n=this,s=arguments.length>2&&void 0!==arguments[2]&&arguments[2];m=this.unique(m);var t=document.querySelectorAll(".lg_popLayer_container_coverLayer");if(!e&&m.length){var i=(m=this.unique(m)).indexOf(parseInt(o));-1!=i&&m.splice(i,1)}if(!e&&m.length){m=this.unique(m);var a=-1;m.forEach((function(e){a=e>a?e:a})),(o=a)>-1&&(s=!!this.props.isShowCoverLayer,e=1)}t.length&&t.forEach((function(t,i){if(e){var a=t.getAttribute("data-cover-index");a==o&&s?setTimeout((function(){t.style.opacity="0.6",t.style.filter="alpha(opacity=60)",t.style.zIndex=1e4,t.style.class="lg_popLayer_container_coverLayer lg_popLayer_container_coverLayer_show",t.previousElementSibling.style.zIndex=1e4+(n.popLayerCreateNumIndex+1),t.parentNode.style.zIndex=1e4,m.push(parseInt(a))}),100):(t.style.opacity="0",t.style.class="lg_popLayer_container_coverLayer",t.style.filter="alpha(opacity=0)",t.style.zIndex=n.popLayerZIndex,t.previousElementSibling.style.zIndex=n.popLayerZIndex+(n.popLayerCreateNumIndex+1),t.parentNode.style.zIndex=n.popLayerZIndex)}else m.splice(o,1)}))}},{key:"popLayerMouseDown",value:function(e){var o,n=e.currentTarget.parentNode,s=null===(o=e.currentTarget.parentNode)||void 0===o?void 0:o.parentNode;this.maxMoveWidth=s.offsetWidth-n.offsetWidth,this.maxMoveHeight=s.offsetHeight-n.offsetHeight,this.divLeftWidth=e.pageX-n.offsetLeft,this.divTopHeight=e.pageY-n.offsetTop,this.parentNode=n,this.isPopLayerMove=!0}},{key:"popLayerMouseMove",value:function(e){if(this.isPopLayerMove){var o=this.parentNode,n=e.pageX-this.divLeftWidth,s=e.pageY-this.divTopHeight;n<=0&&(n=1),n>=this.maxMoveWidth&&(n=this.maxMoveWidth-2),s<=0&&(s=0),s>=this.maxMoveHeight&&(s=this.maxMoveHeight-1),o.style.left=n.toString()+"px",o.style.top=s.toString()+"px"}}},{key:"popLayerMouseUp",value:function(e){e.preventDefault(),this.isPopLayerMove=!1}},{key:"componentDidMount",value:function(){var e=this;d+=2,this.popLayerZIndex=d,this.popLayerCreateNumIndex=u++,this.initPopLayerPosition(),window.onresize=function(){e.initPopLayerPosition()},setTimeout((function(){}),2e3),document.body.addEventListener("mouseout",(function(o){o||(o=window.event);var n=o.relatedTarget||o.toElement;n&&"HTML"!=n.nodeName||(e.isPopLayerMove=!1)}))}},{key:"getStyle",value:function(e,o){return e.currentStyle?e.currentStyle[o]:getComputedStyle(e)[o]}},{key:"initPopLayerPosition",value:function(){this.popLayerLeft=document.documentElement.clientWidth/2-parseFloat(this.props.width)/2,this.popLayerTop=document.documentElement.clientHeight/2-parseFloat(this.props.height)/2}},{key:"coverLayerClose",value:function(){this.props.isCoverLayerClickClose&&this.closePopLayer()}},{key:"render",value:function(){var e=this,o=this.props,n=this.state,s=Object.assign({left:this.popLayerLeft,top:this.popLayerTop,width:o.width,height:n.isOpen?o.height:0,zIndex:this.popLayerZIndex+1},this.props.style||{});return c.createPortal((0,h.jsxs)("div",{className:"lg_popLayer_big_container ",onMouseUp:this.popLayerMouseUp,onMouseMove:this.popLayerMouseMove,style:{zIndex:this.popLayerZIndex,display:n.isOpen?"block":"none"},children:[(0,h.jsxs)("div",{className:"lg_popLayer_container "+(n.popLayerMainClassName||"")+" "+(o.className||""),style:s,id:"lg_popLayer_container"+this.popLayerCreateNumIndex,children:[(0,h.jsxs)("div",{className:"lg_popLayer_top",onMouseDown:this.popLayerMouseDown,onMouseMove:this.popLayerMouseMove,onMouseUp:this.popLayerMouseUp,children:[(0,h.jsx)("div",{className:"lg_popLayer_top_title",style:{display:this.props.customOfHeader?"none":"block"},children:o.title}),(0,h.jsx)("div",{className:"lg_popLayer_top_close",onClick:function(){e.iconClose()},style:{display:o.isShowTopClose?this.props.customOfHeader?"none":"block":"none"}}),(0,h.jsx)("div",{className:"lg_popLayer_top_custom_header "+o.headerClassName||0,style:{display:this.props.customOfHeader?"block":"none"},children:o.customOfHeader})]}),(0,h.jsx)("div",{className:"lg_popLayer_main "+(o.childClassName||""),children:o.children}),(0,h.jsxs)("div",{className:"lg_popLayer_bottom ",style:{display:null!==o&&void 0!==o&&o.isShowBottom?"flex":"none"},children:[(0,h.jsxs)("div",{className:"lg_popLayer_bottom_cho_box",style:{display:o.customOfBottom?"none":"flex"},children:[(0,h.jsx)("div",{className:"lg_popLayer_bottom_confirm_box "+(o.confirmClass||""),children:(0,h.jsx)("input",{onClick:function(){e.confirmPopLayer()},className:"lg_popLayer_bottom_confirm_input input_item",value:o.confirmText,type:"button"})}),(0,h.jsx)("div",{className:"lg_popLayer_bottom_close_box "+(o.closeClass||""),children:(0,h.jsx)("input",{onClick:function(){e.closePopLayer(1)},className:"lg_popLayer_bottom_close_input input_item",value:o.closeText,type:"button"})})]}),(0,h.jsx)("div",{className:"lg_popLayer_bottom_cho_box_custom_bottom "+(o.bottomClassName||""),style:{display:o.customOfBottom?"block":"none"},children:o.customOfBottom})]})]}),(0,h.jsx)("div",{className:"lg_popLayer_container_coverLayer "+o.coverLayerClass||0,"data-index":this.popLayerZIndex,"data-cover-index":this.popLayerCreateNumIndex,style:{zIndex:this.popLayerZIndex},onClick:this.coverLayerClose})]}),document.getElementById("Lg_popLayer_root"))}}]),n}(p.Component);y.defaultProps={isCoverLayerClickClose:!1,isShowCoverLayer:!0,title:"Lg\u5f39\u51fa\u5c42-\u9ed8\u8ba4\u6807\u9898",isShowTopClose:!0,isShowBottom:!0,confirmText:"\u786e\u8ba4",closeText:"\u53d6\u6d88",zIndex:d,width:400,height:300};var v=0;!function(){if(!v){var e=document.getElementById("Lg_popLayer_root");e&&document.removeChild(e);var o=document.createElement("div");o.style.display="none",o.setAttribute("id","Lg_popLayer_root"),document.body.appendChild(o),++v,setTimeout((function(){document.getElementById("Lg_popLayer_root").style.display="block"}),1500)}}();var L=function(e){(0,a.Z)(n,e);var o=(0,r.Z)(n);function n(e){var t;return(0,s.Z)(this,n),(t=o.call(this,e)).state={isOpenPopLayer:!0,name:"\u5f39\u7a97",isOpen1:!1,isOpen2:!1,isOpen3:!1,isOpen4:!1},t.showPopLayerFun1=t.showPopLayerFun1.bind((0,i.Z)(t)),t.showPopLayerFun2=t.showPopLayerFun2.bind((0,i.Z)(t)),t.showPopLayerFun3=t.showPopLayerFun3.bind((0,i.Z)(t)),t.showPopLayerFun4=t.showPopLayerFun4.bind((0,i.Z)(t)),t.initTime=t.initTime.bind((0,i.Z)(t)),t.initDom1=t.initDom1.bind((0,i.Z)(t)),t.initDom2=t.initDom2.bind((0,i.Z)(t)),t.initDom3=t.initDom3.bind((0,i.Z)(t)),t.initDom4=t.initDom4.bind((0,i.Z)(t)),t.closePop1=t.closePop1.bind((0,i.Z)(t)),t.closePop4=t.closePop4.bind((0,i.Z)(t)),t}return(0,t.Z)(n,[{key:"initTime",value:function(){var e=(new Date).toTimeString();return this.setState({nowTime:e}),e}},{key:"initDom1",value:function(){return(0,h.jsx)("div",{className:"open_1",children:"2022\u5e74\u6625\u8fd0\u6b63\u5f0f\u5f00\u542f\uff01 2022\u5e74\u94c1\u8def\u6625\u8fd0\u81ea1\u670817\u65e5\u5f00\u59cb\uff0c2\u670825\u65e5\u7ed3\u675f\uff0c\u517140\u5929\uff0c\u5168\u56fd\u94c1\u8def\u65c5\u5ba2\u53d1\u9001\u91cf\u9884\u8ba1\u8fbe\u52302.8\u4ebf\u4eba\u6b21\u3002 \u94c1\u8def\u90e8\u95e8\u8868\u793a\uff0c\u4eca\u5e74\u6625\u8fd0\u6bcf\u65e5\u53ef\u63d0\u4f9b\u5ba2\u5ea7\u5e2d\u4f4d1050\u4e07\u4e2a\u4ee5\u4e0a\uff0c\u8f832019\u5e74\u63d0\u9ad810%\u4ee5\u4e0a\u3002 \u6309\u7167\u201c\u9002\u9700\u5b89\u6392\u3001\u5e94\u6025\u6709\u5907\uff0c\u7cbe\u51c6\u5339\u914d\u3001\u68af\u6b21\u6295\u653e\u201d\u539f\u5219\uff0c\u94c1\u8def\u90e8\u95e8\u6839\u636e\u5ba2\u6d41\u53d8\u5316\u548c\u8f66\u7968\u9884\u552e\u60c5\u51b5\uff0c\u66f4\u52a0\u7cbe\u51c6\u5730\u5b9e\u65bd\u201c\u4e00\u65e5\u4e00\u56fe\u201d\uff0c\u52a8\u6001\u5b89\u6392\u8fd0\u529b\u6295\u653e\u548c\u5ba2\u8f66\u5f00\u884c\uff0c\u5168\u529b\u6ee1\u8db3\u4fdd\u969c\u65c5\u5ba2\u51fa\u884c\u548c\u75ab\u60c5\u9632\u63a7\u7684\u53cc\u91cd\u9700\u8981\u3002 \u6b64\u5916\uff0c\u5982\u679c\u5c40\u90e8\u5730\u533a\u51fa\u73b0\u75ab\u60c5\uff0c\u5c06\u5feb\u901f\u8c03\u6574\u8fd0\u8f93\u7ec4\u7ec7\uff0c\u505c\u5f00\u3001\u51cf\u5f00\u6d89\u75ab\u5730\u533a\u65c5\u5ba2\u5217\u8f66\uff0c\u51cf\u5c11\u4eba\u5458\u6d41\u52a8\u3002 \u8fd9\u4e9b\u76ee\u7684\u5730\u6216\u6210\u201c\u6700\u70ed\u201d \u6b64\u524d\u6709\u5e73\u53f0\u9884\u6d4b\u4e86\u4eca\u5e74\u6625\u8fd0\u7684\u70ed\u95e8\u76ee\u7684\u5730\u3002 \u53bb\u54ea\u513f\u5927\u6570\u636e\u663e\u793a\uff0c2022\u5e74\u6625\u8fd0\u94c1\u8def\u51fa\u884c\u5341\u5927\u70ed\u95e8\u76ee\u7684\u5730\u4e3a\uff1a\u91cd\u5e86\u3001\u6b66\u6c49\u3001\u54c8\u5c14\u6ee8\u3001\u957f\u6c99\u3001\u8d35\u9633\u3001\u6210\u90fd\u3001\u5357\u660c\u3001\u6c88\u9633\u3001\u957f\u6625\u3001\u961c\u9633\u3002\u897f\u5357\u3001\u4e1c\u5317\u5730\u533a\u4eba\u7fa4\u8d2d\u7968\u79ef\u6781\u6027\u8f83\u9ad8\u3002 \u800c\u5341\u5927\u70ed\u95e8\u51fa\u53d1\u57ce\u5e02\u4e3a\uff1a\u5e7f\u5dde\uff0c\u5317\u4eac\uff0c\u4e0a\u6d77\uff0c\u676d\u5dde\uff0c\u6210\u90fd\uff0c\u82cf\u5dde\uff0c\u5357\u4eac\uff0c\u4e1c\u839e\uff0c\u6b66\u6c49\uff0c\u957f\u6c99\u3002\u5176\u4e2d\u4e1c\u839e\u76f8\u8f83\u5f80\u5e74\u589e\u5e45\u8f83\u4e3a\u660e\u663e\uff0c\u7b2c\u4e00\u6b21\u8dfb\u8eab\u6625\u8fd0\u5341\u5927\u51fa\u53d1\u5730\u3002"})}},{key:"initDom2",value:function(){var e=["\u5317\u4eac\u4ea4\u901a\u5927\u5b66\u4e2d\u56fd\u7efc\u5408\u4ea4\u901a\u7814\u7a76\u4e2d\u5fc3\u6267\u884c\u4e3b\u4efb \u6559\u6388 \u6bdb\u4fdd\u534e\uff1a\u6309\u7167\u5e74\u9f84\u66f4\u52a0\u5408\u7406\uff0c\u54b1\u4eec\u56fd\u5bb6\u73b0\u5728\u4e00\u4e2a\u662f\u7ba1\u7406\u6c34\u5e73\u63d0\u9ad8\u4e86\uff0c\u6211\u4eec\u73b0\u5728\u53ef\u4ee5\u6709\u4fe1\u606f\u5316\u7684\u7ba1\u7406\u6c34\u5e73\u3002\u56fd\u5bb6\u7684\u6cbb\u7406\u6c34\u5e73\u63d0\u9ad8\u4e86\uff0c\u6211\u4eec\u73b0\u5728\u51e0\u4e4e\u6240\u6709\u7684\u4eba\u90fd\u6709\u8eab\u4efd\u8bc1\uff0c\u90fd\u80fd\u77e5\u9053\u4ed6\u7684\u5e74\u9f84\u3002\u6211\u4eec\u7684\u56fd\u5bb6\u4e5f\u5bcc\u5f3a\u4e86\uff0c\u628a\u798f\u5229\u66f4\u591a\u5730\u7ed9\u8001\u767e\u59d3\uff0c\u7ed9\u5b69\u5b50\u6210\u957f\uff0c\u6211\u89c9\u5f97\u662f\u975e\u5e38\u53ca\u65f6\u7684\u4e00\u4e2a\u653f\u7b56\u3002\n        \u4e13\u5bb6\uff1a\u907f\u514d\u8eab\u9ad8\u4e00\u5200\u5207\uff0c\u8ba9\u4f18\u60e0\u7968\u666e\u60e0\u513f\u7ae5\n        \u8fd1\u5e74\u6765\uff0c\u793e\u4f1a\u4e0d\u540c\u9886\u57df\u90fd\u5bf9\u201c\u4e00\u5200\u5207\u201d\u7684\u706b\u8f66\u513f\u7ae5\u7968\u89c4\u5b9a\u63d0\u51fa\u4e86\u610f\u89c1\u548c\u5efa\u8bae\uff0c\u6b64\u6b21\u56fd\u5bb6\u94c1\u8def\u5c40\u62df\u4fee\u8ba2\u539f\u6709\u7684\u89c4\u7ae0\uff0c\u53ef\u8c13\u662f\u6070\u9022\u5176\u65f6\u3002\n        \u57282018\u5e74\u5168\u56fd\u4e24\u4f1a\u671f\u95f4\uff0c\u6709\u5168\u56fd\u4eba\u5927\u4ee3\u8868\u548c\u5168\u56fd\u653f\u534f\u59d4\u5458\u66fe\u5206\u522b\u5c31\u201c\u513f\u7ae5\u7968\u201d\u5236\u5ea6\u63d0\u51fa\u4e86\u5efa\u8bae\u3002\u5efa\u8bae\u907f\u514d\u91c7\u7528\u6309\u8eab\u9ad8\u201c\u4e00\u5200\u5207\u201d\u7684\u89c4\u5b9a\uff0c\u4ee5\u4fdd\u969c\u201c\u5927\u4e2a\u5b50\u513f\u7ae5\u201d\u5e94\u6709\u7684\u798f\u5229\uff0c\u4f53\u73b0\u516c\u5e73\u3002\n        2019\u5e74\uff0c\u5b89\u5fbd\u768411\u5c81\u513f\u7ae5\u5c0f\u5218\u56e0\u8eab\u9ad8\u8d85\u51fa1.5\u7c73\u7684\u6807\u51c6\u800c\u88ab\u8981\u6c42\u8865\u7968\u540e\uff0c\u8d77\u8bc9\u94c1\u8def\u90e8\u95e8\u3002","\u5c0f\u5218\u7684\u7236\u4eb2\uff1a\u6211\u7684\u5b69\u5b50\u662f\u901a\u8fc712306\u8d2d\u7968\u65f6\uff0c\u8eab\u4efd\u8bc1\u53f7\u7801\u4e0a\u662f\u6709\u4ed6\u7684\u51fa\u751f\u5e74\u6708\u65e5\uff0c\u4e5f\u5c31\u662f\u8bf4\u4ed6\u662f\u6cd5\u5f8b\u89c4\u5b9a\u7684\u4e00\u4e2a\u513f\u7ae5\uff0c\u540e\u6765\u5728\u706b\u8f66\u4e0a\u8981\u6c42\u4ee5\u8eab\u9ad8\u8981\u6c42\u8fdb\u884c\u6d4b\u91cf\uff0c\u6211\u5f53\u65f6\u5728\u8fd9\u4e0a\u9762\u63d0\u51fa\u5f02\u8bae\u3002","\u4f60\u597d\uff0c\u6211\u4eec\u7684\u65f6\u5019\u7684\u8bf4\u6cd5\u534e\u4e1c\u6570\u63a7\u5c31\u56de\u590d\u662f\u80af\u5b9a\u53d1\u54c8\u5220\u6389\u5361\u6216\u4ed8\u6269\u6240\u591a\u519b\u519b\u519b\u519b\u519b\u5c31\u770b\u770b\u770b\u65f6\u95f4\u591a\u559d\u51e0\u676f\u6d6e\u70b9\u6570\u5bcc\u58eb\u8fbe\u4f1a\u8ba1\u6cd5\u597d"];return(0,h.jsx)("div",{children:(0,h.jsx)("ul",{children:null===e||void 0===e?void 0:e.map((function(e,o){return(0,h.jsx)("li",{children:e})}))})})}},{key:"initDom3",value:function(){var e=this;return(0,h.jsx)("div",{children:(0,h.jsx)("input",{type:"button",value:"\u6253\u5f00\u5f39\u7a972",className:"comment_position",onClick:function(){e.showPopLayerFun2()}})})}},{key:"initDom4",value:function(){return(0,h.jsx)("div",{children:"4444444444444444444444444444444444444444444"})}},{key:"showPopLayerFun1",value:function(){this.setState({isOpen1:!this.state.isOpen1})}},{key:"showPopLayerFun2",value:function(e){console.log(e),this.setState({isOpen2:!this.state.isOpen2})}},{key:"showPopLayerFun3",value:function(){this.setState({isOpen3:!this.state.isOpen3})}},{key:"showPopLayerFun4",value:function(){this.setState({isOpen4:!this.state.isOpen4})}},{key:"componentDidMount",value:function(){var e=["lg-skin-s1","lg-skin-s2","lg-skin-s3","lg-skin-s4","lg-skin-s5","lg-skin-k1","lg-skin-k2"],o=e.length;setInterval((function(){var n=Math.floor(Math.random()*parseInt(o));document.documentElement.className=e[n]}),5e3)}},{key:"closePop1",value:function(e){this.setState({isOpen1:e})}},{key:"closePop4",value:function(){this.setState({isOpen4:!1})}},{key:"isConfirm2",value:function(e){alert("isConfirm2 --- \u5f39\u7a972 \u70b9\u51fb\u786e\u5b9a")}},{key:"isClose2",value:function(e){alert("isClose2 --- \u5f39\u7a972 \u70b9\u51fb\u53d6\u6d88")}},{key:"isIconClose2",value:function(e){alert("isIconClose2 --- \u5f39\u7a972 \u70b9\u51fb\u5c0f\u56fe\u6807\u53d6\u6d88")}},{key:"render",value:function(){var e=this;return(0,h.jsxs)(h.Fragment,{children:[(0,h.jsxs)("div",{className:"components-show-box",children:[(0,h.jsx)("div",{className:"components-show-big-title",children:"G004"}),(0,h.jsx)("div",{className:"components-show-use",children:"\u4f7f\u7528\u6307\u5357"}),(0,h.jsxs)("div",{className:"components-show-steps-box",children:[(0,h.jsx)("div",{className:"components-show-steps",children:"\u4e00\u3001\u5728 @/components/popLayer \u6587\u4ef6\u4e2d\u5f15\u5165\u7ec4\u4ef6 LgPopLayer"}),(0,h.jsx)("div",{className:"components-show-steps-code",children:(0,h.jsx)(l.A,{className:"",children:"\n                                        import { LgPopLayer } from '@/components/popLayer';\n                                    "})})]}),(0,h.jsxs)("div",{className:"components-show-steps-box",children:[(0,h.jsx)("div",{className:"components-show-steps",children:"\u4e8c\u3001\u518d\u5f15\u5165\u6807\u7b7e\uff0c\u6807\u7b7e\u5c5e\u6027\u89e3\u6790"}),(0,h.jsx)("div",{className:"components-show-steps-code",children:(0,h.jsx)("div",{className:"components-show-steps-code",children:(0,h.jsx)(l.A,{className:"props_container",children:"\n                                        /**\n                                         * @summary \u4f7f\u7528\u7684\u5f39\u51fa\u5c42\u4f20\u5165\u7684props\n                                         */\n                                        export interface PopLayerProps {\n                                            // popLayerBox\n                                            isOpen: boolean;//\u662f\u5426\u6253\u5f00\u5f39\u7a97 | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:true\n                                            width?: number;//\u5f39\u7a97\u7684\u603b\u5bbd\u5ea6 | \u9ed8\u8ba4\u503c: 400 | \u662f\u5426\u5fc5\u4f20:false\n                                            height?: number;//\u5f39\u7a97\u7684\u603b\u9ad8\u5ea6 | \u9ed8\u8ba4\u503c: 300 | \u662f\u5426\u5fc5\u4f20:false\n                                            title?: string;//\u5f39\u7a97\u5934\u90e8\u7684\u6807\u9898 | \u9ed8\u8ba4\u503c: Lg\u5f39\u51fa\u5c42-\u9ed8\u8ba4\u6807\u9898 | \u662f\u5426\u5fc5\u4f20:false\n                                            className?: string;//\u5f39\u7a97\u6700\u5916\u5c42\u7684\u7c7b\u540d | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                            style?: React.CSSProperties;//\u5f39\u7a97\u6700\u5916\u5c42\u7684\u6837\u5f0f\u7c7b\u578b | \u9ed8\u8ba4\u503c\uff1a--  | \u6ce8\uff1a \u4e0d\u5efa\u8bae\u4f7f\u7528,\u5728\u672c\u7ec4\u4ef6\u521d\u59cb\u5316\u4f7f\u7528\u540e\uff0c\u90e8\u5206\u6837\u5f0f\uff08zIndex\uff09\u6709\u53ef\u80fd\u4f1a\u88ab\u8986\u76d6\u6389\u5bfc\u81f4\u4e0d\u751f\u6548\u3002\u63a8\u8350\u4f7f\u7528className\u53bb\u4fee\u6539\u6837\u5f0f | \u662f\u5426\u5fc5\u4f20:false\n                                        \n                                            // coverLayer\n                                            isShowCoverLayer?: boolean;//\u662f\u5426\u5c55\u793a\u906e\u7f69\u5c42 | \u9ed8\u8ba4\u503c\uff1atrue | \u662f\u5426\u5fc5\u4f20:false\n                                            coverLayerClass?: string;//\u906e\u7f69\u5c42\u7c7b\u540d | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                            isCoverLayerClickClose?: boolean;//\u662f\u5426\u70b9\u51fb\u906e\u7f69\u5c42\u5173\u95ed\u5f39\u7a97 | \u9ed8\u8ba4\u503c\uff1afalse | \u662f\u5426\u5fc5\u4f20:false\n                                        \n                                            // top\n                                            isShowTopClose?: boolean;//\u662f\u5426\u663e\u793a\u5934\u90e8\u7684\u5173\u95ed\u6309\u94ae | \u9ed8\u8ba4\u503c:true | \u662f\u5426\u5fc5\u4f20:false\n                                        \n                                            // bottom\n                                            isShowBottom?: boolean;//\u662f\u5426\u663e\u793a\u5e95\u90e8\u7684 | \u9ed8\u8ba4\u503c:true | \u662f\u5426\u5fc5\u4f20:false\n                                            confirmText?: string;//\u786e\u8ba4\u6309\u94ae\u9700\u8981\u663e\u793a\u7684\u6587\u672c | \u9ed8\u8ba4\u503c\uff1a\u786e\u8ba4 | \u662f\u5426\u5fc5\u4f20:false\n                                            confirmClass?: string;//\u786e\u8ba4\u6309\u94ae\u5143\u7d20\u4e0a\u7684\u7c7b\u540d | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                            closeText?: string;//\u5173\u95ed\u6309\u94ae\u9700\u8981\u663e\u793a\u7684\u6587\u672c | \u9ed8\u8ba4\u503c\uff1a\u53d6\u6d88 | \u662f\u5426\u5fc5\u4f20:false\n                                            closeClass?: string;//\u5173\u95ed\u6309\u94ae\u5143\u7d20\u4e0a\u7684\u7c7b\u540d | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                        \n                                            // customHtml\n                                            customOfHeader?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);//\u5f39\u7a97\u5934\u90e8\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49Dom | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                            headerClassName?: string;//\u5f39\u7a97\u5934\u90e8\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49Dom\u5bb9\u5668\u7684\u7c7b\u540d | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                            children?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);// \u5f39\u7a97\u4e2d\u90e8\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49Dom | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                            childClassName?: string;//\u81ea\u5b9a\u4e49\u5f39\u7a97\u5bb9\u5668\u7684\u7c7b\u540d | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                            customOfBottom?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);//\u5f39\u7a97\u4f4e\u90e8\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49Dom | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                            bottomClassName?: string;//\u5f39\u7a97\u4f4e\u90e8\u6dfb\u52a0\u7684\u81ea\u5b9a\u4e49Dom\u7684\u7c7b\u540d | \u9ed8\u8ba4\u503c\uff1a-- | \u662f\u5426\u5fc5\u4f20:false\n                                        \n                                            // function\n                                            onConfirm?: (isOpen?: boolean) => void;//\u70b9\u51fb\u786e\u8ba4\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u51fd\u6570  | \u662f\u5426\u5fc5\u4f20:false\n                                            onClose?: (isOpen?: boolean) => void;//\u70b9\u51fb\u5173\u95ed\u6309\u94ae\u65f6\u89e6\u53d1\u7684\u51fd\u6570 | \u662f\u5426\u5fc5\u4f20:false\n                                            onIconClose?: (isOpen?: boolean) => void;//\u70b9\u51fb\u9876\u90e8\u7684\u5173\u95ed\u5c0f\u56fe\u6807\u65f6\u89e6\u53d1\u7684\u51fd\u6570 | \u662f\u5426\u5fc5\u4f20:false\n                                            onShowLayer: (isOpen?: boolean) => void;//\u5fc5\u4f20\u7684\u5f39\u7a97\u5f00\u5173\u51fd\u6570\u6253\u5f00\u548c\u5173\u95ed\u90fd\u5fc5\u6267\u884c\u7684\u51fd\u6570\uff0c\u53ef\u4ee5\u5728\u6253\u5f00\u524d\u548c\u5173\u95ed\u540e\u89e6\u53d1\u7236\u7ec4\u4ef6\u903b\u8f91\u7684\u51fd\u6570 | \u662f\u5426\u5fc5\u4f20:true\n                                        }\n                                    "})})})]}),(0,h.jsxs)("div",{className:"components-show-steps-box",children:[(0,h.jsx)("div",{className:"components-show-steps",children:"\u4e09\u3001demo\u6837\u5f0f\u5c55\u793a"}),(0,h.jsxs)("div",{className:"components-show-example",children:[(0,h.jsx)("div",{className:"components-show-example-title",children:"popLayer \u5f39\u51fa\u6848\u4f8b1:"}),(0,h.jsx)("div",{className:"open_layer",children:(0,h.jsx)("input",{type:"button",value:"\u6253\u5f00\u5f39\u7a971",className:"comment_position",onClick:this.showPopLayerFun1})}),(0,h.jsx)("div",{className:"components-show-steps-code",children:(0,h.jsx)("div",{className:"components-show-steps-code",children:(0,h.jsx)(l.A,{className:"",children:"\ninitDom1() {\n    return (\n        <div className='open_1'>\n            2022\u5e74\u6625\u8fd0\u6b63\u5f0f\u5f00\u542f\uff01\n\n            2022\u5e74\u94c1\u8def\u6625\u8fd0\u81ea1\u670817\u65e5\u5f00\u59cb\uff0c2\u670825\u65e5\u7ed3\u675f\uff0c\u517140\u5929\uff0c\u5168\u56fd\u94c1\u8def\u65c5\u5ba2\u53d1\u9001\u91cf\u9884\u8ba1\u8fbe\u52302.8\u4ebf\u4eba\u6b21\u3002\n        </div>)\n}\nshowPopLayerFun1() {\n    this.setState({\n        isOpen1: !this.state.isOpen1\n    })\n}\n<LgPopLayer\n    coverLayerClass={'weekly_publication'}\n    isShowTopClose={false}\n    isOpen={this.state.isOpen1}\n    width={700}\n    height={500}\n    title='\u6253\u5f00\u5f39\u7a971'\n    isShowCoverLayer={false}\n    onClose={this.showPopLayerFun1}\n    onShowLayer={this.showPopLayerFun1}\n>\n    {this.initDom1()}\n</LgPopLayer>\n<input type=\"button\" value=\"\u6253\u5f00\u5f39\u7a971\" className='comment_position' onClick={this.showPopLayerFun1} />\n                                    "})})}),(0,h.jsx)("div",{className:"components-show-example-title",children:"popLayer \u5f39\u51fa\u6848\u4f8b2:"}),(0,h.jsxs)("div",{className:"open_layer",children:[(0,h.jsx)("input",{type:"button",value:"\u6253\u5f00\u5f39\u7a972",className:"comment_position",onClick:function(){e.showPopLayerFun2()}}),(0,h.jsx)("div",{className:"components-show-steps-code",children:(0,h.jsx)(l.A,{className:"",children:"\n<LgPopLayer isOpen={this.state.isOpen2}\n    onShowLayer={this.showPopLayerFun2}\n    title='\u6253\u5f00\u5f39\u7a972'\n    onClose={this.isClose2}\n    onConfirm={this.isConfirm2}\n    onIconClose={this.isIconClose2}\n>\n    <div className='components-show-example-title'>popLayer \u5f39\u51fa\u6848\u4f8b3:</div>\n</LgPopLayer>\n<input type=\"button\" value=\"\u6253\u5f00\u5f39\u7a972\" className='comment_position' onClick={() => { this.showPopLayerFun2() }} />\n                                    "})})]}),(0,h.jsx)("div",{className:"components-show-example-title",children:"popLayer \u5f39\u51fa\u6848\u4f8b3:"}),(0,h.jsxs)("div",{className:"open_layer",children:[(0,h.jsx)("input",{type:"button",value:"\u6253\u5f00\u5f39\u7a973",className:"comment_position",onClick:this.showPopLayerFun3}),(0,h.jsx)("div",{className:"components-show-steps-code",children:(0,h.jsx)(l.A,{className:"",children:'\ninitDom3() {\n    return (\n        <div>\n            <input type="button" value="\u6253\u5f00\u5f39\u7a972" className=\'comment_position\' onClick={() => { this.showPopLayerFun2() }} />\n        </div>)\n}\n<LgPopLayer\n    isOpen={this.state.isOpen3}\n    onShowLayer={this.showPopLayerFun3}\n    title=\'\u6253\u5f00\u5f39\u7a973\'\n>\n    {this.initDom3()}\n</LgPopLayer>\n<input type="button" value="\u6253\u5f00\u5f39\u7a973" className=\'comment_position\' onClick={this.showPopLayerFun3} />                \n                                    '})})]}),(0,h.jsx)("div",{className:"components-show-example-title",children:"popLayer \u5f39\u51fa\u6848\u4f8b4:"}),(0,h.jsxs)("div",{className:"open_layer",children:[(0,h.jsx)("input",{type:"button",value:"\u6253\u5f00\u5f39\u7a974",className:"comment_position",onClick:this.showPopLayerFun4}),(0,h.jsx)("div",{className:"components-show-steps-code",children:(0,h.jsx)(l.A,{className:"",children:"\n<LgPopLayer\n    isOpen={this.state.isOpen4}\n    onShowLayer={this.showPopLayerFun4}\n    title='\u6253\u5f00\u5f39\u7a974'\n    customOfHeader={<>nihaoisdfh asd</>}\n    customOfBottom={<div onClick={this.closePop4} >\u70b9\u6211\u5173\u95ed\u5f39\u7a97\uff0c\u6211\u662f\u81ea\u5b9a\u4e49\u7684</div>}\n    isCoverLayerClickClose\n>\n    {this.initDom4()}\n</LgPopLayer>\n<input type=\"button\" value=\"\u6253\u5f00\u5f39\u7a974\" className='comment_position' onClick={this.showPopLayerFun4} />\n                                    "})})]})]})]})]}),(0,h.jsx)(y,{coverLayerClass:"weekly_publication",isShowTopClose:!1,isOpen:this.state.isOpen1,width:700,height:500,title:"\u6253\u5f00\u5f39\u7a971",isShowCoverLayer:!1,onClose:this.showPopLayerFun1,onShowLayer:this.showPopLayerFun1,children:this.initDom1()}),(0,h.jsx)(y,{isOpen:this.state.isOpen2,onShowLayer:this.showPopLayerFun2,title:"\u6253\u5f00\u5f39\u7a972",onClose:this.isClose2,onConfirm:this.isConfirm2,onIconClose:this.isIconClose2,children:this.initDom2()}),(0,h.jsx)(y,{isOpen:this.state.isOpen3,onShowLayer:this.showPopLayerFun3,title:"\u6253\u5f00\u5f39\u7a973",children:this.initDom3()}),(0,h.jsx)(y,{isOpen:this.state.isOpen4,onShowLayer:this.showPopLayerFun4,title:"\u6253\u5f00\u5f39\u7a974",customOfHeader:(0,h.jsx)(h.Fragment,{children:"nihaoisdfh asd"}),customOfBottom:(0,h.jsx)("div",{onClick:this.closePop4,children:"\u70b9\u6211\u5173\u95ed\u5f39\u7a97\uff0c\u6211\u662f\u81ea\u5b9a\u4e49\u7684"}),isCoverLayerClickClose:!0,children:this.initDom4()})]})}}]),n}(p.Component)},26291:function(e){function o(e){var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}o.keys=function(){return[]},o.resolve=o,o.id=26291,e.exports=o}}]);
//# sourceMappingURL=650.b12af4c7.chunk.js.map
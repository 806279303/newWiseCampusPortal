/*
* @Author       : super-J
* @Date         : 2021-12-29 08:41:58
 * @LastEditTime : 2022-02-22 21:21:34
 * @LastEditors  : super-J
* @Description  : 弹窗组件
*/
import React, {Component, ReactNode} from 'react'
import ReactDOM from 'react-dom';
import "./index.scss";
let popLayerCreateNumIndex = 0;//创建弹窗实例的次数
let popLayerZIndex = 1000;//弹出成是否拥有遮罩层
let _hasPopLayerOpen: number[] = [];//保存打多个弹窗的下标

/**
 * @summary 使用的弹出层传入的props
 */
export interface PopLayerProps {
    // popLayerBox
    isOpen: boolean;//是否打开弹窗 | 默认值：———— 
    width?: number;//弹窗的总宽度 | 默认值: 400
    height?: number;//弹窗的总高度 | 默认值: 300
    title?: string;//弹窗头部的标题 | 默认值: Lg弹出层-默认标题
    className?: string;//弹窗最外层的类名 | 默认值：————
    style?: React.CSSProperties;//弹窗最外层的样式类型 | 默认值：————  | 注： 不建议使用,在本组件初始化使用后，部分样式（zIndex）有可能会被覆盖掉导致不生效。推荐使用className去修改样式

    // coverLayer
    isShowCoverLayer?: boolean;//是否展示遮罩层 | 默认值：true
    coverLayerClass?: string;//遮罩层类名 | 默认值：————
    isCoverLayerClickClose?: boolean;//是否点击遮罩层关闭弹窗 | 默认值：false

    // top
    isShowTopClose?: boolean;//是否显示头部的关闭按钮 | 默认值:true

    // bottom
    isShowBottom?: boolean;//是否显示底部的 | 默认值:true
    confirmText?: string;//确认按钮需要显示的文本 | 默认值：确认
    confirmClass?: string;//确认按钮元素上的类名 | 默认值：————
    closeText?: string;//关闭按钮需要显示的文本 | 默认值：取消
    closeClass?: string;//关闭按钮元素上的类名 | 默认值：————

    // customHtml
    customOfHeader?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);//弹窗头部添加的自定义Dom | 默认值：————
    headerClassName?: string;//弹窗头部添加的自定义Dom容器的类名 | 默认值：————
    children?: ReactNode// 弹窗中部添加的自定义Dom | 默认值：————
    childClassName?: string;//自定义弹窗容器的类名 | 默认值：————
    customOfBottom?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);//弹窗低部添加的自定义Dom | 默认值：————
    bottomClassName?: string;//弹窗低部添加的自定义Dom的类名 | 默认值：————

    // function
    onConfirm?: (isOpen?: boolean) => void;//点击确认按钮时触发的函数 
    onClose?: (isOpen?: boolean) => void;//点击关闭按钮时触发的函数
    onIconClose?: (isOpen?: boolean) => void;//点击顶部的关闭小图标时触发的函数
    onShowLayer: (isOpen?: boolean) => void;//必传的弹窗开关函数打开和关闭都必执行的函数，可以在打开前和关闭后触发父组件逻辑的函数
}
export interface PopLayerState {
    isOpen: boolean;//弹窗是否打开
    popLayerMainClassName: string;//弹窗打开的动画
}
export class LgPopLayer extends Component<PopLayerProps, PopLayerState, { isOpen: boolean }> {
    constructor(props: PopLayerProps | Readonly<PopLayerProps>) {
        super(props);
        this.state = { isOpen: false, popLayerMainClassName: '' };
        this.initCoverLayer = this.initCoverLayer.bind(this);
        this.popLayerMouseDown = this.popLayerMouseDown.bind(this);
        this.popLayerMouseMove = this.popLayerMouseMove.bind(this);
        this.popLayerMouseUp = this.popLayerMouseUp.bind(this);
        this.closePopLayer = this.closePopLayer.bind(this);
        this.confirmPopLayer = this.confirmPopLayer.bind(this);
        this.coverLayerClose = this.coverLayerClose.bind(this);
    }
    private popLayerZIndex = 0;//弹出层默认层级数
    private popLayerCreateNumIndex = 0//弹窗实例创建的次数
    // 给props设置默认值
    static defaultProps = {
        isCoverLayerClickClose: false,//是否点击遮罩层关闭弹窗
        isShowCoverLayer: true,//是否展示遮罩层 | 默认值：true
        title: 'Lg弹出层-默认标题',//弹窗头部的标题 | 默认值:
        isShowTopClose: true,//是否显示头部的关闭按钮 | 默认值:false
        isShowBottom: true,//是否显示底部的 | 默认值:true
        confirmText: '确定',//确认按钮需要显示的文本
        closeText: '取消',//关闭按钮需要显示的文本
        zIndex: popLayerZIndex,//弹窗的层级
        width: 400,//弹窗的总宽度 | 默认值: 500
        height: 300,//弹窗的总高度 | 默认值: 400
    }

    /**
     * @description  : 关闭当前弹窗
     * @param         { type function }  fun 点击确认时需要触发的函数
     * @param         { type number }  type 0: 点击确认按钮 1: 点击关闭按钮或者取消 
     * @return        { type * } 
     */
    closePopLayer(type: number = 0, fun?: (isOpen?: boolean) => any) {
        document.documentElement.style.overflow = 'auto';
        this.setState({
            isOpen: false
        }, () => {
            this.props.onShowLayer && this.props.onShowLayer();
            this.initCoverLayer(0, this.popLayerCreateNumIndex);
            if (type == 0) { fun && fun(this.state.isOpen); return };
            this.props.onClose && this.props.onClose(this.state.isOpen);
        })
    }
    /**
     * @description  : 点击确认按钮时关闭当前弹窗`
     * @param         { type *}  
     * @return        { type *} 
     */
    confirmPopLayer() {
        this.props.onConfirm && this.props.onConfirm()
        // this.closePopLayer(0, this.props.onConfirm);
    }
    /**
     * @description  : 点击顶部小图标关闭弹窗
     * @param         { type * } 
     * @return        { type * } 
     */
    iconClose() {
        this.closePopLayer(0, this.props.onIconClose);
    }
    UNSAFE_componentWillReceiveProps(nextProps: PopLayerProps) {
        if (this.props.isOpen == nextProps.isOpen) return;
        let initCoverLayerType: number = nextProps.isOpen ? 1 : 0;// 0: 无弹窗 1:有弹窗
        this.setState({ isOpen: nextProps.isOpen }, () => {
            if (nextProps.isOpen) {
                document.documentElement.style.overflow = 'hidden';
            }
            let popLayerMainClassName = nextProps.isOpen ? ' lg_popLayer_container_show lg_popLayer_main_hasBottom ' : ' lg_popLayer_main_noHasBottom ';
            setTimeout(() => { this.setState({ popLayerMainClassName, }) }, 200);
            this.initCoverLayer(initCoverLayerType, this.popLayerCreateNumIndex, nextProps.isShowCoverLayer);
        })
    }
    componentWillUnmount() {
        this.closePopLayer()
    }
    /**
     * @description  : 数组去重
     * @param         { type number[]}  arr 初始化的去重前的数组
     * @return        { type number[]}  arr 初始化的去重后的数组
     */
    unique(arr: number[]): number[] {
        if (!Array.isArray(arr)) { return [] }
        let array = [];
        for (var i = 0; i < arr.length; i++) {
            if (array.indexOf(arr[i]) === -1) {
                array.push(arr[i])
            }
        }
        return array;
    }
    /**
     * @description  : 设置遮罩层的显示与隐藏
     * @param         { type number}  CoverLayerType 0: 无弹窗显示 1：有弹窗显示
     * @param         { type number}  popLayerCreateNumIndex
     * @param         { type boolean}  isShowCoverLayer
     * @return        { type *} 
     */
    initCoverLayer(CoverLayerType: number, popLayerCreateNumIndex: number, isShowCoverLayer: boolean = false) {
        _hasPopLayerOpen = this.unique(_hasPopLayerOpen)
        let coverLayerDom = document.querySelectorAll('.lg_popLayer_container_coverLayer');
        // 处理有弹窗关闭的情况
        if (!CoverLayerType && _hasPopLayerOpen.length) {
            _hasPopLayerOpen = this.unique(_hasPopLayerOpen)
            let index = _hasPopLayerOpen.indexOf(parseInt(popLayerCreateNumIndex as any))
            if (index != -1) {
                _hasPopLayerOpen.splice(index, 1)
            }
        }
        if (!CoverLayerType && _hasPopLayerOpen.length) {
            _hasPopLayerOpen = this.unique(_hasPopLayerOpen)
            let maxIndex: number = -1;
            _hasPopLayerOpen.forEach(o => {
                maxIndex = o > maxIndex ? o : maxIndex;
            })
            popLayerCreateNumIndex = maxIndex
            if (popLayerCreateNumIndex > -1) {
                isShowCoverLayer = this.props.isShowCoverLayer ? true : false
                CoverLayerType = 1
            }
        }
        if (coverLayerDom.length) {
            coverLayerDom.forEach((o: HTMLElement | any, i) => {
                if (CoverLayerType) {
                    let coverNumIndex = o.getAttribute('data-cover-index');
                    if (coverNumIndex == popLayerCreateNumIndex && isShowCoverLayer) {
                        setTimeout(() => {
                            o.style.opacity = '0.6'
                            o.style.filter = 'alpha(opacity=60)'
                            o.style.zIndex = 10000;
                            o.style.class = 'lg_popLayer_container_coverLayer lg_popLayer_container_coverLayer_show'
                            o.previousElementSibling.style.zIndex = 10000 + (this.popLayerCreateNumIndex + 1);
                            o.parentNode.style.zIndex = 10000;
                            _hasPopLayerOpen.push(parseInt(coverNumIndex))
                        }, 100);
                    } else {
                        o.style.opacity = '0'
                        o.style.class = 'lg_popLayer_container_coverLayer'
                        o.style.filter = 'alpha(opacity=0)'
                        o.style.zIndex = this.popLayerZIndex;;
                        o.previousElementSibling.style.zIndex = this.popLayerZIndex + (this.popLayerCreateNumIndex + 1);
                        o.parentNode.style.zIndex = this.popLayerZIndex;
                    }
                } else {
                    _hasPopLayerOpen.splice(popLayerCreateNumIndex, 1)
                }
            })
        }
    }
    popLayerMouseDown(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let parentNode = e.currentTarget.parentNode as ParentNode as HTMLElement
        let parentContainerNode = e.currentTarget.parentNode?.parentNode as ParentNode as HTMLElement;
        this.maxMoveWidth = parentContainerNode.offsetWidth - parentNode.offsetWidth
        this.maxMoveHeight = parentContainerNode.offsetHeight - parentNode.offsetHeight
        this.divLeftWidth = e.pageX - parentNode.offsetLeft;
        this.divTopHeight = e.pageY - parentNode.offsetTop;
        this.parentNode = parentNode
        this.isPopLayerMove = true;
    }
    isPopLayerMove: boolean = false;//是否开启移动
    divLeftWidth: number = 0;//鼠标距离容器左边的宽度
    divTopHeight: number = 0;//鼠标距离容器顶部的高度
    maxMoveWidth: number = 0;//容器移动的最大距离
    maxMoveHeight: number = 0;//容器移动的最大高度
    parentNode: ParentNode | HTMLElement | null = null;//弹窗的Dom
    /**
     * @description  : popLayer移动的时候改变popLayer的left和top
     * @param         { type React }  e
     * @param         { type * }  MouseEvent
     * @return        { type * } 
     */
    popLayerMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        if (this.isPopLayerMove) {
            let parentNode = this.parentNode as ParentNode as HTMLElement;
            let left = e.pageX - this.divLeftWidth;
            let top = e.pageY - this.divTopHeight;
            if (left <= 0) { left = 1; }
            if (left >= this.maxMoveWidth) { left = this.maxMoveWidth - 2 }
            if (top <= 0) { top = 0; }
            if (top >= this.maxMoveHeight) { top = this.maxMoveHeight - 1 }
            parentNode.style.left = left.toString() + 'px';
            parentNode.style.top = top.toString() + 'px';
        }
    }
    /**
     * @description  : 鼠标弹起时popLayer停止移动
     * @param         { type React }  e
     * @param         { type * }  MouseEvent
     * @return        { type * } 
     */
    popLayerMouseUp(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        e.preventDefault();
        this.isPopLayerMove = false
    }
    componentDidMount() {
        popLayerZIndex = popLayerZIndex + 2;
        this.popLayerZIndex = popLayerZIndex;
        this.popLayerCreateNumIndex = popLayerCreateNumIndex++;
        this.initPopLayerPosition();
        window.onresize = () => {
            this.initPopLayerPosition();
        }
        setTimeout(() => {
        }, 1000 * 2);
        document.body.addEventListener('mouseout', (evt: MouseEvent) => {
            if (!evt) evt = window.event as any
            let to = evt.relatedTarget || (evt as any).toElement
            if (!to || to.nodeName == "HTML") {
                this.isPopLayerMove = false
            }
        })
    }
    /**
     * @description  : 获取非行内样式
     * @param         { type any }  obj
     * @param         { type string }  name
     * @return        { type * } 
     */
    getStyle(obj: any, name: string) {
        if (obj.currentStyle) {
            return obj.currentStyle[name]; /*仅支持IE*/
        }
        else {
            return getComputedStyle(obj)[name as any]; /*w3c 标准*/
            //兼容IE和火狐  return window.getComputedStyle.getPropertyValue(name);
        }
    }
    private popLayerLeft = 0;//弹窗相对窗口左侧的位置
    private popLayerTop = 0;//弹窗相对窗口顶部的位置
    /**
     * @description  : 初始化弹窗的初始位置
     * @param         { type * } 
     * @return        { type * } 
     */
    initPopLayerPosition() {
        this.popLayerLeft = ((document.documentElement.clientWidth / 2) - (parseFloat(this.props.width as any) / 2));
        this.popLayerTop = ((document.documentElement.clientHeight / 2) - (parseFloat(this.props.height as any) / 2));
    }
    /**
     * @description  : 点击遮罩层进行关闭弹窗
     * @param         { type * }  
     * @return        { type * } 
     */
    coverLayerClose() { if (this.props.isCoverLayerClickClose) { this.closePopLayer() } }
    render() {
        const { props, state } = this;
        let popLayerStyle = Object.assign({ left: this.popLayerLeft, top: this.popLayerTop, width: props.width, height: state.isOpen ? props.height : 0, zIndex: this.popLayerZIndex + 1 }, this.props.style || {})
        /**
         * @description  : 使用react中的传送门
         * @param         { type * } ReactDOM.createPortal 使用的传送门来建立一个不同HTML的根节点的 
         * @return        { type * } 
         *  return ReactDOM.createPortal(
         *   <div></div>,
         *   document.getElementById('Lg_popLayer_root') as any
         *   )
         * 
         */
        return ReactDOM.createPortal(
            <div className='lg_popLayer_big_container ' onMouseUp={this.popLayerMouseUp} onMouseMove={this.popLayerMouseMove} style={{ zIndex: this.popLayerZIndex, display: state.isOpen ? 'block' : 'none' }}>
                {/* 弹窗的窗体 */}
                <div className={'lg_popLayer_container ' + (state.popLayerMainClassName || '') + ' ' + (props.className || '')} style={popLayerStyle} id={'lg_popLayer_container' + this.popLayerCreateNumIndex}>
                    <div className='lg_popLayer_top' onMouseDown={this.popLayerMouseDown} onMouseMove={this.popLayerMouseMove} onMouseUp={this.popLayerMouseUp}>
                        <div className='lg_popLayer_top_title' style={{ display: !this.props.customOfHeader ? 'block' : 'none' }}>{props.title}</div>
                        <div className='lg_popLayer_top_close' onClick={() => { this.iconClose() }} style={{ display: props.isShowTopClose ? (!this.props.customOfHeader ? 'block' : 'none') : 'none' }}></div>
                        <div className={'lg_popLayer_top_custom_header ' + props.headerClassName || ''} style={{ display: this.props.customOfHeader ? 'block' : 'none' }}>{props.customOfHeader}</div>
                    </div>
                    <div className={'lg_popLayer_main ' + (props.childClassName || '')}>{props.children}</div>
                    <div className='lg_popLayer_bottom ' style={{ display: props?.isShowBottom ? "flex" : "none" }}>
                        <div className='lg_popLayer_bottom_cho_box' style={{ display: !props.customOfBottom ? 'flex' : 'none' }}>
                            <div className={'lg_popLayer_bottom_confirm_box ' + (props.confirmClass || '')}><input onClick={() => { this.confirmPopLayer() }} className='lg_popLayer_bottom_confirm_input input_item' value={props.confirmText} type={'button'} /></div>
                            <div className={'lg_popLayer_bottom_close_box ' + (props.closeClass || '')}><input onClick={() => { this.closePopLayer(1) }} className='lg_popLayer_bottom_close_input input_item' value={props.closeText} type={'button'} /></div>
                        </div>
                        <div className={'lg_popLayer_bottom_cho_box_custom_bottom ' + (props.bottomClassName || '')} style={{ display: props.customOfBottom ? 'block' : 'none' }}>
                            {props.customOfBottom}
                        </div>
                    </div>
                </div>
                {/* 遮罩层 */}
                <div className={'lg_popLayer_container_coverLayer ' + props.coverLayerClass || ''} data-index={this.popLayerZIndex} data-cover-index={this.popLayerCreateNumIndex} style={{ zIndex: this.popLayerZIndex, }} onClick={this.coverLayerClose}></div>
            </div>,
            document.getElementById('Lg_popLayer_root') as any
        )
    }
}
// 创建弹窗的挂载点
let popLayerCreateIndex = 0;
; (() => {
    if (popLayerCreateIndex) return;
    let popLayer = document.getElementById('Lg_popLayer_root');
    if (popLayer) { document.removeChild(popLayer); }
    let popLayerDom = document.createElement('div');
    popLayerDom.style.display = 'none';
    popLayerDom.setAttribute('id', 'Lg_popLayer_root');
    document.body.appendChild(popLayerDom);
    ++popLayerCreateIndex;
    setTimeout(() => { let popLayer = document.getElementById('Lg_popLayer_root') as HTMLElement; popLayer.style.display = 'block'; }, 1000 * 1.5);
})();

/*
 * @Author       : super-J
 * @Date         : 2021-12-31 16:25:37
 * @LastEditTime : 2022-01-17 20:57:27
 * @LastEditors  : super-J
 * @Description  : Alert组件的封装
 */
import './index.scss';
import { Alert } from 'element-react';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { initAlertParams, initAlertParamsA, initContainerPosition, initLgAlertTypeAClass, initTipType } from './util';
// lgAlert使用的工具
let globalState: (state: any, callback?: () => void) => void;// 将tip的容器的setState转变到外部函数
let zIndexNumber = 19000;
let mapList = new Map();// 存储10个不同位置上的数据
let timeoutMap = new Map();// 存储销毁提示的定时器标识

export type TipType = "info" | "error" | "warning" | "success" | "loading" | "question" | "closeAll";// 默认的款式的提示类型
export type typeModel_A = 'success' | 'info' | 'warning' | 'error' | "question";// A款的提示类型
export type typeModel_E = 'success' | 'info' | 'warning' | "error";// B款的提示类型
export type tipModel = 'A' | 'E' | undefined;// lgAlert的提示模式
export type xOffsetType = "left" | "center" | "right" | undefined;// X轴上偏移的位置 0点在屏幕左上角
export type yOffsetType = "top" | "center" | "bottom" | undefined;// Y轴上偏移的位置 0点在屏幕左上角
export type showAlign = "top" | 'center' | 'bottom';// Y轴方向上的flex布局方式
export type showDirection = "left" | 'center' | 'right';// X轴方向上的flex布局方式
export type tipMouldType = 'A' | 'E' | undefined;// lgAlert的提示模式
export type tipSize = 'big' | 'small' | 'mini' | undefined;// A款lgAlert的大小
export interface LgAlertProps extends LgAlertDefaultProps, ElementAlert, LgAlertModelAProps {
    tipMouldType?: tipMouldType;// lgAlert的款式 | 默认值：undefined

    tipType?: TipType | typeModel_A;// 弹窗展示的类型 | 默认值: -- |/| 兼容款式：default \ A \ E 

    position?: LgAlertPropsPosition;// 设置弹出的位置 | 默认值: -- |/| 兼容款式：default \ A \ E 

    duration?: number;// 展示后消失的时间 | 0:长时间停留在屏幕上面不消失 | 默认值: -- |/| 兼容款式：default \ A \ E 
    positionIndex?: number// 执行show函数时返回每个提示实例的下标，用于关闭单个弹窗 | 默认值: -- |/| 兼容款式：default \ A \ E 

    content?: string;// 展示的内容 | 默认值: -- |/| 兼容款式：default \ A \ E 

    isShow?: boolean;// 是否展示弹框 | 默认值: -- |/| 兼容款式：default \ A \ E 

    isShowCloseBtn?: boolean;// 是否展示关闭按钮 | 默认值: -- |/| 兼容款式：default \ A \ E 
    isShowIcon?: boolean;// 是否显示小图标 | 默认值: -- |/| 兼容款式：default \ A \ E 
    customIcon?: React.ReactDOM | React.ReactElement;// 自定义的小图标
    customClose?: React.ReactDOM | React.ReactElement;// 自定义关闭按钮的HTML元素


    // 提示框上的容器
    containerClassName?: string;// 单个lgAlert的类名 | 默认值: -- |/| 兼容款式：default \ A \ E 
    containerStyle?: React.CSSProperties;// lgAlert的样式(10个窗口位置上的样式) | 默认值: -- |/| 兼容款式：default \ A \ E 

}
/**
 * @summary 默认款式
 */
export interface LgAlertDefaultProps {
    showIdNumber?: number;// 标示单个lgAlert的数字
    showIdName?: string;// 标示单个lgAlert的id类名
    closeTip?: (type: number, positionIndex: string) => void;// 关闭lgAlert | 注：不对外使用
}
/**
 * @summary A款样式 仅适用于A款
 */
export interface LgAlertModelAProps {
    confirmText?: string;// 确认按钮显示的文字
    closeText?: string;// 关闭按钮显示的文字
    reverse?: boolean;// 确认按钮与取消按钮是否反转
    tipSize?: tipSize;// 弹窗尺寸

    style?: React.CSSProperties;//

    onConfirm?: () => void;// 点击确认按钮
    onCancel?: (type: number, positionIndex: string) => void;// 点击关闭按钮
    iconCloseAlert?: () => void;// 右上角关闭按钮
}

/**
 * @summary E款样式 elementUI中需要传入的变量
 */
export interface ElementAlert {
    onClose?(): void// 关闭alert时触发的事件
    title?: string// 标题，必选参数
    description?: string// 	辅助性文字
    closable?: boolean// 是否可关闭
    closeText?: string// 关闭按钮自定义文本
    showIcon?: boolean// 是否显示图标 

    className?: string// 修改样式的类名 
    style?: React.CSSProperties// 修改样式的对象
}
export interface lgAlert {
    showIdNumber: number;// 
    show: (e?: LgAlertShowProps, showIdIndex?: string) => { index: string, options: LgAlertShowProps };// 返回一个数字用于关闭已经打开的弹窗
    close: (index: string) => any;// 关闭一个lgAlert
    closeAll: () => any;// 关闭所有的lgAlert
}
/**
 * @summary lgAlert上的位置信息以及修改的精度值等
 */
export interface LgAlertPropsPosition {
    xAxis?: xOffsetType | number | string;// lgAlert在X轴上的相对位置 "left" | "center" | "right" | undefined(默认值)
    yAxis?: yOffsetType | number | string;// lgAlert在y轴上的相对位置 "top" | "center" | "bottom" | undefined(默认值)
    xOffset?: number | string;// lgAlert在x轴上的偏移量
    yOffset?: number | string;// lgAlert在y轴上的偏移量
    showAlign?: showAlign;// lgAlert数据展示的起始方向 "top"(默认值) | 'bottom' 
    showDirection?: showDirection;// lgAlert数据展示的对齐方向 "top"(默认值) | 'center' 
}
// 使用的lgAlert时需要传的参数
export interface LgAlertShowProps extends LgAlertProps { }

export interface LgAlertCloseProps { }
export interface LgAlertContainerProps extends LgAlertProps { }
export interface LgAlertContainerState {
    alertMessageListPosition: LgAlertShowProps[][];// 10个位置上的lgAlert需要显示的文字信息
    alertPositionStylePosition: React.CSSProperties[];// 10个位置上的lgAlertStyle样式
    containerClassName: string[];// 10个位置上的lgAlerts类名
    containerStyle: React.CSSProperties[];// 10个位置上的lgAlertStyle样式
}

export interface LgAlertState { }
export const lgAlert: lgAlert = {
    showIdNumber: 0,//创建的次数
    /**
     * @description  : 创建或者修改一个lgAlert
     * @param         { type LgAlertShowProps }  e 传入创建的参数或者需要修改的参数
     * @param         { type string }  showIdIndex 需要修改属性指定值的下标
     * @return        { type * } 
     */
    show: (e?: LgAlertShowProps, showIdIndex?: string) => {
        let alertPositionStylePosition: React.CSSProperties[] = mapList.get('alertPositionStylePosition') || mapList.set('alertPositionStylePosition', [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]).get('alertPositionStylePosition');
        let alertMessageListPosition: LgAlertShowProps[][] = mapList.get('alertMessageListPosition') || mapList.set('alertMessageListPosition', [[], [], [], [], [], [], [], [], [], []]).get('alertMessageListPosition');
        let containerClassName: string[] = mapList.get('containerClassName') || mapList.set('containerClassName', ['', '', '', '', '', '', '', '', '', '']).get('containerClassName');
        let containerStyle: React.CSSProperties[] = mapList.get('containerStyle') || mapList.set('containerStyle', [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]).get('containerStyle');
        let closeTimeoutMap: NodeJS.Timeout[] = timeoutMap.get('closeTimeoutMap') || timeoutMap.set('closeTimeoutMap', []).get('closeTimeoutMap');
        let positionIndex: number = 0;// 弹窗的位置
        let showIdNumber: number = 0;// 弹窗的位置上的第几条数据
        let tipItemOption: LgAlertShowProps = e as LgAlertShowProps;
        // 设置对象的默认值
        let initOptions: LgAlertShowProps = { tipType: "info", isShow: true, duration: 3000, isShowIcon: true, content: 'lgAlert~', tipMouldType: undefined, position: { xAxis: '50%', yAxis: 32, showDirection: 'center', xOffset: '-50%' }, tipSize: 'small', containerClassName: '', description: '' };
        tipItemOption = Object.assign(initOptions, tipItemOption);
        let returnOptionsIndex: string = (showIdNumber + '-' + positionIndex).toString();
        // 关闭所有的
        if (e?.tipType == 'closeAll') {
            lgAlert.closeAll();
            closeTimeoutMap.forEach((o, i) => { clearTimeout(o); })
            mapList.set('closeTimeoutMap', [])
            alertMessageListPosition = [[], [], [], [], [], [], [], [], [], []]
            globalState({ alertMessageListPosition })
            return { index: null as any, options: null as any };
        }

        if (showIdIndex) {
            // 去修改指定下标上lgAlert的属性值
            clearTimeout(timeoutMap.get(showIdIndex));
            let positionIndexClose: number = parseInt(showIdIndex.split('-')[1]);// 关闭弹窗的位置
            let showIdNumberClose: number = parseInt(showIdIndex.split('-')[0]);// 关闭弹窗的位置上的第几条数据
            let replaceIndex: number | null = null;
            if (alertMessageListPosition[positionIndexClose] && alertMessageListPosition[positionIndexClose].length) {
                alertMessageListPosition[positionIndexClose].forEach((o, i) => {
                    if (o.showIdNumber == showIdNumberClose) { tipItemOption = Object.assign(initOptions, tipItemOption); o = Object.assign(o, tipItemOption); tipItemOption = o; replaceIndex = i; }
                })
            };
            globalState({ alertMessageListPosition }, () => {
                if (tipItemOption?.duration == 0) return;
                let timeOutIndex = setTimeout(() => {
                    let spliceIndexClose = null;
                    alertMessageListPosition[positionIndexClose] = alertMessageListPosition[positionIndexClose] || []
                    if (alertMessageListPosition[positionIndexClose].length) {
                        alertMessageListPosition[positionIndexClose].forEach((o, i) => {
                            let item: LgAlertShowProps = o; if (item.showIdNumber == showIdNumberClose && item.duration != 0) { spliceIndexClose = i; }
                        })
                    }
                    if (spliceIndexClose == null) { return }
                    else if (alertMessageListPosition[positionIndexClose]) {
                        alertMessageListPosition[positionIndexClose]?.splice(spliceIndexClose, 1)
                    };
                    globalState({ alertMessageListPosition }, () => {
                        mapList.set('alertMessagesListPosition', alertMessageListPosition)
                    })

                }, tipItemOption.duration);
                timeoutMap.set('afterReplace' + returnOptionsIndex, timeOutIndex)
            });
        } else {
            // 创建一个lgAlert
            tipItemOption.showIdName = 'lg_alert_number';
            showIdNumber = parseInt((++lgAlert.showIdNumber).toString());
            tipItemOption.showIdNumber = showIdNumber;
            let alertPositionOptions = initContainerPosition(tipItemOption.position, ++zIndexNumber);
            positionIndex = alertPositionOptions.positionType;
            tipItemOption.positionIndex = positionIndex
            if (tipItemOption.isShow) {
                (alertMessageListPosition[positionIndex] as LgAlertShowProps[]).push(tipItemOption);
                alertMessageListPosition = alertMessageListPosition as LgAlertShowProps[][];
                alertPositionStylePosition[positionIndex] = alertPositionOptions.style;
            }
            if (initTipType(tipItemOption.tipType, tipItemOption.tipMouldType) == 4) {
                tipItemOption.duration = 0;
            }
            let positionIndexPosition: number = parseInt(positionIndex as any)
            containerClassName[positionIndexPosition] = tipItemOption.containerClassName as string;
            containerStyle[positionIndexPosition] = tipItemOption.containerStyle as React.CSSProperties;
            returnOptionsIndex = showIdNumber + '-' + alertPositionOptions.positionType
            globalState({ alertMessageListPosition, alertPositionStylePosition, containerClassName, containerStyle }, () => {
                if (tipItemOption?.duration == 0) return;
                let timeoutId = setTimeout(() => {
                    timeoutMap.delete(returnOptionsIndex)
                    let spliceIndex = null;
                    if (alertMessageListPosition[positionIndex].length) {
                        alertMessageListPosition[positionIndex].forEach((o, i) => {
                            let item: LgAlertShowProps = o; if (item.showIdNumber == showIdNumber && item.duration != 0) { spliceIndex = i }
                        })
                    }
                    if (spliceIndex == null) return;
                    alertMessageListPosition[positionIndex].splice(spliceIndex, 1);
                    console.log(alertMessageListPosition)
                    globalState({ alertMessageListPosition }, () => {
                        mapList.set('alertMessageListPosition', alertMessageListPosition);
                    })
                }, tipItemOption?.duration);
                timeoutMap.set(returnOptionsIndex, timeoutId);
                closeTimeoutMap.push(timeoutId);
            })
        };

        if (showIdIndex) { returnOptionsIndex = showIdIndex };
        let option: { index: string, options: LgAlertShowProps } = { index: returnOptionsIndex, options: tipItemOption };
        return option;
    },
    /**
     * @description  : 关闭下标指定的的lgAlert
     * @param         {string} showIdIndex 指定lgAlert的下标
     * @return        {*}
     */
    close: (showIdIndex: string) => {
        let positionIndexClose: number = parseInt(showIdIndex.split('-')[1]);// 关闭弹窗的位置
        let showIdNumberClose: number = parseInt(showIdIndex.split('-')[0]);// 关闭弹窗的位置上的第几条数据
        let alertMessageListPosition: LgAlertShowProps[][] = mapList.get('alertMessageListPosition') || mapList.set('alertMessageListPosition', [[], [], [], [], [], [], [], [], [], []]).get('alertMessageListPosition');
        let replaceIndex: number | null = null;
        if (alertMessageListPosition[positionIndexClose] && alertMessageListPosition[positionIndexClose].length) {
            alertMessageListPosition[positionIndexClose].forEach((o, i) => { if (o.showIdNumber == showIdNumberClose) { replaceIndex = i; } })
        };
        if (replaceIndex != null) {
            alertMessageListPosition[positionIndexClose].splice(replaceIndex, 1)
        };
        globalState({ alertMessageListPosition })
    },
    /**
     * @description  : 关闭所有的lgAlert
     * @param         { type * } 
     * @return        { type * } 
     */
    closeAll: () => {
        let alertMessageListPosition: LgAlertShowProps[][] = [[], [], [], [], [], [], [], [], []];
        let alertPositionStylePosition: React.CSSProperties[] = [];
        let containerClassName: string[] = [];
        let containerStyle: React.CSSProperties[] = []
        timeoutMap.set('closeTimeoutMap', [])
        globalState({ alertMessageListPosition, alertPositionStylePosition, containerClassName, containerStyle }, () => {
            mapList.delete('alertMessageListPosition')
            mapList.delete('alertPositionStylePosition')
        })
    },
}
/**
 * @summary 所有弹窗的的容器
 */
export class LgAlertContainer extends Component<LgAlertContainerProps, LgAlertContainerState> {

    constructor(props: LgAlertContainerProps | Readonly<LgAlertContainerProps>) {
        super(props);
        this.state = { alertMessageListPosition: [], alertPositionStylePosition: [], containerClassName: [], containerStyle: [], }
        globalState = this.setState.bind(this)
        this.initAlertElement = this.initAlertElement.bind(this)
        this.closeTip = this.closeTip.bind(this)
    }
    /**
     * @description lgAlert中的显示的层级
     * @param {*} positionZIndex
     */
    positionZIndex: number = 19000;
    /**
     * @description: 判断使用何种lgAlert显示到网页 \ default | A | E
     * @param {number} type
     * @param {LgAlertShowProps} alertMessageList
     * @return {*}
     */
    initAlertElement(alertMessageList: LgAlertShowProps[]) {
        return alertMessageList.map((o, i) => {
            o.closeTip = this.closeTip
            if (o.tipMouldType == 'E') {
                let alertParams = initAlertParams(o);
                return (<div className={'elementUi_tip_box ' + alertParams.className} style={alertParams.style} key={i}><Alert {...alertParams} title={alertParams.title as string} /></div>)
            } else if (o.tipMouldType == 'A') {
                let alertParams = initAlertParamsA(o);
                return <LgAlertMouldA {...alertParams} key={i} />
            } else {
                return (<LgAlertMouldDefault {...o} key={i} />)
            }
        })
    }
    /**
     * @description: 关闭显示在网页上的lgAlert
     * @param {number} type \ 1 关闭单个lgAlert 0 关闭所有的lgAlert 
     * @param {string} tipIndex \ 关闭lgAlert中的标识的下标
     * @return {*}
     */
    closeTip(type: number = 1, tipIndex?: string) {
        let alertMessageListPosition: LgAlertShowProps[][] = mapList.get('alertMessageListPosition') || mapList.set('alertMessageListPosition', [[], [], [], [], [], [], [], [], [], []]).get('alertMessageListPosition');
        if (type == 1 && !tipIndex) { return }
        if (type) {
            let positionIndexClose: number = parseInt((tipIndex as string).split('-')[1]);// 关闭弹窗的位置
            let showIdNumberClose: number = parseInt((tipIndex as string).split('-')[0]);// 关闭弹窗的位置上的第几条数据
            let replaceIndex: number | null = null;
            if (alertMessageListPosition[positionIndexClose] && alertMessageListPosition[positionIndexClose].length) {
                alertMessageListPosition[positionIndexClose].forEach((o, i) => {
                    if (o.showIdNumber == showIdNumberClose) {
                        replaceIndex = i
                    }
                })
            };
            if (replaceIndex != null) {
                alertMessageListPosition[positionIndexClose].splice(replaceIndex, 1)
            }
            this.setState({ alertMessageListPosition })
        } else {
            let alertMessageListPosition: LgAlertShowProps[][] = [[], [], [], [], [], [], [], [], []];
            let alertPositionStylePosition: React.CSSProperties[] = []
            this.setState({ alertMessageListPosition, alertPositionStylePosition }, () => {
                mapList.delete('alertMessageListPosition')
                mapList.delete('alertPositionStylePosition')
            })
        }
    }
    render() {
        const { state, props } = this;
        return (
            <>
                {this.state.alertMessageListPosition.map((o, i) => {
                    // lgAlerts的style和props
                    let stylePosition: React.CSSProperties = Object.assign(this.state.alertPositionStylePosition[i] || {}, this.state.containerStyle[i] || {})
                    return (
                        <div style={{ display: o.length ? 'block' : 'none' }} data-index={i} key={i} className={'lg_alert_container_box_outside'}>
                            <div id='' className={'lg_alert_container_box lg_alert_container_box_right_bottom ' + ((state.containerClassName as string[])[i] as string)} style={stylePosition}>
                                {this.initAlertElement(o)}
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

/**
 * @msg 默认使用的提示
 */
export class LgAlertMouldDefault extends Component<LgAlertProps, LgAlertState> {
    constructor(props: LgAlertProps | Readonly<LgAlertProps>) {
        super(props);
        this.state = {};
        this.closeTip = this.closeTip.bind(this);
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps == this.props) return;
    }
    /**
     * @description  : 
     * @param         { type React}  e
     * @param         { type *}  MouseEvent
     * @return        { type *} 
     */
    closeTip(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        let parentNode = e.currentTarget.parentNode as HTMLElement;
        let index = parseInt(parentNode.getAttribute('data-index') as string);
        let positionIndex = parseInt(parentNode.getAttribute('data-position-index') as string);
        let spliceIndex = (index + '-' + positionIndex)
        this.props.closeTip && this.props.closeTip(1, spliceIndex);
    }
    render() {
        const { state, props } = this;
        let hasHasDescriptionClassName = props.description ? ' lg_alert_body_close_icon lg_alert_body_close_box lg_alert_body_close_box_description ' : ' lg_alert_body_close_icon lg_alert_body_close_box  '
        let iconFontSizeClassName = props.description ? ' tip_icon_type_item_has_description ' : '  '

        return (
            <div className={'lg_alert_body ' + props.className} style={props.style} id={this.props.showIdName as string + this.props.showIdNumber} data-index={props.showIdNumber} data-position-index={props.positionIndex} >
                <div className='lg_alert_body_box'>
                    <div className={'lg_alert_body_icon tip_icon_type_item tip_icon_type' + initTipType(props?.tipType, props?.tipMouldType) + iconFontSizeClassName} style={{ display: props.isShowIcon ? 'block' : 'none' }}><div className='lg_alert_body_icon_small'></div>{props.customIcon}</div>
                    <div className='lg_alert_body_text_container'>
                        <div className={props.description ? 'lg_alert_body_title' : 'lg_alert_body_title lg_alert_body_title_default'}>{props?.content}</div>
                        <div className={props.description ? 'lg_alert_body_description lg_alert_body_description_show' : 'lg_alert_body_description'} style={{ display: props.description ? 'flex' : "none" }}>
                            {props.description}
                        </div>
                    </div>
                </div>
                <div className='lg_alert_body_close_container_box ' style={{ display: props.isShowCloseBtn ? 'flex' : 'none' }} onClick={(e) => { this.closeTip(e) }}>
                    {props.customClose}
                    <div className={hasHasDescriptionClassName} style={{ display: props.customClose ? 'none' : 'block' }}></div>
                </div>
            </div >
        )
    }
}

// A款弹窗样式的提示
export class LgAlertMouldA extends Component<LgAlertProps, LgAlertState> {
    constructor(props: LgAlertProps | Readonly<LgAlertProps>) {
        super(props);
        this.state = {};
        this.closeTip = this.closeTip.bind(this);
        this.confirmTip = this.confirmTip.bind(this);
    }
    componentWillReceiveProps(nextProps: any) { if (nextProps == this.props) return; }
    // 点击关闭按钮，icon关闭按钮
    closeTip(e: React.MouseEvent<HTMLDivElement, MouseEvent>, type: number = 1, isRunFun: boolean = true) {
        let parentNode = e.currentTarget.parentNode as HTMLElement;
        if (type == 2) { parentNode = (e.currentTarget.parentNode as HTMLElement).parentNode as HTMLElement; }
        if (type == 1) { this.props.iconCloseAlert && this.props.iconCloseAlert(); }
        let index = parseInt(parentNode.getAttribute('data-index') as string);
        let positionIndex = parseInt(parentNode.getAttribute('data-position-index') as string);
        let spliceIndex = (index + '-' + positionIndex)
        if (isRunFun) { this.props.onCancel && this.props.onCancel(1, spliceIndex); this.props.closeTip && this.props.closeTip(1, spliceIndex) }
    }
    // 点击确认按钮
    confirmTip(e: React.MouseEvent<HTMLDivElement, MouseEvent>) { this.props.onConfirm && this.props.onConfirm(); this.closeTip(e, 2); }
    render() {
        const { state, props } = this;
        let rowRevers = props.reverse ? 'lg_alert_body_selection lg_alert_body_selection_reverse' : "lg_alert_body_selection";
        let { miniClass, layerContainerClass, showDom } = initLgAlertTypeAClass(props.tipSize as string);
        return (
            <div className={'lg_alert_body lg_alert_body_A ' + layerContainerClass + props.className} style={props.style} id={this.props.showIdName as string + this.props.showIdNumber} data-index={props.showIdNumber} data-position-index={props.positionIndex} >
                <div className={'lg_alert_body_box ' + miniClass}>
                    <div className={'lg_alert_body_icon tip_icon_type_item_none tip_icon_type_A' + initTipType(props?.tipType, props?.tipMouldType)} style={{ display: props.isShowIcon ? 'block' : 'none' }}><div className='lg_alert_body_icon_small'></div>{props.customIcon}</div>
                    <div className='lg_alert_body_title'>{props?.content}</div>
                    <div className={'lg_alert_body_description'} style={{ display: props?.description && showDom[0] ? 'block' : 'none' }}>{props?.description}</div>
                </div>
                <div className={rowRevers} style={{ display: showDom[1] ? 'flex' : 'none' }}>
                    <div className='lg_alert_body_selection_box lg_alert_body_selection_confirmText' onClick={(e) => { this.confirmTip(e) }}>{props.confirmText || '确定'}</div>
                    <div className='lg_alert_body_selection_box lg_alert_body_selection_closeText' onClick={(e) => { this.closeTip(e, 2) }}>{props.closeText || '再想想'}</div>
                </div>
                <div className='lg_alert_body_close_container_box' style={{ display: props.isShowCloseBtn && showDom[0] || props.isShowCloseBtn && showDom[1] ? 'block' : 'none' }} onClick={(e) => { this.closeTip(e) }}>
                    {props.customClose}
                    <div className='lg_alert_body_close_icon lg_alert_body_close_box' style={{ display: props.customClose ? 'none' : 'block' }}></div>
                </div>
            </div >
        )
    };
};

// =========================================================================================================================================
// =========================================================================================================================================
// ===========================================================生成lgAlert的Dom节点===========================================================
// =========================================================================================================================================
// =========================================================================================================================================


let instance: LgAlertContainer | null;
// 创建弹窗的根节点
let popLayerCreateIndex = 0;
/**
 * @description  : 创建传送门的根节点
 * @param         { type *} popLayerCreateIndex 创建的根节点的次数
 * @return        { type *} 
 */
; (() => { if (popLayerCreateIndex) return; let alert = document.getElementById('Lg_alert_root'); let root = document.getElementById('root'); if (alert) { document.removeChild(alert) }; let popLayerDom = document.createElement('div'); popLayerDom.setAttribute('id', 'Lg_alert_root'); popLayerDom.style.position = 'absolute'; root?.appendChild(popLayerDom); ++popLayerCreateIndex; ReactDOM.render(<LgAlertContainer ref={e => instance = e} />, document.getElementById('Lg_alert_root')) })();


let LgPopLayerCreatCount: number = 0;
class LgPopLayer {
    private lgAlertInstance!: LgAlertContainer | null;
    private popLayerCreateIndex: number
    constructor(_options?: any) {
        this.popLayerCreateIndex = popLayerCreateIndex
        this.initRootEle()
    }
    initRootEle() {
        this.popLayerCreateIndex = ++LgPopLayerCreatCount;
        let alert = document.getElementById('Lg_alert_root' + this.popLayerCreateIndex);
        let root = document.getElementById('root');
        if (alert) { document.removeChild(alert) };
        let popLayerDom = document.createElement('div');
        popLayerDom.setAttribute('id', 'Lg_alert_root' + this.popLayerCreateIndex);
        popLayerDom.style.position = 'absolute';
        root?.appendChild(popLayerDom);
        ReactDOM.render(<LgAlertContainer ref={e => this.lgAlertInstance = e} />, document.getElementById('Lg_alert_root' + this.popLayerCreateIndex));
    }

    show(e?: LgAlertShowProps, showIdIndex?: string) {
        let alertPositionStylePosition: React.CSSProperties[] = mapList.get('alertPositionStylePosition') || mapList.set('alertPositionStylePosition', [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]).get('alertPositionStylePosition');
        let alertMessageListPosition: LgAlertShowProps[][] = mapList.get('alertMessageListPosition') || mapList.set('alertMessageListPosition', [[], [], [], [], [], [], [], [], [], []]).get('alertMessageListPosition');
        let containerClassName: string[] = mapList.get('containerClassName') || mapList.set('containerClassName', ['', '', '', '', '', '', '', '', '', '']).get('containerClassName');
        let containerStyle: React.CSSProperties[] = mapList.get('containerStyle') || mapList.set('containerStyle', [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]).get('containerStyle');
        let closeTimeoutMap: NodeJS.Timeout[] = timeoutMap.get('closeTimeoutMap') || timeoutMap.set('closeTimeoutMap', []).get('closeTimeoutMap');
        let positionIndex: number = 0;// 弹窗的位置
        let showIdNumber: number = 0;// 弹窗的位置上的第几条数据
        let tipItemOption: LgAlertShowProps = e as LgAlertShowProps;
        // 设置对象的默认值
        let initOptions: LgAlertShowProps = { tipType: "info", isShow: true, duration: 3000, isShowIcon: true, content: 'lgAlert~', tipMouldType: undefined, position: { xAxis: '50%', yAxis: 32, showDirection: 'center', xOffset: '-50%' }, tipSize: 'small', containerClassName: '', description: '' };
        tipItemOption = Object.assign(initOptions, tipItemOption);
        let returnOptionsIndex: string = (showIdNumber + '-' + positionIndex).toString();
        // 关闭所有的
        if (e?.tipType == 'closeAll') {
            lgAlert.closeAll();
            closeTimeoutMap.forEach((o, i) => { clearTimeout(o); })
            mapList.set('closeTimeoutMap', [])
            alertMessageListPosition = [[], [], [], [], [], [], [], [], [], []]
            this.lgAlertInstance?.setState({ alertMessageListPosition })
            return { index: null as any, options: null as any };
        }

        if (showIdIndex) {
            // 去修改指定下标上lgAlert的属性值
            clearTimeout(timeoutMap.get(showIdIndex));
            let positionIndexClose: number = parseInt(showIdIndex.split('-')[1]);// 关闭弹窗的位置
            let showIdNumberClose: number = parseInt(showIdIndex.split('-')[0]);// 关闭弹窗的位置上的第几条数据
            let replaceIndex: number | null = null;
            if (alertMessageListPosition[positionIndexClose] && alertMessageListPosition[positionIndexClose].length) {
                alertMessageListPosition[positionIndexClose].forEach((o, i) => {
                    if (o.showIdNumber == showIdNumberClose) { tipItemOption = Object.assign(initOptions, tipItemOption); o = Object.assign(o, tipItemOption); tipItemOption = o; replaceIndex = i; }
                })
            };
            this.lgAlertInstance?.setState({ alertMessageListPosition }, () => {
                if (tipItemOption?.duration == 0) return;
                let timeOutIndex = setTimeout(() => {
                    let spliceIndexClose = null;
                    alertMessageListPosition[positionIndexClose] = alertMessageListPosition[positionIndexClose] || []
                    if (alertMessageListPosition[positionIndexClose].length) {
                        alertMessageListPosition[positionIndexClose].forEach((o, i) => {
                            let item: LgAlertShowProps = o; if (item.showIdNumber == showIdNumberClose && item.duration != 0) { spliceIndexClose = i; }
                        })
                    }
                    if (spliceIndexClose == null) { return }
                    else if (alertMessageListPosition[positionIndexClose]) {
                        alertMessageListPosition[positionIndexClose]?.splice(spliceIndexClose, 1)
                    };
                    this.lgAlertInstance?.setState({ alertMessageListPosition }, () => {
                        mapList.set('alertMessagesListPosition', alertMessageListPosition)
                    })

                }, tipItemOption.duration);
                timeoutMap.set('afterReplace' + returnOptionsIndex, timeOutIndex)
            });
        } else {
            // 创建一个lgAlert
            tipItemOption.showIdName = 'lg_alert_number';
            showIdNumber = parseInt((++lgAlert.showIdNumber).toString());
            tipItemOption.showIdNumber = showIdNumber;
            let alertPositionOptions = initContainerPosition(tipItemOption.position, ++zIndexNumber);
            positionIndex = alertPositionOptions.positionType;
            tipItemOption.positionIndex = positionIndex
            if (tipItemOption.isShow) {
                (alertMessageListPosition[positionIndex] as LgAlertShowProps[]).push(tipItemOption);
                alertMessageListPosition = alertMessageListPosition as LgAlertShowProps[][];
                alertPositionStylePosition[positionIndex] = alertPositionOptions.style;
            }
            if (initTipType(tipItemOption.tipType, tipItemOption.tipMouldType) == 4) {
                tipItemOption.duration = 0;
            }
            let positionIndexPosition: number = parseInt(positionIndex as any)
            containerClassName[positionIndexPosition] = tipItemOption.containerClassName as string;
            containerStyle[positionIndexPosition] = tipItemOption.containerStyle as React.CSSProperties;
            returnOptionsIndex = showIdNumber + '-' + alertPositionOptions.positionType
            this.lgAlertInstance?.setState({ alertMessageListPosition, alertPositionStylePosition, containerClassName, containerStyle }, () => {
                if (tipItemOption?.duration == 0) return;
                let timeoutId = setTimeout(() => {
                    timeoutMap.delete(returnOptionsIndex)
                    let spliceIndex = null;
                    if (alertMessageListPosition[positionIndex].length) {
                        alertMessageListPosition[positionIndex].forEach((o, i) => {
                            let item: LgAlertShowProps = o; if (item.showIdNumber == showIdNumber && item.duration != 0) { spliceIndex = i }
                        })
                    }
                    if (spliceIndex == null) return;
                    alertMessageListPosition[positionIndex].splice(spliceIndex, 1);
                    console.log(alertMessageListPosition)
                    this.lgAlertInstance?.setState({ alertMessageListPosition }, () => {
                        mapList.set('alertMessageListPosition', alertMessageListPosition);
                    })
                }, tipItemOption?.duration);
                timeoutMap.set(returnOptionsIndex, timeoutId);
                closeTimeoutMap.push(timeoutId);
            })
        };

        if (showIdIndex) { returnOptionsIndex = showIdIndex };
        let option: { index: string, options: LgAlertShowProps } = { index: returnOptionsIndex, options: tipItemOption };
        return option;
    }
}
// let superJ = new LgPopLayer();
// let superJ1 = new LgPopLayer();
// let superJ2 = new LgPopLayer();
// console.log(superJ.show({
//     duration: 0
// }))
// console.log(superJ1.show({
//     duration: 0, content: 'superJ1~~~', position: { xAxis: 'center', yAxis: 'center', }
// }))

import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Alert } from 'element-react'
import "./index.scss";
//提示框使用的工具
import { initAlertParams, initAlertParamsA, initContainerPosition, initLgAlertTypeAClass, initTipType } from './util';

let globalState: (state: any, callback?: () => void) => void;//将tip的容器的setState转变到外部函数
let zIndexNumber = 19000;
let mapList = new Map();//
let timeoutMap = new Map();//

export type TipType = "info" | "error" | "warning" | "success" | "loading" | "question" | "closeAll";
export type typeModel_A = 'success' | 'info' | 'warning' | 'error' | "question";
export type typeModel_E = 'success' | 'info' | 'warning' | "error";
export type tipModel = 'A' | 'E' | undefined;//提示框的款式
export type xOffsetType = "left" | "center" | "right" | undefined;
export type yOffsetType = "top" | "center" | "bottom" | undefined;
export type showAlign = "top" | 'center' | 'bottom';
export type showDirection = "left" | 'center' | 'right';
export type tipMouldType = 'A' | 'E' | undefined;
export type tipSize = 'big' | 'small' | 'mini' | undefined;


export interface LgAlertProps extends LgAlertParams, ElementAlert, LgAlertTypeA {
    content?: string;//展示的内容 || 兼容款式：default | A | E 
    isShow?: boolean;//是否展示弹框 
    tipType?: TipType | typeModel_A;//弹窗展示的类型 || 兼容款式：default | A | E 
    isShowCloseBtn?: boolean;//是否展示关闭按钮 || 兼容款式：default | A | E 
    isShowIcon?: boolean;//是否显示小图标 
    duration?: number;//展示的时间 | 0:未关闭 || 兼容款式：default | A | E 
    position?: LgAlertPropsPosition;//设置弹出的位置 
    containerClassName?: string;//单个提示框的类名
    containerStyle?: React.CSSProperties;//
    positionIndex?: number//
    customIcon?: React.ReactDOM | React.ReactElement;//自定义的小图标
    customClose?: React.ReactDOM | React.ReactElement;//自定义关闭的Dom
    closeText?: string;//自定义关闭的文本
    tipMouldType?: tipMouldType;//提示框的款式
}
export interface lgAlert {
    showIdNumber: number;//
    showIdName: string;//
    show: (e?: LgAlertShowProps, showIdIndex?: string) => { index: string, options: LgAlertShowProps };//返回一个数字用于关闭已经打开的弹窗
    close: (e: string) => any;//关闭一个提示框
    closeAll: () => any;//关闭所有的提示框
}

export interface LgAlertParams {
    showIdNumber?: number;//标示单个提示框的数字
    showIdName?: string;//标示单个提示框的id类名
    closeTip?: (type: number, positionIndex: string) => void;//关闭提示框
}
export interface LgAlertPropsPosition {
    xAxis?: xOffsetType | number | string;//提示框在X轴上的相对位置 "left" | "center" | "right" | undefined(默认值)
    yAxis?: yOffsetType | number | string;//提示框在y轴上的相对位置 "top" | "center" | "bottom" | undefined(默认值)
    xOffset?: number | string;//提示框在x轴上的偏移量
    yOffset?: number | string;//提示框在y轴上的偏移量
    showAlign?: showAlign;//提示框数据展示的起始方向 "top"(默认值) | 'bottom' 
    showDirection?: showDirection;//提示框数据展示的对齐方向 "top"(默认值) | 'center' 
}
export interface LgAlertTypeA {
    confirmText?: string;//确认按钮显示的文字
    closeText?: string;//关闭按钮显示的文字
    reverse?: boolean;//按钮是否翻转
    tipSize?: tipSize;//弹窗尺寸 仅适用于A款


    confirm?: () => void;//点击确认按钮
    close?: () => void;//点击关闭按钮
    iconCloseTip?: () => void;//右上角关闭按钮

}
// 使用的提示框时需要传的参数
export interface LgAlertShowProps extends LgAlertProps { }

export interface LgAlertCloseProps { }
export interface LgAlertContainerProps extends LgAlertProps {
    content?: string
}
export interface LgAlertContainerState {
    alertMessageListPosition: LgAlertShowProps[][];
    alertPositionStylePosition: React.CSSProperties[];
    containerClassName: string[]
    containerStyle: React.CSSProperties[];
}
// elementUI中需要传入的变量
export interface ElementAlert {
    onClose?(): void
    title?: string
    description?: string
    closable?: boolean
    closeText?: string
    showIcon?: boolean
    className?: string
    style?: React.CSSProperties
}
export interface LgAlertState {
}

export const lgAlert: lgAlert = {
    showIdNumber: 0,
    showIdName: 'lg_alert_number',
    show: (e?: LgAlertShowProps, showIdIndex?: string) => {
        // 设置对象的默认值
        let alertPositionStylePosition: React.CSSProperties[] = mapList.get('alertPositionStylePosition') || mapList.set('alertPositionStylePosition', [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]).get('alertPositionStylePosition');
        let alertMessageListPosition: LgAlertShowProps[][] = mapList.get('alertMessageListPosition') || mapList.set('alertMessageListPosition', [[], [], [], [], [], [], [], [], [], []]).get('alertMessageListPosition');
        let containerClassName: string[] = mapList.get('containerClassName') || mapList.set('containerClassName', ['', '', '', '', '', '', '', '', '', '']).get('containerClassName');
        let containerStyle: React.CSSProperties[] = mapList.get('containerStyle') || mapList.set('containerStyle', [{}, {}, {}, {}, {}, {}, {}, {}, {}, {}]).get('containerStyle');
        let closeTimeoutMap: NodeJS.Timeout[] = timeoutMap.get('closeTimeoutMap') || timeoutMap.set('closeTimeoutMap', []).get('closeTimeoutMap');
        let positionIndex: number = 0;//弹窗的位置
        let showIdNumber: number = 0;//弹窗的位置上的第几条数据
        let tipItemOption: LgAlertShowProps = e as LgAlertShowProps;
        let initOptions: LgAlertShowProps = { tipType: "info", isShow: true, duration: 3000, isShowIcon: true, content: '提示框~', tipMouldType: undefined, position: { xAxis: '50%', yAxis: 32, showDirection: 'center', xOffset: '-50%' }, tipSize: 'small', containerClassName: '', description: '' };
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
            clearTimeout(timeoutMap.get(showIdIndex));
            let positionIndexClose: number = parseInt(showIdIndex.split('-')[1]);//关闭弹窗的位置
            let showIdNumberClose: number = parseInt(showIdIndex.split('-')[0]);//关闭弹窗的位置上的第几条数据
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
            tipItemOption.showIdName = lgAlert.showIdName;
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
                console.log(timeoutId)
                closeTimeoutMap.push(timeoutId);
                console.log(closeTimeoutMap)
            })
        };

        if (showIdIndex) { returnOptionsIndex = showIdIndex };
        let option: { index: string, options: LgAlertShowProps } = { index: returnOptionsIndex, options: tipItemOption };
        return option;
    },
    close: (showIdIndex: string) => {
        let positionIndexClose: number = parseInt(showIdIndex.split('-')[1]);//关闭弹窗的位置
        let showIdNumberClose: number = parseInt(showIdIndex.split('-')[0]);//关闭弹窗的位置上的第几条数据
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
export class LgAlertContainer extends Component<LgAlertContainerProps, LgAlertContainerState> {
    constructor(props: LgAlertContainerProps | Readonly<LgAlertContainerProps>) {
        super(props);
        this.state = { alertMessageListPosition: [], alertPositionStylePosition: [], containerClassName: [], containerStyle: [], }
        globalState = this.setState.bind(this)
        this.initAlertDom = this.initAlertDom.bind(this)
        this.closeTip = this.closeTip.bind(this)
    }
    positionZIndex: number = 19000;
    initAlertDom(type: number, alertMessageList: LgAlertShowProps[]) {
        return alertMessageList.map((o, i) => {
            o.closeTip = this.closeTip
            if (o.tipMouldType == 'E') {
                let alertParams = initAlertParams(o);
                return (<div className={'elementUi_tip_box ' + alertParams.className} style={alertParams.style} key={i}><Alert {...alertParams} title={alertParams.title as string} /></div>)
            } else if (o.tipMouldType == 'A') {
                let alertParams = initAlertParamsA(o);
                return <LgAlertType_A {...alertParams} key={i} />
            } else {
                return (<LgAlert {...o} key={i} />)
            }
        })
    }
    closeTip(type: number = 1, tipIndex?: string) {
        let alertMessageListPosition: LgAlertShowProps[][] = mapList.get('alertMessageListPosition') || mapList.set('alertMessageListPosition', [[], [], [], [], [], [], [], [], [], []]).get('alertMessageListPosition');
        if (type == 1 && !tipIndex) { return }
        if (type) {
            let positionIndexClose: number = parseInt((tipIndex as string).split('-')[1]);//关闭弹窗的位置
            let showIdNumberClose: number = parseInt((tipIndex as string).split('-')[0]);//关闭弹窗的位置上的第几条数据
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
    componentDidUpdate() { }
    /**
     * @msg 
     * @param type 0:关闭所有的弹窗 | 1：关闭单个提示框
     * @param tipIndex 提示框的按钮
     */

    render() {
        const { state, props } = this;
        return (
            <>
                {this.state.alertMessageListPosition.map((o, i) => {
                    let stylePosition: React.CSSProperties = Object.assign(this.state.alertPositionStylePosition[i] || {}, this.state.containerStyle[i] || {})
                    return (
                        <div style={{ display: o.length ? 'block' : 'none' }} data-index={i} key={i} className={''}>
                            <div id='' className={'lg_alert_container_box lg_alert_container_box_right_bottom ' + ((state.containerClassName as string[])[i] as string)} style={stylePosition}>
                                {this.initAlertDom(i, o)}
                            </div>
                        </div>
                    )
                })}
            </>
        )
    }
}

export class LgAlert extends Component<LgAlertProps, LgAlertState> {
    constructor(props: LgAlertProps | Readonly<LgAlertProps>) {
        super(props);
        this.state = {};
        this.closeTip = this.closeTip.bind(this);
    }
    componentWillReceiveProps(nextProps: any) {
        if (nextProps == this.props) return;
    }
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
export class LgAlertType_A extends Component<LgAlertProps, LgAlertState> {
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
        if (type == 1) { this.props.iconCloseTip && this.props.iconCloseTip(); }
        let index = parseInt(parentNode.getAttribute('data-index') as string);
        let positionIndex = parseInt(parentNode.getAttribute('data-position-index') as string);
        let spliceIndex = (index + '-' + positionIndex)
        if (isRunFun) { this.props.closeTip && this.props.closeTip(1, spliceIndex); }
    }
    // 点击确认按钮
    confirmTip(e: React.MouseEvent<HTMLDivElement, MouseEvent>) { this.props.confirm && this.props.confirm(); this.closeTip(e, 2); }
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
// ============================================tip使用的工具方法=============================================================================
// =========================================================================================================================================
// =========================================================================================================================================


// 创建弹窗的根节点
let popLayerCreateIndex = 0;
; (() => {
    /**
     * @msg 创建传送门的根节点
     * @popLayerCreateIndex 创建的根节点的次数
     */
    if (popLayerCreateIndex) return;
    let alert = document.getElementById('Lg_alert_root');
    let root = document.getElementById('root');
    if (alert) { document.removeChild(alert) };
    let popLayerDom = document.createElement('div');
    popLayerDom.setAttribute('id', 'Lg_alert_root');
    popLayerDom.style.position = 'absolute';
    root?.appendChild(popLayerDom);
    ++popLayerCreateIndex;
    ReactDOM.render(<LgAlertContainer />, document.getElementById('Lg_alert_root'))
})();


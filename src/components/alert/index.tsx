import React, { Component } from 'react'
import ReactDOM from 'react-dom';
import { Alert } from 'element-react'
import "./index.scss";

type TipType = "info" | "error" | "warning" | "success" | "loading" | "question" | "closeAll";
type typeModel_A = 'success' | 'info' | 'warning' | 'error' | "question";
type typeModel_E = 'success' | 'info' | 'warning' | "error";
type tipModel = 'A' | 'E' | undefined;//提示框的款式

let globalState: (state: any, callback?: () => void) => void;
interface lgAlert {
    showIdNumber: number;//
    showIdName: string;//
    show: (e?: LgAlertShowProps, showIdIndex?: string) => { index: string, options: LgAlertShowProps };//返回一个数字用于关闭已经打开的弹窗
    close: (e: string) => any;//关闭一个提示框
    closeAll: () => any;//关闭所有的提示框
}
type xOffsetType = "left" | "center" | "right" | undefined
type yOffsetType = "top" | "center" | "bottom" | undefined
type showAlign = "top" | 'center' | 'bottom';
type showDirection = "left" | 'center' | 'right';

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
type tipMouldType = 'A' | 'E' | undefined;
type tipSize = 'big' | 'small' | 'mini' | undefined;
interface LgAlertTypeA {
    confirmText?: string;//确认按钮显示的文字
    closeText?: string;//关闭按钮显示的文字
    reverse?: boolean;//按钮是否翻转
    tipSize?: tipSize;//弹窗尺寸 仅适用于A款


    confirm?: () => void;//点击确认按钮
    close?: () => void;//点击关闭按钮
    iconCloseTip?: () => void;//右上角关闭按钮

}
// 使用的提示框时需要传的参数
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
export interface LgAlertShowProps extends LgAlertProps {

}

interface LgAlertCloseProps {

}
/**
 * @msg 初始化提示的类型
 * @param tipType 需要提示的类型
 * @returns number
 */

function initTipType(tipType: typeModel_A | typeModel_E | TipType = 'info', model?: tipModel) {
    let type: number = -1;
    switch (model) {
        case 'A':
            switch (tipType) {
                case 'info': type = 0; break;//展示信息
                case 'error': type = 1; break;//报错信息
                case 'warning': type = 2; break;//警告提示框
                case 'success': type = 3; break;//成功提示框
                case 'question': type = 4; break;//询问提示框
                default: type = -1; break;//
            };
            break;
        case 'E':
            switch (tipType) {
                case 'info': type = 0; break;//展示信息
                case 'error': type = 1; break;//报错信息
                case 'warning': type = 2; break;//警告提示框
                case 'success': type = 3; break;//成功提示框
                default: type = -1; break;//
            };
            if (type == -1) { type = 6 };
            break;

        default:
            switch (tipType) {
                case 'info': type = 0; break;//展示信息
                case 'error': type = 1; break;//报错信息
                case 'warning': type = 2; break;//警告提示框
                case 'success': type = 3; break;//成功提示框
                case 'loading': type = 4; break;//加载提示框
                case 'question': type = 5; break;//询问提示框
                case 'closeAll': type = 6; break;//关闭所有提示框
                default: type = -1; break;//
            };
            if (type == -1) { type = 6 };
            break;
    }
    return type;
}
let zIndexNumber = 19000;
/**
 * @msg 初始化弹出提示框的位置
 * @param LgAlertPropsPosition 
 * @returns 
 */
function initContainerPosition(LgAlertPropsPosition?: LgAlertPropsPosition): { style: React.CSSProperties, type: string, positionType: number } {
    let style = {}; let tipPositionXType: string = ''; let tipPositionYType: string = '';
    switch (LgAlertPropsPosition?.xAxis) {
        case 'left': tipPositionXType = '1'; break;
        case 'center': tipPositionXType = '2'; break;
        case 'right': tipPositionXType = '3'; break;
        default: tipPositionXType = '0'; break;
    }
    switch (LgAlertPropsPosition?.yAxis) {
        case 'top': tipPositionYType = '1'; break;
        case 'center': tipPositionYType = '2'; break;
        case 'bottom': tipPositionYType = '3'; break;
        default: tipPositionYType = '0'; break;
    }
    let type = tipPositionXType + tipPositionYType;
    let positionType = 0;
    let showAlign = LgAlertPropsPosition?.showAlign;
    let showDirection = LgAlertPropsPosition?.showDirection;
    let alignItems: string = 'center';
    let justifyContent: string = 'center';
    if (showAlign as undefined == undefined) { showAlign = 'top'; }
    switch (showDirection) {
        case 'left': alignItems = 'flex-start'; break;
        case 'center': alignItems = 'center'; break;
        case 'right': alignItems = 'flex-end'; break;
    }
    switch (showAlign) {
        case 'top': justifyContent = 'flex-start'; break;
        case 'center': justifyContent = 'center'; break;
        case 'bottom': justifyContent = 'flex-end'; break;
    }
    ++zIndexNumber
    switch (type) {
        case '11': style = {
            zIndex: zIndexNumber,
            top: '40px', left: '40px',
            transform: `translate(${LgAlertPropsPosition?.xOffset || 0}, ${LgAlertPropsPosition?.yOffset || 0})`,
            alignItems: 'flex-start',
            justifyContent: 'flex-start'
        }; positionType = 1; break;
        case '21': style = {
            zIndex: zIndexNumber,
            top: '40px',
            left: '50%',
            transform: `translate(${LgAlertPropsPosition?.xOffset || '-50%'}, ${LgAlertPropsPosition?.yOffset || 0})`,
            alignItems: 'flex-start',
            justifyContent: 'center'

        }; positionType = 2; break;
        case '31': style = {
            zIndex: zIndexNumber,
            top: '40px', right: '40px',
            transform: `translate(${LgAlertPropsPosition?.xOffset || 0}, ${LgAlertPropsPosition?.yOffset || 0})`,
            alignItems: 'flex-start',
            justifyContent: 'flex-end'
        }; positionType = 3; break;
        case '12': style = {
            zIndex: zIndexNumber,
            top: '50%', left: '40px',
            transform: `translate(${LgAlertPropsPosition?.xOffset || 0}, ${LgAlertPropsPosition?.yOffset || '-50%'})`,
            alignItems: 'center',
            justifyContent: 'flex-start'

        }; positionType = 4; break;
        case '22': style = {
            zIndex: zIndexNumber,
            top: '50%', left: '50%',
            transform: `translate(${LgAlertPropsPosition?.xOffset || '-50%'}, ${LgAlertPropsPosition?.yOffset || '-50%'})`,
            alignItems: 'center',
            justifyContent: 'center'

        }; positionType = 5; break;
        case '32': style = {
            zIndex: zIndexNumber,
            top: '50%', right: '40px',
            transform: `translate(${LgAlertPropsPosition?.xOffset || 0}, ${LgAlertPropsPosition?.yOffset || '-50%'})`,
            alignItems: 'center',
            justifyContent: 'flex-end'

        }; positionType = 6; break;
        case '13': style = {
            zIndex: zIndexNumber,
            bottom: '40px', left: '40px',
            transform: `translate(${LgAlertPropsPosition?.xOffset || 0}, ${LgAlertPropsPosition?.yOffset || 0})`,
            alignItems: 'flex-end',
            justifyContent: 'flex-start'

        }; positionType = 7; break;
        case '23': style = {
            zIndex: zIndexNumber,
            bottom: '40px', left: '50%',
            transform: `translate(${LgAlertPropsPosition?.xOffset || '-50%'}, ${LgAlertPropsPosition?.yOffset || 0})`,
            alignItems: 'flex-end',
            justifyContent: 'center'

        }; positionType = 8; break;
        case '33': style = {
            zIndex: zIndexNumber,
            right: '40px', bottom: '40px',
            transform: `translate(${LgAlertPropsPosition?.xOffset || 0}, ${LgAlertPropsPosition?.yOffset || 0})`,
            alignItems: 'flex-end',
            justifyContent: 'flex-end',

        }; positionType = 9; break;
        default: style = {
            zIndex: zIndexNumber,
            alignItems, justifyContent,
            top: LgAlertPropsPosition?.yAxis || 0,
            left: LgAlertPropsPosition?.xAxis || 0,
            transform: `translate(${LgAlertPropsPosition?.xOffset || 0}, ${LgAlertPropsPosition?.yOffset || 0})`,
        }; positionType = 0; break;
    }
    return { style, type, positionType }
}
let mapList = new Map();//
let timeoutMap = new Map();//
let containerClassName = new Map();//
let containerStyle = new Map();//
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
        let initOptions: LgAlertShowProps = { tipType: "info", isShow: true, duration: 3000, isShowIcon: true, content: '提示框~', tipMouldType: undefined, position: { xAxis: '50%', yAxis: 32, showDirection: 'center', xOffset: '-50%' }, tipSize: 'small', containerClassName: '' };
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
            let alertPositionOptions = initContainerPosition(tipItemOption.position);
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
                            let item: LgAlertShowProps = o;
                            if (item.showIdNumber == showIdNumber && item.duration != 0) {
                                spliceIndex = i
                            }
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
            alertMessageListPosition[positionIndexClose].forEach((o, i) => {
                if (o.showIdNumber == showIdNumberClose) { replaceIndex = i; }
            })
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
interface LgAlertContainerProps extends LgAlertProps {
    content?: string
}
interface LgAlertContainerState {
    alertMessageListPosition: LgAlertShowProps[][];
    alertPositionStylePosition: React.CSSProperties[];
    containerClassName: string[]
    containerStyle: React.CSSProperties[];
}
// elementUI中需要传入的变量
interface ElementAlert {
    onClose?(): void
    title?: string
    description?: string
    closable?: boolean
    closeText?: string
    showIcon?: boolean
    className?: string
    style?: React.CSSProperties
}

export class LgAlertContainer extends Component<LgAlertContainerProps, LgAlertContainerState> {
    constructor(props: LgAlertContainerProps | Readonly<LgAlertContainerProps>) {
        super(props);
        this.state = {
            alertMessageListPosition: [],
            alertPositionStylePosition: [],
            containerClassName: [],
            containerStyle: []
        }
        globalState = this.setState.bind(this)
        this.initAlertDom = this.initAlertDom.bind(this)
        this.closeTip = this.closeTip.bind(this)
    }
    positionZIndex: number = 19000;
    initAlertParams(o: LgAlertProps): ElementAlert {
        let initOption = {
            title: o.content,
            type: 'info',
            closable: true,
            showIcon: false,
        }
        initOption = Object.assign(initOption, o)
        let options: ElementAlert = initOption as ElementAlert;
        options.showIcon = o?.isShowIcon ? true : false;
        options.closable = o?.isShowCloseBtn ? true : false;
        options.className = o.className;
        options.closeText = o.closeText;
        let tipType = o.tipType;
        switch (tipType) {
            case 'info': tipType = 'info'; break;
            case 'success': tipType = 'success'; break;
            case 'warning': tipType = 'warning'; break;
            case 'error': tipType = 'error'; break;
            default: tipType = 'info'; break;
        }
        initOption.type = tipType
        return options
    }
    initAlertParamsA(o: LgAlertProps): ElementAlert {
        let initOption = {
            title: o.content,
            type: 'info',
            closable: true,
            showIcon: false,
        }
        initOption = Object.assign(initOption, o)
        let options: ElementAlert = initOption as ElementAlert;
        options.showIcon = o?.isShowIcon ? true : false;
        options.closable = o?.isShowCloseBtn ? true : false;
        options.className = o.className;
        options.closeText = o.closeText;
        let tipType = o.tipType;
        switch (tipType) {
            case 'info': tipType = 'info'; break;
            case 'success': tipType = 'success'; break;
            case 'warning': tipType = 'warning'; break;
            case 'error': tipType = 'error'; break;
            default: tipType = 'info'; break;
        }
        initOption.type = tipType
        return options
    }
    initAlertDom(type: number, alertMessageList: LgAlertShowProps[]) {
        return alertMessageList.map((o, i) => {
            o.closeTip = this.closeTip
            if (o.tipMouldType == 'E') {
                let alertParams = this.initAlertParams(o);
                return (<div className={'elementUi_tip_box ' + alertParams.className} style={alertParams.style} key={i}><Alert {...alertParams} title={alertParams.title as string} /></div>)
            } else if (o.tipMouldType == 'A') {
                let alertParams = this.initAlertParamsA(o);
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
export interface LgAlertState {
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
        return (
            <div className={'lg_alert_body ' + props.className} style={props.style} id={this.props.showIdName as string + this.props.showIdNumber} data-index={props.showIdNumber} data-position-index={props.positionIndex} >
                <div className='lg_alert_body_box'>
                    <div className={'lg_alert_body_icon tip_icon_type_item tip_icon_type' + initTipType(props?.tipType, props?.tipMouldType)} style={{ display: props.isShowIcon ? 'block' : 'none' }}><div className='lg_alert_body_icon_small'></div>{props.customIcon}</div>
                    <div className='lg_alert_body_title'>{props?.content}</div>
                </div>
                <div className='lg_alert_body_close_container_box' style={{ display: props.isShowCloseBtn ? 'block' : 'none' }} onClick={(e) => { this.closeTip(e) }}>
                    {props.customClose}
                    <div className='lg_alert_body_close_icon lg_alert_body_close_box' style={{ display: props.customClose ? 'none' : 'block' }}></div>
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
    componentWillReceiveProps(nextProps: any) {
        if (nextProps == this.props) return;
    }
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
    confirmTip(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
        this.props.confirm && this.props.confirm();
        this.closeTip(e, 2);
    }
    render() {
        const { state, props } = this;
        let rowRevers = props.reverse ? 'lg_alert_body_selection lg_alert_body_selection_reverse' : "lg_alert_body_selection";
        let showDom: boolean[] = [false, false, false];
        let miniClass = ''
        switch (props.tipSize) {
            case 'big':
                showDom = showDom.map(o => o = true)
                break;
            case 'small':
                showDom = showDom.map((o, i) => { if (i > 0) { return true; } return false })
                break;
            case 'mini':
                showDom = showDom.map((o, i) => { if (i > 1) { return true } return false })
                miniClass = 'lg_alert_body_box_row'
                break;
            default:
                showDom = showDom.map((o, i) => { if (i > 1) { return true } return false })
                break;
        }
        console.log(props.tipSize, showDom)
        return (
            <div className={'lg_alert_body lg_alert_body_A ' + props.className} style={props.style} id={this.props.showIdName as string + this.props.showIdNumber} data-index={props.showIdNumber} data-position-index={props.positionIndex} >
                <div className={'lg_alert_body_box '+ miniClass}>
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

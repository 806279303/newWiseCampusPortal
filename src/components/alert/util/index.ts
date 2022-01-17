import { ElementAlert, LgAlertProps, tipModel, TipType, typeModel_A, typeModel_E, LgAlertPropsPosition } from "../";

/**
 * @msg 初始化弹出提示框的位置
 * @param LgAlertPropsPosition 
 * @returns 
 */
export function initContainerPosition(LgAlertPropsPosition?: LgAlertPropsPosition, zIndexNumber?: number): { style: React.CSSProperties, type: string, positionType: number } {
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
/**
 * @msg 初始化提示的类型
 * @param tipType 需要提示的类型
 * @returns number
 */

export function initTipType(tipType: typeModel_A | typeModel_E | TipType = 'info', model?: tipModel) {
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
/**
 * 
 * @param tipSize tipSize:'big' | 'small' | 'mini' | undefined;
 * @returns { miniClass: string //弹窗类型的名称, layerContainerClass: string//弹窗容器类型的名称, showDom: boolean[]//展示那些dom }
 */
export function initLgAlertTypeAClass(tipSize: string): { miniClass: string, layerContainerClass: string, showDom: boolean[] } {
    let miniClass = '';
    let layerContainerClass = '';
    let showDom: boolean[] = [false, false, false];
    switch (tipSize) {
        case 'big':
            miniClass = ' lg_alert_body_box_big '
            layerContainerClass = ' lg_alert_body_A_size_big '
            showDom = showDom.map(o => o = true);
            break;
        case 'small':
            miniClass = ' lg_alert_body_box_small '
            layerContainerClass = ' lg_alert_body_A_size_small '
            showDom = showDom.map((o, i) => { if (i > 0) { return true; } return false })
            break;
        case 'mini':
            miniClass = ' lg_alert_body_box_mini '
            layerContainerClass = ' lg_alert_body_A_size_mini '
            showDom = showDom.map((o, i) => { if (i > 1) { return true } return false })
            break;
        default:
            showDom = showDom.map((o, i) => { if (i > 1) { return true } return false })
            break;
    }
    return { miniClass, layerContainerClass, showDom }
}
/**
 * @msg 初始化提示框A的参数
 * @param o 需初始化的参数
 * @returns {onClose?(): void;title?: string;description?: string;closable?: boolean;closeText?: string;showIcon?: boolean;className?: string;style?: React.CSSProperties}//返回的参数
 */
/**
 * @description  : 初始化提示框A的参数
 * @param         { type LgAlertProps }  o 需初始化的参数
 * @return        { type * } 
 */
export function initAlertParamsA(o: LgAlertProps): ElementAlert {
    let initOption = { title: o.content, type: 'info', closable: true, showIcon: false }
    initOption = Object.assign(initOption, o)
    let options: ElementAlert = initOption as ElementAlert;
    options.showIcon = o?.isShowIcon ? true : false;
    options.closable = o?.isShowCloseBtn ? true : false;
    options.className = o.className;
    options.closeText = o.closeText;
    options.style = o.style
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

export function initAlertParams(o: LgAlertProps): ElementAlert {
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
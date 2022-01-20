import { lgAlert } from '@/components/alert';
import React, { Component } from 'react'
import './index.scss'
import { CodeView } from '@/components/CodeView'
interface AlertState {
    num: number,
    successLoading: boolean
}

export default class alert extends Component<{}, AlertState> {
    constructor(props: any) {
        super(props);
        this.state = { num: 0, successLoading: false }
        this.alertMsg = this.alertMsg.bind(this)
        this.alertMsg2 = this.alertMsg2.bind(this)
        this.alertMsg3 = this.alertMsg3.bind(this)
        this.alertMsg4 = this.alertMsg4.bind(this)
        this.alertMsg5 = this.alertMsg5.bind(this)
        this.alertMsg6 = this.alertMsg6.bind(this)
        this.alertMsg7 = this.alertMsg7.bind(this)
        this.alertMsg8 = this.alertMsg8.bind(this)
        this.alertMsg9 = this.alertMsg9.bind(this)
        this.alertMsgCustom = this.alertMsgCustom.bind(this)
    }
    alertMsg() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', position: { xAxis: 'left', yAxis: 'top' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 * 2 }, alert.index);
        }, 1000 * 3);
    }
    alertMsg2() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, isShowCloseBtn: true, position: { xAxis: 'center', yAxis: 'top' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 0, customClose: (<div className='custom_close_dom'>关闭</div>) }, alert.index);
        }, 1000 * 3);
    }
    alertMsg3() {
        let alert = lgAlert.show({ tipType: 'question', duration: 0, position: { xAxis: 'right', yAxis: 'top' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000, }, alert.index);
        }, 1000 * 3)
    }
    alertMsg4() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'left', yAxis: 'center' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg5() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'center', yAxis: 'center' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg6() {
        let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'right', yAxis: 'center' }, description: '实时通讯的智子制造过程' });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 0, isShowCloseBtn: true, description: "How do you spell color? You’ll see other writers do it two ways—the one we’ve already used in this paragraph, and another one—colour. Neither of the spellings is wrong, and they both mean exactly the same thing. Still, the two spellings are slightly different, so there has to be something to it, right? Let’s see. " }, alert.index);
        }, 1000 * 3)
    }
    alertMsg7() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'left', yAxis: 'bottom' }, });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg8() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'center', yAxis: 'bottom' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsg9() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: this.state.successLoading ? 'success' : 'loading', duration: 0, position: { xAxis: 'right', yAxis: 'bottom' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 }, alert.index);
        }, 1000 * 3)
    }
    alertMsgCustom() {
        let alert = lgAlert.show({ isShowCloseBtn: true, tipType: 'warning', position: { xOffset: '-50%', xAxis: '50%', yAxis: 32, showDirection: 'center', showAlign: 'top' } });
        setTimeout(() => {
            lgAlert.show({ tipType: 'error', content: "加载失败~", duration: 1000 * 2, isShowCloseBtn: false, }, alert.index);
        }, 1000 * 3)
    }
    clearAlertMsgCustom() {
        lgAlert.show({ tipType: 'closeAll' })
    }
    alertSuccess() {
        let alert = lgAlert.show({ tipType: 'success', tipMouldType: 'E', duration: 0, closable: true, closeText: "关闭", description: "全市各社区(村)、西安急救中心和各医疗机构均不得以查验核酸48小时阴性证明作为进出小区就医、转送病人和接诊的限制。全文2331字，阅读约需4分钟 据央视新闻消息，陕西西安1... " });
    }
    alertWarning() {
        let alert = lgAlert.show({ tipType: 'warning', tipMouldType: 'E', duration: 0, description: "How do you spell color? You’ll see other writers do it two ways—the one we’ve already used in this paragraph, and another one—colour. Neither of the spellings is wrong, and they both mean exactly the same thing. Still, the two spellings are slightly different, so there has to be something to it, right? Let’s see. " });
    }
    alertInfo() {
        let alert = lgAlert.show({ tipType: 'info', tipMouldType: 'E', duration: 0, isShowIcon: false });
    }
    alertError() {
        let alert = lgAlert.show({
            tipType: 'error', tipMouldType: 'E', isShowCloseBtn: true, description: `There are a couple of ways you can choose which spelling to use. You can, for example, choose the spelling that’s prevalent in the country you’re from—if you’re an American, use color. If you’re from any of the Commonwealth countries, use colour. If English is not your first language, use the spelling you were taught.
        If you’re still not sure which to choose, or if you’re writing for an international audience, the best thing to do is choose one of the spellings and stick with it. In other words, choose consistency. ` });
    }
    alertASuccess() {
        let alert = lgAlert.show({ tipType: 'success', tipSize: 'mini', tipMouldType: 'A', duration: 0, isShowCloseBtn: true });
    }
    alertAWarning() {
        let alert = lgAlert.show({ tipType: 'warning', tipSize: 'small', tipMouldType: 'A', containerClassName: 'weishoujiong', duration: 0, description: "How do you spell color? You’ll see other writers do it two ways—the one we’ve already used in this paragraph, and another one—colour. " });
    }
    alertAInfo() {
        let alert = lgAlert.show({ tipType: 'info', reverse: true, tipMouldType: 'A', duration: 0 });

    }
    alertAError() {
        let alert = lgAlert.show({
            tipType: 'error', tipMouldType: 'A', tipSize: 'big', isShowCloseBtn: true, duration: 0, description: `There are a couple of ways you can choose which spelling to use.`
        });
    }
    alertAQuestion() {
        let alert = lgAlert.show({
            tipType: 'question', tipMouldType: 'A', duration: 0, isShowCloseBtn: true, description: `There are a couple of ways you can choose which spelling to use. You can, for example, choose the spelling that’s prevalent in the country you’re from—if you’re an American, use color. If you’re from any of the Commonwealth countries, use colour. If English is not your first language, use the spelling you were taught.
        If you’re still not sure which to choose, or if you’re writing for an international audience, the best thing to do is choose one of the spellings and stick with it. In other words, choose consistency. ` });
    }

    componentDidMount() { }
    render() {
        return (
            < >
                <div className='components-show-box'>
                    <div className='components-show-big-title'>G004</div>
                    <div className='components-show-use'>使用指南</div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>一、在 @/components/alert 文件中引入组件 lgAlert</div>
                        <div className='components-show-steps-code'>
                            <CodeView className=''>
                                {
                                    `import { lgAlert } from '@/components/alert';`
                                }
                            </CodeView>
                        </div>
                    </div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>二、再引入标签，标签属性解析</div>
                        <div className='components-show-steps-code'>
                            <CodeView className=''>
                                {
                                    `
                                    /**
                                     * @description  : 创建或者修改一个lgAlert
                                     * @param         { type LgAlertShowProps }  e 传入创建的参数或者需要修改的参数
                                     * @param         { type string }  showIdIndex 需要修改属性指定值的下标
                                     * @return        { type * } 
                                     */

                                    /**
                                     * @description  : 关闭下标指定的的lgAlert
                                     * @param         { type string } showIdIndex 指定lgAlert的下标
                                     * @return        { type * }
                                     */

                                     /**
                                      * @description  : 关闭所有的lgAlert
                                      * @param         { type * } 
                                      * @return        { type * } 
                                      */
                                    
                                     /**
                                      * @param LgAlertShowProps:在打开提示窗时提示的
                                      */

                                     interface lgAlert {
                                        show: (e?:LgAlertShowProps, showIdIndex?: string) => { index: string, options: LgAlertShowProps }; // 返回一个数字用于关闭已经打开的弹窗
                                        close: (index: string) => void; // 关闭一个lgAlert
                                        closeAll: () => void; // 关闭所有的lgAlert
                                     }
                                    `
                                }
                            </CodeView>

                            <CodeView className='props_container'>
                                {
                                    `

                                    /**
                                     * @summary 通用的类型
                                     */
                                      type tipModel = 'A' | 'E' | undefined;// lgAlert的提示模式
                                      type tipMouldType = 'A' | 'E' | undefined;// lgAlert的提示模式
                                      type xOffsetType = "left" | "center" | "right" | undefined;// X轴上偏移的位置 0点在屏幕左上角
                                      type yOffsetType = "top" | "center" | "bottom" | undefined;// Y轴上偏移的位置 0点在屏幕左上角
                                      type showAlign = "top" | 'center' | 'bottom';// Y轴方向上的flex布局方式
                                      type showDirection = "left" | 'center' | 'right';// X轴方向上的flex布局方式
                                    /**
                                     * @summary default的类型
                                     */
                                      type TipType = "info" | "error" | "warning" | "success" | "loading" | "question" | "closeAll";// 默认的款式的提示类型
                                    
                                    /**
                                     * @summary A的类型
                                     */
                                      type typeModel_A = 'success' | 'info' | 'warning' | 'error' | "question";// A款的提示类型
                                      type tipSize = 'big' | 'small' | 'mini' | undefined;// A款lgAlert的大小
                                    /**
                                     * @summary E的类型
                                     */
                                      type typeModel_E = 'success' | 'info' | 'warning' | "error";// E款的提示类型
                                  `
                                }
                            </CodeView>

                            <CodeView className='props_container'>
                                {
                                    `
                                        // 打开提示框中的配置项,通用样式 default | A | E
                                        interface LgAlertShowProps {

                                            tipMouldType?: tipMouldType;// lgAlert的款式 | 默认值：undefined | 必传性: false
                                        
                                            tipType?: TipType | typeModel_A;// lgAlert展示的类型 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                        
                                            position?: {
                                                xAxis?: xOffsetType | number | string;// lgAlert在X轴上的相对位置 | "left" | "center" | "right" | undefined(默认值)  | 必传性:false
                                                yAxis?: yOffsetType | number | string;// lgAlert在y轴上的相对位置 | "top" | "center" | "bottom" | undefined(默认值) | 必传性:false
                                                xOffset?: number | string;// lgAlert在x轴上的偏移量 | 默认值:-- | 必传性:false
                                                yOffset?: number | string;// lgAlert在y轴上的偏移量 | 默认值:-- | 必传性:false
                                                showAlign?: showAlign;// lgAlert数据展示的起始方向 |  "center" | "top"(默认值) | "bottom" | 必传性:false
                                                showDirection?: showDirection;// lgAlert数据展示的水平对齐方向 "left" | "center"(默认值) | "right"  | 必传性:false

                                            };// 设置lgAlert弹出的位置 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                        
                                            duration?: number;// lgAlert展示后消失的时间 | 0:长时间停留在屏幕上面不消失 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                            positionIndex?: number// 创建lgAlert后,执行的show函数返回每个提示实例的下标，用于关闭单个弹窗 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                        
                                            content?: string;// 展示的内容 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                        
                                            isShow?: boolean;// 是否展示弹框 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                        
                                            isShowCloseBtn?: boolean;// 是否展示关闭按钮 | 默认值: false |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                            isShowIcon?: boolean;// 是否显示小图标 | 默认值: true |/| 兼容款式：default \\ A \\ E\\ | 必传性: false
                                        
                                            customIcon?: React.ReactDOM | React.ReactElement;// 自定义的小图标 | 默认值: -- |/| 兼容款式：default \\ A  | 必传性: false
                                            customClose?: React.ReactDOM | React.ReactElement;// 自定义关闭按钮的HTML元素  | 默认值: false |/| 兼容款式：default \\ A  | 必传性: false
                                        
                                            // 提示框上的容器
                                            containerClassName?: string;// 单个lgAlert的类名 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                            containerStyle?: React.CSSProperties;// lgAlert的样式(10个窗口位置上的样式) | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                        
                                            onClose?(): void// 关闭alert时触发的事件 | 兼容款式：default \\ A \\ E  | 必传性: false

                                            className?: string// 修改样式的类名 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                            style?: React.CSSProperties// 修改样式的对象 | 默认值: -- |/| 兼容款式：default \\ A \\ E  | 必传性: false
                                        }
                                  `
                                }
                            </CodeView>
                            <CodeView className=''>
                                {
                                    `
                                    /**
                                     * @summary A款样式的参数 仅适用于A款
                                     */
                                    export interface LgAlertModelAProps {
                                        confirmText?: string;// 确认按钮显示的文字 | 默认值: "确定" | 必传性: false
                                        closeText?: string;// 关闭按钮显示的文字 | 默认值: "再想想" | 必传性: false
                                        reverse?: boolean;// 确认按钮与取消按钮是否反转 | 默认值: false | 必传性: false
                                        tipSize?: tipSize;// 弹窗尺寸 | 默认值: small | 必传性: false
                                    
                                        onConfirm?: () => void;// 点击确认按钮 | 必传性: false
                                        onCancel?: (type: number, positionIndex: string) => void;// 点击关闭按钮 | 必传性: false
                                        iconCloseAlert?: () => void;// 右上角关闭按钮 | 必传性: false
                                    }
                                  `
                                }
                            </CodeView>
                            <CodeView className=''>
                                {
                                    `
                                    /**
                                     * @summary E款样式的参数 elementUI中需要传入的变量
                                     * 
                                     * @see https://elemefe.github.io/element-react/#/zh-CN/alert
                                     */
                                    export interface ElementAlert {
                                        title?: string// 标题，必选参数 | 默认值: -- | 必传性: false
                                        description?: string// 	辅助性文字 | 默认值: -- | 必传性: false
                                        closable?: boolean// 是否可关闭 | 默认值: false | 必传性: false
                                        closeText?: string// 关闭按钮自定义文本 | 默认值: -- | 必传性: false
                                        showIcon?: boolean// 是否显示图标  | 默认值: false | 必传性: false
                                    }

                                  `
                                }
                            </CodeView>
                        </div>
                    </div>

                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>三、demo样式展示</div>
                        <div className='components-show-example'>
                            <div className='components-show-example-title'>默认-LgUI-Alert:</div>
                            <div>
                                <div>
                                    <input type="button" value="左上" onClick={this.alertMsg} className='comment_position alert_position_left_top' />
                                    <input type="button" value="中上" onClick={this.alertMsg2} className='comment_position alert_position_left_top' />
                                    <input type="button" value="右上" onClick={this.alertMsg3} className='comment_position alert_position_left_top' />
                                    <input type="button" value="中左" onClick={this.alertMsg4} className='comment_position alert_position_left_top' />
                                    <input type="button" value="中中" onClick={this.alertMsg5} className='comment_position alert_position_left_top' />
                                    <input type="button" value="中右" onClick={this.alertMsg6} className='comment_position alert_position_left_top' />
                                    <input type="button" value="下左" onClick={this.alertMsg7} className='comment_position alert_position_left_top' />
                                    <input type="button" value="下中" onClick={this.alertMsg8} className='comment_position alert_position_left_top' />
                                    <input type="button" value="下右" onClick={this.alertMsg9} className='comment_position alert_position_left_top' />
                                </div>
                                <div>
                                    <input type="button" value="自定义位置" onClick={this.alertMsgCustom} className='comment_position alert_position_left_top' />
                                </div>
                                <div>
                                    <input type="button" value="清除所有的弹窗" onClick={this.clearAlertMsgCustom} className='comment_position alert_position_left_top' />
                                </div>
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
alertMsg() {
    let alert = lgAlert.show({ 
        isShowCloseBtn: true,
        tipType: this.state.successLoading ? 'success' : 'loading',
        position: { xAxis: 'left', yAxis: 'top' } 
    });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success', content: "加载成功", duration: 1000 * 2 }, alert.index);
    }, 1000 * 3);
}
alertMsg2() {
    let alert = lgAlert.show({ 
        tipType: this.state.successLoading ? 'success' : 'loading',
        duration: 0,
        isShowCloseBtn: true,
        position: { xAxis: 'center', yAxis: 'top' }
    });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success',
         content: "加载成功",
         duration: 0,
         customClose: (<div className='custom_close_dom'>关闭</div>) },
         alert.index);
    },
     1000 * 3);
}
alertMsg3() {
    let alert = lgAlert.show({ tipType: 'question',
     duration: 0,
     position: { xAxis: 'right',
     yAxis: 'top' } });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success',
         content: "加载成功",
         duration: 1000,
     },
         alert.index);
    },
     1000 * 3)
}
alertMsg4() {
    let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading',
     duration: 0,
     position: { xAxis: 'left',
     yAxis: 'center' } });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success',
         content: "加载成功",
         duration: 1000 },
         alert.index);
    },
     1000 * 3)
}
alertMsg5() {
    let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading',
     duration: 0,
     position: { xAxis: 'center',
     yAxis: 'center' } });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success',
         content: "加载成功",
         duration: 1000 },
         alert.index);
    },
     1000 * 3)
}
alertMsg6() {
    let alert = lgAlert.show({ tipType: this.state.successLoading ? 'success' : 'loading',
     duration: 0,
     position: { xAxis: 'right',
     yAxis: 'center' },
     description: '实时通讯的智子制造过程' });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success',
         content: "加载成功",
         duration: 0,
         isShowCloseBtn: true,
         description: "How do you spell color? You’ll see other writers do it two ways—the one we’ve already used in this paragraph,
         and another one—colour. Neither of the spellings is wrong,
         and they both mean exactly the same thing. Still,
         the two spellings are slightly different,
         so there has to be something to it,
         right? Let’s see. " },
         alert.index);
    },
     1000 * 3)
}
alertMsg7() {
    let alert = lgAlert.show({ isShowCloseBtn: true,
         tipType: this.state.successLoading ? 'success' : 'loading',
     duration: 0,
     position: { xAxis: 'left',
     yAxis: 'bottom' },
 });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success',
         content: "加载成功",
         duration: 1000 },
         alert.index);
    },
     1000 * 3)
}
alertMsg8() {
    let alert = lgAlert.show({ isShowCloseBtn: true,
         tipType: this.state.successLoading ? 'success' : 'loading',
     duration: 0,
     position: { xAxis: 'center',
     yAxis: 'bottom' } });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success',
         content: "加载成功",
         duration: 1000 },
         alert.index);
    },
     1000 * 3)
}
alertMsg9() {
    let alert = lgAlert.show({ isShowCloseBtn: true,
         tipType: this.state.successLoading ? 'success' : 'loading',
     duration: 0,
     position: { xAxis: 'right',
     yAxis: 'bottom' } });
    setTimeout(() => {
        lgAlert.show({ tipType: 'success',
         content: "加载成功",
         duration: 1000 },
         alert.index);
    },
     1000 * 3)
}
alertMsgCustom() {
    let alert = lgAlert.show({ isShowCloseBtn: true,
         tipType: 'warning',
     position: { xOffset: '-50%',
     xAxis: '50%',
     yAxis: 32,
     showDirection: 'center',
     showAlign: 'top' } });
    setTimeout(() => {
        lgAlert.show({ tipType: 'error',
         content: "加载失败~",
         duration: 1000 * 2,
         isShowCloseBtn: false,
     },
         alert.index);
    }, 1000 * 3)
}
clearAlertMsgCustom() {
    lgAlert.show({ tipType: 'closeAll' })
}
<div>
    <div>
        <input type="button" value="左上" onClick={this.alertMsg} className='comment_position alert_position_left_top' />
        <input type="button" value="中上" onClick={this.alertMsg2} className='comment_position alert_position_left_top' />
        <input type="button" value="右上" onClick={this.alertMsg3} className='comment_position alert_position_left_top' />
        <input type="button" value="中左" onClick={this.alertMsg4} className='comment_position alert_position_left_top' />
        <input type="button" value="中中" onClick={this.alertMsg5} className='comment_position alert_position_left_top' />
        <input type="button" value="中右" onClick={this.alertMsg6} className='comment_position alert_position_left_top' />
        <input type="button" value="下左" onClick={this.alertMsg7} className='comment_position alert_position_left_top' />
        <input type="button" value="下中" onClick={this.alertMsg8} className='comment_position alert_position_left_top' />
        <input type="button" value="下右" onClick={this.alertMsg9} className='comment_position alert_position_left_top' />
    </div>
    <div>
        <input type="button" value="自定义位置" onClick={this.alertMsgCustom} className='comment_position alert_position_left_top' />
    </div>
    <div>
        <input type="button" value="清除所有的弹窗" onClick={this.clearAlertMsgCustom} className='comment_position alert_position_left_top' />
    </div>
<div>
                                        `
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div>
                        <div className='components-show-example'>
                            <div className='components-show-example-title'>A款-LgUI-Alert:</div>
                            <div>
                                <input type="button" value="success" onClick={this.alertASuccess} className='comment_position alert_position_left_top' />
                                <input type="button" value="warning" onClick={this.alertAWarning} className='comment_position alert_position_left_top' />
                                <input type="button" value="info" onClick={this.alertAInfo} className='comment_position alert_position_left_top' />
                                <input type="button" value="question" onClick={this.alertAQuestion} className='comment_position alert_position_left_top' />
                                <input type="button" value="error" onClick={this.alertAError} className='comment_position alert_position_left_top' />
                            </div>
                            <div className='components-show-steps-code'>
                                <CodeView className='props_container'>
                                    {`
     alertASuccess() {
        let alert = lgAlert.show({ tipType: 'success',
         tipSize: 'mini',
         tipMouldType: 'A',
         duration: 0,
         isShowCloseBtn: true });
    }
    alertAWarning() {
        let alert = lgAlert.show({ tipType: 'warning',
         tipSize: 'small',
         tipMouldType: 'A',
         containerClassName: 'weishoujiong',
         duration: 0,
         description: "How do you spell color? You’ll see other writers do it two ways—the one we’ve already used in this paragraph,
         and another one—colour. " });
    }
    alertAInfo() {
        let alert = lgAlert.show({ tipType: 'info',
         reverse: true,
         tipMouldType: 'A',
         duration: 0 });

    }
    alertAError() {
        let alert = lgAlert.show({
            tipType: 'error',
             tipMouldType: 'A',
             tipSize: 'big',
             isShowCloseBtn: true,
             duration: 0,
             description: 'There are a couple of ways you can choose which spelling to use.'
        });
    }
    alertAQuestion() {
        let alert = lgAlert.show({
        tipType: 'question',
         tipMouldType: 'A',
         duration: 0,
         isShowCloseBtn: true,
         description: 'There are a couple of ways you can choose which spelling to use. You can,
         for example,
         choose the spelling that’s prevalent in the country you’re from—if you’re an American,
         use color. If you’re from any of the Commonwealth countries,
         use colour. If English is not your first language,
         use the spelling you were taught.
        If you’re still not sure which to choose,
         or if you’re writing for an international audience,
         the best thing to do is choose one of the spellings and stick with it. In other words, choose consistency. ' });
    }
    <div>
        <input type="button" value="success" onClick={this.alertASuccess} className='comment_position alert_position_left_top' />
        <input type="button" value="warning" onClick={this.alertAWarning} className='comment_position alert_position_left_top' />
        <input type="button" value="info" onClick={this.alertAInfo} className='comment_position alert_position_left_top' />
        <input type="button" value="question" onClick={this.alertAQuestion} className='comment_position alert_position_left_top' />
        <input type="button" value="error" onClick={this.alertAError} className='comment_position alert_position_left_top' />
    </div>
    `}
                                </CodeView>
                            </div>
                        </div>
                        <div className='components-show-example'>

                            <div className='components-show-example-title'>E款-ElementUI-Alert:</div>

                            <div>
                                <input type="button" value="success" onClick={this.alertSuccess} className='comment_position alert_position_left_top' />
                                <input type="button" value="warning" onClick={this.alertWarning} className='comment_position alert_position_left_top' />
                                <input type="button" value="info" onClick={this.alertInfo} className='comment_position alert_position_left_top' />
                                <input type="button" value="error" onClick={this.alertError} className='comment_position alert_position_left_top' />
                            </div>
                            <div className='components-show-steps-code'>
                                <CodeView className='props_container'>
                                    {`
alertSuccess() {
    let alert = lgAlert.show({ tipType: 'success',
     tipMouldType: 'E',
     duration: 0,
     closable: true,
     closeText: "关闭",
     description: "据央视新闻消息，陕西西安1... " });
}
alertWarning() {
    let alert = lgAlert.show({ tipType: 'warning',
     tipMouldType: 'E',
     duration: 0,
     description: "How do you spell color? You’ll see other writers do it two ways—the one we’ve already used in this paragraph,
     the two spellings are slightly different,
     so there has to be something to it,
     right? Let’s see. " });
}
alertInfo() {
    let alert = lgAlert.show({ tipType: 'info',
     tipMouldType: 'E',
     duration: 0,
     isShowIcon: false });
}
alertError() {
    let alert = lgAlert.show({
        tipType: 'error',
         tipMouldType: 'E',
         isShowCloseBtn: true,
         description: 'There are a couple of ways you can choose which spelling to use. You can,
     the best thing to do is choose one of the spellings and stick with it. In other words,
     choose consistency. ' });
}
<div>
    <input type="button" value="success" onClick={this.alertSuccess} className='comment_position alert_position_left_top' />
    <input type="button" value="warning" onClick={this.alertWarning} className='comment_position alert_position_left_top' />
    <input type="button" value="info" onClick={this.alertInfo} className='comment_position alert_position_left_top' />
    <input type="button" value="error" onClick={this.alertError} className='comment_position alert_position_left_top' />
</div>
                                        `}
                                </CodeView>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    }
}


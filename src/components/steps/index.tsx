import './index.scss';
import { Component, useState } from 'react'


interface Props {
    className?: string,
    style?: object,
    type: 'A' | 'B' | 'C' | 'D',
    stepList: any[],
    stepIndex: number,//当前步骤
    colorType?:string
    onClick?: () => void,
}
const LgStep = (props: Props): any => {
    //console.log(props)
    if (props.type == 'A')
        return <StepA {...props} />
    else if (props.type == 'B')
        return <StepB {...props} />
    else if (props.type == 'C')
        return <StepC {...props} />
    else if (props.type == 'D')
        return <StepD {...props} />
}
function StepA(props: Props) {
    return (
        <div className={`step_item ${props.className || ""}`} style={props.style || {}}>
            {
                props.stepList.map((item, index) => {
                    var stepLiBg: any = "", stepNameColor: any = ""
                    if (index < props.stepIndex - 1) {
                        stepLiBg = props.colorType?props.colorType:"lg-skin-s1"
                    } else if (index == props.stepIndex - 1) {
                        stepLiBg = "at_present"; stepNameColor = "stepNameColor"
                    }
                    return (
                        <div className={stepLiBg} key={"A"+index}>
                            <div key={index} className={`step_li left`}>
                                <div className={'step_li_bg ' + stepLiBg}>
                                    {index + 1}
                                    <div className='step_complete' style={{ display: index < props.stepIndex - 1 ? "" : "none" }}></div>
                                </div>
                                <div className={`step_name ${stepNameColor}`}>{item}</div>
                            </div>
                            <div className={`step_allow left`} style={{ display: index == props.stepList.length - 1 ? "none" : "" }}></div>
                        </div>
                    )
                })
            }
        </div>
    )
}
function StepB(props: Props) {
    var colorType=props.colorType?props.colorType:"lg-skin-s1"
    return (
        <div className={`step_itemB clear ${colorType} ${props.className}`} style={props.style || {}}>
            {
                props.stepList.map((item, index) => {
                    var stepLiBg: any = "", stepBline: any = "", stepBname: any = ""
                    if (index < props.stepIndex - 1) {
                        stepLiBg = "at_before";
                    } else if (index == props.stepIndex - 1) {
                        stepLiBg = "at_present"; stepBline = "afterB_line"; stepBname = "presentB_name"
                    } else {
                        stepLiBg = "at_after"; stepBline = "afterB_line"; stepBname = "afterB_name"
                    }
                    return (
                        <div key={"B"+index} className='stepB_li left'>
                            <div className='stepB_li_bg'>
                                <div className={`stepB_poit ${stepLiBg}`}></div>
                                <div className={`stepB_line ${stepBline}`} style={{ display: index == props.stepList.length - 1 ? "none" : "" }}></div>
                            </div>
                            <div className={`stepB_name clear ${stepBname}`}>{item}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
function StepC(props: Props) {
    var colorType=props.colorType?props.colorType:"lg-skin-s1"
    return (
        <div className={`step_itemC clear ${colorType} ${props.className}`} style={props.style || {}}>
            {
                props.stepList.map((item, index) => {
                    var stepLiBg: any = ""
                    if (index == 0) {
                        stepLiBg = props.stepIndex == 1 ? "stepC_bg_stepIndex1" : "stepC_bg_first"

                    } else if (index == props.stepList.length - 1) {
                        stepLiBg = props.stepIndex == props.stepList.length ? "stepC_bg_last_cur" : "stepC_bg_last"

                    } else {
                        if (index < props.stepIndex - 1) {
                            stepLiBg = "stepC_bg_before"
                        } else if (index == props.stepIndex - 1) {
                            stepLiBg = "stepC_bg_precent"
                        } else {
                            stepLiBg = "stepC_bg_after"
                        }
                    }

                    return (
                        <div className={`stepC_li left ${stepLiBg}`} style={{ color: index < props.stepIndex ? "#fff" : "", marginLeft: index > 0 ? "-10px" : "", zIndex: props.stepList.length - index }}>
                            <div className='stepC_left left'></div>
                            <div className='stepC_center left'></div>
                            <div className='stepC_right left'></div>
                            <div className='stepC_Name'>{item}</div>
                        </div>
                    )
                })
            }
        </div>
    )
}
function StepD(props: Props) {
    const addLink = () => {
        props.onClick&&props.onClick()
    }
    return (
        <div className={`step_itemD clear ${props.className}`} style={props.style || {}}>
            <div className='stepD_bg_line' style={{ height: (props.stepList.length + 1) * 54 - 27 }}></div>
            {
                props.stepList.map((item, index) => {
                    var stepLeft = ""
                    if (index < props.stepIndex - 1) {
                        stepLeft = "stepD_left_before"
                    } else if (index == props.stepIndex - 1) {
                        stepLeft = "stepD_left_precent"
                    }
                    return (
                        <div data-index={index} key={"stepD" + index} className='stepD_li'>
                            <div className={`stepD_left ${stepLeft}`}></div>
                            <div className='stepD_right oneline' title={item} style={{ color: index == props.stepIndex - 1 ? "#ff6600" : "", fontWeight: index == props.stepIndex - 1 ? "bold" : "" }}>{item}</div>

                        </div>
                    )
                })
            }
            <div className='stepD_li'>
                <div className='stepD_left'></div>
                <div className='stepD_right_add' onClick={addLink}>
                    <span className='add_icon'>+</span>
                    <span>新建环节</span>
                </div>
            </div>
        </div>
    )
}

export default LgStep;

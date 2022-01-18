import './index.scss';
import { Component, useState } from 'react'
interface Props {
    type: 'A' | 'B',
    className?: string,
    style?: object,
    list: any,
    mode?: string
}
const LgTimeline = (props: Props): any => {

    if (props.type == 'A')
        return <TimelineA {...props} />
    else if (props.type == 'B')
        return <TimelineB {...props} />
}
function TimelineA(props: Props) {
    return (
        <div className={`timeline_content ${props.className}`} style={props.style || {}}>
            {
                props.list.map((item: any, index: number) => {
                    var mode = ""
                    if (props.mode == "alternate") {
                        mode = (index % 2) == 0 ? "mode_right" : "mode_left"
                    }
                    return (
                        <div className={`timeline_item ${mode}`}>
                            <div className='timeline-item-dot-wrapper'>
                                <div className='timeline-item-dot-line' style={{ display: index == props.list.length - 1 ? "none" : "", borderColor: item.lineColor }}></div>
                                <div className='timeline-item-dot-content'>
                                    <div className='timeline-item-dot' style={{ backgroundColor: item.dotColor }}></div>
                                </div>
                            </div>
                            <div className='timeline-item-content-wrapper'>
                                <div className='timeline-item-content'>
                                    {item.content}
                                </div>
                                <div className='timeline-item-label'>{item.time}</div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

function TimelineB(props: Props) {
    return (
        <div className={`timeline_contentB ${props.className}`} style={props.style || {}}>
            {
                props.list.map((item: any, index: number) => {

                    return (
                        <div className={`timeline_itemB `}>
                            <div className='timeline-item-dot-wrapper'>
                                <div className='timeline-item-dot-line' style={{ display: index == props.list.length - 1 ? "none" : "", borderColor: item.lineColor }}></div>
                                <div className='timeline-item-dot-content'>
                                    <div className='timeline-item-dot' style={{ backgroundColor: item.dotColor }}></div>
                                </div>
                            </div>

                            <div className='timeline-item-content-wrapper'>
                                <div className='row-justify-start'>
                                    <img className='imgB' src={item.src} width='40'   alt="" />
                                    <div className='' style={{marginBottom:"12px"}}>
                                        <div>{item.title}</div>
                                        <div style={{fontSize:"12px",color:"rgb(78, 89, 105)"}}>{item.content}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                })
            }

        </div>
    )
}

export default LgTimeline;

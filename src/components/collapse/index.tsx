import './index.scss';
import { Component, useState } from 'react'
import { Collapse } from 'element-react'
interface Props {
    className?: string,
    style?: object,
    list: any,
    accordion?: boolean//是否展示多个，默认多个个展示(true:展示单个，false：展示多个)

}
const LgCollapse = (props: Props): any => {
        return <CollapseC {...props} />
}


function CollapseC(props: Props) {
    console.log(props.accordion)
    return (
        <div className={`collapse_content ${props.className}`} style={props.style || {}}>
            <Collapse value="" accordion={props.accordion}>
                {
                    props.list.map((item: any, index: any) => {
                        //console.log(item)
                        var disable = item.disable ? "disable" : ""
                        return (
                            <Collapse.Item key={"C" + index} title={<span className={disable} onClick={(e) => { if (item.disable) e.stopPropagation() }}>{item.title} <span className='disable_span'></span></span>} name={index.toString()}>
                                {
                                    item.list[0].list && item.list[0].list.length > 0 ?
                                        <Collapse value="" accordion={props.accordion}>
                                            {
                                                item.list.map((item2: any, index2: any) => {
                                                    var disable1 = item2.disable ? "disable" : ""
                                                   // console.log(item2)
                                                    return (
                                                        <Collapse.Item key={"c" + index2} title={<span className={disable1} onClick={(e) => { if (item2.disable) e.stopPropagation() }}>{item2.title} <span className='disable_span'></span></span>} name={index2.toString()}>
                                                            {
                                                                item2.list.map((item3: any, index3: any) => {
                                                                    return (
                                                                        <div key={"c1" + index3}>
                                                                            {item3.content}
                                                                        </div>
                                                                    )
                                                                })
                                                            }
                                                        </Collapse.Item>
                                                    )

                                                })
                                            }
                                        </Collapse>
                                        : item.list.map((item1: any, index1: any) => {
                                            return (
                                                <div key={"C1" + index1}>
                                                    {item1.content}
                                                </div>
                                            )
                                        })
                                }
                            </Collapse.Item>
                        )
                    })
                }
            </Collapse>
        </div>
    )
}


export default LgCollapse;

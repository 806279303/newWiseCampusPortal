import './index.scss';
import { Component, useState } from 'react'
interface Props {
    className?: string,
    style?: object,
    type: 'A' | 'B',//A左侧，B右侧
    width?: any
    children?: any,
    visible: boolean,
    onClick: (flag: boolean) => void
}
const LgDrawer = (props: Props): any => {
    const hanleDrawer = () => {
        props.onClick(false)
    }
    var screen = props.visible ? "open_screen" : ""
    var open = props.visible ? (props.type == "A" ? "open_drawerA" : "open_drawerB") : ""
    var style = props.type == "A" ? { width: props.width, left: -props.width } : { width: props.width, right: -props.width }
    return (
        <div className={`drawer ${screen} ${props.className}`} onClick={hanleDrawer} style={props.style || {}}>
            <div className={`drawer_content ${open}`} onClick={(e) => { e.stopPropagation() }} style={style}>
                {props.children}
            </div>
        </div>
    );
}

export default LgDrawer;

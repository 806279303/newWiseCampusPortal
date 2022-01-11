import './index.scss';
import { Component, useState } from 'react'
interface Props {
    className?: string,
    style?: object,
   
}
const LgCollapse = (props: Props): any => {
    return (
        <div className={`${props.className}`} style={props.style || {}}>
            
        </div>
    );
}

export default LgCollapse;

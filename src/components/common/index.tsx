import React from "react";
import './index.scss'

interface IAddBtn{
    text:string
    handClick?:()=>void
}
export const AddBtn = (props:IAddBtn)=>{
    function handClick(){
        props.handClick && props.handClick()
    }
    return (
        <div className="lg-btn-add" onClick={handClick}>
            <div className="img"></div>
            <span>{props.text}</span>
        </div>
    )
}
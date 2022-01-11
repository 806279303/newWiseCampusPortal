import "./index.scss";
import React ,{Component, useState} from 'react';
import CheckBox from "@/components/checkBox";
import BackColor from "wangeditor/dist/menus/back-color";



export interface FliterProps {
    type?: "default" | "radio" //单选多选切换，默认多选
    className?: string,
    style?: object,
    disable?: boolean,
    title?:  "筛选:"| string
    onChange?: (value: any) => void 
}


let filterConfig = [{
    key: "nameA",
    name: "选项A",
    checked: true,
    disable: false
},{
    key: "valueB",
    name: "选项B",
},{
    key: "typec",
    name: "选项C",
   
},{
    key: "typed",
    name: "选项D",

}]

export function Filter(props: FliterProps) {
    const [filtervalue, setFilterValue] = useState(filterConfig);
    const [selectID, setSelectID] = useState<string[]>([])


    /**
     *
     *
     * @param {number} status 按键状态 1为开 0为关
     * @param {*} [backData]    底层数据 
     */
    const onClick = (status: number, backData?: any) => {
        let newArr = filtervalue.concat([])
        if(props.type !== "radio"){
            if(status === 0){
                setSelectID(selectID.concat([backData]))
                if(typeof (props.onChange) === "function"){
                    props.onChange(selectID.concat([backData]))
                }
                
            }else{
                setSelectID(selectID.filter(item => item !== backData))
                if(typeof (props.onChange) === "function"){
                    props.onChange(selectID.filter(item => item !== backData))
                }
            }

        }else{
            if(status === 0){
                newArr.map(item => {
                    item.checked = false;
                    return item
                })
                newArr.map(item => {
                    if(item.key === backData){
                        item.checked = true
                        return item
                    }
                })
                setFilterValue(newArr);
                if(typeof (props.onChange) === "function"){
                    props.onChange(newArr)
                }
            }else{
                newArr.map(item => {
                    if(item.key === backData){
                        item.checked = false
                        return item
                    }
                })
                setFilterValue(newArr);
                if(typeof (props.onChange) === "function"){
                    props.onChange(newArr)
                }
            }
        }
        

    }
    var filterConfigDom = filtervalue.map(item => {
        let disable = item.disable === true ? true : false
        return (
                <CheckBox disable={disable} 
                        type="C" 
                        key = {item.key}
                        status={selectID.includes(item.key) ? 1 : 0} 
                        backData={item.key} 
                        onClick={onClick}>{item.name}
                </CheckBox>
        )
    })
    return (
        <div className="lg-filter-area">
            <span>筛选: </span>
            {filterConfigDom}
        </div>
    )
}
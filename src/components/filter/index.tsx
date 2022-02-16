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
    filterConfig: any[],
    checkValue?: string[]
}




export function Filter(props: FliterProps) {
    const [filtervalue, setFilterValue] = useState(props.filterConfig);
    const [selectID, setSelectID] = useState<string[]>(props.checkValue || [])


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
                setSelectID([backData])
                if(typeof (props.onChange) === "function"){
                    props.onChange([backData])
                }
            }else{
                setSelectID([]);
                if(typeof (props.onChange) === "function"){
                    props.onChange([])
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
            <span>{props.title}</span>
            {filterConfigDom}
        </div>
    )
}
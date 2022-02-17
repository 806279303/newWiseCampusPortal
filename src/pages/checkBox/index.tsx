import CheckBox from "@/components/checkBox";
import { useState } from "react";
import "./index.scss";
import { CodeView } from "@/components/CodeView";
import { AllSkinCover } from "../AllSkinCover";

import './index.scss'

export default () => {
    return (
        <div className="lg_pages_container">
            <h2>G001 Menu导航菜单</h2>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">标签属性</div>
                <CodeView className="code-size">
                    {`
                        interface LgPaginationProps {
                            type?: 'A' | 'B' | 'C' | 'C1' | 'D', 
                            totalPage: number,
                            currentPage: number,
                            onClick: (value: number) => void,
                            className?: string,
                            style?: object,
                            onRef?: (ref: any) => void
                        }
                    `}
                </CodeView>
            </div>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">A款 单选</div>
                <CodeView className="code-size">
                    {`
                        <div className={props.className}>
                            <CheckBox disable={props.disable} status={value == 0 ? 1 : 0} backData={0} onClick={onClick}>选项一</CheckBox>
                            <CheckBox disable={props.disable} status={value == 1 ? 1 : 0} backData={1} onClick={onClick}>选项二</CheckBox>
                        </div>
                    `}
                </CodeView>
                <AllSkinCover>
                    <TypeAItem />
                </AllSkinCover>
                <TypeAItem disable />
            </div>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">B款 复选</div>
                <CodeView className="code-size">
                    {`
                        <div className={props.className}>
                            <CheckBox disable={props.disable} type="B" status={value[0]} backData={0} onClick={onClick}>复选框一</CheckBox>
                            <CheckBox disable={props.disable} type="B" status={value[1]} backData={1} onClick={onClick}>复选框二</CheckBox>
                            <CheckBox disable={props.disable} type="B" status={value[2]} backData={2} onClick={onClick}>复选框三</CheckBox>
                        </div>
                    `}
                </CodeView>
                <AllSkinCover>
                    <TypeBItem />
                </AllSkinCover>
            </div>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">C款 角型复选</div>
                <CodeView className="code-size">
                    {`
                        <div className={props.className}>
                            <CheckBox disable={props.disable} type="C" status={value[0]} backData={0} onClick={onClick}>角形复选一</CheckBox>
                            <CheckBox disable={props.disable} type="C" status={value[1]} backData={1} onClick={onClick}>角形复选二</CheckBox>
                        </div>
                    `}
                </CodeView>
                <AllSkinCover>
                    <TypeCItem />
                </AllSkinCover>
            </div>
        </div>
    )
}
function TypeAItem(props: { className?: string, disable?: boolean }) {
    const [value, setVal] = useState(1);
    const onClick = (value: number, backData?: any) => {
        setVal(backData);
    }
    return (
        <div className={props.className}>
            <CheckBox disable={props.disable} status={value == 0 ? 1 : 0} backData={0} onClick={onClick}>选项一</CheckBox>
            <CheckBox disable={props.disable} status={value == 1 ? 1 : 0} backData={1} onClick={onClick}>选项二</CheckBox>
        </div>
    )
}
function TypeBItem(props: { className?: string, disable?: boolean }) {
    const [value, setValue] = useState([0, 1, 2]);
    const onClick = (status: number, backData?: any) => {
        value[backData] = status ? 0 : 1;
        setValue([value[0], value[1], value[2]]);
    }
    return (
        <div className={props.className}>
            <CheckBox disable={props.disable} type="B" status={value[0]} backData={0} onClick={onClick}>复选框一</CheckBox>
            <CheckBox disable={props.disable} type="B" status={value[1]} backData={1} onClick={onClick}>复选框二</CheckBox>
            <CheckBox disable={props.disable} type="B" status={value[2]} backData={2} onClick={onClick}>复选框三</CheckBox>
        </div>
    )
}

function TypeCItem(props: { className?: string, disable?: boolean }) {
    const [value, setValue] = useState([1, 0]);
    const onClick = (status: number, backData?: any) => {
        value[backData] = status ? 0 : 1;
        setValue([value[0], value[1]]);
    }
    return (
        <div className={props.className}>
            <CheckBox disable={props.disable} type="C" status={value[0]} backData={0} onClick={onClick}>角形复选一</CheckBox>
            <CheckBox disable={props.disable} type="C" status={value[1]} backData={1} onClick={onClick}>角形复选二</CheckBox>
        </div>
    )
}

import CheckBox from "@/components/checkBox";
import { useState } from "react";
import "./index.scss";
export default () => {
    return (
        <div>
            <div className="left">
                <TypeAItem className="lg-skin-s1" />
                <TypeAItem className="lg-skin-s2" />
                <TypeAItem className="lg-skin-s3" />
                <TypeAItem className="lg-skin-s4" />
                <TypeAItem className="lg-skin-s5" />
                <TypeAItem className="lg-skin-k1" />
                <TypeAItem className="lg-skin-k2" />
                <TypeAItem className="lg-skin-k2" disable />
            </div>
            <div className="left">
                <TypeBItem className="lg-skin-s1" />
                <TypeBItem className="lg-skin-s2" />
                <TypeBItem className="lg-skin-s3" />
                <TypeBItem className="lg-skin-s4" />
                <TypeBItem className="lg-skin-s5" />
                <TypeBItem className="lg-skin-k1" />
                <TypeBItem className="lg-skin-k2" />
                <TypeBItem className="lg-skin-k2" disable />
            </div>
            <div className="left">
                <TypeCItem className="lg-skin-s1" />
                <TypeCItem className="lg-skin-s2" />
                <TypeCItem className="lg-skin-s3" />
                <TypeCItem className="lg-skin-s4" />
                <TypeCItem className="lg-skin-s5" />
                <TypeCItem className="lg-skin-k1" />
                <TypeCItem className="lg-skin-k2" />
            </div>
        </div>
    )
}
function TypeAItem(props: {className: string, disable?: boolean}) {
    const [value, setVal] = useState(1);
    const onClick = (value: number, backData?: any) => {
        setVal(backData);
    }
    return (
        <div className={props.className}>
            <CheckBox disable={props.disable} status={value == 0 ? 1 : 0} backData={0} onClick={onClick}>附近的撒可富的</CheckBox>
            <CheckBox disable={props.disable} status={value == 1 ? 1 : 0} backData={1} onClick={onClick}>附近的撒可富的</CheckBox>
        </div>
    )
}
function TypeCItem(props: {className: string, disable?: boolean}) {
    const [value, setValue] = useState([1, 0]);
    const onClick = (status: number, backData?: any) => {
        value[backData] = status ? 0 : 1;
        setValue([value[0], value[1]]);
    }
    return (
        <div className={props.className}>
            <CheckBox disable={props.disable} type="C" status={value[0]} backData={0} onClick={onClick}>附近的撒可富的</CheckBox>
            <CheckBox disable={props.disable} type="C" status={value[1]} backData={1} onClick={onClick}>附近的撒可富的</CheckBox>
        </div>
    )
}
function TypeBItem(props: {className: string, disable?: boolean}) {
    const [value, setValue] = useState([0, 1, 2]);
    const onClick = (status: number, backData?: any) => {
        value[backData] = status ? 0 : 1;
        setValue([value[0], value[1], value[2]]);
    }
    return (
        <div className={props.className}>
            <CheckBox disable={props.disable} type="B" status={value[0]} backData={0} onClick={onClick}>附近的撒可富的</CheckBox>
            <CheckBox disable={props.disable} type="B" status={value[1]} backData={1} onClick={onClick}>附近的撒可富的</CheckBox>
            <CheckBox disable={props.disable} type="B" status={value[2]} backData={2} onClick={onClick}>附近的撒可富的</CheckBox>
        </div>
    )
}


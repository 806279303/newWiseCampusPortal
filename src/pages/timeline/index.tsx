import './index.scss';
import LgTimeline from "@/components/timeline"
import { Component, useState } from 'react'
import { Radio } from 'element-react'

export default () => {
    const [value, setRadioValue] = useState<any>('left');
    const onChange = (value: any) => {
        setRadioValue(value)
    }
    var list = [
        { time: "2022-01-01", content: "可以传入iconBg改变节点小圆点的颜色，可以传入lineColor改变节点线条的颜色。", dotColor: "#e6e6e6", lineColor: "" },
        { time: "2022-01-02", content: "iconBg，lineColor可传可不传，不传则是默认值" },
        { time: "2022-01-02", content: "iconBg，lineColor可传可不传，不传则是默认值", dotColor: "", lineColor: "" }
    ]
    var list2 = [
        { title: "Toutiao", content: "Founded in 201222", dotColor: "", lineColor: "", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },
        { title: "Xigua Video", content: "Founded in 2022811", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },
        { title: "Toutiao", content: "Founded in 2018111", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" }
    ]
    return (
        <div className="timeline" style={{ marginLeft: 20 }}>
            <div>A款</div>
            <div>
                <Radio value="left" checked={value === "left"} onChange={onChange}>left</Radio>
                <Radio value="alternate" checked={value === "alternate"} onChange={onChange}>alternate</Radio>
            </div>
            <br />
            <div style={{ width: "400px" }}>
                <LgTimeline mode={value} list={list} type='A' />
            </div>
            <br />
            <div>B横向时间轴</div>
            <br />
            <div style={{ width: "800px" }}>
                <LgTimeline list={list2} type='B' />
            </div>
        </div>
    );
}

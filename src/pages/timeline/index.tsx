import './index.scss';
import LgTimeline from "@/components/timeline"
import { useState } from 'react'
import { Radio } from 'element-react'
import { CodeView } from "@/components/CodeView";
import { DemoView } from "@/components/demoView";
import { DemoPage } from "../demoPage";

export default () => {
    const [value, setRadioValue] = useState<any>('left');
    const onChange = (value: any) => {
        setRadioValue(value)
    }
    let list = [
        { time: "2022-01-01", content: "可以传入iconBg改变节点小圆点的颜色，可以传入lineColor改变节点线条的颜色。", dotColor: "#e6e6e6", lineColor: "" },
        { time: "2022-01-02", content: "iconBg，lineColor可传可不传，不传则是默认值" },
        { time: "2022-01-02", content: "iconBg，lineColor可传可不传，不传则是默认值", dotColor: "", lineColor: "" }
    ]
    let list2 = [
        { title: "Toutiao", content: "Founded in 201222", dotColor: "", lineColor: "", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },
        { title: "Xigua Video", content: "Founded in 2022811", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },
        { title: "Toutiao", content: "Founded in 2018111", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" }
    ]
    return (
        <DemoPage title="G020时间线" className="lg-breadcrumb-demo-page"
            importCode={`
            import LgTimeline from "@/components/timeline"
`}
            interfaceCode={`
            interface LgLoadingProps{
                type: 'A' | 'B',
                list: any,
                mode?: string//left:左对齐，alternat//交叉显示,
                className?: string,
                style?: object,
             }
`}
        >
            <DemoView title="A款代码样例" code={`
                var list = [
                    { time: "2022-01-01", content: "可以传入iconBg改变节点小圆点的颜色，可以传入lineColor改变节点线条的颜色。", dotColor: "#e6e6e6", lineColor: "" },
                    { time: "2022-01-02", content: "iconBg，lineColor可传可不传，不传则是默认值" },
                    { time: "2022-01-02", content: "iconBg，lineColor可传可不传，不传则是默认值", dotColor: "", lineColor: "" }
                ]

              <LgTimeline mode={"left"} list={list} type='A' />
              <LgTimeline mode={"alternate"} list={list} type='A' />
          `}>
                <div>
                    <Radio value="left" checked={value === "left"} onChange={onChange}>left</Radio>
                    <Radio value="alternate" checked={value === "alternate"} onChange={onChange}>alternate</Radio>
                </div>
                <br />
                <div style={{ width: "400px" }}>
                    <LgTimeline mode={value} list={list} type='A' />
                </div>

            </DemoView>
            <DemoView title="B横向时间轴" code={`
                var list2 = [
                    { title: "Toutiao", content: "Founded in 201222", dotColor: "", lineColor: "", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },
                    { title: "Xigua Video", content: "Founded in 2022811", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },
                    { title: "Toutiao", content: "Founded in 2018111", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" }
                ]
                    
                <LgTimeline list={list2} type='B' />
          `}>
                <div style={{ width: "800px" }}>
                    <LgTimeline list={list2} type='B' />
                </div>

            </DemoView>
        </DemoPage>
    );
}

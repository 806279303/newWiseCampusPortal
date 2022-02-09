import './index.scss';
import LgTimeline from "@/components/timeline"
import { useState } from 'react'
import { Radio } from 'element-react'
import { CodeView } from "@/components/CodeView";

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
        <div className="timeline" >
            <div>在页面文件中引入组件</div>
            <CodeView className="code-size">
                {`
               import LgTimeline from "@/components/timeline"
            `}
            </CodeView>
            <div>标签属性详解</div>
            <CodeView className="code-size">
                {`interface LgLoadingProps{
               type: 'A' | 'B',
               list: any,
               mode?: string//left:左对齐，alternat//交叉显示,
               className?: string,
               style?: object,
            }
          `}
            </CodeView>
            <div>A款代码样例</div>
            <CodeView className="code-size">
                {`
                var list = [
                    { time: "2022-01-01", content: "可以传入iconBg改变节点小圆点的颜色，可以传入lineColor改变节点线条的颜色。", dotColor: "#e6e6e6", lineColor: "" },
                    { time: "2022-01-02", content: "iconBg，lineColor可传可不传，不传则是默认值" },
                    { time: "2022-01-02", content: "iconBg，lineColor可传可不传，不传则是默认值", dotColor: "", lineColor: "" }
                ]

              <LgTimeline mode={"left"} list={list} type='A' />
              <LgTimeline mode={"alternate"} list={list} type='A' />
          `}
            </CodeView>
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
            <CodeView className="code-size">
                {`
               var list2 = [
                { title: "Toutiao", content: "Founded in 201222", dotColor: "", lineColor: "", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },
                { title: "Xigua Video", content: "Founded in 2022811", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" },
                { title: "Toutiao", content: "Founded in 2018111", src: "https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/b5d834b83708a269b4562924436eac48.png~tplv-uwbnlip3yd-png.png" }
            ]
                
            <LgTimeline list={list2} type='B' />
          `}
            </CodeView>
            <div style={{ width: "800px" }}>
                <LgTimeline list={list2} type='B' />
            </div>
        </div>
    );
}

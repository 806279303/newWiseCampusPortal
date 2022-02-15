import {LgTag} from "@/components/Tag";
import {Component} from "react";
import "./index.scss"
import {CodeView} from "@/components/CodeView";

export default class Tag extends Component<{}, {}> {

  render() {
    return (
      <div className="lg-tag-demo">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
               import {LgTag} from "@/components/Tag";
          `}
        </CodeView>

        <div>标签属性详解</div>
        <CodeView className="code-size">
          {`interface LgTagProps{
               type?: "A" | "B" | "C" | "D" // 款式选择，"A"、"B"、 "C"、"D",可空，默认为A
               onClick?(): void //点击事件
               className?: string
               style?: CSSProperties | undefined
               
               /* B款专用属性 */
               tagBColorType?: "primary" | "success" | "warning" | "disabled" //对应不同的颜色，默认值primary
               baseSize?: number //标签可以缩放，默认值是64，建议不要小于默认值
               
               /* C款专用属性 */
               tagCColorType?: "inProgress" | "notStart" | "undone" | "withdrawn" | "delay" //对应不同的颜色，默认值inProgress
               baseSize?: number //标签可以缩放，默认值是100，建议不要小于默认值
               
                /* D款专用属性 */
                tagDColorType?: "primary" | "success" | "warning" | "disabled" //对应不同的颜色，默认值primary
                baseSize?: number //标签可以缩放，默认值是84，建议不要小于默认值
            }
          `}
        </CodeView>


        <div>A款代码样例</div>
        <CodeView className="code-size">
          {`
            <LgTag>标签一</LgTag>
          `}
        </CodeView>
        <div className="lg-tag-a-demo">
          <LgTag>标签一</LgTag>
        </div>

        <div>B款代码样例</div>
        <CodeView className="code-size">
          {`
            <>
              <LgTag type="B">标签一</LgTag>
              <LgTag type="B" tagBColorType="success">标签二</LgTag>
              <LgTag type="B" tagBColorType="warning">标签三</LgTag>
              <LgTag type="B" tagBColorType="disabled">标签四</LgTag>
            </>
          `}
        </CodeView>
        <div className="lg-tag-b-demo">
          <LgTag type="B">标签一</LgTag>
          <LgTag type="B" tagBColorType="success">标签二</LgTag>
          <LgTag type="B" tagBColorType="warning">标签三</LgTag>
          <LgTag type="B" tagBColorType="disabled">标签四</LgTag>
        </div>

        <div>C款代码样例</div>
        <CodeView className="code-size">
          {`
            <>
              <LgTag type="C" tagCColorType="inProgress">状态一</LgTag>
              <LgTag type="C" tagCColorType="notStart">状态二</LgTag>
              <LgTag type="C" tagCColorType="undone">状态三</LgTag>
              <LgTag type="C" tagCColorType="withdrawn">状态四</LgTag>
              <LgTag type="C" tagCColorType="delay">状态五</LgTag>
            </>
          `}
        </CodeView>

        <div className="lg-tag-c-demo">
          <LgTag type="C" tagCColorType="inProgress">状态一</LgTag>
          <LgTag type="C" tagCColorType="notStart">状态二</LgTag>
          <LgTag type="C" tagCColorType="undone">状态三</LgTag>
          <LgTag type="C" tagCColorType="withdrawn">状态四</LgTag>
          <LgTag type="C" tagCColorType="delay">状态五</LgTag>
        </div>

        <div>D款代码样例</div>
        <CodeView className="code-size">
          {`
            <>
              <LgTag type="D">标签一</LgTag>
              <LgTag type="D" tagDColorType="success">标签二</LgTag>
              <LgTag type="D" tagDColorType="warning">标签三</LgTag>
              <LgTag type="D" tagDColorType="disabled">标签四</LgTag>
            </>
          `}
        </CodeView>

        <div className="lg-tag-d-demo">
          <LgTag type="D">标签一</LgTag>
          <LgTag type="D" tagDColorType="success">标签二</LgTag>
          <LgTag type="D" tagDColorType="warning">标签三</LgTag>
          <LgTag type="D" tagDColorType="disabled">标签四</LgTag>
        </div>
      </div>
    )
  }
}
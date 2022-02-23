import {LgTag} from "@/components/Tag";
import {Component} from "react";
import "./index.scss"
import {CodeView} from "@/components/CodeView";
import {DemoView} from "@/components/demoView";
import {DemoPage} from "../demoPage";

export default class Tag extends Component<{}, {}> {

  render() {
    return (
      <DemoPage title="G019标记/标签" className="lg-tag-demo"
                importCode={`
                    import {LgTag} from "@/components/Tag";
                `}
                interfaceCode={`interface LgTagProps{
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
              `}>
        <DemoView title="A款圆角按钮型" code={`<LgTag>标签一</LgTag>`}>
          <LgTag>标签一</LgTag>
        </DemoView>

        <DemoView title="B款彩带性"
                  code={`
                        <>
                            <LgTag type="B">标签一</LgTag>
                            <LgTag type="B" tagBColorType="success">标签二</LgTag>
                            <LgTag type="B" tagBColorType="warning">标签三</LgTag>
                            <LgTag type="B" tagBColorType="disabled">标签四</LgTag>
                          </>
            `}>
          <div className="lg-tag-b-demo">
            <LgTag type="B">标签一</LgTag>
            <LgTag type="B" tagBColorType="success">标签二</LgTag>
            <LgTag type="B" tagBColorType="warning">标签三</LgTag>
            <LgTag type="B" tagBColorType="disabled">标签四</LgTag>
          </div>
        </DemoView>

        <DemoView title="C款图章型"
                  code={`
                            <>
                              <LgTag type="C" tagCColorType="inProgress">状态一</LgTag>
                              <LgTag type="C" tagCColorType="notStart">状态二</LgTag>
                              <LgTag type="C" tagCColorType="undone">状态三</LgTag>
                              <LgTag type="C" tagCColorType="withdrawn">状态四</LgTag>
                              <LgTag type="C" tagCColorType="delay">状态五</LgTag>
                            </>
                    `}>
          <div className="lg-tag-c-demo">
            <LgTag type="C" tagCColorType="inProgress">状态一</LgTag>
            <LgTag type="C" tagCColorType="notStart">状态二</LgTag>
            <LgTag type="C" tagCColorType="undone">状态三</LgTag>
            <LgTag type="C" tagCColorType="withdrawn">状态四</LgTag>
            <LgTag type="C" tagCColorType="delay">状态五</LgTag>
          </div>
        </DemoView>

        <DemoView title="D款侧边型"
                  code={`
                            <>
                              <LgTag type="D">标签一</LgTag>
                              <LgTag type="D" tagDColorType="success">标签二</LgTag>
                              <LgTag type="D" tagDColorType="warning">标签三</LgTag>
                              <LgTag type="D" tagDColorType="disabled">标签四</LgTag>
                            </>
                    `}>
          <div className="lg-tag-d-demo">
            <LgTag type="D">标签一</LgTag>
            <LgTag type="D" tagDColorType="success">标签二</LgTag>
            <LgTag type="D" tagDColorType="warning">标签三</LgTag>
            <LgTag type="D" tagDColorType="disabled">标签四</LgTag>
          </div>
        </DemoView>
      </DemoPage>
    )
  }
}
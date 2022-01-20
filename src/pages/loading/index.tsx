import {Component} from "react";
import {LgLoading} from "@/components/loading";
import "./index.scss";
import {AllSkinCover} from "../AllSkinCover";
import {BaseProps} from "../../type/BaseProps";
import {CodeView} from "@/components/CodeView";

export default class Loading extends Component<{}, {}> {

  componentDidMount() {
  }

  render() {
    return (
      <div className="lg-loading-demo">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
               import {LgLoading} from "@/components/loading";
            `}
        </CodeView>

        <div>标签属性详解</div>
        <CodeView className="code-size">
          {`interface LgBreadcrumbProps{
               type?: "A" | "B" | "C" // 款式选择，"A"、"B"、 "C",可空，默认为A
               tip?: string  //提示词，可空，默认为”加载中...“
               
               /*A款专用属性*/
               size?: "medium" | "large" //大小，可空，默认"large"
               tipAlign?: "bottom" | "right" //提示词的位置，可空，默认"bottom"
               
               /* B款专用属性 */
               showIcon?: boolean //是否显示动画，可空，默认false
               animeType?: "A" | "B" //动画类型，可空，默认"A"
               
               /* C款专用属性 */
               innerText?: boolean //是否内置百分比，可空，默认false
               percentage?: number //当前进度,可空，默认0
               status?: "success" | "exception" | "warning" //当前状态
               width?: number //线条长度
               height?: number //线条高度
            }
          `}
        </CodeView>

        <div>A款代码样例</div>
        <CodeView className="code-size">
          {`
            <>
            // 基本使用
            <LgLoading/>
            
            // 修改尺寸
            <LgLoading tip="default=large"/>
            <LgLoading tip="large"/>
            <LgLoading size="medium" tip="medium"/>
            
            //修改提示词位置
            <LgLoading tip="default=bottom"/>
            <LgLoading tip="right" tipAlign="right"/>
            <LgLoading tip="bottom"/>
            </>
          `}
        </CodeView>
        <TypeLoadingFrame title="基本使用" subtitle="简单的 Loading 状态，包裹需要显示加载态的组件。" className="normal-use">
          <AllSkinCover>
            <LgLoading/>
          </AllSkinCover>
        </TypeLoadingFrame>
        <TypeLoadingFrame className="size-demo" title="动画尺寸" subtitle="通过size设置Loading动画的尺寸">
          <div className="loading-size-list">
            <LgLoading tip="default=large"/>
            <LgLoading tip="large"/>
            <LgLoading size="medium" tip="medium"/>
          </div>
        </TypeLoadingFrame>
        <TypeLoadingFrame className="align-demo" title="自定义提示语及其位置"
                          subtitle="通过tip自定义加载提示语，通过tipAlign设置提示语的位置，目前支持 right / bottom (default)。">
          <div className="loading-align-list">
            <LgLoading tip="default=bottom"/>
            <LgLoading tip="right" tipAlign="right"/>
            <LgLoading tip="bottom"/>
          </div>
        </TypeLoadingFrame>


        <div style={{paddingTop: "10px"}}>B款代码样例</div>
        <CodeView className="code-size">
          {`
            <>
            //纯文字
            <LgLoading type="B"/>
            //动画A
            <LgLoading type="B" showIcon tip=""/>
            //动画B
            <LgLoading type="B" showIcon tip="" animeType="B"/>
            </>
          `}
        </CodeView>

        <TypeLoadingFrame className="type-b-demo" title="B款" subtitle="B款有三种，纯文字款，带动画自旋，带动画长度变动">
          <div className="loading-align-list">
            <LgLoading type="B"/>
            <LgLoading type="B" showIcon tip=""/>
            <LgLoading type="B" showIcon tip="" animeType="B"/>
          </div>
        </TypeLoadingFrame>

        <div style={{paddingTop: "10px"}}>C款代码样例</div>
        <CodeView className="code-size">
          {`
            <>
              /*百分比外置*/
              <LgLoading percentage={50} type="C"/>
              <LgLoading percentage={100} type="C"/>
              <LgLoading percentage={100} type="C" status="success"/>
              <LgLoading percentage={100} type="C" status="warning"/>
              <LgLoading percentage={50} type="C" status="exception"/>
              
              /*百分比外置*/
              <LgLoading innerText percentage={50} type="C"/>
              <LgLoading innerText percentage={100} type="C"/>
              <LgLoading innerText percentage={100} type="C" status="success"/>
              <LgLoading innerText percentage={100} type="C" status="warning"/>
              <LgLoading innerText percentage={50} type="C" status="exception"/>
            </>
          `}
        </CodeView>

        <TypeLoadingFrame className="type-c-demo" title="C款" subtitle="C款线条款，百分比外置">
          <div className="loading-list-c">
            <LgLoading percentage={50} type="C"/>
            <LgLoading percentage={100} type="C"/>
            <LgLoading percentage={100} type="C" status="success"/>
            <LgLoading percentage={100} type="C" status="warning"/>
            <LgLoading percentage={50} type="C" status="exception"/>
          </div>
        </TypeLoadingFrame>

        <TypeLoadingFrame className="type-c-demo-inner" title="C款" subtitle="C款线条款，百分比内置">
          <div className="loading-list-c">
            <LgLoading innerText percentage={50} type="C"/>
            <LgLoading innerText percentage={100} type="C"/>
            <LgLoading innerText percentage={100} type="C" status="success"/>
            <LgLoading innerText percentage={100} type="C" status="warning"/>
            <LgLoading innerText percentage={50} type="C" status="exception"/>
          </div>
        </TypeLoadingFrame>

      </div>
    )
  }
}

interface TypeLoadingFrameProps {
  title: string
  subtitle: string
}

const TypeLoadingFrame = (props: TypeLoadingFrameProps & BaseProps) => {
  return (
    <div className={`type-a-loading-frame ${props.className || ""}`}>
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
      <div className="split-line"/>
      <div className="loading-list">
        {
          props.children
        }
      </div>
    </div>
  )
}
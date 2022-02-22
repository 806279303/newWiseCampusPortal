import {Component} from "react";
import {LgLoading} from "@/components/loading";
import "./index.scss";
import {BaseProps} from "../../type/BaseProps";
import {DemoPage} from "../demoPage";
import {DemoView} from "@/components/demoView";

export default class Loading extends Component<{}, {}> {

  componentDidMount() {
  }

  render() {
    return (
      <DemoPage className="lg-loading-demo" title="G016加载/进度条" subtitle="常用加载条"
                importCode={`
                    import {LgLoading} from "@/components/loading";
                `}
                interfaceCode={`
                  interface LgLoadingProps{
                     type?: "A" | "B" | "C" // 款式选择，"A"、"B"、 "C",可空，默认为A
                     tip?: string  //提示词，可空，默认为”加载中...“， C款无效
                     
                     /*A款专用属性*/
                     size?: "medium" | "large" //大小，可空，默认"large"
                     tipAlign?: "bottom" | "right" //提示词的位置，可空，默认"bottom"
                     
                     /* B款专用属性 */
                     showIcon?: boolean //是否显示动画，可空，默认false
                     animeType?: "A" | "B" //动画类型，可空，默认"A"。注意：B类型动画不支持IE
                     
                     /* C款专用属性 */
                     innerText?: boolean //是否内置百分比，可空，默认false
                     percentage?: number //当前进度,可空，默认0
                     status?: "success" | "exception" | "warning" //当前状态
                     width?: number //线条长度
                     height?: number //线条高度
                  }
                `}>
        <DemoView title="A款代码样例"
                  code={`
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
                    `}>
          <div className="lg-loading-horizontal-show">
            <LgLoading/>
            <LgLoading tip="default=large"/>
            <LgLoading tip="large"/>
            <LgLoading size="medium" tip="medium"/>
            <LgLoading tip="default=bottom"/>
            <LgLoading tip="right" tipAlign="right"/>
            <LgLoading tip="bottom"/>
          </div>
        </DemoView>

        <DemoView title="B款" subtitle="B款有三种，纯文字款、带动画自旋、带动画长度变动（不支持IE）"
                  code={`
                       <>
                        //纯文字
                        <LgLoading type="B"/>
                        //动画A
                        <LgLoading type="B" showIcon tip=""/>
                        //动画B
                        <LgLoading type="B" showIcon tip="" animeType="B"/>
                      </>
                    `}>
          <div className="lg-loading-horizontal-show">
            <LgLoading type="B" className="custom-style"/>
            <LgLoading type="B" showIcon tip=""/>
            <LgLoading type="B" showIcon tip="" animeType="B"/>
          </div>
        </DemoView>

        <DemoView title="C款" subtitle="百分比外置"
                  code={`
                       <>
                        /*百分比外置*/
                        <LgLoading percentage={50} type="C"/>
                        <LgLoading percentage={100} type="C"/>
                        <LgLoading percentage={100} type="C" status="success"/>
                        <LgLoading percentage={100} type="C" status="warning"/>
                        <LgLoading percentage={50} type="C" status="exception"/>
                      </>
                    `}>
          <div className="lg-loading-vertical-show">
            <LgLoading percentage={50} type="C"/>
            <LgLoading percentage={100} type="C"/>
            <LgLoading percentage={100} type="C" status="success"/>
            <LgLoading percentage={100} type="C" status="warning"/>
            <LgLoading percentage={50} type="C" status="exception"/>
          </div>
        </DemoView>

        <DemoView title="C款" subtitle="线条款，百分比内置"
                  code={`
                       <>
                        /*百分比外置*/
                        <LgLoading innerText percentage={50} type="C"/>
                        <LgLoading innerText percentage={100} type="C"/>
                        <LgLoading innerText percentage={100} type="C" status="success"/>
                        <LgLoading innerText percentage={100} type="C" status="warning"/>
                        <LgLoading innerText percentage={50} type="C" status="exception"/>
                      </>
                    `}>
          <div className="lg-loading-vertical-show">
            <LgLoading innerText percentage={50} type="C"/>
            <LgLoading innerText percentage={100} type="C"/>
            <LgLoading innerText percentage={100} type="C" status="success"/>
            <LgLoading innerText percentage={100} type="C" status="warning"/>
            <LgLoading innerText percentage={50} type="C" status="exception"/>
          </div>
        </DemoView>
      </DemoPage>
    )
  }
}
import {Component} from "react";
import {LgLoading} from "@/components/loading";
import "./index.scss";
import {AllSkinCover} from "../AllSkinCover";
import {BaseProps} from "../../type/BaseProps";

export default class Loading extends Component<{}, {}> {
  render() {
    return (
      <div className="lg-loading-demo">
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

        <TypeLoadingFrame className="type-b-demo" title="B款" subtitle="B款有三种，纯文字款，带动画自旋，带动画长度变动">
          <div className="loading-align-list">
            <LgLoading type="B"/>
            <LgLoading type="B" showIcon tip=""/>
            <LgLoading type="B" showIcon tip="" animeType="B"/>
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
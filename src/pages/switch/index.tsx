import {Component} from "react";
import {LgSwitch} from "@/components/switch";
import "./index.scss"
import {CodeView} from "@/components/CodeView";
import {DemoView} from "@/components/demoView";
import axios from "axios";
import {DemoPage} from "../demoPage";


interface SwitchState {
  defaultSwitch: boolean
  largeSwitch: boolean
  smallSwitch: boolean
  wordSwitch: boolean
}


export default class Switch extends Component<{}, SwitchState> {

  constructor(props: Readonly<{}>) {
    super(props)
    this.state = {
      defaultSwitch: true,
      largeSwitch: true,
      smallSwitch: false,
      wordSwitch: true
    }
  }

  render() {
    return (
      <DemoPage title="G025开关" className="lg-switch-demo"
                importCode={`
                    import {LgSwitch} from "@/components/switch";
                `}
                interfaceCode={`
                  interface LgSwitchProps {
                    checked?: boolean //选中状态，默认false
                    showLoading?: boolean //是否显示loading，默认false
                    disabled?: boolean //是否可用，默认false
                    checkedChildren?: ReactNode //选中状态的文字或组件(通过组件方式显示图标)
                    unCheckedChildren?: ReactNode //未选中状态的文字或组件(通过组件方式显示图标)
                    size?: "large" | "small" //大小，默认large
                    "aria-label"?: string //无障碍支持
                    onClick?(checked: boolean): void //按钮点击事件
                  }
                `}>
        <DemoView style={{marginTop: "10px"}} title={"简单使用"} subtitle={"最简单的用法，尺寸不限"}
                  code={`
                          <>
                          <LgSwitch checked={this.state.defaultSwitch} onClick={checked => this.setState({defaultSwitch: checked})} />
                          <LgSwitch checked={this.state.smallSwitch} size="small" onClick={checked => this.setState({smallSwitch: checked})} />
                          <LgSwitch disabled={true} />
                          </> 
                        `}>
          <div className="title-component">
            <div className="title">开</div>
            <LgSwitch checked={this.state.defaultSwitch} onClick={checked => this.setState({defaultSwitch: checked})}/>
          </div>
          <div className="row-group">
            <div className="title-component">
              <div className="title">关</div>
              <LgSwitch checked={this.state.smallSwitch} size="small"
                        onClick={checked => this.setState({smallSwitch: checked})}/>
            </div>
            <div className="title-component">
              <div className="title">不可用</div>
              <LgSwitch disabled={true}/>
            </div>
          </div>
        </DemoView>

        <DemoView style={{marginTop: "10px"}} title={"加载中"} subtitle={"带加载中状态的switch"}
                  code={`
                          <>
                            <LgSwitch showLoading={true} />
                            <LgSwitch checked={true} showLoading={true} />
                          </>
                        `}>
          <div className="title-component">
            <div className="title">开</div>
            <LgSwitch checked={true} showLoading={true}/>
          </div>

          <div className="title-component">
            <div className="title">关</div>
            <LgSwitch checked={false} showLoading={true}/>
          </div>

        </DemoView>

        <DemoView style={{marginTop: "10px"}} title={"文字和图标"} subtitle={"带文字说明和图标"}
                  code={`
                          <>
                            <LgSwitch checked={this.state.wordSwitch} checkedChildren="已启用" unCheckedChildren="已关闭" onClick={checked => this.setState({defaultSwitch: checked})} />
                          </>
                        `}>
          <LgSwitch checked={this.state.wordSwitch} checkedChildren="已启用" unCheckedChildren="已关闭"
                    onClick={checked => this.setState({wordSwitch: checked})}/>
        </DemoView>
      </DemoPage>
    )
  }
}
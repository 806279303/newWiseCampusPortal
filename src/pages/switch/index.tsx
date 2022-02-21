import {Component} from "react";
import {LgSwitch} from "@/components/switch";
import "./index.scss"
import {CodeView} from "@/components/CodeView";
import {DemoView} from "@/components/demoView";


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
      defaultSwitch: false,
      largeSwitch: true,
      smallSwitch: true,
      wordSwitch: true
    }
  }


  render() {

    return (
      <div className="lg-switch-demo">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
               import {LgSwitch} from "@/components/switch";
          `}
        </CodeView>
        <CodeView canHidden={false} className="code-size" style={{marginTop: "10px"}}>
          {`interface LgSwitchProps {
              checked?: boolean //选中状态，默认false
              showLoading?: boolean //是否显示loading，默认false
              disabled?: boolean //是否可用，默认false
              checkedChildren?: ReactNode //选中状态的文字或组件(通过组件方式显示图标)
              unCheckedChildren?: ReactNode //未选中状态的文字或组件(通过组件方式显示图标)
              size?: "large" | "small" //大小，默认large
              "aria-label"?: string //无障碍支持
              onClick?(checked: boolean): void //按钮点击事件
            }
          `}
        </CodeView>


        <DemoView style={{marginTop: "10px"}} title={"简单使用"} subtitle={"最简单的用法，尺寸不限"}
                  code={`
                          <LgSwitch checked={this.state.defaultSwitch} onClick={checked => this.setState({defaultSwitch: checked})} />
                        `}>
          <LgSwitch checked={this.state.defaultSwitch} onClick={checked => this.setState({defaultSwitch: checked})}/>
        </DemoView>

        <DemoView style={{marginTop: "10px"}} title={"加载中"} subtitle={"带加载中状态的switch"}
                  code={`
                          <>
                            <LgSwitch showLoading={true} />
                            <LgSwitch checked={true} showLoading={true} />
                          </>
                        `}>
          <LgSwitch showLoading={true}/>
          <LgSwitch checked={true} showLoading={true}/>
        </DemoView>

        <DemoView style={{marginTop: "10px"}} title={"文字和图标"} subtitle={"带文字说明和图标"}
                  code={`
                          <>
                            <LgSwitch checked={this.state.defaultSwitch} checkedChildren="已启用" unCheckedChildren="已关闭" onClick={checked => this.setState({defaultSwitch: checked})} />
                          </>
                        `}>
          <LgSwitch checked={this.state.defaultSwitch} checkedChildren="已启用" unCheckedChildren="已关闭"
                    onClick={checked => this.setState({defaultSwitch: checked})}/>
        </DemoView>

      </div>
    )
  }
}
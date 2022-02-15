import {Component} from "react";
import {LgSwitch} from "@/components/switch";
import "./index.scss"
import {CodeView} from "@/components/CodeView";


interface SwitchState{
  defaultSwitch: boolean
  largeSwitch: boolean
  smallSwitch: boolean
  wordSwitch: boolean
}


export default class Switch extends Component<{}, SwitchState> {

  constructor(props: Readonly<{}>){
    super(props)
    this.state = {
      defaultSwitch: false,
      largeSwitch: true,
      smallSwitch: true,
      wordSwitch: true
    }
  }


  render() {

    return(
      <div className="lg-switch-demo">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
               import {LgSwitch} from "@/components/switch";
          `}
        </CodeView>
        <CodeView className="code-size">
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
        <div style={{paddingTop: "10px"}}>简单使用</div>
        <CodeView className="code-size">
          {`
            <LgSwitch checked={this.state.defaultSwitch} onClick={checked => this.setState({defaultSwitch: checked})} />
          `}
        </CodeView>
        <LgSwitch checked={this.state.defaultSwitch} onClick={checked => this.setState({defaultSwitch: checked})} />

        <div style={{paddingTop: "10px"}}>显示加载中</div>
        <CodeView className="code-size">
          {`
            <>
              <LgSwitch showLoading={true} />
              <LgSwitch checked={true} showLoading={true} />
            </>
          `}
        </CodeView>
        <LgSwitch showLoading={true} />
        <LgSwitch checked={true} showLoading={true} />

        <div style={{paddingTop: "10px"}}>不可用</div>
        <CodeView className="code-size">
          {`
            <>
              <LgSwitch disabled={true} onClick={checked => this.setState({defaultSwitch: checked})} />
            </>
          `}
        </CodeView>
        <LgSwitch disabled={true} onClick={checked => this.setState({defaultSwitch: checked})} />

        <div style={{paddingTop: "10px"}}>带文字</div>
        <CodeView className="code-size">
          {`
            <>
              <LgSwitch checked={this.state.defaultSwitch} checkedChildren="已启用" unCheckedChildren="已关闭" onClick={checked => this.setState({defaultSwitch: checked})} />
            </>
          `}
        </CodeView>
        <LgSwitch checked={this.state.wordSwitch} checkedChildren="已启用" unCheckedChildren="已关闭" onClick={checked => this.setState({wordSwitch: checked})} />


        <div style={{paddingTop: "10px"}}>按钮大小</div>
        <CodeView className="code-size">
          {`
            <>
              <LgSwitch size="large" checked={this.state.largeSwitch} onClick={checked => this.setState({largeSwitch: checked})} />
              <LgSwitch size="small" checked={this.state.smallSwitch} onClick={checked => this.setState({smallSwitch: checked})} />
            </>
          `}
        </CodeView>
        <div style={{display: "flex", alignItems: "center"}}>
          <LgSwitch size="large" checked={this.state.largeSwitch} onClick={checked => this.setState({largeSwitch: checked})} />
          <LgSwitch size="small" checked={this.state.smallSwitch} onClick={checked => this.setState({smallSwitch: checked})} />
        </div>
      </div>
    )
  }
}
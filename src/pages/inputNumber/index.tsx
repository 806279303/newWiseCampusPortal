import {Component} from "react";
import {LgCard} from "@/components/card";
import "./index.scss";
import {BaseProps} from "../../type/BaseProps";
import {CodeView} from "@/components/CodeView";
import {LgInputNumber} from "@/components/inputNumber"
import { Button } from "element-react";

export interface LgInputNumberState {
    disabled: boolean
}

export default class InputNumber extends Component<{}, LgInputNumberState> {
    constructor() {
        super({})
        this.state = {
            disabled: false
        }
    }
  componentDidMount() {

  }

  testOnChange(value:any) {
    alert("传递函数给onChange获取值")
  }

  toggleDisabled() {
    this.setState({
        disabled: !this.state.disabled
    })
  }

  render() {
    return (
      <div className="lg-card-demo">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
               import {LgInputNumber} from "@/components/inputNumber"
            `}
        </CodeView>
        <div>标签属性详解</div>
        <CodeView className="code-size">
          {`
            interface LgInputNumberProps extends BaseProps {
                value?: number // 默认值
                step?: number | string // 每次改变的数值,可以是小数
                max?: number | string // 最大值
                min?: number | string // 最小值
                editable?: boolean // 是否可编辑,默认true
                readonly?: boolean // 是否只读,默认false
                disabled?: boolean // 是否禁用,默认false
                formatter?: Function // 指定输入框展示值的格式
                size?: 'large' | 'small' // 输入框尺寸,可选值large、small,默认正常尺寸
                controlsOutside?: boolean // 按钮位置是否置于两侧
                onChange?(value?: any): void // 数值改变时的回调,返回当前值
                onFocus?(value?: any): void // 聚焦时触发
                onBlur?(value?: any): void // 数值改变时的回调,返回当前值
            }
          `}
        </CodeView>

        <TypeCardFrame title="基本用法" subtitle="可以通过输入、鼠标点击或键盘的上下键来改变数值大小。" className="base-use">
            <LgInputNumber value={1} min={1} max={10}></LgInputNumber>
            <CodeView className="code-size">
            {`
            <>
                // 代码示例
                <LgInputNumber value={1} min={1} max={2}></LgInputNumber>
            </>
            `}
        </CodeView>
        </TypeCardFrame>

        
        <TypeCardFrame title="小数" subtitle="通过设置step属性控制每次改变的精度。" className="base-use">
            <LgInputNumber value={1} min={1} max={10} step={1.5}></LgInputNumber>
            <CodeView className="code-size">
            {`
            <>
                // 代码示例
                <LgInputNumber value={1} min={1} max={10} step={1.5}></LgInputNumber>
            </>
            `}
        </CodeView>
        </TypeCardFrame>

        <TypeCardFrame title="格式化展示" subtitle="通过 formatter 格式化数字,以展示具有具体含义的数据" className="formatter-use">
            <div className="lg-formatter-input">
                <LgInputNumber
                    value={1000}
                    min={1000}
                    max={2000}
                    formatter={(value: any) =>
                    `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                    }
                ></LgInputNumber>
                <LgInputNumber
                    value={100}
                    min={1}
                    max={2000}
                    formatter={(value: any) =>
                        `${value}%`
                    }
                ></LgInputNumber>
            </div>
            <CodeView className="code-size">
                {`
                <>
                    // 代码示例
                    <LgInputNumber value={1000} min={1} max={2000} formatter={(value:any) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}></LgInputNumber>
                    <LgInputNumber value={1} min={1} max={2000} formatter={(value:any) => \`\${value}%\`}></LgInputNumber>
                </>
                `}
            </CodeView>
        </TypeCardFrame>

        <TypeCardFrame title="尺寸" subtitle="通过设置size属性为large和small将输入框设置为大和小尺寸,不设置为默认尺寸。" className="size-use">
            <div className="lg-size-input">
                <LgInputNumber value={3} size="small"></LgInputNumber>
                <LgInputNumber value={3}></LgInputNumber>
                <LgInputNumber value={3} size="large"></LgInputNumber>
            </div>
            <CodeView className="code-size">
            {`
                <>
                // 代码示例
                <LgInputNumber value={3} size="small"></LgInputNumber>
                <LgInputNumber value={3}></LgInputNumber>
                <LgInputNumber value={3} size="large"></LgInputNumber>
                </>
            `}
            </CodeView>
            <div className="lg-size-input">
                <LgInputNumber value={3} size="small" controlsOutside></LgInputNumber>
                <LgInputNumber value={3} controlsOutside></LgInputNumber>
                <LgInputNumber value={3} size="large" controlsOutside></LgInputNumber>
            </div>
            <CodeView className="code-size">
            {`
                <>
                // 代码示例
                <LgInputNumber value={3} size="small" controlsOutside></LgInputNumber>
                <LgInputNumber value={3} controlsOutside></LgInputNumber>
                <LgInputNumber value={3} size="large" controlsOutside></LgInputNumber>
                </>
            `}
            </CodeView>
        </TypeCardFrame>

        <TypeCardFrame title="不可用" subtitle="通过设置disabled属性禁用输入框,点击按钮切换状态。" className="disabled-use">
            <div className="lg-disabled-input">
                <LgInputNumber value={666} disabled={this.state.disabled}></LgInputNumber>
                <div className="lg-disabled-buttom">
                    <Button type="primary" onClick={this.toggleDisabled.bind(this)}>禁用转换</Button>
                </div>
            </div>
            <CodeView className="code-size">
            {`
                <>
                // 代码示例
                <LgInputNumber value={666} disabled></LgInputNumber>
                </>
            `}
            </CodeView>
        </TypeCardFrame>

        <TypeCardFrame title="只读" subtitle="通过设置readonly属性开启只读。" className="base-use">
            <LgInputNumber value={5} readonly></LgInputNumber>
            <CodeView className="code-size">
            {`
                <>
                // 代码示例
                <LgInputNumber value={5} readonly></LgInputNumber>
                </>
            `}
            </CodeView>
        </TypeCardFrame>

        <TypeCardFrame title="不可编辑" subtitle="通过设置editable属性控制是否能编辑。" className="base-use">
            <LgInputNumber value={5} editable></LgInputNumber>
            <CodeView className="code-size">
            {`
                <>
                // 代码示例
                <LgInputNumber value={5} editable></LgInputNumber>
                </>
            `}
            </CodeView>
        </TypeCardFrame>

        <TypeCardFrame title="按钮位置" subtitle="通过设置 controls-outside 属性可以将按钮位置置于输入框两侧。" className="base-use">
            <LgInputNumber value={5} controlsOutside></LgInputNumber>
            <CodeView className="code-size">
            {`
                <>
                // 代码示例
                <LgInputNumber value={5} controls-outside></LgInputNumber>
                </>
            `}
            </CodeView>
        </TypeCardFrame>
      </div>
    )
  }
}

interface TypeCardFrameProps {
  title: string
  subtitle: string
}

const TypeCardFrame = (props: TypeCardFrameProps & BaseProps) => {
  return (
    <div className={`card-frame ${props.className || ""}`}>
      <div className="title">{props.title}</div>
      <div className="subtitle">{props.subtitle}</div>
      <div className="split-line"/>
      <div className="card-content">
        {
          props.children
        }
      </div>
    </div>
  )
}
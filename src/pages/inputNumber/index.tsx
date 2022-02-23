import {Component} from "react";
import "./index.scss";
import {LgInputNumber} from "@/components/inputNumber"
import { Button } from "element-react";
import {DemoView} from "@/components/demoView";
import {DemoPage} from "../demoPage";

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
        <DemoPage title="G024步进器"
                importCode={`
                    import {LgInputNumber} from "@/components/inputNumber"
                `}
                className="lg-input-number-demo"
                interfaceCode={`
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
                `}>
            <DemoView title="基本用法" subtitle="可以通过输入、鼠标点击或键盘的上下键来改变数值大小。" code={`
                <LgInputNumber value={1} min={1} max={2}/>
            `}>
                <LgInputNumber value={1} min={1} max={2}/>
            </DemoView>

            <DemoView title="小数" subtitle="通过设置step属性控制每次改变的精度。" code={`
                <LgInputNumber value={1} min={1} max={10} step={1.5}/>
            `}>
                <LgInputNumber value={1} min={1} max={10} step={1.5}/>
            </DemoView>

            <DemoView title="格式化展示" subtitle="通过 formatter 格式化数字,以展示具有具体含义的数据"  code={`
            <>
                <LgInputNumber value={1000} min={1} max={2000} formatter={(value:any) => \`$ \${value}\`.replace(/\\B(?=(\\d{3})+(?!\\d))/g, ',')}/>
                <LgInputNumber value={1} min={1} max={2000} formatter={(value:any) => \`\${value}%\`}/>
            </>
            `}>
                <div>
                    <LgInputNumber
                        value={1000}
                        min={1000}
                        max={2000}
                        formatter={(value: any) =>
                        `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                        }
                    />
                    <LgInputNumber
                        value={100}
                        min={1}
                        max={2000}
                        formatter={(value: any) =>
                            `${value}%`
                        }
                        style={{marginLeft:10}}
                    />
                </div>
            </DemoView>
            <DemoView title="尺寸" subtitle="通过设置size属性为large和small将输入框设置为大和小尺寸,不设置为默认尺寸。"  code={`
            <>
                <LgInputNumber value={3} size="small"/>
                <LgInputNumber value={3}/>
                <LgInputNumber value={3} size="large"/>
            </>
            `}>
                <div>
                    <LgInputNumber value={3} size="small" style={{marginLeft:10}}/>
                    <LgInputNumber value={3} style={{marginLeft:10}}/>
                    <LgInputNumber value={3} size="large" style={{marginLeft:10}}/>
                </div>
            </DemoView>
            <DemoView title="不可用" subtitle="通过设置disabled属性禁用输入框,点击按钮切换状态。"  code={`
            <>
                <LgInputNumber value={666} disabled={this.state.disabled}/>
                <div style={{display:"inline-block",marginLeft:10}}>
                    <Button type="primary" onClick={this.toggleDisabled.bind(this)}>禁用转换</Button>
                </div>
            </>
            `}>
                <div>
                    <LgInputNumber value={666} disabled={this.state.disabled}/>
                    <div style={{display:"inline-block",marginLeft:10}}>
                        <Button type="primary" onClick={this.toggleDisabled.bind(this)}>禁用转换</Button>
                    </div>
                </div>
            </DemoView>
            <DemoView title="只读" subtitle="通过设置readonly属性开启只读。"  code={`

                <LgInputNumber value={5} readonly/>

            `}>
                <LgInputNumber value={5} readonly/>
            </DemoView>
            <DemoView title="只读" subtitle="通过设置readonly属性开启只读。"  code={`

                <LgInputNumber value={5} readonly/>

            `}>
                <LgInputNumber value={5} readonly/>
            </DemoView>
            <DemoView title="不可编辑" subtitle="通过设置editable属性控制是否能编辑。"  code={`

                <LgInputNumber value={5} editable/>

            `}>
                <LgInputNumber value={5} editable/>
            </DemoView>
            <DemoView title="按钮位置" subtitle="通过设置 controls-outside 属性可以将按钮位置置于输入框两侧。"  code={`

                <LgInputNumber value={5} controlsOutside/>

            `}>
                <LgInputNumber value={5} controlsOutside/>
            </DemoView>
        </DemoPage>

    )
  }
}

interface TypeCardFrameProps {
  title: string
  subtitle: string
}
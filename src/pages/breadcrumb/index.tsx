import "./index.scss"
import {Component} from "react";
import {LgBreadcrumb} from "@/components/breadcrumb";
import {AllSkinCover} from "../AllSkinCover";
import {CodeView} from "@/components/CodeView";

export default class BreadcrumbPage extends Component<{}, { selectedIndex: number }> {

  constructor(props: {}) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }


  render() {
    return (
      <div className="lg-breadcrumb-demo-page">
        <div>在页面文件中引入组件</div>
        <CodeView className="code-size">
          {`
               import {LgBreadcrumb} from "@/components/breadcrumb";
            `}
        </CodeView>

        <div>标签属性详解</div>
        <CodeView className="code-size">
          {`interface LgBreadcrumbProps{
               type?:"A" | "B" // 款式选择，"A"、"B",可空，默认为A
               itemList:string[] // 要显示的文字
               selectedIndex?:number //设置当前选中的index,可空，默认为0
               onChange?:(index: number) => void // 点击是触发，需要通过这个index参数修改selectedIndex，可空sfdsadasdfsfasdf
               }
            `}
        </CodeView>

        <div>A款锚点链接 样例代码</div>
        <CodeView language="html" className="code-size">
          {`
              <LgBreadcrumb onChange={index => this.setState({selectedIndex: index})}
                            selectedIndex={this.state.selectedIndex}
                            itemList={["最新选项", "最新选项", "最新选项", "最新选项", "最新选项", "最新选项"]}/>
            `}
        </CodeView>
          <div className="lg-breadcrumb-demo-a">
            <AllSkinCover>
              <LgBreadcrumb onChange={index => this.setState({selectedIndex: index})}
                            selectedIndex={this.state.selectedIndex}
                            itemList={["最新选项", "最新选项", "最新选项", "最新选项", "最新选项", "最新选项"]}/>
            </AllSkinCover>
          </div>

        <div>B款指定楼层 样例代码</div>
        <CodeView language="html" className="code-size">
          {`
              <LgBreadcrumb type={"B"} onChange={index => this.setState({selectedIndex: index})}
                            selectedIndex={this.state.selectedIndex} itemList={["F1", "F2", "F3", 'F4', 'F5']}/>
            `}
        </CodeView>
          <div className="lg-breadcrumb-demo-b">
            <AllSkinCover>
              <LgBreadcrumb type={"B"} onChange={index => this.setState({selectedIndex: index})}
                            selectedIndex={this.state.selectedIndex} itemList={["F1", "F2", "F3", 'F4', 'F5']}/>
            </AllSkinCover>
          </div>
      </div>
    )
  }
}
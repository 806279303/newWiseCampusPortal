import "./index.scss"
import {Component} from "react";
import {LgBreadcrumb} from "@/components/breadcrumb";
import {DemoView} from "@/components/demoView";
import {DemoPage} from "../demoPage";

export default class BreadcrumbPage extends Component<{}, { selectedIndex: number }> {

  render() {
    return (
      <DemoPage title="G008面包屑/锚点链接" subtitle="常用锚点定位" className="lg-breadcrumb-demo-page"
                importCode={`
                    import {LgBreadcrumb} from "@/components/breadcrumb";
                `}
                interfaceCode={`
                  interface LgBreadcrumbProps{
                     type?:"A" | "B" // 款式选择，"A"、"B",可空，默认为A
                     itemList:string[] // 要显示的文字
                     selectedIndex?:number //设置当前选中的index,可空，默认为0
                     onChange?:(index: number) => void // 点击是触发，需要通过这个index参数修改selectedIndex，可空sfdsadasdfsfasdf
                   }
                `}>
        <DemoView title="A款描点链接" code={`
            <LgBreadcrumb onChange={index => this.setState({selectedIndex: index})}
                            selectedIndex={this.state.selectedIndex}
                            itemList={["最新选项", "最新选项", "最新选项", "最新选项", "最新选项", "最新选项"]}/>
        `}>
          <LgBreadcrumb onChange={index => this.setState({selectedIndex: index})}
                        selectedIndex={this.state.selectedIndex}
                        itemList={["最新选项", "最新选项", "最新选项", "最新选项", "最新选项", "最新选项"]}/>
        </DemoView>

        <DemoView title="B款指定楼层" code={`
           <LgBreadcrumb type={"B"} onChange={index => this.setState({selectedIndex: index})}
                            selectedIndex={this.state.selectedIndex} itemList={["F1", "F2", "F3", 'F4', 'F5']}/>
        `}>
          <LgBreadcrumb type={"B"} onChange={index => this.setState({selectedIndex: index})}
                        selectedIndex={this.state.selectedIndex} itemList={["F1", "F2", "F3", 'F4', 'F5']}/>
        </DemoView>
      </DemoPage>
    )
  }


  constructor(props: {}) {
    super(props);
    this.state = {
      selectedIndex: 0
    }
  }
}
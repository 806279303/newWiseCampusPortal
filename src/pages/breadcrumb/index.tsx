import "./index.scss"
import {Component} from "react";
import {LgBreadcrumb} from "@/components/breadcrumb";
import {AllSkinCover} from "../AllSkinCover";


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
        <div className="lg-breadcrumb-demo-a">
          <AllSkinCover>
            <LgBreadcrumb onChange={index => this.setState({selectedIndex: index})}
                          selectedIndex={this.state.selectedIndex}
                          itemList={["最新选项", "最新选项", "最新选项", "最新选项", "最新选项", "最新选项"]}/>
          </AllSkinCover>
        </div>
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
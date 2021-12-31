import {Component} from "react";
import {LgBreadcrumb} from "@/components/breadcrumb";


export default class BreadcrumbPage extends Component<{}, {}>{
  render() {
    return (
      <div className="breadcrumb-demo-page">
        <LgBreadcrumb type="A" itemList={["", "最新选项","最新选项","最新选项","最新选项","最新选项"]} />
      </div>
    )
  }
}
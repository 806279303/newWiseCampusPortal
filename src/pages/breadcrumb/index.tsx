import "./index.scss"
import {Component} from "react";
import {LgBreadcrumb} from "@/components/breadcrumb";
import {AllSkinCover} from "../AllSkinCover";


export default class BreadcrumbPage extends Component<{}, {}> {
  render() {
    return (
      <div className="breadcrumb-demo-page">
        <AllSkinCover>
            <LgBreadcrumb type="A" itemList={["", "最新选项", "最新选项", "最新选项", "最新选项", "最新选项"]}/>
        </AllSkinCover>
      </div>
    )
  }
}
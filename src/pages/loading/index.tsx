import {Component} from "react";
import {LgLoading} from "@/components/loading";
import "./index.scss";
import {AllSkinCover} from "../AllSkinCover";

export default class Loading extends Component<{}, {}> {
  render() {
    return (
      <div className="lg-loading-demo">
        <AllSkinCover>
          <LgLoading/>
        </AllSkinCover>
      </div>
    )
  }
}
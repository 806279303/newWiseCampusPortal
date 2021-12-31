import {Component} from "react";
import {LgLoading} from "@/components/loading";
import "./index.scss";
import {allSkinClassName} from "@/components/index";

export default class Loading extends Component<{}, {}> {
  render() {
    return (
      <div className="lg-loading-demo">
        {
          allSkinClassName.map(className => {
            return (
              <div className={className}>
                <LgLoading/>
              </div>
            )
          })
        }
      </div>
    )
  }
}
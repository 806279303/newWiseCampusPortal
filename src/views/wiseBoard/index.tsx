import {WiseBoardHeader} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {MainContentView} from "@/components/MainContentView";


class WiseBoard extends BaseComponent {
  render() {
    return (
      <MainContentView header={<WiseBoardHeader/>} footer={<div>paging</div>}>
        <div className={
          this.class("select", "ccc", {
            "abc": true,
            "efg": false
          })
        }>table
        </div>
      </MainContentView>
    );
  }

  getClassNamePrefix(): string {
    return "WiseBoard";
  }
}

export default WiseBoard;
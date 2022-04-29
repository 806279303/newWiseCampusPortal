import {WiseBoardHeader} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {MainContentView} from "@/components/MainContentView";
import {SimpleTable} from "@/components/simpleTable";


class WiseBoard extends BaseComponent {
  render() {
    return (
      <MainContentView header={<WiseBoardHeader/>} footer={<div>paging</div>}>
        <SimpleTable>

        </SimpleTable>
      </MainContentView>
    );
  }

  getClassNamePrefix(): string {
    return "WiseBoard";
  }
}

export default WiseBoard;
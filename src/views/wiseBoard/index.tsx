import {WiseBoardHeader} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {MainContentView} from "@/components/MainContentView";
import {LgSimpleTable} from "@/components/simpleTable";


class WiseBoard extends BaseComponent {
  render() {

    return (
      <MainContentView header={<WiseBoardHeader/>} footer={<div>paging</div>}>
        <LgSimpleTable>

        </LgSimpleTable>
      </MainContentView>
    );
  }

  getClassNamePrefix(): string {
    return "WiseBoard";
  }
}

export default WiseBoard;
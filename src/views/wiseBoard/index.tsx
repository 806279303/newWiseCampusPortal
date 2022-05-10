import {WiseBoardHeaderComponent} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {MainContentView} from "@/components/MainContentView";
import {WiseBoardProps} from "./type";
import {WiseBoardFooterComponent} from "@/views/wiseBoard/components/footer/footer";
import {WiseBoardBodyComponent} from "@/views/wiseBoard/components/body/body";
import {AddWiseBoardLayerComponent} from "@/views/wiseBoard/components/AddWiseBoardLayer/addWiseBoardLayer";


class WiseBoard extends BaseComponent<WiseBoardProps> {

  render() {
    return (
      <MainContentView className={this.rootClass()} header={<WiseBoardHeaderComponent/>}
                       footer={<WiseBoardFooterComponent/>}>
        <WiseBoardBodyComponent/>
        <AddWiseBoardLayerComponent />
      </MainContentView>
    );
  }

  getClassNamePrefix(): string {
    return "WiseBoard";
  }
}

export default WiseBoard
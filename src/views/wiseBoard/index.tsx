import {WiseBoardHeaderComponent} from "./components/header/header"
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {MainContentView} from "@/components/MainContentView";
import {WiseBoardFooterComponent} from "@/views/wiseBoard/components/footer/footer";
import {WiseBoardBodyComponent} from "@/views/wiseBoard/components/body/body";
import {AddWiseBoardLayerComponent} from "@/views/wiseBoard/components/AddWiseBoardLayer/addWiseBoardLayer";
import {RechargeLayerComponent} from "@/views/wiseBoard/components/rechargeLayer/rechargeLayer";
import {RechargeRecordLayerComponent} from "@/views/wiseBoard/components/rechargeRecordLayer/rechargeRecordLayer";


class WiseBoard extends BaseComponent {

  render() {
    return (
      <MainContentView className={this.rootClass()} header={<WiseBoardHeaderComponent/>}
                       footer={<WiseBoardFooterComponent/>}>
        <WiseBoardBodyComponent/>
        <AddWiseBoardLayerComponent/>
        <RechargeLayerComponent/>
        <RechargeRecordLayerComponent/>
      </MainContentView>
    );
  }

  getClassNamePrefix(): string {
    return "WiseBoard";
  }
}

export default WiseBoard
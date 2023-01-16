import PushModelMgHeader from "./components/header"
import PushModelMgFooter from "./components/footer"
import PushModelMgBody from "./components/body"
import PushModelMgLayer from "./components/pushModelLayer"
import {MainContentView} from "@/components/MainContentView";
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"


class PushModelMg extends BaseComponent {

    render() {
        return (
            <MainContentView className={this.rootClass()} header={<PushModelMgHeader/>}
                             footer={<PushModelMgFooter/>}>
                <PushModelMgBody/>

                <PushModelMgLayer/>
            </MainContentView>
        );
    }

    getClassNamePrefix(): string {
        return "push-model-mg";
    }
}

export default PushModelMg
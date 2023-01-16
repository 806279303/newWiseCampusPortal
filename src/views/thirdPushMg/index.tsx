import ThirdPushHeader from "./components/header"
import ThirdPushFooter from "./components/footer"
import ThirdPushBody from "./components/body"
import ThirdPushLayer from "./components/thirdPushLayer"
import {MainContentView} from "@/components/MainContentView";
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"


class ThirdPushMg extends BaseComponent {

    render() {
        return (
            <MainContentView className={this.rootClass()} header={<ThirdPushHeader/>}
                             footer={<></>}>
                <ThirdPushBody/>

                <ThirdPushLayer/>
            </MainContentView>
        );
    }

    getClassNamePrefix(): string {
        return "third-push-mg";
    }
}

export default ThirdPushMg
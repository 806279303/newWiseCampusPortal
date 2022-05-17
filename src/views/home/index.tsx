import {MainContentView} from '@/components/MainContentView';
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"

class HomePage extends BaseComponent {
    render() {
        return (
          <MainContentView className={this.rootClass()} header={this.renderHeader()} footer={this.renderFooter()}>
              {
                  this.renderBody()
              }
          </MainContentView>
        );
    }


    renderHeader(){
        return <div>header</div>
    }

    renderBody(){
        return <div>body</div>
    }


    renderFooter(){
        return <div className={this.class("footer")}>蓝鸽科技 版权所有</div>
    }

    getClassNamePrefix(): string {
      return "HomePage";
    }
}

export default HomePage;
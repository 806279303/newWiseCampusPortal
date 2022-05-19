import {MainContentView} from '@/components/MainContentView';
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {DataOverviewComponent} from "@/views/home/component/DataOverview";
import {ExceptionStatisticalComponent} from "@/views/home/component/ExceptionStatistical";
import {VisitsStatisticalComponent} from "@/views/home/component/VisitsStatistical";
import {MiniProgramStatistical, MiniProgramStatisticalComponent} from "@/views/home/component/MiniProgramStatistical";
import {ExceptionTableCard, ExceptionTableCardComponent} from "@/views/home/component/ExceptionTableCard";
import {RealtimePushTableCard, RealtimePushTableCardComponent} from "@/views/home/component/RealtimePushTableCard";
import {MiniProgramStatisticalItem} from "../../type/home/miniProgramStatistical/MiniProgramStatisticalItem";
import {ExceptionTableItem} from "../../type/home/exceptionTableCard/ExceptionTableItem";
import {RealtimePushTableItem} from "../../type/home/realtimePushTableCard/RealtimePushTableItem";

class HomePage extends BaseComponent {
  render() {
    return (
      <MainContentView className={this.rootClass()} footer={this.renderFooter()}>
        <div className={this.class("body")}>
          {
            this.renderHeader()
          }
          {
            this.renderBody()
          }
        </div>
      </MainContentView>
    );
  }


  renderHeader() {


    return (
      <div className={this.class("chart-views")}>
        <div className={this.class("chart-views-row")}>
          <DataOverviewComponent className={this.class("chart-views-column")}/>
          <ExceptionStatisticalComponent className={this.class("chart-views-column")}/>
        </div>
        <div className={this.class("chart-views-row")}>
          <VisitsStatisticalComponent className={this.class("chart-views-column")}/>
          <MiniProgramStatisticalComponent className={this.class("chart-views-column")}/>
        </div>
      </div>
    )
  }

  renderBody() {
    return (
      <div className={this.class("tables")}>
        <ExceptionTableCardComponent className={this.class("table")}/>
        <RealtimePushTableCardComponent className={this.class("table")}/>
      </div>
    )
  }


  renderFooter() {
    return <div className={this.class("footer")}>蓝鸽科技 版权所有</div>
  }

  getClassNamePrefix(): string {
    return "HomePage";
  }
}

export default HomePage;
import {MainContentView} from '@/components/MainContentView';
import {BaseComponent} from "../../type/BaseComponent";
import "./index.scss"
import {DataOverview} from "@/views/home/component/DataOverview";
import {ExceptionStatistical, ExceptionStatisticalItem} from "@/views/home/component/ExceptionStatistical";
import {VisitsStatistical, VisitsStatisticalItem} from "@/views/home/component/VisitsStatistical";
import {MiniProgramStatistical, MiniProgramStatisticalItem} from "@/views/home/component/MiniProgramStatistical";
import {ExceptionTable, ExceptionTableItem} from "@/views/home/component/ExceptionTable";
import {RealtimePushTable, RealtimePushTableItem} from "@/views/home/component/RealtimePushTable";
import {Scrollbars} from "react-custom-scrollbars-2";

class HomePage extends BaseComponent {
  render() {
    return (
      <MainContentView className={this.rootClass()} footer={this.renderFooter()}>
        <Scrollbars>
          <div className={this.class("body")}>
            {
              this.renderHeader()
            }
            {
              this.renderBody()
            }
          </div>
        </Scrollbars>
      </MainContentView>
    );
  }


  renderHeader() {
    const ExceptionStatisticalData: ExceptionStatisticalItem[] = [
      {
        schoolName: "智慧学校1",
        num: 9
      },
      {
        schoolName: "智慧学校2",
        num: 13
      },
      {
        schoolName: "智慧学校3",
        num: 16
      },
      {
        schoolName: "智慧学校4",
        num: 12
      },
      {
        schoolName: "智慧学校5",
        num: 15
      },
      {
        schoolName: "智慧学校6",
        num: 13
      },
    ]

    const visitsStatisticalData: VisitsStatisticalItem[] = [
      {
        schoolName: "智慧学校1",
        num: 9
      },
      {
        schoolName: "智慧学校2",
        num: 13
      },
      {
        schoolName: "智慧学校3",
        num: 16
      },
      {
        schoolName: "智慧学校4",
        num: 12
      },
      {
        schoolName: "智慧学校5",
        num: 15
      },
      {
        schoolName: "智慧学校6",
        num: 13
      },
    ]

    const miniProgramStatisticalData: MiniProgramStatisticalItem[] = [
      {
        miniProgramName: "车辆管理",
        num: 9
      },
      {
        miniProgramName: "智慧班牌",
        num: 13
      },
      {
        miniProgramName: "办事大厅",
        num: 16
      },
      {
        miniProgramName: "通知公告",
        num: 12
      },
      {
        miniProgramName: "校园广播",
        num: 15
      },
      {
        miniProgramName: "智能宿舍",
        num: 13
      },
    ]

    return (
      <div className={this.class("chart-views")}>
        <div className={this.class("chart-views-row")}>
          <DataOverview loginNumber={13} pushNumber={360} exceptionNumber={856}
                        className={this.class("chart-views-column")}/>
          <ExceptionStatistical items={ExceptionStatisticalData} className={this.class("chart-views-column")}/>
        </div>
        <div className={this.class("chart-views-row")}>
          <VisitsStatistical items={visitsStatisticalData} className={this.class("chart-views-column")}/>
          <MiniProgramStatistical items={miniProgramStatisticalData} className={this.class("chart-views-column")}/>
        </div>
      </div>
    )
  }

  renderBody() {
    const exceptionData: ExceptionTableItem[] = [
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        exceptionPath: "/login",
        ip: "192.168.126.232",
        date: "2020-01-01 24:00",
      },
    ]

    const realtimePushData: RealtimePushTableItem[] = [
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
      {
        schoolId: "S-CCWL",
        schoolName: "智慧学校1",
        sysId: "E6394",
        sysName: "智慧科研管理",
        date: "2020-01-01 24:00",
      },
    ]

    return (
      <div className={this.class("tables")}>
        <ExceptionTable items={exceptionData} className={this.class("table")}/>
        <RealtimePushTable items={realtimePushData} className={this.class("table")}/>
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
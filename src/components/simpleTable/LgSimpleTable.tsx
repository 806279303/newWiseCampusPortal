import "./SimpleTable.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {SimpleTableHeader} from "@/components/simpleTable/simpleTableHeader";
import {SimpleTableBody} from "@/components/simpleTable/simpleTableBody";
import {SimpleTableRow} from "@/components/simpleTable/simpleTableRow";
import {SimpleTableColumn} from "@/components/simpleTable/simpleTableColumn";
import {FlexFillViewFrame} from "../flexFillViewFrame";

export interface LgSimpleTableProps {
}

export class LgSimpleTable extends BaseComponent<LgSimpleTableProps> {

  public static Head = SimpleTableHeader

  public static Body = SimpleTableBody

  public static Row = SimpleTableRow

  public static Column = SimpleTableColumn

  render() {
    return (
      <div className={this.rootClass()}>
        <FlexFillViewFrame flexStart={this.renderHeader()} orientation="vertical">
          {
            this.props.children
          }
          {
            this.renderBody()
          }
        </FlexFillViewFrame>
      </div>
    )
  }

  renderHeader() {
    return (
      <LgSimpleTable.Head>
        <LgSimpleTable.Row>
          <LgSimpleTable.Column>学校ID</LgSimpleTable.Column>
          <LgSimpleTable.Column>学校名称</LgSimpleTable.Column>
          <LgSimpleTable.Column>已使用总时长(分钟)</LgSimpleTable.Column>
          <LgSimpleTable.Column>剩余通话时长(分钟)</LgSimpleTable.Column>
          <LgSimpleTable.Column>状态</LgSimpleTable.Column>
          <LgSimpleTable.Column>创建时间</LgSimpleTable.Column>
          <LgSimpleTable.Column>操作</LgSimpleTable.Column>
        </LgSimpleTable.Row>
      </LgSimpleTable.Head>
    )
  }

  renderBody() {

    let datas: any[] = []
    for (let i = 0; i < 10; i++) {
      datas.push({a: i + 1, b: "蓝鸽中小学", c: "100", d: "200", e: "欠费", f: "2010-02-01", g: "无"})
    }

    return (
      <LgSimpleTable.Body>
        {
          datas.map(data => {
            let keys = Object.keys(data).filter(key => Object.prototype.hasOwnProperty.call(data, key));
            return (
              <LgSimpleTable.Row key={data.a}>
                {
                  keys.map(key => {
                    return (
                      <LgSimpleTable.Column key={key}>
                        {
                          data[key]
                        }
                      </LgSimpleTable.Column>
                    )
                  })
                }
              </LgSimpleTable.Row>
            )
          })
        }
      </LgSimpleTable.Body>
    );
  }

  getClassNamePrefix(): string {
    return "LgSimpleTable";
  }
}


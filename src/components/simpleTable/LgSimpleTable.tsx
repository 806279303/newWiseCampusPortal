import "./SimpleTable.scss"
import {BaseComponent} from "../../type/BaseComponent";
import {SimpleTableHeader} from "@/components/simpleTable/simpleTableHeader";
import {SimpleTableBody} from "@/components/simpleTable/simpleTableBody";
import {SimpleTableRow} from "@/components/simpleTable/simpleTableRow";
import {SimpleTableColumn} from "@/components/simpleTable/simpleTableColumn";
import {FlexFillViewFrame} from "../flexFillViewFrame";
import {LgSimpleTableData, LgSimpleTableProps} from "@/components/simpleTable/LgSimpleTableType";
import {LgEmpty} from "@/components/empty";
import {BaseProps} from "../../type/BaseProps";
import {ReactNode} from "react";
import {LgLoading} from "@/components/loading";
import {FlexCenterContainer} from "@/components/flexCenterContainer";


export class LgSimpleTable<DataType extends LgSimpleTableData> extends BaseComponent<LgSimpleTableProps<DataType>> {

  public static Head = SimpleTableHeader

  public static Body = SimpleTableBody

  public static Row = SimpleTableRow

  public static Column = SimpleTableColumn

  private rowId: number

  constructor(props: (LgSimpleTableProps<DataType> & BaseProps) | Readonly<LgSimpleTableProps<DataType> & BaseProps>, context: any) {
    super(props, context);
    this.rowId = 0
  }


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
    if (!this.props.dataDescribe) {
      return ""
    }

    const header = this.props.dataDescribe.map(item => ({
      headName: item.headName,
      width: item.width,
      render: item.headRender
    }));
    return (
      <LgSimpleTable.Head>
        <LgSimpleTable.Row>
          {
            header.map(item => (
              item.render ? item.render() :
                <LgSimpleTable.Column width={item.width} key={item.headName}>{item.headName}</LgSimpleTable.Column>
            ))
          }
        </LgSimpleTable.Row>
      </LgSimpleTable.Head>
    )
  }

  renderBody() {

    let node: ReactNode
    if (this.props.loading) {
      node = <FlexCenterContainer><LgLoading/></FlexCenterContainer>
    } else if (!this.props.dataArray || this.props.dataArray.length <= 0 || !this.props.dataDescribe || this.props.dataDescribe.length <= 0) {
      node = <LgEmpty/>
    } else {
      node = this.props.dataArray.map(data => this.renderBodyRow(data))
    }


    return (
      <LgSimpleTable.Body>
        {node}
      </LgSimpleTable.Body>
    );
  }

  renderBodyRow(data: DataType) {
    if (this.props.rowRender) {
      return this.props.rowRender(data)
    }

    if (!this.props.dataDescribe || this.props.dataDescribe.length <= 0) {
      return
    }

    let rowItem = this.props.dataDescribe.map(item => ({key: item.field, width: item.width, render: item.render}))
    let rowKey = this.getRowKey(data);
    return (
      <LgSimpleTable.Row key={rowKey}>
        {
          rowItem.map(item => {
            return item.render ? item.render(data) : (
              <LgSimpleTable.Column width={item.width} key={item.key}>
                {
                  item.key && data.hasOwnProperty(item.key) ? data[item.key] : ""
                }
              </LgSimpleTable.Column>
            )
          })
        }
      </LgSimpleTable.Row>
    )
  }

  private getRowKey(data: DataType) {
    if (!this.props.dataDescribe || this.props.dataDescribe.length <= 0) {
      return this.rowId++
    }

    const lgSimpleTableDataDescribe = this.props.dataDescribe.find(item => item.isId);
    if (!lgSimpleTableDataDescribe || !data.hasOwnProperty(lgSimpleTableDataDescribe.field)) {
      return this.rowId++
    }

    return data[lgSimpleTableDataDescribe.field]
  }

  getClassNamePrefix(): string {
    return "LgSimpleTable";
  }
}

export function createTableClass<T extends LgSimpleTableData>() {
  return class newTable extends LgSimpleTable<T> {
  }
}


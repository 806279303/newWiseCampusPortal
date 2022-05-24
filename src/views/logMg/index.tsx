import {MainContentView} from "@/components/MainContentView";
import {BaseComponent} from "../../type/BaseComponent";
import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import {OperationLogItem} from "../../type/logMg/OperationLogItem";
import React, {ReactNode} from "react";
import {nameMap} from "../../type/logMg/UserType";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {bindActionCreators, Dispatch} from 'redux'
import {FunctionProperties, NonFunctionProperties} from "../../type/util";
import {RootState} from "../../redux/rootReducer";
import {LeftRightLayout} from "@/components/LeftRightLayout";
import {Search} from "@/components/search";
import {LogMgFooter} from "@/views/logMg/component/footer/footer";
import {loadData} from "../../redux/logMg/LogMgAction";
import {LogMgAction} from "../../type/logMg/LogMgAction";
import {LogMgActionType} from "../../type/logMg/LogMgActionType";

const OperationLogTable = createTableClass<OperationLogItem>()
type OperationLogDescribe = LgSimpleTableDataDescribe<OperationLogItem>


interface LogMgProps {
  searchStr: string
  loading: boolean
  currentPage: number
  operationLogItems: OperationLogItem[]
  totalPage: number
  total: number

  changeSearchStr(newSearchStr: string): void

  loadData(newSearchStr?: string, loadPage?: number): void
}

class LogMg extends BaseComponent<LogMgProps> {

  componentDidMount() {
    super.componentDidMount();
    this.props.loadData()
  }

  render() {
    return (
      <MainContentView className={this.rootClass()} header={this.renderHeader()} footer={this.renderFooter()}>
        <OperationLogTable loading={this.props.loading} dataArray={this.props.operationLogItems} dataDescribe={this.getDataDescribe()}/>
      </MainContentView>
    );
  }

  renderHeader() {
    return (
      <LeftRightLayout
        leftChildren={<div>共<div style={{color: "#f00", display: "inline-block"}}>{this.props.total}</div>条记录</div>}
        rightChildren={
          <Search onSearch={() => this.props.loadData("", 1)}
                  onChange={(value) => this.props.changeSearchStr(value)}
                  onClear={() => this.props.changeSearchStr("")}
                  className={this.class("search")}
                  placeholder="请输入用户名称"
                  value={this.props.searchStr}
          />
        }
      />
    )
  }

  renderFooter() {
    return (
      <LogMgFooter
        fetchWiseBoardListAction={
          (page) => {
            this.props.loadData("", page)
          }
        }
        totalPage={this.props.totalPage}
        currentPage={this.props.currentPage}/>
    )
  }

  getDataDescribe() {
    const dataDescribe: OperationLogDescribe[] = [
      {
        field: "userName",
        headName: "用户名称"
      },
      {
        field: "userName",
        headName: "用户角色",
        render: (data: OperationLogItem, index: number): ReactNode => {
          return (
            <OperationLogTable.Column key="userType">
              {
                nameMap.get(data.userType)
              }
            </OperationLogTable.Column>
          )
        }
      },
      {
        field: "content",
        headName: "操作内容",
      },
      {
        field: "createTime",
        headName: "操作时间"
      },
    ]

    return dataDescribe
  }

  getClassNamePrefix(): string {
    return "LogMg";
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<LogMgProps>, LogMgProps, RootState> = (state) => {
  const logMgState = state.logMgState;
  return {
    ...logMgState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<LogMgProps>, LogMgProps> = (dispatch: Dispatch<LogMgAction>) => {
  return {
    changeSearchStr: (newSearchStr) => {
      dispatch({type: LogMgActionType.CHANGE_SEARCH_STR, searchStr: newSearchStr})
    },
    ...bindActionCreators({loadData}, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(LogMg);
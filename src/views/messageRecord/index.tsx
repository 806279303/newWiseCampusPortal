import React, {Component} from 'react';
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {BaseComponent} from "../../type/BaseComponent";
import {MainContentView} from "@/components/MainContentView";
import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import {MessageRecordTableItem} from "../../type/messageRecord/MessageRecordTableItem";
import {FunctionProperties, NonFunctionProperties} from "../../type/util";
import {RootState} from "../../redux/rootReducer";
import {bindActionCreators, Dispatch} from "redux";
import {MessageRecordAction} from "../../type/messageRecord/MessageRecordAction";
import {loadData} from "../../redux/messageRecord/MessageRecordAction";
import {UserMgFooter} from "@/views/userMg/component/footer/footer";
import {MessageRecordFooter} from "@/views/messageRecord/component/footer/footer";


const MessageRecordTable = createTableClass<MessageRecordTableItem>();
type MessageRecordTableDescribe = LgSimpleTableDataDescribe<MessageRecordTableItem>

interface MessageRecordProps {
  loading: boolean
  currentPage: number
  total: number
  totalPage: number
  messageRecordTableItems: MessageRecordTableItem[]
  loadData(page: number): void
}

class MessageRecord extends BaseComponent<MessageRecordProps> {

  componentDidMount() {
    super.componentDidMount();
    this.props.loadData(1)
  }

  render() {
    return (
      <MainContentView className={this.rootClass()} footer={this.renderFooter()}>
        <MessageRecordTable
          loading={this.props.loading}
          dataArray={this.props.messageRecordTableItems}
          dataDescribe={this.getDataDescribe()}
        />
      </MainContentView>
    );
  }

  renderFooter() {
    return (
      <MessageRecordFooter
        fetchWiseBoardListAction={
          (page) => {
            this.props.loadData(page)
          }
        }
        totalPage={this.props.totalPage}
        currentPage={this.props.currentPage}/>
    )
  }

  getClassNamePrefix(): string {
    return "MessageRecord";
  }

  private getDataDescribe() {
    const describe: MessageRecordTableDescribe[] = [
      {
        field: "schoolName",
        headName: "学校名称"
      },
      {
        field: "schoolId",
        headName: "学校ID"
      },
      {
        field: "systemId",
        headName: "系统ID"
      },
      {
        field: "systemName",
        headName: "系统名称"
      },
      {
        field: "createTime",
        headName: "推送时间"
      },
    ]
    return describe
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<MessageRecordProps>, MessageRecordProps, RootState> = (state) => {
  const messageRecordState = state.messageRecordState;
  return {
    ...messageRecordState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<MessageRecordProps>, MessageRecordProps> = (dispatch: Dispatch<MessageRecordAction>) => {
  return {
    ...bindActionCreators({loadData} ,dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MessageRecord);
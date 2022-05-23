import {BaseComponent} from "../../type/BaseComponent";
import {MainContentView} from "@/components/MainContentView";
import {LeftRightLayout} from "@/components/LeftRightLayout";
import {Search} from "@/components/search";
import React, {ReactNode} from "react";
import {UserMgFooter} from "@/views/userMg/component/footer/footer";
import {UserMgTableItem} from "../../type/userMg/UserMgTableItem";
import {createTableClass, LgSimpleTableDataDescribe} from "@/components/simpleTable";
import {userTypeNameMap} from "../../type/UserType";
import {connect, MapDispatchToProps, MapStateToProps} from "react-redux";
import {FunctionProperties, NonFunctionProperties} from "../../type/util";
import {RootState} from "../../redux/rootReducer";
import {UserMgAction} from "../../type/userMg/UserMgAction";
import {bindActionCreators, Dispatch} from "redux";
import {WxSchoolSimpleInfo} from "../../type/WxSchoolSimpleInfo";
import {fetchAllSchoolSimpleInfo} from "../../redux/app/action";
import {Select} from "element-react";
import "./index.scss"
import {UserMgActionType} from "../../type/userMg/UserMgActionType";
import {BaseProps} from "../../type/BaseProps";
import {loadData, unBindUser} from "../../redux/userMg/UserMgAction";
import {lgAlert} from "@/components/alert";

const UserMgTable = createTableClass<UserMgTableItem>()
type UserMgTableDescribe = LgSimpleTableDataDescribe<UserMgTableItem>

interface UserMgProps {
  searchStr: string
  schoolId: string
  loading: boolean
  currentPage: number
  totalPage: number
  total: number
  userMgTableItems: UserMgTableItem[]
  schoolItems: WxSchoolSimpleInfo[]

  fetchAllSchoolSimpleInfo(): void

  onSchoolIdChange(schoolId: string): void

  onSearchStrChange(searchStr: string): void

  loadData(page: number, schoolId?: string): void

  unBindUser(id: number): void
}

class UserMg extends BaseComponent<UserMgProps> {

  constructor(props: UserMgProps & BaseProps) {
    super(props);
    this.onSchoolIdChange = this.onSchoolIdChange.bind(this)
  }

  componentDidUpdate(prevProps: Readonly<UserMgProps & BaseProps>, prevState: Readonly<{}>, snapshot?: any) {
    if (this.props.schoolItems.length && !this.props.schoolId) {
      this.props.onSchoolIdChange(this.props.schoolItems[0].schoolId)
      this.props.loadData(1, this.props.schoolItems[0].schoolId)
    }
  }

  componentDidMount() {
    super.componentDidMount();
    if (!this.props.schoolItems.length) {
      this.props.fetchAllSchoolSimpleInfo()
    } else if (!this.props.schoolId) {
      this.props.onSchoolIdChange(this.props.schoolItems[0].schoolId)
      this.props.loadData(1, this.props.schoolItems[0].schoolId)
    }
  }

  render() {
    return (
      <MainContentView className={this.rootClass()} header={this.renderHeader()} footer={this.renderFooter()}>
        <UserMgTable loading={this.props.loading} dataArray={this.props.userMgTableItems}
                     dataDescribe={this.getDataDescribe()}/>
      </MainContentView>
    );
  }

  renderHeader() {
    return (
      <LeftRightLayout
        leftChildren={this.renderLeft()}
        rightChildren={
          <Search
            placeholder="请输入用户名称"
            onSearch={() => this.props.loadData(1)}
            value={this.props.searchStr}
            onChange={value => this.props.onSearchStrChange(value)}
            onClear={() => this.props.onSearchStrChange("")}
          />
        }
      />
    )
  }

  renderLeft() {
    return (
      <div className={this.class("header-left")}>
        <Select value={this.props.schoolId} onChange={this.onSchoolIdChange}>
          {
            this.props.schoolItems.map(item => {
              return (
                <Select.Option key={item.schoolId} label={item.schoolName} value={item.schoolId}></Select.Option>
              )
            })
          }
        </Select>
        <div className={this.class("header-tips")}>
          共
          <div style={{color: "#f00", display: "inline-block"}}>{this.props.total}</div>
          条记录
        </div>
      </div>
    )
  }

  renderFooter() {
    return (
      <UserMgFooter
        fetchWiseBoardListAction={
          (page) => {
            this.props.loadData(page)
          }
        }
        totalPage={this.props.totalPage}
        currentPage={this.props.currentPage}/>
    )
  }

  getDataDescribe() {
    const dataDescribe: UserMgTableDescribe[] = [
      {
        field: "wxName",
        headName: "微信名称"
      },
      {
        field: "username",
        headName: "用户名称"
      },
      {
        field: "userId",
        headName: "用户ID",
        color: "#09f"
      },
      {
        field: "userType",
        headName: "用户类型",
        render: (data: UserMgTableItem, index: number): ReactNode => {
          return (
            <UserMgTable.Column key="userName">
              {
                userTypeNameMap.get(data.userType)
              }
            </UserMgTable.Column>
          )
        }
      },
      {
        field: "schoolName",
        headName: "学校名称",
      },
      {
        field: "",
        headName: "操作",
        render: (data: UserMgTableItem, index: number): React.ReactNode => {
          return (
            <UserMgTable.Column className={this.class("operation")} key="operation">
              <div className={this.class("operation-unbind")} onClick={() => this.unBindUser(data)}>解除绑定</div>
            </UserMgTable.Column>
          )
        }
      }
    ]

    return dataDescribe
  }

  getClassNamePrefix(): string {
    return "UserMg";
  }

  private onSchoolIdChange(value: string) {
    if (value !== this.props.schoolId) {
      this.props.onSchoolIdChange(value)
      this.props.loadData(1, value)
    }
  }
  private onUnbind: boolean = false
  private unBindUser(data: UserMgTableItem) {
    if(this.onUnbind){
      return
    }
    this.onUnbind = true
    let {index} = lgAlert.show({
      content: '确定解除绑定吗？',
      tipType: 'warning',
      tipSize: 'small',
      tipMouldType: 'A',
      duration: 0,
      position: {
        xAxis: "center",
        yAxis: "center"
      },
      onClose: () => {
        this.onUnbind = false
      },
      onConfirm: () => {
        this.props.unBindUser(data.wxUserId)
        lgAlert.close(index)
        this.onUnbind = false
      }
    })
  }
}

const mapStateToProps: MapStateToProps<NonFunctionProperties<UserMgProps>, UserMgProps, RootState> = (state) => {
  const userMgState = state.userMgState;
  return {
    schoolItems: state.appReducer.allSchoolSimpleInfos,
    ...userMgState
  }
}

const mapDispatchToProps: MapDispatchToProps<FunctionProperties<UserMgProps>, UserMgProps> = (dispatch: Dispatch<UserMgAction>) => {
  return {
    onSchoolIdChange(schoolId: string) {
      dispatch({type: UserMgActionType.CHANGE_SCHOOL_ID, schoolId})
    },
    onSearchStrChange(searchStr: string) {
      dispatch({type: UserMgActionType.CHANGE_SEARCH_STR, searchStr})
    },
    ...bindActionCreators({fetchAllSchoolSimpleInfo, loadData, unBindUser}, dispatch)
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(UserMg);
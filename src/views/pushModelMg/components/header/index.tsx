import React from 'react';
import {BaseComponent, LgSelect} from "lancoo-web-ui";
import {createClassName} from "@/utils/classNameUtils";
import {LgButton} from 'lancoo-web-ui';

import {connect} from 'react-redux';
import {PushModelListParam, PushModelState} from "@/type/pushModel/PushModelState";
import {ISchoolInfo} from "@/views/schoolInfo/model";
import {
    changeCurrentSchoolAction, loadPushModelData,
    loadSchoolList,
    openAddLayer
} from "@/redux/pushModelMg/action";
import {dataItem} from "lancoo-web-ui/dist/types/select/select/select";

import './index.scss'
const {classNames} = createClassName('push-model-mg-header')


interface PushModelMgProps {
    pageNum: number
    pageSize: number
    schoolList: (ISchoolInfo & dataItem)[]
    currentSchoolInfo:(ISchoolInfo & dataItem)
    getSchoolList: (schoolName:string) => void
    openAddLayer: () => void
    selectSchool: (data: ISchoolInfo) => void
    loadPushModelList: (params:PushModelListParam)=>void
}

class Index extends BaseComponent<PushModelMgProps, PushModelState> {
    constructor(props: PushModelMgProps) {
        super(props);
        this.onSearchSchool = this.onSearchSchool.bind(this)
        this.onSeleSchool = this.onSeleSchool.bind(this)
    }

    componentDidMount() {
        this.props.getSchoolList(this.props.currentSchoolInfo?.schoolName)
    }

    onSearchSchool(value: string){

    }

    onSeleSchool(data: ISchoolInfo & dataItem){
        this.props.selectSchool(data)
        const params:PushModelListParam = {
            pageNum: this.props.pageSize,
            pageSize: this.props.pageSize,
            schoolId: this.props.currentSchoolInfo.schoolId
        }
        this.props.loadPushModelList(params)
    }

    render() {
        const schoolList = this.props.schoolList;
        const seleSchoolName = this.props.currentSchoolInfo?.schoolName
        return (
            <div className={(classNames("wrapper"))}>
                <div className={(classNames("wrapper-left"))}>
                    <div className="seleTxt">当前学校：</div>
                    <LgSelect
                        datalist={schoolList}
                        SelectOption={this.onSeleSchool}
                        value={seleSchoolName}
                        placeholder={"请选择学校"}
                        openSearch={true}
                        onSearch={this.onSearchSchool}
                        size={"large"}
                    />
                </div>
                <div className={(classNames("wrapper-right"))}>
                    <LgButton onClick={() => {
                        this.props.openAddLayer()
                    }} backgroundType='opacification' showIcon icon={<LgButton.icon.Add></LgButton.icon.Add>}
                              radius={false} type='success'>添加学校公众号</LgButton>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state: any) {
    return {
        pageSize: state.pushModelMg.pageSize,
        pageNum: state.pushModelMg.pageNum,
        schoolList: state.pushModelMg.schoolList,
        currentSchoolInfo: state.pushModelMg.currentSchoolInfo
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        getSchoolList: (schoolName: string)=> dispatch(loadSchoolList(schoolName)),
        openAddLayer: () => dispatch(openAddLayer()),
        selectSchool: (data: ISchoolInfo) => dispatch(changeCurrentSchoolAction(data)),
        loadPushModelList: (params :PushModelListParam)=>{ dispatch(loadPushModelData(params)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
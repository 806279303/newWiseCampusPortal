import React, {Component} from 'react';
import {BaseComponent, LgButton, LgTable, LgTableProps} from "lancoo-web-ui";
import {createClassName} from "@/utils/classNameUtils";
import {connect} from "react-redux";
import {PushModelList, PushModelListParam} from "@/type/pushModel/PushModelState";
import {confirmDelPop, errorTip, successTip} from "@/utils/popsNew";
import {delThirdPushLists} from "@/network/http";
import {loadPushModelData} from "@/redux/pushModelMg/action";
import {ISchoolInfo} from "@/views/schoolInfo/model";
import {dataItem} from "lancoo-web-ui/dist/types/select/select/select";

const {classNames} = createClassName('push-model-mg-body')

interface PushModelProps{
    pageNum: number
    pageSize: number
    currentSchoolInfo:(ISchoolInfo & dataItem)
    lists: PushModelList[]
    loadPushModelList: (params:PushModelListParam)=>void
}

class Index extends BaseComponent<PushModelProps> {
    constructor(props:any) {
        super(props);
        this.delPushModel = this.delPushModel.bind(this)
    }

    componentDidMount() {
        this.loadPushModel()
    }

    loadPushModel(){
        const params:PushModelListParam = {
            pageNum: this.props.pageSize,
            pageSize: this.props.pageSize,
            schoolId: this.props.currentSchoolInfo.schoolId
        }
        this.props.loadPushModelList(params)
    }

    delPushModel(data: PushModelList){
        try {
            confirmDelPop({}, async ()=>{
                await delThirdPushLists({ids: [data.id]})
                successTip('删除成功')
            })
        }catch (err: any){
            errorTip(err.msg || '删除失败')
        }
    }

    render() {
        const data = this.props.lists

        const columns: LgTableProps<typeof data[0]>["columns"] = [
            {
                dataIndex: "id",
                key: "id",
                align: "center",
                render: (value, record, index) => {
                    return <span>{index + 1}</span>;
                },
            },
            {
                title: "学校名称",
                dataIndex: "schoolName",
                key: "schoolName",
                render: (value) => {
                    return <span>{value}</span>;
                },
            },
            {
                title: "企业名称",
                dataIndex: "companyName",
                key: "companyName",
                render: (value) => {
                    return <span>{value}</span>;
                },
            },
            {
                title: "系统名称",
                dataIndex: "companyName",
                key: "companyName",
                render: (value) => {
                    return <span>{value}</span>;
                },
            },
            {
                title: "assessId",
                dataIndex: "accessId",
                key: "accessId",
                render: (value) => {
                    return <span>{value}</span>;
                },
            },
            {
                title: "accessSecret",
                dataIndex: "accessSecret",
                key: "accessSecret",
                render: (value) => {
                    return <span>{value}</span>;
                },
            },
            {
                title: "操作",
                dataIndex: "",
                key: "",
                render: (value, record, index) => {
                    return <div className={(classNames("cell-del"))}>
                        <LgButton onClick={()=>{this.delPushModel(record)}} backgroundType='opacification' showIcon icon={<LgButton.icon.Delete></LgButton.icon.Delete>} shapeType='text' type='fail'>删除</LgButton>
                    </div>;
                },
            },
        ];

        return (
            <div className={(classNames("wrapper"))}>
                <LgTable
                    columns={columns}
                    data={data}
                />
            </div>
        );
    }
}

function mapStateToProps(state:any){
    return {
        pageSize: state.pushModelMg.pageSize,
        pageNum: state.pushModelMg.pageNum,
        lists: state.pushModelMg.pushModelLists,
        currentSchoolInfo: state.pushModelMg.currentSchoolInfo
    }
}

function mapDispatchToProps(dispatch: any){
    return {
        loadPushModelList: (params :PushModelListParam)=>{ dispatch(loadPushModelData(params)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index) ;
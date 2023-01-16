import React, {Component} from 'react';
import {BaseComponent, LgButton, LgTable, LgTableProps} from "lancoo-web-ui";
import {createClassName} from "../../../../utils/classNameUtils";
import {loadThirdPushData, openNewThirdPushLayer} from "../../../../redux/thirdPushMg/action";
import {connect} from "react-redux";
import {BaseProps} from "@/type/BaseProps";
import {AddWiseBoardLayerProps} from "@/views/wiseBoard/components/AddWiseBoardLayer/addWiseBoardLayer";
import {ThirdPushList, ThirdPushState} from "@/type/thirdPushMg/thirdPushState";
import {confirmDelPop, errorTip, successTip} from "../../../../utils/popsNew";
import {delThirdPushLists} from "@/network/http";

const {classNames, rootClassNames} = createClassName('third-push-mg-body')

interface ThirdPushProps{
    lists: ThirdPushList[]
    loadThirdPushData: ()=>void
}

class Index extends BaseComponent<ThirdPushProps> {
    constructor(props:any) {
        super(props);
        this.delThirdPush = this.delThirdPush.bind(this)
    }

    componentDidMount() {
        this.props.loadThirdPushData()
    }

    delThirdPush(data: ThirdPushList){
        try {
            confirmDelPop({}, async ()=>{
                await delThirdPushLists({ids: [data.id]})
                successTip('删除成功')
                this.props.loadThirdPushData()
            })
        }catch (err: any){
            errorTip(err.msg || '创建失败')
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
                        <LgButton onClick={()=>{this.delThirdPush(record)}} backgroundType='opacification' showIcon icon={<LgButton.icon.Delete></LgButton.icon.Delete>} shapeType='text' type='fail'>删除</LgButton>
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
        lists: state.thirdPushMg.thirdPushLists
    }
}

function mapDispatchToProps(dispatch: any){
    return {
        loadThirdPushData: ()=>{ dispatch(loadThirdPushData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index) ;
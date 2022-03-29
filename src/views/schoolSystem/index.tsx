import React, {Component} from 'react';
import {Select} from "element-react";
import {Search} from "@/components/search";
import {LgTable, TableColumn} from "@/components/table";
import {LgTh, LgTr, LgTd} from "@/components/miniCampusTb";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {getWxSchoolSystem} from "../../network/http";
import {Collapse} from "element-react";
import {LgSwitch} from "@/components/switch";

import {withRouter, RouteComponentProps} from "react-router-dom";
import {ISystemInfo, IModuleInfo} from "@/views/schoolSystem/model";

import "../../css/common.scss"
import './index.scss'
import {_concatIdentityStr} from "../../utils/common";

interface IWeappMgState {
    systemSearch: string
    thColumns: Array<any>
    data: Array<ISystemInfo>
}

class Index extends Component<RouteComponentProps, IWeappMgState> {
    static defaultProps: {} = {}
    private static readonly WIDTH_MATCHES = {
        id: '5%',
        systemId: '10%',
        systemName: '10%',
        baseWebUrl: '24%',
        webSvrAddr: '24%',
        lockState: '6%',
        systemState: '6%',
        version: '5%',
        handles: '10%',
    }
    private openIndex: string;

    constructor(props: RouteComponentProps) {
        super(props);
        const widthsMatch = Index.WIDTH_MATCHES
        this.state = {
            systemSearch: '',
            thColumns: [
                {value: '#', props: 'id', width: widthsMatch.id},
                {value: '系统ID', props: 'systemId', width: widthsMatch.systemId},
                {value: '系统名称', props: 'systemName', width: widthsMatch.systemName},
                {value: '基础平台路径', props: 'baseWebUrl', width: widthsMatch.baseWebUrl},
                {value: '小程序实际访问地址', props: 'webSvrAddr', width: widthsMatch.webSvrAddr},
                {value: '锁控状态', props: 'lockState', width: widthsMatch.lockState},
                {value: '小程序状态', props: 'systemState', width: widthsMatch.systemState},
                {value: '版本号', props: 'version', width: widthsMatch.version},
                {value: '操作', width: widthsMatch.handles},
            ],
            data: [],
        }
        this.handChangeSysData = this.handChangeSysData.bind(this)
        this.openIndexChange = this.openIndexChange.bind(this);
        this.backToSchoolInfo = this.backToSchoolInfo.bind(this);
        this.systemSearch = this.systemSearch.bind(this);
        this.openIndex = "1"
    }


    async componentDidMount() {
        const routerParams: any = this.props.match.params
        const schoolId = routerParams.schoolId
        const data = await getWxSchoolSystem({schoolId})
        this.setState({data})
    }

    handChangeSysData(moduleInfo: any, moduleIndex: number, index: number) {
        let data = this.state.data
        data[index].wxSchoolSystemModuleList[moduleIndex].moduleState = moduleInfo.moduleState ? 1 : 0

        this.setState({data: [...data]})
    }

    openIndexChange(activeNames: string) {
        this.openIndex = activeNames
    }

    backToSchoolInfo() {
        this.props.history.goBack()
    }

    systemSearch() {

    }

    render() {
        const widthsMatch = Index.WIDTH_MATCHES
        return (
            <div className="common-page common-page1">
                <div className="common-page-header clear">
                    <i className="el-icon-arrow-left left school-system-back" onClick={this.backToSchoolInfo}/>
                    <div className="left common-page-header-total">
                        共{this.state.data.length}个系统
                    </div>
                    <div className="right header-seach-wrap">
                        <Search
                            value={this.state.systemSearch}
                            placeholder="搜索相关信息"
                            onSearch={() => {
                                this.systemSearch()
                            }}
                        />
                    </div>
                </div>
                <div className="lg-common-tb">
                    <div className="lg-common-tb-header">
                        {
                            <LgTh columns={this.state.thColumns}/>
                        }
                    </div>
                    <Scrollbars className="common-page-content">
                        <Collapse accordion value={this.openIndex} onChange={this.openIndexChange}>
                            {
                                this.state.data.map((o: any, i: number) => {
                                    const LgTrDom = (
                                        <LgTr key={`system-list-${i}`}>
                                            <LgTd width={widthsMatch.id}>{i + 1}</LgTd>
                                            <LgTd width={widthsMatch.systemId}>{o.systemId}</LgTd>
                                            <LgTd width={widthsMatch.systemName}>{o.systemName}</LgTd>
                                            <LgTd width={widthsMatch.baseWebUrl}>{o.baseWebUrl}</LgTd>
                                            <LgTd width={widthsMatch.webSvrAddr}>{o.webSvrAddr}</LgTd>
                                            <LgTd width={widthsMatch.lockState}>{o.lockState}</LgTd>
                                            <LgTd width={widthsMatch.systemState}>{o.systemState}</LgTd>
                                            <LgTd width={widthsMatch.version}>{o.version}</LgTd>
                                            <LgTd width={widthsMatch.handles}>编辑</LgTd>
                                        </LgTr>
                                    )
                                    const moduleLists: IModuleInfo[] = o.wxSchoolSystemModuleList || []
                                    return moduleLists.length ? (
                                        <Collapse.Item title={LgTrDom} key={`collapse-${i}`} name={i + ''}>
                                            <ModuleLists data={moduleLists} handChangeSysData={
                                                (moduleInfo, moduleIndex) => {
                                                    this.handChangeSysData(moduleInfo, moduleIndex, i)
                                                }}/>
                                        </Collapse.Item>
                                    ) : LgTrDom
                                })
                            }
                        </Collapse>
                    </Scrollbars>
                </div>
            </div>
        );
    }
}

interface IModuleListsProps {
    data: Array<IModuleInfo>

    handChangeSysData?(moduleInfo: any, moduleIndex: number): void
}

interface IModuleListsState {
    thColumns: Array<any>
}

class ModuleLists extends Component<IModuleListsProps, IModuleListsState> {
    private static readonly WIDTH_MATCHES = {
        moduleId: '10%',
        moduleName: '20%',
        belongAdmin: '17%',
        appId: '15%',
        appUrl: '15%',
        moduleState: '9%',
        mobileAppState: '9%',
        handles: '10%',
    }

    constructor(props: IModuleListsProps) {
        super(props);
        const widthsMatch = ModuleLists.WIDTH_MATCHES
        this.state = {
            thColumns: [
                {value: '模块ID', props: 'moduleId', width: widthsMatch.moduleId},
                {value: '模块名称', props: 'moduleName', width: widthsMatch.moduleName},
                {value: '支持角色', props: 'belongAdmin', width: widthsMatch.belongAdmin},
                {value: '小程序appId', props: 'appId', width: widthsMatch.appId},
                {value: '初始路径', props: 'appUrl', width: widthsMatch.appUrl},
                {value: '小程序显示', props: 'wxAppState', width: widthsMatch.moduleState},
                {value: 'h5显示', props: 'mobileAppState', width: widthsMatch.mobileAppState},
                {value: '编辑', props: '', width: widthsMatch.handles},
            ],
        }
        this.handWxState = this.handWxState.bind(this)
    }

    handWxState(index: number, checked: boolean) {
        let moduleInfo: IModuleInfo = this.props.data[index]
        moduleInfo.moduleState = checked ? 1 : 0
        this.props.handChangeSysData && this.props.handChangeSysData(moduleInfo, index)
    }

    render() {
        const widthsMatch = ModuleLists.WIDTH_MATCHES
        return (
            <>
                {
                    <LgTh columns={this.state.thColumns}/>
                }
                {
                    this.props.data.map((o: any, i: number) => {
                        return (
                            <LgTr key={`module-list-${i}`}>
                                <LgTd width={widthsMatch.moduleId}>{o.moduleId}</LgTd>
                                <LgTd width={widthsMatch.moduleName}>{o.moduleName}</LgTd>
                                <LgTd width={widthsMatch.belongAdmin}>
                                    {_concatIdentityStr(o)}
                                </LgTd>
                                <LgTd width={widthsMatch.appId}>{o.appId || '-'}</LgTd>
                                <LgTd width={widthsMatch.appUrl}>{o.appUrl || '-'}</LgTd>
                                <LgTd className="flex-row-center" width={widthsMatch.moduleState}>
                                    <LgSwitch size="small" disabled={o.moduleState === 2} checked={o.moduleState === 1}
                                              onClick={(checked) => this.handWxState(i, checked)}/>
                                </LgTd>
                                <LgTd className="flex-row-center" width={widthsMatch.mobileAppState}>
                                    <LgSwitch size="small" disabled={true} checked={!!o.mobileAppState}/>
                                </LgTd>
                                <LgTd width={widthsMatch.handles}>编辑</LgTd>
                            </LgTr>
                        )
                    })
                }
            </>
        );
    }
}


export default Index;
import React, {Component} from 'react';
import {Collapse, Select} from "element-react";
import {Search} from "@/components/search";
import {LgTable, TableColumn} from "@/components/table";
import {LgTd, LgTh, LgTr} from "@/components/miniCampusTb";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {addWeapp, getWeapp} from "../../network/http";
import {LgPopLayer} from "@/components/popLayer";
import {RouteComponentProps} from "react-router-dom";
import {ISystemInfo, ISystemInsideInfo, SysyemStates} from "@/views/weappMg/model";
import WeappPop from "@/views/weappMg/pops/weappPop";
import {AddBtn} from "@/components/common";
import {setSpecifiedWeappData} from "../../redux/weapp/action";
import {connect} from "react-redux";
import {Dispatch} from "redux";

import "../../css/common.scss"
import './index.scss'
import {defaultProps} from "@/views/weappMg/pops/weappPop/model";
import {lgAlert} from "@/components/alert";

interface IWeappMgState {
    selectedState: number | ''
    systemSearch: string
    states: Array<any>
    thColumns: Array<any>
    data: Array<any>
    isOpenSystemPop: boolean
    weappData:any
}


class Index extends Component<RouteComponentProps, IWeappMgState> {
    static defaultProps: {} = {}
    private static readonly WIDTH_MATCHES = {
        id: '5%',
        systemName: '15%',
        systemId: '15%',
        primaryAppId: '15%',
        universityAppId: '15%',
        systemState: '15%',
        version: '15%',
        handles: '10%',
    }
    private openIndex: string;
    private openWeappPopType: number;//0添加1编辑
    public weappPopRef:any = React.createRef()

    constructor(props: RouteComponentProps) {
        super(props);
        const widthsMatch = Index.WIDTH_MATCHES
        this.state = {
            selectedState: 1,
            states: [
                {
                    value: '',
                    label: '全部'
                }, {
                    value: 1,
                    label: '可用'
                }, {
                    value: 0,
                    label: '不可用'
                }, {
                    value: 2,
                    label: '维护中'
                }
            ],
            systemSearch: '',
            thColumns: [
                {value: '#', props: 'id', width: widthsMatch.id},
                {value: '小程序名称', props: 'systemName', width: widthsMatch.systemName},
                {value: '系统ID', props: 'systemId', width: widthsMatch.systemId},
                {value: '中小学appId', props: 'primaryAppId', width: widthsMatch.primaryAppId},
                {value: '大学appId', props: 'universityAppId', width: widthsMatch.universityAppId},
                {value: '系统状态', props: 'systemState', width: widthsMatch.systemState},
                {value: '版本号', props: 'version', width: widthsMatch.version},
                {value: '操作', width: widthsMatch.handles},
            ],
            data: [],
            isOpenSystemPop: false,
            weappData:{}
        }
        this.openIndex = "1"
        this.openWeappPopType = 0
        this.systemSearch = this.systemSearch.bind(this);
        this.openIndexChange = this.openIndexChange.bind(this);

        this.openAddWeappPop = this.openAddWeappPop.bind(this);
        this.systemPopDidOpened = this.systemPopDidOpened.bind(this);
        this.systemPopDidClosed = this.systemPopDidClosed.bind(this);
        this.systemPopDidConfirm = this.systemPopDidConfirm.bind(this);
        this.onWeappPopRef = this.onWeappPopRef.bind(this);
    }

    async componentDidMount() {
        this.loadWeappLists()
    }

    async loadWeappLists(){
        const data: ISystemInfo[] = await getWeapp({})
        this.setState({data: data})
    }

    onWeappPopRef(child:any){
        this.weappPopRef = child
    }

    systemSearch() {

    }

    openIndexChange(activeNames: string) {
        console.log(activeNames)
        this.openIndex = activeNames
    }

    showSystemStateTxt(systemState: number) {
        let showTxt: string
        switch (SysyemStates[systemState]) {
            case 'USEFUL':
                showTxt = '可用';
                break;
            case 'USELESS':
                showTxt = '不可用';
                break;
            case 'MAINTENANCE':
                showTxt = '维护中';
                break;
            default:
                showTxt = '未知';
                break;
        }
        return showTxt
    }

    //弹窗相关
    openAddWeappPop(type: number, data?: object) {
        this.openWeappPopType = type
        const initData = defaultProps.data
        this.setState({
            isOpenSystemPop: true,
            weappData:type===0?initData:(data||initData)
        })
    }

    systemPopDidOpened() {

    }

    systemPopDidClosed() {
        this.setState({isOpenSystemPop: false})
    }

    async systemPopDidConfirm() {
        console.log(this.weappPopRef.getWeappHttpData())
        const httpData = this.weappPopRef.getWeappHttpData()
        const resData = await addWeapp(httpData)
        lgAlert.show({tipType: 'success', content: "添加成功！", position: {xAxis: 'center', yAxis: 'center'}})
        this.loadWeappLists()
    }

    //弹窗相关-结束
    render() {
        const widthsMatch = Index.WIDTH_MATCHES
        return (
            <div className="common-page common-page1">
                <div className="common-page-header clear">
                    <div className="left">
                        <Select value={this.state.selectedState}>
                            {
                                this.state.states.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                })
                            }
                        </Select>
                    </div>
                    <div className="left header-seach-total">
                        共624个小程序
                    </div>
                    <div className="right">
                        <AddBtn text="添加小程序" handClick={() => {
                            this.openAddWeappPop(0)
                        }}/>
                    </div>
                    <div className="right header-seach-wrap">
                        <Search
                            value={this.state.systemSearch}
                            placeholder="搜索相关信息"
                            onSearch={this.systemSearch}
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
                                            <LgTd width={widthsMatch.systemName}>{o.systemName}</LgTd>
                                            <LgTd width={widthsMatch.systemId}>{o.systemId}</LgTd>
                                            <LgTd width={widthsMatch.primaryAppId}>{o.primaryAppId}</LgTd>
                                            <LgTd width={widthsMatch.universityAppId}>{o.universityAppId}</LgTd>
                                            <LgTd
                                                width={widthsMatch.systemState}>{this.showSystemStateTxt(o.systemState)}</LgTd>
                                            <LgTd width={widthsMatch.version}>{o.version}</LgTd>
                                            <LgTd width={widthsMatch.handles}>
                                                <div onClick={() => {
                                                    this.openAddWeappPop(1, o)
                                                }}>编辑
                                                </div>
                                            </LgTd>
                                        </LgTr>
                                    )
                                    const wxSystemModules: ISystemInsideInfo[] = o.wxSystemModules || []
                                    return wxSystemModules.length ? (
                                        <Collapse.Item title={LgTrDom} key={`collapse-${i}`} name={i + ''}>
                                            <ModuleLists data={wxSystemModules}/>
                                        </Collapse.Item>
                                    ) : LgTrDom
                                })
                            }
                        </Collapse>
                    </Scrollbars>
                </div>
                <LgPopLayer
                    width={960}
                    height={600}
                    coverLayerClass={'true'}
                    isOpen={this.state.isOpenSystemPop}
                    onShowLayer={this.systemPopDidOpened}
                    title={this.openWeappPopType===0?'添加小程序':'编辑小程序'}
                    onClose={this.systemPopDidClosed}
                    onConfirm={this.systemPopDidConfirm}
                    onIconClose={this.systemPopDidClosed}
                >
                    <WeappPop onRef={this.onWeappPopRef} data={this.state.weappData}></WeappPop>
                </LgPopLayer>
            </div>
        );
    }
}

interface IModuleListsProps {
    data: Array<ISystemInsideInfo>
}

interface IModuleListsState {
    thColumns: Array<any>
}

class ModuleLists extends Component<IModuleListsProps, IModuleListsState> {
    private static readonly WIDTH_MATCHES = {
        moduleName: '20%',
        defaultVersion: '10%',
        defaultAppUrl: '20%',
        schoolType: '20%',
        belong: '20%',
        handles:'10%'
    }

    constructor(props: IModuleListsProps) {
        super(props);
        const widthsMatch = ModuleLists.WIDTH_MATCHES
        this.state = {
            thColumns: [
                {value: '模块名称', props: 'moduleName', width: widthsMatch.moduleName},
                {value: '默认版本号', props: 'defaultVersion', width: widthsMatch.defaultVersion},
                {value: '默认访问路径', props: 'defaultAppUrl', width: widthsMatch.defaultAppUrl},
                {value: '学校类型', props: 'schoolType', width: widthsMatch.schoolType},
                {value: '支持角色', props: 'belong', width: widthsMatch.belong},
                {value: '编辑', props: '', width: widthsMatch.handles},
            ],
        }
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
                                <LgTd width={widthsMatch.moduleName}>{o.moduleName}</LgTd>
                                <LgTd width={widthsMatch.defaultVersion}>{o.defaultVersion}</LgTd>
                                <LgTd width={widthsMatch.defaultAppUrl}>{o.defaultAppUrl}</LgTd>
                                <LgTd width={widthsMatch.schoolType}>{o.schoolType}</LgTd>
                                <LgTd width={widthsMatch.belong}>{o.belong}</LgTd>
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
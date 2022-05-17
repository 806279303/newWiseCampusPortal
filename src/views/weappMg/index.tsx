import React, {Component} from 'react';
import {Collapse, Select} from "element-react";
import {Search} from "@/components/search";
import {LgTable, TableColumn} from "@/components/table";
import {LgTd, LgTh, LgTr} from "@/components/miniCampusTb";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {addModule, addWeapp, delModules, delWeapp, getWeapp, putModule, putWeapp} from "../../network/http";
import {LgPopLayer} from "@/components/popLayer";
import {RouteComponentProps} from "react-router-dom";
import {ISystemInfo, ISystemInsideInfo, SysyemStates} from "@/views/weappMg/model";
import WeappPop from "@/views/weappMg/pops/weappPop";
import {AddBtn} from "@/components/common";
import {LgButton} from "@/components/button";
import {editIcon as Edit, deleteIcon as Delete} from "@/components/button/img/index";
import "../../css/common.scss"
import './index.scss'
import {defaultProps} from "@/views/weappMg/pops/weappPop/model";
import {defaultInsideWeappProps} from "@/views/weappMg/pops/insertWeappPop/model";
import {lgAlert} from "@/components/alert";
import {InsertWeappPop} from "@/views/weappMg/pops/insertWeappPop";
import Pops from "../../utils/pops";
import {_concatIdentityFromType, _handleHttpResponse} from "../../utils/common";

interface IWeappMgState {
    selectedState: number | ''
    systemSearch: string
    states: Array<any>
    thColumns: Array<any>
    data: Array<any>
    isOpenSystemPop: boolean
    weappData: any
    isOpenInsertSystemPop: boolean
    insertWeappData: any
}


class Index extends Component<RouteComponentProps, IWeappMgState> {
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
    private openInsertWeappPopType: number;//0添加1编辑
    public weappPopRef: any = React.createRef()
    public insertWeappPopRef: any = React.createRef()

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
            weappData: {},

            isOpenInsertSystemPop: false,
            insertWeappData: {}
        }
        this.openIndex = "1"
        this.openWeappPopType = 0//0添加1编辑
        this.openInsertWeappPopType = 0//0添加1编辑
        this.systemSearch = this.systemSearch.bind(this);
        this.openIndexChange = this.openIndexChange.bind(this);
        this.openAddWeappPop = this.openAddWeappPop.bind(this);
        //弹窗-小程序
        this.systemPopDidClosed = this.systemPopDidClosed.bind(this);
        this.systemPopDidConfirm = this.systemPopDidConfirm.bind(this);
        this.onWeappPopRef = this.onWeappPopRef.bind(this);
        this.delWeappPop = this.delWeappPop.bind(this);
        //弹窗-内置模块
        this.insertWeappPopDidClosed = this.insertWeappPopDidClosed.bind(this);
        this.insertWeappPopDidConfirm = this.insertWeappPopDidConfirm.bind(this);
        this.onInsideWeappPopRef = this.onInsideWeappPopRef.bind(this);
        this.openInsideWeappPop = this.openInsideWeappPop.bind(this);
        this.delInsideWeapp = this.delInsideWeapp.bind(this);
    }

    async componentDidMount() {
        this.loadWeappLists()
    }

    async loadWeappLists() {
        const data: ISystemInfo[] = await getWeapp({})
        this.setState({data: data})
    }

    onWeappPopRef(child: any) {
        this.weappPopRef = child
    }

    onInsideWeappPopRef(child: any) {
        this.insertWeappPopRef = child
    }

    systemSearch() {

    }

    openIndexChange(activeNames: string) {
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
            weappData: type === 0 ? initData : (data || initData)
        })
    }

    systemPopDidClosed() {
        this.setState({isOpenSystemPop: false})
    }

    async systemPopDidConfirm() {
        Pops.showLoading()
        const httpData = this.weappPopRef.getWeappHttpData()
        Pops.hideLoading()
        if (this.openWeappPopType === 0) {//添加
            const resData = await addWeapp(httpData)
            console.log(resData)
            _handleHttpResponse(resData, ()=>{
                Pops.showSuccess("添加成功！")
                this.setState({ isOpenSystemPop:false})
                this.loadWeappLists()
            })
        } else {
            const resData = await putWeapp(httpData)
            _handleHttpResponse(resData, ()=>{
                Pops.showSuccess("编辑成功！")
                this.loadWeappLists()
                this.setState({ isOpenSystemPop:false})
            })
        }
    }

    //弹窗相关-结束

    //insert弹窗
    openInsideWeappPop(type: number, insideData: any, weappData: any) {
        this.openInsertWeappPopType = type
        if (type == 0) {
            const initData = defaultInsideWeappProps.data
            initData.systemId = weappData.systemId
            this.setState({insertWeappData: initData, isOpenInsertSystemPop: true})
        } else {
            this.setState({insertWeappData: insideData, isOpenInsertSystemPop: true})
        }
    }

    insertWeappPopDidClosed() {
        this.setState({isOpenInsertSystemPop: false})
    }

    async insertWeappPopDidConfirm() {
        Pops.showLoading()
        const httpData = this.insertWeappPopRef.getHttpData()
        Pops.hideLoading()
        if (this.openInsertWeappPopType === 0) {//添加
            const resData = await addModule(httpData)
            _handleHttpResponse(resData, ()=>{
                Pops.showSuccess('添加成功！')
                this.setState({ isOpenSystemPop:false, isOpenInsertSystemPop:false})
                this.loadWeappLists()
            })
        } else {
            const resData = await putModule(httpData)
            _handleHttpResponse(resData, ()=>{
                Pops.showSuccess('编辑成功！')
                this.setState({ isOpenSystemPop:false, isOpenInsertSystemPop:false})
                this.loadWeappLists()
            })
        }
    }

    delWeappPop(data: any) {
        const that = this
        lgAlert.show({
            content: '是否确认删除该小程序？',
            tipType: 'warning',
            tipSize: 'small',
            tipMouldType: 'A',
            duration: 0,
            isShowCloseBtn: true,
            position: {xAxis: "center", yAxis: "center"},
            onConfirm() {
                const delIds = {ids:[data.id].join(',')}
                delWeapp(delIds).then(resData=>{
                    _handleHttpResponse(resData, ()=>{
                        Pops.showSuccess('删除成功')
                        that.setState({ isOpenSystemPop:false, isOpenInsertSystemPop:false})
                        that.loadWeappLists()
                    })
                })
            }
        });
    }

    async delInsideWeapp(data: any) {
        const that = this
        lgAlert.show({
            content: '是否确认删除该内置模块？',
            tipType: 'warning',
            tipSize: 'small',
            tipMouldType: 'A',
            duration: 0,
            isShowCloseBtn: true,
            position: {xAxis: "center", yAxis: "center"},
            onConfirm() {
                const delIds = {ids:[data.id].join(',')}
                delModules(delIds).then(resData=>{
                    _handleHttpResponse(resData, ()=>{
                        Pops.showSuccess('删除成功')
                        that.setState({ isOpenSystemPop:false, isOpenInsertSystemPop:false})
                        that.loadWeappLists()
                    })
                })
            }
        });
    }

    //insert弹窗-结束
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
                                            <LgTd className="flex-center" width={widthsMatch.handles}>
                                                <i className="el-icon-plus system-list-add"
                                                   onClick={() => {
                                                       this.openInsideWeappPop(0, {}, o)
                                                   }}/>
                                                <LgButton
                                                    className=""
                                                    value={""}
                                                    shapeType="text"
                                                    showIcon
                                                    icon={<Edit style={{fill: "#0099ff"}}/>}
                                                    onClick={() => {
                                                        this.openAddWeappPop(1, o)
                                                    }}
                                                />
                                                <LgButton
                                                    className=""
                                                    value={""}
                                                    shapeType="text"
                                                    showIcon
                                                    icon={<Delete style={{fill: "#ec5260"}}/>}
                                                    onClick={() => {
                                                        this.delWeappPop(o)
                                                    }}
                                                />
                                            </LgTd>
                                        </LgTr>
                                    )
                                    const wxSystemModules: ISystemInsideInfo[] = o.wxSystemModules || []
                                    return wxSystemModules.length ? (
                                        <Collapse.Item title={LgTrDom} key={`collapse-${i}`} name={i + ''}>
                                            <ModuleLists data={wxSystemModules}
                                                         openInsideWeappPop={this.openInsideWeappPop}
                                                         delInsideWeapp={this.delInsideWeapp}/>
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
                    onShowLayer={() => {
                    }}
                    title={this.openWeappPopType === 0 ? '添加小程序' : '编辑小程序'}
                    onClose={this.systemPopDidClosed}
                    onConfirm={this.systemPopDidConfirm}
                    onIconClose={this.systemPopDidClosed}
                >
                    <WeappPop onRef={this.onWeappPopRef} data={this.state.weappData}></WeappPop>
                </LgPopLayer>

                <LgPopLayer
                    width={960}
                    height={600}
                    coverLayerClass={'true'}
                    onShowLayer={() => {
                    }}
                    onClose={this.insertWeappPopDidClosed}
                    onIconClose={this.insertWeappPopDidClosed}
                    onConfirm={this.insertWeappPopDidConfirm}
                    isOpen={this.state.isOpenInsertSystemPop}
                    title={this.openInsertWeappPopType === 0 ? '添加内部模块' : '编辑内部模块'}
                >
                    <InsertWeappPop onRef={this.onInsideWeappPopRef} data={this.state.insertWeappData}/>
                </LgPopLayer>
            </div>
        );
    }
}

interface IModuleListsProps {
    data: Array<ISystemInsideInfo>
    openInsideWeappPop: (type: number, insertData: any, weappData: any) => void
    delInsideWeapp: (data: any) => void
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
        handles: '10%'
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
                                <LgTd width={widthsMatch.belong}>{_concatIdentityFromType(o)}</LgTd>

                                <LgTd className="flex-center" width={widthsMatch.handles}>
                                    <LgButton
                                        className=""
                                        value={""}
                                        shapeType="text"
                                        showIcon
                                        icon={<Edit className="" style={{fill: "#0099ff"}}/>}
                                        onClick={() => {
                                            this.props.openInsideWeappPop(1, o, {})
                                        }}
                                    />
                                    <LgButton
                                        className=""
                                        value={""}
                                        shapeType="text"
                                        showIcon
                                        icon={<Delete className="" style={{fill: "#ec5260"}}/>}
                                        onClick={() => {
                                            this.props.delInsideWeapp(o)
                                        }}
                                    />
                                </LgTd>
                            </LgTr>
                        )
                    })
                }
            </>
        );
    }
}

export default Index;
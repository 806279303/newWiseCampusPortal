import React, {Component} from 'react';
import {Collapse} from "element-react";
import {Search} from "@/components/search";
import {LgTd, LgTh, LgTr} from "@/components/miniCampusTb";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {
    exportSchoolSystemInfo,
    fastReplaceLogoUrl,
    getWxSchoolSystem,
    putWxSchoolModule,
    synSchoolSystem,
    synSchoolSystemAndModule,
    synSchoolSystemModule
} from "../../network/http";
import {LgSwitch} from "@/components/switch";

import {RouteComponentProps} from "react-router-dom";
import {IModuleInfo, ISystemInfo} from "@/views/schoolSystem/model";

import "../../css/common.scss"
import './index.scss'
import {_concatIdentityStr, _filterIPFromUrl, _showSystemLockStateTxt, _showSystemStateTxt} from "../../utils/common";
import Pops from "../../utils/pops";
import {editIcon as Edit} from "@/components/button/img";
import {LgButton} from "@/components/button";
import EditModuleLayer from "@/views/schoolSystem/components/editModuleLayer/editModuleLayer";
import EditWeappLayer from "@/views/schoolSystem/components/editSystemLayer/editSystemLayer";
import {FastReplaceUrlData, IWeappMgState} from "@/type/schoolSystem/SchoolSystemState";
import FastReplaceUrlLayer from "@/views/schoolSystem/components/fastReplaceUrlLayer/fastReplaceUrlLayer";
import {publicIp} from "@/network/apiURL";

const defaultFastReplaceUrlData: FastReplaceUrlData = {
    beforeReplaceUrl: '',
    afterReplaceUrl: ''
}

class Index extends Component<RouteComponentProps, IWeappMgState> {
    static defaultProps: {} = {}
    private static readonly WIDTH_MATCHES = {
        id: '3%',
        systemId: '8%',
        systemName: '13%',
        baseWebUrl: '25%',
        webSvrAddr: '25%',
        lockState: '6%',
        systemState: '6%',
        version: '5%',
        handles: '10%',
    }
    private openIndex: string;
    private currentSchoolInfo: {
        schoolId:string
        version:string
    }
    private rootData:ISystemInfo[]

    constructor(props: RouteComponentProps) {
        super(props);
        const widthsMatch = Index.WIDTH_MATCHES
        this.state = {
            systemSearch: '',
            thColumns: [
                {value: '#', props: 'id', width: widthsMatch.id},
                {value: '??????ID', props: 'systemId', width: widthsMatch.systemId},
                {value: '????????????', props: 'systemName', width: widthsMatch.systemName},
                {value: '??????????????????', props: 'baseWebUrl', width: widthsMatch.baseWebUrl},
                {value: '???????????????????????????', props: 'webSvrAddr', width: widthsMatch.webSvrAddr},
                {value: '????????????', props: 'lockState', width: widthsMatch.lockState},
                {value: '???????????????', props: 'systemState', width: widthsMatch.systemState},
                {value: '?????????', props: 'version', width: widthsMatch.version},
                {value: '??????', width: widthsMatch.handles},
            ],
            data: [],

            showModuleLayer: false,
            currentModuleLayerData: {},

            showWeappLayer: false,
            currentWeappLayerData: {},

            showFastReplaceUrlLayer: false,
            fastReplaceUrlData: defaultFastReplaceUrlData,
        }
        this.handChangeSysData = this.handChangeSysData.bind(this)
        this.openIndexChange = this.openIndexChange.bind(this);
        this.backToSchoolInfo = this.backToSchoolInfo.bind(this);
        this.systemSearch = this.systemSearch.bind(this);
        this.synSchoolSystem = this.synSchoolSystem.bind(this);
        this.syncSchoolModules = this.syncSchoolModules.bind(this);
        this.syncSchoolModules = this.syncSchoolModules.bind(this);
        this.synSchoolSystemAndModule = this.synSchoolSystemAndModule.bind(this);
        this.fastReplaceLogoUrl = this.fastReplaceLogoUrl.bind(this);
        this.exportSystemInfo = this.exportSystemInfo.bind(this);
        this.openModulePop = this.openModulePop.bind(this);
        this.afterEditSystem = this.afterEditSystem.bind(this);
        this.afterEditWeapp = this.afterEditWeapp.bind(this);
        this.openFastReplaceLayer = this.openFastReplaceLayer.bind(this);
        this.afterEditFastReplace = this.afterEditFastReplace.bind(this);
        this.openIndex = "1"
        this.currentSchoolInfo = {
            schoolId:'',
            version:'1'
        }
        this.rootData = []
    }


    async componentDidMount() {
        const routerParams: any = this.props.match.params
        this.currentSchoolInfo = routerParams
        await this.loadWxSchoolModules()
    }

    async loadWxSchoolModules() {
        const currentSchoolInfo = this.currentSchoolInfo
        const schoolId = currentSchoolInfo.schoolId
        let data: any = await getWxSchoolSystem({schoolId})
        this.rootData = data
        const showData = this.filterSchoolModules(data)
        this.setState({data:showData})
    }

    filterSchoolModules(data:ISystemInfo[]){
        const systemSearch = this.state.systemSearch
        const weappData = []
        const otherData = []
        let showData = []
        for(let item of data){//?????????????????????????????????????????????
            if(item.hasWxApplet){
                weappData.push(item)
            }else{
                otherData.push(item)
            }
        }
        showData = weappData.concat(otherData)
        return showData.filter((item: any) => item.systemName.indexOf(systemSearch) !== -1 || item.systemId.indexOf(systemSearch) !== -1)
    }

    async handChangeSysData(moduleInfo: any, moduleIndex: number, index: number) {
        let data = this.state.data
        console.log(moduleInfo)
        try {
            await putWxSchoolModule({
                id: moduleInfo.id,
                appId: moduleInfo.appId,
                appUrl: moduleInfo.appUrl,
                moduleState: moduleInfo.moduleState ? 1 : 0,
                trialShow: moduleInfo.trialShow ? 1 : 0,
                pageVersion: moduleInfo.pageVersion ? 1 : 0,
            })
            Pops.showSuccess('????????????')
            data[index].wxSchoolSystemModuleList[moduleIndex].moduleState = moduleInfo.moduleState ? 1 : 0
            this.setState({data: [...data]})
        } catch (err: any) {
            Pops.showError(err.message)
            data[index].wxSchoolSystemModuleList[moduleIndex].moduleState = moduleInfo.moduleState ? 0 : 1
            this.setState({data: [...data]})
        }
    }

    openIndexChange(activeNames: string) {
        this.openIndex = activeNames
    }

    backToSchoolInfo() {
        this.props.history.goBack()
    }

    systemSearch() {
        const data = this.filterSchoolModules(this.rootData)
        this.setState({ data:data })
    }

    //???????????????
    synSchoolSystem() {
        const currentSchoolInfo = this.currentSchoolInfo
        const schoolId = currentSchoolInfo.schoolId
        Pops.showLoading('?????????')
        synSchoolSystem({schoolId}).then((res: any) => {
            Pops.hideLoading()
            if (res.error == 0) {
                Pops.showSuccess('????????????')
                this.loadWxSchoolModules()
            } else {
                Pops.showError('????????????')
            }
        }).catch(_ => {
            Pops.showError('????????????')
        })
    }

    //???????????????
    syncSchoolModules() {
        const currentSchoolInfo = this.currentSchoolInfo
        const schoolId = currentSchoolInfo.schoolId
        Pops.showLoading('?????????')
        synSchoolSystemModule({schoolId}).then((res: any) => {
            Pops.hideLoading()
            if (res.error == 0) {
                Pops.showSuccess('????????????')
                this.loadWxSchoolModules()
            } else {
                Pops.showError('????????????')
            }
        }).catch(_ => {
            Pops.showError('????????????')
        })
    }

    //????????????????????????
    async fastReplaceLogoUrl() {
        try{
            const currentSchoolInfo = this.currentSchoolInfo
            const schoolId = currentSchoolInfo.schoolId
            Pops.showLoading('?????????')
            await fastReplaceLogoUrl(schoolId)
            Pops.hideLoading()
            Pops.showSuccess('????????????')
        }catch (e) {
            Pops.hideLoading()
            Pops.showError('????????????')
        }
    }

    //????????????????????????
    async exportSystemInfo() {
        try{
            const currentSchoolInfo = this.currentSchoolInfo
            const schoolId = currentSchoolInfo.schoolId
            Pops.showLoading('?????????')
            const exportBaseUrl = exportSchoolSystemInfo(schoolId)
            window.open(exportBaseUrl)
            Pops.hideLoading()
        }catch (e) {
            Pops.hideLoading()
            Pops.showError('????????????')
        }
    }



    //?????????????????????
    synSchoolSystemAndModule() {
        const currentSchoolInfo = this.currentSchoolInfo
        const schoolId = currentSchoolInfo.schoolId
        Pops.showLoading('?????????')
        synSchoolSystemAndModule({schoolId}).then((res: any) => {
            Pops.hideLoading()
            if (res.error == 0) {
                Pops.showSuccess('????????????')
                this.loadWxSchoolModules()
            } else {
                Pops.showError('????????????')
            }
        }).catch(_ => {
            Pops.showError('????????????')
        })
    }

    openSystemPop(systemInfo: ISystemInfo) {
        this.triggerWeappPop(1, systemInfo)
    }

    openModulePop(moduleInfo: IModuleInfo) {
        this.triggerModulePop(1, moduleInfo)
    }

    openFastReplaceLayer() {
        const data = this.state.data
        let preIp = ''
        let afterIp = ''
        for (let i = 0; i < data.length; i++) {
            let filterItemPreUrl = _filterIPFromUrl(data[i].baseWebUrl)
            let filterItemAterUrl = _filterIPFromUrl(data[i].webSvrAddr)
            if (filterItemPreUrl) {
                var evidenceOfInsideIp = filterItemPreUrl.split('.')[0]
                if (evidenceOfInsideIp == '192' || evidenceOfInsideIp == '172') {//???????????????IP
                    preIp = filterItemPreUrl
                }
            }
            if (filterItemAterUrl) {
                afterIp = filterItemAterUrl
                if (preIp && preIp == afterIp) {
                    afterIp = ''
                }
            }
            if (preIp && afterIp) break
        }
        this.triggerFastReplacePop(1, {
            afterReplaceUrl: afterIp,
            beforeReplaceUrl: preIp
        })
    }

    triggerModulePop(type
                         :
                         0 | 1, moduleInfo ?: IModuleInfo
    ) {
        if (type == 0) {//??????
            this.setState({currentModuleLayerData: {}, showModuleLayer: false})
        } else {//??????
            this.setState({currentModuleLayerData: moduleInfo || {}, showModuleLayer: true})
        }
    }

    triggerWeappPop(type
                        :
                        0 | 1, weappInfo ?: ISystemInfo
    ) {
        if (type == 0) {//??????
            this.setState({currentWeappLayerData: {}, showWeappLayer: false})
        } else {//??????
            this.setState({currentWeappLayerData: weappInfo || {}, showWeappLayer: true})
        }
    }

    triggerFastReplacePop(type: 0 | 1, replaceInfo ?: FastReplaceUrlData) {
        if (type == 0) {//??????
            this.setState({fastReplaceUrlData: defaultFastReplaceUrlData, showFastReplaceUrlLayer: false})
        } else {//??????
            this.setState({
                fastReplaceUrlData: replaceInfo || defaultFastReplaceUrlData,
                showFastReplaceUrlLayer: true
            })
        }
    }

    async afterEditSystem() {
        this.triggerModulePop(0)
        await this.loadWxSchoolModules()
    }

    async afterEditWeapp() {
        this.triggerWeappPop(0)
        await this.loadWxSchoolModules()
    }

    async afterEditFastReplace() {
        this.triggerFastReplacePop(0)
        await this.loadWxSchoolModules()
    }


    render() {
        const widthsMatch = Index.WIDTH_MATCHES
        const {
            data,
            showModuleLayer,
            currentModuleLayerData,
            showWeappLayer,
            currentWeappLayerData,
            showFastReplaceUrlLayer,
            fastReplaceUrlData
        } = this.state
        return (
            <div className="common-page common-page1">
                <div className="common-page-header clear">
                    <i className="el-icon-arrow-left left school-system-back" onClick={this.backToSchoolInfo}/>
                    <div className="left common-page-header-total">
                        ???{this.state.data.length}?????????
                    </div>
                    <div className="right common-btn common-btn-green school-sync-btn"
                         onClick={this.synSchoolSystemAndModule}>?????????????????????
                    </div>
                    <div className="right common-btn common-btn-green school-sync-btn"
                         onClick={this.syncSchoolModules}>???????????????
                    </div>
                    <div className="right common-btn common-btn-green school-sync-btn"
                         onClick={this.synSchoolSystem}>???????????????
                    </div>
                    <div className="right common-btn common-btn-green school-sync-btn"
                         onClick={this.openFastReplaceLayer}>??????????????????
                    </div>
                    <div className="right common-btn common-btn-blue school-sync-btn"
                         onClick={this.fastReplaceLogoUrl}>??????????????????
                    </div>
                    <div className="right common-btn common-btn-blue school-sync-btn"
                         onClick={this.exportSystemInfo}>???????????????
                    </div>
                    <div className="right header-seach-wrap">
                        <Search
                            value={this.state.systemSearch}
                            onChange={(value:string)=>{this.setState({ systemSearch:value})}}
                            placeholder="??????????????????"
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
                                data.map((o: any, i: number) => {
                                    const { hasWxApplet } = o
                                    const LgTrDom = (
                                        <LgTr key={`system-list-${i}`} className={hasWxApplet?'':'system-list-weapp'}>
                                            <LgTd width={widthsMatch.id}>{i + 1}</LgTd>
                                            <LgTd width={widthsMatch.systemId}>{o.systemId}</LgTd>
                                            <LgTd width={widthsMatch.systemName}>
                                                <img className="lg-common-tb-img" src={o.logoUrl} alt=""/>
                                                <div>{o.systemName}</div>
                                            </LgTd>
                                            <LgTd width={widthsMatch.baseWebUrl} style={{ fontSize:12 }}>{o.baseWebUrl}</LgTd>
                                            <LgTd width={widthsMatch.webSvrAddr} style={{ fontSize:12 }}>{o.webSvrAddr}</LgTd>
                                            <LgTd
                                                width={widthsMatch.lockState}>{_showSystemLockStateTxt(o.lockState)}</LgTd>
                                            <LgTd
                                                width={widthsMatch.systemState}>{_showSystemStateTxt(o.systemState)}</LgTd>
                                            <LgTd width={widthsMatch.version}>{o.version}</LgTd>
                                            <LgTd className="flex-center" width={widthsMatch.handles}>
                                                <LgButton
                                                    className=""
                                                    value={""}
                                                    shapeType="text"
                                                    showIcon
                                                    icon={<Edit style={{fill: "#0099ff"}}/>}
                                                    onClick={() => {
                                                        this.openSystemPop(o)
                                                    }}
                                                />
                                            </LgTd>
                                        </LgTr>
                                    )
                                    const moduleLists: IModuleInfo[] = o.wxSchoolSystemModuleList || []
                                    return moduleLists.length ? (
                                        <Collapse.Item title={LgTrDom} key={`collapse-${i}`} name={i + ''}>
                                            <ModuleLists data={moduleLists}
                                                         openModulePop={this.openModulePop}
                                                         handChangeSysData={
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

                <EditWeappLayer showLayer={showWeappLayer} data={currentWeappLayerData}
                                refreshList={this.afterEditWeapp}/>
                <EditModuleLayer showLayer={showModuleLayer} data={currentModuleLayerData}
                                 refreshList={this.afterEditSystem}/>
                <FastReplaceUrlLayer showLayer={showFastReplaceUrlLayer} data={fastReplaceUrlData}
                                     refreshList={this.afterEditFastReplace}/>
            </div>
        );
    }
}

interface IModuleListsProps {
    data: Array<IModuleInfo>

    openModulePop(moduleInfo: any): void

    handChangeSysData?(moduleInfo: any, moduleIndex: number): void
}

interface IModuleListsState {
    thColumns: Array<any>
}

class ModuleLists extends Component<IModuleListsProps, IModuleListsState> {
    private static readonly WIDTH_MATCHES = {
        moduleId: '10%',
        moduleName: '17%',
        // belongAdmin: '17%',
        appId: '18%',
        appUrl: '20%',
        pageVersion: '10%',
        moduleState: '10%',
        trialShow: '10%',
        handles: '10%',
    }

    constructor(props: IModuleListsProps) {
        super(props);
        const widthsMatch = ModuleLists.WIDTH_MATCHES
        this.state = {
            thColumns: [
                {value: '??????ID', props: 'moduleId', width: widthsMatch.moduleId},
                {value: '????????????', props: 'moduleName', width: widthsMatch.moduleName},
                // {value: '????????????', props: 'belongAdmin', width: widthsMatch.belongAdmin},
                {value: '?????????appId', props: 'appId', width: widthsMatch.appId},
                {value: '????????????', props: 'appUrl', width: widthsMatch.appUrl},
                {value: '??????h5', props: 'pageVersion', width: widthsMatch.pageVersion},
                {value: '????????????', props: 'wxAppState', width: widthsMatch.moduleState},
                {value: '?????????????????????', props: 'trialShow', width: widthsMatch.trialShow},
                {value: '??????', props: '', width: widthsMatch.handles},
            ],
        }
        this.handWxState = this.handWxState.bind(this)
    }

    handWxState(index: number, attr: 'trialShow'|'moduleState'|'pageVersion', checked: boolean) {
        let moduleInfo: IModuleInfo = this.props.data[index]
        moduleInfo[attr] = checked ? 1 : 0
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
                        const hasWeapp = !!o.appId
                        return (
                            <LgTr key={`module-list-${i}`}>
                                <LgTd width={widthsMatch.moduleId}>{o.moduleId || '-'}</LgTd>
                                <LgTd width={widthsMatch.moduleName}>
                                    <img className="lg-common-tb-img" src={o.logoUrl} alt=""/>
                                    <div>{o.moduleName}</div>
                                </LgTd>
                                {/*<LgTd width={widthsMatch.belongAdmin}>*/}
                                {/*    {_concatIdentityStr(o)}*/}
                                {/*</LgTd>*/}
                                <LgTd width={widthsMatch.appId}>{o.appId || '-'}</LgTd>
                                <LgTd width={widthsMatch.appUrl}>{o.appUrl || '-'}</LgTd>
                                <LgTd className="flex-row-center" width={widthsMatch.pageVersion}>
                                    {
                                        hasWeapp ? (
                                            <LgSwitch size="small" disabled={o.moduleState === 2}
                                                      checked={o.pageVersion === 1}
                                                      onClick={(checked) => this.handWxState(i, 'pageVersion', checked)}/>
                                        ) : '-'
                                    }
                                </LgTd>
                                <LgTd className="flex-row-center" width={widthsMatch.moduleState}>
                                    {
                                        hasWeapp ? (
                                            <LgSwitch size="small" disabled={o.moduleState === 2}
                                                      checked={o.moduleState === 1}
                                                      onClick={(checked) => this.handWxState(i, 'moduleState', checked)}/>
                                        ) : '-'
                                    }
                                </LgTd>
                                <LgTd className="flex-row-center" width={widthsMatch.trialShow}>
                                    {
                                        hasWeapp ? (
                                            <LgSwitch size="small" disabled={o.moduleState === 2}
                                                      checked={o.trialShow === 1}
                                                      onClick={(checked) => this.handWxState(i, 'trialShow', checked)}/>
                                        ) : '-'
                                    }
                                </LgTd>
                                <LgTd className="flex-center" width={widthsMatch.handles}>
                                    <LgButton
                                        className=""
                                        value={""}
                                        shapeType="text"
                                        showIcon
                                        icon={<Edit className="" style={{fill: "#0099ff"}}/>}
                                        onClick={() => {
                                            this.props.openModulePop(o)
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
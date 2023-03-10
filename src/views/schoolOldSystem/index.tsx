import React, {Component} from 'react';
import {Collapse} from "element-react";
import {Search} from "@/components/search";
import {LgTd, LgTh, LgTr} from "@/components/miniCampusTb";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {
    getWxSchoolSystem, getWxSchoolSystemFromOld, getWxSchoolSystemFromOldDetail,
    putWxSchoolModule, putWxSchoolOldSystem,
    synSchoolSystem,
    synSchoolSystemAndModule,
    synSchoolSystemModule
} from "../../network/http";
import {LgSwitch} from "@/components/switch";

import {RouteComponentProps} from "react-router-dom";
import {IModuleInfo, ISystemInfo} from "@/views/schoolSystem/model";

import "../../css/common.scss"
import '../schoolSystem/index.scss'
import {_concatIdentityStr, _filterIPFromUrl, _showSystemLockStateTxt, _showSystemStateTxt} from "../../utils/common";
import Pops from "../../utils/pops";
import {editIcon as Edit} from "@/components/button/img";
import {LgButton} from "@/components/button";
import EditWeappLayer from "@/views/schoolOldSystem/components/editSystemLayer/editSystemLayer";
import {
    FastReplaceUrlData,
    IOldWeappMgState,
    IWeappMgState,
    OldFastReplaceUrlData
} from "@/type/schoolSystem/SchoolSystemState";
import FastReplaceUrlLayer from "@/views/schoolOldSystem/components/fastReplaceUrlLayer/fastReplaceUrlLayer";
import {PutSchoolOldSystem, SchoolOldSystem} from "@/type/schoolSystem/schoolOldSystem";

const defaultFastReplaceUrlData: OldFastReplaceUrlData = {
    lists:[],
    beforeReplaceUrl: '',
    afterReplaceUrl: ''
}

class Index extends Component<RouteComponentProps, IOldWeappMgState> {
    static defaultProps: {} = {}
    private static readonly WIDTH_MATCHES = {
        id: '3%',
        systemId: '5%',
        systemName: '13%',
        baseWebUrl: '25%',
        webSvrAddr: '25%',
        lockState: '5%',
        systemState: '5%',
        show: '5%',
        version: '5%',
        handles: '10%',
    }
    private openIndex: string;
    private currentSchoolInfo: {
        schoolId:string
        version:string
    }

    constructor(props: RouteComponentProps) {
        super(props);
        const widthsMatch = Index.WIDTH_MATCHES
        this.state = {
            systemSearch: '',
            thColumns: [
                {value: '#', props: 'id', width: widthsMatch.id},
                {value: '??????ID', props: 'systemId', width: widthsMatch.systemId},
                {value: '????????????', props: 'moduleName', width: widthsMatch.systemName},
                {value: '??????????????????', props: 'webServerAddr', width: widthsMatch.baseWebUrl},
                {value: '???????????????????????????', props: 'url', width: widthsMatch.webSvrAddr},
                {value: '????????????', props: 'newLockState', width: widthsMatch.lockState},
                {value: '???????????????', props: 'state', width: widthsMatch.systemState},
                {value: '??????', props: 'show', width: widthsMatch.show},
                {value: '?????????', props: 'version', width: widthsMatch.version},
                {value: '??????', width: widthsMatch.handles},
            ],
            data: [],

            showWeappLayer: false,
            currentWeappLayerData: {},

            showFastReplaceUrlLayer: false,
            fastReplaceUrlData: defaultFastReplaceUrlData,
        }
        this.openIndexChange = this.openIndexChange.bind(this);
        this.backToSchoolInfo = this.backToSchoolInfo.bind(this);
        this.systemSearch = this.systemSearch.bind(this);
        this.synSchoolSystem = this.synSchoolSystem.bind(this);
        this.afterEditWeapp = this.afterEditWeapp.bind(this);
        this.openFastReplaceLayer = this.openFastReplaceLayer.bind(this);
        this.afterEditFastReplace = this.afterEditFastReplace.bind(this);
        this.openIndex = "1"
        this.currentSchoolInfo = {
            schoolId:'',
            version:'1'
        }
    }


    async componentDidMount() {
        const routerParams: any = this.props.match.params
        this.currentSchoolInfo = routerParams
        await this.loadWxSchoolModules()
    }

    async loadWxSchoolModules() {
        const currentSchoolInfo = this.currentSchoolInfo
        const schoolId = currentSchoolInfo.schoolId
        let data = await getWxSchoolSystemFromOld(schoolId)
        this.setState({data})
    }

    openIndexChange(activeNames: string) {
        this.openIndex = activeNames
    }

    backToSchoolInfo() {
        this.props.history.goBack()
    }

    systemSearch() {

    }

    async handWxState(index: number, checked: boolean) {
        let item: SchoolOldSystem = this.state.data[index]
        try {
            const data = await getWxSchoolSystemFromOldDetail(item.subsystemId)
            const httpData:PutSchoolOldSystem = {
                subsystemId: data.subsystemId,
                url: data.url,
                wsUrl: data.wsUrl,
                state: data.state,
                show: checked,
                version: data.version,
                userType: data.userType,
            }
            await putWxSchoolOldSystem(httpData)
            await this.loadWxSchoolModules()
        }catch (err:any) {
            Pops.showError(err.message)
        }
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
    openSystemPop(systemInfo: ISystemInfo) {
        this.triggerWeappPop(1, systemInfo)
    }

    openFastReplaceLayer() {
        const data = this.state.data
        let preIp = ''
        let afterIp = ''
        for (let i = 0; i < data.length; i++) {
            let filterItemPreUrl = _filterIPFromUrl(data[i].webServerAddr)
            let filterItemAterUrl = _filterIPFromUrl(data[i].url)
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
            lists:data,
            afterReplaceUrl: afterIp,
            beforeReplaceUrl: preIp
        })
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

    triggerFastReplacePop(type: 0 | 1, replaceInfo ?: OldFastReplaceUrlData) {
        if (type == 0) {//??????
            this.setState({fastReplaceUrlData: defaultFastReplaceUrlData, showFastReplaceUrlLayer: false})
        } else {//??????
            this.setState({
                fastReplaceUrlData: replaceInfo || defaultFastReplaceUrlData,
                showFastReplaceUrlLayer: true
            })
        }
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
                         onClick={this.synSchoolSystem}>????????????
                    </div>
                    <div className="right common-btn common-btn-green school-sync-btn"
                         onClick={this.openFastReplaceLayer}>??????????????????
                    </div>
                    <div className="right header-seach-wrap">
                        <Search
                            value={this.state.systemSearch}
                            placeholder="??????????????????"
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
                                data.map((o: any, i: number) => (
                                    <LgTr key={`system-list-${i}`}>
                                        <LgTd width={widthsMatch.id}>{i + 1}</LgTd>
                                        <LgTd width={widthsMatch.systemId}>{o.systemId}</LgTd>
                                        <LgTd width={widthsMatch.systemName}>
                                            <img className="lg-common-tb-img" src={o.moduleLogoUrl} alt=""/>
                                            <div>{o.moduleName}</div>
                                        </LgTd>
                                        <LgTd width={widthsMatch.baseWebUrl}>{o.webServerAddr}</LgTd>
                                        <LgTd width={widthsMatch.webSvrAddr}>{o.url}</LgTd>
                                        <LgTd
                                            width={widthsMatch.lockState}>{_showSystemLockStateTxt(o.newLockState)}</LgTd>
                                        <LgTd
                                            width={widthsMatch.systemState}>{_showSystemStateTxt(o.state)}</LgTd>
                                        <LgTd width={widthsMatch.show}>
                                            {
                                                o.modulePosition == 1 ?'--???????????????--' :  (
                                                    <LgSwitch size="small"
                                                              checked={o.show}
                                                              onClick={(checked) => this.handWxState(i, checked)}/>
                                                )
                                            }
                                        </LgTd>
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
                                ))
                            }
                        </Collapse>
                    </Scrollbars>
                </div>

                <EditWeappLayer showLayer={showWeappLayer} data={currentWeappLayerData}
                                refreshList={this.afterEditWeapp}/>
                <FastReplaceUrlLayer showLayer={showFastReplaceUrlLayer} data={fastReplaceUrlData}
                                     refreshList={this.afterEditFastReplace}/>
            </div>
        );
    }
}
export default Index;
import React, {Component} from 'react';
import {Select} from "element-react";
import {Search} from "@/components/search";
import {LgTable, TableColumn} from "@/components/table";
import {LgTh, LgTr, LgTd} from "@/components/miniCampusTb";
import {Scrollbars} from 'react-custom-scrollbars-2';
import {getSchoolInfo, synchronization, synSchoolInfo} from "../../network/http";
import {ISchoolInfo} from "@/views/schoolInfo/model";

import {withRouter, RouteComponentProps} from "react-router-dom";


import "../../css/common.scss"
import './index.scss'
import Pops from "../../utils/pops";
import {editIcon as Edit} from "@/components/button/img";
import {LgButton} from "@/components/button";
import {ISystemInfo} from "@/views/schoolSystem/model";
import {_showSchoolEnvStateTxt, _showSchoolStateTxt, _showSchoolVersionTxt, SchoolEnvStates} from "../../utils/common";
import EditModuleLayer from "@/views/schoolSystem/components/editModuleLayer/editModuleLayer";
import EditSchoolInfoLayer from "@/views/schoolInfo/components/editSchoolInfoLayer/editSchoolInfoLayer";
import {BaseComponent} from "@/type/BaseComponent";

interface IWeappMgState {
    states: Array<any>
    envStates: Array<any>
    selectedState: '' | number
    selectedEnvState: '' | number
    thColumns: Array<any>
    data: Array<ISchoolInfo>
    schoolSearch: string
    showSchoolLayer: boolean
    currentSchoolLayerData:ISchoolInfo|{}
}

interface HttpGetSchoolInfo {
    envState?: '' | number
    isEffectiveTime?: '' | number
    searchName?: string
    searchStr?: string
    state?: '' | number
}

class Index extends BaseComponent<RouteComponentProps, IWeappMgState> {
    static defaultProps: {} = {}
    getClassNamePrefix(): string {
      return "school-info";
    }
    private static readonly WIDTH_MATCHES = {
        id: '5%',
        schoolName: '15%',
        schoolCode: '10%',
        hostServerUrl: '25%',
        state: '10%',
        envState: '7%',
        startDate: '20%',
        handles: '7%',
    }

    constructor(props: RouteComponentProps) {
        super(props);
        const widthsMatch = Index.WIDTH_MATCHES
        this.state = {
            selectedState: 1,
            states: [
                {
                    value: '',
                    label: '??????'
                }, {
                    value: 1,
                    label: '??????'
                }, {
                    value: 0,
                    label: '?????????'
                }, {
                    value: 2,
                    label: '?????????'
                }
            ],
            selectedEnvState: '',
            envStates: [
                {
                    value: '',
                    label: '??????'
                }, {
                    value: 1,
                    label: '??????'
                }, {
                    value: 0,
                    label: '????????????'
                }
            ],
            schoolSearch: '',
            thColumns: [
                {value: '#', props: 'id', width: widthsMatch.id},
                {value: '????????????', props: 'schoolName', width: widthsMatch.schoolName},
                {value: '????????????', props: 'schoolCode', width: widthsMatch.schoolCode},
                {value: '??????????????????', props: 'hostServerUrl', width: widthsMatch.hostServerUrl},
                {value: '????????????', props: 'state', width: widthsMatch.state},
                {value: '????????????', props: 'envState', width: widthsMatch.envState},
                {value: '????????????', props: 'startDate', width: widthsMatch.startDate},
                {value: '??????', width: widthsMatch.handles},
            ],
            data: [],

            showSchoolLayer:false,
            currentSchoolLayerData:{}
        }
        this.schoolStateChanged = this.schoolStateChanged.bind(this);
        this.schoolEnvStateChanged = this.schoolEnvStateChanged.bind(this);
        this.schoolSearch = this.schoolSearch.bind(this);
        this.syncAllModules = this.syncAllModules.bind(this);
        this.syncSchool = this.syncSchool.bind(this);
        this.afterEditSchoolInfo = this.afterEditSchoolInfo.bind(this);
    }


    async componentDidMount() {
        await this.loadSchoolInfo()
    }

    async loadSchoolInfo() {
        const params: HttpGetSchoolInfo = {
            envState: this.state.selectedEnvState,
            state: this.state.selectedState,
            searchStr: this.state.schoolSearch
        }
        const data:any = await getSchoolInfo(params)
        this.setState({data})
    }

    async schoolStateChanged(e: '' | number) {
        this.setState({selectedState: e}, () => {
            this.loadSchoolInfo()
        });
    }

    async schoolEnvStateChanged(e: '' | number) {
        this.setState({selectedEnvState: e}, () => {
            this.loadSchoolInfo()
        });
    }

    async schoolSearch(e: string) {
        this.setState({schoolSearch: e})
    }

    goToSchoolSystem(data: any) {
        const schoolId = data.schoolId
        const version = data.version === '1.0' ? 0 : 1
        if(version === 0){
            this.props.history.push({pathname: `/schoolOldSystem/${schoolId}`})
        }else{
            this.props.history.push({pathname: `/schoolSystem/${schoolId}/${version}`})
        }
    }

    syncAllModules(){
        Pops.showLoading('?????????')
        synchronization().then((res:any)=>{
            Pops.hideLoading()
            if(res.error == 0 && res.data && res.data.success){
                Pops.showSuccess('????????????')
                this.loadSchoolInfo()
            }else{
                Pops.showError('????????????')
            }
        }).catch(_=>{
            Pops.showError('????????????')
        })
    }

    syncSchool(){
        Pops.showLoading('?????????')
        synSchoolInfo().then((res:any)=>{
            Pops.hideLoading()
            if(res.error == 0){
                Pops.showSuccess('????????????')
                this.loadSchoolInfo()
            }else{
                Pops.showError('????????????')
            }
        }).catch(_=>{
            Pops.showError('????????????')
        })
    }

    handSimpleOpenEditPoplayer(isOpen:boolean){
        console.log('handSimpleOpenEditPoplayer,',isOpen)
        this.setState({ showSchoolLayer:isOpen })
    }

    triggerSchoolInfoPop(type: 0 | 1, schoolInfo?: ISchoolInfo) {
        if (type == 0) {//??????
            this.setState({currentSchoolLayerData: {}})
            this.handSimpleOpenEditPoplayer(false)
        } else {//??????
            this.setState({currentSchoolLayerData: schoolInfo || {}, showSchoolLayer: true})
            this.handSimpleOpenEditPoplayer(true)
        }
    }

    openEditSchool(data:ISchoolInfo){
        this.triggerSchoolInfoPop(1, data)
    }
    async afterEditSchoolInfo() {
        this.triggerSchoolInfoPop(0)
        await this.loadSchoolInfo()
    }

    render() {
        const widthsMatch = Index.WIDTH_MATCHES
        const {showSchoolLayer, currentSchoolLayerData} = this.state
        return (
            <div className="common-page common-page1">
                <div className="common-page-header clear">
                    <div className="left">
                        <div style={{width: '150px'}}>
                            <Select onChange={this.schoolStateChanged} value={this.state.selectedState}
                                    placeholder="?????????????????????">
                                {
                                    this.state.states.map(el => {
                                        return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                    <div className="left">
                        <div style={{width: '150px', marginLeft: '10px'}}>
                            <Select onChange={this.schoolEnvStateChanged} value={this.state.selectedEnvState}
                                    placeholder="?????????????????????">
                                {
                                    this.state.envStates.map(el => {
                                        return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                    <div className="left common-page-header-total">
                        ???{this.state.data.length}?????????
                    </div>
                    <div className="right common-btn common-btn-green school-sync-btn" onClick={this.syncAllModules}>??????????????????</div>
                    <div className="right common-btn common-btn-green school-sync-btn" onClick={this.syncSchool}>?????????????????????</div>
                    <div className="right header-seach-wrap">
                        <Search
                            value={this.state.schoolSearch}
                            placeholder="??????????????????"
                            onChange={this.schoolSearch}
                            onSearch={() => {
                                this.loadSchoolInfo()
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
                        {
                            this.state.data.map((o: any, i: number) => {
                                const isSalesState = o.envState === SchoolEnvStates.SALES

                                return (
                                    <LgTr key={`school-list-${i}`}>
                                        <LgTd width={widthsMatch.id}>{i + 1}</LgTd>
                                        <LgTd className={isSalesState?'school-list-tr-overflow':''} width={widthsMatch.schoolName} handClick={() => {
                                            this.goToSchoolSystem(o)
                                        }}>
                                            <div className="school-list-name">
                                                {o.schoolName}
                                                {
                                                    isSalesState ? (
                                                        <div className="school-list-name-sales">??????</div>
                                                    ) : null
                                                }
                                            </div>
                                        </LgTd>
                                        <LgTd width={widthsMatch.schoolCode}>{o.schoolCode}</LgTd>
                                        <LgTd className="school-list-url" width={widthsMatch.hostServerUrl}>{o.hostServerUrl}</LgTd>
                                        <LgTd width={widthsMatch.state}>{_showSchoolStateTxt(o.state)}</LgTd>
                                        <LgTd width={widthsMatch.envState} className={`${this.CNP}-root-list-envState`}>
                                            {/*<div className={`${this.CNP}-root-list-envState-${o.envState}`}>{_showSchoolEnvStateTxt(o.envState)}</div>*/}
                                            <div className={`${this.CNP}-root-list-envState-${o.version === '1.0' ? 0 : 2}`}>{_showSchoolVersionTxt(o.version)}</div>
                                        </LgTd>
                                        <LgTd width={widthsMatch.startDate}>{`${o.endDate}`}</LgTd>
                                        <LgTd className="flex-center" width={widthsMatch.handles}>
                                            <LgButton
                                                className=""
                                                value={""}
                                                shapeType="text"
                                                showIcon
                                                icon={<Edit style={{fill: "#0099ff"}}/>}
                                                onClick={() => {
                                                    this.openEditSchool(o)
                                                }}
                                            />
                                        </LgTd>
                                    </LgTr>
                                )
                            })
                        }
                    </Scrollbars>
                </div>


                <EditSchoolInfoLayer showLayer={showSchoolLayer} data={currentSchoolLayerData} onShowLayer={this.handSimpleOpenEditPoplayer}
                                 refreshList={this.afterEditSchoolInfo} closeLayer={()=>{this.triggerSchoolInfoPop(0)}}/>
            </div>
        );
    }
}


export default withRouter(Index);
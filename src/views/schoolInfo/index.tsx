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

interface IWeappMgState {
    states: Array<any>
    envStates: Array<any>
    selectedState: '' | number
    selectedEnvState: '' | number
    thColumns: Array<any>
    data: Array<ISchoolInfo>
    schoolSearch: string
}

interface HttpGetSchoolInfo {
    envState?: '' | number
    isEffectiveTime?: '' | number
    searchName?: string
    searchStr?: string
    state?: '' | number
}

class Index extends Component<RouteComponentProps, IWeappMgState> {
    static defaultProps: {} = {}
    private static readonly WIDTH_MATCHES = {
        id: '5%',
        schoolName: '15%',
        schoolCode: '10%',
        hostServerUrl: '25%',
        state: '10%',
        startDate: '25%',
        handles: '10%',
    }

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
            selectedEnvState: '',
            envStates: [
                {
                    value: '',
                    label: '所有'
                }, {
                    value: 1,
                    label: '在售'
                }, {
                    value: 0,
                    label: '测试环境'
                }
            ],
            schoolSearch: '',
            thColumns: [
                {value: '#', props: 'id', width: widthsMatch.id},
                {value: '学校名称', props: 'schoolName', width: widthsMatch.schoolName},
                {value: '学校代码', props: 'schoolCode', width: widthsMatch.schoolCode},
                {value: '基础平台地址', props: 'hostServerUrl', width: widthsMatch.hostServerUrl},
                {value: '服务状态', props: 'state', width: widthsMatch.state},
                {value: '有效期', props: 'startDate', width: widthsMatch.startDate},
                {value: '操作', width: widthsMatch.handles},
            ],
            data: [],
        }
        this.schoolStateChanged = this.schoolStateChanged.bind(this);
        this.schoolEnvStateChanged = this.schoolEnvStateChanged.bind(this);
        this.schoolSearch = this.schoolSearch.bind(this);
        this.syncAllModules = this.syncAllModules.bind(this);
        this.syncSchool = this.syncSchool.bind(this);
    }


    async componentDidMount() {
        await this.loadSchoolInfo()
    }

    async loadSchoolInfo() {
        console.log(this.state)
        const params: HttpGetSchoolInfo = {
            envState: this.state.selectedEnvState,
            state: this.state.selectedState,
            searchStr: this.state.schoolSearch
        }
        const data = await getSchoolInfo(params)
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
        this.props.history.push({pathname: `/schoolSystem/${schoolId}`})
    }

    syncAllModules(){
        Pops.showLoading('同步中')
        synchronization().then((res:any)=>{
            Pops.hideLoading()
            if(res.error == 0 && res.data && res.data.success){
                Pops.showSuccess('同步成功')
                this.loadSchoolInfo()
            }else{
                Pops.showError('同步失败')
            }
        }).catch(_=>{
            Pops.showError('同步失败')
        })
    }

    syncSchool(){
        Pops.showLoading('同步中')
        synSchoolInfo().then((res:any)=>{
            Pops.hideLoading()
            if(res.error == 0){
                Pops.showSuccess('同步成功')
                this.loadSchoolInfo()
            }else{
                Pops.showError('同步失败')
            }
        }).catch(_=>{
            Pops.showError('同步失败')
        })
    }

    openPop(type:number, data:any){

    }

    render() {
        const widthsMatch = Index.WIDTH_MATCHES
        return (
            <div className="common-page common-page1">
                <div className="common-page-header clear">
                    <div className="left">
                        <div style={{width: '150px'}}>
                            <Select onChange={this.schoolStateChanged} value={this.state.selectedState}
                                    placeholder="请选择学校状态">
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
                                    placeholder="请选择学校环境">
                                {
                                    this.state.envStates.map(el => {
                                        return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                    })
                                }
                            </Select>
                        </div>
                    </div>
                    <div className="left common-page-header-total">
                        共{this.state.data.length}个学校
                    </div>
                    <div className="right common-btn common-btn-green school-sync-btn" onClick={this.syncAllModules}>同步所有信息</div>
                    <div className="right common-btn common-btn-green school-sync-btn" onClick={this.syncSchool}>仅同步学校信息</div>
                    <div className="right header-seach-wrap">
                        <Search
                            value={this.state.schoolSearch}
                            placeholder="搜索相关信息"
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
                                return (
                                    <LgTr key={`school-list-${i}`}>
                                        <LgTd width={widthsMatch.id}>{i + 1}</LgTd>
                                        <LgTd className="school-list-name" width={widthsMatch.schoolName} handClick={() => {
                                            this.goToSchoolSystem(o)
                                        }}>{o.schoolName}</LgTd>
                                        <LgTd width={widthsMatch.schoolCode}>{o.schoolCode}</LgTd>
                                        <LgTd className="school-list-url" width={widthsMatch.hostServerUrl}>{o.hostServerUrl}</LgTd>
                                        <LgTd width={widthsMatch.state}>{o.state}</LgTd>
                                        <LgTd width={widthsMatch.startDate}>{`${o.startDate} - ${o.endDate}`}</LgTd>
                                        <LgTd className="flex-center" width={widthsMatch.handles}>

                                        </LgTd>
                                    </LgTr>
                                )
                            })
                        }
                    </Scrollbars>
                </div>
            </div>
        );
    }
}


export default withRouter(Index);
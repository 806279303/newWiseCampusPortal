import React, {Component} from 'react';
import {LgPopLayer} from "lancoo-web-ui";
import {BaseComponent} from "../../../../type/BaseComponent";

import '@/css/common.pop.scss'
import './editSchoolInfoLayer.scss'
import {LgInput} from "@/components/input";
import {CommonPopCell} from "@/components/wiseCampusCommonPopCell/wiseCampusCommonPopCell";
import Pops from "../../../../utils/pops";
import {editSchoolInfo, putWxSchoolModule, putWxSchoolSystem} from "../../../../network/http";
import {ISchoolInfo} from "@/views/schoolInfo/model";
import { LgDatePicker } from '@/components/datePicker';
import dayjs from 'dayjs';
import { Select } from 'element-react';

interface EditSchoolInfoLayerProps {
    showLayer: boolean
    data: ISchoolInfo | object
    onShowLayer: (isOpen:boolean) => void
    refreshList: () => void
    closeLayer: () => void
}

interface EditWeappLayerState {
    data: ISchoolInfo | object
    schoolStates:{
        label:string
        value:number
    }[]
    schoolEnvStates:{
        label:string
        value:number
    }[]
    schoolVersions:{
        label:string
        value:string
    }[]
    identityVersions:{
        label:string
        value:number
    }[]
}

class EditSchoolInfoLayer extends BaseComponent<EditSchoolInfoLayerProps, EditWeappLayerState> {
    effectiveTimeRef:any
    protected getClassNamePrefix(): string {
        return "edit-school-info-layer";
    }

    constructor(props: EditSchoolInfoLayerProps, context: any) {
        super(props, context);
        this.state = {
            data: {},
            schoolStates:[
                {label:'可用', value:1},
                {label:'不可用', value:0},
                {label:'维护中', value:2},
            ],
            schoolEnvStates:[
                {label:'测试环境', value:0},
                {label:'销售环境', value:1},
            ],
            schoolVersions:[
                {label:'新版', value:'2.0'},
                {label:'旧版', value:'1.0'},
            ],
            identityVersions:[
                {label:'大身份', value:1},
                {label:'小身份', value:0},
            ]
        }
        this.onLayerClose = this.onLayerClose.bind(this);
        this.onLayerConfirm = this.onLayerConfirm.bind(this);
        this.handShortCutTime = this.handShortCutTime.bind(this);
        this.handChangeTime = this.handChangeTime.bind(this);
        this.onSchoolStateChanged = this.onSchoolStateChanged.bind(this);
        this.onEnvStateChanged = this.onEnvStateChanged.bind(this);
        this.onVersionChanged = this.onVersionChanged.bind(this);
        this.onIdentityVersionChanged = this.onIdentityVersionChanged.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState({data: {...this.props.data}})
    }

    UNSAFE_componentWillReceiveProps(nextProps: EditSchoolInfoLayerProps) {
        if (nextProps.showLayer !== this.props.showLayer && nextProps.showLayer === true) {
            const data = {...nextProps.data}
            this.setState({data})
        }
    }

    async onLayerConfirm() {
        await this.handChangeSystem()
    }

    onLayerClose() {
        this.setState({data: {}})
        this.props.closeLayer()
    }

    onChange(value: any, attr: string) {
        let data: any = this.state.data
        data[attr] = value
        this.setState({data})
    }

    async handChangeSystem() {
        let data = this.state.data as ISchoolInfo
        try {
            await editSchoolInfo({
                id: data.id,
                state: data.state,
                version: data.version,
                envState: data.envState,
                startDate: data.startDate,
                endDate: data.endDate,
                gzhAppId:data.gzhAppId,
                gzhSecret:data.gzhSecret,
                appMgrAddr:data.appMgrAddr,
                havingMultipleIdentity:data.havingMultipleIdentity
            })
            Pops.showSuccess('操作成功')
            this.props.refreshList()
        } catch (err: any) {
            Pops.showError(err.message)
        }
    }

    handChangeTime(e:any){
        let data = this.state.data as ISchoolInfo
        data.startDate = dayjs(e[0]).format('YYYY-MM-DD')
        data.endDate = dayjs(e[1]).format('YYYY-MM-DD')
        this.setState({ data });
    }

    handShortCutTime(type:'1'|'2'|'3'){
        const end = new Date();
        const start = new Date();
        let multiple = 7
        switch (type){
            case "1":multiple = 7;break;
            case "2":multiple = 30;break;
            case "3":multiple = 90;break;
        }
        start.setTime(start.getTime() - 3600 * 1000 * 24 * multiple);
        let data = this.state.data as ISchoolInfo
        data.startDate = dayjs(start).format('YYYY-MM-DD')
        data.endDate = dayjs(end).format('YYYY-MM-DD')
        this.setState({ data });
        this.effectiveTimeRef.togglePickerVisible();
    }

    onSchoolStateChanged(schoolState:number){
        const data: any = this.state.data
        data['state'] = schoolState
        this.setState({data: data})
    }

    onEnvStateChanged(envState:number){
        const data: any = this.state.data
        data['envState'] = envState
        this.setState({data: data})
    }

    onVersionChanged(version:number){
        const data: any = this.state.data
        data['version'] = version
        this.setState({data: data})
    }

    onIdentityVersionChanged(version:number){
        const data: any = this.state.data
        data['havingMultipleIdentity'] = version
        this.setState({data: data})
    }

    render() {
        const data = this.state.data as ISchoolInfo
        const times:any = [dayjs(data.startDate).toDate(), dayjs(data.endDate).toDate()]
        console.log(this.props.showLayer)
        return (
            <LgPopLayer
                width={540}
                height={720}
                coverLayerClass={'true'}
                isOpen={this.props.showLayer}
                onShowLayer={()=>{
                    this.props.onShowLayer(!this.props.showLayer)
                }}
                title="编辑小程序"
                onClose={this.onLayerClose}
                onConfirm={this.onLayerConfirm}
                onIconClose={this.onLayerClose}
            >
                <div className={`${this.CNP}-root`}>
                    <CommonPopCell label="学校信息:" value={`${data.schoolName}（${data.schoolId}）`}/>
                    <CommonPopCell label="学校图标:" imageUrl={data.schoolLogoUrl}/>
                    <CommonPopCell label="基础平台:" value={data.hostServerUrl}/>
                    <CommonPopCell label="appId:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'gzhAppId')
                        }} value={data.gzhAppId}/>
                    </CommonPopCell>
                    <CommonPopCell label="appSecret:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'gzhSecret')
                        }} value={data.gzhSecret}/>
                    </CommonPopCell>
                    <CommonPopCell label="应用管理平台地址:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'appMgrAddr')
                        }} value={data.appMgrAddr}/>
                    </CommonPopCell>
                    <CommonPopCell label="服务状态:">
                        <Select value={data.state} onChange={this.onSchoolStateChanged} placeholder="请选择">
                            {
                                this.state.schoolStates.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                })
                            }
                        </Select>
                    </CommonPopCell>
                    <CommonPopCell label="运行环境:">
                        <Select value={data.envState} onChange={this.onEnvStateChanged} placeholder="请选择">
                            {
                                this.state.schoolEnvStates.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                })
                            }
                        </Select>
                    </CommonPopCell>
                    <CommonPopCell label="校园通版本:">
                        <Select value={data.version} onChange={this.onVersionChanged} placeholder="请选择">
                            {
                                this.state.schoolVersions.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                })
                            }
                        </Select>
                    </CommonPopCell>

                    <CommonPopCell label="多身份版本:">
                        <Select value={data.havingMultipleIdentity} onChange={this.onIdentityVersionChanged} placeholder="请选择">
                            {
                                this.state.identityVersions.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                })
                            }
                        </Select>
                    </CommonPopCell>
                    <CommonPopCell label="有效期:">
                        <LgDatePicker
                            type="B"
                            onChange={(e) => {
                                this.handChangeTime(e)
                            }}
                            onRef={(e) => (this.effectiveTimeRef = e)}
                            align={"right"}
                            value={times}
                            shortcuts={[
                                {
                                    text: "最近一周",
                                    onClick: () => {
                                        this.handShortCutTime('1')
                                    },
                                },
                                {
                                    text: "最近一个月",
                                    onClick: () => {
                                        this.handShortCutTime('2')
                                    },
                                },
                                {
                                    text: "最近三个月",
                                    onClick: () => {
                                        this.handShortCutTime('3')
                                    },
                                },
                            ]}
                        />
                    </CommonPopCell>
                </div>
            </LgPopLayer>
        );
    }
}

export default EditSchoolInfoLayer;
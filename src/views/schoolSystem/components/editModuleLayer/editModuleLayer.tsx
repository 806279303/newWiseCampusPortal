import React, {Component} from 'react';
import WeappPop from "@/views/weappMg/pops/weappPop";
import {LgPopLayer} from "@/components/popLayer";
import {BaseComponent} from "../../../../type/BaseComponent";

import '@/css/common.pop.scss'
import {LgInput} from "@/components/input";
import {CommonPopCell} from "@/components/wiseCampusCommonPopCell/wiseCampusCommonPopCell";
import {IModuleInfo} from "@/views/schoolSystem/model";
import {_concatIdentityStr} from "../../../../utils/common";
import {LgSwitch} from "@/components/switch";
import Pops from "../../../../utils/pops";
import {putWxSchoolModule} from "../../../../network/http";

interface EditModuleLayerProps {
    showLayer: boolean
    data: IModuleInfo | object
    refreshList: () => void
}

interface EditModuleLayerState {
    data: IModuleInfo | object
}

class EditModuleLayer extends BaseComponent<EditModuleLayerProps, EditModuleLayerState> {
    protected getClassNamePrefix(): string {
        return "edit-moduleLayer";
    }

    constructor(props: EditModuleLayerProps, context: any) {
        super(props, context);
        this.state = {
            data: {}
        }
        this.onLayerClose = this.onLayerClose.bind(this);
        this.onLayerConfirm = this.onLayerConfirm.bind(this);
        this.handWxState = this.handWxState.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState({data: {...this.props.data}})
    }

    UNSAFE_componentWillReceiveProps(nextProps: EditModuleLayerProps) {
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
    }

    onChange(value: any, attr: string) {
        let data: any = this.state.data
        data[attr] = value
        this.setState({data})
    }

    async handWxState(data: IModuleInfo, checked: boolean) {
        let moduleInfo = data
        moduleInfo.moduleState = checked ? 1 : 0
        this.setState({data: moduleInfo})
    }

    async handChangeSystem() {
        let data: IModuleInfo = this.state.data as IModuleInfo
        console.log(data)
        try {
            await putWxSchoolModule({
                id: data.id,
                appId: data.appId,
                appUrl: data.appUrl,
                moduleState: data.moduleState ? 1 : 0,
                trialShow: 1,
                pageVersion: 0,
            })
            Pops.showSuccess('操作成功')
            this.props.refreshList()
        } catch (err: any) {
            Pops.showError(err.message)
        }
    }

    render() {
        const data = this.state.data as IModuleInfo
        return (
            <LgPopLayer
                width={540}
                height={650}
                coverLayerClass={'true'}
                isOpen={this.props.showLayer}
                onShowLayer={() => {
                }}
                title="编辑小程序"
                onClose={this.onLayerClose}
                onConfirm={this.onLayerConfirm}
                onIconClose={this.onLayerClose}
            >
                <div className={`${this.CNP}-root`}>
                    <CommonPopCell label="系统ID:" value={data.systemId}/>
                    {/*<CommonPopCell label="系统ID:"value={data.systemName}/>*/}
                    <CommonPopCell label="模块图标:" imageUrl={data.logoUrl}/>
                    <CommonPopCell label="模块ID:" value={data.moduleId}/>
                    <CommonPopCell label="模块名称:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'moduleName')
                        }} value={data.moduleName}/>
                    </CommonPopCell>
                    <CommonPopCell label="模块描述:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'moduleDesc')
                        }} value={data.moduleDesc}/>
                    </CommonPopCell>
                    <CommonPopCell label="支持角色:" value={_concatIdentityStr(data)}/>
                    <CommonPopCell label="小程序显示:">
                        <LgSwitch size="small" disabled={data.moduleState === 2} checked={data.moduleState === 1}
                                  onClick={(checked) => this.handWxState(data, checked)}/>
                    </CommonPopCell>
                    <CommonPopCell label="appId:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'appId')
                        }} value={data.appId}/>
                    </CommonPopCell>
                    <CommonPopCell label="跳转路径:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'appUrl')
                        }} value={data.appUrl}/>
                    </CommonPopCell>
                    <CommonPopCell label="版本号:" value={data.version}/>
                </div>
            </LgPopLayer>
        );
    }
}

export default EditModuleLayer;
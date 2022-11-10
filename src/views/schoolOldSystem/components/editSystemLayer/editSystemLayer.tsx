import React, {Component} from 'react';
import WeappPop from "@/views/weappMg/pops/weappPop";
import {LgPopLayer} from "@/components/popLayer";
import {BaseComponent} from "../../../../type/BaseComponent";

import '@/css/common.pop.scss'
import './editSystemLayer.scss'
import {LgInput} from "@/components/input";
import {CommonPopCell} from "@/components/wiseCampusCommonPopCell/wiseCampusCommonPopCell";
import {IModuleInfo, ISystemInfo} from "@/views/schoolSystem/model";
import {_concatIdentityStr} from "../../../../utils/common";
import {LgSwitch} from "@/components/switch";
import Pops from "../../../../utils/pops";
import {putWxSchoolModule, putWxSchoolSystem} from "../../../../network/http";

interface EditWeappLayerProps {
    showLayer: boolean
    data: ISystemInfo | object
    refreshList: () => void
}

interface EditWeappLayerState {
    data: ISystemInfo | object
}

class EditWeappLayer extends BaseComponent<EditWeappLayerProps, EditWeappLayerState> {
    protected getClassNamePrefix(): string {
        return "edit-system-layer";
    }

    constructor(props: EditWeappLayerProps, context: any) {
        super(props, context);
        this.state = {
            data: {}
        }
        this.onLayerClose = this.onLayerClose.bind(this);
        this.onLayerConfirm = this.onLayerConfirm.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState({data: {...this.props.data}})
    }

    UNSAFE_componentWillReceiveProps(nextProps: EditWeappLayerProps) {
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

    async handChangeSystem() {
        let data = this.state.data as ISystemInfo
        console.log(data)
        try {
            await putWxSchoolSystem({
                id: data.id,
                webSvrAddr: data.webSvrAddr,
                wsSvrAddr: data.wsSvrAddr,
                systemState: data.systemState,
                version: data.version
            })
            Pops.showSuccess('操作成功')
            this.props.refreshList()
        } catch (err: any) {
            Pops.showError(err.message)
        }
    }

    render() {
        const data = this.state.data as ISystemInfo
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
                    <CommonPopCell label="系统ID:"value={data.systemName}/>
                    <CommonPopCell label="系统图标:" imageUrl={data.logoUrl}/>
                    <CommonPopCell label="参照web地址:" className={`${this.CNP}-root-url`}>
                        <div className={`${this.CNP}-root-url-value`}>{data.baseWebUrl}</div>
                    </CommonPopCell>
                    <CommonPopCell label="参照ws地址:" className={`${this.CNP}-root-url`}>
                        <div className={`${this.CNP}-root-url-value`}>{data.baseWsUrl}</div>
                    </CommonPopCell>
                    <CommonPopCell label="实际web地址:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'webSvrAddr')
                        }} value={data.webSvrAddr}/>
                    </CommonPopCell>
                    <CommonPopCell label="实际ws地址:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'wsSvrAddr')
                        }} value={data.wsSvrAddr}/>
                    </CommonPopCell>
                    <CommonPopCell label="版本号:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'version')
                        }} value={data.version}/>
                    </CommonPopCell>
                </div>
            </LgPopLayer>
        );
    }
}

export default EditWeappLayer;
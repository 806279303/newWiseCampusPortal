import React, {Component} from 'react';
import WeappPop from "@/views/weappMg/pops/weappPop";
import {LgPopLayer} from "@/components/popLayer";
import {BaseComponent} from "../../../../type/BaseComponent";

import '@/css/common.pop.scss'
import './fastReplaceUrlLayer.scss'
import {LgInput} from "@/components/input";
import {CommonPopCell} from "@/components/wiseCampusCommonPopCell/wiseCampusCommonPopCell";
import {IModuleInfo, ISystemInfo} from "@/views/schoolSystem/model";
import {_concatIdentityStr} from "../../../../utils/common";
import {LgSwitch} from "@/components/switch";
import Pops from "../../../../utils/pops";
import {fastReplaceAddress, putWxSchoolModule, putWxSchoolSystem} from "../../../../network/http";
import {FastReplaceUrlData} from "@/type/schoolSystem/SchoolSystemState";

interface FastReplaceLayerProps {
    showLayer: boolean
    data: ISystemInfo | object
    refreshList: () => void
}

interface FastReplaceLayerState {
    data: FastReplaceUrlData | object
}

class FastReplaceUrlLayer extends BaseComponent<FastReplaceLayerProps, FastReplaceLayerState> {
    protected getClassNamePrefix(): string {
        return "fastReplaceUrlLayer";
    }

    constructor(props: FastReplaceLayerProps, context: any) {
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

    UNSAFE_componentWillReceiveProps(nextProps: FastReplaceLayerProps) {
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
        let { beforeReplaceUrl, afterReplaceUrl } = this.state.data as FastReplaceUrlData
        try {
            await fastReplaceAddress(beforeReplaceUrl, afterReplaceUrl)
            Pops.showSuccess('操作成功')
            this.props.refreshList()
        } catch (err: any) {
            Pops.showError(err.message)
        }
    }

    render() {
        const data = this.state.data as FastReplaceUrlData
        return (
            <LgPopLayer
                width={540}
                height={250}
                coverLayerClass={'true'}
                isOpen={this.props.showLayer}
                onShowLayer={() => {
                }}
                title="快速替换地址"
                onClose={this.onLayerClose}
                onConfirm={this.onLayerConfirm}
                onIconClose={this.onLayerClose}
            >
                <div className={`${this.CNP}-root`}>
                    <CommonPopCell label="替换前地址:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'beforeReplaceUrl')
                        }} value={data.beforeReplaceUrl}/>
                    </CommonPopCell>
                    <CommonPopCell label="替换后地址:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'afterReplaceUrl')
                        }} value={data.afterReplaceUrl}/>
                    </CommonPopCell>
                </div>
            </LgPopLayer>
        );
    }
}

export default FastReplaceUrlLayer;
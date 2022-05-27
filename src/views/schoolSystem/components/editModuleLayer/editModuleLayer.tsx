import React, {Component} from 'react';
import WeappPop from "@/views/weappMg/pops/weappPop";
import {LgPopLayer} from "@/components/popLayer";
import {BaseComponent} from "../../../../type/BaseComponent";

import '@/css/common.pop.scss'
import {LgInput} from "@/components/input";
import {CommonPopCell} from "@/components/wiseCampusCommonPopCell/wiseCampusCommonPopCell";
import {IModuleInfo} from "@/views/schoolSystem/model";

interface EditModuleLayerProps {
    showLayer:boolean
    data:IModuleInfo|object
}
interface EditModuleLayerState{
    data:IModuleInfo|object
}
class EditModuleLayer extends BaseComponent<EditModuleLayerProps, EditModuleLayerState> {
    protected getClassNamePrefix(): string {
        return "edit-moduleLayer";
    }

    constructor(props:EditModuleLayerProps, context:any) {
        super(props ,context);
        this.state={
            data:{}
        }
        this.onLayerClose = this.onLayerClose.bind(this);
        this.onLayerConfirm = this.onLayerConfirm.bind(this);
    }

    UNSAFE_componentWillReceiveProps(nextProps:EditModuleLayerProps){
        if(nextProps.showLayer !== this.props.showLayer && nextProps.showLayer === true){
            const data = {...nextProps.data}
            this.setState({ data })
        }
    }

    onLayerConfirm(){

    }

    onLayerClose(){

    }

    onChange(value:any, attr:string){

    }

    render() {
        const data = this.state.data as IModuleInfo
        return (
            <LgPopLayer
                width={960}
                height={600}
                coverLayerClass={'true'}
                isOpen={this.props.showLayer}
                onShowLayer={() => {}}
                title="编辑小程序"
                onClose={this.onLayerClose}
                onConfirm={this.onLayerConfirm}
                onIconClose={this.onLayerClose}
            >
                <div className={`${this.CNP}-root`}>
                    <CommonPopCell label="系统ID:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'systemId')
                        }} value={data.systemId}/>
                    </CommonPopCell>
                </div>
            </LgPopLayer>
        );
    }
}

export default EditModuleLayer;
import {BaseComponent, LgPopLayer, LgInput, LgTextarea} from "lancoo-web-ui";
import {closeNewThirdPushLayer, loadThirdPushData} from "../../../../redux/thirdPushMg/action";
import {connect} from 'react-redux';
import {createClassName} from "../../../../utils/classNameUtils";
import React from "react";

import './index.scss'
import {newThirdPushLists} from "@/network/http";
import {ThirdPushLayerProps, ThirdPushLayerState} from "@/type/thirdPushMg/thirdPushState";
import {errorTip, successTip} from "../../../../utils/popsNew";

const {classNames} = createClassName('third-push-mg-layer')

class Index extends BaseComponent<ThirdPushLayerProps, ThirdPushLayerState> {
    constructor(props: any) {
        super(props);
        this.state = {
            schoolName: "",
            companyName: "",
            systemName: "",
            remark: "123123",
        }
        this.formInputChanged = this.formInputChanged.bind(this)
        this.newThirdPush = this.newThirdPush.bind(this)
    }

    formInputChanged(attr: string, e: any) {
        const value = e.target.value
        switch (attr) {
            case 'schoolName':
                this.setState({schoolName: value});
                break;
            case 'companyName':
                this.setState({companyName: value});
                break;
            case 'systemName':
                this.setState({systemName: value});
                break;
            case 'remark':
                this.setState({remark: value});
                break;
            default:
                break
        }
    }

    async newThirdPush() {
        try {
            const { schoolName, companyName, systemName, remark} = this.state
            if(!schoolName || !companyName || !systemName || !remark){
                errorTip('请填写完整内容')
                return
            }
            await newThirdPushLists([{
                schoolName, companyName, systemName, remark
            }])
            successTip('创建成功')
            this.props.closeThirdPushLayer()
            this.props.loadThirdPushData()
        } catch (err: any) {
            errorTip(err.msg || '创建失败')
        }
    }

    render() {
        return (
            <LgPopLayer
                className={classNames('')}
                title="添加第三方推送系统"
                isOpen={this.props.isOpen}
                onShowLayer={this.props.closeThirdPushLayer}
                width={500}
                height={300}
                onConfirm={this.newThirdPush}
            >
                <LayerFormCell label={'学校名称：'}>
                    <LgInput
                        value={this.state.schoolName}
                        onChange={(e) => {
                            this.formInputChanged('schoolName', e)
                        }}
                    />
                </LayerFormCell>
                <LayerFormCell label={'企业名称：'}>
                    <LgInput
                        value={this.state.companyName}
                        onChange={(e) => {
                            this.formInputChanged('companyName', e)
                        }}
                    />
                </LayerFormCell>
                <LayerFormCell label={'系统名称：'}>
                    <LgInput
                        value={this.state.systemName}
                        onChange={(e) => {
                            this.formInputChanged('systemName', e)
                        }}
                    />
                </LayerFormCell>
                <LayerFormCell label={'remark：'}>
                    <LgTextarea
                        className={classNames("form-textarea")}
                        onRef={(ref) => {
                            if (ref && ref.current) {
                                ref.current.value = this.state.remark
                            }
                        }}
                        textarea={{
                            onInput: (e) => {
                                this.formInputChanged('remark', e)
                            },
                            maxLength: 200,
                        }}
                        removeResize
                    />
                </LayerFormCell>
            </LgPopLayer>
        )
    }
}

interface LayerFormCell {
    label: string
    children: string | React.ReactNode
}

const LayerFormCell = (props: LayerFormCell) => {
    return (
        <div className={(classNames("form"))}>
            <div className={(classNames("form-label"))}>{props.label}</div>
            <div className={(classNames("form-content"))}>
                {props.children}
            </div>
        </div>
    )
}


function mapStateToProps(state: any) {
    return {
        isOpen: state.thirdPushMg.isOpenThirdPushLayer
    }
}

function mapDispatchToProps(dispatch: any) {
    return {
        closeThirdPushLayer: () => {
            dispatch(closeNewThirdPushLayer())
        },
        loadThirdPushData: ()=>{ dispatch(loadThirdPushData()) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index);
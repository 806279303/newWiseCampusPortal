import React, {Component} from 'react';
import {BaseComponent} from "lancoo-web-ui";
import {createClassName} from "../../../../utils/classNameUtils";
import { LgButton } from 'lancoo-web-ui';

import './index.scss'
import { connect } from 'react-redux';
import {openNewThirdPushLayer} from "../../../../redux/thirdPushMg/action";

const {classNames, rootClassNames} = createClassName('third-push-mg-header')


interface ThirdPushProps{
    openNewThirdPushLayer:()=>void
}

class Index extends BaseComponent<ThirdPushProps> {
    render() {
        return (
            <div className={(classNames("wrapper"))}>
                <div className={(classNames("left"))}></div>
                <div className={(classNames("right"))}>
                    <LgButton onClick={()=>{this.props.openNewThirdPushLayer()}} backgroundType='opacification' showIcon icon={<LgButton.icon.Add></LgButton.icon.Add>} radius={false} type='success'>添加第三方系统</LgButton>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state:any){
    return {
        ...state
    }
}

function mapDispatchToProps(dispatch: any){
    return {
        openNewThirdPushLayer:(e:any) => dispatch(openNewThirdPushLayer())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index) ;
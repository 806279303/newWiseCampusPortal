/*
 * @Author       : super-J
 * @Date         : 2021-12-28 15:20:12
 * @LastEditTime : 2022-03-22 19:54:48
 * @LastEditors  : super-J
 * @Description  : 
 */
import './index.scss';
import React from 'react';
import * as svgIcon from './img/index';
import { BaseComponent } from "../../type/BaseComponent"
import { BaseProps } from "../../type/BaseProps";
import classNames from "classnames";
import { type } from 'os';


// type BackgroundType = 'none' | 'translucent' | 'opacification'

type ButtonType = 'default' | 'info' | 'success' | 'warning' | 'fail';
type ButtonSize = 'super' | 'default' | 'big' | 'small' | 'mini';
type BackgroundType = 'transparent' | 'translucent' | 'opacification';
type ButtonShapeType = 'text' | 'button';


type IconShowType = keyof typeof svgIcon;
export interface ButtonProps extends BaseProps {
    value: string | number; //描述:按钮需要显示的值 | 是否必填:true | 默认值: -- |
    type?: ButtonType; //描述:按钮显示的类型(支持文字按钮) | 是否必填:false | 默认值: default |

    shapeType?: ButtonShapeType; //描述:按钮显示的类型(支持文字按钮) | 是否必填:false | 默认值: button |

    gradient?: boolean; //描述:按钮是否渐变显示 | 是否必填:false | 默认值: -- |
    backgroundType?: BackgroundType; //描述:背景色的透明度 | 是否必填:false | 默认值: none |

    radius?: boolean; //描述:按钮是否圆角显示 | 是否必填:false | 默认值: false |
    radiusNum?: number; //描述:按钮圆角的度数 | 是否必填:false | 默认值: 3 |
    size?: ButtonSize; //描述:按钮的大小 | 是否必填:false | 默认值: default |
    border?: boolean; //描述:按钮是否显示边框 | 是否必填:false | 默认值: false |

    disable?: boolean; //描述:按钮是否禁用 | 是否必填:false | 默认值: false |

    showIcon?: boolean; //描述:按钮是否显示小图标 | 是否必填:false | 默认值: false |
    showIconType?: IconShowType; //描述:按钮显示小图标的类型 | 是否必填:false | 默认值: false |
    textUnderline?: boolean; //描述:按钮是否显示下划线 | 是否必填:false | 默认值: true |

    icon?: React.ReactElement | React.ReactChild; //描述:按钮自定义图标的dom | 是否必填:false | 默认值: -- |

    onClick?(): void; //点击按钮触发的事件
}
interface ButtonState { }
export class LgButton extends BaseComponent<ButtonProps, ButtonState> {

    constructor(props: (ButtonProps & BaseProps) | Readonly<ButtonProps & BaseProps>, context: any) {
        super(props, context);
        this.onClick = this.onClick.bind(this)
    }

    // 修改默认值
    static defaultProps = {
        type: 'default', //描述:按钮显示的类型(支持文字按钮) | 是否必填:false | 默认值: default |
        shapeType: 'button', //描述:按钮显示的类型(支持文字按钮) | 是否必填:false | 默认值: button |
        gradient: false, //描述:按钮是否渐变显示 | 是否必填:false | 默认值: -- |
        backgroundType: 'opacification', //描述:背景色的透明度 | 是否必填:false | 默认值: none |
        radius: false, //描述:按钮是否圆角显示 | 是否必填:false | 默认值: false |
        size: 'default', //描述:按钮的大小 | 是否必填:false | 默认值: default |
        border: false, //描述:按钮是否显示边框 | 是否必填:false | 默认值: false |
        disable: false, //描述:按钮是否禁用 | 是否必填:false | 默认值: false |
        showIcon: false, //描述:按钮是否显示小图标 | 是否必填:false | 默认值: false |
        textUnderline: true //描述:按钮是否显示下划线 | 是否必填:false | 默认值: true |
    }
    onClick() {
        if (this.props.disable) return;
        this.props.onClick && this.props.onClick();
    }
    render() {
        const { state, props } = this;
        let gradient = 'lg_button_container_gradient-' + props.type;
        let backgroundType = 'lg_button_container_backgroundType-' + props.type + '-' + (props.backgroundType ? props.backgroundType : 'opacification');
        let border = 'lg_button_container_border-' + props.type;
        let shapeType = 'lg_button_container_shapeType-' + props.shapeType;
        let textUnderline = shapeType + (props.textUnderline ? '-textUnderline' : '');
        let showIcon = 'lg_button_container_showIcon-' + props.shapeType + (props.radius ? '-radius' : '');
        let icon = 'lg_button_container_showIcon-' + props.shapeType + (props.radius ? '-radius' : '') + '-custom';
        let disable = 'lg_button_container_disable' + (props.shapeType == 'text' ? '-text' : '')
        let buttonClassName = classNames([
            'lg_button_box',
            props.className,
            'lg_button_container_type-' + props.type,
            { [gradient]: props.gradient },
            backgroundType,
            { [border]: props.border },
            {
                [shapeType]: props.shapeType,
                [textUnderline]: props.shapeType
            },
            { 'lg_button_container_radius': props.radius },
            { [disable]: props.disable },
            { [showIcon]: props.showIcon },
            { [icon]: props.icon },
            'lg_button_container_size-' + props.size,
        ])
    
        let iconName = 'lg_button_container_icon' + (props.showIconType ? '-' + props.showIconType : '')
        let Icon = props.showIconType ? svgIcon[props.showIconType] : '';
        let showIconClassName = classNames([
            'lg_button_container_icon',
            { [iconName]: props.showIcon && !props.icon }
        ]);
        let iconDefaultName = 'icon-svg-'+props.showIconType+'-'+props.shapeType;
        let svgIconClassName =  classNames([
            'icon-svg',
            { [iconDefaultName]: props.showIcon && !props.icon }
        ]);
        return (
            <div className='lg_button_container' >
                <div className={buttonClassName} style={props.style} onClick={this.onClick}>
                    <div className={showIconClassName} style={{ display: props.showIcon && !props.icon ? 'block' : 'none' }}>
                        {Icon ? <Icon className={svgIconClassName} /> : <></>}
                    </div>
                    <div className='lg_button_container_icon_custom' style={{ display: props.showIcon && props.icon ? 'block' : 'none' }}>{props.icon}</div>
                    {props.value}
                </div>
            </div>
        )
    }

    getClassNamePrefix(): string {
      return "LgButton";
    }
}
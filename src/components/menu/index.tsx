import "./index.scss"
import { Component } from "react";
import { BaseProps } from '../../type/BaseProps'


export class LgMenu extends Component<BaseProps, {}> {
    constructor(props:BaseProps) {
        super(props)
    }
    render() {
        const { className='', style={} } = this.props
        return (
            <div className={`lg_menu_root ${className}`} style={style}>
                
            </div>
        )
    }
}
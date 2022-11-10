import React, {Component} from 'react';
import {BaseComponent} from "../../type/BaseComponent";
import './index.scss'

export interface ILgThProps {
    columns: Array<ILgThItemProps>
}

export interface ILgThItemProps {
    width?: string
    value: any
    props?: string
}

export class LgTb extends Component {
    render() {
        return (
            <div className="lg-common-tb">
                {this.props.children}
            </div>
        );
    }
}

export class LgTh extends Component<ILgThProps, {}> {
    constructor(props: ILgThProps) {
        super(props);
    }

    render() {
        return (
            <div className="lg-common-th">
                {
                    this.props.columns.map((o, i) => {
                        let style: any = {}
                        style.width = o.width || 'auto'
                        return (
                            <div key={`tr-columns${i}`} style={style}
                                 className="lg-common-th-item oneline">{o.value}</div>
                        )

                    })
                }
            </div>
        );
    }
}

export interface ILgTrProps {
    // data: any
    // columns: Array<ILgThItemProps>
    // tbWidths: Array<any>
    handChangeSysData?:() => {}
    handClick?:()=> void
}

// export class LgTr extends Component<ILgTrProps, {}> {
//     render() {
//         const data = this.props.data
//         const tbWidths = this.props.tbWidths
//         return (
//             <div className="lg-common-tr">
//                 {
//                     this.props.columns.map((o: any, i: number) => {
//                         let propAttr: any = o.props
//                         let style: any = {width: tbWidths[i]}
//                         return (
//                             // <div key={`td-columns${i}`} style={style || {}} title={propAttr ? data[propAttr] : null}
//                             //      className="lg-common-tr-item oneline">{propAttr ? data[propAttr] : o.node || null}
//                             // </div>
//                             <LgTd></LgTd>
//                         )
//                     })
//                 }
//             </div>
//         );
//     }
// }
export class LgTr extends BaseComponent<ILgTrProps, {}> {
    constructor(props:ILgTrProps, context: any) {
        super(props, context);
        this.handClick = this.handClick.bind(this);
    }
    handClick(){
        this.props.handClick && this.props.handClick()
    }
    render() {
        return (
            <div className={this.classnames('lg-common-tr', this.props.className||'')} onClick={this.handClick}>
                {
                    this.props.children
                }
            </div>
        );
    }

    getClassNamePrefix(): string {
      return "LgTr";
    }
}

export interface ILgTdProps {
    width?: string
    handClick?:()=> void
}

export class LgTd extends BaseComponent<ILgTdProps, {}> {
    constructor(props:ILgTdProps, context: any) {
        super(props, context);
        this.handClick = this.handClick.bind(this);
    }
    handClick(){
        this.props.handClick && this.props.handClick()
    }
    render() {
        const style = {width: this.props.width}
        return (
            <div className={`lg-common-tr-item oneline ${this.props.className}`} style={style} onClick={this.handClick}>
                {this.props.children}
            </div>
        );
    }

    getClassNamePrefix(): string {
      return "LgTd";
    }
}



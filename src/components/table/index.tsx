import { Component } from 'react';
import './index.scss';

interface IProps {
    num: number | null
    onClick?: React.MouseEventHandler
}
interface IState {
    money: number | null
}

export default class Table extends Component<IProps, IState>{
    static displayName = 'DefinedComponentName'
    static defaultProps = {
        num: 1
    }
    constructor(props : IProps) {
        super(props)
        this.state = {
            money : 1
        }
    }
    onClick = (e: React.MouseEvent) => {
        console.log(this.state.money)
    }
    render() {
        return (
            <>
                money,{this.state.money}。
                num,{this.props.num}
                <button onClick={this.onClick}></button>
            </>
        )
    }
};

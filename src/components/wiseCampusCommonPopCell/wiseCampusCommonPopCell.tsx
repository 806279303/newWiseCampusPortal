import {BaseComponent} from "../../type/BaseComponent";
import './wiseCampusCommonPopCell.scss'

interface CommonPopCellProps {
    label: string
    value?: string
    imageUrl?: string
}

export class CommonPopCell extends BaseComponent<CommonPopCellProps> {
    constructor(props: CommonPopCellProps, context: any) {
        super(props, context);
    }

    render() {
        const contentClassName = this.classnames('common-pop-cell-content', this.props.className)
        return (
            <div className="common-pop-cell" style={this.props.style || {}}>
                <div className="common-pop-cell-label">{this.props.label}</div>
                <div className={contentClassName}>
                    {
                        this.props.imageUrl ? (
                            <img className="common-pop-cell-content-img" src={this.props.imageUrl} alt="模块图标"/>
                        ) : null
                    }
                    {
                        this.props.value ? (
                            <div className="common-pop-cell-content-value">{this.props.value}</div>
                        ) : this.props.children
                    }
                </div>
            </div>
        );
    }

    getClassNamePrefix(): string {
        return "CommonPopCell";
    }
}
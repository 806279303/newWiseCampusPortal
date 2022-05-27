import {BaseComponent} from "../../type/BaseComponent";

interface CommonPopCellProps {
    label: string
}

export class CommonPopCell extends BaseComponent<CommonPopCellProps> {
    constructor(props: CommonPopCellProps, context: any) {
        super(props, context);
    }

    render() {
        return (
            <div className="common-pop-cell" style={this.props.style || {}}>
                <div className="common-pop-cell-label">{this.props.label}</div>
                <div className="common-pop-cell-content">
                    {this.props.children}
                </div>
            </div>
        );
    }

    getClassNamePrefix(): string {
        return "CommonPopCell";
    }
}
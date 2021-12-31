import "./index.scss"

interface BoxProps {
    type?: 'A' | 'B' | 'C',
    status?: 0 | 1 | 2 | number,
    children?: any,
    disable?: boolean,
    onClick?: (status: number, backData?: any) => void,
    backData?: any,
    className?: string,
    style?: object
    onRef?: (ref: any) => void;
}
const CheckBox = (props: BoxProps) => {
    if (props.onRef) props.onRef(this);
    const onClick = () => {
        if (props.disable) return;
        var status = props.status || 0;
        props.onClick && props.onClick(status, props.backData);
    }
    var className = props.className || "";
    if (props.disable) {
        className += " lg_checkbox_disable"
    }
    if (props.status && props.status < 3) {
        className += " lg_checkbox" + props.status;
    }
    var type = props.type || 'A';
    return (
        <div className={`lg_checkbox_type${type + className}`} onClick={onClick} style={props.style || {}}>
            <div className="lg_checkbox_btn"><div /></div>
            {props.children || ""}
        </div>
    )
}

export default CheckBox
import "./index.scss"

interface BoxProps {
    type?: 'A' | 'B' | 'C',
    value?: 0 | 1 | 2,
    children?: any,
    disable?: boolean,
    onClick?: (backData?: any) => void,
    backData?: any,
    className?: string,
    style?: object
    onRef?: (ref: any) => void;
}
const CheckBox = (props: BoxProps) => {
    if (props.onRef) props.onRef(this);
    const onClick = () => {
        if (props.disable) return;
        props.onClick && props.onClick(props.backData || null);
    }
    var className = props.className || "";
    if (props.disable) {
        className += " lg_checkbox_disable"
    }
    if (props.value) {
        className += " lg_checkbox" + props.value;
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
import { BaseProps } from "../../type/BaseProps";
import {BaseComponent} from "../../type/BaseComponent"
import "./index.scss";
import classNames from "classnames";

export interface LgInputNumberProps extends BaseProps {
    value?: number
    step?: number | string
    max?: number | string
    min?: number | string
    editable?: boolean
    readonly?: boolean
    disabled?: boolean
    formatter?: Function
    size?: 'large' | 'small'
    controlsOutside?: boolean
    onChange?(value?: any): void  
    onFocus?(value?:any): void
    onBlur?(value?:any): void
}
export interface LgInputNumberState {
    inputValue: string
}

export const LgInputNumber = (props: LgInputNumberProps) => {
    return <LgInput {...props} />
}
export class LgInput extends BaseComponent<LgInputNumberProps,LgInputNumberState> { 
    constructor(props: LgInputNumberProps) {
        super(props)
        let tempValue = this.props.value || Number(this.props.min) || 1
        if (tempValue < Number(this.props.min)) {
            tempValue = Number(this.props.min)
        }
        if (tempValue > Number(this.props.max)) {
            tempValue = Number(this.props.max) 
        }
        this.state = {
            inputValue: String(tempValue)
        }
    }
    formatValue(value:string) : string {
        let tempValue = this.state.inputValue
        if (this.props.formatter) {
            tempValue = this.props.formatter(tempValue)
        }
        return tempValue
    }
    add(a:number, b:number) : number{
        var r1, r2, m;
        try { r1 = a.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = b.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2))
        return (a * m + b * m) / m
    }
    sub(a:number, b:number) : number{
        var r1, r2, m;
        try { r1 = a.toString().split(".")[1].length } catch (e) { r1 = 0 }
        try { r2 = b.toString().split(".")[1].length } catch (e) { r2 = 0 }
        m = Math.pow(10, Math.max(r1, r2))
        return (a * m - b * m) / m
    }
    onUpClick() {
        if (this.props.readonly || this.props.disabled) {
            return
        }
        let num = parseFloat(this.state.inputValue)
        if (!this.state.inputValue) {
            this.setState({
                inputValue: String(this.props.max || this.props.value || this.props.min || 1)
            })
        }else {
            let step = parseFloat(String(this.props.step || 1))
            let result = this.add(num,step)
            if (this.props.max && result > Number(this.props.max)) {
                return
            }
            this.setState({
                inputValue: String(this.add(num,step))
            })
        }      
        if (this.props.onChange) {
            this.props.onChange(this.state.inputValue)  
        }
    }
    onDownClick() {
        if (this.props.readonly || this.props.disabled) {
            return
        }
        if (!this.state.inputValue) {
            this.setState({
                inputValue: String(this.props.min || this.props.value || this.props.max || 1)
            })
        }else {
            let num = parseFloat(this.state.inputValue)
            let step = parseFloat(String(this.props.step || 1))
            let result = this.sub(num,step)
            if (this.props.min && result < Number(this.props.min)) {
                return
            }
            this.setState({
                inputValue: String(this.sub(num,step))
            }) 
        } 
        if (this.props.onChange) {
            this.props.onChange(this.state.inputValue)  
        }
    }
    onInputChange(e: any) {   
        var tempValue:string = e.target.value 
        if (tempValue === "") {
            this.setState({
                inputValue: ""
            }) 
        }else {
            tempValue = tempValue.replace(/[^\-?\d.]/g,'')
            let numValue = parseFloat(tempValue)
            if (numValue > 99999999999999999999999) {
                tempValue = "Infinity"
            }
            if (numValue < -9999999999999999999999) {
                tempValue = "-Infinity"
            }
            if (numValue > Number(this.props.max)) {
                tempValue = String(this.props.max)
            }
            if (numValue < Number(this.props.min)) {
                tempValue = String(this.props.min)
            }
            this.setState({
                inputValue: tempValue
            }) 
        }
        
    }
    defineOnChange(e: any) {
        if (this.props.onChange) {
            this.props.onChange(e.target.value)
        }
    }
    defineOnFocus(e: any) {
        if (this.props.onFocus) {
            this.props.onFocus(e)
        }
    }
    render() {
        const { className = '', style } = this.props
        let inputNumberClassName = classNames(
            "lancoo-input-number",
            className,
            {
                "lancoo-input-number-controls-outside": this.props.controlsOutside,
                "lancoo-input-number-disable": this.props.disabled,
                "lancoo-input-number-small": this.props.size === "small",
                "lancoo-input-number-large": this.props.size === "large"
            }
        )
        return (
            <div className={inputNumberClassName} style={style}>
                <div className="lancoo-input-number-wrap">
                    <span className={`lancoo-input-number-handle lancoo-input-number-handle-up ${this.props.max && parseInt(this.state.inputValue) >= Number(this.props.max) ? "lancoo-input-number-handle-disable":""}`} onClick={this.onUpClick.bind(this)}>
                        <span className="lancoo-input-number-handle-up-inner el-icon-arrow-up">
                        </span>
                    </span>
                    <span className={`lancoo-input-number-handle lancoo-input-number-handle-down ${this.props.min && parseInt(this.state.inputValue) <= Number(this.props.min) ? "lancoo-input-number-handle-disable":""}`} onClick={this.onDownClick.bind(this)}>
                        <span className="lancoo-input-number-handle-down-inner el-icon-arrow-down">
                        </span>
                    </span>
                </div>
                <div className="lancoo-input-number-input-wrap">
                    <input autoComplete="off"
                        spellCheck="false" 
                        placeholder="" 
                        type="text" 
                        className="lancoo-input-number-input" 
                        disabled = {this.props.disabled} readOnly = {this.props.readonly || this.props.editable} 
                        value={this.formatValue(this.state.inputValue)} 
                        onInput={this.onInputChange.bind(this)} 
                        onChange={this.defineOnChange.bind(this)}
                        onFocus={this.defineOnFocus.bind(this)}
                        onBlur={this.props.onBlur?this.props.onBlur:()=>{}}/>
                </div>
                <div className={`lancoo-input-number-controls-outside-btn lancoo-input-number-controls-outside-down ${this.props.min && parseInt(this.state.inputValue) <= Number(this.props.min) ? "lancoo-input-number-controls-outside-disable":""}`} onClick={this.onDownClick.bind(this)}>
                    <i className="lancoo-input-number-controls-outside-down-inner el-icon-minus"></i>
                </div>
                <div className={`lancoo-input-number-controls-outside-btn lancoo-input-number-controls-outside-up ${this.props.max && parseInt(this.state.inputValue) >= Number(this.props.max) ? "lancoo-input-number-controls-outside-disable":""}`} onClick={this.onUpClick.bind(this)}>
                    <i className="lancoo-input-number-controls-outside-up-inner el-icon-plus"></i>
                </div>                
            </div>
        )
    }
}
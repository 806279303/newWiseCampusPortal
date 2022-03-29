import {BaseComponent} from "../../../../type/BaseComponent";
import {LgInput} from "@/components/input";
import {LgSwitch} from "@/components/switch";
import {Select} from "element-react";

import '../../../../css/common.scss'
import '../../../../css/common.pop.scss'
import './index.scss'
import UploadDefaultImg from '@/images/upload_default.png'
import {AddBtn} from "@/components/common";
import store from "../../../../redux/store";
interface SystemPopProps {
    weappData: object
    insertWeappData: object
    onRef?: any
}

interface SystemPopState {
    weappStates: any[]
    weappState: number
    weappData: object
    insertWeappData: object
}

export class InsertWeappPop extends BaseComponent<SystemPopProps, SystemPopState> {
    private CNP: string//$classNamePrefix
    static defaultProps = {
        insertWeappData: {
            systemLogoUrl: "",
            systemId: "",
            systemName: "",
            lockerId: "",
            systemState: 1,
            hasPush: 0,
            version: '',
            primaryAppId: '',
            primaryAppSecret: '',
            primaryDefaultAppUrl: '',
            universityAppId: '',
            universityAppSecret: '',
            universityDefaultAppUrl: '',
        }
    }
    constructor(props: SystemPopProps) {
        super(props);
        this.state = {
            weappStates: [{
                value: 1,
                label: '黄金糕'
            }, {
                value: 2,
                label: '双皮奶'
            }, {
                value: 3,
                label: '蚵仔煎'
            }],
            weappState: 1,
            weappData: {},
            insertWeappData: {}
        }
        this.CNP = "lg-insert-weapp-pop"
        this.onChange = this.onChange.bind(this);
        this.getHttpData = this.getHttpData.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        this.props.onRef && this.props.onRef(this)
        this.setState({weappData: this.props.weappData, insertWeappData: this.props.insertWeappData})
    }

    componentWillReceiveProps(nextProps: Readonly<SystemPopProps>, nextContext: any) {
        this.setState({weappData: nextProps.weappData, insertWeappData: nextProps.insertWeappData})
    }
    getHttpData(){
        return this.state.insertWeappData
    }
    onChange(value: any, attr: string) {
        const weappData: any = this.state.weappData
        weappData[attr] = value
        this.setState({weappData: weappData})
    }

    openAddPop() {
        console.log(this.state.insertWeappData)
    }

    render() {
        const data: any = this.state.insertWeappData || {}
        return (
            <div className={`${this.CNP}`}>
                <div className={`${this.CNP}-top`}>
                    <CommonPopCell label="模块名称:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'systemId')
                        }} value={data.systemId}/>
                    </CommonPopCell>
                    <CommonPopCell label="默认版本号:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'systemName')
                        }} value={data.systemName}/>
                    </CommonPopCell>
                    <CommonPopCell label="学校类型:">
                        <Select value={data.systemState} placeholder="请选择">
                            {
                                this.state.weappStates.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                })
                            }
                        </Select>
                    </CommonPopCell>
                    <CommonPopCell label="版本号:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'version')
                        }} value={data.version}/>
                    </CommonPopCell>
                </div>
                <div className={`${this.CNP}-bottom`}>
                    <div className={`${this.CNP}-bottom-title`}>内部模块</div>
                    <div className={`${this.CNP}-bottom-cell`}>
                        <div className={`${this.CNP}-bottom-cell-label`}>添加角色:</div>

                        <div className={`${this.CNP}-bottom-cell-identity`}>
                            <Select value={this.state.weappState} placeholder="请选择">
                                {
                                    this.state.weappStates.map(el => {
                                        return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                    })
                                }
                            </Select>
                        </div>
                        <div className={`${this.CNP}-bottom-cell-type`}>
                            <Select value={this.state.weappState} placeholder="请选择">
                                {
                                    this.state.weappStates.map(el => {
                                        return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                    })
                                }
                            </Select>
                        </div>
                        <div className={`${this.CNP}-bottom-cell-name`}>
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'systemId')
                            }} value={data.systemId}/>
                        </div>
                        <div className={`${this.CNP}-bottom-cell-des`}>
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'systemId')
                            }} value={data.systemId}/>
                        </div>
                    </div>
                    <div className={`${this.CNP}-bottom-add`}>
                        <AddBtn text="添加内置模块" handClick={this.openAddPop}></AddBtn>
                    </div>
                </div>
            </div>
        );
    }
}

interface CommonPopCellProps {
    label: string
}

class CommonPopCell extends BaseComponent<CommonPopCellProps> {
    constructor(props: CommonPopCellProps) {
        super(props);
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
}

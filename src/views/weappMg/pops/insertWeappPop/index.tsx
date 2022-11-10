import {BaseComponent} from "../../../../type/BaseComponent";
import {LgInput} from "@/components/input";
import {LgSwitch} from "@/components/switch";
import {Select, Upload} from "element-react";
import React, {Component} from "react";

import '../../../../css/common.scss'
import '../../../../css/common.pop.scss'
import './index.scss'
import {AddBtn} from "@/components/common";
import {insideWeappPopProps, insideWeappPopState} from "@/views/weappMg/pops/insertWeappPop/model";
import {uploadLogoUrl} from "../../../../network/apiURL";
import {uploadImgTypes} from "@/views/weappMg/pops/weappPop/model";
import {lgAlert} from "@/components/alert";

export class InsertWeappPop extends BaseComponent<insideWeappPopProps, insideWeappPopState> {
    constructor(props: insideWeappPopProps, context: any) {
        super(props, context);
        this.state = {
            schoolTypes: [{
                value: 1,
                label: '中小学'
            }, {
                value: 2,
                label: '大学'
            }, {
                value: 0,
                label: '中小学与大学'
            }],
            data: {}
        }
        this.onChange = this.onChange.bind(this);
        this.getHttpData = this.getHttpData.bind(this);
        this.addIdentity = this.addIdentity.bind(this);
        this.updateRoles = this.updateRoles.bind(this);
        this.deleteRole = this.deleteRole.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        this.props.onRef && this.props.onRef(this)
        this.initData(this.props.data)
    }

    componentWillReceiveProps(nextProps: Readonly<insideWeappPopProps>, nextContext: any) {
        this.initData(nextProps.data)
    }

    initData(data: any) {
        let newData = data
        let roles = newData.roles || []
        const identityCells = roles.filter((item: any) => item.isExist === 1)
        newData.identityCells = identityCells
        this.setState({data: newData})
    }

    getHttpData() {
        const data: any = this.state.data
        const identityCells = data.identityCells
        const httpData = {
            ...data,
            roles: identityCells
        }
        delete httpData.identityCells;
        return httpData
    }

    onChange(value: any, attr: string) {
        const data: any = this.state.data
        data[attr] = value
        this.setState({data: data})
    }

    addIdentity() {
        const data: any = this.state.data
        const identityCells = data.identityCells || []
        if (identityCells.length >= 4) return
        identityCells.push({
            isExist: 1,
            type: 0,
            moduleName: '',
            moduleDesc: '',
            moduleDefaultUrl: ''
        })
        data.identityCells = identityCells
        this.setState({data: data})
    }

    //上传相关
    handleLogoScucess(res: any, file: any) {
        const data: any = this.state.data
        data.moduleLogoUrl = res.data.absolutePath
        this.setState({data: data});
    }

    beforeLogoUpload(file: any) {
        const isTypes = uploadImgTypes.some((o: string, i: number) => {
            return file.type === o
        })
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isTypes) {
            lgAlert.show({tipType: 'error', content: "上传头像图片只能是 JPG 格式!", position: {xAxis: 'center', yAxis: 'center'}})
        }
        if (!isLt2M) {
            lgAlert.show({tipType: 'error', content: "上传头像图片大小不能超过 2MB!", position: {xAxis: 'center', yAxis: 'center'}})
        }
        return isTypes && isLt2M;
    }

    //上传相关- 结束

    updateRoles(item: any, index: number) {
        const data: any = this.state.data
        const identityCells = data.identityCells
        identityCells[index] = item
        this.setState({data: data})
    }

    deleteRole(item: any, index:number){
        const data:any = this.state.data
        const identityCells = data.identityCells
        identityCells.splice(index, 1)
        this.setState({data: data})
    }

    render() {
        const data: any = this.state.data || {}
        const identityCells = data.identityCells || []
        return (
            <div className={`${this.CNP}`}>
                <div className={`${this.CNP}-uploadImg`}>
                    <Upload
                        action={uploadLogoUrl}
                        showFileList={false}
                        onSuccess={(res, file) => this.handleLogoScucess(res, file)}
                        beforeUpload={file => this.beforeLogoUpload(file)}
                    >
                        {data.moduleLogoUrl ?
                            <img src={data.moduleLogoUrl} className={`${this.CNP}-uploadImg-cont`}/> :
                            <i className={`${this.CNP}-uploadImg-cont el-icon-plus`}></i>
                        }
                        <div className={`${this.CNP}-uploadImg-add common-btn common-btn-blue`}>上传图片</div>
                    </Upload>
                    <div className={`${this.CNP}-uploadImg-tip`}>注：图片大小不能超过2MB，建议尺寸大小144*144</div>
                    {/*<img src={data.systemLogoUrl || UploadDefaultImg} alt=""/>*/}
                </div>
                <div className={`${this.CNP}-systemContent`}>
                    <CommonPopCell label="模块名称:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'moduleName')
                        }} value={data.moduleName}/>
                    </CommonPopCell>
                    <CommonPopCell label="默认版本号:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'defaultVersion')
                        }} value={data.defaultVersion}/>
                    </CommonPopCell>
                    <CommonPopCell label="学校类型:">
                        <Select value={data.schoolType} placeholder="请选择">
                            {
                                this.state.schoolTypes.map(el => {
                                    return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                })
                            }
                        </Select>
                    </CommonPopCell>
                    <CommonPopCell label="默认路径:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'defaultAppUrl')
                        }} value={data.defaultAppUrl}/>
                    </CommonPopCell>
                    <CommonPopCell label="模块描述:">
                        <LgInput type="text" onChange={(value) => {
                            this.onChange(value, 'moduleDesc')
                        }} value={data.moduleDesc}/>
                    </CommonPopCell>


                    <div className={`${this.CNP}-systemContent`}>
                        <div className={`${this.CNP}-systemContent-title`}>内部模块</div>
                        {
                            identityCells.map((item: any, index: number) => (
                                <IdentityCell key={'lg-identity-cell' + index} data={item} index={index}
                                              updateRoles={this.updateRoles}
                                              deleteRole={this.deleteRole}/>
                            ))
                        }
                        <div className={`${this.CNP}-systemContent-add`}>
                            <AddBtn text="添加角色" handClick={this.addIdentity}/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    getClassNamePrefix(): string {
      return "InsertWeappPop";
    }
}

interface IdentityCellProps {
    data: any[]
    index: number
    updateRoles: (data: any, index: number) => void
    deleteRole: (data: any, index: number) => void
}

interface IdentityCellState {
    identities: any[]
}

class IdentityCell extends Component<IdentityCellProps, IdentityCellState> {
    public CNP: string//$classNamePrefix
    constructor(props: IdentityCellProps) {
        super(props);
        this.CNP = "lg-insert-weapp-pop"
        this.state = {
            identities: [{
                value: 0,
                label: '管理员'
            }, {
                value: 1,
                label: '教师'
            }, {
                value: 2,
                label: '学生'
            }, {
                value: 3,
                label: '家长'
            }],
        }
        this.onChange = this.onChange.bind(this);
        this.delCurrentModule = this.delCurrentModule.bind(this);
    }

    onChange(value: any, attr: string) {
        const data: any = this.props.data
        data[attr] = value
        console.log(data, this.props.index)
        this.props.updateRoles(data, this.props.index)
    }

    delCurrentModule(data:any, index:number){
        this.props.deleteRole(data, index)
    }

    render() {
        const data: any = this.props.data
        const index: number = this.props.index
        return (
            <div className={`${this.CNP}-systemContent-cell`}>
                <div className={`${this.CNP}-systemContent-cell-label`}>添加角色:</div>
                <div className={`${this.CNP}-systemContent-cell-identity`}>
                    <Select value={data.type} placeholder="请选择角色" onChange={(value) => {
                        this.onChange(value, 'type')
                    }}>
                        {
                            this.state.identities.map(el => {
                                return <Select.Option key={el.value} label={el.label} value={el.value}/>
                            })
                        }
                    </Select>
                </div>
                <div className={`${this.CNP}-systemContent-cell-name`}>
                    <LgInput type="text" onChange={(value) => {
                        this.onChange(value, 'moduleName')
                    }} value={data.moduleName} placeholder="请输入模块名称"/>
                </div>
                <div className={`${this.CNP}-systemContent-cell-des`}>
                    <LgInput type="text" onChange={(value) => {
                        this.onChange(value, 'moduleDesc')
                    }} value={data.moduleDesc} placeholder="请输入模块描述"/>
                </div>
                <div className={`${this.CNP}-systemContent-cell-url`}>
                    <LgInput type="text" onChange={(value) => {
                        this.onChange(value, 'moduleDefaultUrl')
                    }} value={data.moduleDefaultUrl} placeholder="请输入模块角色默认路径"/>
                </div>
                <span onClick={()=>{this.delCurrentModule(data, index)}}>-</span>
            </div>
        );
    }
}


interface CommonPopCellProps {
    label: string
}

class CommonPopCell extends BaseComponent<CommonPopCellProps> {
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

import {BaseComponent} from "../../../../type/BaseComponent";
import {LgInput} from "@/components/input";
import {LgSwitch} from "@/components/switch";
import {Select} from "element-react";
import React from "react";
import {
    SystemPopProps,
    SystemPopState,
    PropsData,
    defaultProps,
    WIDTH_MATCHES, uploadImgTypes,
} from "@/views/weappMg/pops/weappPop/model";
import {Upload} from "element-react";

import '../../../../css/common.scss'
import '../../../../css/common.pop.scss'
import './index.scss'
import {lgAlert} from "@/components/alert";
import {uploadLogoUrl} from "../../../../network/apiURL";

class WeappPop extends BaseComponent<SystemPopProps, SystemPopState> {
    static defaultProps = defaultProps
    private static readonly WIDTH_MATCHES = WIDTH_MATCHES
    private openInsertWeappPopType: number
    public insideWeappPopRef: any = React.createRef()

    constructor(props: SystemPopProps, context: any) {
        super(props, context);
        const widthsMatch = WeappPop.WIDTH_MATCHES
        this.state = {
            weappStates: [{
                value: 0,
                label: '不可用'
            }, {
                value: 1,
                label: '可用'
            }, {
                value: 2,
                label: '维护中'
            }],
            data: {},
            insertColumns: [
                {value: '#', props: 'id', width: widthsMatch.id},
                {value: '模块名称', props: 'moduleName', width: widthsMatch.moduleName},
                {value: '支持角色', props: '', width: widthsMatch.identity},
                {value: '学校类型', props: 'schoolType', width: widthsMatch.schoolType},
                {value: '默认路径', props: 'defaultAppUrl', width: widthsMatch.defaultAppUrl},
                {value: '默认版本号', props: 'defaultVersion', width: widthsMatch.defaultVersion},
                {value: '操作', width: widthsMatch.handles},
            ],

            isOpenInsertSystemPop: false,
            insertWeappData: {}
        }
        this.openInsertWeappPopType = 0
        this.props.onRef && this.props.onRef(this)
        this.onChange = this.onChange.bind(this);
        this.onSystemStateChanged = this.onSystemStateChanged.bind(this);
        this.insertWeappPopDidOpened = this.insertWeappPopDidOpened.bind(this);
        this.insertWeappPopDidConfirm = this.insertWeappPopDidConfirm.bind(this);
        this.onInsideWeappPopRef = this.onInsideWeappPopRef.bind(this);
        this.getWeappHttpData = this.getWeappHttpData.bind(this);
    }

    componentDidMount() {
        super.componentDidMount();
        this.setState({data: this.props.data})
    }

    componentWillReceiveProps(nextProps: Readonly<SystemPopProps>, nextContext: any) {
        this.setState({data: nextProps.data})
    }

    onInsideWeappPopRef(child: any) {
        this.insideWeappPopRef = child
        console.log(this.insideWeappPopRef)
    }

    onSystemStateChanged(systemState:number){
        const data: any = this.state.data
        data['systemState'] = systemState
        this.setState({data: data})
    }
    onChange(value: any, attr: string) {
        const data: any = this.state.data
        data[attr] = value
        this.setState({data: data})
    }

    pushChanged(checked: boolean) {
        const data: any = this.state.data
        data.hasPush = checked === true ? 1 : 0
        this.setState({data: data})
    }

    openInsertWeappPop(type: number, insertWeappData: any) {
        this.openInsertWeappPopType = type
        this.setState({insertWeappData: insertWeappData, isOpenInsertSystemPop: true})
    }

    insertWeappPopDidOpened() {

    }

    insertWeappPopDidClosed() {
        // this.props.setWeappData && this.props.setWeappData(this.state.data)
        this.setState({isOpenInsertSystemPop: false})
    }

    insertWeappPopDidConfirm() {
        const data = this.insideWeappPopRef.getHttpData()
        console.log(data)
    }

    getWeappHttpData() {
        return this.state.data
    }
    //上传相关
    handleLogoScucess(res: any, file: any) {
        const data: any = this.state.data
        data.systemLogoUrl = res.data.absolutePath
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
    render() {
        const data: any = this.state.data
        const wxSystemModules = data.wxSystemModules || []
        const widthsMatch = WeappPop.WIDTH_MATCHES
        return (
            <div className={`${this.CNP}`}>
                <div className={`${this.CNP}-top`}>
                    <div className={`${this.CNP}-top-uploadImg`}>
                        <Upload
                            action={uploadLogoUrl}
                            showFileList={false}
                            onSuccess={(res, file) => this.handleLogoScucess(res, file)}
                            beforeUpload={file => this.beforeLogoUpload(file)}
                        >
                            {data.systemLogoUrl ?
                                <img src={data.systemLogoUrl} className={`${this.CNP}-top-uploadImg-cont`}/> :
                                <i className={`${this.CNP}-top-uploadImg-cont el-icon-plus`}></i>
                            }
                            <div className={`${this.CNP}-top-uploadImg-add common-btn common-btn-blue`}>上传图片</div>
                        </Upload>
                        <div className={`${this.CNP}-top-uploadImg-tip`}>注：图片大小不能超过2MB，建议尺寸大小144*144</div>
                        {/*<img src={data.systemLogoUrl || UploadDefaultImg} alt=""/>*/}
                    </div>
                    <div className={`${this.CNP}-top-systemContent`}>
                        <CommonPopCell label="系统ID:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'systemId')
                            }} value={data.systemId}/>
                        </CommonPopCell>
                        <CommonPopCell label="系统名称:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'systemName')
                            }} value={data.systemName}/>
                        </CommonPopCell>
                        <CommonPopCell label="锁ID:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'lockerId')
                            }} value={data.lockerId}/>
                        </CommonPopCell>
                        <CommonPopCell label="小程序状态:">
                            <Select value={data.systemState} onChange={this.onSystemStateChanged} placeholder="请选择">
                                {
                                    this.state.weappStates.map(el => {
                                        return <Select.Option key={el.value} label={el.label} value={el.value}/>
                                    })
                                }
                            </Select>
                        </CommonPopCell>
                        <CommonPopCell label="是否含推送:">
                            <LgSwitch
                                checked={!!data.hasPush}
                                onClick={(checked) => {
                                    this.pushChanged(checked)
                                }}
                            />
                        </CommonPopCell>
                        <CommonPopCell label="版本号:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'version')
                            }} value={data.version}/>
                        </CommonPopCell>
                        <CommonPopCell label="中小学secret:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'primaryAppSecret')
                            }} value={data.primaryAppSecret}/>
                        </CommonPopCell>
                        <CommonPopCell label="大学secret:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'universityAppSecret')
                            }} value={data.universityAppSecret}/>
                        </CommonPopCell>
                        <CommonPopCell label="中小学appId:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'primaryAppId')
                            }} value={data.primaryAppId}/>
                        </CommonPopCell>
                        <CommonPopCell label="大学appId:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'universityAppId')
                            }} value={data.universityAppId}/>
                        </CommonPopCell>
                        <CommonPopCell label="中小学默认路径:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'primaryDefaultAppUrl')
                            }} value={data.primaryDefaultAppUrl}/>
                        </CommonPopCell>
                        <CommonPopCell label="大学默认路径:">
                            <LgInput type="text" onChange={(value) => {
                                this.onChange(value, 'universityDefaultAppUrl')
                            }} value={data.universityDefaultAppUrl}/>
                        </CommonPopCell>
                    </div>
                </div>
            </div>
        );
    }

    getClassNamePrefix(): string {
      return "WeappPop";
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

export default WeappPop
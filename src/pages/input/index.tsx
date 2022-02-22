/*
 * @Author       : super-J
 * @Date         : 2022-02-09 17:22:40
 * @LastEditTime : 2022-02-22 08:49:59
 * @LastEditors  : super-J
 * @Description  : 
 */
import { LgCascader } from "@/components/cascader";
import { CodeView } from "@/components/CodeView";
import { LgInput } from "@/components/input";
import { AutoComplete, Button, Cascader, Input, Layout, Select } from "element-react";
import { Component } from "react";
import "./index.scss";
interface InputDemoState {
    inputValue: string
    selectedOptions: any[];
    selectedOptions2: any[];
    options: any[];
    restaurants: any[];
    value1: any;
    value2: any;
}
export default class InputDemo extends Component<{}, InputDemoState> {
    constructor(props: any) {
        super(props)
        this.state = {
            inputValue: '',
            options: [{
                value: 'zhinan',
                label: '指南',
                children: [{
                    value: 'shejiyuanze',
                    label: '设计原则',
                    children: [{
                        value: 'yizhi',
                        label: '一致'
                    }, {
                        value: 'fankui',
                        label: '反馈'
                    }, {
                        value: 'xiaolv',
                        label: '效率'
                    }, {
                        value: 'kekong',
                        label: '可控'
                    }]
                }, {
                    value: 'daohang',
                    label: '导航',
                    children: [{
                        value: 'cexiangdaohang',
                        label: '侧向导航'
                    }, {
                        value: 'dingbudaohang',
                        label: '顶部导航'
                    }]
                }]
            }, {
                value: 'zujian',
                label: '组件',
                children: [{
                    value: 'basic',
                    label: 'Basic',
                    children: [{
                        value: 'layout',
                        label: 'Layout 布局'
                    }, {
                        value: 'color',
                        label: 'Color 色彩'
                    }, {
                        value: 'typography',
                        label: 'Typography 字体'
                    }, {
                        value: 'icon',
                        label: 'Icon 图标'
                    }, {
                        value: 'button',
                        label: 'Button 按钮'
                    }]
                }, {
                    value: 'form',
                    label: 'Form',
                    children: [{
                        value: 'radio',
                        label: 'Radio 单选框'
                    }, {
                        value: 'checkbox',
                        label: 'Checkbox 多选框'
                    }, {
                        value: 'input',
                        label: 'Input 输入框'
                    }, {
                        value: 'input-number',
                        label: 'InputNumber 计数器'
                    }, {
                        value: 'select',
                        label: 'Select 选择器'
                    }, {
                        value: 'cascader',
                        label: 'Cascader 级联选择器'
                    }, {
                        value: 'switch',
                        label: 'Switch 开关'
                    }, {
                        value: 'slider',
                        label: 'Slider 滑块'
                    }, {
                        value: 'time-picker',
                        label: 'TimePicker 时间选择器'
                    }, {
                        value: 'date-picker',
                        label: 'DatePicker 日期选择器'
                    }, {
                        value: 'datetime-picker',
                        label: 'DateTimePicker 日期时间选择器'
                    }, {
                        value: 'upload',
                        label: 'Upload 上传'
                    }, {
                        value: 'rate',
                        label: 'Rate 评分'
                    }, {
                        value: 'form',
                        label: 'Form 表单'
                    }]
                }, {
                    value: 'data',
                    label: 'Data',
                    children: [{
                        value: 'table',
                        label: 'Table 表格'
                    }, {
                        value: 'tag',
                        label: 'Tag 标签'
                    }, {
                        value: 'progress',
                        label: 'Progress 进度条'
                    }, {
                        value: 'tree',
                        label: 'Tree 树形控件'
                    }, {
                        value: 'pagination',
                        label: 'Pagination 分页'
                    }, {
                        value: 'badge',
                        label: 'Badge 标记'
                    }]
                }, {
                    value: 'notice',
                    label: 'Notice',
                    children: [{
                        value: 'alert',
                        label: 'Alert 警告'
                    }, {
                        value: 'loading',
                        label: 'Loading 加载'
                    }, {
                        value: 'message',
                        label: 'Message 消息提示'
                    }, {
                        value: 'message-box',
                        label: 'MessageBox 弹框'
                    }, {
                        value: 'notification',
                        label: 'Notification 通知'
                    }]
                }, {
                    value: 'navigation',
                    label: 'Navigation',
                    children: [{
                        value: 'menu',
                        label: 'NavMenu 导航菜单'
                    }, {
                        value: 'tabs',
                        label: 'Tabs 标签页'
                    }, {
                        value: 'breadcrumb',
                        label: 'Breadcrumb 面包屑'
                    }, {
                        value: 'dropdown',
                        label: 'Dropdown 下拉菜单'
                    }, {
                        value: 'steps',
                        label: 'Steps 步骤条'
                    }]
                }, {
                    value: 'others',
                    label: 'Others',
                    children: [{
                        value: 'dialog',
                        label: 'Dialog 对话框'
                    }, {
                        value: 'tooltip',
                        label: 'Tooltip 文字提示'
                    }, {
                        value: 'popover',
                        label: 'Popover 弹出框'
                    }, {
                        value: 'card',
                        label: 'Card 卡片'
                    }, {
                        value: 'carousel',
                        label: 'Carousel 走马灯'
                    }, {
                        value: 'collapse',
                        label: 'Collapse 折叠面板'
                    }]
                }]
            }, {
                value: 'ziyuan',
                label: '资源',
                children: [{
                    value: 'axure',
                    label: 'Axure Components'
                }, {
                    value: 'sketch',
                    label: 'Sketch Templates'
                }, {
                    value: 'jiaohu',
                    label: '组件交互文档'
                }]
            }],
            selectedOptions: [],
            selectedOptions2: [],
            restaurants: [
                { "value": "三全鲜食（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "Hot honey 首尔炸鸡（仙霞路）", "address": "上海市长宁区淞虹路661号" },
                { "value": "新旺角茶餐厅", "address": "上海市普陀区真北路988号创邑金沙谷6号楼113" },
                { "value": "泷千家(天山西路店)", "address": "天山西路438号" },
                { "value": "胖仙女纸杯蛋糕（上海凌空店）", "address": "上海市长宁区金钟路968号1幢18号楼一层商铺18-101" },
                { "value": "贡茶", "address": "上海市长宁区金钟路633号" },
                { "value": "豪大大香鸡排超级奶爸", "address": "上海市嘉定区曹安公路曹安路1685号" },
                { "value": "茶芝兰（奶茶，手抓饼）", "address": "上海市普陀区同普路1435号" },
                { "value": "十二泷町", "address": "上海市北翟路1444弄81号B幢-107" },
                { "value": "星移浓缩咖啡", "address": "上海市嘉定区新郁路817号" },
                { "value": "阿姨奶茶/豪大大", "address": "嘉定区曹安路1611号" },
                { "value": "新麦甜四季甜品炸鸡", "address": "嘉定区曹安公路2383弄55号" },
                { "value": "Monica摩托主题咖啡店", "address": "嘉定区江桥镇曹安公路2409号1F，2383弄62号1F" },
                { "value": "浮生若茶（凌空soho店）", "address": "上海长宁区金钟路968号9号楼地下一层" },
                { "value": "NONO JUICE  鲜榨果汁", "address": "上海市长宁区天山西路119号" },
                { "value": "CoCo都可(北新泾店）", "address": "上海市长宁区仙霞西路" },
                { "value": "快乐柠檬（神州智慧店）", "address": "上海市长宁区天山西路567号1层R117号店铺" },
                { "value": "Merci Paul cafe", "address": "上海市普陀区光复西路丹巴路28弄6号楼819" },
                { "value": "猫山王（西郊百联店）", "address": "上海市长宁区仙霞西路88号第一层G05-F01-1-306" },
                { "value": "枪会山", "address": "上海市普陀区棕榈路" },
                { "value": "纵食", "address": "元丰天山花园(东门) 双流路267号" },
                { "value": "钱记", "address": "上海市长宁区天山西路" },
                { "value": "壹杯加", "address": "上海市长宁区通协路" },
                { "value": "唦哇嘀咖", "address": "上海市长宁区新泾镇金钟路999号2幢（B幢）第01层第1-02A单元" },
                { "value": "爱茜茜里(西郊百联)", "address": "长宁区仙霞西路88号1305室" },
                { "value": "爱茜茜里(近铁广场)", "address": "上海市普陀区真北路818号近铁城市广场北区地下二楼N-B2-O2-C商铺" },
                { "value": "鲜果榨汁（金沙江路和美广店）", "address": "普陀区金沙江路2239号金沙和美广场B1-10-6" },
                { "value": "开心丽果（缤谷店）", "address": "上海市长宁区威宁路天山路341号" },
                { "value": "超级鸡车（丰庄路店）", "address": "上海市嘉定区丰庄路240号" },
                { "value": "妙生活果园（北新泾店）", "address": "长宁区新渔路144号" },
                { "value": "香宜度麻辣香锅", "address": "长宁区淞虹路148号" },
                { "value": "凡仔汉堡（老真北路店）", "address": "上海市普陀区老真北路160号" },
                { "value": "港式小铺", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "蜀香源麻辣香锅（剑河路店）", "address": "剑河路443-1" },
                { "value": "北京饺子馆", "address": "长宁区北新泾街道天山西路490-1号" },
                { "value": "饭典*新简餐（凌空SOHO店）", "address": "上海市长宁区金钟路968号9号楼地下一层9-83室" },
                { "value": "焦耳·川式快餐（金钟路店）", "address": "上海市金钟路633号地下一层甲部" },
                { "value": "动力鸡车", "address": "长宁区仙霞西路299弄3号101B" },
                { "value": "浏阳蒸菜", "address": "天山西路430号" },
                { "value": "四海游龙（天山西路店）", "address": "上海市长宁区天山西路" },
                { "value": "樱花食堂（凌空店）", "address": "上海市长宁区金钟路968号15楼15-105室" },
                { "value": "壹分米客家传统调制米粉(天山店)", "address": "天山西路428号" },
                { "value": "福荣祥烧腊（平溪路店）", "address": "上海市长宁区协和路福泉路255弄57-73号" },
                { "value": "速记黄焖鸡米饭", "address": "上海市长宁区北新泾街道金钟路180号1层01号摊位" },
                { "value": "红辣椒麻辣烫", "address": "上海市长宁区天山西路492号" },
                { "value": "(小杨生煎)西郊百联餐厅", "address": "长宁区仙霞西路88号百联2楼" },
                { "value": "阳阳麻辣烫", "address": "天山西路389号" },
                { "value": "南拳妈妈龙虾盖浇饭", "address": "普陀区金沙江路1699号鑫乐惠美食广场A13" }
            ],
            value1: '',
            value2: ''
        }
        this.onChange = this.onChange.bind(this)
    }
    componentDidMount() {
        let allSkin = ["lg-skin-s1", "lg-skin-s2", "lg-skin-s3", "lg-skin-s4", "lg-skin-s5", "lg-skin-k1", "lg-skin-k2"];
        let number = allSkin.length;
        setInterval(() => {
            let index = Math.floor(Math.random() * parseInt(number as any));
            document.documentElement.className = allSkin[index];
        }, 1000 * 5)
    }
    onChange(e: any) {
        console.log(e);
        this.setState({
            inputValue: e
        })
    }

    handleChange1(value: any) {
        this.setState({ selectedOptions: value });
        console.log(value);
    }
    handleChange2(value: any) {
        this.setState({ selectedOptions2: value });
        console.log(value);
    }
    querySearch(queryString: any, cb: (arg0: any[]) => void) {
        const { restaurants } = this.state;
        const results = queryString ? restaurants.filter(this.createFilter(queryString)) : restaurants;
        // 调用 callback 返回建议列表的数据
        cb(results);
    }

    createFilter(queryString: string) {
        return (restaurant: { value: string; }) => {
            return (restaurant.value.toLowerCase().indexOf(queryString.toLowerCase()) === 0);
        };
    }

    handleSelect(item: any) {

    }
    render() {
        return (
            <div className="input_container">
                <div className='components-show-box'>
                    <div className='components-show-big-title'>G005 输入框/下拉框</div>
                    <div className='components-show-use'>使用指南</div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>一、在 @/components/input 文件中引入组件 LgInput</div>
                        <div className='components-show-steps-code'>
                            <CodeView className=''>
                                {
                                    `import { LgInput } from "@/components/input";`
                                }
                            </CodeView>
                        </div>
                    </div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>二、再引入标签，标签属性解析</div>
                        <div className='components-show-steps-code'>
                            <CodeView className=''>
                                {
                                    `
                                interface lgAlert {
                                    isShowCount?: boolean; //是否显示统计字数
                                    
                                    // 其他参数请参考: @see https://elemefe.github.io/element-react/#/zh-CN/input
                                }
                                `
                                }
                            </CodeView>
                        </div>
                    </div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>三、demo样式展示</div>
                        <div className='components-show-example'>
                            <div className='components-show-example-title'>单行文本输入框:</div>
                            <div>
                                <div className="input_item">
                                    <LgInput placeholder="单行文本输入框" type="text" onChange={this.onChange} value={this.state.inputValue} />
                                </div>
                                <div className="input_item">
                                    <LgInput placeholder="单行文本输入框" isShowCount maxLength={50} />
                                </div>
                                <div className="input_item">
                                    <LgInput isShowCount disabled placeholder="禁用状态" />
                                </div>
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgInput type="text" onChange={this.onChange} value={this.state.inputValue} />
<LgInput isShowCount maxLength={50} />
<LgInput isShowCount disabled placeholder="禁用状态" />
                                    `
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div>
                        <div className='components-show-example'>
                            <div className='components-show-example-title'>多行文本输入框:</div>
                            <div>
                                <div className="input_item">
                                    <LgInput placeholder="多行文本输入框" type='textarea' />
                                </div>
                                <div className="input_item">
                                    <LgInput isShowCount placeholder="多行文本输入框" maxLength={50} type='textarea' />
                                </div>
                                <div className="input_item">

                                    <LgInput isShowCount placeholder="禁用状态" type='textarea' disabled />
                                </div>
                                <div className='components-show-steps-code'>
                                    <CodeView className='props_container'>
                                        {
                                            `
<LgInput placeholder="多行文本输入框" type='textarea' />
<LgInput isShowCount placeholder="多行文本输入框" maxLength={50} type='textarea' />
<LgInput isShowCount placeholder="禁用状态" type='textarea' disabled />
                                    `
                                        }
                                    </CodeView>
                                </div>
                            </div>
                        </div>


                    </div>
                </div>
                <div className='components-show-box'>
                    <div className='components-show-big-title'>G005 下拉框</div>
                    <div className='components-show-use'>使用指南</div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>一、在 @/components/cascader 文件中引入组件 LgCascader</div>
                        <div className='components-show-steps-code'>
                            <CodeView className=''>
                                {
                                    `import { LgCascader } from "@/components/cascader";`
                                }
                            </CodeView>
                        </div>
                    </div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>二、再引入标签，标签属性解析</div>
                        <div className='components-show-steps-code'>
                            <CodeView className=''>
                                {
                                    `
                                interface LgCascader {
                                    
                                    // 参数请参考: @see https://elemefe.github.io/element-react/#/zh-CN/cascader
                                }
                                `
                                }
                            </CodeView>
                        </div>
                    </div>
                    <div className='components-show-steps-box'>
                        <div className='components-show-steps'>三、demo样式展示</div>
                        <div>层级选择器</div>
                        <div>
                            <div className="block">
                                <span className="demonstration">默认 click 触发子菜单</span>
                                <br />
                                <LgCascader
                                    options={this.state.options}
                                    value={this.state.selectedOptions}
                                    onChange={this.handleChange1.bind(this)} />
                            </div>
                            <div className="block">
                                <span className="demonstration">hover 触发子菜单</span>
                                <br />
                                <LgCascader
                                    options={this.state.options}
                                    expandTrigger="hover"
                                    value={this.state.selectedOptions2}
                                    onChange={this.handleChange2.bind(this)} />
                            </div>
                            <div className='components-show-steps-code'>
                                <CodeView className='props_container'>
                                    {
                                        `
options: [{
    value: 'zhinan',
    label: '指南',
    children: [{
        value: 'shejiyuanze',
        label: '设计原则',
        children: [{
            value: 'yizhi',
            label: '一致'
        }, {
            value: 'fankui',
            label: '反馈'
        }, {
            value: 'xiaolv',
            label: '效率'
        }, {
            value: 'kekong',
            label: '可控'
        }]
    }, {
        value: 'daohang',
        label: '导航',
        children: [{
            value: 'cexiangdaohang',
            label: '侧向导航'
        }, {
            value: 'dingbudaohang',
            label: '顶部导航'
        }]
    }]
}, {
    value: 'zujian',
    label: '组件',
    children: [{
        value: 'basic',
        label: 'Basic',
        children: [{
            value: 'layout',
            label: 'Layout 布局'
        }, {
            value: 'color',
            label: 'Color 色彩'
        }, {
            value: 'typography',
            label: 'Typography 字体'
        }, {
            value: 'icon',
            label: 'Icon 图标'
        }, {
            value: 'button',
            label: 'Button 按钮'
        }]
    }, {
        value: 'form',
        label: 'Form',
        children: [{
            value: 'radio',
            label: 'Radio 单选框'
        }, {
            value: 'checkbox',
            label: 'Checkbox 多选框'
        }, {
            value: 'input',
            label: 'Input 输入框'
        }, {
            value: 'input-number',
            label: 'InputNumber 计数器'
        }, {
            value: 'select',
            label: 'Select 选择器'
        }, {
            value: 'cascader',
            label: 'Cascader 级联选择器'
        }, {
            value: 'switch',
            label: 'Switch 开关'
        }, {
            value: 'slider',
            label: 'Slider 滑块'
        }, {
            value: 'time-picker',
            label: 'TimePicker 时间选择器'
        }, {
            value: 'date-picker',
            label: 'DatePicker 日期选择器'
        }, {
            value: 'datetime-picker',
            label: 'DateTimePicker 日期时间选择器'
        }, {
            value: 'upload',
            label: 'Upload 上传'
        }, {
            value: 'rate',
            label: 'Rate 评分'
        }, {
            value: 'form',
            label: 'Form 表单'
        }]
    }, {
        value: 'data',
        label: 'Data',
        children: [{
            value: 'table',
            label: 'Table 表格'
        }, {
            value: 'tag',
            label: 'Tag 标签'
        }, {
            value: 'progress',
            label: 'Progress 进度条'
        }, {
            value: 'tree',
            label: 'Tree 树形控件'
        }, {
            value: 'pagination',
            label: 'Pagination 分页'
        }, {
            value: 'badge',
            label: 'Badge 标记'
        }]
    }, {
        value: 'notice',
        label: 'Notice',
        children: [{
            value: 'alert',
            label: 'Alert 警告'
        }, {
            value: 'loading',
            label: 'Loading 加载'
        }, {
            value: 'message',
            label: 'Message 消息提示'
        }, {
            value: 'message-box',
            label: 'MessageBox 弹框'
        }, {
            value: 'notification',
            label: 'Notification 通知'
        }]
    }, {
        value: 'navigation',
        label: 'Navigation',
        children: [{
            value: 'menu',
            label: 'NavMenu 导航菜单'
        }, {
            value: 'tabs',
            label: 'Tabs 标签页'
        }, {
            value: 'breadcrumb',
            label: 'Breadcrumb 面包屑'
        }, {
            value: 'dropdown',
            label: 'Dropdown 下拉菜单'
        }, {
            value: 'steps',
            label: 'Steps 步骤条'
        }]
    }, {
        value: 'others',
        label: 'Others',
        children: [{
            value: 'dialog',
            label: 'Dialog 对话框'
        }, {
            value: 'tooltip',
            label: 'Tooltip 文字提示'
        }, {
            value: 'popover',
            label: 'Popover 弹出框'
        }, {
            value: 'card',
            label: 'Card 卡片'
        }, {
            value: 'carousel',
            label: 'Carousel 走马灯'
        }, {
            value: 'collapse',
            label: 'Collapse 折叠面板'
        }]
    }]
}, {
    value: 'ziyuan',
    label: '资源',
    children: [{
        value: 'axure',
        label: 'Axure Components'
    }, {
        value: 'sketch',
        label: 'Sketch Templates'
    }, {
        value: 'jiaohu',
        label: '组件交互文档'
    }]
}],

<LgCascader
options={this.state.options}
value={this.state.selectedOptions}
onChange={this.handleChange1.bind(this)} />


<LgCascader
options={this.state.options}
expandTrigger="hover"
value={this.state.selectedOptions2}
onChange={this.handleChange2.bind(this)} />
                                            `
                                    }
                                </CodeView>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


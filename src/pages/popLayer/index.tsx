import { CodeView } from '@/components/CodeView';
import { DemoView } from '@/components/demoView';
import { LgPopLayer } from '@/components/popLayer';
import React, { Component } from 'react'
import { DemoPage } from '../demoPage';
import './index.scss'
interface PopLayerState {
    isOpenPopLayer: boolean;
    name?: string | null;
    nowTime?: Date | string;
    isOpen1: boolean;
    isOpen2: boolean;
    isOpen3: boolean;
    isOpen4: boolean;
}

export default class popLayer extends Component<{}, PopLayerState> {
    constructor(props: any) {
        super(props)
        this.state = { isOpenPopLayer: true, name: '弹窗', isOpen1: false, isOpen2: false, isOpen3: false, isOpen4: false, }
        this.showPopLayerFun1 = this.showPopLayerFun1.bind(this)
        this.showPopLayerFun2 = this.showPopLayerFun2.bind(this)
        this.showPopLayerFun3 = this.showPopLayerFun3.bind(this)
        this.showPopLayerFun4 = this.showPopLayerFun4.bind(this)
        this.initTime = this.initTime.bind(this)
        this.initDom1 = this.initDom1.bind(this)
        this.initDom2 = this.initDom2.bind(this)
        this.initDom3 = this.initDom3.bind(this)
        this.initDom4 = this.initDom4.bind(this)
        this.closePop1 = this.closePop1.bind(this)
        this.closePop4 = this.closePop4.bind(this)
    }
    initTime() {
        let time = new Date().toTimeString();
        this.setState({
            nowTime: time
        })
        return time
    }
    initDom1() {
        return (
            <div className='popLayer1_container'>
                <h3 style={{ margin: 0, lineHeight: 1 }}>春运快讯</h3>
                <p>
                    2022年春运正式开启！
                </p>
                <p>
                    2022年铁路春运自1月17日开始，2月25日结束，共40天，全国铁路旅客发送量预计达到2.8亿人次。
                </p>
                <p>
                    铁路部门表示，今年春运每日可提供客座席位1050万个以上，较2019年提高10%以上。
                </p>
                <p>
                    按照“适需安排、应急有备，精准匹配、梯次投放”原则，铁路部门根据客流变化和车票预售情况，更加精准地实施“一日一图”，动态安排运力投放和客车开行，全力满足保障旅客出行和疫情防控的双重需要。
                </p>
                <p>
                    此外，如果局部地区出现疫情，将快速调整运输组织，停开、减开涉疫地区旅客列车，减少人员流动。
                </p>


                <p>
                    这些目的地或成“最热”
                </p>


                <p>
                    此前有平台预测了今年春运的热门目的地。
                </p>
                <p>

                    去哪儿大数据显示，2022年春运铁路出行十大热门目的地为：重庆、武汉、哈尔滨、长沙、贵阳、成都、南昌、沈阳、长春、阜阳。西南、东北地区人群购票积极性较高。
                </p>

                <p style={{ marginBottom: 0 }}>
                    而十大热门出发城市为：广州，北京，上海，杭州，成都，苏州，南京，东莞，武汉，长沙。其中东莞相较往年增幅较为明显，第一次跻身春运十大出发地。
                </p>
            </div>)
    }
    initDom2() {
        let list: (string | number)[] = [
            `北京交通大学中国综合交通研究中心执行主任 教授 毛保华：按照年龄更加合理，咱们国家现在一个是管理水平提高了，我们现在可以有信息化的管理水平。国家的治理水平提高了，我们现在几乎所有的人都有身份证，都能知道他的年龄。我们的国家也富强了，把福利更多地给老百姓，给孩子成长，我觉得是非常及时的一个政策。
        专家：避免身高一刀切，让优惠票普惠儿童
        近年来，社会不同领域都对“一刀切”的火车儿童票规定提出了意见和建议，此次国家铁路局拟修订原有的规章，可谓是恰逢其时。
        在2018年全国两会期间，有全国人大代表和全国政协委员曾分别就“儿童票”制度提出了建议。建议避免采用按身高“一刀切”的规定，以保障“大个子儿童”应有的福利，体现公平。
        2019年，安徽的11岁儿童小刘因身高超出1.5米的标准而被要求补票后，起诉铁路部门。`, `小刘的父亲：我的孩子是通过12306购票时，身份证号码上是有他的出生年月日，也就是说他是法律规定的一个儿童，后来在火车上要求以身高要求进行测量，我当时在这上面提出异议。`,
            '你好，我们的时候的说法华东数控就回复是肯定发哈删掉卡或付扩所多军军军军军就看看看时间多喝几杯浮点数富士达会计法好']
        return (
            <div>
                <ul style={{ margin: 0 }}>
                    {list?.map((o, i) => {
                        return (
                            <li>{o}</li>
                        )
                    })}
                </ul>
            </div>)
    }
    initDom3() {
        return (
            <div className='popLayer3_container'>
                <h4 style={{ margin: 0, lineHeight: 1 }}>热点新闻</h4>
                <p>冬奥会上的激情庆祝瞬间</p>
                <input type="button" value="查看新闻" className='comment_position' onClick={() => { this.showPopLayerFun4() }} />
            </div>)
    }
    initDom4() {
        return (
            <div className='popLayer4_container'>
                <div className='popLayer4_container_p'>
                    北京2022年冬奥会正如火如荼地进行。运动员们脚踩冰刀雪板，驰骋冰雪赛场，演绎出冰天雪地里炙热的活力与激情。戳图↓看北京冬奥会赛场上运动员们激情庆祝的精彩瞬间，总有一张触动你的心弦。（新华社冬奥报道团）
                </div>
                <img className='popLayer4_container_img' src="https://iknow-pic.cdn.bcebos.com/e850352ac65c1038597fbe50a0119313b07e891a" alt="体育运动" />
            </div>)
    }

    showPopLayerFun1() {
        this.setState({
            isOpen1: !this.state.isOpen1
        })
    }
    showPopLayerFun2(isOpen?: boolean) {
        console.log(isOpen)
        this.setState({
            isOpen2: !this.state.isOpen2
        })
    }
    showPopLayerFun3() {
        this.setState({
            isOpen3: !this.state.isOpen3
        })
    }
    showPopLayerFun4() {
        this.setState({ isOpen4: !this.state.isOpen4 })
    }
    componentDidMount() {

    }
    closePop1(isOpen: boolean) {
        this.setState({
            isOpen1: isOpen
        })
    }
    closePop4() {
        this.setState({ isOpen4: false }, () => { document.documentElement.style.overflow = 'auto' })

    }
    isConfirm2(isOpen?: boolean) {
    }
    isClose2(isOpen?: boolean) {
    }
    isIconClose2(isOpen?: boolean) {
    }

    render() {
        return (
            <>
                <div className='components-show-box'>
                    <DemoPage title="G004 弹窗" subtitle="" className="lg-breadcrumb-demo-page"
                        importCode={`import { LgPopLayer } from '@/components/popLayer';`}
                        interfaceCode={`
/**
 * @summary 使用的弹出层传入的props
 */
export interface PopLayerProps {
    // popLayerBox
    isOpen: boolean;//是否打开弹窗 | 默认值：-- | 是否必传:true
    width?: number;//弹窗的总宽度 | 默认值: 400 | 是否必传:false
    height?: number;//弹窗的总高度 | 默认值: 300 | 是否必传:false
    title?: string;//弹窗头部的标题 | 默认值: Lg弹出层-默认标题 | 是否必传:false
    className?: string;//弹窗最外层的类名 | 默认值：-- | 是否必传:false
    style?: React.CSSProperties;//弹窗最外层的样式类型 | 默认值：--  | 注： 不建议使用,在本组件初始化使用后，
    部分样式（zIndex）有可能会被覆盖掉导致不生效。推荐使用className去修改样式 | 是否必传:false

    // coverLayer
    isShowCoverLayer?: boolean;//是否展示遮罩层 | 默认值：true | 是否必传:false
    coverLayerClass?: string;//遮罩层类名 | 默认值：-- | 是否必传:false
    isCoverLayerClickClose?: boolean;//是否点击遮罩层关闭弹窗 | 默认值：false | 是否必传:false

    // top
    isShowTopClose?: boolean;//是否显示头部的关闭按钮 | 默认值:true | 是否必传:false

    // bottom
    isShowBottom?: boolean;//是否显示底部的 | 默认值:true | 是否必传:false
    confirmText?: string;//确认按钮需要显示的文本 | 默认值：确认 | 是否必传:false
    confirmClass?: string;//确认按钮元素上的类名 | 默认值：-- | 是否必传:false
    closeText?: string;//关闭按钮需要显示的文本 | 默认值：取消 | 是否必传:false
    closeClass?: string;//关闭按钮元素上的类名 | 默认值：-- | 是否必传:false

    // customHtml
    customOfHeader?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);//弹窗头部添加的自定义Dom | 默认值：-- | 是否必传:false
    headerClassName?: string;//弹窗头部添加的自定义Dom容器的类名 | 默认值：-- | 是否必传:false
    children?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);// 弹窗中部添加的自定义Dom | 默认值：-- | 是否必传:false
    childClassName?: string;//自定义弹窗容器的类名 | 默认值：-- | 是否必传:false
    customOfBottom?: (React.ReactDOM | React.ReactChild | React.ReactElement) | (() => React.ReactElement);//弹窗低部添加的自定义Dom | 默认值：-- 
    | 是否必传:false (注:在关闭弹窗时若出现无法滚动需要在关闭的)
    bottomClassName?: string;//弹窗低部添加的自定义Dom的类名 | 默认值：-- | 是否必传:false

    // function
    onConfirm?: (isOpen?: boolean) => void;//点击确认按钮时触发的函数  | 是否必传:false
    onClose?: (isOpen?: boolean) => void;//点击关闭按钮时触发的函数 | 是否必传:false
    onIconClose?: (isOpen?: boolean) => void;//点击顶部的关闭小图标时触发的函数 | 是否必传:false
    onShowLayer: (isOpen?: boolean) => void;//必传的弹窗开关函数打开和关闭都必执行的函数，可以在打开前和关闭后触发父组件逻辑的函数 | 是否必传:true
}
                    `
                        }>
                        <DemoView title="popLayer 弹出案例1:" code={`
initDom1() {
    return (
        <div className='open_1'>
            2022年春运正式开启！

            2022年铁路春运自1月17日开始，2月25日结束，共40天，全国铁路旅客发送量预计达到2.8亿人次。
        </div>)
}

showPopLayerFun1() {
    this.setState({
        isOpen1: !this.state.isOpen1
    })
}

<LgPopLayer
    coverLayerClass={'weekly_publication'}
    isShowTopClose={false}
    isOpen={this.state.isOpen1}
    width={700}
    height={500}
    title='打开弹窗1'
    isShowCoverLayer={false}
    onClose={this.showPopLayerFun1}
    onShowLayer={this.showPopLayerFun1}
>
    {this.initDom1()}
</LgPopLayer>

<input type="button" value="打开弹窗1" className='comment_position' onClick={this.showPopLayerFun1} />
                    `}>
                            <input type="button" value="打开弹窗1" className='comment_position' onClick={this.showPopLayerFun1} />

                        </DemoView>
                        <DemoView className='' title={'popLayer 弹出案例2:'}
                            code=
                            {
                                `
<LgPopLayer isOpen={this.state.isOpen2}
    onShowLayer={this.showPopLayerFun2}
    title='打开弹窗2'
    onClose={this.isClose2}
    onConfirm={this.isConfirm2}
    onIconClose={this.isIconClose2}
>
    <div className='components-show-example-title'>popLayer 弹出案例3:</div>
</LgPopLayer>

<input type="button" value="打开弹窗2" className='comment_position' onClick={() => { this.showPopLayerFun2() }} />
                                    `
                            }
                        >
                            <input type="button" value="打开弹窗2" className='comment_position' onClick={() => { this.showPopLayerFun2() }} />
                        </DemoView>
                        <DemoView className='' title={'popLayer 弹出案例3:'}
                            code=

                            {
                                `
initDom3() {
    return (
        <div>
        <input type="button" value="打开弹窗2" className='comment_position' onClick={() => { this.showPopLayerFun2() }} />
        </div>
    )
}

<LgPopLayer
    isOpen={this.state.isOpen3}
    onShowLayer={this.showPopLayerFun3}
    title='打开弹窗3'
>
{this.initDom3()}
</LgPopLayer>

<input type="button" value="打开弹窗3" className='comment_position' onClick={this.showPopLayerFun3} />                
                                                `
                            }>
                            <input type="button" value="打开弹窗3" className='comment_position' onClick={this.showPopLayerFun3} />
                        </DemoView>
                        <DemoView className='' title={'popLayer 弹出案例4:'}
                            code={
                                `
<LgPopLayer
    isOpen={this.state.isOpen4}
    onShowLayer={this.showPopLayerFun4}
    title='打开弹窗4'
    customOfHeader={<>nihaoisdfh asd</>}
    customOfBottom={<div onClick={this.closePop4} >点我关闭弹窗，我是自定义的</div>}
    isCoverLayerClickClose
>
{this.initDom4()}
</LgPopLayer>

<input type="button" value="打开弹窗4" className='comment_position' onClick={this.showPopLayerFun4} />
                                            `
                            }>
                            <input type="button" value="打开弹窗4" className='comment_position' onClick={this.showPopLayerFun4} />
                        </DemoView>
                    </DemoPage>
                </div>

                <LgPopLayer
                    coverLayerClass={'weekly_publication'}
                    isShowTopClose
                    isOpen={this.state.isOpen1}
                    width={700}
                    height={500}
                    title='春运快讯'
                    isShowCoverLayer={false}
                    onClose={this.showPopLayerFun1}
                    onShowLayer={this.showPopLayerFun1}
                >
                    {this.initDom1()}
                </LgPopLayer>
                <LgPopLayer isOpen={this.state.isOpen2}
                    onShowLayer={this.showPopLayerFun2}
                    title='精简文章'
                    width={700}
                    height={500}
                    onClose={this.isClose2}
                    onConfirm={this.isConfirm2}
                    onIconClose={this.isIconClose2}
                >
                    {this.initDom2()}
                </LgPopLayer>
                <LgPopLayer
                    isOpen={this.state.isOpen3}
                    onShowLayer={this.showPopLayerFun3}
                    title='打开弹窗3'
                    isCoverLayerClickClose
                >
                    {this.initDom3()}
                </LgPopLayer>
                <LgPopLayer
                    width={500}
                    height={600}
                    isOpen={this.state.isOpen4}
                    onShowLayer={this.showPopLayerFun4}
                    title='打开弹窗4'
                    customOfHeader={<div className='popLayer4_custom_header'>冬奥会上的激情庆祝瞬间</div>}
                    customOfBottom={
                        <div onClick={this.closePop4} className='popLayer4_custom_bottom_box'>
                            <div className='popLayer4_custom_bottom'>
                                <input type="button" value="我已知晓" className='popLayer4_custom_bottom_button' />
                            </div>
                        </div>}
                    isCoverLayerClickClose
                >{this.initDom4()}
                </LgPopLayer>
            </>
        )
    }
}
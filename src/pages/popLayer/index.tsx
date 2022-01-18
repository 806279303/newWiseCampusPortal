import { LgPopLayer, PopLayerProps } from '@/components/popLayer'
import React, { Component } from 'react'
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
            <div className='open_1'>
                2022年春运正式开启！

                2022年铁路春运自1月17日开始，2月25日结束，共40天，全国铁路旅客发送量预计达到2.8亿人次。

                铁路部门表示，今年春运每日可提供客座席位1050万个以上，较2019年提高10%以上。

                按照“适需安排、应急有备，精准匹配、梯次投放”原则，铁路部门根据客流变化和车票预售情况，更加精准地实施“一日一图”，动态安排运力投放和客车开行，全力满足保障旅客出行和疫情防控的双重需要。

                此外，如果局部地区出现疫情，将快速调整运输组织，停开、减开涉疫地区旅客列车，减少人员流动。

                这些目的地或成“最热”

                此前有平台预测了今年春运的热门目的地。

                去哪儿大数据显示，2022年春运铁路出行十大热门目的地为：重庆、武汉、哈尔滨、长沙、贵阳、成都、南昌、沈阳、长春、阜阳。西南、东北地区人群购票积极性较高。

                而十大热门出发城市为：广州，北京，上海，杭州，成都，苏州，南京，东莞，武汉，长沙。其中东莞相较往年增幅较为明显，第一次跻身春运十大出发地。
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
                <ul>
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
            <div>
                <input type="button" value="打开弹窗2" className='open-layer' onClick={() => { this.showPopLayerFun2() }} />
            </div>)
    }
    initDom4() {
        return (
            <div>
                4444444444444444444444444444444444444444444
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
        // setTimeout(() => {
        //     this.showPopLayerFun1()
        // }, 1000)
        // setTimeout(() => {
        //     this.showPopLayerFun3()
        // }, 2000)
        // setTimeout(() => {
        //     this.showPopLayerFun4()
        // }, 3000)
        // setTimeout(() => {
        //     this.showPopLayerFun2()
        // }, 4000)
        let allSkin = ["lg-skin-s1", "lg-skin-s2", "lg-skin-s3", "lg-skin-s4", "lg-skin-s5", "lg-skin-k1", "lg-skin-k2"];
        let number = allSkin.length;
        setInterval(() => {
            let index = Math.floor(Math.random() * parseInt(number as any));
            document.documentElement.className = allSkin[index];
        }, 1000 * 5)
    }
    closePop1(isOpen: boolean) {
        this.setState({
            isOpen1: isOpen
        })
    }
    closePop4() {
        this.setState({ isOpen4: false })

    }
    isConfirm2(isOpen?: boolean) {
        console.log('isConfirm2 --- 弹窗2 点击确定', isOpen)
    }
    isClose2(isOpen?: boolean) {
        console.log('isClose2 --- 弹窗2 点击取消', isOpen)
    }
    isIconClose2(isOpen?: boolean) {
        console.log('isIconClose2 --- 弹窗2 点击小图标取消', isOpen)
    }

    render() {
        return (
            <>
                <div className='open_layer'>
                    <input type="button" value="打开弹窗1" className='open-layer' onClick={this.showPopLayerFun1} />
                    <input type="button" value="打开弹窗2" className='open-layer' onClick={() => { this.showPopLayerFun2() }} />
                    <input type="button" value="打开弹窗3" className='open-layer' onClick={this.showPopLayerFun3} />
                    <input type="button" value="打开弹窗4" className='open-layer' onClick={this.showPopLayerFun4} />
                </div>
                <LgPopLayer
                    coverLayerClass={'weekly_publication'}
                    isShowTopClose={false}
                    isOpen={this.state.isOpen1}
                    width={700}
                    height={500}
                    title='打开弹窗1'
                    isShowCoverLayer={false}
                    style={{ zIndex: 100, width: 1000 }}
                    onClose={this.showPopLayerFun1}
                    onShowLayer={this.showPopLayerFun1}
                >
                    {this.initDom1()}
                </LgPopLayer>
                <LgPopLayer isOpen={this.state.isOpen2}
                    onShowLayer={this.showPopLayerFun2}
                    title='打开弹窗2'
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
                >
                    {this.initDom3()}
                </LgPopLayer>
                <LgPopLayer
                    isOpen={this.state.isOpen4}
                    onShowLayer={this.showPopLayerFun4}
                    title='打开弹窗4'
                    customOfHeader={<>nihaoisdfh asd</>}
                    customOfBottom={<div onClick={this.closePop4} >点我关闭弹窗，我是自定义的</div>}
                    isCoverLayerClickClose
                >{this.initDom4()}
                </LgPopLayer>
            </>
        )
    }
}


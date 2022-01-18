import SubPage from "@/components/subPage";
import {Component} from 'react'
export default class CurrentPage extends Component {
    refresh() {
        console.log("刷新页面了")
    }
    changeTab(i: number) {
        console.log(i)
    }
    render() {
        return (
            <SubPage refresh={this.refresh} tabList={[{btnName:"电话", redNumber: 10}, {btnName:"放寒假"}, {btnName:"混分巨兽"}, {btnName:"返回"}]} onTab={this.changeTab}>
                子页面
            </SubPage>
        )
    }
}
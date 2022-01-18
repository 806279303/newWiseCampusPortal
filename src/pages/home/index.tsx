import {Link} from "react-router-dom";
export default () => {
    return (
        <>
            <div><Link to='/home'>首页</Link></div>
            <div><Link to='/personal'>关于</Link></div>
            <div><Link to='/about'>列表</Link></div>
            <div><Link to='/pagination'>页码</Link></div>
            <div><Link to='/checkBox'>选择框</Link></div>
            <div><Link to='/popLayer'>弹出层</Link></div>
            <div><Link to='/alert'>提示</Link></div>
            <div><Link to='/richEditor'>富文本编辑器</Link></div>
            <div><Link to='/breadcrumb'>面包屑</Link></div>
            <div><Link to='/loading'>加载/进度条</Link></div>
            <div><Link to='/search'>搜索条</Link></div>
            <div><Link to='/timeline'>时间线</Link></div>
            <div><Link to='/topBar'>顶部栏</Link></div>
            <div><Link to='/filter'>筛选</Link></div>
            <div><Link to='/firstPage'>首页</Link></div>
            <div><Link to='/steps'>步骤条</Link></div>
            <div><Link to='/datePicker'>时间选择</Link></div>
            <div><Link to='/menu'>菜单</Link></div>
            <div><Link to='/drawer'>抽屉</Link></div>
            <div><Link to='/collapse'>折叠面板</Link></div>
        </>
    )
}


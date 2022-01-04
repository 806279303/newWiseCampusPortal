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
        </>
    )
}


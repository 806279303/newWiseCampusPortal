import {BrowserRouter as Router, Link} from "react-router-dom";
// impo
export default () => {
    return (
        <>
            <div><Link to='/home'>首页1</Link></div>
            <div><Link to='/personal'>关于</Link></div>
            <div><Link to='/about'>列表</Link></div>
            <div><Link to='/pagination'>页码</Link></div>
            <div><Link to='/checkBox'>选择框</Link></div>
            <div><Link to='/search'>搜索条</Link></div>
        </>
    )
}


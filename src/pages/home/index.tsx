import {BrowserRouter as Router, Link} from "react-router-dom";
export default () => {
    return (
        <>
            <div><Link to='/home'>首页</Link></div>
            <div><Link to='/personal'>关于</Link></div>
            <div><Link to='/about'>列表</Link></div>
        </>
    )
}


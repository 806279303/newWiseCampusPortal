import { useState } from "react";
import "./index.scss"

interface LgPaginationProps {
    type?: 'A' | 'B' | 'C' | 'C1' | 'D', 
    totalPage: number,
    currentPage: number,
    onClick: (value: number) => void,
    className?: string,
    style?: object,
    onRef?: (ref: any) => void
}
const Pagination = (props: LgPaginationProps) => {
    if (props.onRef) props.onRef(this);
    if (props.type == "B") 
        return <PaginationB {...props}/>
    else if (props.type == "C" || props.type == "C1") 
        return <PaginationC {...props}/>
    else if (props.type == "D") 
        return <PaginationD {...props}/>
    else
        return <PaginationA {...props}/>
}

function PaginationA(props: LgPaginationProps) {
    const pageClickChange = (e: any) => {
        var num = parseInt(e.target.dataset.index);
        if (num == props.currentPage) return;
        props.onClick(num);
    }
    const pageClickPre = () => {
        var num = props.currentPage - 1;
        if (num > 0) {
            props.onClick(num);
        }
    }
    const pageClickNext = () => {
        var num = props.currentPage + 1;
        if (num <= props.totalPage) {
            props.onClick(num);
        }
    }
    var inputNumber = 0;
    const pageClickGo = () => {
        if (!inputNumber || inputNumber == props.currentPage || props.totalPage < 2) return;
        props.onClick(inputNumber);
    }
    const changeInput = (i: number, type?: number) => {
        inputNumber = i || 0;
        if (!type || !inputNumber || inputNumber == props.currentPage || props.totalPage < 2) return;
        props.onClick(inputNumber);
    }
    var total = props.totalPage, pageIndex = props.currentPage;
    if (!props.totalPage || props.totalPage < 1) return (<div></div>);
    var pageList = new Array();
    if (total < 8 ) {
        var style1 = {display:"none"}, style2 = {display:"none"}, style3 = {display:"none"}, style4 = {display:"none"};
        for (let i = 1; i <= total; i++) {
            let className = (i == pageIndex) ? "lg_page_number lg_page_cur_page" : "lg_page_number";
            pageList.push(<span data-index={i} key={"page"+i} className={className} onClick={pageClickChange}>{i}</span>);
        }
    } else {
        var style1 = (pageIndex > 3)? {display:"inline-block"} : {display:"none"};
        var style2 = (pageIndex > 4)? {display:"inline-block"} : {display:"none"};
        var style3 = (pageIndex < total - 3)? {display:"inline-block"} : {display:"none"};
        var style4 = (pageIndex < total - 2)? {display:"inline-block"} : {display:"none"};
        
        var j = 0;
        if (pageIndex < 4) {
            j = pageIndex -1;
        } else if (pageIndex > 2 && pageIndex < total - 1) {
            j = 2;
        } else if (pageIndex == total - 1) {
            j = 3;
        } else if (pageIndex == total) {
            j = 4;
        }
        for (let i = pageIndex - j; i < pageIndex + 5-j; i++) {
            let className = (i == pageIndex) ? "lg_page_number lg_page_cur_page" : "lg_page_number";
            pageList.push(<span data-index={i} key={"page"+i} className={className} onClick={pageClickChange}>{i}</span>);
        }
    }
    return (
        <div className={`lg_page_warp lg_page_warp_A ${props.className || ""}`} style={props.style || {}}>
            <span className={'lg_page_number lg_page_btn' + ((pageIndex > 1) ? "" : " lg_page_ban_btn")} onClick={pageClickPre}>{"< "}</span>
            <span data-index={1} className='lg_page_number' style={style1} onClick={pageClickChange}>1</span>
            <span className='lg_page_text' style={style2}>&nbsp;···&nbsp;</span>
            {pageList}
            <span className='lg_page_text' style={style3}>&nbsp;···&nbsp;</span>
            <span data-index={total} className='lg_page_number' style={style4} onClick={pageClickChange}>{total}</span>
            <span className={'lg_page_number lg_page_btn' + ((total > pageIndex) ? "" : " lg_page_ban_btn")} onClick={pageClickNext}>{" >"}</span>
            <span className='lg_page_text'>&nbsp;共<span style={{color: "#f00"}}>{total}</span>页&nbsp;&nbsp;到&nbsp;</span>
            <PageInput onChange={changeInput} total={total} />
            <span className='lg_page_text'>&nbsp;页&nbsp;</span>
            <span className={'lg_page_number'+ ((total > 1) ? "" : " lg_page_ban_btn")} style={{width: 38}} onClick={pageClickGo}>GO</span>
        </div>
    );
}
interface InputProps {
    onChange: (index: number, type?: number) => void,
    total: number
}
function PageInput(props: InputProps) {
    const [value, setValue] = useState("");
    const onChange = (e: any) => {
        var number = e.target.value;
        if (number) {
            if (/^([1-9]?)|([1-9][0-9]*)$/.test(number)) {
                number = parseInt(number);
                if (number > 0 && number <= props.total) {
                    setValue(number);
                    props.onChange(number);
                }
            }
        } else if (value) {
            setValue(number);
            props.onChange(number);
        }
    }
    const searchEnter = (e: any) => {
        if (e.keyCode == 13) {
            var number = parseInt(e.target.value);
            props.onChange(number, 1);
        }
    }
    return (<input type='text' onKeyDown={searchEnter} onChange={onChange} value={value} className='lg_page_input'  placeholder={`${props.total}`}/>)
}
function PaginationB(props: LgPaginationProps) {
    const pageClickChange = (e: any) => {
        var num = parseInt(e.target.dataset.index);
        if (num == props.currentPage) return;
        props.onClick(num);
    }
    var total = props.totalPage, pageIndex = props.currentPage;
    if (!props.totalPage || props.totalPage < 1) return (<div></div>);
    var pageList = new Array();
    if (total < 8 ) {
        for (let i = 1; i <= total; i++) {
            let className = (i == pageIndex) ? "lg_page_number lg_page_cur_page" : "lg_page_number";
            pageList.push(<span data-index={i} key={"page"+i} className={className} onClick={pageClickChange}>{i}</span>);
        }
    } else {
        var j = 0;
        if (pageIndex < 4) {
            j = pageIndex -1;
        } else if (pageIndex > 2 && pageIndex < total - 1) {
            j = 2;
        } else if (pageIndex == total - 1) {
            j = 3;
        } else if (pageIndex == total) {
            j = 4;
        }
        for (let i = pageIndex - j; i < pageIndex + 5-j; i++) {
            let className = (i == pageIndex) ? "lg_page_number lg_page_cur_page" : "lg_page_number";
            pageList.push(<span data-index={i} key={"page"+i} className={className} onClick={pageClickChange}>{i}</span>);
        }
    }
    return (
        <div className={`lg_page_warp lg_page_warp_B ${props.className || ""}`} style={props.style || {}}>
            {pageList}
        </div>
    );
}
function PaginationC(props: LgPaginationProps) {
    const pageClickChange = (e: any) => {
        var num = parseInt(e.target.dataset.index);
        if (num == props.currentPage) return;
        props.onClick(num);
    }
    var total = props.totalPage, pageIndex = props.currentPage;
    if (!props.totalPage || props.totalPage < 1) return (<div></div>);
    var pageList = new Array();
    for (let i = 1; i <= total; i++) {
        let className = (i == pageIndex) ? "lg_page_number_c lg_page_cur_page_c" : "lg_page_number_c";
        pageList.push(<span data-index={i} key={"page"+i} className={className} onClick={pageClickChange}></span>);
    }
    return (
        <div className={`lg_page_warp_${props.type || ""} ${props.className || ""}`} style={props.style || {}}>
            {pageList}
        </div>
    );
}
function PaginationD(props: LgPaginationProps) {
    const pageClickChange = (e: any) => {
        var num = parseInt(e.target.dataset.index);
        if (num == props.currentPage) return;
        props.onClick(num);
    }
    const pageClickPre = () => {
        var num = props.currentPage - 1;
        if (num > 0) {
            props.onClick(num);
        }
    }
    const pageClickNext = () => {
        var num = props.currentPage + 1;
        if (num <= props.totalPage) {
            props.onClick(num);
        }
    }
    var total = props.totalPage, pageIndex = props.currentPage;
    if (!props.totalPage || props.totalPage < 1) return (<div></div>);
    var pageList = new Array();
    if (total < 8 ) {
        var style1 = {display:"none"}, style2 = {display:"none"}, style3 = {display:"none"}, style4 = {display:"none"};
        for (let i = 1; i <= total; i++) {
            let className = (i == pageIndex) ? "lg_page_number lg_page_cur_page" : "lg_page_number";
            pageList.push(<span data-index={i} key={"page"+i} className={className} onClick={pageClickChange}>{i}</span>);
        }
    } else {
        var style1 = (pageIndex > 3)? {display:"inline-block"} : {display:"none"};
        var style2 = (pageIndex > 4)? {display:"inline-block"} : {display:"none"};
        var style3 = (pageIndex < total - 3)? {display:"inline-block"} : {display:"none"};
        var style4 = (pageIndex < total - 2)? {display:"inline-block"} : {display:"none"};
        
        var j = 0;
        if (pageIndex < 4) {
            j = pageIndex -1;
        } else if (pageIndex > 2 && pageIndex < total - 1) {
            j = 2;
        } else if (pageIndex == total - 1) {
            j = 3;
        } else if (pageIndex == total) {
            j = 4;
        }
        for (let i = pageIndex - j; i < pageIndex + 5-j; i++) {
            let className = (i == pageIndex) ? "lg_page_number lg_page_cur_page" : "lg_page_number";
            pageList.push(<span data-index={i} key={"page"+i} className={className} onClick={pageClickChange}>{i}</span>);
        }
    }
    return (
        <div className={`lg_page_warp lg_page_warp_D ${props.className || ""}`} style={props.style || {}}>
            <span className={'lg_page_number lg_page_btn' + ((pageIndex > 1) ? "" : " lg_page_ban_btn")} onClick={pageClickPre}>{"< "}</span>
            <span data-index={1} className='lg_page_number' style={style1} onClick={pageClickChange}>1</span>
            <span className='lg_page_text' style={style2}>&nbsp;···&nbsp;</span>
            {pageList}
            <span className='lg_page_text' style={style3}>&nbsp;···&nbsp;</span>
            <span data-index={total} className='lg_page_number' style={style4} onClick={pageClickChange}>{total}</span>
            <span className={'lg_page_number lg_page_btn' + ((total > pageIndex) ? "" : " lg_page_ban_btn")} onClick={pageClickNext}>{" >"}</span>
            <span className='lg_page_text'>&nbsp;共<span style={{color: "#f00"}}>{total}</span>页</span>
        </div>
    );
}
export default Pagination;
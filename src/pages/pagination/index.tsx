import Pagination from "@/components/pagination"
import { useState } from 'react'
export default () => {
    const [pageIndex, setPage] = useState(1);
    const changeIndex = (index: number) => {
        setPage(index);
    }
    return (
        <div className="item_warp" >
                <div className="lg-skin-s1">
                    <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s2">
                    <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s3">
                    <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s4">
                    <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s5">
                    <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k1">
                    <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k2">
                    <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                
                <div className="lg-skin-s1">
                    <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s2">
                    <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s3">
                    <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s4">
                    <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s5">
                    <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k1">
                    <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k2">
                    <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                
                <div className="lg-skin-s1">
                    <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s2">
                    <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s3">
                    <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s4">
                    <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s5">
                    <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k1">
                    <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k2">
                    <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>

                
                <div className="lg-skin-s1">
                    <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s2">
                    <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s3">
                    <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s4">
                    <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s5">
                    <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k1">
                    <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k2">
                    <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                
                <div className="lg-skin-s1">
                    <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s2">
                    <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s3">
                    <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s4">
                    <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-s5">
                    <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k1">
                    <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>
                <div className="lg-skin-k2">
                    <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </div>



                <div style={{fontSize: "30px", color: "red"}}>{pageIndex}</div>
            </div>
    )
}


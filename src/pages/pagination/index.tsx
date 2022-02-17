import { CodeView } from "@/components/CodeView";
import Pagination from "@/components/pagination"
import { useState } from 'react'
import { AllSkinCover } from "../AllSkinCover";

import './index.scss'
export default () => {
    const [pageIndex, setPage] = useState(1);
    const changeIndex = (index: number) => {
        setPage(index);
    }
    return (
        <div className="lg_pages_container">
            <h2>G026 页码</h2>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">标签属性</div>
                <CodeView className="code-size">
                    {`
                            interface BoxProps {
                                type?: 'A' | 'B' | 'C',
                                status?: 0 | 1 | 2 | number,
                                children?: any,
                                disable?: boolean,
                                onClick?: (status: number, backData?: any) => void,
                                backData?: any,
                                className?: string,
                                style?: object,
                                onRef?: (ref: any) => void
                            }
                        `}
                </CodeView>
            </div>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">A款 列表常规页码</div>
                <CodeView className="code-size">
                    {`
                        <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                    `}
                </CodeView>
                <AllSkinCover>
                    <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </AllSkinCover>
            </div>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">B款 小页码</div>
                <CodeView className="code-size">
                    {`
                        <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                    `}
                </CodeView>
                <AllSkinCover>
                    <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </AllSkinCover>
            </div>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">C款 轮播翻页</div>
                <CodeView className="code-size">
                    {`
                        <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />;
                        <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                    `}
                </CodeView>
                <AllSkinCover>
                    <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </AllSkinCover>
                <AllSkinCover>
                    <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
                </AllSkinCover>
            </div>
            <div className="lg_pages_item">
                <div className="lg_pages_item_title">D款 纯数字</div>
                <CodeView className="code-size">
                    {`
                        <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                    `}
                </CodeView>
                <AllSkinCover>
                    <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />
                </AllSkinCover>
            </div>
        </div>
    )
}


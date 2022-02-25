import Pagination from "@/components/pagination"
import {useState} from 'react'
import {DemoPage} from "../demoPage";
import {DemoView} from "@/components/demoView";
import './index.scss'

export default () => {
  const [pageIndex, setPage] = useState(1);
  const changeIndex = (index: number) => {
    setPage(index);
  }
  return (
    <DemoPage className="lg_pages_container" title="G026 页码"
              importCode={`import Pagination from "@/components/pagination"`}
              interfaceCode={`
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
      `}>

      <DemoView title="A款 列表常规页码" code={`<Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex} />`}>
        <Pagination totalPage={20} currentPage={pageIndex} onClick={changeIndex}/>
      </DemoView>
      <DemoView title="B款 小页码"
                code={`<Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />`}>
        <Pagination type="B" totalPage={20} currentPage={pageIndex} onClick={changeIndex}/>
      </DemoView>

      <DemoView title="C款 轮播翻页" code={`
        <>
         <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />;
         <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex} />
       </>`}>
        <Pagination type="C" totalPage={5} currentPage={pageIndex} onClick={changeIndex}/>
        <Pagination type="C1" totalPage={5} currentPage={pageIndex} onClick={changeIndex}/>
      </DemoView>

      <DemoView title="D款 纯数字"
                code={`<Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex} />`}>
        <Pagination type="D" totalPage={20} currentPage={pageIndex} onClick={changeIndex}/>
      </DemoView>
    </DemoPage>
  )
}


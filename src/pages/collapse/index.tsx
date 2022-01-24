import './index.scss';
import LgCollapse from "@/components/collapse"
import { Component, useState } from 'react'
import { CodeView } from "@/components/CodeView";
export default () => {
    var list = [
        {
            title: "富强、民主", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标1" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标2" }
            ]
        },
        {
            title: "文明、和谐", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标3" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标4" }
            ]
        },
        {
            title: "自由、平等", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标5" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标6" }
            ]
        }
    ]
    var list2 = [
        {
            title: "富强、民主", list: [
                {title:"文明、和谐1", content: "",list:[{content:"富强、民主、文明、和谐是国家层面的价值目标AA"},{content:"富强、民主、文明、和谐是国家层面的价值目标AA"}] },
                {title:"文明、和谐2", content: "",list:[{content:"富强、民主、文明、和谐是国家层面的价值目标BB"},{content:"富强、民主、文明、和谐是国家层面的价值目标AA"}] },
            ]
        },
        {
            title: "文明、和谐", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标3" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标4" }
            ]
        },
        {
            title: "自由、平等", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标5" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标6" }
            ]
        }
    ]
    var list3 = [
        {
            title: "富强、民主", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标1" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标2" }
            ],
            disable:true
        },
        {
            title: "富强、民主", list: [
                {title:"文明、和谐1", content: "",list:[{content:"富强、民主、文明、和谐是国家层面的价值目标AA"},{content:"富强、民主、文明、和谐是国家层面的价值目标AA"}] },
                {title:"文明、和谐2", disable:true,content: "",list:[{content:"富强、民主、文明、和谐是国家层面的价值目标BB"},{content:"富强、民主、文明、和谐是国家层面的价值目标AA"}] },
            ]
        },
        {
            title: "自由、平等", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标5" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标6" }
            ]
        }
    ]
    return (
        <div className="LgCollapse">
            <div>在页面文件中引入组件</div>
            <CodeView className="code-size">
                {`
               import LgCollapse from "@/components/collapse"
            `}
            </CodeView>
            <div>标签属性详解</div>
            <CodeView className="code-size">
                {`interface LgLoadingProps{
               list: any,//折叠板数据列表
               accordion?: boolean,//是否展示多个，默认多个展示(true:展示单个，false：展示多个)
               className?: string,
               style?: object,
            }
          `}
            </CodeView>
            <div>A、B代码样例</div>
            <CodeView className="code-size">
                {`
                list = [
                    {
                        title: "富强、民主", list: [
                            { content: "富强、民主、文明、和谐是国家层面的价值目标1" },
                            { content: "富强、民主、文明、和谐是国家层面的价值目标2" }
                        ]
                    },
                    {
                        title: "文明、和谐", list: [
                            { content: "富强、民主、文明、和谐是国家层面的价值目标3" },
                            { content: "富强、民主、文明、和谐是国家层面的价值目标4" }
                        ]
                    }
                ]
                <LgCollapse list={list} accordion={false} />//A:accordion为false同时展示多个
                <LgCollapse list={list}  accordion={true} />//B:accordion为true同时展示多个
          `}
            </CodeView>
            <div className=''>A款同时展开多个</div>
            <br />
            <div style={{ width: "800px" }}>
                <LgCollapse list={list} accordion={false}  />
            </div>
            <br />
            <div className=''>B款手风琴-每次只打开一个</div>
            <br />
            <div style={{ width: "800px" }}>
                <LgCollapse list={list} accordion={true}  />
            </div>
            <br />
            <div>C款嵌套折叠面板</div>
            <CodeView className="code-size">
                {`
                var list2 = [
                    {
                        title: "富强、民主", list: [
                            {title:"文明、和谐1", content: "",list:[{content:"富强、民主、文明、和谐是国家层面的价值目标AA"},{content:"富强、民主、文明、和谐是国家层面的价值目标AA"}] },
                            {title:"文明、和谐2", content: "",list:[{content:"富强、民主、文明、和谐是国家层面的价值目标BB"},{content:"富强、民主、文明、和谐是国家层面的价值目标AA"}] },
                        ]
                    },
                    {
                        title: "文明、和谐", list: [
                            { content: "富强、民主、文明、和谐是国家层面的价值目标3" },
                            { content: "富强、民主、文明、和谐是国家层面的价值目标4" }
                        ]
                    }
                ]
                <LgCollapse list={list2} />//accordion不传,默认展示多个
          `}
            </CodeView>
            <br />
            <div style={{ width: "800px" }}>
                <LgCollapse list={list2}  />
            </div>
            <br />
            <div className=''>D款禁止展开</div>
            <CodeView className="code-size">
                {`
                var list3 = [
                    {
                        title: "富强、民主", list: [
                            { content: "富强、民主、文明、和谐是国家层面的价值目标1" },
                            { content: "富强、民主、文明、和谐是国家层面的价值目标2" }
                        ],
                        disable:true
                    },
                    {
                        title: "富强、民主", list: [
                            {title:"文明、和谐1", content: "",list:[{content:"富强、民主、文明、和谐是国家层面的价值目标AA"},{content:"富强、民主、文明、和谐是国家层面的价值目标AA"}] },
                            {title:"文明、和谐2",disable:true ,content: "",list:[{content:"富强、民主、文明、和谐是国家层面的价值目标BB"},{content:"富强、民主、文明、和谐是国家层面的价值目标AA"}] },
                        ]
                    },
                    {
                        title: "自由、平等", list: [
                            { content: "富强、民主、文明、和谐是国家层面的价值目标5" },
                            { content: "富强、民主、文明、和谐是国家层面的价值目标6" }
                        ]
                    }
                <LgCollapse list={list3}  />
          `}
            </CodeView>
            <br />
            <div style={{ width: "800px" }}>
                <LgCollapse list={list3}  />
            </div>
        </div>
    );
}

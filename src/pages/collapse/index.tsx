import './index.scss';
import LgCollapse from "@/components/collapse"
import { Component, useState } from 'react'
import { CodeView } from "@/components/CodeView";
import { DemoView } from "@/components/demoView";
import { DemoPage } from "../demoPage";
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
                { title: "文明、和谐1", content: "", list: [{ content: "富强、民主、文明、和谐是国家层面的价值目标AA" }, { content: "富强、民主、文明、和谐是国家层面的价值目标AA" }] },
                { title: "文明、和谐2", content: "", list: [{ content: "富强、民主、文明、和谐是国家层面的价值目标BB" }, { content: "富强、民主、文明、和谐是国家层面的价值目标AA" }] },
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
            disable: true
        },
        {
            title: "富强、民主", list: [
                { title: "文明、和谐1", content: "", list: [{ content: "富强、民主、文明、和谐是国家层面的价值目标AA" }, { content: "富强、民主、文明、和谐是国家层面的价值目标AA" }] },
                { title: "文明、和谐2", disable: true, content: "", list: [{ content: "富强、民主、文明、和谐是国家层面的价值目标BB" }, { content: "富强、民主、文明、和谐是国家层面的价值目标AA" }] },
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
        <DemoPage title="G021折叠面板" className="lg-breadcrumb-demo-page"
            importCode={`
        import LgCollapse from "@/components/collapse"
           `}
            interfaceCode={`
            interface LgLoadingProps{
                list: any,//折叠板数据列表
                accordion?: boolean,//是否展示多个，默认多个展示(true:展示单个，false：展示多个)
                className?: string,
                style?: object,
             }
                `}>
            <DemoView title="A款同时展开多个" code={`
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
        `}>
                <div style={{ width: "800px" }}>
                    <LgCollapse list={list} accordion={false} />
                </div>

            </DemoView>
            <DemoView title="B款手风琴-每次只打开一个" code={`
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
            <LgCollapse list={list}  accordion={true} />//B:accordion为true只能展示一个
        `}>
                <div style={{ width: "800px" }}>
                    <LgCollapse list={list} accordion={true} />
                </div>

            </DemoView>
            <DemoView title="C款嵌套折叠面板" code={`
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
        `}>
                <div style={{ width: "800px" }}>
                    <LgCollapse list={list2} />
                </div>

            </DemoView>
            <DemoView title="D款禁止展开" code={`
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
        `}>
                <div style={{ width: "800px" }}>
                    <LgCollapse list={list3} />
                </div>
            </DemoView>
        </DemoPage>

    );
}

import './index.scss';
import LgCollapse from "@/components/collapse"
import { Component, useState } from 'react'
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
            title: "文明、和谐", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标3" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标4" }
            ],
            disable:true
        },
        {
            title: "自由、平等", list: [
                { content: "富强、民主、文明、和谐是国家层面的价值目标5" },
                { content: "富强、民主、文明、和谐是国家层面的价值目标6" }
            ]
        }
    ]
    return (
        <div className="">
            <div className=''>A款同时展开多个</div>
            <br />
            <div style={{ width: "800px" }}>
                <LgCollapse list={list} type="A" />
            </div>
            <br />
            <div className=''>B款手风琴-每次只打开一个</div>
            <br />
            <div style={{ width: "800px" }}>
                <LgCollapse list={list} type="B" />
            </div>
            <br />
            <div className=''>C款嵌套折叠面板</div>
            <br />
            <div style={{ width: "800px" }}>
                <LgCollapse list={list2} type="C" />
            </div>
            <div className=''>D款禁止展开</div>
            <br />
            <div style={{ width: "800px" }}>
                <LgCollapse list={list3} type="A" />
            </div>
        </div>
    );
}

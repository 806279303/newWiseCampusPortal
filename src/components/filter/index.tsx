import "./index.scss";
import React ,{Component, useState} from 'react';

export interface FliterProps {
    type?: "default" | "A"
    className?: string,
    style?: object
}

export function Filter(props: FliterProps) {

    return (
        <div>
            筛选
        </div>
    )
}
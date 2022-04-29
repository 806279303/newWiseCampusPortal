import './index.scss';
import React from 'react';
import classNames from "classnames";

export interface SearchProps {
    type?: "default" | "A",
    value: string
    onChange?: (value: string) => void,
    onSearch?: () => void,
    onClear?: () => void,
    className?: string,
    placeholder?: string,
    disabled?: boolean,
    style?: object
}


export function Search(props: SearchProps) {

    function changeSearch(e: any) {
        props.onChange && props.onChange(e.target.value)
    }

    function clearSearch() {
        props.onClear && props.onClear()
    }

    function searchClick() {
        props.onSearch && props.onSearch()
    }

    function keydownSearch(e: any) {
        console.log(e)
        if (e.keyCode == 13) {
            props.onSearch && props.onSearch()
        }
    }
    let wappClassName = classNames({
        'lg-search-input-area': props.type !== "A",
        'lg-search-input-area-typeA': props.type === "A",
        [`${props.className}`]: !!props.className
    })
    let inputClassName = classNames({
        'lg-search-input': props.type !== "A",
        'lg-search-input-typeA': props.type === "A",
    })
    return (
        <div className={wappClassName}>
            <input className={inputClassName}
                   value={props.value}
                   onChange={changeSearch}
                   onKeyDown={keydownSearch}
                   placeholder={props.placeholder}
                   disabled={props.disabled}
            />

            <i className='lg-search-input-icon'
               onClick={searchClick}/>
            <i className='lg-search-input-clear'
               style={{display: props.value === "" ? "none" : "block"}}
               onClick={clearSearch}
            />
        </div>
    )
}

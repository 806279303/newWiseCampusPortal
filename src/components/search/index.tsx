
import './index.scss';
import React ,{Component, useState} from 'react';

export interface SearchProps {
    type?: "default" | "A",
    onChange?: (value: string) => void,
    onSearch?: (value: string) => void,
    className?: string,
    style?: object
}


export function Search(props: SearchProps) {
    const [searchValue, setSearchValue] = useState("");

    function changeSearch(e: any){
        setSearchValue(e.target.value)
        if(typeof (props.onChange) === "function"){
            props.onChange(e.target.value)
        }
    }

    function clearSearch(){
        setSearchValue("");
        if(typeof (props.onChange) === "function"){
            props.onChange("")
        }
    }

    function searchClick(){
        if(typeof (props.onSearch) === "function"){
            props.onSearch(searchValue)
        }
    }

    let wappClassName = 'lg-search-input-area'
    let inputClassName = 'lg-search-input'
    if(props.type === "A"){
        wappClassName =  'lg-search-input-area-typeA'
        inputClassName = 'lg-search-input-typeA'
    }
    return (
        <div className={wappClassName}>
            <input className={inputClassName} 
                value={searchValue} 
                onChange={changeSearch}
            />
          
            <i className='lg-search-input-icon'
                onClick={searchClick}></i>
            <i className='lg-search-input-clear'
               style={{display: searchValue === ""? "none" : "block"}}
               onClick={clearSearch}
            ></i>
        </div>
    )
}

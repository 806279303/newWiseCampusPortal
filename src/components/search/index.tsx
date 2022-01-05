
import './index.scss';
import React ,{Component, useState} from 'react';

interface SearchProps {
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

    return (
        <div className='lg-search-input-area'>
          
            <input className='lg-search-input' 
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

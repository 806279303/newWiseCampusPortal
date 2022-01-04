
import './index.scss';
import React ,{Component, useState} from 'react';

export function Search() {
    const [searchValue, setSearchValue] = useState("");

    function changeSearch(e: any){
        setSearchValue(e.target.value)
        console.log(e.target.value)
    }

    function clearSearch(){
        setSearchValue("");
    }

    return (
        <div className='lg-search-input-area'>
          
            <input className='lg-search-input' 
                value={searchValue} 
                onChange={changeSearch}
            />
          
            <i className='lg-search-input-icon'></i>
            <i className='lg-search-input-clear'
               style={{display: searchValue === ""? "none" : "block"}}
               onClick={clearSearch}
            ></i>
        </div>
    )
}

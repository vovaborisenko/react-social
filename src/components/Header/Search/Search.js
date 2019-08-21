import React from 'react';
import s from './Search.module.css';

const Search = () => {
    return (
        <form className={`text-left ${s.search}`} method="GET">
            <input name="q" type="text" placeholder="Search.."/>
        </form>
    );
}

export default Search;
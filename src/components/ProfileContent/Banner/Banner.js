import React from 'react';
import s from './Banner.module.css';

const Banner = (props) => {
    return (
        <div className={s.banner} style={{backgroundImage: `url(${props.img})`}}>
        </div>
    );
}

export default Banner;
import React from 'react';
import s from './Dialog.module.css';

const Dialog = (props) => {
    return (<div className={`row ${s.row}`}>
        <div className="col-sm-2 col-xs-3">
            <img src={props.avatar} alt={props.name} className={s.avatar}/>
        </div>
        <div className="col-sm-7 col-xs-9">
            <p><b>{props.name}</b></p>
            <p className={s.time}>{props.time}</p>
            <p>{props.message}</p>
        </div>
        <div className="col-sm-3 hidden-xs">
            <p><a href={props.link} title="Start chat"><span className={s.badge}>Start chat &gt;</span></a></p>
        </div>
    </div>)
}

export default Dialog;
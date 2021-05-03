import React from 'react'
import style from './Project.module.css'


const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.CommonBlock}>
                <div>{props.picture}</div>
                <div>{props.watch}</div>
            </div>
            <div>
                <span>{props.title}</span>
                <span> {props.description}</span>
            </div>


        </div>
    )
}

export default Project
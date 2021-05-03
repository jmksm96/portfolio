import React from 'react'
import style from './Project.module.css'


const Project = (props) => {
    return (
        <div className={style.project}>
            <div className={style.CommonBlock}>
                <div className={style.picture}>{props.picture}</div>
                <div className={style.watch}>{props.watch}</div>
            </div>
            <div>
                <div>{props.title}</div>
                <div> {props.description}</div>
            </div>

        </div>
    )
}

export default Project
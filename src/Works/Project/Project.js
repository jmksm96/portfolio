import React from 'react'
import style from './Project.module.css'


const Project = (props) => {

    return (
        <div className={style.project}>
            <div className={style.CommonBlock} style={props.style}>
                <div className={style.picture} >{props.picture}</div>
                <a className={style.watch} >{props.watch}</a>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}> {props.description}</span>
            </div>

        </div>
    )
}

export default Project
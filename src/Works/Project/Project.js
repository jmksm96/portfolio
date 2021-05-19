import React from 'react'
import style from './Project.module.scss'
import Button from "../../Common/Components/Button/Button";


const Project = (props) => {

    return (
        <div className={style.project}>
            <div className={style.image} style={props.style}>
                <Button text = {'Watch'}/>
            </div>
            <div className={style.projectInfo}>
                <h3 className={style.projectTitle}>{props.title}</h3>
                <span className={style.description}> {props.description}</span>
            </div>

        </div>
    )
}


export default Project
import React from 'react'
import style from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}>
            </div>
            <div className={style.skillInfo}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>
                {props.description}
            </div>
            </div>
        </div>
    )
}

export default Skill
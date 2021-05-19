import React from 'react'
import style from './Skill.module.scss'


const Skill = (props) => {
    return (
        <div className={style.skill}>
            <div className={style.icon} style={props.style}>

            </div>
            <div className={style.skillInfo}>
                <div className={style.title}>{props.title}</div>
                <div className={style.description}>
                    {
                        props.skills.map((someSkill,index) =>
                            <li
                                key={index}
                                className={style.li}
                            > {someSkill} </li>)}
                </div>
            </div>
        </div>
    )
}

export default Skill
import React from 'react'
import style from './Skills.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h2 className={style.title}>Мои навыки</h2>
                <div className={style.skills}>
                    <Skill title={'TypeScript'} description={'Здесь будет описание'}/>
                    <Skill title={'JavaScript'} description={'Здесь будет описание'}/>
                    <Skill title={'React'} description={'Здесь будет описание'}/>
                </div>

            </div>
        </div>
    )
}

export default Skills
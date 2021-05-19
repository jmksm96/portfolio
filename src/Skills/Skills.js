import React from 'react'
import style from './Skills.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";


const Skills = () => {
    return (
        <div className={style.skillsBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Skills'}/>
                <div className={style.skills}>
                    <Skill title={'React'} description={'Здесь будет описание'}/>
                    <Skill title={'TypeScript'} description={'Здесь будет описание'}/>
                    <Skill title={'JavaScript'} description={'Здесь будет описание'}/>
                </div>

            </div>
        </div>
    )
}

export default Skills
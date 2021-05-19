import React from 'react'
import style from './Skills.module.scss'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";
import reactIm from '../Assets/Icons/react.png'
import reduxIm from '../Assets/Icons/redux.png'
import jsIm from '../Assets/Icons/typescript_js.png'
import htmlIm from '../Assets/Icons/html_css.png'


const Skills = () => {

    const reactImg = {
        backgroundImage: `url(${reactIm})`
    }

    const reduxImg = {
        backgroundImage: `url(${reduxIm})`
    }
    const jsImg = {
        backgroundImage: `url(${jsIm})`
    }
    const htmlImg = {
        backgroundImage: `url(${htmlIm})`
    }



    return (
        <div className={style.skillsBlock}>
            <div className={style.container}>
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
import React from 'react'
import style from './Projects.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";


const Projects = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <Title/>
                <div className={style.works}>
                    <Project picture={'Здесь будет картинка'}
                             watch={'Смотреть'}
                             title={'TodoList'}
                             description={'Краткое описание'}/>
                    <Project picture={'Здесь будет картинка'}
                             watch={'Смотреть'}
                             title={'Social Network'}
                             description={'Краткое описание'}/>

                </div>
            </div>
        </div>
    )
}

export default Projects
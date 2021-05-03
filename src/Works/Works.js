import React from 'react'
import style from './Works.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import Project from "./Project/Project";


const Works = () => {
    return (
        <div className={style.worksBlock}>
            <div className={`${styleContainer.container} ${style.worksContainer}`}>
                <h2 className={style.title}>Мои работы</h2>
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

export default Works
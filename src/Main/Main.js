import React from 'react'
import style from './Main.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greet}>
                    <span>Hi There</span>
                    <h1>I am Maxim Yarosh</h1>
                    <p>Front-End Developer</p>
                </div>
                <div className={style.photo}>Место для фото</div>
            </div>

        </div>
    )
}

export default Main
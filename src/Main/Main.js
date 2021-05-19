import React from 'react'
import style from './Main.module.scss'



const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <div className={style.greet}>
                    <span>Hi There</span>
                    <span>I am Maxim <span>Yarosh</span></span>
                    <h1>Front-End Developer.</h1>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
            </div>
        </div>
    )
}

export default Main
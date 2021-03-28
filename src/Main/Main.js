import React from 'react'
import style from './Main.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


const Main = () => {
    return (
        <div className={style.mainBlock}>
            <div className={styleContainer.container}>
                <div className={style.greet}>
                    <span>Привет</span>
                    <h1>Меня зовут Максим Ярош</h1>
                    <p>Front-End разработчик</p>
                </div>
                <div className={style.photo}>Место для фото</div>
            </div>

        </div>
    )
}

export default Main
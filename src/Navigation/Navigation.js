import React from 'react'
import style from './Navigation.module.css'

const Navigation = () => {
    return (
        <div className={style.nav}>
            <a href="">Главная</a>
            <a href="">Навыки</a>
            <a href="">Проекты</a>
            <a href="">Контакты</a>
        </div>
    )
}

export default Navigation
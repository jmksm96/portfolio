import React from 'react'
import style from './Footer.module.css'
import styleContainer from '../Common/Styles/Container.module.css'

const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <h1>Ярош Максим</h1>
                <div className={style.block}>
                    <div className={style.blockContainer}>
                        <div className={style.blockItem}></div>
                        <div className={style.blockItem}></div>
                        <div className={style.blockItem}></div>
                        <div className={style.blockItem}></div>
                    </div>

                </div>
                <div>©2021 Все права защищены</div>
            </div>
        </div >
    )
}

export default Footer
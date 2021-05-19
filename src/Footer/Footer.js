import React from 'react'
import style from './Footer.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import Title from "../Common/Components/Title/Title";

const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.footerContainer}`}>
                <Title text = {'Maxim Yarosh'}/>
                <div className={style.block}>
                    <div className={style.blockContainer}>
                        <div className={style.blockItem}></div>
                        <div className={style.blockItem}></div>
                        <div className={style.blockItem}></div>
                        <div className={style.blockItem}></div>
                    </div>

                </div>
                <div className={style.footerDescription}>©2021 Все права защищены</div>
            </div>
        </div >
    )
}

export default Footer
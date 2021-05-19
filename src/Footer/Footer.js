import React from 'react'
import style from './Footer.module.scss'
import Title from "../Common/Components/Title/Title";

const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.footerContainer}>
                <Title text = {'Maxim Yarosh'}/>
                <div className={style.socialIcons}>
                    <div className={style.socialIcon}>
                        <a href="">
                            {/*<img src={} alt=""/>*/}
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            {/*<img src={} alt=""/>*/}
                        </a>
                    </div>
                    <div className={style.socialIcon}>
                        <a href="">
                            {/*<img src={} alt=""/>*/}
                        </a>
                    </div>
                </div>
                <div className={style.copyright}>©2021 Все права защищены</div>
            </div>
        </div >
    )
}

export default Footer
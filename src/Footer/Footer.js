import React from 'react'
import style from './Footer.module.scss'
import Title from "../Common/Components/Title/Title";
import telegLogo from '../Assets/SocialIcons/telegram.png'
import linkLogo from '../Assets/SocialIcons/linkedin.png'
import gitLogo from '../Assets/SocialIcons/github.png'
import Fade from 'react-reveal/Fade';

const navBar = [
    {
        title: "Telegtam",
        imgLogo: telegLogo,
        link: "https://t.me/jmksm"
    },
    {
        title: "LinkedIn",
        imgLogo: linkLogo,
        link: "https://www.linkedin.com/in/maxim-yarosh-4363481b9/"
    },
    {
        title: "GitHub",
        imgLogo: gitLogo,
        link: "https://github.com/jmksm96"
    },
]


const Footer = () => {
    return (
        <div className={style.mainBlock}>
            <Fade>
                <div className={style.footerContainer}>
                    <Title text={'Maxim Yarosh'}/>
                    <div className={style.socialIcons}>
                        {navBar.map((el, index) =>
                            <a className={style.socialIcon}
                               key={index}
                               style={{backgroundImage: `url(${el.imgLogo})`}}
                               href={el.link}
                               target="_blank"
                               rel="noreferrer">
                            </a>
                        )}
                    </div>
                    <div className={style.copyright}>©2021 All rights reserved</div>
                </div>
            </Fade>

        </div>
    )
}

export default Footer
import React from 'react'
import style from './Navigation.module.scss'
import {Link, animateScroll as scroll} from "react-scroll/";

const Navigation = () => {
    return (
        <div className={style.nav}>
            <Link activeClass={style.active}
                  to='main'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            > Main</Link>
            <Link activeClass={style.active}
                  to='skills'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            > Skills</Link>
            <Link activeClass={style.active}
                  to='projects'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            > Projects</Link>
            <Link activeClass={style.active}
                  to='contacts'
                  spy={true}
                  smooth={true}
                  offset={1}
                  duration={500}
            > Contacts</Link>

            <a href="ссылка на резюме">CV</a>
        </div>
    )
}

export default Navigation
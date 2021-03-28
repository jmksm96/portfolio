import React from 'react'
import style from  './Header.module.css'
import Navigation from "../Navigation/Navigation";

const Header = () => {
    return (
        <div className={style.header}>
            <Navigation/>
        </div>
    )
}

export default Header
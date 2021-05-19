import React from 'react'
import style from './Contacts.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import Title from "../Common/Components/Title/Title";


const Contacts = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <Title text={'Contacts'}/>
                <form className={style.formContainer}>
                        <input type="text" className={style.formArea} placeholder={'Name'}/>
                        <input type="text" className={style.formArea} placeholder={'E-mail'}/>
                        <textarea placeholder={'Message'}/>
                        <button type="submit" className={style.button}>Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts
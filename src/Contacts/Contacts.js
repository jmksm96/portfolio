import React from 'react'
import style from './Contacts.module.scss'
import Title from "../Common/Components/Title/Title";


const Contacts = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.skillsContainer}>
                <Title text={'Contacts'}/>
                <form className={style.formContainer}>
                        <input type="text" className={style.formArea} placeholder={'Name'}/>
                        <input type="text" className={style.formArea} placeholder={'E-mail'}/>
                        <textarea placeholder={'Message'} className={style.messageArea}/>
                        <button type="submit" className={style.button}>Send message</button>
                </form>
            </div>
        </div>
    )
}

export default Contacts
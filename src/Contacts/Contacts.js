import React from 'react'
import style from './Contacts.module.scss'
import Title from "../Common/Components/Title/Title";
import {Fade} from "react-reveal";



const Contacts = () => {
    return (
        <div className={style.mainBlock}>
            <div className={style.container}>
                <Title text={'Contacts'}/>
            <Fade>
                <form className={style.formContainer}>
                        <input type="text" className={style.formArea} placeholder={'Name'}/>
                        <input type="text" className={style.formArea} placeholder={'E-mail'}/>
                        <textarea placeholder={'Message'} className={style.messageArea}/>
                        <button type="submit" className={style.button}>Send message</button>
                </form>
            </Fade>
            </div>
        </div>
    )
}

export default Contacts
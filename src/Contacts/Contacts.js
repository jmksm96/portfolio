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
                    <div className={style.blockItem}>
                        <input type="text"/>
                    </div>
                    <div className={style.blockItem}>
                        <input type="text"/>
                    </div>
                    <div className={style.blockItem}>
                        <textarea>Введите ваше сообщение</textarea>
                    </div>
                    <div className={style.button}>
                        <button type = "submit">Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
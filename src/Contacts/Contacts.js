import React from 'react'
import style from './Contacts.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


const Contacts = () => {
    return (
        <div className={style.mainBlock}>
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h1 className={style.title}>Контакты</h1>
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
                        <button>Отправить</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Contacts
import React from 'react'
import style from './SendMessage.module.css'
import styleContainer from '../Common/Styles/Container.module.css'


const SendMessage = () => {
    return (
        <div >
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
                <h1 className={style.title} >Рассматриваю варианты удаленной работы</h1>
                <button>Связаться со мной</button>
            </div>

        </div>
    )
}

export default SendMessage
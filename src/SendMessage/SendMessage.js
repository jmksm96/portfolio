import React from 'react'
import style from './SendMessage.module.scss'
import Title from "../Common/Components/Title/Title";
import Button from "../Common/Components/Button/Button";


const SendMessage = () => {

    return (
        <div >
            <div className={style.container}>
              <Title text = {'Considering options for remote work'}/>
                <Button text = {'Contact with me'}/>
            </div>

        </div>
    )
}

export default SendMessage
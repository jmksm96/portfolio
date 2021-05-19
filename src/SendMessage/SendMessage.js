import React from 'react'
import style from './SendMessage.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import Title from "../Common/Components/Title/Title";
import Button from "../Common/Components/Button/Button";


const SendMessage = () => {

    const onClick = () => {
        alert('clicked')
    }

    return (
        <div >
            <div className={`${styleContainer.container} ${style.skillsContainer}`}>
              <Title text = {'Considering options for remote work'}/>
                <Button text = {'Contact with me'}/>
            </div>

        </div>
    )
}

export default SendMessage
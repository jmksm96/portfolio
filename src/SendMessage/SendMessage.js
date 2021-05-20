import React from 'react'
import style from './SendMessage.module.scss'
import Title from "../Common/Components/Title/Title";
import Button from "../Common/Components/Button/Button";
import Fade from "react-reveal/";



const SendMessage = () => {

    return (
        <div >
            <Fade>
            <div className={style.container}>
              <Title text = {'Considering options for remote work'}/>
                <Button text = {'Contact with me'} link = {'https://www.linkedin.com/in/maxim-yarosh-4363481b9/'}/>
            </div>
                </Fade>
        </div>
    )
}

export default SendMessage
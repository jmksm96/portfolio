import React, {useState} from 'react'
import style from './Contacts.module.scss'
import Title from "../Common/Components/Title/Title";
import {Fade} from "react-reveal";
import emailjs from 'emailjs-com';


const Contacts = () => {
    const [formData, SetFormData] = useState({formName: "", formEmail: "", formText: ""})
    const onChangeName = (e) => {
        SetFormData({...formData, formName: e.currentTarget.value})
    }

    const onChangeEmail = (e) => {
        SetFormData({...formData, formEmail: e.currentTarget.value})
    }

    const onChangeText = (e) => {
        SetFormData({...formData, formText: e.currentTarget.value})
    }

    function sendEmail(e) {
        e.preventDefault();
        emailjs.sendForm('service_sdkt28p', 'template_v8egbhw', e.target, 'user_pbFmMeA16RjLY9SyYshtj')
            .then(() => {
                    SetFormData({formName: "", formEmail: "", formText: ""})
                }
                , (error) => {
                    console.log(error.text);
                });
    }

    return (
        <div id='contacts' className={style.mainBlock}>
            <div className={style.container}>
                <Title text={'Contacts'}/>
                <Fade>
                    <form className={style.formContainer}
                          onSubmit={sendEmail}>
                        <input type="text"
                               name="user_name"
                               id="input1"
                               className={style.formArea}
                               data-element="cleanForm"
                               placeholder={'Name'}
                               value={formData.formName}
                               onChange={onChangeName}
                               required/>
                        <input type="email"
                               name="user_email"
                               id="input2"
                               data-element="cleanForm"
                               className={style.formArea}
                               placeholder={'E-mail'}
                               value={formData.formEmail}
                               onChange={onChangeEmail}
                               required/>
                        <textarea placeholder={'Message'}
                                  name="message"
                                  id="textarea1"
                                  data-element="cleanForm"
                                  className={style.messageArea}
                                  value={formData.formText}
                                  onChange={onChangeText}
                                  required/>
                        <button type="submit" className={style.button}>Send message</button>
                    </form>
                </Fade>
            </div>
        </div>
    )
}

export default Contacts
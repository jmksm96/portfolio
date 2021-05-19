import React from 'react'
import style from './Main.module.scss'
import Particles from 'react-particles-js'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';

const particleOptions = {
    'particles': {
        'number': {
            'value': 50,
            'density': {
                'enable': true,
                'value_area': 1000
            }
        }
    }
}

const Main = () => {
    return (
        <div className={style.mainBlock}>
            <Particles className = {style.particles} params = {particleOptions}/>
            <Fade>
            <div className={style.container}>
                <div className={style.greet}>
                    <span>Hi There</span>
                    <span>I am Maxim <span>Yarosh</span></span>
                    <ReactTypingEffect text = 'Front-End Developer.'/>
                </div>
                <div className={style.photo}>
                    <div className={style.image}></div>
                </div>
            </div>
            </Fade>
        </div>
    )
}

export default Main
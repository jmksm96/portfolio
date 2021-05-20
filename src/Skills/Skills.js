import React from 'react'
import style from './Skills.module.scss'
import Skill from "./Skill/Skill";
import Title from "../Common/Components/Title/Title";
import reactIm from '../Assets/Icons/react.png'
import reduxIm from '../Assets/Icons/redux.png'
import tsIm from '../Assets/Icons/typescript.png'
import htmlIm from '../Assets/Icons/html5.png'
import Fade from 'react-reveal/Fade';

const Skills = () => {

    const reactImg = {
        backgroundImage: `url(${reactIm})`
    }

    const reduxImg = {
        backgroundImage: `url(${reduxIm})`
    }
    const jsImg = {
        backgroundImage: `url(${tsIm})`
    }
    const htmlImg = {
        backgroundImage: `url(${htmlIm})`
    }


    const skillArr = [
        {
            title: "React",
            imgLogo: reactImg,
            skills: ["Functional components", "Class components", "HOC", "Promises", 'Flux', "Hooks", "REST API", "Storybook", "MaterialUI", 'AntDesign']
        },
        {
            title: "TypeScript/JavaScript",
            imgLogo: jsImg,
            skills: ["ES6", 'Callbacks']
        },
        {
            title: "Redux",
            imgLogo: reduxImg,
            skills: ["Redux in TypeScript", "Connect", "Redux-form", "Redux Thunk"]
        },
        {
            title: "HTML/CSS",
            imgLogo: htmlImg,
            skills: ["Adaptive layout", "Sass", "GH-pages"]
        }
    ]


    return (
        <Fade>
            <div id = 'skills' className={style.skillsBlock}>
                <div className={style.container}>
                    <Title text={'Skills'}/>
                    <div className={style.skills}>

                        {skillArr.map((skills) => (
                            <Skill key={skills.title}
                                   style={skills.imgLogo}
                                   title={skills.title}
                                   skills={skills.skills}/>))}

                    </div>

                </div>
            </div>
        </Fade>

    )
}

export default Skills
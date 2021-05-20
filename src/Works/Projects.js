import React from 'react'
import style from './Projects.module.scss'
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";
import socialImage from '../Assets/Images/social-network.jpg'
import todolistImage from '../Assets/Images/todo-list.jpg'
import Fade from 'react-reveal/Fade';


const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    };

    const todolist = {
        backgroundImage: `url(${todolistImage})`
    };

    return (


        <div id='projects' className={style.projectsBlock}>
            <Fade>
                <div className={style.projectsContainer}>
                    <Title text={'Projects'}/>
                    <div className={style.projects}>
                        <Project style={todolist}
                                 title={'TodoList'}
                                 description={'SPA with usage Material UI React UI framework, React Hooks, Redux with Redux Thunk and RestAPI.'}
                                 link={'https://github.com/jmksm96/TodoList-API-'}/>


                        <Project style={social}
                                 title={'Social Network'}
                                 description={'SPA with usage AntDesign React UI framework, React Hooks, Redux with Redux Thunk and RestAPI.'}
                                 link={'https://github.com/jmksm96/social-network-typescript'}/>

                    </div>
                </div>
            </Fade>
        </div>
    )
}

export default Projects
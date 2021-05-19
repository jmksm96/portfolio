import React from 'react'
import style from './Projects.module.scss'
import styleContainer from '../Common/Styles/Container.module.css'
import Project from "./Project/Project";
import Title from "../Common/Components/Title/Title";
import socialImage from '../Assets/Images/social-network.jpg'
import todolistImage from '../Assets/Images/todo-list.jpg'

const Projects = () => {

    const social = {
        backgroundImage: `url(${socialImage})`
    };

    const todolist = {
        backgroundImage: `url(${todolistImage})`
    };
    return (
        <div className={style.projectsBlock}>
            <div className={`${styleContainer.container} ${style.projectsContainer}`}>
                <Title text={'Projects'}/>
                <div className={style.projects}>
                    <Project style={todolist}
                             title={'TodoList'}
                             description={'SPA with usage Material UI React UI framework, React Hooks, Redux with Redux Thunk and RestAPI.'}/>
                    <Project style={social}
                             title={'Social Network'}
                             description={'SPA with usage AntDesign React UI framework, React Hooks, Redux with Redux Thunk and RestAPI.'}/>

                </div>
            </div>
        </div>
    )
}

export default Projects
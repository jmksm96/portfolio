import React from 'react'
import style from './Projects.module.css'
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
                             // picture={'Здесь будет картинка'}
                             watch={'Смотреть'}
                             title={'TodoList'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nemo pariatur quas'}/>
                    <Project style={social}
                             // picture={'Здесь будет картинка'}
                             watch={'Смотреть'}
                             title={'Social Network'}
                             description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt nemo pariatur quas'}/>

                </div>
            </div>
        </div>
    )
}

export default Projects
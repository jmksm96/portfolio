import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import SendMessage from "./SendMessage/SendMessage";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Projects from "./Works/Projects";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Projects/>
            <SendMessage/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

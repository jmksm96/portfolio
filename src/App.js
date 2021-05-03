import './App.css';
import Header from "./Header/Header";
import Main from "./Main/Main";
import Skills from "./Skills/Skills";
import SendMessage from "./SendMessage/SendMessage";
import Contacts from "./Contacts/Contacts";
import Footer from "./Footer/Footer";
import Works from "./Works/Works";


const App = () => {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Skills/>
            <Works/>
            <SendMessage/>
            <Contacts/>
            <Footer/>
        </div>
    );
}

export default App;

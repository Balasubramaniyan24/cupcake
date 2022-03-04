
import './App.css';
import Intro from './component/Intro/Intro';
import Header from './component/Header/Header';
import Middle from './component/Middle/Middle';
import Simple from './component/Simple/Simple';
import Visit from './component/Visit/Visit';
import Footer from './component/Footer/Footer';
function App() {
  return (
    <div className="App">
     <Header/>
     <Intro/>
     <Middle/>
     <Simple/>
     <Visit/>
     <Footer/>
    </div>
  );
}

export default App;

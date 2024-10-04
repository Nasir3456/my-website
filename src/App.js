import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import Service from './Components/Service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight} from '@fortawesome/free-solid-svg-icons'
import Portfolio from './Components/Portfolio';
import Contact from './Components/Contact';


function App() {
  return (
   <div className='App'>
     <div id='Home'><Home /></div>
     <div id='About'><About /></div>
     <div id='Service'><Service /></div>
     <div id='Portfolio'><Portfolio /></div>
     <div id='Contact'><Contact /></div>
     <a href='#Home' className='scrollTop'><FontAwesomeIcon icon={faArrowRight} className='top' /></a>
   </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {NavBar, Navbar} from './components/NavBar';
import {Hero} from './components/Hero';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import {NavBar, Navbar} from './components/NavBar';
import {Hero} from './components/Hero';
import {WebSkills} from './components/WebSkills';
import {WebProjects} from './components/WebProjects';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar/>
     <Hero/>
     <WebSkills/>
     <WebProjects />
    </div>
  );
}

export default App;

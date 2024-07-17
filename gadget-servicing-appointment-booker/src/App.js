import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Pages from './pages/Pages';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';





function App() {
  return(
    <div className='App'>
        <Router>
            <Navbar />
            <Switch>
                <Route path='/' exact Component={Homepage}/>
                <Route path='/about' exact Component={About}/>
                <Route path='/pages' exact Component={Pages}/>
                <Route path='/services' exact Component={Services}/>
                <Route path='/appointment' exact Component={Appointment}/>
                <Route path='/contact' exact Component={Contact}/>
            </Switch>
        </Router>
    </div>
);
}

export default App;

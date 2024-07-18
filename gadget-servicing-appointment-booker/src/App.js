import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage';
import About from './pages/About';
import Pages from './pages/Pages';
import Services from './pages/Services';
import Appointment from './pages/Appointment';
import Contact from './pages/Contact';

function App() {
  return (
    <div className='App'>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Homepage} />
          <Route path='/about' exact component={About} />
          <Route path='/pages' exact component={Pages} />
          <Route path='/services' exact component={Services} />
          <Route path='/appointment' exact component={Appointment} />
          <Route path='/contact' exact component={Contact} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

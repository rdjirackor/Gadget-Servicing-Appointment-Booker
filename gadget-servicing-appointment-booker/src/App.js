import Homepage from './Homepage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';

function App() {
  return(
    <Router>
    <div className='App'>
        <Navbar/>
    <div className='content'>
        <Routes>
            <Route path ="/" element ={<Homepage/>}>
            </Route>
        </Routes> 
    </div>
    </div>
    </Router>

);
}

export default App;

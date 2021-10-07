
import Navbar from './components/NavBar/Navbar';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      
      <Router>
      <Navbar/>
      </Router>

    </div>
  );
}

export default App;

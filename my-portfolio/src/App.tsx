import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Projects from './pages/Projects';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='' element={<Home />}/>
        <Route path='about' element={<></>}/>
        <Route path='projects' element={<Projects />}/>
        <Route path='links' element={<></>}/>
      </Routes>
    </Router>
  );
}

export default App;

import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path='about' element={<></>}/>
        <Route path='projects' element={<></>}/>
        <Route path='links' element={<></>}/>
      </Routes>
    </Router>
  );
}

export default App;

// App.jsx
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import Side from './components/Side';
import Home2 from './components/Home2';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/side" element={<><Home /><Side /></>} />
          <Route path="/songplace/:id" element={<Home2 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;



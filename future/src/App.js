import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Major from './pages/Major';
import DashBoard from './pages/DashBoard';
import SubFields from './pages/SubFields';
import About from './pages/About';
import 'buffer';



function App() {
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);

  // Check if the user is logged in on app startup
  React.useEffect(() => {
    const jwtToken = localStorage.getItem('jwtToken');
    if (jwtToken) {
      // You may also want to verify the token's validity here
      setIsLoggedIn(true);
    }
  }, []);
  return (
    <div className="App">
      <Router>
        <header className="App-header">
          <Navbar />
        </header>
        <div>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dashboard" element={<DashBoard />} />
            <Route path="/about" element={<About />} />
            <Route path="/major/:major" element={<Major />} />
            <Route path="/major/:major/:subfield" element={<SubFields />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}


export default App;

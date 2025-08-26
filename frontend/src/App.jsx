import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Launch from './Launch';
import Footer from './Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <div className='randomf'>
      {isLoggedIn ? (
        <>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <Home />
          <Launch/>
          <Footer/>
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
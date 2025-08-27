import { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

import './App.css';
import Navbar from './Navbar';
import Home from './Home';
import Login from './Login';
import Launch from './Launch';
import Footer from './Footer';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // const { logout, isAuthenticated } = useAuth0();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
  setIsLoggedIn(true);
} else {
  setIsLoggedIn(false);
}
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);

    // if (isAuthenticated) {
    //   logout({ logoutParams: { returnTo: window.location.origin } });
    // }
  };

  return (
    <div className=''>
      {isLoggedIn ? (
        <>
          <Navbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
          <Home />
          <Launch />
          <Footer />
        </>
      ) : (
        <Login setIsLoggedIn={setIsLoggedIn} />
      )}
    </div>
  );
}

export default App;
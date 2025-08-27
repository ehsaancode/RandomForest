import { useState } from "react";

import "./App.css";
import Navbar from "./Navbar";
import Home from "./Home";
import Login from "./Login";
import Launch from "./Launch";
import Footer from "./Footer";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
  setIsLoggedIn(false);
  };

  return (
    <div className="">
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

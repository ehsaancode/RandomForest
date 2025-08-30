import React, { useEffect, useState } from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const AuthPage = ({ setIsLoggedIn }) => {
  const {
    loginWithRedirect,
    isAuthenticated,
    user,
  } = useAuth0();

  const [isRegister, setIsRegister] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [successMsg, setSuccessMsg] = useState('');

  // Set localStorage and isLoggedIn when Auth0 login succeeds
  useEffect(() => {
    const handleAuth0Login = async () => {
      if (isAuthenticated && user?.email) {
        try {
          // Send Auth0 user info to backend for account creation
          const res = await fetch(`${import.meta.env.VITE_LOCAL_BACKEND_URL}/api/auth/auth0`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email: user.email }),
          });
          const data = await res.json();

          if (res.ok && data.token) {
            localStorage.setItem('token', data.token);
            setIsLoggedIn(true);
          } else {
            setErrorMsg(data.message || 'Auth0 login failed');
          }
        } catch (err) {
          console.error(err);
          setErrorMsg('Server error during Auth0 login');
        }
      }
    };

    handleAuth0Login();
  }, [isAuthenticated, user, setIsLoggedIn]);

  const handleLogin = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    try {
      const res = await fetch(`${import.meta.env.VITE_LOCAL_BACKEND_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();

      if (res.ok) {
        localStorage.setItem('token', data.token);
        setIsLoggedIn(true);
      } else {
        setErrorMsg(data.message || data.error || 'Login failed');
      }
    } catch (err) {
      console.error(err);
      setErrorMsg('Server error: ' + err.message);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setErrorMsg('');
    setSuccessMsg('');
    try {
      const res = await fetch(`${import.meta.env.VITE_LOCAL_BACKEND_URL}/api/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
      const data = await res.json();
      if (res.ok) {
        setSuccessMsg('Registration successful! You can now login.');
        setEmail('');
        setPassword('');
        setIsRegister(false);
      } else {
        setErrorMsg(data.message || 'Registration failed');
      }
    } catch (err) {
      setErrorMsg('Server error');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded px-8 py-10 w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">
          {isRegister ? 'Register' : 'Login'}
        </h2>

        <form onSubmit={isRegister ? handleRegister : handleLogin}>
          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Email</label>
            <input
              type="email"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your email"
              value={email}
              required
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 mb-1">Password</label>
            <input
              type="password"
              className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-purple-500"
              placeholder="Enter your password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {errorMsg && <p className="text-red-500 text-sm mb-4">{errorMsg}</p>}
          {successMsg && <p className="text-green-500 text-sm mb-4">{successMsg}</p>}

          <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-2 px-4 rounded transition"
          >
            {isRegister ? 'Register' : 'Login'}
          </button>
        </form>

        <p className="text-center mt-4 text-gray-600">
          {isRegister ? 'Already have an account?' : "Don't have an account?"}{' '}
          <button
            className="text-purple-600 hover:underline font-semibold"
            onClick={() => {
              setErrorMsg('');
              setSuccessMsg('');
              setIsRegister(!isRegister);
            }}
          >
            {isRegister ? 'Login' : 'Register'}
          </button>
        </p>

        <div className="mt-6 text-center">
          <p className="text-gray-500 mb-2">Or</p>
          <button
            onClick={() => loginWithRedirect()}
            className="w-full border border-purple-600 text-purple-600 font-semibold py-2 rounded hover:bg-purple-50 transition"
          >
            Login with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
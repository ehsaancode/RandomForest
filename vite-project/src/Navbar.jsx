import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full bg-white py-4 px-6 shadow-black shadow-md">
      <nav className="max-w-7xl mx-auto flex items-center justify-between ">

        <div className="flex items-center space-x-3">
          <img className="w-10 h-10" src="https://unicorn-images.b-cdn.net/7dcabea3-9657-4d11-9487-f7444d349c9d?optimizer=gif&width=86&height=86"/>
          <h2 className="text-lg font-semibold">Unicorn Platform</h2>
        </div>

        <ul className="flex items-center space-x-6">
          <li>
            <a href="" className="text-sm font-medium text-black hover:text-purple-700 transition">
              Pricing
            </a>
          </li>
          <li>
            <a href="" className="text-sm font-medium text-black hover:text-purple-700 transition">
              Sign in
            </a>
          </li>
          <li>
           
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
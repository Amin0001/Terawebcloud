import React from 'react';
import Navbar from './Navbar';
import Button from './Button';

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="flex space-x-4">
        <Button text="Sign In" borderColor="white" />
        <Button text="Sign Up" borderColor="blue-500" />
      </div>
    </header>
  );
};

export default Header;

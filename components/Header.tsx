import React from 'react';
import Navbar from './Navbar';
import Button from './Button';

const Header = () => {
  return (
    <header>
      <Navbar />
      <div className="flex space-x-4">
        <Button text="Sign In" borderColor="white" color="white" textc="white" />
        <Button text="Sign In" borderColor="white" color="white" textc="white" />

      </div>
    </header>
  );
};

export default Header;

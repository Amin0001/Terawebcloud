import React, { useState } from 'react';
import Link from 'next/link';
import Button from './Button'
const Navbar = () => {
  const [showDocs, setShowDocs] = useState(false);

  const toggleDocs = () => {
    setShowDocs(!showDocs);
  };

  return (
    <header className="bg-white text-gray-700 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo text-2xl font-bold text-black">TerraWeb</div>
        <ul className="flex space-x-8 flex-grow justify-center">
          <li>
            <Link href="/">
              <a className="hover:text-blue-500 hover:border-b-2 border-blue-500 transition duration-300 ease-in-out">Home</a>
            </Link>
          </li>
          <li>
            <Link href="/how-it-is-done">
              <a className="hover:border-b-2 hover:text-blue-500 border-blue-500 transition duration-300 ease-in-out">How It's Done</a>
            </Link>
          </li>
          <li>
            <Link href="/pricing">
              <a className="hover:border-b-2 hover:text-blue-500 border-blue-500 transition duration-300 ease-in-out">Pricing</a>
            </Link>
          </li>
          <li className="relative group">
            <a
              className="hover:border-b-2 hover:text-blue-500 border-blue-500 transition duration-300 ease-in-out cursor-pointer"
              onClick={toggleDocs}
            >
              Docs
            </a>
            <ul
              className={`absolute ${showDocs ? 'block' : 'hidden'
                } bg-gray-900 text-white border border-gray-600 space-y-2 mt-2 py-2`}
            >
              <li>
                <Link href="/docs/getting-started">
                  <a className="hover:text-blue-500">Getting Started</a>
                </Link>
              </li>
              <li>
                <Link href="/docs/api-reference">
                  <a className="hover:text-blue-500">API Reference</a>
                </Link>
              </li>
              <li>
                <Link href="/docs/faq">
                  <a className="hover:text-blue-500">FAQ</a>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
        <div className="flex space-x-4">

          <Button color='white' text="Sign In" borderColor="blue-500" textc="blue-500" className="bg-blue-500  hover:bg-blue-500 hover:text-white text-blue-500 transition duration-300 ease-in-out" />
          <Button color='blue-500' text="Sign Up" borderColor="blue-500" textc="white" className="hover:bg-white hover:text-blue transition duration-300 ease-in-out" />
        </div>

      </div>
    </header>
  );
};

export default Navbar;

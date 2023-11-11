import React from 'react';
import Navbar from '../components/Navbar';
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
import Five from "../components/Five"
import Six from "../components/Six"
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <Five />
      <Six/>
      <main>{children}</main>
      {/* Other layout components */}
    </div>
  );
};

export default Layout;

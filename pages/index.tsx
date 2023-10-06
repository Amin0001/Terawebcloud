import React from 'react';
import Navbar from '../components/Navbar';
import First from '../components/First'
import Second from '../components/Second'
import Third from '../components/Third'
import Fourth from '../components/Fourth'
const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      <First />
      <Second />
      <Third />
      <Fourth />
      <main>{children}</main>
      {/* Other layout components */}
    </div>
  );
};

export default Layout;

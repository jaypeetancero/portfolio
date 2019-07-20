import React from 'react';
import './App.css';
import Sidebar from './components/layout/Sidebar';
import Homepage from './components/Homepage'
import Footer from './components/layout/Footer';

function App() {
  return (
    <div className="App">
      <Sidebar></Sidebar>
      <Homepage></Homepage>
      <Footer></Footer>
    </div>
  );
}

export default App;

import React from 'react'
import Header from './Header';
import Navbar from './Navbar';
import Topics from './Topics'
// import { PopupButton } from "react-calendly";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Topics />
      {/* <PopupButton /> */}
    </div>
  );
};

export default App;

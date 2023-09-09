import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import AppRouter from './config/Router';

function App() {
  return (
    <div className="App">
      <AppRouter/>
      {/* <Home/> */}
    </div>
  );
}

export default App;

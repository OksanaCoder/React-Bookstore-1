import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Foot from './components/Footer';
import Jumbo from './components/Jumbotron';
import FantasyList from './components/FantasyList';


import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="App">
     <NavBar />
     <Jumbo />
     <FantasyList />
     <Foot />
    </div>
  );
}

export default App;

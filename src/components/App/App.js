import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import ProfileContent from '../ProfileContent/ProfileContent';
import Modal from '../Modal/Modal';

function App() {
  return (
    <div className="App">
        <Header />
        <Sidebar />
        <ProfileContent />
        <Modal />
    </div>
  );
}

export default App;

import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import ProfileContent from '../ProfileContent/ProfileContent';
import Modal from '../Modal/Modal';
import {BrowserRouter} from 'react-router-dom';

function App(props) {
  return ( <div className = "App" >
      <BrowserRouter>
        <Header state={props.state.header}/>
        <Sidebar state={props.state.sidebar}/>
        <ProfileContent state={props.state.profilecontent} />
        <Modal />
      </BrowserRouter>
    </div>
  );
}

export default App;

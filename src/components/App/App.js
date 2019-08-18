import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import ProfileContent from '../ProfileContent/ProfileContent';

function App() {
  return (
    <div className="App">
        <Header/>
    {/* <!--Left Sidebar with info Profile --> */}
        <Sidebar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Sidebar>

    <ProfileContent/>
    {/* <!--Close content posts--> */}

    {/* <!-- Modal container for settings---> */}
    <div id="settingsmodal" className="modal fade text-center">
        <div className="modal-dialog">
            <div className="modal-content">
            </div>
        </div>
    </div>


    </div>
  );
}

export default App;

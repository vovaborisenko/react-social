import React from 'react';
import './App.css';
import Header from '../Header/Header'
import Sidebar from '../Sidebar/Sidebar';
import ProfileContent from '../ProfileContent/ProfileContent';
import Modal from '../Modal/Modal';
import Banner from '../Banner/Banner';
import TabPanel from '../TabPanel/TabPanel';
import Tab from '../Tab/Tab';

function App() {
  return (
    <div className="App">
        <Header/>
        <Sidebar>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Sidebar>

        <ProfileContent>
            <Banner img="./img/banner.jpg"/>
            <TabPanel>
                <Tab name="posts" title="Last Posts" active="true"/>
                <Tab name="profile" title="Profile"/>
                <Tab name="chat" title="Chat"/>
            </TabPanel>
        </ProfileContent>

        <Modal/>
    </div>
  );
}

export default App;

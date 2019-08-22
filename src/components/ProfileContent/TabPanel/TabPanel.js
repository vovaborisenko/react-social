import React from "react";
import s from "./TabPanel.module.css";
import Tab from "./Tab/Tab";

const TabPanel = props => {
  return (
    <ul className={s.nav__tabs}>
      {props.state.map(tab => (
        <Tab link={tab.tablink} title={tab.tabtext} />
      ))}
    </ul>
  );
};

export default TabPanel;

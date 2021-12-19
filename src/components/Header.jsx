import React from 'react';
import {Link} from 'react-router-dom';

const Header = ({onRouteChange}) => {
  return (
    <header>
      <img src="../public/images/phone.png"/>
      <span className="activity" onClick={()=>onRouteChange("activities")}>Activity Feed</span>
    </header>
  );
};

export default Header;

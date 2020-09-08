import React from 'react';

import onlineIcon from '../../icons/onlineIcon.png';
import closeIcon from '../../icons/closeIcon.png';

import './Info.css';

const Info = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
    <img className="onlineIcon" src={onlineIcon} alt="online icon" />
    
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
    <a href="/"><img src={closeIcon} alt="close icon" /></a> <a href="/"></a>
    </div>
  </div>
);

export default Info;
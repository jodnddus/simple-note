import React from 'react';
import profile from './profile.png';

//SFC: StateLessFunctionalComponent
const Header: React.SFC = () => {
  return  (
    <div className="header">
      <div className="header-title">
        <img src={profile} alt="profile" id="profile"/>
        <b><span>Pasan's 심플노트</span></b>
      </div>
      <div className="buttons-container">
        <b><button className="buttons">추가</button></b>
        <b><button className="buttons">삭제</button></b>
      </div> 
    </div>
  );
}

export default Header;
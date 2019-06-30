import React from 'react';
import { actionCreators as noteActions } from '../../store/modules/note';
import profile from './profile.png';

interface Props {
  onAddNote(): void;
  onDeleteNote(): void;
}

//SFC: StateLessFunctionalComponent
const Header: React.SFC<Props> = ({onAddNote, onDeleteNote}) => {
  return  (
    <div className="header">
      <div className="header-title">
        <img src={profile} alt="profile" id="profile"/>
        <b><span>Pasan's 심플노트</span></b>
      </div>
      <div className="buttons-container">
        <b><button className="buttons" onClick={onAddNote}>추가</button></b>
        <b><button className="buttons" onClick={onDeleteNote}>삭제</button></b>
      </div> 
    </div>
  );
}

export default Header;
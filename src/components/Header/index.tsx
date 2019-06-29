import React from 'react';

//SFC: StateLessFunctionalComponent
const Header: React.SFC = () => {
  return  (
    <div className="header">
      <div className="title">
        <span>Pasan's 심플노트</span>
      </div>
      <div className="buttons">
        <button>추가</button>
        <button>삭제</button>
      </div> 
    </div>
  );
}

export default Header;
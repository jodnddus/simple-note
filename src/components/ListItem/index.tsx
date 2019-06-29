import React from 'react';

interface Props {

}

const ListItem: React.SFC<Props> = () => {
  return (
    <div className="list-item">
      <div className="title">제목</div>
      <div className="list-item-contents">내용</div>
    </div>
  );
}

export default ListItem;
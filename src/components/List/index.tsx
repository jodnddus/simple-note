import React from 'react';
import ListItem from '../ListItem';

interface Props {

}

class List extends React.Component<Props> {
  render() {
    return(
      <div className="list">
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
        <ListItem />
      </div>
    );
  }
}

export default List;
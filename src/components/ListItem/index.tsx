import React from 'react';

interface Props {
  title: string;
  description: string;
  onToggleListItem(id: number): void;
  id: number;
  active: boolean;
}

const ListItem: React.SFC<Props> = ({title, description, onToggleListItem, id, active}) => {
  return (
    <div onClick={() => onToggleListItem(id)} className={active ? "list-item active" : "list-item"}>
      <div className="listitem-title">{title}</div>
      <div className="list-item-contents">{description}</div>
    </div>
  );
}

export default ListItem;
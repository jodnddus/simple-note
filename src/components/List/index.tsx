import React from 'react';
import ListItem from '../ListItem';
import { NoteItemDataParams } from '../../store/modules/note';

interface Props {
  noteItems: NoteItemDataParams[];
  onToggleListItem(id: number): void;
  activeId: number;
}

const List: React.SFC<Props> = ({noteItems, onToggleListItem, activeId}) => {
  const noteItemList = noteItems.map(noteItems => noteItems ? (
    <div>
      <ListItem 
        key={noteItems.id}
        title={noteItems.title} 
        description={noteItems.description} 
        id={noteItems.id}
        active={noteItems.id === activeId} 
        onToggleListItem={() => onToggleListItem(noteItems.id)} 
      />
    </div>
  ) : null);

  return (
    <div className="list">
      {noteItemList}
    </div>
  );
};

export default List;
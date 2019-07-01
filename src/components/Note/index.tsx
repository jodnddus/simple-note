import React from 'react';
import { NoteItemDataParams } from '../../store/modules/note';

interface Props {
  noteItems: NoteItemDataParams[];
  activeId: number;
  onDescriptionInput(e: any): void;
  onTitleInput(e: any): void;
}

const Note: React.SFC<Props> = ({ noteItems, activeId, onDescriptionInput, onTitleInput }) => {
  const noteItem = noteItems.filter(noteItem => noteItem.id === activeId)[0];
  return (
    <div className="note">
      <input className="title input" onChange={onTitleInput} value={noteItem.title} />
      <textarea className="note-contents input" onChange={onDescriptionInput} value={noteItem.description} />
    </div>
  );
}

export default Note;
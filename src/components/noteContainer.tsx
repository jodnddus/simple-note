import React from "react";
import Header from "./Header";
import List from "./List";
import Note from "./Note";
import { connect } from "react-redux";
import { StoreState } from "../store/modules";
import { initialState } from "../store/modules/note";
import {
  NoteItemDataParams,
  actionCreators as noteActions,
} from "../store/modules/note";
import { bindActionCreators } from "redux";

interface Props {
  noteItems: NoteItemDataParams[];
  title: string;
  description: string;
  activeId: number;
  noteActions: typeof noteActions;
}

const NoteContainer: React.FC<Props> = ({
  noteItems,
  title,
  description,
  activeId,
  noteActions,
}) => {
  const onAddNote = () => noteActions.addNoteAction();
  const onDeleteNote = (id: number) => noteActions.deleteNoteAction(id);
  const onToggleListItem = (id: number) => noteActions.toggleListItemAction(id);
  const onTitleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    noteActions.inputTitleAction(activeId, value);
  };
  const onDescriptionInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    noteActions.inputDescriptionAction(activeId, value);
  };
  return (
    <div className="note-container">
      <Header
        onAddNote={onAddNote}
        onDeleteNote={() => onDeleteNote(activeId)}
      />
      <div className="container">
        <List
          noteItems={noteItems}
          onToggleListItem={onToggleListItem}
          activeId={activeId}
        />
        <Note
          noteItems={noteItems}
          onDescriptionInput={onDescriptionInput}
          onTitleInput={onTitleInput}
          activeId={activeId}
        />
      </div>
    </div>
  );
};

export default connect(
  (note: StoreState) => ({
    noteItems: note.note.noteItems,
    title: note.note.title,
    description: note.note.description,
    activeId: note.note.activeId,
  }),
  dispatch => ({
    noteActions: bindActionCreators(noteActions, dispatch),
  }),
)(NoteContainer);

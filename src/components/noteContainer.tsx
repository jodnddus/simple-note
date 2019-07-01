import React from 'react';
import Header from './Header';
import List from './List';
import Note from './Note';
import { connect } from 'react-redux';
import { StoreState } from '../store/modules';
import { NoteItemDataParams, actionCreators as noteActions } from '../store/modules/note';
import { bindActionCreators } from 'redux';

interface Props {
  noteItems: NoteItemDataParams[],
  title: string,
  description: string;
  activeId: number;
  noteActions: typeof noteActions;
}

class NoteContainer extends React.Component<Props> {
  onAddNote = (): void => {
    const { noteActions, activeId } = this.props;
    console.log(activeId);
    noteActions.addNoteAction();
  }
  onDeleteNote = (id: number): void => {
    const { noteActions, activeId } = this.props;
    console.log(activeId);
    noteActions.deleteNoteAction(id);
  }
  onToggleListItem = (id: number): void => {
    const { noteActions, activeId } = this.props;
    console.log(activeId);
    noteActions.toggleListItemAction(id);
  }
  onTitleInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    const { noteActions, activeId } = this.props;
    console.log(activeId);
    noteActions.inputTitleAction(activeId, value);
  }
  onDescriptionInput = (e: React.FormEvent<HTMLInputElement>): void => {
    const { value } = e.currentTarget;
    const { noteActions, activeId } = this.props;
    console.log(activeId);
    noteActions.inputDescriptionAction(activeId, value);
  }
  render() {
    const { noteItems, activeId } = this.props;
    const { onAddNote, onDeleteNote, onDescriptionInput, onTitleInput, onToggleListItem } = this;
    return (
      <div className="note-container">
        <Header onAddNote={onAddNote} onDeleteNote={() => onDeleteNote(activeId)} />
        <div className="container">
          <List noteItems={noteItems} onToggleListItem={onToggleListItem} activeId={activeId} />
          <Note noteItems={noteItems} onDescriptionInput={onDescriptionInput} onTitleInput={onTitleInput} activeId={activeId} />
        </div>
      </div>
    )
  }
}

export default connect(
  (note: StoreState) => ({
    noteItems: note.note.noteItems,
    title: note.note.title,
    description: note.note.description,
    activeId: note.note.activeId
  }),
  (dispatch) => ({
    noteActions: bindActionCreators(noteActions, dispatch)
  })
)(NoteContainer);
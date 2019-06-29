import React from 'react';

interface NoteState {

}

interface Props {

}

class Note extends React.Component<Props, NoteState> {
  render() {
    return (
      <div className="note">
        <input className="title input" placeholder="title"/>
        <textarea className="note-contents input" placeholder="description"/>
      </div>
    );
  }
}

export default Note;
import React from 'react';

interface NoteState {

}

interface Props {

}

class Note extends React.Component<Props, NoteState> {
  render() {
    return (
      <div className="note">
        <input className="title" placeholder="title"/>
        <textarea className="note-contents" placeholder="description"/>
      </div>
    );
  }
}

export default Note;
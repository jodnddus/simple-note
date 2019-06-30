import { combineReducers } from 'redux';
import { NoteState, noteReducer as note } from './note';

export interface StoreState {
  note: NoteState;
};

export default combineReducers<StoreState>({
  note
});
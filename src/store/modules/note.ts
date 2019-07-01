export interface NoteItemDataParams {
  id: number;
  title: string;
  description: string;
}

export interface NoteState {
  noteItems: NoteItemDataParams[];
  title: string;
  description: string;
  activeId: number;
}

// 액션 타입 정의(동작 정의)
export const ADD_NOTE = 'ADD_NOTE';
export const DELETE_NODE = 'DELETE_NODE';
export const TOGGLE_LISTITEM = 'TOGGLE_LISTITEM';
export const INPUT_TITLE = 'INPUT_TITLE';
export const INPUT_DESCRIPTION = 'INPUT_DESCRIPTION';

interface AddNoteAction {
  type: typeof ADD_NOTE;
  payload: NoteItemDataParams;
}

interface DeleteNoteAction {
  type: typeof DELETE_NODE;
  meta: {
    id: number;
  }
}

interface ToggleListItemAction {
  type: typeof TOGGLE_LISTITEM;
  meta: {
    id: number;
  }
}

interface InputTitleAction {
  type: typeof INPUT_TITLE;
  meta: {
    id: number;
    title: string;
  }
}

interface InputDescriptionAction {
  type: typeof INPUT_DESCRIPTION;
  meta: {
    id: number;
    description: string;
  }
}

export type NoteActionTypes =
  AddNoteAction | DeleteNoteAction | ToggleListItemAction | InputTitleAction | InputDescriptionAction;

let autoId = 0;

function addNoteAction() {
  return {
    type: ADD_NOTE,
    payload: {
      id: autoId++,
      title: "제목",
      description: "내용",
    }
  };
}

function deleteNoteAction(id: number) {
  return {
    type: DELETE_NODE,
    meta: {
      id
    }
  };
}

function toggleListItemAction(id: number) {
  return {
    type: TOGGLE_LISTITEM,
    meta: {
      id
    }
  };
}

function inputTitleAction(id: number, title: string) {
  return {
    type: INPUT_TITLE,
    meta: {
      id,
      title
    }
  };
}

function inputDescriptionAction(id: number, description: string) {
  return {
    type: INPUT_DESCRIPTION,
    meta: {
      id,
      description
    }
  }
}

export const actionCreators = {
  addNoteAction,
  deleteNoteAction,
  toggleListItemAction,
  inputTitleAction,
  inputDescriptionAction
};

const initialState: NoteState = {
  noteItems: [
    {
      id: autoId++,
      title: "Redux를 이용한 심플노트!",
      description: "khwsc1님의 medium https://medium.com/@khwsc1"
    }
  ],
  title: '',
  description: '',
  activeId: 0
};

export function noteReducer(state = initialState, action: NoteActionTypes): NoteState {
  switch (action.type) {
    case ADD_NOTE:
      return {
        title: '',
        description: '',
        noteItems: [ ...state.noteItems, action.payload ],
        activeId: action.payload.id
      }
    case DELETE_NODE:
      return {
        ...state,
        noteItems: state.noteItems.filter(noteItem => noteItem.id !== action.meta.id),
        activeId: 0
      }
    case TOGGLE_LISTITEM:
      return {
        ...state,
        activeId: action.meta.id
      }
    case INPUT_TITLE:
      return {
        ...state,
        noteItems: state.noteItems.map(noteItem => {
          if (noteItem.id === action.meta.id) {
            noteItem.title = action.meta.title;
          }
          return noteItem;
        })
      }
    case INPUT_DESCRIPTION:
      return {
        ...state,
        noteItems: state.noteItems.map(noteItem => {
          if (noteItem.id === action.meta.id) {
            noteItem.description = action.meta.description;
          }
          return noteItem;
        })
      }
    default:
      return state;
  }
}
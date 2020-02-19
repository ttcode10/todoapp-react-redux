import InputActionTypes from './input.types';

const INITIAL_STATE = {
  isNew: false,
  isEdit: false,
  todoItem: null
}

const inputReducer = (state=INITIAL_STATE, action) => {
  switch (action.type) {
    case InputActionTypes.FIRE_NEW_INPUT:
      return {
        ...state,
        isNew: true
      };
    case InputActionTypes.FIRE_EDIT_INPUT:
      return {
        ...state,
        isEdit: true,
        todoItem: action.payload
      }
    case InputActionTypes.CLOSE_INPUT_FIELD:
      return {
        ...state,
        isNew: false,
        isEdit: false,
        todoItem: null
      }
    default:
      return state;
  }
}

export default inputReducer;
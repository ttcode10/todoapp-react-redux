import InputActionTypes from './input.types';

export const fireNewInput = () => ({
  type: InputActionTypes.FIRE_NEW_INPUT,
});

export const fireEditInput = item => ({
  type: InputActionTypes.FIRE_EDIT_INPUT,
  payload: item
});

export const closeInputField = () => ({
  type: InputActionTypes.CLOSE_INPUT_FIELD
})
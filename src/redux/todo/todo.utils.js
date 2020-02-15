export const tickTodoItem = (todoItems, itemToTick) => {
  const existingTodoItem = todoItems.find(todoItem => todoItem.id === itemToTick.id);
  if (existingTodoItem) {
    return todoItems.map(todoItem => todoItem.id === itemToTick.id ? {...todoItem, completed: !todoItem.completed} : todoItem);
  } return todoItems;
}

export const triggerEditMode = (todoItems, itemToEdit) => {
  const existingTodoItem = todoItems.find(todoItem => todoItem.id === itemToEdit.id);
  if (existingTodoItem) {
    return todoItems.map(todoItem => todoItem.id === itemToEdit.id ? {...todoItem, isEdit: true} : todoItem);
  } return todoItems;
}

export const editTodoItem = (todoItems, itemToEdit) => {
  const existingTodoItem = todoItems.find(todoItem => todoItem.id === itemToEdit.id);
  if (existingTodoItem) {
    // delete itemToEdit.isEdit;
    return todoItems.map(todoItem => todoItem.id === itemToEdit.id ? {...todoItem, title: itemToEdit.title, completed: false, isEdit: false} : todoItem);
  } return todoItems;
}

export const tickTodoItem = (todoItems, itemToTick) => {
  const existingTodoItem = todoItems.find(todoItem => todoItem.id === itemToTick.id);
  if (existingTodoItem) {
    return todoItems.map(todoItem => todoItem.id === itemToTick.id ? {...todoItem, completed: !todoItem.completed} : todoItem);
  } return todoItems;
}

export const editTodoItem = (todoItems, itemToEdit) => {
  const existingTodoItem = todoItems.find(todoItem => todoItem.id === itemToEdit.id);
  if (existingTodoItem) {
    return todoItems.map(todoItem => todoItem.id === itemToEdit.id ? {...todoItem, title: itemToEdit.title, completed: false} : todoItem);
  } return todoItems;
}

export const mapTodoItemsWithSearchKeywords = (todoItems, keywords) => {
  return todoItems.filter(todoItem => todoItem.title.toLowerCase().includes(keywords.toLowerCase()));
}

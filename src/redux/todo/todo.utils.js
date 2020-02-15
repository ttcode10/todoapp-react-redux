export const tickTodoItem = (todoItems, itemToTick) => {
  const existingTodoItem = todoItems.find(todoItem => todoItem.id === itemToTick.id);
  if (existingTodoItem) {
    return todoItems.map(todoItem => todoItem.id === itemToTick.id ? {...todoItem, completed: !todoItem.completed} : todoItem);
  } return todoItems;
}

const todoList = [];

const addTodo = async description => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const todo = {id: todoList.length + 1, active: true, description};
  todoList.push(todo);
  return todo;
};

const deleteTodo = id => {
  if (id >= todoList.length) return null;
  todoList[id].active = false;
  return todoList[id];
};

const getTodoList = () => todoList.filter(({active}) => active);

addTodo('First todo!').then();

export default {
  addTodo,
  deleteTodo,
  getTodoList,
};

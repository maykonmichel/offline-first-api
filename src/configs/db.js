const todoList = [];

const addTodo = async description => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const todo = {id: new Date().getTime().toString(), active: true, description};
  todoList.push(todo);
  return todo;
};

const deleteTodo = async id => {
  await new Promise(resolve => setTimeout(resolve, 3000));
  const index = todoList.findIndex(todo => todo.id === id);
  todoList[index].active = false;
  return todoList[index];
};

const getTodoList = () => todoList.filter(({active}) => active);

addTodo('First todo!').then();

export default {
  addTodo,
  deleteTodo,
  getTodoList,
};

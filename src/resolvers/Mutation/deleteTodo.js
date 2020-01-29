export default (parent, {id}, {db: {deleteTodo}}) => deleteTodo(id - 1);

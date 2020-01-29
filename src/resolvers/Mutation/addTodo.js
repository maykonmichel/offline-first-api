export default (parent, {input: {description}}, {db}) => {
  const todo = {
    id: db.length + 1,
    description,
  };

  db.push(todo);

  return todo;
};

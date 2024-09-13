import axios from 'axios';

export const todosUrl = 'https://jsonplaceholder.typicode.com/todos';
export const getTodoById = async (id: number) => {
  const result = await axios.get(`${todosUrl}/${id}`);
  return result;
};
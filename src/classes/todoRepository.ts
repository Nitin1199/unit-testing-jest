import axios from 'axios';

export const todoURL = 'https://jsonplaceholder.typicode.com/todos'
export class TodoRepository {
  async getTodos() {
    const results = await axios.get(todoURL);
    return results;
  }

  async getTodo(id: number) {
    const result = await axios.get(`${todoURL}/${id}`);
    return result;
  }
}
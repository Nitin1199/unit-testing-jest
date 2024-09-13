// __mocks__/axios.js
const axios = {
  get: jest.fn((url) => {
    if (url === 'https://jsonplaceholder.typicode.com/todos/1') {
      return Promise.resolve({id: 1, title: 'Test Todo', completed: false });
    } else if (url === 'https://jsonplaceholder.typicode.com/todos') {
      return Promise.resolve([
          { id: 1, title: 'Test Todo 1', completed: false },
          { id: 2, title: 'Test Todo 2', completed: true }
        ]);
    } else {
      return Promise.reject(new Error('Not Found'));
    }
  })
};

module.exports = axios;

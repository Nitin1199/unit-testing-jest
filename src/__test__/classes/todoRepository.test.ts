// import axios from 'axios';
import { TodoRepository } from '../../classes/todoRepository';

// jest.mock('axios');
describe('TodoRepository', () => {
  let sut: TodoRepository;

  beforeEach(() => {
    sut = new TodoRepository();
  })
  describe('@getTodo', () => {
    it('should return todo', async () => {
      const result = await sut.getTodo(1);
      expect(result).toEqual({ id: 1, title: 'Test Todo', completed: false });
    })
  });

  describe('@getTodos', () => {
    it('should return todo', async () => {
      const result = await sut.getTodos();
      expect(result).toEqual(
        [
          { id: 1, title: 'Test Todo 1', completed: false },
          { id: 2, title: 'Test Todo 2', completed: true }
        ]
      );
    })
  });
});
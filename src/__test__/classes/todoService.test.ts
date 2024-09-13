import { TodoService } from '../../classes/todoService';

export const mockTodo = {
  id: 1, title: 'Test Todo', completed: false 
}

export const mockTodos = [
  { id: 1, title: 'Test Todo 1', completed: false },
  { id: 2, title: 'Test Todo 2', completed: true }
]

// Automatic mock - ES6 Class
jest.mock('../../classes/todoRepository', () => {
  return {
    TodoRepository: jest.fn().mockImplementation(() => {
      return {
        getTodos: jest.fn().mockResolvedValue(mockTodos),
        getTodo: jest.fn().mockResolvedValue(mockTodo),
      };
    })
  }
});

describe('TodoService', () => {
  let service: TodoService;

  beforeEach(() => {
    service = new TodoService();
  });

  it('should return a list of todos when the repository successfully retrieves data', async () => {
    const todos = await service.getTodos();
    expect(todos).toEqual(mockTodos);
  });
  it('should return a todo when the repository successfully retrieves data', async () => {
    const todos = await service.getTodo(1);
    expect(todos).toEqual(mockTodo);
  });
});

import { TodoRepository } from './todoRepository'

export class TodoService {
  todoRepository: TodoRepository;

  constructor() {
    this.todoRepository = new TodoRepository();
  }

  async getTodos() {
    return this.todoRepository.getTodos();
  }

  async getTodo(id: number) {
    return this.todoRepository.getTodo(id);
  }
}
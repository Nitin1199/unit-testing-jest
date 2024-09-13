import axios from 'axios';
import { getTodoById } from '../snap';

describe('Snap Test Suite', () => {
  it('should create and test a snapshot', async () => {
    jest.spyOn(axios, 'get').mockResolvedValue({
      'userId': 2,
      'id': 1,
      'title': 'delectus aut autem',
      'completed': false
    });
    const todoId = 1;
    const result = await getTodoById(todoId);
    expect(result).toMatchSnapshot();
  });
});
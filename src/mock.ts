import axios from 'axios';

export const usersUrl = 'https://jsonplaceholder.typicode.com/users';
export const fetchUsers = async () => {
  try {
    const users = await axios.get(usersUrl);
    return users;
  } catch (error) {
    throw error;
  }
};
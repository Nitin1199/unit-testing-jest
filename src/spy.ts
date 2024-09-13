import axios from 'axios';

export const objectUrl = 'https://api.restful-api.dev/objects';
export const fetchObjects = async () => {
  try {
    const objects = await axios.get(objectUrl);
    return objects;
  } catch (error) {
    throw error;
  }
};

// fetchObjects();
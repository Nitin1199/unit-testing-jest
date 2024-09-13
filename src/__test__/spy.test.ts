import axios from 'axios';
import { fetchObjects, objectUrl } from '../spy';
describe('FetchObject Test Suit', () => {

  let objectResponse: {}[] = [];

  beforeAll(() => {
    objectResponse = [
      {
        "id": "1",
        "name": "Google Pixel 6 Pro",
        "data": {
           "color": "Cloudy White",
           "capacity": "128 GB"
        }
     },
     {
        "id": "2",
        "name": "Apple iPhone 12 Mini, 256GB, Blue",
        "data": null
     },
    ]
  });

  it('should fetch objects', async () => {
    jest.spyOn(axios, 'get').mockResolvedValueOnce(objectResponse);
    const objects = await fetchObjects();
    expect(objects).toEqual(objectResponse);
    expect(axios.get).toHaveBeenCalled();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith(objectUrl);
  });

  it('should throw error with await pattern', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('Error'));
    await expect(fetchObjects()).rejects.toThrow('Error');
  });

  it('should throw error', async () => {
    jest.spyOn(axios, 'get').mockRejectedValueOnce(new Error('return Error'));
    return expect(fetchObjects()).rejects.toThrow('return Error');
  });
});
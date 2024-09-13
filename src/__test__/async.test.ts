import { fetchData, rejectRequest } from '../async';

describe('Async Test Suite', () => {
  describe('@fetchData', () => {
    it('should test asynchronous operation with promises', () => {
       return fetchData().then(data => {
        expect(data).toBe('data');
      });
    });
  
    it('should test asynchronous operation with async/await', async () => {
      const data = await fetchData()
      expect(data).toBe('data');
    });
  
    it('should test async operation with other ways', async () => {
      return expect(fetchData()).resolves.toBe('data');
    });
  
    it('should test async operation with other ways 2', async () => {
      await expect(fetchData()).resolves.toBe('data');
    });
  });

  describe('@rejectRequest', () => {
    it('should test asynchronous operation with promises that rejects', () => {
      return rejectRequest().catch(err => {
        expect(err).toBe('error');
      });
    });
  
    it('should test asynchronous operation with async/await that rejects', async () => {
      try {
        await rejectRequest()
      } catch (err) {
        expect(err).toBe('error');
      }
    });
  });
});
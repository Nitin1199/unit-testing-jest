export const fetchData = () => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('data'), 100);
  });
};

export const rejectRequest = () => {
  return new Promise((reject) => {
    setTimeout(() => reject(new Error('error')), 100);
  });
};
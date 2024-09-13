beforeEach(() => console.log('connection setup'));
beforeEach(() => console.log('database setup'));

afterEach(() => console.log('database teardown'));
afterEach(() => console.log('connection teardown'));

test('test 1', () => console.log('test 1'));

describe('extra', () => {
  console.log('inside extra');
  beforeEach(() => console.log('extra database setup'));
  afterEach(() => console.log('extra database teardown'));

  test('test 2', () => console.log('test 2'));
  console.log('inside extra 2');
  describe('extra 2', () => {
    console.log('inside extra 21');
    beforeEach(() => console.log('extra database setup 2'));
    afterEach(() => console.log('extra database teardown 2'));

    test('test 3', () => console.log('test 3'));
    console.log('inside extra 22');
  });
});
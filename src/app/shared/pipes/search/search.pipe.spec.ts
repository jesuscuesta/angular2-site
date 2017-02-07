import { SearchPipe } from './search.pipe';

describe('Shared Module -> Search Pipe', () => {
  let pipe = new SearchPipe();
  let data = [
    {
      id: 1,
      name: 'one'
    },
    {
      id: 2,
      name: 'two'
    },
  ];

  it('should return null data', () => {
    expect(pipe.transform(null, 'example', 'name')).toBe(null);
  });

  it('should return same data', () => {
    expect(pipe.transform(data, '', 'name')).toBe(data);
  });

  it('should return two elements', () => {
    expect(pipe.transform(data, 'o', 'name').length).toBe(2);
  });

  it('should return one elements', () => {
    expect(pipe.transform(data, 'w', 'name').length).toBe(1);
  });

  it('should return empty array ', () => {
    expect(pipe.transform(data, 'w', 'names').length).toBe(0);
  });
});

const analyze = require('./analyze');
const tester = [5,1,2,4,6,7,1,8];

it('should return an object', () => {
  let ret = analyze(tester);
  expect(ret).toBeInstanceOf(Object);
});

describe('the return object\'s props', () => {
  let analysis = analyze(tester);
  it('has has average prop', () => {
    expect(analysis).toHaveProperty('average');
  });
  it('has has min prop', () => {
    expect(analysis).toHaveProperty('min');
  });
  it('has has max prop', () => {
    expect(analysis).toHaveProperty('max');
  });
  it('has has length prop', () => {
    expect(analysis).toHaveProperty('length');
  });
});

it('should sort the array', () => {
  let analysis = analyze(tester);
  expect(analysis.arr).toEqual(expect.arrayContaining([1,1,2,4,5,6,7,8]));
});

describe('should give out accurate answers', () => {
  let analysis = analyze(tester);
  it('should get the minimum value of the arr', () => {
    expect(analysis.min).toBe(1);
  });
  it('should get the maximum value of the arr', () => {
    expect(analysis.max).toBe(8);
  });
  it('should get the length of the arr', () => {
    expect(analysis.length).toBe(8);
  });
  it('should get the average value of the arr', () => {
    expect(analysis.average).toBe(4);
  });
});

describe('should work with negative numbers', () => {
  const tester2 = [-1, -51, -53, -29, -5132];
  const analysis = analyze(tester2);
  it('should get the minimum value of the arr', () => {
    expect(analysis.min).toBe(-5132);
  });
  it('should get the maximum value of the arr', () => {
    expect(analysis.max).toBe(-1);
  });
  it('should get the length of the arr', () => {
    expect(analysis.length).toBe(5);
  });
  it('should get the average value of the arr', () => {
    expect(analysis.average).toBe(-1054);
  });
});

describe('should work with larger numbers', () => {
  const tester3 = [100, 4281, 128, 238, 618, 88, 1];
  const analysis = analyze(tester3);
  it('should get the minimum value of the arr', () => {
    expect(analysis.min).toBe(1);
  });
  it('should get the maximum value of the arr', () => {
    expect(analysis.max).toBe(4281);
  });
  it('should get the length of the arr', () => {
    expect(analysis.length).toBe(7);
  });
  it('should get the average value of the arr', () => {
    expect(analysis.average).toBe(779);
  });
});

describe('should work with mixed numbers', () => {
  const tester3 = [100, 4281, 128, 238, 618, 88, 1];
  const tester2 = [-1, -51, -53, -29, -5132];
  const mixed = [...tester3, ...tester2];
  const analysis = analyze(mixed);

  it('should get the minimum value of the arr', () => {
    expect(analysis.min).toBe(-5132);
  });
  it('should get the maximum value of the arr', () => {
    expect(analysis.max).toBe(4281);
  });
  it('should get the length of the arr', () => {
    expect(analysis.length).toBe(12);
  });
  it('should get the average value of the arr', () => {
    expect(analysis.average).toBe(15);
  });
});
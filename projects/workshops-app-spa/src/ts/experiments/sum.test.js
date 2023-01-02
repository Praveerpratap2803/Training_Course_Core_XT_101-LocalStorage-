


const {sum,hypotenuse} = require('./sum');

test('adds 1 + 2 to equal 3', () => {
  const result = sum(1,2)
  expect(result).toBe(3);
});

describe('Hypotenuse',()=>{
    test('should be 5',()=>{
      const result1 = hypotenuse(3,4)
      const result2 = hypotenuse(4,3)
      expect(result1).toBe(5);
      expect(result2).toBe(5);
    })

    test('throws an error when -3 -4 are passed',()=>{
      expect(()=>{
        hypotenuse(-3,4)
      }).toThrow();
    })
    test('throws an error when -3 -4 are passed',()=>{
      expect(()=>{
        hypotenuse(-3,-4)
      }).toThrow();
    })
  })

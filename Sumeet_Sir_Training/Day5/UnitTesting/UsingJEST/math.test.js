const binaryOp = require("./math");

// test("adds 1 + 2 to equal 3", () => {
//   expect(sum(1, 2)).toBe(3);
// });
// Arrange -> initialize
// Act -> biz logic
// Assert -> check if expect and real value matches !
describe(`addition test suite`, () => {
  it(`adds two numbers`, () => {
    // Arrange
    let x = 200;
    let y = 200;

    // Act
    let result = x + y;


    // Assert
    expect(binaryOp.sum(x, y)).toBe(result);
  });

  it(`adds two strings`, () => {
    // Arrange
    let x = "Hello";
    let y = "World";

    // Act
    let result = x + y;

    // Assert
    expect(binaryOp.sum(x, y)).toBe(result);
  });

  it(`multiplies two numbers`, () => {
    // Arrange
    let x = 20;
    let y = 20;

    // Act
    let result = x * y;

    // Assert
    expect(binaryOp.product(x, y)).toBe(result);
  });
  it(`divides two numbers`, () => {
    // Arrange
    let x = 20;
    let y = 2;

    // Act
    let result = x / y;

    // Assert
    expect(binaryOp.divide(x, y)).toBe(result);
  });

  it('substract two number',()=>{
    let x=20;
    let y=10;

    let result = x-y;

    expect(binaryOp.subtract(x,y)).toBe(result)

  })
});

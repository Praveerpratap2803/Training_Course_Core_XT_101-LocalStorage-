
function sum(a, b) {
    return a + b;
  }

function hypotenuse(a,b){
    if(a<0 || b<0){
        throw new Error ('both arguments must be positives numbers')
    }
    return Math.sqrt(a*a + b*b)
}

  module.exports = {
    sum,
    hypotenuse
  };






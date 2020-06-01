
const largestProduct = (numX, numY) => {
if (numX.length < numY) throw new Error ('Span must be smaller than string length');
if (numY < 0) throw new Error ('Span must be greater than zero');
if (/\D/.test(numX)) throw new Error ('Digits input must only contain digits');
if (numY == 0) return 1;

  let maxProd = 0;
  for ( let i = 0; i < numX.length - (numY - 1) ; i++){
    let currProd = numX
                        .slice(i, numY + i)
                        .split("")
                        .reduce((acc,curr)=>acc*curr,1);
    if (currProd > maxProd) maxProd = currProd;
  }
  return maxProd;
};
module.exports = largestProduct

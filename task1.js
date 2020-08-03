const sum = (...args) => {
    let sum = 0
    for( let i = 0; i < args.length; i++ ) {
      sum += args[i]
    } 
    return sum
  }
  
  function curried(func,arity = func.length) {
    return (function nextCurried(prevArgs){
      return function curried(nextArg){
        if(nextArg==null) {
            return 0;
        }
        let args = prevArgs.concat( [nextArg] );
        if (args.length >= arity) {
          return func( ...args );
        }
        else {
          return nextCurried( args );
        }
      };
    })( [] )
  }
  
/*   const sumCurry0 = curried(sum);
  console.log(sumCurry0());

  const sumCurry1 = curried(sum, 1);
  console.log(sumCurry1(1));

  const sumCurry2 = curried(sum, 2);
  console.log(sumCurry2(1)(2));

  const sumCurry3 = curried(sum, 3);
  console.log(sumCurry3(1)(2)(4)); */

  module.exports = { curried, sum };
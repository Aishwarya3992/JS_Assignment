const summation = (...args) => {
    let summation = 0
    for( let i = 0; i < args.length; i++ ) {
        summation += args[i]
    } 
    return summation
  }
  
  function curried() {
    let args = [];
    return (function nextCurried(prevArgs){
        return function curried(nextArg){
        if (typeof(nextArg) =="function") {
          return nextArg(summation(...args));
        }
        else {
          args = prevArgs.concat( [nextArg] );
          return nextCurried(args);     
        }
      };
    })( [] )
  }

  sum = curried();
  module.exports = sum;
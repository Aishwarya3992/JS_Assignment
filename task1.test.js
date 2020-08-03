
const utils = require('./task1');

test('test summation of 0 arguments with curry', ()=> {
    const sumCurry0 = utils.curried(utils.sum);
    expect(sumCurry0()).toBe(0);  
})

test('test summation of 1 argument with curry', ()=> {
    const sumCurry1 = utils.curried(utils.sum, 1);
    expect(sumCurry1(1)).toBe(1);  
})

test('test summation of 2 arguments with curry', ()=> {
    const sumCurry2 = utils.curried(utils.sum, 2);
    expect(sumCurry2(1)(2)).toBe(3);  
})

test('test summation of 3 arguments with curry', ()=> {
    const sumCurry3 = utils.curried(utils.sum, 3);
    expect(sumCurry3(1)(2)(4)).toBe(7);  
})

const sum = require('./task2')

test('test summation for any arbitrary numbers', ()=> {
    expect(sum(1,2,3,4,5,6,7,8,9)).toBe(45);
})

test('test summation is 0 for an empty array', ()=> {
    expect(sum()).toBe(0);   
})

test('test summation for floating point numbers', ()=> {
    expect(sum(1.5,2)).toBe(3.5);
})

test('test summation for negative numbers', ()=> {
    expect(sum(-1,-2)).toBe(-3);
})


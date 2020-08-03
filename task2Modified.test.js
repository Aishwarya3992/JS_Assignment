sum = require('./task2Modified')

test('test summation of 0 arguments with currying', ()=> {
    sum(result => {expect(result).toBe(0)});
})

test('test summation of 1 argument with currying', ()=> {
    sum(1)(result => {expect(result).toBe(1)}); 
})

test('test summation of 2 arguments with currying', ()=> {
    sum(1)(2)(result => {expect(result).toBe(3)}); 
})

test('test summation of 3 arguments with currying', ()=> {
    sum(1)(2)(4)(result => {expect(result).toBe(7)})
})

test('test summation of arbitrary number of arguments with currying', ()=> {
    sum(1)(2)(4)(10)(6)(3)(result => {expect(result).toBe(26)})
})
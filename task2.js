function sum(...args) {
    args = args.length ? args: [0];
    return  args.reduce((result,element) => result + element);
}

console.log(sum(1,2,3,4,5));

module.exports = sum;

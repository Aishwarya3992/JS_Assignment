const extractValuesForKey = require('./task3Example2');

test('test if the correct hierarcy of keys are retried for a given value', () => {
    const myTestObject1 =  {
        uuid: 1,
        innerOne: {
            someKey: "some text"
        },
        innerTwo: {
            uuid: 2,
            innerThree: {
                someOtherKey: "some other text",
                innerFour: {
                uuid: 3
                }
            }           
        }
    }
    const obtainedResult = extractValuesForKey({myTestObject1} , "uuid");
    
    const expectedResult = new Map([
        ['myTestObject1/',1],
        ['myTestObject1/innerTwo/',2],
        ['myTestObject1/innerTwo/innerThree/innerFour/',3],
    ]);
    expect(obtainedResult).toMatchObject(expectedResult);
});

test('test if the retrieved map from the function is empty when input object is empty', () => {
    const myTestObject2 =  {};
    const obtainedResult = extractValuesForKey({myTestObject2} , "uuid");
    
    const expectedResult = new Map();
    expect(Object.keys(obtainedResult).length).toEqual(0);
});


test('test if the retrieved map from the function is empty when serch value cannot be found', () => {
    const myTestObject3 =  {
        uuid: 1,
        innerOne: {
            someKey: "some text"
        },
        innerTwo: {
            uuid: 2,
            innerThree: {
                someOtherKey: "some other text",
                innerFour: {
                uuid: 3
                }
            }           
        }
    }
    const obtainedResult = extractValuesForKey({myTestObject3} , "abcd");
    expect(Object.keys(obtainedResult).length).toEqual(0);
});
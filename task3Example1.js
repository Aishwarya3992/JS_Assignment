inputObject = {
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

function flattenObject(object) {
    var flattenedObject = {};

    for (var key in object) {    
        if ((typeof object[key]) == 'object' && object[key] !== null) {
            var flatObject = flattenObject(object[key]);
            for (var flatObjectKey in flatObject) {
                flattenedObject[key + '/' + flatObjectKey] = flatObject[flatObjectKey];
            }
        } else { 
            flattenedObject[key] = object[key];
        }
    }
    return flattenedObject;
}

function extractValuesForKey(inputObject, searchKey) {
    const filteredKeyValPairs = new Map();
    var flattenedObject = flattenObject(inputObject);
    Object.keys(flattenedObject).forEach((key) => {
        if(key.match(searchKey)) {
            filteredKeyValPairs.set(key.replace(searchKey, ''), flattenedObject[key]);
        }      
    })
    return filteredKeyValPairs;
}

//extractValuesForKey(inputObject, "uuid");

module.exports = extractValuesForKey;
// DO WHATEVER YOU WANT HERE

const createEnumerableProperty = (propertyName) => {
    return propertyName;
};

const createNotEnumerableProperty = (property) => {
    Object.defineProperty(Object.prototype, property, {
        get: () =>{return Object.prototype.value;},
        set: (value)=>{Object.prototype.value = value},
    });
    return property;
};

const createProtoMagicObject = () => {
    return Function;
};

let inc = 0;
const incrementor = () => {
    inc++
    incrementor.valueOf  = ()=>{
        return inc;
    }
    return incrementor;
};

let inc2 = 0;
const asyncIncrementor = () => {
    // inc2++;
    // incrementor.valueOf = () =>{
    //     return inc2;
    // }
    // return incrementor
    return new Promise((resolve) => {
		resolve(++inc2);
	})
};

let value = 0;
const createIncrementer = () => {
    return {
        next() {
            return {
                value: ++value
            }
        },
        [Symbol.iterator]() {
            return {
                next() {
                    return {
                        value: ++value
                    };
                }
            }
        }
    };
};

// return same argument not earlier than in one second, and not later, than in two
const returnBackInSecond = (param) => {
    return new Promise((resolve) => {
        setTimeout(()=>{
            resolve(param);
        }, 1000)
    })
};

const getDeepPropertiesCount = () => {};

const createSerializedObject = () => {
    return null;
};

const toBuffer = () => {};

const sortByProto = (array) => {
    return array.sort((a,b) => {
        return a.__proto__ - b.__proto__;
    })
};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;
const _ = require('loadsh');

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items); // Example of using npm lodash module
console.log(newItems);

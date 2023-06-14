module.exports.items=['item1','item2']

const person={
    name:'bob',
}

module.exports.singlePerson=person

const lodash=require('lodash')

const items=[1,[2,[3,[4]]]]
const newItem=lodash.flattenDeep(items)
console.log(newItem) 
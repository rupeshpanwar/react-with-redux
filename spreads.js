const arr1 = [1, 2, 3, 4];
const arr2 = [5, 6, 7, 8, 9]

const arr3 = [...arr1, ...arr2]

console.log('arr3', arr3);

const arr4 = [arr1, arr2]
console.log('arr4', arr4)

arr3.push(10)

console.log('arr3', arr3)


//object spreading

const userOne = {
    name: 'john doe',
    age: 22,
    city: 'new jersy',
    country: 'USA'
}

const userTwo = { ...userOne }

console.log('userOne', userOne)
console.log('userTwo', userTwo)

const user3 = { ...userOne, name: 'Jane', gender: 'female' }
console.log('user3', user3)
console.log('user1', userOne)
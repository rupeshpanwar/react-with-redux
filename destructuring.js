const user = {
    name: 'Rupee',
    age: 39,
    town: 'Ailum',
    country: 'India'
}

const name = user.name
const town = user.town

console.log('name', name)
console.log('town', town)

//destructuring
const { name: Uname, town: Utown, country: Ucountry } = user
console.log('*****destructuring*****')
console.log('name', Uname)
console.log('town', Utown)
console.log('country', Ucountry)


//array destructuring
const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

const [one, two, three, four, five, six, seven] = numArr

console.log('array', one, two, three, four, five, six)

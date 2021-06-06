// async await work with promise
//await is appplied only if function is returning a promise
// Or function should be a async function 
//async function returns promise so we can apply then 

const sendMessage = (message) => {
    return new Promise(function (resolve, reject) {
        setTimeout(() =>
            resolve(message)
            , 3000)
    })
}

//another way to call is make async function itself
const sendGreetings = async (message) => {
    return message
}

const callFunction = async () => {
    try {
        let result = ''
        result = await sendMessage('hello')
        console.log(result)
        result = await sendMessage('there')
        console.log(result)
        result = await sendGreetings('Namaste')
        console.log(result)
    } catch (error) {
        console.log('error', error)
    }

}

callFunction()
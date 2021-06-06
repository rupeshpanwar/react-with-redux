const displayMessage = (message) => {
    return new Promise((resolve, reject) => {
        setTimeout(() =>
            resolve(message)
            , 3000)
    })
}

//promise
displayMessage('Hellow orld').then(result => {
    console.log(result)
    displayMessage('new promises').then(result1 => {
        console.log(result1)
        displayMessage('will be fulfilled').then(result2 => {
            console.log(result2)
        }).catch(err => {
            console.log('error', error)
        })
    }).catch(err => {
        console.log('error', err)
    })
}).catch(err => {
    console.log('error', err);
})
fetch('https://url', {
    method: 'POST',
    headers:{
        'content-Type' : 'application/json'
    },

    body: JSON.stringify({
        name: 'User 1'
    })
})
.then(res => {
    if (res.ok) {
        console.log('success')
    } else {
        console.log("not succesful")
    }
    res.json()
})
.then(data => console.log(data))
.catch(error => console.log('ERROR'))
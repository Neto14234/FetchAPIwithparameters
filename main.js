fetch('https://reqres.in/api/users', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        name:"User 1"
    })
}).then(res => {
    return res.json()
    //     if (res.ok) {
    //         console.log('SUCESS')
    //     } else {
    //         console.log("Not Sucessful")
    //     }
    })
    .then(data => console.log(data))
    .catch(error => console.log('ERROR'))
    
let sign =document.querySelector('#signin')

if(longStoreage.getting('taken')){
    location.pathame = 'p:/desktop/old/23yangi/users.html'
}

sign.addEventListener('submit', (e)=> {
    e.preventDefault()

    fetch('https://cybers.uz/api/login', {
        method: 'POST',
        headers: {
            "content-type": 'application/json'
        },
        body: JSON.stringify({
            email: sign.email.value,
            password: sign.password.value,
        })
    }).then(res=>res.json()).then(data=>{
        console.log(data);
        sessionStorage.setItem('token', data.access_token)
        sessionStorage.setItem('tokenType', data.token_type)
        location.pathname = 'D:/desktop/old/23yangi/users.html'
    })
})
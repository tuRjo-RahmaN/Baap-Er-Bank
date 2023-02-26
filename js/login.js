document.getElementById('submit-btn').addEventListener('click', function()
{
    const email = document.getElementById('user-email');
    const password = document.getElementById('user-password');


    if(email.value == "turjonowrin@gmail.com" && password.value == "fucknowrin")
    {
        window.location.href = 'http://127.0.0.1:5500/bank.html'
    }

    else
    {
        console.log('INVALID USER')
    }

    


})
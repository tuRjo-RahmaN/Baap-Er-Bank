document.getElementById('submit-btn').addEventListener('click', function()
{
    const email = document.getElementById('user-email');
    const password = document.getElementById('user-password');


    if(email.value == "turjorahman@gmail.com" && password.value == "87654321")
    {
        window.location.href = 'http://127.0.0.1:5500/bank.html'
    }

    else
    {
        alert('INVALID USER');
        email.value = "";
        password.value = "";
    }

    


})
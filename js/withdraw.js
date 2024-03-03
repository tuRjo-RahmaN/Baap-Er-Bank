document.getElementById('btn-withdraw').addEventListener('click', function()
{
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawField = withdrawField.value;

    const prevTotalWithdraw = document.getElementById('total-withdraw')
    const prevTotalBalance = document.getElementById('total-balance');

    withdrawField.value = "";

    if(isNaN(parseFloat(newWithdrawField)))
    {
        alert('Please enter a valid number');
        return;
    }

    if(newWithdrawField > parseFloat(prevTotalBalance.innerText))
    {
        alert("Ar taka naaai Bank e !!");
        return;
    }

    const newTotalwithdraw = parseFloat(prevTotalWithdraw.innerText) + parseFloat(newWithdrawField);

    const newTotalBalance = parseFloat(prevTotalBalance.innerText) - parseFloat(newWithdrawField); 

    prevTotalWithdraw.innerText = newTotalwithdraw;
    prevTotalBalance.innerText = newTotalBalance;
})
document.getElementById('btn-withdraw').addEventListener('click', function()
{
    const withdrawField = document.getElementById('withdraw-field');
    const prevTotalWithdraw = document.getElementById('total-withdraw')
    const prevTotalBalance = document.getElementById('total-balance');

    const newTotalwithdraw = parseFloat(prevTotalWithdraw.innerText) + parseFloat(withdrawField.value);

    const newTotalBalance = parseFloat(prevTotalBalance.innerText) - parseFloat(withdrawField.value); 

    prevTotalWithdraw.innerText = newTotalwithdraw;
    prevTotalBalance.innerText = newTotalBalance;
    withdrawField.value = "";
})
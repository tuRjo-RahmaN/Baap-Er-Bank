document.getElementById('btn-deposit').addEventListener('click', function()
{
    const depositeField = document.getElementById('deposite-field');
    const prevTotalDeposit = document.getElementById('total-deposit');
    const prevTotalBalance = document.getElementById('total-balance');

    const newTotalDeposite = parseFloat(prevTotalDeposit.innerText) + parseFloat(depositeField.value);
 
    const newTotalBalance = parseFloat(prevTotalBalance.innerText) + parseFloat(depositeField.value);

    prevTotalDeposit.innerText = newTotalDeposite;
    prevTotalBalance.innerText = newTotalBalance;
    depositeField.value = "";
})
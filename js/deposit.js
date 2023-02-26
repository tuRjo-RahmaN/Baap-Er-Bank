document.getElementById('btn-deposit').addEventListener('click', function()
{
    const depositeField = document.getElementById('deposite-field');
    const newDepositeField = depositeField.value;

    const prevTotalDeposit = document.getElementById('total-deposit');
    const prevTotalBalance = document.getElementById('total-balance');

    depositeField.value = "";

    if(isNaN(parseFloat(newDepositeField)))
    {
        alert('Please enter a valid number');
        return;
    }

    const newTotalDeposite = parseFloat(prevTotalDeposit.innerText) + parseFloat(newDepositeField);
 
    const newTotalBalance = parseFloat(prevTotalBalance.innerText) + parseFloat(newDepositeField);

    prevTotalDeposit.innerText = newTotalDeposite;
    prevTotalBalance.innerText = newTotalBalance;
})
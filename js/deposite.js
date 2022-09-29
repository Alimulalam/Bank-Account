document.getElementById('deposit-btn').addEventListener('click', function () {
    // deposite
    const newDepositTotal = getInputValueById('new-deposit');
    const previousDepositeTotal = getTextValueById('deposit');
    // balance

    const previousBalanceTotal = getTextValueById('balance');

    if (isNaN(newDepositTotal) || newDepositTotal <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
        return;
    }
    const totalDeposite = newDepositTotal + previousDepositeTotal;
    setValue('deposit', totalDeposite);

    const totalBalance = previousBalanceTotal + newDepositTotal;
    setValue('balance', totalBalance);

})
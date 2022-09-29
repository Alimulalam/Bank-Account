document.getElementById('withdraw-btn').addEventListener('click', function () {
    const newWithdrawAmount = getInputValueById('new-withdraw');
    const previousWithdrawAmount = getTextValueById('withdraw');

    const previousBalanceTotal = getTextValueById('balance');

    if (isNaN(newWithdrawAmount) || newWithdrawAmount <= 0 || newWithdrawAmount > previousBalanceTotal) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Something went wrong!',
            footer: '<a href="">Why do I have this issue?</a>'
        })
        return;
    }
    const netWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setValue('withdraw', netWithdrawTotal);

    const newBalance = previousBalanceTotal - newWithdrawAmount;
    setValue('balance', newBalance);
})
document.getElementById('btn-donation-1')
    .addEventListener('click', function(){
        const inputFieldValue = parseFloat(getInputFieldValueById('donation-amount-1'));
        const textFieldValue = parseFloat(getTextFieldValueById('total-donation-amount-1'));
        const mainBalance = parseFloat(getTextFieldValueById('main-balance'));
        
        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-1').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;
    });

document.getElementById('btn-donation-2')
    .addEventListener('click', function(){
        const inputFieldValue = parseFloat(getInputFieldValueById('donation-amount-2'));
        const textFieldValue = parseFloat(getTextFieldValueById('total-donation-amount-2'));
        const mainBalance = parseFloat(getTextFieldValueById('main-balance'));
        
        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-2').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;
    });

document.getElementById('btn-donation-3')
    .addEventListener('click', function(){
        const inputFieldValue = parseFloat(getInputFieldValueById('donation-amount-3'));
        const textFieldValue = parseFloat(getTextFieldValueById('total-donation-amount-3'));
        const mainBalance = parseFloat(getTextFieldValueById('main-balance'));
        
        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-3').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;
    });
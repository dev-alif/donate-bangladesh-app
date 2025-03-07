// donation button 1
document.getElementById('btn-donation-1')
    .addEventListener('click', function () {
        const inputFieldValue = parseFloat(getInputFieldValueById('donation-amount-1'));
        const textFieldValue = parseFloat(getTextFieldValueById('total-donation-amount-1'));
        const mainBalance = parseFloat(getTextFieldValueById('main-balance'));

        if (inputFieldValue > mainBalance) {
            alert('Insufficient Balance');
            return;
        }

        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-1').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        const donationTitle = getTextFieldValueById('donation-title-1');
        const time = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <h3>${inputFieldValue} Taka is Donated for ${donationTitle}</h3>
                <p>Date: ${time}</p>
            </div>
        `;

        document.getElementById('history-container').appendChild(div);
    });

// donation button 2
document.getElementById('btn-donation-2')
    .addEventListener('click', function () {
        const inputFieldValue = parseFloat(getInputFieldValueById('donation-amount-2'));
        const textFieldValue = parseFloat(getTextFieldValueById('total-donation-amount-2'));
        const mainBalance = parseFloat(getTextFieldValueById('main-balance'));

        if (inputFieldValue > mainBalance) {
            alert('Insufficient Balance');
            return;
        }

        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-2').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        const donationTitle = getTextFieldValueById('donation-title-2');
        const time = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <h3>${inputFieldValue} Taka is Donated for ${donationTitle}</h3>
                <p>Date: ${time}</p>
            </div>
        `;

        document.getElementById('history-container').appendChild(div);
    });

// donation button 3
document.getElementById('btn-donation-3')
    .addEventListener('click', function () {
        const inputFieldValue = parseFloat(getInputFieldValueById('donation-amount-3'));
        const textFieldValue = parseFloat(getTextFieldValueById('total-donation-amount-3'));
        const mainBalance = parseFloat(getTextFieldValueById('main-balance'));

        if (inputFieldValue > mainBalance) {
            alert('Insufficient Balance');
            return;
        }

        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-3').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        const donationTitle = getTextFieldValueById('donation-title-3');
        const time = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div>
                <h3>${inputFieldValue} Taka is Donated for ${donationTitle}</h3>
                <p>Date: ${time}</p>
            </div>
        `;

        document.getElementById('history-container').appendChild(div);
    });

document.getElementById('btn-donate').addEventListener('click', function(){
    showSection('donations-section');
});

document.getElementById('btn-history').addEventListener('click', function(){
    showSection('history-section');
});



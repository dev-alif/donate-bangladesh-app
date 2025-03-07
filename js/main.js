// donation button 1
document.getElementById('btn-donation-1')
    .addEventListener('click', function () {
        const inputFieldValue = parseFloat(getInputFieldValueById('donation-amount-1'));
        const textFieldValue = parseFloat(getTextFieldValueById('total-donation-amount-1'));
        const mainBalance = parseFloat(getTextFieldValueById('main-balance'));

        if (isNaN(inputFieldValue)) {
            alert('Please enter correct number.');
            return;
        }

        if (inputFieldValue < 0) {
            alert('Please enter positive number.');
            return;
        }

        if (inputFieldValue > mainBalance) {
            alert('Insufficient Balance.');
            return;
        }

        document.getElementById('my_modal_5').showModal();

        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-1').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        const donationTitle = getTextFieldValueById('donation-title-1');
        const time = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-[#F3F3F3] rounded-xl p-8 space-y-4">
                <h3 class="font-bold">${inputFieldValue} Taka is Donated for ${donationTitle}</h3>
                <p class="text-gray-500">Date: ${time}</p>
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

        if (isNaN(inputFieldValue)) {
            alert('Please enter correct number.');
            return;
        }

        if (inputFieldValue < 0) {
            alert('Please enter positive number.');
            return;
        }

        if (inputFieldValue > mainBalance) {
            alert('Insufficient Balance.');
            return;
        }

        document.getElementById('my_modal_5').showModal();

        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-2').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        const donationTitle = getTextFieldValueById('donation-title-2');
        const time = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-[#F3F3F3] rounded-xl p-8 space-y-4">
                <h3 class="font-bold">${inputFieldValue} Taka is Donated for ${donationTitle}</h3>
                <p class="text-gray-500">Date: ${time}</p>
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

        if (isNaN(inputFieldValue)) {
            alert('Please enter correct number.');
            return;
        }

        if (inputFieldValue < 0) {
            alert('Please enter positive number.');
            return;
        }

        if (inputFieldValue > mainBalance) {
            alert('Insufficient Balance.');
            return;
        }

        document.getElementById('my_modal_5').showModal();

        const newDonationBalance = textFieldValue + inputFieldValue;
        const newMainBalance = mainBalance - inputFieldValue;

        document.getElementById('total-donation-amount-3').innerText = newDonationBalance;
        document.getElementById('main-balance').innerText = newMainBalance;

        const donationTitle = getTextFieldValueById('donation-title-3');
        const time = new Date();

        const div = document.createElement('div');
        div.innerHTML = `
            <div class="border border-[#F3F3F3] rounded-xl p-8 space-y-4">
                <h3 class="font-bold">${inputFieldValue} Taka is Donated for ${donationTitle}</h3>
                <p class="text-gray-500">Date: ${time}</p>
            </div>
        `;

        document.getElementById('history-container').appendChild(div);
    });


// section buttons
document.getElementById('btn-donate').addEventListener('click', function () {
    showSection('donations-section');

    document.getElementById('btn-donate').classList.add('bg-[#B4F461]');
    document.getElementById('btn-history').classList.remove('bg-[#B4F461]');
});

document.getElementById('btn-history').addEventListener('click', function () {
    showSection('history-section');

    document.getElementById('btn-history').classList.add('bg-[#B4F461]');
    document.getElementById('btn-donate').classList.remove('bg-[#B4F461]');
});



function getInputFieldValueById(id) {
    const inputFieldValue = document.getElementById(id).value;
    return inputFieldValue;
}

function getTextFieldValueById(id) {
    const textFieldValue = document.getElementById(id).innerText;
    return textFieldValue;
}

function showSection(id){
    document.getElementById('donations-section').classList.add('hidden');
    document.getElementById('history-section').classList.add('hidden');

    document.getElementById(id).classList.remove('hidden');
}
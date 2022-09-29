//get value in input field

function getInputValueById(inputId) {
    const inputIdValue = document.getElementById(inputId);
    const inputAmount = parseFloat(inputIdValue.value);
    inputIdValue.value = '';
    return inputAmount;
}

//get value in text field 
function getTextValueById(textId) {
    const textValueId = document.getElementById(textId);
    const textAmount = parseFloat(textValueId.innerText);
    return textAmount;
}

//Set value
function setValue(textId, value) {
    const setTextValue = document.getElementById(textId);
    setTextValue.innerText = value;
}
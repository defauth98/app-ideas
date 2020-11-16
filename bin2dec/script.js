const html = {
  decimalInput: document.querySelector('#decimal-input'),
  result: document.querySelector('#decimal-number'),
};

function removeLastElementOfArray(string) {
  const popedDecimalValue = string.split('');

  popedDecimalValue.pop();

  return popedDecimalValue.join('');
}

function validadeValue(value) {
  const valueArray = value.split('');

  const lastElement = valueArray.pop();

  if (lastElement !== '0' && lastElement !== '1') {
    return false;
  } else {
    return true;
  }
}

function convertBinaryToDecimal(binaryNumber) {
  let sum = 0;
  const binaryArray = binaryNumber.split('');

  for (let i = 0; i <= binaryArray.length - 1; i++) {
    const position = binaryArray.length - i - 1;

    const currentNumber = binaryArray[i];

    const power = Math.pow(2, position);

    sum += currentNumber * power;
  }

  return sum;
}

function convertToDecimal() {
  const inputIsValue = validadeValue(html.decimalInput.value);

  if (!inputIsValue) {
    alert('Você inseriu um valor diferente de 0 ou 1');

    html.decimalInput.value = removeLastElementOfArray(html.decimalInput.value);

    return;
  }

  html.result.innerText = convertBinaryToDecimal(html.decimalInput.value);
}

html.decimalInput.addEventListener('input', convertToDecimal);

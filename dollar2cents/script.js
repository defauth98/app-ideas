const html = {
  dollar: document.querySelector('#dollar'),
  result: document.querySelector('#result'),
};

// 50 = half
// 25 = quarter
// 10 = dime
// 5 = nickel
// 1 = penny

function convertDollarInCoins(cents) {
  let half,
    quarter,
    dime,
    nickel,
    penny,
    totalCents = cents;

  half = Math.floor(cents / 50);

  totalCents = totalCents % 50;

  quarter = Math.floor(totalCents / 25);

  totalCents = totalCents % 25;

  dime = Math.floor(totalCents / 10);

  totalCents = totalCents % 10;

  nickel = Math.floor(totalCents / 5);

  totalCents = totalCents % 5;

  penny = totalCents;

  return { half, quarter, dime, nickel, penny };
}

function convertDollarToCents() {
  const dollar = html.dollar.value;
  const cents = Math.floor(dollar * 100);

  const { half, quarter, dime, nickel, penny } = convertDollarInCoins(cents);

  html.result.innerHTML = `<br/> ${dollar}$ <br/> ${cents} cents <br/> <br/> ${half} half<br/> ${quarter} quarter<br/> ${dime} dime  <br/> ${nickel} nickel<br/> ${penny} penny`;
}

html.dollar.addEventListener('input', convertDollarToCents);

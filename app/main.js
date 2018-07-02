// Set url for the api.
const converterURL = 'https://free.currencyconverterapi.com/api/v5/currencies';

// Get ids of select dropdown for currency from and currency to.
const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
let convertButton = document.getElementById('convertButton');

// Fetch data from the api.
fetch(converterURL).then(response => {
  let currencyCode, option;
  // If api returned any status other than ok, inform user
  if (response.status !== 200) {
    return window.alert('Error with the request. Kindly try again.');
  }
  response.json().then(currencies => {
    for (let currency in currencies.results) {
      // currencyName = currencies.results[currency].currencyName;
      currencyCode = currencies.results[currency].id;
      // console.log(currencyName, currencyCode);
      option = document.createElement('option');
      option.innerText = `${currencyCode}`;
      option.id = currencyCode;
      currencyFrom.appendChild(option.cloneNode(true));
      currencyTo.appendChild(option);
    }
  })
});

convertButton.addEventListener('click', e => {
// $('#convertButton').on('click', () => {
  e.preventDefault();
  const fromCurrency = document.getElementById('currencyFrom').value;
  const toCurrency = document.getElementById('currencyTo').value;
  const amount = document.getElementById('amount').value;
  const result = document.getElementById('convertedAmount');
  const currencyIDsToConvert = fromCurrency + '_' + toCurrency;
  const queryUrl = 'https://free.currencyconverterapi.com/api/v5/convert?q=' + currencyIDsToConvert + '&compact=y';

  fetch(queryUrl).then(response => {
    response.json().then(rates => {
      for(let rate in rates) {
        let value = rates[rate].val;
      let total = Number(amount) * value;
      total = Math.round(total * 100) /100;
      result.value = `${total}`;
      }
    })
  })
})


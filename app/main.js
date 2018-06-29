// window.addEventListener('load',() => {
  // Set url for the api.
const converterURL = 'https://free.currencyconverterapi.com/api/v5/currencies';

// Get ids of select dropdown for currency from and currency to.
const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
const convertButton = document.getElementById('convertButton');
// console.log(currencyFrom);

// Fetch data from the api.
fetch(converterURL).then(response => {
  let currencyName, currencyCode, option;
  // If api returned any status other than ok, inform user
  if (response.status !== 200) {
    return window.alert('Error with the request. Kindly try again.');
  }
  response.json().then(currencies => {
    for (let currency in currencies.results) {
      currencyName = currencies.results[currency].currencyName;
      currencyCode = currencies.results[currency].id;
      // console.log(currencyName, currencyCode);
      option = document.createElement('option');
      option.innerText = `${currencyCode} - ${currencyName}`;
      option.id = currencyCode;
      currencyFrom.appendChild(option.cloneNode(true));
      currencyTo.appendChild(option);
    }
  })
});

// On button click, send currency IDs selected to request for currency rate.
convertButton.addEventListener('click', function() {
  const currencyFrom = document.getElementById('currencyFrom');
  console.log(currencyFrom);
})

// })


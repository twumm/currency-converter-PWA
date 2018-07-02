// Set url for the api.
const converterURL = 'https://free.currencyconverterapi.com/api/v5/currencies';

// Get ids of select dropdown for currency from and currency to.
const currencyFrom = document.getElementById('currencyFrom');
const currencyTo = document.getElementById('currencyTo');
let convertButton = document.getElementById('convertButton');

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


// let result = document.getElementById('convertedAmount');

/*let convertCurrency = () => {
    let fromCurrency = document.getElementById('currencyFrom').value;
    let toCurrency = document.getElementById('currencyTo').value;
    let amount = document.getElementById('amount').value;
    let result = document.getElementById('convertedAmount');
   

    let query = fromCurrency + '_' + toCurrency;
    let url = 'https://www.currencyconverterapi.com/api/v5/convert?q=' + query + '&compact=y';
    fetch(url)
        .then((response) => {
            response.json()
        }).then((data) => {
            console.log(data)
            let val = data[query].val;
            console.log(val);
            console.log(amount);
            console.log('something here');

            if (val != undefined) {
                let total = parseFloat(val) * parseFloat(amount);
                result.innerHTML = total;
                console.log(result);
            } 

        })
}*/

/*convertButton.addEventListener('click', () => {
  let fromCurrency = document.getElementById('currencyFrom').value;
  let toCurrency = document.getElementById('currencyTo').value;
  // console.log(fromCurrency, toCurrency);
  result.innerText = 'Awesome'
  document.addEventListener('DOMContentLoaded', function() {
    console.log(fromCurrency, toCurrency);
  })
})*/

convertButton.addEventListener('click', () => {
// $('#convertButton').on('click', () => {
  const fromCurrency = document.getElementById('currencyFrom').value;
  const toCurrency = document.getElementById('currencyTo').value;
  const amount = document.getElementById('amount').value;
  const result = document.getElementById('convertedAmount');
  const currencyIDsToConvert = fromCurrency + '_' + toCurrency;
  const queryUrl = 'https://www.currencyconverterapi.com/api/v5/convert?q=' + currencyIDsToConvert + '&compact=y';

  fetch(queryUrl).then(response => {
    response.json().then(rates => {
      console.log(rates);
      for(let rate in rates) {
        console.log(rate);
        let value = rates[rate].val;
      let total = Number(amount) * value;
      result.val(Math.round(total * 100) /100);
      }
    })
  })
})


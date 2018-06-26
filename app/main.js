// Set url for the api.
const url = 'https://free.currencyconverterapi.com/api/v5/currencies';
// Fetch data from the api.
fetch(url)
  .then(response => {
    // If api returned any status other than ok, inform user
    if (response.status !== 200) {
      return window.alert('Error with the request. Kindly try again.');
    }
    response.json().then(currencies => {
      for (let currency in currencies) {
        console.log(currencies)
        for (let id in currencies[currency]) {
          console.log(id);
        }
      }
    })
  })

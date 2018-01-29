const axios = require('axios')
var data = [];
axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=5').then((response) =>  {
  console.log(response.data[1].symbol);
  // for(var i = 0; i < response.data.length; i++) {
  //   data.push(response.data[i].symbol)
  // }
  response.data.forEach((e) => console.log(e.symbol))
  console.log(data);
})

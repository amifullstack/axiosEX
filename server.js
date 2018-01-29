const axios = require('axios')
const mongoose = require('mongoose')
const dbConfig = require('./config/db.config')

mongoose.connect(dbConfig.url)

// Schema/Model
const Symbol = mongoose.model('Symbol', {Symbol: String})

var data = [];

axios.get('https://api.coinmarketcap.com/v1/ticker/?limit=5').then((response) =>  {
  // console.log(response.data[1].symbol);
  // for(var i = 0; i < response.data.length; i++) {
  //   data.push(response.data[i].symbol)
  // }
  response.data.forEach((e) => {
    data.push(e.symbol)
  })
  console.log(data[0]);
  const allSymbols =  new Symbol({Symbol: data[0]})

  // Save to DB
  allSymbols.save().then(() => console.log('Saved'))
})

'use strict';

require('dotenv').config();
const ccxt = require('ccxt');

(async () => {
  const bitflyer = new ccxt.bitflyer({
    apiKey: process.env.BITFLYER_API_KEY,
    secret: process.env.BITFLYER_API_SECRET,
  });

  // console.log(bitflyer.id, await bitflyer.loadMarkets());
  // console.log(bitflyer.id, await bitflyer.fetchTicker('BTC/JPY'));
  console.log(bitflyer.id, await bitflyer.fetchBalance());
  // console.log(bitflyer.id, await bitflyer.createMarketSellOrder('BTC/USD', 1));
  // console.log(
  //   bitflyer.id,
  //   await bitflyer.createLimitBuyOrder('BTC/USD', 1, 2500.0)
  // );
})();

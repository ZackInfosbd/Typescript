// // Max Profit

// const maxProfit = (prices: number[]) => {
//   let minPrice = prices[0];
//   let maxProfit = 0;

//   for (let i = 1; i < prices.length; i++) {
//     const currentPrice = prices[i];

//     // Update minimum price if the lower price is found
//     minPrice = Math.min(minPrice, currentPrice);

//     const potentialProfit = currentPrice - minPrice;

//     maxProfit = Math.max(maxProfit, potentialProfit);

//     console.log(maxProfit);
//   }

//   return maxProfit;
// };

// const prices = [7, 1, 5, 3, 6, 4];

// const profit = maxProfit(prices);

// console.log('maximum profit: ', profit);

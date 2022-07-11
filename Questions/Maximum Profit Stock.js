// Maximum Profit Stock
// Problem – Given an array denoting the cost of stock on different days. Your task is to find the
// maximum profit which can be earned after buying or selling the stock on that particular day. For
// example –
// Input –
// Output – 865 (Buy stock on Day 0 and sell it on Day 3 and again buy on Day 4 and sell on Day 6)

let days = [100,180,260,20,40,535,695];

function MostProfitableStonks(stonks) {
    let maxProfit = 0;
    for(let i = 0; i < stonks.length; i++) {
        if(stonks[i] < stonks[i+1]) {
            maxProfit += stonks[i+1] - stonks[i];
        }
        if(stonks[i] > stonks[i+1]) {
            continue;
        }
    }
    return maxProfit;
}

console.log(MostProfitableStonks(days));
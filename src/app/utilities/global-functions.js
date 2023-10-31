export default function (timeSeries) {
    let data = [], stock;
    for (var each in timeSeries) {
        stock = timeSeries[each];

        data.push([
            new Date(each).getTime(),
            parseFloat(stock["1. open"]),
            parseFloat(stock["2. high"]),
            parseFloat(stock["3. low"]),
            parseFloat(stock["4. close"])
        ]);
    }
    return data.reverse();
}
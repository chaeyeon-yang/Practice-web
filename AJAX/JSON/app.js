// THIS IS A STRING OF JSON
const data = `{"ticker":{"base":"BTC","target":"USD","price":"11288.49813464","volume":"91769.69699773","change":"-46.29462447"},"timestamp":1596510482,"success":true,"error":""}`;
const parsedData = JSON.parse(data);
console.log(parsedData.ticker);
console.log(parsedData.ticker.price);

const dog = {
    breed: "lab",
    color: "black",
    isAlive: true,
    owner: undefined,
};
console.log(JSON.stringify(dog));
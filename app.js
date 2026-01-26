
const data = [
{ name: "Bitcoin", ticker: "BTC", price: 9685, change: 2.83 },
{ name: "Ethereum", ticker: "ETH", price: 210.5, change: 6.17 },
{ name: "Ripple", ticker: "XRP", price: 0.2812, change: -2.47 },
{ name: "Litecoin", ticker: "LTC", price: 74.935, change: 4.25 },
{ name: "Sitecoin", ticker: "LTC", price: 74.585, change: 3.25 },
{ name: "Mitecoin", ticker: "LTC", price: 74.565, change: -2.25 },
{ name: "Yitecoin", ticker: "LTC", price: 75.935, change: 4.25 },
{ name: "Tezos", ticker: "XTZ", price: 2.1247, change: -6.12 }
];

const container = document.getElementById("app");


const table = document.createElement("table");


table.innerHTML = `
  <thead>
    <tr>
      <th>Name</th>
      <th>Ticker</th>
      <th>Price</th>
      <th>24h Change</th>
    </tr>
  </thead>
`;

const tbody = document.createElement("tbody");

data.forEach(item => {
  const tr = document.createElement("tr");

  const changeClass = item.change >= 0 ? "positive" : "negative";

  tr.innerHTML = `
    <td>${item.name}</td>
    <td>${item.ticker}</td>
    <td>${item.price}</td>
    <td class="${changeClass}">
      ${item.change}%
    </td>
  `;

  tbody.appendChild(tr);
});

table.appendChild(tbody);
container.appendChild(table);
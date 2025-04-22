let items = [
  { name: "laptop", price: 1200, category: "non-essential" },
  { name: "phone", price: 900, category: "essential" },
  { name: "sim-card", price: 1200, category: "non-essential" },
];

let budget = 1000;

function canBuy(item, budget) {
  if (item.price <= budget) {
    return `you can buy ${item.name}.`;
  } else {
    if (item.category === "non-essential") {
      return `you cannot afford ${item.name}.maybe skip a non-essential item.`;
    } else {
      return `you cannot affort ${item.name}.`;
    }
  }
}

console.log(canBuy(items[0], budget));
console.log(canBuy(items[1], budget));
console.log(canBuy(items[2], budget));


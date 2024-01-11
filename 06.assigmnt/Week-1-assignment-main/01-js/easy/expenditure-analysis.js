/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]

  Once you've implemented the logic, test your code by running
  - `npm run test-expenditure-analysis`
*/

function calculateTotalSpentByCategory(transactions) {
  categorytotal=[]
  transactions.forEach(transactions => {
  const {category,price} = transactions

  if(!categorytotal[category]){
    categorytotal[category]=price
    
  }else{
    categorytotal[category]+=price

}    
});
  return categorytotal;
}
const transactions = [
  {
    itemName: "Item1",
    category: "Groceries",
    price: 50,
    timestamp: Date.now(),
  },
  {
    itemName: "Item2",
    category: "Groceries",
    price: 50,
    timestamp: Date.now(),
  },
  {
    itemName: "Item1",
    category: "Groceries",
    price: 50,
    timestamp: Date.now(),
  },
  {
    itemName: "Item1",
    category: "Groceries",
    price: 50,
    timestamp: Date.now(),
  },
  {
    itemName: "Item1",
    category: "Groceries",
    price: 50,
    timestamp: Date.now(),
  },
  {
    itemName: "Item2",
    category: "Groceries",
    price: 30,
    timestamp: Date.now(),
  },
  {
    itemName: "Item3",
    category: "Electronics",
    price: 100,
    timestamp: Date.now(),
  },
  {
    category:"Fruits",
    price:200,
  },
  {
    category:"Fruits",
    price:200,
  }
  // Add more transactions as needed
];
console.log(calculateTotalSpentByCategory(transactions))

module.exports = calculateTotalSpentByCategory;

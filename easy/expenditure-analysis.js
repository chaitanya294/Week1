/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/
function calculateTotalSpentByCategory(transactions) {
    let ans = [];
    let Map1 = new Map();
    for(const it of transactions) {
        if(Map1.has(it.category) == true){
            Map1.set(it.category, Map1.get(it.category) + it.price);
        }
        else{
            Map1.set(it.category, it.price);
        }   
    }
    for(let [key, value] of Map1){
        let obj = {
            category : key,
            totalSpent : value,
        }
        ans.push(obj);
    }
    return ans;
}        
module.exports = calculateTotalSpentByCategory;


// Notes of Javascript 
    // -------- NOTES ON MAPS ----------------
// 1. set to place an element Map['key'] doesnt work well NaN
// 2. get to retrieve a value of a particular key
// 3. has for checking if a key is present or not ??

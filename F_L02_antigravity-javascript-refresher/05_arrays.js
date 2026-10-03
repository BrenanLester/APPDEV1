let favoriteFoods = ["Tinola", "Fried Chicken", "Spaghetti"];
favoriteFoods.push("BBQ");
favoriteFoods.reverse();
favoriteFoods.shift();

for (let food of favoriteFoods) {
    console.log(food);
}

let likedFoods = favoriteFoods.map(food => "I like " + food);

console.log(likedFoods);
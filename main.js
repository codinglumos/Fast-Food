const rawIngredients = [ "beef patty", "egg", "potato", "egg", "potato", "beef patty", "beef patty", "potato" ]
const finishedFood = []

for (const ingredient of rawIngredients) {
	if (ingredient === "egg") {
        finishedFood.push("biscuit")
    }

    else if (ingredient === "beef patty") {
        finishedFood.push("burger")
    }

    else if (ingredient === "potato") {
        finishedFood.push("fries")
    }
    
    /*
		Write your if/else code here. In each block use .push() to insert
		the correct string into the finishedFood array.
	*/
}
console.log(finishedFood)

//the for statement assigns each item in the array to the word ingredient. SO each incredient is in the rawincredients
//then there are if statements to determine which food is made with them
//if I have an egg I can make a biscuit, beef patty-burger, etc.
//I pushed all the finished items into the open finished foods array
//then you console.log to print the finished products made with your incredients.
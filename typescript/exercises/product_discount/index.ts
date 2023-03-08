/*
    3- Task: Create a Function to Determine the Discount Amount for a Product
    
    Breakdown:

•	Create a function that takes a product price and a discount percentage as input and 
    calculates the discount amount for the product using the formula: discount amount = product price * (discount percentage / 100).
•	If the discount percentage is greater than or equal to 50%, the function should return an 
    error message indicating that the discount percentage is invalid.
•	Display the original price, discount percentage, discount amount, and final price of the 
    product to the user as output.
•	Test the function with different product prices and discount percentages.

*/

let price: number = 20000;
let discount: number = 5;

const productDiscount = (productPrice: number, discountPercentage = 10): number|string => {
    let discountAmount = productPrice * (discountPercentage / 100)
    let finalPrice = productPrice - discountAmount;
    let error: string = "";

    if(discountPercentage >= 50) {
        return error = "Discount percent is invalid!"
    }
    console.log("Orginal Price: ", productPrice);
    console.log("Discount Percentage: ", discountPercentage);
    console.log("Discount Amount: ", discountAmount);
    console.log("\n");
    return  `Final Price: ${finalPrice}`;
}

console.log(productDiscount(price, discount));
//   If-Else Statements

// let age = prompt("Your age")
// if(age >= 18)
// {
//     console.log("You are an adult");
// }
// else{
//     console.log("You are a minor");
    
// }

// let num = prompt("Write a number")
// if(num > 0)
// {
//     console.log("Positive number");
    
// }
// else{
//     console.log("Not positive");
    
// }

// let num = prompt("Write a number")
// if(num %2 === 0)
// {
//     console.log("Even number");
    
// }
// else{
//     console.log("Odd number");
    
// }

// let username = prompt("What's your name?")
// if(username === "admin")
// {
//     alert("Welcome admin!")
    
// }
// else{
//     alert("Access denied.")
// }

// let num1 = prompt("1st number")
// let num2 = prompt("2nd number")
// if(num1 === num2)
// {
//     console.log("Both numbers are the same");
    
// }
// else{
//     console.log("The numbers are different");
    
// }

// let num1 = prompt("1st number")
// let num2 = prompt("2nd number")
// if(num1 > num2)
// {
//     alert("First is larger")
// }
// else{
//     alert("Second is larger")
// }

// let num = prompt("Write a number")
// if(num > 100)
// {
//     alert("Too big!")
// }
// else{
//     alert("Within range")
// }

// let score = prompt("What's your score?")
// if(score >= 50)
// {
//     console.log("You passed!");
    
// }
// else{
//     console.log("You failed.");
    
// }

// let temperature = prompt("Write a temperature")
// if(temperature > 30)
// {
//     alert("Its hot!")
// }
// else{
//     alert("It's not hot.")
// }

// let num = prompt("Enter a number")
// if(num == 0)
// {
//     alert("Zero")
// }
// else{
//     alert("Not zero")
// }

// let age = prompt("Write your age")
// if( age >= 60)
// {
//     console.log("You are a senior citizen.");
    
// }
// else{
//     console.log("You are not a senior.");
    
// }

// let name = prompt("Enter your name")
// if(num === "Alice")
// {
//     alert("Hi, Alice!")
// }
// else{
//     alert("You are not Alice!")
// }

// let password = prompt("Write a password")
// if(password == 12345)
// {
//     console.log("Correct password");
    
// }
// else{
//     console.log("Wrong password");
    
// }

// let hour = prompt("Enter the current hour (0-23)")
// if(hour < 12)
// {
//     alert("Good morning!")
// }
// else{
//     alert("Good afternoon")
// }

// let num = prompt("Enter a number")
// if(num %5 === 0)
// {
//     console.log("Divisible by 5");
    
// }
// else{
//     console.log("Not divisible by 5");
    
// }

// let game = prompt("Do you want to play a game?")
// if(game === "yes")
// {
//     alert("Let's play!")
// }
// else{
//     alert("Maybe next time!")
// }

// let color = prompt("Choose a color")
// if(color === "blue")
// {
//     console.log("Cool choice!");
    
// }
// else{
//     console.log("Interesting color!");
    
// }

// let day = prompt("Enter the day")
// if(day === "Sunday")
// {
//     alert("Weekend!")
// }
// else{
//     alert("Weekday!")
// }

// let fruit = prompt("What's your favorite food?")
// if(fruit === "banana" || fruit === "apple")
// {
//     alert("We have that!");
// }
// else{
//     alert("Sorry, out of stock.");
// }

// let game = prompt("Type start!")
// if(game === "start")
// {
//     alert("Game started!")
// }
// else{
//     alert("Waiting for input....")
// }

//   Advanced JavaScript Conditional Logic

// let marks = prompt("Enter your marks")
// if(marks >= 80){
//     console.log("Distinction");
    
// }
// else if(marks >= 50 && marks < 80){
//     console.log("Pass");
    
// }
// else if(marks < 50){
//     console.log("Fail");
    
// }
// else{
//     console.log("Invalid marks");
    
//}

// let age = prompt("Enter your age:")    
// let isPremium = prompt("Are you a premium member? (yes or no)")

// if(age >= 60 && isPremium == "yes"){
//     console.log("Senior Premium Discount");
// }
// else if(age >= 60){
//     console.log("Senior Discount");
// }
// else if(isPremium == "yes"){
//     console.log("Premium Discount"); 
// }
// else{
//     console.log("No Discount");
// }    

// let isLogedIn = true
// let isVerified = false
// if(isLogedIn === true && isVerified === true){
//   console.log("Access granted");
  
// }
// else if(isLogedIn === true && isVerified === false){
//     console.log("Please verify your email");
    
// }
// else{
//     console.log("Please login");
    
// }

// let hours = 20;
// let isWeekend = true;

// if(hours > 40 && isWeekend == false){
//     console.log("Overtime");
// }
// else if(hours > 0 && isWeekend == true){
//     console.log("Weekend Work");
// }
// else if(hours <= 40){
//     console.log("Regular hours");
// }
// else{
//     console.log("No work");
// }

// let age = 11;
// let gender = "female";

// if(age >= 13 && age <= 19 && gender == "male")
// {
//     console.log("Teen Male");
// }
// else if(age >= 13 && age <= 19 && gender == "female")
// {
//     console.log("Teen Female");
// }
// else if(age >= 20)
// {
//     console.log("Adult");
// }
// else{
//     console.log("Child");
// }

// let temp = 40;
// let humidity = 40;

// if(temp >= 40 && humidity >= 60)
// {
//     console.log("Heatwave Alert");
// }
// else if(temp >= 40 && humidity < 60)
// {
//     console.log("Hot and Dry");
// }
// else if(temp <= 20)
// {
//     console.log("Cool Weather");
// }
// else{
//     console.log("Moderate");
// }

// let score = 50;

// if(score >= 90 && score <= 100)
// {
//     console.log("Excellent");
// }
// else if(score >= 70 && score <= 89)
// {
//     console.log("Good");
// }
// else if(score >= 50 && score <= 69)
// {
//     console.log("Average");
// }
// else if(score >= 30 && score <= 49)
// {
//     console.log("Poor");
// }
// else if(score > 30)
// {
//     console.log("Fail");
// }
// else{
//     console.log("Invalid Score");
// }

// let isLogedIn = false;
// let isEnrolled = true;
// let isBanned = true;

// if(isLogedIn == true && isEnrolled == true && isBanned == false)
// {
//     console.log("Access granted");
// }
// else if(isLogedIn == false)
// {
//     console.log("Please Log in");
// }
// else if(isBanned == true)
// {
//     console.log("User is banned");
// }
// else{
//     console.log("Enroll in the course first");
// }

// let speed = 100;
// let license = false;

// if(speed > 120){
//     console.log("License suspended");
// }
// else if(speed > 100 && speed < 120){
//     console.log("Warning");
// }
// else if(speed <= 100 && license == true){
//     console.log("Normal driving");
// }
// else{
//     console.log("Driving without license");
// }

// let payment = "complete";
// let shipped = false;

// if(payment == "complete" && shipped == true){
//     console.log("Order on the way");
// }
// else if(payment == "complete" && shipped == false){
//     console.log("Preparing your order");
// }
// else if(payment == "pending"){
//     console.log("Awaiting payment");
// }
// else{
//     console.log("Payment failed");
// }

// let battery = 30;
// let charging = true;

// if(battery == 100){
//     console.log("Fully charged");
// }
// else if(battery < 100 && charging == true){
//     console.log("Charging");
// }
// else if(battery < 20 && charging == false){
//     console.log("Low battery");
// }
// else{
//     console.log("Battery OK");
// }

// let browser = "chrome";
// let device = "mobile";

// if(browser == "chrome" && device == "desktop"){
//     console.log("Full features enabled");
// }
// else if(browser == "chrome" && device == "mobile"){
//     console.log("Limited mobile features");
// }
// else{
//     console.log("Please switch to Chrome");
// }
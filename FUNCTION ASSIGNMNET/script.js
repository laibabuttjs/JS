function sum(n1,n2){
    // console.log(n1+n2);
    return n1 + n2;
}
console.log(sum(12,7));

function sub(n3,n4) {
    return n3 + n4;
}
console.log(sub(6,4))

function multi(n5,n6) {
    return n5 * n6;
}
console.log(multi(5,5));

function div(n7,n8){
    return n7 / n8;
}
console.log(div(8,3));

function rem(n9,n10) {
    return n9 % n10;
}
console.log(rem(2,24));

function isPositive(n11) {
    if(n11 > 0){
        return"Positive";
    }
    else{
        return"Not positive";
    }
}
console.log(isPositive(65));

function isNegative(n12) {
    if(n12 < 0){
        return"Negative"
    }
    else{
        return"Not negative"
    }
}
console.log(isNegative(-5));

function isEven(n13){
    if(n13 % 2 == 0){
        return"Even"
    }
    else{
        return"Odd"
    }
}
console.log(isEven(7));

function isEqual(n14,n15) {
    if(n14 === n15){
        return"Both are Equal"
    }
    else{
        return"Not equal"
    }
}
console.log(isEqual(4,4));

function comp(n16,n17) {
    if(n16>n17){
        return"Greater"
    }
    else{
        return"Smaller"
    }
}
console.log(comp(23,54));

function fullname(fn,ln) {
    return fn + ln
}
console.log(fullname("laiba","Butt"));

function grade(marks){
    if(marks >= 40 && marks <= 100){
        return"Pass"
    }
    else{
        return"Fail"
    }
}
console.log(grade(70));

function isTeenager(age) {
    if(age >= 13 && age <= 19){
        return"Teenager"
    }
    else{
        return"Not a teenager"
    }
}
console.log(isTeenager(15));

function greetUser(name) {
    return "Hello" + name + "!"
}
console.log(greetUser("Laiba"));

function isEligible(age){
    if(age >= 18){
        return"Eligible"
    }
    else{
        return"Not eligible"
    }
} 
console.log(isEligible(20));

function temperature(temp) {
    if(temp > 30){
        return"Hot"
    }
    else if(temp < 10){
        return"Cold"
    }
    else{
        return"Normal"
    }
}
console.log(temperature(40));

function triangle(s1,s2,s3) {
    if(s1 == s2 && s2 == s3 && s1 == s3){
        return"Equilateral"
    }
    else if(s1 == s2 && s1 == s3){
        return"Isosceles"
    }
    else{
        return"Scalene"
    }
}
console.log(triangle(15,10,15));

function discount(price,dispercent) {
    let disprice = (price * dispercent)/100;
    let afterdiscount = price - disprice;
    return afterdiscount;
}
console.log(discount(100,20));

function isValid(pass) {
    let length = pass.length;
    if(length >= 8){
        return"Valid password"
    }
    else{
        return"Too short"
    }
}
console.log(isValid(12345));

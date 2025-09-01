let stds = ["Arsalan","Mustafa","Jawad"]
stds.push("Laiba")
console.log(stds);

let fruits = ["Apple","Mango","Banana","Grapes","Avocado"]
fruits.pop()
console.log(fruits);

let days = ["Tuesday", "Wednesday", "Thursday", "Friday"]
days.unshift("Monday")
console.log(days);

let colors = ["Red", "Blue", "Green", "Black"]
// colors.shift()
console.log(colors.indexOf("Blue"));

let subjects = ["English", "Physics", "Computer", "Urdu"]
subjects.splice(2,0,"Maths","Science")
console.log(subjects);

let cities = ["Quetta", "Islamabad", "Lahore", "Karachi", "Muree"]
// cities.splice(1,2)
console.log(cities.indexOf("Karachi"));

let countries = ["Pakistan", "Turkey", "Soudia", "Afghanistan"]
console.log(countries.slice(0,3));

let animals = []
animals.push("Cat", "Rabbit", "Sparrow")
console.log(animals);

let num = [1,2,3,4,5,]
num.splice(2,1)
console.log(num);

let fruit = ["Apple", "Banana", "Papaya"]
fruit.push("Mango", "Orange")
console.log(fruit);

let n = [10,20,30,40]
n.pop()
n.pop()
console.log(n);

let color = ["Pink", "Green", "Silver"]
color.push("Black", "White", "Golden")
color.pop()
console.log(color);

let arr = []
arr.push(1,2,3,4)
console.log(arr);

let arr1 = ["Banana", "Apple"]
arr1.unshift("Mango")
console.log(arr1);

let arr2 = [100,200,300,400]
arr2.shift()
arr2.shift()
console.log(arr2);

let i = [5,10,15]
i.unshift(20,25)
i.shift()
console.log(i);

let x = [1,2,3,4,5]
x.splice(2,1)
console.log(x);

let y = [10,20,30,40,50]
y.splice(1,2)
console.log(y);

let z = [1,2,3]
z.splice(1,0,10,20)
console.log(z);

let a = [100,200,300]
a.splice(1,1,250)
console.log(a);

let v = [2,4,6,8]
v.splice(2,2)
console.log(v);

let animal = ["dog", "cat", "mouse"]
let copy = animal.indexOf("cat")
console.log(copy);

let m = ["a", "b", "c", "b"]
let copyy = m.indexOf("b")
console.log(copyy);

let rb = ["red", "blue"]
let cop = rb.indexOf("green")
console.log(cop);

let mao = ["mango", "apple", "orange"]
let chk = mao.indexOf("apple")
console.log(chk);

let c = [1,2,3,4,5]
let slice = c.slice(1,4)
console.log(slice);

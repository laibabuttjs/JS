let book = {
    Title : "To kill a Mockingbird" ,
    Author : "Harper Lee",
    year : 1960,
};

book.title = "Go Set a Watchman";
book.publisher = "HarperCollins";
console.log(book);

let person = {
    fname : "Ahmed",
    lname : "butt",
    age : 18,
};
console.log(person);
console.log(person.age);

let laptop = {
    Brand : "Dell",
    Model : "XPS 13",
    RAM : "16 GB",
};
console.log(laptop);

let user = {
    name : "John Doe",
    address : {
        city : "New York",
        zipcode : 10001,
    } 
};
console.log(user);

let mobile = {
    Brand : "Apple",
    storage : "128 GB",
    price : 799.99,
};
console.log(mobile);
console.log(mobile.model);

let student = {
    id: 101,
    name: "Alice Smith",
    grades: [88, 92, 79, 85]
};
console.log(student);
console.log(student.grades[2]);

let countryInfo = {
    country : "Japan",
    population : 125800000,
    capital : "Tokyo",
};
console.log(countryInfo);

let movie = {
    title : "Inception",
    director : "Christopher Nolan",
    duration : "2h 28m",
};
console.log(movie);

let fruitPrices = {
    apple: 1.5,
    banana : 0.75,
    mango : 2.0,
    orange : 1.2,
};
console.log(fruitPrices);

let company = {
    name : "TechNova Inc",
    departments : {
        engineering : {
            employees : ["Wahab" , "Umer" , "Hamid"]
        },
        marketing : {
            employees : ["Ali" , "Raza"]
        },
        finance : {
            employees : ["Fahad" , "Waqas" , "Muhammad"]
        }
    }
};
console.log(company);

let dataTypes = {
    name : "Murad",      // string
    age : 20,           // number
    student : true,     // boolean
    hobbies : ["reading", "cycling", "painting"]    // array
};
console.log(dataTypes);

let student1 = {
    name : "Faraz",
    name : "Usman",
};
console.log(student1);  // No, an object cannot have multiple properties with the same name.

let student2 = {
    degrees : ["B.Sc in Physics", "M.Sc in Astrophysics"]
};
console.log(student2);  // yes, you can store array inside an object.

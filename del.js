// There is a given object, write node.js program to print the given object's 
// properties, delete the second property and get length of the object.
var user = {
first_name: "John",
last_name: "Smith",
age: "38",
department: "Software"
};

console.log(user);
delete user.last_name;
user.wife = "joseph"
console.log(user);
console.log(Object.keys(user).length);

let names = ["John", "Emma", "Michael", "Alice", "Tom", "William", "Isabella"];

names.forEach(function(name) {
    console.log(name + " is my classmate");
});

let uppercaseNames = names.map(function(name) {
    return name.toUpperCase();
});

console.log(uppercaseNames);

let nameStartingWithM = names.filter(function(name) {
    return name.startsWith("M");
});

console.log(nameStartingWithM);

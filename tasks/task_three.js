let person = {
  name: 'arinze',
  age: 10,
  city: 'eziowelle',
  gender: 'male'
};

for(let key in person){
  console.log(key + ": " + person[key]) // output: name: arinze, age: 10, gender: male
};
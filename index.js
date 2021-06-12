let tortoiseOne = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919,
    age: 85,
    diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne["name"]); // these are the two ways to access an objects property.
console.log(tortoiseOne.name);


console.log(tortoiseOne.weight);

newWeight = tortoiseOne.weight + 10;

tortoiseOne["weight"] = newWeight;

console.log(tortoiseOne["weight"]);

// objects values are mutable so when you change it, a copy isn't made. the actual properties data is changed forever.

let tortoiseTwo = {
    species: "Galapagos Tortoise",
    name: "Pete",
    weight: 919
};

console.log(tortoiseTwo);

tortoiseTwo["age"] = 120;
tortoiseTwo["speed"] = 'Faster than the hare.'

console.log(tortoiseTwo);
console.log(tortoiseTwo.age);

// can add a new property to a object at any time by using bracket syntax above ^


// let tortoiseTwo = {
//    species: "Galapagos Tortoise",
//    name: "Patricia",
//    weight: 800,
//    age: 85,
//    diet: ["pumpkins", "lettuce", "cabbage"],
//    sign: function() {
//       return this.name + " is a " + this.species;
//    }
//  };


let tortoiseOne1 = {
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

let tortoiseTwo1 = {
   species: "Galapagos Tortoise",
   diet: ["pumpkins", "lettuce", "cabbage"]
};

console.log(tortoiseOne1 === tortoiseTwo1); // is = false even though the same properties, because they are stored in different points of memory.

// Even though tortoiseOne and tortoiseTwo have the same keys and values, they are stored in separate locations in memory. This means that even though you can compare the properties in different objects for equality, you cannot compare the objects themselves for equality.


let giraffe = {
  species: "Reticulated Giraffe",
  name: "Cynthia",
  weight: 1500,
  age: 15,
  diet: "leaves"
};

for (item in giraffe) {
   console.log(item + ", " + giraffe[item]);
}
// for in loops are used to iterate through an object. goes through the properties. each iteration accesses a key in the object. loop stops when accessed every property.
for (item in tortoiseOne) {
  console.log(item + "," + tortoiseOne[item]);
}


function birthday(animal) {
    animal.age = animal.age + 1;
    return animal;
}

//Programmers can pass an object as the input to a function, or use an object as the return value of the function. Any change to the object within the function will change the object itself.

console.log(giraffe.age);

birthday(giraffe);

console.log(giraffe.age);


console.log(Math.floor(-3.87))
console.log(Math.round(-3.87))
console.log(Math.trunc(-3.87))
let num = Math.round(Math.random()*10);

console.log(num);

let num2 = Math.round(Math.random()*10);

console.log(num2);
num3 = Math.random();
console.log(num3);


// 12.6.1. Random Selection From an Array

function randomSelection(arr){
  let index = Math.floor(Math.random()*arr.length);
  return arr[index];
}

let happiness = ['Hope', 'Joy', 'Peace', 'Love', 'Kindness', 'Puppies', 'Kittens', 'Tortoise'];

let words = ['Hello', 'World', 'Python', 'JavaScript', 'Rutabaga'];

let arrs = [happiness,words];

let randomArr = [];

for (i=0; i < 3; i++){
  console.log(randomSelection(happiness));
  console.log(randomSelection(words));
}

//Experiment with the code above. Try to:
//a) Print 3 random selections from each array.
//b) Have the code randomly pick one array, and then print 2 random items from it.
//c) Create a new array, then fill it with one random item from words and happiness. Print the new array.
console.log("////////////////////////////////////////////");
for (i=0; i < 2; i++){
  console.log(randomSelection(arrs[Math.round(Math.random())]));
  
}

randomArr = (randomSelection(arrs[Math.round(Math.random())]));
console.log("////////////////////////////////////////////");
console.log(randomArr);


// 12.6.2. Rounding to Decimal Places


// Step	                                  Description

// Math.round(5.56789123*100)/100	        Evaluate the numbers in () first: 5.56789123*100 = 556.789123
// Math.round(556.789123)/100	            Apply the round method to 556.789123
// 557/100	                              Perform the division 557/100 = 5.57

let superChimpOne = {
    astronautID: 1,
    name: "Chad",
    species: "Chimpanzee",
    mass: 9,
    age: 6,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let salamander = {
    astronautID: 2,
    name: "Lacey",
    species: "Axolotl Salamander",
    mass: 0.1,
    age: 5,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let superChimpTwo = {
    astronautID: 3,
    name: "Brad",
    species: "Chimpanzee",
    mass: 11,
    age: 6,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let superBeagle = {
    astronautID: 4,
    name: "Leroy",
    species: "Beagle",
    mass: 14,
    age: 5,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let superTaradigrade = {
    astronautID: 5,
    name: "Almina",
    species: "Tardigrade",
    mass: 0.0000000001,
    age: 1,
    move: function() {
        let numOfSteps = Math.round(Math.random()*10);
        return numOfSteps;
    }
};

let crew = [superChimpOne,salamander,superChimpTwo,superBeagle,superTaradigrade]

// After you have created the other object literals, add the astronautID property to each one.

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!


function crewReports (animal) 
{
    return `${animal.name} is a ${animal.species}. They are ${animal.age} years old and ${animal.mass} kilograms. Their ID is ${animal.astronautID}.`;
}

crewReports(superChimpOne);

function fitnessTest(arr)
{
   let steps = 0;
   let count = 0;
   let arrOfTurns = [];

   for(let i =0; i < arr.length; i++)
   {
    while (steps <= 20)
    {
      steps = steps + arr[i].move();
      count++;
    }
  arrOfTurns[i] = `${arr[i].name} took ${count} turns to take 20 steps. \n` ; 
  steps = 0;
  count = 0;
}
return arrOfTurns.join('');
}

fitnessTest(crew);
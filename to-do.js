// function update(note = "") {
// 	console.log(`--- ${note}`);
// 	console.log('todos: ', todos);
// }

// const todos = [];
// var count = 0;

// function add(content){
// 	var todo = {
// 		id: count++,
// 		content: content,
// 	};
// 	todos.push(todo);
// 	update(`Added ${content}`);
// }

// function remove(id) {
// 	update(`Removed ${todos[id].content}`);
// 	todos.splice(id, 1);
// }

// function complete(id) {
// 	todos[id].complete = true;
// 	update(`Completed ${todos[id].content}`);
// }

// add('clean apartment');
// add('go to doctor');
// add('talk to derek');

// remove(0);

// complete(1);


// const cityBuilder = 	{
// 	builds: [],
// 	id: 0,

// 	update: function(note = "") {
// 	console.log(`--- ${note}`);
// 	console.log("city build: ", this.builds);
// 	},

// 	add: function(construct) {
// 	var build = {
// 		id: this.id++,
// 		construct: construct,
// 	};
// 	this.builds.push(build);
// 	this.update(`Added ${build.construct}`);
// 	},

// 	remove: function(targetId) {
// 	this.update(`Removed ${this.builds[targetId].construct}`);
// 	this.builds.splice(targetId, 1);
// 	},

// 	completed: function(targetId) {
// 	this.builds[targetId].completed = true;
// 	this.update(`Completed ${this.builds[targetId].construct}`);
// 	},

// 	change: function(targetId, newText = "") {
	

// 	this.builds = this.builds.map( function(build) {
// 		if (build.id === targetId) {
// 			return{...build, construct: newText};
// 		}
// 		return build;
// 		});	
// 		this.update(`Changed ${this.builds[targetId].construct}`);
	
// 	},

// };

// cityBuilder.add("street");
// cityBuilder.add("park");
// cityBuilder.add("coffee shop");
// cityBuilder.add("police station");
// cityBuilder.completed(2);
// cityBuilder.change(2, "ice-cream shop");
// cityBuilder.remove(3);


// const travelSched = {

// 	travelLocations: [],
// 	locationId: 0,

// 	update: function(note = "") {
// 		console.log(`--- ${note}`);
// 		console.log("Travel list: ", this.travelLocations);
// 	},

// 	add: function(country) {
// 		var location = {
// 			id: this.locationId++,
// 			country: country,
// 		};
// 		this.travelLocations.push(location);
// 		this.update(`Added ${location.country}`)
// 	},

// 	remove: function(targetId) {
// 		this.update(`Removed ${this.travelLocations[targetId].country}`);
// 		this.travelLocations.splice(targetId, 1);
// 	},

// 	completed: function(targetId) {
// 		this.travelLocations[targetId].completed = true;
// 		this.update(`Completed ${this.travelLocations[targetId].country}`);
// 	},

// 	change: function(targetId, newCountry = "") {
// 		this.travelLocations = this.travelLocations.map( function(location){
// 			if (location.id === targetId) {
// 				return {...location, country: newCountry}
// 			}
// 			return location;
// 		});
// 		this.update(`Changed ${this.travelLocations[targetId].country}`);
// 	} 


// };

// travelSched.add("Thailand");
// travelSched.add("Mexico");
// travelSched.add("England");
// travelSched.add("Italy");
// travelSched.add("Russia");
// travelSched.completed(0);
// travelSched.remove(3);
// travelSched.change(2, "Scotland");

// function update(note = "") {
// 	console.log(`--- ${note}`);
// 	console.log("city build: ", builds);
// }

// var builds = [];
// var id = 0;

// function add(construct) {
// 	var build = {
// 		id: id++,
// 		construct: construct,
// 	};
// 	builds.push(build);
// 	update(`Added ${build.construct}`);
// }

// function remove(targetId) {
// 	update(`Removed ${builds[targetId].construct}`);
// 	builds.splice(targetId, 1);
// }

// function completed(targetId) {
// 	builds[targetId].completed = true;
// 	update(`Completed ${builds[targetId].construct}`);
// }

// function change(targetId, newText = "") {
// 	update(`Changed ${builds[targetId].construct}`);

// 	builds = builds.map( function(build) {
// 		if (build.id === targetId) {
// 			return{...build, construct: newText};
// 		}
// 		return build;
// 		update(`Changed ${builds[targetId].construct}`);
// 	});	
	
// }



// add("hospital");
// add("church");
// add("school");
// add("houses");

// change(1, "something!!!!!");

// completed(3);
// completed(0);


// remove(2);



// function update(note = "") {
// 	console.log(`--- ${note}`);
// 	console.log("Travel Bag: ", bags);
// }

// const bags = [];
// var id = 0;

// function add(thing) {
// 	var item = {
// 		id: id++,
// 		thing: thing,
// 	};

// 	bags.push(item);
// 	update(`Added ${item.thing}`);
// }

// function remove(id) {
// 	update(`Removed ${bags[id].thing}`);
// 	bags.splice(id, 1);
// }

// function packed(id) {
// 	bags[id].packed = true;
// 	update(`Packed ${bags[id].thing}`);
// }

// add("toothbrush");
// add("shirts");
// add("swim suit");
// add("socks");

// packed(0);
// packed(3);

// remove(0);
// remove(2);


const vegetablesData = {
	title: "Vegetables!",
	description: "A list of vegetables.",
	data: [
		{
			genus: "Malus",
			name: "Apple",
			id: 6,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 11.4,
				protein: 0.3,
				fat: 0.4,
				calories: 52,
				sugar: 10.3
			}
		},
		{
			genus: "Prunus",
			name: "Apricot",
			id: 35,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 3.9,
				protein: 0.5,
				fat: 0.1,
				calories: 15,
				sugar: 3.2
			}
		},
		{
			genus: "Persea",
			name: "Avocado",
			id: 84,
			family: "Lauraceae",
			order: "Laurales",
			nutritionInfo: {
				carbohydrates: 8.53,
				protein: 2,
				fat: 14.66,
				calories: 160,
				sugar: 0.66
			}
		},
		{
			id: 1,
			name: "Banana",
			order: "Zingiberales",
			family: "Musaceae",
			genus: "Musa",
			nutritionInfo: {
				carbohydrates: 22,
				protein: 1,
				fat: 0.2,
				calories: 96,
				sugar: 17.2
			},
			emoji: "🍌"
		},
		{
			genus: "Rubus",
			name: "Blackberry",
			id: 64,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 9,
				protein: 1.3,
				fat: 0.4,
				calories: 40,
				sugar: 4.5
			}
		},
		{
			genus: "Fragaria",
			name: "Blueberry",
			id: 33,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 5.5,
				protein: 0,
				fat: 0.4,
				calories: 29,
				sugar: 5.4
			},
			emoji: "🫐"
		},
		{
			genus: "Prunus",
			name: "Cherry",
			id: 9,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 12,
				protein: 1,
				fat: 0.3,
				calories: 50,
				sugar: 8
			},
			emoji: "🍒"
		},
		{
			genus: "Vaccinium",
			name: "Cranberry",
			id: 87,
			family: "Ericaceae",
			order: "Ericales",
			nutritionInfo: {
				carbohydrates: 12.2,
				protein: 0.4,
				fat: 0.1,
				calories: 46,
				sugar: 4
			}
		},
		{
			genus: "Selenicereus",
			name: "Dragonfruit",
			id: 80,
			family: "Cactaceae",
			order: "Caryophyllales",
			nutritionInfo: {
				carbohydrates: 9,
				protein: 9,
				fat: 1.5,
				calories: 60,
				sugar: 8
			}
		},
		{
			genus: "Durio",
			name: "Durian",
			id: 60,
			family: "Malvaceae",
			order: "Malvales",
			nutritionInfo: {
				carbohydrates: 27.1,
				protein: 1.5,
				fat: 5.3,
				calories: 147,
				sugar: 6.75
			}
		},
		{
			genus: "Sellowiana",
			name: "Feijoa",
			id: 76,
			family: "Myrtaceae",
			order: "Myrtoideae",
			nutritionInfo: {
				carbohydrates: 8,
				protein: 0.6,
				fat: 0.4,
				calories: 44,
				sugar: 3
			}
		},
		{
			genus: "Ficus",
			name: "Fig",
			id: 68,
			family: "Moraceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 19,
				protein: 0.8,
				fat: 0.3,
				calories: 74,
				sugar: 16
			}
		},
		{
			genus: "Ribes",
			name: "Gooseberry",
			id: 69,
			family: "Grossulariaceae",
			order: "Saxifragales",
			nutritionInfo: {
				carbohydrates: 10,
				protein: 0.9,
				fat: 0.6,
				calories: 44,
				sugar: 0
			}
		},
		{
			genus: "Vitis",
			name: "Grape",
			id: 81,
			family: "Vitaceae",
			order: "Vitales",
			nutritionInfo: {
				carbohydrates: 18.1,
				protein: 0.72,
				fat: 0.16,
				calories: 69,
				sugar: 16
			}
		},
		{
			genus: "Malus",
			name: "GreenApple",
			id: 72,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 3.1,
				protein: 0.4,
				fat: 0.1,
				calories: 21,
				sugar: 6.4
			}
		},
		{
			genus: "Psidium",
			name: "Guava",
			id: 37,
			family: "Myrtaceae",
			order: "Myrtales",
			nutritionInfo: {
				carbohydrates: 14,
				protein: 2.6,
				fat: 1,
				calories: 68,
				sugar: 9
			}
		},
		{
			genus: "Apteryx",
			name: "Kiwi",
			id: 66,
			family: "Actinidiaceae",
			order: "Struthioniformes",
			nutritionInfo: {
				carbohydrates: 15,
				protein: 1.1,
				fat: 0.5,
				calories: 61,
				sugar: 9
			}
		},
		{
			genus: "Actinidia",
			name: "Kiwifruit",
			id: 85,
			family: "Actinidiaceae",
			order: "Ericales",
			nutritionInfo: {
				carbohydrates: 14.6,
				protein: 1.14,
				fat: 0.5,
				calories: 61,
				sugar: 8.9
			}
		},
		{
			genus: "Citrus",
			name: "Lemon",
			id: 26,
			family: "Rutaceae",
			order: "Sapindales",
			nutritionInfo: {
				carbohydrates: 9,
				protein: 1.1,
				fat: 0.3,
				calories: 29,
				sugar: 2.5
			}
		},
		{
			genus: "Citrus",
			name: "Lime",
			id: 44,
			family: "Rutaceae",
			order: "Sapindales",
			nutritionInfo: {
				carbohydrates: 8.4,
				protein: 0.3,
				fat: 0.1,
				calories: 25,
				sugar: 1.7
			}
		},
		{
			genus: "Vaccinium",
			name: "Lingonberry",
			id: 65,
			family: "Ericaceae",
			order: "Ericales",
			nutritionInfo: {
				carbohydrates: 11.3,
				protein: 0.75,
				fat: 0.34,
				calories: 50,
				sugar: 5.74
			}
		},
		{
			genus: "Litchi",
			name: "Lychee",
			id: 67,
			family: "Sapindaceae",
			order: "Sapindales",
			nutritionInfo: {
				carbohydrates: 17,
				protein: 0.8,
				fat: 0.44,
				calories: 66,
				sugar: 15
			}
		},
		{
			genus: "Mangifera",
			name: "Mango",
			id: 27,
			family: "Anacardiaceae",
			order: "Sapindales",
			nutritionInfo: {
				carbohydrates: 15,
				protein: 0.82,
				fat: 0.38,
				calories: 60,
				sugar: 13.7
			}
		},
		{
			genus: "Cucumis",
			name: "Melon",
			id: 41,
			family: "Cucurbitaceae",
			order: "Cucurbitaceae",
			nutritionInfo: {
				carbohydrates: 8,
				protein: 0,
				fat: 0,
				calories: 34,
				sugar: 8
			}
		},
		{
			genus: "Morus",
			name: "Morus",
			id: 82,
			family: "Moraceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 9.8,
				protein: 1.44,
				fat: 0.39,
				calories: 43,
				sugar: 8.1
			}
		},
		{
			genus: "Citrus",
			name: "Orange",
			id: 2,
			family: "Rutaceae",
			order: "Sapindales",
			nutritionInfo: {
				carbohydrates: 8.3,
				protein: 1,
				fat: 0.2,
				calories: 43,
				sugar: 8.2
			}
		},
		{
			genus: "Carica",
			name: "Papaya",
			id: 42,
			family: "Caricaceae",
			order: "Caricacea",
			nutritionInfo: {
				carbohydrates: 11,
				protein: 0,
				fat: 0.4,
				calories: 43,
				sugar: 1
			}
		},
		{
			genus: "Passiflora",
			name: "Passionfruit",
			id: 70,
			family: "Passifloraceae",
			order: "Malpighiales",
			nutritionInfo: {
				carbohydrates: 22.4,
				protein: 2.2,
				fat: 0.7,
				calories: 97,
				sugar: 11.2
			}
		},
		{
			genus: "Prunus",
			name: "Peach",
			id: 86,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 9.5,
				protein: 0.9,
				fat: 0.25,
				calories: 39,
				sugar: 8.4
			}
		},
		{
			genus: "Pyrus",
			name: "Pear",
			id: 4,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 15,
				protein: 0.4,
				fat: 0.1,
				calories: 57,
				sugar: 10
			}
		},
		{
			genus: "Diospyros",
			name: "Persimmon",
			id: 52,
			family: "Ebenaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 18,
				protein: 0,
				fat: 0,
				calories: 81,
				sugar: 18
			}
		},
		{
			genus: "Ananas",
			name: "Pineapple",
			id: 10,
			family: "Bromeliaceae",
			order: "Poales",
			nutritionInfo: {
				carbohydrates: 13.12,
				protein: 0.54,
				fat: 0.12,
				calories: 50,
				sugar: 9.85
			}
		},
		{
			genus: "Cactaceae",
			name: "Pitahaya",
			id: 78,
			family: "Cactaceae",
			order: "Caryophyllales",
			nutritionInfo: {
				carbohydrates: 7,
				protein: 1,
				fat: 0.4,
				calories: 36,
				sugar: 3
			}
		},
		{
			genus: "Prunus",
			name: "Plum",
			id: 71,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 11.4,
				protein: 0.7,
				fat: 0.28,
				calories: 46,
				sugar: 9.92
			}
		},
		{
			genus: "Punica",
			name: "Pomegranate",
			id: 79,
			family: "Lythraceae",
			order: "Myrtales",
			nutritionInfo: {
				carbohydrates: 18.7,
				protein: 1.7,
				fat: 1.2,
				calories: 83,
				sugar: 13.7
			}
		},
		{
			genus: "Rubus",
			name: "Raspberry",
			id: 23,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 12,
				protein: 1.2,
				fat: 0.7,
				calories: 53,
				sugar: 4.4
			}
		},
		{
			genus: "Fragaria",
			name: "Strawberry",
			id: 3,
			family: "Rosaceae",
			order: "Rosales",
			nutritionInfo: {
				carbohydrates: 5.5,
				protein: 0.8,
				fat: 0.4,
				calories: 29,
				sugar: 5.4
			}
		},
		{
			genus: "Citrus",
			name: "Tangerine",
			id: 77,
			family: "Rutaceae",
			order: "Sapindales",
			nutritionInfo: {
				carbohydrates: 8.3,
				protein: 0,
				fat: 0.4,
				calories: 45,
				sugar: 9.1
			}
		},
		{
			genus: "Solanum",
			name: "Tomato",
			id: 5,
			family: "Solanaceae",
			order: "Solanales",
			nutritionInfo: {
				carbohydrates: 3.9,
				protein: 0.9,
				fat: 0.2,
				calories: 74,
				sugar: 2.6
			}
		},
		{
			genus: "Citrullus",
			name: "Watermelon",
			id: 25,
			family: "Cucurbitaceae",
			order: "Cucurbitales",
			nutritionInfo: {
				carbohydrates: 8,
				protein: 0.6,
				fat: 0.2,
				calories: 30,
				sugar: 6
			}
		}
	]
};




console.clear();


console.log('The data: ', vegetablesData);

// for (var i = 0; i < vegetablesData.data.length; i++) {
// 	var veg = vegetablesData.data[i];
// 	var vegName = veg.name;

// 	console.log(vegName);
// 	console.log(veg);
	
	
// }

	// 1. create a function named 'forEvery' that expects:
	//   * an array for it's first argument
	//   * and a function for it's second argument (the callBack function)
	// 2. within forEvery, run the passed-in function 
	//   * use a for loop to run the callback function once for each item in the array
	//   * and pass it the value of the current item in the array
	// 4. now uses your new function to print out the first letter of each item name
	// 5. if you see all the right things, then you're ready to move on!
	//    if not - ask for help :)



// function forEvery(array, callBack) {
// 	for(var i = 0; i < array.length; i++) {
// 		callBack(array[i], i, array);
// 	}
// }


// forEvery(vegetablesData.data, function(veg){

// 	console.log(veg.name.charAt(0));
// });



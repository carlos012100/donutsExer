import { data } from './donutsData.mjs';

//3.- El horno a la leña de esta posada es de alta calidad, debemos lanzar un hechizo para saber qué tipo de masa utilizan

//Listar cada donut con sus posibles masas, batter (+ 50 exp)

const donuts = data.items.item

let batterCount = 0;

let toppingCount = 0;


function getDonutgitsBatter() {

	for (let i = 0; i < donuts.length; i++) {

		let donutMass = donuts[i].batters.batter

		console.log(donuts[i].name)

		console.log(" ")

		for (let j = 0; j < donutMass.length; j++) {

			console.log(donutMass[j].type);
		}

		console.log(" ")


	}
}

getDonutgitsBatter()



//Listar cada donut con sus posibles extras topping (+ 50 exp)

function getDonutToppins() {

	for (let i = 0; i < donuts.length; i++) {

		console.log(donuts[i].name)

		console.log("Toppings")

		console.log(" ");

		for (let j = 0; j < donuts[i].topping.length; j++) {

			if (donuts[i].topping[j].type != "None") {
				console.log(donuts[i].topping[j].type)

			}

		}
		console.log("")

	}
}

//Mostrar el donut con más variedad de masas (batters) (+ 50 exp)


getDonutToppins()

function getDonutWithMostBat() {

	let count = 0;

	let donutWithMostBat = null

	for (let i = 0; i < donuts.length; i++) {

		let currentCount = 0;

		for (let j = 0; j < donuts[i].batters.batter.length; j++) {

			currentCount++

			if (count < currentCount) {
				count = currentCount

				donutWithMostBat = donuts[i]
			}


		}

	}
	console.log("Donut with most batters is " + "" + donutWithMostBat.name + " With " + count + " different batters ")
	console.log("")

	return count;
}
batterCount = getDonutWithMostBat()

console.log(batterCount)


//Mostrar el donut con más variedad de toppings (+ 50 exp)

function donutWithMostTops() {

	let count = 0;

	let donutWithMostTop = null;

	for (let i = 0; i < donuts.length; i++) {

		let currentCount = 0;

		for (let j = 0; j < donuts[i].topping.length; j++) {
			if (donuts[i].topping[j].type != "None") {
				currentCount++;

				if (count < currentCount) {
					count = currentCount;
					donutWithMostTop = donuts[i];
				}

			}

		}
	}
	console.log("Donut with most Toppins is " + "" + donutWithMostTop.name + " With " + count + " different toppins ")

	console.log("")

	return count;
}

toppingCount = donutWithMostTops()

//Contar el número total de masas y toppings diferentes que existen en toda la posada (+ 50 exp)


console.log(" the total number of batter and toppings is " + (toppingCount + batterCount))
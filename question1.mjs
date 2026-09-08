import { data } from "./donutsData.mjs"

const donuts = data.items.item

// console.log(donuts)

// for(let i = 0; i < donuts; i++){

//     console.log(donuts[i])
// }

//donuts con mas azucar

function MostSugarInDonut(donuts) {

    let maxSugar = 0;

    let donutSugarMax = donuts[maxSugar].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars;

    let donutWithMostSugar = donuts[0]


    for (let i = 0; i < donuts.length; i++) {

        let currentDonutSugar = donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.type.sugars

        if (donutSugarMax < currentDonutSugar) {
            donutSugarMax = currentDonutSugar
            donutWithMostSugar = donuts[i];
        }

    }
    return donutWithMostSugar;

}
const donutWithMostSugar = MostSugarInDonut(donuts)

console.log(donutWithMostSugar)


//donut con más hierro (+ 50 exp)

// let donutIron = donuts[0].nutrition_facts.nutrition.vitamins[3].type;

// console.log(donutIron)

function getDonutWithMostIron(donuts) {

    let maxIron = 0

    let donutWithMostIron = donuts[0];

    for (let i = 0; i < donuts.length; i++) {

        for (let j = 0; j < donuts[i].nutrition_facts.nutrition.vitamins.length; j++) {

            let vitaminsInDonut = donuts[i].nutrition_facts.nutrition.vitamins

            if (vitaminsInDonut[j].type == 'Iron') {

                let ironPercent = parseInt(vitaminsInDonut[j].percent);

                if (maxIron < ironPercent) {

                    maxIron = ironPercent

                    donutWithMostIron = donuts[i];
                }

            }

        }
    }

    return donutWithMostIron;

}

const donutWithIron = getDonutWithMostIron(donuts)

console.log(donutWithIron);

//donuts con mas proteina

function getDonutWithMostProtein(donuts){

    let donutMaxProteinData = donuts[0].nutrition_facts.nutrition.protein;

    let donutWithMostProtein = donuts[0];

    for(let i = 0; i < donuts.length; i++){
        
        let currentProteinData = donuts[i].nutrition_facts.nutrition.protein;
        
        if(donutMaxProteinData < currentProteinData){
            donutMaxProteinData = currentProteinData

            donutWithMostProtein = donuts[i];
        }
    }
    return donutWithMostProtein;

}

const donutWithMostProtein = getDonutWithMostProtein(donuts);

console.log(donutWithMostProtein)
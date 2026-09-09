import { data } from './donutsData.mjs';

const donuts = data.items.item

function getallDonutsCalories() {

    for (let i = 0; i < donuts.length; i++) {

        let donutName = donuts[i].name;

        let donutCalories = donuts[i].nutrition_facts.nutrition.calories;

        console.log(donutName)

        console.log("Calories: " + donutCalories)

        console.log("")

    }
}
getallDonutsCalories();

function getallDonutsCarbs() {

    for (let i = 0; i < donuts.length; i++) {

        let donutName = donuts[i].name;
        let donutCarb = donuts[i].nutrition_facts.nutrition.carbohydrate.carbs_detail.amount

        console.log(donutName);

        console.log("Carb Amount: " + donutCarb)

        console.log("")
    }

}
getallDonutsCarbs()

function showMedianCalories() {

    let caloriesSum = 0


    for (let i = 0; i < donuts.length; i++) {

        let donutCalories = donuts[i].nutrition_facts.nutrition.calories;

        caloriesSum += donutCalories;

    }

    const median = caloriesSum/donuts.length

    return median;


}
function createArrayDataCal()
{
    let arrayofCal = [];

    // for (let i = 0; i < donuts.length; ++i)
    // {
    //     if()
    // }
}

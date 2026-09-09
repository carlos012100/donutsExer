import { data } from "./donutsData.mjs"

const donut = data.items.item;


//4.- Nuestro grupo sólo dispone de 4 monedas de plata.

//Mostrar cuántos donuts de cada tipo podemos comprar y las monedas sobrantes. (+ 50 exp)

// let coins = 4;

// let count = 0;

// console.log("Amount of donuts available within Budget")

// console.log(" ")

// function donutsPurchase() {

//     for (let i = 0; i < donut.length; i++) {

//         let donutPrice = donut[i].ppu;

//         if (donutPrice <= coins) {
//             coins -= donutPrice;
//             count++

//             console.log(donut[i].name)
//         }


//     }
// }
// donutsPurchase()
// console.log("")
// console.log("you can buy " + count + " different donuts")

const coins = 4;

function donutPurchase() {
    for (let i = 0; i < donut.length; i++) {
        let donutCount = 0
        let currentCoins = coins


        while (currentCoins >= donut[i].ppu) {
            donutCount++
            currentCoins -= donut[i].ppu

        }
        console.log(donutCount + " " + donut[i].name + " With budget")

        console.log(Math.round(currentCoins) + " coins left")
        console.log(" ")

    }
}
donutPurchase()




//Encontrar el donut más caro que aún podamos comprar con 4 monedas de plata (+ 50 exp)

function mostExpensiveDonut() {

    let highestPrice = 0

    let mostExpensive = donut[0]

    for (let i = 0; i < donut.length; i++) {

        let currentPrice = donut[i].ppu

        if (highestPrice < currentPrice) {
            highestPrice = currentPrice
            mostExpensive = donut[i]
        }
    }
    return mostExpensive

}

const mostExpensive = mostExpensiveDonut();


console.log("most expensive Donut")

console.log(mostExpensive.name);

console.log(" ")



//Encontrar el donut más barato de la posada (+ 50 exp)

function findCheaperDonut() {

    let lowestPrice = 0

    let cheapestDonut = donut[0]

    for (let i = 0; i < donut.length; i++) {

        let currentprice = donut[i].ppu

        if (lowestPrice > currentprice) {
            lowestPrice = currentprice
            cheapestDonut = donut[i]
        }
    }
    return cheapestDonut

}

const cheapestDonut = findCheaperDonut();

console.log("Cheapest DonuT")

console.log(cheapestDonut.name)

//Ordenar los donuts por precio de menor a mayor (+ 50 exp)

function copyData(donut){

    let copiedData = []

    for(let i = 0; i < donut.length; i++){
        copiedData.push(donut[i])
    }
    return copiedData
}


function sortDonuts(donut) {


    for (let i = 0; i < donut.length - 1; i++) {

        for (let j = i + 1; j < donut.length; j++) {

            if (donut[i].ppu > donut[j].ppu) {

                let temp = donut[i]
                donut[i] = donut[j]
                donut[j] = temp

            }
        }


    }


}

function sort(donut){

     let copiedArray = copyData(donut)

     sortDonuts(copiedArray)

     return copiedArray

}

const newDonutsData = sort(donut)

console.log(newDonutsData);



//Calcular cuántos donuts distintos podríamos comprar con 4 monedas en total (mezclando tipos) (+ 50 exp)
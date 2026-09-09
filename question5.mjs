import { data } from "./donutsData.mjs"

const donuts = data.items.item

function copyData(donut){

    let newData = []

    for(let i = 0; i < donut.length; i++){

        newData.push(donut[i]);
    }
    return newData
}

let donutsCopy = copyData(donuts);


//5.- Para nuestro horror y preocupación hemos detectado grandes errores sintácticos en el conjuro original, es momento de poner nuestros conocimientos arcanos al servicio de toda la posada.

//Los donuts con el colesterol > 12 modificar las grasas trans a 3,2 gr (+ 50 exp)

function cholAndFatModifier(donuts){

    const cholSafeSpot = 12

    for(let i = 0; i < donuts.length; i++){

        let donutChol = parseInt(donuts[i].nutrition_facts.nutrition.cholesterol.amount)

        let donutTrans = donuts[i].nutrition_facts.nutrition.fat.fat_type.trans

        if(donutChol > cholSafeSpot){

            donutTrans = "3.2g"


        }


        
    }
}



//Donuts con azúcar > 50  modificar el amount de los detalles de carbohidratos a 42gr (+ 50 exp)

//Añadir una vitamina llamada "Nitacina" al donut con el nombre "Magic Fusion" (+ 50 exp)

//El daily value de los carbohidratos de todos los donuts va a ser de 53% (+ 50 exp)

//Crearle un nuevo atributo "Alergen" al donut llamado "Relaxing Alchemy" y que dentro de el ponga "Gluten Free" (+ 50 exp)
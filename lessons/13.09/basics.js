//const ei lase muutujat muuta aga laseb muuta sisu näiteks list
//let loob muutuja , mida saab muuta
//var enam ei kasutata väga, tekivad asukoha probleemid - meie ei kasuta

const array = [36, 300, 3600, "hi"];
function findMyIdex(array, element){  

    //console.log(array.indexOf(3600));
    //annab 2
    return array.indexOf(element);
    
}

//console.log(findMyIdex(array, 300));

// ----- ARROW FUNCTION -----

function summa(esimene, teine){

    return esimene + teine;
}

//console.log(summa(3,4));
//--7

const arrowFunction = (num1, num2) =>  num1+num2

//console.log(arrowFunction("tere","toomas"));
//--"teretoomas"



// ----- NESTED -----

function addNumbers2(num1, num2){

    return function addNumbersHelper(num2){
        return num1+num2
    }

}
//console.log(addNumbers2(3)(4))

const addNumbers3 = num1 =>  addNumbersHelper3 = num2 => num1+num2

//console.log(addNumbers3(3)(7))
//---10


//AF printida "hello (nimi)" ja kasutada string literals

const nameEgle = "Egle"
//const name = `name is ${nameEgle}`
//${variableName}

const printName = name => `name is ${name}`

//console.log(printName(nameEgle))
//---"name is Egle"



//---- MAP ----

const numberArray = [1,2,3,4,5]


function add5(array ){
    return array +5
}
//MAP nõuab funktsioooni
//.map(() => {})
//uue listi loomiseks võtab eelmise listi ja uuendab iga elementi vastavalt antud funktsioonile, saab kasutada ka objektidega ja muuga,
//mitte aind listidega
const newArray = numberArray.map((element)=>element+5)

const newArray2 = numberArray.map((element, index, array)=>{
        return element+5
    })


//console.log(newArray)
//{6,7,8,9,10}

console.log({newArray2})
//{6,7,8,9,10}



//---- FILTER ----




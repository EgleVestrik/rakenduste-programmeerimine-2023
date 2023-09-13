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


//MAP nõuab funktsioooni
//.map(() => {})
//uue listi loomiseks võtab eelmise listi ja uuendab iga elementi vastavalt antud funktsioonile, saab kasutada ka objektidega ja muuga,
//mitte aind listidega
const newArray = numberArray.map((element)=>element+5)

const newArray2 = numberArray.map((element, index, array)=>{
        //element = element:element, key value
        console.log({
            element,
            newElement: element + 5, 
            //nimi võib sama olla 
            "index" : index, 
            array})
        return element+5
    })


//console.log(newArray)
//{6,7,8,9,10}

//console.log({newArray2})
//{6,7,8,9,10}



//---- FILTER ----

//need , mis on TRUE pannakse listi ja need, mis ei ole ei panda
const filteredArray = numberArray.filter((element) => element < 4)

console.log({numberArray, filter: filteredArray})


const names = ['Juku', 'Mari', 'jaana', 'Anni']

const data = names.map(person=> ({
    name: person, 
    Age : person.length+20, 
    email: person.toLowerCase()+"@email.com", 
    aadress : person+"Street"+55, 
    username: person.split("").reverse().join("")  }))

//console.log({data})

//console.log(data[0])

//kõik andmed jäävad samaks aga aind jukule läheb height:175

const newJuku={
    //anna mulle see sealt ja paki lahti "..."
    ...data[0],
    height:175

}

console.log({newJuku})

//uue info lisamiseks kirjutan üle eelneva
const evenNewerJuku={
    ...newJuku,
    Age:99
}
console.log({evenNewerJuku})
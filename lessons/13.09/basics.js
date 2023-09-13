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

// Arrow function

function summa(esimene, teine){

    return esimene + teine;
}

console.log(summa(3,4));
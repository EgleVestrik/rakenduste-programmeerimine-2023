const ab = 1
const bb = 2

console.log(ab + bb)

//string to number
let actuallyNumber = "1"
console.log(parseInt(actuallyNumber))
console.log(+actuallyNumber)

console.log(1 == "1") //kontrollib aind sobivust
console.log(1 === "1") //kontrollib andmetüüpide sobivust

let a = 5
let b = 99

let c = 99
b = a
a = c

console.log(a, b)

let mass = [1, 2, 3, 4, 5, 60]
console.log(mass[5])

const egle = {
  name: "Egle",
  school: "TLU",
  "dreams and ect": ":)"
}

console.log(egle.name + " õpib " + egle.school + "s")
console.log(egle["name"] + " " + egle["school"])
console.log(egle["dreams and ect"])

"use strict"

// Q1
function convert(n) {
    return  Number(n)+7
}

let x  = "123"
console.log(convert(x))

// Q2
function falsy(p) {
    if(p == 0||p==false||p==null||p==undefined){
    return "Invalid"
}else{
    return "Valid"
}
}

let f = 0
console.log(falsy(f))

// Q3

function odd(){
for (let i = 1 ; i <= 10 ; i++){
    if(i % 2 == 0){
        continue
    }
    console.log(i)
}}
odd( )

// Q4
function even(num) {
   return num % 2 == 0
}

let number = [1,2,3,4,5]
console.log(number.filter(even))

// Q5
let arr3
function merge(arr1,arr2) {
   return arr3 = [...arr1 ,...arr2]
}

let arr1 = [1,2,3]
let arr2 = [4,5,6]
console.log(merge(arr1,arr2))

// Q6
function sw(day){
    switch (day) {
        case 1:
            console.log("Sunday")
            break;

        case 2:
            console.log("Monday")
            break;

        case 3:
            console.log("Tuesday")
            break;

        case 4:
            console.log("Wednesday")
            break;

        case 5:
            console.log("Thursday")
            break;

        case 6:
            console.log("Friday")
            break;
        
        case 7:
            console.log("Saturday")
            break;

        default:
            console.log("Not found")
            break;
    }

}
let day = 2
sw(day)

// Q7
let re=[]
function count(arr){  
    arr.map(
      (ele)=>{
      re.push(ele.length)
    })
    return re
}

let ss=['a','ab','abc']
console.log(count(ss))

// Q8
function i(num){
    if (num % 3 == 0 && num % 5 == 0){
      return "Divisible by both"
    }else{
      return "Not Divisible by both"
    }
}
console.log(i(15))

// Q9
let arr = (number)=> {
   return number ** 2
}

console.log(arr(5))

// another solution
let arr_1 = (number)=>{
   return Math.power(number,2)
}
console.log(arr(5))

// Q10
function m(obj){
    return obj['name']+" is "+obj['age']+" years old"
}

let person={
    name:'shahd',
    age: 22
}
console.log(m(person))

// Q11
 let result = 0

function l(...numbers){
    for(let i = 0 ; i<numbers.length;i++){
       result += numbers[i]
    }return result
}
console.log(l(1,2,3,4,5))

// Q12
function sucess(pass){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
           if(pass==262003){
            resolve("sucess")
           }else{
            reject("try Again")
           }
        }, 3000);})}

 sucess(262003).then((data)=>{
    console.log(data)}).catch((err)=>{
            console.log(err)
    })

// Q13
function large(number){
    let g = number[0]

    for (let i = 0; i < number.length; i++) {
        if(number[i]>g){
            g= number[i]
        } }

    return g 
}

let h = [1,3,7,2,4]
console.log(large(h))

// Q14
function b (o){
    return Object.keys(o)
}

let o ={
    name :'shahd',
    age: 22
}

console.log(b(o))

// Q15
function a (c){
    return c.split(" ")
}

let c = "The quick brown fox"
console.log(a(c))

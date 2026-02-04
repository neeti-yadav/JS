
//0,1,2,3,4
// i=0;
// ⬇️
// 0<5
// ⬇️
// Enter for loop body

// ⬇️

// loop condition (incrwm=emt decrement)
// i++=> i=i+1
// i=0+1=>1
// 1<5


// ⬇️

// i=5
// 5<5  ❌
// exit the loop body
// let i=0
// for(  i=0;i<5;i++){
//     console.log("i value=>",i);
// }
// console.log("i final value",i);






// for( let i=65;i<=90;i++){
//     console.log("alphabet",String.fromCharCode(i));

// }


// for( let i=0;i<5;i++){

//     console.log("**",i+1);

// }

// for(let i=4;i>=0;i--){
   
//     console.log("****",i);
   
// }


// for(let i=5;i>=0;i--){
//     console.log("*",i);
// }




// for( let i=0;i<3;i++){
//     console.log("***");
    
// }



// for(let i=0; i<5; i++){
//     console.log("*******");
// }




// let obj={
//     "1":"apple",
//     "2":"mango",
//      "3":"banana"
// }

// for( let i=1;i<=3;i++){
// console.log("key "+i,obj[i]);
// }

// let fruitObj={
//     "apple":"red",
//     "mango":"yellow",
//     "ba nna":"green"
// }


// for (const key in fruitObj) {

//     console.log("key ", key);
//     console.log("value", fruitObj[key]);
    
    
    
// }


// let weekDays = {
//     "1":"Monday",
//     "2":"Tuesday",
//     "3":"Wednesday",
//     "4":"Thursday",
//     "5":"Friday",
//     "6":"Saturday",
//     "7":"Sunday"
// }
// for (const day in weekDays) {
//     console.log("the weekdays with values and keys",day +" "+ weekDays [day]);
// }

// Object is always have key value Pair
// let employee = {
//    "mitali" : { 
//     "salary":20000,
//     "pf":20,
//     "age":23
//    },
//    "geetanjali":{
//     "salary":10000,
//      "pf":20,
//     "age":23
//     },
//     "girija":{
//     "salary":42010,
//      "pf":20,
//     "age":23
//     },
//     "radha_rani":{
//     "salary":2121,
//      "pf":20,
//     "age":23
//     }

// }
// function employeSalary(employee){
//  let salarySum = 0   
// for (const key in employee) {
 
//     console.log("",employee[key].salary);
//     salarySum= salarySum+employee[key].salary
// }
// return salarySum
// }
// let totalSalary =employeSalary(employee)
// console.log("the total of salary is",totalSalary);





// function pfSum(employee){
//     let pfSum = 0
//     for (const key in employee) {
//         console.log("",employee[key].pf);
//         pfSum = pfSum+employee[key].pf
//     }
//     return pfSum
// }

// let totalPf = pfSum(employee)
// console.log("total pf is", totalPf);


// let cosmeticBrand = {
//     "Dot&Key":{
//         moisturizer:500,
//         facewash:499,
//         lipcare:198,
//         sunscreen:699,
//         perfume:987,
//     },

//     "mamaearth":{
//         moisturizer:500,
//         facewash:499,
//         lipcare:198,
//         sunscreen:699,
//         perfume:987,
//     },

//     "Sugar" : {
//          moisturizer:500,
//         facewash:499,
//         lipcare:198,
//         sunscreen:699,
//         perfume:987,
//     }
// }

// function allBrandMoisturizerSum(cosmeticBrand){
//     let allBrandMoisturizerSum = 0
//     for (const key in cosmeticBrand) {
//         console.log("",cosmeticBrand[key].moisturizer);
//         allBrandMoisturizerSum = allBrandMoisturizerSum+cosmeticBrand[key].moisturizer
        
//     }
//     return allBrandMoisturizerSum
// }

// let totalPriceOfMoisturizer = allBrandMoisturizerSum(cosmeticBrand)
// console.log("total price of moisturizers are", totalPriceOfMoisturizer);


// let foodCategories = {
//     chinese:{
//         noodels:{
//             hakkanoodels:90,
//             manchurianNoodels:120,
//         }
//     },
//     southIndian:{
//         dosa:{
//             masalaDosa:120,
//             plainDosa:80,
//         }
//     }
// }
// console.log("Hakanoodels price", foodCategories.chinese.noodels.hakkanoodels);
// console.log("masala dosa", foodCategories.southIndian.dosa.masalaDosa);

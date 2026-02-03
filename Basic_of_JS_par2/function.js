// console.log("-------------------------------");
// console.log("functions");
// console.log("-------------------------------");
// //  Method-1

// let Rectangle={
//     length:2,
//     breadth:4
// }

// function areaOfParameter (a,b){

// // console.log("area of parameter =>",2*(a+b));
// }
// areaOfParameter(Rectangle.length,Rectangle.breadth)

// function areaOfRectangle (x,y){
//     // console.log("Area of Rectangle is =",x*y);
// }
// // areaOfRectangle(Rectangle.length,Rectangle.breadth)


// let cone = {
//     length:5,
//     radius:8,
// } 

// function curvedSurfaceArea (l,r){
//     // console.log("The curved surface area of a cone is => ", 3.14*l*r);
// }
// curvedSurfaceArea(cone.length,cone.radius)

// console.log("-------------------------------");
// console.log("functions-Method-2 (arrow function)");
// console.log("-------------------------------");

// let sum=(a,b)=>{
//     // console.log(" sum is a+b",a+b);
// }
// sum(2,3)

// let areaOfCircle=(r)=>{
//     // console.log("area of circle",3.14*r*r)
// }
// areaOfCircle(3)




// let areaOfRec=(l,b)=>{
//     // console.log("area of  rec = " ,l*b);

// }
// areaOfRec(Rectangle.length,Rectangle.breadth)


// areaOfPara=(n,m)=>{
//     // console.log("area of para =" ,2*(n+m));
// }
// areaOfPara(Rectangle.length,Rectangle.breadth)

// console.log("-------------------------------");
// console.log("functions-Method-3 (return type)");
// console.log("-------------------------------");

// let returningTypeFunction=function (a,b){

//     return a+b
// }
//  let value= returningTypeFunction(2,1)

//  console.log("values is => ", value);


//  let stringReturn=function (str) {
//     return str;
    
//  }
//  let strValue=stringReturn("NeetiYadav")
//  console.log("value of string is => ", strValue);


//  let numberReturn=function(number){
//     return number;
//  }
//  let numberValue=numberReturn("21")
//  console.log("number is = ", numberValue);





// let a=5,b=5

// function sum(a,b){
//     console.log("the sum is ",a+b);
// }
// sum(a,b)


// function multiplication(a,b){
//     console.log("the multiplication is",a*b);
// }
// multiplication(a,b)




// function divide(e,f){
//     console.log("the divide is ",e/f);
// }
// divide(a,b)



// let sum=(a,b)=>{
//     console.log("sum",a+b);
// }
// sum(a,b)



// let multiply=(a,b)=>{
//     console.log("multiply",a*b);
// }
// multiply(a,b)


// let divide=(a,b)=>{
//     console.log("divide",a/b);

// }
// divide(a,b)



// let m=2,n=7

// function sum(m,n){
//     console.log("sum is",m+n);
// }
// sum(m,n)


// let multiply=()=>{
//     console.log("multiply is in arrow function",m*n);
// }
// multiply(m,n)





// let apiData=null;
// function nam(apiData) {

//     console.log("*****APIDAAA",apiData);
    
//     if(!apiData){

//         console.log("error it is empty", apiData);
        
//     }


// }
// nam(apiData)



//practice functions
let number={
    firstnum:1,
    secondnum:2,
    thirdnum:3
}

// 
// function sum(a,b){
//     console.log("the sum is ",a+b);
// }
// sum(number.firstnum,number.secondnum,number.thirdnum)


// function subtract(c,d,e){
//     console.log("sub is",c-d-e);
// }
// subtract(number.firstnum,number.secondnum,number.thirdnum);



// function divide(n,m){
//     console.log("divide is",m/n);
// }
// divide(number.secondnum,number.firstnum)





// divide=(n,m)=>{
//     console.log("div is",n/m);
// }
// divide(number.firstnum,number.secondnum)



// subtract=(k,l)=>{
//     console.log("sub is",l-k);
// }
// subtract(number.secondnum,number.firstnum)


// multiplication=(z,x)=>{
//     console.log(z*x);
// }
// multiplication(number.secondnum,number.firstnum)


// function add(x,y) {
//     console.log("x,y",x,y);
//     return x+y
    
// }

// function sub(x,y) {
//     return x-y
// }



// const calculator=(val1,val2,kya_karwana_hai)=>{

//     if(kya_karwana_hai==="sum"){

//         console.log("vaa",val1,val2);
//         return add(val1,val2)
//     }

//     else if( kya_karwana_hai==="sub"){
//        return  sub(val1,val2)
//     }


// }

// let value_is=calculator(4,3,"sub")

// console.log("value thriugh calcy",value_is);



// function addon(g,h){
//     return g+h;
   
// }
// let stored =addon(1,2)
// console.log("print",stored);


// function minus(p,k){
//     return p-k
// }
// let storeminus =minus(9999999,2345354)
// console.log("stored minus value is",storeminus);

// function multiply(y,t){
//     return y*t
// }
// let store=multiply(5,6)
// console.log("value is",store);




// divide=(j,f)=>{
//     return j/f

// }
// let storedivide =divide(50,5)
// console.log("divide val", storedivide);





// function age(a){
//     if(a>=18){
//         return " you can vote"
//     }
//     else{
//     return "you can no vote"
//     }
// }
// let storeage = age(1)
// console.log("",storeage);






// function age(numage){
//     if(numage<=18){
//         return "you can no vote"
//     }
//     else{
//         return "you can vote"
//     }
// }
// let agestored =age(16)
// console.log("",agestored);




// age=(numage)=>{
//     if(numage<=18){
//         return "you can no vote"
//     }
//     else{
//         return "you can vote"
//     }
// }
// let agestored =age(16)
// console.log("",agestored);








// let fullInformation = {
//     name: "NeetiYadav",
//     sem: "6th",
//     course: "Btech",
//     branch: "CSE",
//     rollno: 673537,
// }


// function rollno(info){
//     if(info===fullInformation.rollno){
//          console.log("",info);
//     return fullInformation
//     }
//    else{
//     return "INCORRECT ROLLNO"
//    }
// }

// let infostored =rollno(67357)
// console.log("",infostored);





// let days = {
//     "1":"Monday",
//     "2":"Tuesday",
//     "3":"Wednesday",
//     "4":"Thursday",
//     "5":"Friday",
//     "6":"Saturday",
//     "7":"Sunday",
// }

// function day(anynumber){
//     if(anynumber===1){
//         return days["2"]
//     }
//      if(anynumber===2){
//         return days["1"]
//     }
//      if(anynumber===3){
//         return days["3"]
//     }
//      if(anynumber===4){
//         return days["1"]
//     }
//      if(anynumber===5){
//         return days["5"]
//     }
//      if(anynumber===6){
//         return days["6"]
//     }
//      if(anynumber===7){
//         console.log("Congrats,Today is sunday",7);
//         return days["7"]
        
//     }
//     else{
//         return "Number is not valid"
//     }
// }

// let daycount =day(3)
// console.log("The Day is ", daycount);







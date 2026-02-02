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









function add(x,y) {
    console.log("x,y",x,y);
    return x+y
    
}

function sub(x,y) {
    return x-y
}



const calculator=(val1,val2,kya_karwana_hai)=>{

    if(kya_karwana_hai==="sum"){

        console.log("vaa",val1,val2);
        return add(val1,val2)
    }

    else if( kya_karwana_hai==="sub"){
       return  sub(val1,val2)
    }


}


let value_is=calculator(4,3,"sub")

console.log("value thriugh calcy",value_is);





function addon(g,h){
    return g+h;
   
}
let stored =addon(1,2)
console.log("print",stored);


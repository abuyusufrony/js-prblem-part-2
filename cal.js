// function add(num1,num2){
//     const sum=num1+num2;
//     return sum;
// }
// function subtrack(num1,num2){
//     const result =num1-num2;
//     return result;
// }
// function multiple(num1,num2){
//     const result=num1*num2;
//     return result;
// }
// function divide(num1, num2){
//     const result=num1/num2;
//     return result;
// }
// function calculator(a,b,operator){
//     if (operator===add){
//         const result =add(a,b);
//         return result;
//     }
//     else if(operator===subtrack){
//         const result=subtrack(a,b);
//         return result;

//     }
//     else if(operator=divide){
//         const result=divide(a,b);
//         return result;
//     }
//     else if(operator=multiple){
//         const result= multiple(a,b)
//         return result;
//     }
//     else {
//         return ;
//     }
// }
// const givenValue=calculator(25,5,'add')
// console.log(givenValue)

function add(num1,num2){
     const sum=num1+num2;
    return sum;
}
function sub(num1,num2){
    const sub=num1-num2;
    return sub;
}
function calculator(a,b,operation){
    if(operation==='add'){
        const result=add(a,b)
        return result;
    }
    else if(operation==='sub'){
        const result=sub(a,b)
        return result;
    }
   else{
    return "only,'add','multiple'     ";
   }
    
}
const finalOut=calculator(10,5,'sub')
console.log(finalOut)
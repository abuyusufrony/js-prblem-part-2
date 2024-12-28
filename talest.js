// let height=[10,12,15,20,25];
// function getHeight(number){
//     let max=number[0]
//     for(const num of number){
//         if(num>max){
//             max=num;
//         }
//     }
//     return max;
        


// }
// const max=getHeight(height)
// console.log('max height are',max)



//  shortes highet in class
function getshortes(number){
    let sort=number[0]
for(const num of number){
    if(sort>num){
        sort=num;
    }


}
return sort;
}
let  highest=[10,12,15,22];
const max=getshortes(highest);
console.log('shortest highest',max)
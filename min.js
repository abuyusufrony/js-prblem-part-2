// let prices=[1000,12000,10000,35000,44000];
// function min(numbers){
//     let sort=numbers[0]
//     for(const num of numbers){
//         if(num<sort){
//             sort=num;
//         }
//     }
//     return sort;
        
      

// }
// const minprice=min(prices)
// console.log('minimum price',minprice)

const phones=[
    {name:'iphone',price:50000, camera: '12mp' ,color:'Black'},
    {name:'samsung',price:40000, camera: '12mp' ,color:'Black'},
    {name:'Realme',price:30000, camera: '12mp' ,color:'Black'},
    {name:'oppo',price:20000, camera: '12mp' ,color:'Black'},
    {name:'walton',price:10000, camera: '12mp' ,color:'Black'},

]

function lowMobile(numbers){
    let min= numbers[0];
    for(const num of numbers){
        if(min.price>num.price){
            min=num
        }
    }
    return min;
}
const cheap=lowMobile(phones)
console.log('minimun price are',cheap)
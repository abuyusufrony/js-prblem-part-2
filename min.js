let prices=[1000,12000,10000,35000,44000];
function min(numbers){
    let sort=numbers[0]
    for(const num of numbers){
        if(num<sort){
            sort=num;
        }
    }
    return sort;
        
      

}
const minprice=min(prices)
console.log('minimum price',minprice)
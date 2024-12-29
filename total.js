const shoping=[
    {name:'iphone',price:100, camera: '12mp' ,color:'Black'},
    {name:'samsung',price:200, camera: '12mp' ,color:'Black'},
    {name:'Realme',price:350, camera: '12mp' ,color:'Black'},
  

]
function total(numbers){
    let sum=0;
    for( const num of numbers){
        sum=sum+num.price
    }
    return sum;
    

}
const totalBuy=total(shoping);
console.log('total are',totalBuy)

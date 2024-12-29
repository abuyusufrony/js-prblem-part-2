const shoping=[
    {name:'iphone',price:50000, camera: '12mp' ,quantity:'2'},
    {name:'samsung',price:40000, camera: '12mp' ,quantity:'2'},
    {name:'Realme',price:30000, camera: '12mp' ,quantity:'2'},
    {name:'oppo',price:20000, camera: '12mp' ,quantity:'2'},
    {name:'walton',price:10000, camera: '12mp' ,quantity:'2'},

]

function cartAll(numbers){
    let sum=0;
for (const buy of numbers){
    const product=buy.price*buy.quantity;
    sum=sum+product;
}
return sum;
}
const totalcart=cartAll(shoping)
console.log(totalcart);
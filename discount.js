function discountPrice(qunatity){
    if(qunatity<=100){
        const total=qunatity*100;
        return total;
    }
    else if( qunatity<=200){
        const total=qunatity*90;
        return total;
    }
    else{
const total=qunatity*70;
return total;

    }
    

}
const total=discountPrice(2)
console.log(total)
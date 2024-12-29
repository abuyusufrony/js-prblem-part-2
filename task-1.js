// Find the lowest number in the array below.



function lowestValue(numbers){
    let short=numbers[0]
for(const num of numbers){
    if(short>num){
       short=num;
       
    }
    
}
return short;


}
const  heights2 = [167, 190, 120, 165, 137];
const small=lowestValue(heights2)
console.log('the shortes number are',small)
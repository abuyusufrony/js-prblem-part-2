// const rony=56;
// const salman=70;
// if (rony>salman){
//     console.log('rony get the price')
// }
// else{
//     console.log('salman will get the price',salman)
// }
// function max(rony,bony){
// if(rony>bony){
//     return rony;
// }
// else{
//     return bony;
// }
// }
// const high=max(97,95);
// console.log('the highest number are',high)



// use for 3 person which is bigger than
function threeperson( sony,bony,rony){
    if(sony>bony&& sony>rony){
        console.log('sony is the boss')
        return sony;
    }
    else if(bony>rony&&bony>sony){
console.log('bony is the boss')
return bony;
    
}
    
    else{
        console.log('rony is the boss')
        return rony;
    }
    

}
const max=threeperson(20,32,30);
console.log(max)
function wood(table,khat,alna){
const tablePrice=10;
const khatPrice=11;
const alnaPrice=12;
const totalTable=tablePrice*table;
const TotalKhat=khatPrice*khat;
const totalAlna=alnaPrice*alna;
const jog=totalTable+TotalKhat+totalAlna;
return jog;
}
const total=wood(1,2,3);
console.log(total)
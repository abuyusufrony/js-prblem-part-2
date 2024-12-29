function totalBuy(laptop,tablet,mobile){
    const laptopPrice = 35000 ;
    const tabletPrice = 15000 ;
    const mobilePrice = 20000 ;

    const alllaptopPrice=laptopPrice*laptop;
    
    const allTabletPrice=tabletPrice*tablet;
    const allmobilePrice=mobilePrice*mobile;
    const totalMoneyRequire=alllaptopPrice+allTabletPrice+allmobilePrice;
    return totalMoneyRequire;
  
}
const total=totalBuy(1,1,1);
console.log('total money required',total)

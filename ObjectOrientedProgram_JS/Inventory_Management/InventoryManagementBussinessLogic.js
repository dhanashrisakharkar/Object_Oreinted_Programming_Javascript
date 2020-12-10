const fs = require('fs');
const inventoryManagementData = JSON.parse(fs.readFileSync('./InventoryManagement.json'));
const inventoryData = require('./InventoryManagement.json');
let readline = require('readline-sync');
//let mydata = JSON.parse(inventoryData.Rice);
console.log(inventoryData.Rice);
//Menu driven program
//wheat rice pulses
//create objects of wheat rice and pulses 3 items each

//calculate total = weight *price;
//rice.total = rice.weight * rice.price;
// push price name total weight to json file

//fs-->read file

// let riceData;
        
function Calculation(){
    flag = true;
    while(true){
        num = readline.question("Enter the no 1:rice 2:pulses 3:wheat 4:exit")
        switch(num){
            case "1" :let weight = readline.question("enter the weight of rice ypu want to buy")
            if(weight){
                let ricename = readline.question("enter the rice you want 1:Basmati 2:Brown 3:white");
            //    let mydata = JSON.parse(Rice);
            //    console.log(mydata[0].Price);
                switch(ricename){
                    
                    case "1" :let ricePrice=inventoryData.Rice.Price;
                              console.log(ricePrice);
                              let totalPrice = weight * ricePrice;
                              console.log("Basmati rice total price"+totalPrice); 
                              break;
                            

                    default : console.log("eneter valid no");
                              break;         
                    
                }

                
            }
        }

    }
}
module.exports =new Calculation();
// let riceName = inventoryManagementData.rice.name
// let riceWeight = inventoryManagementData.rice.weight
// let ricePrice = inventoryManagementData.rice.price
// let totalRiceCal = rice.weight * rice.price;
// 3 properties with function for each, Inheritence
// var weight = readline("Please enter the weight of rice you want to purchase: ");
// if ((weight)) {
//     for (var i = 0; i < inventoryManagementData.Rice.length; i++) {
//         /*
//         * calculate total and print
//         */
//         console.log("Per Kg. of " + inventoryManagementData.Rice[i].name + " costs " + inventoryManagementData.Rice[i].price + " and for " + weight + " Kgs. costs " + weight * inventoryManagementData.Rice[i].price);
//     }
// }
// else {
//     console.log("please enter integers only!");
// }
// break;
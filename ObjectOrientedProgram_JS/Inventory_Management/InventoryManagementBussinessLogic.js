/*******************************************************************************************************
 * @problem : Create Json File With objects of Rice , Wheat , Pulses get element from json file to js file and calculate totak price of the product .
 * @fileName : InventoryManagementBussinessLogic.js
 * @Auther  : Dhanashri Sakharkar
 
 *******************************************************************************/

const fs = require('fs');
const inventoryManagementData = fs.readFileSync('./InventoryManagement.json');
const inventoryData = require('./InventoryManagement.json');
let readline = require('readline-sync');


function calculation() {
    flag = true;
    while (true) {
        num = readline.question("Enter the no 1:rice 2:pulses 3:wheat 4:exit")
        switch (num) {
            case "1": console.log(JSON.parse(inventoryManagementData));
                console.log(inventoryData.Rice);
                let riceSum = 0;
                inventoryData.Rice.forEach(element => {
                    riceSum = riceSum + element.Price * element.Weight
                });
                console.log("Total Rice Sum is: " + riceSum);
                break;

            case "2": console.log(inventoryData.Wheats);
                let pulsesSum = 0;
                inventoryData.Pulses.forEach(element => {
                    pulsesSum = pulsesSum + element.Price * element.Weight
                });
                console.log("total pulse sum is :" + pulsesSum);
                break;

            case "3": console.log(inventoryData.Pulses);
                let wheatSum = 0;
                inventoryData.Pulses.forEach(element => {
                    wheatSum = wheatSum + element.Price * element.Weight
                });
                console.log("Total wheat sum is :" + wheatSum);
                break;
            default: console.log("enter valid choice");
                break;

        }
    }

}
module.exports = new calculation();


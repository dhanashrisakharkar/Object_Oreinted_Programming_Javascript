/*************************************************************************************************
 * @problem : Create Json File With objects of Rice , Wheat , Pulses get element from json 
 *            file to js file and calculate totak price of the product
 * @fileName : InventoryManagementBussinessLogic.js
 * @Auther  : Dhanashri Sakharkar
 
 *******************************************************************************/

const fs = require('fs');
const inventoryManagementData = fs.readFileSync('./InventoryManagement.json');
const inventoryData = require('./InventoryManagement.json');
const Data = require('./InventoryManagementBussinessLogic');
let readline = require('readline-sync');
console.log(Data);


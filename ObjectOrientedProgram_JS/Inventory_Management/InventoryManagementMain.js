const fs = require('fs');
const inventoryManagementData = fs.readFileSync('./InventoryManagement.json');
const inventoryData = require('./InventoryManagement.json');
const Data = require('./InventoryManagementBussinessLogic');
let readline = require('readline-sync');
//let mydata = JSON.parse(inventoryData.Rice);

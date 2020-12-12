/******************************************************************************************************
* @purpose  :  Take Class Data from Stock Account Bussiness file and Run the program
*  @Auther   : Dhanashri Sakharkar
*  @File     : StackAccountManagementMain.js 
*  
************************************************************************************************/

const fs = require('fs')
let fileData = require('./StockAccountBussinessLogic')
const readline = require('readline-sync');
const { changeData } = require('./StockAccountBussinessLogic');

function stockHandle() {
    //let map = {};
    fileData.dataFile();
    fileData.Calculate();
    fileData.addManual();

    let nameOfStock = readline.question("Enter the name of stocks :-");
    let numOfShares = readline.question("Enter the no of stock  :-");
    let numofPrice = readline.question("enter the no of price :-");
    let output = numOfShares * numofPrice;
    let getData = fileData.changeData(nameOfStock, numOfShares, numofPrice, output)
    fileData.writeData(getData);
}

stockHandle();
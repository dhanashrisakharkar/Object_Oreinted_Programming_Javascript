/******************************************************************************************************
* @purpose  :  Take Class Data from Stock Account Bussiness file and Run the program
*  @Auther   : Dhanashri Sakharkar
*  @File     : StackAccountManagementMain.js 
*  
************************************************************************************************/

const fs = require('fs')
const fileData = require('./StockAccountBussinessManagement')
const readline = require('readline-sync');

function stockHandle(){
    fileData.dataFile();
    fileData.Calculate();
    fileData.addManual();
    let nameOfStock = readline.question("Enter the name of stocks :-");
    let numOfShares = readline.question("Enter the no of stock  :-");
    let numofPrice = readline.question("enter the no of price :-");
    let output = numOfShares * numofPrice;
    fileData.changeData(nameOfStock, numOfShares, numofPrice, output)
}

stockHandle();
/******************************************************************************************************
* @purpose  :  Read Data from Json File and write new data into the json file
*  @Auther   : Dhanashri Sakharkar
*  @File     : StackAccountManagementBussinessLogic.js 
*  
************************************************************************************************/
const fs = require('fs')
const stockAccount = fs.readFileSync('./StockAccountManagement.json')
const stockManagement = require('./StockAccountManagement.json')
const readline = require('readline-sync');

class Stock {

    dataFile() {
        this.take = JSON.parse(stockAccount);
        console.log(this.take);

    }

    Calculate() {
        stockManagement.Stocks.forEach(element => {
            if (element.NoOfShares == 30 && element.SharePrice == 20000) {
                let result1 = element.NoOfShares * element.SharePrice
                console.log(result1);
            } else if (element.SharePrice == 100000 && element.NoOfShares == 50) {
                let result = element.NoOfShares * element.SharePrice
                console.log(result);
                return result;
            }
        })

    }
    addManual() {
        const newObj = {
            "ShareName": "Wipro",
            "NoOfShares": 30,
            "SharePrice": 20000,
            "TotalSharePrice": 600000
        }
        const jsonString = JSON.stringify(newObj);
        console.log(jsonString);

        fs.writeFileSync('./StockAccountNew.json', JSON.stringify(newObj), Error => {
            if (Error) {
                console.log(Error);
            } else {
                console.log("success!!")
            }
        })
    }
    changeData(name, numberOfShares, price, output) {
        const newObj1 = {
            ShareName: name,
            NoOfShares: numberOfShares,
            SharePrice: price,
            TotalSharePrice: output
        }
        console.log(newObj1);
        fs.writeFileSync('./StockAccountNew.json', JSON.stringify(newObj1), Error => {
            if (Error) {
                console.log(Error);
            } else {
                console.log("success!!")
            }
        })
    }
}

module.exports = new Stock();


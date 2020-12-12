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
    writeData(name, numberOfShares, price, output) {

        const newObj1 = {
            ShareName: name,
            NoOfShares: numberOfShares,
            SharePrice: price,
            TotalSharePrice: output
        }

        this.take.Stocks[this.take.Stocks.length] = newObj1;
        console.log(this.take)
        let result = fs.writeFile('./StockAccountManagement.json', JSON.stringify(this.take), (err, data) => {
            if (err) {
                console.log(err);
            } else {
                console.log("success!!")
            }
        })
        return result;

    }

    printFinalData() {
        console.log(this.take);
    }

}

module.exports = new Stock();


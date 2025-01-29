// 3: Sufficient Amount
// Inputs & Outputs

// With a multitude of input and output UTXOs allowed in every transaction, there are many possibilities of exchange that exist!

// Bitcoin wallet software will sometimes choose to include many input UTXOs just to aggregate them into one bigger UTXO to send back to the owner.

// For instance, if you have five UTXOs, each with amounts of 0.1 BTC, your wallet may choose to combine them into 0.5 BTC on the next transaction.Behind the scenes magic

// The important part is ensuring there is enough total value in the input UTXOs to cover the total amount in the output UTXOs.
// Your Goal: Ensure Sufficient Input

//     Let's make sure that the inputUTXOs have enough total value in them to cover the total value of the outputUTXOs.
//     If the total value of the inputs is less than the total value of the outputs, throw an error in the execute function.

class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs= inputUTXOs;
        this.outputUTXOs= outputUTXOs;
    }
    execute() {
        let totalInput=0;
        let totalOutput=0;
        if(this.inputUTXOs.spent){
            throw new ERROR("Erro");
        }
        for(let utxo of this.inputUTXOs){
            //totalInput+=utxo.value;
            if(utxo.spent){
                throw new ERROR("erro");
            }
        }
        for (let utxo of this.inputUTXOs) {
            totalInput += utxo.amount;
          
        }

        for(let utxo of this.outputUTXOs){
            totalOutput+=utxo.amount;
        }
       if(totalOutput > totalInput){
           throw new ERROR("Erro nas entradas")
       }

    }
}

module.exports = Transaction;

// Successful Transaction

// When a transaction is successful and mined to the blockchain, the output UTXOs become new TXOs that are ready to be spent. The input UTXOs need to be marked as spent, to ensure that they are not spent again!

// After all, the whole purpose of the blockchain is to fix the double-spend problem
// Your Goal: Mark Inputs as Spent

// If no errors are thrown during the execute function of the transaction, then it is successful! 
class Transaction {
    constructor(inputUTXOs, outputUTXOs) {
        this.inputUTXOs= inputUTXOs;
        this.outputUTXOs= outputUTXOs;
        //this.execute()
    }
    execute() {
        let totalInput=0;
        let totalOutput=0;
        if(this.inputUTXOs.spent){
            throw new ERROR("Erro");
        }
        for(let utxo of this.inputUTXOs){
            totalInput+=utxo.amount;
            if(utxo.spent){
                throw new ERROR("erro");
            }
            // utxo.spend();
        }

        for(let utxo of this.outputUTXOs){
            totalOutput+=utxo.amount;
        }
       if(totalOutput > totalInput){
           throw new ERROR("Erro nas entradas");
       }else{
           for(let utxo of this.inputUTXOs){
            if(utxo.spent){
                throw new ERROR("erro");
            }
            utxo.spend();
        }
       }


    }
}

module.exports = Transaction;


const Block = require('./Block');

class Blockchain {
    constructor() {
        const genesis = new Block("Genesis Block");
        genesis.hash = genesis.toHash();
        this.chain = [genesis];
    }

    addBlock(block) {
      
        const lastBlock = this.chain[this.chain.length - 1];
        block.previousHash = lastBlock.hash; 
        block.hash = block.toHash(); 
        this.chain.push(block); 
    }

    isValid() {
        for (let i = 1; i < this.chain.length; i++) {
            const currentBlock = this.chain[i];
            const previousBlock = this.chain[i - 1];
            if (currentBlock.previousHash !== previousBlock.toHash()) {
                return false;
            }
            if (currentBlock.hash !== currentBlock.toHash()) {
                return false;
            }
        }
        return true; 
    }
       
    
}

module.exports = Blockchain;

 //Your Goal: Create an addBlock Function

//Let's create an addBlock function on our Blockchain class.

//This function should take in a new block and add it to the chain array:

const blockchain = new Blockchain();
const block = new Block("Charlie sent Dave 2 BTC");

blockchain.addBlock(block);

console.log(blockchain.chain.length); // 2

//Remember we should have both the genesis block and the new block now.
const Block = require('./Block');

class Blockchain {
    constructor() {
        this.genesis = new Block(45);
        this.chain = [ /* TODO: Create the genesis block here */ ];
        this.chain.push(this.genesis);
    }

    addBlock(block){
        this.chain.push(block);
    }
}

module.exports = Blockchain;

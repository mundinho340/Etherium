//Blockchain Time

//We have a new file: Blockchain.js. How exciting!

///This stage is going to focus on adding the first block to our new Blockchain class! The first block is often referred to as the Genesis Block.
//Your Goal: Add the Genesis Block

//The Blockchain.js file contains the Blockchain class with a chain array. Let's add the Genesis Block to this array.

//Create a new Block in the Blockchain constructor then add it to the chain array.

  const Block = require('./Block');

class Blockchain {
    constructor() {
        this.genesis = new Block(45);
        this.chain = [ /* TODO: Create the genesis block here */ ];
        this.chain.push(this.genesis);
    }
}

module.exports = Blockchain;

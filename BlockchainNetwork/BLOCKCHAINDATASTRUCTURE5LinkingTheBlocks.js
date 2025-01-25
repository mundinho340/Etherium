// Previous Hash

// It's time to add one more crucial input to our block's hash calculation: the hash of the previous block in the chain.

// Linking Blocks

// This creates a chain where any change to the data of an earlier block will affect each subsequent block.

//     Let's take a look at what a change would do in details.

// Your Goal: Link Blocks

// To link the blocks you have to accomplish two things:

//     Add a previousHash property to each block. The value of this property should be the hash of the block before it in the chain.
//     Use this previousHash property in the calculation of the block's hash.

//     💡 Hints

//     A good spot to add the previousHash property on the block would be in the addBlock function, where a block is placed on the chain.
//     So far, the Block class in your Block.js file does not yet contain a previousHash property and currently only hashes this.data of a block - you must also include the block's this.previousHash property in the toHash function!
//     You can add multiple inputs to the SHA256 function by using the + operator, for example:


const Block = require('./Block');

class Blockchain {
    constructor() {
        const genesisBlock = new Block("genesis-block");
        this.chain = [genesisBlock];
    }

    addBlock(block) {
        block.previousHash = this.chain[this.chain.length-1].hash;
        block.hash = block.toHash();
        this.chain.push(block);
    }

    
}

module.exports = Blockchain;

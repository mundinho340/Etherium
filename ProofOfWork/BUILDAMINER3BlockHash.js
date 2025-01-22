Block Hash

// Typically, all the information in the header of the block is hashed together to create a unique hash based on those properties.

// If anything changes in the header, it will affect the hash.Since each block also contains the hash of the block before it, it will affect every future block as well.
// Your Goal: Add the Hash

//     Stringify the block object using JSON.stringify
//     Take the SHA256 hash of the stringified block object
//     Set the resulting value to a hash property on the mined block just before mining it

//     Do not add the hash property on the block until after calculating the hash!
const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    // TODO: add transaction to mempool
    mempool.push(transaction);
}

function mine() {
    // TODO: mine a block
    var block = {
        id: blocks.length,
    }
    const blockStringfy =JSON.stringify(block);
    block={
        id: blocks.length,
        hash: SHA256(blockStringfy)
    }
    blocks.push(block)
    
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};

// Mining Blocks

// In Bitcoin, blocks contain quite a bit of information in their header: the software version, a timestamp, the merkle root of its transactions, the previous block hash, and the difficulty.
// Your Goal: Mine Block

// The goal of this stage is to update the mine() fuction to create a new block with a unique identifier and add it to our blocks array.

// For the purposes of this mining exercise, our block will be an object with a single property: an id that is equal to the block height prior to it being mined.

//     Update the mine() function to create a new block object with a single property: id
//     Set the id property to the block height prior to the new block being added
//     Push the block object into the blocks array
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
    const block = {
        id: blocks.length
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

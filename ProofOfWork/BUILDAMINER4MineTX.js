//Block Size

// In Bitcoin, there is a specific block size limit that cannot be exceeded. The number of transactions that will fit inside of a block varies due to transactions being of all different sizes.

// For the purposes of this exercise, we will use the MAX_TRANSACTIONS constant.

//     Deciding the block size in bitcoin has been quite controversial!

// Your Goal: Mine Transactions

//     Inside the mine function, pull transactions off the mempool and include them in the block in an array called transactions
//     Remove each transaction you include in the block from the mempool
//     Add the transactions array to the block before hashing the block

//     Do not include more transactions in the block than the MAX_TRANSACTIONS limit.
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
    const transactions=mempool.splice(0, MAX_TRANSACTIONS);
    var block ={
        id: blocks.length,

    }

    const blockSpringfy = JSON.stringify(block);
    block={
        id: blocks.length,
        transactions: transactions,
        hash: SHA256(blockSpringfy)
    }
    blocks.push(block);
    
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction, 
    mine, 
    blocks,
    mempool
};

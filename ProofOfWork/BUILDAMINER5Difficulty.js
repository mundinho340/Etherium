const SHA256 = require('crypto-js/sha256');
const TARGET_DIFFICULTY = BigInt(0x0fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff);
const MAX_TRANSACTIONS = 10;

const mempool = [];
const blocks = [];

function addTransaction(transaction) {
    mempool.push(transaction);
}

function mine() {
    // Pega as transações do mempool até o máximo permitido
    const transactions = mempool.splice(0, MAX_TRANSACTIONS);

    let nonce = 0;
    let hash;

    // Loop de mineração
    while (true) {
        const block = {
            id: blocks.length,
            transactions: transactions,
            nonce: nonce,
        };

        const blockString = JSON.stringify(block);
        hash = SHA256(blockString).toString();

        if (BigInt(`0x${hash}`) < TARGET_DIFFICULTY) {
            // Se o hash for válido, para o loop
            break;
        }

        nonce++;
    }

    // Adiciona o bloco minerado à lista de blocos
    const minedBlock = {
        id: blocks.length,
        transactions: transactions,
        nonce: nonce,
        hash: hash,
    };

    blocks.push(minedBlock);
}

module.exports = {
    TARGET_DIFFICULTY,
    MAX_TRANSACTIONS,
    addTransaction,
    mine,
    blocks,
    mempool,
};

const ethers = require('ethers');
const { Wallet } = ethers;

// create a wallet with a private key
const wallet1 = new Wallet( /* insert private key here */ );

// create a wallet from mnemonic
const wallet2 = Wallet.fromMnemonic( /* insert mnemonic here */ );

module.exports = {
    wallet1,
    wallet2,
}

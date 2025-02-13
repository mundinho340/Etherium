/**
 * Multiple Arguments

Calling solidity contracts with multiple arguments in ethers.js is not much different from what you might expect!

We can define an Adder contract:

// Adder.sol
contract Adder {
    function add(uint x, uint y) external pure returns(uint) {
        return x + y;
    }
}

Then we can call the contract from our JavaScript side:

// callAdder.js
async function callAdder(adderContract) {
    const sum = await adderContract.add(1,4); 
    console.log(sum); // 5
}

Voilà! Multiple function arguments!
Your Goal: Transfer

    In the index.js file, complete the transfer function to transfer value from the contract signer to the friend address.
    The signer will also be the deployer of the contract. Their balance will be 1000 after deploying the contract.
    Your task is to transfer some of this to the friend. It can be however much you want!

 * Transfer funds on the contract from the current signer 
 * to the friends address
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @param {string} friend - a string containing a hexadecimal ethereum address
 * @return {promise} a promise of the transfer transaction
 */
async function transfer(contract, friend) {
    contract.transfer(friend, 1000);
}

module.exports = transfer;

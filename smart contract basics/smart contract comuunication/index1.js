/**
 * Contracts

In ethers.js, the Contract provides an easy way to communicate with our Solidity contracts!

To create a Contract instance, we pass an ABI which is used to understand the contract methods. The construction of the instance will dynamically add these methods to the instance object itself.

All we need to do is invoke these dynamic methods.

Let's consider the following contract:

// Example.sol
contract Example {
    function getNumber() external pure returns(uint) {
        return 3;
    }
}

We can take this Solidity contract, compile it and create an ethers.js contract instance with the bytecode and abi.

Then we can deploy the contract and interact with it from JavaScript:

// getNumber.js
async function getNumber(contract) {
    const number = await contract.getNumber();
    console.log(number); // 3
}

Here, contract is an ethers.js contract instance that has dynamically created the getNumber function based on the ABI of the Example contract.

We can invoke this getNumber function which returns a promise that resolves with the value we were looking for. Nice and easy!
Your Goal: Get The Value

In the contract.sol file there is a public state variable called value.

    Your goal is to complete the function in index.js to retrieve this value.
    This function can either return the promise from invoking the method or you can make the getValue function async and return the value.

    Returning a promise that resolves with a value or returning a value in an async function result in essentially the same functionality, afterall!

 * Find the `value` stored in the contract
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise which resolves with the `value`
 */
 async function getValue(contract) {
    const value= await contract.value();
    return value;
}

module.exports = getValue;

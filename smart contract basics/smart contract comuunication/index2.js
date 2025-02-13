/**
 Transactions

In the last stage we made a call to the value getter. This call required no gas and made no modifications to the contract storage.

In this stage we will be modifying a value in the contract storage. This will require us to make a transaction and spend gas. Fortunately, the contract api for this isn't much different at all!

Consider this contract:

// Switch.sol
contract Switch {
    bool isOn;

    function change(bool _isOn) external {
        isOn = _isOn;
    }
}

Once again, ethers.js will provide us with a dynamic function called change on the contract instance:

// turnOnSwitch.js
function turnOnSwitch(contract) {
    return contract.change(true);
}

This function will set the isOn state variable to true and return the transaction promise.

The reason this is so simple is because the contract is linked to a Signer. The Signer represents an EOA. With it, we can sign a transaction before we broadcast it to the network. Since the contract is already associated with the signer, ethers.js can do this automatically.

    In the previous ethers.js tutorial we specifically worked with ethers Wallets. Wallets implement the Signer API with additional functionality.

Your Goal: Modify Value

In contract.sol you'll see there is a uint state variable called value.

    Your goal is to call the modify() function on this value from the setValue function in index.js.
    The default value for a uint is 0, so change this value to anything else and the tests will pass.

 * Find the `value` stored in the contract
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise which resolves with the `value`
 */
/**
 * Modify the `value` stored in the contract
 *
 * @param {ethers.Contract} contract - ethers.js contract instance
 * @return {promise} a promise of transaction
 */
async function setValue(contract) {
    const value = contract.modify(4);
}

module.exports = setValue;

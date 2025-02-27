the Solidity lessons, we've been using return to test functions. This works great in queries to the EVM where we get a response back immediately from the Ethereum client. However, we know that transactions are not immediate. In fact, if the gas price is set too low, a miner may never include the transaction! Even when the transaction is included, return values are not saved to the blockchain.

So, how do we store values on transactions which can be accessed later?

For one thing, we can create new state variables. However, storing a state variable is an expensive operation. Expensive for the network and expensive as far as the opcode gas cost (which always seeks to reflect the strain of the network).

Also, we can't easily look at changes over time to state variables. If, for example, we had a faucet on a testnet:

contract Faucet {
    function withdraw() external {
        msg.sender.transfer(1 ether);
    }
}

How could we see a list of all addresses that have ever withdrawn ether from this faucet? It's quite difficult to do!

Fortunately, this is what we have Solidity Events for! Events allow us to log persistent data about a transaction. For our faucet:

contract Faucet {
    event Withdrawal(address _recipient) 
    function withdraw() external {
        msg.sender.transfer(1 ether);
        emit Withdrawal(msg.sender);
    }
}

You can see we declared an event Withdrawal and then emitted it with the msg.sender as the recipient address. Now we'll be able to lookup all Withdrawal events to see addresses that have received ether.

    Underneath the hood, events use the EVM LOGx opcodes, where x is a value 0 through 4, based on the number of searchable parameters. We'll discuss this further throughout the lesson.

Excited to start using events? 

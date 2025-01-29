Unspent Transaction Outputs

Bitcoin uses Unspent Transaction Outputs for handling user ownership of coins. This is opposed to an account based model used by Ethereum, which tracks balances of particular addresses.

Let's consider a couple of examples.
UTXO Example 1

Bob runs a Bitcoin Miner. He successfully computes a block and rewards himself with 12.5 BTC as per the emission rules. This is a brand new Unspent Transaction Output (UTXO) Bob has introduced to the system.

Now let's say Bob wants to send Alice 6.0 BTC. He can do so by using his UTXO with 12.5 BTC. But, wait, Bob doesn't want to send Alice 12.5 BTC! How do we handle the remainder?

As it turns out Bitcoin allows you to designate multiple outputs per transaction. In this particular transaction, we'll create one UTXO of 6.0 BTC for Alice and another UTXO of 6.5 BTC for Bob (the remainder). Then, we'll mark the UTXO for 12.5 BTC as spent since it was used as an input for the transaction. Neat!
UTXO Example 2

One thing that can often happen when using this model, is users end up with a lot of small UTXOs. As Alice transacts with the network her, UTXO breaks up into smaller outputs until she's left with 3 UTXOs of values 1.0 BTC, 1.5 BTC, and 0.8 BTC.

Let's say that Alice wants to purchase something for 3.0 BTC. She can do so by specifying many inputs to the transaction. She can put all three of her UTXOs as inputs into the transaction for a to total of 3.3 BTC. After the transaction is executed, she'll receive a new UTXO of 0.3 BTC and her previous inputs will all be marked as spent.

Ok that's enough examples for now! Let's learn for ourselves with some coding exercises.

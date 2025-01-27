Further Reading on the Bitcoin Network
51% Attack

Most of us have heard the term 51% attack before, and it sounds terrifying!

A 51% attack refers to a point in time where a group of miners have control of more than 50% of the network and wish to act maliciously. How much damage can actually be done during this time?

Let's think about what we have learned. Every block is built upon the hash of the block before it. To change a block that has been confirmed many times, let's say the block has been confirmed 6 times for example, the attacking blockchain would need to mine 8 new blocks before the existing blockchain mines 1 to be accepted as the Main Chain. This would require more than just 51% of the resources!

    Of course, the attacking blockchain could also just stubbornly stick to its chain for a longer period of time. The more time they do this, the more expensive the attack becomes. If they had these kind of resources, they could make significant money just playing along honestly!

What can the attack actually accomplish? One thing that an attack could do is double-spend a transaction, by choosing to override it within the new blocks. So if someone sent you a large payment, they could attack the network and essentially override that payment. Of course, this attack would cost a lot of money, so it's very unlikely this would be cost-effective. For safety purposes, if someone sends you millions of dollars on the blockchain, maybe wait a day or two to be sure it's cleared.

We'll talk more about UTXOs which will help us understand how double-spends are prevented.

    Double-Spends can occur during a blockchain fork, as shown by the bug caused by the Berkeley DB when the bitcoin network was partially between versions. See BIP_0050.

Genesis Block and the Blockchain Explorer

It's a good time to check out the Genesis Block of Bitcoin.

How many properties do you recognize at this point?

The number of confirmations is the number of blocks since the genesis block. Since the genesis block is the first block, this is also the block height of the blockchain!

It's interesting that if you look at the nonce of the genesis block, it's 2,083,236,893. If you take a look at a more recent block, 632900 for example, you'll see that the nonce is actually much lower. Why is that, isn't the difficulty supposed to be getting harder as the network grows?

It turns out that the block nonce is actually a 32-bit field, and 2 ** 32 is 4,294,967,296, so that is the max size of a nonce. What happens when the miner reaches this point? They can change anything else in the block header to also increase the randomness. Other properties include:

    Software Version - Tracks Bitcoin software upgrades
    Previous Block Hash - Hash of the block before this one
    Merkle Root - We haven't gone over this yet, its a hash that represent all the transactions!
    Timestamp - Approximate time (less than two hours in the future according to consensus rules)
    Target - Difficulty Target that dictates how small the Proof Of Work must be

As you can imagine by looking at these properties, it was initially the timestamp that the miners fiddled with when they need to restart their search for a valid Proof-of-Work. Beyond that, they can start to change the script of the coinbase transaction which gives them additional nonce space.

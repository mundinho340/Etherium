#Merkle Trees In Bitcoin

###The design of merkle trees makes them extremely efficient for data verification. In Bitcoin, Merkle trees are used to store every transaction mined on the Bitcoin network in an efficient way:

###btc-block-arch

The diagram above shows the architecture of a bitcoin block. Did you think a bitcoin block contains all of the transactions per block? In a way it does... but via merkle trees!

What happens is, all of the transactions per block are arranged into a big Merkle tree. What actually ends up getting committed into the block and immutable blockchain is that Merkle tree's root hash.

By committing the root hash of the tree, the transaction data can be stored off-chain (full nodes, for example, store these transaction records on a LevelDB integrated into all full nodes).

Thanks to Merkle trees, storage on the blockchain is efficient - you must only commit one piece of data instead of thousands of transactions per block, which would really bloat the system!

    A main design purpose behind using Merkle trees to commit a lot of data elements (typically transactions) per block is to keep the size of the blockchain as small as possible. Given the nature of their usage, blockchains grow perpetually, so you must account for efficient data storage. Keeping the blockchain size from becoming bloated means more people can support running full nodes which helps network decentralization.

Thanks to Merkle trees, there is an efficient way to verify that some data exists in a root hash. Take the image below... can you imagine how bloated each block would be if every single tx needed to be stored? Much better to store just ONE root hash representing all the transactions per block!


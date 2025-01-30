Now it's time to talk about an important data structure: Merkle Trees. 
As we take a look at Ethereum Data Storage and as we build smart contracts,
we'll often find ourselves interfacing with this data structure and we'll be expected to understand its usefulness.

#Merkle

![image](https://github.com/user-attachments/assets/c9b0d64c-ea7a-4158-a051-954b769a5d1a)
Ok, tell it to me straight! What is a Merkle Tree and what does it do?

Quite simply, a Merkle Tree is a data structure that allows us to make efficient verifications that data belongs in a larger set of data.

They are commonly used in Peer to Peer networks where efficient proofs of this nature will help increase the scalability of the network.

Let's take a step back and take a look at a binary Merkle Tree from a high-level. A Merkle Tree is a collection of hashes reduced to a single hash:

      ABCDEFGH <-- Merkle Root
       /    \
    ABCD     EFGH
    / \      / \
   AB  CD   EF  GH
  / \  / \  / \ / \
  A B  C D  E F G H

We use letters for convenience in this illustration. Each single letter represents a hash. The combined letters represent concatenated hashes that have been combined and hashed to form a new hash.

Over a series of a steps the eight leaf hashes A, B, C, D, E, F, G, and H are combined to create a single, unique hash that allows us to quickly check for inconsistencies without having to look at each individual data point.

As peers in a system, I can simply ask if your root matches mine. If so, we agree. This is a nice optimization for distributed systems of any kind!

Now, if we're just comparing roots, you might be asking:

Why the tree structure? Could we not concatenate all eight hashes at once and store that hash?

Great question! We certainly could. This binary tree structure affords us one further optimization: it allows us to verify a single piece of data belongs in the tree without having all of the data. Consider the merkle tree from above with some missing data:

      ABCDEFGH
       /    \
    ABCD     EFGH
    / \      / \
   -  -     EF  GH
  / \  / \  / \ / \
  - -  - -  E F -  -

What do we need in order to prove that E belongs in this tree?

Just F, GH, ABCD. We use these to calculate EF, EFGH, and ABCDEFGH. Then we can compare the result to our expected root ABCDEFGH .

If something went wrong along the way, we would notice it at the root. For example if we replaced E with M:

      ABCDMFGH
       /    \
    ABCD     MFGH
    / \      / \
   -  -     MF  GH
  / \  / \  / \ / \
  - -  - -  M F -  -

We can quickly check ABCDMFGH against the our expected root ABCDEFGH and see we did not get our expected hash. Something's wrong.

The savings become important with larger trees where the average case for verification of tree is log2(n) where n is the number of nodes in the tree. So for a tree of size 128, it would take only 7 hashes to determine the root.
Build a Merkle Tree in JavaScript

As programmers, it is often easiest to learn things by building them from scratch. We believe this holds true for most engineers; we like to get our hands on things. That's why, in this next module, you will build your own Merkle Tree! You can do it

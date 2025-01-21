#Blockchains

###To understand how blockchains work, let’s start off with some high level questions.
###What is the purpose of blockchain?

###The purpose of a blockchain is to have a network of computers agree upon a common state of data. Plain and simple. 
###Any person or organization should be able to participate in this process. No person or organization should be able to control this process.
##Why is blockchain needed for cryptocurrency?

####To understand why blockchain is needed for digital currencies let's imagine a naive digital currency without blockchain.

####Let's take a spreadsheet and give all our friends some money:

![image](https://github.com/user-attachments/assets/99014077-90fe-435a-887f-c237e13eb6ee)


###Sweet! Everyone starts with 10 money.

###Now Alice wants to buy something from Bob, so she pays him 5 money. She tells you (the bookkeeper) to transfer 5 monies over to Bob.

###Sure thing, you say:


![image](https://github.com/user-attachments/assets/7e65e74f-7047-46eb-ae5b-d7fae7e9ff53)

 ##Excellent! Everyone's balances are updated.

###At this point you might be thinking "There really isn't much to this whole digital currency thing!". Or, more likely, you're considering all the problems with this scenario:

   ### Alice, Bob, and Charlie need to trust that you won't cheat them. As the bookkeeper you need to be resistant to bribes!
    ###Alice, Bob, and Charlie need a way to easily view their balance that is widely available and up-to-date.
   ###Alice, Bob, and Charlie invite more friends into your currency circle and quickly the bookkeeping becomes too much for you to handle.

###We know how to solve problems #2 and #3 with our programming skills! We can build a website with an awesome UI and an API for making transactions!

###But what about problem #1? How do we solve for trust?

###This was a problem that ate at Cryptography Enthusiasts for years. Deep down, many self-proclaimed Cypherpunks felt as though the solution was somewhere in the land of cryptographic technology, yet nobody was able to create a foolproof system.

###In, 2008, such a system was imagined. A person or persons, under the pseudonym Satoshi Nakamoto released a whitepaper for Bitcoin. In this paper they described a system that would create a peer-to-peer network for exchanging value. This system would combine years of cryptographic research and game theoretical financial incentives to create a secure, scalable network. The paper describes a chain of blocks tied together cryptographically. This would later be coined the blockchain.

###To tie it altogether, blockchain was invented to solve for trust. To create a system that is completely neutral and resistant to any censorship or bribe.

#Smart Contract Blockchains

###Smart Contract blockchains provide developers with a way to decentralize where the code runs. In this way, code can truly become a public resource. This means code can run without any direct ownership, making it censorship resistant and transparently verifiable.

###One important point to drill home is that the decentralization isn't about the code itself, but how the code is executed. For example, let's take a quick glance at some Solidity smart contract code:

![image](https://github.com/user-attachments/assets/c5296c4f-aba4-4272-9935-583fbdc2cd05)
###This function is the bread and butter of ERC20 tokens, which we'll talk about later in the course. You'll see there's nothing special about the transfer function here from a programming standpoint. Coming from other languages this code may look quite familiar.

###The key difference which makes this code a smart contract is when you take this code, compile it and deploy it to a decentralized blockchain. When you do that, the code becomes publicly available on the blockchain and the nodes in the network will enforce the logic of the code through the financial incentives of the blockchain protocol.

###Don't worry if that sounds a bit complicated at the moment!
###A key takeaway here is that a smart contract is code that will always run the way it is programmed. We'll take this one step at a time and you'll soon see how blockchains enforce those rules.

#Cryptographic Hash Functions

##Before diving any further we must understand the cryptographic hash function. Let's break this term down a bit. A hash function is a function which takes an input of any size and turns it into a fixed size output. Let's imagine a hash function that takes an input of any size and returns a fixed 32 byte output:

![image](https://github.com/user-attachments/assets/ad33afd4-bc85-4a00-9e06-0c8cfc813c09)


Cryptographic Hashes

The goal of this challenge is to learn how to create and compare SHA256 hashes using ethereum-crypto (a library we’ll make quite a bit of use of throughout this course).

The coding challenge will be to derive someone’s favorite color from a given hash of that color.

Good luck!
https://emn178.github.io/online-tools/sha256


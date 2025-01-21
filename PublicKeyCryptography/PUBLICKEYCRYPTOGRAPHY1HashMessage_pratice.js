//Your Goal: Hash the Message

//The noble-secp256k1 library (v 1.7.1) provides us with all of the cryptography we're going to need throughout this course. Let's make use of the keccak256 hash and utf8ToBytes function.

 ///   Please note, this tutorial will require functions documented in release version 1.7.1 of the noble-secp256k1 library. Any further links in this tutorial will link directly to version 1.7.1 of the noble-secp256k1 documentation.

 //   Your first step is to take the string message passed in and turn it into an array of UTF-8 bytes. You can do so with the utf8ToBytes function.
  //  Then take the keccak256 hash of those bytes and return this value.

const { keccak256 } = require("ethereum-cryptography/keccak");
const { utf8ToBytes } = require("ethereum-cryptography/utils");

function hashMessage(message) {
    const messages =utf8ToBytes(message);
    const mHash = keccak256(messages);
    return mHash;
}

module.exports = hashMessage;



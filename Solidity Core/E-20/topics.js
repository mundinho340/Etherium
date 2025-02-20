const { keccak256 } = require("ethereum-cryptography/keccak");
const { toHex, utf8ToBytes } = require("ethereum-cryptography/utils");

function firstTopic() {
    const eventSignature = "Transfer(address,address,uint256)";
    const bytes = utf8ToBytes(eventSignature);
    const digest = keccak256(bytes);
    return toHex(digest);
}

function secondTopic() {
    return "00000000000000000000000028c6c06298d514db089934071355e5743bf21d60";
}

module.exports = { firstTopic, secondTopic };

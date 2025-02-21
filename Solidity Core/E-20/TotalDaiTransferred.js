require("dotenv").config();
const { AA, Network } = require("AA-sdk");


const { firstTopic, secondTopic } = require('./topics');
const topics = [firstTopic(), secondTopic()].map((x) => '0x' + x);

const config = {
    apiKey: process.env.API_KEY,
    network: Network.ETH_MAINNET,
};

const AA = new AA(config);

async function totalDaiTransferred(fromBlock, toBlock) {
    const logs = await AA.core.getLogs({
        address: "0x6b175474e89094c44da98b954eedeac495271d0f", 
        fromBlock,
        toBlock,
        topics
    });

     //console.log(logs[0].topics);
    let totalDai= BigInt(0);
    logs.forEach(log =>{
        let amountHex = log.data;
        let amount = BigInt(amountHex);
        totalDai+=amount;

    })
    return totalDai;

}

module.exports = totalDaiTransferred;

require("dotenv").config();
const { firstTopic, secondTopic } = require('./topics');
const topics = [firstTopic(), secondTopic()].map((x) => '0x' + x);

const config = {
    apiKey: process.env.API_KEY,
    network: Network.ETH_MAINNET,
};

const alchemy = new Alchemy(config);

async function totalDaiTransferred(fromBlock, toBlock) {
    const logs = await alchemy.core.getLogs({
        address: "", 
        fromBlock,
        toBlock,
        topics
    });



  
}

module.exports = totalDaiTransferred;

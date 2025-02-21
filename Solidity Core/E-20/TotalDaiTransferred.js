require("dotenv").config();
const { firstTopic, secondTopic} = require("./topics");
const topics =[firstTopic(), secondTopic()].map((x) => "0x" +x);

const config ={
    apiKey: process.env.API_KEY,
    network: Network.ETH_MAINNET,
};


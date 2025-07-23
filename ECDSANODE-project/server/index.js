// import {sha256} from "ethereum-cryptography"
// import {keccak256} from "ethereum-cryptography"
const express = require("express");
const app = express();
const cors = require("cors");
const port = 3042;

app.use(cors());
app.use(express.json());

const balances = {
  "025708a66ce116f10bd18bf27762b3f4cc0b02ca185947ab0554430a108c023890": 100,
  "02b341e50e26035c609caae3933bc80919116c2df0f2f6c1a62b421444db7174db": 50,
  "02011b52fcd1930e299281bd90e19b90ccb36d902e39670f8283875d412f583ad4": 75,
};

const user=[
  {"nome": "Raimundo",
  "address":"025708a66ce116f10bd18bf27762b3f4cc0b02ca185 947ab0554430a108c023890"},
  {"nome": "Hozana",
    "address":"02b341e50e26035c609caae3933bc80919116c2df0f2f6c1a62b421444db7174db"}
]




// const balances = {
//   "0x1": 100,
//   "0x2": 50,
//   "0x3": 75,
// };

app.get("/balance/:address", (req, res) => {
  const { address } = req.params;
  const balance = balances[address] || 0;
  res.send({ balance });
});

app.post("/send", (req, res) => {
  const { sender, recipient, amount } = req.body;
  //console.log(`Sender : ${sender} // recipient: ${recipient}`)
  const privateKey = sender;
  const publicKey = sender;
  if(privateKey != publicKey){
    console.log("Transacao revertida, senha incorreta ...!");
  }
  setInitialBalance(sender);
  setInitialBalance(recipient);
  
  if (balances[sender] < amount) {
    res.status(400).send({ message: "Not enough funds!" });
  } else {
    balances[sender] -= amount;
    balances[recipient] += amount;
    res.send({ balance: balances[sender] });
    alert("Transferiu com sucesso")
  }
});

app.listen(port, () => {
  console.log(`Listening on port ${port}!`);
});

function setInitialBalance(address) {
  if (!balances[address]) {
    balances[address] = 0;
  }
}

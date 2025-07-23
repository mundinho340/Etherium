import server from "./server";
import {secp256k1} from "ethereum-cryptography/secp256k1.js";
import {toHex} from "ethereum-cryptography/utils";
function Wallet({ address, setAddress, balance, setBalance, privateKey, setPrivateKey}) {
  async function onChange(evt) {
    const privateKey = evt.target.value;
    setPrivateKey(privateKey);
    const address = toHex(secp256k1.getPublicKey(privateKey));
    setAddress(address);
    if (address) {
      const {
        data: { balance },
      } = await server.get(`balance/${address}`);
      setBalance(balance);
    } else {
      setBalance(0);
    }
  }
  

  return (
    <div className="container wallet">
      <h1></h1>

      <label>
        <input placeholder="Type an address, for example: 0x1" value={privateKey} onChange={onChange}></input>
      </label>

      <div className="balance">Balance: {balance}</div>
      <div>
        address: {address.slice(12)}
      </div>
    </div>
  );
}

export default Wallet;

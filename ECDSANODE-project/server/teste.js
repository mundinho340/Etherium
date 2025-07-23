import {keccak256} from "ethereum-cryptography/keccak.js";
import { secp256k1 } from "ethereum-cryptography/secp256k1.js";
import {sha256} from "ethereum-cryptography/sha256.js";
import { utf8ToBytes } from "ethereum-cryptography/utils.js";
import { bytesToHex as toHex } from "ethereum-cryptography/utils.js";

const privateKey = (secp256k1.utils.randomPrivateKey());
console.log("privateKey: ", toHex(privateKey));
const publicKey = (secp256k1.getPublicKey(privateKey));
console.log(`publicKey: ${toHex(publicKey)}`);

// privateKey:  61fc830295cf57b2d138d06ac1bbadfed761fecb469171734bd3ef119877da71
//publicKey: 025708a66ce116f10bd18bf27762b3f4cc0b02ca185947ab0554430a108c023890
//privateKey:  cecc14968ae5ed82f9f1a952b9511df2eca03a34e8d73b2022d161318adda534
//publicKey: 02b341e50e26035c609caae3933bc80919116c2df0f2f6c1a62b421444db7174db
////privateKey:  68665c50db403fba2132e7e838a87fc0a3efee696f0214c0e23ea3defff2f0ef
///publicKey: 02011b52fcd1930e299281bd90e19b90ccb36d902e39670f8283875d412f583ad4





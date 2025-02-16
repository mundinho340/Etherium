// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    uint c =0;
    function tick() external {
        c +=1;
        if(c ==10){
            selfdestruct(payable(msg.sender));
        }
    }
}

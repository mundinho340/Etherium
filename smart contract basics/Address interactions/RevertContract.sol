// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    constructor() payable{
        if(address(this).balance< 1e18){
            revert("Erro");
        }
    }
}

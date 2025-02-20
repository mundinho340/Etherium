// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

import "./IERC20.sol";

contract Chest {
    function plunder(address [] memory users) external {
        for(uint i=0; i< users.length; i++){
            IERC20 token = IERC20(users[i]);
            uint balance = token.balanceOf(address(this));

            require(balance > 0, "Erro saldo insuficiente");
            token.transfer(msg.sender, balance);
        }
    }
}

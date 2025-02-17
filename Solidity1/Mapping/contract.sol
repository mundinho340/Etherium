// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Contract {
    mapping(address => bool) public members;
    function addMember(address _member) external {
        members[_member] = true;
    }
    
    function isMember(address _member) external view returns(bool){
        if(members[_member]){
            return true;
        }
        else{
            return false;
        }
        
    }

    function removeMember(address _member) external {
        members[_member] =false;
    }
}

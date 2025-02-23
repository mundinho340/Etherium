// SPDX-License-Identifier: MIT
pragma solidity ^0.8.4;

contract Voting {
    struct Proposal {
        address target;
        bytes data;
        uint yesCount;
        uint noCount;
    }
    Proposal [] public proposals;
    function newProposal(address target, bytes memory data) external {
        Proposal memory proposal;
        proposal.target= target;
        proposal.data=data;
        proposal.yesCount=0;
        proposal.noCount=0;
        proposals.push(proposal);
    }

    function castVote(uint proposalld, bool vote) external {
        for(uint i=0; i<proposals.length; i++){
            if(vote==true){
                proposals[i].yesCount+=1;
            }else{
                proposals[i].noCount+=1;
            }
        }
    }
    
}

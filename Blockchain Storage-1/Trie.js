const TrieNode = require('./TrieNode');

class Trie {
    constructor() {
        this.root = new TrieNode(null);
    }

    insert(data){
        let currentNode = this.root;
        const chars = data.split("");

        for(let i =0; i< chars.length; i++){
            const char = chars[i]
            if(!currentNode.children[char]){
                currentNode.children[char] = new TrieNode(char);
            }

            currentNode = currentNode.children[char];

            if(i === chars.length -1){
                currentNode.isWord = true;
            }
        }
    }
}

module.exports = Trie;

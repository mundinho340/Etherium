class MerkleTree {
    constructor(leaves, concat) {
        this.leaves = leaves;
        this.concat = concat;
        this.tree = this.buildTree();
    }

    buildTree() {
        let layer = this.leaves.map(leaf => ({ hash: leaf, left: null }));
        let tree = [layer];
        
        while (layer.length > 1) {
            let nextLayer = [];
            for (let i = 0; i < layer.length; i += 2) {
                if (i + 1 < layer.length) {
                    nextLayer.push({
                        hash: this.concat(layer[i].hash, layer[i + 1].hash),
                        left: layer[i]
                    });
                } else {
                    nextLayer.push(layer[i]);
                }
            }
            tree.unshift(nextLayer);
            layer = nextLayer;
        }
        return tree;
    }

    getRoot() {
        return this.tree[0][0].hash;
    }

    getProof(index) {
        let proof = [];
        let layerIndex = this.tree.length - 1;
        let nodeIndex = index;

        while (layerIndex > 0) {
            let layer = this.tree[layerIndex];
            let isLeftNode = nodeIndex % 2 === 0;
            let pairIndex = isLeftNode ? nodeIndex + 1 : nodeIndex - 1;
            
            if (pairIndex < layer.length) {
                proof.push({
                    data: layer[pairIndex].hash,
                    left: !isLeftNode
                });
            }
            
            nodeIndex = Math.floor(nodeIndex / 2);
            layerIndex--;
        }
        
        return proof;
    }
}

module.exports = MerkleTree;

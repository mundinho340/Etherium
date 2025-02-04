function verifyProof(proof, node, root, concat) {
    let computedHash = node; 

    for (const { data, left } of proof) {
        computedHash = left ? concat(data, computedHash) : concat(computedHash, data);
    }
    return computedHash === root;
}

module.exports = verifyProof;

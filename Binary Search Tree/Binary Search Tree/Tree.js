class Tree {
    constructor() {
        this.root=null;
    }

    addNode(node){
        this.node= node;
        this.root=this.node;
    }
}


module.exports = Tree;

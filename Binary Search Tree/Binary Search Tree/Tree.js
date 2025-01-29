class Tree {
    constructor() {
        this.root=null;
    }

    addNode(node){
        this.node= node;
        if(this.root== null){
            this.root=this.node;   
        }
        this.root.left =node;
        this.root.right =node;

    }
}


module.exports = Tree;

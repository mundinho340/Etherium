class Tree {
    constructor() {
        this.root = null;
    }

    addNode(node) {
        if (this.root === null) {
            this.root = node; 
        } else {
            this.aux(this.root, node);
        }
    }

    aux(parent, child){
            if(parent.data> child.data){
                if(parent.left === null){
                    parent.left =child;
                }else{
                    this.aux(parent.left, child);
                }
            }else{
                if(parent.right ===null){
                    parent.right = child;
                }else{
                    this.aux(parent.right, child);
                }
            }
    }
}

module.exports = Tree;

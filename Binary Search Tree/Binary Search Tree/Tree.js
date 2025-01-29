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

    hasNode(value) {
        return this.search(this.root, value);
    }

    search(node, value) {
        if (node === null) {
            return false;
        }

        if (value === node.data) {
            return true;
        }

        if (value < node.data) {
            return this.search(node.left, value); 
        } else {
            return this.search(node.right, value); 
        }
    }
}

module.exports = Tree;

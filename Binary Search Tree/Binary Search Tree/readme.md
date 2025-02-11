Tree Data Structures
Intro

Blockchain networks use transactions to change state and keep track of user balances, as we saw in the previous section. Let's dig even further into the complexity of these systems and start looking at what data structures they use to store all this changing state data.
An Orientation to Trees

First things first, computer scientists are weird. They like to draw trees upside down.

![imagem](https://github.com/user-attachments/assets/21cd73c8-1090-4297-8b36-5d37f40e2fd7)

The top, orange node is referred to as the parent while the bottom green nodes would be referred to as the children (relative to the parent node)
Binary Tree

![imagem](https://github.com/user-attachments/assets/edc91719-edee-48d2-96bb-1878bac99ebf)
It is typical to see some enforcement property before "tree" to distinguish different types of tree data structures. A tree is considered binary when each parent has at most two children. The key word in this tree is binary - it, like other preceding terms to "tree", sets some type of rule for the tree - in this case, that each parent node can have at most two children.

    Notice the tree in the diagram above now has four new gray nodes. These would now be referred to as the leaves since they are the last level of the tree and have no further children.

Tree
![imagem](https://github.com/user-attachments/assets/6e6669e7-bd80-4469-b3eb-c39b88bffef5)

The tree above shows that a tree can be any parent with any number of children. There doesn't have to be any enforcement on the tree, it just is a tree of data.

    You will see a pattern emerge where the word "tree" is usually preceded by some term that tells you what types of rules that tree will enforce. A binary tree enforces the rule that parents can have at most two children. Trees don't necessarily have to come with rules though - they can just be regular trees!
    

Enforcement allows people to more efficiently work with data since they know a tree will have certain rules enforced - but, the point is, a tree can just be... a tree!

Tree vs. Linked List

A linked list is also a tree - just a really long one that only has one child per parent in a long continuous chain. A tree is not necessarily a linked list. Here are the two code implementations for a LinkedListNode and aTreeNode to help distinguish:

![imagem](https://github.com/user-attachments/assets/571c7b1f-0a6a-4e64-8ef3-7c13abf06f86)



Notice the TreeNode holds the typical data and an array to contain references to any children of that (parent) node.

The LinkedListNode just keeps track of a next node.
Tree Vocabulary Summary

![imagem](https://github.com/user-attachments/assets/7584c9ab-7f2b-4c7f-a49a-4957ae95b191)

Take note of all of the relativity that happens as a tree grows in size. A node that was a leaf node becomes a parent node once a new child is added under it.

Final vocabulary for trees:

    key: actual data held inside node
    root: the parentest node in a tree
    siblings: nodes under the same parent and on the same level
    subtree: once you isolate a part of a broader tree, you can form a brand new tree with new relationships

When To Use a Tree 🌲

Sometimes trees occur quite naturally! Take a file system for example:






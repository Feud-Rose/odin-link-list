class LinkedList {
    constructor(value = "head", next = null) {
     this.value = value
     this.next = next
    }

    append(value) {
    let check = checkNext(this)
    console.log(check)
    check.next = value
    }

    prepend(value) {
    value.next = this.next 
    this.next = value
    }

    size() {
    let size = checkSize(this)
    return size
    }




}

class Node {
    constructor(value = null, nextNode = null) {
        this.value = value
        this.next = nextNode
    }
}

function checkNext(node){
    
    if(node.next == null)return node

    return checkNext(node.next)
}

function checkSize(node, total=0){
 
    if(node.next == null)return total

    return checkSize(node.next, total + 1)
}






let hotdog = new Node("Hotdog2")
let taco = new Node("Taco1")
taco.next = hotdog

let linkList = new LinkedList()
linkList.append(taco)
let banana = new Node("BananaNew1")
linkList.prepend(banana)
let pizza = new Node("Pizza3end")
linkList.append(pizza)

console.log(linkList)
console.log(linkList.size())
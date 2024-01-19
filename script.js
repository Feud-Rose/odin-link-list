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

    head() {
    return this.next 
    }

    tail() {
    let last = checkNext(this)
    return last
    }

    at(index){
        let find = findByIndex(this, index)
        return find
    }

    pop() {
        let secondLast = popLast(this)
        console.log(secondLast)
        secondLast.next = null
    }
    contains(value) {
        let found = findValue(this, value)
        return found
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

function findByIndex(node, index, total=0){
    if(index == total) return node

    else if(node.next.next == null) return "Not Found"

    return findByIndex(node.next, index, total + 1)
}

function popLast(node) {
    console.log(node.next.next)
    if(node.next.next == null) return node

    return popLast(node.next)
}

function findValue(node, search){

    if(node.value === search) return true

    else if(node.next == null)return false

    return findValue(node.next,search)
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


console.log(linkList.size())

console.log(linkList.head())
console.log(linkList.tail())
console.log(linkList.at(2))
console.log(linkList.at(6))
console.log(linkList.pop())
console.log(linkList)
console.log(linkList.contains("BananaNew1"))
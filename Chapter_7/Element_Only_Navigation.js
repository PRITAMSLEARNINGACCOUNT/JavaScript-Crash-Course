console.log("In This Programme I Am Going To Demonstrate Only Elements Instead Of Nodes.")
console.log("And This Time I Am Going To Navigate The Elements Using Varriable.")
let node = document.documentElement.childNodes[2]
console.log("So This Is A Sibling Element Of First Child Element Of Body")
console.log(node.firstElementChild.nextElementSibling)
console.log("So This Is The Previous Sibling Element Of First Sibling Element Of First Child Element Of Body")
console.log(node.firstElementChild.nextElementSibling.previousElementSibling)
console.log("This Whole Thing Is Created By Using A Varriable.")
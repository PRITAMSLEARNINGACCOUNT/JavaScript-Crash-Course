console.log("In This Programme I Am Going To Demonstrate The Difference Between Node And Element.")
console.log("Firstly I Want To Demonstrate Child Nodes Of The Body & Then I Will Demonstrate That I Can Apply Methods To An Element But To Not A Node.")
console.log(document.documentElement.childNodes)
console.log("So These Are The Child Nodes Of The Body Which Is A Node List Indeed.")
console.log("Now I Am Accessing The First Node Of The Body And I Am Not Able To Apply Some Methods Here.")
console.log(document.documentElement.childNodes[2].nodeName)
console.log("So This Is The Node Name Which Is A First Node Of The Body.")
console.log("Now I Am Accessing That Same Element As An Element Instead Of A Node And As You Can Easily Be Able To See That Now That Method Is Working Which Wasn't Working In The Case Of Node.")
console.log(document.documentElement.lastElementChild.style.color = "red")
console.log("In This Programme I Am Going To Demonstrate Some More Methods On Arrays.")
console.log("Firstly I Want To Demonstrate A Method Which Can Concatinate Two Different Arrays Into One Array")
let Array_1 = ["Hello World", true, false]
let Array_2 = ["Harry Bhai", 5]
console.log("So I Have Declared Two Arrays First One Is - " + Array_1 + " And The Second One Is - " + Array_2)
console.log("Now Concatinated Array Is - " + Array_1.concat(Array_2))
console.log("Now I Am Going To Demonstrate A Method Which Can Delete Elements(But At The Same Time It Doesn't Change The Length Of The Array Because It Shows <1 Deleted Item>) From A Particular Index In Array.")
delete Array_1[0]
console.log("So I Have Deleted The First Element From First Array So Now The First Array Looks Like - " + Array_1)
console.log("Now I Am Going To Demonstrate A Method Which Can Slice Elements From An Array And Return Only The Sliced Elements And In Order To Demonstrate This Method I Am Going To Declare An Another Array.")
let Array_3 = ["This Is Array 3", 0, true, false, 54.878]
console.log("So The Sliced Elements Are " + Array_3.slice(1, 3))
console.log("Now I Am Going To Demonstrate A Method Which Can Delete Elements From An Array As Well As Add Values To It At The Same Time.")
let Deleted_Items = Array_3.splice(2, 1, 504, 88, true, false, "Best Wishes")
console.log("So The Deleted Items Are - " + Deleted_Items + " And Re-Created Array Is - " + Array_3)
console.log("Now I Am Going To Demonstrate A Method Which Can Reverse An Array.")
console.log("So The Reversed Array Is - " + Array_1.reverse())
console.log("Now I Am Going To Sort An Array Just By Using An Method And For That I Am Going To Create A New Array.")
let Last_Array = [5, 7, 6, 122, 12, 1234, 545]
console.log("So The Array I Created Is - " + Last_Array)
console.log("And The Sorted Array Of The Array I Created For Sorting Is - " + Last_Array.sort())
console.log("Remember That Sort Takes An Optional Argument Which Is A Compare Function Which Sort Every Elements Of The Array According To That Function")
console.log("Now I Am Going To Demonstrate A Method By Which I Can Convert A String Into An Array & By Which I Can Create An Array Of Elements.")

console.log("So This Is The Array Created From A String - " + Array.from("Pritam Saha"))
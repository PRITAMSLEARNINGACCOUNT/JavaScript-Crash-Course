window.onstorage = (change) => {
    console.log("So Some Changes In 'localStorage' Or 'sessionStorage' May Happen.")
    console.log(change)
}
console.log("'sessionStorage' Isn't That Much Different From 'localStorage'")
console.log(`'localStorage' Persists(Stores) Data While 'sessionStorage' Persists It Within A Session Only.`)
console.log("I Am Going To Demonstrate It Using 'window' Object Which Will Show Whenever Any Changes Will Happen In Local Or Session Storage In The New Tab Or New Window.")
console.log("And For That I Am Going To Use 'setItem' Method To Store Few Key Value Pairs In 'sessionStorage' & Later I Am Going To Update Them To Demonstrate The Working Of 'onstorage' Method From 'window' Object.")
console.log("NOTE:Every Method Demonstrated In 'localStorage' Can Be Used In 'sessionStorage' Too.")
console.log("That's Why I Am Able To Set Data Using That Same Method Used To Set Data In 'localStorage'.")
sessionStorage.setItem("Key_1", "Value_1")
console.log(`So The Value I Set Using 'setItem' Method Is ${sessionStorage.key(0)}=${sessionStorage.getItem(sessionStorage.key(0))}`)
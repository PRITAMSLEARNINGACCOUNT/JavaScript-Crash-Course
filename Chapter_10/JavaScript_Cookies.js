let boolean = true
if (boolean) {
    console.log("The cookies In This Webpage After Setting Up Some cookie Is - " + document.cookie)
    boolean = false

}
if (boolean == false) {
    console.log("Now I Am Setting Some cookies Again To Demonstrate That If A cookie  Set Over Some Existing cookie Then The Existing cookie Won't Be Effected Or OverWritten.")
    document.cookie = "NewCookie(Key)=value"
    console.log("The Cookies In This Webpage After Adding Some Cookies Over Some Existing Cookies Is - " + document.cookie)
    console.log("So As We Can See That Cookies Are Stored In A Format Of Key Value Pairs & Setting Cookies Over Some Existing Cookies Doesn't Overwrite The Existing Cookie But It Just Adds Cookie Over The Existing Cookies.")

}

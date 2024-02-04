function Closures() {
    console.log("This Is Under The Outer Function Where Two Varriables Are Declared & Initialized At The Same Point Of Time.But After An Inner Function Declaration The Value Of An Varriable Among Those Two Varriables Declared In This Outer Function Has Changes.");
    let Inner_var = "Value";
    let Outer_var = "Value_2";
    function Outer() {
        console.log("This Is Under The Inner Function Where I Am Printing Values Of Two Varriables Which Are Declared On Outer Scope Means In Outer Function.");
        console.log(Outer_var, Inner_var);
    }
    Inner_var = "Changed Value";
    return Outer;
}
const Run_Function = Closures()
Run_Function()
function Lexical_Scoping() {
    console.log("This Is Under The Outer Function");
    let Inner_var = "Value";
    let Outer_var = "Value_2";
    function Outer() {
        console.log("This Is Under The Inner Function Where I Am Printing Values Of Two Varriables Which Are Declared On Outer Scope Means In Outer Function.");
        console.log(Outer_var, Inner_var);
    }
    Outer();
    console.log("This Nested Function Calling & Memory Of An Individual Varriable Sharing Among The Nested Function Is Called Lexical Scoping In JavaScript.");
}
Lexical_Scoping();
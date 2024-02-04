let Array = []
function Simple_Interest(Time, Principal, Rate) {
    return Time * Principal * Rate / 100;
}
let time = Number.parseInt(prompt("Enter Time Period??"));
Array.push(time);
let principal = Number.parseInt(prompt("Enter Principal Amount(In Year)??"));
Array.push(principal);
let rate = Number.parseInt(prompt("Enter Rate??"));
Array.push(rate);
alert("So The Amount Of Simple Interest Is " + Simple_Interest(...Array));

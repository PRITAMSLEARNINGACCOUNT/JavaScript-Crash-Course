let Note_No = 1;
while (true) {

    let Confirmation = confirm("Do You Want To Add A Note???");
    if (Confirmation) {
        let Note = prompt("Enter A Note");
        localStorage.setItem(`Note ${Note_No}`, Note);
        Note_No++;
    }
    else {
        break;
    }
}
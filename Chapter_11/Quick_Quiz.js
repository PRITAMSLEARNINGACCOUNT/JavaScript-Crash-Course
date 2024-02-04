class User {
    constructor(name, password, email_id, username) {
        this.User_Name = name
        this.Password = password
        this.Email_Id = email_id
        this.username = username
    }
    Set_Account(name, developer) {
        this.Developer = developer
        this.Social_Media = name
    }
    Show_Data() {
        if (this.Developer != undefined) {
            console.log(`${this.User_Name} Is Now Successfully Logged Into ${this.Social_Media} Which Is Developed And Managed By ${this.Developer}`)
        }
        else {
            console.log("Please Set Up The Details Properly.")
        }
    }
    Private_Data() {
        console.log("So Some Of Your Private Data Are(Like Password,Email Id,Username Etc) - ")
        console.log(`Password - ${this.Password}`)
        console.log(`Username - ${this.username}`)
        console.log(`Email Id - ${this.Email_Id}`)
    }
}
let pritamstech = new User("Pritam Saha", "1234", "pritamstech@hotmail.com", "pritamstech")
pritamstech.Set_Account("Facebook", "Meta")
pritamstech.Show_Data()
pritamstech.Private_Data()
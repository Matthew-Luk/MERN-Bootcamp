class User { 
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount){
        this.accountBalance += amount
        return this
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount
        return this
    }
    displayBalance(){
        console.log(`${this.name}, Balance: $${this.accountBalance}`)
    }
    transferMoney(userTwo,amount){
        this.accountBalance -= amount
        userTwo.makeDeposit(amount)
    }
}

const guido = new User("Guido van Rossum", "guido@python.com");
const monty = new User("Monty Python", "monty@python.com");
const matthew = new User("Matthew Luk", "matthewluk@gmail.com")
guido.makeDeposit(200).makeDeposit(150).makeDeposit(375).makeWithdrawal(175).displayBalance()
monty.makeDeposit(300).makeDeposit(250).makeWithdrawal(375).makeWithdrawal(425).displayBalance()
matthew.makeDeposit(500).makeWithdrawal(125).makeWithdrawal(260).makeWithdrawal(140).displayBalance()

guido.transferMoney(monty,200)
guido.displayBalance()
monty.displayBalance()
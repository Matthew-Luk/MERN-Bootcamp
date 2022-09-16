class User { 
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.accountBalance = 0
    }
    makeDeposit(amount){
        this.accountBalance += amount
    }
    makeWithdrawal(amount){
        this.accountBalance -= amount
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
guido.makeDeposit(200)
guido.makeDeposit(150)
guido.makeDeposit(375)
guido.makeWithdrawal(175)
guido.displayBalance() // Output: $550
monty.makeDeposit(300)
monty.makeDeposit(250)
monty.makeWithdrawal(375)
monty.makeWithdrawal(425)
monty.displayBalance() // Output: $-250
matthew.makeDeposit(500)
matthew.makeWithdrawal(125)
matthew.makeWithdrawal(260)
matthew.makeWithdrawal(140)
matthew.displayBalance() // Output: $-25

guido.transferMoney(monty,200)
guido.displayBalance()
monty.displayBalance()
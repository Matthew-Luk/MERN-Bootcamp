class User { 
    constructor(username, emailAddress) {
        this.name = username
        this.email = emailAddress
        this.account = new BankAccount(0.02,100)
    }
    makeDeposit(amount){
        this.account.balance += amount
        return this
    }
    makeWithdrawal(amount){
        this.account.balance -= amount
        return this
    }
    displayBalance(){
        console.log(`${this.name}'s`, this.account.displayAccountInfo())
    }
    transferMoney(userTwo,amount){
        this.account.balance -= amount
        userTwo.makeDeposit(amount)
    }
}

class BankAccount {
    constructor(intRate, balance) { 
        this.intRate = intRate
        this.balance = balance ? balance : 0
    }
    deposit(amount) {
        this.balance += amount
        return this
    }
    withdraw(amount) {
        this.balance -= amount
        return this
    }
    displayAccountInfo() {
        return(`Balance: $${this.balance}`)
    }
    yieldInterest() {
        this.amount = amount + (amount * (this.intRate))
        return this
    }
}

const account1 = new User("Matthew","matthewluk@gmail.com")
const account2 = new User("Abby","abbysaeturn@gmail.com")
account1.makeDeposit(100).makeDeposit(200).makeDeposit(300).transferMoney(account2,200)
account2.makeDeposit(200).makeWithdrawal(150).makeDeposit(225)
account1.displayBalance()
account2.displayBalance()
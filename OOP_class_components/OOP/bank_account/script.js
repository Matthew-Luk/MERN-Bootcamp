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
        console.log(`Balance: $${this.balance}`)
    }
    yieldInterest() {
        this.amount = amount + (amount * (this.intRate))
    }
}

const account1 = new BankAccount(0.01,100)
const account2 = new BankAccount(0.02)
account1.deposit(300).deposit(150).deposit(200).displayAccountInfo()
account2.deposit(500).deposit(450).withdraw(100).withdraw(125).withdraw(215).withdraw(110).displayAccountInfo()
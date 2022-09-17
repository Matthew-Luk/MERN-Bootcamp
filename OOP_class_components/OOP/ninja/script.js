class Ninja {
    constructor(name,health){
        this.name = name
        this.health = health
        this.speed = 3
        this.strength = 3
    }
    sayName(){
        console.log(this.name)
    }
    showStats(){
        console.log(`Name: ${this.name}, Strength: ${this.strength}, Speed: ${this.speed}, Health: ${this.health}`)
    }
    drinkSake(){
        this.health += 10
        return this
    }
}

const matthew = new Ninja("Matthew",4)
matthew.showStats()
matthew.drinkSake().showStats()

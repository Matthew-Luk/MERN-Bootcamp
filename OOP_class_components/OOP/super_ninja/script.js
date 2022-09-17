class Ninja{
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

class Sensei extends Ninja{
    constructor(name){
        super(name,200)
        this.speed = 10
        this.strength = 10
        this.wisdom = 10
    }
    speakWisdon(){
        this.drinkSake()
        console.log("What one programmer can do in one month, two programmers can do in two months.")
    }
}

const matthew = new Ninja("Matthew",4)
const mario = new Sensei("Mario")
mario.speakWisdon()
mario.showStats()
matthew.drinkSake().showStats()
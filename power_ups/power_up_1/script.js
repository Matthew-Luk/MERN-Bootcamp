const sensei = {
    myName:"Splinter",
    myAge:100,
    myWeapon:"knowledge",
    myOccupation:"Sensei",
    myLikes:["Meditation","Kung-fu","Teaching"]
}

const {myName,myAge,myWeapon,myOccupation,myLikes: [,second],myLikes} = sensei
console.log(myName,myAge,myWeapon,myOccupation,myLikes)
console.log(second)
#! usr/bin/env node

import inquirer from "inquirer";


class Player{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name;
    }
    fuelDecrease(){
        let fuel=this.fuel -25
        this.fuel=fuel
    }
    fuelIncrease(){
        this.fuel=100
    }
}
class Opponent{
    name:string;
    fuel:number=100;
    constructor(name:string){
        this.name=name
    }
    fuelDecrease(){
        let fuel=this.fuel -25
        this.fuel=fuel
    }
    }
let player=await inquirer.prompt({
    name:"name",
    type:"input",
    message:"Please enter your name:"
})
const opponent = await inquirer.prompt({
    name: "select",
    type: "list",
    message: "Select your Opponent",
    choices: ["Zombie","alien", "Skeleton"] // Explicitly define choices as an array of strings
});

const P1 = new Player(player.name);
const O1 = new Opponent(opponent.select);

do{
    if(opponent.select==="skeleton"){
        let ask=await inquirer.prompt([{
            name:"option",
            type:"list",
            choices:["Attack","Drink potion","Run for your life.."]
        }]);
        if(ask.option==="Attack"){
            let num= Math.floor(Math.random() * 2)
            if (num>0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name}fuel is ${O1.fuel}`);
                if(P1.fuel<=0){
                    console.log("you loose");
                    process.exit()
                }

            }
            if(num<=0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name}fuel is ${O1.fuel}`);
                if(O1.fuel<=0){
                    console.log("you win");
                    process.exit()
                }
            }
        }
        if(ask.option==="Drink potion"){
            P1.fuelIncrease()
            console.log(`you drnink health potion your fuel is ${P1.fuel}`)
        }
        if(ask.option==="Run for your life.."){
            console.log("you loose better luck next time");
        }
    }
    //alien
    if(opponent.select==="alien"){
        let ask=await inquirer.prompt([{
            name:"option",
            type:"list",
            choices:["Attack","Drink potion","Run for your life.."]
        }]);
        if(ask.option==="Attack"){
            let num= Math.floor(Math.random() * 2)
            if (num>0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name}fuel is ${O1.fuel}`);
                if(P1.fuel<=0){
                    console.log("you loose");
                    process.exit()
                }

            }
            if(num<=0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name}fuel is ${O1.fuel}`);
                if(O1.fuel<=0){
                    console.log("you win");
                    process.exit()
                }
            }
        }
        if(ask.option==="Drink potion"){
            P1.fuelIncrease()
            console.log(`you drnink health potion your fuel is ${P1.fuel}`)
        }
        if(ask.option==="Run for your life.."){
            console.log("you loose better luck next time");
        }
    }

    //zombie
    if(opponent.select==="zombie"){
        let ask=await inquirer.prompt([{
            name:"option",
            type:"list",
            choices:["Attack","Drink potion","Run for your life.."]
        }]);
        if(ask.option==="Attack"){
            let num= Math.floor(Math.random() * 2)
            if (num>0){
                P1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name}fuel is ${O1.fuel}`);
                if(P1.fuel<=0){
                    console.log("you loose");
                    process.exit()
                }

            }
            if(num<=0){
                O1.fuelDecrease()
                console.log(`${P1.name} fuel is ${P1.fuel}`);
                console.log(`${O1.name}fuel is ${O1.fuel}`);
                if(O1.fuel<=0){
                    console.log("you win");
                    process.exit()
                }
            }
        }
        if(ask.option==="Drink potion"){
            P1.fuelIncrease()
            console.log(`you drnink health potion your fuel is ${P1.fuel}`)
        }
        if(ask.option==="Run for your life.."){
            console.log("you loose better luck next time");
        }
    }

}
while(true)
import chalk from "chalk"
import figlet from "figlet"
import { prompt } from "inquirer"

export class Cli{
    init():void {
        console.clear()
        this.drawnHeader()
    }
    drawnHeader():void {
        console.log(chalk.blue(figlet.textSync("Tinnova")))
        console.log(chalk.redBright("Exercise #3 - Fatorial"))
        console.log(chalk.redBright("By walnei.antunes@gmail.com"))
    }

    async prompt(message:string,type:string): Promise<unknown>{
        const answer = await prompt([{
            name: "prt",
            type: type,
            message: message,
        }])   
        
        return answer.prt
    }



}
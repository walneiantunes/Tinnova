import chalk from "chalk"
import figlet from "figlet"
import Table from "cli-table"

export class Cli{
    init():void {
        console.clear()
        this.drawnHeader()
    }
    drawnHeader():void {
        console.log(chalk.blue(figlet.textSync("Tinnova")))
        console.log(chalk.redBright("Exercise #1 - Votes"))
        console.log(chalk.redBright("By walnei.antunes@gmail.com"))
    }

    drawTable(content: Array<Array<unknown>>, head: Array<string>): void{
        const table = new Table({head: head})
        
        content.forEach(row => {
            table.push(row)
        });
        
        console.log(table.toString())
        console.log()
    }

}
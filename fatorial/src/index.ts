import { Cli } from "./classes/cli"
import chalk from "chalk"
const cli = new Cli()


main()

async function main(){
    cli.init()
    
    let value: number | undefined
    do {
        value = await getValue()
    }while(value===undefined)

    const fatorial = calculateFatorial(value||0)
    
    console.log(`O fatorial de ${value} é ${fatorial}`)
    reload()
}

function stop() {
    console.log("OK, chega de fatorar por enquanto ;)")
    process.exit()
}

async function getValue(): Promise<number|undefined>{
    const value = Number(await cli.prompt("Informe o valor desejado","input"))
    
    const message: Array<string> = []
    
    if (isNaN(value)) {
        message.push("Não é um número")
    }

    if (value < 0) {
        message.push("São aceitos somente números maiores do que zero")
    }

    if (message.length > 0) {
        console.log(chalk.blueBright("Opss, o valor informado não é válido:"))
        message.forEach(msg => {
            console.log(`   - ${msg}`)
        });

        const confirmation = await cli.prompt("Deseja tentar novamente?", "confirm")
        
        if (confirmation) { 
            cli.init()
            return undefined
         }
        else {
            stop()
        }
    }
    return value
}

function calculateFatorial(value:number):number {
    if (value === 0 || value === 1) {
        return 1
    }

    let result: number=1
    for (let i = 2; i <= value; i++){
        result=result*i
    }

    return result
}

async function reload() {
    const confirmation = await cli.prompt("Deseja tentar novamente?", "confirm")
        
    if (confirmation) { 
        main()
    }
    else {
        stop()
    }
}
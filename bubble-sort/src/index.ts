import { Cli } from "./classes/cli"
import { Bubble } from "./classes/bubble"
import chalk from "chalk"
const cli = new Cli()

let bubble:Bubble
main()

async function main(){
    bubble=new Bubble()
    
    cli.init()
    
    let itens: number | undefined
    do {
        itens = await getItensQuantity()
    }while(itens===undefined)
    
    await addNewValues(itens||0)
    
    console.log("Os valores escolhidos foram:")
    console.log(`[${bubble.values.join(', ')}]`)
    
        
    bubble.sort()
    
    console.log('O valores ordenado ficam assim:')
    console.log(`[${chalk.bold.blueBright(bubble.values.join(', '))}]`)

    reload()
}

function stop() {
    console.log("OK, chega de ordenar por enquanto ;)")
    process.exit()
}

async function getItensQuantity(): Promise<number|undefined>{
    const itens = Number(await cli.prompt("Quantos itens você deseja inserir?(2-100)","input"))
    
    const message: Array<string> = []
    
    if (isNaN(itens)) {
        message.push("Não é um número")
    }

    if (itens < 2 || itens > 100) {
        message.push("São aceitos somente números entre 2 e 100")
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
    return itens
}

async function getNewValue(): Promise<number>{
    let result: unknown
    
    let value: number
    
    do {
        const result = await cli.prompt("Informe o valor desejado ou f para finalizar", "input")

        if (result === "F" || result === "f") {
            stop()
        }

        value = Number(result)

        if (isNaN(value) || value < 0) {
            console.log(chalk.blueBright("Opss, o valor informado não é válido:"))
            console.log('   -São aceitos somente números >= zero')
        }
        
    }while(isNaN(value) || value < 0)

    return value
}

async function addNewValues(quantity: number): Promise<void> {
    for (let index = 0; index < quantity; index++) {
        let response=""
        
        do {
            const value = await getNewValue()
            
            response = bubble.addValue(value)
            
            if (response !== "") {
                console.log(chalk.blueBright("Opss, o valor informado não é válido:"))
                console.log(`   -${response}`)
            }
            
        }while(response!=="")
    }
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
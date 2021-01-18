import { Cli } from "./classes/cli"
import { Votes } from "./classes/votes"
import { prompt } from "inquirer"

const cli = new Cli()

main()

function main(){
    cli.init() 
    showVotes()
    inquire()
}

function showVotes() {
    const votes = new Votes()
    
    const head = ["Eleitores", "Votos Válidos", "Votos Brancos", "Votos Nulos"]
    
    const content = [
        [votes.totalVoters, votes.validVotes, votes.whiteVotes, votes.nullVotes],
        ["% em relação ao total de eleitores",votes.validVotesPercentage,votes.whiteVotesPercentage,votes.nullVotesPercentage]
    ]
    
    cli.drawTable(content, head)
}

async function inquire() {
    const answer = await prompt([{
        name: "menu",
        type: "list",
        message: "O que faremos agora?",
        choices: ["Recalcular","Sair"]
    }])   
    
    if (answer.menu === "Recalcular") {
        console.clear()
        console.log("OK, vamos lá... Aguarde!")
        setTimeout(() => { main() },500)
    } else {
        console.log("Até a próxima!")
    }
}
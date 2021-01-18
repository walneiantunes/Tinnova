console.clear()
if (process.argv.length < 3) {
    console.log("É necessário informa um valor")
    console.log("Ex: node run sum-multiples 10")
    process.exit()
}
const val: number = Number(process.argv[2])

if (isNaN(val) || val < 0) {
    console.log("São aceitos somentes números >= 0")
    process.exit()
}

let result = 0
const parcelas:Array<number>=[]

for (let x = 0; x < val; x++){
    if (x % 3 === 0) {
        result += x
        parcelas.push(x)
        continue
    }
    if (x % 5 === 0) {
        result += x
        parcelas.push(x)
    }
}

console.log(`Os múltiplos de 3 e/ou 5 menores do que ${val} são: [${parcelas.join(', ')}] `)
console.log(`O resultado da soma é: ${result}`)



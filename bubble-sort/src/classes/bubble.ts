export class Bubble{
    public readonly values:Array<number>=[]
    
    private validateInput(input: unknown):string {
        if (typeof(input)!=="number"){
            return "O valor informado não é um número"
        }
        
        if (this.values.includes(input)) {
            return "O valor informado já foi incluído"
        }
        return ""
    }

    addValue(value: unknown): string{
        const messageError=this.validateInput(value)
        if (messageError !== "") {
            return messageError
        }
        
        this.values.push(<number>value)
        
        return ""
    }

    sort(ordeneds: Array<number> = []): void{
        const itens = this.values.length
        
        const itensOrdeneds = ordeneds.length
        if (itensOrdeneds === itens) { return }
        
        for (let i = 0; i < itens - 1 - itensOrdeneds; i++) {
            if (this.values[i] > this.values[i + 1]) {
                const swap = this.values[i]
                
                this.values[i] = this.values[i + 1]
                
                this.values[i + 1] = swap
            }
        }
        
        ordeneds.unshift(this.values[itens - 1 - itensOrdeneds])
       
        this.sort(ordeneds)
    }
}
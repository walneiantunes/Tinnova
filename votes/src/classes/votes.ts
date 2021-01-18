export class Votes{
    public readonly totalVoters = 1000
    public readonly validVotes = 800
    public readonly whiteVotes = 150
    public readonly nullVotes = 50
    
    private calculatePercentage(total:number, ratio:number) {
        return ratio*100/total
    }

    get validVotesPercentage() {
        return this.calculatePercentage(this.totalVoters,this.validVotes)
    }

    get whiteVotesPercentage() {
        return this.calculatePercentage(this.totalVoters,this.whiteVotes)
    }

    get nullVotesPercentage() {
        return this.calculatePercentage(this.totalVoters,this.nullVotes)
    }
}
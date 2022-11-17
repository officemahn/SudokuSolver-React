export class Game{

    constructor(level, score){
        this.level = level
        this.score = score
    }

    get level(){
        return this.level
    }

    get score(){
        return this.score
    }

    goToNextLevel(){
        this.level ++
    }

    updateScore(merit){
        this.score = this.score + merit
    }
}
export class Game{

    constructor(level, score){
        this.game_level = level
        this.game_score = score
    }

    set level(level){
        this.game_level = level
    }

    set score(score){
        this.game_score = score
    }

    get level(){
        return this.game_level
    }

    get score(){
        return this.game_score
    }

    goToNextLevel(){
        this.level ++
    }

    updateScore(merit){
        this.score = this.score + merit
    }
}
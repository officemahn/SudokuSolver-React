export class Game{

    constructor(level, score){
        this.level = level
        this.score = score
    }

    set level(value){
        this._level = value
    }

    set score(value){
        this._score = value
    }

    get level(){
        return this._level
    }

    get score(){
        return this._score
    }

    goToNextLevel(){
        this._level ++
    }

    updateScore(merit){
        this._score = this._score + merit
    }
}
import { Game } from "../entities/game"
const initialLevel = 1
const boards = 
[
    [    
        [8, 3, "_", "_", "_", 5, 6, "_", 9],
        ["_", 4, "_", "_", 3, "_", "_", 2, "_"],
        [6, "_", 2, 9, 4, 8, "_", 3, "_"],
        ["_", "_", "_", 3, "_", "_", 9, "_", "_"],
        [7, 6, "_", "_", 9, 2, 1, "_", "_"],
        [9, 2, "_", "_", 1, 6, 3, 7, 4],
        ["_", "_", "_", "_", "_", 9, 7, 5, "_"],
        ["_", 9, 6, 7, "_", 4, "_", "_", "_"],
        ["_", 5, "_", "_", "_", "_", "_", 9, 6]
    ],
    [
        ["_", 6, "_", "_", "_", "_", 1, "_", "_"],
        ["_", 3, 2, 6, 9, "_", "_", "_" ,"_"],
        ["_", "_", 5, "_", 7, 4, "_", 2, "_"],
        [5, 2, "_", 3, 8, 7, "_", 9, 6],
        [4, 8, "_", 5, 6, "_", 7, 1, 2],
        [9, 7, "_", "_", "_", "_", 3, "_", "_"],
        ["_", "_", 7, 4, "_", "_", "_", "_", "_"],
        ["_", "_", "_", "_", 3, 6, 5, "_", 1],
        ["_", 5, "_", "_", "_", "_", "_", 6, 4]
    ],

    [
        ["_", "_", "_", "_", 8, "_", "_", 9, 5],
        [9, "_", 6, "_", "_", "_", 8, "_", 3],
        ["_", 5, "_", 1, "_", "_", "_", "_", "_"],
        ["_", "_", "_", "_", 1, 4, 6, "_", "_"],
        [1, 6, 2, "_", 7, 8, "_", 4, 9],
        ["_", 8, 9, "_", 2, 5, 1, 3, 7],
        [5, "_", 1, 8, "_", "_", "_", 7, "_"],
        ["_", "_" ,"_" ,"_" ,9 ,"_",3, "_", "_"],
        ["_", 9, 4, 7, 6, "_", "_", "_", "_"]
    ],

    [
        [3, 6, 4, "_", "_", "_", 5, 9, 2],
        ["_", "_", "_", 4, 6, "_", 3, "_", "_"],
        ["_", "_", "_", "_", "_", "_", 4, "_", "_"],
        [7, 4, "_", "_", "_", 6, 1, 5, "_"],
        ["_", 2, 5, 3, "_", "_", "_", "_", 4],
        ["_", "_", 8, "_", "_", 4, "_", "_", "_"],
        ["_", 8, 1, "_", "_", "_", 9, "_", 5],
        [5, "_", 9, 2, "_", 1, "_", "_", "_"],
        ["_", "_", "_", "_", "_", 5, "_", 1, 3]
    ]
]

let game = new Game(0, initialLevel)

function loadBoard(){
    return boards[game.level]
}

function getHint(row, col){

}
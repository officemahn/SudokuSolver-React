const boards = 
[
    [    
        ["8", "3", "ans_5", "ans_", "ans_", "5", "6", "ans_", "9"],
        ["ans_", "4", "ans_", "ans_", "3", "ans_", "ans_", "2", "ans_"],
        ["6", "ans_", "2", "9", "4", "8", "ans_", "3", "ans_"],
        ["ans_", "ans_", "ans_", "3", "ans_", "ans_", "9", "ans_", "ans_"],
        ["7", "6", "ans_", "ans_", "9", "2", "1", "ans_", "ans_"],
        ["9", "2", "ans_", "ans_", "1", "6", "3", "7", "4"],
        ["ans_", "ans_", "ans_", "ans_", "ans_", "9", "7", "5", "ans_"],
        ["ans_", "9", "6", "7", "ans_", "4", "ans_", "ans_", "ans_"],
        ["ans_", "5", "ans_", "ans_", "ans_", "ans_", "ans_", "9", "6"]
    ],
    [
        ["ans_", "6", "ans_", "ans_", "ans_", "ans_", "1", "ans_", "ans_"],
        ["ans_", "3", "2", "6", "9", "ans_", "ans_", "ans_" ,"ans_"],
        ["ans_", "ans_", "5", "ans_", "7", "4", "ans_", "2", "ans_"],
        ["5", "2", "ans_", "3", "8", "7", "ans_", "9", "6"],
        ["4", "8", "ans_", "5", "6", "ans_", "7", "1", "2"],
        ["9", "7", "ans_", "ans_", "ans_", "ans_", "3", "ans_", "ans_"],
        ["ans_", "ans_", "7", "4", "ans_", "ans_", "ans_", "ans_", "ans_"],
        ["ans_", "ans_", "ans_", "ans_", "3", "6", "5", "ans_", "1"],
        ["ans_", "5", "ans_", "ans_", "ans_", "ans_", "ans_", "6", "4"]
    ],

    [
        ["ans_", "ans_", "ans_", "ans_", "8", "ans_", "ans_", "9", "5"],
        ["9", "ans_", "6", "ans_", "ans_", "ans_", "8", "ans_", "3"],
        ["ans_", "5", "ans_", "1", "ans_", "ans_", "ans_", "ans_", "ans_"],
        ["ans_", "ans_", "ans_", "ans_", "1", "4", "6", "ans_", "ans_"],
        ["1", "6", "2", "ans_", "7", "8", "ans_", "4", "9"],
        ["ans_", "8", "9", "ans_", "2", "5", "1", "3", "7"],
        ["5", "ans_", "1", "8", "ans_", "ans_", "ans_", "7", "ans_"],
        ["ans_", "ans_" ,"ans_" ,"ans_" ,"9" ,"ans_","3", "ans_", "ans_"],
        ["ans_", "9", "4", "7", "6", "ans_", "ans_", "ans_", "ans_"]
    ],

    [
        ["3", "6", "4", "ans_", "ans_", "ans_", "5", "9", "2"],
        ["ans_", "ans_", "ans_", "4", "6", "ans_", "3", "ans_", "ans_"],
        ["ans_", "ans_", "ans_", "ans_", "ans_", "ans_", "4", "ans_", "ans_"],
        ["7", "4", "ans_", "ans_", "ans_", "6", "1", "5", "ans_"],
        ["ans_", "2", "5", "3", "ans_", "ans_", "ans_", "ans_", "4"],
        ["ans_", "ans_", "8", "ans_", "ans_", "4", "ans_", "ans_", "ans_"],
        ["ans_", "8", "1", "ans_", "ans_", "ans_", "9", "ans_", "5"],
        ["5", "ans_", "9", "2", "ans_", "1", "ans_", "ans_", "ans_"],
        ["ans_", "ans_", "ans_", "ans_", "ans_", "5", "ans_", "1", "3"]
    ]
]


export function loadBoard(level){
    var board_copy = new Array(9).fill(undefined).map(() => new Array(9).fill(undefined));
    for(var row=0; row<9; row++ ){
        for(var col=0; col<9; col++){
            board_copy[row][col] = boards[level-1][row][col]
        }
    }

    return board_copy;
}
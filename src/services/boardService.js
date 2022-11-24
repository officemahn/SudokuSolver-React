const boards = 
[

    [    
        ["8", "3", "ans_1", "ans_2", "ans_7", "5", "6", "ans_4", "9"],
        ["ans_5", "4", "ans_9", "ans_6", "3", "ans_1", "ans_8", "2", "ans_7"],
        ["6", "ans_7", "2", "9", "4", "8", "ans_5", "3", "ans_1"],
        ["ans_4", "ans_1", "ans_5", "3", "ans_8", "ans_7", "9", "ans_6", "ans_2"],
        ["7", "6", "ans_3", "ans_4", "9", "2", "1", "ans_8", "ans_5"],
        ["9", "2", "ans_8", "ans_5", "1", "6", "3", "7", "4"],
        ["ans_2", "ans_8", "ans_4", "ans_1", "ans_6", "9", "7", "5", "ans_3"],
        ["ans_3", "9", "6", "7", "ans_5", "4", "ans_2", "ans_1", "ans_8"],
        ["ans_1", "5", "ans_7", "ans_8", "ans_2", "ans_3", "ans_4", "9", "6"]
    ],
    [
        ["ans_7", "6", "ans_4", "ans_8", "ans_2", "ans_3", "1", "ans_5", "ans_9"],
        ["ans_1", "3", "2", "6", "9", "ans_5", "ans_4", "ans_8" ,"ans_7"],
        ["ans_8", "ans_9", "5", "ans_1", "7", "4", "ans_6", "2", "ans_3"],
        ["5", "2", "ans_1", "3", "8", "7", "ans_4", "9", "6"],
        ["4", "8", "ans_3", "5", "6", "ans_9", "7", "1", "2"],
        ["9", "7", "ans_6", "ans_2", "ans_4", "ans_1", "3", "ans_8", "ans_5"],
        ["ans_6", "ans_1", "7", "4", "ans_5", "ans_2", "ans_9", "ans_3", "ans_8"],
        ["ans_2", "ans_4", "ans_8", "ans_9", "3", "6", "5", "ans_7", "1"],
        ["ans_3", "5", "ans_9", "ans_7", "ans_1", "ans_8", "ans_2", "6", "4"]
    ],

    [
        ["ans_2", "ans_1", "ans_3", "ans_4", "8", "ans_6", "ans_7", "9", "5"],
        ["9", "ans_4", "6", "ans_2", "ans_5", "ans_7", "8", "ans_1", "3"],
        ["ans_7", "5", "ans_8", "1", "ans_3", "ans_9", "ans_4", "ans_6", "ans_2"],
        ["ans_3", "ans_7", "ans_5", "ans_9", "1", "4", "6", "ans_2", "ans_8"],
        ["1", "6", "2", "ans_3", "7", "8", "ans_5", "4", "9"],
        ["ans_4", "8", "9", "ans_6", "2", "5", "1", "3", "7"],
        ["5", "ans_3", "1", "8", "ans_4", "ans_2", "ans_9", "7", "ans_6"],
        ["ans_6", "ans_2" ,"ans_7" ,"ans_5" ,"9" ,"ans_1","3", "ans_8", "ans_4"],
        ["ans_8", "9", "4", "7", "6", "ans_3", "ans_2", "ans_5", "ans_1"]
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
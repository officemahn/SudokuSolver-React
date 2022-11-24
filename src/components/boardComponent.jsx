import React, { Component } from 'react';
import {loadBoard, loadSolution} from "../services/boardService"
import Cell from './cellComponent';
class Board extends Component {
    max_hints = 9;
    score = 10;
    state = {
        board: loadBoard(this.props.level),
        highlightedCell: {row: undefined, col: undefined},
        hints: []
    }

    componentWillUnmount(){

        this.setState({board: []})
        this.setState({highlightedCell: {row: undefined, col: undefined}})
        this.setState({hints: []})
        this.score = 0;
    }

    componentDidUpdate = (prevProps) => {
        
        if(this.props.level !== prevProps.level){

            this.setState({board: loadBoard(this.props.level)});
            this.setState({hints: []});
            this.setState({highlightedCell: {row: undefined, col: undefined}});
            this.score = 0;
        }
    }

    handleCellClick = (cellRow, cellCol) => {

        {/*only save row-coloumn info of cells that are blank at the start of the game.*/}
        const board = loadBoard(this.props.level);
        if(board[cellRow][cellCol].includes("ans")){ 
            this.updateHighlightedCell(cellRow, cellCol);
        }else{
            this.updateHighlightedCell(undefined, undefined);
        }
    }

    updateHighlightedCell(cellRow, cellCol){

        const highlightedCell = {...this.state.highlightedCell};
        highlightedCell["row"] = cellRow;
        highlightedCell["col"] = cellCol;
        this.setState({highlightedCell: highlightedCell});
    }

    updateCellValue = (cellRow, cellCol, value) => {

        if(cellRow === undefined|| cellCol === undefined){
            console.log("board component - There is no cell highlighted");
            return;
        }

        {/*Update board with new cell value*/}
        const updated_board = [...this.state.board];
        updated_board[cellRow][cellCol] = value;
        this.setState({board: updated_board});
    }

    getCell(row){
        var cells = [];
        var board = loadBoard(this.props.level);
        for(let col = 0; col < 9; col++){
            cells.push(<Cell 
                className={`${board[row][col].includes("ans")? "ansCell": null} ${(this.state.hints.includes(`${row}-${col}`))? "hint": null}`} 
                onCellClick={this.handleCellClick} 
                row={row} col={col} key={`${row}-${col}`} 
                board={this.state.board}/>
            );
        }

        return cells;
    }

    evaluateSolution(){
        let is_correct_solution = true;
        let board = loadBoard(this.props.level);
        for(var row=0; row<9; row++ ){
            for(var col=0; col<9; col++){
                if(board[row][col].includes("ans_")){
                    console.log(board[row][col].split("ans_")[1], this.state.board[row][col]);
                    is_correct_solution = is_correct_solution && board[row][col].split("ans_")[1] === this.state.board[row][col];
                }
            }
        }

        console.log(board)
        console.log(this.state.board)

        if(is_correct_solution){
            this.props.updateScore(this.score);
            this.props.goToNextLevel();
        }else{
            console.log("Solution is wrong");
        }
    }

    getHint(){

        var board = loadBoard(this.props.level);
        var cellRow = this.state.highlightedCell.row;
        var cellCol = this.state.highlightedCell.col;

        if(this.state.hints.length < this.max_hints){
            if(cellRow === undefined|| cellCol === undefined){
                console.log("board component - There is no cell highlighted");
                return;
            }else{
                if(!this.state.hints.includes(`${cellRow}-${cellCol}`)){
                    this.updateCellValue(cellRow, cellCol, (board[cellRow][[cellCol]]).split("ans_")[1]);
                    let hints = [...this.state.hints];
                    hints.push(`${cellRow}-${cellCol}`);
                    this.setState({hints: hints});
                    this.score-=1;
                }
            }
        }
    }

    render() {
        return <div>
                <div>
                    <table className="SudokuBoard" border="2" frame="hsides" rules="groups"
                            summary="sudoku board">
                    <colgroup align="center" span="3"/>
                    <colgroup align="center" span="3"/>
                    <colgroup align="center" span="3"/>
                    <tbody className="cellInput">
                        <tr>{this.getCell(0)}</tr>
                        <tr>{this.getCell(1)}</tr>
                        <tr>{this.getCell(2)}</tr>  
                    </tbody>
                    <tbody className="cellInput">
                        <tr>{this.getCell(3)}</tr>
                        <tr>{this.getCell(4)}</tr>
                        <tr>{this.getCell(5)}</tr>              
                    </tbody>     
                    <tbody className="cellInput">
                        <tr>{this.getCell(6)}</tr>
                        <tr>{this.getCell(7)}</tr>
                        <tr>{this.getCell(8)}</tr>              
                    </tbody>
                    </table>
                </div>
                <div className="game-button">
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "1")}>1</button>
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "2")}>2</button>
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "3")}>3</button>
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "4")}>4</button>
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "5")}>5</button>
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "6")}>6</button>
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "7")}>7</button>
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "8")}>8</button>
                    <button onClick={() => this.updateCellValue(this.state.highlightedCell.row, this.state.highlightedCell.col, "9")}>9</button>
                </div>
                <div><button 
                className={`game-submit-btn ${this.state.hints.length === this.max_hints? "disabled": null}`} onClick={ () => this.getHint()}>Hint! {`[${this.max_hints - this.state.hints.length}]`}</button></div>
                <div><button className="game-submit-btn" onClick={ () => this.evaluateSolution()}>Submit!</button></div>
        </div>
    }
}

export default Board;
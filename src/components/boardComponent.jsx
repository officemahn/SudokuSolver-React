import React, { Component } from 'react';
import {loadBoard, loadSolution} from "../services/boardService"
import Cell from './cellComponent';
class Board extends Component {

    state = {
        board: loadBoard(this.props.level),
        highlightedCell: {row: undefined, col: undefined},
        num_hints: 0
    }

    componentWillUnmount(){

        this.setState({board: []})
        this.setState({highlightedCell: {row: undefined, col: undefined}})
        this.setState({num_hints: 0})
    }

    componentDidUpdate = (prevProps) => {
        
        if(this.props.level !== prevProps.level){

            this.setState({board: loadBoard(this.props.level)});
            this.setState({num_hints: 0})
            this.setState({highlightedCell: {row: undefined, col: undefined}})
        }
    }

    handleCellClick = (cellRow, cellCol) => {
        console.log(cellRow, cellCol);

        {/*only save row-coloumn info of cells that are blank at the start of the game.*/}
        const board = loadBoard(this.props.level);
        if(board[cellRow][cellCol].includes("ans")){ 
            this.updateHighlightedCell(cellRow, cellCol);
        }else{
            this.updateHighlightedCell(undefined, undefined);
        }
    }

    updateHighlightedCell(cellRow, cellCol){

        console.log(cellRow, cellCol);
        const highlightedCell = {...this.state.highlightedCell};
        highlightedCell["row"] = cellRow;
        highlightedCell["col"] = cellCol;
        this.setState({highlightedCell: highlightedCell});
        console.log(this.state.highlightedCell);

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
            cells.push(<Cell className={board[row][col].includes("ans")? "ansCell": null} onCellClick={this.handleCellClick} row={row} col={col} key={`${row}-${col}`} board={this.state.board}/>);
        }

        return cells;
    }

    evaluateSolution(){

        if(this.state.board.toString() === loadBoard(this.props.level).toString()){
            this.props.goToNextLevel();
        }else{
            console.log("Solution is wrong");
        }
    }

    getHint(){

        var board = loadBoard(this.props.level);
        var cellRow = this.state.highlightedCell.row;
        var cellCol = this.state.highlightedCell.col;

        if(this.state.num_hints < 3){
            if(cellRow === undefined|| cellCol === undefined){
                console.log("board component - There is no cell highlighted");
                return;
            }else{
                this.updateCellValue(cellRow, cellCol, (board[cellRow][[cellCol]]).split("ans_")[1]);
                this.setState({num_hints: this.state.num_hints+1});
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
                className={`game-submit-btn ${this.state.num_hints === 3? "disabled": null}`} onClick={ () => this.getHint()}>Hint! {`[${3 - this.state.num_hints}]`}</button></div>
                <div><button className="game-submit-btn" onClick={ () => this.evaluateSolution()}>Submit!</button></div>
        </div>
    }
}

export default Board;
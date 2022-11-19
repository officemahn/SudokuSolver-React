import React, { Component } from 'react';
import {loadBoard} from "../services/boardService"
import Cell from './cellComponent';
class Board extends Component {
    
    state = {
        board: [...loadBoard(this.props.level)],
        highlightedCell: {row: undefined, col: undefined}
    }

    componentDidMount(){
    }

    componentDidUpdate(){
        console.log("Did i rerender?")
        console.log(this.state.board)
    }
    handleCellClick = (cellRow, cellCol) => {

        console.log(cellRow, cellCol)
        const highlightedCell = {...this.state.highlightedCell};
        highlightedCell["row"] = cellRow;
        highlightedCell['col'] = cellCol;
        this.setState({highlightedCell});
    }

    updateHighlightedCell = (cellRow, cellCol, value) => {

        if(cellRow === undefined|| cellCol === undefined){
            console.log("There is no cell highlighted");
            return;
        }

        const updated_board = this.state.board.slice();
        updated_board[cellRow][cellCol] = value;
        this.setState({board: updated_board})
        console.log(this.state.board)
    }

    getCell(row){

        var cells = []
        for(let col = 0; col < 9; col++){
            cells.push(<Cell onCellClick={this.handleCellClick} row={row} col={col} key={`${row}-${col}`} board={this.state.board}/>);
        }

        return cells
    }

    board_ui = 
    <div>
        <div>{ this.state.highlightedCell.row == undefined? "" : this.state.board[this.state.highlightedCell.row][this.state.highlightedCell.col]}</div>
        <div>
            <table border="2" frame="hsides" rules="groups"
                    summary="sudoku board">
            <colgroup align="center" span="3"/>
            <colgroup align="center" span="3"/>
            <colgroup align="center" span="3"/>
            <tbody>
                <tr>{this.getCell(0)}</tr>
                <tr>{this.getCell(1)}</tr>
                <tr>{this.getCell(2)}</tr>  
            </tbody>
            <tbody>
                <tr>{this.getCell(3)}</tr>
                <tr>{this.getCell(4)}</tr>
                <tr>{this.getCell(5)}</tr>              
            </tbody>     
            <tbody>
                <tr>{this.getCell(6)}</tr>
                <tr>{this.getCell(7)}</tr>
                <tr>{this.getCell(8)}</tr>              
            </tbody>
            </table>
        </div>
        <div>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 1)}>1</button>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 2)}>2</button>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 3)}>3</button>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 4)}>4</button>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 5)}>5</button>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 6)}>6</button>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 7)}>7</button>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 8)}>8</button>
            <button onClick={() => this.updateHighlightedCell(this.state.highlightedCell.row, this.state.highlightedCell.col, 9)}>9</button>
        </div>
    </div>

    render() { 
        return this.board_ui;
    }
}


 
export default Board;
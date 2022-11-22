import React, { Component } from 'react';
import {loadBoard} from "../services/boardService"
import Cell from './cellComponent';
class Board extends Component {

    className = "board";

    state = {
        board: [...loadBoard(this.props.level-1)],
        board_with_solution: [...loadBoard(this.props.level-1)],
        hints: [],
        highlightedCell: {row: undefined, col: undefined}
    }

    componentWillUnmount(){
        this.setState({board: []})
        this.setState({board_with_solution: []})
        this.setState({hints: []})
        this.setState({highlightedCell: {row: undefined, col: undefined}})
    }

    componentDidUpdate = (prevProps) => {
        
        if(this.props.level !== prevProps.level){

            console.log("will update board here");

            const updated_board = [...loadBoard(this.props.level-1)];
            const updated_board_with_solution = [...loadBoard(this.props.level-1)];

            this.setState({board: updated_board});
            this.setState({board_with_solution: updated_board_with_solution});
        }
    }

    handleCellClick = (cellRow, cellCol) => {

        const highlightedCell = {...this.state.highlightedCell};
        highlightedCell["row"] = cellRow;
        highlightedCell["col"] = cellCol;
        this.setState({highlightedCell: highlightedCell});
    }

    updateHighlightedCell = (cellRow, cellCol, value) => {

        if(cellRow === undefined|| cellCol === undefined){
            console.log("board component - There is no cell highlighted");
            return;
        }

        const updated_board = [...this.state.board];
        updated_board[cellRow][cellCol] = value;
        this.setState({board: updated_board});
        console.log(this.state.board);
    }

    getCell(row){
        var cells = [];
        for(let col = 0; col < 9; col++){
            cells.push(<Cell onCellClick={this.handleCellClick} row={row} col={col} key={`${row}-${col}`} board={this.state.board}/>);
        }

        return cells;
    }

    evaluateSolution(){

        console.log(`board component; level before submitting board - ${this.props.level}`)
        console.log(`board component; board -:\n ${this.state.board}`)
        console.log("board component - submitting board (expecting level and score change)...");
        if(this.state.board.toString() === this.state.board_with_solution.toString()){
            this.props.goToNextLevel();
        }else{
            console.log("Solution is wrong");
        }
    }

    // getHint(){

    //     let board = this.state.board[this.props.level];
    //     let board_soln = this.state.board_with_solution[this.props.level];

    //     if()
    //     // get random row and coln
    //     // check if row and col is in hints array. If it is, try again
    //     // add hint to state, 
    // }

    render() {
        return <div>
                <div>
                    <table border="2" frame="hsides" rules="groups"
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
                {/* <div><button onClick={ () => this.getHint()}>Hint!</button></div> */}
                <div><button onClick={ () => this.evaluateSolution()}>Submit!</button></div>
        </div>
    }
}

export default Board;
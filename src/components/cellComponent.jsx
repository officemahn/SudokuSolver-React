import React, { Component, useState } from 'react';
import {loadBoard} from "../services/boardService";

class Cell extends Component {

    constructor(props){
        super(props)
    }

    state = { 
        value: null, 
        correctValue: null 
    }

    board = loadBoard(this.props.level)

    componentDidMount(){
    }
    
    render() { 
        return (<td onClick={() => console.log("heyy! - will highlight")}>{this.board[this.props.row_index][this.props.col_index]}</td>);
    }
}
 
export default Cell;
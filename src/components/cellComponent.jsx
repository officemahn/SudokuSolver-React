import React, { Component, useState } from 'react';
class Cell extends Component {

    constructor(props){
        super(props)
    }

    state = { 
        value: null, 
        correctValue: null 
    }
    
    componentDidMount(){
    }

    render() { 
        return (<td onClick={ () => this.props.onCellClick(this.props.row, this.props.col)}>{this.props.board[this.props.row][this.props.col]}</td>);
    }
}
 
export default Cell;
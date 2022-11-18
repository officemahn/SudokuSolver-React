import React, { Component } from 'react';
import {loadBoard} from "../services/boardService"
import Cell from './cellComponent';
class Board extends Component {
    
    constructor(props){
        super(props)
        this.state = {
            level: this.props.level
        }
    }

    board = loadBoard(this.props.level);

    componentDidMount(){
    }

    board = 
    <div>
        <div>
            <table border="2" frame="hsides" rules="groups"
                    summary="sudoku board">
            <colgroup align="center" span="3"/>
            <colgroup align="center" span="3"/>
            <colgroup align="center" span="3"/>
            <tbody>
                <tr><Cell /><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
                <tr><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
                <tr><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
            </tbody>
            <tbody>
                <tr><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
                <tr><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
                <tr><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
            </tbody>            
            <tbody>
                <tr><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
                <tr><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
                <tr><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/><Cell/></tr>
            </tbody>
            </table>
        </div>
    </div>

    render() { 
        return this.board;
    }
}
 
export default Board;
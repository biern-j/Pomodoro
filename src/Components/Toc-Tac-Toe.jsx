import React from 'react';
import * as R from 'ramda';

import Board from "./Board";
import PlayerImage from "./ShowPlayerImg";

const initialBoard = [
    ["", "", ""],
    ["", "", ""],
    ["", "", ""]
];


const winningCombinations = [
        [[0,0],[0,1],[0,2]],
        [[1,0],[1,1],[1,2]],
        [[2,0],[2,1],[2,2]],
        [[0,0],[1,0],[2,0]],
        [[0,1],[1,1],[2,1]],
        [[0,2],[1,2],[2,2]],
        [[0,0],[1,1],[2,2]],
        [[0,2],[1,1],[2,0]],
];


class TocTacToe extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            board: initialBoard,
            player: "O",
        };
    }
    resetGame = () => this.setState({board: initialBoard});
    onCellClick = ([x, y]) => {
        const winner = getWinner(this.state.board);
        if (this.state.board[x][y] !== "" ) {
            alert("choose empty cell");
        }
        else if (winner) {
            return;
        }
        else {
           this.setState({
                board: R.set(
                    R.lensPath([x, y]),
                    this.state.player,
                    this.state.board,
                ),
                player: this.state.player === "O" ? "X" : "O"
           });
        }
    };
    render () {
        const winner = getWinner(this.state.board);

        return (
        <div className="tic-tac-toy">
            <div style={{float: 'left'}}>
                <div>Current player</div>
                <div style={{width: '160px', height: '160px', display: 'inline-block'}}>
                    <PlayerImage player={this.state.player}/>
                </div>
            </div>
            <span>
                <button onClick={this.resetGame}>Nowa gra</button>
            </span>
            <Board winner={winner} board={this.state.board} onClick={this.onCellClick}/>
        </div>
        );
    }
}

export default TocTacToe


const getWinner = (board) => winningCombinations.map(cords => check(board, cords)).find(item => item !== undefined);

const check = (board, [x, y, z]) => {
    const first = board[x[0]][x[1]];
    return first === board[y[0]][y[1]] && board[y[0]][y[1]] === board[z[0]][z[1]] ? (first ? first : undefined) : undefined;
};

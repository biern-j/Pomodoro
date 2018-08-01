import React from 'react'
import PlayerImage from './ShowPlayerImg'


const Board = ({board, onClick, winner}) => {
    const size = [0, 1, 2];

    const renderCell = (x) => (y, index) => {
        const style = board[x][y] === winner ? {
            animation: 'App-logo-spin infinite 20s linear',
        } : {};

        return <td key={index} onClick={() => onClick([x, y])} >
            <PlayerImage style={style}  player={board[x][y]}/>
        </td>;

    };


    const renderRow = (row, index) =>
        <tr key={index}>
            {size.map(renderCell(row))}
        </tr>;

    return (
        <table>
            <tbody>
            {size.map(renderRow)}
            </tbody>
        </table>
    );
};


export default Board
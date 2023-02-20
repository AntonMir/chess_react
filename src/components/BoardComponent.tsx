import React, { FC } from 'react'
import { Board } from '../models/Board'
import CellComponent from './CellComponent'

interface IBoardProps {
    board: Board
    setBoard: (board: Board) => void
}

const BoardComponent: FC<IBoardProps> = ({board, setBoard}) => {
    return (
        <div className='board'>
            {board.cells.map((row, index) => 
                <React.Fragment key={index}>
                    {row.map(cell =>
                        <CellComponent key={cell.id} cell={cell} />
                    )}
                </React.Fragment>
            )}
        </div>
    )
}

export default BoardComponent
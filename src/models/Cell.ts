import { Board } from "./Board";
import { Colors } from "./Colors";
import { Figure } from "./figures/Figure";

/**
 * Класс - конструктор для ячеек
 */
export class Cell {
    readonly x: number; // координата Х
    readonly y: number; // координата У
    readonly color: Colors; // Цвет фигуры (играет за черных или за белых)
    figure: Figure | null; // Тип фигуры
    board: Board; // Доска
    available: boolean; // Можешь ли переместиться
    id: number; // Для реакт ключей

    constructor(board: Board, x: number, y: number, color: Colors, figure: Figure | null) {
        this.x = x
        this.y = y
        this.color = color
        this.figure = figure
        this.board = board
        this.available = false
        this.id = Math.random()
    }
}
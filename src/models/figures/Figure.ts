import logo from 'assets/black-king.png'
import { Cell } from 'models/Cell';
import { Colors } from 'models/Colors';

export enum FigureNames {
    FIGURE = 'Фигура',
    KING = 'Король',
    KNIGHT = 'Конь',
    PAWN = 'Пешка',
    QUEEN = 'Ферзь',
    ROOK = 'Ладья',
    BISHOP = 'Слон'
}

/**
 * Класс - конструктор для фигур
 */
export class Figure {
    color: Colors; // цвет фигуры
    logo: typeof logo | null; // картинка фигуры (с типом картинки)
    cell: Cell; // фигура должна знать о ячейках
    name: FigureNames; // перечисление доступных фигур
    id: number; //уникальный id фигуры

    constructor(color: Colors, cell: Cell) {
        this.color = color
        this.logo = null
        this.cell = cell
        this.cell.figure = this
        this.name = FigureNames.FIGURE
        this.id = Math.random()
    }

    /**
     * Проверка возможности передвижения на заданную ячейку
     * @param target - ячейка для возможного хода
     * @returns true || false
     */
    canMove(target: Cell) : boolean {
        if(target.figure?.color === this.color) {
            return false
        }
        if(target.figure?.name === FigureNames.KING) {
            return false
        }
        return true
    }

    /**
     * Двигаем фигуру на заданную ячейку
     * @param target - ячейка
     */
    moveFigure(target: Cell) {

    }
}
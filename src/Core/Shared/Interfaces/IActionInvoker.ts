import {IAction} from './IAction';

export interface IActionInvoker<T> {

    execute(action: IAction<T>): void;

}
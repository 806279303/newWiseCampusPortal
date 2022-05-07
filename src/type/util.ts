import FunctionPropertyNames = jest.FunctionPropertyNames;
import NonFunctionPropertyNames = jest.NonFunctionPropertyNames;

export type FunctionProperties<T> = Pick<T, FunctionPropertyNames<T>>

export type NonFunctionProperties<T> = Pick<T, NonFunctionPropertyNames<T>>
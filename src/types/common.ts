export type CallbackFunction = (...args: unknown[]) => void
export type CallbackFunctionString = (...args: string[]) => string
export type RequestCallback = (...args: UnknowObject[]) => void
export interface UnknowObject {
  [PropName: string]: unknown
} 
export type DefaultParams = undefined | UnknowObject
import { DECREMENT, INCREMENT } from "../constants"

export interface IINCREMENTAction {
  type: INCREMENT
}

export interface IDECREMENTAction {
  type: DECREMENT
}

export type ModifyAction = IINCREMENTAction | IDECREMENTAction

export const increment = (): IINCREMENTAction => ({
  type: INCREMENT
})

export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
})
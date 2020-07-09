interface Payload{
  key: string;
  value: any
}
export interface OtherActionsTypes{
  type: string;
  payload: Payload
}
export interface OtherState{
  [PropName: string]: any
}
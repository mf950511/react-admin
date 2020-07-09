import * as React from 'react'
const { useEffect } = React
import { useDispatch, useSelector } from 'react-redux'
import { AppState } from 'store/index'
import { OtherState } from 'store/normal/types'

export const useNormalDispatchEffect = (key: string) => {
  let reducerFunc: (state: AppState) => OtherState = (state) => state.normalReducer
  const dispatch = useDispatch()
  const normalInfo = useSelector(reducerFunc)
  // 切换侧边栏收起状态
  const stateKey = normalInfo[key]
  const setStateKey = (value: any) => {
    dispatch({
      type: 'normal',
      payload: {
        key,
        value
      }
    })
  }
  return [stateKey, setStateKey]
}
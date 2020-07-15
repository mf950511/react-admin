import * as React from 'react'
import { Input, Checkbox, Radio } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'store/index'
import { Todo, ADD_TODO, TOGGLE_TODO, SHOW_ALL, SHOW_ACTIVE, SHOW_COMPLETED  } from 'store/todos/types'
const { useState } = React

const { Search } = Input


const List = () => {
  const [inputValue, setInputValue] = useState('')
  // 全部列表
  const allTodoFunc: (state: AppState) => Todo[] = state => state.todosReducer
  // 筛选后列表
  const todoFunc: (state: AppState) => Todo[] = (state) => {
    const filter = state.filterReducer
    const todos = state.todosReducer
    switch(filter) {
      case SHOW_ACTIVE:
        return todos.filter(item => !item.complete)
      case SHOW_COMPLETED:
        return todos.filter(item => item.complete)
      case SHOW_ALL:
      default:
        return todos
    }
  }
  const filterFunc: (state: AppState) => string = state => state.filterReducer

  const todoState = useSelector(todoFunc)
  const filterState = useSelector(filterFunc)
  const allTodoState = useSelector(allTodoFunc)

  const dispatch = useDispatch()

  const changeFilter = (e: any) => {
    const value = e.target.value
    dispatch({
      type: value,
      payload: value
    })
  }

  // 切换待办状态
  const changeValue = (e: any, item: Todo) => {
    const checked = e.target.checked
    dispatch({
      type: TOGGLE_TODO,
      payload: {
        id: item.id,
        complete: checked
      }
    })
  }
  const changeInput = (e: any) => {
    const value = e.target.value
    setInputValue(value)
  }

  // 添加待办
  const addTodo = (value: string) => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: allTodoState.length + 1,
        complete: false,
        text: value
      }
    })
    setInputValue('')
  }
  return (
    <section className="todo-list">
      <header className="todo-header">
        <label></label>
        <Search
        placeholder="输入待办事项"
        enterButton="新增"
        size="middle"
        value={inputValue}
        onChange={ changeInput }
        onSearch={ addTodo }
      />
      </header>
      <section className="main">
        {
          todoState.map(item => (
            <div key={ item.id } className="list-wrapper"><Checkbox onChange={ (e) => { changeValue(e, item) }} checked={ item.complete }><span className={ item.complete ? 'list delete-line' : 'list'}>{ item.text }</span></Checkbox></div>
          ))
        }
      </section>
      <footer className="todo-footer">
        <span>待办：{ allTodoState.filter(item => !item.complete).length}条</span>
        <Radio.Group value={ filterState } onChange={ changeFilter }>
          <Radio value={ SHOW_ALL }>全部</Radio>
          <Radio value={ SHOW_ACTIVE }>待办</Radio>
          <Radio value={ SHOW_COMPLETED }>完成</Radio>
        </Radio.Group>
      </footer>
    </section>
  )
}

export default List
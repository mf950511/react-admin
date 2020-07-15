import * as React from 'react'
import { Input, Checkbox } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { AppState } from 'store/index'
import { Todo, ADD_TODO, TOGGLE_TODO  } from 'store/todos/types'

const { Search } = Input


const List = () => {

  const todoFunc: (state: AppState) => Todo[] = (state) => state.todosReducer
  const filterFunc: (state: AppState) => string = state => state.filterReducer

  const todoState = useSelector(todoFunc)
  const filterState = useSelector(filterFunc)

  const dispatch = useDispatch()

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

  const addTodo = (value: string) => {
    dispatch({
      type: ADD_TODO,
      payload: {
        id: todoState.length + 1,
        complete: false,
        text: value
      }
    })
  }
  return (
    <section className="todo-list">
      <header className="todo-header">
        <label></label>
        <Search
        placeholder="输入待办事项"
        enterButton="新增"
        size="large"
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

      </footer>
    </section>
  )
}

export default List
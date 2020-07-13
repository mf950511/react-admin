/*
 * @Author: your name
 * @Date: 2020-07-13 11:32:11
 * @LastEditTime: 2020-07-13 12:26:12
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \react-admin\src\lib\events.ts
 */ 

class EventEmit {
  event: any = {}
  // 记录方法
  $on(cbName: string, fn: Function){
    if(cbName in this.event) {
      if(this.event[cbName].some((item: Function) => item === fn)) {
        return
      }
      this.event[cbName].push(fn)
    } else {
      this.event[cbName] = [fn]
    }
  }


  // 触发事件
  $emit(cbName: string, ...rest: Array<any>){
    if(!this.event[cbName]) {
      return 
    }
    this.event[cbName].forEach((item: any) => {
      item.apply(null, rest)
    })
  }

  // 销毁事件
  $destory(cbName: string, fn: Function) {
    if(!this.event[cbName]) {
      return 
    }
    const index = this.event[cbName].findIndex((item: Function) => item === fn)
    if(index === -1) {
      return 
    } else {
      this.event[cbName].splice(index, 1)
    }

  }
}

export default new EventEmit()
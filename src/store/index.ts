import Vue from 'vue'
import Vuex from 'vuex'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
// export interface State{
//     count: number,
//     collapse:boolean
// }
const state= {
  count: 0,
  collapse: false
}
export type State=typeof state;
export const key: InjectionKey<Store<State>> = Symbol('store')


export const store = createStore<State>({
    state,
    mutations: {
        increment (state) {
          state.count++
        },
        setCollapse(state,payload){
          state.collapse=payload
        }
      }
  })
  export function useStore () {
    return baseUseStore(key)
  }
// export default store
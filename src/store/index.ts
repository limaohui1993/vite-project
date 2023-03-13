import Vue from 'vue'
import Vuex from 'vuex'
import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
export interface State{
    count: number
}
export const key: InjectionKey<Store<State>> = Symbol('store')

// export const store = new Vuex.Store<State>({
//   state: {
//     count: 0
//   },
//   mutations: {
//     increment (state) {
//       state.count++
//     }
//   }
// })
export const store = createStore<State>({
    state: {
      count: 0
    },
    mutations: {
        increment (state) {
          state.count++
        }
      }
  })
  export function useStore () {
    return baseUseStore(key)
  }
// export default store
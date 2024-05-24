import { configureStore } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from "react-redux"
import rowReducer from '../features/table/rowSlice';

export const store = () => {
  return configureStore({
    reducer: {
       rows: rowReducer
    }
  })
}

// Infer the type of store
export type AppStore = ReturnType<typeof store>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()
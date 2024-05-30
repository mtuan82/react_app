import { createSlice } from '@reduxjs/toolkit'
import { Row } from '../shared/table/InfoTable';

const initialState: Row[] = [
  { key: 1, model: { id: 1, name: 'Cupcake', calories: 305, carbs: 3.7, fat: 67, protein: 100 } },
  { key: 2, model: { id: 2, name: 'Donut', calories: 452, carbs: 25.0, fat: 24, protein: 25 } },
  { key: 3, model: { id: 3, name: 'Eclair', calories: 305, carbs: 3.7, fat: 67, protein: 4. } },
  { key: 4, model: { id: 4, name: 'Frozen yoghurt', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 5, model: { id: 5, name: 'Gingerbread', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 6, model: { id: 6, name: 'Honeycomb', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 7, model: { id: 7, name: 'Ice cream sandwich', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 8, model: { id: 8, name: 'Jelly Bean', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 9, model: { id: 9, name: 'KitKat', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 10, model: { id: 10, name: 'Lollipop', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 11, model: { id: 11, name: 'Marshmallow', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 12, model: { id: 12, name: 'Nougat', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
  { key: 13, model: { id: 13, name: 'Oreo', calories: 305, carbs: 3.7, fat: 67, protein: 4.3 } },
];

export const rowSlice = createSlice({
  name: 'row',
  initialState,
  reducers: {
    addRow(state, action) {
      state.push(action.payload);
    },
    updateRow(state, action) {
      const row: Row = action.payload
      const existingRow = state.find(r => r.model.id === row.model.id)
      if (existingRow) {
        existingRow.model.name = row.model.name
        existingRow.model.calories = row.model.calories
        existingRow.model.carbs = row.model.carbs
        existingRow.model.fat = row.model.fat
        existingRow.model.protein = row.model.protein
      }
    },
    deleteRow(state, action) {
      return state.filter(r => r.key != action.payload);
    }
  }
})

export const { addRow, deleteRow, updateRow } = rowSlice.actions

export default rowSlice.reducer
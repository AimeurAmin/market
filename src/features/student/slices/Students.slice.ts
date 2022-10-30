import { StudentModel } from "@features/student/StudentModel";
import { createSlice } from "@reduxjs/toolkit";
import { fetchRemoveStudent, fetchStudent, fetchStudents } from "@features/student/services/students.services";
import { RootState } from "app/store";
import { localStorageGet } from "@app/utils";


const initialState: {
  values: StudentModel[],
  loading: boolean,
  current: StudentModel | undefined,
  editMode: boolean,
} = { values: [], loading: false, current: undefined, editMode: false };

export const studentSlice = createSlice({
  name: 'student',
  initialState,
  reducers: {
    getStudents: (state, action: {payload: StudentModel[]}) => {     
      state.values = [...action.payload];
    },
    currentStudent: (state, action: {payload: any | undefined}) => {
      state.current = action.payload?.data;
    },
    setLoading: (state, action: {payload: boolean}) => {
      state.loading = action.payload;
    },
    setEditMode: (state, action: {payload: boolean}) => {
      state.editMode = action.payload;
    }
    // getStudent: (state, action: {payload: StudentModel, type: string}) => {
    //   state = state.reduce((acc, curr) => curr.id === action.payload.id ? [...acc, {...action.payload}] : [...acc, {...curr}], [])
    // }
  }
})

export const { getStudents, setLoading, currentStudent, setEditMode } = studentSlice.actions

export const selectStudents = (state: RootState) => state.students.values;
export const selectStudentsLoadingState = (state: RootState) => state.students.loading;
export const selectCurrentStudent = (state: RootState) => state.students.current;
export const selectEditMode = (state: RootState) => state.students.editMode;


export const asyncGetStudents = () => (dispatch: any) => {
  dispatch(setLoading(true));
  fetchStudents().then(result => {
    console.log('result.data');
    console.log(result.data.data);
    
    dispatch(getStudents(result.data.data));
    dispatch(setLoading(false));
  });
}

export const asyncGetStudent = ({id}: {id: string}) => (dispatch: any) => {
  dispatch(setLoading(true));
  dispatch(currentStudent(undefined))
  fetchStudent({id}).then((result:any) => {
    
    dispatch(currentStudent(result.data))
    dispatch(setLoading(false));
  })
} 


export const asyncRemoveStudent = (id: string) => (dispatch: any) => {
  dispatch(setLoading(true))
  fetchRemoveStudent({id}).then(result => {
    dispatch(getStudents(result.data));
    dispatch(setLoading(false))
  });
}
export default studentSlice.reducer
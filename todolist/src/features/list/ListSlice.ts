import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '../../app/store';
export interface ListIf {
    ListData:any[];
    inputList:{
        title:string;
        progress:number;
    }
    
}

const initialState: ListIf = {
    ListData:[
        {title:'Sparrows sky',progress:80},
        {title:'Ant Design',progress:80},
        {title:'Ant Financial Experience Technology',progress:80},
        {title:'TechUI',progress:80},
        {title:'TechUI 2.0',progress:80},
        {title:'Bigfish',progress:80},
        {title:'Umi',progress:80},
        {title:'Ant Design Pro',progress:80},
    ],
    inputList:{
        title:'',
        progress:0
    }
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.


export const listSlice = createSlice({
    name: 'user',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {
        setPushList:(state,action)=>{
            state.ListData.push(action.payload)
            //localStorage.setItem('listData',action.payload)
        },
        setInputAddTitle:(state,action)=>{
            state.inputList.title= action.payload
        },
        setInputAddProgress:(state,action)=>{
            state.inputList.progress= action.payload
        },
        setDeleteList:(state,action)=>{
            state.ListData.splice(action.payload,1)
        }
    },
    // The `extraReducers` field lets the slice handle actions defined elsewhere,
    // including actions generated by createAsyncThunk or in other slices.
    
});

export const { setPushList,setInputAddTitle,setInputAddProgress,setDeleteList} = listSlice.actions;

// The function below is called a selector and allows us to select a value from
// the state. Selectors can also be defined inline where they're used instead of
// in the slice file. For example: `useSelector((state: RootState) => state.counter.value)`

export default listSlice.reducer;

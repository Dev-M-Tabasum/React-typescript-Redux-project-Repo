import { configureStore } from "@reduxjs/toolkit";
import reducers from "./reducer";


export const store = configureStore({
    reducer: {
        reducers: reducers
    }
})

export type AppDispatch =  typeof store.dispatch;
export type RootState  =  ReturnType<typeof store.getState> ;
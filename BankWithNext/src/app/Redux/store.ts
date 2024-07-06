"use client"
import { configureStore } from "@reduxjs/toolkit";
import Bankreducer from './bankSlice'
import cardSlice from "./cardSlice";

const store = configureStore({
    reducer:{
        Bank : Bankreducer,
        card : cardSlice
    }
})
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default  store ; 
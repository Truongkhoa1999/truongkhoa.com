import { configureStore } from "@reduxjs/toolkit"
import  slideAnimationReducer, { slideAnimationProps }  from "./Reducer/slideAnimationSlice"
export const store = configureStore({
    reducer:{
        slideAnimation: slideAnimationReducer,
    },
})
export type RootState = {
    slideAnimation: slideAnimationProps; // Use the type from your slice
  };
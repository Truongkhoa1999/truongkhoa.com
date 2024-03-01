import { configureStore } from "@reduxjs/toolkit"
import  slideAnimationReducer, { slideAnimationProps }  from "./Reducer/slideAnimationSlice"
import chatMessageSlice from "./Reducer/chatMessageSlice";
export const store = configureStore({
    reducer:{
        slideAnimation: slideAnimationReducer,
        chatMessage: chatMessageSlice
    },
})
export type RootState = {
    slideAnimation: slideAnimationProps; 
    chatMessage: ReturnType<typeof chatMessageSlice>

  };
 
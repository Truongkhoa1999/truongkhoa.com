import { configureStore } from "@reduxjs/toolkit"
import  slideAnimationReducer, { slideAnimationProps }  from "./Reducer/slideAnimationSlice"
import chatMessageSliceForUserA from "./Reducer/chatMessageSliceForUserA";
import chatMessageSliceForUserB from "./Reducer/chatMessageSliceForUserB";
export const store = configureStore({
    reducer:{
        slideAnimation: slideAnimationReducer,
        chatMessageUserA: chatMessageSliceForUserA,
        chatMessageUserB: chatMessageSliceForUserB 
    },
})
export type RootState = {
    slideAnimation: slideAnimationProps; 
    chatMessageUserA: ReturnType<typeof chatMessageSliceForUserA>
    chatMessageUserB: ReturnType<typeof chatMessageSliceForUserB>

  };
 
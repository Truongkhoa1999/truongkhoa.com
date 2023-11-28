import { Dispatch, SetStateAction } from "react";

export const handleSwitchStack = (stackTitle:string,setStack:Dispatch<SetStateAction<string>>) => {
    setStack(stackTitle)

}
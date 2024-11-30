import React from "react"
import './style/backward.scss'

type BackwardArrowProps = {
    setIsContentFocused: React.Dispatch<React.SetStateAction<boolean>>;
    elementTitle:string
}

export const BackwardArrow = ({setIsContentFocused,elementTitle}:BackwardArrowProps) => {

    return(
        <button className="backButton" onClick={()=>setIsContentFocused(false)}>
            <p> {`<- ${elementTitle}`}</p>
        </button>
    )
}

export const detectSwipeDirection = (elementFrom: string, elementTo: string): string => {
    console.log("I was from page ",elementFrom)
    console.log("I am at page ",elementTo)
    const elementsArray = ["about", "stacks", "contact", "portfolio"]
   // console.log("the page is navigating to", elementTo )
   const fromIndex = elementsArray.indexOf(elementFrom)
   console.log("current index ", fromIndex)
   const toIndex = elementsArray.indexOf(elementTo) 
   console.log("to index ", toIndex)
    for (let i=0; i < elementsArray.length; i++){
        if( elementsArray[i] === elementFrom){
            if(fromIndex > toIndex){
                const direction = "sl"
                console.log(direction)
                return direction
            } else {
                const direction = "sr"
                console.log(direction)
                return direction
            }
        }
    }
    return ""
}
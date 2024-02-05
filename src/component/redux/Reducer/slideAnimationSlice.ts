import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface slideAnimationProps {
    navbarArray: string[];
    previousSite: string;
  destinySite: string;
  outputSlideDirection: string;
}
const initialState : slideAnimationProps = {
    navbarArray: ["about", "stacks", "contact", "portfolio"],
    previousSite: "",
    destinySite: "",
    outputSlideDirection: "",
}

export const slideAnimationReducer = createSlice({
  name: "slideAnimation",
  initialState,
  reducers: {
    determineSlideDirection: (state, action: PayloadAction<{previousSite:string,destinySite:string}>) => {
      state.previousSite = action.payload.previousSite;
      console.log("this is current site payload", action.payload.previousSite)
      state.destinySite = action.payload.destinySite;
      console.log("this is destiny site payload", action.payload.destinySite)

      if (state.previousSite && state.destinySite){
        const currentSiteIndex = state.navbarArray.indexOf(action.payload.previousSite)
        const destinySiteIndex = state.navbarArray.indexOf(action.payload.destinySite)
        if(currentSiteIndex != -1 && destinySiteIndex != -1){
            currentSiteIndex > destinySiteIndex? state.outputSlideDirection = 'sl' : state.outputSlideDirection = 'sr'
        }
      }
    },
  },
});
export const { determineSlideDirection } = slideAnimationReducer.actions;

export default slideAnimationReducer.reducer;
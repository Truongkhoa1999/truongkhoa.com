import { PayloadAction, createSlice } from "@reduxjs/toolkit";
export interface messageProps {
  id: string;
  sender: string;
  content: string;
}
interface ChatState {
  messages: messageProps[];
}
const initialState: ChatState = {
  messages: [],
};
 const chatMessageSliceForUserB = createSlice({
  name: "chatMessage",
  initialState,
  reducers: {
    addMessageForUserB: (state, action: PayloadAction<messageProps>) => {
      state.messages.push(action.payload);
    },
  },
});
export const {addMessageForUserB} = chatMessageSliceForUserB.actions
export default chatMessageSliceForUserB.reducer


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
 const chatMessageSliceForUserA = createSlice({
  name: "chatMessage",
  initialState,
  reducers: {
    addMessageForUserA: (state, action: PayloadAction<messageProps>) => {
      state.messages.push(action.payload);
    },
  },
});
export const {addMessageForUserA} = chatMessageSliceForUserA.actions
export default chatMessageSliceForUserA.reducer


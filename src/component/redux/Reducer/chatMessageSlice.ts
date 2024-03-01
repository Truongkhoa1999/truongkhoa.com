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
 const chatMessageSlice = createSlice({
  name: "chatMessage",
  initialState,
  reducers: {
    addMessage: (state, action: PayloadAction<messageProps>) => {
      state.messages.push(action.payload);
    },
  },
});
export const {addMessage} = chatMessageSlice.actions
export default chatMessageSlice.reducer


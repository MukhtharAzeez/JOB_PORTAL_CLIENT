import { Socket } from "socket.io-client";
import { create } from "zustand";

interface State {
  socket: Socket;
  setSocket: any;
  chat: {};
  setChat: any;
  onlineUsers: [];
  setOnlineUsers: any;
  sendMessage: [];
  setSendMessage: any;
  receiveMessages: [];
  setReceiveMessages: any;
}

export const messageStore = create<State>((set) => ({
  socket: null,
  setSocket: (socket: Socket) => set(() => ({ socket })),
  chat: null,
  setChat: (chat: any) => set(() => ({ chat })),
  onlineUsers: null,
  setOnlineUsers: (users: any) => set(() => ({ onlineUsers: users })),
  sendMessage: null,
  setSendMessage: (msg: any) => set(() => ({ sendMessage: msg })),
  receiveMessages: null,
  setReceiveMessages: (msg: any) => set(() => ({ receiveMessages: msg })),
}));

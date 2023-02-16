import "../styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Provider } from "react-redux";
import store from "../redux/store";
import { allUsersIdStore, messageStore, useProgressStore } from "../zustand";
import { useRouter } from "next/router";
import { useEffect } from "react";
import { Progress } from "../components/Progress";
import { io } from "socket.io-client";
import { Notifier } from "../components/Common/Notifier/Notifier";


const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

export default function App({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const setSocket = messageStore((state) => state.setSocket);
  const setOnlineUsers = messageStore((state) => state.setOnlineUsers); 
  const socket = messageStore((state) => state.socket);
  const id = allUsersIdStore((state)=>state.id)
  const setIsAnimating = useProgressStore((state)=>state.setIsAnimating);
  const isAnimating = useProgressStore((state)=>state.isAnimating);
  useEffect(() => {
    const socket = io(process.env.NEXT_PUBLIC_SOCKET_DOMAIN);
    setSocket(socket)
  }, [])
  useEffect(() => {
    if (socket && id) {
      socket.emit("new-user-add", id);
    }
  }, [socket])

  useEffect(() => {
    if (socket && id) {
      socket.on("get-user", (users) => {
        setOnlineUsers(users);
      });
    }
  }, [id, socket]);

  useEffect(()=>{
    const handleStart=()=>{
      setIsAnimating(true)
    }
    const handleStop=()=>{
      setIsAnimating(false)
    }
    router.events.on('routeChangeStart',handleStart)
    router.events.on('routeChangeComplete', handleStop)
    router.events.on('routeChangeError', handleStop)
    return ()=>{
      router.events.off('routeChangeStart', handleStart)
      router.events.off('routeChangeComplete', handleStop)
      router.events.off('routeChangeError', handleStop)
    }

  },[router])
  
  return (
    <Provider store={store}>
      <ThemeProvider theme={darkTheme}>
        <SessionProvider session={pageProps.session}>
          <Progress isAnimating={isAnimating}/>
          <Component {...pageProps} />
          <Notifier />
        </SessionProvider>
      </ThemeProvider>
    </Provider>
  );
}

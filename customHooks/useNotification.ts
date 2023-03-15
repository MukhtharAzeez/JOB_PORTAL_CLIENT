import { useDispatch } from "react-redux";
import { useContext, useEffect, useState } from "react";
// import { makeNotification } from "../APIs";
import { allUsersIdStore, messageStore } from "../zustand";
import { notifierActions } from "../redux/notifier/Notifier";
import { sendNotification } from "../api/notifications";
import { AuthorizationContext } from "../contexts/AuthorizationContext";

export interface Notification {
  _id?: string;
  author?: string;
  receiver: string;
  content: string;
  type: "error" | "warning" | "info" | "success";
  createdAt?: Date;
  updatedAt?: Date;
}

export default function useNotification() {
    const { alertToLogin } = useContext(AuthorizationContext);
    const dispatch = useDispatch();
  const socket = messageStore((state) => state.socket);
  const currentUser = allUsersIdStore((state) => state.id);
  const [notification, setNotification] = useState<Notification>();

  const isValid = () => {
    return currentUser && notification !== undefined && socket;
  };

  const createNewNotification = async () => {
    try {
      if (isValid()) {
          try {
            const newNotification = await sendNotification(notification);
            if (newNotification) {
              socket?.emit("send-notification", notification);
              setNotification(undefined);
            }
          } catch (err: any) {
            if (err?.response?.data?.statusCode === 401) {
              alertToLogin();
              return;
            }
          }
      }
    } catch (err) {
      console.log({ err });
      dispatch(
        notifierActions.error(
          `Something went wrong when creating notification !`
        )
      );
    }
  };

  // Invoking createNewNotification() to create a new notification when
  // `notification` is being updated from any components.
  useEffect(() => {
    createNewNotification();
  }, [notification]);

  return setNotification;
}

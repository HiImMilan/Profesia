import { React, createContext, useState, useContext } from "react";
const ToastContext = createContext();

export function useToast() {
  return useContext(ToastContext);
}
export function ToastProvider(props) {
  const [toasts, setToast] = useState([]);

  function addToast(title, paragraph) {
    const id = Math.random() * 9999999;
    setToast([
      ...toasts,
      {
        id: id,
        title,
        paragraph,
      },
    ]);
  }
  function removeToast(id) {
    setToast([...toasts].filter((toast) => toast.id !== id));
  }

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast }}>
      {props.children}
    </ToastContext.Provider>
  );
}

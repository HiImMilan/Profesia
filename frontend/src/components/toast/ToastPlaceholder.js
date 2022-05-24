import { useEffect, useState, useContext } from "react";

import Toast from "./Toast";
import { useToast } from "./ToastContext";

export default function ToastPlaceholder() {
  const ToastContext = useToast();
  return (
    <div className="fixed top-0 left-0 flex flex-col">
      {ToastContext.toasts.map((toast) => {
        return (
          <Toast
            key={toast.id}
            title={toast.title}
            paragraph={toast.paragraph}
            onChange={() => ToastContext.removeToast(toast.id)}
          />
        );
      })}
    </div>
  );
}

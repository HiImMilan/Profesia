import { useEffect, useState } from "react";
import Toast from "./Toast";
export default function ToastPlaceholder(props, onRemove) {
  return (
    <div className="fixed top-0 left-0 flex flex-col">
      {props.toasts.map((toast, index) => {
        return (
          <Toast
            key={toast.id}
            title={toast.title}
            paragraph={toast.paragraph}
            onChange={() => onRemove(toast.id)}
          ></Toast>
        );
      })}
    </div>
  );
}

import { useEffect, useState } from "react";
import Toasty from "./Toasty";
import Toast from "./Toast";
export default function ToastPlaceholder() {
  return (
    <div className="fixed top-0 left-0 flex flex-col">
      {Toasty.getInstance()
        .Get()
        .map((toast, index) => {
          return (
            <Toast
              key={toast.id}
              title={toast.title}
              paragraph={toast.paragraph}
              onChange={() => {
                Toasty.getInstance().Remove(toast);
              }}
            ></Toast>
          );
        })}
    </div>
  );
}

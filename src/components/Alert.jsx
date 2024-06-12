import { useState } from "react";

export default function Alert({ children }) {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
      className="fixed top-[4rem] left-1/2 transform -translate-x-1/2 bg-black shadow-white text-white border rounded-md p-4 shadow-md z-50 w-full sm:w-1/2"
    >
      <div className="flex justify-between items-center">
        <div>{children}</div>
        <button
          onClick={() => setIsVisible(false)}
          aria-label="Close alert"
          className="text-white hover:text-red-200"
        >
          &times;
        </button>
      </div>
    </div>
  );
}

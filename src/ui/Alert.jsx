import React, { useState } from "react";

const Alert = ({ type, message }) => {
  const [isVisible, setIsVisible] = useState(true);

  if (!isVisible) return null;

  return (
    <div
      className={`flex items-center p-4 mb-4
      ${
        type === "success"
          ? "text-green-800 border border-green-300 rounded-lg bg-green-50"
          : "text-red-800 border border-red-300 rounded-lg bg-red-50"
      }
         `}
      role="alert"
    >
      {/* Checkmark Icon */}
      <svg
        className="flex-0 w-5 h-5 mr-3"
        fill="currentColor"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
          clipRule="evenodd"
        />
      </svg>

      {/* Alert Text */}
      <div className="text-sm font-medium">{message}</div>

      {/* Close Button */}
      <button
        type="button"
        onClick={() => setIsVisible(false)}
        className={`ml-auto -mx-1.5 -my-1.5 rounded-lg focus:ring-2 p-1.5 hover:inline-flex items-center justify-center h-8 w-8 ${
          type === "success"
            ? "bg-green-50 text-green-500 focus:ring-green-400 hover:bg-green-200"
            : "bg-red-50 text-red-500 focus:ring-red-400 hover:bg-red-200"
        }`}
        aria-label="Close"
      >
        <span className="sr-only">Close</span>
        <svg
          className="w-3 h-3"
          aria-hidden="true"
          fill="none"
          viewBox="0 0 14 14"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
          />
        </svg>
      </button>
    </div>
  );
};

export default Alert;

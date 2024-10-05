import React from "react";

export const NotificationImageForm = () => {
  return (
    <div>
      <p>Image*</p>
      <div className="flex items-center justify-center w-full p-4 pb-6">
        <label className="flex flex-col items-center justify-center w-60 h-40 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50">
          <div className="flex flex-col items-center justify-center pt-5 pb-6">
            <svg
              className="w-14 h-10 mb-4 text-gray-300 "
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 16"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                strokeWidth="2"
                d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
              />
            </svg>
          </div>
          <input id="dropzone-file" type="file" className="hidden" />
        </label>
      </div>
      <div className="pt-16">
        <div className=" text-sm text-gray-500 border-2 border-r-4 border-gray-300 rounded-lg p-2 bg-gray-200">
          <p>Choose file</p>
        </div>
      </div>
    </div>
  );
};

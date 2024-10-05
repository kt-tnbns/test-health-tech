"use client";
import React from "react";
import { useNotificationFormState } from "@/app/components/notification/useNotificationFromState";
import { NotificationImageForm } from "@/app/components/notification/NotificationImageForm";
import { NotificationInputForm } from "@/app/components/notification/NotificationInputForm";

export const NotificationForm = () => {
  const { control, handleSubmit, onSubmit } = useNotificationFormState();
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
        <div className="grid grid-cols-2 gap-4">
          <NotificationInputForm control={control} />
          <NotificationImageForm />
        </div>
      </div>

      <div className="flex space-x-2 py-4 justify-end ">
        <button
          type="reset"
          className="bg-gray-300 text-black py-2 px-4 rounded-lg hover:bg-gray-400 "
          style={{ width: "140px" }}
        >
          Reset
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
          style={{ width: "140px" }}
        >
          Submit
        </button>
      </div>
    </form>
  );
};

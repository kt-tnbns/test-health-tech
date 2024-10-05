import { NotificationForm } from "@/app/types/notification";
import React from "react";
import { Control, Controller } from "react-hook-form";

type NotificationInputFormProps = {
  control: Control<NotificationForm>;
};

export const NotificationInputForm = ({
  control,
}: NotificationInputFormProps) => {
  return (
    <div className="space-y-4 ">
      {/* Title */}
      <Controller
        name="title"
        control={control}
        render={({ field }) => (
          <div>
            <p className="mb-2">Title (Default)</p>
            <input
              {...field}
              className="w-full border border-gray-300 rounded-lg p-2"
              placeholder="ร่วมกิจกรรมออกบูธ กับ Telehealth"
            />
          </div>
        )}
      />
      <div>
        <Controller
          name="zone"
          control={control}
          render={({ field }) => (
            <div>
              <p className="mb-2">Coupon Type</p>
              <select
                {...field}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option defaultValue="" disabled>
                  New Banner
                </option>
                <option value="percentage">Percentage</option>
                <option value="flat">Flat</option>
              </select>
            </div>
          )}
        />
      </div>
      <div>
        <Controller
          name="receiver"
          control={control}
          render={({ field }) => (
            <div>
              <p className="mb-2">Coupon Type</p>
              <select
                {...field}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option defaultValue="" disabled>
                  Customer
                </option>
                <option value="percentage">Percentage</option>
                <option value="flat">Flat</option>
              </select>
            </div>
          )}
        />
      </div>
      <div>
        <Controller
          name="description"
          control={control}
          render={({ field }) => (
            <div>
              <p className="mb-2">Coupon Type</p>
              <select
                {...field}
                className="w-full border border-gray-300 rounded-lg p-2"
              >
                <option defaultValue="" disabled>
                  รายละเอียด
                </option>
                <option value="percentage">Percentage</option>
                <option value="flat">Flat</option>
              </select>
            </div>
          )}
        />
      </div>
    </div>
  );
};

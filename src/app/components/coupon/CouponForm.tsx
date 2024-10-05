"use client";
import React from "react";
import { Controller } from "react-hook-form";
import { useCouponFormState } from "@/app/components/coupon/useCouponFormState";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export const CouponForm = () => {
  const { control, handleSubmit, onSubmit, handleDateChange } =
    useCouponFormState();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="border border-gray-300 rounded-lg p-4 shadow-lg">
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
                />
              </div>
            )}
          />

          {/* Coupon Type, Store, Customer, Code */}
          <div className="grid grid-cols-4 gap-4">
            <div>
              <Controller
                name="couponType"
                control={control}
                render={({ field }) => (
                  <div>
                    <p className="mb-2">Coupon Type</p>
                    <select
                      {...field}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    >
                      <option value="percentage">Percentage</option>
                      <option value="flat">Flat</option>
                    </select>
                  </div>
                )}
              />
            </div>

            <div>
              <Controller
                name="store"
                control={control}
                render={({ field }) => (
                  <div>
                    <p className="mb-2">Store</p>
                    <select
                      {...field}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    >
                      <option value="store1">Store 1</option>
                      <option value="store2">Store 2</option>
                    </select>
                  </div>
                )}
              />
            </div>

            <div>
              <Controller
                name="customer"
                control={control}
                render={({ field }) => (
                  <div>
                    <p className="mb-2">Select Customer</p>
                    <select
                      {...field}
                      className="w-full border border-gray-300 rounded-lg p-2"
                    >
                      <option value="customer1">Customer 1</option>
                      <option value="customer2">Customer 2</option>
                    </select>
                  </div>
                )}
              />
            </div>

            <div>
              <Controller
                name="code"
                control={control}
                render={({ field }) => (
                  <div>
                    <p className="mb-2">Code</p>
                    <input
                      {...field}
                      className="w-full border border-gray-300 rounded-lg p-2"
                      placeholder="Enter code"
                    />
                  </div>
                )}
              />
            </div>
          </div>

          {/* Limit and Discount Type */}
          <div className="grid grid-cols-4 gap-4">
            <Controller
              name="limit"
              control={control}
              render={({ field }) => (
                <div>
                  <p className="mb-2">Limit for same user</p>
                  <input
                    {...field}
                    type="number"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Enter limit"
                  />
                </div>
              )}
            />

            <Controller
              name="startDate"
              control={control}
              render={({ field }) => (
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    Start Date
                  </label>
                  <DatePicker
                    placeholderText="DD/MM/YYYY"
                    defaultValue={field.value}
                    onChange={(date) => handleDateChange("startDate", date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-80 border border-gray-300 p-2 rounded-lg"
                  />
                </div>
              )}
            />

            {/* End Date */}
            <Controller
              name="endDate"
              control={control}
              render={({ field }) => (
                <div className="w-full">
                  <label className="block mb-2 text-sm font-medium text-gray-700">
                    End Date
                  </label>
                  <DatePicker
                    placeholderText="DD/MM/YYYY"
                    defaultValue={field.value}
                    onChange={(date) => handleDateChange("endDate", date)}
                    dateFormat="dd/MM/yyyy"
                    className="w-80 border border-gray-300 p-2 rounded-lg "
                  />
                </div>
              )}
            />

            <Controller
              name="discountType"
              control={control}
              render={({ field }) => (
                <div>
                  <p className="mb-2">Discount Type</p>
                  <select
                    {...field}
                    className="w-full border border-gray-300 rounded-lg p-2"
                  >
                    <option value="percentage">Percentage</option>
                    <option value="flat">Flat</option>
                  </select>
                </div>
              )}
            />
          </div>

          {/* Discount, Max Discount, Min Purchase */}
          <div className="grid grid-cols-4 gap-4">
            <Controller
              name="discount"
              control={control}
              render={({ field }) => (
                <div>
                  <p className="mb-2">Discount</p>
                  <input
                    {...field}
                    type="number"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Enter discount"
                  />
                </div>
              )}
            />

            <Controller
              name="maxDiscount"
              control={control}
              render={({ field }) => (
                <div>
                  <p className="mb-2">Max Discount (฿)</p>
                  <input
                    {...field}
                    type="number"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Enter max discount"
                  />
                </div>
              )}
            />

            <Controller
              name="minPurchase"
              control={control}
              render={({ field }) => (
                <div>
                  <p className="mb-2">Min Purchase (฿)</p>
                  <input
                    {...field}
                    type="number"
                    className="w-full border border-gray-300 rounded-lg p-2"
                    placeholder="Enter minimum purchase"
                  />
                </div>
              )}
            />
          </div>
        </div>

        {/* Buttons */}
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

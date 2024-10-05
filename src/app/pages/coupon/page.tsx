import { HeaderText } from "@/app/components/base/HeaderText";
import { CouponForm } from "@/app/components/coupon/CouponForm";
import { CouponLanguageTab } from "@/app/components/coupon/CouponLanguageTab";
import React from "react";

const CouponPage = () => {
  return (
    <div className="space-y-4">
      <HeaderText text="Coupon" />
      <CouponLanguageTab />
      <CouponForm />
    </div>
  );
};

export default CouponPage;

export type CouponFormValues = {
  title: string;
  couponType: string;
  store: string;
  customer: string;
  code: string;
  limit: number;
  startDate: Date | null;
  endDate: Date | null;
  discountType: string;
  discount: number;
  maxDiscount: number;
  minPurchase: number;
};

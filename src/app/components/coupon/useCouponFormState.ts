import { CouponFormValues } from "@/app/types/coupon";
import { useForm } from "react-hook-form";

export const useCouponFormState = () => {
  const { control, setValue, handleSubmit } = useForm<CouponFormValues>({
    defaultValues: {
      title: "",
      couponType: "",
      store: "",
      customer: "",
      code: "",
      limit: 0,
      startDate: null,
      endDate: null,
      discountType: "",
      discount: 0,
      maxDiscount: 0,
      minPurchase: 0,
    },
  });

  const handleDateChange = (
    name: keyof CouponFormValues,
    date: Date | null
  ) => {
    setValue(name, date);
  };

  const onSubmit = (data: CouponFormValues) => {
    console.log(data);
  };

  return { control, handleSubmit, onSubmit, handleDateChange };
};

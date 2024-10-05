import { NotificationForm } from "@/app/types/notification";
import { useForm } from "react-hook-form";

export const useNotificationFormState = () => {
  const { control, handleSubmit } = useForm<NotificationForm>({
    defaultValues: {
      title: "",
      zone: "",
      receiver: "",
      description: "",
    },
  });

  const onSubmit = (data: NotificationForm) => {
    console.log(data);
  };

  return { control, handleSubmit, onSubmit };
};

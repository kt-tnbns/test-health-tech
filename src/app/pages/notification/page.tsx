import { HeaderText } from "@/app/components/base/HeaderText";
import { NotificationForm } from "@/app/components/notification/NotificationForm";
import React from "react";

const NotificationPage = () => {
  return (
    <div className="space-y-4">
      <HeaderText text="Notification" />
      <NotificationForm />
    </div>
  );
};

export default NotificationPage;

import React from "react";

export const HeaderText = ({ text }: { text: string }) => {
  return (
    <div>
      <h1 className="text-2xl font-bold">{text}</h1>
    </div>
  );
};

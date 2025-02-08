"use client";
import { CardTitle } from "@/components/ui/card";
import { useState } from "react";
import WeightDialog from "./WeighDialog/WeightDialog";

export default function ActionsBar() {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <CardTitle>Actions </CardTitle>
      <WeightDialog open={open} setOpen={setOpen} />
    </div>
  );
}

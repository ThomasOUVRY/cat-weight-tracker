"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogHeader,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Weight } from "lucide-react";
import { addWeight } from "@/lib/data";

import { useState } from "react";
import { revalidatePath } from "next/cache";

export default function WeightActions({ catId }: { catId: string }) {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

  const handleSubmit = async () => {
    try {
      await addWeight(catId, weight, date);
      revalidatePath(`/${catId}`);
    } catch (error) {
      console.error("Failed to add weight:", error);
    }
  };

  return (
    <div className="flex gap-2 justify-end">
      <Button onClick={() => setDialogOpen(true)}>
        <Weight />
        <span>Ajouter un poids</span>
      </Button>
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Ajouter un poids</DialogTitle>
          </DialogHeader>
          <DialogDescription>
            Ajouter un poids pour votre chat
          </DialogDescription>
          <fieldset className="flex flex-col gap-2">
            <Input
              type="number"
              placeholder="Poids"
              value={weight}
              onChange={(e) => setWeight(Number(e.target.value))}
            />

            <Input
              type="date"
              placeholder="Date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </fieldset>
          <DialogFooter>
            <Button onClick={handleSubmit}>Ajouter</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

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

import { useState } from "react";

export default function WeightActions() {
  const [dialogOpen, setDialogOpen] = useState(false);

  const [weight, setWeight] = useState(0);
  const [date, setDate] = useState(new Date().toISOString().split("T")[0]);

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
            <div className="flex flex-col gap-2">
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
            </div>
          </DialogDescription>
          <DialogFooter>
            <Button onClick={() => setDialogOpen(false)}>Ajouter</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

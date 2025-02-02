import { Button } from "@/components/ui/button";
import { CardTitle } from "@/components/ui/card";
import { Plus } from "lucide-react";

export default function ActionsBar() {
  return (
    <div className="flex items-center justify-between">
      <CardTitle>Actions </CardTitle>
      <Button>
        <Plus />

        <span>Ajouter un poids</span>
      </Button>
    </div>
  );
}

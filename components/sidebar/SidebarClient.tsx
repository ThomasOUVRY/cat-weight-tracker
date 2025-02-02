"use client";

import { Cat } from "@/lib/definition";
import { Plus } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";

export default function SidebarClient({ cats }: { cats: Cat[] }) {
  const router = useRouter();
  const [selectedCatId, setSelectedCatId] = useState<string>();
  const selectedCat = cats.find((cat) => cat.cat_id === selectedCatId);

  if (!selectedCatId) {
    setSelectedCatId(cats[0].cat_id);
  }

  useEffect(() => {
    if (selectedCatId) {
      router.push(`/${selectedCatId}`);
    }
  }, [selectedCatId]);

  return (
    <>
      <div className="flex items-center gap-2">
        <Select onValueChange={setSelectedCatId} value={selectedCatId}>
          <SelectTrigger>
            <SelectValue placeholder="Select a cat" />
          </SelectTrigger>

          <SelectContent>
            {cats.map((cat) => (
              <SelectItem key={cat.cat_id} value={cat.cat_id}>
                {cat.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <button>
          <Plus />
        </button>
      </div>
    </>
  );
}

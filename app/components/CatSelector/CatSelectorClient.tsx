"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Cat } from "@/lib/definition";
import { useParams, useRouter } from "next/navigation";

interface CatSelectorProps {
  initialCats: Cat[];
}

export default function CatSelectorClient({ initialCats }: CatSelectorProps) {
  const router = useRouter();
  const params = useParams<{ catId: string }>();

  const onValueChange = (value: string) => {
    console.log(value);
    router.push(`/${value}`);
  };

  const currentCat = params.catId || initialCats[0].cat_id;

  return (
    <Select value={currentCat} onValueChange={onValueChange}>
      <SelectTrigger>
        <SelectValue placeholder="Select a cat" />
      </SelectTrigger>
      <SelectContent>
        {initialCats.map(({ cat_id, name }) => (
          <SelectItem key={cat_id} value={cat_id}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

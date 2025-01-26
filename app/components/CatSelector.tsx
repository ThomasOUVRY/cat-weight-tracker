import { fetchCatList, fetchUsersCats } from "@/lib/data";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default async function CatSelector() {
  const catList = await fetchUsersCats("c7f6072d-2c31-4ab5-9b43-b2aba55241e6");
  console.log(catList);

  return (
    <Select defaultValue={catList[0]}>
      <SelectTrigger>
        <SelectValue placeholder="Select a cat" />
      </SelectTrigger>
      <SelectContent>
        {catList.map((cat) => (
          <SelectItem key={cat} value={cat}>
            {cat}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CatSelector from "./CatSelector/CatSelector";
import CatAge from "./CatAge/CatAge";
import { fetchCat } from "@/lib/data";
import { Separator } from "@/components/ui/separator";

type CatInfoProps = {
  catId: string;
};

export default async function CatInfo({ catId }: CatInfoProps) {
  const cat = await fetchCat(catId);
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Votre chat</CardTitle>
      </CardHeader>
      <CardContent>
        <CatSelector />
        <Separator className="my-4" />
        <CatAge birthDate={cat.birth_date} />
      </CardContent>
    </Card>
  );
}

"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import CatSelector from "./CatSelector/CatSelector";
import CatAge from "./CatAge/CatAge";
import { fetchCat } from "@/lib/data";
import { Separator } from "@/components/ui/separator";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "next/navigation";
import { Cat } from "@/lib/definition";

export default function CatInfo() {
  const { catId } = useParams<{ catId: string }>();
  const [cat, setCat] = useState<Cat | null>(null);

  useEffect(() => {
    const fetchCatData = async () => {
      const cat = await fetchCat(catId);
      setCat(cat);
    };
    fetchCatData();
  }, [catId]);

  if (!cat) return null;

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

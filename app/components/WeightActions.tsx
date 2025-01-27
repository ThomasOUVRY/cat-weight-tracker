"use server";

import { fetchCat } from "@/lib/data";
import { notFound } from "next/navigation";

export default async function WeightActions({ catId }: { catId: string }) {
  const cat = await fetchCat(catId);

  if (!cat) {
    return notFound();
  }

  return (
    <div>
      Le chat est {cat.name} et est né le{" "}
      {new Date(cat.birth_date).toLocaleDateString()}
    </div>
  );
}

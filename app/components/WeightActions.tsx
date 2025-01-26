"use server";

import { fetchCatList } from "@/lib/data";

export default async function WeightActions() {
  const catList = await fetchCatList();

  return <pre>{JSON.stringify(catList, null, 2)}</pre>;
}

import { fetchUsersCats } from "@/lib/data";
import CatSelectorClient from "./CatSelectorClient";

// Server Component wrapper
export default async function CatSelector() {
  const catList = await fetchUsersCats("c7f6072d-2c31-4ab5-9b43-b2aba55241e6");
  return <CatSelectorClient initialCats={catList} />;
}

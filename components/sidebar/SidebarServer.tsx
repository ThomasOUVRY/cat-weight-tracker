import { fetchCatList } from "@/lib/data";
import { Plus } from "lucide-react";
import SidebarClient from "./SidebarClient";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";

export default async function SidebarServer() {
  const cats = await fetchCatList();

  return (
    <aside>
      <Card className="h-full">
        <CardHeader>
          <CardTitle>Cat Care</CardTitle>
        </CardHeader>
        <CardContent>
          <SidebarClient cats={cats} />
        </CardContent>
      </Card>
    </aside>
  );
}

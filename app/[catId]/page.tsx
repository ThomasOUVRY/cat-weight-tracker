import { CatPageParams } from "@/types/PageParam";
import ActionsBar from "./components/ActionsBar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import WeightGraphServer from "./components/WeightGraph/WeightGraphServer";
import { Suspense } from "react";

export default async function CatPage({
  params,
}: {
  params: Promise<CatPageParams>;
}) {
  const { catId } = await params;

  return (
    <Card className="h-full">
      <CardHeader>
        <ActionsBar />
      </CardHeader>

      <CardContent>
        <Suspense fallback={<Skeleton className="h-[300px] w-full" />}>
          <WeightGraphServer catId={catId} />
        </Suspense>
      </CardContent>
    </Card>
  );
}

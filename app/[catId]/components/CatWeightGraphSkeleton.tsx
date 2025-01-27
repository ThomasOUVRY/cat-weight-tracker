import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CatWeightGraphSkeleton() {
  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Graphique du poids</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4">
          <Skeleton className="h-full" />
          <Skeleton className="h-full" />
          <Skeleton className="h-full" />
        </div>
      </CardContent>
    </Card>
  );
}

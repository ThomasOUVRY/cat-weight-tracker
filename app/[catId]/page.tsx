import { Suspense } from "react";
import WeightActions from "../components/WeightActions";
import WeightGraph from "../components/WeightGraph";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

type PageProps = {
  params: Promise<{ catId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { catId } = await params;

  return (
    <Card className="h-full">
      <CardHeader>
        <WeightActions catId={catId} />
      </CardHeader>
      <CardContent>
        <WeightGraph />
      </CardContent>
    </Card>
  );
}

import { Suspense } from "react";
import WeightActions from "../components/WeightActions";

type PageProps = {
  params: Promise<{ catId: string }>;
};

export default async function Page({ params }: PageProps) {
  const { catId } = await params;

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <WeightActions catId={catId} />
    </Suspense>
  );
}

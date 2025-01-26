import WeightActions from "./components/WeightActions";
import WeightGraph from "./components/WeightGraph";

export default function Page() {
  return (
    <main className="h-full">
      <WeightActions />
      <WeightGraph />
    </main>
  );
}
